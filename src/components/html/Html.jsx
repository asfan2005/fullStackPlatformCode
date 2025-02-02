import React from "react";
import { Header } from "../index";
import { FaHtml5 } from "react-icons/fa";
import { FaBookOpen } from "react-icons/fa";
import { FaChild } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "../../index.css";

function Html() {
  const navigate = useNavigate();

  return (
    <div id="app-container" className="bg-gradient-to-b from-blue-100 to-white min-h-screen">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center mb-12">
          <FaHtml5 className="text-6xl md:text-8xl text-orange-600 mb-4" />
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-4">
            HTML: Web Sahifalar Tili
          </h1>
          <p className="text-lg md:text-xl text-gray-600 text-center max-w-2xl">
            HTML (HyperText Markup Language) - bu zamonaviy internetning asosi. U barcha web-sahifalarning strukturasini belgilaydi va kontentni tartibga soladi.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <LearningCard
            title="Boshlang'ich HTML"
            description="HTML asoslari, teg tushunchasi, asosiy struktura va oddiy sahifalar yaratish."
            icon={<FaChild className="text-4xl text-green-600" />}
            color="bg-green-50"
            onClick={() => navigate("/html/boshlangich")}
          />
          <LearningCard
            title="HTML va SEO"
            description="Semantik HTML, meta teglar, SEO optimizatsiyasi va zamonaviy standartlar."
            icon={<FaBookOpen className="text-4xl text-blue-600" />}
            color="bg-blue-50"
            onClick={() => navigate("/html/orta")}
          />
          <LearningCard
            title="Mukammal HTML"
            description="HTML5 API'lari, formalar, multimedia, canvas va ilg'or xususiyatlar."
            icon={<FaHtml5 className="text-4xl text-orange-600" />}
            color="bg-orange-50"
            onClick={() => navigate("/html/mukammal")}
          />
        </div>
      </div>
    </div>
  );
}

function LearningCard({ title, description, icon, color, onClick }) {
  return (
    <div className={`${color} rounded-lg shadow-lg p-6 transition-transform duration-300 hover:scale-105`}>
      <div className="text-4xl mb-4">{icon}</div>
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-700">{description}</p>
      <button 
        className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300"
        onClick={onClick}
      >
        Boshlash
      </button>
    </div>
  );
}

export default Html;