import { clients } from "../Data/Clients";

const Clients = () => {
  return (
    <>
      <div className="bg-[#e8eaee] w-full p-[50px]">

        <div className="text-center mb-12">

          <h2 className="text-[42px] font-bold leading-[53px] text-[#010d14] mt-0 font-playfair">Our Notable Clients
          </h2>
        </div>
        <div className="flex flex-wrap items-center justify-center bg-white w-full max-w-[1300px] mx-auto p-5 rounded-sm gap-5">
          {clients.map((client) => (
            <div key={client.id} className="flex justify-center mx-5 cursor-pointer">
              <img
                src={client.img}
                className="h-[100px] sm:h-[120px] md:h-[150px] object-contain"
                alt={`Client logo: ${client.name}`}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Clients;
