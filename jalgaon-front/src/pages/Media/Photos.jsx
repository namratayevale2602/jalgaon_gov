import { useState } from "react";
import { motion } from "framer-motion";
import { FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useLanguage } from "../../contexts/LanguageContext";
import {
  bhumipujan,
  conf1,
  conf10,
  conf11,
  conf12,
  conf13,
  conf14,
  conf15,
  conf16,
  conf17,
  conf18,
  conf2,
  conf3,
  conf4,
  conf5,
  conf6,
  conf7,
  conf8,
  conf9,
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  ladki1,
  ladki2,
  ladki3,
  ladki4,
  ladki5,
  meet1,
  meet10,
  meet2,
  meet3,
  meet4,
  meet5,
  meet6,
  meet7,
  meet8,
  meet9,
  meeting1,
  meeting2,
  meeting3,
  meeting4,
  meeting5,
  meeting6,
  meeting7,
  meeting8,
  meeting9,
  offc1,
  offc2,
  offc3,
  opening1,
  opening10,
  opening2,
  opening3,
  opening4,
  opening5,
  opening6,
  opening8,
  opening9,
  sitevisit1,
  sitevisit2,
  sitevisit3,
  sitevisit4,
  sitevisit5,
  sitevisit6,
  womenemp1,
  womenemp2,
  womenemp3,
  womenemp4,
} from "../../assets";

const GalleryPage = () => {
  const { language } = useLanguage();
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentCategory, setCurrentCategory] = useState(null);

  // Bilingual content
  const content = {
    title: {
      en: "Our Gallery",
      mr: "आमची गॅलरी",
    },
    description: {
      en: "Explore our collection of images from various events and programs.",
      mr: "विविध कार्यक्रम आणि कार्यक्रमांमधील आमच्या प्रतिमांचा संग्रह पाहा.",
    },
    imageCounter: {
      en: "Image {current} of {total}",
      mr: "प्रतिमा {current} पैकी {total}",
    },
    categories: [
      {
        id: "meetings",
        title: {
          en: "Meetings & Discussions",
          mr: "सभा आणि चर्चा",
        },
        description: {
          en: "Moments from our important meetings and strategy discussions",
          mr: "आमच्या महत्त्वाच्या सभा आणि धोरण चर्चेचे क्षण",
        },
        images: [
          {
            id: 1,
            title: {
              en: "Monthly Board Meeting",
              mr: "मासिक मंडळ सभा",
            },
            description: {
              en: "Discussion on development projects",
              mr: "विकास प्रकल्पांवर चर्चा",
            },
            url: meet1,
          },
          {
            id: 2,
            title: {
              en: "Team Meeting",
              mr: "संघ सभा",
            },
            description: {
              en: "Weekly coordination meeting",
              mr: "साप्ताहिक समन्वय सभा",
            },
            url: meet2,
          },
          {
            id: 3,
            title: {
              en: "Strategy Discussion",
              mr: "रणनीती चर्चा",
            },
            description: {
              en: "Planning for upcoming initiatives",
              mr: "आगामी उपक्रमांसाठी नियोजन",
            },
            url: meet3,
          },
          {
            id: 4,
            title: {
              en: "Annual Review Meeting",
              mr: "वार्षिक पुनरावलोकन सभा",
            },
            description: {
              en: "Review of yearly achievements",
              mr: "वार्षिक यशस्वीतेचे पुनरावलोकन",
            },
            url: meet4,
          },
          {
            id: 5,
            title: {
              en: "Project Planning",
              mr: "प्रकल्प नियोजन",
            },
            description: {
              en: "Discussion on new projects",
              mr: "नवीन प्रकल्पांवर चर्चा",
            },
            url: meet5,
          },
          {
            id: 6,
            title: {
              en: "Team Workshop",
              mr: "संघ कार्यशाळा",
            },
            description: {
              en: "Skill development session",
              mr: "कौशल्य विकास सत्र",
            },
            url: meet6,
          },
          {
            id: 7,
            title: {
              en: "Team Workshop",
              mr: "संघ कार्यशाळा",
            },
            description: {
              en: "Skill development session",
              mr: "कौशल्य विकास सत्र",
            },
            url: meet7,
          },
          {
            id: 8,
            title: {
              en: "Team Workshop",
              mr: "संघ कार्यशाळा",
            },
            description: {
              en: "Skill development session",
              mr: "कौशल्य विकास सत्र",
            },
            url: meet8,
          },
          {
            id: 9,
            title: {
              en: "Team Workshop",
              mr: "संघ कार्यशाळा",
            },
            description: {
              en: "Skill development session",
              mr: "कौशल्य विकास सत्र",
            },
            url: meet9,
          },
        ],
      },
      {
        id: "new_office",
        title: {
          en: "Office Inaugurations",
          mr: "कार्यालय उद्घाटन",
        },
        description: {
          en: "Celebrations of new beginnings and expansions",
          mr: "नवीन सुरुवात आणि विस्ताराचे उत्सव",
        },
        images: [
          {
            id: 1,
            title: {
              en: "Headquarters Inauguration",
              mr: "मुख्यालय उद्घाटन",
            },
            description: {
              en: "Opening of our main office",
              mr: "आमच्या मुख्य कार्यालयाचे उद्घाटन",
            },
            url: opening2,
          },

          {
            id: 2,
            title: {
              en: "Headquarters Inauguration",
              mr: "मुख्यालय उद्घाटन",
            },
            description: {
              en: "Opening of our main office",
              mr: "आमच्या मुख्य कार्यालयाचे उद्घाटन",
            },
            url: opening4,
          },
          {
            id: 3,
            title: {
              en: "Headquarters Inauguration",
              mr: "मुख्यालय उद्घाटन",
            },
            description: {
              en: "Opening of our main office",
              mr: "आमच्या मुख्य कार्यालयाचे उद्घाटन",
            },
            url: opening8,
          },
          {
            id: 4,
            title: {
              en: "Headquarters Inauguration",
              mr: "मुख्यालय उद्घाटन",
            },
            description: {
              en: "Opening of our main office",
              mr: "आमच्या मुख्य कार्यालयाचे उद्घाटन",
            },
            url: offc1,
          },
          {
            id: 5,
            title: {
              en: "Headquarters Inauguration",
              mr: "मुख्यालय उद्घाटन",
            },
            description: {
              en: "Opening of our main office",
              mr: "आमच्या मुख्य कार्यालयाचे उद्घाटन",
            },
            url: offc2,
          },
          {
            id: 6,
            title: {
              en: "Headquarters Inauguration",
              mr: "मुख्यालय उद्घाटन",
            },
            description: {
              en: "Opening of our main office",
              mr: "आमच्या मुख्य कार्यालयाचे उद्घाटन",
            },
            url: offc3,
          },
          {
            id: 6,
            title: {
              en: "Headquarters Inauguration",
              mr: "मुख्यालय उद्घाटन",
            },
            description: {
              en: "Opening of our main office",
              mr: "आमच्या मुख्य कार्यालयाचे उद्घाटन",
            },
            url: opening9,
          },
        ],
      },
      {
        id: "ladki_bahin",
        title: {
          en: "Ladki Bahin Yojana",
          mr: "लाडकी बहिन योजना",
        },
        description: {
          en: "Empowering sisters through education and opportunities",
          mr: "शिक्षण आणि संधींद्वारे बहिणींना सक्षम करणे",
        },
        images: [
          {
            id: 1,
            title: {
              en: "Scheme Launch Event",
              mr: "योजना सुरू करण्याचा कार्यक्रम",
            },
            description: {
              en: "Launch event for women empowerment scheme",
              mr: "महिला सक्षमीकरण योजनेचे उद्घाटन",
            },
            url: ladki1,
          },
          {
            id: 2,
            title: {
              en: "Beneficiary Interaction",
              mr: "लाभार्थी संवाद",
            },
            description: {
              en: "Meeting with scheme beneficiaries",
              mr: "योजना लाभार्थ्यांसोबत संवाद",
            },
            url: ladki2,
          },
          {
            id: 3,
            title: {
              en: "Award Distribution",
              mr: "पुरस्कार वितरण",
            },
            description: {
              en: "Recognizing outstanding participants",
              mr: "उत्कृष्ट सहभागींना सन्मान",
            },
            url: ladki3,
          },

          {
            id: 4,
            title: {
              en: "Award Distribution",
              mr: "पुरस्कार वितरण",
            },
            description: {
              en: "Recognizing outstanding participants",
              mr: "उत्कृष्ट सहभागींना सन्मान",
            },
            url: ladki5,
          },
        ],
      },
      {
        id: "womens_empowerment",
        title: {
          en: "Women's Empowerment",
          mr: "महिला सशक्तिकरण",
        },
        description: {
          en: "Programs dedicated to uplifting women in our community",
          mr: "आमच्या समुदायातील महिलांना सक्षम करण्यासाठी समर्पित कार्यक्रम",
        },
        images: [
          {
            id: 1,
            title: {
              en: "Skill Development Workshop",
              mr: "कौशल्य विकास कार्यशाळा",
            },
            description: {
              en: "Training session for women entrepreneurs",
              mr: "महिला उद्योजकांसाठी प्रशिक्षण सत्र",
            },
            url: womenemp1,
          },
          {
            id: 2,
            title: {
              en: "Financial Literacy Program",
              mr: "आर्थिक साक्षरता कार्यक्रम",
            },
            description: {
              en: "Educating women about financial management",
              mr: "महिलांना आर्थिक व्यवस्थापनाबद्दल शिक्षण",
            },
            url: womenemp2,
          },
          {
            id: 3,
            title: {
              en: "Financial Literacy Program",
              mr: "आर्थिक साक्षरता कार्यक्रम",
            },
            description: {
              en: "Educating women about financial management",
              mr: "महिलांना आर्थिक व्यवस्थापनाबद्दल शिक्षण",
            },
            url: womenemp3,
          },
          {
            id: 4,
            title: {
              en: "Financial Literacy Program",
              mr: "आर्थिक साक्षरता कार्यक्रम",
            },
            description: {
              en: "Educating women about financial management",
              mr: "महिलांना आर्थिक व्यवस्थापनाबद्दल शिक्षण",
            },
            url: womenemp4,
          },
        ],
      },
      {
        id: "bhumi_pujan",
        title: {
          en: "Bhumi Pujan Ceremonies",
          mr: "भूमी पूजन समारंभ",
        },
        description: {
          en: "Traditional blessings for new construction projects",
          mr: "नवीन बांधकाम प्रकल्पांसाठी पारंपारिक आशीर्वाद",
        },
        images: [
          {
            id: 1,
            title: {
              en: "Construction Groundbreaking",
              mr: "भूमी पूजन समारंभ",
            },
            description: {
              en: "Traditional ceremony for new building",
              mr: "नवीन इमारतीसाठी पारंपारिक समारंभ",
            },
            url: bhumipujan,
          },
          {
            id: 2,
            title: {
              en: "Construction Groundbreaking",
              mr: "भूमी पूजन समारंभ",
            },
            description: {
              en: "Traditional ceremony for new building",
              mr: "नवीन इमारतीसाठी पारंपारिक समारंभ",
            },
            url: opening10,
          },
          {
            id: 3,
            title: {
              en: "Construction Groundbreaking",
              mr: "भूमी पूजन समारंभ",
            },
            description: {
              en: "Traditional ceremony for new building",
              mr: "नवीन इमारतीसाठी पारंपारिक समारंभ",
            },
            url: opening9,
          },
        ],
      },
      {
        id: "conference",
        title: {
          en: "Conference",
          mr: "सभा",
        },
        description: {
          en: "Moments from our important meetings and strategy discussions",
          mr: "आमच्या महत्त्वाच्या सभा आणि धोरण चर्चेचे क्षण",
        },
        images: [
          {
            id: 1,
            title: {
              en: "Monthly Board Meeting",
              mr: "मासिक मंडळ सभा",
            },
            description: {
              en: "Discussion on development projects",
              mr: "विकास प्रकल्पांवर चर्चा",
            },
            url: conf1,
          },
          {
            id: 2,
            title: {
              en: "Team Meeting",
              mr: "संघ सभा",
            },
            description: {
              en: "Weekly coordination meeting",
              mr: "साप्ताहिक समन्वय सभा",
            },
            url: conf2,
          },
          {
            id: 3,
            title: {
              en: "Strategy Discussion",
              mr: "रणनीती चर्चा",
            },
            description: {
              en: "Planning for upcoming initiatives",
              mr: "आगामी उपक्रमांसाठी नियोजन",
            },
            url: conf3,
          },
          {
            id: 4,
            title: {
              en: "Annual Review Meeting",
              mr: "वार्षिक पुनरावलोकन सभा",
            },
            description: {
              en: "Review of yearly achievements",
              mr: "वार्षिक यशस्वीतेचे पुनरावलोकन",
            },
            url: conf4,
          },
          {
            id: 5,
            title: {
              en: "Annual Review Meeting",
              mr: "वार्षिक पुनरावलोकन सभा",
            },
            description: {
              en: "Review of yearly achievements",
              mr: "वार्षिक यशस्वीतेचे पुनरावलोकन",
            },
            url: conf5,
          },
          {
            id: 6,
            title: {
              en: "Annual Review Meeting",
              mr: "वार्षिक पुनरावलोकन सभा",
            },
            description: {
              en: "Review of yearly achievements",
              mr: "वार्षिक यशस्वीतेचे पुनरावलोकन",
            },
            url: conf6,
          },
          {
            id: 7,
            title: {
              en: "Annual Review Meeting",
              mr: "वार्षिक पुनरावलोकन सभा",
            },
            description: {
              en: "Review of yearly achievements",
              mr: "वार्षिक यशस्वीतेचे पुनरावलोकन",
            },
            url: conf7,
          },
          {
            id: 8,
            title: {
              en: "Annual Review Meeting",
              mr: "वार्षिक पुनरावलोकन सभा",
            },
            description: {
              en: "Review of yearly achievements",
              mr: "वार्षिक यशस्वीतेचे पुनरावलोकन",
            },
            url: conf8,
          },
          {
            id: 9,
            title: {
              en: "Annual Review Meeting",
              mr: "वार्षिक पुनरावलोकन सभा",
            },
            description: {
              en: "Review of yearly achievements",
              mr: "वार्षिक यशस्वीतेचे पुनरावलोकन",
            },
            url: conf9,
          },
          {
            id: 10,
            title: {
              en: "Annual Review Meeting",
              mr: "वार्षिक पुनरावलोकन सभा",
            },
            description: {
              en: "Review of yearly achievements",
              mr: "वार्षिक यशस्वीतेचे पुनरावलोकन",
            },
            url: conf10,
          },
          {
            id: 11,
            title: {
              en: "Annual Review Meeting",
              mr: "वार्षिक पुनरावलोकन सभा",
            },
            description: {
              en: "Review of yearly achievements",
              mr: "वार्षिक यशस्वीतेचे पुनरावलोकन",
            },
            url: conf11,
          },
          {
            id: 12,
            title: {
              en: "Annual Review Meeting",
              mr: "वार्षिक पुनरावलोकन सभा",
            },
            description: {
              en: "Review of yearly achievements",
              mr: "वार्षिक यशस्वीतेचे पुनरावलोकन",
            },
            url: conf12,
          },
          {
            id: 13,
            title: {
              en: "Annual Review Meeting",
              mr: "वार्षिक पुनरावलोकन सभा",
            },
            description: {
              en: "Review of yearly achievements",
              mr: "वार्षिक यशस्वीतेचे पुनरावलोकन",
            },
            url: conf13,
          },
          {
            id: 14,
            title: {
              en: "Annual Review Meeting",
              mr: "वार्षिक पुनरावलोकन सभा",
            },
            description: {
              en: "Review of yearly achievements",
              mr: "वार्षिक यशस्वीतेचे पुनरावलोकन",
            },
            url: conf14,
          },
          {
            id: 15,
            title: {
              en: "Annual Review Meeting",
              mr: "वार्षिक पुनरावलोकन सभा",
            },
            description: {
              en: "Review of yearly achievements",
              mr: "वार्षिक यशस्वीतेचे पुनरावलोकन",
            },
            url: conf15,
          },
          {
            id: 16,
            title: {
              en: "Annual Review Meeting",
              mr: "वार्षिक पुनरावलोकन सभा",
            },
            description: {
              en: "Review of yearly achievements",
              mr: "वार्षिक यशस्वीतेचे पुनरावलोकन",
            },
            url: conf16,
          },
          {
            id: 17,
            title: {
              en: "Annual Review Meeting",
              mr: "वार्षिक पुनरावलोकन सभा",
            },
            description: {
              en: "Review of yearly achievements",
              mr: "वार्षिक यशस्वीतेचे पुनरावलोकन",
            },
            url: conf17,
          },
          {
            id: 18,
            title: {
              en: "Annual Review Meeting",
              mr: "वार्षिक पुनरावलोकन सभा",
            },
            description: {
              en: "Review of yearly achievements",
              mr: "वार्षिक यशस्वीतेचे पुनरावलोकन",
            },
            url: conf18,
          },
        ],
      },
      {
        id: "assembly",
        title: {
          en: "Assembly",
          mr: "बैठक",
        },
        description: {
          en: "An official meeting to discuss plans, ideas, and important decisions.",
          mr: "योजना, कल्पना आणि महत्त्वपूर्ण निर्णयांवर चर्चा करण्यासाठी अधिकृत बैठक.",
        },
        images: [
          {
            id: 1,
            title: {
              en: "Monthly Board Meeting",
              mr: "मासिक मंडळ सभा",
            },
            description: {
              en: "Discussion on development projects",
              mr: "विकास प्रकल्पांवर चर्चा",
            },
            url: meeting1,
          },
          {
            id: 2,
            title: {
              en: "Team Meeting",
              mr: "संघ सभा",
            },
            description: {
              en: "Weekly coordination meeting",
              mr: "साप्ताहिक समन्वय सभा",
            },
            url: meeting2,
          },
          {
            id: 3,
            title: {
              en: "Strategy Discussion",
              mr: "रणनीती चर्चा",
            },
            description: {
              en: "Planning for upcoming initiatives",
              mr: "आगामी उपक्रमांसाठी नियोजन",
            },
            url: meeting3,
          },
          {
            id: 4,
            title: {
              en: "Annual Review Meeting",
              mr: "वार्षिक पुनरावलोकन सभा",
            },
            description: {
              en: "Review of yearly achievements",
              mr: "वार्षिक यशस्वीतेचे पुनरावलोकन",
            },
            url: meeting4,
          },
          {
            id: 4,
            title: {
              en: "Annual Review Meeting",
              mr: "वार्षिक पुनरावलोकन सभा",
            },
            description: {
              en: "Review of yearly achievements",
              mr: "वार्षिक यशस्वीतेचे पुनरावलोकन",
            },
            url: meeting5,
          },
          {
            id: 4,
            title: {
              en: "Annual Review Meeting",
              mr: "वार्षिक पुनरावलोकन सभा",
            },
            description: {
              en: "Review of yearly achievements",
              mr: "वार्षिक यशस्वीतेचे पुनरावलोकन",
            },
            url: meeting6,
          },
          {
            id: 7,
            title: {
              en: "Annual Review Meeting",
              mr: "वार्षिक पुनरावलोकन सभा",
            },
            description: {
              en: "Review of yearly achievements",
              mr: "वार्षिक यशस्वीतेचे पुनरावलोकन",
            },
            url: meeting7,
          },
          {
            id: 8,
            title: {
              en: "Annual Review Meeting",
              mr: "वार्षिक पुनरावलोकन सभा",
            },
            description: {
              en: "Review of yearly achievements",
              mr: "वार्षिक यशस्वीतेचे पुनरावलोकन",
            },
            url: meeting8,
          },
          {
            id: 9,
            title: {
              en: "Annual Review Meeting",
              mr: "वार्षिक पुनरावलोकन सभा",
            },
            description: {
              en: "Review of yearly achievements",
              mr: "वार्षिक यशस्वीतेचे पुनरावलोकन",
            },
            url: meeting9,
          },
        ],
      },
      {
        id: "sitevisit",
        title: {
          en: "Work site visit",
          mr: "कामाच्या ठिकाणी भेट",
        },
        description: {
          en: "A professional work site visit to ensure quality, safety, and smooth project progress.",
          mr: "गुणवत्ता, सुरक्षितता आणि प्रकल्पाची सुरळीत प्रगती सुनिश्चित करण्यासाठी व्यावसायिक कामाच्या ठिकाणी भेट.",
        },
        images: [
          {
            id: 1,
            title: {
              en: "Monthly Board Meeting",
              mr: "मासिक मंडळ सभा",
            },
            description: {
              en: "Discussion on development projects",
              mr: "विकास प्रकल्पांवर चर्चा",
            },
            url: sitevisit1,
          },
          {
            id: 2,
            title: {
              en: "Team Meeting",
              mr: "संघ सभा",
            },
            description: {
              en: "Weekly coordination meeting",
              mr: "साप्ताहिक समन्वय सभा",
            },
            url: sitevisit2,
          },
          {
            id: 3,
            title: {
              en: "Strategy Discussion",
              mr: "रणनीती चर्चा",
            },
            description: {
              en: "Planning for upcoming initiatives",
              mr: "आगामी उपक्रमांसाठी नियोजन",
            },
            url: sitevisit3,
          },
          {
            id: 4,
            title: {
              en: "Annual Review Meeting",
              mr: "वार्षिक पुनरावलोकन सभा",
            },
            description: {
              en: "Review of yearly achievements",
              mr: "वार्षिक यशस्वीतेचे पुनरावलोकन",
            },
            url: sitevisit4,
          },
          {
            id: 5,
            title: {
              en: "Annual Review Meeting",
              mr: "वार्षिक पुनरावलोकन सभा",
            },
            description: {
              en: "Review of yearly achievements",
              mr: "वार्षिक यशस्वीतेचे पुनरावलोकन",
            },
            url: sitevisit5,
          },
          {
            id: 6,
            title: {
              en: "Annual Review Meeting",
              mr: "वार्षिक पुनरावलोकन सभा",
            },
            description: {
              en: "Review of yearly achievements",
              mr: "वार्षिक यशस्वीतेचे पुनरावलोकन",
            },
            url: sitevisit6,
          },
        ],
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

  const openImage = (image, categoryId, imageIndex) => {
    setSelectedImage(image);
    setCurrentIndex(imageIndex);
    setCurrentCategory(categoryId);
  };

  const closeImage = () => {
    setSelectedImage(null);
    setCurrentCategory(null);
  };

  const navigate = (direction) => {
    let newIndex;
    const category = content.categories.find(
      (cat) => cat.id === currentCategory
    );
    const images = category?.images || [];

    if (direction === "prev") {
      newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    } else {
      newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    }

    setCurrentIndex(newIndex);
    setSelectedImage(images[newIndex]);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            {getText(content.title)}
          </h1>
          <div className="border-b-2 border-blue-100 w-20 mb-6 mx-auto"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {getText(content.description)}
          </p>
        </motion.div>

        {/* Separate sections for each category */}
        {content.categories.map((category) => (
          <section key={category.id} className="mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-8"
            >
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                {getText(category.title)}
              </h2>
              <div className="border-b-2 border-blue-100 w-16 mb-4 mx-auto"></div>
              <p className="text-gray-600 max-w-3xl mx-auto">
                {getText(category.description)}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {category.images.map((image, imageIndex) => {
                const imageText = getText(image, true);
                return (
                  <motion.div
                    key={image.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: imageIndex * 0.05 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.03 }}
                    className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer"
                    onClick={() => openImage(image, category.id, imageIndex)}
                  >
                    <div className="h-48 overflow-hidden">
                      <img
                        src={image.url}
                        alt={imageText.title}
                        className="w-full h-full object-cover transition duration-300 hover:scale-105"
                      />
                    </div>
                    <div className="p-4"></div>
                  </motion.div>
                );
              })}
            </div>
          </section>
        ))}

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
                  {/* <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    {getText(selectedImage, true).title}
                  </h3>
                  <p className="text-gray-600">
                    {getText(selectedImage, true).description}
                  </p> */}
                  <div className="mt-4 text-sm text-gray-500">
                    {getText(content.imageCounter)
                      .replace("{current}", currentIndex + 1)
                      .replace(
                        "{total}",
                        content.categories.find(
                          (cat) => cat.id === currentCategory
                        )?.images.length || 0
                      )}
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
