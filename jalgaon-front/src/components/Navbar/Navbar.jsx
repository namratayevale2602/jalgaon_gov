import { useState } from "react";

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [showSidebar, setShowSidebar] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const toggleDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  const navItems = {
    left: [
      { name: "HOME", href: "/" },
      {
        name: "ABOUT DISTRICT",
        dropdown: [
          { name: "History", href: "#" },
          { name: "Organizational Chart", href: "#" },
          { name: "Objectives", href: "#" },
        ],
      },
      {
        name: "Functions & Duties",
        dropdown: [
          { name: "Responsibility", href: "#" },
          { name: "Role-wise Duties", href: "#" },
        ],
      },
      { name: "Schemes & Programs", href: "#" },
      { name: "Projects & Approvals", href: "#" },
      { name: "Committees & Meetings", href: "#" },
      { name: "Transparency & RTI", href: "#" },
    ],
    sidebar: [
      { name: "Staff & Contact", href: "#" },
      { name: "Downloads", href: "#" },
      { name: "Tenders & Notices", href: "#" },
    ],
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
              <a href="#" className="text-blue-600 hover:text-blue-800">
                Digital India
              </a>
              <div className="border-l border-gray-300 h-6"></div>
              <a href="#" className="text-blue-600 hover:text-blue-800">
                PowerTo Empower
              </a>
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
                        {item.name}
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
                              {subItem.name}
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
                      {item.name}
                    </a>
                  )}
                </div>
              ))}
            </div>
            <button
              onClick={() => setShowSidebar(true)}
              className="text-blue-600 hover:text-blue-800 pl-4"
            >
              <span>more</span>
              <svg
                className="w-4 h-4 inline ml-1"
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
          </div>
        </div>

        {/* Mobile Menu Content - Merged left and sidebar items */}
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
                      {item.name}
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
                            {subItem.name}
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
                    {item.name}
                  </a>
                )}
              </div>
            ))}

            {/* Sidebar items */}
            {navItems.sidebar.map((item, index) => (
              <div key={`sidebar-${index}`} className="py-2 border-b">
                <a
                  href={item.href}
                  className="block font-medium text-gray-700 hover:text-blue-600"
                >
                  {item.name}
                </a>
              </div>
            ))}

            <div className="pt-4">
              <a href="#" className="text-blue-600 hover:text-blue-800">
                Digital India
              </a>
              <div className="border-l border-gray-300 h-6 inline-block mx-2"></div>
              <a href="#" className="text-blue-600 hover:text-blue-800">
                PowerTo Empower
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Sidebar for desktop "more" button */}
      {showSidebar && (
        <div className="fixed inset-y-0 right-0 z-50 w-64 bg-white shadow-xl">
          <div className="h-full overflow-y-auto">
            <div className="flex justify-between items-center p-4 border-b">
              <h2 className="text-lg font-medium">More Options</h2>
              <button
                onClick={() => setShowSidebar(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="p-4">
              <ul className="space-y-2">
                {navItems.sidebar.map((item, index) => (
                  <li key={index}>
                    <a
                      href={item.href}
                      className="block p-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
