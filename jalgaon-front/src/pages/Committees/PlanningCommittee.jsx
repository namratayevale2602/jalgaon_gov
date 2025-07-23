import { motion } from "framer-motion";
import { FaUsers, FaCalendarAlt, FaFileAlt } from "react-icons/fa";

const PlanningCommittee = () => {
  const members = [
    {
      name: "Shri. Rajesh Patil",
      designation: "District Collector (Chairperson)",
      role: "Chairperson",
      contact: "dc-jalgaon@maharashtra.gov.in",
    },
    {
      name: "Smt. Meena Deshpande",
      designation: "District Planning Officer",
      role: "Member Secretary",
      contact: "dpo-jalgaon@maharashtra.gov.in",
    },
    {
      name: "Shri. Sunil Jadhav",
      designation: "Zilla Parishad President",
      role: "Member",
      contact: "zp-president@jalgaon.gov.in",
    },
    {
      name: "Smt. Anjali Pawar",
      designation: "Mayor, Jalgaon Municipal Corporation",
      role: "Member",
      contact: "mayor-jmc@jalgaon.gov.in",
    },
    {
      name: "Dr. Vikram Patil",
      designation: "Chief Executive Officer, Zilla Parishad",
      role: "Member",
      contact: "ceo-zp@jalgaon.gov.in",
    },
  ];

  const meetings = [
    {
      date: "15 Jan 2023",
      agenda: "Approval of Annual Plan 2023-24",
      status: "Completed",
      minutes: "#",
    },
    {
      date: "12 Apr 2023",
      agenda: "Quarterly Progress Review",
      status: "Completed",
      minutes: "#",
    },
    {
      date: "18 Jul 2023",
      agenda: "Mid-Year Plan Revision",
      status: "Upcoming",
      minutes: null,
    },
    {
      date: "15 Oct 2023",
      agenda: "Annual Performance Review",
      status: "Scheduled",
      minutes: null,
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
            District Planning Committee
          </h1>
          <div className="border-b-2 border-blue-100 w-20 mb-6"></div>
        </motion.div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4 flex items-center">
            <FaUsers className="mr-2" /> Committee Members
          </h2>

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-blue-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-blue-700 uppercase tracking-wider"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-blue-700 uppercase tracking-wider"
                  >
                    Designation
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-blue-700 uppercase tracking-wider"
                  >
                    Role
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-blue-700 uppercase tracking-wider"
                  >
                    Contact
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {members.map((member, index) => (
                  <motion.tr
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="hover:bg-blue-50 transition"
                  >
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {member.name}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      {member.designation}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                      {member.role}
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
              <FaCalendarAlt className="mr-2" /> Meeting Schedule
            </h2>

            <div className="space-y-4">
              {meetings.map((meeting, index) => (
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
                      <p className="text-gray-600">{meeting.agenda}</p>
                    </div>
                    <span
                      className={`px-2 py-1 text-xs rounded-full ${
                        meeting.status === "Completed"
                          ? "bg-green-100 text-green-800"
                          : meeting.status === "Upcoming"
                          ? "bg-yellow-100 text-yellow-800"
                          : "bg-blue-100 text-blue-800"
                      }`}
                    >
                      {meeting.status}
                    </span>
                  </div>
                  {meeting.minutes && (
                    <a
                      href={meeting.minutes}
                      className="inline-flex items-center mt-2 text-sm text-blue-600 hover:underline"
                    >
                      <FaFileAlt className="mr-1" /> View Minutes
                    </a>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold text-blue-700 mb-4">
              Committee Functions
            </h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Approve the district annual development plan</li>
              <li>Monitor implementation of approved plans</li>
              <li>Review progress of ongoing projects</li>
              <li>Approve major policy decisions</li>
              <li>Resolve inter-departmental issues</li>
              <li>Evaluate performance of implementing agencies</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanningCommittee;
