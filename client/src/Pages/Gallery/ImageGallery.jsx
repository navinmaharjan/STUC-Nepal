import ModalImage from "react-modal-image";
import ImageData from "../../Data/ImageData"
const Introduction = () => {
  return (
    <>
      <div className="bg-blue-700">
        <div className="container mx-auto">
          <div className="py-8 flex justify-center">
            <div>
              <h1 className="text-5xl text-white tracking-wider">
                PHOTO GALLERY (तस्बिर पुस्तिका)
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto py-16 flex flex-wrap gap-4 ">
      {ImageData.map((item) => (
            <div className="">
              <div className="relative w-[360px] sm:w-[23rem] h-72 overflow-hidden" key={item.id} >
                <ModalImage
                  small={item.galleryImage}
                  large={item.galleryImage}
                  hideDownload={true}
                  className="absolute w-full h-full object-cover hover:scale-105 transition-all duration-300"
                />
              </div>
            </div>
          ))}
      </div>
     
    </>
  );
};

export default Introduction;
