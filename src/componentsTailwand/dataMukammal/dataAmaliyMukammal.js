const dataAmaliyMukammal = [
    {
        id: 1,
        title: "Oddiy Login Shakli",
        level: "Boshlang'ich",
        description: "Tailwind CSS yordamida responsive login shakli yaratish",
        image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?q=80&w=2070&auto=format&fit=crop",
        tasks: [
            "Login shaklini yaratish",
            "Input maydonlarini stillash",
            "Responsive dizayn qo'shish",
            "Hover effektlarini qo'shish"
        ],
        expectedTime: "1 soat",
        githubRepo: "login-form-tailwind"
    },
    {
        id: 2,
        title: "Blog Post Cards",
        level: "Boshlang'ich",
        description: "Blog post kartalarini yaratish va grid sistemasida joylashtirish",
        image: "https://images.unsplash.com/photo-1432821596592-e2c18b78144f?q=80&w=2070&auto=format&fit=crop",
        tasks: [
            "Post kartasini yaratish",
            "Grid sistemasini sozlash",
            "Responsive grid yaratish",
            "Hover animatsiyalari qo'shish"
        ],
        expectedTime: "2 soat",
        githubRepo: "blog-cards-tailwind"
    },
    {
        id: 3,
        title: "E-commerce Dashboard",
        level: "O'rta",
        description: "Admin panel uchun dashboard interfeysi",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
        tasks: [
            "Sidebar yaratish",
            "Statistika kartalarini joylashtirish",
            "Jadval yaratish",
            "Chart komponenti qo'shish",
            "Dark mode qo'shish"
        ],
        expectedTime: "5 soat",
        githubRepo: "dashboard-tailwind"
    },
    {
        id: 4,
        title: "Social Media Profile",
        level: "O'rta",
        description: "Instagram ga o'xshash profil sahifasi",
        image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=2074&auto=format&fit=crop",
        tasks: [
            "Profil header qismi",
            "Post grid sistemasi",
            "Story aylanasi",
            "Modal oynalar",
            "Like va comment sistemasi"
        ],
        expectedTime: "6 soat",
        githubRepo: "social-profile-tailwind"
    },
    {
        id: 5,
        title: "Online Course Platform",
        level: "Murakkab",
        description: "To'liq funksional online kurs platformasi",
        image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=2074&auto=format&fit=crop",
        tasks: [
            "Kurslar katalogi",
            "Video player",
            "Progress tracking",
            "Quiz sistemasi",
            "Certificate generator",
            "Payment integration"
        ],
        expectedTime: "15 soat",
        githubRepo: "course-platform-tailwind"
    },
    {
        id: 6,
        title: "Real Estate Website",
        level: "Murakkab",
        description: "Ko'chmas mulk veb-sayti",
        image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2073&auto=format&fit=crop",
        tasks: [
            "Advanced filtering",
            "Property kartalari",
            "360° view integration",
            "Map integration",
            "Comparison feature",
            "Virtual tour"
        ],
        expectedTime: "20 soat",
        githubRepo: "real-estate-tailwind"
    },
    {
        id: 7,
        title: "Food Delivery App",
        level: "Mukammal",
        description: "To'liq funksional yetkazib berish ilovasi",
        image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?q=80&w=2080&auto=format&fit=crop",
        tasks: [
            "Restaurant katalogi",
            "Shopping cart",
            "Order tracking",
            "Payment gateway",
            "Review sistema",
            "Real-time updates",
            "Admin panel"
        ],
        expectedTime: "25 soat",
        githubRepo: "food-delivery-tailwind"
    },
    {
        id: 8,
        title: "NFT Marketplace",
        level: "Mukammal",
        description: "NFT savdo platformasi",
        image: "https://images.unsplash.com/photo-1644658722893-2f1a17a6de27?q=80&w=1000",
        tasks: [
            "NFT showcase",
            "Auction sistema",
            "Wallet integration",
            "Bid placing",
            "Collection creation",
            "Advanced search",
            "Analytics dashboard"
        ],
        expectedTime: "30 soat",
        githubRepo: "nft-marketplace-tailwind",
        resources: {
            tutorials: [
                "NFT Marketplace Development",
                "Web3 Integration",
                "Smart Contract Basics"
            ],
            tools: ["Ethereum", "IPFS", "MetaMask"],
            libraries: ["web3.js", "ethers.js", "hardhat"]
        }
    },
    {
        id: 9,
        title: "AI Chat Application",
        level: "Mukammal",
        description: "Zamonaviy AI chat ilovasi interfeysi",
        image: "https://images.unsplash.com/photo-1673187456578-63af21c0850e?q=80&w=1000",
        tasks: [
            "Chat interfeysi",
            "Real-time messaging",
            "AI integration",
            "Voice messages",
            "File sharing",
            "Message encryption",
            "User authentication"
        ],
        expectedTime: "35 soat",
        githubRepo: "ai-chat-tailwind",
        resources: {
            tutorials: [
                "Chat UI Design with Tailwind CSS",
                "WebSocket Integration in React",
                "AI API Integration Guide"
            ],
            tools: ["Socket.io", "OpenAI API", "Firebase"],
            libraries: ["@headlessui/react", "react-query", "framer-motion"]
        }
    },
    {
        id: 10,
        title: "3D Product Configurator",
        level: "Mukammal",
        description: "3D mahsulot sozlash platformasi",
        image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070",
        tasks: [
            "3D model viewer",
            "Custom color picker",
            "Material selection",
            "Animation controls",
            "Screenshot feature",
            "Share configuration",
            "AR preview"
        ],
        expectedTime: "40 soat",
        githubRepo: "3d-configurator-tailwind",
        resources: {
            tutorials: [
                "Three.js Integration",
                "WebGL Basics",
                "AR Implementation"
            ],
            tools: ["Three.js", "WebGL", "AR.js"],
            libraries: ["@react-three/fiber", "@react-three/drei"]
        }
    },
    {
        id: 11,
        title: "Video Streaming Platform",
        level: "Mukammal+",
        description: "YouTube kabi video streaming platformasi",
        image: "https://images.unsplash.com/photo-1610641818989-c2051b5e2cfd?q=80&w=2070",
        tasks: [
            "Video player",
            "Live streaming",
            "Comments system",
            "Channel management",
            "Analytics dashboard",
            "Monetization features",
            "Content recommendation"
        ],
        expectedTime: "45 soat",
        githubRepo: "video-stream-tailwind",
        resources: {
            tutorials: [
                "Video Streaming Architecture",
                "WebRTC Implementation",
                "Redux State Management"
            ],
            tools: ["FFmpeg", "WebRTC", "Redis"],
            libraries: ["video.js", "redux-toolkit", "socket.io"]
        }
    },
    {
        id: 12,
        title: "Virtual Event Platform",
        level: "Mukammal+",
        description: "Online konferensiya va tadbirlar platformasi",
        image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=2070",
        tasks: [
            "Virtual rooms",
            "Live sessions",
            "Networking features",
            "Schedule management",
            "Virtual expo hall",
            "Chat & messaging",
            "Analytics & reporting"
        ],
        expectedTime: "50 soat",
        githubRepo: "virtual-event-tailwind",
        resources: {
            tutorials: [
                "WebRTC Multi-User Rooms",
                "Real-time Features",
                "Scale WebSocket Connections"
            ],
            tools: ["Agora.io", "Redis", "PostgreSQL"],
            libraries: ["@livekit/react", "zustand", "tanstack-query"]
        }
    }
];

// Qo'shimcha resurslar
export const additionalResources = {
    learningPaths: [
        {
            title: "Tailwind CSS Asoslari",
            resources: [
                "Tailwind CSS Documentation",
                "Tailwind CSS YouTube Tutorial Series",
                "Tailwind UI Components"
            ]
        },
        {
            title: "React va Tailwind",
            resources: [
                "React + Tailwind Integration Guide",
                "Component-Based Design Patterns",
                "State Management with Tailwind"
            ]
        },
        {
            title: "Advanced Tailwind",
            resources: [
                "Custom Plugin Development",
                "Performance Optimization",
                "Animation Techniques"
            ]
        }
    ],
    tools: [
        {
            name: "Tailwind CSS IntelliSense",
            description: "VS Code extension for Tailwind CSS",
            link: "https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss"
        },
        {
            name: "Headless UI",
            description: "Unstyled UI components",
            link: "https://headlessui.dev/"
        },
        {
            name: "Tailwind UI",
            description: "Official Tailwind CSS Components",
            link: "https://tailwindui.com/"
        }
    ],
    communities: [
        {
            name: "Tailwind CSS Discord",
            link: "https://discord.gg/tailwindcss"
        },
        {
            name: "Reddit r/tailwindcss",
            link: "https://reddit.com/r/tailwindcss"
        },
        {
            name: "GitHub Discussions",
            link: "https://github.com/tailwindlabs/tailwindcss/discussions"
        }
    ]
};

export default dataAmaliyMukammal;