import React from "react";
import {Header} from "../components/index"
import { FaJs, FaBookOpen } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function JavaScript() {
  const navigate = useNavigate();

  return (
    <div
      id="app-container"
      className="bg-gradient-to-b from-yellow-100 to-white min-h-screen"
    >
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center mb-12">
          <FaJs className="text-6xl md:text-8xl text-yellow-400 mb-4" />
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-4">
            JavaScript: Zamonaviy Web Dasturlash
          </h1>
          <p className="text-lg md:text-xl text-gray-600 text-center max-w-2xl">
            JavaScript - web-dasturlashning eng mashhur tili bo'lib, dinamik web-saytlar 
            va ilovalar yaratish uchun ishlatiladi. U front-end va back-end dasturlashda 
            keng qo'llaniladi.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <LearningCard
            title="Boshlang'ich daraja"
            description="JavaScript asoslari, o'zgaruvchilar, funksiyalar va asosiy ma'lumotlar 
            tuzilmalarini o'rganing."
            icon={<FaBookOpen className="text-4xl" />}
            color="bg-yellow-100"
            onClick={() => navigate("/javascript/boshlangich")}
          />
          <LearningCard
            title="O'rta daraja"
            description="DOM bilan ishlash, asinxron dasturlash, API bilan ishlash va 
            zamonaviy JavaScript funksiyalarini o'rganing."
            icon="🚀"
            color="bg-yellow-200"
            onClick={() => navigate("/javascript/orta")}
          />
          <LearningCard
            title="Yuqori daraja"
            description="Ilg'or JavaScript patterlari, optimizatsiya, xavfsizlik va 
            framework'lar bilan ishlashni o'rganing."
            icon="⚡"
            color="bg-yellow-300"
            onClick={() => navigate("/javascript/mukammal")}
          />
        </div>
      </div>
    </div>
  );
}

function LearningCard({ title, description, icon, color, onClick }) {
  return (
    <div
      className={`${color} rounded-lg shadow-lg p-6 transition-transform duration-300 
      hover:scale-105 cursor-pointer`}
      onClick={onClick}
    >
      <div className="text-4xl mb-4">{icon}</div>
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-700">{description}</p>
      <button
        className="mt-4 bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 
        px-4 rounded transition duration-300"
      >
        Boshlash
      </button>
    </div>
  );
}

export default JavaScript;
