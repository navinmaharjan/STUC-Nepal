import ModalImage from "react-modal-image";
import AssociateData from "../../Data/AssociateData";
const Associate = () => {
  return (
    <>
      <div className="bg-blue-700">
        <div className="container mx-auto">
          <div className="py-8 flex justify-center">
            <div>
              <h1 className="text-5xl text-white tracking-wider">
                ASSOCIATE ORGANIZATION
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-offWhite">
       
        <div className="container mx-auto py-16 grid grid-cols-4 gap-4 ">
          {AssociateData.map((item) => (
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
