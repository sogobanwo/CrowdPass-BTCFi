import React, {useState} from "react";
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
import { epochToDatetime } from "datetime-epoch-conversion";

const EventDetails = () => {

  const [formStep, setFormStep] = useState(0)
  const [email, setEmail] = useState("")

  const [qrLink, setQrLink] = useState("")

  const { address } = useWeb3ModalAccount()
  const { walletProvider } = useWeb3ModalProvider()
  const provider = new ethers.BrowserProvider(walletProvider)

  const data = {
    eventId: "1",
    eventName: "Test Event",
    description: "This is a test event",
    eventAddress: "12, jinadu street, lagos",
    startTime: "1722114000",
    endTime: "1722119000",
    isCancelled: true,
  };
  const startDateResponse = epochToDatetime(data.startTime);
  const endDateResponse = epochToDatetime(data.endTime);

  return (
    <Layout>
      <Card className="shadow-2xl pb-6 my-4 rounded-xl">
        <div className="flex flex-col mx-10 mt-10">
          <section className="rounded-2xl relative w-full h-[200px] sm:h-[300px] lg:h-[350px] overflow-hidden">
            <img
              src="/assets/about-image-podcast.jpg"
              className="absolute inset-0 w-full h-[200px] sm:h-[300px] lg:h-[350px] object-cover "
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
              </div>
            </div>
          </div>
        </div>
      </Card>
    </Layout>
  );
};

export default EventDetails;
