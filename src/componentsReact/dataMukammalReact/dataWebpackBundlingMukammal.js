const dataWebpackBundlingMukammal = [
    {
        id: 1,
        title: "Basic Webpack Configuration",
        code: `
// webpack.config.js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.[contenthash].js'
  },
  module: {
    rules: [
      {
        test: /\\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react']
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
  ]
}`,
        description: "Webpack asosiy konfiguratsiyasi",
        result: `{
    "feature": "Basic Webpack Setup",
    "concepts": [
        "Entry Points",
        "Output Configuration",
        "Babel Integration",
        "HTML Plugin"
    ]
}`
    },
    {
        id: 2,
        title: "Development Configuration",
        code: `
// webpack.dev.js
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
    hot: true,
    port: 3000,
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  }
});`,
        description: "Development muhiti uchun Webpack sozlamalari",
        result: `{
    "feature": "Development Setup",
    "concepts": [
        "Hot Module Replacement",
        "Source Maps",
        "Dev Server",
        "CSS Loading"
    ]
}`
    },
    {
        id: 3,
        title: "Production Configuration",
        code: `
// webpack.prod.js
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = merge(common, {
  mode: 'production',
  optimization: {
    minimizer: [
      new TerserPlugin(),
      new CssMinimizerPlugin()
    ],
    splitChunks: {
      chunks: 'all'
    }
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css'
    })
  ]
});`,
        description: "Production muhiti uchun Webpack sozlamalari",
        result: `{
    "feature": "Production Setup",
    "concepts": [
        "Code Splitting",
        "Minification",
        "CSS Extraction",
        "Cache Busting"
    ]
}`
    },
    {
        id: 4,
        title: "Asset Management",
        code: `
// webpack.config.js
module.exports = {
  module: {
    rules: [
      {
        test: /\\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource'
      },
      {
        test: /\\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource'
      },
      {
        test: /\\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  }
}`,
        description: "Webpack'da turli xil fayllarni boshqarish",
        result: `{
    "feature": "Asset Management",
    "concepts": [
        "Image Loading",
        "Font Loading",
        "SASS Processing",
        "Resource Handling"
    ]
}`
    },
    {
        id: 5,
        title: "Code Splitting",
        code: `
// App.js
import React, { Suspense, lazy } from 'react';

const HomePage = lazy(() => import('./pages/Home'));
const AboutPage = lazy(() => import('./pages/About'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
      </Switch>
    </Suspense>
  );
}

// webpack.config.js
module.exports = {
  optimization: {
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        vendor: {
          test: /[\\\\/]node_modules[\\\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    }
  }
}`,
        description: "React ilovalarida code splitting",
        result: `{
    "feature": "Code Splitting",
    "concepts": [
        "Dynamic Imports",
        "Lazy Loading",
        "Route-based Splitting",
        "Vendor Bundling"
    ]
}`
    },
    {
        id: 6,
        title: "Performance Optimization",
        code: `
// webpack.config.js
const CompressionPlugin = require('compression-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  optimization: {
    moduleIds: 'deterministic',
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\\\/]node_modules[\\\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
  plugins: [
    new CompressionPlugin(),
    new BundleAnalyzerPlugin()
  ]
}`,
        description: "Webpack orqali optimizatsiya",
        result: `{
    "feature": "Performance Optimization",
    "concepts": [
        "Bundle Analysis",
        "Compression",
        "Caching",
        "Tree Shaking"
    ]
}`
    },
    {
        id: 7,
        title: "Multiple Entry Points",
        code: `
// webpack.config.js
const path = require('path');

module.exports = {
  entry: {
    main: './src/index.js',
    admin: './src/admin.js',
    vendor: './src/vendor.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js'
  },
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\\\/]node_modules[\\\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    }
  }
}`,
        description: "Ko'p entry pointlar bilan ishlash",
        result: `{
    "feature": "Multiple Entry Points",
    "concepts": [
        "Multiple Bundles",
        "Vendor Separation",
        "Runtime Chunks",
        "Cache Management"
    ]
}`
    },
    {
        id: 8,
        title: "Environment Variables",
        code: `
// webpack.config.js
const Dotenv = require('dotenv-webpack');
const webpack = require('webpack');

module.exports = {
  plugins: [
    new Dotenv(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      'process.env.API_URL': JSON.stringify(process.env.API_URL),
      'PRODUCTION': JSON.stringify(true),
      'VERSION': JSON.stringify('5fa3b9')
    })
  ]
}

// .env
API_URL=https://api.example.com
SECRET_KEY=your-secret-key

// usage in code
console.log(process.env.API_URL);
console.log(process.env.NODE_ENV);`,
        description: "Environment o'zgaruvchilar bilan ishlash",
        result: `{
    "feature": "Environment Setup",
    "concepts": [
        "Environment Variables",
        "Configuration Management",
        "Security",
        "Build Variables"
    ]
}`
    },
    {
        id: 9,
        title: "Progressive Web App Setup",
        code: `
// webpack.config.js
const WorkboxPlugin = require('workbox-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');

module.exports = {
  plugins: [
    new WorkboxPlugin.GenerateSW({
      clientsClaim: true,
      skipWaiting: true,
      maximumFileSizeToCacheInBytes: 5 * 1024 * 1024,
    }),
    new WebpackPwaManifest({
      name: 'My Progressive Web App',
      short_name: 'MyPWA',
      description: 'My awesome Progressive Web App!',
      background_color: '#ffffff',
      theme_color: '#2196f3',
      icons: [
        {
          src: path.resolve('src/assets/icon.png'),
          sizes: [96, 128, 192, 256, 384, 512]
        }
      ]
    })
  ]
}

// service-worker.js
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js');
  });
}`,
        description: "PWA sozlamalari va Service Worker",
        result: `{
    "feature": "PWA Configuration",
    "concepts": [
        "Service Workers",
        "Offline Support",
        "App Manifest",
        "Cache Strategies"
    ]
}`
    },
    {
        id: 10,
        title: "TypeScript Integration",
        code: `
// webpack.config.js
module.exports = {
  entry: './src/index.ts',
  module: {
    rules: [
      {
        test: /\\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  }
}

// tsconfig.json
{
  "compilerOptions": {
    "outDir": "./dist/",
    "sourceMap": true,
    "noImplicitAny": true,
    "module": "es6",
    "target": "es5",
    "jsx": "react",
    "allowJs": true,
    "moduleResolution": "node"
  }
}

// example.ts
interface User {
  name: string;
  age: number;
}

const user: User = {
  name: 'John',
  age: 30
};`,
        description: "TypeScript integratsiyasi",
        result: `{
    "feature": "TypeScript Setup",
    "concepts": [
        "Type Checking",
        "TS Configuration",
        "Module Resolution",
        "Type Definitions"
    ]
}`
    }
];

export default dataWebpackBundlingMukammal;