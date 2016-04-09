import React from 'react'
import DocumentTitle from 'react-document-title'
import { prefixLink } from 'gatsby-helpers'

module.exports = React.createClass({
  displayName: 'HTML',
  propTypes: {
    body: React.PropTypes.string,
  },
  render () {
    const { body } = this.props
    const title = DocumentTitle.rewind()

    let cssLink
    cssLink = <link rel="stylesheet" href="https://npmcdn.com/tachyons@4.0.0-beta.12/css/tachyons.min.css" />

    // if (process.env.NODE_ENV === 'production') {
    //   cssLink = <link rel="stylesheet" href={prefixLink('/styles.css')} />
    // }

    return (
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0 maximum-scale=5.0"
          />
          <title>{title}</title>
          {cssLink}
        </head>
        <body className="landing-page">
          <div id="react-mount" dangerouslySetInnerHTML={{ __html: body }} />
          <script src={prefixLink('/bundle.js')} />
        </body>
      </html>
    )
  },
})