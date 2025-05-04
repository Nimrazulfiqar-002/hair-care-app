import React from "react";
import { motion } from "framer-motion";
import doctors from "../data/doctors.json";

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.5
    }
  })
};

const DoctorList = () => {
  return (
    <div className="min-h-screen bg-green-50 py-10 px-4">
      <h2 className="text-3xl font-bold text-left text-green-700 mb-10">
        Find Doctors
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {doctors.map((doctor, index) => (
          <motion.div
            key={index}
            custom={index}
            initial="hidden"
            animate="visible"
            variants={cardVariants}
            className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-xl font-bold">
                {doctor.name.charAt(0)}
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-700">{doctor.name}</h3>
                <p className="text-sm text-gray-500">{doctor.specialty}</p>
              </div>
            </div>
            <div className="mt-4 text-sm text-gray-600">
              <p><strong>Location:</strong> {doctor.location}</p>
              <p><strong>Treatment:</strong> {doctor.treatment}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default DoctorList;
