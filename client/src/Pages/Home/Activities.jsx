import React from "react";
import ActivityData from "../../Data/ActivitiesData";
const Activities = () => {
  return (
    <>
      <div className="bg-offWhite">
        <div className="container mx-auto py-16">
          <div>
            <h1 className="text-2xl font-light bg-redbrand text-white px-4 py-1">
              Major Activities
            </h1>
          </div>

          <div className="flex gap-4 pt-3">
            {ActivityData.map((item) => (
              <>
                <div className="flex flex-col bg-white">
                  <div className="relative w-[500px] h-80 overflow-hidden">
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
