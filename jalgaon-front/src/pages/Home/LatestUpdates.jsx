import { motion } from "framer-motion";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { useLanguage } from "../../contexts/LanguageContext";

const LatestUpdates = () => {
  const { language } = useLanguage();

  // Bilingual content
  const content = {
    title: {
      en: "Latest Updates",
      mr: "नवीनतम अद्यतने",
    },
    viewAll: {
      en: "View All",
      mr: "सर्व पहा",
    },
    readMore: {
      en: "Read More",
      mr: "अधिक वाचा",
    },
    updatesData: [
      {
        id: 1,
        title: {
          en: "District Annual Plan 2023-24 Approved",
          mr: "जिल्हा वार्षिक योजना 2023-24 मंजूर",
        },
        date: "15 March 2023",
        link: "#",
      },
      {
        id: 2,
        title: {
          en: "Tender for Road Construction Works",
          mr: "रस्ते बांधकाम कामांसाठी टेंडर",
        },
        date: "10 March 2023",
        link: "#",
      },
      {
        id: 3,
        title: {
          en: "Meeting of District Planning Committee",
          mr: "जिल्हा नियोजन समितीची बैठक",
        },
        date: "5 March 2023",
        link: "#",
      },
      {
        id: 4,
        title: {
          en: "MLA Funds Utilization Report Published",
          mr: "एमएलए निधी वापर अहवाल प्रकाशित",
        },
        date: "1 March 2023",
        link: "#",
      },
    ],
  };

  const getText = (item, isUpdate = false) => {
    if (isUpdate) {
      return item.title[language] || item.title.en;
    }
    return item[language] || item.en;
  };

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">
            {getText(content.title)} <Clock className="inline ml-2" />
          </h2>
          <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">
            {getText(content.viewAll)}
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {content.updatesData.map((update) => (
            <motion.div
              key={update.id}
              whileHover={{ y: -5 }}
              className="bg-gray-50 border border-gray-200 p-6 hover:shadow-md transition"
            >
              <div className="flex items-center text-gray-500 mb-2">
                <Calendar size={16} className="mr-2" />
                <span className="text-sm">{update.date}</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">
                {getText(update, true)}
              </h3>
              <a
                href={update.link}
                className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center"
              >
                {getText(content.readMore)}{" "}
                <ArrowRight size={16} className="ml-1" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestUpdates;
