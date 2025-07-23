import { motion } from "framer-motion";
import { FaRupeeSign, FaClipboardCheck, FaListOl } from "react-icons/fa";

const MLAMPFunds = () => {
  const guidelines = [
    {
      title: "Eligibility",
      points: [
        "Only public works projects eligible",
        "No private land acquisition",
        "Maximum 10% for administrative expenses",
      ],
    },
    {
      title: "Approval Process",
      points: [
        "90-day mandatory approval timeline",
        "Technical scrutiny by planning officer",
        "DPC final approval required",
      ],
    },
    {
      title: "Implementation",
      points: [
        "Execution through concerned departments",
        "Quarterly progress reports mandatory",
        "Social audit for works above ₹25 lakhs",
      ],
    },
  ];

  const approvedProjects = [
    {
      id: "MLA-2023-045",
      name: "Rural Road Construction - Pimpalgaon",
      amount: "₹25,00,000",
      status: "Ongoing",
      mla: "Shri. Rajesh Patil",
    },
    {
      id: "MP-2023-112",
      name: "School Building Renovation - Yaval",
      amount: "₹50,00,000",
      status: "Completed",
      mla: "Smt. Meena Deshmukh",
    },
    {
      id: "MLA-2023-078",
      name: "Primary Health Center Equipment",
      amount: "₹15,00,000",
      status: "Approved",
      mla: "Shri. Sunil Jadhav",
    },
    {
      id: "MP-2023-095",
      name: "Community Hall - Bhusawal",
      amount: "₹40,00,000",
      status: "Ongoing",
      mla: "Shri. Prakash Pawar",
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
            MLA/MP Local Area Development Funds
          </h1>
          <div className="border-b-2 border-blue-100 w-20 mb-6"></div>
        </motion.div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4 flex items-center">
            <FaClipboardCheck className="mr-2" /> Guidelines
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {guidelines.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="border rounded-lg p-4 hover:shadow-md transition"
              >
                <h3 className="text-lg font-medium text-blue-800 mb-3">
                  {section.title}
                </h3>
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  {section.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
          <div className="p-6">
            <h2 className="text-2xl font-semibold text-blue-700 mb-4 flex items-center">
              <FaListOl className="mr-2" /> Approved Projects List (2023-24)
            </h2>

            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-blue-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-blue-700 uppercase tracking-wider"
                    >
                      Project ID
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-blue-700 uppercase tracking-wider"
                    >
                      Project Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-blue-700 uppercase tracking-wider"
                    >
                      Amount
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-blue-700 uppercase tracking-wider"
                    >
                      Status
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-blue-700 uppercase tracking-wider"
                    >
                      MLA/MP
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {approvedProjects.map((project, index) => (
                    <motion.tr
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="hover:bg-blue-50 transition"
                    >
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {project.id}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700">
                        {project.name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                        {project.amount}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span
                          className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            project.status === "Completed"
                              ? "bg-green-100 text-green-800"
                              : project.status === "Ongoing"
                              ? "bg-blue-100 text-blue-800"
                              : "bg-yellow-100 text-yellow-800"
                          }`}
                        >
                          {project.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                        {project.mla}
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-blue-800 mb-2">
            Important Notes
          </h3>
          <ul className="list-disc pl-5 space-y-1 text-gray-700">
            <li>All proposals must be submitted through the online portal</li>
            <li>90-day approval timeline strictly enforced</li>
            <li>
              Fund utilization certificates must be submitted within 3 months of
              completion
            </li>
            <li>Photographic evidence of works mandatory</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MLAMPFunds;
