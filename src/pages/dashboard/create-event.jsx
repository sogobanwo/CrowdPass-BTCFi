import React, { useState, useRef} from "react";
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

const CreateEvent = () => {
  const fileRef = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    city: "",
    country: "",
    category: "",
    type: "",
    startTime: "",
    endTime: "",
    description: "",
    banner: "",
  });

  const inputChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

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
          <CardContent className="grid gap-6">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2 flex flex-col">
                <label htmlFor="name" className="text-deep-blue">
                  Event Name
                </label>
                <input
                  id="name"
                  placeholder="Input event name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={inputChange}
                />
              </div>
              <div className="space-y-2 flex flex-col">
                <label htmlFor="email" className="text-deep-blue">
                  Email
                </label>
                <input
                  id="email"
                  placeholder="Input event name"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={inputChange}
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2 flex flex-col">
                <label htmlFor="ticket-price" className="text-deep-blue">
                  City
                </label>
                <input
                  id="city"
                  type="text"
                  placeholder="Lagos"
                  name="city"
                  value={formData.city}
                  onChange={inputChange}
                />
              </div>
              <div className="space-y-2 flex flex-col">
                <label htmlFor="ticket-price" className="text-deep-blue">
                  Country
                </label>
                <input
                  id="country"
                  type="text"
                  placeholder="Lagos"
                  name="country"
                  value={formData.country}
                  onChange={inputChange}
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2 flex flex-col">
                <label htmlFor="event-category" className="text-deep-blue">
                  Event Category
                </label>
                <select
                  id="event-caregory"
                  name="type"
                  value={formData.category}
                  onChange={inputChange}
                >
                  <option value="free">Free</option>
                  <option value="paid">Paid</option>
                  <option value="private">Private</option>
                </select>
              </div>
              <div className="space-y-2 flex flex-col">
                <label htmlFor="event-type" className="text-deep-blue">
                  Event Type
                </label>
                <select
                  id="event-type"
                  name="type"
                  value={formData.type}
                  onChange={inputChange}
                >
                  <option value="physical">Physical</option>
                  <option value="virtual">Virtual</option>
                </select>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2 flex flex-col">
                <label htmlFor="start-date" className="text-deep-blue">
                  Start Date
                </label>
                <input
                  type="datetime-local"
                  name="startTime"
                  value={formData.startTime}
                  onChange={inputChange}
                />
              </div>
              <div className="space-y-2 flex flex-col">
                <label htmlFor="start-date" className="text-deep-blue">
                  End Date
                </label>
                <input
                  type="datetime-local"
                  name="endTime"
                  value={formData.endTime}
                  onChange={inputChange}
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2 flex flex-col">
                <label htmlFor="start-date" className="text-deep-blue">
                  Event Description
                </label>
                <textarea
                  name="description"
                  placeholder="Describe your event..."
                  value={formData.description}
                  onChange={inputChange}
                />
              </div>
              <div className="space-y-2 flex flex-col">
                <label htmlFor="start-date" className="text-deep-blue">
                  Poap Image
                </label>
                <input
                  type="file"
                  name="banner"
                  accept="image/*"
                  ref={fileRef}
                  onChange={(event) => {
                    const file = event.target.files[0];
                    handleChange({
                      target: {
                        name: "banner",
                        value: file, // Pass the file object itself
                      },
                    });
                  }}
                  value={formData.banner}
                />
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-end">
            <Button className="text-primary hover:text-deep-blue bg-deep-blue ">
              Create Event
            </Button>
          </CardFooter>
        </Card>
      </div>
    </Layout>
  );
};

export default CreateEvent;
