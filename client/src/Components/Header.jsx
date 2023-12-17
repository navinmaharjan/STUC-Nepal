import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.jpeg";
import Flag from "../assets/stuc_flag.png";
const Header = () => {
  const [aboutUs, setAboutUs] = useState(false);
  const [gallery, setGallery] = useState(false);
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
    if (!nav) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  };

  const handleAboutUs = () => {
    setAboutUs(!aboutUs);
  };

  const handleGallery = () => {
    setGallery(!gallery);
  };
  return (
    <>
      <div className="bg-darkblue hidden sm:block">
        <div className="container mx-auto">
          <div className="flex text-white gap-4 font-light py-2 text-sm">
            <a href="">bhandari.hikmat01@gmail.com</a>
            <a href="">+977-9851097496</a>
            <p>Kathmandu, Nepal</p>
          </div>
        </div>
      </div>
      <div className="container mx-auto">
        <div className=" flex justify-between items-center py-2 sm:pr-24 flex-col sm:flex-row">
          <Link to="/" className="relative w-1/6 h-32 hidden sm:block">
            <img
              src={Logo}
              alt="logo"
              className="absolute w-full h-full object-contain"
            />
          </Link>
          <div className="pr-0 sm:pr-16">
            <h1 className="uppercase text-xl sm:text-4xl text-center tracking-wider font-bold text-blue-900">
              socialist <span className="text-redbrand">trade union</span>{" "}
              confederation
            </h1>
            <h1 className="uppercase text-medium  sm:text-2xl tracking-wider font-medium text-blue-900 text-center hidden sm:block">
              समाजवादी ट्रेड युनियन महासंघ, नेपाल (केन्द्रीय समिति)
            </h1>
          </div>
          <div className="relative w-[150px] h-32 hidden sm:block">
            <img
              src={Flag}
              alt="logo"
              className="absolute w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
      <div className="sticky top-0 left-0 z-10 bg-darkblue">
        <div
          className="py-2 px-4 flex text-white justify-between items-center sm:hidden"
          onClick={handleNav}
        >
          <i className="fa-solid fa-bars text-xl text-brand"></i>
          <p> समाजवादी ट्रेड युनियन महासंघ, नेपाल (केन्द्रीय समिति)</p>
        </div>

        {/* --------- mobile menu ---------- */}
        <div
          className={`fixed top-0 w-full h-screen overflow-y-auto bg-darkblue  transition-all duration-300 opacity-95 sm:hidden ${
            !nav ? `-right-[390px]` : `right-0`
          }`}
        >
          <div className="w-full h-full">
            <div className="w-full text-right p-4">
              <i
                className="fa-solid fa-xmark text-2xl text-white"
                onClick={handleNav}
              ></i>
            </div>
            <div className="w-full">
              <ul className="flex flex-col gap-4 text-center mt-20 font-light uppercase tracking-wider text-white text-lg">
                <Link to="/" onClick={handleNav}>
                  <li>Home</li>
                </Link>
                <li onClick={handleAboutUs}>About Us </li>
                {aboutUs && (
                  <div className="w-[260px] text-slate-900 rounded-lg bg-offWhite text-base mx-auto py-4">
                    <ul className="flex flex-col gap-4">
                      <Link
                        to="/introduction"
                        onClick={() => {
                          handleNav(), handleAboutUs();
                        }}
                      >
                        {" "}
                        <li>Introduction</li>
                      </Link>
                      <Link
                        to="/associate-organization"
                        onClick={() => {
                          handleNav(), handleAboutUs();
                        }}
                      >
                        {" "}
                        <li>Associate Organization</li>
                      </Link>
                      <Link
                        to="/board-of-directors"
                        onClick={() => {
                          handleNav(), handleAboutUs();
                        }}
                      >
                        {" "}
                        <li>Board Of Directors</li>
                      </Link>
                      <Link
                        to="/message-from-chairman"
                        onClick={() => {
                          handleNav(), handleAboutUs();
                        }}
                      >
                        {" "}
                        <li>Message From Chairman</li>
                      </Link>
                      <Link
                        to="/message-from-secretary"
                        onClick={() => {
                          handleNav(), handleAboutUs();
                        }}
                      >
                        {" "}
                        <li>Message From Secretary</li>
                      </Link>
                      <Link
                        to="/bidhan"
                        onClick={() => {
                          handleNav(), handleAboutUs();
                        }}
                      >
                        {" "}
                        <li>Bidhans</li>
                      </Link>
                    </ul>
                  </div>
                )}
                <Link to="/news-events" onClick={handleNav}>
                  <li>News/Events</li>
                </Link>
                <Link to="/issue-campaigns" onClick={handleNav}>
                  <li>Issue/Campaigns</li>
                </Link>
                <Link to="/publications" onClick={handleNav}>
                  <li>Publications</li>
                </Link>
                <Link to="/member-form" onClick={handleNav}>
                  <li>Membership Form</li>
                </Link>
                <li onClick={handleGallery}>Gallery</li>
                {gallery && (
                  <div className="w-[260px] bg-offWhite text-slate-900 rounded-lg text-base mx-auto py-4">
                    <ul className="flex flex-col gap-4">
                      <Link
                        to="/image-gallery"
                        onClick={() => {
                          handleNav(), handleGallery();
                        }}
                      >
                        <li>Image Gallery</li>
                      </Link>
                      <Link
                        to="/video-gallery"
                        onClick={() => {
                          handleNav(), handleGallery();
                        }}
                      >
                        <li>Video GAllery</li>
                      </Link>
                    </ul>
                  </div>
                )}
                <Link to="/download" onClick={handleNav}>
                  <li>Download</li>
                </Link>
                <Link to="/press-release" onClick={handleNav}>
                  <li>Press Release</li>
                </Link>
                <Link to="/contact-us" onClick={handleNav}>
                  <li>Contact Us</li>
                </Link>
              </ul>
            </div>
          </div>
        </div>

        {/* ----------desktop menu ---------- */}
        <ul className=" justify-center  gap-4 text-white hidden sm:flex">
          <Link to="/">
            <li className="tracking-wide font-medium py-2 px-4 border-b bg-bluebrand border-white">
              Home
            </li>
          </Link>
          <li
            className="tracking-wider font-medium relative py-2 px-4"
            onMouseEnter={() => setAboutUs(true)}
            onMouseLeave={() => setAboutUs(false)}
          >
            About Us
            {aboutUs && (
              <div
                className={`absolute top-[40px] left-0 bg-white w-[250px] shadow-2xl`}
              >
                <ul className="text-slate-900">
                  <Link to="/introduction">
                    <li className="py-2 px-4 text-slate-700 hover:bg-offWhite">
                      Inroduction
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
                  <Link to="message-from-chairman">
                    <li className="py-2 px-4 text-slate-700 hover:bg-offWhite">
                      Message from Chairman
                    </li>
                  </Link>
                  <Link to="message-from-secretary">
                    <li className="py-2 px-4 text-slate-700 hover:bg-offWhite">
                      Message from Secretary
                    </li>
                  </Link>
                  <Link to="bidhan">
                    <li className="py-2 px-4 text-slate-700 hover:bg-offWhite">
                      Bidhans
                    </li>
                  </Link>
                </ul>
              </div>
            )}
          </li>
          <Link to="/news-events">
            <li className="tracking-wider font-medium  py-2 px-4">
              News/Events
            </li>
          </Link>
          <Link to="/issue-campaigns">
            <li className="tracking-wider font-medium  py-2 px-4">
              Issue/Campaigns
            </li>
          </Link>
          <Link to="/publications">
            <li className="tracking-wider font-medium  py-2 px-4">
              Publications
            </li>
          </Link>
          <Link to="/member-form">
            <li className="tracking-wider font-medium  py-2 px-4">
              Membership Form
            </li>
          </Link>
          <li
            className="tracking-wider font-medium  py-2 px-4 relative"
            onMouseEnter={() => setGallery(true)}
            onMouseLeave={() => setGallery(false)}
          >
            Gallery
            {gallery && (
              <div
                className={`absolute top-[40px] left-0 bg-white w-[150px] shadow-2xl`}
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
          <Link to="/download">
            <li className="tracking-wider font-medium  py-2 px-4">Download</li>
          </Link>
          <Link to="/press-release">
            <li className="tracking-wider font-medium  py-2 px-4">
              Press Release
            </li>
          </Link>
          <Link to="/contact-us">
            <li className="tracking-wider font-medium  py-2 px-4">
              Contact Us
            </li>
          </Link>
        </ul>
      </div>
    </>
  );
};

export default Header;
