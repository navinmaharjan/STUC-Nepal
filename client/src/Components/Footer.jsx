import { Link } from "react-router-dom";
import Logo from "../../src/assets/logo.jpeg";

const Footer = () => {
  return (
    <div className="w-full bg-darkblue">
      <div className="container mx-auto flex flex-col justify-between items-start py-8 xl:flex-row">
        <div className="flex flex-col justify-center items-center gap-2 mx-auto">
          <div className="relative w-28 h-28 sm:w-32 sm:h-32">
            <img
              src={Logo}
              alt="logo"
              className="absolute w-full h-full object-contain"
            />
          </div>

          <div className=" text-center">
            <h3 className=" font-semibold tracking-wide text-white text-xl sm:text-3xl">
              SOCIALIST <span className="text-redbrand">TRADE UNION</span>{" "}
              CONFEDERATION
            </h3>
            <h3 className=" font-light tracking-wide text-white sm:text-lg">
              समाजवादी ट्रेड युनियन महासंघ, नेपाल (केन्द्रीय समिति)
            </h3>
            <p className="text-white font-light pt-2">STUC Address, Baluwatar, Kathmandu, Nepal</p>
            <p className="text-white font-light">Ph: 01-5341398, 5326196, 5321194</p>
            <p className="text-white font-light">Email: info@stucnepal.org</p>
          </div>
        </div>
      </div>

      <div className="bg-[#16213E] text-center px-4 sm:px-0">
        <p className=" text-xs text-slate-200 py-2">
          © 2008 - 2023 Socialist Trade Union Confederation. All rights reserved | Powered by &nbsp;
          <a
            href="https://radiantnepal.com/"
            target="_blank"
            className="text-redbrand"
          >
             Radiant InfoTech
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
