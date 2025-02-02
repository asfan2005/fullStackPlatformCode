import React from 'react';
import { Header } from "../components/index";
import { FaReact, FaBookOpen } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function HomePageReact() {
  const navigate = useNavigate();

  return (
    <div
      id="app-container"
      className="bg-gradient-to-b from-blue-100 to-white min-h-screen"
    >
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center mb-12">
          <FaReact className="text-6xl md:text-8xl text-blue-400 animate-spin-slow mb-4" />
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-4">
            ReactJS: Zamonaviy UI Kutubxonasi
          </h1>
          <p className="text-lg md:text-xl text-gray-600 text-center max-w-2xl">
            ReactJS - Facebook tomonidan yaratilgan ochiq manbali JavaScript kutubxonasi bo'lib, 
            foydalanuvchi interfeyslarini yaratish uchun mo'ljallangan. U komponentlarga asoslangan 
            yondashuv va virtual DOM orqali yuqori samaradorlikni ta'minlaydi.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <LearningCard
            title="Boshlang'ich daraja"
            description="React asoslari, JSX, komponentlar, props va state boshqaruvini o'rganing."
            icon={<FaBookOpen className="text-4xl" />}
            color="bg-blue-100"
            onClick={() => navigate("/react/boshlangich")}
          />
          <LearningCard
            title="O'rta daraja"
            description="Hooks, Context API, Router va form boshqaruvi kabi React kontseptsiyalarini o'rganing."
            icon="⚛️"
            color="bg-blue-200"
            onClick={() => navigate("/react/orta")}
          />
          <LearningCard
            title="Yuqori daraja"
            description="Redux, Performance optimizatsiya, Custom Hooks va Testing kabi ilg'or mavzularni o'rganing."
            icon="🚀"
            color="bg-blue-300"
            onClick={() => navigate("/react/mukammal")}
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
        className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 
        px-4 rounded transition duration-300"
      >
        Boshlash
      </button>
    </div>
  );
}

export default HomePageReact;