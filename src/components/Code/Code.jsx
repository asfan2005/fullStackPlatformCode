import React, { useState, useEffect } from "react";
import {
  FaYoutube,
  FaGithub,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

const projects = [
  {
    id: 1,
    title: "E-commerce Dashboard",
    image: "https://i.imgur.com/ZXxOq6N.png",
    youtubeLink: "https://youtu.be/c_-b_isI4vg",
    githubLink: "https://github.com/username/ecommerce-dashboard",
    category: "frontend",
    technologies: ["React", "Tailwind CSS", "Chart.js"],
    description:
      "Modern e-commerce dashboard with real-time analytics and inventory management.",
  },
  {
    id: 2,
    title: "Social Media App",
    image: "https://i.imgur.com/3tCJmlp.png",
    youtubeLink: "https://youtu.be/MqDlsjc8GLo",
    githubLink: "https://github.com/username/social-media-app",
    category: "fullstack",
    technologies: ["React Native", "Node.js", "MongoDB", "Socket.io"],
    description:
      "Full-stack social media app with real-time messaging and post sharing features.",
  },
  {
    id: 3,
    title: "AI-Powered Chatbot",
    image: "https://i.imgur.com/ZXxOq6N.png",
    youtubeLink: "https://youtu.be/AI-Chatbot",
    githubLink: "https://github.com/username/ai-chatbot",
    category: "backend",
    technologies: ["Python", "TensorFlow", "Flask", "SQLite"],
    description:
      "Intelligent chatbot using natural language processing for customer support.",
  },
  {
    id: 4,
    title: "Fitness Tracking App",
    image: "https://i.imgur.com/3tCJmlp.png",
    youtubeLink: "https://youtu.be/Fitness-App",
    githubLink: "https://github.com/username/fitness-tracker",
    category: "mobile",
    technologies: ["React Native", "Expo", "Firebase"],
    description:
      "Mobile app for tracking workouts, nutrition, and personal fitness goals.",
  },
  {
    id: 5,
    title: "Weather Forecast Dashboard",
    image: "https://i.imgur.com/ZXxOq6N.png",
    youtubeLink: "https://youtu.be/Weather-Dashboard",
    githubLink: "https://github.com/username/weather-dashboard",
    category: "frontend",
    technologies: ["Vue.js", "Vuetify", "OpenWeatherMap API"],
    description:
      "Interactive weather dashboard with 7-day forecasts and location-based services.",
  },
  {
    id: 6,
    title: "Task Management System",
    image: "https://i.imgur.com/3tCJmlp.png",
    youtubeLink: "https://youtu.be/Task-Management",
    githubLink: "https://github.com/username/task-management",
    category: "fullstack",
    technologies: ["Angular", "Express.js", "PostgreSQL"],
    description:
      "Comprehensive task management system with team collaboration features.",
  },
  {
    id: 7,
    title: "Cryptocurrency Portfolio Tracker",
    image: "https://i.imgur.com/ZXxOq6N.png",
    youtubeLink: "https://youtu.be/Crypto-Tracker",
    githubLink: "https://github.com/username/crypto-tracker",
    category: "frontend",
    technologies: ["React", "Redux", "CoinGecko API"],
    description:
      "Real-time cryptocurrency portfolio tracker with price alerts and historical data.",
  },
  {
    id: 8,
    title: "Online Learning Platform",
    image: "https://i.imgur.com/3tCJmlp.png",
    youtubeLink: "https://youtu.be/Learning-Platform",
    githubLink: "https://github.com/username/learning-platform",
    category: "fullstack",
    technologies: ["Next.js", "Django", "PostgreSQL"],
    description:
      "Comprehensive online learning platform with video courses and interactive quizzes.",
  },
  {
    id: 9,
    title: "IoT Home Automation",
    image: "https://i.imgur.com/ZXxOq6N.png",
    youtubeLink: "https://youtu.be/IoT-Home",
    githubLink: "https://github.com/username/iot-home",
    category: "backend",
    technologies: ["Python", "MQTT", "Raspberry Pi"],
    description:
      "IoT-based home automation system for controlling lights, temperature, and security.",
  },
  {
    id: 10,
    title: "Augmented Reality Shopping App",
    image: "https://i.imgur.com/3tCJmlp.png",
    youtubeLink: "https://youtu.be/AR-Shopping",
    githubLink: "https://github.com/username/ar-shopping",
    category: "mobile",
    technologies: ["Unity", "ARKit", "C#"],
    description:
      "Mobile app using augmented reality for virtual try-on of clothing and accessories.",
  },
  {
    id: 11,
    title: "Blog CMS",
    image: "https://i.imgur.com/ZXxOq6N.png",
    youtubeLink: "https://youtu.be/Blog-CMS",
    githubLink: "https://github.com/username/blog-cms",
    category: "fullstack",
    technologies: ["Gatsby", "Strapi", "GraphQL"],
    description:
      "Modern blog content management system with a headless CMS architecture.",
  },
  {
    id: 12,
    title: "Stock Market Analyzer",
    image: "https://i.imgur.com/3tCJmlp.png",
    youtubeLink: "https://youtu.be/Stock-Analyzer",
    githubLink: "https://github.com/username/stock-analyzer",
    category: "backend",
    technologies: ["Python", "Pandas", "Flask", "Alpha Vantage API"],
    description:
      "Stock market analysis tool with predictive modeling and historical data visualization.",
  },
  {
    id: 13,
    title: "Virtual Event Platform",
    image: "https://i.imgur.com/ZXxOq6N.png",
    youtubeLink: "https://youtu.be/Virtual-Event",
    githubLink: "https://github.com/username/virtual-event",
    category: "fullstack",
    technologies: ["React", "WebRTC", "Node.js", "Socket.io"],
    description:
      "Virtual event platform with live streaming, chat, and interactive sessions.",
  },
  {
    id: 14,
    title: "Recipe Sharing App",
    image: "https://i.imgur.com/3tCJmlp.png",
    youtubeLink: "https://youtu.be/Recipe-App",
    githubLink: "https://github.com/username/recipe-app",
    category: "mobile",
    technologies: ["Flutter", "Firebase", "Algolia"],
    description:
      "Mobile app for sharing and discovering recipes with social features and search functionality.",
  },
  {
    id: 15,
    title: "Personal Finance Manager",
    image: "https://i.imgur.com/ZXxOq6N.png",
    youtubeLink: "https://youtu.be/Finance-Manager",
    githubLink: "https://github.com/username/finance-manager",
    category: "frontend",
    technologies: ["Vue.js", "Vuex", "D3.js"],
    description:
      "Personal finance management tool with budget tracking and expense visualization.",
  },
  {
    id: 16,
    title: "Music Streaming Service",
    image: "https://i.imgur.com/3tCJmlp.png",
    youtubeLink: "https://youtu.be/Music-Streaming",
    githubLink: "https://github.com/username/music-streaming",
    category: "fullstack",
    technologies: ["React", "Express.js", "MongoDB", "AWS S3"],
    description:
      "Music streaming platform with personalized playlists and social sharing features.",
  },
  {
    id: 17,
    title: "Real-time Collaboration Tool",
    image: "https://i.imgur.com/ZXxOq6N.png",
    youtubeLink: "https://youtu.be/Collaboration-Tool",
    githubLink: "https://github.com/username/collaboration-tool",
    category: "fullstack",
    technologies: ["React", "Socket.io", "Redis", "MongoDB"],
    description:
      "Real-time collaboration tool for teams with document editing and chat functionality.",
  },
  {
    id: 18,
    title: "AI Image Recognition App",
    image: "https://i.imgur.com/3tCJmlp.png",
    youtubeLink: "https://youtu.be/AI-Image-Recognition",
    githubLink: "https://github.com/username/ai-image-recognition",
    category: "mobile",
    technologies: ["React Native", "TensorFlow.js", "Express.js"],
    description:
      "Mobile app using AI for image recognition and classification.",
  },
  {
    id: 19,
    title: "Job Board Platform",
    image: "https://i.imgur.com/ZXxOq6N.png",
    youtubeLink: "https://youtu.be/Job-Board",
    githubLink: "https://github.com/username/job-board",
    category: "fullstack",
    technologies: ["Ruby on Rails", "PostgreSQL", "Elasticsearch"],
    description:
      "Job board platform with advanced search and applicant tracking system.",
  },
  {
    id: 20,
    title: "Smart Home Energy Monitor",
    image: "https://i.imgur.com/3tCJmlp.png",
    youtubeLink: "https://youtu.be/Energy-Monitor",
    githubLink: "https://github.com/username/energy-monitor",
    category: "backend",
    technologies: ["Python", "InfluxDB", "Grafana"],
    description:
      "IoT-based smart home energy monitoring system with real-time data visualization.",
  },
  {
    id: 21,
    title: "Language Learning App",
    image: "https://i.imgur.com/ZXxOq6N.png",
    youtubeLink: "https://youtu.be/Language-Learning",
    githubLink: "https://github.com/username/language-learning",
    category: "mobile",
    technologies: ["React Native", "Redux", "Node.js"],
    description:
      "Interactive language learning app with speech recognition and gamification elements.",
  },
  {
    id: 22,
    title: "Inventory Management System",
    image: "https://i.imgur.com/3tCJmlp.png",
    youtubeLink: "https://youtu.be/Inventory-Management",
    githubLink: "https://github.com/username/inventory-management",
    category: "fullstack",
    technologies: ["Angular", "NestJS", "PostgreSQL"],
    description:
      "Comprehensive inventory management system with barcode scanning and reporting features.",
  },
  {
    id: 23,
    title: "Blockchain Voting System",
    image: "https://i.imgur.com/ZXxOq6N.png",
    youtubeLink: "https://youtu.be/Blockchain-Voting",
    githubLink: "https://github.com/username/blockchain-voting",
    category: "backend",
    technologies: ["Solidity", "Ethereum", "Web3.js"],
    description:
      "Secure and transparent voting system using blockchain technology.",
  },
  {
    id: 24,
    title: "Augmented Reality Navigation",
    image: "https://i.imgur.com/3tCJmlp.png",
    youtubeLink: "https://youtu.be/AR-Navigation",
    githubLink: "https://github.com/username/ar-navigation",
    category: "mobile",
    technologies: ["ARCore", "Kotlin", "Google Maps API"],
    description:
      "Mobile app using augmented reality for indoor and outdoor navigation.",
  },
  {
    id: 25,
    title: "Cloud File Storage Service",
    image: "https://i.imgur.com/ZXxOq6N.png",
    youtubeLink: "https://youtu.be/Cloud-Storage",
    githubLink: "https://github.com/username/cloud-storage",
    category: "fullstack",
    technologies: ["React", "Node.js", "AWS S3", "MongoDB"],
    description:
      "Secure cloud file storage service with file sharing and synchronization features.",
  },
  {
    id: 26,
    title: "AI-powered Chess Game",
    image: "https://i.imgur.com/3tCJmlp.png",
    youtubeLink: "https://youtu.be/AI-Chess",
    githubLink: "https://github.com/username/ai-chess",
    category: "frontend",
    technologies: ["React", "Chess.js", "Stockfish"],
    description:
      "Web-based chess game with AI opponent using the Stockfish chess engine.",
  },
  {
    id: 27,
    title: "Telemedicine Platform",
    image: "https://i.imgur.com/ZXxOq6N.png",
    youtubeLink: "https://youtu.be/Telemedicine",
    githubLink: "https://github.com/username/telemedicine",
    category: "fullstack",
    technologies: ["React", "Express.js", "MongoDB", "WebRTC"],
    description:
      "Telemedicine platform for virtual doctor consultations and appointment scheduling.",
  },
  {
    id: 28,
    title: "Drone Delivery Management",
    image: "https://i.imgur.com/3tCJmlp.png",
    youtubeLink: "https://youtu.be/Drone-Delivery",
    githubLink: "https://github.com/username/drone-delivery",
    category: "backend",
    technologies: ["Python", "Django", "PostgreSQL", "Redis"],
    description:
      "Backend system for managing autonomous drone deliveries and route optimization.",
  },
  {
    id: 29,
    title: "Virtual Reality Art Gallery",
    image: "https://i.imgur.com/ZXxOq6N.png",
    youtubeLink: "https://youtu.be/VR-Art-Gallery",
    githubLink: "https://github.com/username/vr-art-gallery",
    category: "frontend",
    technologies: ["A-Frame", "Three.js", "WebVR"],
    description:
      "Virtual reality art gallery for showcasing and exploring digital artworks.",
  },
  {
    id: 30,
    title: "Smart City Traffic Management",
    image: "https://i.imgur.com/3tCJmlp.png",
    youtubeLink: "https://youtu.be/Smart-Traffic",
    githubLink: "https://github.com/username/smart-traffic",
    category: "fullstack",
    technologies: ["React", "Node.js", "MongoDB", "TensorFlow"],
    description:
      "Smart city traffic management system with real-time data analysis and predictive modeling.",
  },
];

const categories = ["All", "Frontend", "Backend", "Mobile", "Fullstack"];

function Code() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const projectsPerPage = 10;

  useEffect(() => {
    const filtered =
      activeFilter === "All"
        ? projects
        : projects.filter(
            (project) =>
              project.category.toLowerCase() === activeFilter.toLowerCase()
          );
    setFilteredProjects(filtered);
    setCurrentPage(1);
  }, [activeFilter]);

  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = filteredProjects.slice(
    indexOfFirstProject,
    indexOfLastProject
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-wrap  gap-2 mb-8">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveFilter(category)}
            className={`px-4 py-2 mx-2 rounded  text-sm font-medium transition-colors ${
              activeFilter === category
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentProjects.map((project) => (
          <div
            key={project.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
              <p className="text-sm text-gray-600 mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-gray-200 text-xs rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href={project.youtubeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-red-600 hover:text-red-700"
                >
                  <FaYoutube className="mr-1" />
                  YouTube
                </a>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-gray-700 hover:text-gray-900"
                >
                  <FaGithub className="mr-1" />
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <button
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
          className="mx-1 px-3 py-2 bg-gray-200 text-gray-700 rounded-md disabled:opacity-50"
        >
          <FaChevronLeft />
        </button>
        {Array.from({
          length: Math.ceil(filteredProjects.length / projectsPerPage),
        }).map((_, index) => (
          <button
            key={index}
            onClick={() => paginate(index + 1)}
            className={`mx-1 px-3 py-2 rounded-md ${
              currentPage === index + 1
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            {index + 1}
          </button>
        ))}
        <button
          onClick={() => paginate(currentPage + 1)}
          disabled={
            currentPage === Math.ceil(filteredProjects.length / projectsPerPage)
          }
          className="mx-1 px-3 py-2 bg-gray-200 text-gray-700 rounded-md disabled:opacity-50"
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
}

export default Code;
