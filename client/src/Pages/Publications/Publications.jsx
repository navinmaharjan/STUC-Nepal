import PubliationData from "../../Data/PublicationData"
const Introduction = () => {
  return (
    <>
      <div className="bg-blue-700">
        <div className="container mx-auto">
          <div className="py-8 flex justify-center">
            <div>
              <h1 className="text-5xl text-white tracking-wider">
                PUBLICATIONS (प्रकाशनहरू)
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto py-16 flex justify-center">
        <table>
          <thead>
            <tr>
              <th className="sm:w-16  bg-brand text-slate-900 font-medium border border-black">
                S.no
              </th>
              <th className="sm:w-[600px]  bg-brand text-slate-900 font-medium border border-black">
                Publication Heading
              </th>
              <th className="border sm:w-48  bg-brand text-slate-900 font-medium border-black">
                Publication Date
              </th>
              <th className="border sm:w-48  bg-brand text-slate-900 font-medium border-black">
                Download
              </th>
            </tr>
          </thead>

          {PubliationData.map((item) => (
                <tbody>
                <tr>
                  <td className="sm:w-20 bg-gray-200 border border-black text-center">
                    {item.id}
                  </td>
                  <td className="sm:w-[600px] bg-gray-200 border border-black text-center">
                   {item.publicationHeading}
                  </td>
                  <td className="border sm:w-48 bg-gray-200 border-black text-center">
                    {item.publicationDate}
                  </td>
                  <td className="border sm:w-48 bg-gray-200 border-black text-center">
                    <a
                      href={item.publicationFile}
                      className="text-brand hover:opacity-70"
                      target="_blank"
                    >
                     Click
                    </a>
                  </td>
                </tr>
                {/* <!-- Add more rows as needed --> */}
              </tbody>
          ))}
        
        </table>
      </div>
    </>
  );
};

export default Introduction;
