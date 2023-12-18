import ImageData from "../../Data/ImageData";
import VideoGalleryData from "../../Data/videoGalleryData";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../../../src/styles.css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const ImageVideoGallery = () => {
  return (
    <>
      <div className="bg-white">
        <div className="container mx-auto py-16 hidden sm:block">
          <div className="grid sm:grid-cols-6 gap-2">
            <h1 className="text-2xl font-light bg-bluebrand text-white px-4 py-1 sm:col-start-1 sm:col-end-5">
              Image Gallery
            </h1>
            <h1 className="text-2xl font-light bg-redbrand text-white px-4 py-1 sm:col-start-5 sm:col-end-7">
              Video Gallery
            </h1>
          </div>

          <div className="grid sm:grid-cols-6 gap-2 pt-2">
            <div className="h-[286px] col-start-1 col-end-5 border">
              <Link to="/image-gallery">
                <Swiper
                  // effect={coverplay}
                  spaceBetween={10}
                  centeredSlides={false}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  pagination={false}
                  navigation={false}
                  modules={[Autoplay, Pagination, Navigation]}
                  // className="sm:py-4 py-4 px-4 sm:px-0"
                  loop={true}
                  style={{
                    "--swiper-pagination-color": "#FF1C0A",
                    "--swiper-pagination-bullet-inactive-color": "#999999",
                    "--swiper-pagination-bullet-inactive-opacity": "1",
                    "--swiper-pagination-bullet-size": "5px",
                    "--swiper-pagination-bullet-horizontal-gap": "6px",
                  }}
                  breakpoints={{
                    640: {
                      slidesPerView: 2,
                      spaceBetween: 10,
                    },
                    768: {
                      slidesPerView: 2,
                      spaceBetween: 40,
                    },
                    1024: {
                      slidesPerView: 2,
                      spaceBetween: 20,
                    },
                    1280: {
                      slidesPerView: 4,
                      spaceBetween: 10,
                    },
                  }}
                >
                  {ImageData.map((item) => (
                    <SwiperSlide className="w-full bg-bluebrand">
                      <div className="relative w-full h-[282px]">
                        <img
                          src={item.galleryImage}
                          alt=""
                          className="absolute w-full h-full object-cover"
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </Link>
            </div>
            <div className="h-[282px] col-start-5 col-end-7 border">
              {VideoGalleryData.slice(0, 1).map((item) => (
                <Link to="/video-gallery">
                 
                    <iframe
                      src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2F100067539223352%2Fvideos%2F3060394614179741%2F&show_text=false&width=267&t=0"
                    
                      frameborder="0"
                      allowfullscreen="true"
                      // allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                      allowFullScreen="true"
                      className="w-full h-[282px]"
                    ></iframe>
                    {/* <video
                      src={item.videoDetail}
                      controls
                      autoPlay
                      muted
                    ></video> */}
               
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ImageVideoGallery;

{
  /* <iframe src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2F100067539223352%2Fvideos%2F3060394614179741%2F&show_text=false&width=267&t=0" width="267" height="476" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"></iframe> */
}
