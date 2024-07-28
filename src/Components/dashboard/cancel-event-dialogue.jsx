import React from "react";
import { Button } from "../shared/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../shared/dialog";
import { Formik } from "formik";
import toast from "react-hot-toast";
import {
  useWeb3ModalAccount,
  useWeb3ModalProvider,
} from "@web3modal/ethers/react";
import { ethers } from "ethers";

const CancelEvent = ({organizer}) => {
  const { address } = useWeb3ModalAccount();
  const { walletProvider } = useWeb3ModalProvider();
  const provider = new ethers.BrowserProvider(walletProvider);
  return (
    <Dialog>
      {address === organizer ? (
        <DialogTrigger className=" rounded-lg font-medium bg-deep-blue text-primary hover:text-deep-blue py-2 hover:bg-primary px-6">        
          Cancel Event
        </DialogTrigger>
      ) : (
        ""
      )}
      <DialogContent className="flex justify-center items-center bg-base-white">
        <DialogHeader>
          <DialogTitle>
            Are you sure you want to cancel this event?{" "}
          </DialogTitle>
          <DialogDescription>
            <Formik
              initialValues={{
                organizer: address,
              }}
              onSubmit={async (values, { setSubmitting }) => {
                setSubmitting(true);
                const toast1 = toast.loading("Cancelling events");
                const formData = new FormData();
                formData.append("organizer", values.organizer);
                try {
                  const signer = await provider.getSigner();
                  const signature = await signer.signMessage(
                    JSON.stringify(values)
                  );
                  const response = await axiosInstance.patch(
                    `/events/${eventId}/cancel-event`,
                    formData
                  );
                  toast.remove(toast1);
                  toast.success("Event Cancelled");
                  console.log(response.data.data);
                  console.log(values);
                  console.log(formData);
                } catch (error) {
                  toast.remove(toast1);
                  toast.error("Error cancelling events");
                  console.log(error);
                }
              }}
            >
              {({ handleSubmit, isSubmitting }) => (
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div>
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-deep-blue text-primary hover:bg-primary hover:text-deep-blue w-full"
                    >
                      {isSubmitting ? "Cancelling Events..." : "Cancel Event"}
                    </Button>
                  </div>
                </form>
              )}
            </Formik>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default CancelEvent;
