import React from 'react'
import { config } from 'config'
import { prefixLink } from 'gatsby-helpers'

class Bio extends React.Component {
  render () {
    return (
      <p className="measure sans-serif lh-copy mb4 mb6-ns">
        <a href="http://jon.gold" className="b black">{config.authorName}</a> is an inter-disciplinary designer, engineer, adventurer &amp; weirdo; travelling the world and building future design tools &amp; systems. You’ll probably have more fun looking at his <a href="http://jon.gold" className="b black">new worldwide website</a>, or following <a className="b black" href="https://twitter.com/jongold">his best self on Twitter.</a>
      </p>
    )
  }
}

export default Bio
