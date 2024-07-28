import axios from "axios";
import React, { useState } from "react";
import useENSRegistration from "../../Functions/useRegisterENS";
import { useWeb3ModalAccount } from "@web3modal/ethers/react";
import { useNavigate } from "react-router-dom";
import useGetENSByAddress from "../../Functions/useGetEnsByAddress";

const EnsRegistration = () => {
  const navigate = useNavigate();
  const [files, setFiles] = useState();
  const [ensName, setEnsName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [imageUri, setImageUri] = useState("");
  const { address } = useWeb3ModalAccount();
  const { loading, data } = useGetENSByAddress();

  const register = useENSRegistration();
  const uploadImageToIPFS = async () => {
    try {
      const formData = new FormData();
      formData.append("file", files);

      const response = await axios.post(
        "https://api.pinata.cloud/pinning/pinFileToIPFS",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            pinata_api_key: import.meta.env.VITE_PINATA_API_KEY,
            pinata_secret_api_key: import.meta.env.VITE_API_SECRET_KEY,
          },
        }
      );
      const cid = response.data.IpfsHash;
      setImageUri(cid);
      return cid;
    } catch (error) {}
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const cid = await uploadImageToIPFS();
      await register.create(address, ensName, cid);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="bg-hero-image w-screen h-screen bg-cover">
        <div className="bg-gray-950/90 z-10 w-screen h-screen ">
          <div className="z-20 px-[2.5%] flex flex-col items-center justify-center py-10 lg:px-[5%] gap-10 w-screen h-screen ">
            <div className="border border-gray-200 rounded-lg shadow p-[2rem] w-full max-w-sm bg-base-white  ">
              <input
                aria-describedby="file_input_help"
                id="file_input"
                type="file"
                onChange={(e) => setFiles(e.target.files[0])}
                hidden
              />

              <div className="mb-[2rem]">
                <div className="relative w-20 h-20 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600 ml-[auto] mr-[auto]">
                  {files ? (
                    <img
                      src={URL.createObjectURL(files)}
                      className="w-full h-full object-cover rounded-lg"
                      alt="Selected File"
                    />
                  ) : (
                    <label
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      htmlFor="file_input"
                    >
                      <svg
                        className="absolute w-15 h-13 text-gray-400 -left-1 cursor-pointer"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </label>
                  )}
                </div>
                {files ? (
                  ""
                ) : (
                  <p className="text-center mt-[1rem]">Upload Image</p>
                )}
              </div>

              <form onSubmit={handleSubmit}>
                <div>
                  <label
                    htmlFor="first_name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    ENS Name
                  </label>
                  <input
                    type="email"
                    id="first_name"
                    value={ensName}
                    onChange={(e) => setEnsName(e.target.value)}
                    className="bg-gray-50 border font-mono border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="example@gmail.com"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="focus:outline-none text-primary bg-deep-blue hover:bg-primary hover:text-deep-blue font-medium rounded-lg text-sm px-5 py-2.5 my-[1rem] w-full"
                >
                  Register
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EnsRegistration;
