import React from "react";
import Layout from "../../Components/dashboard/layout";
import { Card } from "../../Components/shared/card";
import {
  CalendarIcon,
  ClockIcon,
  HandCoins,
  MapPinIcon,
  Tags,
  Ticket,
  TicketCheck,
  TicketMinus,
  User,
} from "lucide-react";
import { MdLiveTv } from "react-icons/md";

const EventDetails = () => {
  return (
    <Layout>
      <h1 className="text-3xl text-deep-blue font-semibold">Event Details</h1>

      <Card className="shadow-2xl pb-6 my-4 rounded-xl">
        <div className="flex flex-col mx-10 mt-10">
          <section className="rounded-2xl relative w-full h-[200px] sm:h-[300px] lg:h-[300px] overflow-hidden">
            <img
              src="/assets/about-image-podcast.jpg"
              className="absolute inset-0 w-full h-[300px] object-cover "
            />
            <div className="absolute inset-0 bg-black/50 z-10" />
            <div className="relative z-20 h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 text-center text-base-white">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
                0
              </h1>
              <p className="mt-4 max-w-3xl text-lg sm:text-xl mb-6">
                Join us for a day of inspiring talks, networking, and exploring
                the latest trends in the industry.
              </p>
              <div className="flex items-center gap-2 sm:gap-2">
                <User className="w-6 h-4 text-muted-foreground font-bold text-white" />
                <div className="flex gap-3 items-start">
                  <div className="text-[12px] font-bold  text-white">
                    Organizer{" "}
                  </div>
                  <div className="text-[12px]  text-white">0</div>
                </div>
              </div>
            </div>
          </section>
          <div className="">
            <div className="flex justify-evenly items-start">
              <div className="flex flex-col gap-6 mt-4 w-[50%]">
                <div className="flex items-start gap-4 sm:gap-6">
                  <CalendarIcon className="w-6 h-6 text-muted-foreground text-[#777D7F] " />
                  <div className="flex flex-col gap-1">
                    <div className="text-sm sm:text-base font-medium  text-[#777D7F]">
                      Start date{" "}
                    </div>
                    <div className="text-muted-foreground text-sm text-slate-700 font-semibold">
                      0
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-4 sm:gap-6">
                  <ClockIcon className="w-6 h-6 text-muted-foreground text-[#777D7F]" />
                  <div className="flex flex-col gap-1">
                    <div className="text-sm sm:text-base font-medium  text-[#777D7F]">
                      End date{" "}
                    </div>
                    <div className="text-muted-foreground text-sm text-slate-700 font-semibold">
                      0
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-4 sm:gap-6">
                  <MapPinIcon className="w-6 h-6 text-muted-foreground text-[#777D7F]" />
                  <div className="flex flex-col gap-1">
                    <div className="text-sm sm:text-base font-medium  text-[#777D7F]">
                      Location{" "}
                    </div>
                    <div className="text-muted-foreground text-sm text-slate-700 font-semibold">
                      0
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4 sm:gap-6">
                  <Ticket className="w-6 h-6 text-muted-foreground text-[#777D7F]" />
                  <div className="flex flex-col gap-1">
                    <div className="text-sm sm:text-base font-medium  text-[#777D7F]">
                      Ticket Price{" "}
                    </div>
                    <div className="text-muted-foreground text-sm text-slate-700 font-semibold">
                      0 CORE
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4 sm:gap-6">
                  <MdLiveTv className="w-6 h-6 text-muted-foreground text-[#777D7F]" />
                  <div className="flex flex-col gap-1">
                    <div className="text-sm sm:text-base font-medium  text-[#777D7F]">
                      Event status{" "}
                    </div>
                    <div className="text-muted-foreground text-sm text-slate-700 font-semibold">
                      0
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-4 mt-4 w-[50%]">
                <div className="flex items-start gap-4 sm:gap-6">
                  <Tags className="w-6 h-6 text-muted-foreground text-d eep-blue" />
                  <div className="flex flex-col gap-1">
                    <div className="text-sm sm:text-base font-medium  text-[#777D7F]">
                      Total Tickets{" "}
                    </div>
                    <div className="text-muted-foreground text-sm text-slate-700 font-semibold">
                      0
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-4 sm:gap-6">
                  <TicketMinus className="w-6 h-6 text-muted-foreground text-deep-blu e" />
                  <div className="flex flex-col gap-1">
                    <div className="text-sm sm:text-base font-medium  text-[#777D7F]">
                      Total Ticket Sold{" "}
                    </div>
                    <div className="text-muted-foreground text-sm text-slate-700 font-semibold">
                      0
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-4 sm:gap-6">
                  <TicketCheck className="w-6 h-6 text-muted-foreground text-deep-blu e" />
                  <div className="flex flex-col gap-1">
                    <div className="text-sm sm:text-base font-medium  text-[#777D7F]">
                      Total Ticket Available{" "}
                    </div>
                    <div className="text-muted-foreground text-sm text-slate-700 font-semibold">
                      0
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-4 sm:gap-6">
                  <HandCoins className="w-6 h-6 text-muted-foreground text-[#777D7F]" />
                  <div className="flex flex-col gap-1">
                    <div className="text-sm sm:text-base font-medium  text-[#777D7F]">
                      Total Amount{" "}
                    </div>
                    <div className="text-muted-foreground text-sm text-slate-700 font-semibold">
                      0 CORE
                    </div>
                  </div>
                </div>
                {/* {address === `0x${data?.organizer.toString(16)}` ? (
                  <>
                    <div className="flex items-start gap-4 sm:gap-6">
                      <HandCoins className="w-6 h-6 text-muted-foreground text-[#777D7F]" />
                      <div className="flex flex-col gap-1">
                        <div className="text-sm sm:text-base font-medium  text-[#777D7F]">
                          Total Amount{" "}
                        </div>
                        <div className="text-muted-foreground text-sm text-slate-700 font-semibold">
                          {String(
                            data?.ticket_price * data?.tickets_sold
                          ).slice(0, -18)}{" "}
                          STRK
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-8">
                      <RescheduleDialog id={id} />

                      <Button
                        onClick={cancelEvent}
                        size="lg"
                        className="w-full max-w-md text-primary bg-deep-blue hover:bg-primary hover:text-deep-blue"
                      >
                        Cancel Event
                      </Button>
                    </div>
                  </>
                ) : (
                  <div className="flex">
                    {Number(userTicket) === 0 ? (
                      <div className="flex gap-2">
                        <Button
                          onClick={handleApprove}
                          size="lg"
                          className="w-full max-w-md text-primary bg-deep-blue hover:bg-primary hover:text-deep-blue"
                        >
                          Give app approval
                        </Button>
                        <Button
                          onClick={handleSubmit}
                          size="lg"
                          className="w-full max-w-md text-primary bg-deep-blue hover:bg-primary hover:text-deep-blue"
                        >
                          Get ticket
                        </Button>
                      </div>
                    ) : (
                      <div className="flex gap-3">
                        {data?.is_canceled && !reclaimed && (
                          <Button
                            onClick={claim_ticket_refund}
                            size="lg"
                            className="w-full max-w-md text-primary bg-deep-blue hover:bg-primary hover:text-deep-blue"
                          >
                            Reclaim ticket refund
                          </Button>
                        )}
                        <TicketDialog
                          theme={feltToString(data?.theme)}
                          startDate={startDateResponse.dateTime}
                          endDate={endDateResponse.dateTime}
                          location={feltToString(data?.event_type)}
                          id={id}
                          deployAccount={deployAccount}
                          getStatus={getStatus}
                          getAccount={getAccount}
                          tba={tba}
                        />
                      </div>
                    )}
                  </div>
                )} */}
              </div>
            </div>
          </div>
        </div>
      </Card>
    </Layout>
  );
};

export default EventDetails;
