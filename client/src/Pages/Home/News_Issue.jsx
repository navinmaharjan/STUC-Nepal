import Button from "../../Components/Button";
import NewsData from "../../Data/NewsData";
import IssueData from "../../Data/IssueData";

const News_Issue = () => {
  return (
    <>
      <div className="container mx-auto">
        <div className="flex py-10 gap-4">
          {/* --------- News Section --------- */}
          <div className="w-3/4 flex flex-col border shadow-2xl bg-offWhite">
            <div>
              <h3 className="text-2xl font-light border-b bg-bluebrand text-white px-4 py-2">
                News Events
              </h3>
            </div>
            {NewsData.map((item) => (
              <div className="flex gap-4 p-2 border-b ">
                <div className="relative w-1/2 h-60">
                  <img
                    src={item.newsImage}
                    alt=""
                    className="absolute w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col w-1/2 p-4">
                  <h1 className="text-lg">{item.newsHeadline}</h1>
                  <p className="text-sm">{item.newsPublishedDate}</p>
                  <p className="text-sm text-slate-700">{item.newsDetail}</p>
                  <Button />
                </div>
              </div>
            ))}
          </div>

          {/* --------- Issue Section --------- */}
          <div className="w-1/4 flex flex-col border shadow-2xl bg-offWhite">
            <div>
              <h3 className="text-2xl font-light border-b bg-bluebrand text-white px-4 py-2">
                Issue / Campaigns
              </h3>
            </div>
            {IssueData.map((item) => (
              <div className="flex gap-4 p-2">
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

export default News_Issue;
