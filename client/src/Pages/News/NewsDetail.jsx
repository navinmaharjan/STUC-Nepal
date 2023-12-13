import { useParams } from "react-router-dom";
import NewsData from "../../Data/NewsData";
import IssueData from "../../Data/IssueData";
import Button from "../../Components/Button";
import { Link } from "react-router-dom";

const NewsDetail = () => {
  const { id } = useParams();
  const newsDetail = NewsData.find((item) => item.newsHeadline === id);
  console.log(newsDetail);
  return (
    <>
      <div className="bg-blue-700">
        <div className="container mx-auto">
          <div className="py-8 flex justify-center">
            <div>
              <h1 className="text-5xl text-white tracking-wider">
                {newsDetail.newsHeadline}
              </h1>
              <p className="text-center text-white">
                {newsDetail.newsPublishedDate}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto">
        <div className="flex py-10 gap-4">
          {/* --------- News Detail --------- */}
          <div className="w-3/4 flex p-8 border shadow-xl bg-offWhite flex-col">
            <div className="relative w-full h-[500px]">
                <img src={newsDetail.newsImage} alt="" className="absolute w-full h-full object-cover" />
            </div>
            <p className="text-lg py-4">{newsDetail.newsDetail}</p>
          </div>

          {/* --------- Issue Section --------- */}
          <div className="w-1/4 h-[520px] flex flex-col border shadow-xl bg-offWhite">
            <div>
              <h3 className="text-2xl font-light border-b bg-darkblue text-white px-4 py-2">
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
                  <h1 className="text-lg">{item.newsHeadline}</h1>
                  <p className="text-sm">{item.newsPublishedDate}</p>
                  <p className="text-sm text-slate-700">{item.newsDetail}</p>
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

export default NewsDetail;
