import { ArrowRight } from "lucide-react";
import { dpc } from "../../assets";
import { useLanguage } from "../../contexts/LanguageContext";

const AboutDPC = () => {
  const { language } = useLanguage();

  // Bilingual content
  const content = {
    title: {
      en: "About District Planning Committee",
      mr: "जिल्हा नियोजन समिती बद्दल",
    },
    image: dpc,
    description: {
      en: [
        "The District Planning Committee (DPC) is a constitutional body established under Article 243ZD of the Constitution of India and the Maharashtra District Planning Committee Act, 1998.",
        "The primary objective of the DPC is to consolidate the plans prepared by Panchayats and Municipalities in the district and to prepare a draft development plan for the district as a whole.",
        "The committee plays a crucial role in decentralized planning and ensures balanced development of the district by coordinating between various departments and local bodies.",
      ],
      mr: [
        "जिल्हा नियोजन समिती (DPC) ही भारतीय राज्यघटनेच्या कलम 243ZD आणि महाराष्ट्र जिल्हा नियोजन समिती कायदा, 1998 अंतर्गत स्थापन केलेली एक घटनात्मक संस्था आहे.",
        "DPC चे प्राथमिक उद्दिष्ट जिल्ह्यातील पंचायत आणि नगरपालिकांनी तयार केलेली योजना एकत्रित करणे आणि संपूर्ण जिल्ह्यासाठी विकास योजनेचा मसुदा तयार करणे हे आहे.",
        "समिती विकेंद्रीकृत नियोजनात महत्त्वपूर्ण भूमिका बजावते आणि विविध विभाग आणि स्थानिक संस्थांमधील समन्वयाद्वारे जिल्ह्याचा संतुलित विकास सुनिश्चित करते.",
      ],
    },
    cta: {
      text: {
        en: "Learn More",
        mr: "अधिक जाणून घ्या",
      },
      link: "#about",
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
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <img
              src={content.image}
              alt={getText(content.title)}
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              {getText(content.title)}
            </h2>
            {getText(content.description).map((paragraph, index) => (
              <p key={index} className="text-lg text-gray-700 mb-4">
                {paragraph}
              </p>
            ))}
            <a
              href={content.cta.link}
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold hover:bg-blue-700 transition rounded-lg"
            >
              {getText(content.cta.text)}
              <ArrowRight size={20} className="ml-2" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutDPC;
