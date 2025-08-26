import { motion } from "framer-motion";
import {
  FaUserTie,
  FaSitemap,
  FaUsers,
  FaTasks,
  FaCalendarAlt,
  FaFileAlt,
  FaSpinner,
} from "react-icons/fa";
import { useLanguage } from "../../contexts/LanguageContext";
import { useState, useEffect } from "react";

const OrganizationalChart = () => {
  const { language } = useLanguage();
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          "https://jalgaonback.demovoting.com/api/organizational-chart"
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setContent(data);
      } catch (err) {
        console.error("Error fetching organizational chart data:", err);
        setError(err.message);

        // Fallback to default content if API fails
        setContent({
          title: {
            en: "Organizational Structure",
            mr: "संस्थात्मक रचना",
          },
          hierarchyTitle: {
            en: "Jalgaon District Planning Committee Hierarchy",
            mr: "जळगांव जिल्हा नियोजन समिती पदानुक्रम",
          },
          structure: [],
          decisionProcess: {
            title: {
              en: "Decision Making Process & Responsibilities",
              mr: "निर्णय प्रकिया व जबाबदाऱ्या",
            },
            subtitle: {
              en: "Development Plan Preparation Process",
              mr: "विकास आराखडा तयार करण्याची प्रक्रिया",
            },
            act: {
              en: "Related Act: District Planning Committee (Structure & Functions) Act 1998",
              mr: "संबंधित कायदा: जिल्हा नियोजन समिती (रचना व कामे) अधिनियम 1998",
            },
            process: [],
          },
          composition: {
            title: {
              en: "Key Responsibilities",
              mr: "मुख्य जबाबदाऱ्या",
            },
            items: [],
          },
          committees: {
            title: {
              en: "Governing References",
              mr: "शासकीय संदर्भ",
            },
            items: [],
          },
        });
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const getText = (item) => {
    if (!item) return "";

    if (Array.isArray(item)) {
      return item[language] || item.en || "";
    }

    if (typeof item === "object" && item !== null) {
      return item[language] || item.en || "";
    }

    return item;
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
        <div className="text-center">
          <FaSpinner className="animate-spin text-4xl text-blue-600 mx-auto mb-4" />
          <p className="text-gray-600">Loading organizational data...</p>
        </div>
      </div>
    );
  }

  if (error && !content) {
    return (
      <div className="max-w-6xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="bg-red-50 border border-red-200 rounded-md p-4">
          <h3 className="text-red-800 font-medium">Error loading data</h3>
          <p className="text-red-700 mt-1">{error}</p>
          <p className="text-red-700 mt-2">
            Please check if the backend server is running.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          {getText(content.title)}
        </h1>
        <div className="border-b-2 border-blue-100 w-20 mb-6"></div>
      </motion.div>

      {/* Organizational Hierarchy Section */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <div className="flex items-center mb-4">
          <FaSitemap className="text-blue-600 text-2xl mr-3" />
          <h2 className="text-2xl font-semibold text-blue-700">
            {getText(content.hierarchyTitle)}
          </h2>
        </div>

        {content.structure && content.structure.length > 0 ? (
          <div className="space-y-4 pr-4">
            {content.structure.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="border-l-4 border-blue-500 pl-4 py-3 hover:bg-blue-50 transition"
              >
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-4">
                    <FaUserTie className="text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-medium text-gray-800">
                      {getText(item.level)}
                    </h3>
                    <p className="text-blue-900 font-medium">
                      {getText(item.name)}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-8 text-gray-500">
            No organizational structure data available
          </div>
        )}
      </div>

      {/* Decision Making Process Section */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <div className="flex items-center mb-4">
          <FaCalendarAlt className="text-blue-600 text-2xl mr-3" />
          <h2 className="text-2xl font-semibold text-blue-700">
            {getText(content.decisionProcess.title)}
          </h2>
        </div>

        <h3 className="text-lg font-medium text-gray-800 mb-2">
          {getText(content.decisionProcess.subtitle)}
        </h3>
        <p className="text-gray-600 mb-4">
          {getText(content.decisionProcess.act)}
        </p>

        {content.decisionProcess.process &&
        content.decisionProcess.process.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200">
              <thead className="bg-blue-50">
                <tr>
                  <th className="py-2 px-4 border-b border-gray-200 text-left text-gray-700">
                    {language === "mr" ? "कामाचे स्वरुप" : "Work Type"}
                  </th>
                  <th className="py-2 px-4 border-b border-gray-200 text-left text-gray-700">
                    {language === "mr" ? "कालावधी" : "Timeline"}
                  </th>
                  <th className="py-2 px-4 border-b border-gray-200 text-left text-gray-700">
                    {language === "mr"
                      ? "जबाबदार अधिकारी"
                      : "Responsible Officer"}
                  </th>
                </tr>
              </thead>
              <tbody>
                {content.decisionProcess.process.map((item, index) => (
                  <tr
                    key={index}
                    className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
                  >
                    <td className="py-2 px-4 border-b border-gray-200">
                      {getText(item.workType)}
                    </td>
                    <td className="py-2 px-4 border-b border-gray-200">
                      {getText(item.timeline)}
                    </td>
                    <td className="py-2 px-4 border-b border-gray-200">
                      {getText(item.responsible)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="text-center py-8 text-gray-500">
            No decision process data available
          </div>
        )}
      </div>

      {/* Additional Information Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-blue-50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-blue-800 mb-3 flex items-center">
            <FaUsers className="mr-2" /> {getText(content.composition.title)}
          </h3>
          {content.composition.items && content.composition.items.length > 0 ? (
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              {content.composition.items.map((item, index) => (
                <li key={index}>{getText(item)}</li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">No responsibilities data available</p>
          )}
        </div>

        <div className="bg-blue-50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-blue-800 mb-3 flex items-center">
            <FaFileAlt className="mr-2" /> {getText(content.committees.title)}
          </h3>
          {content.committees.items && content.committees.items.length > 0 ? (
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              {content.committees.items.map((item, index) => (
                <li key={index}>{getText(item)}</li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">
              No governing references data available
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default OrganizationalChart;

// import { motion } from "framer-motion";
// import {
//   FaUserTie,
//   FaSitemap,
//   FaUsers,
//   FaTasks,
//   FaCalendarAlt,
//   FaFileAlt,
// } from "react-icons/fa";
// import { useLanguage } from "../../contexts/LanguageContext";

// const OrganizationalChart = () => {
//   const { language } = useLanguage();

//   // Bilingual content with all positions and responsibilities
//   const content = {
//     title: {
//       en: "Organizational Structure",
//       mr: "संस्थात्मक रचना",
//     },
//     hierarchyTitle: {
//       en: "Jalgaon District Planning Committee Hierarchy",
//       mr: "जळगांव जिल्हा नियोजन समिती पदानुक्रम",
//     },
//     structure: [
//       {
//         level: { en: "District Collector", mr: "जिल्हाधिकारी" },
//         name: { en: "Hon.Ayush Prasad", mr: "मा.ना.श्री. आयुष प्रसाद" },
//       },
//       {
//         level: { en: "District Planning Officer", mr: "जिल्हा नियोजन अधिकारी" },
//         name: { en: "Hon.Vijay Shinde", mr: "मा.ना.श्री. विजय शिंदे" },
//       },
//       {
//         level: {
//           en: "Chairperson And Guardian Minister",
//           mr: "अध्यक्ष तथा पालकमंत्री",
//         },
//         name: { en: "Hon. Gulabrao Patil", mr: "मा.ना.श्री. गुलाबराव पाटील" },
//       },
//       {
//         level: {
//           en: "Assistant District Planning Officer",
//           mr: "सहायक जिल्हा नियोजन अधिकारी",
//         },
//         name: { en: "B.P.Salunkhe", mr: "बी.पी. साळुंखे" },
//       },
//       {
//         level: {
//           en: "Assistant District Planning Officer",
//           mr: "सहायक जिल्हा नियोजन अधिकारी",
//         },
//         name: { en: "R.A.Idhe", mr: "रा.आ.इधे" },
//       },

//       {
//         level: { en: "Accountant Officer", mr: "लेखा अधिकारी" },
//         name: { en: "N.S. Umbarkar", mr: "नि.श्री. उंबरकर" },
//       },
//       {
//         level: {
//           en: "Assistant Research Officer",
//           mr: "सहायक संशोधन अधिकारी",
//         },
//         name: { en: "V.V. Jadhav", mr: "वि.वि.जाधव" },
//       },
//       {
//         level: {
//           en: "Assistant Research Officer",
//           mr: "सहायक संशोधन अधिकारी",
//         },
//         name: { en: "B.B.Patil", mr: "बी.बी. पाटील" },
//       },
//       {
//         level: {
//           en: "Assistant Research Officer",
//           mr: "सहायक संशोधन अधिकारी",
//         },
//         name: { en: "Smt.V.A Patil", mr: "श्रीमती व्ही.ए. पाटील" },
//       },
//       {
//         level: {
//           en: "Assistant Research Officer",
//           mr: "सहायक संशोधन अधिकारी",
//         },
//         name: { en: "C.L. Deshpande", mr: "चे. ल. देशपांडे" },
//       },
//       {
//         level: { en: "Assistant Research Officer", mr: "सहायक संशोधन अधिकारी" },
//         name: { en: "Smt. A.P. Bawane", mr: "श्रीमती अ.प्र. बावणे" },
//       },
//       {
//         level: { en: "Dy.Accountant", mr: "उप लेखा अधिकारी" },
//         name: { en: "H.P. Dandekar", mr: "ह.प्र.दांडेकर" },
//       },
//       {
//         level: { en: "Statistical Assistant", mr: "सांख्यिकी सहायक" },
//         name: { en: "H. S. Raut", mr: "ह.सु.राऊत" },
//       },
//       {
//         level: { en: "Statistical Assistant", mr: "सांख्यिकी सहायक" },
//         name: { en: "Vacant", mr: "रिक्त" },
//       },

//       {
//         level: { en: "Revenue Assistant", mr: "महसुल सहायक" },
//         name: { en: "Smt. P.V.Vandrin", mr: "पि. व्ही. वॅन्ड्रीन" },
//       },
//       {
//         level: { en: "Driver", mr: "वाहनचालक" },
//         name: { en: "Majhar Khan", mr: "मजहर खान" },
//       },
//       {
//         level: { en: "Peon", mr: "शिपाई" },
//         name: { en: "Vacant", mr: "रिक्त" },
//       },
//     ],
//     decisionProcess: {
//       title: {
//         en: "Decision Making Process & Responsibilities",
//         mr: "निर्णय प्रकिया व जबाबदाऱ्या",
//       },
//       subtitle: {
//         en: "Development Plan Preparation Process",
//         mr: "विकास आराखडा तयार करण्याची प्रक्रिया",
//       },
//       act: {
//         en: "Related Act: District Planning Committee (Structure & Functions) Act 1998",
//         mr: "संबंधित कायदा: जिल्हा नियोजन समिती (रचना व कामे) अधिनियम 1998",
//       },
//       process: [
//         {
//           workType: {
//             en: "MLA Local Development Program",
//             mr: "आमदार स्थानिक विकास कार्यक्रम",
//           },
//           timeline: {
//             en: "45 days after receiving proposal",
//             mr: "प्रस्ताव प्राप्त झाल्यानंतर 45 दिवस",
//           },
//           responsible: {
//             en: "Assistant Research Officer-4",
//             mr: "सहायक संशोधन अधिकारी-4",
//           },
//         },
//         {
//           workType: {
//             en: "Member of Parliament Local Area Development Scheme",
//             mr: "खासदार स्थानिक क्षेत्र विकास कार्यक्रम",
//           },
//           timeline: {
//             en: "45 days after receiving proposal",
//             mr: "प्रस्ताव प्राप्त झाल्यानंतर 45 दिवस",
//           },
//           responsible: {
//             en: "Assistant Research Officer-4",
//             mr: "सहायक संशोधन अधिकारी-4",
//           },
//         },
//         {
//           workType: {
//             en: "District Annual Plan Preparation",
//             mr: "जिल्हा वार्षिक योजना आराखडा तयार करणे",
//           },
//           timeline: {
//             en: "105 days",
//             mr: "105 दिवस",
//           },
//           responsible: {
//             en: "Assistant Research Officer-4",
//             mr: "सहायक संशोधन अधिकारी-4",
//           },
//         },
//         {
//           workType: {
//             en: "Regional Tourism Development Plan",
//             mr: "प्रादेशिक पर्यटन विकास कार्यक्रम",
//           },
//           timeline: {
//             en: "30 days",
//             mr: "30 दिवस",
//           },
//           responsible: {
//             en: "Assistant Research Officer",
//             mr: "सहायक संशोधन अधिकारी",
//           },
//         },
//         {
//           workType: {
//             en: "Providing information under RTI",
//             mr: "माहितीच्या अधिकारातील माहिती पुरविणे",
//           },
//           timeline: {
//             en: "30 days",
//             mr: "30 दिवस",
//           },
//           responsible: {
//             en: "Assistant District Planning Officer",
//             mr: "सहायक जिल्हा नियोजन अधिकारी",
//           },
//         },
//         {
//           workType: {
//             en: "Sending meeting agenda to members",
//             mr: "सदस्यांना बैठकीचा अजेंडा पाठविणे",
//           },
//           timeline: {
//             en: "7 days before meeting",
//             mr: "बैठकीच्या 7 दिवस आधी",
//           },
//           responsible: {
//             en: "Assistant Research Officer-4",
//             mr: "सहायक संशोधन अधिकारी-4",
//           },
//         },
//         {
//           workType: {
//             en: "Sending meeting documents to members",
//             mr: "सदस्यांना बैठकीचा संच पाठविणे",
//           },
//           timeline: {
//             en: "7 days before meeting",
//             mr: "बैठकीच्या 7 दिवस आधी",
//           },
//           responsible: {
//             en: "Assistant Research Officer-4",
//             mr: "सहायक संशोधन अधिकारी-4",
//           },
//         },
//         {
//           workType: {
//             en: "Sending monthly progress report to government",
//             mr: "मासिक प्रगती अहवाल शासनास पाठविणे",
//           },
//           timeline: {
//             en: "By 10th of each month",
//             mr: "महिन्याच्या 10 तारखेपर्यंत",
//           },
//           responsible: {
//             en: "Assistant Research Officer / Statistical Assistant",
//             mr: "सहायक संशोधन अधिकारी / सांख्यिकी सहायक",
//           },
//         },
//       ],
//     },
//     composition: {
//       title: {
//         en: "Key Responsibilities",
//         mr: "मुख्य जबाबदाऱ्या",
//       },
//       items: {
//         en: [
//           "Annual district planning and committee coordination",
//           "MLA/MP fund management and project monitoring",
//           "Tourism development program implementation",
//           "Budget preparation and financial monitoring",
//         ],
//         mr: [
//           "जिल्हा वार्षिक योजना आखणी आणि समिती समन्वय",
//           "आमदार/खासदार निधी व्यवस्थापन आणि प्रकल्प देखरेख",
//           "पर्यटन विकास कार्यक्रम अंमलबजावणी",
//           "अर्थसंकल्पीय अंदाज तयारी आणि आर्थिक देखरेख",
//         ],
//       },
//     },
//     committees: {
//       title: {
//         en: "Governing References",
//         mr: "शासकीय संदर्भ",
//       },
//       items: {
//         en: [
//           "Govt. Circular No. JINIS-1002/Pr.Kra.6/Ka-1444, dt. 24 April 2002",
//           "Govt. Decision No. JIVAYO-1007/Pr.Kra.39/Ka-1444, dt. 16 Feb 2008",
//           "Planning Department Government Decision No. Sthavika-0616/Pr.No.96/Ka-1482, dt. 12/07/2016",
//           "Planning Dept. Circular No. JINIS-1002/Pr.Kra.6/Ka-1444, dt. 24/04/2002",
//           "Finance Dept. Order No. Viniyam/Pr.Kra.46/2001, dt. 11 July 2001",
//         ],
//         mr: [
//           "म.शा. परिपत्रक क्र. जिनिस-1002/प्र.क्र.6/का-1444, दि. 24 एप्रिल 2002",
//           "शासन निर्णय क्र. जिवायो-1007/प्र.क्र.39/का-1444, दि. 16 फेब्रुवारी 2008",
//           "नियोजन विभाग शासन निर्णय क्र. स्थाविका-0616/प्र.क्र.96/का-1482, दि. 12/07/2016",
//           "नियोजन विभाग परिपत्रक क्र. जिनिस-1002/प्र.क्र.6/का-1444, दि. 24/04/2002",
//           "वित्त विभाग शासन निर्णय क्र. विनियम/प्र.क्र.46/2001, दि. 11 जुलै 2001",
//         ],
//       },
//     },
//   };

//   const getText = (item) => {
//     if (Array.isArray(item)) {
//       return item[language] || item.en;
//     }
//     if (typeof item === "object" && item !== null) {
//       return item[language] || item.en || item;
//     }
//     return item;
//   };

//   return (
//     <div className="max-w-6xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//       >
//         <h1 className="text-3xl font-bold text-gray-800 mb-2">
//           {getText(content.title)}
//         </h1>
//         <div className="border-b-2 border-blue-100 w-20 mb-6"></div>
//       </motion.div>

//       {/* Organizational Hierarchy Section */}
//       <div className="bg-white rounded-lg shadow-md p-6 mb-8">
//         <div className="flex items-center mb-4">
//           <FaSitemap className="text-blue-600 text-2xl mr-3" />
//           <h2 className="text-2xl font-semibold text-blue-700">
//             {getText(content.hierarchyTitle)}
//           </h2>
//         </div>

//         <div className="space-y-4 pr-4">
//           {content.structure.map((item, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, x: -20 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ delay: index * 0.1 }}
//               className="border-l-4 border-blue-500 pl-4 py-3 hover:bg-blue-50 transition"
//             >
//               <div className="flex items-start">
//                 <div className="bg-blue-100 p-2 rounded-full mr-4">
//                   <FaUserTie className="text-blue-600" />
//                 </div>
//                 <div className="flex-1">
//                   <h3 className="text-xl font-medium text-gray-800">
//                     {getText(item.level)}
//                   </h3>
//                   <p className="text-blue-600 font-medium">
//                     {getText(item.role)}
//                   </p>
//                   <p className="text-blue-900 font-medium">
//                     {getText(item.name)}
//                   </p>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>

//       {/* Decision Making Process Section */}
//       <div className="bg-white rounded-lg shadow-md p-6 mb-8">
//         <div className="flex items-center mb-4">
//           <FaCalendarAlt className="text-blue-600 text-2xl mr-3" />
//           <h2 className="text-2xl font-semibold text-blue-700">
//             {getText(content.decisionProcess.title)}
//           </h2>
//         </div>

//         <h3 className="text-lg font-medium text-gray-800 mb-2">
//           {getText(content.decisionProcess.subtitle)}
//         </h3>
//         <p className="text-gray-600 mb-4">
//           {getText(content.decisionProcess.act)}
//         </p>

//         <div className="overflow-x-auto">
//           <table className="min-w-full bg-white border border-gray-200">
//             <thead className="bg-blue-50">
//               <tr>
//                 <th className="py-2 px-4 border-b border-gray-200 text-left text-gray-700">
//                   {language === "mr" ? "कामाचे स्वरुप" : "Work Type"}
//                 </th>
//                 <th className="py-2 px-4 border-b border-gray-200 text-left text-gray-700">
//                   {language === "mr" ? "कालावधी" : "Timeline"}
//                 </th>
//                 <th className="py-2 px-4 border-b border-gray-200 text-left text-gray-700">
//                   {language === "mr"
//                     ? "जबाबदार अधिकारी"
//                     : "Responsible Officer"}
//                 </th>
//               </tr>
//             </thead>
//             <tbody>
//               {content.decisionProcess.process.map((item, index) => (
//                 <tr
//                   key={index}
//                   className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
//                 >
//                   <td className="py-2 px-4 border-b border-gray-200">
//                     {getText(item.workType)}
//                   </td>
//                   <td className="py-2 px-4 border-b border-gray-200">
//                     {getText(item.timeline)}
//                   </td>
//                   <td className="py-2 px-4 border-b border-gray-200">
//                     {getText(item.responsible)}
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>

//       {/* Additional Information Sections */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         <div className="bg-blue-50 rounded-lg p-6">
//           <h3 className="text-lg font-semibold text-blue-800 mb-3 flex items-center">
//             <FaUsers className="mr-2" /> {getText(content.composition.title)}
//           </h3>
//           <ul className="list-disc pl-5 space-y-2 text-gray-700">
//             {getText(content.composition.items).map((item, index) => (
//               <li key={index}>{item}</li>
//             ))}
//           </ul>
//         </div>

//         <div className="bg-blue-50 rounded-lg p-6">
//           <h3 className="text-lg font-semibold text-blue-800 mb-3 flex items-center">
//             <FaFileAlt className="mr-2" /> {getText(content.committees.title)}
//           </h3>
//           <ul className="list-disc pl-5 space-y-2 text-gray-700">
//             {getText(content.committees.items).map((item, index) => (
//               <li key={index}>{item}</li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OrganizationalChart;
