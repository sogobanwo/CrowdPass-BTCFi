import React, {useState} from "react";
import { Card, CardFooter } from "../shared/card";
import { Button } from "../shared/button";
import { Link } from "react-router-dom";
import {CalendarIcon, MapPinIcon} from "lucide-react"
import { epochToDatetime } from 'datetime-epoch-conversion';
import { useWeb3ModalAccount } from "@web3modal/ethers/react";



const EventCard = ({ event}) => {
  const { organizer, eventName, eventId, eventAddress, isCancelled, startTime, endTime, description } = event;
  const {day, month, time, year} = epochToDatetime(startTime)
 console.log(day, month, time )
  const [isHovered, setIsHovered] = useState(false);
  const { address } = useWeb3ModalAccount();

  return (
    <Card className="w-full max-w-md p-4 border border-muted rounded-lg shadow-2xl">
      <img
        src="/assets/about-image-podcast.jpg"
        alt="Event Image"
        className="rounded-t-lg object-cover w-full h-48"
      />
      <div className="mt-4 space-y-2">
        <h3 className="text-2xl font-semibold text-deep-blue">{eventName}</h3>
        <p className="text-sm text-muted-foreground text-deep-blue">
          {description}
        </p>
        <div className="gap-2 flex flex-col">
        <div className="flex items-center space-x-2 text-muted-foreground text-deep-blue">
          <CalendarIcon className="w-5 h-5" />
          <span>{`${day} ${month}, ${year} ${time}`}</span>
        </div>
        <div className="flex items-center space-x-2 text-muted-foreground text-deep-blue">
          <MapPinIcon className="w-5 h-5" />
          <span>{eventAddress}</span>
        </div>
        </div>
        
       
      </div>
        <CardFooter className="w-full bg-base-white p-4 flex items-center justify-center">
          <Link to={`/events/${eventId}`} className="w-full">
            <Button
              variant="outline"
              className="text-deep-blue border-deep-blue w-full"
            >
              View Details
            </Button>
          </Link>
        </CardFooter>
    </Card>
  );
};

export default EventCard;


