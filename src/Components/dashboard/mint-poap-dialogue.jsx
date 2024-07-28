import React, {useState} from 'react'
import { Button } from '../shared/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '../shared/dialog';
import { Field, Formik } from "formik";
import toast from "react-hot-toast";
import { useWeb3ModalAccount, useWeb3ModalProvider } from "@web3modal/ethers/react";
import { ethers } from "ethers";
import axiosInstance from '../../helpers/AxiosConfig';


const MintPOAP = ({organizer, eventid}) => {
    const [formStep, setFormStep] = useState(0)
    const [email, setEmail] = useState("")
    const [qrLink, setQrLink] = useState("")
    const { address } = useWeb3ModalAccount();
    const { walletProvider } = useWeb3ModalProvider();
    const provider = new ethers.BrowserProvider(walletProvider);
  return (
    <Dialog>
    {address === organizer ? <DialogTrigger className=" rounded-lg font-medium bg-deep-blue text-primary hover:text-deep-blue hover:bg-primary py-2 px-6">Mint POAP</DialogTrigger> : ''}
    {(() => {
      {
        switch (formStep) {
          case 0:
            // Render step 0 content
            return <DialogContent className="flex justify-center items-center bg-base-white">
              <DialogHeader>
                <DialogTitle>Claim POAP</DialogTitle>
                {<DialogDescription>
                  <Formik
                    initialValues={{
                      email: "",
                      ticketId: 1,
                    }}
                    onSubmit={async (values, { setSubmitting }) => {
                      setSubmitting(true);
                      const formData = new FormData();
                      formData.append("email", values.email);
                      formData.append("ticketId", values.ticketId);
                      const toast1 = toast.loading("minting POAP")
                      try {
                        const signer = await provider.getSigner();
                        const signature = await signer.signMessage(JSON.stringify(values))
                        const response = await axiosInstance.post(`/events/${eventid}/cliam`, formData);
                        toast.remove(toast1)
                        const toast2 = toast.success("secret code sent to your mail")
                        if (toast2) {
                          setFormStep(1)
                          setEmail(values.email)
                        }
                        console.log(response.data.data)
                        console.log(values)
                        console.log(formData);
                      } catch (error) {
                        toast.remove(toast1)
                        toast.error("You have not purchased a ticket")
                        console.log(error);
                      }
                    }}
                  >
                    {({ values, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
                      <form className="space-y-4" onSubmit={handleSubmit}>
                        <div>
                          <label htmlFor="links" className="text-deep-blue">
                            User email
                          </label>
                          <Field
                            as="input"
                            className="w-full font-mono mb-6 p-2 border"
                            name="email"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder="Enter user's email"
                            value={values.email}
                          />
                          <Button
                            type="submit"
                            disabled={isSubmitting}
                            className="bg-deep-blue text-white w-full"
                          >
                            {isSubmitting ? "Submitting email... " : "Submit"}
                          </Button>
                        </div>
                      </form>
                    )}
                  </Formik>
                </DialogDescription>}
              </DialogHeader>
            </DialogContent>
              ;
          case 1:
            // Render step 1 content
            return <DialogContent className="flex justify-center items-center">
              <DialogHeader>
                <DialogTitle>Claim POAP</DialogTitle>
                {qrLink === "" ? <DialogDescription>
                  <Formik
                    initialValues={{
                      email: email,
                      secretCode: "",
                    }}
                    onSubmit={async (values, { setSubmitting }) => {
                      setSubmitting(true);
                      const formData = new FormData();
                      formData.append("email", values.email);
                      formData.append("secretCode", values.secretCode);
                      const toast1 = toast.loading("Veryfying your mail")
                      try {
                        const signer = await provider.getSigner();
                        const signature = await signer.signMessage(JSON.stringify(values))
                        const response = await axiosInstance.post(`/events/${eventId}/verify-cliam`, formData);
                        setQrLink(response.data.data)
                        toast.remove(toast1)
                        const toast2 = toast.success("Email Verified")
                        console.log(response.data.data)
                        console.log(qrLink)
                        console.log(values)
                        console.log(formData);
                      } catch (error) {
                        toast.remove(toast1)
                        toast.error("Email couldn't be verified")
                        console.log(error);
                      }
                    }}
                  >
                    {({ values, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
                      <form className="space-y-4" onSubmit={handleSubmit}>
                        <div>
                          <label htmlFor="links" className="text-deep-blue">
                            Secret Code
                          </label>
                          <Field
                            as="input"
                            className="w-full font-mono mb-6 p-2 border"
                            name="secretCode"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder="Enter user's secretCode"
                            value={values.secretCode}
                          />
                          <Button
                            type="submit"
                            disabled={isSubmitting}
                            className="bg-deep-blue text-white w-full"
                          >
                            {isSubmitting ? "Verifying email... " : "Verify"}
                          </Button>
                        </div>
                      </form>
                    )}
                  </Formik>
                </DialogDescription> : <QRCode bgColor="white" fgColor="black" value={qrLink} />}
              </DialogHeader>
            </DialogContent>
              ;
          default:
            // Render default content or error message
            return <DialogContent className="flex justify-center items-center">
              <DialogHeader>
                <DialogTitle>Claim POAP</DialogTitle>
                {<DialogDescription>
                  <Formik
                    initialValues={{
                      email: "",
                      ticketId: 1,
                    }}
                    onSubmit={async (values, { setSubmitting }) => {
                      setSubmitting(true);
                      const formData = new FormData();
                      formData.append("email", values.email);
                      formData.append("ticketId", values.ticketId);
                      const toast1 = toast.loading("minting POAP")
                      try {
                        const signer = await provider.getSigner();
                        const signature = await signer.signMessage(JSON.stringify(values))
                        const response = await axiosInstance.post(`/events/${eventId}/cliam`, formData);
                        setQrLink(response.data.data)
                        toast.remove(toast1)
                        toast.success("secret code sent to your mail")
                        console.log(response.data.data)
                        console.log(values)
                        console.log(formData);
                      } catch (error) {
                        toast.remove(toast1)
                        toast.error("You have not purchased a ticket")
                        console.log(error);
                      }
                    }}
                  >
                    {({ values, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
                      <form className="space-y-4" onSubmit={handleSubmit}>
                        <div>
                          <label htmlFor="links" className="text-deep-blue">
                            User email
                          </label>
                          <Field
                            as="input"
                            className="w-full font-mono mb-6 p-2 border"
                            name="email"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder="Enter user's email"
                            value={values.email}
                          />
                          <Button
                            type="submit"
                            disabled={isSubmitting}
                            className="bg-deep-blue text-white w-full"
                          >
                            {isSubmitting ? "Submitting email... " : "Submit"}
                          </Button>
                        </div>
                      </form>
                    )}
                  </Formik>
                </DialogDescription>}
              </DialogHeader>
            </DialogContent>;
        }


      }
    })()}

  </Dialog>  )
}

export default MintPOAP