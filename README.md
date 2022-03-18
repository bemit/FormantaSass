<p align="center">
  <a href="https://formanta.bemit.codes" rel="noopener noreferrer" target="_blank"><img width="125" src="https://formanta.bemit.codes/formanta_logo.svg" alt="Formanta Logo"></a>
</p>

<h1 align="center">FormantaSass</h1>

[![npm (scoped)](https://img.shields.io/npm/v/@formanta/sass?style=flat-square)](https://www.npmjs.com/package/@formanta/sass)

Sass library optimized for [AMP](https://amp.dev), size: `41KB` *(gzip `8.75KB`)* - or **only `24KB`** *(gzip `6.36KB`)* without responsive
spacings!

Features a low-level OOCSS framework with optional CSS output and ready components to speed up development and page
load!

CSS semantics like bootstrap *or* Basscss (e.g. `col-md-6` or `md-col-6`). Used CSS selectors can be changed for (
currently just) some components, like applying button styles only to `.btn` and not
on `.btn, button, input[type='button'], input[type='reset'], input[type='submit']` or using `.button`/`.button-round`
/`.button-lg` instead of `.btn`/`.btn-round`/`.btn-lg`.

From Version `>0.20.0` onwards this library is inspired and based
upon [mustard-ui](https://kylelogue.github.io/mustard-ui) and [Basscss](https://basscss.com/). But written in Sass, with
more configuration options through Sass variables, which where not existing in mustard or done by CSS vars in Basscss.
Sass mixins are included for easier reuse without copying Sass/CSS.

**Take a look & inspect the [example page](https://formanta.bemit.codes)** for all selectors and styles. For
implementation details check the [documentation](https://formanta.bemit.codes/docs/) of Sass and CSS.

Looking for an easy [static site generator for AMP or PWA-enhanced pages](https://github.com/bemit/create-amp-page)?

## Quick Start

Install package: `npm i --save-dev @formanta/sass`

Add imports, config and custom styles in your `.scss`/`.sass` file:

```scss
// `@import` may differ depending on your setup

// overwrite default variables here

// get mixins, functions, variables from Formanta
@import "node_modules/@formanta/sass/meta";

// a global reset for `p`, as there is no default `p` rule included since formanta `0.22.0`
p {
    margin: 0;
    // or apply `body1` style:
    // @include body1();
}

// own styles which may use Formanta Sass
.bg-grey {
    background: $color-gray-600;
    margin: space(1);
}

// get everything that actually produces CSS from Formanta
// or get the imports from the file and load only what is needed
@import "node_modules/@formanta/sass/style";

// maybe, maybe overwrite Formanta styles here
// add styles which rely on component variables (e.g. `$panel-shadow`) (todo: change all vars to `meta`)
```

Reference the transpiled CSS file and use the CSS classes and styles in your next awesome project!

Small boilerplate to get you started, also on [codesandbox](https://codesandbox.io/s/formanta-starter-9onf2), for a more
real life example check the [example page](https://formanta.bemit.codes).

## Config

For a full list of variables consult the [documentation](https://formanta.bemit.codes/docs/).

Most important:

- [`$class-style`](https://formanta.bemit.codes/docs/#undefined-variable-class-style)
- [`$brand-color`](https://formanta.bemit.codes/docs/#vars:colors-variable-brand-color)
- [`$spacing`](https://formanta.bemit.codes/docs/#spacing-variable-spacing)
- [`$line-height`](https://formanta.bemit.codes/docs/#undefined-variable-line-height)
- [`$font-weight`](https://formanta.bemit.codes/docs/#undefined-variable-font-weight)
- [`$font-color`](https://formanta.bemit.codes/docs/#undefined-variable-font-color)
- [`$title-font-color`](https://formanta.bemit.codes/docs/#undefined-variable-heading-font-color)
- [`$font-family`](https://formanta.bemit.codes/docs/#undefined-variable-font-family)
- [`$font-family-mono`](https://formanta.bemit.codes/docs/#undefined-variable-font-family-mono)
- [`$title-font-family`](https://formanta.bemit.codes/docs/#undefined-variable-heading-font-family)

## Components

Styling for these components are available:

(todo: link examples and/or docs, after sassdoc groups are configured)

- Blockquote
- Buttons
- Code
- Containers / Containers-Responsive
- Elevation
- Forms
- Grid
- Loading
- Modal / Overlay
- Panel
- Spacing
    - Spacing-Responsive
- Table
- Tooltip
- Typography
    - Links
    - Body Text
    - Titles / Headlines
    - Attributes
- Base
    - Align
    - Border
    - Flexbox
    - Hide
    - Layout
    - Position

## Versions

For updates see [github release notes](https://github.com/bemit/FormantaSass/releases).

This project is **in beta**.

This package is managed [in a monorepo](https://github.com/bemit/Formanta).

## License

Formanta: Michael Becker, [MIT License](LICENSE)

Basscss: Copyright (c) 2013 – 2016 Brent Jackson, MIT License

Mustard-UI: Copyright 2018 Kyle Logue, MIT License

## Copyright

2015 - 2022 | [Michael Becker](https://mlbr.xyz), [bemit](https://bemit.codes)
