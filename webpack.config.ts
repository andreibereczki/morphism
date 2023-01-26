import path from 'path';
import webpack from 'webpack';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import NodemonPlugin from 'nodemon-webpack-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

const nodeEnv = process.env.NODE_ENV || 'development';
const isProd = nodeEnv === 'production';
const shouldAnalyzeBundle = process.env.WEBPACK_ANALYZE;
class IgnoreNotFoundExportPlugin {
  apply(compiler: webpack.Compiler) {
    const messageRegExp = /export '.*'( \(reexported as '.*'\))? was not found in/;
    function doneHook(stats: webpack.Stats) {
      stats.compilation.warnings = stats.compilation.warnings.filter(function(warn) {
        if (warn instanceof webpack.WebpackError && messageRegExp.test(warn.message)) {
          return false;
        }
        return true;
      });
    }
    if (compiler.hooks) {
      compiler.hooks.done.tap('IgnoreNotFoundExportPlugin', doneHook);
    }
  }
}

const webpackconfiguration: webpack.Configuration = {
  mode: 'development',
  entry: path.resolve(__dirname, 'src', 'morphism.ts'),
  devtool: isProd ? 'hidden-source-map' : 'source-map',
  output: {
    filename: 'morphism.js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'umd',
    globalObject: 'this',
    sourceMapFilename: 'morphism.map',
    library: 'Morphism',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
  },
  module: {
    rules: [{ test: /\.(ts|js)x?$/, use: ['babel-loader', 'source-map-loader'], exclude: /node_modules/ }],
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin({
      async: false
    }),
    new NodemonPlugin(),
    new IgnoreNotFoundExportPlugin()
  ].filter(plugin => plugin),
};

if (shouldAnalyzeBundle) {
  webpackconfiguration.plugins?.push(new BundleAnalyzerPlugin({ generateStatsFile: true }));
}

export default webpackconfiguration;
