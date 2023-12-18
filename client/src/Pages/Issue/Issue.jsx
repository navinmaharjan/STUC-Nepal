import NewsData from "../../Data/NewsData";
import IssueData from "../../Data/IssueData";
import Button from "../../Components/Button";
import { Link } from "react-router-dom";

const Introduction = () => {
  return (
    <>
      <div className="bg-redbrand">
        <div className="container mx-auto">
          <div className="py-2 sm:py-4 flex justify-center">
            <div>
              <h1 className="text-base sm:text-2xl text-white tracking-wider">
                ISSUE / CAMPAIGNS (मुद्दा / अभियान)
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto">
        <div className="flex py-4 xl:py-10 gap-4">
          {/* --------- Issue Section --------- */}
          <div className="xl:w-3/4 flex flex-col border shadow-xl bg-offWhite">
            <div>
              <h3 className="text-xl font-light border-b bg-bluebrand text-white px-4 py-1">
                Issue / Campaigns
              </h3>
            </div>
            {IssueData.map((item) => (
              <div className="flex gap-4 p-2 border-b flex-col sm:flex-row" key={item.id}>
                <div className="relative sm:w-1/2 h-60">
                  <img
                    src={item.issueImage}
                    alt=""
                    className="absolute w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col sm:w-1/2 sm:p-4">
                  <h1 className="text-lg">{item.issueHeadline}</h1>
                  <p className="text-sm">{item.issueDate}</p>
                  <p className="text-sm text-slate-700">
                    {item.issueDetail.substring(0, 240)}...
                  </p>
                  <Link to={`/issue-detail/${item.issueHeadline}`}>
                    <Button />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* --------- News Section --------- */}
          <div className="w-1/4  flex-col border shadow-xl bg-offWhite hidden xl:flex">
            <div>
              <h3 className="text-xl font-light border-b bg-redbrand text-white px-4 py-1">
                News / Events
              </h3>
            </div>
            {NewsData.slice(0, 2).map((item) => (
              <div className="flex gap-4 p-2" key={item.id}>
                <div className="flex flex-col p-4">
                  <h1 className="text-lg">{item.newsHeadline}</h1>
                  <p className="text-sm">{item.newsPublishedDate}</p>
                  <p className="text-sm text-slate-700">
                    {item.newsDetail.substring(0, 240)}
                  </p>
                  <Link to={`/news-detail/${item.newsHeadline}`}>
                    <Button />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Introduction;
