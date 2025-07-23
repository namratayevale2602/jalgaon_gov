import { motion } from "framer-motion";
import { FaFileAlt, FaCheckCircle, FaUsersCog } from "react-icons/fa";

const KeyResponsibilities = () => {
  const responsibilities = [
    {
      title: "Prepare District Annual Plan",
      description:
        "Consolidation of plans from local bodies and preparation of comprehensive district development plan",
      icon: <FaFileAlt className="text-blue-600 text-2xl" />,
      details: [
        "Collect proposals from Gram Panchayats and Municipalities",
        "Prioritize projects based on district needs",
        "Allocate resources across sectors",
        "Submit final plan to State Government",
      ],
    },
    {
      title: "Approve MLA/MP Local Area Development Projects",
      description:
        "Scrutiny and approval of works proposed under MLALAD and MPLAD schemes",
      icon: <FaCheckCircle className="text-blue-600 text-2xl" />,
      details: [
        "Review project proposals within 90 days",
        "Ensure compliance with guidelines",
        "Monitor fund utilization",
        "Maintain transparency in approvals",
      ],
    },
    {
      title: "Coordinate with District Offices",
      description:
        "Liaison with various government departments for integrated planning",
      icon: <FaUsersCog className="text-blue-600 text-2xl" />,
      details: [
        "Conduct monthly coordination meetings",
        "Resolve inter-departmental issues",
        "Share planning data and resources",
        "Monitor implementation progress",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Key Responsibilities
          </h1>
          <div className="border-b-2 border-blue-100 w-20 mb-6"></div>
        </motion.div>

        <div className="space-y-8">
          {responsibilities.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="p-6">
                <div className="flex flex-col md:flex-row md:items-start">
                  <div className="bg-blue-100 p-3 rounded-full mb-4 md:mb-0 md:mr-6">
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <h2 className="text-xl font-semibold text-blue-700">
                      {item.title}
                    </h2>
                    <p className="text-gray-500 text-sm mb-2">{item.marathi}</p>
                    <p className="text-gray-700 mb-4">{item.description}</p>

                    <h3 className="font-medium text-gray-800 mb-2">
                      Specific Duties:
                    </h3>
                    <ul className="list-disc pl-5 space-y-1 text-gray-600">
                      {item.details.map((detail, i) => (
                        <li key={i}>{detail}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 bg-blue-50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-blue-800 mb-3">
            Legal Basis
          </h3>
          <p className="text-gray-700 mb-2">
            These responsibilities are assigned under Section 6 of the District
            Planning Committee Act, 1998.
          </p>
          <p className="text-gray-700">
            The committee operates under the administrative control of the
            Planning Department, Government of Maharashtra.
          </p>
        </div>
      </div>
    </div>
  );
};

export default KeyResponsibilities;
