import { useParams } from "react-router-dom";
import ImageData from "../../Data/ImageData";
import ModalImage from "react-modal-image";
import { Link } from "react-router-dom";
const ImageDetail = () => {
  const { id } = useParams();
  const dd = ImageData.find((a) => a.galleryAlbumName == id);
  const aa = ImageData.filter((a) => a.galleryAlbumName == id);

  return (
    <>
      <div className="bg-blue-700">
        <div className="container mx-auto">
          <div className="py-8 flex justify-center">
            <div>
              <h1 className="text-5xl text-white tracking-wider">
                {dd.galleryAlbumName}
              </h1>
              <p className="text-center text-white pt-1">{dd.galleryDate}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto py-16 grid grid-cols-4 gap-4 ">
        {aa.map((item) => (
          <div className="">
            <div
              className="relative w-[360px] sm:w-[23rem] h-72 overflow-hidden"
              key={item.id}
            >
              <ModalImage
                small={item.galleryImage}
                large={item.galleryImage}
                hideDownload={true}
                className="absolute w-full h-full object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ImageDetail;
