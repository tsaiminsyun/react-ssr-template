import express from 'express'
import path from 'path'
import manifestHelpers from 'express-manifest-helpers'
import paths from '../../utils/paths'
import render from './render'

const app = express()
const port = 8080

import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import clientDevConfig from '../../config/client.dev'

const compiler = webpack(clientDevConfig)

app.use('/static', express.static(paths.clientBuild))
app.use(
  webpackDevMiddleware(compiler, {
    publicPath: clientDevConfig.output.publicPath,
    stats: false,
  })
)
app.use(webpackHotMiddleware(compiler, { log: false }))

const manifestPath = path.join(paths.clientBuild, paths.publicPath)
app.use(
  manifestHelpers({
    manifestPath: `${manifestPath}/manifest.json`,
  })
)
app.use(render())

app.listen(port, () => {
  console.log(`App is running at http://localhost:${port}/`)
})
