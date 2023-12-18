import BidhanData from "../../Data/BidhanData";

const Bidhan = () => {
  return (
    <>
      <div className="bg-redbrand">
        <div className="container mx-auto">
          <div className="py-2 sm:py-4 flex justify-center">
            <div>
              <h1 className="text-base sm:text-2xl text-white tracking-wider">
                Legislation (विधान)
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto py-4 px-4 xl:px-0 xl:py-16 flex flex-col gap-4 justify-center">
        {BidhanData.map((item) => (
          <div className=" xl:mx-40">
            <div className="bg-offWhite border w-full p-4 flex justify-between">
              <div className="flex gap-2 items-center">
                <p className="font-medium sm:text-xl">{item.bidhanName}</p>
              </div>
              <div className="flex gap-2">
                <div>
                  <a
                    href={item.bidhanFile}
                    download
                    className="text-white font-semibold bg-redbrand py-1 px-2 hover:opacity-60"
                  >
                    Download
                  </a>
                </div>
                <div>
                  <a
                    href={item.bidhanFile}
                    className="text-white font-semibold bg-redbrand py-1 px-2 hover:opacity-60"
                    target="_blank"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Bidhan;
