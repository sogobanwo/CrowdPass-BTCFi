import factoryAbi from "../constants/factoryAbi.json"
import multicallAbi from "../constants/multicall.json";
import { ethers } from "ethers";
import { readOnlyProvider } from "../constants/providers";
import { useEffect, useState } from "react";
import { getFactoryContract } from "../constants/contracts";
import { useWeb3ModalAccount } from "@web3modal/ethers/react";

const useGetAllUserTicket = () => {
    const [data, setData] = useState({ loading: true, data: [] });
    const [data2, setData2] = useState({ loading: true, data: [] });
    const { address } = useWeb3ModalAccount();
    const [ticketOwned, setTicketOwned] = useState({ loading: true, data: [] });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const contract = getFactoryContract(readOnlyProvider);
                const itf = new ethers.Interface(factoryAbi);
                const allEvents = await contract.getAllEvents();
                const numberOfCalls = allEvents.length;
                let calls = [];
                for (let i = 0; i < numberOfCalls; i++) {
                    calls.push({
                        target: import.meta.env.VITE_FACTORY_CONTRACT_ADDRESS,
                        callData: itf.encodeFunctionData("balanceOfTickets", [i, address, 1]),
                    });
                }
                const multicall = new ethers.Contract(
                    import.meta.env.VITE_MULTICALL_CONTRACT_ADDRESS,
                    multicallAbi,
                    readOnlyProvider
                );
                const callResults = await multicall.tryAggregate.staticCall(false, calls);
                const validResponses = callResults.filter((x) => x[0]);
                const tickets = validResponses.map((x) => itf.decodeFunctionResult("balanceOfTickets", x[1])[0]);
                setData({ loading: false, data: tickets });
            } catch (error) {
                console.error("Error fetching user tickets:", error);
                setData({ loading: false, data: [] });
            }
        };

        fetchData();
    }, [address]);

    useEffect(() => {
        const fetchData2 = async () => {
            try {
                const contract = getFactoryContract(readOnlyProvider);

                const itf = new ethers.Interface(factoryAbi);
    
                const allEvents = await contract.getAllEvents()
    
                const numberOfCalls = allEvents.length
    
                let calls =[]
    
                for (let i = 0; i < Number(numberOfCalls); i++) {
                    calls.push({
                        target: import.meta.env.VITE_FACTORY_CONTRACT_ADDRESS,
                        callData: itf.encodeFunctionData("getEventDetails", [i]),
                    })
                }
    
                const multicall = new ethers.Contract(
                    import.meta.env.VITE_MULTICALL_CONTRACT_ADDRESS,
                    multicallAbi,
                    readOnlyProvider
                );
    
                const callResults = await multicall.tryAggregate.staticCall(
                    false,
                    calls
                );
    
                const validResponsesIndex = [];
    
                const validResponses = callResults.filter((x, i) => {
                    if (x[0] === true) {
                        validResponsesIndex.push(i);
                        return true;
                    }
                    return false;
                });
    
                const decodedResponses = validResponses.map((x) =>
                    itf.decodeFunctionResult("getEventDetails", x[1])
                );
    
                let prop= [];
    
                for (let i=0; i<decodedResponses.length; i++){
                    const obj = decodedResponses[i][0];
                    prop.push({
                         eventId: Number(obj.eventId),
                         organizer: obj.organizer,
                         eventName: obj.eventName,
                         description: obj.description,
                         eventAddress: obj.eventAddress,
                         date: Number(obj.date),
                         startTime: Number(obj.startTime),
                         endTime: Number(obj.endTime),
                         virtualEvent: obj.virtualEvent,
                         privateEvent: obj.privateEvent,
                         totalTickets: Number(obj.totalTickets),
                         soldTickets: Number(obj.soldTickets),
                         isCancelled: obj.isCancelled,
                    })
                }
    
                setData2({loading:false, data: prop})
            } catch (error) {
                console.error("Error fetching event details:", error);
                setData2({ loading: false, data: [] });
            }
        };

        fetchData2();
    }, [data]);

    useEffect(() => {
        const updateOwnedTickets = () => {
            let ownedTickets = [];
            for (let i = 0; i < data.data.length; i++) {
                if (data.data[i] === 1n) {
                    ownedTickets.push(data2.data[i]);
                }
            }
            setTicketOwned({ loading: false, data: ownedTickets });
        };

        if (!data.loading && !data2.loading) {
            updateOwnedTickets();
        }
    }, [data, data2]);
    console.log(data2)
    console.log(ticketOwned);
    return ticketOwned;
};

export default useGetAllUserTicket;
