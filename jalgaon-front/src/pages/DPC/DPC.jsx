import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../../contexts/LanguageContext";

// DPC Data in both English and Marathi
const dpcData = {
  en: {
    header: {
      title: "District Planning Committee",
      subtitle: "Jalgaon, Maharashtra",
    },
    about: {
      title: "About District Planning Committee",
      content: [
        "The District Planning Committee (DPC) is constituted under the Maharashtra District Planning Committee (Constitutions and Functions) Act, 1998.",
        "It serves as the principal planning body at the district level to consolidate plans prepared by local bodies and prepare a draft development plan for the district.",
        "The DPC plays a crucial role in decentralized planning and ensures people's participation in the planning process.",
      ],
    },
    functions: {
      title: "Functions & Responsibilities",
      items: [
        "Consolidation of plans prepared by Panchayats and Municipalities",
        "Preparation of draft development plan for the district",
        "Monitoring and evaluation of various schemes and programs",
        "Ensuring inter-sectoral priorities in planning",
        "Adherence to state government guidelines in planning",
        "Preparation of District Annual Plan",
      ],
    },
    meetings: {
      title: "Meetings & Procedures",
      sections: [
        {
          title: "Meeting Schedule",
          content:
            "The first meeting of newly constituted DPC shall be held within thirty days from the date of constitution. No more than ninety days shall intervene between two consecutive meetings.",
        },
        {
          title: "Notice Period",
          content:
            "Notice for meetings must be issued at least seven clear days before the meeting to all members and special invitees.",
        },
        {
          title: "Decision Making",
          content:
            "Decisions are preferably made by consensus. In case of disagreement, matters are decided by more than two-third majority of those present and voting.",
        },
      ],
    },
    committees: {
      title: "Committees Structure",
      items: [
        {
          title: "Executive Committee",
          content: [
            "Constituted to assist the DPC with members including Divisional Commissioner, District Collector, CEO of Zilla Parishad, and nominated members.",
            "Meets preferably once every month.",
          ],
        },
        {
          title: "Sub-Committees",
          content: [
            "Up to five sub-committees may be formed for monitoring schemes and programs in core/non-core sectors.",
            "Each consists of subject experts and district officers.",
          ],
        },
      ],
    },
    documents: {
      title: "Important Documents",
      items: [
        {
          name: "Maharashtra District Planning Committee ( Conduct of meetings ) Rules, 1999",
          url: "https://plan.maharashtra.gov.in/Sitemap/plan/pdf/Maharashtra_District_Planning_Committee_(Conduct_of_meetings)Rules_1999_18022021.pdf",
        },
        {
          name: "Maharashtra District Planning Committee ( Election ) Rules, 1999",
          url: "https://plan.maharashtra.gov.in/Sitemap/plan/pdf/Maharashtra_District_Planning_Committee_(Election)_Rules_1999_18022021.pdf",
        },
        {
          name: "Maharashtra District Planning Committees ( Conduct of meetings ) (Amendments) Rules, 2018",
          url: "https://plan.maharashtra.gov.in/Sitemap/plan/pdf/Maharashtra_District_Planning_Committees_(Conduct_of_meetings)_(Amendments)_Rules_2018_18022021.pdf",
        },
        {
          name: "Maharashtra District Planning Committee ( Conduct of meetings ) (Amendments) Rules, 2019",
          url: "https://plan.maharashtra.gov.in/Sitemap/plan/pdf/Maharashtra_District_Planning_Committee_(Conduct_of_meetings)_(Amendments)_Rules_2019_18022021.pdf",
        },
      ],
    },
    contact: {
      title: "Contact Information",
      address: {
        title: "Office Address",
        lines: [
          "District Planning Committee Office,",
          "Collectorate Campus,",
          "Jalgaon, Maharashtra - 425001",
        ],
      },
      details: {
        title: "Contact Details",
        phone: "0257-2222222",
        email: "dpc-jalgaon@maharashtra.gov.in",
      },
    },
  },
  mr: {
    header: {
      title: "जिल्हा आराखडा समिती",
      subtitle: "जळगाव, महाराष्ट्र",
    },
    about: {
      title: "जिल्हा आराखडा समितीबद्दल",
      content: [
        "जिल्हा आराखडा समिती (DPC) महाराष्ट्र जिल्हा आराखडा समिती (रचना आणि कार्ये) कायदा, 1998 अंतर्गत स्थापन करण्यात आली आहे.",
        "हे जिल्हा स्तरावरील प्रमुख आराखडा संस्था म्हणून काम करते जी स्थानिक संस्थांनी तयार केलेले आराखडे एकत्रित करते आणि जिल्ह्यासाठी विकास आराखडा मसुदा तयार करते.",
        "DPC विकेंद्रीकृत आराखडा प्रक्रियेत महत्त्वपूर्ण भूमिका बजावते आणि आराखडा प्रक्रियेत लोकांचा सहभाग सुनिश्चित करते.",
      ],
    },
    functions: {
      title: "कार्ये आणि जबाबदाऱ्या",
      items: [
        "पंचायत आणि नगरपालिकांनी तयार केलेल्या आराखड्यांचे एकत्रीकरण",
        "जिल्ह्यासाठी विकास आराखडा मसुदा तयार करणे",
        "विविध योजना आणि कार्यक्रमांचे निरीक्षण आणि मूल्यांकन",
        "आराखडा प्रक्रियेत आंतर-क्षेत्रीय प्राधान्ये सुनिश्चित करणे",
        "आराखडा प्रक्रियेत राज्य सरकारच्या मार्गदर्शक तत्त्वांचे पालन",
        "जिल्हा वार्षिक आराखडा तयार करणे",
      ],
    },
    meetings: {
      title: "बैठका आणि प्रक्रिया",
      sections: [
        {
          title: "बैठक वेळापत्रक",
          content:
            "नवीन स्थापन झालेल्या DPC ची पहिली बैठक स्थापनेच्या तारखेपासून तीस दिवसांच्या आत घेण्यात येईल. दोन सलग बैठकांमध्ये नव्वद दिवसांपेक्षा जास्त अंतर नसावे.",
        },
        {
          title: "सूचना कालावधी",
          content:
            "बैठकींची सूचना सर्व सदस्यांना आणि विशेष निमंत्रितांना बैठक होण्याच्या किमान सात दिवस आधी जारी करणे आवश्यक आहे.",
        },
        {
          title: "निर्णय प्रक्रिया",
          content:
            "निर्णय प्राधान्याने सर्वसमावेशक पद्धतीने घेतले जातात. मतभेद असल्यास, उपस्थित आणि मतदान करणाऱ्यांच्या दोन-तृतियांश बहुमताने निर्णय घेतले जातात.",
        },
      ],
    },
    committees: {
      title: "समिती रचना",
      items: [
        {
          title: "कार्यकारी समिती",
          content: [
            "विभागीय आयुक्त, जिल्हाधिकारी, जिल्हा परिषदेचे मुख्य कार्यकारी अधिकारी आणि नामनिर्देशित सदस्य यांचा समावेश असलेली DPC ला सहाय्य करण्यासाठी स्थापन केलेली समिती.",
            "दर महिन्याला किमान एकदा बैठक घेण्याची शिफारस.",
          ],
        },
        {
          title: "उपसमित्या",
          content: [
            "कोर/अकोर क्षेत्रातील योजना आणि कार्यक्रमांच्या निरीक्षणासाठी जास्तीत जास्त पाच उपसमित्या स्थापन करता येतील.",
            "प्रत्येक समितीमध्ये विषय तज्ज्ञ आणि जिल्हा अधिकारी यांचा समावेश असतो.",
          ],
        },
      ],
    },
    documents: {
      title: "महत्त्वाची दस्तऐवजे",
      items: [
        {
          name: "महाराष्ट्र जिल्हा नियोजन समिती (बैठका आयोजित करणे) नियम, १९९९",
          url: "https://plan.maharashtra.gov.in/Sitemap/plan/pdf/Maharashtra_District_Planning_Committee_(Conduct_of_meetings)Rules_1999_18022021.pdf",
        },
        {
          name: "महाराष्ट्र जिल्हा नियोजन समिती (निवडणूक) नियम, १९९९",
          url: "https://plan.maharashtra.gov.in/Sitemap/plan/pdf/Maharashtra_District_Planning_Committee_(Election)_Rules_1999_18022021.pdf",
        },
        {
          name: "महाराष्ट्र जिल्हा नियोजन समित्या (बैठका आयोजित करणे) (सुधारणा) नियम, २०१८",
          url: "https://plan.maharashtra.gov.in/Sitemap/plan/pdf/Maharashtra_District_Planning_Committees_(Conduct_of_meetings)_(Amendments)_Rules_2018_18022021.pdf",
        },
        {
          name: "महाराष्ट्र जिल्हा नियोजन समिती (बैठका आयोजित करणे) (सुधारणा) नियम, २०१९",
          url: "https://plan.maharashtra.gov.in/Sitemap/plan/pdf/Maharashtra_District_Planning_Committee_(Conduct_of_meetings)_(Amendments)_Rules_2019_18022021.pdf",
        },
      ],
    },
    contact: {
      title: "संपर्क माहिती",
      address: {
        title: "कार्यालयाचा पत्ता",
        lines: [
          "जिल्हा आराखडा समिती कार्यालय,",
          "कलेक्टर कॅम्पस,",
          "जळगाव, महाराष्ट्र - 425001",
        ],
      },
      details: {
        title: "संपर्क तपशील",
        phone: "0257-2222222",
        email: "dpc-jalgaon@maharashtra.gov.in",
      },
    },
  },
};

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const DPC = () => {
  const { language } = useLanguage();
  const data = dpcData[language] || dpcData.en; // Fallback to English if language not found

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main Content */}
      <motion.main
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="container mx-auto px-4 py-6 md:py-8"
      >
        {/* About Section */}
        <motion.section
          variants={itemVariants}
          className="mb-8 md:mb-12 bg-white rounded-lg shadow-md p-4 md:p-6"
        >
          <h2 className="text-xl md:text-2xl font-semibold text-blue-800 border-b border-blue-200 pb-2 mb-3 md:mb-4">
            {data.about.title}
          </h2>
          {data.about.content.map((paragraph, index) => (
            <p
              key={index}
              className="text-gray-700 mb-3 md:mb-4 last:mb-0 text-sm md:text-base"
            >
              {paragraph}
            </p>
          ))}
        </motion.section>

        {/* Functions Section */}
        <motion.section
          variants={itemVariants}
          className="mb-8 md:mb-12 bg-white rounded-lg shadow-md p-4 md:p-6"
        >
          <h2 className="text-xl md:text-2xl font-semibold text-blue-800 border-b border-blue-200 pb-2 mb-3 md:mb-4">
            {data.functions.title}
          </h2>
          <ul className="list-disc pl-5 md:pl-6 space-y-1 md:space-y-2 text-gray-700 text-sm md:text-base">
            {data.functions.items.map((item, index) => (
              <motion.li
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02, x: 5 }}
              >
                {item}
              </motion.li>
            ))}
          </ul>
        </motion.section>

        {/* Meetings Section */}
        <motion.section
          variants={itemVariants}
          className="mb-8 md:mb-12 bg-white rounded-lg shadow-md p-4 md:p-6"
        >
          <h2 className="text-xl md:text-2xl font-semibold text-blue-800 border-b border-blue-200 pb-2 mb-3 md:mb-4">
            {data.meetings.title}
          </h2>
          <div className="space-y-3 md:space-y-4">
            {data.meetings.sections.map((section, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.01 }}
                className="p-3 md:p-4 bg-blue-50 rounded-lg"
              >
                <h3 className="text-base md:text-lg font-medium text-blue-700 mb-1 md:mb-2">
                  {section.title}
                </h3>
                <p className="text-gray-700 text-sm md:text-base">
                  {section.content}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Committees Section */}
        <motion.section
          variants={itemVariants}
          className="mb-8 md:mb-12 bg-white rounded-lg shadow-md p-4 md:p-6"
        >
          <h2 className="text-xl md:text-2xl font-semibold text-blue-800 border-b border-blue-200 pb-2 mb-3 md:mb-4">
            {data.committees.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {data.committees.items.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="border border-blue-100 rounded-lg p-3 md:p-4 hover:shadow-md transition-shadow"
              >
                <h3 className="text-base md:text-lg font-medium text-blue-700 mb-1 md:mb-2">
                  {item.title}
                </h3>
                {item.content.map((para, idx) => (
                  <p
                    key={idx}
                    className="text-gray-700 mb-1 md:mb-2 last:mb-0 text-sm md:text-base"
                  >
                    {para}
                  </p>
                ))}
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Documents Section */}
        <motion.section
          variants={itemVariants}
          className="mb-8 md:mb-12 bg-white rounded-lg shadow-md p-4 md:p-6"
        >
          <h2 className="text-xl md:text-2xl font-semibold text-blue-800 border-b border-blue-200 pb-2 mb-3 md:mb-4">
            {data.documents.title}
          </h2>
          <div className="space-y-2 md:space-y-3">
            {data.documents.items.map((doc, index) => (
              <motion.a
                key={index}
                variants={itemVariants}
                whileHover={{ x: 5 }}
                href={doc.url}
                className="flex items-center text-blue-600 hover:text-blue-800 text-sm md:text-base"
              >
                <svg
                  className="w-4 h-4 md:w-5 md:h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>
                {doc.name}
              </motion.a>
            ))}
          </div>
        </motion.section>

        {/* Contact Section */}
        <motion.section
          variants={itemVariants}
          className="bg-white rounded-lg shadow-md p-4 md:p-6"
        >
          <h2 className="text-xl md:text-2xl font-semibold text-blue-800 border-b border-blue-200 pb-2 mb-3 md:mb-4">
            {data.contact.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <motion.div variants={itemVariants} whileHover={{ scale: 1.01 }}>
              <h3 className="text-base md:text-lg font-medium text-blue-700 mb-1 md:mb-2">
                {data.contact.address.title}
              </h3>
              {data.contact.address.lines.map((line, index) => (
                <p key={index} className="text-gray-700 text-sm md:text-base">
                  {line}
                </p>
              ))}
            </motion.div>
            <motion.div variants={itemVariants} whileHover={{ scale: 1.01 }}>
              <h3 className="text-base md:text-lg font-medium text-blue-700 mb-1 md:mb-2">
                {data.contact.details.title}
              </h3>
              <p className="text-gray-700 text-sm md:text-base">
                <span className="font-medium">
                  {language === "mr" ? "फोन:" : "Phone:"}
                </span>{" "}
                {data.contact.details.phone}
                <br />
                <span className="font-medium">
                  {language === "mr" ? "ईमेल:" : "Email:"}
                </span>{" "}
                {data.contact.details.email}
              </p>
            </motion.div>
          </div>
        </motion.section>
      </motion.main>
    </div>
  );
};

export default DPC;
