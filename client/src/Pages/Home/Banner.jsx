// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../../../src/styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import BannerImage1 from "/bannerImage/bannerImage-1.jpeg";
import BannerImage2 from "/bannerImage/bannerImage-2.jpeg";
import BannerImage3 from "/bannerImage/bannerImage-3.jpeg";

const Banner = () => {
  return (
    <>
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
        // className="py-8"
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
            slidesPerView: 2,
            spaceBetween: 0,
          },
        }}
      >
        <SwiperSlide>
          <div className="relative w-full h-[400px] border-8 border-white">
            <img
              src={BannerImage1}
              alt=""
              className="absolute w-full h-full object-cover"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full h-[400px] border-8 border-white">
            <img
              src={BannerImage2}
              alt=""
              className="absolute w-full h-full object-cover"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full h-[400px] border-8 border-white">
            <img
              src={BannerImage3}
              alt=""
              className="absolute w-full h-full object-cover"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Banner;
