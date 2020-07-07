const puppeteer = require('puppeteer')
const fs = require('fs')

;(async () => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto('http://localhost:8080')

  const buffer = await page.pdf({ format: 'A4' })

  await browser.close()

  fs.writeFileSync('pdf/cv.pdf', buffer)
})().catch(() => {})
