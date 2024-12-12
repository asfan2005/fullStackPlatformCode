import React from "react";
import { Header } from "../index";
import { FaHtml5 } from "react-icons/fa";
import { FaBookOpen } from "react-icons/fa"; // Import FaBookOpen icon
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "../../index.css";
function Html() {
  const navigate = useNavigate(); // Initialize navigate

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
            title="Yosh o'rganuvchilar uchun"
            description="HTML asoslarini o'yin va qiziqarli mashg'ulotlar orqali o'rganing."
            icon={<FaBookOpen className="text-4xl" />}
            color="bg-green-100"
            onClick={() => navigate("/html/boshlangich")} // Navigate to Boshlangich
          />
          <LearningCard
            title="O'rta darajadagilar uchun"
            description="HTML strukturasi va semantikasini chuqurroq o'rganing."
            icon="🧑‍🎓"
            color="bg-blue-100"
            onClick={() => navigate("/html/orta")} // Navigate to Orta
          />
          <LearningCard
            title="Tajribali dasturchilar uchun"
            description="Ilg'or HTML texnikalarini va SEO optimizatsiyasini o'rganing."
            icon="👨‍💻"
            color="bg-purple-100"
            onClick={() => navigate("/html/mukammal")} // Navigate to Mukammal
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
        onClick={onClick} // Add onClick handler
      >
        Boshlash
      </button>
    </div>
  );
}

export default Html;