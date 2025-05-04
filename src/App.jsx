import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Solutions from "./pages/Solutions";
import DoctorRecommendation from "./pages/DoctorRecommendation";
import "./styles/main.css";
import FindDoctor from "./pages/FindDoctor";
import Problems from "./pages/Problems";
import AboutUs from "./pages/AboutUs";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/solutions/:problemId" element={<Solutions />} />
        <Route path="/doctor/:problemId" element={<DoctorRecommendation />} />
        <Route path="/FindDoctor" element={<FindDoctor/>}/>
        <Route path="/problem" element={<Problems/>}/>
        <Route path="/about" element={<AboutUs/>}/>
       
      </Routes>
    </Router>
  );
};

export default App;
