# React Printable CV

Printable, multi-language, web curriculum vitae (resume) built with React and Redux.

[Click here to go to the editor / demo page](https://react-cv.tomchen.org/)

It's a responsive web page or a so-called SPA (single page application) that is 'perfectly' A4 paper print-ready.

A PDF file can be generated at compile time or in the backend server.

Also can be generated a **standalone** HTML file containing all the resources, including JavaScript, CSS, images, fonts and even the pre-generated PDF.

## Direct printing

The direct printing feature is experimental:

* Direct printing is almost perfect in Google Chrome (and potentially in other browsers with the same core)
* Firefox user should set print scale to 100% instead of 'Shrink To Fit'
* Other browsers may or may not have problems in direct printing

## PDF

In case your browser has any problem in printing the document directly, there is always the PDF button to come to your rescue. The pre-generated or server-generated PDF is consistent in any browser / PDF viewer, and can be perfectly printed.

To generate PDF: open the web page online verison (i.e. with a server, you can use the [online editor/demo](https://react-cv.tomchen.org/) or run `npm start` on your computer), edit the CV and click "PDF" button, change the language.

Put your pre-generated `$LOCALE.pdf` files in the `pdf/` folder so that they can be included in the SPA.

## Static offline version

The static offline version can be either a standalone HTML file that contains all the resources, including JavaScript, CSS, images, fonts, PDF, etc., or a group of HTML, JavaScript bundle files and other aforementioned resources.

In wider or normal screen, the web page visually shows on an "A4 page" with non-printable buttons on the right side outside the "A4 page", while it's responsive in mobile screen.

`npm run rebuild` to generate the static offline version (using files and resources from `data/`, `src/` and `pdf/`) and put it into `dist/` folder.

In `settings/index.js`, change `inline_resources` to false to have separate resource files instead of the standalone HTML. You can also set `one_chunk` to false to have multiple JavaScript chunk files.

It support mordern browsers and IE 11, although it may have some [Flexbox](https://caniuse.com/flexbox) rendering problem in IE 11.

## Multi-language

You can set languages in `settings/index.js` and `i18next-parser.config.js`. Translations are in `i18n/$LOCALE/$NAMESPACE.json`.

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
  one_chunk: true, // generate one JavaScript chunk files only in production
  inline_resources: true, // make resources inline in order to generate a standalone HTML in production
  // lazy_loading: false, // not supported for now
}
```

## Stack

See package.json
