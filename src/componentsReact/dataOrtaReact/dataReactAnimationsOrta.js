const dataReactAnimationsOrta = [
    {
        id: 1,
        title: "React Animations",
        description: "React-da animatsiyalarni yaratish va boshqarish usullari",
        image: "https://miro.medium.com/v2/resize:fit:1400/1*1Z177dpTeAp7uEFc5Zx2xg.png",
        mainTopics: {
            introduction: {
                title: "React Animations Asoslari",
                points: [
                    "CSS Animations vs React Animations",
                    "React Transition Group",
                    "Framer Motion",
                    "React Spring",
                    "CSS-in-JS animatsiyalar"
                ],
                examples: [
                    {
                        title: "CSS Transition",
                        description: "Oddiy CSS transition bilan animatsiya",
                        code: `
import React, { useState } from 'react';
import './styles.css';

function AnimatedComponent() {
    const [isVisible, setIsVisible] = useState(false);
    
    return (
        <div className={\`box \${isVisible ? 'visible' : ''}\`}
             onClick={() => setIsVisible(!isVisible)}>
            Animatsiya
        </div>
    );
}`
                    },
                    {
                        title: "React Transition Group",
                        description: "React Transition Group bilan animatsiya",
                        code: `
import { CSSTransition } from 'react-transition-group';

function AnimatedTransition() {
    const [inProp, setInProp] = useState(false);
    
    return (
        <CSSTransition in={inProp} timeout={200} classNames="fade">
            <div className="transition-box">
                Animatsiyali Element
            </div>
        </CSSTransition>
    );
}`
                    },
                    {
                        title: "Framer Motion",
                        description: "Framer Motion bilan animatsiya",
                        code: `
import { motion } from 'framer-motion';

function FramerAnimation() {
    return (
        <motion.div
            animate={{ x: 100 }}
            transition={{ duration: 2 }}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
        >
            Harakatlanuvchi Element
        </motion.div>
    );
}`
                    }
                ]
            },
            advancedExamples: {
                title: "Murakkab Animatsiya Misollari",
                components: [
                    {
                        name: "React Spring Animatsiyasi",
                        description: "React Spring kutubxonasi bilan animatsiya",
                        code: `
import { useSpring, animated } from 'react-spring';

function SpringAnimation() {
    const props = useSpring({
        to: { opacity: 1, transform: 'translateY(0)' },
        from: { opacity: 0, transform: 'translateY(50px)' },
        config: { duration: 1000 }
    });

    return (
        <animated.div style={props}>
            Spring Animatsiya
        </animated.div>
    );
}`
                    },
                    {
                        name: "Keyframe Animatsiya",
                        description: "Keyframe asosidagi animatsiya",
                        code: `
import { motion } from 'framer-motion';

const variants = {
    initial: { scale: 0, rotate: 0 },
    animate: {
        scale: 1,
        rotate: 360,
        transition: {
            duration: 2,
            ease: "easeInOut"
        }
    }
};

function KeyframeAnimation() {
    return (
        <motion.div
            variants={variants}
            initial="initial"
            animate="animate"
        >
            Keyframe Animatsiya
        </motion.div>
    );
}`
                    }
                ]
            },
            practicalUsage: {
                title: "Amaliy Foydalanish",
                examples: [
                    {
                        name: "Modal Animatsiyasi",
                        code: `
function AnimatedModal({ isOpen, onClose }) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isOpen ? 1 : 0 }}
            exit={{ opacity: 0 }}
        >
            <div className="modal-content">
                Modal Kontenti
                <button onClick={onClose}>Yopish</button>
            </div>
        </motion.div>
    );
}`
                    },
                    {
                        name: "Scroll Animatsiyasi",
                        code: `
function ScrollAnimation() {
    const controls = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) {
            controls.start('visible');
        }
    }, [controls, inView]);

    return (
        <motion.div
            ref={ref}
            animate={controls}
            initial="hidden"
            variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 50 }
            }}
        >
            Scroll Animatsiya
        </motion.div>
    );
}`
                    }
                ]
            },
            bestPractices: {
                title: "Eng Yaxshi Amaliyotlar",
                practices: [
                    {
                        name: "Animatsiya Optimizatsiyasi",
                        tips: [
                            "transform va opacity xususiyatlarini ishlatish",
                            "will-change xususiyatidan to'g'ri foydalanish",
                            "animatsiyalarni performance monitoring qilish",
                            "mobil qurilmalarda optimallash"
                        ]
                    },
                    {
                        name: "Animatsiya Dizayni",
                        tips: [
                            "Foydalanuvchi tajribasini hisobga olish",
                            "Animatsiya davomiyligini to'g'ri tanlash",
                            "Animatsiyalarni accessible qilish",
                            "Animatsiyalarni o'chirish imkoniyatini berish"
                        ]
                    }
                ]
            },
            additionalResources: {
                title: "Qo'shimcha Materiallar",
                links: [
                    {
                        name: "Framer Motion Documentation",
                        url: "https://www.framer.com/motion/"
                    },
                    {
                        name: "React Spring Documentation",
                        url: "https://react-spring.io/"
                    },
                    {
                        name: "React Transition Group Documentation",
                        url: "https://reactcommunity.org/react-transition-group/"
                    }
                ]
            }
        }
    }
];

export default dataReactAnimationsOrta;