import React from "react";
import { Header } from "../index";
import { FaBookOpen, FaCss3Alt } from "react-icons/fa"; // Import FaBookOpen icon
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "../../index.css";

function Css() {
  const navigate = useNavigate(); // Initialize navigate

  return (
    <div
      id="app-container"
      className="bg-gradient-to-b from-blue-100 to-white min-h-screen"
    >
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center mb-12">
          <FaCss3Alt className="text-6xl md:text-8xl text-blue-600 mb-4" />
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-4">
            CSS: Veb Sahifalar Dizayni
          </h1>
          <p className="text-lg md:text-xl text-gray-600 text-center max-w-2xl">
            CSS (Cascading Style Sheets) - bu zamonaviy internetning dizayn
            asosi. U barcha web-sahifalarning ko'rinishini belgilaydi va ularni
            chiroyli qiladi.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <LearningCard
            title="Yosh o'rganuvchilar uchun"
            description="CSS asoslarini o'yin va qiziqarli mashg'ulotlar orqali o'rganing."
            icon={<FaBookOpen className="text-4xl" />}
            color="bg-green-100"
            onClick={() => navigate("/css/boshlangich")} // Navigate to Boshlangich
          />
          <LearningCard
            title="O'rta darajadagilar uchun"
            description="CSS strukturasi va dizaynini chuqurroq o'rganing."
            icon="🧑‍🎓"
            color="bg-blue-100"
            onClick={() => navigate("/css/orta")} // Navigate to Orta
          />
          <LearningCard
            title="Tajribali dasturchilar uchun"
            description="Ilg'or CSS texnikalarini va dizayn optimizatsiyasini o'rganing."
            icon="👨‍💻"
            color="bg-purple-100"
            onClick={() => navigate("/css/mukammal")} // Navigate to Mukammal
          />
        </div>
      </div>
    </div>
  );
}

function LearningCard({ title, description, icon, color, onClick }) {
  return (
    <div
      className={`${color} rounded-lg shadow-lg p-6 transition-transform duration-300 hover:scale-105`}
    >
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

export default Css;
