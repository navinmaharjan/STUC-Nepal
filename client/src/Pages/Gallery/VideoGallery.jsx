import videoGalleryData from "../../Data/videoGalleryData";
import { Link } from "react-router-dom";

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
      <div className="container mx-auto py-4 xl:py-16 grid xl:grid-cols-4 md:grid-cols-2 gap-4 px-4 xl:px-0">
        {filteredVideo.reverse().map((item) => (
          <Link key={item.id} to={`/video-detail/${item.videoAlbumName}`}>
            <div className="border" key={item.id}>
              <div className="text-center pt-2">
                <i className="fa-solid fa-video text-4xl text-redbrand"></i>
              </div>
              <div className="flex flex-col text-center text-gray-600">
                <p className="text-md font-medium border-b border-orange py-2">
                  {item.videoDate}
                </p>
                <p className="text-lg font-medium bg-red-400 text-white">
                  {item.videoAlbumName}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Introduction;
