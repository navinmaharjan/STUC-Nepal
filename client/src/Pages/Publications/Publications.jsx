import PublicationData from "../../Data/PublicationData";
const Introduction = () => {
  return (
    <>
      <div className="bg-blue-700">
        <div className="container mx-auto">
          <div className="py-8 flex justify-center">
            <div>
              <h1 className="text-5xl text-white tracking-wider">
                PUBLICATIONS (प्रकाशनहरू)
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto py-16 flex flex-col gap-4 justify-center">
        {PublicationData.map((item) => (
          <div className="mx-40">
            <div className="bg-offWhite border w-full p-4 flex justify-between">
              <div className="flex gap-2 items-center">
                <p className="font-medium text-2xl">{item.publicationHeading}</p>
                <p className="font-medium">{item.publicationDate}</p>
              </div>
              <div className="flex gap-2">
               <a href={item.publicationFile} download className="text-black font-semibold bg-white py-1 px-2 hover:text-bluebrand">Download</a>
               <a href={item.publicationFile} className="text-black font-semibold bg-white py-1 px-2 hover:text-bluebrand" target="_blank">View</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Introduction;
