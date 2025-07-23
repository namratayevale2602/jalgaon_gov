import { motion } from "framer-motion";
import { FaUserTie, FaUserShield, FaUserCog } from "react-icons/fa";

const RolewiseDuties = () => {
  const roles = [
    {
      position: "District Collector",
      icon: <FaUserTie className="text-blue-600" />,
      duties: [
        "Chair all DPC meetings (minimum 4 per year)",
        "Approve final district development plan",
        "Monitor overall implementation progress",
        "Resolve inter-departmental conflicts",
      ],
      monitoring: "Overall supervision of all works",
    },
    {
      position: "District Planning Officer",
      icon: <FaUserShield className="text-blue-600" />,
      duties: [
        "Prepare agenda for DPC meetings",
        "Coordinate with line departments",
        "Scrutinize MLA/MPLAD proposals",
        "Prepare progress reports",
      ],
      monitoring: "Directly monitor 15% of ongoing works",
    },
    {
      position: "Assistant Planning Officer",
      icon: <FaUserCog className="text-blue-600" />,
      duties: [
        "Compile Gram Panchayat plans",
        "Maintain project databases",
        "Conduct field visits",
        "Prepare monitoring reports",
      ],
      monitoring: "Physically verify 25% of works",
    },
    {
      position: "Taluka Planning Officer",
      icon: <FaUserCog className="text-blue-600" />,
      duties: [
        "Collect local body proposals",
        "Conduct public consultations",
        "Verify ground realities",
        "Submit progress reports",
      ],
      monitoring: "Inspect 100% of works in assigned taluka",
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
            Role-wise Duties
          </h1>
          <div className="border-b-2 border-blue-100 w-20 mb-6"></div>
        </motion.div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-blue-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left font-medium text-blue-700 uppercase tracking-wider"
                  >
                    Position
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left font-medium text-blue-700 uppercase tracking-wider"
                  >
                    Key Duties
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left font-medium text-blue-700 uppercase tracking-wider"
                  >
                    Monitoring Responsibility
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {roles.map((role, index) => (
                  <motion.tr
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="hover:bg-blue-50 transition"
                  >
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 bg-blue-100 p-2 rounded-full">
                          {role.icon}
                        </div>
                        <div className="ml-4">
                          <div className=" font-medium text-gray-900">
                            {role.position}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <ul className="text-sm text-gray-700 list-disc pl-5 space-y-1">
                        {role.duties.map((duty, i) => (
                          <li key={i}>{duty}</li>
                        ))}
                      </ul>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                      {role.monitoring}
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-blue-800 mb-3">
              General Duties
            </h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Attend all scheduled meetings</li>
              <li>Maintain proper documentation</li>
              <li>Submit periodic progress reports</li>
              <li>Ensure transparency in operations</li>
              <li>Address public grievances promptly</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-blue-800 mb-3">
              Monitoring Framework
            </h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Monthly progress review meetings</li>
              <li>Quarterly field inspections</li>
              <li>Annual performance audits</li>
              <li>Public disclosure of works</li>
              <li>Social audits for major projects</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RolewiseDuties;
