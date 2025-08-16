import React, { useState } from "react";
import { FiExternalLink } from "react-icons/fi";
import { useLanguage } from "../../contexts/LanguageContext";
import { ArrowRight } from "lucide-react";

const RTIPortal = () => {
  const { language } = useLanguage();

  // Office facilities data
  const officeFacilities = [
    {
      id: 1,
      facility: {
        en: "Information about visiting hours",
        mr: "भेटण्याच्या वेळे संदर्भात माहिती",
      },
      time: {
        en: "During office hours",
        mr: "कार्यालयीन वेळेत",
      },
      process: {
        en: "By scheduling appointment/walk-in",
        mr: "आगाऊ भेटीची वेळ ठरवून/ आयत्या वेळी",
      },
      location: {
        en: "District Planning Committee, District Collector Office, Jalgaon",
        mr: "जिल्हा नियोजन समिती, जिल्हाधिकारी कार्यालय, जळगांव",
      },
      responsible: {
        en: "District Planning Officer/ Concerned person regarding subject",
        mr: "जिल्हा नियोजन आधिकारी/ विषया संदर्भातील संबंधित व्यक्ती",
      },
      grievance: {
        en: "District Planning Officer",
        mr: "जिल्हा नियोजन अधिकारी",
      },
    },
    {
      id: 2,
      facility: {
        en: "Facilities available for record inspection",
        mr: "अभिलेख तपासणीसाठी उपलब्ध सुविधांची माहिती",
      },
      time: {
        en: "Monday Time 3.00 PM to 5.00 PM",
        mr: "सोमवारी दु.3.00 ते सां.5.00 वाजेपर्यंत",
      },
      process: {
        en: "By submitting application",
        mr: "अर्ज सादर करून",
      },
      location: {
        en: "District Planning Committee, District Collector Office, Jalgaon",
        mr: "जिल्हा नियोजन समिती, जिल्हाधिकारी कार्यालय, जळगांव",
      },
      responsible: {
        en: "District Planning Officer",
        mr: "जिल्हा नियोजन अधिकारी",
      },
      grievance: {
        en: "District Planning Officer",
        mr: "जिल्हा नियोजन अधिकारी",
      },
    },
    {
      id: 3,
      facility: {
        en: "Information about facilities available for work inspection",
        mr: "कामाच्या तपासणीसाठी उपलब्ध सुविधांची माहिती",
      },
      time: {
        en: "During office hours",
        mr: "कार्यालयीन वेळेत",
      },
      process: {
        en: "By submitting application",
        mr: "अर्ज सादर करून",
      },
      location: {
        en: "District Planning Committee, District Collector Office, Jalgaon",
        mr: "जिल्हा नियोजन समिती, जिल्हाधिकारी कार्यालय, जळगांव",
      },
      responsible: {
        en: "District Planning Officer",
        mr: "जिल्हा नियोजन अधिकारी",
      },
      grievance: {
        en: "District Planning Officer",
        mr: "जिल्हा नियोजन अधिकारी",
      },
    },
  ];

  // RTI Officers data
  const rtiOfficers = {
    publicInformationOfficers: [
      {
        id: 1,
        name: {
          en: "Shri R.A. Ide",
          mr: "श्री. रा.आ.इधे",
        },
        designation: {
          en: "Assistant District Planning Officer",
          mr: "सहायक जिल्हा नियोजन अधिकारी",
        },
        jurisdiction: {
          en: "All matters related to Planning Branch",
          mr: "नियोजन शाखेतील सर्व कामा संबंधित",
        },
        address: {
          en: "District Planning Committee, District Collector Office, Jalgaon",
          mr: "जिल्हा नियोजन समिती, जिल्हाधिकारी कार्यालय, जळगांव",
        },
        phone: "0257-2223135",
        email: "dpojalgaon@gmail.com",
      },
    ],
    assistantPublicInformationOfficers: [
      {
        id: 1,
        name: {
          en: "Shri B.B. Patil",
          mr: "श्री. बी.बी.पाटील",
        },
        designation: {
          en: "Assistant Research Officer",
          mr: "सहायक संशोधन अधिकारी",
        },
        jurisdiction: {
          en: "All works of Planning Branch",
          mr: "नियोजन शाखेतील सर्व कामा करिता",
        },
        address: {
          en: "District Planning Committee, District Collector Office, Jalgaon",
          mr: "जिल्हा नियोजन समिती, जिल्हाधिकारी कार्यालय, जळगांव",
        },
        phone: "0257-2223135",
        email: "dpojalgaon@gmail.com",
      },
    ],
    appellateAuthorities: [
      {
        id: 1,
        name: {
          en: "Shri Vijay Shinde",
          mr: "श्री. विजय शिंदे",
        },
        designation: {
          en: "District Planning Officer, Jalgaon",
          mr: "जिल्हा नियोजन अधिकारी जळगांव",
        },
        jurisdiction: {
          en: "Jalgaon District",
          mr: "जळगाव जिल्हा",
        },
        address: {
          en: "District Planning Committee, District Collector Office, Jalgaon",
          mr: "जिल्हा नियोजन समिती, जिल्हाधिकारी कार्यालय, जळगांव",
        },
        phone: "0257-2223135",
        email: "dpojalgaon@gmail.com",
      },
    ],
  };

  const content = {
    en: {
      title: "Right to Information",
      subtitle: "RTI - Jalgaon District Planning Committee",
      facilities: {
        title: "Available Facilities at District Planning Committee Office",
        columns: [
          "Sr No",
          "Type of Facility",
          "Timing",
          "Process",
          "Location",
          "Responsible Officer/Employee",
          "Grievance Redressal",
        ],
      },
      rtiOfficers: {
        title:
          "Public Information Officer/Assistant Public Information Officer/Appellate Authority",
        publicInfoOfficer: "Public Information Officer",
        asstPublicInfoOfficer: "Assistant Public Information Officer",
        appellateAuthority: "Appellate Authority",
        columns: [
          "Sr No",
          "Name",
          "Designation",
          "Jurisdiction",
          "Address/Phone",
          "Email",
          "",
        ],
      },

      languageToggle: "मराठी मध्ये बदला",
    },
    mr: {
      title: "माहितीचा अधिकार",
      subtitle: "आरटीआय - जळगाव जिल्हा नियोजन समिती",
      facilities: {
        title:
          "जळगांव येथील जिल्हा नियोजन समिती, कार्यालयात उपलब्ध सुविधांचा तक्ता",
        columns: [
          "अ.क्र.",
          "सुविधेचा प्रकार",
          "वेळ",
          "कार्यपध्दती",
          "ठिकाण",
          "जबाबदार व्यक्ती / कर्मचारी",
          "तक्रार निवारण",
        ],
      },
      rtiOfficers: {
        title:
          "जन माहिती अधिकारी / सहायक जन माहिती अधिकारी / प्रथम अपिलीय प्राधिकारी",
        publicInfoOfficer: "जन माहिती अधिकारी",
        asstPublicInfoOfficer: "सहायक जन माहिती अधिकारी",
        appellateAuthority: "प्रथम अपिलीय प्राधिकारी",
        columns: [
          "अ.क्र.",
          "नाव",
          "पदनाम",
          "कार्यक्षेत्र",
          "पत्ता / फोन",
          "ई-मेल",
          "",
        ],
      },

      languageToggle: "Switch to English",
    },
  };

  const lang = content[language];

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "mr" : "en");
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      {/* Page Header */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">
          {lang.title}
        </h1>
        <p className="text-lg text-gray-600">{lang.subtitle}</p>
      </div>

      {/* Office Facilities Section */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-bold text-blue-700 mb-6">
          {lang.facilities.title}
        </h2>

        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-200">
            <thead>
              <tr className="bg-blue-50">
                {lang.facilities.columns.map((column, index) => (
                  <th
                    key={index}
                    className="px-4 py-3 text-left text-sm font-medium text-gray-700 border-b border-gray-200"
                  >
                    {column}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {officeFacilities.map((facility) => (
                <tr key={facility.id} className="hover:bg-gray-50">
                  <td className="px-4 py-3 text-sm text-gray-700 border-b border-gray-200">
                    {facility.id}
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-700 border-b border-gray-200">
                    {facility.facility[language]}
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-700 border-b border-gray-200">
                    {facility.time[language]}
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-700 border-b border-gray-200">
                    {facility.process[language]}
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-700 border-b border-gray-200">
                    {facility.location[language]}
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-700 border-b border-gray-200">
                    {facility.responsible[language]}
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-700 border-b border-gray-200">
                    {facility.grievance[language]}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* RTI Officers Section */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-bold text-blue-700 mb-6">
          {lang.rtiOfficers.title}
        </h2>

        {/* Public Information Officer */}
        <h3 className="text-xl font-semibold text-blue-600 mb-4">
          {lang.rtiOfficers.publicInfoOfficer}
        </h3>
        <div className="overflow-x-auto mb-8">
          <table className="min-w-full border border-gray-200 mb-6">
            <thead>
              <tr className="bg-blue-50">
                {lang.rtiOfficers.columns.map((column, index) => (
                  <th
                    key={index}
                    className="px-4 py-3 text-left text-sm font-medium text-gray-700 border-b border-gray-200"
                  >
                    {column}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rtiOfficers.publicInformationOfficers.map((officer) => (
                <tr key={officer.id} className="hover:bg-gray-50">
                  <td className="px-4 py-3 text-sm text-gray-700 border-b border-gray-200">
                    {officer.id}
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-700 border-b border-gray-200">
                    {officer.name[language]}
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-700 border-b border-gray-200">
                    {officer.designation[language]}
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-700 border-b border-gray-200">
                    {officer.jurisdiction[language]}
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-700 border-b border-gray-200">
                    <div>{officer.address[language]}</div>
                    <div>{officer.phone}</div>
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-700 border-b border-gray-200">
                    {officer.email}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Assistant Public Information Officer */}
        <h3 className="text-xl font-semibold text-blue-600 mb-4">
          {lang.rtiOfficers.asstPublicInfoOfficer}
        </h3>
        <div className="overflow-x-auto mb-8">
          <table className="min-w-full border border-gray-200 mb-6">
            <thead>
              <tr className="bg-blue-50">
                {lang.rtiOfficers.columns.slice(0, -1).map((column, index) => (
                  <th
                    key={index}
                    className="px-4 py-3 text-left text-sm font-medium text-gray-700 border-b border-gray-200"
                  >
                    {column}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rtiOfficers.assistantPublicInformationOfficers.map((officer) => (
                <tr key={officer.id} className="hover:bg-gray-50">
                  <td className="px-4 py-3 text-sm text-gray-700 border-b border-gray-200">
                    {officer.id}
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-700 border-b border-gray-200">
                    {officer.name[language]}
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-700 border-b border-gray-200">
                    {officer.designation[language]}
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-700 border-b border-gray-200">
                    {officer.jurisdiction[language]}
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-700 border-b border-gray-200">
                    <div>{officer.address[language]}</div>
                    <div>{officer.phone}</div>
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-700 border-b border-gray-200">
                    {officer.email}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Appellate Authority */}
        <h3 className="text-xl font-semibold text-blue-600 mb-4">
          {lang.rtiOfficers.appellateAuthority}
        </h3>
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-200">
            <thead>
              <tr className="bg-blue-50">
                {lang.rtiOfficers.columns.map((column, index) => (
                  <th
                    key={index}
                    className="px-4 py-3 text-left text-sm font-medium text-gray-700 border-b border-gray-200"
                  >
                    {column}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rtiOfficers.appellateAuthorities.map((officer) => (
                <tr key={officer.id} className="hover:bg-gray-50">
                  <td className="px-4 py-3 text-sm text-gray-700 border-b border-gray-200">
                    {officer.id}
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-700 border-b border-gray-200">
                    {officer.name[language]}
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-700 border-b border-gray-200">
                    {officer.designation[language]}
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-700 border-b border-gray-200">
                    {officer.jurisdiction[language]}
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-700 border-b border-gray-200">
                    <div>{officer.address[language]}</div>
                    <div>{officer.phone}</div>
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-700 border-b border-gray-200">
                    {officer.email}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <h3 className="text-xl font-semibold text-blue-800 mb-4">
        <a
          href="https://rtionline.maharashtra.gov.in/index-e.php"
          target="_blank"
          rel="noopener noreferrer"
        >
          Click Here For More Detail
          <span>
            <ArrowRight></ArrowRight>
          </span>
        </a>
      </h3>
    </div>
  );
};

export default RTIPortal;
