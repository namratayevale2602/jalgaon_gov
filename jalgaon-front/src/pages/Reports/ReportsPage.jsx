import { motion } from "framer-motion";
import { FaDownload, FaEye, FaFilePdf, FaSearch } from "react-icons/fa";
import { useState } from "react";

const ReportsPage = () => {
  // JSON data included in the same file
  const reportsData = [
    {
      id: 1,
      title: "Annual Financial Report 2023",
      date: "2023-12-31",
      description: "Complete financial overview for fiscal year 2023",
      fileUrl: "/reports/financial-report-2023.pdf",
      fileSize: "2.4 MB",
      fileType: "PDF",
    },
    {
      id: 2,
      title: "Quarterly Performance Q1 2024",
      date: "2024-03-31",
      description: "First quarter performance metrics and analysis",
      fileUrl: "/reports/q1-2024-performance.pdf",
      fileSize: "1.8 MB",
      fileType: "PDF",
    },
    {
      id: 3,
      title: "Sustainability Report 2023",
      date: "2023-11-15",
      description: "Environmental and social impact assessment",
      fileUrl: "/reports/sustainability-2023.pdf",
      fileSize: "3.2 MB",
      fileType: "PDF",
    },
    {
      id: 4,
      title: "Market Research Analysis",
      date: "2024-02-20",
      description: "Current market trends and competitor analysis",
      fileUrl: "/reports/market-research-2024.pdf",
      fileSize: "4.1 MB",
      fileType: "PDF",
    },
    {
      id: 5,
      title: "Employee Satisfaction Survey",
      date: "2023-10-05",
      description: "Results from annual employee engagement survey",
      fileUrl: "/reports/employee-survey-2023.pdf",
      fileSize: "1.5 MB",
      fileType: "PDF",
    },
  ];

  const [searchTerm, setSearchTerm] = useState("");

  const filteredReports = reportsData.filter(
    (report) =>
      report.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      report.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "short", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const handleDownload = (fileUrl, fileName) => {
    // In a real app, this would trigger the file download
    console.log(`Downloading ${fileName} from ${fileUrl}`);
    // window.open(fileUrl, '_blank'); // Uncomment in production
  };

  const handleView = (fileUrl) => {
    // In a real app, this would open the file in a new tab
    console.log(`Viewing file at ${fileUrl}`);
    // window.open(fileUrl, '_blank'); // Uncomment in production
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Reports</h1>
          <div className="border-b-2 border-blue-100 w-20 mb-6"></div>
          <p className="text-gray-600 mb-8">
            Access all official reports and documents
          </p>

          {/* Search Bar */}
          <div className="mb-8">
            <div className="relative max-w-md">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaSearch className="text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search reports..."
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
                      Title
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Description
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Date
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Format
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Actions
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
                              {report.title}
                            </div>
                            <div className="text-sm text-gray-500">
                              {report.fileSize}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-gray-900 max-w-xs truncate">
                          {report.description}
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
                            <FaEye className="mr-1" /> View
                          </button>
                          <button
                            onClick={() =>
                              handleDownload(report.fileUrl, report.title)
                            }
                            className="text-green-600 hover:text-green-900 flex items-center p-2 rounded hover:bg-green-50 transition"
                          >
                            <FaDownload className="mr-1" /> Download
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
                  No reports found
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  Try adjusting your search or filter to find what you're
                  looking for.
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
