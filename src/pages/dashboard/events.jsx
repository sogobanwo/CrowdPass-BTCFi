import React, { useState } from "react";
import Layout from "../../Components/dashboard/layout";
import { Button } from "../../Components/shared/button";
import { Plus } from "lucide-react";
import { Link } from "react-router-dom";
import EventCard from "../../Components/dashboard/event-card";
import useGetAllEvents from "../../Functions/useGetAllEvents";
import { TbLoaderQuarter } from "react-icons/tb";

const Events = () => {
  const allEvents = useGetAllEvents();

  const [activeTab, setActiveTab] = useState(0);

  const cancelledEvent = allEvents.data.filter(
    (Item) => Item.isCancelled === true
  );

  const ongoingEvent = allEvents.data.filter(
    (Item) => Item.isCancelled !== true
  );

  console.log(allEvents);
  return (
    <Layout>
      {allEvents.loading ? (
        <section className="w-full h-full fixed top-0 left-0 flex justify-center items-center layoutBg overflow-hidden z-[99999]">
          <h2 className="text-deep-blue font-barlow text-lg md:text-xl flex items-center gap-1">
            <TbLoaderQuarter className="animate-spin text-4xl mr-3" />
            fetching Events...
          </h2>
        </section>
      ) : (
        <>
          <div>
            <div className="flex justify-between items-center">
              <h1 className="text-3xl text-deep-blue font-semibold">
                All Events
              </h1>
              <Link to={"/create-event"}>
                <Button className="bg-deep-blue text-primary px-8 py-6 text-lg flex gap-2 hover:text-deep-blue">
                  <Plus className="text-lg" /> Create Event
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex gap-3 mb-2 px-3 overflow-x-scroll w-screen md:w-full ">
            <Button
              variant="outline"
              className="border-deep-blue text-deep-blue"
              active={true}
              onClick={() => {
                setActiveTab(0);
              }}
            >{`All Events (${allEvents.data.length})`}</Button>
            <Button
              variant="outline"
              className="border-deep-blue text-deep-blue"
              onClick={() => {
                setActiveTab(2);
              }}
            >{`ongoing (${ongoingEvent.length})`}</Button>
            <Button
              variant="outline"
              className="border-deep-blue text-deep-blue"
              onClick={() => {
                setActiveTab(3);
              }}
            >{`canceled (${cancelledEvent.length})`}</Button>
          </div>
          <div className="flex flex-wrap gap-6">
            {activeTab === 0 &&
              allEvents.data.map((event, index) => (
                <EventCard key={index} event={event} />
              ))}
            {activeTab === 2 &&
              ongoingEvent.map((event, index) => (
                <EventCard key={index} event={event} />
              ))}
            {activeTab === 3 &&
              cancelledEvent.map((event, index) => (
                <EventCard key={index} event={event} />
              ))}
          </div>
        </>
      )}
    </Layout>
  );
};

export default Events;
