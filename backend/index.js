const path = require('path')
const fs = require('fs')
const http = require('http')
const https = require('https')
const express = require('express')
const bodyParser = require('body-parser')
const querystring = require('querystring')
const fetch = require('node-fetch')
const backendSettings = require('./settings')
const { recaptcha } = require('../settings')

const app = express()

const privateKey = fs.readFileSync(backendSettings.privateKeyPath, 'utf8')
const certificate = fs.readFileSync(backendSettings.certificatePath, 'utf8')
const ca = fs.readFileSync(backendSettings.caPath, 'utf8')

const credentials = {
  key: privateKey,
  cert: certificate,
  ca,
}

const routePath = backendSettings.routePath || ''

if (backendSettings.isHttps) {
  app.use((req, res, next) => {
    if (req.secure) {
      next()
    } else {
      res.redirect(`https://${req.headers.host}${req.url}`)
    }
  })
}

if (routePath && backendSettings.rootRedirectTo) {
  app.get('/', (req, res) => {
    res.redirect(backendSettings.rootRedirectTo)
  })
}

if (recaptcha) {
  app.set('view engine', 'ejs')
  // app.set('views', path.join(__dirname, 'views'))

  app.use(bodyParser.urlencoded({ extended: true }))

  app.get(`${routePath}/`, (req, res) => {
    res.set({ 'X-Robots-Tag': 'noindex, nofollow' })
    res.render('verification', {
      siteKey: backendSettings.siteKey,
    })
  })

  app.post(`${routePath}/`, async (req, res) => {
    try {
      const recaptchaRes = req.body['g-recaptcha-response']
      const verifyUrl = 'https://www.google.com/recaptcha/api/siteverify'

      if (!recaptchaRes) {
        res.redirect('back')
        return
        // throw new Error('no recaptcha response received')
      }

      const verify = await fetch(verifyUrl, {
        method: 'post',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
        },
        body: querystring.stringify({
          secret: backendSettings.secretKey,
          response: recaptchaRes,
        }),
      })
        .then((resInner) => resInner.json())
        .then((json) => json.success)
        .catch((err) => {
          res.redirect('back')
          throw new Error(`Error: ${err.message}`)
        })

      if (!verify) {
        res.redirect('back')
        return
        // throw new Error("Can't verify you as a human")
      }

      res.sendFile(path.join(__dirname, 'static', 'index.html'), {
        headers: { 'X-Robots-Tag': 'noindex, nofollow' },
      })
    } catch (error) {
      console.log(error)
    }
  })

  app.use(`${routePath}/index.html`, (req, res) => {
    return res.sendStatus(404)
  })
}

app.use(
  express.static(path.join(__dirname, 'static'), {
    index: recaptcha ? false : ['index.html'],
    setHeaders: (res) => {
      res.set('X-Robots-Tag', 'noindex, nofollow')
    },
  }),
)

http.createServer(app).listen(80, () => {
  console.log('HTTP Server running on port 80')
})

if (backendSettings.isHttps) {
  https.createServer(credentials, app).listen(443, () => {
    console.log('HTTPS Server running on port 443')
  })
}
