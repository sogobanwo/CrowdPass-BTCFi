import { useWeb3ModalAccount } from "@web3modal/ethers/react";
import { useState, useEffect } from "react";
import { getFactoryContract } from "../constants/contracts";
import { readOnlyProvider } from "../constants/providers";

const useGetEventTicketSupply = (id) => {
  const [data, setData] = useState({loading: true, data: 0});

  useEffect(() => {
    let ticketDetails;
     (async () => {
      try {
        const contract = getFactoryContract(readOnlyProvider);
        let ticketDetails = await contract.totalSupplyAllTickets(id)
        console.log(ticketDetails)
        setData({loading: false, data: Number(ticketDetails)});
    } catch (error) {
        console.error(error);
      } finally {
        // setData({loading: false, data: ticketDetails});
      }
    })();
    console.log(data)
}, []);
return data

};

export default useGetEventTicketSupply;