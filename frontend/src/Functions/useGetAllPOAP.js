import { useWeb3ModalAccount } from "@web3modal/ethers/react";
import { useState, useEffect } from "react";
import axiosInstance from "../helpers/AxiosConfig";

const useGetAllPOAPs = () => {
  const { address } = useWeb3ModalAccount();
  const [poaps, setPoaps] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPOAPs = async () => {
      try {
        const response = await axiosInstance.get(`/users/poap/${address}`);
        setPoaps(response.data.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchPOAPs();
  }, [address]);

  return { loading, data: poaps };
};

export default useGetAllPOAPs;