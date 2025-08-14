import React from "react";
import { useState } from "react";
import { useLanguage } from "../../contexts/LanguageContext";

const DistrictPlanningCommittee = () => {
  const { language } = useLanguage();
  const [activeAccordion, setActiveAccordion] = useState(null);

  // PDF file names (replace with actual PDF paths)
  const pdfFiles = {
    schemeWise: "/pdfs/scheme-wise.pdf",
    workWise: "/pdfs/work-wise.pdf",
    beautification: "/pdfs/beautification.pdf",
    mlaApproval: "/pdfs/mla-approval.pdf",
    mlcApproval: "/pdfs/mlc-approval.pdf",
    mpladScheme: "/pdfs/mplad-scheme.pdf",
  };

  // Content in Marathi and English
  const content = {
    duties: {
      title: {
        en: "Duties of District Planning Committee",
        mr: "जिल्हा आराखडा समितीची कर्तव्ये",
      },
      items: [
        {
          en: "A proposal for administrative clearances received from the agencies for the schemes under District Annual Plan (General Non-Tribal Scheme) and scrutinised proposals as per the budgetary provisions of the year and administrative approval is decided.",
          mr: "जिल्हा वार्षिक आराखडा (सामान्य गैर-आदिवासी योजना) अंतर्गत योजनांसाठी संस्थांकडून प्राप्त झालेल्या प्रशासकीय मंजुरीच्या प्रस्तावाचे तपासणी केली जाते आणि वर्षाच्या अर्थसंकल्पीय तरतुदींनुसार प्रशासकीय मंजुरीचा निर्णय घेतला जातो.",
        },
        {
          en: "Submission of proposed local development program by MLAs for administrative approval and scrutiny as per the date of receipt of proposals. Decision is taken to grant sanction under the limits of the available funds according to the guidelines. Work is done according to the instructions of MLA.",
          mr: "विधानसभा सदस्यांकडून स्थानिक विकास कार्यक्रमाच्या प्रस्तावांची प्रशासकीय मंजुरीसाठी सादर करणे आणि प्रस्ताव मिळाल्याच्या तारखेनुसार तपासणी. उपलब्ध निधीच्या मर्यादेत मार्गदर्शक तत्त्वांनुसार मंजुरी देण्याचा निर्णय घेतला जातो. विधानसभा सदस्यांच्या सूचनांनुसार काम केले जाते.",
        },
        {
          en: "Submission of Proposed local development program by Member of Parliament for administrative approval and scrutiny of proposals. Decision is taken to grant sanction under the limits of the available funds according to the guidelines. Priority order of Work is done according to the instructions of MP.",
          mr: "संसद सदस्यांकडून स्थानिक विकास कार्यक्रमाच्या प्रस्तावांची प्रशासकीय मंजुरीसाठी सादर करणे आणि तपासणी. उपलब्ध निधीच्या मर्यादेत मार्गदर्शक तत्त्वांनुसार मंजुरी देण्याचा निर्णय घेतला जातो. संसद सदस्यांच्या सूचनांनुसार कामाच्या प्राधान्यक्रमाचा निर्णय घेतला जातो.",
        },
        {
          en: "Other schemes allotted by the government like grant of basic facilities to minority schools and Dr. Zakir Hussain Madarasa Modernization Scheme. Scrutiny of received proposals as per the guidelines and prepare selection list of schools for grant and submit it with recommendation and Distribution of the grant received from the administration to the schools.",
          mr: "अल्पसंख्याक शाळांना मूलभूत सुविधांची अनुदाने आणि डॉ. झाकिर हुसेन मदरसा आधुनिकीकरण योजना यासारख्या सरकारकडून दिलेल्या इतर योजना. मार्गदर्शक तत्त्वांनुसार प्राप्त झालेल्या प्रस्तावांची तपासणी करणे आणि अनुदानासाठी शाळांची निवड यादी तयार करणे आणि शिफारसीसह सादर करणे आणि प्रशासनाकडून मिळालेले अनुदान शाळांमध्ये वितरीत करणे.",
        },
      ],
    },
    composition: {
      title: {
        en: "Composition of District Planning Committee as per GR NO GNS – 2000/ prakaran kramak 60/ Ka-1444",
        mr: "जीआर क्रमांक जीएनएस – २०००/ प्रकरण क्रमांक ६०/का-१४४४ नुसार जिल्हा आराखडा समितीची रचना",
      },
      description: {
        en: "Details about the composition would go here. This could be text or a table showing the committee structure.",
        mr: "समितीच्या रचनेबाबत तपशील येथे दिसतील. हे मजकूर किंवा समितीची रचना दर्शविणारी सारणी असू शकते.",
      },
    },
    delegation: {
      title: {
        en: "Delegation for the maintenance and repair of properties/structures",
        mr: "मालमत्ता/संरचनांच्या देखभाल आणि दुरुस्तीसाठी प्रतिनिधीत्व",
      },
      description: {
        en: "Information about delegation processes for maintenance and repair of properties constructed under the Local Development Program by Registered Social/Trusted Institutions.",
        mr: "स्थानिक विकास कार्यक्रमांतर्गत नोंदणीकृत सामाजिक/विश्वासू संस्थांनी बांधलेल्या मालमत्तेच्या देखभाल आणि दुरुस्तीच्या प्रक्रियेबाबत माहिती.",
      },
    },
    annualPlan: {
      title: {
        en: "District Annual Plan (General)",
        mr: "जिल्हा वार्षिक आराखडा (सामान्य)",
      },
      years: [
        2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023,
        2024,
      ],
      items: [
        {
          name: {
            en: "Schemewise",
            mr: "योजनानुसार",
          },
          pdf: pdfFiles.schemeWise,
          availableFrom: 2017,
        },
        {
          name: {
            en: "Workwise",
            mr: "कामानुसार",
          },
          pdf: pdfFiles.workWise,
          availableFrom: 2017,
          part1Only: 2024,
        },
        {
          name: {
            en: "Beautification",
            mr: "सौंदर्यीकरण",
          },
          pdf: pdfFiles.beautification,
          availableFrom: 2012,
          part1Years: [2014, 2016, 2017, 2018, 2022, 2023, 2024],
        },
      ],
    },
    approvals: {
      mla: {
        title: {
          en: "Administrative Approval of MLA",
          mr: "विधानसभा सदस्यांची प्रशासकीय मंजुरी",
        },
        pdf: pdfFiles.mlaApproval,
      },
      mlc: {
        title: {
          en: "Administrative Approval of MLC",
          mr: "विधानपरिषद सदस्यांची प्रशासकीय मंजुरी",
        },
        pdf: pdfFiles.mlcApproval,
      },
      mplad: {
        title: {
          en: "Members of Parliament Local Area Development Scheme",
          mr: "संसद सदस्य स्थानिक क्षेत्र विकास योजना",
        },
        pdf: pdfFiles.mpladScheme,
      },
    },
  };

  const toggleAccordion = (accordion) => {
    setActiveAccordion(activeAccordion === accordion ? null : accordion);
  };

  return (
    <div className="max-w-6xl mx-auto p-4 md:p-6">
      <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
        {language === "mr"
          ? "जिल्हा आराखडा समिती"
          : "District Planning Committee"}
      </h1>

      <div className="space-y-4">
        {/* Duties Accordion */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          <button
            className="w-full flex justify-between items-center p-4 md:p-6 text-left"
            onClick={() => toggleAccordion("duties")}
          >
            <h2 className="text-xl font-semibold text-gray-800">
              {content.duties.title[language]}
            </h2>
            <svg
              className={`w-5 h-5 text-gray-500 transform transition-transform ${
                activeAccordion === "duties" ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          {activeAccordion === "duties" && (
            <div className="p-4 md:p-6 pt-0 border-t border-gray-200">
              <ol className="list-decimal pl-5 space-y-3 text-gray-700">
                {content.duties.items.map((item, index) => (
                  <li key={index}>{item[language]}</li>
                ))}
              </ol>
            </div>
          )}
        </div>

        {/* Composition Accordion */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          <button
            className="w-full flex justify-between items-center p-4 md:p-6 text-left"
            onClick={() => toggleAccordion("composition")}
          >
            <h2 className="text-xl font-semibold text-gray-800">
              {content.composition.title[language]}
            </h2>
            <svg
              className={`w-5 h-5 text-gray-500 transform transition-transform ${
                activeAccordion === "composition" ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          {activeAccordion === "composition" && (
            <div className="p-4 md:p-6 pt-0 border-t border-gray-200">
              <p className="text-gray-700">
                {content.composition.description[language]}
              </p>
            </div>
          )}
        </div>

        {/* Delegation Accordion */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          <button
            className="w-full flex justify-between items-center p-4 md:p-6 text-left"
            onClick={() => toggleAccordion("delegation")}
          >
            <h2 className="text-xl font-semibold text-gray-800">
              {content.delegation.title[language]}
            </h2>
            <svg
              className={`w-5 h-5 text-gray-500 transform transition-transform ${
                activeAccordion === "delegation" ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          {activeAccordion === "delegation" && (
            <div className="p-4 md:p-6 pt-0 border-t border-gray-200">
              <p className="text-gray-700">
                {content.delegation.description[language]}
              </p>
            </div>
          )}
        </div>

        {/* Annual Plan Accordion */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          <button
            className="w-full flex justify-between items-center p-4 md:p-6 text-left"
            onClick={() => toggleAccordion("annualPlan")}
          >
            <h2 className="text-xl font-semibold text-gray-800">
              {content.annualPlan.title[language]}
            </h2>
            <svg
              className={`w-5 h-5 text-gray-500 transform transition-transform ${
                activeAccordion === "annualPlan" ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          {activeAccordion === "annualPlan" && (
            <div className="p-4 md:p-6 pt-0 border-t border-gray-200">
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="py-3 px-4 border-b text-left">
                        {language === "mr" ? "क्रमांक" : "Sr. No"}
                      </th>
                      <th className="py-3 px-4 border-b text-left">
                        {language === "mr" ? "तपशील" : "Details"}
                      </th>
                      {content.annualPlan.years.map((year) => (
                        <th
                          key={year}
                          className="py-3 px-2 border-b text-center"
                        >
                          {year}-{year + 1}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {content.annualPlan.items.map((item, index) => (
                      <tr
                        key={index}
                        className="border-b border-gray-200 hover:bg-gray-50"
                      >
                        <td className="py-3 px-4 text-center">{index + 1}</td>
                        <td className="py-3 px-4">{item.name[language]}</td>
                        {content.annualPlan.years.map((year) => {
                          if (year < item.availableFrom) {
                            return (
                              <td key={year} className="py-3 px-2 text-center">
                                -
                              </td>
                            );
                          }
                          if (item.part1Years?.includes(year)) {
                            return (
                              <td key={year} className="py-3 px-2 text-center">
                                <a
                                  href={`${item.pdf}?year=${year}`}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-blue-600 hover:underline"
                                >
                                  {language === "mr" ? "भाग १" : "Part 1"}
                                </a>
                              </td>
                            );
                          }
                          if (item.part1Only === year) {
                            return (
                              <td key={year} className="py-3 px-2 text-center">
                                <a
                                  href={`${item.pdf}?year=${year}`}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-blue-600 hover:underline"
                                >
                                  {language === "mr" ? "भाग १" : "Part 1"}
                                </a>
                              </td>
                            );
                          }
                          return (
                            <td key={year} className="py-3 px-2 text-center">
                              <a
                                href={`${item.pdf}?year=${year}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:underline"
                              >
                                PDF
                              </a>
                            </td>
                          );
                        })}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>

        {/* Approvals Accordion */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          <button
            className="w-full flex justify-between items-center p-4 md:p-6 text-left"
            onClick={() => toggleAccordion("approvals")}
          >
            <h2 className="text-xl font-semibold text-gray-800">
              {language === "mr" ? "मंजुर्या" : "Approvals"}
            </h2>
            <svg
              className={`w-5 h-5 text-gray-500 transform transition-transform ${
                activeAccordion === "approvals" ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          {activeAccordion === "approvals" && (
            <div className="p-4 md:p-6 pt-0 border-t border-gray-200 space-y-6">
              <div>
                <h3 className="text-lg font-medium mb-2 text-gray-800">
                  {content.approvals.mla.title[language]}
                </h3>
                <a
                  href={content.approvals.mla.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 hover:underline"
                >
                  {language === "mr" ? "पीडीएफ डाउनलोड करा" : "Download PDF"}
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    />
                  </svg>
                </a>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2 text-gray-800">
                  {content.approvals.mlc.title[language]}
                </h3>
                <a
                  href={content.approvals.mlc.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 hover:underline"
                >
                  {language === "mr" ? "पीडीएफ डाउनलोड करा" : "Download PDF"}
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    />
                  </svg>
                </a>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2 text-gray-800">
                  {content.approvals.mplad.title[language]}
                </h3>
                <a
                  href={content.approvals.mplad.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 hover:underline"
                >
                  {language === "mr" ? "पीडीएफ डाउनलोड करा" : "Download PDF"}
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    />
                  </svg>
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DistrictPlanningCommittee;
