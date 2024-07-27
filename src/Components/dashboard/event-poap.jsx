import useGetAllPOAPs from "../../Functions/useGetAllPOAP";
import { TbLoaderQuarter } from "react-icons/tb";
import { Card } from "../shared/card";
const EventPOAPs = () => {
    const { loading, data } = useGetAllPOAPs();
    console.log(data, loading);
    return (
      <>
        {loading ? (
          <section className="w-full h-full fixed top-0 left-0 flex justify-center items-center layoutBg overflow-hidden z-[99999]">
            <h2 className="text-deep-blue font-barlow text-lg md:text-xl flex items-center gap-1">
              <TbLoaderQuarter className="animate-spin text-4xl mr-3" />
              Fetching all your POAPs...
            </h2>
          </section>
        ) : (
          <div className="flex flex-row gap-6 flex-wrap w-full">
            {data && data.map((items) => {
              const { id, supply, image_url, name } = items.event;
              return (
                <Card
                  key={id}
                  className="h-[450px] w-[300px] flex justify-center flex-col gap-4 border rounded-lg py-auto px-7 bg-white text-deep-blue shadow-2xl"
                >
                  <img src={image_url} alt={name} className="rounded-full w-60 flex justify-center"/>
                  <div className="text-[#777D7F]">
                    <p className="text-lg"><span className="font-bold text-md">Event name: </span> {name}</p>
                    <p className="text-lg"><span className="font-bold text-md">Total Holders: </span>{supply}</p>
                    <p className="text-lg"><span className="font-bold text-md">Claim Date: </span>{items.created.split(" ")[0]}</p>
                    <p className="text-lg"><span className="font-bold text-md">Token Id: </span>{items.tokenId}</p>
                  </div>
                </Card>
              );
            })}
          </div>
        )}
      </>
    );
}

export default EventPOAPs