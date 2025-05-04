import React from "react";

const AboutUs = () => {
  return (
    <div className="bg-green-50 min-h-screen py-12 px-6 md:px-20">
      <h1 className="text-4xl font-bold text-green-700 mb-6 text-center font-serif">
        About Us
      </h1>

      <p className="text-gray-700 text-lg mb-8 text-center max-w-3xl mx-auto">
        Welcome to <span className="text-green-600 font-semibold">Hair Care App – Your Personal Hair Care Companion</span>. Our mission is to help you understand your hair issues and provide complete care through <span className="font-semibold">remedies, product suggestions, and treatment advice</span>.
      </p>

      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        
        <div className="bg-white rounded-2xl p-6 shadow-lg">
          <h2 className="text-2xl font-bold text-green-600 mb-3">Hair Problem Detection</h2>
          <p className="text-gray-600">
            Select your symptoms from our simple form — like hair fall, dandruff, dry scalp, or split ends. Based on your selection, we generate a personalized care plan just for you.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-lg">
          <h2 className="text-2xl font-bold text-green-600 mb-3">Effective Home Remedies</h2>
          <p className="text-gray-600">
            Find natural solutions like aloe vera masks, coconut oil treatments, and DIY scalp scrubs tailored to your selected hair concern. Safe, affordable, and easy to follow!
          </p>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-lg">
          <h2 className="text-2xl font-bold text-green-600 mb-3">Best Products for Your Hair</h2>
          <p className="text-gray-600">
            Not sure what to buy? We recommend the best shampoos, oils, and conditioners for your issue — with features, reviews, and price comparisons across top stores.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-lg">
          <h2 className="text-2xl font-bold text-green-600 mb-3">Need Medical Help?</h2>
          <p className="text-gray-600">
            If your hair problem is severe, we suggest consulting a specialist. Get recommendations for dermatologists and treatment options like <span className="font-semibold">PRP therapy or hair transplants</span>.
          </p>
        </div>

      </div>

      <p className="mt-12 text-center text-gray-700 text-base max-w-3xl mx-auto">
        Hair Care App combines expert tips, natural care, and smart guidance — all personalized through your selected symptoms — to bring your hair back to life.
      </p>
    </div>
  );
};

export default AboutUs;
