import { motion } from "framer-motion";
import { FaDownload, FaEye, FaFilePdf, FaSearch } from "react-icons/fa";
import { useState } from "react";
import { useLanguage } from "../../contexts/LanguageContext";

const Download = () => {
  const { language } = useLanguage();

  // Bilingual content
  const content = {
    title: {
      en: "Downloads",
      mr: "डाउनलोड",
    },
    subtitle: {
      en: "Access all official reports and documents",
      mr: "सर्व अधिकृत अहवाल आणि दस्तऐवजांमध्ये प्रवेश करा",
    },
    searchPlaceholder: {
      en: "Search reports...",
      mr: "अहवाल शोधा...",
    },
    tableHeaders: {
      title: { en: "Title", mr: "शीर्षक" },
      description: { en: "Description", mr: "वर्णन" },
      format: { en: "Format", mr: "स्वरूप" },
      actions: { en: "Actions", mr: "क्रिया" },
    },
    buttons: {
      view: { en: "View", mr: "पहा" },
      download: { en: "Download", mr: "डाउनलोड" },
    },
    emptyState: {
      title: {
        en: "No reports found",
        mr: "कोणतेही अहवाल सापडले नाहीत",
      },
      message: {
        en: "Try adjusting your search or filter to find what you're looking for.",
        mr: "तुम्ही शोधत असलेले शोधण्यासाठी तुमची शोध किंवा फिल्टर समायोजित करण्याचा प्रयत्न करा.",
      },
    },
    reports: [
      {
        id: 1,
        title: {
          en: "Jalgaon District Financial Review 2024",
          mr: "जळगाव जिल्हा आर्थिक समालोचन 2024",
        },
        description: {
          en: "Comprehensive financial analysis of Jalgaon district for 2023-24",
          mr: "2023-24 साठी जळगाव जिल्ह्याचे सर्वसमावेशक आर्थिक विश्लेषण",
        },
        fileUrl:
          "https://mahades.maharashtra.gov.in/files/publication/dsa/2023-24/DSA_Jalgaon_2023-24.pdf",
        fileType: "PDF",
      },
      {
        id: 2,
        title: {
          en: "Jalgaon District Financial Review 2023",
          mr: "जळगाव जिल्हा आर्थिक समालोचन 2023",
        },
        description: {
          en: "Financial assessment of Jalgaon district for 2022-23",
          mr: "2022-23 साठी जळगाव जिल्ह्याचे आर्थिक मूल्यांकन",
        },
        fileUrl:
          "https://mahades.maharashtra.gov.in/files/publication/dsa/2022-23/DSA%202023%20Jalgaon_006.pdf",
        fileType: "PDF",
      },
      {
        id: 3,
        title: {
          en: "Jalgaon District Financial Review 2022",
          mr: "जळगाव जिल्हा आर्थिक समालोचन 2022",
        },
        description: {
          en: "Detailed financial report of Jalgaon district for 2021-22",
          mr: "2021-22 साठी जळगाव जिल्ह्याचे तपशीलवार आर्थिक अहवाल",
        },
        fileUrl:
          "https://mahades.maharashtra.gov.in/files/publication/dsa/2021-22/DSA_Jalgaon_2021-22.pdf",
        fileType: "PDF",
      },
      {
        id: 4,
        title: {
          en: "Jalgaon District Financial Review 2021",
          mr: "जळगाव जिल्हा आर्थिक समालोचन 2021",
        },
        description: {
          en: "Economic survey of Jalgaon district for 2020-21",
          mr: "2020-21 साठी जळगाव जिल्ह्याचे आर्थिक सर्वेक्षण",
        },
        fileUrl:
          "https://mahades.maharashtra.gov.in/files/publication/Jalgaon_DSA_2021.pdf",
        fileType: "PDF",
      },
      {
        id: 5,
        title: {
          en: "Jalgaon District Financial Review 2020",
          mr: "जळगाव जिल्हा आर्थिक समालोचन 2020",
        },
        description: {
          en: "Financial status report of Jalgaon district for 2019-20",
          mr: "2019-20 साठी जळगाव जिल्ह्याचे आर्थिक स्थिती अहवाल",
        },
        fileUrl:
          "https://mahades.maharashtra.gov.in/files/publication/dsa_Jalgaon_2020.pdf",
        fileType: "PDF",
      },
      {
        id: 6,
        title: {
          en: "Jalgaon Taluka Selected Indicators 2023-24",
          mr: "जळगाव जिल्हा तालुका निवडक निर्देशांक 2023-24",
        },
        description: {
          en: "Key development indicators for Jalgaon talukas 2023-24",
          mr: "2023-24 साठी जळगाव तालुक्यांचे प्रमुख विकास निर्देशांक",
        },
        fileUrl:
          "https://mahades.maharashtra.gov.in/files/publication/dsa/TalukaNirdeshak/2023-24/DSA_Jalgaon_2023-24.pdf",
        fileType: "PDF",
      },
      {
        id: 7,
        title: {
          en: "Jalgaon Taluka Selected Indicators 2022-23",
          mr: "जळगाव जिल्हा तालुका निवडक निर्देशांक 2022-23",
        },
        description: {
          en: "Development metrics for Jalgaon talukas 2022-23",
          mr: "2022-23 साठी जळगाव तालुक्यांचे विकास मेट्रिक्स",
        },
        fileUrl:
          "https://mahades.maharashtra.gov.in/files/publication/dsa/TalukaNirdeshak/2022-23/DSA_Jalgaon_2022-23.pdf",
        fileType: "PDF",
      },
      {
        id: 8,
        title: {
          en: "Maharashtra Economic Survey 2024-25",
          mr: "महाराष्ट्राची आर्थिक पाहणी 2024-25",
        },
        description: {
          en: "Comprehensive economic analysis of Maharashtra state",
          mr: "महाराष्ट्र राज्याचे सर्वसमावेशक आर्थिक विश्लेषण",
        },
        fileUrl:
          "https://mahades.maharashtra.gov.in/ESM1920/chapter/Marathi/esm_2425_m.pdf",
        fileType: "PDF",
      },
      {
        id: 9,
        title: {
          en: "Maharashtra Economic Survey 2023-24",
          mr: "महाराष्ट्राची आर्थिक पाहणी 2023-24",
        },
        description: {
          en: "State economic performance and analysis 2023-24",
          mr: "2023-24 साठी राज्याची आर्थिक कामगिरी आणि विश्लेषण",
        },
        fileUrl:
          "https://mahades.maharashtra.gov.in/files/publication/ESM_2023_24_Mar_Book.pdf",
        fileType: "PDF",
      },
      {
        id: 10,
        title: {
          en: "Maharashtra Economic Survey 2022-23",
          mr: "महाराष्ट्राची आर्थिक पाहणी 2022-23",
        },
        description: {
          en: "Economic trends and sectoral analysis of Maharashtra",
          mr: "महाराष्ट्राचे आर्थिक ट्रेंड आणि क्षेत्रवार विश्लेषण",
        },
        fileUrl:
          "https://mahades.maharashtra.gov.in/files/publication/ESM_2022_23_Mar_Book.pdf",
        fileType: "PDF",
      },
      {
        id: 11,
        title: {
          en: "District Development Plan (KBC North Maharashtra University Report)",
          mr: "जिल्हा विकास आराखडा (कवयित्री बहिणाबाई चौधरी उत्तर महाराष्ट्र विद्यापीठ अहवाल)",
        },
        description: {
          en: "Development framework report by KBC North Maharashtra University",
          mr: "कवयित्री बहिणाबाई चौधरी विद्यापीठाचा विकास आराखडा अहवाल",
        },
        fileUrl:
          "https://drive.google.com/file/d/1oZQ5-40jRxgDSl6hElpHVBTrtxpW2FeM/view?usp=drive_link",
        fileType: "PDF",
      },
      {
        id: 12,
        title: {
          en: "District Development Plan (Symbiosis University Report)",
          mr: "जिल्हा विकास आराखडा (सिम्बॉयसिस विद्यापीठ पुणे अहवाल)",
        },
        description: {
          en: "Comprehensive development strategy by Symbiosis University",
          mr: "सिम्बॉयसिस विद्यापीठाचा सर्वसमावेशक विकास धोरण अहवाल",
        },
        fileUrl:
          "https://drive.google.com/file/d/1QUr2l6rTw25abSYGG3ZcPHh-M8zEo9EN/view?usp=drive_link",
        fileType: "PDF",
      },
      {
        id: 13,
        title: {
          en: "Maharashtra Economic Advisory Council 2023 Report",
          mr: "महाराष्ट्र आर्थिक सल्लागार समिती अहवाल 2023",
        },
        description: {
          en: "Policy recommendations and economic guidance for Maharashtra",
          mr: "महाराष्ट्रासाठी धोरण शिफारसी आणि आर्थिक मार्गदर्शन",
        },
        fileUrl:
          "https://plan.maharashtra.gov.in/Sitemap/plan/Acts_Rules_and_Notifications_issued_in_respect_of_Maharashtra_District_Planning_Committee.htm",
        fileType: "PDF",
      },
    ],
  };

  const [searchTerm, setSearchTerm] = useState("");

  const getText = (item) => {
    if (Array.isArray(item)) {
      return item[language] || item.en;
    }
    if (typeof item === "object" && item !== null) {
      return item[language] || item.en || item;
    }
    return item;
  };

  const filteredReports = content.reports.filter(
    (report) =>
      getText(report.title).toLowerCase().includes(searchTerm.toLowerCase()) ||
      getText(report.description)
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
  );

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "short", day: "numeric" };
    return new Date(dateString).toLocaleDateString(
      language === "mr" ? "mr-IN" : "en-US",
      options
    );
  };

  const handleDownload = (fileUrl, fileName) => {
    // Create a temporary anchor element
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = fileName || "document.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleView = (fileUrl) => {
    // Open PDF in new tab
    window.open(fileUrl, "_blank", "noopener,noreferrer");
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
          <p className="text-gray-600 mb-8">{getText(content.subtitle)}</p>

          {/* Search Bar */}
          <div className="mb-8">
            <div className="relative max-w-md">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaSearch className="text-gray-400" />
              </div>
              <input
                type="text"
                placeholder={getText(content.searchPlaceholder)}
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          {/* Reports Table */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      {getText(content.tableHeaders.title)}
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      {getText(content.tableHeaders.description)}
                    </th>

                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      {getText(content.tableHeaders.format)}
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      {getText(content.tableHeaders.actions)}
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredReports.map((report) => (
                    <motion.tr
                      key={report.id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      whileHover={{
                        backgroundColor: "rgba(243, 244, 246, 0.5)",
                      }}
                      className="hover:bg-gray-50"
                    >
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center bg-red-50 rounded-lg">
                            <FaFilePdf className="text-red-500 text-xl" />
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">
                              {getText(report.title)}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-gray-900 max-w-xs truncate">
                          {getText(report.description)}
                        </div>
                      </td>

                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                          {report.fileType}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <div className="flex justify-end space-x-2">
                          <button
                            onClick={() => handleView(report.fileUrl)}
                            className="text-blue-600 hover:text-blue-900 flex items-center p-2 rounded hover:bg-blue-50 transition"
                          >
                            <FaEye className="mr-1" />{" "}
                            {getText(content.buttons.view)}
                          </button>
                        </div>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Empty State */}
            {filteredReports.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="p-12 text-center"
              >
                <div className="text-gray-400 mb-4">
                  <FaSearch className="mx-auto text-4xl" />
                </div>
                <h3 className="text-lg font-medium text-gray-900">
                  {getText(content.emptyState.title)}
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  {getText(content.emptyState.message)}
                </p>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Download;
