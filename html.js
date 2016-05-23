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

    const cssLink = <link rel="stylesheet" href="https://npmcdn.com/tachyons@4.0.0-beta.28/css/tachyons.min.css" />

    let css
    if (process.env.NODE_ENV === 'production') {
      css = <style dangerouslySetInnerHTML={{ __html: require('!raw!./public/styles.css') }} />
    }

    const gosquared = () => {
      return {
        __html: `!function(g,s,q,r,d){r=g[r]=g[r]||function(){(r.q=r.q||[]).push(
          arguments)};d=s.createElement(q);q=s.getElementsByTagName(q)[0];
          d.src='//d1l6p2sc9645hc.cloudfront.net/tracker.js';q.parentNode.
          insertBefore(d,q)}(window,document,'script','_gs');

          _gs('GSN-738889-F', false);
        </script>`,
      }
    }

    return (
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta property="og:type" content="article" />

          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0 maximum-scale=5.0"
          />
          <link href="//cloud.webtype.com/css/bad02e8c-4481-4e1b-b838-01fe14c932f1.css" rel="stylesheet" type="text/css" />
          <title>{title}</title>
          {cssLink}
          {css}
          <script dangerouslySetInnerHTML={ gosquared() } />
        </head>
        <body className="landing-page">
          <div id="react-mount" dangerouslySetInnerHTML={{ __html: body }} />
          <script src={prefixLink('/bundle.js')} />
        </body>
      </html>
    )
  },
})
