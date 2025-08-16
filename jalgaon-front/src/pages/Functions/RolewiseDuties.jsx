import { motion } from "framer-motion";
import {
  FaUserTie,
  FaUserShield,
  FaUserCog,
  FaFileAlt,
  FaChartLine,
  FaMoneyBillWave,
  FaCar,
  FaUser,
} from "react-icons/fa";
import { useLanguage } from "../../contexts/LanguageContext";

const RolewiseDuties = () => {
  const { language } = useLanguage();

  // Bilingual content based on provided data
  const content = {
    title: {
      en: "Role-wise Duties and Responsibilities",
      mr: "पदनिहाय कर्तव्ये आणि जबाबदाऱ्या",
    },
    roles: [
      {
        position: {
          en: "District Collector",
          mr: "जिल्हाधिकारी",
        },
        duties: {
          en: [
            "Approval of MLA Local Area Development works",
            "Approval of MP Local Area Development works",
            "Approval of District Annual Plan",
            "Chairperson of District Planning Committee meetings",
          ],
          mr: [
            "आमदार स्थानिक विकास कार्यक्रम मंजुरी",
            "खासदार स्थानिक विकास कार्यक्रम मंजुरी",
            "जिल्हा वार्षिक योजना मंजुरी",
            "जिल्हा नियोजन समिती बैठकींचे अध्यक्षत्व",
          ],
        },
        authority: {
          en: [
            "As per Finance Department GR No. Viniyam/Pro.Kr.46/2001 dated 11/07/2001",
            "As per Finance Department GR No. Sthavika-0616/Pro.Kr.96/Ka-1482 dated 12/07/2016",
            "Central Government's April - 2023 Guidebook",
            "As per Planning Department GR No. Jivayo-1007/Pro.Kr.39/Ka-1444 dated 16/02/2008",
          ],
          mr: [
            "म.शा. वित्त विभागाचे शा. नि. क्र. वि. अ. प्र.-1000/प्र.क्र.46/2001, विनियम, दि.11जुलै 2001",
            "म.शा. वित्त विभागाचे शा. नि. क्र. स्थाविका-0616/प्र.क्र.96/का-1482 दि.12/07/2016",
            "केंद्र शासनाची एप्रिल - 2023 ची मार्गदर्शक पुस्तिका",
            "म.शा. नियोजन विभाग, शा. नि. क्र. जिवायो-1007/प्र.क्र.39/का-1444, दि.16.02.2008",
          ],
        },
      },
      {
        position: {
          en: "District Planning Officer",
          mr: "जिल्हा नियोजन अधिकारी",
        },
        duties: {
          en: [
            "Office In-charge responsibilities",
            "Assist District Collector in planning matters",
            "Prepare District Annual Plan and submit to government",
            "Organize District Planning Committee meetings",
            "Monitor progress of district plans and special programs",
            "Process MLA/MPLAD proposals for approval",
            "Maintain computerized records of planning matters",
            "Maintain accounts of MLA/MPLAD/Tourism programs",
            "Prepare budget estimates for planning cell",
            "Inspect 10% of works under district annual plan",
            "Follow up on fund disbursement to implementing agencies",
            "Prepare district plan booklet and progress reports",
            "Submit reports on approved MLA/MPLAD works",
            "Perform other duties assigned by Planning Department",
          ],
          mr: [
            "कार्यालय प्रमुख जबाबदाऱ्या",
            "जिल्हाधिकारी यांना नियोजन विषयांत मदत करणे",
            "जिल्हा वार्षिक योजना तयार करून शासनास सादर करणे",
            "जिल्हा नियोजन समितीच्या बैठका आयोजित करणे",
            "जिल्हा योजना व विशेष कार्यक्रमांची प्रगती मॉनिटर करणे",
            "आमदार/खासदार निधीचे प्रस्ताव मंजुरीसाठी सादर करणे",
            "नियोजन विषयांची संगणकीय नोंद ठेवणे",
            "आमदार/खासदार/पर्यटन कार्यक्रमांचे लेखा ठेवणे",
            "नियोजन कक्षासाठी अर्थसंकल्पीय अंदाज तयार करणे",
            "जिल्हा वार्षिक योजनेतील 10% कामांची पाहणी करणे",
            "अंमलबजावणी यंत्रणांना निधी प्राप्तीसाठी पाठपुरावा करणे",
            "जिल्हा योजना पुस्तिका तयार करणे",
            "आमदार/खासदार कार्यक्रमांतील मंजूर कामांचे अहवाल सादर करणे",
            "नियोजन विभागाने सोपविलेली इतर कामे करणे",
          ],
        },
        authority: {
          en: [
            "As per Planning Department Circular No. Jinis-1002/Pro.Kr.6/Ka-1444 dated 24/04/2002",
            "As per Government Resolutions mentioned for each duty",
          ],
          mr: [
            "म.शा. नियोजन विभाग यांचे परिपत्रक क्र.जिनिस-1002/प्र.क्र.6/का-1444, दि. 24 एप्रिल 2002",
            "प्रत्येक कर्तव्यासाठी नमूद केलेल्या शासन निर्णयांनुसार",
          ],
        },
      },
      {
        position: {
          en: "Assistant District Planning Officer",
          mr: "सहायक जिल्हा नियोजन अधिकारी",
        },
        duties: {
          en: [
            "Handle all matters related to District Annual Plan",
            "Perform duties assigned by District Collector/Planning Officer",
            "Act as Drawing and Disbursing Officer",
            "Serve as Public Information Officer",
            "Handle matters related to MLA/MPLAD funds, Tourism, Hill Area Development",
          ],
          mr: [
            "जिल्हा वार्षिक योजना संबंधी सर्व कामकाज पाहणे",
            "जिल्हाधिकारी/नियोजन अधिकारी यांनी सोपविलेली कामे करणे",
            "आहरण व संवितरण अधिकारी म्हणून काम पाहणे",
            "जन माहिती अधिकारी म्हणून कामकाज पाहणे",
            "आस्थाविका, खास्थाविका, पर्यटन, डोंगरी विकास कार्यक्रम संबंधी कामे",
          ],
        },
        authority: {
          en: [
            "As per Planning Department GR No. CAU-1401/Pro.Kr.348/Ka-1426 dated 24/01/2006",
            "As per GR No. Sankirna-5710/Pro.Kr.30/Ka-1426 dated 29/02/2012",
          ],
          mr: [
            "म.शा. नियोजन विभाग शासन निर्णय क्र.सीएयु-1401/प्र.क्र.348/का-1426 दि.24/01/2006",
            "शासन निर्णय क्र.संकीर्ण-5710/प्र.क्र.30/का-1426 दि.29/02/2012",
          ],
        },
      },
      {
        position: {
          en: "Assistant Research Officer (Various Positions)",
          mr: "सहायक संशोधन अधिकारी (विविध पदे)",
        },
        duties: {
          en: [
            "Assistant Research Officer-1: Handle matters related to Zilla Parishad under District Annual Plan",
            "Assistant Research Officer-2: Hilly Division Development Program, Assistant Public Information Officer Works and Minority Development Program",
            "Assistant Research Officer-3: Handle MPLAD Program",
            "Assistant Research Officer-4: Handle MLA Local Area Development Program",
            "Assistant Research Officer-5: State Schemes Work Under District Annual Plan",
          ],
          mr: [
            "सहायक संशोधन अधिकारी-1: जिल्हा वार्षिक योजना अंतर्गत जिल्हा परिषद विषयक कामे",
            "सहायक संशोधन अधिकारी-2: डोंगरी विभाग विकास कार्यक्रम, सहायक जन माहिती अधिकारी कामे व अल्पसंख्यांक विकास कार्यक्रम",
            "सहायक संशोधन अधिकारी-3: खासदार स्थानिक विकास कार्यक्रम",
            "सहायक संशोधन अधिकारी-4: आमदार स्थानिक विकास कार्यक्रम",
            "सहायक संशोधन अधिकारी-5: जिल्हा वार्षिक योजना अंतर्गत राज्य योजनांविषयक कामे",
          ],
        },
        authority: {
          en: [
            "As per various Government Resolutions and circulars",
            "Central Government's April - 2023 Guidebook",
          ],
          mr: [
            "विविध शासन निर्णय व परिपत्रकांनुसार",
            "केंद्र शासनाची एप्रिल - 2023 ची मार्गदर्शक पुस्तिका (खासदार निधीसाठी)",
          ],
        },
      },
      {
        position: {
          en: "Statistical Assistant",
          mr: "सांख्यिकी सहायक",
        },
        duties: {
          en: [
            "SA-1: Scrutinize proposals received under statutory development schemes",
            "SA-2: Prepare minutes of meetings, typing work, prepare monthly progress reports",
          ],
          mr: [
            "सांख्यिकी सहायक-1: वैधानिक विकास मंडळ योजनांतर्गत प्रस्तावांची छानणी करणे",
            "सांख्यिकी सहायक-2: बैठकीचे इतिवृत्त तयार करणे, टंकलेखन, मासिक प्रगती अहवाल तयार करणे",
          ],
        },
        authority: {
          en: ["As per Planning Department GRs"],
          mr: ["म.शा. नियोजन विभागाच्या शासन निर्णयांनुसार"],
        },
      },
      {
        position: {
          en: "Accountant",
          mr: "लेखाधिकारी",
        },
        duties: {
          en: [
            "Handle all accounting matters",
            "Perform duties assigned by District Collector/Planning Officer",
          ],
          mr: [
            "लेखा विषयक सर्व कामकाज पाहणे",
            "जिल्हाधिकारी/नियोजन अधिकारी यांनी सोपविलेली कामे करणे",
          ],
        },
        authority: {
          en: [
            "As per Planning Department GR No. Jivayo-1007/Pro.Kr.39/Ka-1444 dated 16/02/2008",
          ],
          mr: [
            "म.शा. नियोजन विभाग यांचे शा. नि. क्र.जिवायो-1007/प्र.क्र.39/का-1444, दि.16 फेब्रुवारी, 2008",
          ],
        },
      },
    ],
    timeBoundActivities: {
      title: {
        en: "Time-bound Activities",
        mr: "कालबद्ध क्रियाकलाप",
      },
      items: [
        {
          activity: {
            en: "MLA Local Area Development Program",
            mr: "आमदार स्थानिक विकास कार्यक्रम",
          },
          timeframe: {
            en: "90 days from receipt of proposal",
            mr: "प्रस्ताव प्राप्त झाल्यापासून 90 दिवस",
          },
          responsible: {
            en: "Research Assistant-2 & 4",
            mr: "सहायक संशोधन अधिकारी-2 व 4",
          },
        },
        {
          activity: {
            en: "MP Local Area Development Program",
            mr: "खासदार स्थानिक विकास कार्यक्रम",
          },
          timeframe: {
            en: "45 days from receipt of proposal",
            mr: "प्रस्ताव प्राप्त झाल्यापासून 45 दिवस",
          },
          responsible: {
            en: "Research Assistant-3",
            mr: "सहायक संशोधन अधिकारी-3",
          },
        },
        {
          activity: {
            en: "District Annual Plan preparation",
            mr: "जिल्हा वार्षिक योजना आराखडा तयार करणे",
          },
          timeframe: {
            en: "105 days",
            mr: "105 दिवस",
          },
          responsible: {
            en: "Research Assistant-1",
            mr: "सहायक संशोधन अधिकारी-1",
          },
        },
        {
          activity: {
            en: "Tourism Development Program",
            mr: "पर्यटन विकास कार्यक्रम",
          },
          timeframe: {
            en: "30 days",
            mr: "30 दिवस",
          },
          responsible: {
            en: "Research Assistant",
            mr: "सहायक संशोधन अधिकारी",
          },
        },
        {
          activity: {
            en: "Providing information under RTI",
            mr: "माहितीच्या अधिकारातील माहिती पुरविणे",
          },
          timeframe: {
            en: "30 days",
            mr: "30 दिवस",
          },
          responsible: {
            en: "Assistant District Planning Officer",
            mr: "सहायक जिल्हा नियोजन अधिकारी",
          },
        },
        {
          activity: {
            en: "Sending meeting agenda to DPC members",
            mr: "जिल्हा नियोजन समिती सदस्यांना बैठक अजेंडा पाठविणे",
          },
          timeframe: {
            en: "7 days before meeting",
            mr: "बैठकीच्या 7 दिवस आधी",
          },
          responsible: {
            en: "Research Assistant-1",
            mr: "सहायक संशोधन अधिकारी-1",
          },
        },
        {
          activity: {
            en: "Sending meeting documents to DPC members",
            mr: "जिल्हा नियोजन समिती सदस्यांना बैठक संच पाठविणे",
          },
          timeframe: {
            en: "7 days before meeting",
            mr: "बैठकीच्या 7 दिवस आधी",
          },
          responsible: {
            en: "Research Assistant-1",
            mr: "सहायक संशोधन अधिकारी-1",
          },
        },
        {
          activity: {
            en: "Monthly progress report to government",
            mr: "मासिक प्रगती अहवाल शासनास पाठविणे",
          },
          timeframe: {
            en: "By 10th of every month",
            mr: "दरमहा 10 तारखेपर्यंत",
          },
          responsible: {
            en: "Research Assistant/Statistical Assistant",
            mr: "सहायक संशोधन अधिकारी/सांख्यिकी सहायक",
          },
        },
      ],
    },
  };

  const iconComponents = [
    <FaUserTie className="text-blue-600" size={20} />,
    <FaFileAlt className="text-blue-600" size={20} />,
    <FaUserShield className="text-blue-600" size={20} />,
    <FaChartLine className="text-blue-600" size={20} />,
    <FaMoneyBillWave className="text-blue-600" size={20} />,
    <FaUserCog className="text-blue-600" size={20} />,
    <FaCar className="text-blue-600" size={20} />,
  ];

  const getText = (item) => {
    if (Array.isArray(item)) {
      return item[language] || item.en || item;
    }
    if (typeof item === "object" && item !== null) {
      return item[language] || item.en || item;
    }
    return item;
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
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

        <div className="space-y-8">
          {content.roles.map((role, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex-shrink-0 bg-blue-100 p-3 rounded-full">
                    {iconComponents[index % iconComponents.length]}
                  </div>
                  <div className="ml-4">
                    <h2 className="text-xl font-semibold text-gray-800">
                      {getText(role.position)}
                    </h2>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-medium text-blue-700 mb-2">
                      {language === "mr" ? "मुख्य कर्तव्ये" : "Key Duties"}
                    </h3>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700">
                      {getText(role.duties).map((duty, i) => (
                        <li key={i}>{duty}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium text-blue-700 mb-2">
                      {language === "mr"
                        ? "अधिकार आणि आधार"
                        : "Authority Basis"}
                    </h3>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700">
                      {getText(role.authority).map((auth, i) => (
                        <li key={i} className="text-sm">
                          {auth}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 bg-white rounded-lg shadow-md overflow-hidden"
        >
          <div className="p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              {getText(content.timeBoundActivities.title)}
            </h2>

            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-blue-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-blue-700 uppercase tracking-wider">
                      {language === "mr" ? "क्रियाकलाप" : "Activity"}
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-blue-700 uppercase tracking-wider">
                      {language === "mr" ? "कालावधी" : "Timeframe"}
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-blue-700 uppercase tracking-wider">
                      {language === "mr" ? "जबाबदार" : "Responsible Officer"}
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {content.timeBoundActivities.items.map((item, index) => (
                    <tr key={index} className="hover:bg-blue-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                        {getText(item.activity)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                        {getText(item.timeframe)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                        {getText(item.responsible)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default RolewiseDuties;
