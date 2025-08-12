import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useLanguage } from "../../contexts/LanguageContext";
import { Banner1 } from "../../assets";

const AboutDistrict = () => {
  const { language, content, fetchContent } = useLanguage();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [districtData, setDistrictData] = useState(null);

  useEffect(() => {
    const fetchDistrictData = async () => {
      try {
        setLoading(true);
        const response = await fetch("http://127.0.0.1:8000/api/districts");
        if (!response.ok) {
          throw new Error("Failed to fetch district data");
        }
        const data = await response.json();
        setDistrictData(data[0]); // Assuming you want the first district
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchDistrictData();
  }, []);

  if (loading) return <div className="text-center py-12">Loading...</div>;
  if (error)
    return <div className="text-center py-12 text-red-500">Error: {error}</div>;
  if (!districtData)
    return <div className="text-center py-12">No data available</div>;

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">
          {districtData.name[language]}
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-lg text-gray-700 mb-6">
              {districtData.description[language]}
            </p>
            <div className="grid grid-cols-2 gap-4">
              {districtData.stats[language].map((stat, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-4 shadow-sm"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <h4 className="font-semibold text-gray-800">{stat.title}</h4>
                  <p className="text-blue-600 font-bold">{stat.value}</p>
                </motion.div>
              ))}
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <img
              // src={districtData.image || Banner1}
              src={districtData.image}
              alt={districtData.name[language]}
              className="w-full h-auto rounded-lg shadow-md"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutDistrict;
