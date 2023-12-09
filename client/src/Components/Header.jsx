import { Link } from "react-router-dom";
import Logo from "../assets/logo.jpeg";
const Header = () => {
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
      <div className="">
        <ul className="flex justify-center bg-darkblue gap-8 py-4 text-white">
          <Link to="/">
            <li className="tracking-wide font-medium" >Home</li>
          </Link>
          <li className="tracking-wider font-medium">About Us</li>
          <li className="tracking-wider font-medium">News/Events</li>
          <li className="tracking-wider font-medium">Issue/Campaigns</li>
          <li className="tracking-wider font-medium">Publications</li>
          <Link to="/member-form">
            <li className="tracking-wider font-medium">Membership Form</li>
          </Link>
          <li className="tracking-wider font-medium">Gallery</li>
          <li className="tracking-wider font-medium">Download</li>
          <li className="tracking-wider font-medium">Contact Us</li>
        </ul>
      </div>
    </>
  );
};

export default Header;
