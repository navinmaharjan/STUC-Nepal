import PublicationData from "../../Data/PublicationData";
const Introduction = () => {
  return (
    <>
      <div className="bg-redbrand">
        <div className="container mx-auto">
          <div className="py-2 sm:py-4 flex justify-center">
            <div>
              <h1 className="text-base sm:text-2xl text-white tracking-wider">
                PUBLICATIONS (प्रकाशनहरू)
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 sm:px-0 py-4 sm:py-16 flex flex-col gap-4 justify-center">
        {PublicationData.map((item) => (
          <div className="sm:mx-40">
            <div className="bg-offWhite border w-full p-4 flex justify-between items-center flex-col sm:flex-row">
              <div className="flex gap-2 items-center flex-col sm:flex-row">
                <div className="relative w-32">
                  <img src={item.publicationImage} alt="" />
                </div>
                <p className="font-medium sm:text-2xl">{item.publicationHeading}</p>
                <p className="font-medium">{item.publicationDate}</p>
              </div>
              <div className="flex gap-2 p">
                <div>

               <a href={item.publicationFile} download className="text-black font-semibold bg-white py-1 px-2 hover:text-bluebrand">Download</a>
                </div>
                <div>

               <a href={item.publicationFile} className="text-black font-semibold bg-white py-1 px-2 hover:text-bluebrand" target="_blank">View</a>
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
