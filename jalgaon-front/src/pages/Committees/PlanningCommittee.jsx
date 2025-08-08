import { motion } from "framer-motion";
import { FaUsers, FaCalendarAlt, FaFileAlt } from "react-icons/fa";
import { useLanguage } from "../../contexts/LanguageContext";

const PlanningCommittee = () => {
  const { language } = useLanguage();

  // Bilingual content
  const content = {
    title: {
      en: "District Planning Committee",
      mr: "जिल्हा नियोजन समिती",
    },
    membersTitle: {
      en: "Committee Members",
      mr: "समिती सदस्य",
    },
    members: [
      {
        name: {
          en: "Shri. Rajesh Patil",
          mr: "श्री. राजेश पाटील",
        },
        designation: {
          en: "District Collector (Chairperson)",
          mr: "जिल्हाधिकारी (अध्यक्ष)",
        },
        role: {
          en: "Chairperson",
          mr: "अध्यक्ष",
        },
        contact: "dc-jalgaon@maharashtra.gov.in",
      },
      {
        name: {
          en: "Smt. Meena Deshpande",
          mr: "सौ. मीना देशपांडे",
        },
        designation: {
          en: "District Planning Officer",
          mr: "जिल्हा नियोजन अधिकारी",
        },
        role: {
          en: "Member Secretary",
          mr: "सदस्य सचिव",
        },
        contact: "dpo-jalgaon@maharashtra.gov.in",
      },
      {
        name: {
          en: "Shri. Sunil Jadhav",
          mr: "श्री. सुनील जाधव",
        },
        designation: {
          en: "Zilla Parishad President",
          mr: "जिल्हा परिषद अध्यक्ष",
        },
        role: {
          en: "Member",
          mr: "सदस्य",
        },
        contact: "zp-president@jalgaon.gov.in",
      },
      {
        name: {
          en: "Smt. Anjali Pawar",
          mr: "सौ. अंजली पवार",
        },
        designation: {
          en: "Mayor, Jalgaon Municipal Corporation",
          mr: "जळगाव महानगरपालिका महापौर",
        },
        role: {
          en: "Member",
          mr: "सदस्य",
        },
        contact: "mayor-jmc@jalgaon.gov.in",
      },
      {
        name: {
          en: "Dr. Vikram Patil",
          mr: "डॉ. विक्रम पाटील",
        },
        designation: {
          en: "Chief Executive Officer, Zilla Parishad",
          mr: "मुख्य कार्यकारी अधिकारी, जिल्हा परिषद",
        },
        role: {
          en: "Member",
          mr: "सदस्य",
        },
        contact: "ceo-zp@jalgaon.gov.in",
      },
    ],
    meetingsTitle: {
      en: "Meeting Schedule",
      mr: "बैठक वेळापत्रक",
    },
    meetings: [
      {
        date: "15 Jan 2023",
        agenda: {
          en: "Approval of Annual Plan 2023-24",
          mr: "वार्षिक योजना 2023-24 ची मंजुरी",
        },
        status: {
          en: "Completed",
          mr: "पूर्ण",
        },
        minutes: "#",
      },
      {
        date: "12 Apr 2023",
        agenda: {
          en: "Quarterly Progress Review",
          mr: "तिमाही प्रगती पुनरावलोकन",
        },
        status: {
          en: "Completed",
          mr: "पूर्ण",
        },
        minutes: "#",
      },
      {
        date: "18 Jul 2023",
        agenda: {
          en: "Mid-Year Plan Revision",
          mr: "अर्धवार्षिक योजना पुनरावलोकन",
        },
        status: {
          en: "Upcoming",
          mr: "आगामी",
        },
        minutes: null,
      },
      {
        date: "15 Oct 2023",
        agenda: {
          en: "Annual Performance Review",
          mr: "वार्षिक कार्यप्रदर्शन पुनरावलोकन",
        },
        status: {
          en: "Scheduled",
          mr: "नियोजित",
        },
        minutes: null,
      },
    ],
    functionsTitle: {
      en: "Committee Functions",
      mr: "समितीची कार्ये",
    },
    functions: {
      en: [
        "Approve the district annual development plan",
        "Monitor implementation of approved plans",
        "Review progress of ongoing projects",
        "Approve major policy decisions",
        "Resolve inter-departmental issues",
        "Evaluate performance of implementing agencies",
      ],
      mr: [
        "जिल्हा वार्षिक विकास योजना मंजूर करणे",
        "मंजूर योजनांची अंमलबजावणी मॉनिटर करणे",
        "चालू प्रकल्पांची प्रगती पुनरावलोकन करणे",
        "मोठ्या धोरणात्मक निर्णयांना मंजुरी देणे",
        "विभागांतर्गत समस्यांचे निराकरण करणे",
        "अंमलबजावणी एजन्सीचे मूल्यांकन करणे",
      ],
    },
    viewMinutes: {
      en: "View Minutes",
      mr: "मिनिट्स पहा",
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

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4 flex items-center">
            <FaUsers className="mr-2" /> {getText(content.membersTitle)}
          </h2>

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-blue-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-blue-700 uppercase tracking-wider">
                    {language === "mr" ? "नाव" : "Name"}
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-blue-700 uppercase tracking-wider">
                    {language === "mr" ? "पदनाम" : "Designation"}
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-blue-700 uppercase tracking-wider">
                    {language === "mr" ? "भूमिका" : "Role"}
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-blue-700 uppercase tracking-wider">
                    {language === "mr" ? "संपर्क" : "Contact"}
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {content.members.map((member, index) => (
                  <motion.tr
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="hover:bg-blue-50 transition"
                  >
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {getText(member.name)}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      {getText(member.designation)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                      {getText(member.role)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600">
                      <a
                        href={`mailto:${member.contact}`}
                        className="hover:underline"
                      >
                        {member.contact}
                      </a>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold text-blue-700 mb-4 flex items-center">
              <FaCalendarAlt className="mr-2" />{" "}
              {getText(content.meetingsTitle)}
            </h2>

            <div className="space-y-4">
              {content.meetings.map((meeting, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="border-b pb-4 last:border-b-0"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-medium text-gray-800">
                        {meeting.date}
                      </h3>
                      <p className="text-gray-600">{getText(meeting.agenda)}</p>
                    </div>
                    <span
                      className={`px-2 py-1 text-xs rounded-full ${
                        meeting.status.en === "Completed"
                          ? "bg-green-100 text-green-800"
                          : meeting.status.en === "Upcoming"
                          ? "bg-yellow-100 text-yellow-800"
                          : "bg-blue-100 text-blue-800"
                      }`}
                    >
                      {getText(meeting.status)}
                    </span>
                  </div>
                  {meeting.minutes && (
                    <a
                      href={meeting.minutes}
                      className="inline-flex items-center mt-2 text-sm text-blue-600 hover:underline"
                    >
                      <FaFileAlt className="mr-1" />{" "}
                      {getText(content.viewMinutes)}
                    </a>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold text-blue-700 mb-4">
              {getText(content.functionsTitle)}
            </h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              {getText(content.functions).map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanningCommittee;
