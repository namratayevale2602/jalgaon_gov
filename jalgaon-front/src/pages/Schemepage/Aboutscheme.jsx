import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import { FaSpinner } from "react-icons/fa";
import { useLanguage } from "../../contexts/LanguageContext";

const Schemepage = () => {
  const navigate = useNavigate();
  const { language } = useLanguage();
  const [activeFilter, setActiveFilter] = useState("All");
  const [schemes, setSchemes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
      name: {
        en: "HILLY REGION DEVELOPMENT PROGRAM",
        mr: "डोंगरी विभाग विकास कार्यक्रम",
      },
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

  useEffect(() => {
    const fetchSchemes = async () => {
      try {
        setLoading(true);
        const response = await fetch("http://127.0.0.1:8000/api/schemes", {
          headers: {
            "Accept-Language": language,
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch schemes");
        }

        const data = await response.json();
        setSchemes(data);
      } catch (err) {
        setError(err.message);
        console.error("Error fetching schemes:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchSchemes();
  }, [language]);

  const filteredSchemes = () => {
    if (activeFilter === "All") return schemes;
    const category = categories.find(
      (cat) => getText(cat.name) === activeFilter
    );
    return schemes.filter((scheme) => scheme.category_id === category.id);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
        <div className="text-center">
          <FaSpinner className="animate-spin text-4xl text-blue-600 mx-auto mb-4" />
          <p className="text-gray-600">Loading scheme...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-gray-50 min-h-screen flex items-center justify-center">
        <div className="text-xl text-red-600">Error: {error}</div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Filter Buttons */}
        <div className="mb-8 flex flex-wrap gap-4">
          <button
            onClick={() => setActiveFilter("All")}
            className={`px-6 py-2 rounded-full font-medium transition-colors ${
              activeFilter === "All"
                ? "bg-blue-600 text-white"
                : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
            }`}
          >
            {language === "mr" ? "सर्व" : "All"}
          </button>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(getText(category.name))}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                activeFilter === getText(category.name)
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
              }`}
            >
              {getText(category.name)}
            </button>
          ))}
        </div>

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
            {filteredSchemes().map((scheme) => {
              const category = categories.find(
                (cat) => cat.id === scheme.category_id
              );

              return (
                <motion.div
                  key={scheme.id}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    show: { opacity: 1, y: 0 },
                  }}
                  whileHover={{
                    y: -5,
                    boxShadow: "0 10px 25px -5px rgba(0,0,0,0.1)",
                  }}
                  className="bg-white rounded-xl overflow-hidden border border-gray-100 transition-all cursor-pointer"
                  onClick={() => navigate(`/scheme/${scheme.slug}`)}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={scheme.image}
                      alt={scheme.title}
                      className="w-full h-full object-cover transition-transform hover:scale-105"
                      loading="lazy"
                      onError={(e) => {
                        e.target.src =
                          "https://via.placeholder.com/400x300?text=Image+Not+Found";
                      }}
                    />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xl font-bold text-blue-600">
                        {category ? getText(category.name) : scheme.title}
                      </span>
                    </div>
                    <p className="text-gray-600 line-clamp-2">
                      {scheme.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {filteredSchemes().length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">
                {language === "mr"
                  ? "कोणतेही योजना सापडले नाहीत"
                  : "No schemes found"}
              </p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Schemepage;
