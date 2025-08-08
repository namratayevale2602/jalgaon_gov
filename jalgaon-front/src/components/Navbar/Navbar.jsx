import { useState } from "react";
import { useLanguage } from "../../contexts/LanguageContext";

const Navbar = () => {
  const { language, toggleLanguage } = useLanguage();
  const [openDropdown, setOpenDropdown] = useState(null);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const toggleDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  const navItems = {
    left: [
      {
        name: { en: "HOME", mr: "मुख्यपृष्ठ" },
        href: "/",
      },
      {
        name: { en: "ABOUT", mr: "आमच्याबद्दल" },
        dropdown: [
          {
            name: { en: "Organizational Chart", mr: "संस्थात्मक रचना" },
            href: "/organizationalChart",
          },
          {
            name: { en: "Objectives", mr: "उद्दिष्टे" },
            href: "/objectives",
          },
        ],
      },
      {
        name: { en: "COMMITTEES", mr: "समित्या" },
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
            name: { en: "Planning Committee", mr: "नियोजन समिती" },
            href: "/planningcommittee",
          },
        ],
      },
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
          {
            name: { en: "MLA FUNDS", mr: "एमएलए निधी" },
            href: "/MLAMPFunds",
          },
          {
            name: { en: "MP FUNDS", mr: "एमपी निधी" },
            href: "/MLAMPFunds",
          },
          {
            name: { en: "OTHER FUNDS", mr: "इतर निधी" },
            href: "/spacialfunds",
          },
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
      {
        name: { en: "TOURISM", mr: "पर्यटन" },
        href: "/tourism",
      },
      {
        name: { en: "GALLERY", mr: "गॅलरी" },
        href: "/gallery",
      },

      {
        name: { en: "BLOG", mr: "ब्लॉग" },
        href: "/blog",
      },
      // {
      //   name: { en: "Media", mr: "माध्यम" },
      //   dropdown: [
      //     {
      //       name: { en: "Photos", mr: "छायाचित्रे" },
      //       href: "/gallery",
      //     },
      //     {
      //       name: { en: "Presentation", mr: "सादरीकरण" },
      //       href: "/presentation",
      //     },
      //   ],
      // },
      {
        name: { en: "REPORTS", mr: "अहवाल" },
        href: "/reports",
      },
      {
        name: { en: "DOWNLOADS", mr: "डाउनलोड्स" },
        href: "/downloads",
      },
    ],
  };

  const getText = (item) => {
    return language === "en" ? item.en : item.mr;
  };

  return (
    <div className="relative">
      {/* Main Navbar */}
      <nav className="bg-yellow-50 shadow-md">
        <div className="max-w-7xl mx-auto px-4">
          {/* Top row with logos */}
          <div className="flex justify-between items-center py-2 border-b">
            <div className="flex items-center space-x-4">
              <img
                src="/path-to-first-logo.png"
                alt="Government of Maharashtra"
                className="h-16"
              />
              <div className="border-l border-gray-300 h-12"></div>
              <img
                src="/path-to-second-logo.png"
                alt="Jalgaon Suburban District"
                className="h-16"
              />
            </div>

            <div className="hidden md:flex items-center space-x-4">
              <button
                onClick={toggleLanguage}
                className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                {language === "en" ? "मराठी" : "English"}
              </button>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center py-3">
            <div className="flex space-x-4">
              {navItems.left.map((item, index) => (
                <div key={index} className="relative">
                  {item.dropdown ? (
                    <>
                      <button
                        onClick={() => toggleDropdown(`left-${index}`)}
                        className="font-medium text-gray-700 hover:text-blue-600 flex items-center"
                      >
                        {getText(item.name)}
                        <svg
                          className="w-4 h-4 ml-1"
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
                      {openDropdown === `left-${index}` && (
                        <div className="absolute z-10 mt-2 w-48 bg-white rounded-md shadow-lg py-1">
                          {item.dropdown.map((subItem, subIndex) => (
                            <a
                              key={subIndex}
                              href={subItem.href}
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50"
                            >
                              {getText(subItem.name)}
                            </a>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <a
                      href={item.href}
                      className="font-medium text-gray-700 hover:text-blue-600"
                    >
                      {getText(item.name)}
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center justify-between py-3">
            <button
              onClick={() => setShowMobileMenu(!showMobileMenu)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none"
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
            <button
              onClick={toggleLanguage}
              className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              {language === "en" ? "मराठी" : "English"}
            </button>
          </div>
        </div>

        {/* Mobile Menu Content */}
        {showMobileMenu && (
          <div className="md:hidden bg-white pb-4 px-4">
            {/* Left nav items */}
            {navItems.left.map((item, index) => (
              <div key={`left-${index}`} className="py-2 border-b">
                {item.dropdown ? (
                  <>
                    <button
                      onClick={() => toggleDropdown(`left-${index}`)}
                      className="w-full flex justify-between items-center font-medium text-gray-700 hover:text-blue-600"
                    >
                      {getText(item.name)}
                      <svg
                        className={`w-4 h-4 ml-1 transform ${
                          openDropdown === `left-${index}` ? "rotate-180" : ""
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
                    {openDropdown === `left-${index}` && (
                      <div className="pl-4 mt-2 space-y-2">
                        {item.dropdown.map((subItem, subIndex) => (
                          <a
                            key={subIndex}
                            href={subItem.href}
                            className="block text-gray-700 hover:text-blue-600"
                          >
                            {getText(subItem.name)}
                          </a>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <a
                    href={item.href}
                    className="block font-medium text-gray-700 hover:text-blue-600"
                  >
                    {getText(item.name)}
                  </a>
                )}
              </div>
            ))}
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
