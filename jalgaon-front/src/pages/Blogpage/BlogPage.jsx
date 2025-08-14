// BlogPage.jsx
import { motion } from "framer-motion";
import BlogCard from "../../components/BlogCart/BlogCard";
import { blogData } from "../../data/blogData.js";
import { useLanguage } from "../../contexts/LanguageContext";

const BlogPage = () => {
  const { language } = useLanguage();

  const content = {
    title: {
      en: "Our Blog",
      mr: "आमचे ब्लॉग",
    },
    subtitle: {
      en: "Latest articles and tutorials on web development, design, and more.",
      mr: "वेब डेव्हलपमेंट, डिझाइन आणि इतर विषयांवर नवीनतम लेख आणि ट्यूटोरियल्स.",
    },
  };

  const getText = (item) => {
    if (typeof item === "object" && item !== null) {
      return item[language] || item.en || item;
    }
    return item;
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            {getText(content.title)}
          </h1>
          <div className="border-b-2 border-blue-100 w-20 mb-8"></div>
          <p className="text-gray-600 mb-8 max-w-3xl">
            {getText(content.subtitle)}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogData.map((blog, index) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
