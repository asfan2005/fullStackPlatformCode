const dataSsrMasteryMukammal = [
    {
        id: 1,
        title: "Next.js SSR Basic Setup",
        code: `
// pages/index.js
export async function getServerSideProps() {
    const res = await fetch('https://api.example.com/data');
    const data = await res.json();
    
    return {
        props: {
            data
        }
    };
}

function HomePage({ data }) {
    return (
        <div>
            <h1>Server Side Rendered Page</h1>
            {data.map(item => (
                <div key={item.id}>{item.title}</div>
            ))}
        </div>
    );
}`,
        description: "Next.js da SSR (Server Side Rendering) ni asosiy sozlash va ishlatish",
        result: `{
    "demo": "https://codesandbox.io/s/nextjs-ssr-basic",
    "output": {
        "renderType": "Server Side",
        "features": ["Dynamic Data", "SEO Friendly", "Better Performance"]
    }
}`
    },
    {
        id: 2,
        title: "Next.js Static Site Generation (SSG)",
        code: `
// pages/posts/[id].js
export async function getStaticPaths() {
    const res = await fetch('https://api.example.com/posts');
    const posts = await res.json();

    const paths = posts.map(post => ({
        params: { id: post.id.toString() }
    }));

    return {
        paths,
        fallback: false
    };
}

export async function getStaticProps({ params }) {
    const res = await fetch(\`https://api.example.com/posts/\${params.id}\`);
    const post = await res.json();

    return {
        props: {
            post
        },
        revalidate: 60 // ISR (Incremental Static Regeneration)
    };
}

function PostPage({ post }) {
    return (
        <article>
            <h1>{post.title}</h1>
            <div>{post.content}</div>
        </article>
    );
}`,
        description: "Next.js da SSG (Static Site Generation) va ISR (Incremental Static Regeneration) ni qo'llash",
        result: `{
    "demo": "https://codesandbox.io/s/nextjs-ssg-example",
    "output": {
        "renderType": "Static Generation",
        "features": ["Pre-rendered Pages", "Fast Loading", "ISR Support"]
    }
}`
    },
    {
        id: 3,
        title: "Custom Server Side Rendering with Express",
        code: `
// server.js
import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from './App';

const app = express();

app.get('*', async (req, res) => {
    const initialData = await fetchInitialData();
    
    const html = ReactDOMServer.renderToString(
        <App initialData={initialData} />
    );

    res.send(\`
        <!DOCTYPE html>
        <html>
            <head>
                <title>SSR App</title>
            </head>
            <body>
                <div id="root">\${html}</div>
                <script>
                    window.__INITIAL_DATA__ = \${JSON.stringify(initialData)}
                </script>
                <script src="/client.js"></script>
            </body>
        </html>
    \`);
});

app.listen(3000);`,
        description: "Express va React bilan custom SSR implementatsiyasi",
        result: `{
    "demo": "https://codesandbox.io/s/custom-ssr-express",
    "output": {
        "renderType": "Custom SSR",
        "features": ["Full Control", "Express Integration", "Hydration"]
    }
}`
    },
    {
        id: 4,
        title: "Simple JavaScript SSR",
        code: `
// server.js
const http = require('http');

const server = http.createServer((req, res) => {
    const data = {
        title: 'Server Rendered Page',
        content: 'This is rendered on the server'
    };

    const html = \`
        <!DOCTYPE html>
        <html>
            <head>
                <title>\${data.title}</title>
            </head>
            <body>
                <h1>\${data.title}</h1>
                <p>\${data.content}</p>
            </body>
        </html>
    \`;

    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(html);
});

server.listen(3000);`,
        description: "Oddiy JavaScript da SSR ni amalga oshirish",
        result: `{
    "demo": "https://codesandbox.io/s/simple-js-ssr",
    "output": {
        "renderType": "Basic SSR",
        "features": ["Pure JavaScript", "No Framework", "Simple Implementation"]
    }
}`
    },
    {
        id: 5,
        title: "SSR with Dynamic Data Fetching",
        code: `
// server.js
const express = require('express');
const app = express();

async function fetchData() {
    return {
        posts: [
            { id: 1, title: 'First Post' },
            { id: 2, title: 'Second Post' }
        ]
    };
}

app.get('/', async (req, res) => {
    const data = await fetchData();
    
    const html = \`
        <!DOCTYPE html>
        <html>
            <head>
                <title>Blog Posts</title>
            </head>
            <body>
                <h1>Blog Posts</h1>
                <div id="posts">
                    \${data.posts.map(post => \`
                        <div class="post">
                            <h2>\${post.title}</h2>
                        </div>
                    \`).join('')}
                </div>
                <script>
                    window.__INITIAL_DATA__ = \${JSON.stringify(data)};
                </script>
            </body>
        </html>
    \`;

    res.send(html);
});

app.listen(3000);`,
        description: "Express va JavaScript yordamida dinamik ma'lumotlarni SSR qilish",
        result: `{
    "demo": "https://codesandbox.io/s/dynamic-js-ssr",
    "output": {
        "renderType": "Dynamic SSR",
        "features": ["Data Fetching", "Express", "Hydration Ready"]
    }
}`
    },
    {
        id: 6,
        title: "SSR with Template Engine",
        code: `
// server.js
const express = require('express');
const app = express();

app.set('view engine', 'ejs');

const getData = () => ({
    user: {
        name: 'John Doe',
        role: 'Developer'
    },
    posts: [
        { title: 'SSR Tutorial', content: 'Learn SSR basics' },
        { title: 'JavaScript Tips', content: 'Useful JS patterns' }
    ]
});

app.get('/', (req, res) => {
    const data = getData();
    res.render('index', { data });
});

// views/index.ejs
\`<!DOCTYPE html>
<html>
    <head>
        <title>SSR with Template</title>
    </head>
    <body>
        <header>
            <h1>Welcome, <%= data.user.name %></h1>
            <p>Role: <%= data.user.role %></p>
        </header>
        <main>
            <% data.posts.forEach(post => { %>
                <article>
                    <h2><%= post.title %></h2>
                    <p><%= post.content %></p>
                </article>
            <% }); %>
        </main>
    </body>
</html>\``,
        description: "EJS template engine yordamida SSR ni amalga oshirish",
        result: `{
    "demo": "https://codesandbox.io/s/ssr-template-engine",
    "output": {
        "renderType": "Template SSR",
        "features": ["Template Engine", "Clean Syntax", "Easy to Maintain"]
    }
}`
    }
];

export default dataSsrMasteryMukammal;