import AboutUsImage from "../../assets/aboutUsImage.jpg";

const AboutUsHome = () => {
  return (
    <>
      <div className="bg-offWhite">
        <div className="container mx-auto">
          <div className="flex items-center py-8 mx-40">
            <div className="w-2/3 p-4 flex flex-col">
              <div>
                <h3 className="text-2xl border-b font-light">About Us</h3>
              </div>
              <div>
                <p className="font-light tracking-wide text-slate-700 py-2">
                  १९९७ साल देखि विभिन्न कालखण्डमा नेपाली जनताले संचालन गरेका
                  राणा विरोधी आन्दोलन, निरंकुश पञ्चायत विरोधी आन्दोलन,
                  राजतन्त्रको अन्त्य तथा राष्ट्रिय स्वाधीनताको पक्षमा भएका
                  शान्तिपूर्ण जनक्रान्ति, जनयुद्ध, मधेश जनविद्रोह, आदीवासी
                  जनजाति, खस, आर्य थारु, महिला, मुस्लिम लगायत उत्पीडित वर्ग
                  समुदायले चलाएको आन्दोलन र बलिदानीपुर्ण संघर्षमा नेपाली श्रमिक
                  वर्गले सक्रिय सहभागिता रहँदै आएको तर जुनसुकै राजनितिक
                  परिवर्तनको आन्दोलनमा श्रमिकहरुलाई सडकमा उतार्ने र आन्दोलन सफल
                  भएपछि श्रमिकका आधारभुत समस्याहरु हल गर्न कुनै पनि राजनैतिक
                  पार्टीहरुले उचित भुमिका खेलेको पाईएन...
                </p>
              </div>
              <div>
                <button className="bg-redbrand py-2 px-4 text-sm font-light text-white mt-2">
                  Read More
                </button>
              </div>
            </div>
            <div className="w-1/3 relative h-60">
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
