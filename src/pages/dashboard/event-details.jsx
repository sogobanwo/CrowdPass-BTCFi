import React, { useState } from "react";
import Layout from "../../Components/dashboard/layout";
import { Card } from "../../Components/shared/card";
import { MapPinIcon, User } from "lucide-react";
import { epochToDatetime } from "datetime-epoch-conversion";
import {
  useWeb3ModalAccount,
  useWeb3ModalProvider,
} from "@web3modal/ethers/react";
import { ethers } from "ethers";
import { useParams } from "react-router-dom";
import FacebookShare from "../../Components/dashboard/facebook-share";
import TwitterShare from "../../Components/dashboard/twitter-share";
import LinkedINShare from "../../Components/dashboard/linkedin-share";
import { Button } from "../../Components/shared/button";
import CreateEventTicket from "../../Components/dashboard/create-ticket-dialogue";
import CancelEvent from "../../Components/dashboard/cancel-event-dialogue";
import MintPOAP from "../../Components/dashboard/mint-poap-dialogue";
import BuyTicketDialogue from "../../Components/dashboard/buy-ticket-dialogue";
import useGetAllEvents from "../../Functions/useGetAllEvents";
import useGetEventTicketSupply from "../../Functions/useGetEventTicketSupply";
import useGetEventDetails from "../../Functions/useGetEventDetails"


const EventDetails = () => {
  const events = useGetAllEvents();
  console.log(events);
  const param = useParams();
  const eventid = param.id;
  console.log(eventid);
  let event;
  let startTime,
    endTime,
    eventId,
    eventAddress,
    eventName,
    organizer,
    description;

  if (!events.loading) {
    event = events.data.find((event) => event.eventId === Number(eventid));
    if (event) {
      startTime = event.startTime;
      eventId = event.eventId;
      endTime = event.endTime;
      eventName = event.eventName;
      organizer = event.organizer;
      eventAddress = event.eventAddress;
      description = event.description;
    }
  }
  
  const evented = useGetEventDetails(eventid)

  console.log(event);
  const {id} = useParams()

  const ticketSupply = useGetEventTicketSupply(id)

  const { address } = useWeb3ModalAccount();
 
  const startDateResponse = epochToDatetime(startTime);
  const endDateResponse = epochToDatetime(endTime);

  return (
    <Layout>
      <Card className="shadow-2xl my-4 rounded-xl">
        <div className="flex flex-col mx-10 mt-10">
          <section className="rounded-2xl relative w-full h-[200px] sm:h-[300px] lg:h-[350px] overflow-hidden">
            <img
              src="/assets/about-image-podcast.jpg"
              className="absolute inset-0 w-full h-[200px] sm:h-[300px] lg:h-[350px] object-cover "
            />
            <div className="absolute inset-0 bg-black/50 z-10 flex pb-4 px-6 justify-between" />
            <div className="flex z-50  gap-5 h-[200px] sm:h-[300px] lg:h-[350px]">
              <div className="flex flex-col justify-between p-5">
                <div className="flex z-50 gap-5">
                  <CreateEventTicket organizer={organizer} eventid={eventid} />
                  <CancelEvent organizer={organizer} eventid={eventid}/>
                  <MintPOAP organizer={organizer} eventid={eventid} />
                  <BuyTicketDialogue organizer={organizer} eventid={eventid} />
                </div>
                <div className="z-50 flex flex-col gap-2">
                  <h1 className="font-bold text-[#fff] w-full text-xl md:text-4xl mb-6">
                    {eventName}
                  </h1>
                  <p className="text-[#fff] text-sm font-semibold">
                    Host by: {organizer}
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="rounded-full">
                      <User className="text-[#777D7F] " />
                    </div>
                    <h1 className="text-lg md:text-xl  text-[#fff] md:font-semibold">
                      {organizer}
                    </h1>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPinIcon className="text-[#777D7F] " />
                    <div className=" text-[#fff] md:font-semibold text-lg md:text-xl">
                      {eventAddress}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div className="flex md:flex-row flex-col my-4 text-[#777D7F]">
            <div className="flex gap-3 w-full">
              <div className="p-4 md:w-[58%] md:mx-[1%]">
                <div>
                  <div className="mb-4">
                    <h1 className="text-xl  font-bold mb-2">Description</h1>
                    <p className=" text-base font-normal">{description}</p>
                  </div>
                  <div className="mb-4">
                    <h1 className="text-xl font-bold mb-2">Date & Time</h1>
                    <p className="text-xl font-normal mb-2">
                      {`${startDateResponse.dateTime} - ${endDateResponse.dateTime}`}
                    </p>
                  </div>
                  <div className="mb-4">
                    <h1 className="text-xl text-[#777D7F] font-bold mb-2">
                      Tags
                    </h1>
                    <div className="text-[#777D7F] flex gap-4">
                      <Button variant="outline">Music</Button>
                      <Button variant="outline">Family</Button>
                      <Button variant="outline">Free</Button>
                    </div>
                  </div>
                  <div className="mb-4">
                    <h1 className="text-xl font-bold mb-2">
                      Share with Friends
                    </h1>
                    <div className="flex gap-4">
                      <FacebookShare />
                      <TwitterShare />
                      <LinkedINShare />
                    </div>
                  </div>
                </div>
                <div></div>
              </div>
              {address == organizer ? (
                <Card className="shadow-2xl p-4 mdl:w-auto msl:mx-[1%]">
                  <div className="bg-deepBlue text-[#777D7F] border border-[#777D7F] w-full rounded-2xl p-6">
                    <h1 className="mb-3">My Event Analysis</h1>
                    <div className="flex justify-between">
                      <div>
                        <div>
                          <small className="text-[10px]">Expected guests</small>
                          <h1 className="text-2xl">{ticketSupply.data}</h1>
                        </div>
                      </div>
                      <div>
                        <div>
                          <small className="text-[10px]">
                            No. of ticket sold
                          </small>
                          <h1 className="text-2xl">{evented.data.soldTickets}</h1>
                        </div>
                      </div>
                      <div>
                        <div>
                          <small className="text-[10px]">
                            Available Tickets
                          </small>
                          <h1 className="text-2xl">
                            {ticketSupply.data - evented.data.soldTickets}
                          </h1>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-between my-5">
                      <p>Ticket Sales</p>
                      <p>Last 7 days</p>
                    </div>
                    <div className="border-b-[1px]">
                      <img
                        src={"/assets/chart-graphic.png"}
                        alt="chart"
                        width={"350"}
                        height={"250"}
                      />
                    </div>
                    <ul className="flex justify-between text-sm">
                      <li>S</li>
                      <li>M</li>
                      <li>T</li>
                      <li>W</li>
                      <li>T</li>
                      <li>F</li>
                      <li>S</li>
                    </ul>
                  </div>
                </Card>
              ) : (
                <div className="p-4 md:w-[38%] msl:mx-[1%]">
                  <h1 className="text-xl font-medium mb-5">Event Location</h1>
                  <img
                    src={"/assets/Basemap-image.png"}
                    alt=""
                    width={440}
                    height={270}
                    className="mb-5"
                  />
                  <h1 className="text-xl font-normal mb-2">{eventAddress}</h1>
                </div>
              )}
            </div>
          </div>
        </div>
      </Card>
    </Layout>
  );
};

export default EventDetails;
