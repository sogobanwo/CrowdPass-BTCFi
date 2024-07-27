
import { ethers } from "ethers";
import factoryAbi from "../constants/factoryAbi.json"
import multicallAbi from "../constants/multicall.json";
import { readOnlyProvider } from "../constants/providers";
import { useEffect, useState } from "react";
import { getFactoryContract } from "../constants/contracts";

const useGetAllEvents = () => {
    
    const [data, setData] = useState({loading: true, data:[]});
    
    useEffect(() => {

        (async () => {

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

            setData({loading:false, data: prop})
        })();

    }, []);
    return data;
};

export default useGetAllEvents;