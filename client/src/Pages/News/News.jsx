import NewsData from "../../Data/NewsData";
import IssueData from "../../Data/IssueData";
import Button from "../../Components/Button";
import { Link } from "react-router-dom";

const News = () => {
  return (
    <>
      <div className="bg-redbrand">
        <div className="container mx-auto">
          <div className="py-2 sm:py-4 flex justify-center">
            <div>
              <h1 className=" text-base sm:text-2xl text-white tracking-wider">
                NEWS / EVENTS (समाचार / घटनाक्रम)
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto">
        <div className="flex sm:py-10 gap-4">
          {/* --------- News Section --------- */}
          <div className="sm:w-3/4 flex flex-col border shadow-xl bg-offWhite">
            <div>
              <h3 className="text-xl font-light border-b bg-darkblue text-white px-4 py-2">
                News Events
              </h3>
            </div>
            {NewsData.map((item) => (
              <div className="flex gap-4 p-2 border-b flex-col sm:flex-row" key={item.id}>
                <div className="relative sm:w-1/2 h-60">
                  <img
                    src={item.newsImage}
                    alt=""
                    className="absolute w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col sm:w-1/2 p-4">
                  <h1 className="text-lg">{item.newsHeadline}</h1>
                  <p className="text-sm">{item.newsPublishedDate}</p>
                  <p className="text-sm text-slate-700">
                    {item.newsDetail.substring(0, 296)}...
                  </p>
                  <Link to={`/news-detail/${item.newsHeadline}`}>
                    <Button />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* --------- Issue Section --------- */}
          <div className="w-1/4 h-[520px] flex-col border shadow-xl bg-offWhite hidden sm:flex">
            <div>
              <h3 className="text-xl font-light border-b bg-darkblue text-white px-4 py-2">
                Issue / Campaigns
              </h3>
            </div>
            {IssueData.slice(0, 2).map((item) => (
              <div className="flex gap-4 p-2" key={item.id}>
                <div className="flex flex-col p-4">
                  <h1 className="text-lg">{item.issueHeadline}</h1>
                  <p className="text-sm">{item.issueDate}</p>
                  <p className="text-sm text-slate-700">{item.issueDetail.substring(0,210)}...</p>
                  <Link to={`/issue-detail/${item.issueHeadline}`}><Button /></Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default News;
