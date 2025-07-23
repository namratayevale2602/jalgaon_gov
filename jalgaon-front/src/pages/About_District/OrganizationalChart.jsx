import { motion } from "framer-motion";
import { FaUserTie, FaSitemap, FaUsers } from "react-icons/fa";

const OrganizationalChart = () => {
  const structure = [
    {
      level: "District Collector",
      role: "Chairperson",
      description: "Overall supervision and guidance",
    },
    {
      level: "District Planning Officer",
      role: "Member Secretary",
      description: "Day-to-day administration and coordination",
    },
    {
      level: "Assistant District Planning Officer",
      role: "Technical Support",
      description: "Implementation and monitoring",
    },
    {
      level: "Taluka Planning Officers",
      role: "Field Coordination",
      description: "Grassroots level planning and execution",
    },
    {
      level: "Support Staff",
      role: "Administrative Support",
      description: "Documentation and office management",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Organizational Structure
        </h1>
        <div className="border-b-2 border-blue-100 w-20 mb-6"></div>
      </motion.div>

      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <div className="flex items-center mb-4">
          <FaSitemap className="text-blue-600 text-2xl mr-3" />
          <h2 className="text-2xl font-semibold text-blue-700">
            Hierarchy Chart
          </h2>
        </div>

        <div className="space-y-4">
          {structure.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="border-l-4 border-blue-500 pl-4 py-3 hover:bg-blue-50 transition"
            >
              <div className="flex items-start">
                <div className="bg-blue-100 p-2 rounded-full mr-4">
                  <FaUserTie className="text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-medium text-gray-800">
                    {item.level}
                  </h3>
                  <p className="text-blue-600 font-medium">{item.role}</p>
                  <p className="text-gray-600 mt-1">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-blue-50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-blue-800 mb-3 flex items-center">
            <FaUsers className="mr-2" /> Composition
          </h3>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>80% members elected from Panchayat Raj Institutions</li>
            <li>20% members elected from Urban Local Bodies</li>
            <li>Ex-officio members from relevant departments</li>
            <li>Technical experts as co-opted members</li>
          </ul>
        </div>

        <div className="bg-blue-50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-blue-800 mb-3">
            Key Committees
          </h3>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>District Planning Committee (Governing Body)</li>
            <li>Executive Committee (Implementation Wing)</li>
            <li>Technical Advisory Group</li>
            <li>Subject-specific Sub-Committees</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default OrganizationalChart;
