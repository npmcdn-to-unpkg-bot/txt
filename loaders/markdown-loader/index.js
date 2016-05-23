import frontMatter from 'front-matter'
import marked from 'marked'
import classNames from 'classnames'
import hljs from 'highlight.js'
import objectAssign from 'object-assign'

hljs.configure({
  tabReplace: '  ',
})

const highlight = (str, lang) => {
  if ((lang !== null) && hljs.getLanguage(lang)) {
    try {
      return hljs.highlight(lang, str).value
    } catch (_error) {
      console.error(_error)
    }
  }
  try {
    return hljs.highlightAuto(str).value
  } catch (_error) {
    console.error(_error)
  }
  return ''
}

const renderer = new marked.Renderer()

const paragraphCx = classNames('lh-copy', 'measure', 'mono')

function classForHeadline (level) {
  return classNames('lh-title', 'sans-serif', {
    f2: level === 1,
    f3: level === 2,
    f4: level === 3,
    fw8: (level === 1 || level === 2),
    fw3: (level === 3),
    mt0: (level === 2 || level === 3),
    mb3: (level === 2 || level === 3),
  })
}

renderer.heading = (text, level) =>
  `<h${level} class='${classForHeadline(level)}'>${text}</h${level}>`

renderer.paragraph = (text) =>
  `<p class='${paragraphCx}'>${text}</p>`

renderer.blockquote = (quote) =>
  `<blockquote class='i bl ml0 pl4'>
    ${quote}
  </blockquote>`

// Block Level methods
renderer.code = (code, language) =>
  `
    <pre class='pre bg-near-white pa2 br1'>
      <code class='code dark-gray'>
        ${code}
      </code>
    </pre>
  `

renderer.html = (html) => html

/* renderer.hr = () => null */
/* renderer.list = (body, ordered) => null */
/* renderer.listitem = (text) => null */

// Inline Level methods
/* renderer.strong = (string) => null */
/* renderer.em = (string) => null */
renderer.codespan = (code) => `<code class='code bg-near-white dark-gray ph1 br1'>${code}</code>`
/* renderer.br = () => null */
/* renderer.del = (string) => null */
/* renderer.link = (href, title, text) => null */
renderer.image = (href, title, text) =>
  `
    <img src='${href}' title='${title}' style='max-width:100%' />
  `

marked.setOptions({
  renderer,
  // highlight,
  sanitize: false,
  smartypants: true,
})

module.exports = function (content) {
  this.cacheable()
  const meta = frontMatter(content)
  const body = marked(meta.body)
  const result = objectAssign({}, meta.attributes, {
    body,
  })
  this.value = result
  return `module.exports = ${JSON.stringify(result)}`
}
