import videoGalleryData from "../../Data/videoGalleryData"
const Introduction = () => {
  return (
    <>
      <div className="bg-redbrand">
        <div className="container mx-auto">
          <div className="py-2 sm:py-4 flex justify-center">
            <div>
              <h1 className="text-base sm:text-2xl text-white tracking-wider">
                CONTACT US (हामीलाई सम्पर्क गर्नुहोस)
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-offWhite">
        <div className="container mx-auto w-full py-4 xl:py-16">
          <div className="flex items-center gap-4 flex-col sm:flex-row px-4 sm:px-0">
            <div
              className=" w-full"
              data-aos="zoom-in-left"
              data-aos-duration="2500"
              data-aos-once="true"
            >
              <div className="w-full text-xl sm:text-4xl font-light pb-4 text-center">
               
              </div>
              <div className="flex justify-center">
                <div className="w-full flex flex-col gap-4 bg-white p-4 sm:p-8 xl:border xl:drop-shadow-2xl xl:w-3/5 xl:p-8 md:w-4/5 md:bg-white md:drop-shadow-xl md:p-8">
                  <div>
                    <p>Name</p>
                    <input
                      type="text"
                      placeholder="Your Full Name"
                      className="w-full p-2 border"
                    />
                  </div>
                  <div>
                    <p>Phone Number</p>
                    <input
                      type="text"
                      placeholder="Your Contact Number"
                      className="w-full p-2 border"
                    />
                  </div>
                  <div>
                    <p>Email</p>
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="w-full p-2 border"
                    />
                  </div>
                  <div>
                    <p>Message</p>
                    <textarea
                      type="text"
                      placeholder="Your Message"
                      className="w-full h-40 p-2 border"
                    />
                  </div>
                  <div className="sm:pt-4 text-start">
                    <button className="bg-bluebrand text-white px-8 py-2 tracking-wide font-semibold transition duration-300">
                      Send
                    </button>
                  </div>
                </div>
              </div>
            </div>
           
          </div>
        </div>
      </div>
    </>
  );
};

export default Introduction;
