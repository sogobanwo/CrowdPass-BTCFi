import { useState, useEffect } from "react";
import { getFactoryContract } from "../constants/contracts";
import { readOnlyProvider } from "../constants/providers";

const useGetEventDetails = (id) => {
  const [data, setData] = useState({loading: true, data:{}});

  useEffect(() => {
    let arrangedDetails;
     (async () => {
      try {
        const contract = getFactoryContract(readOnlyProvider);
        let eventDetails = await contract.getEventDetails(id)
        console.log(eventDetails)
         arrangedDetails = {
            id: Number(eventDetails[0]),
            organizer: eventDetails[1],
            name: eventDetails[2],
            description: eventDetails[3],
            location: eventDetails[4],
            date: eventDetails[5],
            startTime: eventDetails[6],
            endTime: eventDetails[7],
            virtualEvent: eventDetails[8],
            privateEvent: eventDetails[9],
            totalTickets: Number(eventDetails[10]),
            soldTickets: Number(eventDetails[11]),
            isCancelled: eventDetails[12]
        }
    } catch (error) {
        console.error(error);
      } finally {
        setData({loading: false, data: arrangedDetails});
      }
    })();
    console.log(data)
}, []);
return data

};

export default useGetEventDetails;