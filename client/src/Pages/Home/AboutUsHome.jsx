import { Link } from "react-router-dom";
import AboutUsImage from "../../assets/aboutUsImage.jpg";
import aboutUsData from "../../Data/AboutUsData";

const AboutUsHome = () => {
  return (
    <>
      <div className="bg-offWhite">
        <div className="container mx-auto">
          <div className="flex items-center py-4 sm:py-10 gap-4 xl:gap-20 md:gap-10 flex-col sm:flex-row">
            <div className="xl:w-2/3 md:w-1/2 flex flex-col px-4 sm:px-0">
              <div>
                <h3 className="text-2xl border-b font-light">Introduction(परिचय)</h3>
              </div>
              <div>
               
                {aboutUsData.map((item) => (
                   <p className="text-sm tracking-wide text-slate-700 py-2">
                    {item.aboutDetail}
                     </p>
                ))}
               
              </div>
              <div>
                <Link to="/introduction" className=" border border-redbrand py-2 px-4 text-sm font-medium text-redbrand mt-2 transition duration-300 hover:bg-redbrand hover:text-white">
                  Read More
                </Link>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 w-full relative h-80 shadow-2xl border-2 border-white">
              <img
                src={AboutUsImage}
                alt=""
                className="absolute w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUsHome;
