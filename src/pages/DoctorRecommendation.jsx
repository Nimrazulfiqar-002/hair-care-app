
import React from "react";
import { useParams } from "react-router-dom";
import DoctorAdvice from "../components/DoctorAdvice";

const DoctorRecommendation = () => {
  const { problemId } = useParams();

  return (
    <div className="min-h-screen p-8 bg-green-50">
      <h1 className="text-3xl font-bold text-red-600 mb-6">Doctor's Advice for {problemId.replace("_", " ")}</h1>
      <DoctorAdvice selectedProblem={problemId} />
    </div>
  );
};

export default DoctorRecommendation;
