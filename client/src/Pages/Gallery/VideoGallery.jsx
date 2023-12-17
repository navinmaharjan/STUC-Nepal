import videoGalleryData from "../../Data/videoGalleryData";
import { Link } from 'react-router-dom'

const Introduction = () => {
  const uniqueAlbumTypes = [];
  const filteredVideo = videoGalleryData.filter((item) => {
    if (!uniqueAlbumTypes.includes(item.videoAlbumName)) {
      uniqueAlbumTypes.push(item.videoAlbumName);
      return true;
    }
    return false;
  });
  return (
    <>
      <div className="bg-redbrand">
        <div className="container mx-auto">
          <div className="py-2 sm:py-4 flex justify-center">
            <div>
              <h1 className="text-base sm:text-2xl text-white tracking-wider">
                VIDEO GALLERY (भिडियो ग्यालरी)
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto py-4 sm:py-16 grid sm:grid-cols-4 gap-4 px-4 sm:px-0">
        {filteredVideo.reverse().map((item) => (
          <Link key={item.id} to={`/video-detail/${item.videoAlbumName}`}>
            <div className="" key={item.id}>
              <div className="relative w-full h-60 overflow-hidden">
                <img
                  src={item.videoThumbnail}
                  alt=""
                  className="absolute w-full h-full object-cover"
                ></img>
              </div>
              <div className="flex flex-col text-center text-gray-600">
                <p className="text-2xl font-medium border-b border-orange">
                  {item.videoDate}
                </p>
                <p className="text-2xl font-medium">{item.videoAlbumName}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Introduction;
