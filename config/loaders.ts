const babelLoader = {
  test: /\.(js|jsx|ts|tsx)$/,
  use: {
    loader: require.resolve('babel-loader'),
    options: {
      presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
      plugins: [
        [
          require.resolve('babel-plugin-named-asset-import'),
          {
            loaderMap: {
              svg: {
                ReactComponent: '@svgr/webpack?-prettier,-svgo![path]',
              },
            },
          },
        ],
      ],
      cacheDirectory: true,
    },
  },
}

const urlLoaderClient = {
  test: /\.(png|jpe?g|gif|svg)$/,
  type: 'asset/resource',
  generator: {
    filename: 'assets/[name].[contenthash:8].[ext]',
  },
}

const urlLoaderServer = {
  test: /\.(png|jpe?g|gif|svg)$/,
  type: 'asset/resource',
  generator: {
    filename: 'assets/[name].[contenthash:8].[ext]',
  },
}

const fileLoaderClient = {
  exclude: [/\.(js|jsx|ts|tsx|css|scss|mjs|html|ejs|json)$/],
  type: 'asset/resource',
  generator: {
    filename: 'assets/[name].[contenthash:8].[ext]',
  },
}

const fileLoaderServer = {
  exclude: [/\.(js|tsx|ts|tsx|css|scss|mjs|html|ejs|json)$/],
  type: 'asset/resource',
  generator: {
    filename: 'assets/[name].[contenthash:8].[ext]',
  },
}

const cssLoaderClient = {
  test: /\.css$/,
  use: [
    require.resolve('style-loader'),
    require.resolve('css-loader'),
    require.resolve('postcss-loader'),
  ],
}

const cssLoaderServer = {
  test: /\.css$/,
  use: require.resolve('null-loader'),
}

export const clientLoaders = [babelLoader, urlLoaderClient, cssLoaderClient, fileLoaderClient]
export const loaderServer = [babelLoader, urlLoaderServer, cssLoaderServer, fileLoaderServer]
