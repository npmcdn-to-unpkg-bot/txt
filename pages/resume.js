/* eslint-disable max-len */

import React, { Component, PropTypes } from 'react'
import config from '../_config.yaml'

function Link ({ url, children }) {
  return (
    <a href={url} className="b dark-gray mb0">
      { children }
    </a>
  )
}

Link.propTypes = {
  url: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
}

function MaybeTitleLink ({ url, children }) {
  return (
    <h4 className="f5 mb0">
      { url ? <Link url={url}>{ children }</Link> : children }
    </h4>
  )
}

MaybeTitleLink.propTypes = {
  url: PropTypes.string,
  children: PropTypes.string.isRequired,
}

function Divider () {
  return (
    <span> | </span>
  )
}

function List ({ title, items }) {
  return (
    <div>
      <h5 className="f6 mb2">{ title }</h5>
      <ul>
        { items.map((item) => (
          <li className="gray mb1">
            <a href={item.url} className="gray">{ item.title }</a>
          </li>
          ))
        }
      </ul>
    </div>
  )
}

List.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ),
}

function ResumeItem ({ title, url, subtitle, subtitle2, description, listTitle, listItems }) {
  return (
    <li className="mb4 mb5-ns">
      <MaybeTitleLink url={url}>{ title }</MaybeTitleLink>
      <p className="gray measure mt2 lh-copy">
        { subtitle }
        { subtitle2 && <Divider /> }
        { subtitle2 }
      </p>
      { description && <p className="gray measure lh-copy" dangerouslySetInnerHTML={{ __html: description }} /> }
      { listItems && <List title={ listTitle } items={ listItems } /> }
    </li>
  )
}

ResumeItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string,
  subtitle: PropTypes.string,
  subtitle2: PropTypes.string,
  description: PropTypes.string,
  listTitle: PropTypes.string,
  listItems: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      url: PropTypes.string,
    })
  ),
}


module.exports = class Resume extends Component {
  render () {
    return (
      <div>
        <nav className="fixed bg-white ph3 pt3 ph5-ns pt4-ns pb1 w-100">
          <ul className="list pl0">
            <li className="dib mr3 mb3">
              <a className="gray f5 no-underline" href="#experience">Work Experience</a>
            </li>
            <li className="dib mr3 mb3">
              <a className="gray f5 no-underline" href="#sideprojects">Side Projects</a>
            </li>
            <li className="dib mr3 mb3">
              <a className="gray f5 no-underline" href="#education">Education</a>
            </li>
            <li className="dib mr3 mb3">
              <a className="gray f5 no-underline" href="#talks">Talks</a>
            </li>
            <li className="dib mr3 mb3">
              <a className="gray f5 no-underline" href="#interviews">Interviews</a>
            </li>
            <li className="dib mr3 mb3">
              <a className="gray f5 no-underline" href="#publications">
                Publications &amp; Articles
              </a>
            </li>
            <li className="dib mr3 mb3">
              <a className="gray f5 no-underline" href="#misc">Misc</a>
            </li>
          </ul>
        </nav>
        <article className="cf ph3 ph5-ns pv5">
          <header className="pr4-ns sans-serif mt6">
            <h1 className="mb3 mt0 lh-title">Jon Gold</h1>
            <p className="f6 gray measure">Designer &amp; Engineer, working on AI-assisted design tooling and design systems architecture</p>
            <p className="f6 gray measure">British Citizen, living in London</p>
          </header>
          <div className="cf">
            <ul className="list sans-serif mb2 pl0 pr4 fn fl-ns w-50-l">
              <li><h2 id="experience" className="f4 pt6 mt0 mb4 mb5-ns">Work Experience</h2></li>
              { config.experience.map((job) => {
                const { url, company, title, when, description, press } = job

                const props = {
                  title: company,
                  url,
                  subtitle: title,
                  subtitle2: when,
                  description,
                  listTitle: 'Media',
                  listItems: press,
                }

                return <ResumeItem {...props} />
              })}
            </ul>

            <ul className="list sans-serif mb2 pl0 pr4 fn fl-ns w-50-l">
              <li><h2 id="sideprojects" className="f4 pt6 mt0 mb4 mb5-ns">Side Projects (incomplete list)</h2></li>
              { config.side_projects.map((project) => <ResumeItem {...project} subtitle={project.when} />) }
            </ul>

          </div>

          <div className="cf">
            <ul className="list sans-serif mb2 pl0 pr4 fn fl-ns w-50-l">
              <li><h2 id="education" className="f4 pt6 mt0 mb4 mb5-ns">Education</h2></li>
              <li className="mb4 mb5-ns">
                <h4 className="f5 mb0"><a href="http://www.ravensbourne.ac.uk/" className="b dark-gray mb0">Ravensbourne College</a></h4>
                <p className="gray measure lh-copy mt2">BA Graphic Design <span className="light-gray">|</span> Sep 08&ndash;June 11</p>
                <p className="gray measure lh-copy">Classes included graphic design, typography, wayfinding, editorial design, information design, product design, branding &amp; web design.</p>
                <h5 className="f6 mb2">Awards</h5>
                <ul>
                  <li className="gray mb1">D&amp;AD Student Awards Commendation <span className="light-gray">|</span> June 11</li>
                  <li className="gray mb1">Ravensbourne Gifted &amp; Talented Scholarship <span className="light-gray">|</span> 08–11</li>
                  <li className="gray mb1">Won JTB Travel Ideas Competition <span className="light-gray">|</span> March 10</li>
                  <li className="gray mb1">Student Gems Student of the Month <span className="light-gray">|</span> March 09</li>
                </ul>
              </li>
              <li className="mb4 mb5-ns">
                <h4 className="f5 mb0"><a href="http://www.barnetsouthgate.ac.uk/" className="b dark-gray mb0">Barnet College</a></h4>
                <p className="gray measure lh-copy mt2">BTEC National Diploma Graphic Design <span className="light-gray">|</span> Sep 06&ndash;June 08</p>
              </li>
            </ul>

            <ul className="list sans-serif mb2 pl0 pr4 fn fl-ns w-50-l">
              <li><h2 id="talks" className="f4 pt6 mt0 mb4 mb5-ns">Conference Talks</h2></li>
              { config.talks.map((talk) => {
                const props = {
                  title: talk.where,
                  url: talk.url,
                  subtitle: talk.location,
                  subtitle2: talk.when,
                }

                return <ResumeItem {...props} />
              }) }
            </ul>
          </div>
          {/*  */}
          <div className="cf">
            <ul className="list sans-serif mb2 pl0 pr4 fn fl-ns w-50-l">
              <li><h2 id="interviews" className="f4 pt6 mt0 mb4 mb5-ns">Interviews</h2></li>
              { config.podcasts.map((ep) => <ResumeItem {...ep} subtitle={ep.when} />) }
            </ul>
            <ul className="list sans-serif mb2 pl0 pr4 fn fl-ns w-50-l">
              <li><h2 id="publications" className="f4 pt6 mt0 mb4 mb5-ns">Notable publications &amp; articles</h2></li>
              { config.notable_posts.map((post) => <ResumeItem {...post} subtitle={post.when} />) }
            </ul>
          </div>

          <div className="cf">
            <ul className="list sans-serif mb2 pl0 pr4 fn fl-ns w-50-l">
              <li><h2 id="misc" className="f4 pt6 mt0 mb4 mb5-ns">Misc</h2></li>
              <li className="mb4 mb5-ns">
                <h4 className="f5 mb0"><a href="https://www.seedcamp.com/" className="b dark-gray mb0">Seedcamp Hackathon Judge</a></h4>
                <p className="gray measure lh-copy mt0">Feb 13</p>

              </li>
              <li className="mb4 mb5-ns">
                <h4 className="f5 mb0"><a href="https://www.leanstartupmachine.com/" className="b dark-gray mb0">Lean Startup Machine Mentor</a></h4>
                <p className="gray measure lh-copy mt0">Jan 13</p>
              </li>
            </ul>
          </div>
        </article>
      </div>
    )
  }
}

