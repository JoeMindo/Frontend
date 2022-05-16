module.exports = {
    resolve: {
        extensions: ['.json', '.js', '.jsx', '.css'],
        modules: ['node_modules'],
    },
    module: {
        rules: [
          {
            test: /\.css$/i,
            loader: "css-loader",
            options: {
                url: true,
                mode: 'local'
            },
          },
        ],
  },
  webpack5: true,
  webpack: (config) => {
    config.resolve.fallback = { fs: false };

    return config;
  },
}