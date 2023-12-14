import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../../../src/styles.css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";
import BannerImageData from "../../Data/BannerImageData";

const Banner = () => {
  return (
    <>
      <div className="bg-redbrand p-2">
        <div className="container mx-auto">
          <div className="flex gap-4 items-center">
            <p className="text-white font-semibold">Notice: </p>
            <div className="p-1 w-full overflow-hidden ">
              <div className="text-white font-medium flex gap-10 marquee-container">
                <Link className="hover:text-bluebrand transition-colors duration-300">
                  <p>
                    <i className="fa-regular fa-hand-point-right text-white"></i>
                    १९९७ साल देखि विभिन्न कालखण्डमा नेपाली जनताले संचालन गरेका
                    राणा विरोधी आन्दोलन, निरंकुश
                  </p>
                </Link>
                <Link className="hover:text-bluebrand transition-colors duration-300">
                  <p>
                    १९९७ साल देखि विभिन्न कालखण्डमा नेपाली जनताले संचालन गरेका
                    राणा विरोधी आन्दोलन,
                  </p>
                </Link>
                <Link className="hover:text-bluebrand transition-colors duration-300">
                  <p>१९९७ साल देखि विभिन्न कालखण्डमा नेपाली जनताले</p>
                </Link>
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
