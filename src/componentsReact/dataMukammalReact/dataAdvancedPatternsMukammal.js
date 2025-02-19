const dataAdvancedPatternsMukammal = [
    {
        id: 1,
        title: "Compound Components Pattern",
        code: `
import React, { createContext, useContext, useState } from 'react';

// Accordion Context
const AccordionContext = createContext();

// Main Accordion Component
const Accordion = ({ children }) => {
    const [activeIndex, setActiveIndex] = useState(null);
    
    return (
        <AccordionContext.Provider value={{ activeIndex, setActiveIndex }}>
            <div className="accordion">
                {children}
            </div>
        </AccordionContext.Provider>
    );
};

// Accordion Item Component
const AccordionItem = ({ children, index }) => {
    const { activeIndex, setActiveIndex } = useContext(AccordionContext);
    
    const isActive = activeIndex === index;
    
    const toggleItem = () => {
        setActiveIndex(isActive ? null : index);
    };
    
    return (
        <div className="accordion-item">
            {React.Children.map(children, child =>
                React.cloneElement(child, { isActive, toggleItem })
            )}
        </div>
    );
};

// Header Component
const Header = ({ children, isActive, toggleItem }) => (
    <div className="accordion-header" onClick={toggleItem}>
        {children}
        <span>{isActive ? '▼' : '▶'}</span>
    </div>
);

// Content Component
const Content = ({ children, isActive }) => (
    <div className={isActive ? 'content active' : 'content'}>
        {children}
    </div>
);

// Compose components
Accordion.Item = AccordionItem;
Accordion.Header = Header;
Accordion.Content = Content;

// Example Usage
function AccordionExample() {
    return (
        <Accordion>
            <Accordion.Item index={0}>
                <Accordion.Header>First Section</Accordion.Header>
                <Accordion.Content>
                    Content for first section
                </Accordion.Content>
            </Accordion.Item>
            <Accordion.Item index={1}>
                <Accordion.Header>Second Section</Accordion.Header>
                <Accordion.Content>
                    Content for second section
                </Accordion.Content>
            </Accordion.Item>
        </Accordion>
    );
}

export default AccordionExample;`,
        description: "Compound Components pattern - komponentlarni birlashtirib ishlatish",
        result: `{
    "demo": "https://codesandbox.io/s/compound-components-demo",
    "output": {
        "sections": ["First Section", "Second Section"],
        "activeSection": "Content for first section"
    }
}`
    },
    {
        id: 2,
        title: "Render Props Pattern",
        code: `
import React, { useState } from 'react';

// Mouse tracker component using render props
const MouseTracker = ({ render }) => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    
    const handleMouseMove = (event) => {
        setPosition({
            x: event.clientX,
            y: event.clientY
        });
    };
    
    return (
        <div 
            style={{ height: '300px', border: '1px solid #ccc' }}
            onMouseMove={handleMouseMove}
        >
            {render(position)}
        </div>
    );
};

// Example components that use the mouse position
const Cat = ({ position }) => (
    <div style={{
        position: 'absolute',
        left: position.x,
        top: position.y,
        fontSize: '40px'
    }}>
        🐱
    </div>
);

const Coordinates = ({ position }) => (
    <p>
        Mouse position: ({position.x}, {position.y})
    </p>
);

// Example usage
function MouseTrackerExample() {
    return (
        <div>
            <h2>Mouse Tracker</h2>
            <MouseTracker
                render={position => (
                    <>
                        <Cat position={position} />
                        <Coordinates position={position} />
                    </>
                )}
            />
        </div>
    );
}

export default MouseTrackerExample;`,
        description: "Render Props pattern - komponentlar orasida ma'lumot almashish",
        result: `{
    "demo": "https://codesandbox.io/s/render-props-demo",
    "output": {
        "mousePosition": "(123, 456)",
        "catPosition": "Cat follows mouse cursor"
    }
}`
    },
    {
        id: 3,
        title: "Higher-Order Component (HOC) Pattern",
        code: `
import React, { useState, useEffect } from 'react';

// Higher-Order Component
const withDataFetching = (WrappedComponent, dataSource) => {
    return function WithDataFetching(props) {
        const [data, setData] = useState(null);
        const [loading, setLoading] = useState(true);
        const [error, setError] = useState(null);
        
        useEffect(() => {
            const fetchData = async () => {
                try {
                    const response = await fetch(dataSource);
                    const json = await response.json();
                    setData(json);
                    setLoading(false);
                } catch (err) {
                    setError(err.message);
                    setLoading(false);
                }
            };
            
            fetchData();
        }, []);
        
        if (loading) return <div>Loading...</div>;
        if (error) return <div>Error: {error}</div>;
        
        return <WrappedComponent data={data} {...props} />;
    };
};

// Example components using HOC
const UserList = ({ data }) => (
    <ul>
        {data.map(user => (
            <li key={user.id}>
                {user.name} ({user.email})
            </li>
        ))}
    </ul>
);

const PostList = ({ data }) => (
    <div>
        {data.map(post => (
            <div key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
            </div>
        ))}
    </div>
);

// Enhanced components with data fetching
const UsersWithData = withDataFetching(
    UserList,
    'https://jsonplaceholder.typicode.com/users'
);

const PostsWithData = withDataFetching(
    PostList,
    'https://jsonplaceholder.typicode.com/posts'
);

// Example usage
function HOCExample() {
    return (
        <div>
            <h2>Users</h2>
            <UsersWithData />
            <h2>Posts</h2>
            <PostsWithData />
        </div>
    );
}

export default HOCExample;`,
        description: "Higher-Order Component pattern - komponentlarga qo'shimcha funksionallik qo'shish",
        result: `{
    "demo": "https://codesandbox.io/s/hoc-pattern-demo",
    "output": {
        "users": [
            { "id": 1, "name": "John Doe", "email": "john@example.com" },
            { "id": 2, "name": "Jane Smith", "email": "jane@example.com" }
        ],
        "posts": [
            { "id": 1, "title": "First Post", "body": "Content..." },
            { "id": 2, "title": "Second Post", "body": "Content..." }
        ]
    }
}`
    }
];

export default dataAdvancedPatternsMukammal;