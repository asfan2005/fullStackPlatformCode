import React, { useState, useEffect } from "react";
import { Music, Video, Eye, EyeOff } from "lucide-react";
import "./h.css";

const HtmlAudioVideo = () => {
  const [activeCode, setActiveCode] = useState(null);
  const [userCode, setUserCode] = useState("");

  const handleUserCodeChange = (event) => {
    setUserCode(event.target.value);
  };

  const toggleUserCodePreview = () => {
    setActiveCode(activeCode === userCode ? null : userCode);
  };
  const content = {
    audioVideo: {
      title: "HTML Audio va Video",
      description:
        "HTML audio va video elementlari veb-sahifada media fayllarni qo'shish va ijro etish uchun ishlatiladi.",
      sections: [
        {
          id: "audio",
          title: "Oddiy Audio",
          code: `<audio controls>
  <source src="audiofile.mp3" type="audio/mpeg">
  Sizning brauzeringiz audio tegi qo'llab-quvvatlamaydi.
</audio>`,
          explanation: `<audio> tegi veb-sahifaga audio qo'shish uchun ishlatiladi. <source> tegi audio fayl manzilini ko'rsatadi.`,
        },
        {
          id: "audioAttributes",
          title: "Audio Atributlari",
          code: `<audio controls autoplay loop>
  <source src="audiofile.mp3" type="audio/mpeg">
  Sizning brauzeringiz audio tegi qo'llab-quvvatlamaydi.
</audio>`,
          explanation: `controls, autoplay va loop atributlari audio ijrosini boshqarish uchun ishlatiladi.`,
        },
        {
          id: "video",
          title: "Oddiy Video",
          code: `<video width="320" height="240" controls>
  <source src="videofile.mp4" type="video/mp4">
  Sizning brauzeringiz video tegi qo'llab-quvvatlamaydi.
</video>`,
          explanation: `<video> tegi veb-sahifaga video qo'shish uchun ishlatiladi. <source> tegi video fayl manzilini ko'rsatadi.`,
        },
        {
          id: "videoAttributes",
          title: "Video Atributlari",
          code: `<video width="320" height="240" controls autoplay loop>
  <source src="videofile.mp4" type="video/mp4">
  Sizning brauzeringiz video tegi qo'llab-quvvatlamaydi.
</video>`,
          explanation: `controls, autoplay va loop atributlari video ijrosini boshqarish uchun ishlatiladi.`,
        },
        {
          id: "embed",
          title: "Media Fayllarni Joylash",
          code: `<embed src="mediafile.mp4" width="400" height="300">`,
          explanation: `<embed> tegi veb-sahifaga media fayllarni joylash uchun ishlatiladi.`,
        },
      ],
    },
  };

  useEffect(() => {
    const codePreview = document.getElementById("codePreview");
    if (codePreview && activeCode) {
      codePreview.srcdoc = activeCode;
    }
  }, [activeCode]);

  const togglePreview = (code) => {
    setActiveCode(activeCode === code ? null : code);
  };

  return (
    <div
      id="app-containery"
      className="w-full md:max-w-7xl mx-auto p-2 md:p-6 bg-white rounded-lg shadow-lg"
    >
      {/* Content Section */}
      <div
        id="app-containery"
        className="bg-gray-50 rounded-lg p-2 md:p-6 overflow-y-auto max-h-[calc(100vh-150px)]"
      >
        <h2 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4 text-indigo-700">
          {content.audioVideo.title}
        </h2>
        <p className="mb-3 md:mb-4 text-gray-700 text-sm md:text-base">
          {content.audioVideo.description}
        </p>
        {content.audioVideo.sections.map((section, index) => (
          <div key={index} className="mb-6">
            <h3 className="text-lg md:text-xl font-semibold mb-2 text-indigo-600">
              {section.title}
            </h3>
            <div className="mb-3 md:mb-4 bg-gray-800 text-white p-2 md:p-4 rounded-lg overflow-x-auto">
              <pre className="text-xs md:text-sm whitespace-pre-wrap break-words">
                <code>{section.code.trim()}</code>
              </pre>
            </div>
            <p className="mb-3 md:mb-4 text-gray-600 italic text-sm md:text-base">
              {section.explanation}
            </p>
            <button
              onClick={() => togglePreview(section.code)}
              className="flex items-center px-3 py-1 bg-indigo-100 text-indigo-700 rounded hover:bg-indigo-200 transition-colors text-sm md:text-base focus:outline-none"
            >
              {activeCode === section.code ? (
                <EyeOff className="mr-1 h-4 w-4" />
              ) : (
                <Eye className="mr-1 h-4 w-4" />
              )}
              {activeCode === section.code ? "Yashirish" : "Ko'rsatish"}
            </button>
            {activeCode === section.code && (
              <div className="border-2 border-indigo-200 rounded-lg p-2 md:p-4 bg-white overflow-x-auto mt-4">
                <iframe
                  id="codePreview"
                  title="HTML Preview"
                  className="w-full min-h-[150px] md:min-h-[200px] border-none"
                  sandbox="allow-scripts"
                ></iframe>
              </div>
            )}
          </div>
        ))}

        {/* User Code Section */}
        <div className="mb-6">
          <h3 className="text-lg md:text-xl font-semibold mb-2 text-indigo-600">
            Foydalanuvchi Kiritgan Kod
          </h3>
          <textarea
            value={userCode}
            onChange={handleUserCodeChange}
            className="w-full p-2 md:p-4 bg-gray-800 text-white rounded-lg mb-3 md:mb-4"
            rows="10"
            placeholder="Bu yerga HTML kodingizni kiriting..."
          ></textarea>
          <button
            onClick={toggleUserCodePreview}
            className="flex items-center px-3 py-1 bg-indigo-100 text-indigo-700 rounded hover:bg-indigo-200 transition-colors text-sm md:text-base focus:outline-none"
          >
            {activeCode === userCode ? (
              <EyeOff className="mr-1 h-4 w-4" />
            ) : (
              <Eye className="mr-1 h-4 w-4" />
            )}
            {activeCode === userCode ? "Yashirish" : "Ko'rsatish"}
          </button>
          {activeCode === userCode && (
            <div className="border-2 border-indigo-200 rounded-lg p-2 md:p-4 bg-white overflow-x-auto mt-4">
              <iframe
                id="codePreview"
                title="HTML Preview"
                className="w-full min-h-[150px] md:min-h-[200px] border-none"
                sandbox="allow-scripts"
              ></iframe>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HtmlAudioVideo;
