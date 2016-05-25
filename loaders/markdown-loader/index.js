import frontMatter from 'front-matter'
import marked from 'marked'
import classNames from 'classnames'
import hljs from 'highlight.js'
import objectAssign from 'object-assign'
import { length, split } from 'ramda'

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

const paragraphCx = classNames('lh-copy', 'measure', 'sans-serif')

function classForHeadline (level) {
  return classNames('lh-title', 'sans-serif', {
    f2: level === 1,
    f3: level === 2,
    f4: level === 3,
    f5: level === 4,
    fw8: (level === 1 || level === 2 || level === 3 || level === 4),
    mt5: (level === 2 || level === 3 || level === 4),
    mb3: (level === 2 || level === 3 || level === 4),
  })
}

renderer.heading = (text, level) =>
  `<h${level} class='${classForHeadline(level)}'>${text}</h${level}>`

renderer.paragraph = (text) =>
  `<p class='${paragraphCx}'>${text}</p>`

renderer.blockquote = (quote) =>
  `<blockquote class='i bl ml0 pl4 mv4'>
    ${quote}
  </blockquote>`

// Block Level methods
renderer.code = (code, language) =>
  `<pre class='f6 pre bg-near-white pa2'><code class='code dark-gray'>${code}</code></pre>`

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
renderer.image = (href, title, text) => {
  const figCaption = title && `<figcaption class="sans-serif f6 i gray">${title}</figcaption>`
  const t = `title='${title}'`
  return `
    <figure class="mh0 mv4 relative left--2-ns">
      <img src='${href}' alt='${text}' ${title && t} style='max-width:100%; height:auto;' />
      ${title ? figCaption : ''}
    </figure>
  `
}

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
    body, wordCount: length(split(" ", content)),
  })
  this.value = result
  return `module.exports = ${JSON.stringify(result)}`
}
