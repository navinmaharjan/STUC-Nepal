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
              <h3 className="text-2xl font-light border-b bg-bluebrand text-white px-4 py-1">
                News Events
              </h3>
            </div>
            {NewsData.slice(0,2).map((item) => (
              <div className="flex gap-4 p-2 border-b" key={item.id}>
                <div className="relative w-1/2 h-60">
                  <img
                    src={item.newsImage}
                    alt=""
                    className="absolute w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col w-1/2 p-4">
                  <h1 className="text-lg">{item.newsHeadline}</h1>
                  <p className="text-sm py-1">{item.newsPublishedDate}</p>
                  <p className="text-sm text-slate-700">{item.newsDetail.substring(0,208)}...</p>
                  <Button />
                </div>
              </div>
            ))}
          </div>

          {/* --------- Issue Section --------- */}
          <div className="w-1/4 flex flex-col border shadow-2xl bg-offWhite">
            <div>
              <h3 className="text-2xl font-light border-b bg-redbrand text-white px-4 py-1">
                Issue / Campaigns
              </h3>
            </div>
            {IssueData.slice(0,2).map((item) => (
              <div className="flex gap-4 p-2" key={item.id}>
                <div className="flex flex-col p-4">
                  <h1 className="text-lg">{item.newsHeadline}</h1>
                  <p className="text-sm py-1">{item.newsPublishedDate}</p>
                  <p className="text-sm text-slate-700">{item.newsDetail.substring(0,200)}...</p>
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
