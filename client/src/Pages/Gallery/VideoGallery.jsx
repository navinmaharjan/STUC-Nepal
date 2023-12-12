import videoGalleryData from "../../Data/videoGalleryData"
const Introduction = () => {
  return (
    <>
      <div className="bg-blue-700">
        <div className="container mx-auto">
          <div className="py-8 flex justify-center">
            <div>
              <h1 className="text-5xl text-white tracking-wider">
                VIDEO GALLERY (भिडियो ग्यालरी)
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto py-16 grid grid-cols-4 gap-4 ">
        {videoGalleryData.map((item) => (
          <div className="" key={item.id}>
            <div className="relative w-[360px] sm:w-[23rem] h-72 overflow-hidden">
              <img src={item.videoThumbnail}></img>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Introduction;
