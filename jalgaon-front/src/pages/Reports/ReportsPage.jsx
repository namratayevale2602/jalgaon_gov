import { motion } from "framer-motion";
import { FaDownload, FaEye, FaFilePdf, FaSearch } from "react-icons/fa";
import { useState } from "react";
import { useLanguage } from "../../contexts/LanguageContext";

const ReportsPage = () => {
  const { language } = useLanguage();

  // Bilingual content
  const content = {
    title: {
      en: "Reports & Documents",
      mr: "अहवाल आणि दस्तऐवज",
    },
    subtitle: {
      en: "Official documents related to District Planning Committees",
      mr: "जिल्हा नियोजन समिती संबंधित अधिकृत दस्तऐवज",
    },
    searchPlaceholder: {
      en: "Search documents...",
      mr: "दस्तऐवज शोधा...",
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
        id: 4,
        title: {
          en: "MAHARASHTRA DISTRICT PLANNING COMMITTEE (CONSTITUTIONS AND FUNCTIONS) ACT, 1998",
          mr: "महाराष्ट्र जिल्हा नियोजन समिती (रचना व कामे) अधिनियम, १९९८",
        },
        description: {
          en: "The principal act governing constitution and functions of District Planning Committees in Maharashtra",
          mr: "महाराष्ट्रातील जिल्हा नियोजन समित्यांच्या रचना आणि कार्यांचे नियमन करणारा प्रमुख कायदा",
        },
        fileUrl:
          "https://plan.maharashtra.gov.in/Sitemap/plan/pdf/MAHARASHTRA_DISTRICT_PLANNING_COMMITTEE_(CONSTITUTIONS_AND_FUNCTIONS)_ACT_1998_18022021.pdf",
        fileType: "PDF",
      },
      {
        id: 5,
        title: {
          en: "Maharashtra District Planning Committee (Election) Rules, 1999",
          mr: "महाराष्ट्र जिल्हा नियोजन समिती (निवडणूक) नियम,१९९९",
        },
        description: {
          en: "Rules governing the election process for District Planning Committee members",
          mr: "जिल्हा नियोजन समिती सदस्यांच्या निवडणूक प्रक्रियेचे नियमन करणारे नियम",
        },
        fileUrl:
          "https://plan.maharashtra.gov.in/Sitemap/plan/pdf/Maharashtra_District_Planning_Committee_(Election)_Rules_1999_18022021.pdf",
        fileType: "PDF",
      },
      {
        id: 6,
        title: {
          en: "Maharashtra District Planning Committee (Conduct of meetings) Rules, 1999",
          mr: "महाराष्ट्र जिल्हा नियोजन समिती (सभा घेणे) नियम, १९९९",
        },
        description: {
          en: "Rules regulating the conduct of meetings of District Planning Committees",
          mr: "जिल्हा नियोजन समित्यांच्या सभांच्या आयोजना आणि संचालनाचे नियम",
        },
        fileUrl:
          "https://plan.maharashtra.gov.in/Sitemap/plan/pdf/Maharashtra_District_Planning_Committee_(Conduct_of_meetings)Rules_1999_18022021.pdf",
        fileType: "PDF",
      },
      {
        id: 7,
        title: {
          en: "Maharashtra District Planning Committees (Conduct of meetings) (Amendments) Rules, 2018",
          mr: "महाराष्ट्र जिल्हा नियोजन समिती (सभा घेणे) (सुधारणा) नियम, २०१८",
        },
        description: {
          en: "Amendments to the rules governing conduct of DPC meetings",
          mr: "जिल्हा नियोजन समिती सभांच्या संचालनाच्या नियमांमधील सुधारणा",
        },
        fileUrl:
          "https://plan.maharashtra.gov.in/Sitemap/plan/pdf/Maharashtra_District_Planning_Committees_(Conduct_of_meetings)_(Amendments)_Rules_2018_18022021.pdf",
        fileType: "PDF",
      },
      {
        id: 8,
        title: {
          en: "Maharashtra District Planning Committee (Conduct of meetings) (Amendments) Rules, 2019",
          mr: "महाराष्ट्र जिल्हा नियोजन समिती (सभा घेणे) (सुधारणा) नियम, २०१९",
        },
        description: {
          en: "Latest amendments to the meeting conduct rules for DPCs",
          mr: "जिल्हा नियोजन समिती सभांच्या संचालन नियमांमधील नवीनतम सुधारणा",
        },
        fileUrl:
          "https://plan.maharashtra.gov.in/Sitemap/plan/pdf/Maharashtra_District_Planning_Committee_(Conduct_of_meetings)_(Amendments)_Rules_2019_18022021.pdf",
        fileType: "PDF",
      },
    ],
    tableHeaders: {
      title: { en: "Document Title", mr: "दस्तऐवज शीर्षक" },
      description: { en: "Description", mr: "वर्णन" },
      format: { en: "Format", mr: "स्वरूप" },
      actions: { en: "Actions", mr: "क्रिया" },
    },
    buttons: {
      view: { en: "View", mr: "पहा" },
    },
    emptyState: {
      title: {
        en: "No documents found",
        mr: "कोणतेही दस्तऐवज सापडले नाहीत",
      },
      message: {
        en: "Try adjusting your search criteria",
        mr: "तुमची शोध निकष समायोजित करण्याचा प्रयत्न करा",
      },
    },
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
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = fileName || "document.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleView = (fileUrl) => {
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

export default ReportsPage;
