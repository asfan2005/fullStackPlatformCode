const dataWebPackBundling = [
    {
        id: 1,
        title: "Webpack Asoslari",
        description: "Webpack konfiguratsiyasi va asosiy tushunchalar",
        examples: [
            {
                name: "Asosiy Konfiguratsiya",
                code: `// webpack.config.js asosiy konfiguratsiya
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  }
}

// Package.json scripts
{
  "scripts": {
    "build": "webpack",
    "dev": "webpack serve"
  }
}`,
                explanation: "Webpack asosiy konfiguratsiyasi va build scripti",
                result: "Loyihani build qilish va bundling"
            },
            {
                name: "Loaderlar bilan Ishlash",
                code: `// Turli xil loaderlar konfiguratsiyasi
module: {
  rules: [
    {
      test: /\\.css$/,
      use: ['style-loader', 'css-loader']
    },
    {
      test: /\\.(png|svg|jpg|jpeg|gif)$/i,
      type: 'asset/resource'
    },
    {
      test: /\\.s[ac]ss$/i,
      use: ['style-loader', 'css-loader', 'sass-loader']
    }
  ]
}`,
                explanation: "Webpack loaderlari va ularning konfiguratsiyasi",
                result: "Turli xil fayllarni import qilish va qayta ishlash"
            }
        ]
    },
    {
        id: 2,
        title: "Webpack Advanced Features",
        description: "Webpack ning ilg'or xususiyatlari va optimizatsiya",
        examples: [
            {
                name: "Plugin va Optimization",
                code: `// Webpack pluginlar va optimizatsiya
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
    splitChunks: {
      chunks: 'all',
      minSize: 20000,
      maxSize: 70000,
      cacheGroups: {
        vendor: {
          test: /[\\\\/]node_modules[\\\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new MiniCssExtractPlugin()
  ]
}`,
                explanation: "Webpack pluginlari va kodni optimizatsiya qilish",
                result: "Optimallashtirilgan va kichraytirilgan build"
            },
            {
                name: "Development va Production",
                code: `// Development konfiguratsiyasi
module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    hot: true,
    port: 3000,
    open: true
  }
}

// Production konfiguratsiyasi
module.exports = {
  mode: 'production',
  output: {
    filename: '[name].[contenthash].js'
  },
  performance: {
    hints: 'warning',
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
  }
}`,
                explanation: "Development va production muhitlari uchun konfiguratsiya",
                result: "Muhitga moslashtirilgan build jarayoni"
            }
        ]
    },
    {
        id: 3,
        title: "Webpack Modern Features",
        description: "Webpack ning zamonaviy xususiyatlari va best practices",
        examples: [
            {
                name: "Module Federation",
                code: `// Module Federation konfiguratsiyasi
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
  plugins: [
    new ModuleFederationPlugin({
      name: 'app1',
      filename: 'remoteEntry.js',
      exposes: {
        './Component': './src/Component'
      },
      shared: ['react', 'react-dom']
    })
  ]
}

// Remote component import
import('app2/Component').then(module => {
  const Component = module.default;
  // Use component
});`,
                explanation: "Micro frontend arxitekturasi uchun Module Federation",
                result: "Distributed frontend applications"
            },
            {
                name: "Performance Optimization",
                code: `// Performance optimizatsiyasi
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
  cache: {
    type: 'filesystem',
    buildDependencies: {
      config: [__filename]
    }
  },
  experiments: {
    topLevelAwait: true,
    asyncWebAssembly: true
  }
}`,
                explanation: "Webpack performance optimizatsiyasi va caching",
                result: "Tezkor va optimallashtirilgan build jarayoni"
            }
        ]
    }
];

export default dataWebPackBundling;