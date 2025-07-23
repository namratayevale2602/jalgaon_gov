import React from "react";
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Left side - Logo and basic info */}
          <div className="flex items-center mb-4 md:mb-0">
            <img
              src="/jalgaon-logo.png"
              alt="Jalgaon District Logo"
              className="h-10 mr-3"
            />
            <div>
              <h3 className="text-lg font-bold">Jalgaon District Planning</h3>
              <p className="text-sm text-gray-300">Government of Maharashtra</p>
            </div>
          </div>

          {/* Right side - Minimal contact info */}
          <div className="text-sm">
            <div className="flex items-center mb-1">
              <FaMapMarkerAlt className="mr-2" />
              <span>Jalgaon, Maharashtra</span>
            </div>
            <div className="flex items-center mb-1">
              <FaPhone className="mr-2" />
              <span>0257-2220000</span>
            </div>
            <div className="flex items-center">
              <FaEnvelope className="mr-2" />
              <span>contact@jalgaonplanning.gov.in</span>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="border-t border-gray-700 mt-4 pt-4 text-center text-sm text-gray-300">
          <p>© Jalgaon District Planning • Last Updated: Jul 24, 2025</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
