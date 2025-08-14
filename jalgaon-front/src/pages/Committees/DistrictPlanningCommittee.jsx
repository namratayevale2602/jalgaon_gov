import { useLanguage } from "../../contexts/LanguageContext";
import {
  FaFileAlt,
  FaUsers,
  FaLandmark,
  FaHome,
  FaBalanceScale,
  FaUserTie,
  FaUserShield,
  FaBook,
  FaClipboardList,
  FaChartLine,
  FaHandshake,
  FaMoneyBillWave,
  FaClipboardCheck,
  FaFilePdf,
  FaUserFriends,
  FaVoteYea,
} from "react-icons/fa";
import {
  HiDocumentText,
  HiUserGroup,
  HiCalendar,
  HiOfficeBuilding,
} from "react-icons/hi";
import {
  MdGroups,
  MdOutlineAssignment,
  MdMeetingRoom,
  MdPolicy,
} from "react-icons/md";
import ExecutiveCommittee from "./ExecutiveCommittee";
import PlanningCommittee from "./PlanningCommittee";

// Comprehensive JSON data structure
const committeeData = {
  meta: {
    lastUpdated: "2023-11-15",
    actReferences: [
      "Maharashtra Act No. XXIV of 1998",
      "Maharashtra District Planning Committee (Election) Rules, 1999",
    ],
    jurisdiction: "Jalgaon District, Maharashtra",
  },
  committeeInfo: {
    title: {
      en: "Jalgaon District Planning Committee",
      mr: "जळगाव जिल्हा नियोजन समिती",
    },
    establishment: {
      en: "Established under Maharashtra Act No. XXIV of 1998",
      mr: "महाराष्ट्र अधिनियम क्रमांक XXIV of 1998 अंतर्गत स्थापन",
    },
    purpose: {
      en: [
        "Consolidate plans prepared by Panchayats and Municipalities",
        "Prepare draft development plan for Jalgaon district",
        "Coordinate rural and urban development activities",
        "Monitor implementation of district-level schemes",
      ],
      mr: [
        "पंचायती आणि नगरपालिकांनी तयार केलेल्या योजनांचे एकत्रीकरण",
        "जळगाव जिल्ह्यासाठी विकास योजनेचा मसुदा तयार करणे",
        "ग्रामीण आणि शहरी विकास क्रियाकलापांचे समन्वयन",
        "जिल्हा स्तरीय योजनांच्या अंमलबजावणीचे निरीक्षण",
      ],
    },
  },
  legalFramework: {
    act1998: {
      title: {
        en: "Maharashtra District Planning Committee Act, 1998",
        mr: "महाराष्ट्र जिल्हा नियोजन समिती अधिनियम, १९९८",
      },
      keyProvisions: {
        en: [
          "Provides for constitution of District Planning Committees",
          "Defines composition and functions",
          "Mandates preparation of integrated development plans",
          "Establishes coordination mechanism between rural and urban bodies",
        ],
        mr: [
          "जिल्हा नियोजन समित्यांची रचना स्थापित करते",
          "संरचना आणि कार्ये परिभाषित करते",
          "एकात्मिक विकास योजना तयार करणे अनिवार्य करते",
          "ग्रामीण आणि शहरी संस्थांमधील समन्वय यंत्रणा स्थापित करते",
        ],
      },
      notificationDate: {
        en: "First published in Maharashtra Government Gazette on 9th October 1998",
        mr: "९ ऑक्टोबर १९९८ रोजी महाराष्ट्र शासन राजपत्रात प्रथम प्रसिद्ध",
      },
    },
    electionRules1999: {
      title: {
        en: "DPC Election Rules, 1999",
        mr: "डीपीसी निवडणूक नियम, १९९९",
      },
      keyProvisions: {
        en: [
          "Defines electoral constituencies (Rural, Transitional, Small Urban, Large Urban)",
          "Specifies reservation norms for SC/ST/OBC and women",
          "Outlines election process under District Collector's supervision",
          "Mandates preparation of electoral rolls",
        ],
        mr: [
          "मतदार संघ परिभाषित करते (ग्रामीण, संक्रमणकालीन, लहान शहरी, मोठे शहरी)",
          "अनुसूचित जाती/जमाती/मागासवर्ग आणि महिलांसाठी आरक्षण नियम निर्दिष्ट करते",
          "जिल्हाधिकारी यांच्या देखरेखीखाली निवडणूक प्रक्रिया रेखाटते",
          "मतदार याद्या तयार करणे अनिवार्य करते",
        ],
      },
    },
  },
  composition: {
    totalMembers: 50,
    categories: [
      {
        title: {
          en: "Ex-Officio Members",
          mr: "पदेन सदस्य",
        },
        members: [
          {
            position: {
              en: "District Guardian Minister",
              mr: "जिल्हा प्रभारी मंत्री",
            },
            role: {
              en: "Chairperson",
              mr: "अध्यक्ष",
            },
            count: 1,
            description: {
              en: "Nominated by State Government as in-charge of the district",
              mr: "जिल्ह्याचे प्रभारी मंत्री म्हणून राज्य शासनाकडून नामनिर्देशित",
            },
          },
          {
            position: {
              en: "District Collector",
              mr: "जिल्हाधिकारी",
            },
            role: {
              en: "Member Secretary",
              mr: "सदस्य सचिव",
            },
            count: 1,
            description: {
              en: "Chief executive officer of the district administration",
              mr: "जिल्हा प्रशासनाचे मुख्य कार्यकारी अधिकारी",
            },
          },
        ],
      },
      {
        title: {
          en: "Elected Representatives",
          mr: "निवडून आलेले प्रतिनिधी",
        },
        members: [
          {
            position: {
              en: "Zilla Parishad President",
              mr: "जिल्हा परिषद अध्यक्ष",
            },
            count: 1,
            description: {
              en: "Head of the district rural local body",
              mr: "जिल्हा ग्रामीण स्थानिक स्वराज्य संस्थेचे प्रमुख",
            },
          },
          {
            position: {
              en: "Municipal Council Representatives",
              mr: "नगरपालिका प्रतिनिधी",
            },
            count: 16,
            description: {
              en: "Elected from urban local bodies in the district",
              mr: "जिल्ह्यातील शहरी स्थानिक स्वराज्य संस्थांमधून निवडलेले",
            },
          },
        ],
      },
      {
        title: {
          en: "Nominated Members",
          mr: "नामनिर्देशित सदस्य",
        },
        members: [
          {
            position: {
              en: "State Government Nominees",
              mr: "राज्य शासन नामांकित",
            },
            criteria: {
              en: "With expertise in planning and development",
              mr: "नियोजन आणि विकासातील तज्ञ",
            },
            count: 30,
            description: {
              en: "Experts in various fields related to district planning",
              mr: "जिल्हा नियोजनाशी संबंधित विविध क्षेत्रातील तज्ञ",
            },
          },
        ],
      },
      {
        title: {
          en: "Special Invitees",
          mr: "विशेष निमंत्रित",
        },
        members: [
          {
            position: {
              en: "MPs/MLAs from the district",
              mr: "जिल्ह्यातील खासदार/आमदार",
            },
            count: 16,
            description: {
              en: "Members of Parliament and Legislative Assembly from the district",
              mr: "जिल्ह्यातून निवडून आलेले संसद सदस्य आणि विधानसभा सदस्य",
            },
          },
          {
            position: {
              en: "Divisional Commissioner",
              mr: "विभागीय आयुक्त",
            },
            count: 1,
            description: {
              en: "Head of the revenue division",
              mr: "विभागाचे प्रमुख राजस्व अधिकारी",
            },
          },
          {
            position: {
              en: "District Planning Officer",
              mr: "जिल्हा नियोजन अधिकारी",
            },
            count: 1,
            description: {
              en: "Officer in-charge of planning at district level",
              mr: "जिल्हा स्तरावर नियोजनाचे प्रभारी अधिकारी",
            },
          },
        ],
      },
    ],
  },
  functions: {
    planning: {
      title: {
        en: "Planning Functions",
        mr: "नियोजन कार्ये",
      },
      items: [
        {
          title: {
            en: "Development Plan Formulation",
            mr: "विकास योजना तयार करणे",
          },
          description: {
            en: "Prepare 5-year and annual development plans for the district",
            mr: "जिल्ह्यासाठी पंचवार्षिक आणि वार्षिक विकास योजना तयार करणे",
          },
          icon: "FaChartLine",
        },
        {
          title: {
            en: "Consolidation of Plans",
            mr: "योजनांचे एकत्रीकरण",
          },
          description: {
            en: "Consolidate plans prepared by Panchayats and Municipalities",
            mr: "पंचायती आणि नगरपालिकांनी तयार केलेल्या योजनांचे एकत्रीकरण",
          },
          icon: "FaClipboardList",
        },
      ],
    },
    coordination: {
      title: {
        en: "Coordination Functions",
        mr: "समन्वय कार्ये",
      },
      items: [
        {
          title: {
            en: "Inter-Departmental Coordination",
            mr: "आंतरविभागीय समन्वय",
          },
          description: {
            en: "Coordinate between various government departments and local bodies",
            mr: "विविध सरकारी विभाग आणि स्थानिक संस्थांमध्ये समन्वय साधणे",
          },
          icon: "FaHandshake",
        },
        {
          title: {
            en: "Rural-Urban Integration",
            mr: "ग्रामीण-शहरी एकात्मता",
          },
          description: {
            en: "Ensure balanced development between rural and urban areas",
            mr: "ग्रामीण आणि शहरी भागात संतुलित विकास सुनिश्चित करणे",
          },
          icon: "FaBalanceScale",
        },
      ],
    },
    monitoring: {
      title: {
        en: "Monitoring Functions",
        mr: "निरीक्षण कार्ये",
      },
      items: [
        {
          title: {
            en: "Scheme Implementation",
            mr: "योजना अंमलबजावणी",
          },
          description: {
            en: "Monitor implementation of central and state government schemes",
            mr: "केंद्र आणि राज्य सरकारच्या योजनांच्या अंमलबजावणीचे निरीक्षण",
          },
          icon: "FaClipboardCheck",
        },
        {
          title: {
            en: "Resource Allocation",
            mr: "संसाधन वाटप",
          },
          description: {
            en: "Allocate resources for district-level development programs",
            mr: "जिल्हा स्तरीय विकास कार्यक्रमांसाठी संसाधनांचे वाटप",
          },
          icon: "FaMoneyBillWave",
        },
      ],
    },
  },
  documents: [
    {
      id: 1,
      title: {
        en: "DPC Act 1998",
        mr: "डीपीसी अधिनियम १९९८",
      },
      type: "act",
      link: "/documents/dpc_act_1998.pdf",
      updated: "1998-10-09",
      description: {
        en: "Complete text of the Maharashtra District Planning Committee Act, 1998",
        mr: "महाराष्ट्र जिल्हा नियोजन समिती अधिनियम, १९९८ चा संपूर्ण मजकूर",
      },
    },
    {
      id: 2,
      title: {
        en: "Jalgaon DPC Structure Chart",
        mr: "जळगाव डीपीसी रचना तक्ता",
      },
      type: "structure",
      link: "/documents/jalgaon_dpc_structure.pdf",
      updated: "2023-01-15",
      description: {
        en: "Current organizational structure of Jalgaon District Planning Committee",
        mr: "जळगाव जिल्हा नियोजन समितीची सध्याची संघटनात्मक रचना",
      },
    },
    {
      id: 3,
      title: {
        en: "DPC Election Rules 1999",
        mr: "डीपीसी निवडणूक नियम १९९९",
      },
      type: "rules",
      link: "/documents/dpc_election_rules_1999.pdf",
      updated: "1999-07-22",
      description: {
        en: "Rules governing elections to the District Planning Committee",
        mr: "जिल्हा नियोजन समितीच्या निवडणुका नियंत्रित करणारे नियम",
      },
    },
  ],
  currentMembers: {
    lastUpdated: "2023-04-01",
    chairperson: {
      name: {
        en: "Shri. Guardian Minister",
        mr: "श्री. प्रभारी मंत्री",
      },
      position: {
        en: "Chairperson",
        mr: "अध्यक्ष",
      },
      contact: {
        office: "0257-2222222",
        email: "guardian.minister@jalgaon.gov.in",
      },
    },
    memberSecretary: {
      name: {
        en: "Shri. District Collector",
        mr: "श्री. जिल्हाधिकारी",
      },
      position: {
        en: "Member Secretary",
        mr: "सदस्य सचिव",
      },
      contact: {
        office: "0257-2222000",
        email: "dc.jalgaon@maharashtra.gov.in",
      },
    },
    otherMembers: [
      {
        name: {
          en: "Shri. Zilla Parishad President",
          mr: "श्री. जिल्हा परिषद अध्यक्ष",
        },
        category: {
          en: "Elected Representative",
          mr: "निवडून आलेले प्रतिनिधी",
        },
      },
      {
        name: {
          en: "Shri. Municipal Council Representative",
          mr: "श्री. नगरपालिका प्रतिनिधी",
        },
        category: {
          en: "Elected Representative",
          mr: "निवडून आलेले प्रतिनिधी",
        },
      },
    ],
  },
};

const DistrictPlanningCommittee = () => {
  const { language } = useLanguage();

  const getText = (item) => {
    if (typeof item === "string") return item;
    return item[language] || item.en || item;
  };

  const renderMemberCategory = (category) => (
    <div key={category.title.en} className="mb-6">
      <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center">
        <MdGroups className="mr-2 text-blue-600" />
        {getText(category.title)}
      </h3>
      <div className="bg-gray-50 p-4 rounded-lg">
        {category.members.map((member, idx) => (
          <div key={idx} className="mb-4 last:mb-0">
            <div className="flex items-start">
              <FaUserTie className="text-blue-600 mr-3 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-medium text-gray-800">
                  {getText(member.position)} ({member.count})
                </h4>
                {member.role && (
                  <p className="text-sm text-gray-600">
                    {getText(member.role)}
                  </p>
                )}
                {member.description && (
                  <p className="text-sm text-gray-600 mt-1">
                    {getText(member.description)}
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderFunctionCard = (func) => {
    const IconComponent = {
      FaChartLine: FaChartLine,
      FaClipboardList: FaClipboardList,
      FaHandshake: FaHandshake,
      FaBalanceScale: FaBalanceScale,
      FaClipboardCheck: FaClipboardCheck,
      FaMoneyBillWave: FaMoneyBillWave,
    }[func.icon];

    return (
      <div
        key={func.title.en}
        className="bg-white p-4 rounded-lg shadow-sm border border-gray-200"
      >
        <div className="flex items-start">
          <div className="bg-blue-100 p-2 rounded-full mr-3">
            <IconComponent className="text-blue-600" />
          </div>
          <div>
            <h4 className="font-medium text-gray-800">{getText(func.title)}</h4>
            <p className="text-sm text-gray-600 mt-1">
              {getText(func.description)}
            </p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {getText(committeeData.committeeInfo.title)}
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {getText(committeeData.committeeInfo.establishment)}
          </p>
        </div>

        {/* Legal Framework Section */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
            <MdPolicy className="mr-2 text-blue-600" />
            {language === "en" ? "Legal Framework" : "कायदेशीर रचना"}
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Act 1998 */}
            <div className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
              <div className="flex items-start">
                <div className="flex-shrink-0 h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                  <FaFileAlt className="h-6 w-6 text-blue-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">
                    {getText(committeeData.legalFramework.act1998.title)}
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    {getText(
                      committeeData.legalFramework.act1998.notificationDate
                    )}
                  </p>
                  <ul className="mt-3 space-y-2">
                    {committeeData.legalFramework.act1998.keyProvisions[
                      language
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span className="text-gray-700 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Election Rules 1999 */}
            <div className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
              <div className="flex items-start">
                <div className="flex-shrink-0 h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                  <FaVoteYea className="h-6 w-6 text-blue-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">
                    {getText(
                      committeeData.legalFramework.electionRules1999.title
                    )}
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    {language === "en"
                      ? "Published on 22nd July 1999"
                      : "२२ जुलै १९९९ रोजी प्रसिद्ध"}
                  </p>
                  <ul className="mt-3 space-y-2">
                    {committeeData.legalFramework.electionRules1999.keyProvisions[
                      language
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span className="text-gray-700 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Composition Section */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
            <HiUserGroup className="mr-2 text-blue-600" />
            {language === "en" ? "Committee Composition" : "समिती रचना"}
          </h2>

          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              {language === "en"
                ? `Total Members: ${committeeData.composition.totalMembers}`
                : `एकूण सदस्य: ${committeeData.composition.totalMembers}`}
            </h3>
          </div>

          {/* Member Categories */}
          <div className="grid md:grid-cols-2 gap-6">
            {committeeData.composition.categories.map(renderMemberCategory)}
          </div>
        </div>

        {/* Documents Section */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
            <FaFileAlt className="mr-2 text-blue-600" />
            {language === "en" ? "Documents" : "दस्तऐवज"}
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            {committeeData.documents.map((doc) => (
              <div
                key={doc.id}
                className="border rounded-lg p-4 hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                    <FaFilePdf className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-800">
                      {getText(doc.title)}
                    </h3>
                    <p className="text-xs text-gray-500 mt-1">
                      {language === "en" ? "Updated" : "अद्यतनित"}:{" "}
                      {doc.updated}
                    </p>
                    <p className="text-sm text-gray-600 mt-2">
                      {getText(doc.description)}
                    </p>
                    <a
                      href={doc.link}
                      className="inline-flex items-center text-blue-600 text-sm mt-2 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {language === "en" ? "Download" : "डाउनलोड करा"}
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
              </div>
            ))}
          </div>
        </div>
        {/* <ExecutiveCommittee /> */}
        <PlanningCommittee />
        {/* Purpose Section */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
            <FaBook className="mr-2 text-blue-600" />
            {language === "en" ? "Purpose & Objectives" : "उद्देश्य"}
          </h2>
          <ul className="space-y-3">
            {committeeData.committeeInfo.purpose[language].map((item, idx) => (
              <li key={idx} className="flex items-start">
                <span className="text-blue-600 mr-2 mt-1">•</span>
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DistrictPlanningCommittee;
