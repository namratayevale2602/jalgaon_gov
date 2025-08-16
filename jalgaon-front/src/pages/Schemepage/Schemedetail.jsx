import React, { useState } from "react";
import { motion } from "framer-motion";
import { useParams, useNavigate } from "react-router-dom";
import { FiArrowLeft, FiChevronLeft, FiChevronRight, FiImage } from "react-icons/fi";
import { useLanguage } from "../../contexts/LanguageContext";

const Schemedetail = () => {
  const { language } = useLanguage();
  const { schemeSlug } = useParams();
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const getText = (item) => {
    if (typeof item === 'object' && item !== null && language in item) {
      return item[language];
    }
    return item;
  };

  const projects = [
    {
      id: 1,
      name: { 
        en: "MLA Local Area Development", 
        mr: "विधानसभा सदस्य स्थानिक विकास कार्यक्रम" 
      },
      slug: "mla-local-development",
      description: {
        en: "Construction projects on government land with 10% maintenance limit and 45-day approval process",
        mr: "सरकारी जमिनीवरील बांधकाम प्रकल्प 10% देखभाल मर्यादा आणि 45-दिवस मंजुरी प्रक्रियासह"
      },
      details: {
        en: [
          "Only government/local government land projects eligible",
          "10% limit for maintenance and repair",
          "45-day approval period (District Collector final approval)",
          "Implementation through implementing agencies",
          "Monthly & quarterly progress reports",
          "Random inspection instead of social audit"
        ],
        mr: [
          "फक्त सरकारी/स्थानिक सरकारी जमिनीवरील प्रकल्प पात्र",
          "देखभाल आणि दुरुस्तीसाठी 10% मर्यादा",
          "45-दिवस मंजुरी कालावधी (जिल्हाधिकारी अंतिम मंजुरी)",
          "अंमलबजावणी करणाऱ्या संस्थांद्वारे अंमलात आणणे",
          "मासिक आणि त्रैमासिक प्रगती अहवाल",
          "सामाजिक लेखापरीक्षणाऐवजी यादृच्छिक तपासणी"
        ]
      },
      image: "https://images.pexels.com/photos/296242/pexels-photo-296242.jpeg"
    },
    {
      id: 2,
      name: { 
        en: "Minority Development Scheme", 
        mr: "अल्पसंख्याक विकास योजना" 
      },
      slug: "minority-development",
      description: {
        en: "Development schemes focused on minority community welfare and infrastructure",
        mr: "अल्पसंख्याक समुदाय कल्याण आणि पायाभूत सुविधांवर लक्ष केंद्रित केलेल्या विकास योजना"
      },
      details: {
        en: [
          "Educational infrastructure for minority communities",
          "Skill development programs",
          "Community center construction",
          "Scholarship programs",
          "Economic empowerment initiatives",
          "Cultural preservation projects"
        ],
        mr: [
          "अल्पसंख्याक समुदायांसाठी शैक्षणिक पायाभूत सुविधा",
          "कौशल्य विकास कार्यक्रम",
          "समुदाय केंद्र बांधकाम",
          "शिष्यवृत्ती कार्यक्रम",
          "आर्थिक सक्षमीकरण उपक्रम",
          "सांस्कृतिक संवर्धन प्रकल्प"
        ]
      },
      image: "https://images.pexels.com/photos/296245/pexels-photo-296245.jpeg"
    },
    {
      id: 3,
      name: { 
        en: "Hilly Area Development Programme", 
        mr: "डोंगरी विकास कार्यक्रम" 
      },
      slug: "hilly-area-development",
      description: {
        en: "Development projects specifically designed for hilly and difficult terrains",
        mr: "डोंगराळ आणि अवघड भूप्रदेशांसाठी विशेषतः डिझाइन केलेले विकास प्रकल्प"
      },
      details: {
        en: [
          "Road connectivity in hilly areas",
          "Bridge construction projects",
          "Landslide prevention measures",
          "Water supply schemes",
          "Special housing projects",
          "Eco-tourism development"
        ],
        mr: [
          "डोंगराळ भागात रस्ते कनेक्टिव्हिटी",
          "पूल बांधकाम प्रकल्प",
          "जमीनसरकाव रोखण्याचे उपाय",
          "पाणीपुरवठा योजना",
          "विशेष गृहनिर्माण प्रकल्प",
          "पर्यटन विकास"
        ]
      },
      image: "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg"
    },
    {
      id: 4,
      name: { 
        en: "Member of Legislative Assembly Local Area Development", 
        mr: "विधानसभा सदस्य स्थानिक विकास" 
      },
      slug: "mla-local-area-development",
      description: {
        en: "Local area development projects implemented through MLA funds",
        mr: "विधानसभा सदस्य निधीतर्गत अंमलात आणलेले स्थानिक विकास प्रकल्प"
      },
      details: {
        en: [
          "Road construction and repair",
          "School infrastructure development",
          "Health center improvements",
          "Water conservation projects",
          "Public utility enhancements",
          "Community welfare programs"
        ],
        mr: [
          "रस्ते बांधकाम आणि दुरुस्ती",
          "शाळा पायाभूत सुविधा विकास",
          "आरोग्य केंद्र सुधारणा",
          "जलसंधारण प्रकल्प",
          "सार्वजनिक उपयुक्तता सुधारणा",
          "समुदाय कल्याण कार्यक्रम"
        ]
      },
      image: "https://images.pexels.com/photos/247599/pexels-photo-247599.jpeg"
    },
    {
      id: 5,
      name: { 
        en: "Member of Parliament Local Area Development Program", 
        mr: "संसद सदस्य स्थानिक विकास कार्यक्रम" 
      },
      slug: "mp-local-development",
      description: {
        en: "Development projects with District Collector approval and 45-day processing",
        mr: "जिल्हाधिकारी मंजुरीसह विकास प्रकल्प आणि 45-दिवस प्रक्रिया"
      },
      details: {
        en: [
          "45-day approval period (not strictly applicable)",
          "District Collector final approval instead of DPC",
          "Random inspection by District Planning Office team",
          "Geotagged photos of completed work required",
          "No administrative expense cap (removed 10% limit)",
          "Follows April-2023 program guidelines"
        ],
        mr: [
          "45-दिवस मंजुरी कालावधी (कठोरपणे लागू नाही)",
          "DPC ऐवजी जिल्हाधिकारी अंतिम मंजुरी",
          "जिल्हा नियोजन कार्यालयाच्या संघाद्वारे यादृच्छिक तपासणी",
          "पूर्ण झालेल्या कामाच्या भू-टॅग केलेल्या फोटो आवश्यक",
          "प्रशासकीय खर्च मर्यादा नाही (10% मर्यादा काढून टाकली)",
          "एप्रिल-2023 कार्यक्रम मार्गदर्शक तत्त्वांचे पालन"
        ]
      },
      image: "https://images.pexels.com/photos/296230/pexels-photo-296230.jpeg"
    },

    {
      id: 7,
      name: { 
        en: "Human Development Programme", 
        mr: "मानव विकास कार्यक्रम" 
      },
      slug: "human-development",
      description: {
        en: "Programs focused on human development and welfare",
        mr: "मानव विकास आणि कल्याणावर लक्ष केंद्रित केलेले कार्यक्रम"
      },
      details: {
        en: [
          "Skill development centers",
          "Women empowerment programs",
          "Child welfare initiatives",
          "Health awareness campaigns",
          "Adult literacy programs",
          "Community development projects"
        ],
        mr: [
          "कौशल्य विकास केंद्रे",
          "महिला सक्षमीकरण कार्यक्रम",
          "बालकल्याण उपक्रम",
          "आरोग्य जागरूकता मोहीम",
          "प्रौढ साक्षरता कार्यक्रम",
          "समुदाय विकास प्रकल्प"
        ]
      },
      image: "https://images.pexels.com/photos/296234/pexels-photo-296234.jpeg"
    },
    {
      id: 8,
      name: { 
        en: "Other Schemes", 
        mr: "इतर योजना" 
      },
      slug: "other-schemes",
      description: {
        en: "Various other development schemes and programs",
        mr: "विविध इतर विकास योजना आणि कार्यक्रम"
      },
      details: {
        en: [
          "Village development projects",
          "Urban infrastructure improvements",
          "Public sanitation programs",
          "Digital literacy initiatives",
          "Sports infrastructure development",
          "Cultural heritage preservation"
        ],
        mr: [
          "ग्रामीण विकास प्रकल्प",
          "शहरी पायाभूत सुविधा सुधारणा",
          "सार्वजनिक स्वच्छता कार्यक्रम",
          "डिजिटल साक्षरता उपक्रम",
          "क्रीडा पायाभूत सुविधा विकास",
          "सांस्कृतिक वारसा संवर्धन"
        ]
      },
      image: "https://images.pexels.com/photos/296240/pexels-photo-296240.jpeg"
    }
  ];

  const selectedProject = projects.find(proj => proj.slug === schemeSlug);

  if (!selectedProject) {
    return <div className="flex items-center justify-center h-screen text-xl">
      {language === 'mr' ? 'प्रकल्प सापडला नाही' : 'Scheme not found'}
    </div>;
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
   

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
                {/* <h3 className="text-xl font-semibold text-gray-800">
                  {language === 'mr' ? 'प्रकल्प तपशील' : 'Scheme Highlights'}
                </h3> */}
                <ul className="space-y-3">
                  {getText(selectedProject.details).map((detail, index) => (
                    <li key={index} className="flex items-start">
                      <span className="bg-green-100 text-green-600 rounded-full p-1 mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
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
                  aria-label={language === 'mr' ? 'बंद करा' : 'Close'}
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