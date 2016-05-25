import React from 'react'
import classNames from 'classnames'

const inputCx = classNames('sans-serif', 'ph3', 'pv2', 'w-100', 'mb3', 'b0');

const buttonCx = classNames('sans-serif', 'ttu', 'tracked', 'pv3', 'ph3', 'bg-white', 'ba');

class Newsletter extends React.Component {
  render () {
    return (
      <div id="mc_embed_signup" className="measure mb4 mb6-ns">
        <p className="sans-serif lh-copy">If you’d like updates for my posts about design, AI &amp; tooling, sign up to my newsletter. I promise to only message you when there’s something interesting to talk about!</p>
        <form
          action="//font.us2.list-manage.com/subscribe/post?u=f0e0a3a7a87b8ee95bc857801&amp;id=3e1eaf776b"
          method="post" id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form" className="validate"
          target="_blank" noValidate
        >

          <div className="mc-field-group">
            <input type="email" name="EMAIL" placeholder="Email"
              className={inputCx} id="mce-EMAIL"
            />
          </div>
          <div className="mc-field-group">
            <input type="text" name="FNAME" placeholder="Name"
              className={inputCx} id="mce-FNAME"
            />
          </div>
          {/* <p><a href="http://us2.campaign-archive2.com/home/?u=f0e0a3a7a87b8ee95bc857801&id=3e1eaf776b" title="View previous campaigns">View previous campaigns.</a></p> */}
          <div id="mce-responses" className="clear">
            <div className="response" id="mce-error-response" style={{ display: 'none' }}>
            </div>
            <div className="response" id="mce-success-response" style={{ display: 'none' }}>
            </div>
          </div>
          <div style={{ position: 'absolute', left: -5000 }}>
            <input
              type="text"
              name="b_f0e0a3a7a87b8ee95bc857801_3e1eaf776b"
              tabIndex="-1"
              value=""
            />
          </div>
          <div className="clear">
            <input
              type="submit"
              value="Subscribe"
              name="subscribe"
              id="mc-embedded-subscribe"
              className={buttonCx}
            />
          </div>
        </form>
      </div>
    )
  }
}

module.exports = Newsletter
