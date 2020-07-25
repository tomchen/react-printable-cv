module.exports = {
  path: '/cv',
  rootRedirectTo: 'https://example.com/',
  useRecaptcha: true, // false: do not use; 'checkbox': checkbox (v2); ANYTHING ELSE: invisible (v2 or v3)
  siteKey: '1Ab_CdEfGhIjK',
  secretKey: '2Ab_CdEfGhIjK',
  useHttps: false,
  privateKeyPath: '/etc/letsencrypt/live/example.com/privkey.pem',
  certificatePath: '/etc/letsencrypt/live/example.com/cert.pem',
  caPath: '/etc/letsencrypt/live/example.com/chain.pem',
}
