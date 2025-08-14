import { motion } from "framer-motion";
import {
  FileText,
  Users,
  Award,
  Landmark,
  FileSearch,
  Home,
  Scale,
} from "lucide-react";
import { useLanguage } from "../../contexts/LanguageContext";

const UsefulLinks = () => {
  const { language } = useLanguage();

  // Bilingual content
  const content = {
    title: {
      en: "Useful Government Links",
      mr: "उपयुक्त सरकारी दुवे",
    },
    quickLinksData: [
      {
        title: {
          en: "RTI Portal",
          mr: "माहिती अधिकार पोर्टल",
        },
        icon: "FileSearch",
        description: {
          en: "Right to Information applications and status",
          mr: "माहिती अधिकार अर्ज आणि स्थिती",
        },
        link: "https://rtionline.maharashtra.gov.in/index-e.php",
      },
      {
        title: {
          en: "Government Resolutions",
          mr: "सरकारी निर्णय",
        },
        icon: "FileText",
        description: {
          en: "Official government resolutions and orders",
          mr: "अधिकृत सरकारी निर्णय आणि आदेश",
        },
        link: "https://gr.maharashtra.gov.in/1145/Government-Resolutions",
      },
      {
        title: {
          en: "Maharashtra e-District",
          mr: "महाराष्ट्र इ-डिस्ट्रिक्ट",
        },
        icon: "Landmark",
        description: {
          en: "Access various district services online",
          mr: "विविध जिल्हा सेवा ऑनलाइन प्रवेश",
        },
        link: "https://mahades.maharashtra.gov.in/home.do?lang=en",
      },
      {
        title: {
          en: "Jalgaon District Portal",
          mr: "जळगाव जिल्हा पोर्टल",
        },
        icon: "Home",
        description: {
          en: "Official website of Jalgaon district",
          mr: "जळगाव जिल्ह्याचे अधिकृत वेबसाइट",
        },
        link: "https://jalgaon.gov.in/",
      },
      // {
      //   title: {
      //     en: "Committees",
      //     mr: "समित्या",
      //   },
      //   icon: "Users",
      //   description: {
      //     en: "List of committees and members",
      //     mr: "समित्या आणि सदस्यांची यादी",
      //   },
      //   link: "/planningcommittee",
      // },
      // {
      //   title: {
      //     en: "Downloads",
      //     mr: "डाउनलोड",
      //   },
      //   icon: "FileText",
      //   description: {
      //     en: "Forms, reports and circulars",
      //     mr: "फॉर्म, अहवाल आणि परिपत्रके",
      //   },
      //   link: "/downloads",
      // },
      // {
      //   title: {
      //     en: "Reports",
      //     mr: "योजना",
      //   },
      //   icon: "Award",
      //   description: {
      //     en: "Current reports",
      //     mr: "अहवाल",
      //   },
      //   link: "/reports",
      // },
      // {
      //   title: {
      //     en: "Acts & Rules",
      //     mr: "कायदे आणि नियम",
      //   },
      //   icon: "Scale",
      //   description: {
      //     en: "Government acts and regulations",
      //     mr: "सरकारी कायदे आणि नियम",
      //   },
      //   link: "https://www.mha.gov.in/en/acts",
      // },
    ],
  };

  const iconComponents = {
    FileText,
    Users,
    Award,
    Landmark,
    FileSearch,
    Home,
    Scale,
  };

  const getText = (item, isLink = false) => {
    if (isLink) {
      return {
        title: item.title[language] || item.title.en,
        description: item.description[language] || item.description.en,
      };
    }
    return item[language] || item.en;
  };

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-gray-800 mb-8 text-center"
        >
          {getText(content.title)}
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {content.quickLinksData.map((link, index) => {
            const IconComponent = iconComponents[link.icon];
            const linkText = getText(link, true);
            return (
              <motion.a
                key={index}
                href={link.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
                }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg text-center hover:bg-blue-50 transition-all duration-300 border border-gray-200 hover:border-blue-200 flex flex-col items-center h-full"
              >
                <div className="text-blue-600 mb-4 group-hover:text-blue-800 bg-blue-50 p-3 rounded-full">
                  <IconComponent size={28} />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {linkText.title}
                </h3>
                <p className="text-gray-600 text-sm flex-grow">
                  {linkText.description}
                </p>
                <span className="mt-4 text-blue-600 text-sm font-medium hover:underline">
                  {language === "en" ? "Visit Link" : "दुवा भेट द्या"} →
                </span>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default UsefulLinks;
