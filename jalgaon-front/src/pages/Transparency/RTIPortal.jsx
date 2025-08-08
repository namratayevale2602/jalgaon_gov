import { motion } from "framer-motion";
import { FaUserTie, FaFileAlt, FaMoneyBillWave } from "react-icons/fa";
import { useLanguage } from "../../contexts/LanguageContext";

const RTIPortal = () => {
  const { language } = useLanguage();

  // Bilingual content
  const content = {
    title: {
      en: "RTI Portal",
      mr: "माहिती अधिकार पोर्टल",
    },
    pioSection: {
      title: {
        en: "Public Information Officer (PIO)",
        mr: "सार्वजनिक माहिती अधिकारी (PIO)",
      },
      designatedPio: {
        title: {
          en: "Designated PIO",
          mr: "नियुक्त PIO",
        },
        name: {
          en: "Shri. R.A. Ide (Assistant District Planning Officer)",
          mr: "श्री. आर.ए. इडे (सहाय्यक जिल्हा नियोजन अधिकारी)",
        },
        contact: {
          en: "Contact Details:",
          mr: "संपर्क तपशील:",
        },
        phone: {
          en: "Phone: 0257-2222222",
          mr: "फोन: 0257-2222222",
        },
        email: {
          en: "Email: adpo-jalgaon@maharashtra.gov.in",
          mr: "ईमेल: adpo-jalgaon@maharashtra.gov.in",
        },
        address: {
          en: "Address: Planning Bhavan, Collector Office Campus, Jalgaon",
          mr: "पत्ता: नियोजन भवन, कलेक्टर ऑफिस कॅम्पस, जळगाव",
        },
      },
      appellateAuthority: {
        title: {
          en: "First Appellate Authority",
          mr: "प्रथम अपील प्राधिकरण",
        },
        name: {
          en: "Shri. Prataprao Patil (District Planning Officer)",
          mr: "श्री. प्रतापराव पाटील (जिल्हा नियोजन अधिकारी)",
        },
      },
    },
    filingProcess: {
      title: {
        en: "How to File RTI Application",
        mr: "माहिती अधिकार अर्ज कसा भरावा",
      },
      steps: [
        {
          step: 1,
          title: {
            en: "Prepare Application",
            mr: "अर्ज तयार करा",
          },
          description: {
            en: "Write your application in English, Hindi, Marathi or local language",
            mr: "तुमचा अर्ज इंग्रजी, हिंदी, मराठी किंवा स्थानिक भाषेत लिहा",
          },
        },
        {
          step: 2,
          title: {
            en: "Pay Fee",
            mr: "फी भरा",
          },
          description: {
            en: "Attach ₹10 demand draft/IPO/bank receipt (₹5 for BPL)",
            mr: "१० रुपये डिमांड ड्राफ्ट/IPO/बँक पावती संलग्न करा (BPL साठी ५ रुपये)",
          },
        },
        {
          step: 3,
          title: {
            en: "Submit",
            mr: "सबमिट करा",
          },
          description: {
            en: "Submit to PIO in person, by post or online RTI portal",
            mr: "PIO कडे व्यक्तिशः, पोस्टद्वारे किंवा ऑनलाइन RTI पोर्टलवर सबमिट करा",
          },
        },
        {
          step: 4,
          title: {
            en: "Receive Response",
            mr: "प्रतिसाद मिळवा",
          },
          description: {
            en: "Get information within 30 days (48 hours for life/liberty cases)",
            mr: "30 दिवसांत माहिती मिळवा (जीवन/स्वातंत्र्याच्या बाबतीत 48 तास)",
          },
        },
      ],
      feeStructure: {
        title: {
          en: "Fee Structure",
          mr: "फी रचना",
        },
        points: {
          en: [
            "Application fee: ₹10 (₹5 for Below Poverty Line applicants)",
            "Additional fees for information:",
            "₹2 per page (A4/A3 size)",
            "₹50 per diskette/floppy",
            "₹100 per sample or model",
            "Actual cost for inspection of records",
            "No fee for first appeal",
            "₹50 fee for second appeal to State Information Commission",
          ],
          mr: [
            "अर्ज शुल्क: १० रुपये (गरीबी रेषेखालील अर्जदारांसाठी ५ रुपये)",
            "माहितीसाठी अतिरिक्त शुल्क:",
            "प्रति पृष्ठ २ रुपये (A4/A3 आकार)",
            "प्रति डिस्केट/फ्लॉपी ५० रुपये",
            "प्रति नमुना किंवा मॉडेल १०० रुपये",
            "नोंदी तपासण्यासाठी वास्तविक खर्च",
            "प्रथम अपीलसाठी शुल्क नाही",
            "राज्य माहिती आयोगाकडे दुसऱ्या अपीलासाठी ५० रुपये शुल्क",
          ],
        },
      },
    },
    appealsProcess: {
      title: {
        en: "Appeals Process",
        mr: "अपील प्रक्रिया",
      },
      points: {
        en: [
          "First appeal to First Appellate Authority within 30 days of rejection/no response",
          "Second appeal to State Information Commission within 90 days of FAA order",
          "No fee for first appeal, ₹50 fee for second appeal",
        ],
        mr: [
          "नकार/प्रतिसाद न मिळाल्यास 30 दिवसांत प्रथम अपील प्राधिकरणाकडे प्रथम अपील",
          "FAA च्या आदेशानंतर 90 दिवसांत राज्य माहिती आयोगाकडे दुसरी अपील",
          "प्रथम अपीलसाठी शुल्क नाही, दुसऱ्या अपीलासाठी ५० रुपये शुल्क",
        ],
      },
    },
    onlinePortal: {
      title: {
        en: "Online RTI Portal",
        mr: "ऑनलाइन माहिती अधिकार पोर्टल",
      },
      description: {
        en: "You can now file RTI applications online through the Maharashtra Government RTI Portal.",
        mr: "आता तुम्ही महाराष्ट्र सरकारच्या माहिती अधिकार पोर्टलद्वारे ऑनलाइन RTI अर्ज दाखल करू शकता.",
      },
      buttonText: {
        en: "Visit Online RTI Portal",
        mr: "ऑनलाइन RTI पोर्टल भेट द्या",
      },
      link: "https://rti.maharashtra.gov.in",
    },
  };

  const getText = (item) => {
    if (Array.isArray(item)) {
      return item[language] || item.en;
    }
    if (typeof item === "object" && item !== null) {
      return item[language] || item.en || item;
    }
    return item;
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            {getText(content.title)}
          </h1>
          <div className="border-b-2 border-blue-100 w-20 mb-6"></div>
        </motion.div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4 flex items-center">
            <FaUserTie className="mr-2" /> {getText(content.pioSection.title)}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="text-lg font-medium text-blue-800 mb-2">
                {getText(content.pioSection.designatedPio.title)}
              </h3>

              <p className="text-gray-700 mt-2">
                {getText(content.pioSection.designatedPio.name)}
              </p>

              <div className="mt-4">
                <h4 className="font-medium text-gray-800">
                  {getText(content.pioSection.designatedPio.contact)}
                </h4>
                <p className="text-gray-700">
                  {getText(content.pioSection.designatedPio.phone)}
                </p>
                <p className="text-gray-700">
                  {getText(content.pioSection.designatedPio.email)}
                </p>
                <p className="text-gray-700">
                  {getText(content.pioSection.designatedPio.address)}
                </p>
              </div>
            </div>

            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="text-lg font-medium text-green-800 mb-2">
                {getText(content.pioSection.appellateAuthority.title)}
              </h3>

              <p className="text-gray-700 mt-2">
                {getText(content.pioSection.appellateAuthority.name)}
              </p>

              <div className="mt-4">
                <h4 className="font-medium text-gray-800">
                  {getText(content.pioSection.designatedPio.contact)}
                </h4>
                <p className="text-gray-700">
                  {getText(content.pioSection.designatedPio.phone).replace(
                    "2222222",
                    "2222233"
                  )}
                </p>
                <p className="text-gray-700">
                  {getText(content.pioSection.designatedPio.email).replace(
                    "adpo",
                    "dpo"
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4 flex items-center">
            <FaFileAlt className="mr-2" />{" "}
            {getText(content.filingProcess.title)}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            {content.filingProcess.steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white border border-blue-100 rounded-lg p-4 hover:shadow-md transition"
              >
                <div className="flex items-center mb-3">
                  <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-medium text-blue-700">
                    {getText(step.title)}
                  </h3>
                </div>
                <p className="text-gray-700">{getText(step.description)}</p>
              </motion.div>
            ))}
          </div>

          <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
            <h3 className="text-lg font-medium text-yellow-800 mb-2 flex items-center">
              <FaMoneyBillWave className="mr-2" />{" "}
              {getText(content.filingProcess.feeStructure.title)}
            </h3>
            <ul className="list-disc pl-5 space-y-1 text-gray-700">
              {getText(content.filingProcess.feeStructure.points).map(
                (point, index) => (
                  <li key={index}>{point}</li>
                )
              )}
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-blue-700 mb-4">
              {getText(content.appealsProcess.title)}
            </h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              {getText(content.appealsProcess.points).map((point, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {point}
                </motion.li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-blue-700 mb-4">
              {getText(content.onlinePortal.title)}
            </h2>
            <p className="text-gray-700 mb-4">
              {getText(content.onlinePortal.description)}
            </p>
            <a
              href={content.onlinePortal.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              {getText(content.onlinePortal.buttonText)}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RTIPortal;
