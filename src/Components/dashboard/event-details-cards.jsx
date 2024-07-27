import React from "react";
import { Link } from "react-router-dom";
import  EventAttendees  from "./event-attendees";
import { epochToDatetime } from "datetime-epoch-conversion";
import { Clock4, LocateIcon, MenuIcon } from "lucide-react";
import { Card } from "../shared/card";

const EventDetailsCard = ({ event }) => {
  const { organizer, eventName, eventId, eventAddress, startTime, endTime } = event;
  const { day, month, time, year } = epochToDatetime(startTime);


  return (
    <Card className="flex p-4 my-2 bg-white shadow-2xl">
      <div className="flex bg-white justify-between w-full mb-4">
        <div className="flex justify-evenly">
          <div className="w-12">
            <p className="text-deep-blue text-sm mdl:text-base font-normal">
              {month}
            </p>
            <div className="w-3 mdl:w-5 h-[1px] bg-primary my-1 mb-4"></div>
            <div className="text-deep-blue text-2xl mdl:text-4xl font-normal">
              {day}
            </div>
          </div>
          <div className="w-[200px] h-[100px] mr-1 mdl:mr-4">
            <img
              width={100}
              height={200}
              className={`min-w-[150px] min-h-[120px] mdl:min-w-[200px] mdl:min-h-[170px]`}
              src={"/assets/web3lagos-conference.png"}
              alt="Single Event"
            />
          </div>

          <div className="mr-4 w-[50%]">
            <div className="flex flex-col">
              <Link to={`/events/${eventId}`}>
                <div className="flex justify-between">
                  <p className="text-deep-blue text-normal mdl:text-xl font-medium leading-tight line-clamp-1">
                    {eventName}
                  </p>
                </div>
              </Link>

              <div className="my-2 mdl:my-4">
                <EventAttendees />
              </div>

              <div className="flex flex-col mdl:gap-2">
                <div className="flex items-center">
                  <Clock4 className="w-[16px] mdl:w-[32px] text-deep-blue" />
                  <div className="ml-2 text-deep-blue text-xs mdl:text-sm font-normal leading-none">
                    {`${day} ${month}`}, {`${year} ${time}`}
                  </div>
                </div>

                <div className="flex items-center">
                  <LocateIcon className="w-[16px] mdl:w-[32px] text-deep-blue" />
                  <div className="ml-2 text-deep-blue text-xs mdl:text-sm font-normal leading-none">
                    {eventAddress}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="cursor-pointer flex mr-2 min-w-[24px] min-h-[24px]">
          <MenuIcon size="32" className="text-deep-blue " />
        </div>
      </div>
    </Card>
  );
};

export default EventDetailsCard;
