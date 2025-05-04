import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom"; 

const severeProblems = ["hair_loss", "bald_patches", "alopecia"];

const DoctorAdvice = ({ selectedProblem }) => {
  if (!selectedProblem || !severeProblems.includes(selectedProblem)) return null;
  const navigate = useNavigate()

  return (
    <motion.div
      className="bg-white mt-6 p-6 rounded-xl shadow-lg border-l-4 border-red-400"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-xl font-bold text-red-600 mb-2">
        Professional Advice Recommended
      </h2>
      <p className="text-gray-700">
        It seems like your hair issue might be more serious. We recommend you consult a dermatologist.
        <br />
        You might need advanced treatment like <strong>PRP (Platelet-Rich Plasma)</strong> therapy.
      </p>
      <motion.button
        whileHover={{ scale: 1.05 }}
        className="mt-4 bg-red-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-red-600 transition"
        onClick={() => navigate("/FindDoctor")}
      >
        Find a Doctor
      </motion.button>
    </motion.div>
  );
};

export default DoctorAdvice;
