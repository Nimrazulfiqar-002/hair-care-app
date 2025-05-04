import React from "react";
import { useParams } from "react-router-dom";
import RemediesList from "../components/RemediesList";
import ProductList from "../components/ProductList";

const Solutions = () => {
  const { problemId } = useParams();

  return (
    <div className="min-h-screen p-8 bg-green-50">
      <h1 className="text-3xl font-bold text-green-800 mb-6">Solutions for {problemId.replace("_", " ")}</h1>

      <div className="space-y-6">
        <RemediesList selectedProblem={problemId} />
        <ProductList selectedProblem={problemId} />
      </div>
    </div>
  );
};

export default Solutions;
