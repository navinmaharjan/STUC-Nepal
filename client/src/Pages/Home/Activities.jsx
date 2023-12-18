import React from "react";
import ActivityData from "../../Data/ActivitiesData";
import Button from "../../Components/Button";
import { Link } from "react-router-dom";

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
            {ActivityData.map((item) => (
              <>
                <div className="flex flex-col bg-white overflow-hidden">
                  <div className="relative xl:w-[450px] h-80 ">
                    <img
                      src={item.activityImage}
                      alt=""
                      className="absolute w-full h-full object-cover transition-all duration-300 hover:scale-105"
                    />
                  </div>
                  <div className="py-2 px-4">
                    <h1 className="text-xl font-semibold py-2 h-16">
                      {item.activityHeading}
                    </h1>
                    <p className="py-1 text-sm">{item.activityDate}</p>
                    <p>{item.activityDetail.substring(0, 100)}...</p>
                    <div className="pb-4">
                     <Link to={`/activities-detail/${item.activityHeading}`}> <Button /></Link>
                    </div>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Activities;
