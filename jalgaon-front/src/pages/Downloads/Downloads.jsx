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
      date: { en: "Date", mr: "तारीख" },
      format: { en: "Format", mr: "स्वरूप" },
      actions: { en: "Actions", mr: "क्रिया" },
    },
    buttons: {
      view: { en: "View", mr: "पहा" },
      download: { en: "Download", mr: "डाउनलोड करा" },
    },
    emptyState: {
      title: { en: "No reports found", mr: "कोणतेही अहवाल सापडले नाहीत" },
      message: {
        en: "Try adjusting your search or filter to find what you're looking for.",
        mr: "तुम्ही शोधत असलेले शोधण्यासाठी तुमची शोध किंवा फिल्टर समायोजित करण्याचा प्रयत्न करा.",
      },
    },
    reports: [
      {
        id: 1,
        title: {
          en: "Annual Financial Report 2023",
          mr: "वार्षिक आर्थिक अहवाल २०२३",
        },
        date: "2023-12-31",
        description: {
          en: "Complete financial overview for fiscal year 2023",
          mr: "2023 च्या आर्थिक वर्षासाठी संपूर्ण आर्थिक आढावा",
        },
        fileUrl: "/reports/financial-report-2023.pdf",
        fileSize: "2.4 MB",
        fileType: "PDF",
      },
      {
        id: 2,
        title: {
          en: "Quarterly Performance Q1 2024",
          mr: "तिमाही कामगिरी Q1 २०२४",
        },
        date: "2024-03-31",
        description: {
          en: "First quarter performance metrics and analysis",
          mr: "पहिल्या तिमाहीची कामगिरी मेट्रिक्स आणि विश्लेषण",
        },
        fileUrl: "/reports/q1-2024-performance.pdf",
        fileSize: "1.8 MB",
        fileType: "PDF",
      },
      {
        id: 3,
        title: {
          en: "Sustainability Report 2023",
          mr: "शाश्वतता अहवाल २०२३",
        },
        date: "2023-11-15",
        description: {
          en: "Environmental and social impact assessment",
          mr: "पर्यावरणीय आणि सामाजिक प्रभाव मूल्यांकन",
        },
        fileUrl: "/reports/sustainability-2023.pdf",
        fileSize: "3.2 MB",
        fileType: "PDF",
      },
      {
        id: 4,
        title: {
          en: "Market Research Analysis",
          mr: "बाजार संशोधन विश्लेषण",
        },
        date: "2024-02-20",
        description: {
          en: "Current market trends and competitor analysis",
          mr: "चालू बाजारातील ट्रेंड आणि स्पर्धकांचे विश्लेषण",
        },
        fileUrl: "/reports/market-research-2024.pdf",
        fileSize: "4.1 MB",
        fileType: "PDF",
      },
      {
        id: 5,
        title: {
          en: "Employee Satisfaction Survey",
          mr: "कर्मचारी समाधान सर्वेक्षण",
        },
        date: "2023-10-05",
        description: {
          en: "Results from annual employee engagement survey",
          mr: "वार्षिक कर्मचारी संलग्नता सर्वेक्षणाचे निकाल",
        },
        fileUrl: "/reports/employee-survey-2023.pdf",
        fileSize: "1.5 MB",
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
    console.log(`Downloading ${fileName} from ${fileUrl}`);
    // window.open(fileUrl, '_blank');
  };

  const handleView = (fileUrl) => {
    console.log(`Viewing file at ${fileUrl}`);
    // window.open(fileUrl, '_blank');
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
                      {getText(content.tableHeaders.date)}
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
                            <div className="text-sm text-gray-500">
                              {report.fileSize}
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
                        <div className="text-sm text-gray-500">
                          {formatDate(report.date)}
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
                          <button
                            onClick={() =>
                              handleDownload(
                                report.fileUrl,
                                getText(report.title)
                              )
                            }
                            className="text-green-600 hover:text-green-900 flex items-center p-2 rounded hover:bg-green-50 transition"
                          >
                            <FaDownload className="mr-1" />{" "}
                            {getText(content.buttons.download)}
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
