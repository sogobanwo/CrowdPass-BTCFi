import React, { useState } from "react";
import Layout from "../../Components/dashboard/layout";
import DashboardAnalytics from "../../Components/dashboard/dashboard-analytics";
import RecentActivities from "../../Components/dashboard/recent-activities";
import useGetAllPOAPs from "../../Functions/useGetAllPOAP";
import useGetAllEvents from "../../Functions/useGetAllEvents";
import { TbLoaderQuarter } from "react-icons/tb";
import EventTabs from "../../Components/dashboard/events-tabs";
import { useWeb3ModalAccount } from "@web3modal/ethers/react";

const Dashboard = () => {
  const [showCalendar, setShowCalendar] = useState(false);
  // const allEvents = useGetAllEvents()
  // const {data} = useGetAllPOAPs()
  // const attended = data.length
  const { address } = useWeb3ModalAccount();
  // const hosted=allEvents.data.filter((event) => event.organizer === address).length
  // const totalEvent = allEvents.data.length
  const data = [
    {
      organizer: "0xe902aC65D282829C7a0c42CAe165D3eE33482b9f",
      eventName: "Test Event 1",
      eventId: "1",
      eventAddress: "12, Jinadu street, Lagos",
      startTime: "1722097035",
      endTime: "1722097300",
    },
    {
      organizer: "0xe902aC65D282829C7a0c42CAe165D3eE33482b9f",
      eventName: "Test Event 1",
      eventId: "1",
      eventAddress: "12, Jinadu street, Lagos",
      startTime: "1722097035",
      endTime: "1722097300",
    },
  ];

  return (
    <Layout>
      {/* {
        allEvents.loading ?  <section className='w-full h-full fixed top-0 left-0 flex justify-center items-center layoutBg overflow-hidden z-[99999]'>
        <h2 className="text-deep-blue font-barlow text-lg md:text-xl flex items-center gap-1">
            <TbLoaderQuarter className="animate-spin text-4xl mr-3" />
            fetching Events...
        </h2>
    </section>: 
    <> */}
      <DashboardAnalytics
        eventAttended={0}
        eventHosted={0}
        poa={0}
        totalEvents={0}
      />

      <div className="flex gap-2">
        <EventTabs pageTabs={["Hosting", "Attending"]} data={data} />
        <RecentActivities />
      </div>
      {/* </>
    } */}
    </Layout>
  );
};

export default Dashboard;
