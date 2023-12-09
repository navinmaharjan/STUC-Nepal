import { Link } from "react-router-dom";
import Logo from "../assets/logo.jpeg";
const Header = () => {
  return (
    <>
      <div className="bg-bluebrand">
        <div className="container mx-auto">
          <div className="flex text-white gap-4 font-light py-2 text-sm">
            <a href="">bhandari.hikmat01@gmail.com</a>
            <a href="">+977-9851097496</a>
            <p>Kathmandu, Nepal</p>
          </div>
        </div>
      </div>
      <div className="container mx-auto">
        <div className=" flex justify-center items-center py-2">
          <div className="relative w-1/6 h-32">
            <img
              src={Logo}
              alt="logo"
              className="absolute w-full h-full object-contain"
            />
          </div>
          <div>
            <h1 className="uppercase text-5xl tracking-wider font-medium text-blue-900">
              {/* समाजवादी <span className="text-redbrand">ट्रेड युनियन</span> महासंघ */}
              socialist <span className="text-redbrand">trade union</span>{" "}
              confederation
            </h1>
          </div>
        </div>
      </div>
      <div className="">
        <ul className="flex justify-center bg-bluebrand gap-8 py-4 text-white">
          <li className="tracking-wide font-light">Home</li>
          <li className="tracking-wide font-light">About Us</li>
          <li className="tracking-wide font-light">News/Events</li>
          <li className="tracking-wide font-light">Issue/Campaigns</li>
          <li className="tracking-wide font-light">Publications</li>
          <Link to="/member-form">
            <li className="tracking-wide font-light">Membership Form</li>
          </Link>
          <li className="tracking-wide font-light">Gallery</li>
          <li className="tracking-wide font-light">Download</li>
          <li className="tracking-wide font-light">Contact Us</li>
        </ul>
      </div>
    </>
  );
};

export default Header;
