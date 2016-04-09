import React from 'react'
import moment from 'moment'
import DocumentTitle from 'react-document-title'
import ReadNext from '../components/ReadNext'
import { config } from 'config'
import Bio from 'components/Bio'
// import '../css/zenburn.css'

class MarkdownWrapper extends React.Component {
  render () {
    const { route } = this.props
    const post = route.page.data

    return (
      <DocumentTitle title={`${post.title} | ${config.blogTitle}`}>
        <div>
          <div className="sans-serif ph3 pv2 pv5-ns cf">
            <header className="fn fl-ns w-50-ns pr4-ns">
              <h1 className="lh-title fw8 f3 f2-ns measure">{post.title}</h1>
              <time className="f6 ttu tracked gray">
                Posted {moment(post.date).format('MMMM D, YYYY')}
              </time>
            </header>
            <div
              className="fn fl-ns w-50-ns mt4 mt0-ns measure lh-copy"
              dangerouslySetInnerHTML={{ __html: post.body }}
            />
          </div>
          <footer className="ph3 pv3 fn">
            <ReadNext post={post} pages={route.pages} />
            <Bio />
          </footer>
        </div>
      </DocumentTitle>
    )
  }
}

MarkdownWrapper.propTypes = {
  route: React.PropTypes.object,
}

export default MarkdownWrapper