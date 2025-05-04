import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import problems from "../data/problems.json";

const HairProblemSelector = () => {
  const [selectedProblem, setSelectedProblem] = useState("");

  const handleSelect = (id) => {
    setSelectedProblem(id === selectedProblem ? "" : id);
  };

  return (
    <motion.div
      className="bg-green-100 shadow-lg rounded-2xl p-8 w-full max-w-xl text-left font-serif "
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="border-b pb-3 mb-5">
        <h1 className="text-xl font-bold text-green-700">Hair Care App</h1>
        <p className="text-sm text-gray-600">@haircare.app</p>
      </div>

      <h2 className="text-3xl font-bold text-green-800 mb-4">I’m facing:</h2>

     
      <div className="space-y-3 mb-6">
        {problems.map((problem) => (
          <label
            key={problem.id}
            className={`flex items-start gap-2 p-3 rounded-xl border ${
              selectedProblem === problem.id
                ? "bg-green-200 border-green-400"
                : "bg-white border-green-200"
            } cursor-pointer hover:border-green-500`}
          >
            <input
              type="checkbox"
              checked={selectedProblem === problem.id}
              onChange={() => handleSelect(problem.id)}
              className="mt-1 accent-green-600 w-4 h-4"
            />
            <span className="text-green-800">{problem.name}</span>
          </label>
        ))}
      </div>
      {selectedProblem && (
  <div className="fixed inset-0 flex items-center justify-center bg-green-40 bg-opacity-40 z-50">
    <motion.div
      className="bg-white p-6 rounded-2xl shadow-2xl w-80 relative"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
    >
      <button
        onClick={() => setSelectedProblem("")}
        className="absolute top-2 right-3 text-gray-500 hover:text-red-500 text-xl"
      >
        &times;
      </button>

      <p className="mb-3 font-semibold text-green-700 text-lg">
        Selected: {selectedProblem.replace("_", " ").toUpperCase()}
      </p>

      <div className="flex flex-col gap-2 text-sm">
        <Link
          to={`/solutions/${selectedProblem}`}
          className="text-green-600 underline hover:text-green-800"
        >
          View Remedies & Products
        </Link>
        <Link
          to={`/doctor/${selectedProblem}`}
          className="text-red-500 underline hover:text-red-700"
        >
          Get Doctor's Advice
        </Link>
      </div>
    </motion.div>
  </div>
)}

    </motion.div>
  );
};

export default HairProblemSelector;
