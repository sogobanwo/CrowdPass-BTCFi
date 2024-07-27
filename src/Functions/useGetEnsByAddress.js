import { useWeb3ModalAccount } from "@web3modal/ethers/react";
import { useState, useEffect } from "react";
import { getFactoryContract } from "../constants/contracts";
import { readOnlyProvider } from "../constants/providers";

const useGetENSByAddress = () => {
  const { address } = useWeb3ModalAccount();
  const [data, setData] = useState({loading: true, data:{}});


  useEffect(() => {
     (async () => {
        let isRegistered
      try {
        const contract = getFactoryContract(readOnlyProvider);
        isRegistered = await contract.getENSByAddress(address)
    } catch (error) {
        console.error(error);
      } finally {
        setData({loading: false, data: isRegistered});
      }
    })();
    console.log(data)
}, [address]);
return data

};

export default useGetENSByAddress;