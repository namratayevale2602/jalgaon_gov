import { motion } from "framer-motion";
import { FaUserTie, FaUserShield, FaUserCog } from "react-icons/fa";
import { useLanguage } from "../../contexts/LanguageContext";

const RolewiseDuties = () => {
  const { language } = useLanguage();

  // Bilingual content
  const content = {
    title: {
      en: "Role-wise Duties",
      mr: "पदनिहाय कर्तव्ये",
    },
    roles: [
      {
        position: {
          en: "District Collector",
          mr: "जिल्हाधिकारी",
        },
        duties: {
          en: [
            "Chair all DPC meetings (minimum 4 per year)",
            "Approve final district development plan",
            "Monitor overall implementation progress",
            "Resolve inter-departmental conflicts",
          ],
          mr: [
            "सर्व DPC बैठकांचे अध्यक्षपद (दरवर्षी किमान 4)",
            "अंतिम जिल्हा विकास योजना मंजूर करा",
            "एकूण अंमलबजावणीच्या प्रगतीवर लक्ष ठेवा",
            "विभागांतर्गत संघर्ष सोडवा",
          ],
        },
        monitoring: {
          en: "Overall supervision of all works",
          mr: "सर्व कामांवर एकूण देखरेख",
        },
      },
      {
        position: {
          en: "District Planning Officer",
          mr: "जिल्हा नियोजन अधिकारी",
        },
        duties: {
          en: [
            "Prepare agenda for DPC meetings",
            "Coordinate with line departments",
            "Scrutinize MLA/MPLAD proposals",
            "Prepare progress reports",
          ],
          mr: [
            "DPC बैठकांसाठी अजेंडा तयार करा",
            "लाइन विभागांशी समन्वय साधा",
            "MLA/MPLAD प्रस्तावांची तपासणी करा",
            "प्रगती अहवाल तयार करा",
          ],
        },
        monitoring: {
          en: "Directly monitor 15% of ongoing works",
          mr: "15% चालू कामांचा थेट मॉनिटरिंग",
        },
      },
      {
        position: {
          en: "Assistant Planning Officer",
          mr: "सहाय्यक नियोजन अधिकारी",
        },
        duties: {
          en: [
            "Compile Gram Panchayat plans",
            "Maintain project databases",
            "Conduct field visits",
            "Prepare monitoring reports",
          ],
          mr: [
            "ग्रामपंचायत योजना संकलित करा",
            "प्रकल्प डेटाबेस राखणे",
            "फील्ड भेटी आयोजित करा",
            "मॉनिटरिंग अहवाल तयार करा",
          ],
        },
        monitoring: {
          en: "Physically verify 25% of works",
          mr: "25% कामांची भौतिक पडताळणी",
        },
      },
      {
        position: {
          en: "Taluka Planning Officer",
          mr: "तालुका नियोजन अधिकारी",
        },
        duties: {
          en: [
            "Collect local body proposals",
            "Conduct public consultations",
            "Verify ground realities",
            "Submit progress reports",
          ],
          mr: [
            "स्थानिक संस्थांचे प्रस्ताव गोळा करा",
            "सार्वजनिक सल्लामसलत आयोजित करा",
            "ग्राउंड रिअॅलिटी तपासा",
            "प्रगती अहवाल सादर करा",
          ],
        },
        monitoring: {
          en: "Inspect 100% of works in assigned taluka",
          mr: "नियुक्त तालुक्यातील 100% कामांची तपासणी",
        },
      },
    ],
    generalDuties: {
      title: {
        en: "General Duties",
        mr: "सामान्य कर्तव्ये",
      },
      items: {
        en: [
          "Attend all scheduled meetings",
          "Maintain proper documentation",
          "Submit periodic progress reports",
          "Ensure transparency in operations",
          "Address public grievances promptly",
        ],
        mr: [
          "सर्व नियोजित बैठकींमध्ये उपस्थित रहा",
          "योग्य दस्तऐवजीकरण राखा",
          "नियतकालिक प्रगती अहवाल सादर करा",
          "क्रियाकलापांमध्ये पारदर्शकता सुनिश्चित करा",
          "लोकांच्या तक्रारी लगेच हाताळा",
        ],
      },
    },
    monitoringFramework: {
      title: {
        en: "Monitoring Framework",
        mr: "मॉनिटरिंग फ्रेमवर्क",
      },
      items: {
        en: [
          "Monthly progress review meetings",
          "Quarterly field inspections",
          "Annual performance audits",
          "Public disclosure of works",
          "Social audits for major projects",
        ],
        mr: [
          "मासिक प्रगती पुनरावलोकन बैठका",
          "तिमाही फील्ड तपासणी",
          "वार्षिक कार्यप्रदर्शन ऑडिट",
          "कामांची सार्वजनिक जाहिरात",
          "मोठ्या प्रकल्पांसाठी सामाजिक ऑडिट",
        ],
      },
    },
  };

  const iconComponents = [
    <FaUserTie className="text-blue-600" />,
    <FaUserShield className="text-blue-600" />,
    <FaUserCog className="text-blue-600" />,
    <FaUserCog className="text-blue-600" />,
  ];

  const getText = (item) => {
    if (Array.isArray(item)) {
      return item[language] || item.en;
    }
    if (typeof item === "object" && item !== null) {
      return item[language] || item.en || item;
    }
    return item;
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
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

        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-blue-50">
                <tr>
                  <th className="px-6 py-3 text-left font-medium text-blue-700 uppercase tracking-wider">
                    {language === "mr" ? "पद" : "Position"}
                  </th>
                  <th className="px-6 py-3 text-left font-medium text-blue-700 uppercase tracking-wider">
                    {language === "mr" ? "मुख्य कर्तव्ये" : "Key Duties"}
                  </th>
                  <th className="px-6 py-3 text-left font-medium text-blue-700 uppercase tracking-wider">
                    {language === "mr"
                      ? "मॉनिटरिंग जबाबदारी"
                      : "Monitoring Responsibility"}
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {content.roles.map((role, index) => (
                  <motion.tr
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="hover:bg-blue-50 transition"
                  >
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 bg-blue-100 p-2 rounded-full">
                          {iconComponents[index]}
                        </div>
                        <div className="ml-4">
                          <div className="font-medium text-gray-900">
                            {getText(role.position)}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <ul className="text-sm text-gray-700 list-disc pl-5 space-y-1">
                        {getText(role.duties).map((duty, i) => (
                          <li key={i}>{duty}</li>
                        ))}
                      </ul>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                      {getText(role.monitoring)}
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-blue-800 mb-3">
              {getText(content.generalDuties.title)}
            </h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              {getText(content.generalDuties.items).map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-blue-800 mb-3">
              {getText(content.monitoringFramework.title)}
            </h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              {getText(content.monitoringFramework.items).map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RolewiseDuties;
