import { useParams } from "react-router-dom";
import VideoData from "../../Data/videoGalleryData";

const ImageDetail = () => {
  const { id } = useParams();
  const dd = VideoData.find((a) => a.videoAlbumName == id);
  const aa = VideoData.filter((a) => a.videoAlbumName == id);

  return (
    <>
      <div className="bg-blue-700">
        <div className="container mx-auto">
          <div className="py-8 flex justify-center">
            <div>
              <h1 className="text-5xl text-white tracking-wider">
                {dd.videoAlbumName}
              </h1>
              <p className="text-center text-white pt-1">{dd.videoDate}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto py-16 grid grid-cols-4 gap-4 ">
        {aa.reverse().map((item) => (
          <div className="" key={item.id}>
            <div
              className="relative w-[360px] sm:w-[23rem] h-72"
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