import { useEffect } from 'react'

export default function SEO({ title, description }) {
  useEffect(() => {
    document.title = title

    setMeta('name', 'description', description)

    setMeta('property', 'og:title', title)
    setMeta('property', 'og:description', description)
  }, [title, description])

  return null
}

function setMeta(attr, key, value) {
  let el = document.querySelector(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', value)
}
