import React from 'react'
import { Link } from 'react-router'
import sortBy from 'lodash/sortBy'
import moment from 'moment'
import DocumentTitle from 'react-document-title'
import { prefixLink } from 'gatsby-helpers'
import access from 'safe-access'
import { config } from 'config'
import include from 'underscore.string/include'
import Bio from 'components/Bio'

class Words extends React.Component {
  render () {
    const pageLinks = []
    // Sort pages.
    const sortedPages = sortBy(this.props.route.pages, (page) =>
      access(page, 'data.date')
    ).reverse()
    sortedPages.forEach((page) => {
      if (access(page, 'file.ext') === 'md' && !include(page.path, '/404')) {
        const title = access(page, 'data.title') || page.path
        pageLinks.push(
          <li
            className="mb4"
            key={page.path}
          >
            <Link className="f5 black db b no-underline mb2" to={prefixLink(page.path)}>{title}</Link>
            <time className="gray">
              {moment(page.data.date).format('MMMM YYYY')}
            </time>
          </li>
        )
      }
    })
    return (
      <DocumentTitle title={config.blogTitle}>
        <div className="sans-serif ph3">
          <h3 className="f2 fw8 mb4">All Posts</h3>
          <ul className="list pl0">
            {pageLinks}
          </ul>
        </div>
      </DocumentTitle>
    )
  }
}

Words.propTypes = {
  route: React.PropTypes.object,
}

export default Words
