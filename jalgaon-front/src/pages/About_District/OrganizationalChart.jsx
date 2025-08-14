import { motion } from "framer-motion";
import { FaUserTie, FaSitemap, FaUsers } from "react-icons/fa";
import { useLanguage } from "../../contexts/LanguageContext";

const OrganizationalChart = () => {
  const { language } = useLanguage();

  // Updated bilingual content with all positions
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
          en: "District Planning Officer",
          mr: "जिल्हा नियोजन अधिकारी",
        },
        name: {
          en: "Vijay Shinde",
          mr: "विजय शिंदे",
        },
        role: {
          en: "Head of Planning Department",
          mr: "नियोजन विभाग प्रमुख",
        },
        description: {
          en: "Assists District Collector, coordinates annual planning, conducts committee meetings",
          mr: "जिल्हाधिकार्यांना सहाय्य, वार्षिक योजना समन्वय, समिती बैठका आयोजित करणे",
        },
      },
      {
        level: {
          en: "Assistant District Planning Officer",
          mr: "सहाय्यक जिल्हा नियोजन अधिकारी",
        },
        name: {
          en: "R.A. Ithe",
          mr: "रा.आ.इथे",
        },
        role: {
          en: "Planning Implementation",
          mr: "नियोजन अंमलबजावणी",
        },
        description: {
          en: "Manages district annual planning activities",
          mr: "जिल्हा वार्षिक योजना कार्यक्रम पाहणे",
        },
      },
      {
        level: {
          en: "Assistant Research Officer-4",
          mr: "सहायक संशोधन अधिकारी-४",
        },
        name: {
          en: "Che. L. Deshpande",
          mr: "चे. ल. देशपांडे",
        },
        role: {
          en: "MLA/MP Funds Management",
          mr: "आमदार/खासदार निधी व्यवस्थापन",
        },
        description: {
          en: "Handles MLA/MP local development programs",
          mr: "आमदार/खासदार स्थानिक विकास कार्यक्रम",
        },
      },
      {
        level: {
          en: "Distribution Officer",
          mr: "सवितरण अधिकारी",
        },
        name: {
          en: "R.A. Ithe",
          mr: "रा.आ. इथे",
        },
        role: {
          en: "Public Information Officer",
          mr: "जन माहिती अधिकारी",
        },
        description: {
          en: "Manages RTI, Hill Area Development Program",
          mr: "माहिती अधिकार, डोंगरी विभाग विकास कार्यक्रम",
        },
      },
      {
        level: {
          en: "Accountant",
          mr: "लेखाधिकारी",
        },
        name: {
          en: "Ni. Shri. Umbarkar",
          mr: "नि.श्री. उंबरकर",
        },
        role: {
          en: "Financial Management",
          mr: "आर्थिक व्यवस्थापन",
        },
        description: {
          en: "Handles accounts and financial records",
          mr: "लेखा आणि आर्थिक नोंदी व्यवस्थापन",
        },
      },
      {
        level: {
          en: "Assistant Research Officer-5",
          mr: "सहायक संशोधन अधिकारी-५",
        },
        name: {
          en: "V.V. Jadhav",
          mr: "वि.वि.जाधव",
        },
        role: {
          en: "District Annual Planning",
          mr: "जिल्हा वार्षिक नियोजन",
        },
        description: {
          en: "Manages district annual planning activities",
          mr: "जिल्हा वार्षिक योजना कार्यक्रम",
        },
      },
      {
        level: {
          en: "Assistant Research Officer-2",
          mr: "सहायक संशोधन अधिकारी-२",
        },
        name: {
          en: "B.B. Patil",
          mr: "बी.बी. पाटील",
        },
        role: {
          en: "Hill Area Development",
          mr: "डोंगरी विभाग विकास",
        },
        description: {
          en: "Implements hilly area development programs",
          mr: "डोंगरी विभाग विकास कार्यक्रम अंमलबजावणी",
        },
      },
      {
        level: {
          en: "Assistant Research Officer-1",
          mr: "सहायक संशोधन अधिकारी-१",
        },
        name: {
          en: "A.B. Suryavanshi",
          mr: "अ. भि. सूर्यवंशी",
        },
        role: {
          en: "Zilla Parishad Coordination",
          mr: "जिल्हा परिषद समन्वय",
        },
        description: {
          en: "Coordinates with Zilla Parishad for planning",
          mr: "जिल्हा परिषदेशी नियोजनासाठी समन्वय",
        },
      },
      {
        level: {
          en: "Assistant Research Officer-3",
          mr: "सहायक संशोधन अधिकारी-३",
        },
        name: {
          en: "Smt. A.P. Bawane",
          mr: "श्रीमती अ.प्र. बावणे",
        },
        role: {
          en: "Tourism Development",
          mr: "पर्यटन विकास",
        },
        description: {
          en: "Manages tourism development schemes",
          mr: "पर्यटन विकास योजना व्यवस्थापन",
        },
      },
      {
        level: {
          en: "Statistical Assistant-1",
          mr: "सांख्यिकी सहायक-१",
        },
        name: {
          en: "Smt. Sho. Ra. Jadhav",
          mr: "श्रीमती शो.रा. जाधव",
        },
        role: {
          en: "Data Compilation",
          mr: "डेटा संकलन",
        },
        description: {
          en: "Compiles statistical data and reports",
          mr: "सांख्यिकीय डेटा आणि अहवाल संकलन",
        },
      },
      {
        level: {
          en: "Statistical Assistant-2",
          mr: "सांख्यिकी सहायक-२",
        },
        name: {
          en: "H. Su. Raut",
          mr: "ह.सु.राऊत",
        },
        role: {
          en: "Report Preparation",
          mr: "अहवाल तयारी",
        },
        description: {
          en: "Prepares monthly progress reports",
          mr: "मासिक प्रगती अहवाल तयार करणे",
        },
      },
      {
        level: {
          en: "Sub-Accountant",
          mr: "उपलेखापाल",
        },
        name: {
          en: "H. Pra. Dandekar",
          mr: "ह.प्र.दांडेकर",
        },
        role: {
          en: "Accounts Management",
          mr: "लेखा व्यवस्थापन",
        },
        description: {
          en: "Manages establishment and accounts",
          mr: "आस्थापना आणि लेखा व्यवस्थापन",
        },
      },
      {
        level: {
          en: "Revenue Assistant",
          mr: "महसुल सहायक",
        },
        name: {
          en: "Pri. Bandrin",
          mr: "प्रि. बॅन्ड्रीन",
        },
        role: {
          en: "Establishment Management",
          mr: "आस्थापना व्यवस्थापन",
        },
        description: {
          en: "Handles establishment-related work",
          mr: "आस्थापना विषयक कामे पाहणे",
        },
      },
      {
        level: {
          en: "Driver",
          mr: "वाहनचालक",
        },
        name: {
          en: "Mazhar Khan",
          mr: "मझहर खान",
        },
        role: {
          en: "Transport",
          mr: "वाहतूक",
        },
        description: {
          en: "Vehicle operation and maintenance",
          mr: "वाहन चालविणे आणि देखभाल",
        },
      },
      {
        level: {
          en: "Peon",
          mr: "शिपाई",
        },
        name: {
          en: "Vacant",
          mr: "रिक्त",
        },
        role: {
          en: "Office Support",
          mr: "कार्यालयीन सहाय्य",
        },
        description: {
          en: "Office maintenance and support",
          mr: "कार्यालय देखभाल आणि सहाय्य",
        },
      },
    ],
    composition: {
      title: {
        en: "Key Responsibilities",
        mr: "मुख्य जबाबदाऱ्या",
      },
      items: {
        en: [
          "Annual district planning and committee coordination",
          "MLA/MP fund management and project monitoring",
          "Tourism development program implementation",
          "Budget preparation and financial monitoring",
        ],
        mr: [
          "जिल्हा वार्षिक योजना आखणी आणि समिती समन्वय",
          "आमदार/खासदार निधी व्यवस्थापन आणि प्रकल्प देखरेख",
          "पर्यटन विकास कार्यक्रम अंमलबजावणी",
          "अर्थसंकल्पीय अंदाज तयारी आणि आर्थिक देखरेख",
        ],
      },
    },
    committees: {
      title: {
        en: "Governing References",
        mr: "शासकीय संदर्भ",
      },
      items: {
        en: [
          "Govt. Circular No. JINIS/Planning Dept",
          "Govt. Decision No. 5710/R.H.30aF1-1426",
          "Finance Dept. Order No. STHAVIKA-0610/R.H.96-1482",
          "Planning Dept. Circular No. 1007/St39/w-iaäa",
        ],
        mr: [
          "म.शा. परिपत्रक क्र. जिनिस/नियोजन विभाग",
          "शासन निर्णय क्र. 5710/R.H.30aF1-1426",
          "वित्त विभाग शासन निर्णय क्र. स्थाविका-0610/R.H.96-1482",
          "नियोजन विभाग परिपत्रक क्र. 1007/St39/w-iaäa",
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
                <div>
                  <h3 className="text-xl font-medium text-gray-800">
                    {getText(item.level)}
                  </h3>
                  <p className="text-blue-600 font-medium">
                    {getText(item.role)}
                  </p>
                  <p className="text-blue-900 font-medium">
                    {getText(item.name)}
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
