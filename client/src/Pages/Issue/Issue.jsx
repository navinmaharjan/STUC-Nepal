import NewsData from "../../Data/NewsData";
import IssueData from "../../Data/IssueData";
import Button from "../../Components/Button";
const Introduction = () => {
  return (
    <>
      <div className="bg-redbrand">
        <div className="container mx-auto">
          <div className="py-4 flex justify-center">
            <div>
              <h1 className="text-2xl text-white tracking-wider">
                ISSUE / CAMPAIGNS (मुद्दा / अभियान)
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto">
        <div className="flex py-10 gap-4">
          {/* --------- Issue Section --------- */}
          <div className="w-3/4 flex flex-col border shadow-xl bg-offWhite">
            <div>
              <h3 className="text-xl font-light border-b bg-darkblue text-white px-4 py-2">
                Issue / Campaigns
              </h3>
            </div>
            {IssueData.map((item) => (
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
                  <p className="text-sm">{item.newsPublishedDate}</p>
                  <p className="text-sm text-slate-700">{item.newsDetail}</p>
                  <Button />
                </div>
              </div>
            ))}
          </div>

          {/* --------- News Section --------- */}
          <div className="w-1/4 h-[520px] flex flex-col border shadow-xl bg-offWhite">
            <div>
              <h3 className="text-xl font-light border-b bg-darkblue text-white px-4 py-2">
                News / Events
              </h3>
            </div>
            {NewsData.slice(0,2).map((item) => (
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

export default Introduction;
