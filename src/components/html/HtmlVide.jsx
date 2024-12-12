import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../html/HtmlVide.css";
function HtmlVide() {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const videos = [
    {
      id: 1,
      videoId: "9dUhZq9dkHM",
      title: "HTML Tutorial 1",
      thumbnail: "https://img.youtube.com/vi/9dUhZq9dkHM/maxresdefault.jpg",
      description: "HTML asoslari va tuzilishi haqida",
      duration: "15:30",
      level: "Boshlang'ich",
      views: "1.2K",
    },
    {
      id: 2,
      videoId: "WVHcX-oYlgA",
      title: "HTML Tutorial 2",
      thumbnail: "https://img.youtube.com/vi/WVHcX-oYlgA/maxresdefault.jpg",
      description: "HTML elementlari va atributlari",
      duration: "18:45",
      level: "O'rta",
      views: "1.5K",
    },
    {
      id: 3,
      videoId: "YBu0Sz2MWgE",
      title: "HTML Tutorial 3",
      thumbnail: "https://img.youtube.com/vi/YBu0Sz2MWgE/maxresdefault.jpg",
      description: "HTML formalar va inputlar",
      duration: "20:15",
      level: "O'rta",
      views: "1.8K",
    },
    {
      id: 4,
      videoId: "W7-lNTBsHR4",
      title: "HTML Tutorial 4",
      thumbnail: "https://img.youtube.com/vi/W7-lNTBsHR4/maxresdefault.jpg",
      description: "HTML jadvallar va ro'yxatlar",
      duration: "22:30",
      level: "Yuqori",
      views: "2K",
    },
    {
      id: 5,
      videoId: "E9OKpacyUSc",
      title: "HTML Web haqida",
      thumbnail: "https://img.youtube.com/vi/E9OKpacyUSc/maxresdefault.jpg",
      description: "HTML Web Haqida qiqacha malumotlar",
      duration: "10:39",
      level: "Boshlang'ich",
      views: "1.2K",
    },
    {
      id: 6,
      videoId: "_j7yneg6if0",
      title: "HTML Dasturlash Kirish",
      thumbnail: "https://i.ytimg.com/vi/_j7yneg6if0/hqdefault.jpg",
      description: "HTML Dasturlashga kirish va Html haqida malumot",
      duration: "10:01",
      level: "Boshlang'ich",
      views: "1.5K",
    },
    {
      id: 7,
      videoId: "M6AS_IdZK7s",
      title: "HTML Dasturlashda dasturlash muhiti",
      thumbnail: "https://i.ytimg.com/vi/M6AS_IdZK7s/hqdefault.jpg",
      description: "HTML Dasturlashda dasturlash muhiti haqida",
      duration: "9:54",
      level: "Boshlang'ich",
      views: "1.8K",
    },
    {
      id: 8,
      videoId: "1Bmqo8tsOq8",
      thumbnail: "https://i.ytimg.com/vi/1Bmqo8tsOq8/hqdefault.jpg", // URL manzili tuzatildi
      title: "Hujjat strukturasi va !DOCTYPE",
      description:
        "HTML Hujjat strukturasi va !DOCTYPE haqida toliq malumotlar",
      duration: "9:06",
      level: "Boshlang'ich",
      views: "2K",
    },
    {
      id: 9,
      videoId: "jMermL9QA48",
      thumbnail: "https://i.ytimg.com/vi/jMermL9QA48/hqdefault.jpg",
      title: "5. Elementlar va attributelar",
      description: "HTML da Elementlar ca attributelar haqida toliq malumot",
      duration: "8:07",
      level: "Boshlang'ich",
      views: "1.5K",
    },
    {
      id: 14,
      videoId: "7_USXxmn7DM",
      title: "HTML darslari 5-dars | Rasmlar",
      thumbnail: "https://img.youtube.com/vi/7_USXxmn7DM/maxresdefault.jpg",
      description: "HTML da rasmlar bilan ishlash",
      duration: "17:15",
      level: "Boshlang'ich",
      views: "9.1K",
    },
    {
      id: 16,
      videoId: "UB1O30fR-EE",
      title: "HTML darslari 7-dars | Jadvallar",
      thumbnail: "https://img.youtube.com/vi/UB1O30fR-EE/maxresdefault.jpg",
      description: "HTML da jadvallar yaratish",
      duration: "21:05",
      level: "Boshlang'ich",
      views: "7.8K",
    },
    {
      id: 17,
      videoId: "f8pAb3IuECk",
      title: "HTML darslari 8-dars | Formalar",
      thumbnail: "https://img.youtube.com/vi/f8pAb3IuECk/maxresdefault.jpg",
      description: "HTML da formalar yaratish",
      duration: "23:15",
      level: "Boshlang'ich",
      views: "8.9K",
    },
    {
      id: 19,
      videoId: "dD2EISBDjWM",
      title: "HTML darslari 10-dars | Audio va Video",
      thumbnail: "https://img.youtube.com/vi/dD2EISBDjWM/maxresdefault.jpg",
      description: "HTML da audio va video bilan ishlash",
      duration: "22:45",
      level: "Boshlang'ich",
      views: "8.2K",
    },
    // O'rta daraja
    {
      id: 20,
      videoId: "PlxWf493en4",
      title: "HTML darslari 11-dars | HTML5 Semantik elementlar",
      thumbnail: "https://img.youtube.com/vi/PlxWf493en4/maxresdefault.jpg",
      description: "HTML5 ning semantik elementlari",
      duration: "25:10",
      level: "O'rta",
      views: "7.3K",
    },
    {
      id: 21,
      videoId: "FEmysQARWFU",
      title: "HTML darslari 12-dars | Meta teglar",
      thumbnail: "https://img.youtube.com/vi/FEmysQARWFU/maxresdefault.jpg",
      description: "HTML meta teglari va SEO",
      duration: "19:55",
      level: "O'rta",
      views: "6.9K",
    },
    {
      id: 23,
      videoId: "rIO5326FgPE",
      title: "HTML darslari 14-dars | SVG",
      thumbnail: "https://img.youtube.com/vi/rIO5326FgPE/maxresdefault.jpg",
      description: "HTML da SVG grafikalar",
      duration: "24:15",
      level: "O'rta",
      views: "6.7K",
    },
    {
      id: 24,
      videoId: "Tc4IsPFB01E",
      title: "HTML darslari 15-dars | Drag and Drop",
      thumbnail: "https://img.youtube.com/vi/Tc4IsPFB01E/maxresdefault.jpg",
      description: "HTML Drag and Drop API",
      duration: "23:40",
      level: "O'rta",
      views: "6.5K",
    },
    {
      id: 26,
      videoId: "9M4XKi25I2M",
      title: "HTML darslari 17-dars | Geolocation",
      thumbnail: "https://img.youtube.com/vi/9M4XKi25I2M/maxresdefault.jpg",
      description: "HTML5 Geolocation API",
      duration: "22:50",
      level: "O'rta",
      views: "6.8K",
    },
    {
      id: 28,
      videoId: "PkZNo7MFNFg",
      title: "HTML darslari 19-dars | Server-Sent Events",
      thumbnail: "https://img.youtube.com/vi/PkZNo7MFNFg/maxresdefault.jpg",
      description: "HTML5 Server-Sent Events",
      duration: "25:30",
      level: "O'rta",
      views: "6.2K",
    },
    {
      id: 29,
      videoId: "hdI2bqOjy3c",
      title: "HTML darslari 20-dars | WebSocket",
      thumbnail: "https://img.youtube.com/vi/hdI2bqOjy3c/maxresdefault.jpg",
      description: "HTML5 WebSocket API",
      duration: "29:45",
      level: "O'rta",
      views: "7.4K",
    },
    // Yuqori daraja
    {
      id: 30,
      videoId: "vEROU2XtPR8",
      title: "HTML darslari 21-dars | HTML Templates",
      thumbnail: "https://img.youtube.com/vi/vEROU2XtPR8/maxresdefault.jpg",
      description: "HTML Templates va Custom Elements",
      duration: "31:20",
      level: "Yuqori",
      views: "5.8K",
    },
    {
      id: 31,
      videoId: "gXkqy0b4M5g",
      title: "HTML darslari 22-dars | Shadow DOM",
      thumbnail: "https://img.youtube.com/vi/gXkqy0b4M5g/maxresdefault.jpg",
      description: "HTML Shadow DOM va Web Components",
      duration: "33:45",
      level: "Yuqori",
      views: "5.5K",
    },
    {
      id: 33,
      videoId: "1PnVor36_40",
      title: "HTML darslari 24-dars | WebAssembly",
      thumbnail: "https://img.youtube.com/vi/1PnVor36_40/maxresdefault.jpg",
      description: "WebAssembly asoslari",
      duration: "32:25",
      level: "Yuqori",
      views: "5.3K",
    },
    {
      id: 34,
      videoId: "DHvZLI7Db8E",
      title: "HTML darslari 25-dars | Web Components",
      thumbnail: "https://img.youtube.com/vi/DHvZLI7Db8E/maxresdefault.jpg",
      description: "Web Components yaratish",
      duration: "34:50",
      level: "Yuqori",
      views: "5.7K",
    },
    {
      id: 35,
      videoId: "cuEtnrL9-H0",
      title: "HTML darslari 26-dars | Accessibility",
      thumbnail: "https://img.youtube.com/vi/cuEtnrL9-H0/maxresdefault.jpg",
      description: "Web Accessibility (WCAG)",
      duration: "30:15",
      level: "Yuqori",
      views: "5.4K",
    },
    {
      id: 36,
      videoId: "ok-plXXHlWw",
      title: "HTML darslari 27-dars | SEO Optimization",
      thumbnail: "https://img.youtube.com/vi/ok-plXXHlWw/maxresdefault.jpg",
      description: "HTML SEO optimizatsiyasi",
      duration: "36:30",
      level: "Yuqori",
      views: "5.9K",
    },
    {
      id: 38,
      videoId: "cuEtnrL9-H0",
      title: "HTML darslari 29-dars | Security",
      thumbnail: "https://img.youtube.com/vi/cuEtnrL9-H0/maxresdefault.jpg",
      description: "Web Security asoslari",
      duration: "37:45",
      level: "Yuqori",
      views: "5.2K",
    },
    {
      id: 39,
      videoId: "916GWv2Qs08",
      title: "HTML darslari 30-dars | Best Practices",
      thumbnail: "https://img.youtube.com/vi/916GWv2Qs08/maxresdefault.jpg",
      description: "HTML Best Practices va yakun",
      duration: "40:00",
      level: "Yuqori",
      views: "6.3K",
    },
    {
      id: 40,
      videoId: "pQN-pnXPaVg",
      title: "HTML darslari 1-dars | HTML To'liq Kurs",
      thumbnail: "https://img.youtube.com/vi/pQN-pnXPaVg/maxresdefault.jpg",
      description: "HTML asoslari va web dasturlashga kirish",
      duration: "2:02:31",
      level: "Boshlang'ich",
      views: "15M",
    },
    {
      id: 41,
      videoId: "qz0aGYrrlhU",
      title: "HTML darslari 2-dars | HTML Strukturasi",
      thumbnail: "https://img.youtube.com/vi/qz0aGYrrlhU/maxresdefault.jpg",
      description: "HTML hujjat strukturasi va asosiy teglar",
      duration: "1:27:54",
      level: "Boshlang'ich",
      views: "2.8M",
    },
    {
      id: 42,
      videoId: "UB1O30fR-EE",
      title: "HTML darslari 3-dars | HTML Elementlari",
      thumbnail: "https://img.youtube.com/vi/UB1O30fR-EE/maxresdefault.jpg",
      description: "HTML elementlari va ularning turlari",
      duration: "1:24:52",
      level: "Boshlang'ich",
      views: "3.1M",
    },
    {
      id: 43,
      videoId: "kUMe1FH4CHE",
      title: "HTML darslari 4-dars | HTML Formalar",
      thumbnail: "https://img.youtube.com/vi/kUMe1FH4CHE/maxresdefault.jpg",
      description: "HTML formlari va input elementlari",
      duration: "1:31:05",
      level: "Boshlang'ich",
      views: "1.2M",
    },
    {
      id: 44,
      videoId: "mJgBOIoGihA",
      title: "HTML darslari 5-dars | HTML Jadvallar",
      thumbnail: "https://img.youtube.com/vi/mJgBOIoGihA/maxresdefault.jpg",
      description: "HTML jadvallari va ularning xususiyatlari",
      duration: "42:31",
      level: "Boshlang'ich",
      views: "890K",
    },

    {
      id: 46,
      videoId: "PlxWf493en4",
      title: "HTML darslari 7-dars | HTML Semantika",
      thumbnail: "https://img.youtube.com/vi/PlxWf493en4/maxresdefault.jpg",
      description: "HTML semantik elementlari",
      duration: "1:15:45",
      level: "Boshlang'ich",
      views: "950K",
    },
    {
      id: 47,
      videoId: "916GWv2Qs08",
      title: "HTML darslari 8-dars | HTML Lists",
      thumbnail: "https://img.youtube.com/vi/916GWv2Qs08/maxresdefault.jpg",
      description: "HTML ro'yxatlar bilan ishlash",
      duration: "48:33",
      level: "Boshlang'ich",
      views: "680K",
    },
    {
      id: 48,
      videoId: "HD13eq_Pmp8",
      title: "HTML darslari 9-dars | HTML Links",
      thumbnail: "https://img.youtube.com/vi/HD13eq_Pmp8/maxresdefault.jpg",
      description: "HTML havolalar va navigatsiya",
      duration: "1:02:15",
      level: "Boshlang'ich",
      views: "810K",
    },
    {
      id: 49,
      videoId: "DPnqb74Smug",
      title: "HTML darslari 10-dars | HTML Images",
      thumbnail: "https://img.youtube.com/vi/DPnqb74Smug/maxresdefault.jpg",
      description: "HTML rasmlar bilan ishlash",
      duration: "58:42",
      level: "Boshlang'ich",
      views: "750K",
    },
    // O'RTA DARAJA (11-20)
    {
      id: 50,
      videoId: "ok-plXXHlWw",
      title: "HTML darslari 11-dars | HTML5 Features",
      thumbnail: "https://img.youtube.com/vi/ok-plXXHlWw/maxresdefault.jpg",
      description: "HTML5 yangi xususiyatlari",
      duration: "1:12:33",
      level: "O'rta",
      views: "620K",
    },
    {
      id: 51,
      videoId: "cuEtnrL9-H0",
      title: "HTML darslari 12-dars | Canvas",
      thumbnail: "https://img.youtube.com/vi/cuEtnrL9-H0/maxresdefault.jpg",
      description: "HTML Canvas elementi bilan ishlash",
      duration: "1:45:20",
      level: "O'rta",
      views: "580K",
    },
    {
      id: 52,
      videoId: "gXkqy0b4M5g",
      title: "HTML darslari 13-dars | SVG Graphics",
      thumbnail: "https://img.youtube.com/vi/gXkqy0b4M5g/maxresdefault.jpg",
      description: "HTML SVG grafikalar",
      duration: "1:28:15",
      level: "O'rta",
      views: "490K",
    },
    {
      id: 53,
      videoId: "PkZNo7MFNFg",
      title: "HTML darslari 14-dars | Drag & Drop",
      thumbnail: "https://img.youtube.com/vi/PkZNo7MFNFg/maxresdefault.jpg",
      description: "HTML Drag and Drop API",
      duration: "1:05:45",
      level: "O'rta",
      views: "520K",
    },
    {
      id: 55,
      videoId: "1PnVor36_40",
      title: "HTML darslari 16-dars | Geolocation",
      thumbnail: "https://img.youtube.com/vi/1PnVor36_40/maxresdefault.jpg",
      description: "HTML5 Geolocation API",
      duration: "44:25",
      level: "O'rta",
      views: "380K",
    },
    {
      id: 56,
      videoId: "DHvZLI7Db8E",
      title: "HTML darslari 17-dars | Web Workers",
      thumbnail: "https://img.youtube.com/vi/DHvZLI7Db8E/maxresdefault.jpg",
      description: "HTML5 Web Workers",
      duration: "1:15:50",
      level: "O'rta",
      views: "410K",
    },
    {
      id: 58,
      videoId: "vEROU2XtPR8",
      title: "HTML darslari 19-dars | WebSocket",
      thumbnail: "https://img.youtube.com/vi/vEROU2XtPR8/maxresdefault.jpg",
      description: "HTML5 WebSocket API",
      duration: "1:18:45",
      level: "O'rta",
      views: "440K",
    },
    {
      id: 59,
      videoId: "hdI2bqOjy3c",
      title: "HTML darslari 20-dars | Responsive Design",
      thumbnail: "https://img.youtube.com/vi/hdI2bqOjy3c/maxresdefault.jpg",
      description: "HTML Responsive Design asoslari",
      duration: "1:33:00",
      level: "O'rta",
      views: "670K",
    },
    // YUQORI DARAJA (21-30)
    {
      id: 60,
      videoId: "7S_tz1z_5bA",
      title: "HTML darslari 21-dars | Web Components",
      thumbnail: "https://img.youtube.com/vi/7S_tz1z_5bA/maxresdefault.jpg",
      description: "Web Components yaratish",
      duration: "2:10:25",
      level: "Yuqori",
      views: "320K",
    },
    {
      id: 61,
      videoId: "Oe421EPjeBE",
      title: "HTML darslari 22-dars | Shadow DOM",
      thumbnail: "https://img.youtube.com/vi/Oe421EPjeBE/maxresdefault.jpg",
      description: "Shadow DOM va Custom Elements",
      duration: "1:52:15",
      level: "Yuqori",
      views: "280K",
    },
    {
      id: 62,
      videoId: "fYq5PXgSsbE",
      title: "HTML darslari 23-dars | Progressive Web Apps",
      thumbnail: "https://img.youtube.com/vi/fYq5PXgSsbE/maxresdefault.jpg",
      description: "PWA yaratish",
      duration: "2:25:10",
      level: "Yuqori",
      views: "390K",
    },
    {
      id: 63,
      videoId: "DLX62G4lc44",
      title: "HTML darslari 24-dars | Performance Optimization",
      thumbnail: "https://img.youtube.com/vi/DLX62G4lc44/maxresdefault.jpg",
      description: "Web Performance optimizatsiyasi",
      duration: "1:48:25",
      level: "Yuqori",
      views: "260K",
    },
    {
      id: 64,
      videoId: "2Ji-clqUYnA",
      title: "HTML darslari 25-dars | Security",
      thumbnail: "https://img.youtube.com/vi/2Ji-clqUYnA/maxresdefault.jpg",
      description: "Web xavfsizlik asoslari",
      duration: "1:55:50",
      level: "Yuqori",
      views: "310K",
    },
    {
      id: 65,
      videoId: "2md4HQNRqJA",
      title: "HTML darslari 26-dars | SEO",
      thumbnail: "https://img.youtube.com/vi/2md4HQNRqJA/maxresdefault.jpg",
      description: "SEO optimizatsiyasi",
      duration: "1:42:15",
      level: "Yuqori",
      views: "340K",
    },
    {
      id: 66,
      videoId: "eIrMbAQSU34",
      title: "HTML darslari 27-dars | Accessibility",
      thumbnail: "https://img.youtube.com/vi/eIrMbAQSU34/maxresdefault.jpg",
      description: "Web Accessibility (WCAG)",
      duration: "2:05:30",
      level: "Yuqori",
      views: "290K",
    },
    {
      id: 67,
      videoId: "RLtyhwFtXQA",
      title: "HTML darslari 28-dars | Testing",
      thumbnail: "https://img.youtube.com/vi/RLtyhwFtXQA/maxresdefault.jpg",
      description: "HTML Testing metodlari",
      duration: "1:58:20",
      level: "Yuqori",
      views: "270K",
    },
    {
      id: 68,
      videoId: "PFmuCDHHpwk",
      title: "HTML darslari 29-dars | Best Practices",
      thumbnail: "https://img.youtube.com/vi/PFmuCDHHpwk/maxresdefault.jpg",
      description: "HTML Best Practices",
      duration: "2:15:45",
      level: "Yuqori",
      views: "330K",
    },
    {
      id: 69,
      videoId: "c9B4TPnak1A",
      title: "HTML darslari 30-dars | Advanced Concepts",
      thumbnail: "https://img.youtube.com/vi/c9B4TPnak1A/maxresdefault.jpg",
      description: "HTML Advanced kontseptsiyalar",
      duration: "2:30:00",
      level: "Yuqori",
      views: "300K",
    },
  ];

  return (
    <div className="w-full min-h-screen overflow-y-auto bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section - height kamaytirildi */}
      <div className="w-full bg-gradient-to-b from-blue-50 to-transparent py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center relative">
            {/* Background Elements - o'lchamlari kamaytirildi */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-56 h-56 bg-blue-100 rounded-full filter blur-3xl opacity-40 animate-pulse"></div>
              <div className="w-56 h-56 bg-indigo-100 rounded-full filter blur-3xl opacity-40 -ml-20 animate-pulse delay-100"></div>
            </div>

            {/* Main Content - padding va margin kamaytirildi */}
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center p-2 bg-blue-50 rounded-full mb-4 shadow-md">
                <svg
                  className="w-6 h-6 text-blue-600 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3z" />
                </svg>
                <span className="text-blue-700 font-bold text-base">
                  HTML Tutorial Series
                </span>
              </div>

              <h1 className="text-4xl font-extrabold text-gray-900 mb-6 tracking-tight">
                HTML Video Darsliklar
              </h1>

              <div className="flex flex-wrap justify-center gap-6 mb-6">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-yellow-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-base font-semibold text-gray-900">
                      Professional
                    </p>
                    <p className="text-xs text-gray-500">
                      Yuqori sifatli kontent
                    </p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-green-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-base font-semibold text-gray-900">
                      Sertifikatlangan
                    </p>
                    <p className="text-xs text-gray-500">Rasmiy sertifikat</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Videos Grid - padding kamaytirildi */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {videos.map((video) => (
            <motion.div
              key={video.id}
              whileHover={{ y: -4, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div
                className="cursor-pointer"
                onClick={() => setSelectedVideo(video)}
              >
                <div className="relative">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-40 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent">
                    <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
                      <span className="px-3 py-1 bg-red-600 text-white text-sm rounded-full">
                        {video.duration}
                      </span>
                      <span className="flex items-center text-white text-sm">
                        <svg
                          className="w-4 h-4 mr-1"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                          <path
                            fillRule="evenodd"
                            d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {video.views}
                      </span>
                    </div>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform duration-300">
                      <svg
                        className="w-8 h-8 text-red-600"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-base font-bold text-gray-900 mb-1">
                    {video.title}
                  </h3>
                  <p className="text-xs text-gray-600 mb-3">
                    {video.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span
                      className={`px-2 py-1 rounded-full text-xs ${
                        video.level === "Boshlang'ich"
                          ? "bg-green-100 text-green-800"
                          : video.level === "O'rta"
                          ? "bg-yellow-100 text-yellow-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {video.level}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Video Modal - yangilangan stillar */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm"
          >
            <div className="min-h-screen flex items-center justify-center p-4">
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-2xl overflow-hidden shadow-2xl w-full max-w-6xl"
              >
                <div className="relative pt-[56.25%]">
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src={`https://www.youtube.com/embed/${selectedVideo.videoId}?autoplay=1`}
                    title={selectedVideo.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">
                        {selectedVideo.title}
                      </h3>
                      <p className="mt-2 text-gray-600">
                        {selectedVideo.description}
                      </p>
                    </div>
                    <button
                      onClick={() => setSelectedVideo(null)}
                      className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
                    >
                      <svg
                        className="w-6 h-6 text-gray-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default HtmlVide;
