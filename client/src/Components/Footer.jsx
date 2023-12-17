import Logo from "../assets/logo.jpeg";

const Footer = () => {
  return (
    <>
      <div className="bg-bluebrand">
        <div className="container mx-auto">
          <div className="flex justify-center items-center flex-col sm:gap-4 gap-2 py-4">
            <div className="relative w-full h-20 sm:h-28">
              <img
                src={Logo}
                alt="logo"
                className="absolute w-full h-full object-contain"
              />
            </div>
            <div className="flex sm:gap-4 text-white flex-col ">
              <p>Kathmandu, Nepal</p>
              <p>Kathmandu, Nepal</p>
              <p>Kathmandu, Nepal</p>
            </div>
            <div className="flex text-white text-sm sm:text-base">
              <p>Copyrights © 2021 STUC Nepal. All Rights Reserved</p>
            </div>
            <div className="flex text-white">
              <p>Powered By: Radiant InfoTech Nepal</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
