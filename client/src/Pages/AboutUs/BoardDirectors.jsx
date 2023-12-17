import NewsData from "../../Data/NewsData";
import IssueData from "../../Data/IssueData";
import Button from "../../Components/Button";
import BoardDirectors from "../../Data/BoardDirectors";
import { Link } from "react-router-dom";

const History = () => {
  return (
    <>
      <div className="bg-redbrand">
        <div className="container mx-auto">
          <div className="py-2 sm:py-4 flex justify-center">
            <div>
              <h1 className="text-base sm:text-2xl text-white tracking-wider">
                BOARD OF DIRECTORS (निर्देशक बोर्ड)
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto">
        <div className="flex sm:py-10 sm:gap-4 flex-col sm:flex-row">
          {/* --------- Board of Directors Section --------- */}
          <div className="sm:w-3/4 flex flex-col p-4 border shadow-xl bg-offWhite pt-5">
            <div className="mx-auto">
              {BoardDirectors.slice(0, 1).map((item) => (
                <div className="flex flex-col justify-center items-center">
                  <div className="relative w-40 h-40 rounded-full overflow-hidden">
                    <img
                      src={item.boardMemberImage}
                      alt=""
                      className="absolute w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-xl font-semibold text-redbrand">
                    {item.boardDesignation}
                  </p>
                  <p className="text-lg font-medium">{item.boardMemberName}</p>
                </div>
              ))}
            </div>
            <div className="mx-auto flex gap-8 py-8 flex-col sm:flex-row">
              {BoardDirectors.slice(1, 5).map((item) => (
                <div className="flex flex-col justify-center items-center">
                  <div className="relative w-40 h-40 rounded-full overflow-hidden">
                    <img
                      src={item.boardMemberImage}
                      alt=""
                      className="absolute w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-xl font-semibold text-redbrand">
                    {item.boardDesignation}
                  </p>
                  <p className="text-lg font-medium">{item.boardMemberName}</p>
                </div>
              ))}
            </div>
            <div className="grid gap-8 sm:first-letter:py-14 sm:grid-cols-4 mx-16">
              {BoardDirectors.slice(5, 36).map((item) => (
                <div className="flex flex-col justify-center items-center bg-white py-2 px-4">
                  <p className="text-xl font-semibold text-redbrand">
                    {item.boardDesignation}
                  </p>
                  <p className="sm:text-lg font-medium">{item.boardMemberName}</p>
                </div>
              ))}
            </div>
          </div>

          {/* --------- News Section --------- */}
          <div className="w-1/4 h-[520px]  flex-col border bg-offWhite hidden sm:flex">
            <div>
              <div>
                <h3 className="text-2xl font-light border-b bg-darkblue text-white px-4 py-2">
                  News / Events
                </h3>
              </div>
              {NewsData.slice(0, 2).map((item) => (
                <div className="flex gap-4 p-2" key={item.id}>
                  <div className="flex flex-col p-4">
                    <h1 className="text-lg">{item.newsHeadline}</h1>
                    <p className="text-sm">{item.newsPublishedDate}</p>
                    <p className="text-sm text-slate-700">{item.newsDetail.substring(0,180)}...</p>
                    <Link to={`/news-detail/${item.newsHeadline}`}><Button /></Link>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-offWhite border mt-4">
              <div>
                <h3 className="text-2xl font-light border-b bg-darkblue text-white px-4 py-2">
                  Issue / Campaigns
                </h3>
              </div>
              {IssueData.slice(0, 2).map((item) => (
                <div className="flex gap-4 p-2" key={item.id}>
                  <div className="flex flex-col p-4">
                    <h1 className="text-lg">{item.issueHeadline}</h1>
                    <p className="text-sm">{item.issueDate}</p>
                    <p className="text-sm text-slate-700">{item.issueDetail.substring(0,180)}</p>
                    <Link to={`/issue-detail/${item.issueHeadline}`}><Button /></Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default History;
