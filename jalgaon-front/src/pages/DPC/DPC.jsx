import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../../contexts/LanguageContext";

// DPC Data in both English and Marathi
const dpcData = {
  en: {
    documents: {
      title: "Planning Committee Rules & Act",
      items: [
        {
          name: "Maharashtra District Planning Committee ( Conduct of meetings ) Rules, 1999",
          url: "https://plan.maharashtra.gov.in/Sitemap/plan/pdf/Maharashtra_District_Planning_Committee_(Conduct_of_meetings)Rules_1999_18022021.pdf",
        },
        {
          name: "Maharashtra District Planning Committee ( Election ) Rules, 1999",
          url: "https://plan.maharashtra.gov.in/Sitemap/plan/pdf/Maharashtra_District_Planning_Committee_(Election)_Rules_1999_18022021.pdf",
        },
        {
          name: "Maharashtra District Planning Committees ( Conduct of meetings ) (Amendments) Rules, 2018",
          url: "https://plan.maharashtra.gov.in/Sitemap/plan/pdf/Maharashtra_District_Planning_Committees_(Conduct_of_meetings)_(Amendments)_Rules_2018_18022021.pdf",
        },
        {
          name: "Maharashtra District Planning Committee ( Conduct of meetings ) (Amendments) Rules, 2019",
          url: "https://plan.maharashtra.gov.in/Sitemap/plan/pdf/Maharashtra_District_Planning_Committee_(Conduct_of_meetings)_(Amendments)_Rules_2019_18022021.pdf",
        },
      ],
    },
  },
  mr: {
    documents: {
      title: "महत्त्वाची दस्तऐवजे",
      items: [
        {
          name: "महाराष्ट्र जिल्हा नियोजन समिती (बैठक आयोजित करणे) नियम, १९९९",
          url: "https://plan.maharashtra.gov.in/Sitemap/plan/pdf/Maharashtra_District_Planning_Committee_(Conduct_of_meetings)Rules_1999_18022021.pdf",
        },
        {
          name: "महाराष्ट्र जिल्हा नियोजन समिती (निवडणूक) नियम, १९९९",
          url: "https://plan.maharashtra.gov.in/Sitemap/plan/pdf/Maharashtra_District_Planning_Committee_(Election)_Rules_1999_18022021.pdf",
        },
        {
          name: "महाराष्ट्र जिल्हा नियोजन समित्या (बैठक आयोजित करणे) (सुधारणा) नियम, २०१८",
          url: "https://plan.maharashtra.gov.in/Sitemap/plan/pdf/Maharashtra_District_Planning_Committees_(Conduct_of_meetings)_(Amendments)_Rules_2018_18022021.pdf",
        },
        {
          name: "महाराष्ट्र जिल्हा नियोजन समिती (बैठक आयोजित करणे) (सुधारणा) नियम, २०१९",
          url: "https://plan.maharashtra.gov.in/Sitemap/plan/pdf/Maharashtra_District_Planning_Committee_(Conduct_of_meetings)_(Amendments)_Rules_2019_18022021.pdf",
        },
      ],
    },
  },
};

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const DPC = () => {
  const { language } = useLanguage();
  const data = dpcData[language] || dpcData.en; // Fallback to English if language not found

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main Content */}
      <motion.main
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="container mx-auto px-4 py-6 md:py-8"
      >
        {/* Documents Section */}
        <motion.section
          variants={itemVariants}
          className="mb-8 md:mb-12 bg-white rounded-lg shadow-md p-4 md:p-6"
        >
          <h2 className="text-xl md:text-2xl font-semibold text-blue-800 border-b border-blue-200 pb-2 mb-3 md:mb-4">
            {data.documents.title}
          </h2>
          <div className="space-y-2 md:space-y-3">
            {data.documents.items.map((doc, index) => (
              <motion.a
                key={index}
                variants={itemVariants}
                whileHover={{ x: 5 }}
                href={doc.url}
                target="_blank"
                className="flex items-center text-blue-600 hover:text-blue-800 text-sm md:text-base"
              >
                <svg
                  className="w-4 h-4 md:w-5 md:h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>
                {doc.name}
              </motion.a>
            ))}
          </div>
        </motion.section>
      </motion.main>
    </div>
  );
};

export default DPC;
