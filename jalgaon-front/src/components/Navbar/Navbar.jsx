import { useState } from "react";
import { useLanguage } from "../../contexts/LanguageContext";
import { logo } from "../../assets";

const Navbar = () => {
  const { language, toggleLanguage } = useLanguage();
  const [openDropdown, setOpenDropdown] = useState(null);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const toggleDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  const navItems = [
    { name: { en: "HOME", mr: "मुख्यपृष्ठ" }, href: "/" },
    {
      name: { en: "ABOUT", mr: "आमच्याबद्दल" },
      dropdown: [
        {
          name: { en: "Organizational Chart", mr: "संस्थात्मक रचना" },
          href: "/organizationalChart",
        },
        { name: { en: "Objectives", mr: "उद्दिष्टे" }, href: "/objectives" },
        {
          name: { en: "GENERAL REGISTER", mr: "सामान्य नोंदणीकर्ता" },
          href: "/gr-directory",
        },
      ],
    },
    {
      name: { en: "COMMITTEE", mr: "समित्या" },
      dropdown: [
        {
          name: { en: "Planning Committee", mr: "नियोजन समिती" },
          href: "/planningcommittee",
        },
      ],
    },
    {
      name: { en: "DSP", mr: "डीएसपी" },
      dropdown: [
        {
          name: { en: "PRIVATE STAKE HOLDER", mr: "खाजगी भागधारक" },
          href: "/planningcommittee",
        },
        {
          name: { en: "GOVERMENT STAKE HOLDER", mr: "सरकारी भागधारक" },
          href: "/planningcommittee",
        },
        { name: { en: "PRESENTATION", mr: "सादरीकरण" }, href: "/presentation" },
      ],
    },
    { name: { en: "DPC", mr: "डीपीसी" }, href: "/dpc" },
    {
      name: { en: "FUNCTIONS", mr: "कार्ये" },
      dropdown: [
        {
          name: { en: "RESPONSIBILITY", mr: "जबाबदाऱ्या" },
          href: "/responsibilities",
        },
        {
          name: { en: "ROLE-WISE DUTIES", mr: "भागानुसार कर्तव्ये" },
          href: "/rolewiseduties",
        },
        {
          name: { en: "STAFF & CONTACTS", mr: "कर्मचारी आणि संपर्क" },
          href: "/directory",
        },
      ],
    },
    {
      name: { en: "SCHEMES", mr: "योजना" },
      dropdown: [
        {
          name: { en: "ANNUAL PLAN", mr: "वार्षिक योजना" },
          href: "/annual-plan",
        },
        { name: { en: "MLA FUNDS", mr: "एमएलए निधी" }, href: "/MLAFunds" },
        { name: { en: "MP FUNDS", mr: "एमपी निधी" }, href: "/MPFunds" },
        {
          name: { en: "MINORITY SCHEMA", mr: "मायनोरिटी स्कीमा" },
          href: "/minority-scheme",
        },
        {
          name: { en: "AREA DEVELOPMENT", mr: "क्षेत्र विकास" },
          href: "/area-develop",
        },
        { name: { en: "OTHER FUNDS", mr: "इतर निधी" }, href: "/spacialfunds" },
      ],
    },
    {
      name: { en: "RTI", mr: "माहिती अधिकार" },
      dropdown: [
        {
          name: { en: "RTI Portal", mr: "माहिती अधिकार पोर्टल" },
          href: "/rti-portal",
        },
      ],
    },
    { name: { en: "TOURISM", mr: "पर्यटन" }, href: "/tourism" },
    { name: { en: "GALLERY", mr: "गॅलरी" }, href: "/gallery" },
    { name: { en: "BLOG", mr: "ब्लॉग" }, href: "/blog" },
    { name: { en: "REPORTS", mr: "अहवाल" }, href: "/reports" },
    { name: { en: "DOWNLOADS", mr: "डाउनलोड्स" }, href: "/downloads" },
  ];

  const getText = (item) => {
    return language === "en" ? item.en : item.mr;
  };

  return (
    <div className="bg-white relative">
      {/* Top Banner */}
      <div className="bg-blue-800 text-white">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <img
              src={logo}
              alt="Government Logo"
              className="h-16 md:h-20 w-auto"
            />
            <div className="hidden md:block border-l border-white h-8 mx-2"></div>
            <div className="hidden md:block">
              <h1 className="text-lg font-bold">
                {language === "en"
                  ? "Government of Maharashtra"
                  : "महाराष्ट्र शासन"}
              </h1>
              <p className="text-sm">
                {language === "en"
                  ? "Jalgaon District Portal"
                  : "जळगाव जिल्हा पोर्टल"}
              </p>
            </div>
          </div>

          <button
            onClick={toggleLanguage}
            className="px-3 py-1 bg-white text-blue-800 rounded-md hover:bg-gray-100 text-sm font-medium"
          >
            {language === "en" ? "मराठी" : "English"}
          </button>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="border-b border-gray-200">
        <div className="container mx-auto px-4">
          {/* Desktop Navigation */}
          <div className="hidden md:flex">
            <ul className="flex w-full">
              {navItems.map((item, index) => (
                <li key={index} className="relative group flex-1 text-center">
                  {item.dropdown ? (
                    <>
                      <button
                        onClick={() => toggleDropdown(index)}
                        className={`w-full px-2 py-4 font-medium text-gray-700 hover:text-blue-800 hover:bg-blue-50 transition-colors flex items-center justify-center ${
                          openDropdown === index
                            ? "bg-blue-50 text-blue-800"
                            : ""
                        }`}
                      >
                        {getText(item.name)}
                        <svg
                          className={`w-4 h-4 ml-1 transition-transform ${
                            openDropdown === index ? "rotate-180" : ""
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>
                      {openDropdown === index && (
                        <div className="absolute left-1/2 transform -translate-x-1/2 z-50">
                          <ul className="bg-white shadow-lg py-1 border-t-2 border-blue-800 whitespace-nowrap">
                            {item.dropdown.map((subItem, subIndex) => (
                              <li key={subIndex}>
                                <a
                                  href={subItem.href}
                                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-800 text-left"
                                >
                                  {getText(subItem.name)}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </>
                  ) : (
                    <a
                      href={item.href}
                      className="w-full block px-2 py-4 font-medium text-gray-700 hover:text-blue-800 hover:bg-blue-50 transition-colors"
                    >
                      {getText(item.name)}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden flex justify-between items-center py-3">
            <button
              onClick={() => setShowMobileMenu(!showMobileMenu)}
              className="text-gray-700 hover:text-blue-800 focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {showMobileMenu ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {showMobileMenu && (
          <div className="md:hidden bg-white">
            <ul className="py-2">
              {navItems.map((item, index) => (
                <li key={index} className="border-b border-gray-100">
                  {item.dropdown ? (
                    <>
                      <button
                        onClick={() => toggleDropdown(index)}
                        className={`w-full px-4 py-3 text-left font-medium text-gray-700 hover:text-blue-800 flex justify-between items-center ${
                          openDropdown === index
                            ? "bg-blue-50 text-blue-800"
                            : ""
                        }`}
                      >
                        {getText(item.name)}
                        <svg
                          className={`w-4 h-4 ml-1 transform ${
                            openDropdown === index ? "rotate-180" : ""
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>
                      {openDropdown === index && (
                        <ul className="bg-gray-50 pl-6">
                          {item.dropdown.map((subItem, subIndex) => (
                            <li
                              key={subIndex}
                              className="border-t border-gray-200"
                            >
                              <a
                                href={subItem.href}
                                className="block px-4 py-3 text-sm text-gray-700 hover:text-blue-800 hover:bg-blue-100"
                              >
                                {getText(subItem.name)}
                              </a>
                            </li>
                          ))}
                        </ul>
                      )}
                    </>
                  ) : (
                    <a
                      href={item.href}
                      className="block px-4 py-3 font-medium text-gray-700 hover:text-blue-800 hover:bg-blue-50"
                    >
                      {getText(item.name)}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
