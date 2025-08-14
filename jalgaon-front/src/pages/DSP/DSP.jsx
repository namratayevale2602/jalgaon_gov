import React from "react";
import { useLanguage } from "../../contexts/LanguageContext";
import {
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
} from "../../assets";

const DSPReports = () => {
  const { language } = useLanguage();

  // Image gallery data
  const galleryImages = [
    {
      src: image1,
      alt: {
        en: "District planning meeting",
        mr: "जिल्हा नियोजन बैठक",
      },
    },
    {
      src: image2,
      alt: {
        en: "Development project site visit",
        mr: "विकास प्रकल्पाची साइट भेट",
      },
    },
    {
      src: image3,
      alt: {
        en: "Community consultation",
        mr: "समुदाय सल्लामसलत",
      },
    },
    {
      src: image4,
      alt: {
        en: "Community consultation",
        mr: "समुदाय सल्लामसलत",
      },
    },
    {
      src: image5,
      alt: {
        en: "Community consultation",
        mr: "समुदाय सल्लामसलत",
      },
    },
    {
      src: image6,
      alt: {
        en: "Community consultation",
        mr: "समुदाय सल्लामसलत",
      },
    },
    {
      src: image7,
      alt: {
        en: "Community consultation",
        mr: "समुदाय सल्लामसलत",
      },
    },
    {
      src: image8,
      alt: {
        en: "Community consultation",
        mr: "समुदाय सल्लामसलत",
      },
    },
  ];

  const reports = [
    {
      title: {
        en: "District Development Plan (Kavi Bahinabai Chaudhari North Maharashtra University Report)",
        mr: "जिल्हा विकास आराखडा (कवयित्री बहिणाबाई चौधरी उत्तर महाराष्ट्र विद्यापीठ अहवाल)",
      },
      url: "https://drive.google.com/file/d/1oZQ5-40jRxgDSl6hElpHVBTrtxpW2FeM/view?usp=sharing",
    },
    {
      title: {
        en: "District Development Plan (Symbiosis University Pune Report)",
        mr: "जिल्हा विकास आराखडा (सिम्बॉयसिस विद्यापीठ पुणे अहवाल)",
      },
      url: "https://drive.google.com/file/d/1QUr2l6rTw25abSYGG3ZcPHh-M8zEo9EN/view?usp=sharing",
    },
    {
      title: {
        en: "District Development Plan Action Plan",
        mr: "जिल्हा विकास आराखडा Action Plan",
      },
      url: "https://docs.google.com/presentation/d/1fZ-NmrFer3NcoBizM61J07zo7wB9KTNL/edit?usp=sharing&ouid=108173865144049668925&rtpof=true&sd=true",
    },
    {
      title: {
        en: "District Development Plan Presentation 1",
        mr: "जिल्हा विकास आराखडा सादरीकरण 1",
      },
      url: "https://docs.google.com/presentation/d/1-FVyZt0yMKA-SoGvMoDAzMO14RzRPEwI/edit?usp=drive_link&ouid=108173865144049668925&rtpof=true&sd=true",
    },
    {
      title: {
        en: "District Development Plan Presentation 2",
        mr: "जिल्हा विकास आराखडा सादरीकरण 2",
      },
      url: "https://docs.google.com/presentation/d/1ocoL-UMbJJ7OSPuSb8vIJ12CHTG3r2Fl/edit?usp=drive_link&ouid=108173865144049668925&rtpof=true&sd=true",
    },
    {
      title: {
        en: "District Development Plan Presentation 3",
        mr: "जिल्हा विकास आराखडा सादरीकरण 3",
      },
      url: "https://docs.google.com/presentation/d/1aIn_iE00xME4V_S2Lqa_pWRqWDJajPPa/edit?usp=drive_link&ouid=108173865144049668925&rtpof=true&sd=true",
    },
    {
      title: {
        en: "Jalgaon District MahSTRIDE Presentation",
        mr: "जळगाव जिल्हा MahSTRIDE सादरीकरण",
      },
      url: "https://docs.google.com/presentation/d/1B0TgauLWPwMm2Wk2xpiqEDTdih2ZcQ8J/edit?usp=sharing&ouid=108173865144049668925&rtpof=true&sd=true",
    },
  ];

  const content = {
    en: {
      heading: "District Development Plan Reports",
      subheading: "Available Reports and Presentations",

      viewPdf: "View PDF",
    },
    mr: {
      heading: "जिल्हा विकास आराखडा अहवाल",
      subheading: "उपलब्ध अहवाल आणि सादरीकरणे",

      viewPdf: "PDF पहा",
    },
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Image Gallery Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
          {content[language].galleryTitle}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105"
            >
              <img
                src={image.src}
                alt={image.alt[language]}
                className="w-full h-48 object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Reports Table */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-6">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">
            {content[language].subheading}
          </h2>

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    {language === "en" ? "Report Title" : "अहवालाचे शीर्षक"}
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    {language === "en" ? "Action" : "कृती"}
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {reports.map((report, index) => (
                  <tr
                    key={index}
                    className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                  >
                    <td className="px-6 py-4 whitespace-normal text-sm font-medium text-gray-900">
                      {report.title[language]}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <a
                        href={report.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 hover:underline"
                      >
                        {content[language].viewPdf}
                        <svg
                          className="w-4 h-4 ml-1 inline-block"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DSPReports;
