import { motion } from "framer-motion";
import { FaFileAlt, FaCheckCircle, FaUsersCog } from "react-icons/fa";
import { useLanguage } from "../../contexts/LanguageContext";

const KeyResponsibilities = () => {
  const { language } = useLanguage();

  // Bilingual content
  const content = {
    title: {
      en: "Key Responsibilities",
      mr: "मुख्य जबाबदाऱ्या",
    },
    responsibilities: [
      {
        title: {
          en: "Prepare District Annual Plan",
          mr: "जिल्हा वार्षिक योजना तयार करणे",
        },
        description: {
          en: "Consolidation of plans from local bodies and preparation of comprehensive district development plan",
          mr: "स्थानिक संस्थांकडून योजना एकत्रित करणे आणि व्यापक जिल्हा विकास योजना तयार करणे",
        },
        details: {
          en: [
            "Collect proposals from Gram Panchayats and Municipalities",
            "Prioritize projects based on district needs",
            "Allocate resources across sectors",
            "Submit final plan to State Government",
          ],
          mr: [
            "ग्रामपंचायत आणि नगरपालिकांकडून प्रस्ताव गोळा करणे",
            "जिल्ह्याच्या गरजेनुसार प्रकल्पांना प्राधान्य द्या",
            "विविध क्षेत्रांमध्ये संसाधने वाटप करणे",
            "अंतिम योजना राज्य सरकारला सादर करा",
          ],
        },
      },
      {
        title: {
          en: "Approve MLA/MP Local Area Development Projects",
          mr: "एमएलए/एमपी स्थानिक क्षेत्र विकास प्रकल्प मंजूर करणे",
        },
        description: {
          en: "Scrutiny and approval of works proposed under MLALAD and MPLAD schemes",
          mr: "MLALAD आणि MPLAD योजनांतर्गत प्रस्तावित कामांची तपासणी आणि मंजुरी",
        },
        details: {
          en: [
            "Review project proposals within 90 days",
            "Ensure compliance with guidelines",
            "Monitor fund utilization",
            "Maintain transparency in approvals",
          ],
          mr: [
            "90 दिवसांच्या आत प्रकल्प प्रस्तावांचे पुनरावलोकन करा",
            "मार्गदर्शक तत्त्वांशी अनुपालन सुनिश्चित करा",
            "निधी वापरावर लक्ष ठेवा",
            "मंजुरीमध्ये पारदर्शकता राखा",
          ],
        },
      },
      {
        title: {
          en: "Coordinate with District Offices",
          mr: "जिल्हा कार्यालयांशी समन्वय साधणे",
        },
        description: {
          en: "Liaison with various government departments for integrated planning",
          mr: "समन्वित नियोजनासाठी विविध सरकारी विभागांशी संपर्क",
        },
        details: {
          en: [
            "Conduct monthly coordination meetings",
            "Resolve inter-departmental issues",
            "Share planning data and resources",
            "Monitor implementation progress",
          ],
          mr: [
            "मासिक समन्वय बैठका घेणे",
            "विभागांतर्गत समस्यांचे निराकरण करणे",
            "नियोजन डेटा आणि संसाधने सामायिक करणे",
            "अंमलबजावणीच्या प्रगतीवर लक्ष ठेवणे",
          ],
        },
      },
    ],
    dutiesTitle: {
      en: "Specific Duties:",
      mr: "विशिष्ट कर्तव्ये:",
    },
    legalBasis: {
      title: {
        en: "Legal Basis",
        mr: "कायदेशीर आधार",
      },
      text1: {
        en: "These responsibilities are assigned under Section 6 of the District Planning Committee Act, 1998.",
        mr: "ही जबाबदारी जिल्हा नियोजन समिती कायदा, 1998 च्या कलम 6 अंतर्गत नियुक्त केली आहे.",
      },
      text2: {
        en: "The committee operates under the administrative control of the Planning Department, Government of Maharashtra.",
        mr: "समिती महाराष्ट्र सरकारच्या नियोजन विभागाच्या प्रशासकीय नियंत्रणाखाली कार्य करते.",
      },
    },
  };

  const iconComponents = [
    <FaFileAlt className="text-blue-600 text-2xl" />,
    <FaCheckCircle className="text-blue-600 text-2xl" />,
    <FaUsersCog className="text-blue-600 text-2xl" />,
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

        <div className="space-y-8">
          {content.responsibilities.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="p-6">
                <div className="flex flex-col md:flex-row md:items-start">
                  <div className="bg-blue-100 p-3 rounded-full mb-4 md:mb-0 md:mr-6">
                    {iconComponents[index]}
                  </div>
                  <div className="flex-1">
                    <h2 className="text-xl font-semibold text-blue-700">
                      {getText(item.title)}
                    </h2>
                    <p className="text-gray-700 mb-4">
                      {getText(item.description)}
                    </p>

                    <h3 className="font-medium text-gray-800 mb-2">
                      {getText(content.dutiesTitle)}
                    </h3>
                    <ul className="list-disc pl-5 space-y-1 text-gray-600">
                      {getText(item.details).map((detail, i) => (
                        <li key={i}>{detail}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 bg-blue-50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-blue-800 mb-3">
            {getText(content.legalBasis.title)}
          </h3>
          <p className="text-gray-700 mb-2">
            {getText(content.legalBasis.text1)}
          </p>
          <p className="text-gray-700">{getText(content.legalBasis.text2)}</p>
        </div>
      </div>
    </div>
  );
};

export default KeyResponsibilities;
