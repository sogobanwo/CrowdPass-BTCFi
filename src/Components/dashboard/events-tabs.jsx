import React, { useState, useEffect } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import EventDetailsCard from "../dashboard/event-details-cards";
import { useWeb3ModalAccount } from "@web3modal/ethers/react";
import { Button } from "../shared/button";
import { Link } from "react-router-dom";
import useGetAllUserTicket from "../../Functions/useGetAllUserTicket";

const EventTabs = ({ pageTabs, data }) => {
  const [tabIndex, setTabIndex] = useState(0);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const { address } = useWeb3ModalAccount();
  const attendingEvent = useGetAllUserTicket()

  useEffect(() => {
    if (pageTabs[tabIndex] === "Hosting") {
      setFilteredEvents(data.filter((event) => event.organizer === address));
    } else if (pageTabs[tabIndex] === "Attending") {
      setFilteredEvents(attendingEvent.data);
    } else {
      setFilteredEvents([]);
    }
  }, [pageTabs, tabIndex, data, address]);

  return (
    <Tabs
      selectedIndex={tabIndex}
      onSelect={(index) => setTabIndex(index)}
      className="ml-3 md:w-3/5 whitespace-no-wrap"
    >
      <TabList className="flex gap-3 mb-2 overflow-x-auto md:w-full text-deep-blue mt-3">
        {pageTabs.map((pageTab, index) => (
          <Tab key={index} className={"text-deep-blue"}>
            <Button variant="outline" active={true} className="w-[140px] text-deep-blue border-deep-blue">{pageTab}</Button>
          </Tab>
        ))}
      </TabList>
      {pageTabs.map((pageTab, index) => (
        <TabPanel key={index}>
          <div className="h-[510px] overflow-y-scroll">
            {filteredEvents.length > 0 ? (
              filteredEvents.map((event, index) => (
                <EventDetailsCard key={index} event={event} />
              ))
            ) : (
              <>
                {tabIndex === 0 ? (
                  <div className="w-full h-full flex flex-col gap-8 justify-center items-center">
                    <h1 className="text-2xl text-deep-blue">
                      You have not created any event
                    </h1>
                    <Link to="/create-event">
                      <Button className="text-primary hover:text-deep-blue bg-deep-blue ">
                        Create Event
                      </Button>
                    </Link>
                  </div>
                ) : (
                  <div className="w-full h-full flex flex-col gap-8 justify-center items-center">
                    <h1 className="text-2xl text-deep-blue">
                      Explore events to attend
                    </h1>
                    <Link to="/events">
                      <Button className="text-primary hover:text-deep-blue bg-deep-blue">
                        Explore Events
                      </Button>
                    </Link>
                  </div>
                )}
              </>
            )}
          </div>
        </TabPanel>
      ))}
    </Tabs>
  );
};

export default EventTabs;