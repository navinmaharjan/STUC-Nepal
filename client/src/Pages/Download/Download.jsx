import DownloadData from "../../Data/DownloadData"
const Introduction = () => {
  return (
    <>
         <div className="bg-redbrand">
        <div className="container mx-auto">
          <div className="py-2 sm:py-4 flex justify-center">
            <div>
              <h1 className="text-base sm:text-2xl text-white tracking-wider">
                DOWNLOAD (डाउनलोड गर्नुहोस्)
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto py-4 sm:py-16 flex flex-col gap-4 justify-center">
        {DownloadData.map((item) => (
          <div className="sm:mx-40">
            <div className="bg-offWhite border w-full p-4 flex justify-between flex-col sm:flex-row">
              <div className="flex gap-2 items-center flex-col sm:flex-row">
                <p className="font-medium text-2xl text-center">{item.publicationHeading}</p>
                <p className="font-medium">{item.publicationDate}</p>
              </div>
              <div className="flex gap-2 justify-center">
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
