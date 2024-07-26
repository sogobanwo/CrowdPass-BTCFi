import { ApolloClient, InMemoryCache, gql } from "@apollo/client";


export const getAllEvents = async () => {
    const client = new ApolloClient({
        uri: import.meta.env.VITE_QUERY_URL,
        cache: new InMemoryCache()
    });
    const GET_TRANSFER = gql`
      query{
        eventCreateds(first: 10) {
        id
        eventId
        eventName
        organizer
        }
      }`;

    try {
        const { data } = await client.query({ query: GET_TRANSFER })
        return data.eventCreateds
    } catch (error) {
        console.error("error fetching data", error)
    }
}
//   export const useGetAllEvents = () =>{
//   const { address } = useWeb3ModalAccount();
//   const contract = getFactoryContract(readOnlyProvider);
//   const { walletProvider } = useWeb3ModalProvider();
//   const readWriteProvider = getProvider(walletProvider);

//   const [events, setEvents] = useState({
//     loading: true,
//     data: [],
    
//   });
//   const getEvents = async () => {
//     const sogo = await contract.getAllEvents()
//     console.log(sogo.length)
//       // .getEvent()
//       // .then((res) => {
//       //   const converted = res.map((token) => ({
//       //     name: token.name,
//       //     symbol: token.symbol,
//       //     supply: token.totalSupply,
//       //     description: token.description,
//       //     address: token.contractAdd,
//       //     decimals: token.decimals
//       //   }));
//       //   setEvents({
//       //     loading: false,
//       //     data: converted,
//       //   });
//       // })
//       // .catch((err) => {
//       //   console.error("error fetching proposals: ", err);
//       //   setEvents((prev) => ({ ...prev, loading: false }));
//       // });
//       // console.log(events)
//       // return events
//   };
//   getEvents();
// }
  // useEffect(() => {
  //   const fetchEvents = async () => {
  //     const filter = {
  //       address: import.meta.env.VITE_FACTORY_CONTRACT_ADDRESS,
  //       topics: [ethers.id("FungibleTokenCreated(address,address)")],
  //     };

  //     try {
  //       const events = await readOnlyProvider
  //         .getLogs({
  //           ...filter,
  //           fromBlock: 5726200,
  //         })
  //         .then((events) => {
  //           getEvents();
  //         });
  //     } catch (error) {
  //       console.error("Error fetching logs: ", error);
  //     }

  //     contract.on("FungibleTokenCreated", getEvents);

  //     // Cleanup function
  //     return () => contract.off("FungibleTokenCreated", getEvents);
  //   };

  //   fetchEvents();
  // }, []);

  // return events;


export const getQRLink = async () => {

}

export const getRegisteredEvents = async () => {

}

export const getTicket = async () => {

}

