import { motion } from "framer-motion";
import { FaUserTie, FaPhone, FaEnvelope, FaRupeeSign } from "react-icons/fa";
import { useLanguage } from "../../contexts/LanguageContext";

const Directory = () => {
  const { language } = useLanguage();

  // Bilingual content
  const content = {
    title: {
      en: "Staff Directory",
      mr: "कर्मचारी संचिका",
    },
    staffMembers: [
      {
        name: {
          en: "Shri.Vijay Shinde",
          mr: "श्री. विजय शिंदे",
        },
        designation: {
          en: "District Planning Officer",
          mr: "जिल्हा नियोजन अधिकारी",
        },
        contact: {
          phone: "0257-2223135",
          email: "dpojalgaon@gmail.com",
        },
        responsibilities: {
          en: [
            "Overall supervision of district planning",
            "Chairing committee meetings",
            "Final approval of development plans",
          ],
          mr: [
            "जिल्हा नियोजनाची एकूण देखरेख",
            "समिती बैठकांचे अध्यक्षपद",
            "विकास योजनांची अंतिम मंजुरी",
          ],
        },
      },
      {
        name: {
          en: "Shri.Rahul Idhe",
          mr: "श्री. राहुल इधे",
        },
        designation: {
          en: "Assistant District Planning Officer",
          mr: "सहाय्यक जिल्हा नियोजन अधिकारी",
        },
        contact: {
          phone: "0257-2223135",
          email: "dpojalgaon@gmail.com",
        },
        responsibilities: {
          en: [
            "Day-to-day administration",
            "RTI matters",
            "Coordination with line departments",
          ],
          mr: ["दैनंदिन प्रशासन", "आरटीआय बाबी", "लाइन विभागांशी समन्वय"],
        },
      },
      {
        name: {
          en: "Shri Bharat Salunke",
          mr: "श्री. भरत साळुंके",
        },
        designation: {
          en: "Assistant District Planning Officer",
          mr: "सहाय्यक जिल्हा नियोजन अधिकारी",
        },
        contact: {
          phone: "0257-2223135",
          email: "dpojalgaon@gmail.com",
        },
        responsibilities: {
          en: [
            "Budget preparation",
            "Financial approvals",
            "Expenditure monitoring",
          ],
          mr: ["अर्थसंकल्प तयारी", "आर्थिक मंजुरी", "खर्चाचे निरीक्षण"],
        },
      },
    ],
    contactTitle: {
      en: "Contact",
      mr: "संपर्क",
    },
    responsibilitiesTitle: {
      en: "Responsibilities",
      mr: "जबाबदाऱ्या",
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

        <div className="space-y-6">
          {content.staffMembers.map((staff, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="p-6">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/3 mb-4 md:mb-0">
                    <div className="flex items-center">
                      <div className="bg-blue-100 p-3 rounded-full mr-4">
                        <FaUserTie className="text-blue-600 text-2xl" />
                      </div>
                      <div>
                        <h2 className="text-xl font-semibold text-gray-800">
                          {getText(staff.name)}
                        </h2>
                        <p className="text-blue-700">
                          {getText(staff.designation)}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="md:w-1/3 border-l md:px-6">
                    <h3 className="text-lg font-medium text-gray-800 mb-3">
                      {getText(content.contactTitle)}
                    </h3>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <FaPhone className="text-gray-500 mr-2" />
                        <span className="text-gray-700">
                          {staff.contact.phone}
                        </span>
                      </div>

                      <div className="flex items-center">
                        <FaEnvelope className="text-gray-500 mr-2" />
                        <a
                          href={`mailto:${staff.contact.email}`}
                          className="text-blue-600 hover:underline"
                        >
                          {staff.contact.email}
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="md:w-1/3 border-l md:px-6 mt-4 md:mt-0">
                    <h3 className="text-lg font-medium text-gray-800 mb-3">
                      {getText(content.responsibilitiesTitle)}
                    </h3>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      {getText(staff.responsibilities).map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Directory;
