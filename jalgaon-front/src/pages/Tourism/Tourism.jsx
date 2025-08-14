// TourismMain.jsx (Listing Page)
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useLanguage } from "../../contexts/LanguageContext";
import { changdev, patnadevi, girnadam } from "../../assets";

const TourismMain = () => {
  const { language } = useLanguage();

  const tourismSpots = [
    {
      id: 1,
      slug: "changdev-maharaj-temple",
      title: {
        en: "Changdev Maharaj Temple",
        mr: "चांगदेव महाराज मंदिर",
      },
      excerpt: {
        en: "14th century temple dedicated to saint Changdev Maharaj",
        mr: "14व्या शतकातील संत चांगदेव महाराज यांना समर्पित मंदिर",
      },
      image: changdev,
      type: "religious",
      stats: {
        visitors: "250,000+",
        established: "14th Century",
      },
    },
    {
      id: 2,
      slug: "patan-devi-temple",
      title: {
        en: "Patan Devi Temple",
        mr: "पाटण देवी मंदिर",
      },
      excerpt: {
        en: "One of the 51 Shakti Peethas with great religious significance",
        mr: "51 शक्ती पीठांपैकी एक महत्त्वाचे धार्मिक स्थान",
      },
      image: patnadevi,
      type: "religious",
      stats: {
        visitors: "180,000+",
        established: "Ancient",
      },
    },
    {
      id: 3,
      slug: "girna-river-dam",
      title: {
        en: "Girna River & Dam",
        mr: "गिरणा नदी आणि धरण",
      },
      excerpt: {
        en: "Scenic river with beautiful dam and surrounding landscapes",
        mr: "सुंदर धरण आणि आजूबाजूच्या भूदृश्यांसह नयनरम्य नदी",
      },
      image: girnadam,
      type: "nature",
      stats: {
        visitors: "100,000+",
        established: "1969",
      },
    },
  ];

  const content = {
    title: {
      en: "Tourism Spots in Jalgaon",
      mr: "जळगावमधील पर्यटन स्थळे",
    },
    viewDetails: {
      en: "View Details",
      mr: "तपशील पहा",
    },
  };

  const getText = (item) => {
    if (typeof item === "object" && item !== null) {
      return item[language] || item.en || item;
    }
    return item;
  };

  return (
    <div className="max-w-6xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
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
              {getText(content.title)}
            </h1>
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* <h1 className="text-3xl font-bold text-gray-800 mb-2">
          {getText(content.title)}
        </h1> */}
        {/* <div className="border-b-2 border-blue-100 w-20 mb-8"></div> */}
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {tourismSpots.map((spot, index) => (
          <motion.div
            key={spot.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <Link to={`/tourism/${spot.slug}`}>
              <div className="h-48 overflow-hidden">
                <img
                  src={spot.image}
                  alt={getText(spot.title)}
                  className="w-full h-full object-cover transition duration-300 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 text-xs font-semibold text-blue-800 bg-blue-100 rounded-full mb-2">
                  {spot.type === "religious"
                    ? language === "en"
                      ? "Religious"
                      : "धार्मिक"
                    : language === "en"
                    ? "Nature"
                    : "निसर्ग"}
                </span>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {getText(spot.title)}
                </h3>
                <p className="text-gray-600 mb-4">{getText(spot.excerpt)}</p>
                <div className="flex justify-between text-sm text-gray-500">
                  <span>
                    {language === "en" ? "Visitors:" : "पर्यटक:"}{" "}
                    {spot.stats.visitors}
                  </span>
                  <span>
                    {language === "en" ? "Established:" : "स्थापना:"}{" "}
                    {spot.stats.established}
                  </span>
                </div>
                <button className="mt-4 w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                  {getText(content.viewDetails)}
                </button>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TourismMain;
