// TourismDetail.jsx (Updated Detail Page)
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import {
  FaArrowLeft,
  FaCalendarAlt,
  FaUsers,
  FaMapMarkerAlt,
  FaShoppingCart,
  FaTree,
  FaWater
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { useLanguage } from "../../contexts/LanguageContext";
import { 
  changdev, 
  patnadevi, 
  girnadam,
  gandhifoundation,
  waghurdam,
  gandhigarden,
   mehrunlake,
  mall,
  bhauncheudyan
} from "../../assets";

const TourismDetail = () => {
  const { slug } = useParams();
  const { language } = useLanguage();

  const tourismData = [
    // Previous 6 spots data remains the same...
    // Add the new spots data below:
    {
      slug: "mehrun-lake",
      title: {
        en: "Mehrun Lake",
        mr: "मेहरून तलाव",
      },
      description: {
        en: "Mehrun Lake is a serene freshwater lake located about 12km from Jalgaon city, known for its peaceful surroundings and beautiful sunset views. The lake has been developed as a recreational spot with boating facilities and walking paths around its perimeter.",
        mr: "मेहरून तलाव हे जळगाव शहरापासून सुमारे 12 किमी अंतरावर असलेले एक शांत गोड्या पाण्याचे तलाव आहे, जे त्याच्या शांत वातावरणासाठी आणि सुंदर सूर्यास्ताच्या दृश्यांसाठी ओळखले जाते. तलावाच्या परिघाभोवती बोटिंग सुविधा आणि चालण्याचे मार्ग असलेले हे एक मनोरंजन स्थळ म्हणून विकसित केले गेले आहे.",
      },
      content: {
        en: [
          "Spread over 25 hectares with maximum depth of 12 meters",
          "Pedal boats and rowing boats available for visitors",
          "1.8 km walking track around the lake with benches",
          "Best time to visit is between October to March",
          "Entry fee: ₹20 for adults, ₹10 for children",
        ],
        mr: [
          "25 हेक्टरमध्ये पसरलेले जास्तीत जास्त 12 मीटर खोली",
          "भेट देणाऱ्यांसाठी पेडल बोट आणि रोइंग बोट उपलब्ध",
          "तलावाभोवती 1.8 किमी चालण्याचा मार्ग बेंचसह",
          "ऑक्टोबर ते मार्च दरम्यान भेट देण्यासाठी सर्वोत्तम वेळ",
          "प्रवेश शुल्क: प्रौढांसाठी ₹20, मुलांसाठी ₹10",
        ],
      },
      image: mehrunlake,
      type: "nature",
      stats: {
        visitors: "75,000+",
        established: "1980",
        location: "Mehrun, 12km from Jalgaon",
        area: "25 hectares",
      },
      development: {
        budget: "₹1.5 Crore",
        projects: {
          en: [
            "Boating facility development",
            "Lakefront beautification",
            "Walking track construction",
            "Safety railings installation",
          ],
          mr: [
            "बोटिंग सुविधा विकास",
            "लेकफ्रंट सुशोभीकरण",
            "चालण्याच्या मार्गाचे बांधकाम",
            "सुरक्षा रेलिंग स्थापना",
          ],
        },
      },
    },
    {
      slug: "khandesh-central-mall",
      title: {
        en: "Khandesh Central Mall",
        mr: "खान्देश सेंट्रल मॉल",
      },
      description: {
        en: "Khandesh Central Mall is Jalgaon's first and largest shopping mall, offering a complete retail and entertainment experience. Spread over 200,000 sq.ft., the mall houses national and international brands, a multiplex cinema, food court, and gaming zone.",
        mr: "खान्देश सेंट्रल मॉल हे जळगावचे पहिले आणि सर्वात मोठे शॉपिंग मॉल आहे, जे संपूर्ण किरकोळ आणि मनोरंजनाचा अनुभव देतो. 200,000 चौ.फूटमध्ये पसरलेल्या या मॉलमध्ये राष्ट्रीय आणि आंतरराष्ट्रीय ब्रँड्स, मल्टीप्लेक्स सिनेमा, फूड कोर्ट आणि गेमिंग झोन आहे.",
      },
      content: {
        en: [
          "First multiplex cinema in North Maharashtra with 4 screens",
          "Over 100 retail stores including major brands",
          "Food court with 15+ dining options",
          "Ample parking space for 500+ vehicles",
          "Open 10 AM to 10 PM all days including holidays",
        ],
        mr: [
          "उत्तर महाराष्ट्रातील पहिले मल्टीप्लेक्स सिनेमा 4 स्क्रीनसह",
          "प्रमुख ब्रँड्ससह 100 पेक्षा जास्त किरकोळ दुकाने",
          "15+ डायनिंग पर्यायांसह फूड कोर्ट",
          "500+ वाहनांसाठी पुरेशी पार्किंग जागा",
          "सुट्ट्यांसह सर्व दिवस सकाळी 10 ते रात्री 10 पर्यंत खुले",
        ],
      },
      image: mall,
      type: "commercial",
      stats: {
        visitors: "200,000+",
        established: "2018",
        location: "Jalgaon City Center",
        area: "200,000 sq.ft.",
      },
      development: {
        budget: "₹150 Crore",
        projects: {
          en: [
            "Expansion with additional retail space",
            "Parking automation system",
            "Food court renovation",
            "Entertainment zone upgrade",
          ],
          mr: [
            "अतिरिक्त किरकोळ जागेसह विस्तार",
            "पार्किंग ऑटोमेशन सिस्टम",
            "फूड कोर्ट नूतनीकरण",
            "मनोरंजन क्षेत्र सुधारणा",
          ],
        },
      },
    },
    {
      slug: "bhaunche-udyan",
      title: {
        en: "JCMC Bhaunche Udyan",
        mr: "जेसीएमसी भौंचे उद्यान",
      },
      description: {
        en: "Bhaunche Udyan (Hanging Garden) is a unique municipal garden developed by Jalgaon City Municipal Corporation featuring hanging bridges (Bhaunche) as its main attraction. The garden offers a perfect blend of nature and adventure for visitors of all ages.",
        mr: "भौंचे उद्यान (हँगिंग गार्डन) हे जळगाव सिटी म्युनिसिपल कॉर्पोरेशनद्वारे विकसित केलेले एक अनोखे म्युनिसिपल गार्डन आहे ज्यामध्ये हँगिंग ब्रिजेस (भौंचे) हे मुख्य आकर्षण आहे. उद्यान सर्व वयोगटातील भेट देणाऱ्यांसाठी निसर्ग आणि साहसाचे उत्तम मिश्रण देते.",
      },
      content: {
        en: [
          "Features 5 unique hanging bridges of different designs",
          "Children's play area with modern equipment",
          "1.2 km walking track through lush greenery",
          "Open gym equipment for fitness enthusiasts",
          "Open from 6 AM to 9 PM, entry free for all",
        ],
        mr: [
          "वेगवेगळ्या डिझाइनच्या 5 अनोख्या हँगिंग ब्रिजेस",
          "आधुनिक उपकरणांसह मुलांचे खेळण्याचे क्षेत्र",
          "हिरवळीतून 1.2 किमी चालण्याचा मार्ग",
          "फिटनेसचे छंद असणाऱ्यांसाठी ओपन जिम उपकरणे",
          "सकाळी 6 ते रात्री 9 पर्यंत खुले, सर्वांसाठी प्रवेश मोफत",
        ],
      },
      image: bhauncheudyan,
      type: "nature",
      stats: {
        visitors: "90,000+",
        established: "2015",
        location: "Near Jilha Peth, Jalgaon",
        area: "3.5 acres",
      },
      development: {
        budget: "₹2.8 Crore",
        projects: {
          en: [
            "New hanging bridge installations",
            "Play area modernization",
            "Landscaping improvements",
            "Lighting and security upgrades",
          ],
          mr: [
            "नवीन हँगिंग ब्रिज स्थापना",
            "खेळण्याच्या क्षेत्राचे आधुनिकीकरण",
            "लँडस्केपिंग सुधारणा",
            "प्रकाश आणि सुरक्षा सुधारणा",
          ],
        },
      },
    },
    // ... (include all previous 6 spots data here as well)
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
                  : spot.type === "nature"
                  ? language === "en"
                    ? "Nature"
                    : "निसर्ग"
                  : spot.type === "educational"
                  ? language === "en"
                    ? "Educational"
                    : "शैक्षणिक"
                  : language === "en"
                  ? "Commercial"
                  : "वाणिज्यिक"}
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
                {spot.type === "nature" ? (
                  <FaTree className="mr-1" />
                ) : spot.type === "commercial" ? (
                  <FaShoppingCart className="mr-1" />
                ) : spot.type === "religious" ? (
                  <FaMapMarkerAlt className="mr-1" />
                ) : (
                  <FaWater className="mr-1" />
                )}
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