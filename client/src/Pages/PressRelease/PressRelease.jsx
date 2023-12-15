import PressReleaseData from "../../Data/PressReleaseData";
const Introduction = () => {
  return (
    <>
      <div className="bg-redbrand">
        <div className="container mx-auto">
          <div className="py-4 flex justify-center">
            <div>
              <h1 className="text-2xl text-white tracking-wider">
                PUBLICATIONS (प्रकाशनहरू)
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto py-16 flex flex-col gap-4 justify-center">
        {PressReleaseData.map((item) => (
          <div className="mx-40">
            <div className="bg-offWhite border w-full p-4 flex justify-between items-center">
              <div className="flex gap-2 items-center">
                <div className="relative w-32 h-20">
                  <img
                    src={item.pressReleaseImage}
                    alt=""
                    className="absolute w-full h-full object-cover"
                  />
                </div>
                <p className="font-medium text-2xl">
                  {item.pressReleaseHeading}
                </p>
                <p className="font-medium">{item.pressReleaseDate}</p>
              </div>
              <div className="flex gap-2">
                <div>
                  <a
                    href={item.pressReleaseFile}
                    download
                    className="text-black font-semibold bg-white py-1 px-2 hover:text-bluebrand"
                  >
                    Download
                  </a>
                </div>
                <div>
                  <a
                    href={item.pressReleaseFile}
                    className="text-black font-semibold bg-white py-1 px-2 hover:text-bluebrand"
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

export default Introduction;
