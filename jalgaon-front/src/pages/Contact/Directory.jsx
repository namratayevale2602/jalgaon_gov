import { motion } from "framer-motion";
import { FaUserTie, FaPhone, FaEnvelope, FaRupeeSign } from "react-icons/fa";
import { useLanguage } from "../../contexts/LanguageContext";

const Directory = () => {
  const { language } = useLanguage();

  // Bilingual content
  const content = {
    title: {
      en: "Duties and responsibilities of officers",
      mr: "अधिकारी यांचे कर्तव्य व जबाबदा-या",
    },
    staffMembers: [
      {
        name: {
          en: "Shri.Vijay Shinde",
          mr: "श्री. विजय शिंदे",
        },
        designation: {
          en: "District Planning Officer",
          mr: "जिल्हा नियोजन अधिकारी",
        },
        contact: {
          phone: "0257-2223135",
          email: "dpojalgaon@gmail.com",
        },
        responsibilities: {
          en: [
            "Carrying out responsibilities as an office head",
            "Assisting the District Collector in planning matters",
            "Preparing the District Annual Plan and submitting it to the Government",
            "Organizing meetings of the District Planning Committee",
            "Monitoring the progress of the District Plan and special programs",
            "Submitting the MLA/MP Fund proposals for approval",
            "Performing the responsibility as the First Appellate Officer",
            "Inspecting 10% of the work of the District Annual Plan and all other plans/programs",
          ],
          mr: [
            "कार्यालय प्रमुख म्हणून जबाबदारी पार पाडणे",
            "जिल्हाधिकारी यांना नियोजन विषयांत मदत करणे",
            "जिल्हा वार्षिक योजना तयार करून शासनास सादर करणे",
            "जिल्हा नियोजन समितीच्या बैठका आयोजित करणे",
            "जिल्हा योजना व विशेष कार्यक्रमांची प्रगती मॉनिटर करणे",
            "आमदार/खासदार निधीचे प्रस्ताव मंजुरीसाठी सादर करणे",
            "प्रथम अपिलीय अधिकारी म्हणून जबाबदारी पार पाडणे",
            "जिल्हा वार्षिक योजना व इतर सर्व योजना/कार्यक्रमांच्या 10% कामांची पाहणी करणे ",
          ],
        },
      },
      {
        name: {
          en: "Shri.Rahul Idhe",
          mr: "श्री. राहुल इधे",
        },
        designation: {
          en: "Assistant District Planning Officer",
          mr: "सहाय्यक जिल्हा नियोजन अधिकारी",
        },
        contact: {
          phone: "0257-2223135",
          email: "dpojalgaon@gmail.com",
        },
        responsibilities: {
          en: [
            "Public Information Officer",
            "Drawing and Disbursement Officer",
            "Submitting proposals for approval under the District Annual Plan",
            "Preparing District Plan Manual",
            "Following up with the implementing agencies for receipt of funds",
            "Maintaining computerized records of planning matters",
          ],
          mr: [
            "जनमाहिती अधिकारी",
            "आहरण व संवितरण अधिकारी",
            "जिल्हा वार्षिक योजनांतर्गत प्रस्ताव मंजुरीसाठी सादर करणे",
            "जिल्हा योजना पुस्तिका तयार करणे",
            "अंमलबजावणी यंत्रणांना निधी प्राप्तीसाठी पाठपुरावा करणे",
            "नियोजन विषयांची संगणकीय नोंद ठेवणे",
          ],
        },
      },
      {
        name: {
          en: "Shri Bharat Salunke",
          mr: "श्री. भरत साळुंके",
        },
        designation: {
          en: "Assistant District Planning Officer",
          mr: "सहाय्यक जिल्हा नियोजन अधिकारी",
        },
        contact: {
          phone: "0257-2223135",
          email: "dpojalgaon@gmail.com",
        },
        responsibilities: {
          en: [
            "Submitting proposals for approval under MLA/MP/Regional Tourism Development Program/Dongri Development Program/Minority Development Program",
            "Following up with the implementing agencies for receipt of funds",
            "Submitting reports of approved works under MLA/MP programs and performing other tasks assigned by the Planning Department",
          ],
          mr: [
            "आमदार/खासदार/प्रादेशिक पर्यटन विकास कार्यक्रम/डोंगरी विकास कार्यक्रम/ अल्पसंख्यांक विकास कार्यक्रम अंतर्गत प्रस्ताव मंजूरीसाठी सादर करणे",
            "अंमलबजावणी यंत्रणांना निधी प्राप्तीसाठी पाठपुरावा करणे",
            "आमदार/खासदार कार्यक्रमांतील मंजूर कामांचे अहवाल सादर करणेव नियोजन विभागाने सोपविलेली इतर कामे करणे",
          ],
        },
      },
    ],
    contactTitle: {
      en: "Contact",
      mr: "संपर्क",
    },
    responsibilitiesTitle: {
      en: "Responsibilities",
      mr: "जबाबदाऱ्या",
    },
  };

  const getText = (item) => {
    if (Array.isArray(item)) {
      return item[language] || item.en;
    }
    if (typeof item === "object" && item !== null) {
      return item[language] || item.en || item;
    }
    return item;
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            {getText(content.title)}
          </h1>
          <div className="border-b-2 border-blue-100 w-20 mb-6"></div>
        </motion.div>

        <div className="space-y-6">
          {content.staffMembers.map((staff, index) => (
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
                          {getText(staff.name)}
                        </h2>
                        <p className="text-blue-700">
                          {getText(staff.designation)}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="md:w-1/3 border-l md:px-6">
                    <h3 className="text-lg font-medium text-gray-800 mb-3">
                      {getText(content.contactTitle)}
                    </h3>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <FaPhone className="text-gray-500 mr-2" />
                        <span className="text-gray-700">
                          {staff.contact.phone}
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
                      {getText(content.responsibilitiesTitle)}
                    </h3>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      {getText(staff.responsibilities).map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Directory;
