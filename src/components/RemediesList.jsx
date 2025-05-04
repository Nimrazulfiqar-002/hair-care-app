import React from "react";
import { motion } from "framer-motion";
import remedies from "../data/remedies.json";
import remediesimage from "../assets/images/hair remedies picture.PNG"
const RemediesList = ({ selectedProblem }) => {
  if (!selectedProblem || !remedies[selectedProblem]) return null;

  return (
    <motion.div
      className="bg-green-100 p-6 rounded-xl shadow-md mt-6 flex flex-col md:flex-row items-center gap-6"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-full md:w-1/2">
        <img
          src={remediesimage}
          alt="remedie pic"
          className="rounded-sm  object-cover w-full h-auto"
        />
      </div>

      <div className="w-full md:w-1/2 text-center md:text-left">
      <h2 className="text-3xl font-bold text-green-700 mb-4">
          Home Remedies for {selectedProblem.replace("_", " ").toUpperCase()}
      </h2>
        <ul className="list-disc pl-5 text-left space-y-2 text-gray-700">
          {remedies[selectedProblem].map((remedy, index) => (
            <motion.li
              key={index}
              initial={{ x: -10, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.1 * index }}
            >
              {remedy}
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default RemediesList;
