import React, { useState, useRef } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../Components/shared/card";
import { Button } from "../../Components/shared/button";
import Layout from "../../Components/dashboard/layout";
import toast from "react-hot-toast";
import {
  useWeb3ModalAccount,
  useWeb3ModalProvider,
} from "@web3modal/ethers/react";
import axiosInstance from "../../helpers/AxiosConfig";
import { ethers } from 'ethers';
import { Field, Formik } from "formik";
import {sha256} from 'crypto-hash';


const CreateEvent = () => {
  const fileRef = useRef(null);
  const [preview, setPreview] = useState(null);
  const { walletProvider } = useWeb3ModalProvider();
  const { address } = useWeb3ModalAccount();

  return (
    <Layout>
      <div className="w-full mt-10 flex justify-center items-center">
        <Card className="w-full max-w-2xl shadow-2xl mb-4">
          <CardHeader>
            <CardTitle className="text-deep-blue">Create New Event</CardTitle>
            <CardDescription className="text-deep-blue">
              Fill out the details for your upcoming event.
            </CardDescription>
          </CardHeader>
          <Formik
            initialValues={{
              name: "",
              description: "",
              city: "",
              country: "",
              start_date: new Date(),
              end_date: new Date(),
              expiry_date: new Date(),
              event_url: "https://poap.xyz",
              virtual_event: false,
              img: "",
              email: "",
              event_template_id: 1,
              private_event: false,
              notify_issuer: true,
              requested_codes: 10,
              start_time: "00:00",
              end_time: "00:00",
              // secret_code: "",
              // signature: "",
              organizer: address,
            }}
            onSubmit={async (values, { setSubmitting }) => {
              console.log(values)
              setSubmitting(true);
              const toast1 = toast.loading("Creating Events");
              console.log(values);
              values.secret_code = (await sha256(values.description)).slice(
                0,
                6
              );
              values.expiry_date = values.end_time.split("T")[0];
              values.end_date = values.end_time.split("T")[0];
              values.start_date = values.start_time.split("T")[0];
              const formData = new FormData();
              Object.keys(values).forEach((key) => {
                if (key === "img") {
                  formData.append(key, values[key]); // Append the image file with filename
                } else {
                  formData.append(key, values[key]); // Append other values
                }
              });
              const provider = new ethers.BrowserProvider(walletProvider);
              try {
                const signer = await provider.getSigner();
                const signature = await signer.signMessage(
                  JSON.stringify(values)
                );
                console.log(formData);
                await axiosInstance.post("/events", formData);
                toast.remove(toast1);
                toast.success("Event Created");
                // console.log(formData)
              } catch (error) {
                toast.remove(toast1);
                toast.error("error creating event");
                console.log(error);
              }
            }}
          >
            {({
              values,
              isSubmitting,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
            }) => (
              <form onSubmit={handleSubmit}>
                <CardContent className="grid gap-6">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-2 flex flex-col">
                      <label htmlFor="name" className="text-deep-blue">
                        Event Name
                      </label>
                      <Field
                        type="text"
                        name="name"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.name}
                        placeholder={"input your name"}
                      />
                      <div className="text-red-900 text-sm">
                        {errors.name && touched.name && errors.name}
                      </div>
                    </div>
                    <div className="space-y-2 flex flex-col">
                      <label htmlFor="email" className="text-deep-blue">
                        Email
                      </label>
                      <Field
                        type="email"
                        name="email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                        placeholder={"input your mail"}
                      />
                      <div className="text-red">
                        {errors.email && touched.email && errors.email}
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-2 flex flex-col">
                      <label htmlFor="ticket-price" className="text-deep-blue">
                        City
                      </label>
                      <Field
                        type="text"
                        name="city"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.city}
                        placeholder={"input event city"}
                      />
                      <div className="text-red-900 text-sm">
                        {" "}
                        {errors.city && touched.city && errors.city}
                      </div>
                    </div>
                    <div className="space-y-2 flex flex-col">
                      <label htmlFor="ticket-price" className="text-deep-blue">
                        Country
                      </label>
                      <Field
                        type="text"
                        name="country"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.country}
                        placeholder={"input event country"}
                      />
                      <div className="text-red-900 text-sm">
                        {" "}
                        {errors.country && touched.country && errors.country}
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-2 flex flex-col">
                      <label
                        htmlFor="event-category"
                        className="text-deep-blue"
                      >
                        Event Category
                      </label>
                      <Field
                        as="select"
                        name="eventCategory"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.eventCategory}
                        placeholder={"Describe your event..."}
                      >
                        <option value={false}>Free</option>
                        <option value={false}>Paid</option>
                        <option value={true}>Private</option>
                      </Field>
                    </div>
                    <div className="space-y-2 flex flex-col">
                      <label htmlFor="event-type" className="text-deep-blue">
                        Event Type
                      </label>
                      <Field
                        as="select"
                        name="virtual_event"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.virtual_event}
                      >
                        <option value={false}>Physical</option>
                        <option value={true}>Virtual</option>
                      </Field>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-2 flex flex-col">
                      <label htmlFor="start-date" className="text-deep-blue">
                        Start Date
                      </label>
                      <Field
                        name="start_time"
                        type="datetime-local"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.start_time}
                      />
                    </div>
                    <div className="space-y-2 flex flex-col">
                      <label htmlFor="start-date" className="text-deep-blue">
                        End Date
                      </label>
                      <Field
                        name="end_time"
                        type="datetime-local"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.end_time}
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-2 flex flex-col">
                      <label htmlFor="start-date" className="text-deep-blue">
                        Event Description
                      </label>
                      <Field
                        as="textarea"
                        name="description"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.description}
                        placeholder={"Describe your event..."}
                      />
                      <div className="text-red-900 text-sm">
                        {" "}
                        {errors.description &&
                          touched.description &&
                          errors.description}
                      </div>
                    </div>
                    <div className="space-y-2 flex flex-col">
                      <label htmlFor="start-date" className="text-deep-blue">
                        Poap Image
                      </label>
                      <input
                        type="file"
                        name="img"
                        accept="image/*"
                        ref={fileRef}
                        onChange={(event) => {
                          const file = event.target.files[0];
                          handleChange({
                            target: {
                              name: "img",
                              value: file, // Pass the file object itself
                            },
                          });
                        }}
                        onBlur={handleBlur}
                      />
                      <div className="text-red-900 text-sm"></div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-end">
                  <Button
                    className="text-primary hover:text-deep-blue bg-deep-blue"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Creating Event..." : "Create Event"}
                  </Button>
                </CardFooter>
              </form>
            )}
          </Formik>
        </Card>
      </div>
    </Layout>
  );
};

export default CreateEvent;
