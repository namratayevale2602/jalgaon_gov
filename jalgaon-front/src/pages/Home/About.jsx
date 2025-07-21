// src/pages/About.jsx
import { motion } from "framer-motion";
import {
  ArrowRight,
  Calendar,
  FileText,
  Users,
  Award,
  Clock,
} from "lucide-react";

const About = () => {
  // Dummy data for Jalgaon district
  const districtData = {
    name: "Jalgaon",
    population: "4,229,917 (2011 Census)",
    area: "11,765 km²",
    literacy: "79.73%",
    blocks: 15,
    villages: 1495,
    headquarters: "Jalgaon City",
  };

  const updates = [
    {
      id: 1,
      title: "District Annual Plan 2023-24 Approved",
      date: "15 March 2023",
      link: "#",
    },
    {
      id: 2,
      title: "Tender for Road Construction Works",
      date: "10 March 2023",
      link: "#",
    },
    {
      id: 3,
      title: "Meeting of District Planning Committee",
      date: "5 March 2023",
      link: "#",
    },
    {
      id: 4,
      title: "MLA Funds Utilization Report Published",
      date: "1 March 2023",
      link: "#",
    },
  ];

  const quickLinks = [
    {
      title: "RTI Portal",
      icon: <FileText size={32} />,
      description: "Right to Information applications and status",
      link: "#rti",
    },
    {
      title: "Committees",
      icon: <Users size={32} />,
      description: "List of committees and members",
      link: "#committees",
    },
    {
      title: "Downloads",
      icon: <FileText size={32} />,
      description: "Forms, reports and circulars",
      link: "#downloads",
    },
    {
      title: "Tenders",
      icon: <Award size={32} />,
      description: "Current tenders and notices",
      link: "#tenders",
    },
  ];

  return (
    <div className="bg-gray-50">
      {/* Latest Updates */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800">
              Latest Updates <Clock className="inline ml-2" />
            </h2>
            <a
              href="#"
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              View All
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {updates.map((update) => (
              <motion.div
                key={update.id}
                whileHover={{ y: -5 }}
                className="bg-gray-50 border border-gray-200 rounded-lg p-6 hover:shadow-md transition"
              >
                <div className="flex items-center text-gray-500 mb-2">
                  <Calendar size={16} className="mr-2" />
                  <span className="text-sm">{update.date}</span>
                </div>
                <h3 className="text-lg font-semibold mb-3">{update.title}</h3>
                <a
                  href={update.link}
                  className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center"
                >
                  Read More <ArrowRight size={16} className="ml-1" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About District */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            About Jalgaon District
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-lg text-gray-700 mb-6">
                Jalgaon district is located in the northern part of Maharashtra
                state in India. It is known as the "Banana Capital of India" as
                it leads in banana production. The district is part of the
                Khandesh region and is bordered by the Satpura mountain ranges.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-gray-800">Population</h4>
                  <p className="text-blue-600 font-bold">
                    {districtData.population}
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-gray-800">Area</h4>
                  <p className="text-blue-600 font-bold">{districtData.area}</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-gray-800">Literacy Rate</h4>
                  <p className="text-blue-600 font-bold">
                    {districtData.literacy}
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-gray-800">Villages</h4>
                  <p className="text-blue-600 font-bold">
                    {districtData.villages}
                  </p>
                </div>
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1587474260584-136574528ed5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                alt="Jalgaon District"
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Quick Links</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.link}
                whileHover={{ scale: 1.05 }}
                className="bg-blue-50 rounded-lg p-6 text-center hover:bg-blue-100 transition group"
              >
                <div className="text-blue-600 mb-4 flex justify-center group-hover:text-blue-800">
                  {link.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {link.title}
                </h3>
                <p className="text-gray-600">{link.description}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* About DPC */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1581093196277-2ac17d9c8c5a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                alt="District Planning Committee"
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                About District Planning Committee
              </h2>
              <p className="text-lg text-gray-700 mb-4">
                The District Planning Committee (DPC) is a constitutional body
                established under Article 243ZD of the Constitution of India and
                the Maharashtra District Planning Committee Act, 1998.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                The primary objective of the DPC is to consolidate the plans
                prepared by Panchayats and Municipalities in the district and to
                prepare a draft development plan for the district as a whole.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                The committee plays a crucial role in decentralized planning and
                ensures balanced development of the district by coordinating
                between various departments and local bodies.
              </p>
              <a
                href="#about"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
              >
                Learn More
                <ArrowRight size={20} className="ml-2" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
