import { motion } from "framer-motion";
import { FaUmbrellaBeach, FaMountain, FaBuilding } from "react-icons/fa";

const SpecialSchemes = () => {
  const schemes = [
    {
      name: "Tourism Development Scheme",
      icon: <FaUmbrellaBeach className="text-blue-600 text-2xl" />,
      description:
        "Development of tourism infrastructure and promotion of local heritage",
      features: [
        "Heritage site restoration",
        "Tourist facility development",
        "Local guide training",
        "Promotional campaigns",
      ],
      budget: "₹15 Crores (2023-24)",
    },
    {
      name: "Hilly Area Development Program",
      icon: <FaMountain className="text-blue-600 text-2xl" />,
      description: "Special development initiatives for hilly and tribal areas",
      features: [
        "Road connectivity improvement",
        "Water conservation projects",
        "Tribal welfare initiatives",
        "Eco-tourism promotion",
      ],
      budget: "₹25 Crores (2023-24)",
    },
    {
      name: "Statutory Board Projects",
      icon: <FaBuilding className="text-blue-600 text-2xl" />,
      description:
        "Special projects implemented through various statutory boards",
      features: [
        "MSEDCL infrastructure",
        "Water supply projects",
        "Public health initiatives",
        "Urban development works",
      ],
      budget: "₹35 Crores (2023-24)",
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
            Special Development Schemes
          </h1>
          <div className="border-b-2 border-blue-100 w-20 mb-6"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {schemes.map((scheme, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition"
            >
              <div className="p-6">
                <div className="flex items-start mb-4">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    {scheme.icon}
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-blue-700">
                      {scheme.name}
                    </h2>
                    <p className="text-sm text-gray-500">{scheme.marathi}</p>
                  </div>
                </div>

                <p className="text-gray-700 mb-4">{scheme.description}</p>

                <h3 className="font-medium text-gray-800 mb-2">
                  Key Features:
                </h3>
                <ul className="list-disc pl-5 space-y-1 text-gray-600 mb-4">
                  {scheme.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>

                <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                  <p className="text-sm text-blue-700">
                    <span className="font-medium">Annual Budget:</span>{" "}
                    {scheme.budget}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">
            Implementation Status
          </h2>

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-blue-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-blue-700 uppercase tracking-wider"
                  >
                    Scheme
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-blue-700 uppercase tracking-wider"
                  >
                    Physical Progress
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-blue-700 uppercase tracking-wider"
                  >
                    Financial Progress
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-blue-700 uppercase tracking-wider"
                  >
                    Key Achievements
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr className="hover:bg-blue-50 transition">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    Tourism Development
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div
                        className="bg-blue-600 h-2.5 rounded-full"
                        style={{ width: "65%" }}
                      ></div>
                    </div>
                    <span className="mt-1 block">65% completed</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                    ₹9.75 Cr utilized (65%)
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    5 heritage sites restored, 3 new tourist facilities
                  </td>
                </tr>
                <tr className="hover:bg-blue-50 transition">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    Hilly Area Development
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div
                        className="bg-green-600 h-2.5 rounded-full"
                        style={{ width: "45%" }}
                      ></div>
                    </div>
                    <span className="mt-1 block">45% completed</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                    ₹11.25 Cr utilized (45%)
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    32 km roads improved, 15 water conservation projects
                  </td>
                </tr>
                <tr className="hover:bg-blue-50 transition">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    Statutory Board Projects
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div
                        className="bg-yellow-500 h-2.5 rounded-full"
                        style={{ width: "30%" }}
                      ></div>
                    </div>
                    <span className="mt-1 block">30% completed</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                    ₹10.5 Cr utilized (30%)
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    2 new water supply projects, 5 urban development works
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialSchemes;
