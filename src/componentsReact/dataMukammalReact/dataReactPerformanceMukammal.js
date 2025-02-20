import React from 'react';

const dataReactPerformanceMukammal = [
    {
        id: 1,
        title: "React Profiler API Usage",
        code: `
import { Profiler } from 'react';

function onRenderCallback(
  id,
  phase,
  actualDuration,
  baseDuration,
  startTime,
  commitTime,
  interactions
) {
  console.log({
    id,
    phase,
    actualDuration,
    baseDuration,
    startTime,
    commitTime
  });
}

function App() {
  return (
    <Profiler id="App" onRender={onRenderCallback}>
      <div>
        <h1>Performance Monitoring</h1>
        {/* Your components */}
      </div>
    </Profiler>
  );
}`,
        description: "React Profiler API dan foydalanish",
        result: `{
    "feature": "React Profiler",
    "metrics": [
        "Render Duration",
        "Component Phase",
        "Commit Time",
        "Performance Timeline"
    ]
}`
    },
    {
        id: 2,
        title: "React.memo Implementation",
        code: `
const MemoizedComponent = React.memo(function MyComponent(props) {
  return (
    <div>
      <h2>{props.title}</h2>
      <p>{props.content}</p>
    </div>
  );
}, (prevProps, nextProps) => {
  return prevProps.title === nextProps.title &&
         prevProps.content === nextProps.content;
});

// Usage example
function ParentComponent() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>
        Count: {count}
      </button>
      <MemoizedComponent 
        title="Static Title" 
        content="Static Content" 
      />
    </div>
  );
}`,
        description: "React.memo orqali komponentlarni memoizatsiya qilish",
        result: `{
    "feature": "Component Memoization",
    "benefits": [
        "Prevents Unnecessary Renders",
        "Performance Optimization",
        "Props Comparison",
        "Render Control"
    ]
}`
    },
    {
        id: 3,
        title: "useMemo and useCallback Hooks",
        code: `
import React, { useMemo, useCallback, useState } from 'react';

function PerformanceComponent({ data, onItemClick }) {
  // Expensive computation memoization
  const processedData = useMemo(() => {
    return data.map(item => ({
      ...item,
      calculated: item.value * 2
    }));
  }, [data]);

  // Callback memoization
  const handleClick = useCallback((id) => {
    onItemClick(id);
  }, [onItemClick]);

  return (
    <div>
      {processedData.map(item => (
        <button 
          key={item.id}
          onClick={() => handleClick(item.id)}
        >
          {item.calculated}
        </button>
      ))}
    </div>
  );
}`,
        description: "useMemo va useCallback hooklaridan foydalanish",
        result: `{
    "feature": "Hooks Optimization",
    "techniques": [
        "Value Memoization",
        "Function Memoization",
        "Dependency Control",
        "Resource Management"
    ]
}`
    },
    {
        id: 4,
        title: "Code Splitting with React.lazy",
        code: `
import React, { Suspense, lazy } from 'react';

// Lazy loaded component
const LazyComponent = lazy(() => import('./LazyComponent'));

function OptimizedApp() {
  return (
    <div>
      <h1>Main Content</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <LazyComponent />
      </Suspense>
    </div>
  );
}

// Route-based code splitting
const Home = lazy(() => import('./routes/Home'));
const About = lazy(() => import('./routes/About'));
const Contact = lazy(() => import('./routes/Contact'));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </Suspense>
    </Router>
  );
}`,
        description: "React.lazy orqali code splitting qilish",
        result: `{
    "feature": "Code Splitting",
    "benefits": [
        "Reduced Bundle Size",
        "Lazy Loading",
        "Better Load Time",
        "Resource Optimization"
    ]
}`
    },
    {
        id: 5,
        title: "Virtual List Implementation",
        code: `
import React, { useState, useEffect, useRef } from 'react';

function VirtualList({ items, itemHeight, windowHeight }) {
  const [scrollTop, setScrollTop] = useState(0);
  const containerRef = useRef();

  const visibleItems = () => {
    const start = Math.floor(scrollTop / itemHeight);
    const end = Math.min(
      start + Math.ceil(windowHeight / itemHeight),
      items.length
    );
    
    return items
      .slice(start, end)
      .map((item, index) => ({
        ...item,
        index: start + index
      }));
  };

  const handleScroll = (e) => {
    setScrollTop(e.target.scrollTop);
  };

  return (
    <div
      ref={containerRef}
      onScroll={handleScroll}
      style={{
        height: windowHeight,
        overflow: 'auto'
      }}
    >
      <div style={{ height: items.length * itemHeight }}>
        <div style={{
          transform: \`translateY(\${scrollTop}px)\`
        }}>
          {visibleItems().map(item => (
            <div
              key={item.id}
              style={{ height: itemHeight }}
            >
              {item.content}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}`,
        description: "Virtual List orqali katta ro'yxatlarni optimizatsiya qilish",
        result: `{
    "feature": "Virtual List",
    "benefits": [
        "Memory Efficiency",
        "Smooth Scrolling",
        "Large List Handling",
        "DOM Node Management"
    ]
}`
    }
];

export default dataReactPerformanceMukammal;