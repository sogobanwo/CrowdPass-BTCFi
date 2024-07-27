import React from "react";
import { Link } from "react-router-dom";
import SidebarItem from "./sidebar-item";
import { IoTicket } from "react-icons/io5";
import { TiHome } from "react-icons/ti";
import { FaFolderOpen } from "react-icons/fa";
import { FaAward } from "react-icons/fa6";
import { MdCreateNewFolder } from "react-icons/md";
import { useWeb3ModalAccount } from "@web3modal/ethers/react";
import ConnectButton from "../../Functions/useConnectionHook";

const Sidebar = () => {
  const eventMainSidebarData = [
    {
      url: "/dashboard",
      icon: <TiHome className="w-6 h-6" />,
      title: "Dashboard",
    },
    {
      url: "/events",
      icon: <FaFolderOpen className="w-6 h-6" />,
      title: "Events",
    },
    {
      url: "/create-event",
      icon: <MdCreateNewFolder className="w-6 h-6" />,
      title: "Create event",
    },
    {
      url: "/tickets",
      icon: <IoTicket className="w-6 h-6" />,
      title: "Tickets",
    },
    {
      url: "/poap",
      icon: <FaAward className="w-6 h-6" />,
      title: "POAPs",
    },
  ];
  const { address } = useWeb3ModalAccount();

  return (
    <div className="hidden h-screen w-64 md:block fixed bg-deep-blue">
      <div className="flex flex-col py-2 2xl:py-6 justify-between h-screen">
        <div className="flex flex-col gap-10">
          <div className="my-2 mx-6 flex items-center">
            <Link to="/" className="flex items-center">
              <img
                src="/assets/hostit-logo-light.png"
                alt="logo"
                width={150}
                height={36}
              />
            </Link>
          </div>
          <div className="">
            {eventMainSidebarData.map((menu, index) => (
              <SidebarItem key={index} menu={menu} />
            ))}
          </div>
        </div>
        <div className="flex flex-col items-center gap-3 mx-3">
          <div className="flex gap-3">
            <img
              src="/assets/profile-picture.png"
              alt="profile-picture"
              width={71}
              height={63}
            />
           
          </div>
          <div>

              <ConnectButton />

          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
