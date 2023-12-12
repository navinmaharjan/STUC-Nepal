import ModalImage from "react-modal-image";
import ImageData from "../../Data/ImageData";
import { Link } from 'react-router-dom'

const Introduction = () => {
  const uniqueAlbumTypes = [];
  const filteredPhotos = ImageData.filter((photo) => {
    if (!uniqueAlbumTypes.includes(photo.galleryAlbumName)) {
      uniqueAlbumTypes.push(photo.galleryAlbumName);
      return true;
    }
    return false;
  });
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
      <div className="container mx-auto py-16 grid grid-cols-4 gap-8 ">
        {filteredPhotos.reverse().map((item) => (
          <Link key={item.id} to={`/image-detail/${item.galleryAlbumName}`}>
            <div className="p-2 border flex flex-col">
              <div className="relative w-full h-60">
                <div className=" absolute w-full h-full">
                  <img
                    src={item.gallerythumbnail}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="flex flex-col text-center text-gray-600">
                <p className="text-2xl font-medium border-b border-orange">
                  {item.galleryDate}
                </p>
                <p className="text-2xl font-medium">{item.galleryAlbumName}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Introduction;
