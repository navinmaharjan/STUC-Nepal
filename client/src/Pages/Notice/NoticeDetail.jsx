import { Link, useParams } from "react-router-dom";
import IssueData from "../../Data/IssueData";
import Button from "../../Components/Button";
import NoticeData from "../../Data/NoticeData";

const NoticeDetail = () => {
  const { id } = useParams();
  const noticeDetail = NoticeData.find((item) => item.noticeHeadline === id);

  return (
    <>
      <div className="bg-redbrand">
        <div className="container mx-auto">
          <div className="py-2 sm:py-4 flex justify-center">
            <div>
              <h1 className="text-base sm:text-2xl text-white tracking-wider">
                {noticeDetail.noticeHeadline}
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto">
        <div className="flex py-4 sm:py-10 gap-4">
          {/* --------- News Detail --------- */}
          <div className="sm:w-3/4 flex p-8 border shadow-xl bg-offWhite flex-col items-start">
            <p className="text-lg">{noticeDetail.noticeDetail}</p>
            <Link to="/notice" className="pt-8">See All Notices</Link>
          </div>

          {/* --------- Issue Section --------- */}
          <div className="w-1/4 h-[520px]  flex-col border shadow-xl bg-offWhite hidden sm:flex">
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
                  <Link to={`/issue-detail/${item.issueHeadline}`}>
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

export default NoticeDetail;
