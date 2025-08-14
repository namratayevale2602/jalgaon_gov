import React from "react";
import {
  t1,
  t2,
  t3,
  t4,
  t5,
  t6,
  t7,
  t8,
  t9,
  t10,
  t11,
  t12,
  t13,
  t14,
  t15,
} from "../../assets";

const TourismGallery = () => {
  const images = [
    { src: t1, title: "Location 1" },
    { src: t2, title: "Location 2" },
    { src: t3, title: "Location 3" },
    { src: t4, title: "Location 4" },
    { src: t5, title: "Location 5" },
    { src: t6, title: "Location 6" },
    { src: t7, title: "Location 7" },
    { src: t8, title: "Location 8" },
    { src: t9, title: "Location 9" },
    { src: t10, title: "Location 10" },
    { src: t11, title: "Location 11" },
    { src: t12, title: "Location 12" },
    { src: t13, title: "Location 13" },
    { src: t14, title: "Location 14" },
    { src: t15, title: "Location 15" },
  ];

  return (
    <section className="bg-gradient-to-b from-gray-50 to-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-3xl font-bold text-center mb-10">
          Our <span className="text-indigo-600">Gallery</span>
        </h2>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {images.map((item, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-xl shadow-lg border border-gray-200 hover:shadow-2xl transition duration-500"
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-700 ease-in-out"
              />
          
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TourismGallery;
