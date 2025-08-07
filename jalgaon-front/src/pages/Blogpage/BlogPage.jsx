import { motion } from "framer-motion";
import BlogCard from "../../components/BlogCart/BlogCard";
import blogData from "../../data/blogData.json";

const BlogPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Our Blog</h1>
          <div className="border-b-2 border-blue-100 w-20 mb-8"></div>
          <p className="text-gray-600 mb-8 max-w-3xl">
            Latest articles and tutorials on web development, design, and more.
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
