# React Printable CV

[![CircleCI](https://img.shields.io/circleci/build/github/tomchen/react-printable-cv)](https://circleci.com/gh/tomchen/react-printable-cv "CircleCI") [![Codecov](https://img.shields.io/codecov/c/github/tomchen/react-printable-cv)](https://codecov.io/gh/tomchen/react-printable-cv "Codecov") [![Scrutinizer Code Quality](https://img.shields.io/scrutinizer/quality/g/tomchen/react-printable-cv)](https://scrutinizer-ci.com/g/tomchen/react-printable-cv/?branch=master) [![MIT License](https://img.shields.io/github/license/tomchen/react-printable-cv)](https://github.com/tomchen/react-printable-cv/blob/master/LICENSE "MIT License")

Printable, multi-language, web curriculum vitae (resume) built with React and Redux.

[Click here to go to the demo page](https://react-cv.tomchen.org/)

It's a responsive web page or a so-called SPA (single page application) that is 'perfectly' A4 paper print-ready. The data, stored in JSON files, are fully separated from the SPA.<!--  A PDF file can be generated at compile time or in the backend server. -->

Also can be optionally generated a standalone HTML file containing all the resources, including JavaScript, CSS, images, fonts and even the pre-generated PDF. The [demo page](https://react-cv.tomchen.org/) is a non-standalone code splitting version, it has [a subpage](https://react-cv.tomchen.org/standalone) that looks the same but is a standalone HTML.

## Direct printing

The direct printing feature is experimental:

* Direct printing is almost perfect in Google Chrome (and potentially in other browsers with the same core)
* Firefox user should set print scale to 100% instead of 'Shrink To Fit'
* Other browsers may or may not have problems in direct printing

It's possible to print the page to PDF file, most browsers come with such feature.

## PDF

<!-- The PDF server creation is not fully ready -->

<!-- In case your browser has any problem in printing the document directly, there is always the PDF button to come to your rescue. The pre-generated or server-generated PDF is consistent in any browser / PDF viewer, and can be perfectly printed. -->

<!-- To generate PDF: open the web page online verison (i.e. with a server, you can use the [online editor/demo](https://react-cv.tomchen.org/) or run `npm start` on your computer), edit the CV and click "PDF" button, change the language. -->

Put your pre-generated `$LOCALE.pdf` files in the `pdf/` folder so that they can be included in the SPA.

## Static offline version

The static offline version can be either a standalone HTML file that contains all the resources, including JavaScript, CSS, images, fonts, PDF, etc., or a group of HTML, JavaScript bundle files and other aforementioned resources.

In comparison with the normal version with separate resource files, standalone HTML file have great portability but lost the ability to on-demand, asynchronously "lazy load" / code splitting.

In wider or normal screen, the web page visually shows on an "A4 page" with non-printable buttons on the right side outside the "A4 page". The web page is responsive in mobile screen.

`npm run rebuild` to generate the static offline version (using files and resources from `data/`, `src/` and `pdf/`) and put it into `dist/` folder.

In `settings/index.js`, change `inline_resources` to false to have separate resource files instead of the standalone HTML. You can also set `less_script_chunks` to false to have as many JavaScript chunk files as webpack needs for code splitting.

It supports mordern browsers and IE 11 via Polyfills, although it may have some [Flexbox](https://caniuse.com/flexbox) rendering problem in IE 11.

## File sizes

You'll find the Chrome generated PDF usually much smaller than Word generated PDF. However, it's not the case for Firefox. You'll find the [CV word file](https://github.com/tomchen/react-printable-cv/blob/master/word/cv.docx) in the folder `word/` (the CV word file was created by me long before the React one) to be compared.

## Multi-language

You can set languages in `settings/index.js`. Translations are in `i18n/$LOCALE/$NAMESPACE.json`.

## Configuration

`settings/index.js`:

```javascript
module.exports = {
  langs: [
    {
      code: 'en',
      name: 'English',
    },
    ...
  ],
  default_lang: 'en',
  less_script_chunks: false, // generate one JavaScript chunk files only in production
  inline_resources: false, // make resources inline in order to generate a standalone HTML in production
  noindex: false, // add noindex meta tag to block search engine
  recaptcha: false, // add Google reCAPTCHA to block spiders, if true, you should also set `site_key` and `secret_key` in `backend/recaptcha.js`
  dynamic_pdf: true, // when clicking PDF button, send JSON to backend to generate PDF on demand, instead of downloading pre-included static PDF
  export_json_button: true, // show "Export JSON" button
  import_json_button: true, // show "Import JSON" button
  github_button: true, // show "GitHub" button
  generate_backend_pdf_template: false, // generate a template to be used by backend to generate PDF
  print_show_web_version_link: false, // show web version link in print view so that it will be shown in the print-view-generated PDF (`web_version_url` is optionally defined in CV data JSON)
}
```

Modify user data and settings in data/, pdf/ and settings/ folders, and run `npm start` (dev mode) or `npm run build` (build production file).

## Stack

Not bootstrapped with Create React App, it uses:

* React + Redux (react-redux) for the main logic
* Babel, webpack, PostCSS, some plugins and loaders for transpilation and module bundling
* Material UI for buttons
* Main page area is built with CSS Flexbox, and using Sass and CSS Modules
* *Formik + Yup for forms (will be used)*
* *Immer (will be used)*, Redux Thunk for store manipulation and asynchronous operations
* i18next for forms i18n
* Influenced by JAMstack (JSON source, Markdown support via react-markdown)
* Prettier, ESLint, stylelint for linting
* Day.js for date manipulation
* Puppeteer for backend PDF creation
* Jest for test
* CircleCI and Codecov for CI
* *[`ts-version`](https://github.com/tomchen/react-printable-cv/tree/ts-version) branch is a partially-checked TypeScript version transformed from `master` branch's ES version v2.1. The project will continue to be developed in ES*

## To do

Things that could be done in the future to make it better or more interesting:

* [ ] Editor forms (Edit Mode)
* [ ] Backend generates PDF on-demand
