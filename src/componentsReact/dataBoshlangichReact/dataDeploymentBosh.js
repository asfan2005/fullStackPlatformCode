const dataDeploymentBosh = [
    {
        id: 1,
        title: "React Deployment",
        level: "Boshlang'ich",
        description: "React ilovalarni turli platformalarga deploy qilish bo'yicha qo'llanma",
        image: "https://reactjs.org/logo-og.png",
        mainTopics: {
            introduction: {
                title: "React Deployment Asoslari",
                points: [
                    "Build jarayoni",
                    "Environment variables",
                    "Deployment platformalari",
                    "Static hosting",
                    "Server-side rendering",
                    "Continuous Integration/Deployment",
                    "Performance optimization",
                    "Security considerations",
                    "Monitoring va analytics"
                ]
            },
            buildProcess: {
                title: "Build Jarayoni",
                concepts: [
                    {
                        name: "Production Build",
                        description: "Production uchun build yaratish va optimizatsiya",
                        example: `
// package.json
{
    "scripts": {
        "start": "react-scripts start",
        "build": "react-scripts build",
        "build:prod": "GENERATE_SOURCEMAP=false react-scripts build",
        "analyze": "source-map-explorer 'build/static/js/*.js'",
        "test": "react-scripts test",
        "eject": "react-scripts eject"
    }
}

// Webpack optimization configuration
// config-overrides.js
const { override, adjustStyleLoaders } = require('customize-cra');

module.exports = override(
    adjustStyleLoaders(({ use: [, css, postcss, resolve, processor] }) => {
        css.options.sourceMap = false;
        postcss.options.sourceMap = false;
        if (processor && processor.options) {
            processor.options.sourceMap = false;
        }
    })
);`
                    },
                    {
                        name: "Environment Variables",
                        description: "Environment o'zgaruvchilarini sozlash va xavfsizlik",
                        example: `
// .env.development
REACT_APP_API_URL=https://infinity-school.uz/
REACT_APP_ENV=development
REACT_APP_FEATURE_FLAGS={"newUI":true,"beta":false}

// .env.production
REACT_APP_API_URL=https://api.example.com
REACT_APP_ENV=production
REACT_APP_FEATURE_FLAGS={"newUI":false,"beta":false}

// src/config/environment.js
export const config = {
    apiUrl: process.env.REACT_APP_API_URL,
    environment: process.env.REACT_APP_ENV,
    featureFlags: JSON.parse(process.env.REACT_APP_FEATURE_FLAGS || '{}'),
    isProduction: process.env.NODE_ENV === 'production',
    isDevelopment: process.env.NODE_ENV === 'development'
};

// Usage in components
import { config } from '../config/environment';

function ApiService() {
    const fetchData = async () => {
        const response = await fetch(\`\${config.apiUrl}/data\`);
        return response.json();
    };
}`
                    }
                ]
            },
            deploymentPlatforms: {
                title: "Deployment Platformalari",
                platforms: [
                    {
                        name: "Docker bilan Deployment",
                        description: "Docker orqali React ilovani deploy qilish",
                        steps: `
# Dockerfile
FROM node:16-alpine as builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

# nginx.conf
server {
    listen 80;
    location / {
        root /usr/share/nginx/html;
        index index.html;
        try_files $uri $uri/ /index.html;
    }
}

# Docker commands
docker build -t react-app .
docker run -p 80:80 react-app`,
                        commands: [
                            "docker build -t react-app .",
                            "docker run -p 80:80 react-app",
                            "docker-compose up -d"
                        ]
                    },
                    {
                        name: "AWS S3 va CloudFront Deployment",
                        description: "AWS S3 va CloudFront orqali static hosting",
                        steps: `
# AWS S3 Bucket Policy
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "PublicReadGetObject",
            "Effect": "Allow",
            "Principal": "*",
            "Action": "s3:GetObject",
            "Resource": "arn:aws:s3:::your-bucket-name/*"
        }
    ]
}

# Deploy script
#!/bin/bash
npm run build
aws s3 sync build/ s3://your-bucket-name
aws cloudfront create-invalidation --distribution-id YOUR_DISTRIBUTION_ID --paths "/*"`,
                        commands: [
                            "npm run build",
                            "aws s3 sync build/ s3://your-bucket-name",
                            "aws cloudfront create-invalidation --distribution-id YOUR_DISTRIBUTION_ID --paths \"/*\""
                        ]
                    }
                ]
            },
            serverConfiguration: {
                title: "Server Konfiguratsiyasi",
                configurations: [
                    {
                        name: "Nginx Configuration",
                        description: "Nginx server konfiguratsiyasi",
                        code: `
# /etc/nginx/sites-available/react-app
server {
    listen 80;
    server_name example.com;
    root /var/www/react-app;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    location /api {
        proxy_pass http://backend-server;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}`
                    },
                    {
                        name: "Apache Configuration",
                        description: "Apache server konfiguratsiyasi",
                        code: `
# .htaccess
Options -MultiViews
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteRule ^ index.html [QSA,L]`
                    }
                ]
            },
            cicdPipelines: {
                title: "CI/CD Pipeline'lar",
                examples: [
                    {
                        name: "GitHub Actions",
                        description: "GitHub Actions orqali avtomatik deployment",
                        code: `
# .github/workflows/deploy.yml
name: Deploy React App
on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      
      - name: Install Dependencies
        run: npm install
        
      - name: Build
        run: npm run build
        env:
          REACT_APP_API_URL: "secrets.REACT_APP_API_URL"
          
      - name: Deploy to Netlify
        uses: netlify/actions/cli@master
        env:
          NETLIFY_AUTH_TOKEN: "secrets.NETLIFY_AUTH_TOKEN"
          NETLIFY_SITE_ID: "secrets.NETLIFY_SITE_ID"
        with:
          args: deploy --dir=build --prod`
                    }
                ]
            },
            security: {
                title: "Xavfsizlik",
                practices: [
                    {
                        name: "Security Headers",
                        description: "Xavfsizlik headerlarini sozlash",
                        code: `
// Netlify headers file
# netlify.toml
[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-XSS-Protection = "1; mode=block"
    X-Content-Type-Options = "nosniff"
    Referrer-Policy = "strict-origin-when-cross-origin"
    Content-Security-Policy = "default-src 'self'"`
                    },
                    {
                        name: "Environment Security",
                        description: "Environment variables xavfsizligi",
                        code: `
// .gitignore
.env
.env.local
.env.development.local
.env.test.local
.env.production.local

// Example of secure environment usage
const API_KEY = process.env.REACT_APP_API_KEY;
if (!API_KEY) {
    throw new Error('API key is required');
}`
                    }
                ]
            },
            monitoring: {
                title: "Monitoring va Analytics",
                tools: [
                    {
                        name: "Google Analytics",
                        description: "Google Analytics integratsiyasi",
                        code: `
// components/Analytics.jsx
import ReactGA from 'react-ga';

const initGA = (trackingId) => {
    ReactGA.initialize(trackingId);
    ReactGA.pageview(window.location.pathname);
};

const Analytics = () => {
    useEffect(() => {
        initGA('UA-000000-01');
    }, []);

    return null;
};`
                    },
                    {
                        name: "Error Monitoring",
                        description: "Xatolarni monitoring qilish",
                        code: `
// services/errorTracking.js
import * as Sentry from "@sentry/react";

Sentry.init({
    dsn: process.env.REACT_APP_SENTRY_DSN,
    environment: process.env.NODE_ENV,
    integrations: [
        new Sentry.BrowserTracing()
    ],
    tracesSampleRate: 1.0
});`
                    }
                ]
            }
        }
    },
];

export default dataDeploymentBosh;