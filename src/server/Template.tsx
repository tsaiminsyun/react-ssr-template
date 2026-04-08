import React from 'react'

type Props = {
  children: any
  scripts: string[]
}

const Template = ({ children, scripts = [] }: Props) => (
  <html lang="en">
    <head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      <link rel="icon" href="favicon.ico" />
    </head>
    <body>
      <div id="root" dangerouslySetInnerHTML={{ __html: children }} />
      {scripts.filter(Boolean).map(src => (
        <script key={src} src={src} />
      ))}
    </body>
  </html>
)

export default Template
