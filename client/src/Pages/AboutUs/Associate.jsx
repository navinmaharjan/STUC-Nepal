import ModalImage from "react-modal-image";
import AssociateData from "../../Data/AssociateData";
const Associate = () => {
  const filterAssociate = AssociateData.filter((item) => item.id === 16)
  return (
    <>
      <div className="bg-redbrand">
        <div className="container mx-auto">
          <div className="py-2 sm:py-4 flex justify-center">
            <div>
              <h1 className="text-base sm:text-2xl text-white tracking-wider">
                ASSOCIATE ORGANIZATION
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-offWhite py-4 sm:py-16">
        <div className="container mx-auto grid grid-cols-1 sm:flex sm:flex-row sm:justify-center">
        {filterAssociate.map((item) => (
            <div className="flex flex-col border-2 p-2 bg-white mb-4">
              <div>
                <div
                  className="relative w-full h-60 overflow-hidden"
                  key={item.id}
                >
                  <ModalImage
                    small={item.asscoiateCertificateImage}
                    large={item.asscoiateCertificateImage}
                    hideDownload={true}
                    className="absolute w-full h-full object-contain hover:scale-105 transition-all duration-300"
                  />
                </div>
              </div>
              <p className="text-lg text-center">
                {item.associatePresidentName}
              </p>
              <p className="font-medium text-xl text-center text-redbrand">
                {item.associateOrganization}
              </p>
            </div>
          ))}
        </div>
        <div className="container mx-auto grid xl:grid-cols-4 md:grid-cols-2 gap-4 ">
          {AssociateData.slice(0,13).map((item) => (
            <div className="flex flex-col border-2 p-2 bg-white">
              <div>
                <div
                  className="relative w-full h-60 overflow-hidden"
                  key={item.id}
                >
                  <ModalImage
                    small={item.asscoiateCertificateImage}
                    large={item.asscoiateCertificateImage}
                    hideDownload={true}
                    className="absolute w-full h-full object-contain hover:scale-105 transition-all duration-300"
                  />
                </div>
              </div>

              <p className="text-lg text-center">
                {item.associatePresidentName}
              </p>
              <p className="font-medium text-xl text-center text-redbrand">
                {item.associateOrganization}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Associate;
