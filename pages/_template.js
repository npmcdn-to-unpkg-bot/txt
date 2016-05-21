import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import { config } from 'config'

class Template extends React.Component {
  render () {
    const { location, children } = this.props
    let header

    if (location.pathname === prefixLink('/')) {
      header = (
        <h1 className="sans-serif fw8 f2 ph3">
          <Link
            style={{
              textDecoration: 'none',
              color: 'inherit',
            }}
            to={prefixLink('/txt/')}
          >
            {config.blogTitle}
          </Link>
        </h1>
      )
    } else if (location.pathname === '/resume/') {
      header = null
    } else {
      header = (
        <h3 className="sans-serif fw8 f5 ph3">
          <Link
            style={{
              textDecoration: 'none',
              color: 'inherit',
            }}
            to={prefixLink('/txt/')}
          >
            {config.blogTitle}
          </Link>
        </h3>
      )
    }
    return (
      <div>
        {header}
        {children}
      </div>
    )
  }
}

Template.propTypes = {
  children: React.PropTypes.any,
  location: React.PropTypes.object,
  route: React.PropTypes.object,
}

export default Template
