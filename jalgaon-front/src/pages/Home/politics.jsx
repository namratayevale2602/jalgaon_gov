import React from "react";
import { useLanguage } from "../../contexts/LanguageContext";
import {
  smitawagh,
  satyjittambe,
  sanjaysavkare,
  rakshakhadse,
  raksha_khadse,
  mangeshchavhan,
  kishoepatil,
  kishoedarade,
  gulabraoPatil,
  eknathkhadse,
  chandrakantsonvane,
  chandrakantpatil,
  anilpatil,
  amolpatil,
  amoljawale,
  girish,
  rajubhole,
} from "../../assets";

const DataCard = () => {
  const { language } = useLanguage();

  const departmentData = {
    en: {
      title: "Political Representatives",
      categories: [
        {
          title: "",
          people: [
            {
              name: "Smt.Aayush Prasad",
              designation: "Collector",
              matdarsangh: "Jalgoan",
              image: rakshakhadse,
            },
            {
              name: "Smt.Vijay Shinde",
              designation: "District Planning Officer",
              matdarsangh: "Jalgaon",
              image: smitawagh,
            },
          ],
        },
        {
          title: "Lok Sabha Members",
          people: [
            {
              name: "Hon. Smt. Raksha Nikhil Khadse",
              designation:
                "Minister of State for Youth Affairs and Sports, Govt. of India",
              matdarsangh: "Raver Lok Sabha",
              image: rakshakhadse,
            },
            {
              name: "Hon. Smt. Smita Uday Wagh",
              designation: "",
              matdarsangh: "Jalgaon Lok Sabha",
              image: smitawagh,
            },
          ],
        },
        {
          title: "Vidhan Sabha Members",
          people: [
            {
              name: "Hon. Shri. Gulabrao Raghunath Patil",
              designation:
                "Minister for Water Supply and Sanitation, Govt. of Maharashtra",
              matdarsangh: "Jalgaon (Rural)",
              image: gulabraoPatil,
            },
            {
              name: "Hon. Shri. Girish Dattatray Mahajan",
              designation:
                "Minister for Water Resources (Vidarbha, Tapi, Konkan Basin Development Corporation) & Disaster Management, Govt. of Maharashtra",
              matdarsangh: "Jamner",
              image: girish,
            },
            {
              name: "Hon. Shri. Sanjay Waman Sawkare",
              designation: "Minister for Textiles, Govt. of Maharashtra",
              matdarsangh: "Bhusawal",
              image: sanjaysavkare,
            },
            {
              name: "Hon. Shri. Kishor Appa Patil",
              designation: "",
              matdarsangh: "Pachora-Bhadgaon",
              image: kishoepatil,
            },
            {
              name: "Hon. Shri. Suresh Damu Bholle (Raju Mama)",
              designation: "",
              matdarsangh: "Jalgaon (City)",
              image: rajubhole,
            },
            {
              name: "Hon. Shri. Chandrakant Balirao Sonawane",
              designation: "",
              matdarsangh: "Chopda",
              image: chandrakantsonvane,
            },
            {
              name: "Hon. Shri. Anil Bhaidas Patil",
              designation: "",
              matdarsangh: "Amalner",
              image: anilpatil,
            },
            {
              name: "Hon. Shri. Chandrakant Nibaji Patil",
              designation: "",
              matdarsangh: "Muktainagar",
              image: chandrakantpatil,
            },
            {
              name: "Hon. Shri. Mangesh Ramesh Chavan",
              designation: "",
              matdarsangh: "Chalisgaon",
              image: mangeshchavhan,
            },
            {
              name: "Hon. Shri. Amol Chimanrao Patil",
              designation: "",
              matdarsangh: "Erandol-Parola",
              image: amolpatil,
            },
            {
              name: "Hon. Shri. Amol Haribhau Jawale",
              designation: "",
              matdarsangh: "Raver",
              image: amoljawale,
            },
          ],
        },
        {
          title: "Vidhan Parishad Members",
          people: [
            {
              name: "Hon. Shri. Eknathrao Khadse",
              designation: "MLC",
              matdarsangh: "Vidhan Parishad",
              image: eknathkhadse,
            },
            {
              name: "Hon. Shri. Kishor Bhikaji Darade",
              designation: "MLC",
              matdarsangh: "Teachers Constituency, Nashik",
              image: kishoedarade,
            },
            {
              name: "Hon. Shri. Satyajit Sudhir Tabe",
              designation: "MLC",
              matdarsangh: "Graduates Constituency, Nashik",
              image: satyjittambe,
            },
          ],
        },
      ],
    },
    mr: {
      title: "राजकीय प्रतिनिधी",
      categories: [
        {
          title: "",
          people: [
            {
              name: "श्री आयुष प्रसाद",
              designation: "जिल्हाधिकारी",
              matdarsangh: "जळगाव",
              image: rakshakhadse,
            },
            {
              name: "श्री विजय शिंदे",
              designation: "जिल्हा नियोजन अधिकारी",
              matdarsangh: "जळगाव",
              image: smitawagh,
            },
          ],
        },
        {
          title: "लोकसभा सदस्य",
          people: [
            {
              name: "मा.ना. श्रीमती. रक्षा निखिल खडसे",
              designation: "युवक आणि क्रीडा राज्यमंत्री, भारत सरकार",
              matdarsangh: "रावेर लोकसभा",
              image: rakshakhadse,
            },
            {
              name: "मा.खा.श्रीमती. स्मिता उदय वाघ",
              designation: "",
              matdarsangh: "जळगाव लोकसभा",
              image: smitawagh,
            },
          ],
        },
        {
          title: "विधानसभा सदस्य",
          people: [
            {
              name: "मा.ना.श्री.गुलाबराव रघुनाथ पाटील",
              designation:
                "मंत्री पाणी पुरवठा व स्वच्छता, महाराष्ट्र राज्य, तथा पालकमंत्री जळगाव जिल्हा",
              matdarsangh: "जळगाव (ग्रामीण)",
              image: gulabraoPatil,
            },
            {
              name: "मा.ना.श्री. गिरीश दत्तात्रय महाजन",
              designation:
                "मंत्री जलसंपदा (विदर्भ, तापी, कोकण खोरे विकास महामंडळ), आपत्ती व्यवस्थापन, महाराष्ट्र राज्य",
              matdarsangh: "जामनेर",
              image: girish,
            },
            {
              name: "मा.ना.श्री. संजय वामन सावकारे",
              designation: "मंत्री वस्त्रोद्योग, महाराष्ट्र राज्य",
              matdarsangh: "भुसावळ",
              image: sanjaysavkare,
            },
            {
              name: "मा.आ.श्री. किशोर आप्पा पाटील",
              designation: "",
              matdarsangh: "पाचोरा - भडगांव",
              image: kishoepatil,
            },
            {
              name: "मा.आ.श्री. सुरेश दामू भोळे (राजू मामा)",
              designation: "",
              matdarsangh: "जळगाव (शहर)",
              image: rajubhole,
            },
            {
              name: "मा.आ.श्री. चंद्रकांत बळीराम सोनवणे",
              designation: "",
              matdarsangh: "चोपडा",
              image: chandrakantsonvane,
            },
            {
              name: "मा.आ.श्री. अनिल भाईदास पाटील",
              designation: "",
              matdarsangh: "अमळनेर",
              image: anilpatil,
            },
            {
              name: "मा.आ.श्री. चंद्रकांत निबाजी पाटील",
              designation: "",
              matdarsangh: "मुक्ताईनगर",
              image: chandrakantpatil,
            },
            {
              name: "मा.आ.श्री. मंगेश रमेश चव्हाण",
              designation: "",
              matdarsangh: "चाळीसगांव",
              image: mangeshchavhan,
            },
            {
              name: "मा.आ.श्री. अमोल चिमणराव पाटील",
              designation: "",
              matdarsangh: "एरंडोल - पारोळा",
              image: amolpatil,
            },
            {
              name: "मा.आ.श्री. अमोल हरिभाऊ जावळे",
              designation: "",
              matdarsangh: "रावेर",
              image: amoljawale,
            },
          ],
        },
        {
          title: "विधानपरिषद सदस्य",
          people: [
            {
              name: "मा.आ.श्री. एकनाथराव खडसे",
              designation: "विधान परिषद सदस्य",
              matdarsangh: "वि.प.स.",
              image: eknathkhadse,
            },
            {
              name: "मा.आ.श्री. किशोर भिकाजी दराडे",
              designation: "विधान परिषद सदस्य",
              matdarsangh: "शिक्षक मतदारसंघ नाशिक",
              image: kishoedarade,
            },
            {
              name: "मा.आ.श्री. सत्यजीत सुधीर तांबे",
              designation: "विधान परिषद सदस्य",
              matdarsangh: "नाशिक पदवीधर मतदारसंघ",
              image: satyjittambe,
            },
          ],
        },
      ],
    },
  };

  const data = departmentData[language] || departmentData.en;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8">{data.title}</h1>

      {data.categories.map((category) => (
        <div key={category.title} className="mb-12">
          <h2 className="text-xl font-semibold mb-6 border-b pb-2">
            {category.title}
          </h2>

          {/* Centered grid for all categories */}
          <div className="flex flex-wrap justify-center gap-6">
            {category.people.map((person, index) => (
              <div
                key={index}
                className="bg-white shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 w-full sm:w-72"
              >
                <div className="p-4 flex flex-col items-center">
                  <div className="w-60 h-60 mb-4 overflow-hidden">
                    <img
                      src={person.image}
                      alt={person.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-center text-gray-800 mb-1">
                    {person.name}
                  </h3>
                  <p className="text-sm text-gray-600 text-center">
                    {person.matdarsangh}
                  </p>
                  <p className="text-xs text-gray-500 text-center mt-2">
                    {person.designation}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default DataCard;
