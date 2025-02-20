const dataComplexAnimation = [
    {
        id: 1,
        title: "Framer Motion Animation",
        code: `
import { motion } from 'framer-motion';

const Card = () => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            drag="x"
            dragConstraints={{ left: -100, right: 100 }}
        >
            <h2>Interactive Card</h2>
            <p>Drag me!</p>
        </motion.div>
    );
};`,
        description: "Framer Motion kutubxonasi orqali zamonaviy animatsiyalar",
        result: `{
    "animation": "Framer Motion",
    "features": [
        "Smooth Transitions",
        "Gesture Animations",
        "Drag & Drop",
        "Spring Physics"
    ]
}`
    },
    {
        id: 2,
        title: "React Spring Animation",
        code: `
import { useSpring, animated } from 'react-spring';

const AnimatedComponent = () => {
    const props = useSpring({
        from: { opacity: 0, transform: 'translate3d(0,-40px,0)' },
        to: { opacity: 1, transform: 'translate3d(0,0px,0)' },
        config: { mass: 1, tension: 280, friction: 20 }
    });

    return (
        <animated.div style={props}>
            <h1>Spring Physics Animation</h1>
        </animated.div>
    );
};`,
        description: "React Spring orqali fizikaga asoslangan animatsiyalar",
        result: `{
    "animation": "React Spring",
    "features": [
        "Physics Based",
        "Performance Focused",
        "Interpolations",
        "Chain Animations"
    ]
}`
    },
    {
        id: 3,
        title: "CSS Keyframe Animation",
        code: `
import styled, { keyframes } from 'styled-components';

const bounce = keyframes\`
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-20px); }
\`;

const BouncingElement = styled.div\`
    animation: \${bounce} 1s ease infinite;
    &:hover {
        animation-play-state: paused;
    }
\`;

const Animation = () => {
    return (
        <BouncingElement>
            <h3>Bouncing Text</h3>
        </BouncingElement>
    );
};`,
        description: "Styled Components va CSS keyframes orqali animatsiyalar",
        result: `{
    "animation": "CSS Keyframes",
    "features": [
        "Pure CSS Animation",
        "Performance Efficient",
        "Easy Integration",
        "Cross-browser Support"
    ]
}`
    },
    {
        id: 4,
        title: "GSAP Animation",
        code: `
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const GSAPAnimation = () => {
    const elementRef = useRef();

    useEffect(() => {
        gsap.to(elementRef.current, {
            duration: 2,
            x: 100,
            y: 50,
            rotation: 360,
            scale: 1.5,
            ease: "elastic.out(1, 0.3)",
            yoyo: true,
            repeat: -1
        });
    }, []);

    return (
        <div ref={elementRef}>
            <h2>GSAP Animated Element</h2>
        </div>
    );
};`,
        description: "GSAP kutubxonasi orqali professional animatsiyalar",
        result: `{
    "animation": "GSAP",
    "features": [
        "Timeline Based",
        "Complex Animations",
        "High Performance",
        "Cross-browser Support"
    ]
}`
    },
    {
        id: 5,
        title: "Lottie Animation",
        code: `
import Lottie from 'react-lottie';
import animationData from './animation.json';

const LottieAnimation = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return (
        <div>
            <Lottie 
                options={defaultOptions}
                height={400}
                width={400}
                isStopped={false}
                isPaused={false}
            />
        </div>
    );
};`,
        description: "Lottie orqali After Effects animatsiyalarini React-da ishlatish",
        result: `{
    "animation": "Lottie",
    "features": [
        "After Effects Integration",
        "Vector Animations",
        "Lightweight",
        "Interactive Control"
    ]
}`
    },
    {
        id: 6,
        title: "React Transition Group",
        code: `
import { CSSTransition } from 'react-transition-group';
import { useState } from 'react';

const TransitionExample = () => {
    const [inProp, setInProp] = useState(false);
    
    return (
        <div>
            <button onClick={() => setInProp(!inProp)}>
                Toggle Animation
            </button>
            <CSSTransition in={inProp} timeout={200} classNames="fade">
                <div className="transition-content">
                    <h2>Smooth Transition Effect</h2>
                    <p>This content smoothly fades in and out</p>
                </div>
            </CSSTransition>
        </div>
    );
};`,
        description: "React Transition Group orqali yumshoq o'tish effektlari",
        result: `{
    "animation": "React Transition Group",
    "features": [
        "Enter/Exit Transitions",
        "CSS Based",
        "Component Lifecycle",
        "Group Animations"
    ]
}`
    },
    {
        id: 7,
        title: "Three.js Animation",
        code: `
import { Canvas, useFrame } from '@react-three/fiber';
import { useRef } from 'react';

function RotatingCube() {
    const meshRef = useRef();
    
    useFrame((state, delta) => {
        meshRef.current.rotation.x += delta;
        meshRef.current.rotation.y += delta;
    });

    return (
        <mesh ref={meshRef}>
            <boxGeometry args={[2, 2, 2]} />
            <meshStandardMaterial color="orange" />
        </mesh>
    );
}

const ThreeAnimation = () => {
    return (
        <Canvas>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <RotatingCube />
        </Canvas>
    );
};`,
        description: "Three.js va React Three Fiber orqali 3D animatsiyalar",
        result: `{
    "animation": "Three.js",
    "features": [
        "3D Animations",
        "WebGL Based",
        "Hardware Accelerated",
        "Complex 3D Scenes"
    ]
}`
    },
    {
        id: 8,
        title: "React Move Animation",
        code: `
import { NodeGroup } from 'react-move';
import { easeExpOut } from 'd3-ease';

const MovingCircles = () => {
    const data = [1, 2, 3, 4];

    return (
        <NodeGroup
            data={data}
            keyAccessor={(d) => d}
            start={() => ({
                x: 0,
                opacity: 0
            })}
            enter={(d) => ({
                x: [d * 100],
                opacity: [1],
                timing: { duration: 750, ease: easeExpOut }
            })}
            update={(d) => ({
                x: [d * 100],
                opacity: [1],
                timing: { duration: 750, ease: easeExpOut }
            })}
            leave={() => ({
                x: [0],
                opacity: [0],
                timing: { duration: 750, ease: easeExpOut }
            })}
        >
            {(nodes) => (
                <div style={{ position: 'relative', height: '100px' }}>
                    {nodes.map(({ key, data, state: { x, opacity } }) => (
                        <div
                            key={key}
                            style={{
                                position: 'absolute',
                                transform: \`translateX(\${x}px)\`,
                                opacity,
                                width: '50px',
                                height: '50px',
                                borderRadius: '25px',
                                backgroundColor: 'blue'
                            }}
                        />
                    ))}
                </div>
            )}
        </NodeGroup>
    );
};`,
        description: "React Move kutubxonasi orqali data-driven animatsiyalar",
        result: `{
    "animation": "React Move",
    "features": [
        "Data-Driven Animations",
        "Smooth Transitions",
        "D3-Based Easing",
        "Complex State Animations"
    ]
}`
    }
];

export default dataComplexAnimation;