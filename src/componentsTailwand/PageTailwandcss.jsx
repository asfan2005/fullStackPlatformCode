import React from 'react'
import { Header } from "../components/index"
import { SiTailwindcss } from "react-icons/si"
import { FaBookOpen } from "react-icons/fa"
import { useNavigate } from "react-router-dom"

function PageTailwandcss() {
  const navigate = useNavigate();

  return (
    <div id="app-container" className="bg-gradient-to-b from-cyan-100 to-white min-h-screen">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center mb-12">
          <SiTailwindcss className="text-6xl md:text-8xl text-cyan-500 mb-4" />
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-4">
            Tailwind CSS: Zamonaviy Stillar Framework'i
          </h1>
          <p className="text-lg md:text-xl text-gray-600 text-center max-w-2xl">
            Tailwind CSS - utility-first CSS framework bo'lib, tez va samarali web-dizayn 
            yaratish imkonini beradi. U moslashuvchan va kengaytiriladigan dizayn tizimini 
            ta'minlaydi.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <LearningCard
            title="Boshlang'ich daraja"
            description="Tailwind CSS asoslari, utility klasslar, responsive dizayn va 
            asosiy komponentlarni o'rganing."
            icon={<FaBookOpen className="text-4xl" />}
            color="bg-cyan-100"
            onClick={() => navigate("/tailwindcss/boshlangich")}
          />
          <LearningCard
            title="O'rta daraja"
            description="Konfiguratsiya, custom stillar, animatsiyalar va 
            murakkab layoutlarni o'rganing."
            icon="🎨"
            color="bg-cyan-200"
            onClick={() => navigate("/tailwindcss/orta")}
          />
          <LearningCard
            title="Yuqori daraja"
            description="Tailwind CSS optimizatsiyasi, komponentlar kutubxonasi yaratish 
            va enterprise loyihalar uchun sozlash."
            icon="⚡"
            color="bg-cyan-300"
            onClick={() => navigate("/tailwindcss/mukammal")}
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
        className="mt-4 bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-2 
        px-4 rounded transition duration-300"
      >
        Boshlash
      </button>
    </div>
  );
}

export default PageTailwandcss