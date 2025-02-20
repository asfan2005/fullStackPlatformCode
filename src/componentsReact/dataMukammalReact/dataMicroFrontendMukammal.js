const dataMicroFrontendMukammal = [
    {
        id: 1,
        title: "Module Federation Host App",
        code: `
// webpack.config.js
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
    entry: './src/index.js',
    mode: 'development',
    devServer: {
        port: 3000,
        historyApiFallback: true,
    },
    output: {
        publicPath: 'http://localhost:3000/',
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: ['@babel/preset-react'],
                },
            },
        ],
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'host',
            filename: 'remoteEntry.js',
            remotes: {
                app1: 'app1@http://localhost:3001/remoteEntry.js',
                app2: 'app2@http://localhost:3002/remoteEntry.js'
            },
            shared: {
                react: { singleton: true },
                'react-dom': { singleton: true },
                '@material-ui/core': { singleton: true }
            }
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),
    ],
};

// src/App.js
import React, { Suspense } from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';

const RemoteApp1 = React.lazy(() => import('app1/App'));
const RemoteApp2 = React.lazy(() => import('app2/App'));

function App() {
    return (
        <BrowserRouter>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" style={{ flexGrow: 1 }}>
                        Host Application
                    </Typography>
                    <Button color="inherit" component={Link} to="/app1">
                        App 1
                    </Button>
                    <Button color="inherit" component={Link} to="/app2">
                        App 2
                    </Button>
                </Toolbar>
            </AppBar>

            <Suspense fallback={<div>Loading...</div>}>
                <Switch>
                    <Route path="/app1">
                        <RemoteApp1 />
                    </Route>
                    <Route path="/app2">
                        <RemoteApp2 />
                    </Route>
                </Switch>
            </Suspense>
        </BrowserRouter>
    );
}`,
        description: "Webpack Module Federation orqali host ilovani to'liq sozlash va Material-UI komponenetlari bilan ishlash",
        result: `{
    "demo": "https://github.com/module-federation/module-federation-examples",
    "output": {
        "type": "Host Application",
        "features": [
            "Module Federation",
            "Remote Loading",
            "Shared Dependencies",
            "Material-UI Integration",
            "React Router Integration"
        ]
    }
}`
    },
    {
        id: 2,
        title: "Single-SPA Root Config",
        code: `
// root-config.js
import { registerApplication, start } from 'single-spa';

registerApplication({
    name: '@org/navbar',
    app: () => System.import('@org/navbar'),
    activeWhen: ['/']
});

registerApplication({
    name: '@org/app1',
    app: () => System.import('@org/app1'),
    activeWhen: ['/app1']
});

registerApplication({
    name: '@org/app2',
    app: () => System.import('@org/app2'),
    activeWhen: ['/app2']
});

start();

// index.html
<script type="systemjs-importmap">
{
    "imports": {
        "@org/navbar": "//localhost:8080/navbar.js",
        "@org/app1": "//localhost:8081/app1.js",
        "@org/app2": "//localhost:8082/app2.js"
    }
}
</script>`,
        description: "Single-SPA framework orqali micro-frontend arxitekturasini yaratish",
        result: `{
    "demo": "https://single-spa.js.org/",
    "output": {
        "type": "Root Config",
        "features": ["Route Based Loading", "SystemJS", "Multiple Apps"]
    }
}`
    },
    {
        id: 3,
        title: "Micro Frontend with Web Components",
        code: `
// micro-frontend.js
class MicroFrontend extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: 'open' });
    }

    static get observedAttributes() {
        return ['name', 'url', 'data'];
    }

    async connectedCallback() {
        this.render();
        await this.loadStyles();
        await this.loadContent();
        this.setupEventListeners();
    }

    async loadStyles() {
        const style = document.createElement('style');
        style.textContent = \`
            :host {
                display: block;
                margin: 10px;
                padding: 10px;
                border: 1px solid #ccc;
                border-radius: 4px;
            }
            .error { color: red; }
            .loading { color: blue; }
        \`;
        this.shadow.appendChild(style);
    }

    async loadContent() {
        const name = this.getAttribute('name');
        const url = this.getAttribute('url');
        const container = this.shadow.querySelector('.content');
        
        try {
            container.innerHTML = '<div class="loading">Loading...</div>';
            const response = await fetch(url);
            
            if (!response.ok) {
                throw new Error(\`HTTP error! status: \${response.status}\`);
            }
            
            const html = await response.text();
            const template = document.createElement('template');
            template.innerHTML = html;
            
            container.innerHTML = '';
            container.appendChild(template.content.cloneNode(true));
            
            this.dispatchEvent(new CustomEvent('loaded', {
                detail: { name, success: true }
            }));
        } catch (error) {
            container.innerHTML = \`
                <div class="error">
                    Failed to load \${name}: \${error.message}
                </div>
            \`;
            
            this.dispatchEvent(new CustomEvent('error', {
                detail: { name, error: error.message }
            }));
        }
    }

    setupEventListeners() {
        const data = JSON.parse(this.getAttribute('data') || '{}');
        this.shadow.addEventListener('click', (e) => {
            if (e.target.matches('button')) {
                this.dispatchEvent(new CustomEvent('interaction', {
                    detail: { type: 'button-click', data }
                }));
            }
        });
    }

    render() {
        this.shadow.innerHTML = \`
            <div class="micro-frontend">
                <div class="content"></div>
            </div>
        \`;
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (oldValue !== newValue) {
            if (name === 'url' || name === 'name') {
                this.loadContent();
            }
            if (name === 'data') {
                this.setupEventListeners();
            }
        }
    }
}

customElements.define('micro-frontend', MicroFrontend);

// usage example
document.body.innerHTML = \`
    <micro-frontend 
        name="app1" 
        url="http://localhost:3001/app1"
        data='{"theme": "light"}'>
    </micro-frontend>
\`;

// Event handling example
document.querySelector('micro-frontend').addEventListener('loaded', (e) => {
    console.log(\`\${e.detail.name} loaded successfully\`);
});`,
        description: "Web Components yordamida kengaytirilgan micro-frontend komponenti yaratish",
        result: `{
    "demo": "https://www.webcomponents.org/",
    "output": {
        "type": "Web Component",
        "features": [
            "Shadow DOM",
            "Custom Elements",
            "HTML Templates",
            "Attribute Observation",
            "Event Handling",
            "Error Handling",
            "Loading States",
            "Styling",
            "Custom Events"
        ]
    }
}`
    },
    {
        id: 4,
        title: "Micro Frontend with iframes",
        code: `
// IframeContainer.js
function IframeMicroFrontend({ url, name, onMessage }) {
    useEffect(() => {
        const handleMessage = (event) => {
            if (event.origin === new URL(url).origin) {
                onMessage(event.data);
            }
        };
        
        window.addEventListener('message', handleMessage);
        return () => window.removeEventListener('message', handleMessage);
    }, [url, onMessage]);

    return (
        <iframe
            src={url}
            title={name}
            style={{ border: 'none', width: '100%', height: '100%' }}
            sandbox="allow-scripts allow-same-origin"
        />
    );
}

// usage
function App() {
    const handleMessage = (data) => {
        console.log('Received message:', data);
    };

    return (
        <IframeMicroFrontend
            url="http://localhost:3001"
            name="app1"
            onMessage={handleMessage}
        />
    );
}`,
        description: "iframe orqali micro-frontend integratsiyasi",
        result: `{
    "demo": "https://example.com/iframe-demo",
    "output": {
        "type": "iframe Integration",
        "features": ["Isolation", "PostMessage API", "Secure Context"]
    }
}`
    },
    {
        id: 5,
        title: "Micro Frontend with ESM",
        code: `
// app1/expose.js
export function App1() {
    return (
        <div>
            <h2>App 1</h2>
            <p>This is a micro frontend loaded via ESM</p>
        </div>
    );
}

// host/index.html
<script type="module">
    import { App1 } from 'http://localhost:3001/expose.js';
    
    const container = document.getElementById('app1-container');
    ReactDOM.render(React.createElement(App1), container);
</script>`,
        description: "ES Modules orqali micro-frontend yaratish",
        result: `{
    "demo": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules",
    "output": {
        "type": "ESM Integration",
        "features": ["Native Modules", "Dynamic Imports", "No Build Tool"]
    }
}`
    }
];

export default dataMicroFrontendMukammal;