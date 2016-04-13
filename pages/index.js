import React from 'react'
import { Link } from 'react-router'
import moment from 'moment'
import DocumentTitle from 'react-document-title'
import { prefixLink } from 'gatsby-helpers'
import access from 'safe-access'
import { config } from 'config'
import include from 'underscore.string/include'
import Bio from 'components/Bio'
import { both, compose, filter, map, path, pathEq, reverse, sortBy, take } from 'ramda'

const linkCx = 'f5 black db b no-underline mb2'

const pageToLink = (page) => {
  const title = access(page, 'data.title') || page.path
  const isLink = (access(page, 'data.layout') === 'link')

  return (
    <li
      className="mb4"
      key={page.path}
    >
      { isLink ?
        <a className={linkCx} href={path(['data', 'external_url'], page)}>{ title }</a>
        :
        <Link className={linkCx} to={prefixLink(page.path)}>{title}</Link>
      }
      <time className="gray">
        {moment(page.data.date).format('MMMM YYYY')}
      </time>
    </li>
  )
}

const pageExists = both(
  pathEq(['file', 'ext'], 'md'),
  (x) => !include(x.path, '/404')
)

class BlogIndex extends React.Component {
  render () {
    const pageLinks = compose(
      map(pageToLink),
      reverse,
      sortBy(path(['data', 'date'])),
      filter(pageExists)
    )(this.props.route.pages)

    return (
      <DocumentTitle title={config.blogTitle}>
        <div className="sans-serif ph3">
          <Bio />
          <ul className="list pl0">
            {pageLinks}
          </ul>
          <Link className={linkCx} to={prefixLink('words/')}>Older posts</Link>
        </div>
      </DocumentTitle>
    )
  }
}

BlogIndex.propTypes = {
  route: React.PropTypes.object,
}

export default BlogIndex
