import { useParams } from "react-router-dom";
import VideoData from "../../Data/videoGalleryData";

const ImageDetail = () => {
  const { id } = useParams();
  const dd = VideoData.find((a) => a.videoAlbumName == id);
  const aa = VideoData.filter((a) => a.videoAlbumName == id);

  return (
    <>
      <div className="bg-redbrand">
        <div className="container mx-auto">
          <div className="py-2 sm:py-4 flex justify-center">
            <div>
              <h1 className="text-base sm:text-2xl text-white tracking-wider">
                {dd.videoAlbumName}
              </h1>
              <p className="text-center text-white pt-1">{dd.videoDate}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto py-4 sm:py-16 grid sm:grid-cols-4 gap-4 px-4 sm:px-0">
        {aa.reverse().map((item) => (
          <div key={item.id}>
            <div
              className="relative w-full sm:w-[23rem] sm:h-72"
            >
             <video src={item.videoDetail} controls></video>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ImageDetail;