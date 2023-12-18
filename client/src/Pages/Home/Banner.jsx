import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../../../src/styles.css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";
import BannerImageData from "../../Data/BannerImageData";
import NoticeData from "../../Data/NoticeData";
const Banner = () => {
  return (
    <>
      <div className="bg-redbrand px-2 sm:px-0 sm:p-2">
        <div className="container mx-auto">
          <div className="flex gap-4 items-center">
            <p className="text-white font-semibold">Notice: </p>
            <div className="p-1 w-full overflow-hidden ">
              <div className="text-white font-medium flex gap-32 marquee-container">
                {NoticeData.map((item) => (
                  <Link to={`/notice-detail/${item.noticeHeadline}`} className="hover:text-bluebrand transition-colors duration-300">
                    <p>{item.noticeHeadline}</p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Swiper
        // spaceBetween={30}
        // effect="fade"
        fadeEffect={{ crossFade: true }}
        centeredSlides={false}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        // className="border-t-4 border-redbrand"
        loop={true}
        style={{
          "--swiper-pagination-color": "#FF1C0A",
          "--swiper-pagination-bullet-inactive-color": "#FFFFFF",
          "--swiper-pagination-bullet-inactive-opacity": "1",
          "--swiper-pagination-bullet-size": "5px",
          "--swiper-pagination-bullet-horizontal-gap": "6px",
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          1024: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          1280: {
            slidesPerView: 2,
            spaceBetween: 0,
          },
        }}
      >
        {BannerImageData.map((item) => (
          <SwiperSlide>
            <div className="relative w-full h-[480px]">
              <img
                src={item.bannerImage}
                alt=""
                className="absolute w-full h-full object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Banner;
