import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import { FaArrowLeft, FaCalendarAlt, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import blogData from "../../data/blogData.json";

const BlogDetailPage = () => {
  const { slug } = useParams();
  const blog = blogData.find((blog) => blog.slug === slug);

  if (!blog) {
    return <div>Blog post not found</div>;
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
            <FaArrowLeft className="mr-2" /> Back to Blog
          </Link>

          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-64 md:h-80 overflow-hidden">
              <motion.img
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                src={blog.image}
                alt={blog.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-6 md:p-8">
              <div className="flex items-center text-sm text-gray-500 mb-4">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium mr-4">
                  {blog.category}
                </span>
                <span className="flex items-center mr-4">
                  <FaCalendarAlt className="mr-1" />
                  {new Date(blog.date).toLocaleDateString()}
                </span>
                <span className="flex items-center">
                  <FaUser className="mr-1" />
                  {blog.author}
                </span>
              </div>

              <h1 className="text-3xl font-bold text-gray-800 mb-4">
                {blog.title}
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
                <p className="text-lg mb-6">{blog.excerpt}</p>
                <p className="mb-6">{blog.content}</p>
                {/* More content would be here */}
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie
                  vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh
                  porttitor. Ut in nulla enim.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default BlogDetailPage;
