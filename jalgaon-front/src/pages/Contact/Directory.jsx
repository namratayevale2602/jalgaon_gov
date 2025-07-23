import { motion } from "framer-motion";
import { FaUserTie, FaPhone, FaEnvelope, FaRupeeSign } from "react-icons/fa";

const Directory = () => {
  const staffMembers = [
    {
      name: "Shree . Prataprao Patil",
      designation: "District Planning Officer",
      contact: {
        phone: "0257-2222233",
        mobile: "9876543210",
        email: "dpo-jalgaon@maharashtra.gov.in",
      },
      salary: "Pay Level 12 (₹78,800 - ₹2,09,200)",
      responsibilities: [
        "Overall supervision of district planning",
        "Chairing committee meetings",
        "Final approval of development plans",
      ],
    },
    {
      name: "Shree . R. A. Idhe",
      designation: "Assistant District Planning Officer",
      contact: {
        phone: "0257-2222234",
        mobile: "9876543211",
        email: "adpo-jalgaon@maharashtra.gov.in",
      },
      salary: "Pay Level 10 (₹56,100 - ₹1,77,500)",
      responsibilities: [
        "Day-to-day administration",
        "RTI matters",
        "Coordination with line departments",
      ],
    },
    {
      name: "Shreemati . Meenakshi Deshmukh",
      designation: "Accounts Officer",
      contact: {
        phone: "0257-2222235",
        mobile: "9876543212",
        email: "accounts-dpc@jalgaon.gov.in",
      },
      salary: "Pay Level 8 (₹47,600 - ₹1,51,100)",
      responsibilities: [
        "Budget preparation",
        "Financial approvals",
        "Expenditure monitoring",
      ],
    },
    {
      name: "Shree . Sanjay Jadhav",
      designation: "Taluka Planning Officer (Jalgaon)",
      contact: {
        phone: "0257-2222236",
        mobile: "9876543213",
        email: "tpo-jalgaon@jalgaon.gov.in",
      },
      salary: "Pay Level 7 (₹44,900 - ₹1,42,400)",
      responsibilities: [
        "Field verification",
        "Local coordination",
        "Progress monitoring",
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
            Staff Directory
          </h1>
          <div className="border-b-2 border-blue-100 w-20 mb-6"></div>
        </motion.div>

        <div className="space-y-6">
          {staffMembers.map((staff, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="p-6">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/3 mb-4 md:mb-0">
                    <div className="flex items-center">
                      <div className="bg-blue-100 p-3 rounded-full mr-4">
                        <FaUserTie className="text-blue-600 text-2xl" />
                      </div>
                      <div>
                        <h2 className="text-xl font-semibold text-gray-800">
                          {staff.name}
                        </h2>
                        <p className="text-blue-700">{staff.designation}</p>
                        <p className="text-sm text-gray-500">
                          {staff.englishDesignation}
                        </p>
                      </div>
                    </div>

                    <div className="mt-4">
                      <div className="flex items-center mb-2">
                        <FaRupeeSign className="text-gray-500 mr-2" />
                        <span className="text-gray-700">{staff.salary}</span>
                      </div>
                    </div>
                  </div>

                  <div className="md:w-1/3 border-l md:px-6">
                    <h3 className="text-lg font-medium text-gray-800 mb-3">
                      Contact
                    </h3>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <FaPhone className="text-gray-500 mr-2" />
                        <span className="text-gray-700">
                          {staff.contact.phone}
                        </span>
                      </div>
                      <div className="flex items-center">
                        <FaPhone className="text-gray-500 mr-2" />
                        <span className="text-gray-700">
                          {staff.contact.mobile}
                        </span>
                      </div>
                      <div className="flex items-center">
                        <FaEnvelope className="text-gray-500 mr-2" />
                        <a
                          href={`mailto:${staff.contact.email}`}
                          className="text-blue-600 hover:underline"
                        >
                          {staff.contact.email}
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="md:w-1/3 border-l md:px-6 mt-4 md:mt-0">
                    <h3 className="text-lg font-medium text-gray-800 mb-3">
                      Responsibilities
                    </h3>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      {staff.responsibilities.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* <div className="mt-8 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-blue-700 mb-4">
            Salary Structure (As per 7th Pay Commission)
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-blue-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-blue-700 uppercase tracking-wider"
                  >
                    Pay Level
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-blue-700 uppercase tracking-wider"
                  >
                    Pay Scale
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-blue-700 uppercase tracking-wider"
                  >
                    Grade Pay
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-blue-700 uppercase tracking-wider"
                  >
                    Example Positions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr className="hover:bg-blue-50 transition">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    Level 12
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                    ₹78,800 - ₹2,09,200
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                    ₹7,600
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    District Planning Officer
                  </td>
                </tr>
                <tr className="hover:bg-blue-50 transition">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    Level 10
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                    ₹56,100 - ₹1,77,500
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                    ₹5,400
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    Assistant District Planning Officer
                  </td>
                </tr>
                <tr className="hover:bg-blue-50 transition">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    Level 8
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                    ₹47,600 - ₹1,51,100
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                    ₹4,800
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    Accounts Officer
                  </td>
                </tr>
                <tr className="hover:bg-blue-50 transition">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    Level 7
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                    ₹44,900 - ₹1,42,400
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                    ₹4,600
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    Taluka Planning Officer
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Directory;
