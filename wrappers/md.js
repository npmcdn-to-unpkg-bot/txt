import React from 'react'
import moment from 'moment'
import DocumentTitle from 'react-document-title'
import ReadNext from '../components/ReadNext'
import Newsletter from 'components/Newsletter'
import { config } from 'config'
import Bio from 'components/Bio'

function PlzDontShare () {
  return (
    <div className="pa3 bg-light-gray measure bg-yellow lh-copy mono b">
      this post hasn’t been published yet - if you’ve stumbled upon it I’d love
      your feedback but please don’t share it just yet!
    </div>
  )
}

class MarkdownWrapper extends React.Component {
  render () {
    const { route } = this.props
    const post = route.page.data

    return (
      <DocumentTitle title={`${post.title} | ${config.blogTitle}`}>
        <div>
          <div className="sans-serif ph3 pv2 pv5-ns cf relative left-2-ns">
            <header className="measure mb4">
              <time className="f6 ttu tracked gray mr4">
               {moment(post.date).format('MMMM D, YYYY')}
              </time>
              <span className="f6 ttu tracked gray">
                { post.wordCount && `${Math.ceil(post.wordCount / 200)} min read` }
              </span>
              <h1 className="lh-title fw8 f3 f2-ns measure">{post.title}</h1>
            </header>
            { (post.published === false) && <PlzDontShare /> }
            <div
              className="mt4 mt0-ns measure lh-copy f6 f5-ns "
              dangerouslySetInnerHTML={{ __html: post.body }}
            />
          </div>
          <footer className="ph3 pv3 fn">
            <Newsletter />
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
