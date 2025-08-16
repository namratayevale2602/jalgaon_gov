import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import { useLanguage } from "../../contexts/LanguageContext";
import {
  dap,
  hilldevelop,
  humandevelop,
  minoritydevelop,
  molalad,
  parliment,
  otherschemas,
} from "../../assets";

const Schemepage = () => {
  const navigate = useNavigate();
  const { language } = useLanguage();
  const [activeFilter, setActiveFilter] = useState("All");

  const getText = (item) => {
    if (typeof item === "object" && item !== null && language in item) {
      return item[language];
    }
    return item;
  };

  const pexelsImages = [
    dap,
    hilldevelop,
    humandevelop,
    minoritydevelop,
    molalad,
    parliment,
  ];

  const categories = [
    {
      id: 1,
      name: { en: "ANNUAL PLAN", mr: "वार्षिक योजना" },
      slug: "annualPlan",
      description: {
        en: "Annual development plans for local areas",
        mr: "स्थानिक भागांसाठी वार्षिक विकास योजना",
      },
      icon: "📅",
    },
    {
      id: 2,
      name: {
        en: "MLA Local Development Program",
        mr: "आमदार स्थानिक विकास कार्यक्रम",
      },
      slug: "mlaFunds",
      description: {
        en: "Development projects under MLA funds",
        mr: "एमएलए निधीतर्गत विकास प्रकल्प",
      },
      icon: "🏛️",
    },
    {
      id: 3,
      name: {
        en: "MP Local Area Development Program",
        mr: "खासदार स्थानिक क्षेत्र विकास कार्यक्रम",
      },
      slug: "mpFunds",
      description: {
        en: "Development projects under MP funds",
        mr: "एमपी निधीतर्गत विकास प्रकल्प",
      },
      icon: "🏛️",
    },
    {
      id: 4,
      name: { en: "HILLY AREA DEVELOPMENT", mr: "डोंगराळ क्षेत्र विकास" },
      slug: "hillyArea",
      description: {
        en: "Special development projects for hilly areas",
        mr: "डोंगराळ भागांसाठी विशेष विकास प्रकल्प",
      },
      icon: "⛰️",
    },
    {
      id: 5,
      name: { en: "HUMAN DEVELOPMENT", mr: "मानवी विकास" },
      slug: "humanDevelopment",
      description: {
        en: "Programs focused on human development",
        mr: "मानवी विकासावर लक्ष केंद्रित केलेले कार्यक्रम",
      },
      icon: "👥",
    },
    {
      id: 6,
      name: { en: "MINORITY SCHEMES", mr: "अल्पसंख्याक योजना" },
      slug: "minoritySchemes",
      description: {
        en: "Development schemes for minority communities",
        mr: "अल्पसंख्याक समुदायांसाठी विकास योजना",
      },
      icon: "🕌",
    },
    {
      id: 7,
      name: { en: "OTHER SCHEMES", mr: "इतर योजना" },
      slug: "otherSchemes",
      description: {
        en: "Various other development schemes",
        mr: "विविध इतर विकास योजना",
      },
      icon: "📋",
    },
  ];

  const projects = [
    // ANNUAL PLAN projects
    {
      id: 1,
      title: {
        en: "Annual Road Development Plan",
        mr: "वार्षिक रस्ता विकास योजना",
      },
      description: {
        en: "Comprehensive annual road construction and maintenance plan",
        mr: "व्यापक वार्षिक रस्ता बांधकाम आणि देखभाल योजना",
      },
      image: dap,
      category_id: 1,
    },

    // MLA FUNDS projects
    {
      id: 2,
      title: {
        en: "MLA Fund - School Renovation",
        mr: "एमएलए निधी - शाळा नूतनीकरण",
      },
      description: {
        en: "School infrastructure improvements under MLA funds",
        mr: "एमएलए निधीतर्गत शाळा पायाभूत सुविधा सुधारणा",
      },
      image: molalad,
      category_id: 2,
    },

    // MP FUNDS projects
    {
      id: 3,
      title: {
        en: "MP Fund - Bridge Construction",
        mr: "एमपी निधी - पूल बांधकाम",
      },
      description: {
        en: "Bridge construction projects under MP funds",
        mr: "एमपी निधीतर्गत पूल बांधकाम प्रकल्प",
      },
      image: parliment,
      category_id: 3,
    },

    // HILLY AREA DEVELOPMENT projects
    {
      id: 4,
      title: {
        en: "Hilly Area Road Connectivity",
        mr: "डोंगराळ क्षेत्र रस्ते कनेक्टिव्हिटी",
      },
      description: {
        en: "Road projects in difficult hilly terrains",
        mr: "अवघड डोंगराळ प्रदेशातील रस्ते प्रकल्प",
      },
      image: hilldevelop,
      category_id: 4,
    },

    // HUMAN DEVELOPMENT projects
    {
      id: 5,
      title: {
        en: "Skill Development Center",
        mr: "कौशल्य विकास केंद्र",
      },
      description: {
        en: "Vocational training and skill development programs",
        mr: "व्यावसायिक प्रशिक्षण आणि कौशल्य विकास कार्यक्रम",
      },
      image: humandevelop,
      category_id: 5,
    },

    // MINORITY SCHEMES projects
    {
      id: 6,
      title: {
        en: "Minority Education Scholarship",
        mr: "अल्पसंख्याक शैक्षणिक शिष्यवृत्ती",
      },
      description: {
        en: "Scholarship programs for minority students",
        mr: "अल्पसंख्याक विद्यार्थ्यांसाठी शिष्यवृत्ती कार्यक्रम",
      },
      image: minoritydevelop,
      category_id: 6,
    },

    // OTHER SCHEMES projects
    {
      id: 7,
      title: {
        en: "Village Infrastructure Development",
        mr: "ग्रामीण पायाभूत विकास",
      },
      description: {
        en: "Comprehensive village infrastructure projects",
        mr: "समग्र ग्रामीण पायाभूत सुविधा प्रकल्प",
      },
      image: otherschemas,
      category_id: 7,
    },
  ];

  const filteredProjects = () => {
    if (activeFilter === "All") return projects;
    const category = categories.find(
      (cat) => getText(cat.name) === activeFilter
    );
    return projects.filter((project) => project.category_id === category.id);
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
              const projectCategory = categories.find(
                (cat) => cat.id === project.category_id
              );

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
                    {/* <p className="text-gray-600 mb-4">
                      {getText(project.description)}
                    </p> */}
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
