import React from "react";
import { Card, CardFooter } from "../shared/card";
import { Button } from "../shared/button";
import { Link } from "react-router-dom";
import {CalendarIcon, LocateFixedIcon} from "lucide-react"

const EventCard = ({ id }) => {
  return (
    <Card className="w-full max-w-md p-4 border border-muted rounded-lg shadow-2xl">
      <img
        src="/assets/about-image-podcast.jpg"
        alt="Event Image"
        className="rounded-t-lg object-cover w-full h-48"
      />
      <div className="mt-4 space-y-2">
        <h3 className="text-2xl font-semibold text-deep-blue">First Event</h3>
        <p className="text-sm text-muted-foreground text-deep-blue">
          Join us for a weekend of hiking, camping, and exploring the great
          outdoors.
        </p>
        <div className="gap-2 flex flex-col">
        <div className="flex items-center space-x-2 text-muted-foreground text-deep-blue">
          <CalendarIcon className="w-5 h-5" />
          <span>July 23, 2024</span>
        </div>
        <div className="flex items-center space-x-2 text-muted-foreground text-deep-blue">
          <LocateFixedIcon className="w-5 h-5" />
          <span>12, Jinadu estate, Lagos</span>
        </div>
        </div>
        
       
      </div>
        <CardFooter className="w-full bg-base-white p-4 flex items-center justify-center">
          <Link to={`/events/${id}`} className="w-full">
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


