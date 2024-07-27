import { useWeb3Modal, useWeb3ModalAccount } from "@web3modal/ethers/react";
import { Button } from "../Components/shared/button";
import { configureWeb3Modal } from "../connection";

export default function ConnectButton() {
  configureWeb3Modal();
  const { open } = useWeb3Modal();
  const { isConnected } = useWeb3ModalAccount();

  return (
    <>
      {isConnected ? (
        <w3m-button />
      ) : (
        <Button
          onClick={() => open()}
          variant={"outline"}
          className=" text-deep-blue border-deep-blue px-6 hover:text-primary hover:bg-deep-blue"
          translate="no"
        >
          Connect Wallet
        </Button>
      )}
    </>
  );
}
