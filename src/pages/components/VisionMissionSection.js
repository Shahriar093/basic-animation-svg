import React, { useState } from "react";

const VisionMissionSection = () => {
  const [activeTab, setActiveTab] = useState("vision");

  return (
    <div className="w-full flex justify-center" dir="rtl">
      <section className="py-8 px-4 w-full md:w-8/12">
        <div className="container mx-auto flex flex-col-reverse md:flex-row-reverse items-center justify-between">
          {/* Text Content (Right Side in RTL) */}
          <div className="w-full md:w-3/6 text-right mb-8 md:mb-0">
            <p className="text-xl md:text-3xl text-gray-600 mb-4 leading-relaxed">
              <span className="bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500 bg-clip-text text-transparent">
                החזון של Suridata
              </span>{" "}
              הוא לעזור לארגונים על ידי יצירת היקף אבטחה ליישומי SaaS.
            </p>
          </div>

          {/* Tab Buttons (Left Side in RTL) */}
          <div className="w-full md:w-2/6 flex flex-col items-center space-y-4">
            <button
              onClick={() => setActiveTab("vision")}
              className={`w-full md:w-1/2 px-4 py-2 rounded-lg text-sm md:text-lg font-semibold ${
                activeTab === "vision"
                  ? "bg-red-500 text-white"
                  : "bg-white text-red-500 border border-red-500"
              }`}
            >
              חזון
            </button>
            <button
              onClick={() => setActiveTab("mission")}
              className={`w-full md:w-1/2 px-4 py-2 rounded-lg text-sm md:text-lg font-semibold ${
                activeTab === "mission"
                  ? "bg-red-500 text-white"
                  : "bg-white text-red-500 border border-red-500"
              }`}
            >
              משימה
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VisionMissionSection;
