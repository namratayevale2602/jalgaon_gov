import { motion } from "framer-motion";
import {
  FaDownload,
  FaEye,
  FaFilePdf,
  FaFileWord,
  FaFileExcel,
  FaSearch,
} from "react-icons/fa";
import { useState } from "react";

const Download = () => {
  // Document data included in the same file
  const documentsData = [
    {
      id: 1,
      title: "User Manual v2.5",
      date: "2024-01-15",
      description: "Complete user guide for all features",
      fileUrl: "/documents/user-manual-v2.5.pdf",
      fileSize: "5.2 MB",
      fileType: "PDF",
      category: "Manual",
    },
    {
      id: 2,
      title: "API Documentation",
      date: "2024-02-28",
      description: "Complete API reference for developers",
      fileUrl: "/documents/api-docs-2024.pdf",
      fileSize: "3.8 MB",
      fileType: "PDF",
      category: "Technical",
    },
    {
      id: 3,
      title: "Installation Guide",
      date: "2024-03-10",
      description: "Step-by-step installation instructions",
      fileUrl: "/documents/installation-guide.docx",
      fileSize: "2.1 MB",
      fileType: "DOCX",
      category: "Guide",
    },
    {
      id: 4,
      title: "Financial Report Q1 2024",
      date: "2024-04-05",
      description: "Quarterly financial performance report",
      fileUrl: "/documents/financial-report-q1-2024.pdf",
      fileSize: "4.5 MB",
      fileType: "PDF",
      category: "Report",
    },
    {
      id: 5,
      title: "Data Template",
      date: "2024-01-30",
      description: "Standard format for data submission",
      fileUrl: "/documents/data-template.xlsx",
      fileSize: "1.8 MB",
      fileType: "XLSX",
      category: "Template",
    },
  ];

  const [searchTerm, setSearchTerm] = useState("");

  const filteredDocuments = documentsData.filter(
    (doc) =>
      doc.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doc.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const getFileIcon = (fileType) => {
    switch (fileType.toLowerCase()) {
      case "pdf":
        return <FaFilePdf className="text-red-500 text-xl" />;
      case "docx":
        return <FaFileWord className="text-blue-500 text-xl" />;
      case "xlsx":
        return <FaFileExcel className="text-green-500 text-xl" />;
      default:
        return <FaFilePdf className="text-gray-500 text-xl" />;
    }
  };

  const handleDownload = (fileUrl, fileName) => {
    // In a real app, implement actual download logic
    console.log(`Downloading ${fileName} from ${fileUrl}`);
    // window.open(fileUrl, '_blank');
  };

  const handleView = (fileUrl) => {
    // In a real app, implement actual view logic
    console.log(`Viewing file at ${fileUrl}`);
    // window.open(fileUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div>
              <h1 className="text-2xl font-bold text-gray-800">Documents</h1>
              <div className="border-b-2 border-blue-100 w-16 mt-2 mb-4 md:mb-0"></div>
            </div>
            <div className="relative w-full md:w-64">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaSearch className="text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search documents..."
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Document
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
                      Category
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Updated
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
                  {filteredDocuments.map((doc) => (
                    <motion.tr
                      key={doc.id}
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
                          <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center bg-gray-50 rounded-lg">
                            {getFileIcon(doc.fileType)}
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">
                              {doc.title}
                            </div>
                            <div className="text-xs text-gray-500">
                              {doc.fileType} • {doc.fileSize}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-gray-600 max-w-xs">
                          {doc.description}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                          {doc.category}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-500">
                          {formatDate(doc.date)}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <div className="flex justify-end space-x-2">
                          <button
                            onClick={() => handleView(doc.fileUrl)}
                            className="text-blue-600 hover:text-blue-900 flex items-center p-2 rounded hover:bg-blue-50 transition"
                          >
                            <FaEye className="mr-1" /> View
                          </button>
                          <button
                            onClick={() =>
                              handleDownload(doc.fileUrl, doc.title)
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

            {filteredDocuments.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="p-12 text-center"
              >
                <div className="text-gray-400 mb-4">
                  <FaSearch className="mx-auto text-4xl" />
                </div>
                <h3 className="text-lg font-medium text-gray-900">
                  No documents found
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  Try adjusting your search to find what you're looking for.
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
