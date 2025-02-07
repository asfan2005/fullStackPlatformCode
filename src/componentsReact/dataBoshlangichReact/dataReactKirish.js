const dataReactKirish = [
    {
        id: 1,
        title: "React Framework Asoslari",
        level: "Boshlang'ich",
        description: "React - zamonaviy web ilovalarni yaratish uchun JavaScript kutubxonasi",
        image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070",
        mainTopics: {
            introduction: {
                title: "React Nima?",
                points: [
                    "Facebook tomonidan yaratilgan ochiq kodli kutubxona",
                    "Foydalanuvchi interfeyslarini yaratish uchun mo'ljallangan",
                    "Komponentlarga asoslangan arxitektura",
                    "Virtual DOM orqali yuqori samaradorlik",
                    "Deklarativ dasturlash uslubi"
                ]
            },
            advantages: {
                title: "React Afzalliklari",
                points: [
                    "Tez va samarali ishlash",
                    "Komponentlarni qayta ishlatish mumkinligi",
                    "Bir yo'nalishli ma'lumotlar oqimi",
                    "Katta hamjamiyat va boy ekotizim",
                    "Kengaytiriluvchan arxitektura",
                    "SEO-do'stona ilovalar yaratish imkoniyati"
                ]
            },
            basicConcepts: {
                title: "Asosiy Tushunchalar",
                concepts: [
                    {
                        name: "JSX",
                        description: "JavaScript-ga XML sintaksisini qo'shuvchi kengaytma",
                        example: "const element = <h1>Salom, React!</h1>;"
                    },
                    {
                        name: "Components",
                        description: "Qayta ishlatiluvchi UI bloklari",
                        example: "function Welcome() { return <h1>Salom</h1>; }"
                    },
                    {
                        name: "Props",
                        description: "Komponentlarga ma'lumot uzatish uchun xususiyatlar",
                        example: "function Welcome(props) { return <h1>Salom, {props.name}</h1>; }"
                    },
                    {
                        name: "State",
                        description: "Komponent ichidagi o'zgaruvchan ma'lumotlar",
                        example: "const [count, setCount] = useState(0);"
                    }
                ]
            }
        },
        practicalGuide: {
            setupRequirements: [
                {
                    tool: "Node.js",
                    purpose: "JavaScript runtime muhiti",
                    link: "https://nodejs.org/"
                },
                {
                    tool: "npm/yarn",
                    purpose: "Paket menejeri",
                    link: "https://www.npmjs.com/"
                },
                {
                    tool: "VS Code",
                    purpose: "Kod muharriri",
                    link: "https://code.visualstudio.com/"
                },
                {
                    tool: "React DevTools",
                    purpose: "Brauzer kengaytmasi",
                    link: "https://react.dev/learn/react-developer-tools"
                }
            ],
            firstSteps: [
                {
                    step: "Yangi React loyiha yaratish",
                    command: "npx create-react-app my-app",
                    description: "Create React App yordamida yangi loyiha yaratish"
                },
                {
                    step: "Loyihani ishga tushirish",
                    command: "cd my-app && npm start",
                    description: "Development serverini ishga tushirish"
                }
            ]
        },
        learningPath: {
            beginnerTopics: [
                "JavaScript asoslari",
                "React asosiy tushunchalari",
                "JSX sintaksisi",
                "Komponentlar yaratish",
                "Props va State bilan ishlash"
            ],
            intermediateTopics: [
                "Hooks",
                "Event handling",
                "Forms",
                "API bilan ishlash",
                "Routing"
            ],
            advancedTopics: [
                "State management",
                "Performance optimization",
                "Testing",
                "Security",
                "Deployment"
            ]
        },
        resources: {
            officialDocs: {
                title: "Rasmiy hujjatlar",
                link: "https://react.dev/",
                description: "React rasmiy dokumentatsiyasi"
            },
            tutorials: [
                {
                    title: "React Tutorial",
                    link: "https://react.dev/learn",
                    type: "Official"
                },
                {
                    title: "React for Beginners",
                    link: "https://reactforbeginners.com/",
                    type: "Course"
                }
            ],
            communities: [
                {
                    name: "React Discord",
                    link: "https://discord.gg/react"
                },
                {
                    name: "React Reddit",
                    link: "https://reddit.com/r/reactjs"
                },
                {
                    name: "Stack Overflow",
                    link: "https://stackoverflow.com/questions/tagged/reactjs"
                }
            ]
        },
        codeExamples: {
            basicComponent: `
import React from 'react';

function Welcome() {
    return (
        <div>
            <h1>Salom, React!</h1>
            <p>Bu mening birinchi React komponentim.</p>
        </div>
    );
}

export default Welcome;`,
            stateExample: `
import React, { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);
    
    return (
        <div>
            <p>Siz {count} marta bosdingiz</p>
            <button onClick={() => setCount(count + 1)}>
                Bosing
            </button>
        </div>
    );
}`,
            propsExample: `
import React from 'react';

function Greeting(props) {
    return <h1>Salom, {props.name}!</h1>;
}

// Ishlatilishi
<Greeting name="Foydalanuvchi" />`
        }
    },
    {
        id: 2,
        title: "React ni 0 dan O'rnatish va Ishlatish",
        level: "Boshlang'ich",
        description: "React ni kompyuteringizga o'rnatish va birinchi loyihani yaratish bo'yicha to'liq qo'llanma",
        image: "https://images.unsplash.com/photo-1593720219276-0b1eacd0aef4?q=80&w=2071",
        mainTopics: {
            introduction: {
                title: "React O'rnatish Bosqichlari",
                points: [
                    "Node.js va npm o'rnatish",
                    "VS Code va kerakli kengaytmalar",
                    "Create React App yordamida loyiha yaratish",
                    "React DevTools o'rnatish",
                    "Loyihani ishga tushirish"
                ]
            },
            installation: {
                title: "O'rnatish Qadamlari",
                steps: [
                    {
                        name: "1. Node.js o'rnatish",
                        command: "https://nodejs.org/",
                        description: "Rasmiy saytdan Node.js LTS versiyasini yuklab oling va o'rnating"
                    },
                    {
                        name: "2. Node.js versiyasini tekshirish",
                        command: "node -v && npm -v",
                        description: "Terminal orqali Node.js va npm versiyalarini tekshiring"
                    },
                    {
                        name: "3. Create React App o'rnatish",
                        command: "npx create-react-app my-react-app",
                        description: "Yangi React loyihasini yaratish"
                    },
                    {
                        name: "4. Loyiha papkasiga kirish",
                        command: "cd my-react-app",
                        description: "Yaratilgan loyiha papkasiga kirish"
                    },
                    {
                        name: "5. Loyihani ishga tushirish",
                        command: "npm start",
                        description: "Development serverni ishga tushirish"
                    }
                ]
            },
            projectStructure: {
                title: "Loyiha Strukturasi",
                folders: [
                    {
                        name: "src",
                        description: "Asosiy kod papkasi",
                        content: [
                            "App.js - Asosiy komponent",
                            "index.js - Kirish nuqtasi",
                            "App.css - Asosiy stillar",
                            "index.css - Global stillar"
                        ]
                    },
                    {
                        name: "public",
                        description: "Statik fayllar papkasi",
                        content: [
                            "index.html - Asosiy HTML fayl",
                            "favicon.ico - Sayt ikonkasi",
                            "manifest.json - PWA uchun manifest"
                        ]
                    }
                ]
            }
        }
    },
    {
        id: 7,
        title: "React Ekotizimi va Mashhur Kutubxonalar",
        level: "O'rta",
        description: "React bilan ishlatiladigan eng mashhur kutubxonalar va ularni ishlatish bo'yicha to'liq qo'llanma",
        image: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?q=80&w=2070",
        mainTopics: {
            introduction: {
                title: "React Ekotizimi",
                points: [
                    "Zamonaviy React ilovalarida qo'llaniladigan kutubxonalar",
                    "Har bir kutubxonaning vazifasi va afzalliklari",
                    "Kutubxonalarni to'g'ri tanlash va ishlatish",
                    "Kutubxonalar integratsiyasi",
                    "Performance optimizatsiyasi"
                ]
            },
            libraries: {
                title: "Asosiy Kutubxonalar To'plami",
                categories: [
                    {
                        name: "UI Kutubxonalar",
                        description: "Tayyor komponentlar va stillar",
                        items: [
                            {
                                name: "Material-UI (MUI)",
                                description: "Google Material Design asosidagi UI kutubxona",
                                command: "npm install @mui/material @emotion/react @emotion/styled",
                                usage: `import { Button } from '@mui/material';
function App() {
  return <Button variant="contained">Click me</Button>;
}`,
                                features: [
                                    "Tayyor komponentlar",
                                    "Customization imkoniyati",
                                    "Responsive dizayn",
                                    "Tema sozlash",
                                    "TypeScript qo'llab-quvvatlash"
                                ]
                            },
                            {
                                name: "Chakra UI",
                                description: "Zamonaviy va moslashuvchan UI kutubxona",
                                command: "npm install @chakra-ui/react @emotion/react @emotion/styled framer-motion",
                                usage: `import { Button } from '@chakra-ui/react';
function App() {
  return <Button colorScheme="blue">Click me</Button>;
}`,
                                features: [
                                    "Accessible komponentlar",
                                    "Dark mode qo'llab-quvvatlash",
                                    "Modullar tizimi",
                                    "Custom hooks",
                                    "Style props"
                                ]
                            }
                        ]
                    },
                    {
                        name: "Holat Boshqaruvi",
                        description: "Global state management",
                        items: [
                            {
                                name: "Redux Toolkit",
                                description: "Keng qamrovli holat boshqaruvi kutubxonasi",
                                command: "npm install @reduxjs/toolkit react-redux",
                                usage: `import { createSlice, configureStore } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    increment: state => { state.value += 1 },
    decrement: state => { state.value -= 1 }
  }
});

const store = configureStore({
  reducer: { counter: counterSlice.reducer }
});`,
                                features: [
                                    "Immutable state updates",
                                    "DevTools integration",
                                    "Middleware qo'llab-quvvatlash",
                                    "TypeScript qo'llab-quvvatlash",
                                    "Performance optimizatsiyasi"
                                ]
                            },
                            {
                                name: "Zustand",
                                description: "Sodda va yengil holat menejeri",
                                command: "npm install zustand",
                                usage: `import create from 'zustand';

const useStore = create((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 }))
}));`,
                                features: [
                                    "Minimal API",
                                    "Redux DevTools qo'llab-quvvatlash",
                                    "TypeScript qo'llab-quvvatlash",
                                    "Middleware imkoniyati",
                                    "Auto-batching"
                                ]
                            }
                        ]
                    },
                    {
                        name: "Form Boshqaruvi",
                        description: "Form validatsiya va boshqaruv",
                        items: [
                            {
                                name: "React Hook Form",
                                description: "Yuqori samarali form validatsiya",
                                command: "npm install react-hook-form",
                                usage: `import { useForm } from 'react-hook-form';

function App() {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("firstName")} />
      <button type="submit">Submit</button>
    </form>
  );
}`,
                                features: [
                                    "Yuqori performance",
                                    "Minimal re-render",
                                    "Yup/Zod integratsiyasi",
                                    "TypeScript qo'llab-quvvatlash",
                                    "Built-in validatsiya"
                                ]
                            }
                        ]
                    },
                    {
                        name: "API So'rovlar",
                        description: "Server bilan ishlash",
                        items: [
                            {
                                name: "React Query",
                                description: "Server state boshqaruvi",
                                command: "npm install @tanstack/react-query",
                                usage: `import { useQuery } from '@tanstack/react-query';

function App() {
  const { data, isLoading } = useQuery({
    queryKey: ['todos'],
    queryFn: () => fetch('/api/todos').then(res => res.json())
  });

  if (isLoading) return 'Loading...';
  return <div>{data.map(todo => <div>{todo.title}</div>)}</div>;
}`,
                                features: [
                                    "Keshlash",
                                    "Auto-refetching",
                                    "Pagination qo'llab-quvvatlash",
                                    "Offline qo'llab-quvvatlash",
                                    "DevTools"
                                ]
                            }
                        ]
                    }
                ]
            },
            setup: {
                title: "Kutubxonalarni O'rnatish va Sozlash",
                steps: [
                    {
                        name: "1. Loyihani yaratish",
                        command: "npx create-react-app my-app",
                        description: "Yangi React loyihasini yaratish"
                    },
                    {
                        name: "2. Kerakli kutubxonalarni o'rnatish",
                        command: "npm install kutubxona-nomi",
                        description: "Tanlangan kutubxonani o'rnatish"
                    },
                    {
                        name: "3. Kutubxonani import qilish",
                        command: "import { Component } from 'kutubxona-nomi'",
                        description: "Kutubxonani komponentga import qilish"
                    },
                    {
                        name: "4. Provider/Setup sozlash",
                        command: `function App() {
  return (
    <Provider>
      <Component />
    </Provider>
  );
}`,
                        description: "Kutubxona providerini sozlash"
                    }
                ]
            }
        }
    }
];

export default dataReactKirish;