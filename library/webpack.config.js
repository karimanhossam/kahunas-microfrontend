const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const path = require("path");
const Dotenv = require("dotenv-webpack");

const deps = require("./package.json").dependencies;
const printCompilationMessage = require("./compilation.config.js");

module.exports = (_, argv) => ({
    output: {
      publicPath: "http://localhost:3002/",

    },

    resolve: {
      extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
    },

    devServer: {
      port: 3002,
      historyApiFallback: true,
      watchFiles: [path.resolve(__dirname, "src")],
      onListening: function (devServer) {
        const port = devServer.server.address().port;

        printCompilationMessage("compiling", port);

        devServer.compiler.hooks.done.tap("OutputMessagePlugin", (stats) => {
          setImmediate(() => {
            if (stats.hasErrors()) {
              printCompilationMessage("failure", port);
            } else {
              printCompilationMessage("success", port);
            }
          });
        });
      },
    },

    module: {
      rules: [
        {
          test: /\.m?js/,
          type: "javascript/auto",
          resolve: {
            fullySpecified: false,
          },
        },
        {
          test: /\.(css|s[ac]ss)$/i,
          use: ["style-loader", "css-loader", "postcss-loader"],
        },
        {
          test: /\.(ts|tsx|js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
          },
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: "asset/resource",
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/i,
          type: "asset/resource",
        },
        { test: /\.json$/, type: "json" },
      ],
    },

    plugins: [
      new ModuleFederationPlugin({
        name: "library",
        filename: "remoteEntry.js",
        remotes: {
          host: "host@http://localhost:3000/remoteEntry.js",
          clients: 
             "clients@http://localhost:3001/remoteEntry.js",
        },
        exposes: {
          "./App": "./src/App.jsx",
          "./hooks/useSwitchLibraryLanguage": "./src/hooks/useSwitchLanguage",
        },
        shared: {
          ...deps,
          react: {
            singleton: true,
            requiredVersion: deps.react,
          },
          "react-dom": {
            singleton: true,
            requiredVersion: deps["react-dom"],
          },
        },
      }),
      new HtmlWebPackPlugin({
        template: "./src/index.html",
      }),
      new Dotenv(),
    ],
  });

