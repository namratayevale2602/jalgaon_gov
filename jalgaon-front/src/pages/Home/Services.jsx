import { motion } from "framer-motion";
import { FileText, Users, Award, ArrowRight } from "lucide-react";
import { useLanguage } from "../../contexts/LanguageContext";

const Services = () => {
  const { language } = useLanguage();

  // Bilingual content
  const content = {
    title: {
      en: "Our Services",
      mr: "आमची सेवा",
    },
    viewText: {
      en: "View",
      mr: "पहा",
    },
    servicesData: [
      {
        title: {
          en: "District Annual Plan",
          mr: "जिल्हा वार्षिक योजना",
        },
        icon: "FileText",
        description: {
          en: "Access current and archived district annual plans, development schemes, and progress reports.",
          mr: "चालू आणि संग्रहित जिल्हा वार्षिक योजना, विकास योजना आणि प्रगती अहवाल मिळवा.",
        },
        link: "#annual-plan",
        color: "blue",
      },
      {
        title: {
          en: "MLA Fund",
          mr: "एमएलए निधी",
        },
        icon: "Users",
        description: {
          en: "Information about funded through MLA Local Area Development funds.",
          mr: "एमएलए स्थानिक क्षेत्र विकास निधीतून वित्तपुरवठा केलेल्या माहिती.",
        },
        link: "#mla-funds",
        color: "green",
      },
      {
        title: {
          en: "MP Fund",
          mr: "एमपी निधी",
        },
        icon: "Award",
        description: {
          en: "Information about funded through MP Local Area Development funds.",
          mr: "एमपी स्थानिक क्षेत्र विकास निधीतून वित्तपुरवठा केलेल्या माहिती.",
        },
        link: "#tenders",
        color: "orange",
      },
      {
        title: {
          en: "RTI Portal",
          mr: "माहिती अधिकार पोर्टल",
        },
        icon: "FileText",
        description: {
          en: "Submit Right to Information applications and track their status online.",
          mr: "माहिती अधिकार अर्ज सादर करा आणि त्यांची स्थिती ऑनलाइन ट्रॅक करा.",
        },
        link: "#rti",
        color: "purple",
      },
    ],
  };

  const iconComponents = {
    FileText,
    Users,
    Award,
  };

  const colorClasses = {
    blue: "bg-blue-100 text-blue-600",
    green: "bg-green-100 text-green-600",
    orange: "bg-orange-100 text-orange-600",
    purple: "bg-purple-100 text-purple-600",
  };

  const getText = (item, isService = false) => {
    if (isService) {
      return {
        title: item.title[language] || item.title.en,
        description: item.description[language] || item.description.en,
      };
    }
    return item[language] || item.en;
  };

  const getViewText = (serviceTitle) => {
    if (language === "mr") {
      return serviceTitle.includes("पोर्टल") ? "" : "योजना";
    }
    return serviceTitle.includes("Portal") ? "" : "Plans";
  };

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">
          {getText(content.title)}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {content.servicesData.map((service, index) => {
            const IconComponent = iconComponents[service.icon];
            const serviceText = getText(service, true);
            const viewText = getText(content.viewText);
            const additionalText = getViewText(serviceText.title);

            return (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="bg-gray-50 border border-gray-200 p-6 hover:shadow-md transition rounded-lg"
              >
                <div
                  className={`${
                    colorClasses[service.color]
                  } w-12 h-12 rounded-full flex items-center justify-center mb-4`}
                >
                  <IconComponent size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  {serviceText.title}
                </h3>
                <p className="text-gray-600 mb-4">{serviceText.description}</p>
                <a
                  href={service.link}
                  className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center"
                >
                  {viewText} {additionalText}
                  <ArrowRight size={16} className="ml-1" />
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
