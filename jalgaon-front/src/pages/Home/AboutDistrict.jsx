import { motion } from "framer-motion";
import { Banner1, dpc } from "../../assets";

const AboutDistrict = ({ districtData }) => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">
          About Jalgaon District
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-lg text-gray-700 mb-6">
              Jalgaon district is located in the northern part of Maharashtra
              state in India. It is known as the "Banana Capital of India" as it
              leads in banana production. The district is part of the Khandesh
              region and is bordered by the Satpura mountain ranges.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-4 shadow-sm">
                <h4 className="font-semibold text-gray-800">Population</h4>
                <p className="text-blue-600 font-bold">25000</p>
              </div>
              <div className="bg-white p-4 shadow-sm">
                <h4 className="font-semibold text-gray-800">Area</h4>
                <p className="text-blue-600 font-bold">2300 sq.f</p>
              </div>
              <div className="bg-white p-4 shadow-sm">
                <h4 className="font-semibold text-gray-800">Literacy Rate</h4>
                <p className="text-blue-600 font-bold">10%</p>
              </div>
              <div className="bg-white p-4 shadow-sm">
                <h4 className="font-semibold text-gray-800">Villages</h4>
                <p className="text-blue-600 font-bold">asas</p>
              </div>
            </div>
          </div>
          <div>
            <img
              src={Banner1}
              alt="Jalgaon District"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutDistrict;
