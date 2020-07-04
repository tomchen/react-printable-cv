module.exports = {
  defaultNamespace: 'common',
  locales: ['en', 'fr', 'zh-cn'],
  namespaceSeparator: false,
  keySeparator: false,
  keepRemoved: true,
  input: ['src/**/*.{js,jsx}'],
  output: 'i18n/$LOCALE/$NAMESPACE.json',
  sort: true,
  useKeysAsDefaultValue: true,
  debug: true,
  func: {
    list: ['t'],
    extensions: ['.js', '.jsx']
  },
  trans: {
    component: 'Trans',
    i18nKey: 'i18nKey',
  },
}
