import React, { useState, useEffect, useRef } from 'react';

function FrontVide() {
    const [activeTab, setActiveTab] = useState('videos');
    const [loading, setLoading] = useState(true);
    const [hoveredCard, setHoveredCard] = useState(null);
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
    const videoRef = useRef(null);

    // Boyitilgan video darslar va loyihalar ma'lumotlari
    const courseData = {
        videos: [
            {
                id: 1,
                title: "HTML va CSS asoslari",
                author: "Ali Valiyev",
                duration: "2:15:30",
                thumbnail: "https://img.youtube.com/vi/qz0aGYrrlhU/maxresdefault.jpg",
                views: "12.5k",
                description: "HTML va CSS asoslarini o'rganib, zamonaviy veb-saytlar yaratishni boshlang. Bu kursda siz HTML teglari, CSS selektorlari, flexbox, grid va responsive dizayn haqida o'rganasiz.",
                level: "Boshlang'ich",
                videoUrl: "https://www.youtube.com/embed/qz0aGYrrlhU",
                tags: ["HTML", "CSS", "Web Design"],
                rating: 4.8,
                publishedDate: "2023-05-15"
            },
            {
                id: 2,
                title: "JavaScript boshlang'ich kurs",
                author: "Madina Karimova",
                duration: "3:45:10",
                thumbnail: "https://img.youtube.com/vi/W6NZfCO5SIk/maxresdefault.jpg",
                views: "8.7k",
                description: "JavaScript asoslarini o'rganib, dinamik veb-saytlar yaratishni boshlang. Kursda o'zgaruvchilar, funksiyalar, massivlar, obyektlar va DOM bilan ishlash o'rgatiladi.",
                level: "Boshlang'ich",
                videoUrl: "https://www.youtube.com/embed/W6NZfCO5SIk",
                tags: ["JavaScript", "Programming", "Web Development"],
                rating: 4.7,
                publishedDate: "2023-06-20"
            },
            {
                id: 3,
                title: "React asoslari",
                author: "Aziz Toshpo'latov",
                duration: "4:30:00",
                thumbnail: "https://img.youtube.com/vi/Ke90Tje7VS0/maxresdefault.jpg",
                views: "15.2k",
                description: "React kutubxonasi yordamida zamonaviy veb-ilovalar yaratishni o'rganing. Komponentlar, props, state, hooks va boshqa muhim tushunchalar bilan tanishasiz.",
                level: "O'rta",
                videoUrl: "https://www.youtube.com/embed/Ke90Tje7VS0",
                tags: ["React", "JavaScript", "Frontend"],
                rating: 4.9,
                publishedDate: "2023-07-10"
            },
            {
                id: 4,
                title: "Responsive dizayn usullari",
                author: "Nodira Ismoilova",
                duration: "1:50:45",
                thumbnail: "https://img.youtube.com/vi/VQraviuwbzU/maxresdefault.jpg",
                views: "5.3k",
                description: "Barcha qurilmalarda yaxshi ko'rinadigan veb-saytlar yaratishni o'rganing. Media so'rovlar, flexbox, grid va bootstrap kabi texnologiyalar bilan ishlashni o'rganasiz.",
                level: "O'rta",
                videoUrl: "https://www.youtube.com/embed/VQraviuwbzU",
                tags: ["Responsive Design", "CSS", "Mobile First"],
                rating: 4.6,
                publishedDate: "2023-08-05"
            },
            {
                id: 5,
                title: "TypeScript asoslari",
                author: "Jasur Umarov",
                duration: "3:20:15",
                thumbnail: "https://img.youtube.com/vi/BCg4U1FzODs/maxresdefault.jpg",
                views: "7.8k",
                description: "TypeScript yordamida xavfsiz va kengaytiriladigan dasturlar yaratishni o'rganing. Tiplar, interfeyslar, generiklar va boshqa ilg'or tushunchalar bilan tanishasiz.",
                level: "Yuqori",
                videoUrl: "https://www.youtube.com/embed/BCg4U1FzODs",
                tags: ["TypeScript", "JavaScript", "Programming"],
                rating: 4.8,
                publishedDate: "2023-09-12"
            },
            {
                id: 6,
                title: "Next.js bilan serverless ilovalar",
                author: "Dilshod Tursunov",
                duration: "5:10:30",
                thumbnail: "https://img.youtube.com/vi/cxgAN7T3rq8/maxresdefault.jpg",
                views: "9.2k",
                description: "Next.js frameworki yordamida zamonaviy React ilovalar yaratishni o'rganing. Server-side rendering, static generation va API routes kabi tushunchalar bilan tanishasiz.",
                level: "Yuqori",
                videoUrl: "https://www.youtube.com/embed/cxgAN7T3rq8",
                tags: ["Next.js", "React", "Serverless"],
                rating: 4.9,
                publishedDate: "2023-10-18"
            },
            {
                id: 7,
                title: "Vue.js asoslari",
                author: "Kamola Yusupova",
                duration: "4:05:20",
                thumbnail: "https://img.youtube.com/vi/qZXt1Aom3Cs/maxresdefault.jpg",
                views: "6.4k",
                description: "Vue.js frameworki yordamida interaktiv veb-ilovalar yaratishni o'rganing. Komponentlar, direktiva, Vuex va Vue Router bilan ishlashni o'rganasiz.",
                level: "O'rta",
                videoUrl: "https://www.youtube.com/embed/qZXt1Aom3Cs",
                tags: ["Vue.js", "JavaScript", "Frontend"],
                rating: 4.7,
                publishedDate: "2023-11-05"
            },
            {
                id: 8,
                title: "Node.js va Express",
                author: "Bobur Alimov",
                duration: "6:30:15",
                thumbnail: "https://img.youtube.com/vi/Oe421EPjeBE/maxresdefault.jpg",
                views: "11.3k",
                description: "Node.js va Express yordamida backend ilovalar yaratishni o'rganing. REST API, middleware, autentifikatsiya va ma'lumotlar bazasi bilan ishlashni o'rganasiz.",
                level: "Yuqori",
                videoUrl: "https://www.youtube.com/embed/Oe421EPjeBE",
                tags: ["Node.js", "Express", "Backend", "API"],
                rating: 4.8,
                publishedDate: "2023-12-10"
            },
            {
                id: 9,
                title: "SASS/SCSS bilan CSS kengaytirish",
                author: "Lola Karimova",
                duration: "2:45:30",
                thumbnail: "https://img.youtube.com/vi/Zz6eOVaaelI/maxresdefault.jpg",
                views: "4.9k",
                description: "SASS/SCSS preprocessorlari yordamida CSS yozishni osonlashtiring. O'zgaruvchilar, mixinlar, nestinglar va boshqa qulayliklarni o'rganasiz.",
                level: "O'rta",
                videoUrl: "https://www.youtube.com/embed/Zz6eOVaaelI",
                tags: ["SASS", "SCSS", "CSS", "Preprocessor"],
                rating: 4.6,
                publishedDate: "2024-01-15"
            },
            {
                id: 10,
                title: "Tailwind CSS bilan tez dizayn",
                author: "Akbar Toshmatov",
                duration: "3:10:45",
                thumbnail: "https://img.youtube.com/vi/dFgzHOX84xQ/maxresdefault.jpg",
                views: "7.1k",
                description: "Tailwind CSS yordamida tez va samarali veb-saytlar yaratishni o'rganing. Utility-first yondashuv, responsive dizayn va komponentlar yaratishni o'rganasiz.",
                level: "Boshlang'ich",
                videoUrl: "https://www.youtube.com/embed/dFgzHOX84xQ",
                tags: ["Tailwind CSS", "CSS", "Utility-first"],
                rating: 4.8,
                publishedDate: "2024-02-20"
            }
        ],
        projects: [
            {
                id: 1,
                title: "Online do'kon",
                difficulty: "O'rta",
                technologies: "React, Redux, Tailwind CSS",
                image: "https://colorlib.com/wp/wp-content/uploads/sites/2/ecommerce-website-templates.jpg",
                stars: 45,
                description: "To'liq funksional onlayn do'kon ilovasi, to'lov tizimi va admin paneli bilan",
                demoUrl: "https://example.com/demo/shop",
                githubUrl: "https://github.com/example/shop"
            },
            {
                id: 2,
                title: "Portfolio websayt",
                difficulty: "Boshlang'ich",
                technologies: "HTML, CSS, JavaScript, Bootstrap",
                image: "https://cdn.dribbble.com/users/3967258/screenshots/15463803/media/4fddb9a2caf3b3bd634060f706a91e73.png",
                stars: 32,
                description: "Shaxsiy portfolio uchun zamonaviy va responsive veb-sayt. Animatsiyalar, interaktiv elementlar va mukammal UI/UX dizayn bilan.",
                demoUrl: "https://www.olterinc.com/",
                githubUrl: "https://github.com/olterinc/portfolio",
                features: ["Responsive dizayn", "Animatsiyalar", "Dark/Light rejim", "Kontakt formasi"],
                lastUpdate: "2024-03-15"
            },
            {
                id: 3,
                title: "Todo ro'yxat ilovasi",
                difficulty: "Boshlang'ich",
                technologies: "React, CSS",
                image: "https://miro.medium.com/max/1400/1*HLGtY6O2vUHqIyEbWdmBgA.jpeg",
                stars: 28,
                description: "Vazifalarni boshqarish uchun interaktiv va foydalanuvchiga qulay ilova",
                demoUrl: "https://example.com/demo/todo",
                githubUrl: "https://github.com/example/todo"
            },
            {
                id: 4,
                title: "Ob-havo ilovasi",
                difficulty: "O'rta",
                technologies: "React, API, Styled Components",
                image: "https://cdn.dribbble.com/users/2158940/screenshots/7118235/media/1ea59d43e8e99a529220bed091f8eb84.png",
                stars: 56,
                description: "Real vaqtda ob-havo ma'lumotlarini ko'rsatuvchi zamonaviy ilova",
                demoUrl: "https://example.com/demo/weather",
                githubUrl: "https://github.com/example/weather"
            },
            {
                id: 5,
                title: "Zamonaviy Chat ilovasi",
                difficulty: "Yuqori",
                technologies: "React, Firebase, Socket.io, WebRTC, TailwindCSS",
                image: "https://cdn.dribbble.com/users/5031392/screenshots/15467520/media/c36b3b15b25b1e190d081abdbbf947cf.png",
                stars: 89,
                description: "Real vaqtda ishlash imkoniyatiga ega chat ilovasi. Video va audio qo'ng'iroqlar, fayl almashish, guruh chatlari va boshqa ko'plab imkoniyatlar bilan.",
                demoUrl: "https://dribbble.com/shots/23280048-Web-Chat-UI",
                githubUrl: "https://github.com/ronasit/web-chat-ui",
                features: [
                    "Video va audio qo'ng'iroqlar",
                    "Guruh chatlari",
                    "Fayl almashish",
                    "O'qilgan xabarlar indikatori",
                    "Zamonaviy UI/UX dizayn",
                    "Responsive mobil versiya"
                ],
                designer: "Ronas IT | UI/UX Team",
                lastUpdate: "2024-05-10",
                colors: ["#FF6B00", "#8B3DFF", "#1E1E1E", "#FFFFFF"]
            },
            {
                id: 6,
                title: "Dashboard UI",
                difficulty: "O'rta",
                technologies: "React, Chart.js, Tailwind CSS",
                image: "https://cdn.dribbble.com/users/5031392/screenshots/15467520/media/c36b3b15b25b1e190d081abdbbf947cf.png",
                stars: 63,
                description: "Zamonaviy va interaktiv admin dashboard interfeysi",
                demoUrl: "https://example.com/demo/dashboard",
                githubUrl: "https://github.com/example/dashboard"
            }
        ]
    };

    // Video modalni ochish
    const openVideoModal = (video) => {
        setSelectedVideo(video);
        setIsVideoModalOpen(true);
        document.body.style.overflow = 'hidden';
    };

    // Video modalni yopish
    const closeVideoModal = () => {
        setIsVideoModalOpen(false);
        setSelectedVideo(null);
        document.body.style.overflow = 'auto';
        if (videoRef.current) {
            videoRef.current.src = '';
        }
    };

    // Loading effekti
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 1000);

        // ESC tugmasi bosilganda modalni yopish
        const handleEsc = (e) => {
            if (e.key === 'Escape') {
                closeVideoModal();
            }
        };

        window.addEventListener('keydown', handleEsc);
        return () => {
            window.removeEventListener('keydown', handleEsc);
        };
    }, []);

    // Video darslar bo'limini render qilish
    const renderVideos = () => {
        if (loading) {
            return (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[...Array(6)].map((_, index) => (
                        <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg animate-pulse">
                            <div className="h-48 bg-gray-300"></div>
                            <div className="p-5">
                                <div className="h-4 bg-gray-300 rounded w-3/4 mb-3"></div>
                                <div className="h-3 bg-gray-300 rounded w-1/2 mb-4"></div>
                                <div className="flex justify-between items-center">
                                    <div className="h-3 bg-gray-300 rounded w-1/4"></div>
                                    <div className="h-8 bg-gray-300 rounded-full w-20"></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            );
        }

        return (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {courseData.videos.map(video => (
                    <div
                        key={video.id}
                        className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
                        onMouseEnter={() => setHoveredCard(`video-${video.id}`)}
                        onMouseLeave={() => setHoveredCard(null)}
                    >
                        {/* Thumbnail Container */}
                        <div className="relative aspect-video">
                            <img 
                                src={video.thumbnail} 
                                alt={video.title} 
                                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300" 
                            />
                            {/* Overlay with Play Button */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                                <button
                                    onClick={() => openVideoModal(video)}
                                    className="bg-white/90 hover:bg-white text-blue-600 p-4 rounded-full transform hover:scale-110 transition-all duration-300 shadow-xl"
                                >
                                    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M8 5v14l11-7z"/>
                                    </svg>
                                </button>
                            </div>
                            {/* Video Info Badges */}
                            <div className="absolute top-3 left-3 flex items-center space-x-2">
                                <span className="px-3 py-1 bg-blue-600 text-white text-sm font-medium rounded-full shadow-lg">
                                    {video.level}
                                </span>
                            </div>
                            <div className="absolute top-3 right-3 flex items-center space-x-2">
                                <span className="px-3 py-1 bg-yellow-500 text-white text-sm font-medium rounded-full shadow-lg flex items-center">
                                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                                    </svg>
                                    {video.rating}
                                </span>
                            </div>
                            {/* Duration Badge */}
                            <div className="absolute bottom-3 right-3">
                                <span className="px-3 py-1 bg-black/70 text-white text-sm font-medium rounded-full shadow-lg flex items-center">
                                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                    </svg>
                                    {video.duration}
                                </span>
                            </div>
                        </div>

                        {/* Video Info */}
                        <div className="p-6">
                            <div className="flex items-start justify-between mb-4">
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors duration-200">
                                        {video.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm flex items-center">
                                        <svg className="w-4 h-4 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                                        </svg>
                                        {video.author}
                                    </p>
                                </div>
                                <span className="flex items-center text-gray-500 text-sm">
                                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                                    </svg>
                                    {video.views}
                                </span>
                            </div>

                            <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                                {video.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mb-4">
                                {video.tags.map((tag, index) => (
                                    <span 
                                        key={index} 
                                        className="px-3 py-1 bg-blue-50 text-blue-600 text-xs font-medium rounded-full hover:bg-blue-100 transition-colors duration-200"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <div className="flex justify-between items-center">
                                <span className="text-sm text-gray-500">
                                    {video.publishedDate}
                                </span>
                                <button
                                    onClick={() => openVideoModal(video)}
                                    className="px-6 py-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white text-sm font-medium rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center"
                                >
                                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/>
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                    </svg>
                                    Darsni ko'rish
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        );
    };

    // Loyihalar bo'limini render qilish
    const renderProjects = () => {
        if (loading) {
            return (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[...Array(6)].map((_, index) => (
                        <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg animate-pulse">
                            <div className="h-48 bg-gray-300"></div>
                            <div className="p-5">
                                <div className="h-4 bg-gray-300 rounded w-3/4 mb-3"></div>
                                <div className="h-3 bg-gray-300 rounded w-1/2 mb-4"></div>
                                <div className="flex justify-between items-center">
                                    <div className="h-8 bg-gray-300 rounded-full w-20"></div>
                                    <div className="h-8 bg-gray-300 rounded-full w-20"></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            );
        }

        return (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {courseData.projects.map(project => (
                    <div
                        key={project.id}
                        className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
                        onMouseEnter={() => setHoveredCard(`project-${project.id}`)}
                        onMouseLeave={() => setHoveredCard(null)}
                    >
                        <div className="relative">
                            <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4 opacity-0 hover:opacity-100 transition-opacity duration-300">
                                <p className="text-white text-sm mb-2">{project.description}</p>
                                <div className="flex space-x-2">
                                    <a href={project.demoUrl} className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded-lg text-sm flex items-center">
                                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                        </svg>
                                        Demo
                                    </a>
                                    <a href={project.githubUrl} className="bg-gray-800 hover:bg-gray-900 text-white px-3 py-1 rounded-lg text-sm flex items-center">
                                        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.237 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                        </svg>
                                        GitHub
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="p-5">
                            <div className="flex justify-between items-center mb-2">
                                <h3 className="text-lg font-bold text-gray-800">{project.title}</h3>
                                <span className="flex items-center text-yellow-500">
                                    <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                    </svg>
                                    {project.stars}
                                </span>
                            </div>
                            <div className="mb-4">
                                <span className="inline-block bg-gray-200 text-gray-700 px-3 py-1 rounded-lg text-sm mr-2 mb-2">{project.difficulty}</span>
                                {project.technologies.split(', ').map((tech, index) => (
                                    <span key={index} className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-lg text-sm mr-2 mb-2">{tech}</span>
                                ))}
                            </div>
                            <div className="flex justify-between items-center">
                                <a href={project.demoUrl} className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-medium shadow-md hover:shadow-lg transition-all duration-300 flex items-center">
                                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                    </svg>
                                    Ko'rish
                                </a>
                                <a href={project.githubUrl} className="border-2 border-green-600 text-green-600 hover:bg-green-50 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 flex items-center">
                                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                    </svg>
                                    Yuklab olish
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        );
    };

    // Video modal komponenti
    const VideoModal = () => {
        if (!isVideoModalOpen || !selectedVideo) return null;

        return (
            <div className="fixed inset-0 z-[99999] flex items-start justify-center">
                {/* Backdrop */}
                <div 
                    className="fixed inset-0 bg-black/95 backdrop-blur-xl"
                    onClick={closeVideoModal}
                ></div>
                
                {/* Modal Container */}
                <div 
                    className="relative bg-white dark:bg-gray-900 rounded-2xl shadow-2xl overflow-hidden z-[100000]"
                    style={{
                        width: 'calc(100% - 350px)',
                        marginLeft: '300px',
                        marginTop: '100px',
                        maxHeight: 'calc(100vh - 150px)',
                        overflowY: 'auto'
                    }}
                >
                    {/* Close Button */}
                    <button
                        onClick={closeVideoModal}
                        className="absolute top-4 right-4 z-[100001] p-3 rounded-full bg-white shadow-xl"
                    >
                        <svg 
                            className="w-6 h-6 text-gray-900" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                        >
                            <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                strokeWidth={3} 
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>

                    {/* Modal Header */}
                    <div className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600">
                        <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white">{selectedVideo.title}</h3>
                                <p className="text-white/90 text-sm">{selectedVideo.author}</p>
                            </div>
                        </div>
                    </div>

                    {/* Video Player */}
                    <div className="relative pt-[50%] bg-black">
                        <iframe
                            ref={videoRef}
                            className="absolute inset-0 w-full h-full"
                            src={selectedVideo.videoUrl}
                            title={selectedVideo.title}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>

                    {/* Video Info */}
                    <div className="p-8 space-y-6 bg-white dark:bg-gray-800">
                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-4">
                            <div className="bg-gradient-to-r from-purple-500 to-indigo-600 p-4 rounded-xl text-white">
                                <div className="text-2xl font-bold">{selectedVideo.rating}</div>
                                <div className="text-white/90">Reyting</div>
                            </div>

                            <div className="bg-gradient-to-r from-green-500 to-teal-600 p-4 rounded-xl text-white">
                                <div className="text-2xl font-bold">{selectedVideo.duration}</div>
                                <div className="text-white/90">Davomiyligi</div>
                            </div>

                            <div className="bg-gradient-to-r from-orange-500 to-red-600 p-4 rounded-xl text-white">
                                <div className="text-2xl font-bold">{selectedVideo.views}</div>
                                <div className="text-white/90">Ko'rilgan</div>
                            </div>
                        </div>

                        {/* Description */}
                        <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6">
                            <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Kurs haqida</h4>
                            <p className="text-gray-600 dark:text-gray-300">
                                {selectedVideo.description}
                            </p>
                        </div>

                        {/* Tags */}
                        <div>
                            <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Teglar</h4>
                            <div className="flex flex-wrap gap-2">
                                {selectedVideo.tags.map((tag, index) => (
                                    <span 
                                        key={index} 
                                        className="px-4 py-2 rounded-full bg-blue-50 text-blue-600 text-sm font-medium"
                                    >
                                        #{tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="grid grid-cols-2 gap-4 pt-6 border-t border-gray-200 dark:border-gray-600">
                            <button className="flex items-center justify-center px-6 py-3 rounded-xl bg-blue-600 text-white font-medium">
                                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                </svg>
                                Saqlash
                            </button>
                            <button className="flex items-center justify-center px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium">
                                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                </svg>
                                Kursga yozilish
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="min-h-screen bg-gray-50">


            {/* Main Content */}
            <main className="max-w-6xl mx-auto py-12 px-4">


                {/* Tabs */}
                <div className="mb-8 border-b border-gray-200">
                    <div className="flex flex-wrap -mb-px">
                        <button
                            className={`mr-2 py-3 px-6 font-medium text-sm border-b-2 transition-all duration-300 ${activeTab === 'videos' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
                            onClick={() => setActiveTab('videos')}
                        >
                            <div className="flex items-center">
                                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                </svg>
                                Video darslar
                            </div>
                        </button>
                        <button
                            className={`mr-2 py-3 px-6 font-medium text-sm border-b-2 transition-all duration-300 ${activeTab === 'projects' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
                            onClick={() => setActiveTab('projects')}
                        >
                            <div className="flex items-center">
                                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                                </svg>
                                Loyihalar
                            </div>
                        </button>
                    </div>
                </div>

                {/* Tab Content */}
                <div className="mb-12">
                    {activeTab === 'videos' && renderVideos()}
                    {activeTab === 'projects' && renderProjects()}
                </div>


            </main>

            {/* Floating Action Button */}
            <div className="fixed bottom-6 right-6">
                <button className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                    </svg>
                </button>
            </div>

            {/* Video Modal */}
            <VideoModal />

            {/* Loading Overlay */}
            {loading && (
                <div className="fixed inset-0 bg-white/80 backdrop-blur-sm flex items-center justify-center z-50">
                    <div className="flex flex-col items-center">
                        <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
                        <p className="mt-4 text-lg font-medium text-blue-600">Yuklanmoqda...</p>
                    </div>
                </div>
            )}
        </div>
    );
}

export default FrontVide;