import { motion } from "framer-motion";
import { FaUserTie, FaSitemap, FaUsers } from "react-icons/fa";
import { useLanguage } from "../../contexts/LanguageContext";

const OrganizationalChart = () => {
  const { language } = useLanguage();

  // Bilingual content
  const content = {
    title: {
      en: "Organizational Structure",
      mr: "संस्थात्मक रचना",
    },
    hierarchyTitle: {
      en: "Hierarchy Chart",
      mr: "पदानुक्रम आकृती",
    },
    structure: [
      {
        level: {
          en: "District Collector",
          mr: "जिल्हाधिकारी",
        },
        role: {
          en: "Chairperson",
          mr: "अध्यक्ष",
        },
        description: {
          en: "Overall supervision and guidance",
          mr: "एकूण देखरेख आणि मार्गदर्शन",
        },
      },
      {
        level: {
          en: "District Planning Officer",
          mr: "जिल्हा नियोजन अधिकारी",
        },
        role: {
          en: "Member Secretary",
          mr: "सदस्य सचिव",
        },
        description: {
          en: "Day-to-day administration and coordination",
          mr: "दैनंदिन प्रशासन आणि समन्वय",
        },
      },
      {
        level: {
          en: "Assistant District Planning Officer",
          mr: "सहाय्यक जिल्हा नियोजन अधिकारी",
        },
        role: {
          en: "Technical Support",
          mr: "तांत्रिक सहाय्य",
        },
        description: {
          en: "Implementation and monitoring",
          mr: "अंमलबजावणी आणि देखरेख",
        },
      },
      {
        level: {
          en: "Taluka Planning Officers",
          mr: "तालुका नियोजन अधिकारी",
        },
        role: {
          en: "Field Coordination",
          mr: "क्षेत्र समन्वय",
        },
        description: {
          en: "Grassroots level planning and execution",
          mr: "तळागाळातील नियोजन आणि अंमलबजावणी",
        },
      },
      {
        level: {
          en: "Support Staff",
          mr: "सहाय्यक कर्मचारी",
        },
        role: {
          en: "Administrative Support",
          mr: "प्रशासकीय सहाय्य",
        },
        description: {
          en: "Documentation and office management",
          mr: "दस्तऐवजीकरण आणि कार्यालय व्यवस्थापन",
        },
      },
    ],
    composition: {
      title: {
        en: "Composition",
        mr: "रचना",
      },
      items: {
        en: [
          "80% members elected from Panchayat Raj Institutions",
          "20% members elected from Urban Local Bodies",
          "Ex-officio members from relevant departments",
          "Technical experts as co-opted members",
        ],
        mr: [
          "पंचायत राज संस्थांमधून निवडलेले 80% सदस्य",
          "शहरी स्थानिक स्वराज्य संस्थांमधून निवडलेले 20% सदस्य",
          "संबंधित विभागांतील पदेन सदस्य",
          "तांत्रिक तज्ज्ञांना सह-निवडलेले सदस्य",
        ],
      },
    },
    committees: {
      title: {
        en: "Key Committees",
        mr: "महत्त्वाच्या समित्या",
      },
      items: {
        en: [
          "District Planning Committee (Governing Body)",
          "Executive Committee (Implementation Wing)",
          "Technical Advisory Group",
          "Subject-specific Sub-Committees",
        ],
        mr: [
          "जिल्हा नियोजन समिती (शासकीय मंडळ)",
          "कार्यकारी समिती (अंमलबजावणी विभाग)",
          "तांत्रिक सल्लागार समूह",
          "विषय-विशिष्ट उपसमित्या",
        ],
      },
    },
  };

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

      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <div className="flex items-center mb-4">
          <FaSitemap className="text-blue-600 text-2xl mr-3" />
          <h2 className="text-2xl font-semibold text-blue-700">
            {getText(content.hierarchyTitle)}
          </h2>
        </div>

        <div className="space-y-4">
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
                <div>
                  <h3 className="text-xl font-medium text-gray-800">
                    {getText(item.level)}
                  </h3>
                  <p className="text-blue-600 font-medium">
                    {getText(item.role)}
                  </p>
                  <p className="text-gray-600 mt-1">
                    {getText(item.description)}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-blue-50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-blue-800 mb-3 flex items-center">
            <FaUsers className="mr-2" /> {getText(content.composition.title)}
          </h3>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            {getText(content.composition.items).map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="bg-blue-50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-blue-800 mb-3">
            {getText(content.committees.title)}
          </h3>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            {getText(content.committees.items).map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default OrganizationalChart;
