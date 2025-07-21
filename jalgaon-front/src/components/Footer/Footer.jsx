import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 border-t border-gray-300 py-4">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Left side - Copyright */}
          <div className="text-sm text-gray-600 mb-2 md:mb-0">
            © {new Date().getFullYear()} Government Portal. All rights reserved.
          </div>

          {/* Right side - Links */}
          <div className="flex space-x-4">
            <a href="#" className="text-sm text-gray-600 hover:text-blue-600">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-gray-600 hover:text-blue-600">
              Terms of Use
            </a>
            <a href="#" className="text-sm text-gray-600 hover:text-blue-600">
              Accessibility
            </a>
          </div>
        </div>

        {/* Bottom line - Date */}
        <div className="mt-2 text-xs text-gray-500 text-center md:text-left">
          Last updated: July 17, 2025
        </div>
      </div>
    </footer>
  );
};

export default Footer;
