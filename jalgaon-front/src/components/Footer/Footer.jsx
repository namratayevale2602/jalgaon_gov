import React from "react";
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import { useLanguage } from "../../contexts/LanguageContext";
import { logo } from "../../assets";

const Footer = () => {
  const { language } = useLanguage();

  // Bilingual content
  const content = {
    title: {
      en: "Jalgaon District Planning",
      mr: "जळगाव जिल्हा नियोजन",
    },
    subtitle: {
      en: "Government of Maharashtra",
      mr: "महाराष्ट्र शासन",
    },
    address: {
      en: "Jalgaon, Maharashtra",
      mr: "जळगाव, महाराष्ट्र",
    },
    phone: {
      en: "0257-2220000",
      mr: "०२५७-२२२००००",
    },
    copyright: {
      en: "© Jalgaon District Planning • Last Updated: Jul 24, 2025",
      mr: "© जळगाव जिल्हा नियोजन • अंतिम अद्यतन: २४ जुलै, २०२५",
    },
  };

  const getText = (key) => {
    return content[key][language] || content[key].en;
  };

  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Left side - Logo and basic info */}
          <div className="flex items-center mb-4 md:mb-0">
            <img src={logo} alt="Jalgaon District Logo" className="h-20 mr-3" />
            <div>
              <h3 className="text-lg font-bold">{getText("title")}</h3>
              <p className="text-sm text-gray-300">{getText("subtitle")}</p>
            </div>
          </div>

          {/* Right side - Minimal contact info */}
          <div className="text-sm">
            <div className="flex items-center mb-1">
              <FaMapMarkerAlt className="mr-2" />
              <span>{getText("address")}</span>
            </div>
            <div className="flex items-center mb-1">
              <FaPhone className="mr-2" />
              <span>{getText("phone")}</span>
            </div>
            <div className="flex items-center">
              <FaEnvelope className="mr-2" />
              <span>contact@jalgaonplanning.gov.in</span>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="border-t border-gray-700 mt-4 pt-4 text-center text-sm text-gray-300">
          <p>{getText("copyright")}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
