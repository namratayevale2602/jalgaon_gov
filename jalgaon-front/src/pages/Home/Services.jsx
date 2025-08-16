import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
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

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Services = () => {
  const navigate = useNavigate();
  const { language } = useLanguage();
  const [activeFilter] = useState("All");

  const getText = (item) => {
    if (typeof item === "object" && item !== null && language in item) {
      return item[language];
    }
    return item;
  };

  const categories = [
    {
      id: 1,
      name: { en: "DISTRICT ANNUAL PLAN", mr: "जिल्हा वार्षिक योजना" },
      slug: "annualPlan",
    },
    {
      id: 2,
      name: {
        en: "MLA Local Development Program",
        mr: "आमदार स्थानिक विकास कार्यक्रम",
      },
      slug: "mlaFunds",
    },
    {
      id: 3,
      name: {
        en: "MP Local Area Development Program",
        mr: "खासदार स्थानिक क्षेत्र विकास कार्यक्रम",
      },
      slug: "mpFunds",
    },
    {
      id: 4,
      name: { en: "HILLY AREA DEVELOPMENT", mr: "डोंगराळ क्षेत्र विकास" },
      slug: "hillyArea",
    },
    {
      id: 5,
      name: { en: "HUMAN DEVELOPMENT", mr: "मानवी विकास" },
      slug: "humanDevelopment",
    },
    {
      id: 6,
      name: { en: "MINORITY SCHEMES", mr: "अल्पसंख्याक योजना" },
      slug: "minoritySchemes",
    },
    {
      id: 7,
      name: { en: "OTHER SCHEMES", mr: "इतर योजना" },
      slug: "otherSchemes",
    },
  ];

  const projects = [
    {
      id: 1,
      title: {
        en: "Annual Road Development Plan",
        mr: "वार्षिक रस्ता विकास योजना",
      },
      image: dap,
      category_id: 1,
    },
    {
      id: 2,
      title: {
        en: "MLA Fund - School Renovation",
        mr: "एमएलए निधी - शाळा नूतनीकरण",
      },
      image: molalad,
      category_id: 2,
    },
    {
      id: 3,
      title: {
        en: "MP Fund - Bridge Construction",
        mr: "एमपी निधी - पूल बांधकाम",
      },
      image: parliment,
      category_id: 3,
    },
    {
      id: 4,
      title: {
        en: "Hilly Area Road Connectivity",
        mr: "डोंगराळ क्षेत्र रस्ते कनेक्टिव्हिटी",
      },
      image: hilldevelop,
      category_id: 4,
    },
    {
      id: 5,
      title: {
        en: "Skill Development Center",
        mr: "कौशल्य विकास केंद्र",
      },
      image: humandevelop,
      category_id: 5,
    },
    {
      id: 6,
      title: {
        en: "Minority Education Scholarship",
        mr: "अल्पसंख्याक शैक्षणिक शिष्यवृत्ती",
      },
      image: minoritydevelop,
      category_id: 6,
    },
    {
      id: 7,
      title: {
        en: "Village Infrastructure Development",
        mr: "ग्रामीण पायाभूत विकास",
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
    <div className="">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            {language === "en" ? "Schemes" : "योजना"}
          </h2>
        </div>

        {/* Auto Slider Section */}
        <div className="my-12">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {filteredProjects().map((project) => {
              const projectCategory = categories.find(
                (cat) => cat.id === project.category_id
              );

              return (
                <SwiperSlide key={project.id}>
                  <motion.div
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      show: { opacity: 1, y: 0 },
                    }}
                    whileHover={{
                      y: -5,
                    }}
                    className="bg-white rounded-xl overflow-hidden border border-gray-100 transition-all cursor-pointer h-full"
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
                        <span className="text-xl font-bold text-black-600">
                          {getText(projectCategory?.name)}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </main>
    </div>
  );
};

export default Services;
