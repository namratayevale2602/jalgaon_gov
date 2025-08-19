import React, { useState } from "react";
import { motion } from "framer-motion";
import { useParams, useNavigate } from "react-router-dom";
import {
  FiArrowLeft,
  FiChevronLeft,
  FiChevronRight,
  FiImage,
} from "react-icons/fi";
import { useLanguage } from "../../contexts/LanguageContext";
import {
  dap,
  hilldevelop,
  humandevelop,
  minoritydevelop,
  molalad,
  parliment,
  otherschemas,
  MLA,
} from "../../assets";

import gr1 from "../../assets/GRpdf/17.07.2025 GR.pdf";
import gr2 from "../../assets/GRpdf/18.01.2010 GR.pdf";
import gr3 from "../../assets/GRpdf/Gr-13.03.2024.pdf";

const Schemedetail = () => {
  const { language } = useLanguage();
  const { schemeSlug } = useParams();
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const getText = (item) => {
    if (typeof item === "object" && item !== null && language in item) {
      return item[language];
    }
    return item;
  };

  const projects = [
    // ANNUAL PLAN
    {
      id: 1,
      name: { en: "DISTRICT ANNUAL PLAN", mr: "जिल्हा वार्षिक योजना" },
      slug: "annualPlan",
      description: {
        en: "Comprehensive annual development plans for local areas",
        mr: "स्थानिक भागांसाठी व्यापक वार्षिक विकास योजना",
      },
      details: {
        en: [
          "Road construction and maintenance",
          "Water supply projects",
          "Public infrastructure development",
          "Education facility improvements",
          "Healthcare infrastructure",
          "Yearly budget allocation",
        ],
        mr: [
          "रस्ते बांधकाम आणि देखभाल",
          "पाणीपुरवठा प्रकल्प",
          "सार्वजनिक पायाभूत सुविधा विकास",
          "शैक्षणिक सुविधा सुधारणा",
          "आरोग्यसेवा पायाभूत सुविधा",
          "वार्षिक अर्थसंकल्प वाटप",
        ],
      },
      image: dap,
      documents: {
        en: {
          title: "Documents",
          items: [
            {
              name: "Annual Plan Guidelines 2023-24",
              url: gr1,
            },
            {
              name: "District Planning Handbook",
              url: gr2,
            },
          ],
        },
        mr: {
          title: "दस्तऐवज",
          items: [
            {
              name: "वार्षिक योजना मार्गदर्शक तत्त्वे २०२३-२४",
              url: gr1,
            },
            {
              name: "जिल्हा नियोजन हँडबुक",
              url: gr2,
            },
          ],
        },
      },
    },

    // MLA FUNDS
    {
      id: 2,
      name: {
        en: "MLA Local Development Program",
        mr: "आमदार स्थानिक विकास कार्यक्रम ",
      },
      slug: "mlaFunds",
      description: {
        en: "Development projects under MLA Local Area Development funds",
        mr: "आमदार स्थानिक विकास कार्यक्रम",
      },
      details: {
        en: [
          "Construction projects to be approved only on government/local government land",
          "10% limit for maintenance and repair of properties constructed under government schemes",
          "Action should be taken regarding approval within 45 days",
          "Final approval of the District Collector is required",
          "Implementation through the implementing agencies",
          "Monthly & quarterly progress reports",
          "Random inspection of works by a team led by the District Planning Office",
        ],
        mr: [
          "फक्त शासकीय/स्थानिक स्वराज्य संस्थांच्या जागांवर मंजूर करण्यात येणारे बांधकाम प्रकल्प",
          "प्रशासकीय खर्चासाठी जास्तीत जास्त 10% ऐवजी शासकीय योजनांमधून बांधकाम करण्यात आलेल्या मालमत्तांच्या देखभाल दुरूस्तीसाठी 10% मर्यादेत",
          "45-दिवसांत मंजुरीबाबत कार्यवाही करावी",
          "जिल्हाधिकारी महोदयांची अंतीम मंजूरी आवश्यक",
          "कार्यान्वयीन यंत्रणेव्दारे अंमलबजावणी",
          "मासिक व तिमाही प्रगती अहवाल",
          "जिल्हा नियोजन अधिकारी यांचे नेतृत्वाखालील पथकाव्दारे कामांची यादृच्छीक पध्दतीने तपासणी",
        ],
      },
      image: molalad,
      documents: {
        en: {
          title: "Documents",
          items: [
            {
              name: "MLA Local Development Program Guidelines Government Decision Dated 12/07/2016",
              url: MLA,
            },
          ],
        },
        mr: {
          title: "दस्तऐवज",
          items: [
            {
              name: "आमदार स्थानिक विकास कार्यक्रम मार्गदर्शक तत्वे शासन निर्णय दि. 12/07/2016",
              url: MLA,
            },
          ],
        },
      },
    },

    // MP FUNDS
    {
      id: 3,
      name: {
        en: "MP Local Area Development Program",
        mr: "खासदार स्थानिक क्षेत्र विकास कार्यक्रम ",
      },
      slug: "mpFunds",
      description: {
        en: "Development projects under MP Local Area Development Program",
        mr: "खासदार स्थानिक क्षेत्र विकास कार्यक्रम",
      },
      details: {
        en: [
          "45-day approval period",
          "Final approval of the District Collector is required",
          "Random inspection of works by a team led by the District Planning Office",
          "Upload photographs (geotagged) of completed work",
          "Follows latest program guidelines (April 2023)",
          "List of approved projects (2023-24) available",
        ],
        mr: [
          "45-दिवसांची मंजुरी मुदत",
          "जिल्हाधिकारी महोदयांची अंतीम मंजूरी आवश्यक",
          "जिल्हा नियोजन अधिकारी यांचे नेतृत्वाखालील पथकाव्दारे कामांची यादृच्छीक पध्दतीने तपासणी",
          "पुर्ण झालेल्या कामांचे छायाचित्रे (जियो टॅग्ड) अपलोड करावे",
          "खासदार स्थानिक क्षेत्र विकास कार्यक्रमाच्या मार्गदर्शक सुचना, एप्रिल-2023 नुसार",
          "मंजूर प्रकल्प यादी (2023-24) उपलब्ध",
        ],
      },
      image: parliment,
      documents: {
        en: {
          title: "Documents",
          items: [
            {
              name: "MP LADS Scheme Guidelines",
              url: gr1,
            },
            {
              name: "Implementation Framework",
              url: gr2,
            },
          ],
        },
        mr: {
          title: "दस्तऐवज",
          items: [
            {
              name: "खासदार एलएडीएस योजना मार्गदर्शक तत्त्वे",
              url: gr1,
            },
            {
              name: "अंमलबजावणी फ्रेमवर्क",
              url: gr2,
            },
          ],
        },
      },
    },

    // HILLY AREA DEVELOPMENT
    {
      id: 4,
      name: {
        en: "HILLY REGION DEVELOPMENT PROGRAM",
        mr: "डोंगरी विभाग विकास कार्यक्रम",
      },
      slug: "hillyArea",
      description: {
        en: "Special development projects for hilly and difficult terrains",
        mr: "डोंगराळ आणि अवघड भूप्रदेशांसाठी विशेष विकास प्रकल्प",
      },
      details: {
        en: [
          "Road connectivity projects",
          "Landslide prevention measures",
          "Special housing schemes",
          "Water conservation programs",
          "Eco-tourism development",
          "Hill agriculture support",
        ],
        mr: [
          "रस्ते कनेक्टिव्हिटी प्रकल्प",
          "जमीनसरकाव रोखण्याचे उपाय",
          "विशेष गृहनिर्माण योजना",
          "जलसंधारण कार्यक्रम",
          "पर्यटन विकास",
          "डोंगरी शेती समर्थन",
        ],
      },
      image: hilldevelop,
      documents: {
        en: {
          title: "Documents",
          items: [
            {
              name: "Govt Decision No.Donvika-2021/ Q.No.58/ Ka.1481-A,Ministry",
              url: gr1,
            },
            {
              name: "Government Decision, No.-Donvika-2009/P.No.6/Ka. 1483, Ministry",
              url: gr2,
            },
            {
              name: "Govt Decision No: Domvika-2021/P.No.58/Ka-1481-A Ministry",
              url: gr3,
            },
          ],
        },
        mr: {
          title: "दस्तऐवज",
          items: [
            {
              name: "शासन निर्णय क्र.डोंविका-2021/ प्र.क्र.58/ का.1481-अ,मंत्रालय",
              url: gr1,
            },
            {
              name: "शासन निर्णय , क्रमांक-डोंविका-२००९/प्र.क्र .६/का. १४८३,मंत्रालय",
              url: gr2,
            },
            {
              name: "शासन निर्णय क्रमाांक: डोंविका-२०21/प्र.क्र.58/का-१४८१-अ मंत्रालय",
              url: gr3,
            },
          ],
        },
      },
    },

    // HUMAN DEVELOPMENT
    {
      id: 5,
      name: { en: "HUMAN DEVELOPMENT", mr: "मानवी विकास" },
      slug: "humanDevelopment",
      description: {
        en: "Programs focused on human development and welfare",
        mr: "मानवी विकास आणि कल्याणावर लक्ष केंद्रित केलेले कार्यक्रम",
      },
      details: {
        en: [
          "Skill development centers",
          "Women empowerment programs",
          "Child welfare initiatives",
          "Health awareness campaigns",
          "Adult literacy programs",
          "Community development projects",
        ],
        mr: [
          "कौशल्य विकास केंद्रे",
          "महिला सक्षमीकरण कार्यक्रम",
          "बालकल्याण उपक्रम",
          "आरोग्य जागरूकता मोहीम",
          "प्रौढ साक्षरता कार्यक्रम",
          "समुदाय विकास प्रकल्प",
        ],
      },
      image: humandevelop,
      documents: {
        en: {
          title: "Documents",
          items: [
            {
              name: "Human Development Framework",
              url: gr1,
            },
            {
              name: "Skill Development Guidelines",
              url: gr2,
            },
          ],
        },
        mr: {
          title: "दस्तऐवज",
          items: [
            {
              name: "मानवी विकास फ्रेमवर्क",
              url: gr1,
            },
            {
              name: "कौशल्य विकास मार्गदर्शक तत्त्वे",
              url: gr2,
            },
          ],
        },
      },
    },

    // MINORITY SCHEMES
    {
      id: 6,
      name: { en: "MINORITY SCHEMES", mr: "अल्पसंख्याक योजना" },
      slug: "minoritySchemes",
      description: {
        en: "Development schemes for minority community welfare",
        mr: "अल्पसंख्याक समुदाय कल्याणासाठी विकास योजना",
      },
      details: {
        en: [
          "Educational scholarships",
          "Skill development programs",
          "Community center construction",
          "Economic empowerment",
          "Cultural preservation",
          "Infrastructure development",
        ],
        mr: [
          "शैक्षणिक शिष्यवृत्ती",
          "कौशल्य विकास कार्यक्रम",
          "समुदाय केंद्र बांधकाम",
          "आर्थिक सक्षमीकरण",
          "सांस्कृतिक संवर्धन",
          "पायाभूत सुविधा विकास",
        ],
      },
      image: minoritydevelop,
      documents: {
        en: {
          title: "Documents",
          items: [
            {
              name: "Minority Welfare Schemes",
              url: gr1,
            },
            {
              name: "Scholarship Guidelines",
              url: gr2,
            },
          ],
        },
        mr: {
          title: "दस्तऐवज",
          items: [
            {
              name: "अल्पसंख्याक कल्याण योजना",
              url: gr1,
            },
            {
              name: "शिष्यवृत्ती मार्गदर्शक तत्त्वे",
              url: gr2,
            },
          ],
        },
      },
    },

    // OTHER SCHEMES
    {
      id: 7,
      name: { en: "OTHER SCHEMES", mr: "इतर योजना" },
      slug: "otherSchemes",
      description: {
        en: "Various other development schemes and programs",
        mr: "विविध इतर विकास योजना आणि कार्यक्रम",
      },
      details: {
        en: [
          "Village development projects",
          "Urban infrastructure",
          "Public sanitation",
          "Digital literacy",
          "Sports infrastructure",
          "Cultural heritage",
        ],
        mr: [
          "ग्रामीण विकास प्रकल्प",
          "शहरी पायाभूत सुविधा",
          "सार्वजनिक स्वच्छता",
          "डिजिटल साक्षरता",
          "क्रीडा पायाभूत सुविधा",
          "सांस्कृतिक वारसा",
        ],
      },
      image: otherschemas,
      documents: {
        en: {
          title: "Documents",
          items: [
            {
              name: "Various Development Schemes",
              url: gr1,
            },
            {
              name: "Implementation Guidelines",
              url: gr2,
            },
          ],
        },
        mr: {
          title: "दस्तऐवज",
          items: [
            {
              name: "विविध विकास योजना",
              url: gr1,
            },
            {
              name: "अंमलबजावणी मार्गदर्शक तत्त्वे",
              url: gr2,
            },
          ],
        },
      },
    },
  ];

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

  const selectedProject = projects.find((proj) => proj.slug === schemeSlug);

  if (!selectedProject) {
    return (
      <div className="flex items-center justify-center h-screen text-xl">
        {language === "mr" ? "प्रकल्प सापडला नाही" : "Scheme not found"}
      </div>
    );
  }

  const projectDocuments =
    selectedProject.documents[language] || selectedProject.documents.en;

  return (
    <div className="bg-gray-50 min-h-screen">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <motion.button
          onClick={() => navigate(-1)}
          className="flex items-center text-blue-600 hover:text-blue-800 mb-6 transition-colors duration-200"
          whileHover={{ x: -5 }}
        >
          <FiArrowLeft className="mr-2" />
          {language === "mr" ? "मागे जा" : "Go Back"}
        </motion.button>

        <motion.div
          className="bg-white rounded-xl shadow-lg overflow-hidden mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 relative group overflow-hidden">
              <img
                src={selectedProject.image}
                alt={getText(selectedProject.name)}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 cursor-pointer"
                onClick={() => setIsModalOpen(true)}
              />
              <div className="absolute inset-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                <FiImage className="text-white opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 text-4xl" />
              </div>
            </div>

            <div className="md:w-1/2 p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                {getText(selectedProject.name)}
              </h2>
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                {getText(selectedProject.description)}
              </p>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-800">
                  {language === "mr" ? "प्रकल्प तपशील" : "Scheme Highlights"}
                </h3>
                <ul className="space-y-3">
                  {getText(selectedProject.details).map((detail, index) => (
                    <li key={index} className="flex items-start">
                      <span className="bg-green-100 text-green-600 rounded-full p-1 mr-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                      <span className="text-gray-700">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Documents Section */}
        {projectDocuments &&
          projectDocuments.items &&
          projectDocuments.items.length > 0 && (
            <motion.section
              variants={itemVariants}
              className="mb-8 md:mb-12 bg-white rounded-lg shadow-md p-4 md:p-6"
            >
              <h2 className="text-xl md:text-2xl font-semibold text-blue-800 border-b border-blue-200 pb-2 mb-3 md:mb-4">
                {projectDocuments.title}
              </h2>
              <div className="space-y-2 md:space-y-3">
                {projectDocuments.items.map((doc, index) => (
                  <motion.a
                    key={index}
                    variants={itemVariants}
                    whileHover={{ x: 5 }}
                    href={doc.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-blue-600 hover:text-blue-800 text-sm md:text-base transition-colors duration-200"
                  >
                    <svg
                      className="w-4 h-4 md:w-5 md:h-5 mr-2 flex-shrink-0"
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
                    <span className="truncate">{doc.name}</span>
                  </motion.a>
                ))}
              </div>
            </motion.section>
          )}

        {isModalOpen && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 p-4"
            onClick={() => setIsModalOpen(false)}
          >
            <div className="relative max-w-5xl max-h-[90vh]">
              <div className="absolute top-4 right-4 z-10">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsModalOpen(false);
                  }}
                  className="text-white hover:text-gray-300 text-2xl"
                  aria-label={language === "mr" ? "बंद करा" : "Close"}
                >
                  &times;
                </button>
              </div>

              <img
                src={selectedProject.image}
                alt={getText(selectedProject.name)}
                className="max-w-full max-h-[80vh] object-contain"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Schemedetail;
