const dataNpmPackageManagement = [
    {
        id: 1,
        title: "NPM Asoslari",
        description: "Node Package Manager (NPM) ning asosiy tushunchalari",
        examples: [
            {
                name: "Package.json va Asosiy Buyruqlar",
                code: `// package.json fayli yaratish
npm init

// Package o'rnatish
npm install package-name
npm i package-name

// Development dependencylar uchun
npm install --save-dev package-name
npm i -D package-name

// Global o'rnatish
npm install -g package-name

// Package.json namunasi
{
  "name": "my-project",
  "version": "1.0.0",
  "description": "Project description",
  "main": "index.js",
  "scripts": {
    "start": "node index.js",
    "dev": "nodemon index.js",
    "test": "jest"
  },
  "dependencies": {
    "express": "^4.17.1"
  },
  "devDependencies": {
    "nodemon": "^2.0.7"
  }
}`,
                explanation: "NPM ning asosiy buyruqlari va package.json konfiguratsiyasi",
                result: "Loyiha dependencylarini samarali boshqarish"
            },
            {
                name: "Version Boshqaruvi",
                code: `// Semantic versioning (SemVer)
"dependencies": {
    "package1": "1.2.3",    // Aniq versiya
    "package2": "^1.2.3",   // Minor va patch yangilanishlar
    "package3": "~1.2.3",   // Faqat patch yangilanishlar
    "package4": "*",        // Eng so'nggi versiya
    "package5": ">=1.2.3"   // 1.2.3 va undan yuqori
}

// Versiyalarni yangilash
npm update
npm outdated
npm audit
npm audit fix`,
                explanation: "Versiyalarni boshqarish va xavfsizlik tekshiruvlari",
                result: "Barqaror va xavfsiz dependency management"
            }
        ]
    },
    {
        id: 2,
        title: "NPM Advanced Features",
        description: "NPM ning ilg'or xususiyatlari va best practices",
        examples: [
            {
                name: "Scripts va Hooks",
                code: `// package.json scripts
{
  "scripts": {
    "prebuild": "rimraf dist",
    "build": "tsc",
    "postbuild": "copyfiles -u 1 src/**/*.html dist/",
    "custom": "echo 'Custom script'",
    "parallel": "npm-run-all --parallel script1 script2",
    "sequential": "npm-run-all script1 script2"
  }
}

// NPM script ishga tushirish
npm run build
npm run custom`,
                explanation: "NPM scriptlarini sozlash va ishlatish",
                result: "Avtomatlashtirilgan build va deployment jarayonlari"
            },
            {
                name: "Workspace va Monorepo",
                code: `// package.json workspace konfiguratsiyasi
{
  "name": "root",
  "private": true,
  "workspaces": [
    "packages/*"
  ]
}

// Workspace buyruqlari
npm init -w ./packages/package-1
npm install dependency -w package-1
npm run test --workspace=package-1
npm run test --workspaces`,
                explanation: "Monorepo va workspacelar bilan ishlash",
                result: "Katta loyihalarni modullar bo'yicha boshqarish"
            }
        ]
    },
    {
        id: 3,
        title: "NPM Security va Optimization",
        description: "NPM xavfsizligi va optimizatsiya usullari",
        examples: [
            {
                name: "Xavfsizlik Amaliyotlari",
                code: `// Xavfsizlik tekshiruvlari
npm audit
npm audit fix
npm audit fix --force

// package-lock.json
{
  "name": "project",
  "lockfileVersion": 2,
  "requires": true,
  "packages": {
    "": {
      "dependencies": {
        "secure-package": "^1.0.0"
      }
    }
  }
}

// .npmrc konfiguratsiyasi
save-exact=true
package-lock=true
audit=true
fund=false`,
                explanation: "NPM xavfsizlik sozlamalari va tekshiruvlari",
                result: "Xavfsiz va ishonchli dependency management"
            },
            {
                name: "Cache va Performance",
                code: `// Cache bilan ishlash
npm cache verify
npm cache clean --force

// Offline rejim
npm install --offline

// CI/CD uchun clean install
npm ci

// npm konfiguratsiya
npm config set registry https://registry.npmjs.org/
npm config list`,
                explanation: "NPM cache va performance optimizatsiyasi",
                result: "Tezkor va samarali package management"
            }
        ]
    }
];

export default dataNpmPackageManagement;