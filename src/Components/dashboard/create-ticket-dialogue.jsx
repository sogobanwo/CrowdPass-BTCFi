import React from 'react'
import { Button } from '../shared/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '../shared/dialog';
import { Field, Formik } from "formik";
import toast from "react-hot-toast";
import { useWeb3ModalAccount, useWeb3ModalProvider } from "@web3modal/ethers/react";
import { ethers } from "ethers";

const CreateEventTicket = ({organizer}) => {
    const { address } = useWeb3ModalAccount()
    const { walletProvider } = useWeb3ModalProvider()
    const provider = new ethers.BrowserProvider(walletProvider)
  return (
    <Dialog>
    {address === organizer ? <DialogTrigger className=" rounded-lg font-medium bg-deep-blue text-primary hover:text-deep-blue py-2 hover:bg-primary px-6">Create Tickets
    </DialogTrigger> : ''}
    <DialogContent className="flex justify-center items-center bg-base-white">
      <DialogHeader>
        <DialogTitle>Create your event ticket</DialogTitle>
        <DialogDescription>
          <Formik
            initialValues={{
              quantity: 0,
              ticketId: 1,
              organizer: address,
              price: 1,
            }}
            onSubmit={async (values, { setSubmitting }) => {
              setSubmitting(true);
              const toast1 = toast.loading('Creating Ticket')
              const formData = new FormData();
              formData.append("quantity", values.quantity);
              formData.append("ticketId", values.ticketId);
              formData.append("organizer", values.organizer);
              formData.append("price", values.price)
              try {
                const signer = await provider.getSigner();
                const signature = await signer.signMessage(JSON.stringify(values))
                const response = await axiosInstance.post(`/events/${eventId}/create-event-ticket`, formData);
                toast.remove(toast1)
                toast.success("Tickets Created")
                console.log(response.data.data)
                console.log(values)
                console.log(formData);
              } catch (error) {
                toast.remove(toast1)
                toast.error("TError creating ticket")
                console.log(error);
              }
            }}
          >
            {({ values, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="links" className="text-deep-blue">
                    Ticket Quantity
                  </label>
                  <Field
                    as="input"
                    className="w-full font-mono p-2 mb-6 border"
                    type="number"
                    name="quantity"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Enter user's address"
                    value={values.quantity}
                  />

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-deep-blue text-primary hover:bg-primary hover:text-deep-blue w-full"
                  >
                    {isSubmitting ? "Creating tickets..." : "Create ticket"}
                  </Button>
                </div>
              </form>
            )}
          </Formik>
        </DialogDescription>
      </DialogHeader>
    </DialogContent>
  </Dialog> 
  )
}

export default CreateEventTicket