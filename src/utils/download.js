const downloadUrlAsFile = (filename, url) => {
  const el = document.createElement('a')
  el.setAttribute(
    'href',
    url,
  )
  el.setAttribute('download', filename)
  el.style.display = 'none'
  document.body.appendChild(el)
  el.click()
  document.body.removeChild(el)
}

const downloadStringAsFile = (filename, text) => {
  downloadUrlAsFile(filename, `data:text/plain;charset=utf-8,${encodeURIComponent(text)}`)
}

const downloadBlobAsFile = (filename, blob) => {
  downloadUrlAsFile(filename, window.URL.createObjectURL(blob))
}

export { downloadUrlAsFile, downloadStringAsFile, downloadBlobAsFile }
