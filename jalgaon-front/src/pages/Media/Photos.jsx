import { useState } from "react";
import { motion } from "framer-motion";
import { FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useLanguage } from "../../contexts/LanguageContext";
import { img1, img2, img3, img4, img5, img6, img7, img8 } from "../../assets";

const GalleryPage = () => {
  const { language } = useLanguage();
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Bilingual content
  const content = {
    title: {
      en: "Photo Gallery",
      mr: "फोटो गॅलरी",
    },
    description: {
      en: "Explore our collection of beautiful images from various categories.",
      mr: "विविध श्रेणींमधील आमच्या सुंदर प्रतिमांचा संग्रह पाहा.",
    },
    imageCounter: {
      en: "Image {current} of {total}",
      mr: "प्रतिमा {current} पैकी {total}",
    },
    sampleImages: [
      {
        id: 1,
        title: {
          en: "Nature Landscape",
          mr: "निसर्ग दृश्य",
        },
        description: {
          en: "Beautiful mountain view with sunset colors",
          mr: "सूर्यास्ताच्या रंगांसह सुंदर पर्वत दृश्य",
        },
        url: img1,
      },
      {
        id: 2,
        title: {
          en: "City Skyline",
          mr: "शहराचे दृश्य",
        },
        description: {
          en: "Modern city architecture at dusk",
          mr: "संध्याकाळी आधुनिक शहरी वास्तुकला",
        },
        url: img2,
      },
      {
        id: 3,
        title: {
          en: "Ocean Waves",
          mr: "समुद्राचे लाटा",
        },
        description: {
          en: "Crystal clear water and sandy beach",
          mr: "स्फटिकासारखे स्वच्छ पाणी आणि वाळूचे किनारे",
        },
        url: img3,
      },
      {
        id: 4,
        title: {
          en: "Wildlife",
          mr: "वन्यजीव",
        },
        description: {
          en: "Majestic elephant in the wild",
          mr: "जंगलातील भव्य हत्ती",
        },
        url: img4,
      },
      {
        id: 5,
        title: {
          en: "Mountain Trek",
          mr: "पर्वत ट्रेक",
        },
        description: {
          en: "Adventurous hiking trail in the mountains",
          mr: "पर्वतातील साहसी ट्रेक मार्ग",
        },
        url: img5,
      },
      {
        id: 6,
        title: {
          en: "Urban Art",
          mr: "शहरी कला",
        },
        description: {
          en: "Colorful street art in downtown",
          mr: "शहराच्या मध्यभागी रंगीबेरंगी रस्त्याची कला",
        },
        url: img6,
      },
      {
        id: 7,
        title: {
          en: "Desert Sunset",
          mr: "वाळवंटातील सूर्यास्त",
        },
        description: {
          en: "Golden hour in the sandy desert",
          mr: "वाळूच्या वाळवंटात सुवर्णकाळ",
        },
        url: img7,
      },
      {
        id: 8,
        title: {
          en: "Winter Wonderland",
          mr: "हिवाळी जादूचे जग",
        },
        description: {
          en: "Snow-covered trees and frozen lake",
          mr: "बर्फाने झाकलेली झाडे आणि गोठलेले तलाव",
        },
        url: img8,
      },
    ],
  };

  const getText = (item, isImage = false) => {
    if (isImage) {
      return {
        title: item.title[language] || item.title.en,
        description: item.description[language] || item.description.en,
      };
    }
    return item[language] || item.en;
  };

  const openImage = (image, index) => {
    setSelectedImage(image);
    setCurrentIndex(index);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  const navigate = (direction) => {
    let newIndex;
    if (direction === "prev") {
      newIndex =
        currentIndex === 0 ? content.sampleImages.length - 1 : currentIndex - 1;
    } else {
      newIndex =
        currentIndex === content.sampleImages.length - 1 ? 0 : currentIndex + 1;
    }
    setCurrentIndex(newIndex);
    setSelectedImage(content.sampleImages[newIndex]);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            {getText(content.title)}
          </h1>
          <div className="border-b-2 border-blue-100 w-20 mb-6"></div>
          <p className="text-gray-600 mb-8">{getText(content.description)}</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {content.sampleImages.map((image, index) => {
            const imageText = getText(image, true);
            return (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ scale: 1.03 }}
                className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer"
                onClick={() => openImage(image, index)}
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={image.url}
                    alt={imageText.title}
                    className="w-full h-full object-cover transition duration-300 hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-medium text-gray-800 mb-1">
                    {imageText.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {imageText.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Image Modal */}
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
            onClick={closeImage}
          >
            <div
              className="relative max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute -right-4 -top-4 bg-white rounded-full p-2 shadow-lg z-10 hover:bg-gray-200 transition"
                onClick={closeImage}
              >
                <FaTimes className="text-gray-800 text-xl" />
              </button>

              <div className="flex items-center justify-between absolute w-full top-1/2 transform -translate-y-1/2 z-10 px-4">
                <button
                  className="bg-white rounded-full p-3 shadow-lg hover:bg-gray-200 transition"
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate("prev");
                  }}
                >
                  <FaChevronLeft className="text-gray-800 text-xl" />
                </button>
                <button
                  className="bg-white rounded-full p-3 shadow-lg hover:bg-gray-200 transition"
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate("next");
                  }}
                >
                  <FaChevronRight className="text-gray-800 text-xl" />
                </button>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white rounded-lg overflow-hidden"
              >
                <div className="max-h-[80vh] overflow-hidden flex items-center justify-center">
                  <img
                    src={selectedImage.url}
                    alt={getText(selectedImage, true).title}
                    className="w-full h-full object-contain max-h-[80vh]"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    {getText(selectedImage, true).title}
                  </h3>
                  <p className="text-gray-600">
                    {getText(selectedImage, true).description}
                  </p>
                  <div className="mt-4 text-sm text-gray-500">
                    {getText(content.imageCounter)
                      .replace("{current}", currentIndex + 1)
                      .replace("{total}", content.sampleImages.length)}
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default GalleryPage;
