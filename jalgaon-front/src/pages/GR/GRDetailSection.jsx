import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const GRDetailSection = () => {
  const [grData, setGrData] = useState(null);

  useEffect(() => {
    // Simulate API fetch
    setTimeout(() => {
      setGrData({
        grNumber: "GR/UD/2023/4567",
        title: "Jalgaon Municipal Corporation Water Supply Improvement Project",
        date: "15 March 2023",
        status: "Active",
        department: "Urban Development",
        summary:
          "Approval for phase 2 of water supply infrastructure upgrades in Jalgaon municipal area.",
      });
    }, 500);
  }, []);

  if (!grData) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <section className="container mx-auto">
      <div className="py-12">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">
            Government Resolution
          </h2>
          <a
            href="/gr-directory"
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            GR Directory
          </a>
        </div>
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          {/* Content */}
          <div className="p-5">
            <div className="mb-4">
              <h1 className="text-xl font-semibold text-gray-800 mb-1">
                {grData.title}
              </h1>
              <p className="text-sm text-gray-500">{grData.grNumber}</p>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-5">
              <div>
                <p className="text-xs text-gray-500">Issued Date</p>
                <p className="text-sm font-medium">{grData.date}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500">Department</p>
                <p className="text-sm font-medium">{grData.department}</p>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-sm font-medium text-gray-700 mb-2">
                Summary
              </h3>
              <p className="text-gray-600 text-sm">{grData.summary}</p>
            </div>

            <div className="flex flex-wrap gap-3">
              <button className="px-4 py-2 bg-blue-600 text-white text-sm rounded hover:bg-blue-700 transition-colors">
                View Full Document
              </button>
              <button className="px-4 py-2 border border-gray-300 text-gray-700 text-sm rounded hover:bg-gray-50 transition-colors">
                Download PDF
              </button>
              <button className="px-4 py-2 text-gray-600 text-sm rounded hover:bg-gray-50 transition-colors flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 mr-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                  />
                </svg>
                Share
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GRDetailSection;
