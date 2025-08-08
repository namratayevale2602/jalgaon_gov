// BlogDetailPage.jsx
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import { FaArrowLeft, FaCalendarAlt, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import blogData from "../../data/blogData.json";
import { useLanguage } from "../../contexts/LanguageContext";

const BlogDetailPage = () => {
  const { slug } = useParams();
  const { language } = useLanguage();
  const blog = blogData.find((blog) => blog.slug === slug);

  const content = {
    backButton: {
      en: "Back to Blog",
      mr: "ब्लॉगवर परत जा",
    },
  };

  const getText = (item) => {
    if (typeof item === "object" && item !== null) {
      return item[language] || item.en || item;
    }
    return item;
  };

  if (!blog) {
    return (
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {language === "en"
            ? "Blog post not found"
            : "ब्लॉग पोस्ट सापडली नाही"}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            to="/blog"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6"
          >
            <FaArrowLeft className="mr-2" /> {getText(content.backButton)}
          </Link>

          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-64 md:h-80 overflow-hidden">
              <motion.img
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                src={blog.image}
                alt={getText(blog.title)}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-6 md:p-8">
              <div className="flex items-center text-sm text-gray-500 mb-4">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium mr-4">
                  {getText(blog.category)}
                </span>
                <span className="flex items-center mr-4">
                  <FaCalendarAlt className="mr-1" />
                  {new Date(blog.date).toLocaleDateString(
                    language === "mr" ? "mr-IN" : "en-US"
                  )}
                </span>
                <span className="flex items-center">
                  <FaUser className="mr-1" />
                  {blog.author}
                </span>
              </div>

              <h1 className="text-3xl font-bold text-gray-800 mb-4">
                {getText(blog.title)}
              </h1>

              <div className="flex flex-wrap gap-2 mb-6">
                {blog.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-xs font-medium"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="prose max-w-none text-gray-700"
              >
                <p className="text-lg mb-6">{getText(blog.excerpt)}</p>
                <p className="mb-6">{getText(blog.content)}</p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default BlogDetailPage;
