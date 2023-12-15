import { Link } from "react-router-dom";
import NoticeData from "../../Data/NoticeData";

const Introduction = () => {
  return (
    <>
      <div className="bg-redbrand">
        <div className="container mx-auto">
          <div className="py-4 flex justify-center">
            <div>
              <h1 className="text-2xl text-white tracking-wider">
                NOTICE (प्रकाशनहरू)
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto py-16 flex flex-col gap-4 justify-center">
        {NoticeData.map((item) => (
          <div className="mx-40">
            <div className="bg-offWhite border w-full p-4 flex justify-between items-center">
              <div className="flex gap-2 items-center">
               
                <p className="font-medium text-2xl">
                  {item.noticeHeadline}
                </p>
                {/* <p className="font-medium">{item.publicationDate}</p> */}
              </div>
              <div>
                <Link to={`/notice-detail/${item.noticeHeadline}`} >View</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Introduction;
