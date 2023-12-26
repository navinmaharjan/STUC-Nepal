import React from "react";
import ActivityData from "../../Data/ActivitiesData";
import Button from "../../Components/Button";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../../../src/styles.css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Activities = () => {
  return (
    <>
      <div className="bg-offWhite">
        <div className="container mx-auto py-16">
          <div>
            <h1 className="text-2xl font-light bg-bluebrand text-white px-4 py-1">
              Major Activities
            </h1>
          </div>

          <div className="flex gap-2 pt-2 flex-col xl:flex-row">
            <Swiper
              // effect={coverplay}
              spaceBetween={10}
              centeredSlides={false}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              pagination={false}
              navigation={true}
              modules={[Pagination, Navigation]}
              loop={true}
              style={{
                "--swiper-pagination-color": "#FF1C0A",
                "--swiper-pagination-bullet-inactive-color": "#999999",
                "--swiper-pagination-bullet-inactive-opacity": "1",
                "--swiper-pagination-bullet-size": "5px",
                "--swiper-pagination-bullet-horizontal-gap": "6px",
                "--swiper-navigation-size": "30px",
                "--swiper-navigatiion-background": "#FF1C0A"
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
                  slidesPerView: 3,
                  spaceBetween: 10,
                },
              }}
            >
              {ActivityData.map((item) => (
                <SwiperSlide>
                  <div className="flex flex-col bg-white h-[460px] overflow-hidden">
                    <div className="relative xl:w-[450px] h-60 ">
                      <img
                        src={item.activityImage}
                        alt=""
                        className="absolute w-full h-full object-cover transition-all duration-300 hover:scale-105"
                      />
                    </div>
                    <div className="py-2 px-4 flex flex-col">
                      <div>
                        <h1 className="text-lg font-semibold py-2">
                          {item.activityHeading}
                        </h1>
                      </div>
                      <div >
                        <p className="py-1 text-sm">{item.activityDate}</p>
                      </div>
                      <div>
                        <p className="text-sm">
                          {item.activityDetail.substring(0, 100)}...
                        </p>
                      </div>

                      <div className="pb-4">
                        <Link to={`/activities-detail/${item.activityHeading}`}>
                          {" "}
                          <Button />
                        </Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default Activities;
