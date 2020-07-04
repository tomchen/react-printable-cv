module.exports = {
  extends: [
    'stylelint-config-recommended',
    'stylelint-config-sass-guidelines',
    'stylelint-config-rational-order',
  ],
  rules: {
    'selector-class-pattern': null,
    'scss/at-import-partial-extension-blacklist': null,
    'selector-type-no-unknown': null,
    'order/properties-alphabetical-order': null,
    'function-parentheses-space-inside': null,
    'max-nesting-depth': null,
    'selector-no-qualifying-type': null,
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['global'],
      },
    ],
  },
}
