import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.jpeg";
const Header = () => {
  const [aboutUs, setAboutUs] = useState(false);
  const [gallery, setGallery] = useState(false);
  return (
    <>
      <div className="bg-darkblue">
        <div className="container mx-auto">
          <div className="flex text-white gap-4 font-light py-2 text-sm">
            <a href="">bhandari.hikmat01@gmail.com</a>
            <a href="">+977-9851097496</a>
            <p>Kathmandu, Nepal</p>
          </div>
        </div>
      </div>
      <div className="container mx-auto">
        <div className=" flex justify-center items-center py-2 pr-24">
          <Link to="/" className="relative w-1/6 h-32">
            <img
              src={Logo}
              alt="logo"
              className="absolute w-full h-full object-contain"
            />
          </Link>
          <div>
            <h1 className="uppercase text-5xl tracking-wider font-medium text-blue-900">
              {/* समाजवादी <span className="text-redbrand">ट्रेड युनियन</span> महासंघ */}
              socialist <span className="text-redbrand">trade union</span>{" "}
              confederation
            </h1>
            <h1 className="uppercase text-2xl tracking-wider font-medium text-blue-900 text-left">
              समाजवादी ट्रेड युनियन महासंघ, नेपाल (केन्द्रीय समिति)
            </h1>
          </div>
        </div>
      </div>
      <div className="sticky top-0 left-0 z-10 shadow-2xl">
        <ul className="flex justify-center bg-darkblue gap-8 text-white ">
          <Link to="/">
            <li className="tracking-wide font-medium py-4">Home</li>
          </Link>
          <li
            className="tracking-wider font-medium relative py-4"
            onMouseEnter={() => setAboutUs(true)}
            onMouseLeave={() => setAboutUs(false)}
          >
            About Us
            {aboutUs && (
              <div
                className={`absolute top-[56px] left-0 bg-white w-[250px] shadow-2xl`}
              >
                <ul className="text-slate-900">
                  <Link to="/history">
                    <li className="py-2 px-4 text-slate-700 hover:bg-offWhite">
                      History
                    </li>
                  </Link>
                  <Link to="/associate-organization">
                    <li className="py-2 px-4 text-slate-700 hover:bg-offWhite">
                      Associate Organization
                    </li>
                  </Link>
                  <Link to="/board-of-directors">
                    <li className="py-2 px-4 text-slate-700 hover:bg-offWhite">
                      Board of Directors
                    </li>
                  </Link>
                  <Link to="#">
                    <li className="py-2 px-4 text-slate-700 hover:bg-offWhite">
                      Bidhan in Nepali
                    </li>
                  </Link>
                  <Link to="#">
                    <li className="py-2 px-4 text-slate-700 hover:bg-offWhite">
                      Bidhan in English
                    </li>
                  </Link>
                </ul>
              </div>
            )}
          </li>
          <Link to="/news-events"><li className="tracking-wider font-medium  py-4">News/Events</li></Link>
          <Link to="/issue-campaigns"><li className="tracking-wider font-medium  py-4">Issue/Campaigns</li></Link>
          <Link to="/publications"><li className="tracking-wider font-medium  py-4">Publications</li></Link>
          <Link to="/member-form">
            <li className="tracking-wider font-medium  py-4">
              Membership Form
            </li>
          </Link>
          <li
            className="tracking-wider font-medium  py-4 relative"
            onMouseEnter={() => setGallery(true)}
            onMouseLeave={() => setGallery(false)}
          >
            Gallery
            {gallery && (
              <div
                className={`absolute top-[56px] left-0 bg-white w-[150px] shadow-2xl`}
              >
                <ul className="text-slate-900">
                  <Link to="/image-gallery">
                    <li className="py-2 px-4 text-slate-700 hover:bg-offWhite">
                      Image Gallery
                    </li>
                  </Link>
                  <Link to="/video-gallery">
                    <li className="py-2 px-4 text-slate-700 hover:bg-offWhite">
                      Video Gallery
                    </li>
                  </Link>
                </ul>
              </div>
            )}
          </li>
          <Link to="/download"><li className="tracking-wider font-medium  py-4">Download</li></Link>
          <Link to="/contact-us"><li className="tracking-wider font-medium  py-4">Contact Us</li></Link>
        </ul>
      </div>
    </>
  );
};

export default Header;
