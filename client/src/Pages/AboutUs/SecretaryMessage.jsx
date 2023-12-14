import NewsData from "../../Data/NewsData";
import Button from "../../Components/Button";

const ChairmanMessage = () => {
  return (
    <>
      <div className="bg-redbrand">
        <div className="container mx-auto">
          <div className="py-4 flex justify-center">
            <div>
              <h1 className="text-2xl text-white tracking-wider">
                MESSAGE FROM SECRETARY
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto">
        <div className="flex py-10 gap-4 items-start">
          {/* --------- Issue Section --------- */}
          <div className="w-3/4 flex flex-col p-8 border shadow-xl bg-offWhite">
            <p className="text-xl font-medium">
              समाजवादी ट्रेड युनियन महासंघ नेपालका अध्यक्ष श्री नवराज दाहालको
              विश्वका श्रमजिवी वर्गहरुको लागि व्यक्त गर्नु भएको सन्देश !{" "}
            </p>
            <p className="text-lg py-2">प्रियश्रमजिवी श्रमिक साथीहरु,</p>

            <p className="mr-40">
              टेक्नोलोजीको विकास पछि विश्वभरि उत्पादन सम्बन्धी एवं उत्पादन
              प्रणालीमा आएको फेरबदल साथै दासी युग समाप्ती हुँदै पुँजीवादी युग
              सम्म आइपुग्दा हामी श्रमजीवी वर्ग माथि शोसन गर्ने शैली एवं तरिका
              फरक हुँदै आएको छ । विश्वमा समाज विकास सँगै आएको यो फेरबदललाई
              अबसरको साथ साथै ठुलो चुनौतीको रुपमा ग्रहण गरि अबको नयाँ शैलीको
              शोसन विरुद्धको संगर्षमा एक जुट हुँदै योगदानमा आधारित सामाजिक
              सुरक्षामा एकवद्धता हुँदै समाजवादको यात्रामा अगाडि बढ्नका निमित्त
              समाजवादी ट्रेड युनियन महासंघ नेपाल को स्वतन्त्रताको झण्डा मुनी
              गोलबन्द हुन विश्वका सम्पुर्ण श्रमिक वर्गहरुमा हार्दिक अपिल गर्दछु
              ।
            </p>

            <p className="text-lg font-medium pt-2">अध्यक्ष</p>

            <p className="text-lg font-medium">नवराज दाहाल</p>
          </div>

          {/* --------- News Section --------- */}
          <div className="w-1/4 h-[520px] flex flex-col border shadow-xl bg-offWhite">
            <div>
              <h3 className="text-xl font-light border-b bg-bluebrand text-white px-4 py-2">
                News / Events
              </h3>
            </div>
            {NewsData.slice(0, 2).map((item) => (
              <div className="flex gap-4 p-2" key={item.id}>
                {/* <div className="relative w-1/2 h-60">
                  <img
                    src={item.newsImage}
                    alt=""
                    className="absolute w-full h-full object-cover"
                  />
                </div> */}
                <div className="flex flex-col p-4">
                  <h1 className="text-lg">{item.newsHeadline}</h1>
                  <p className="text-sm">{item.newsPublishedDate}</p>
                  <p className="text-sm text-slate-700">{item.newsDetail.substring(0,240)}...</p>
                  <Button />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ChairmanMessage;
