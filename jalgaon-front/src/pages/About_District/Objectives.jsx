import { motion } from "framer-motion";
import { FaBullseye, FaChartLine, FaHandsHelping } from "react-icons/fa";

const Objectives = () => {
  const objectives = [
    {
      title: "Integrated Planning",
      description:
        "Consolidate plans of Panchayats and Municipalities for balanced development",
      icon: <FaChartLine className="text-blue-600 text-2xl" />,
    },
    {
      title: "Resource Optimization",
      description:
        "Ensure efficient utilization of available resources and funds",
      icon: <FaBullseye className="text-blue-600 text-2xl" />,
    },
    {
      title: "Public Participation",
      description:
        "Involve citizens in the planning process through consultations",
      icon: <FaHandsHelping className="text-blue-600 text-2xl" />,
    },
    {
      title: "Sustainable Development",
      description: "Promote environmentally sustainable development practices",
      icon: <FaChartLine className="text-blue-600 text-2xl" />,
    },
  ];

  return (
    <div className="max-w-6xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Objectives</h1>
        <div className="border-b-2 border-blue-100 w-20 mb-6"></div>
      </motion.div>

      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-semibold text-blue-700 mb-4">
          Vision Statement
        </h2>
        <p className="text-gray-700 mb-4">
          "To achieve comprehensive and sustainable development of Jalgaon
          district through participatory planning, optimal resource utilization,
          and effective implementation of development programs."
        </p>
      </div>

      <h2 className="text-2xl font-semibold text-gray-800 mb-6">
        Key Objectives
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {objectives.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition flex items-start"
          >
            <div className="bg-blue-100 p-2 rounded-full mr-4">{item.icon}</div>
            <div>
              <h3 className="text-xl font-medium text-blue-700 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="bg-blue-50 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-blue-800 mb-3">
          Strategic Goals
        </h3>
        <ul className="list-disc pl-5 space-y-2 text-gray-700">
          <li>Prepare integrated district development plans annually</li>
          <li>Ensure convergence of various government schemes</li>
          <li>Monitor and evaluate plan implementation</li>
          <li>Address regional disparities in development</li>
          <li>Promote transparency and accountability in planning process</li>
        </ul>
      </div>
    </div>
  );
};

export default Objectives;
