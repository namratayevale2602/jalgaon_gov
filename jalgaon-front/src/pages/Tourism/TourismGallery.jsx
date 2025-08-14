import React from "react";
import {
  changdev,
  patnadevi,
  girnadam,
  gandhifoundation,
  waghurdam,
  gandhigarden,
} from "../../assets";

const TourismGallery = () => {
  const images = [
    { src: changdev, title: "Changdev Temple" },
    { src: patnadevi, title: "Patnadevi Hills" },
    { src: girnadam, title: "Girna Dam" },
    { src: gandhifoundation, title: "Gandhi Foundation" },
    { src: waghurdam, title: "Waghur Dam" },
    { src: gandhigarden, title: "Gandhi Garden" },
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
              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col items-center justify-center">
                <span className="text-white text-lg font-bold mb-2">
                  {item.title}
                </span>
                <button className="bg-indigo-600 text-white px-4 py-1 rounded-full text-sm hover:bg-indigo-700 transition">
                  View More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TourismGallery;
