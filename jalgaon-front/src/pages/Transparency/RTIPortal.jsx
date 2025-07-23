import { motion } from "framer-motion";
import { FaUserTie, FaFileAlt, FaMoneyBillWave } from "react-icons/fa";

const RTIPortal = () => {
  const steps = [
    {
      step: 1,
      title: "Prepare Application",
      description:
        "Write your application in English, Hindi, Marathi or local language",
    },
    {
      step: 2,
      title: "Pay Fee",
      description: "Attach ₹10 demand draft/IPO/bank receipt (₹5 for BPL)",
    },
    {
      step: 3,
      title: "Submit",
      description: "Submit to PIO in person, by post or online RTI portal",
    },
    {
      step: 4,
      title: "Receive Response",
      description:
        "Get information within 30 days (48 hours for life/liberty cases)",
    },
  ];

  const appealsProcess = [
    "First appeal to First Appellate Authority within 30 days of rejection/no response",
    "Second appeal to State Information Commission within 90 days of FAA order",
    "No fee for first appeal, ₹50 fee for second appeal",
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold text-gray-800 mb-2">RTI Portal</h1>
          <div className="border-b-2 border-blue-100 w-20 mb-6"></div>
        </motion.div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4 flex items-center">
            <FaUserTie className="mr-2" /> Public Information Officer (PIO)
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="text-lg font-medium text-blue-800 mb-2">
                Designated PIO
              </h3>

              <p className="text-gray-700 mt-2">
                Shri. R.A. Ide (Assistant District Planning Officer)
              </p>

              <div className="mt-4">
                <h4 className="font-medium text-gray-800">Contact Details:</h4>
                <p className="text-gray-700">Phone: 0257-2222222</p>
                <p className="text-gray-700">
                  Email: adpo-jalgaon@maharashtra.gov.in
                </p>
                <p className="text-gray-700">
                  Address: Planning Bhavan, Collector Office Campus, Jalgaon
                </p>
              </div>
            </div>

            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="text-lg font-medium text-green-800 mb-2">
                First Appellate Authority
              </h3>

              <p className="text-gray-700 mt-2">
                Shri. Prataprao Patil (District Planning Officer)
              </p>

              <div className="mt-4">
                <h4 className="font-medium text-gray-800">Contact Details:</h4>
                <p className="text-gray-700">Phone: 0257-2222233</p>
                <p className="text-gray-700">
                  Email: dpo-jalgaon@maharashtra.gov.in
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4 flex items-center">
            <FaFileAlt className="mr-2" /> How to File RTI Application
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white border border-blue-100 rounded-lg p-4 hover:shadow-md transition"
              >
                <div className="flex items-center mb-3">
                  <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-medium text-blue-700">
                    {step.title}
                  </h3>
                </div>
                <p className="text-gray-700">{step.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
            <h3 className="text-lg font-medium text-yellow-800 mb-2 flex items-center">
              <FaMoneyBillWave className="mr-2" /> Fee Structure
            </h3>
            <ul className="list-disc pl-5 space-y-1 text-gray-700">
              <li>
                Application fee: ₹10 (₹5 for Below Poverty Line applicants)
              </li>
              <li>
                Additional fees for information:
                <ul className="list-disc pl-5 mt-1">
                  <li>₹2 per page (A4/A3 size)</li>
                  <li>₹50 per diskette/floppy</li>
                  <li>₹100 per sample or model</li>
                  <li>Actual cost for inspection of records</li>
                </ul>
              </li>
              <li>No fee for first appeal</li>
              <li>₹50 fee for second appeal to State Information Commission</li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-blue-700 mb-4">
              Appeals Process
            </h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              {appealsProcess.map((point, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {point}
                </motion.li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-blue-700 mb-4">
              Online RTI Portal
            </h2>
            <p className="text-gray-700 mb-4">
              You can now file RTI applications online through the Maharashtra
              Government RTI Portal.
            </p>
            <a
              href="https://rti.maharashtra.gov.in"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Visit Online RTI Portal
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RTIPortal;
