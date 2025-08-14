import React, { useState } from "react";
import { useLanguage } from "../../contexts/LanguageContext";
import { FiExternalLink } from "react-icons/fi";

const RTIPortal = () => {
  const { language } = useLanguage();
  const [activeSubdivisionTab, setActiveSubdivisionTab] = useState("western");

  const content = {
    en: {
      title: "RTI",
      subtitle: "RTI Jalgaon Planning Department",
      rtiAct: {
        title: "RTI Act 2005 :",
        paragraphs: [
          "The Right to Information Act, 2005 (RTI) is a law enacted by the Parliament of India to provide for setting out the practical regime of right to information for citizens. The Act applies to all States and Union Territories of India, except the State of Jammu and Kashmir - which is covered under a State-level law.",
          "Under the provisions of the Act, any citizen may request information from a public authority or body of Government or instrumentality of State which is required to reply expeditiously or within thirty days. The Act also requires every public authority to computerize their records for wide dissemination and to proactively publish certain categories of information so that the citizens need minimum recourse to request for information formally.",
          "This law was passed by Parliament on 15 June 2005 and came fully into force on 13 October 2005.",
        ],
      },
      rtiPortal: {
        title: "RTI Portal :",
        paragraph:
          "Right to Information Act 2005 mandates timely response to citizen requests for government information. It is an initiative taken by Department of Personnel and Training, Ministry of Personnel, Public Grievances and Pensions to provide an RTI Portal Gateway to the citizens for quick search of information on the details of First Appellate Authorities, PIOs etc., besides access to RTI related information/disclosures published on the web by various Public Authorities under the Government of India as well as the State Governments.",
      },
      contactTitle:
        "Appeal Authority, Government Information Officer, Assistant Government Information Officer in Jalgaon Planning Department",
      additionalResources: "Additional Resources",
      subdivisions: {
        title: "Subdivision Officers",
        western: "Western Suburban",
        eastern: "Eastern Suburban",
      },
    },
    mr: {
      title: "माहितीचा अधिकार",
      subtitle: "आरटीआय जळगाव नियोजन विभाग",
      rtiAct: {
        title: "माहितीचा अधिकार कायदा 2005 :",
        paragraphs: [
          "माहितीचा अधिकार कायदा, 2005 (आरटीआय) हा भारतीय संसदेने नागरिकांना माहितीचा अधिकाराचा व्यावहारिक कार्यपद्धती निश्चित करण्यासाठी केलेला कायदा आहे. हा कायदा जम्मू आणि काश्मीर राज्य वगळता भारताच्या सर्व राज्ये आणि केंद्रशासित प्रदेशांना लागू होतो - जे राज्य-स्तरीय कायद्याखाली येतात.",
          "या कायद्याच्या तरतुदींनुसार, कोणताही नागरिक सरकारी प्राधिकरण किंवा राज्याच्या कोणत्याही संस्थेकडून माहिती मागवू शकतो आणि त्यांना लवकरात लवकर किंवा तीस दिवसांच्या आत उत्तर देणे आवश्यक आहे. कायद्यामध्ये प्रत्येक सार्वजनिक प्राधिकरणाला त्यांचे रेकॉर्ड संगणकीकृत करणे आणि काही प्रकारची माहिती सक्रियपणे प्रसिद्ध करणे आवश्यक आहे जेणेकरून नागरिकांना औपचारिकरित्या माहिती मागण्याची गरज कमी व्हावी.",
          "हा कायदा संसदेने 15 जून 2005 रोजी संमत केला आणि 13 ऑक्टोबर 2005 रोजी पूर्णपणे अंमलात आला.",
        ],
      },
      rtiPortal: {
        title: "आरटीआय पोर्टल :",
        paragraph:
          "माहितीचा अधिकार कायदा 2005 नागरिकांच्या सरकारी माहितीच्या विनंत्या वेळेवर प्रतिसाद देणे बंधनकारक करतो. ही पर्सनल आणि ट्रेनिंग विभाग, कार्मिक, लोक शिकायत आणि निवृत्ती वेतन मंत्रालय यांनी केलेली एक पुढाकार आहे ज्यामुळे नागरिकांना पहिले अपील प्राधिकारी, पीआयओ इत्यादींच्या तपशीलांवर माहिती शोधण्यासाठी आरटीआय पोर्टल गेटवे उपलब्ध होते, तसेच भारत सरकार आणि राज्य सरकारांच्या विविध सार्वजनिक प्राधिकरणांनी वेबवर प्रकाशित केलेल्या आरटीआय संबंधित माहिती/प्रकटीकरणांना प्रवेश मिळतो.",
      },
      contactTitle:
        "अपील प्राधिकारी, सरकारी माहिती अधिकारी, सहाय्यक सरकारी माहिती अधिकारी जळगाव नियोजन विभागात",
      additionalResources: "अतिरिक्त संसाधने",
      subdivisions: {
        title: "उपविभाग अधिकारी",
        western: "पश्चिम उपनगरीय",
        eastern: "पूर्व उपनगरीय",
      },
    },
  };

  const subdivisionOfficers = {
    western: [
      {
        name: "SubDivisional Officer Western Suburban",
        pdfUrl: "/pdfs/western-suburban.pdf",
        size: "800 KB",
      },
    ],
    eastern: [
      {
        name: "SubDivisional Officer Eastern Suburban",
        pdfUrl: "/pdfs/eastern-suburban.pdf",
        size: "1 MB",
      },
    ],
  };

  const offices = [
    {
      collector: "• Deputy Collector Appeals (PDF, 29 MB)",
      subordinate: "",
      taluka: "",
      other: "",
    },
    // ... (keep all your existing office data)
  ];

  const lang = content[language] || content.en;

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      {/* Page Header with Hero Image */}
      <div className="relative rounded-xl overflow-hidden mb-12 h-64">
        <img
          src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80"
          alt={
            language === "mr"
              ? "जळगाव जिल्हा विकास"
              : "Jalgaon District Development"
          }
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-blue-800/70 flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {lang.title}
            </h1>
            <p className="text-lg text-blue-100 max-w-3xl mx-auto">
              {lang.subtitle}
            </p>
          </div>
        </div>
      </div>

      {/* RTI Act 2005 Section */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h3 className="text-xl font-bold text-blue-700 mb-4">
          {lang.rtiAct.title}
        </h3>
        {lang.rtiAct.paragraphs.map((paragraph, index) => (
          <p key={index} className="text-gray-700 mb-4">
            {paragraph}
          </p>
        ))}
      </div>

      {/* RTI Portal Section */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h3 className="text-xl font-bold text-blue-700 mb-4">
          {lang.rtiPortal.title}
        </h3>
        <p className="text-gray-700 mb-4">{lang.rtiPortal.paragraph}</p>
      </div>

      {/* Subdivision Officers Section with Tabs */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h3 className="text-xl font-bold text-blue-700 mb-4">
          {lang.subdivisions.title}
        </h3>

        {/* Tabs */}
        <div className="flex border-b border-gray-200 mb-4">
          <button
            className={`py-2 px-4 font-medium text-sm focus:outline-none ${
              activeSubdivisionTab === "western"
                ? "border-b-2 border-blue-500 text-blue-600"
                : "text-gray-500 hover:text-gray-700"
            }`}
            onClick={() => setActiveSubdivisionTab("western")}
          >
            {lang.subdivisions.western}
          </button>
          <button
            className={`py-2 px-4 font-medium text-sm focus:outline-none ${
              activeSubdivisionTab === "eastern"
                ? "border-b-2 border-blue-500 text-blue-600"
                : "text-gray-500 hover:text-gray-700"
            }`}
            onClick={() => setActiveSubdivisionTab("eastern")}
          >
            {lang.subdivisions.eastern}
          </button>
        </div>

        {/* Tab Content */}
        <div className="space-y-3">
          {subdivisionOfficers[activeSubdivisionTab].map((officer, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-2 hover:bg-blue-50 rounded"
            >
              <span className="text-gray-700">{officer.name}</span>
              <a
                href={officer.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-blue-600 hover:text-blue-800"
              >
                <span className="mr-1">PDF ({officer.size})</span>
                <FiExternalLink className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RTIPortal;
