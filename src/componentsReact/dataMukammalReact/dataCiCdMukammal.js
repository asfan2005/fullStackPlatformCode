const dataCiCdMukammal = [
    {
        id: 1,
        title: "Basic GitHub Actions Workflow",
        code: `
name: CI/CD Pipeline

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v2
    
    - name: Setup Node.js
      uses: actions/setup-node@v2
      with:
        node-version: '16'
        
    - name: Install Dependencies
      run: npm install
      
    - name: Run Tests
      run: npm test
      
    - name: Build Project
      run: npm run build`,
        description: "GitHub Actions yordamida asosiy CI/CD pipeline yaratish",
        result: `{
    "feature": "GitHub Actions",
    "concepts": [
        "Workflow Setup",
        "Automated Testing",
        "Build Process",
        "Continuous Integration"
    ]
}`
    },
    {
        id: 2,
        title: "Docker Container Deployment",
        code: `
# Dockerfile
FROM node:16-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

EXPOSE 3000
CMD ["npm", "start"]

# Docker Compose
version: '3.8'
services:
  web:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production`,
        description: "Docker konteynerlarini yaratish va deploy qilish",
        result: `{
    "feature": "Docker Deployment",
    "concepts": [
        "Containerization",
        "Docker Compose",
        "Environment Setup",
        "Production Deployment"
    ]
}`
    },
    {
        id: 3,
        title: "Automated Testing Pipeline",
        code: `
# Jest configuration
module.exports = {
    testEnvironment: 'node',
    coverageThreshold: {
        global: {
            branches: 80,
            functions: 80,
            lines: 80
        }
    }
};

# CI Pipeline
stages:
  - test
  - build
  - deploy

test:
  stage: test
  script:
    - npm install
    - npm run test:coverage
    - npm run lint

build:
  stage: build
  script:
    - docker build -t myapp .
    
deploy:
  stage: deploy
  script:
    - kubectl apply -f k8s/`,
        description: "Avtomatlashtirilgan test va deployment pipeline",
        result: `{
    "feature": "Testing Pipeline",
    "concepts": [
        "Unit Testing",
        "Code Coverage",
        "Linting",
        "Kubernetes Deployment"
    ]
}`
    },
    {
        id: 4,
        title: "Infrastructure as Code",
        code: `
# Terraform Configuration
provider "aws" {
  region = "us-west-2"
}

resource "aws_instance" "web" {
  ami           = "ami-0c55b159cbfafe1f0"
  instance_type = "t2.micro"

  tags = {
    Name = "Production Server"
  }
}

resource "aws_s3_bucket" "static" {
  bucket = "my-static-website"
  acl    = "public-read"

  website {
    index_document = "index.html"
    error_document = "error.html"
  }
}`,
        description: "Terraform yordamida infratuzilmani kod sifatida boshqarish",
        result: `{
    "feature": "Infrastructure as Code",
    "concepts": [
        "Terraform",
        "AWS Resources",
        "Cloud Infrastructure",
        "Resource Management"
    ]
}`
    },
    {
        id: 5,
        title: "Monitoring and Logging",
        code: `
# Prometheus configuration
global:
  scrape_interval: 15s

scrape_configs:
  - job_name: 'node'
    static_configs:
      - targets: ['localhost:9100']

# Grafana Dashboard
{
  "dashboard": {
    "id": null,
    "title": "Application Metrics",
    "panels": [
      {
        "title": "CPU Usage",
        "type": "graph",
        "datasource": "Prometheus"
      }
    ]
  }
}`,
        description: "Monitoring va logging tizimini o'rnatish",
        result: `{
    "feature": "Monitoring Setup",
    "concepts": [
        "Prometheus",
        "Grafana",
        "Metrics Collection",
        "Dashboard Creation"
    ]
}`
    },
    {
        id: 6,
        title: "Security Scanning",
        code: `
# OWASP ZAP Security Scan
- name: Security Scan
  uses: zaproxy/action-full-scan@v0.4.0
  with:
    target: 'https://www.example.com'
    
# Dependency Check
- name: Dependency Check
  uses: dependency-check/Dependency-Check_Action@main
  with:
    project: 'MyProject'
    path: '.'
    format: 'HTML'
    
# Snyk Security Scan
- name: Snyk Security Check
  uses: snyk/actions/node@master
  env:
    SNYK_TOKEN: \${{ secrets.SNYK_TOKEN }}`,
        description: "Xavfsizlik tekshiruvlarini avtomatlashtirish",
        result: `{
    "feature": "Security Scanning",
    "concepts": [
        "Vulnerability Scanning",
        "Dependency Checking",
        "Security Automation",
        "Compliance Testing"
    ]
}`
    },
    {
        id: 7,
        title: "Blue-Green Deployment",
        code: `
# Kubernetes Blue-Green Deployment
apiVersion: apps/v1
kind: Deployment
metadata:
  name: blue-deployment
spec:
  replicas: 3
  selector:
    matchLabels:
      app: myapp
      version: blue
  template:
    metadata:
      labels:
        app: myapp
        version: blue
    spec:
      containers:
      - name: myapp
        image: myapp:1.0
---
apiVersion: v1
kind: Service
metadata:
  name: myapp-service
spec:
  selector:
    app: myapp
    version: blue
  ports:
    - protocol: TCP
      port: 80
      targetPort: 8080`,
        description: "Blue-Green deployment strategiyasini amalga oshirish",
        result: `{
    "feature": "Deployment Strategy",
    "concepts": [
        "Blue-Green Deployment",
        "Zero Downtime",
        "Traffic Management",
        "Version Control"
    ]
}`
    },
    {
        id: 8,
        title: "Advanced GitHub Actions with Matrix Testing",
        code: `
name: Matrix Testing Pipeline

on:
  push:
    branches: [ main, develop ]
  pull_request:
    branches: [ main, develop ]

jobs:
  test:
    runs-on: \${{ matrix.os }}
    strategy:
      matrix:
        os: [ubuntu-latest, windows-latest, macos-latest]
        node-version: [14.x, 16.x, 18.x]

    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Node.js \${{ matrix.node-version }}
      uses: actions/setup-node@v3
      with:
        node-version: \${{ matrix.node-version }}
        cache: 'npm'
        
    - name: Install Dependencies
      run: npm ci
      
    - name: Run Tests
      run: npm test
      
    - name: Upload Coverage
      uses: codecov/codecov-action@v3`,
        description: "Turli xil operatsion tizimlar va Node.js versiyalari uchun testing",
        result: `{
    "feature": "Matrix Testing",
    "concepts": [
        "Cross-Platform Testing",
        "Version Compatibility",
        "Code Coverage",
        "Automated Testing"
    ]
}`
    },
    {
        id: 9,
        title: "Advanced Kubernetes Deployment",
        code: `
# Kubernetes ConfigMap
apiVersion: v1
kind: ConfigMap
metadata:
  name: app-config
data:
  DATABASE_URL: "mongodb://db:27017/myapp"
  API_KEY: "development-key"

---
# Kubernetes Deployment with HPA
apiVersion: apps/v1
kind: Deployment
metadata:
  name: myapp
spec:
  replicas: 3
  strategy:
    type: RollingUpdate
    rollingUpdate:
      maxSurge: 1
      maxUnavailable: 0
  selector:
    matchLabels:
      app: myapp
  template:
    metadata:
      labels:
        app: myapp
    spec:
      containers:
      - name: myapp
        image: myapp:latest
        resources:
          requests:
            cpu: "100m"
            memory: "128Mi"
          limits:
            cpu: "200m"
            memory: "256Mi"
        livenessProbe:
          httpGet:
            path: /health
            port: 8080
        readinessProbe:
          httpGet:
            path: /ready
            port: 8080

---
# Horizontal Pod Autoscaler
apiVersion: autoscaling/v2
kind: HorizontalPodAutoscaler
metadata:
  name: myapp-hpa
spec:
  scaleTargetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: myapp
  minReplicas: 3
  maxReplicas: 10
  metrics:
  - type: Resource
    resource:
      name: cpu
      target:
        type: Utilization
        averageUtilization: 70`,
        description: "Kubernetes da advanced deployment va autoscaling sozlamalari",
        result: `{
    "feature": "Kubernetes Advanced",
    "concepts": [
        "ConfigMaps",
        "Resource Management",
        "Health Checks",
        "Autoscaling"
    ]
}`
    },
    {
        id: 10,
        title: "CI/CD with AWS CodePipeline",
        code: `
# AWS CodePipeline Configuration
{
  "pipeline": {
    "name": "MyAppPipeline",
    "roleArn": "arn:aws:iam::ACCOUNT_ID:role/CodePipelineRole",
    "stages": [
      {
        "name": "Source",
        "actions": [
          {
            "name": "Source",
            "actionTypeId": {
              "category": "Source",
              "owner": "AWS",
              "provider": "CodeCommit",
              "version": "1"
            },
            "configuration": {
              "RepositoryName": "MyApp",
              "BranchName": "main"
            }
          }
        ]
      },
      {
        "name": "Build",
        "actions": [
          {
            "name": "BuildAndTest",
            "actionTypeId": {
              "category": "Build",
              "owner": "AWS",
              "provider": "CodeBuild",
              "version": "1"
            },
            "configuration": {
              "ProjectName": "MyAppBuild"
            }
          }
        ]
      },
      {
        "name": "Deploy",
        "actions": [
          {
            "name": "Deploy",
            "actionTypeId": {
              "category": "Deploy",
              "owner": "AWS",
              "provider": "ECS",
              "version": "1"
            },
            "configuration": {
              "ClusterName": "MyAppCluster",
              "ServiceName": "MyAppService"
            }
          }
        ]
      }
    ]
  }
}`,
        description: "AWS CodePipeline orqali CI/CD ni sozlash",
        result: `{
    "feature": "AWS Pipeline",
    "concepts": [
        "AWS CodePipeline",
        "AWS CodeBuild",
        "AWS ECS",
        "Automated Deployment"
    ]
}`
    }
];

export default dataCiCdMukammal;