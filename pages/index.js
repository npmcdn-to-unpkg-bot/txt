import React from 'react'
import { Link } from 'react-router'
import moment from 'moment'
import DocumentTitle from 'react-document-title'
import { prefixLink } from 'gatsby-helpers'
import access from 'safe-access'
import { config } from 'config'
import include from 'underscore.string/include'
import Newsletter from 'components/Newsletter'
import Bio from 'components/Bio'
import { both, compose, filter, map, path, pathEq, reject, reverse, sortBy } from 'ramda'

const linkCx = 'fw8 f3 f2-ns black db b no-underline mb2 mb3-ns measure'

const pageToLink = (page) => {
  const title = access(page, 'data.title') || page.path
  const shortTitle = access(page, 'data.short_title')
  const isLink = (access(page, 'data.layout') === 'link')

  return (
    <li
      className="mb4 mb5-ns"
      key={page.path}
    >
      { isLink ?
        <a className={linkCx} href={path(['data', 'external_url'], page)}>{ shortTitle || title }</a>
        :
        <Link className={linkCx} to={prefixLink(page.path)}>{ shortTitle || title }</Link>
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
      reject(pathEq(['data', 'published'], false)),
      filter(pageExists)
    )(this.props.route.pages)

    return (
      <DocumentTitle title={config.blogTitle}>
        <div className="sans-serif ph3">
          <Bio />
          <Newsletter />
          <ul className="list pl0">
            {pageLinks}
          </ul>
          {/* <Link className={linkCx} to={prefixLink('words/')}>Older posts</Link> */}
        </div>
      </DocumentTitle>
    )
  }
}

BlogIndex.propTypes = {
  route: React.PropTypes.object,
}

export default BlogIndex
