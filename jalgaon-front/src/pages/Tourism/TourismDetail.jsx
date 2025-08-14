// TourismDetail.jsx
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import {
  FaArrowLeft,
  FaCalendarAlt,
  FaUsers,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { useLanguage } from "../../contexts/LanguageContext";
import { changdev, patnadevi, girnadam } from "../../assets";

const TourismDetail = () => {
  const { slug } = useParams();
  const { language } = useLanguage();

  const tourismData = [
    {
      slug: "changdev-maharaj-temple",
      title: {
        en: "Changdev Maharaj Temple",
        mr: "चांगदेव महाराज मंदिर",
      },
      description: {
        en: "The Changdev Maharaj Temple is a 14th-century temple dedicated to the saint Changdev Maharaj, located in the heart of Jalgaon. This architectural marvel showcases the Hemadpanthi style of construction and attracts devotees and history enthusiasts alike.",
        mr: "चांगदेव महाराज मंदिर हे 14व्या शतकातील संत चांगदेव महाराज यांना समर्पित मंदिर आहे, जे जळगावच्या मध्यभागी आहे. हे वास्तुशिल्पाचे आश्चर्य हेमाडपंथी शैलीत बांधलेले आहे आणि भक्त आणि इतिहासाचे छंद असणाऱ्यांना आकर्षित करते.",
      },
      content: {
        en: [
          "The temple is known for its intricate carvings and spiritual significance",
          "Annual fair attracts over 50,000 devotees during Kartik month",
          "Recently renovated with ₹2.5 crore funding from DPC Jalgaon",
          "Features unique stone architecture from the Yadava period",
          "Open daily from 6 AM to 8 PM, no entry fee",
        ],
        mr: [
          "मंदिर त्याच्या गुंतागुंतीच्या कोरीवकामासाठी आणि आध्यात्मिक महत्त्वासाठी ओळखले जाते",
          "कार्तिक महिन्यात वार्षिक यात्रेला 50,000 हून अधिक भक्त येतात",
          "जिल्हा नियोजन समिती जळगावच्या 2.5 कोटी रुपयांच्या निधीतून अलीकडेच पुनर्निर्मित",
          "यादव कालखंडातील विशिष्ट दगडी वास्तुकला वैशिष्ट्ये",
          "दररोज सकाळी 6 ते रात्री 8 पर्यंत खुले, प्रवेश शुल्क नाही",
        ],
      },
      image: changdev,
      type: "religious",
      stats: {
        visitors: "250,000+",
        established: "14th Century",
        location: "Jalgaon City Center",
        area: "2.5 acres",
      },
      development: {
        budget: "₹2.5 Crore",
        projects: {
          en: [
            "Parking facility expansion",
            "Visitor center construction",
            "Illumination project",
            "Sanitation facilities upgrade",
          ],
          mr: [
            "पार्किंग सुविधा विस्तार",
            "भेट देणाऱ्यांच्या केंद्राचे बांधकाम",
            "प्रकाशयोजना",
            "स्वच्छता सुविधा सुधारणा",
          ],
        },
      },
    },
    {
      slug: "patan-devi-temple",
      title: {
        en: "Patan Devi Temple",
        mr: "पाटण देवी मंदिर",
      },
      description: {
        en: "Patan Devi Temple is one of the 51 Shakti Peethas in India, making it a highly significant pilgrimage site. The temple is believed to be where the right thigh of Goddess Sati fell and is revered for its powerful spiritual energy.",
        mr: "पाटण देवी मंदिर हे भारतातील 51 शक्ती पीठांपैकी एक आहे, जे त्याला एक अत्यंत महत्त्वाचे तीर्थस्थान बनवते. असे मानले जाते की देवी सतीची उजवी मांडी येथे पडली होती आणि ते त्याच्या शक्तिशाली आध्यात्मिक उर्जेसाठी पूज्यतेचे आहे.",
      },
      content: {
        en: [
          "One of the most powerful Shakti Peethas in Maharashtra",
          "Main temple complex covers 3 acres with multiple shrines",
          "Navratri festival attracts over 1 lakh devotees annually",
          "Recently developed tourist amenities with ₹1.8 crore funding",
          "Open from 5 AM to 9 PM, special aarti at sunrise and sunset",
        ],
        mr: [
          "महाराष्ट्रातील सर्वात शक्तिशाली शक्ती पीठांपैकी एक",
          "मुख्य मंदिर संकुल 3 एकरमध्ये पसरलेले आहे ज्यामध्ये अनेक देवालये आहेत",
          "नवरात्री उत्सव दरवर्षी 1 लाखाहून अधिक भक्तांना आकर्षित करतो",
          "1.8 कोटी रुपयांच्या निधीतून अलीकडेच पर्यटक सुविधा विकसित केल्या",
          "सकाळी 5 ते रात्री 9 पर्यंत खुले, सूर्योदय आणि सूर्यास्त येथे विशेष आरती",
        ],
      },
      image: patnadevi,
      type: "religious",
      stats: {
        visitors: "500,000+",
        established: "Ancient",
        location: "Patan, 25km from Jalgaon",
        area: "3 acres",
      },
      development: {
        budget: "₹1.8 Crore",
        projects: {
          en: [
            "Pilgrim accommodation facilities",
            "Road widening and approach road",
            "Drinking water project",
            "Temple illumination system",
          ],
          mr: [
            "यात्रेकरूंसाठी निवास सुविधा",
            "रस्त्याची रुंदीकरण आणि प्रवेश मार्ग",
            "पिण्याच्या पाण्याचा प्रकल्प",
            "मंदिर प्रकाश योजना",
          ],
        },
      },
    },
    {
      slug: "girna-river-dam",
      title: {
        en: "Girna River & Dam",
        mr: "गिरणा नदी आणि धरण",
      },
      description: {
        en: "The Girna River Dam is a picturesque location offering breathtaking views of the Sahyadri ranges. The dam provides irrigation to the region and has become a popular picnic spot with well-developed gardens and boating facilities.",
        mr: "गिरणा नदी धरण हे सह्याद्री पर्वतरांगेचे मनोहर दृश्य देणारे एक नयनरम्य ठिकाण आहे. धरण प्रदेशाला सिंचन पुरवते आणि चांगली विकसित उद्याने आणि बोटिंग सुविधांसह एक लोकप्रिय पिकनिक स्पॉट बनले आहे.",
      },
      content: {
        en: [
          "Main dam constructed in 1969, 56 meters high",
          "Irrigates over 50,000 hectares of agricultural land",
          "Recently developed as tourism spot with ₹3.2 crore funding",
          "Boating facilities available from November to June",
          "Beautiful gardens and sunset viewpoints developed",
        ],
        mr: [
          "मुख्य धरण 1969 मध्ये बांधले गेले, 56 मीटर उंच",
          "50,000 हेक्टरपेक्षा जास्त शेती जमीन सिंचन करते",
          "3.2 कोटी रुपयांच्या निधीतून अलीकडेच पर्यटन स्थळ म्हणून विकसित",
          "नोव्हेंबर ते जून दरम्यान बोटिंग सुविधा उपलब्ध",
          "सुंदर उद्याने आणि सूर्यास्ताचे दृश्य बिंदू विकसित केले",
        ],
      },
      image: girnadam,
      type: "nature",
      stats: {
        visitors: "150,000+",
        established: "1969",
        location: "Girna, 40km from Jalgaon",
        area: "120 hectares",
      },
      development: {
        budget: "₹3.2 Crore",
        projects: {
          en: [
            "Tourist viewpoint construction",
            "Boating facility development",
            "Landscaping and gardens",
            "Safety railings and signage",
          ],
          mr: [
            "पर्यटक दृश्य बिंदू बांधकाम",
            "बोटिंग सुविधा विकास",
            "लँडस्केपिंग आणि उद्याने",
            "सुरक्षा रेलिंग आणि साइनबोर्ड",
          ],
        },
      },
    },
  ];

  const spot = tourismData.find((item) => item.slug === slug);
  const getText = (item) => {
    if (Array.isArray(item)) {
      return item[language] || item.en;
    }
    if (typeof item === "object" && item !== null) {
      return item[language] || item.en || item;
    }
    return item;
  };

  if (!spot) {
    return (
      <div className="max-w-6xl mx-auto py-8 px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-2xl font-bold text-gray-800">
          {language === "en"
            ? "Tourism spot not found"
            : "पर्यटन स्थळ सापडले नाही"}
        </h1>
        <Link
          to="/tourism"
          className="mt-4 inline-flex items-center text-blue-600"
        >
          <FaArrowLeft className="mr-2" />
          {language === "en" ? "Back to Tourism" : "पर्यटन पृष्ठावर परत"}
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Link
          to="/tourism"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6"
        >
          <FaArrowLeft className="mr-2" />
          {language === "en" ? "Back to Tourism" : "पर्यटन पृष्ठावर परत"}
        </Link>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="h-64 md:h-96 overflow-hidden">
            <img
              src={spot.image}
              alt={getText(spot.title)}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="p-6 md:p-8">
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-4">
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium">
                {spot.type === "religious"
                  ? language === "en"
                    ? "Religious"
                    : "धार्मिक"
                  : language === "en"
                  ? "Nature"
                  : "निसर्ग"}
              </span>
              <span className="flex items-center">
                <FaUsers className="mr-1" />
                {language === "en" ? "Visitors:" : "पर्यटक:"}{" "}
                {spot.stats.visitors}
              </span>
              <span className="flex items-center">
                <FaCalendarAlt className="mr-1" />
                {language === "en" ? "Established:" : "स्थापना:"}{" "}
                {spot.stats.established}
              </span>
              <span className="flex items-center">
                <FaMapMarkerAlt className="mr-1" />
                {spot.stats.location}
              </span>
            </div>

            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              {getText(spot.title)}
            </h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="prose max-w-none text-gray-700 mb-8"
            >
              <p className="text-lg mb-6">{getText(spot.description)}</p>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {language === "en" ? "Key Features" : "मुख्य वैशिष्ट्ये"}
              </h3>
              <ul className="list-disc pl-5 space-y-2 mb-6">
                {getText(spot.content).map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </motion.div>

            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-blue-800 mb-4">
                {language === "en" ? "Development Initiatives" : "विकास उपक्रम"}
              </h3>

              <div className="mb-4">
                <h4 className="font-medium text-gray-800 mb-2">
                  {language === "en"
                    ? "Recent Investments"
                    : "अलीकडील गुंतवणूक"}
                </h4>
                <p className="text-blue-700 font-medium">
                  {language === "en" ? "Budget:" : "अर्थसंकल्प:"}{" "}
                  {spot.development.budget}
                </p>
              </div>

              <h4 className="font-medium text-gray-800 mb-2">
                {language === "en" ? "Ongoing Projects" : "चालू प्रकल्प"}
              </h4>
              <ul className="list-disc pl-5 space-y-1">
                {getText(spot.development.projects).map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default TourismDetail;
