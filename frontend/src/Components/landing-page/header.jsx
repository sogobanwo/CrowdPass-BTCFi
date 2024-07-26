import React, { useContext } from "react";
import { Button } from "../shared/button";
import ConnectButton from "../../Functions/useConnectionHook";

const Header = () => {
  const navItem = [
    {
      text: "Home",
      url: "/",
    },
    {
      text: "Events",
      url: "/events"
    },
    {
      text: "Dashboard",
      url: "/dashboard"
    }
  ]
  return (
    <div className="rounded-full bg-white/70 flex justify-between items-center py-5 px-10 w-full">
      <img src="/assets/hostit-logo.png" height={30} width={150} />
      <div className="flex">
        <Button className="bg-deep-blue text-primary hover:bg-primary hover:text-deep-blue">
          Popular Events
        </Button>
      </div>
      <div className="flex gap-4">
      <ConnectButton />
      </div>
    </div>
  );
};

export default Header;
