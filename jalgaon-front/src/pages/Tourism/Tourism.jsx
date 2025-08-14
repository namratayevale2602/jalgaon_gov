import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useLanguage } from "../../contexts/LanguageContext";
import TourismGallery from "./TourismGallery";
import {
  changdev,
  patnadevi,
  girnadam,
  gandhifoundation,
  waghurdam,
  gandhigarden,
  mehrunlake,
  mall,
  bhauncheudyan,
} from "../../assets";

const TourismCarousel = ({ spots }) => {
  const { language } = useLanguage();

  // Helper function to get text based on current language
  const getText = (item) => {
    if (typeof item === "object" && item !== null && language in item) {
      return item[language];
    }
    return item;
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [cardsToShow, setCardsToShow] = useState(3);

  const getCardsToShow = () => {
    if (window.innerWidth >= 1280) return 3;
    if (window.innerWidth >= 768) return 2;
    return 1;
  };

  useEffect(() => {
    setCardsToShow(getCardsToShow());
    const handleResize = () => {
      setCardsToShow(getCardsToShow());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setDirection(1);
        setCurrentIndex(
          (prev) => (prev + 1) % (spots.length - cardsToShow + 1)
        );
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, spots.length, cardsToShow]);

  const goToPrev = () => {
    setIsAutoPlaying(false);
    setDirection(-1);
    setCurrentIndex((prev) =>
      prev === 0 ? spots.length - cardsToShow : prev - 1
    );
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % (spots.length - cardsToShow + 1));
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToIndex = (index) => {
    setIsAutoPlaying(false);
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction > 0 ? -100 : 100,
      opacity: 0,
    }),
  };

  return (
    <div className="relative py-8">
      <button
        onClick={goToPrev}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white p-3 rounded-full shadow-md hover:bg-teal-100 transition-colors -ml-4"
        aria-label={language === "en" ? "Previous spots" : "मागील स्थळे"}
      >
        <FaChevronLeft className="text-teal-600 text-xl" />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white p-3 rounded-full shadow-md hover:bg-teal-100 transition-colors -mr-4"
        aria-label={language === "en" ? "Next spots" : "पुढील स्थळे"}
      >
        <FaChevronRight className="text-teal-600 text-xl" />
      </button>

      <div className="relative h-[500px] md:h-[450px] overflow-hidden">
        <AnimatePresence custom={direction} initial={false}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="absolute inset-0 flex gap-6 px-2"
          >
            {spots
              .slice(currentIndex, currentIndex + cardsToShow)
              .map((spot) => (
                <motion.div
                  key={spot.id}
                  className="bg-white p-6 rounded-xl shadow-md w-full h-full flex flex-col"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    to={`/tourism/${spot.slug}`}
                    className="flex flex-col h-full"
                  >
                    <div className="h-48 overflow-hidden rounded-lg mb-4">
                      <img
                        src={spot.image}
                        alt={getText(spot.title)}
                        className="w-full h-full object-cover transition duration-300 hover:scale-105"
                      />
                    </div>
                    <div className="flex-grow">
                      <span className="inline-block px-3 py-1 text-xs font-semibold text-blue-800 bg-blue-100 rounded-full mb-2">
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
                      <h3 className="text-xl font-bold text-gray-800 mb-2">
                        {getText(spot.title)}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {getText(spot.excerpt)}
                      </p>
                    </div>
                    <div className="flex justify-between text-sm text-gray-500 mt-auto">
                      <span>
                        {language === "en" ? "Visitors:" : "पर्यटक:"}{" "}
                        {spot.stats.visitors}
                      </span>
                      <span>
                        {language === "en" ? "Established:" : "स्थापना:"}{" "}
                        {spot.stats.established}
                      </span>
                    </div>
                  </Link>
                </motion.div>
              ))}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex justify-center mt-8 space-x-2">
        {Array.from({ length: spots.length - cardsToShow + 1 }).map(
          (_, index) => (
            <button
              key={index}
              onClick={() => goToIndex(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentIndex ? "bg-teal-600 w-6" : "bg-gray-300"
              }`}
              aria-label={
                language === "en"
                  ? `Go to spot ${index + 1}`
                  : `स्थळ ${index + 1} वर जा`
              }
            />
          )
        )}
      </div>
    </div>
  );
};

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
        en: "The Changdev Maharaj Temple is a 14th-century temple dedicated to the saint Changdev Maharaj.",
        mr: "चांगदेव महाराज मंदिर हे १४ व्या शतकातील संत चांगदेव महाराजांना समर्पित मंदिर आहे.",
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
        en: "Patan Devi Temple is one of the 51 Shakti Peethas in India, making it a highly significant pilgrimage site.",
        mr: "पाटण देवी मंदिर हे भारतातील ५१ शक्तीपीठांपैकी एक आहे, ज्यामुळे ते एक अत्यंत महत्त्वाचे तीर्थस्थळ बनते.",
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
        en: "The Girna River Dam is a picturesque location offering breathtaking views of the Sahyadri ranges.",
        mr: "गिरणा नदी धरण हे सह्याद्रीच्या रांगांचे चित्तथरारक दृश्ये देणारे एक नयनरम्य ठिकाण आहे.",
      },
      image: girnadam,
      type: "nature",
      stats: {
        visitors: "100,000+",
        established: "1969",
      },
    },
    {
      id: 4,
      slug: "mahatma-gandhi-garden",
      title: {
        en: "Mahatma Gandhi Garden",
        mr: "महात्मा गांधी उद्यान",
      },
      excerpt: {
        en: "A beautifully maintained garden in the heart of Jalgaon city with musical fountain and walking tracks.",
        mr: "जळगाव शहराच्या मध्यभागी असलेले सुंदर संगीतमय फवारा आणि चालण्याच्या मार्गांसह उद्यान.",
      },
      image: gandhigarden,
      type: "nature",
      stats: {
        visitors: "120,000+",
        established: "1985",
      },
    },
    {
      id: 5,
      slug: "gandhi-research-foundation",
      title: {
        en: "Gandhi Research Foundation",
        mr: "गांधी संशोधन प्रतिष्ठान",
      },
      excerpt: {
        en: "Premier research center dedicated to Gandhian studies with a museum and library.",
        mr: "गांधीवादी अभ्यासासाठी समर्पित संग्रहालय आणि ग्रंथालयासह प्रमुख संशोधन केंद्र.",
      },
      image: gandhifoundation,
      type: "educational",
      stats: {
        visitors: "50,000+",
        established: "1984",
      },
    },
    {
      id: 6,
      slug: "waghur-dam",
      title: {
        en: "Waghur Dam",
        mr: "वाघूर धरण",
      },
      excerpt: {
        en: "Scenic dam project on Waghur River providing irrigation and drinking water to the region.",
        mr: "वाघूर नदीवरील नयनरम्य धरण प्रकल्प जे प्रदेशाला सिंचन आणि पिण्याचे पाणी पुरवते.",
      },
      image: waghurdam,
      type: "nature",
      stats: {
        visitors: "80,000+",
        established: "2010",
      },
    },
    {
      id: 7,
      slug: "mehrun-lake",
      title: {
        en: "Mehrun Lake",
        mr: "मेहरून तलाव",
      },
      excerpt: {
        en: "A serene freshwater lake near Jalgaon, popular for boating and bird watching with beautiful sunset views.",
        mr: "जळगावजवळील एक शांत गोड्या पाण्याचे तलाव, बोटिंग आणि पक्षी निरीक्षणासाठी लोकप्रिय आणि सुंदर सूर्यास्ताचे दृश्य.",
      },
      image: mehrunlake,
      type: "nature",
      stats: {
        visitors: "75,000+",
        established: "1980",
      },
    },
    {
      id: 8,
      slug: "bhaunche-udyan",
      title: {
        en: "JCMC Bhaunche Udyan",
        mr: "जेसीएमसी भौंचे उद्यान",
      },
      excerpt: {
        en: "Municipal garden with unique hanging bridges (Bhaunche), children's play area and walking tracks.",
        mr: "म्युनिसिपल गार्डन अनोख्या हँगिंग ब्रिजेस (भौंचे), मुलांचे खेळण्याचे क्षेत्र आणि चालण्याच्या मार्गांसह.",
      },
      image: bhauncheudyan,
      type: "nature",
      stats: {
        visitors: "90,000+",
        established: "2015",
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
        <TourismCarousel spots={tourismSpots} />
      </motion.div>
      <TourismGallery />
    </div>
  );
};

export default TourismMain;
