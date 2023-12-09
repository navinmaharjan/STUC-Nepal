import Logo from "../assets/logo.jpeg";

const Footer = () => {
  return (
    <>
      <div className="bg-offWhite">
        <div className="container mx-auto">
          <div className="flex justify-center items-center flex-col gap-4 py-4">
            <div className="relative w-full h-28">
              <img
                src={Logo}
                alt="logo"
                className="absolute w-full h-full object-contain"
              />
            </div>
            <div className="flex gap-4 text-slate-900">
              <p>Kathmandu, Nepal</p>
              <p>Kathmandu, Nepal</p>
              <p>Kathmandu, Nepal</p>
            </div>
            <div className="flex gap-4 text-slate-900">
              <p>Copyrights © 2021 STUC Nepal. All Rights Reserved</p>
            </div>
            <div className="flex gap-4 text-slate-900">
              <p>Powered By: Radiant InfoTech Nepal</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
