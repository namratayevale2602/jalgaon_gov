import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import { useLanguage } from "../../contexts/LanguageContext";

const Schemepage = () => {
  const navigate = useNavigate();
  const { language } = useLanguage();
  const [activeFilter, setActiveFilter] = useState("All");

  const getText = (item) => {
    if (typeof item === 'object' && item !== null && language in item) {
      return item[language];
    }
    return item;
  };

  const pexelsImages = [
    "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg",
    "https://images.pexels.com/photos/247599/pexels-photo-247599.jpeg",
    "https://images.pexels.com/photos/296230/pexels-photo-296230.jpeg",
    "https://images.pexels.com/photos/247431/pexels-photo-247431.jpeg",
    "https://images.pexels.com/photos/296234/pexels-photo-296234.jpeg",
    "https://images.pexels.com/photos/296240/pexels-photo-296240.jpeg",
    "https://images.pexels.com/photos/296242/pexels-photo-296242.jpeg",
    "https://images.pexels.com/photos/296245/pexels-photo-296245.jpeg"
  ];

  const categories = [
    {
      id: 1,
      name: { 
        en: "MLA Local Area Development", 
        mr: "विधानसभा सदस्य स्थानिक विकास कार्यक्रम" 
      },
      slug: "mla-local-development",
      description: { 
        en: "Construction projects on government land with 10% maintenance limit", 
        mr: "सरकारी जमिनीवरील बांधकाम प्रकल्प आणि 10% देखभाल मर्यादा" 
      },
      icon: "🏗️",
    },
    {
      id: 2,
      name: { 
        en: "Minority Development Scheme", 
        mr: "अल्पसंख्याक विकास योजना" 
      },
      slug: "minority-development",
      description: { 
        en: "Development schemes for minority communities", 
        mr: "अल्पसंख्याक समुदायांसाठी विकास योजना" 
      },
      icon: "🕌"
    },
    {
      id: 3,
      name: { 
        en: "Hilly Area Development Programme", 
        mr: "डोंगरी विकास कार्यक्रम" 
      },
      slug: "hilly-area-development",
      description: { 
        en: "Development projects for hilly regions", 
        mr: "डोंगरी भागांसाठी विकास प्रकल्प" 
      },
      icon: "⛰️",
    },
    {
      id: 4,
      name: { 
        en: "Member of Legislative Assembly Local Area Development", 
        mr: "विधानसभा सदस्य स्थानिक विकास" 
      },
      slug: "mla-local-area-development",
      description: { 
        en: "Local area development by MLAs", 
        mr: "विधानसभा सदस्यांद्वारे स्थानिक विकास" 
      },
      icon: "🏛️",
    },
    {
      id: 5,
      name: { 
        en: "Member of Parliament Local Area Development Program", 
        mr: "संसद सदस्य स्थानिक विकास कार्यक्रम" 
      },
      slug: "mp-local-development",
      description: { 
        en: "Development projects under MP funds", 
        mr: "संसद सदस्य निधीतर्गत विकास प्रकल्प" 
      },
      icon: "🏛️",
    },
    {
      id: 6,
      name: { 
        en: "Hilly Area Development Programme", 
        mr: "डोंगरी विकास कार्यक्रम" 
      },
      slug: "hilly-area-development-program",
      description: { 
        en: "Special development projects for hilly areas", 
        mr: "डोंगरी भागांसाठी विशेष विकास प्रकल्प" 
      },
      icon: "🏞️",
    },
    {
      id: 7,
      name: { 
        en: "Human Development Programme", 
        mr: "मानव विकास कार्यक्रम" 
      },
      slug: "human-development",
      description: { 
        en: "Programs focused on human development", 
        mr: "मानव विकासावर लक्ष केंद्रित केलेले कार्यक्रम" 
      },
      icon: "👥",
    },
    {
      id: 8,
      name: { 
        en: "Other Schemes", 
        mr: "इतर योजना" 
      },
      slug: "other-schemes",
      description: { 
        en: "Various other development schemes", 
        mr: "विविध इतर विकास योजना" 
      },
      icon: "📋",
    },
  ];

  const projects = [
    {
      id: 1,
      title: { 
        en: "MLA Local Area Development - Road Construction", 
        mr: "विधानसभा स्थानिक विकास - रस्ता बांधकाम" 
      },
      description: { 
        en: "Road projects on government land with 45-day approval", 
        mr: "सरकारी जमिनीवरील रस्ता प्रकल्प 45-दिवस मंजुरीसह" 
      },
      image: pexelsImages[0],
      category_id: 1,
    },
    {
      id: 2,
      title: { 
        en: "Minority Development - Community Center", 
        mr: "अल्पसंख्याक विकास - समुदाय केंद्र" 
      },
      description: { 
        en: "Community infrastructure for minority groups", 
        mr: "अल्पसंख्याक गटांसाठी समुदाय पायाभूत सुविधा" 
      },
      image: pexelsImages[1],
      category_id: 2,
    },
    {
      id: 3,
      title: { 
        en: "Hilly Area Development - Road Connectivity", 
        mr: "डोंगरी विकास - रस्ते कनेक्टिव्हिटी" 
      },
      description: { 
        en: "Road connectivity projects in hilly regions", 
        mr: "डोंगरी भागातील रस्ते कनेक्टिव्हिटी प्रकल्प" 
      },
      image: pexelsImages[2],
      category_id: 3,
    },
    {
      id: 4,
      title: { 
        en: "MLA Local Area Development - Water Supply", 
        mr: "विधानसभा स्थानिक विकास - पाणीपुरवठा" 
      },
      description: { 
        en: "Water supply projects in local areas", 
        mr: "स्थानिक भागातील पाणीपुरवठा प्रकल्प" 
      },
      image: pexelsImages[3],
      category_id: 4,
    },
    {
      id: 5,
      title: { 
        en: "MP Local Development - School Building", 
        mr: "संसद सदस्य स्थानिक विकास - शाळा इमारत" 
      },
      description: { 
        en: "Educational infrastructure with District Collector approval", 
        mr: "शैक्षणिक पायाभूत सुविधा जिल्हाधिकारी मंजुरीसह" 
      },
      image: pexelsImages[4],
      category_id: 5,
    },

    {
      id: 7,
      title: { 
        en: "Human Development - Skill Center", 
        mr: "मानव विकास - कौशल्य केंद्र" 
      },
      description: { 
        en: "Skill development and training centers", 
        mr: "कौशल्य विकास आणि प्रशिक्षण केंद्रे" 
      },
      image: pexelsImages[6],
      category_id: 7,
    },
    {
      id: 8,
      title: { 
        en: "Other Schemes - Village Development", 
        mr: "इतर योजना - ग्रामविकास" 
      },
      description: { 
        en: "Comprehensive village development projects", 
        mr: "समग्र ग्रामविकास प्रकल्प" 
      },
      image: pexelsImages[7],
      category_id: 8,
    },
  ];

  const filteredProjects = () => {
    if (activeFilter === "All") return projects;
    const category = categories.find(cat => getText(cat.name) === activeFilter);
    return projects.filter(project => project.category_id === category.id);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="my-12">
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            animate="show"
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
          >
            {filteredProjects().map((project) => {
              const projectCategory = categories.find(cat => cat.id === project.category_id);
              
              return (
                <motion.div
                  key={project.id}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    show: { opacity: 1, y: 0 },
                  }}
                  whileHover={{
                    y: -5,
                    boxShadow: "0 10px 25px -5px rgba(0,0,0,0.1)",
                  }}
                  className="bg-white rounded-xl overflow-hidden border border-gray-100 transition-all cursor-pointer"
                  onClick={() => navigate(`/scheme/${projectCategory.slug}`)}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={getText(project.title)}
                      className="w-full h-full object-cover transition-transform hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-lg">{projectCategory?.icon}</span>
                      <span className="text-xl font-bold text-black-600">
                        {getText(projectCategory?.name)}
                      </span>
                    </div>
                    {/* <h3 className="text-xl font-bold text-gray-800 mb-2">
                      {getText(project.title)}
                    </h3> */}
                    <p className="text-gray-600 mb-4">
                      {getText(project.description)}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default Schemepage;