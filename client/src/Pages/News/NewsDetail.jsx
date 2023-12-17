import { Link, useParams } from "react-router-dom";
import NewsData from "../../Data/NewsData";
import IssueData from "../../Data/IssueData";
import Button from "../../Components/Button";

const NewsDetail = () => {
  const { id } = useParams();
  const newsDetail = NewsData.find((item) => item.newsHeadline === id);

  return (
    <>
      <div className="bg-redbrand">
        <div className="container mx-auto">
          <div className="py-2 sm:py-4 flex justify-center">
            <div>
              <h1 className="text base sm:text-2xl text-white tracking-wider">
                {newsDetail.newsHeadline}
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto">
        <div className="flex sm:py-10 gap-4">
          {/* --------- News Detail --------- */}
          <div className="sm:w-3/4 flex p-4 sm:p-8 border shadow-xl bg-offWhite flex-col items-start">
            <div className="relative w-full h-[250px] sm:h-[500px]">
              <img
                src={newsDetail.newsImage}
                alt=""
                className="absolute w-full h-full object-cover"
              />
            </div>
            <p className="text-center text-slate-900 pt-2">
              {newsDetail.newsPublishedDate}
            </p>
            <p className="text-base sm:text-lg">{newsDetail.newsDetail}</p>
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
                  <p className="text-sm text-slate-700">{item.issueDetail}</p>
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

export default NewsDetail;
