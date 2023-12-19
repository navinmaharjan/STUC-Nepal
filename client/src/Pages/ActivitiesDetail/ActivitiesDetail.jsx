import { useParams } from "react-router-dom";
import ActivitiesData from "../../Data/ActivitiesData";
import Button from "../../Components/Button";
import IssueData from "../../Data/IssueData";
import { Link } from "react-router-dom";

const ActivitiesDetail = () => {
  const { id } = useParams();
  const activitiesDetail = ActivitiesData.find(
    (item) => item.activityHeading === id
  );

  return (
    <>
      <div className="bg-redbrand">
        <div className="container mx-auto">
          <div className="py-4 flex justify-center">
            <div className="flex gap-4 items-center">
              <h1 className="text-2xl text-white tracking-wider">
                {activitiesDetail.activityHeading}
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto">
        <div className="flex py-10 gap-4">
          {/* --------- News Detail --------- */}
          <div className="w-3/4 flex p-8 border shadow-xl bg-offWhite flex-col items-start">
            <div className="relative w-full h-[500px]">
              <img
                src={activitiesDetail.activityImage}
                alt=""
                className="absolute w-full h-full object-cover"
              />
            </div>
            <p className="text-center text-slate-900 pt-4">
              {activitiesDetail.activityDate}
            </p>
            <p className="text-lg">{activitiesDetail.activityDetail}</p>
          </div>

          {/* --------- Issue Section --------- */}
          <div className="w-1/4  flex flex-col border shadow-xl bg-offWhite">
            <div>
              <h3 className="text-xl font-light border-b bg-darkblue text-white px-4 py-2">
                Issue / Campaigns
              </h3>
            </div>
            {IssueData.slice(0, 2).map((item) => (
              <div className="flex gap-4 p-2" key={item.id}>
                {/* <div className="relative w-1/2 h-60">
                  <img
                    src={item.newsImage}
                    alt=""
                    className="absolute w-full h-full object-cover"
                  />
                </div> */}
                <div className="flex flex-col p-4">
                  <h1 className="text-lg">{item.issueHeadline}</h1>
                  <p className="text-sm">{item.issueDate}</p>
                  <p className="text-sm text-slate-700">{item.issueDetail.substring(0,240)}...</p>
                  <Button />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ActivitiesDetail;
