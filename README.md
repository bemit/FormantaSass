<p align="center">
  <a href="https://formanta.bemit.codes" rel="noopener noreferrer" target="_blank"><img width="125" src="https://formanta.bemit.codes/formanta_logo.svg" alt="Formanta Logo"></a>
</p>

<h1 align="center">FormantaSass</h1>

[![npm (scoped)](https://img.shields.io/npm/v/@formanta/sass?style=flat-square)](https://www.npmjs.com/package/@formanta/sass)
[![Travis (.com) master build](https://img.shields.io/travis/com/bemit/Formanta/master?style=flat-square)](https://travis-ci.com/bemit/Formanta)

Sass library optimized for [AMP](https://amp.dev), size: `44KB` *(gzip `8KB`)* - or **only `27KB`** without responsive spacings!

Features a low-level OOCSS framework with optional CSS output and ready components to speed up development and page load!

CSS semantics like bootstrap *or* Basscss (e.g. `col-md-6` or `md-col-6`). Used CSS selectors can be changed for (currently just) some components, like applying button styles only to `.btn` and not on `.btn, button, input[type='button'], input[type='reset'], input[type='submit']` or using `.button`/`.button-round`/`.button-lg` instead of `.btn`/`.btn-round`/`.btn-lg`. 

From Version `>0.20.0` onwards this library is inspired and based upon [mustard-ui](https://kylelogue.github.io/mustard-ui) and [Basscss](https://basscss.com/). But written in Sass, with more configuration options through Sass variables, which where not existing in mustard or done by CSS vars in Basscss. Sass mixins are included for easier reuse without copying Sass/CSS.

**Take a look & inspect the [example page](https://formanta.bemit.codes)** for all selectors and styles. For implementation details check the [documentation](https://formanta.bemit.codes/docs/) of Sass and CSS.

Looking for an easy [static site generator for AMP](https://github.com/bemit/create-amp-page)?

## Quick Start

Install package: `npm i --save-dev @formanta/sass`

Add imports, config and custom styles in your `.scss`/`.sass` file:

```scss
// `@import` may differ depending on your setup

// overwrite default variables here

// get mixins, functions, variables from Formanta
@import "node_modules/@formanta/sass/meta";

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

Small boilerplate to get you started, also on [codesandbox](https://codesandbox.io/s/formanta-starter-9onf2), for a more real life example check the [example page](https://formanta.bemit.codes).

```html
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8"/>
    <title>Formanta Mini CSS Framework</title>
    <meta name="description" content="">
    <meta name="keywords" content="">
    <meta http-equiv="language" content="en">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="/style/main.css" rel="stylesheet" type="text/css"/>
</head>

<body>

<article class="px2">
    <header>
        <h1 class="bold normal mt4">Formanta</h1>
    
        <p class="body1 px2">
            Mini CSS Framework with modular Sass files, configuration by Sass or (some) CSS variables and <strong>especially made for <a href="https://amp.dev" rel="noreferrer noopener" target="_blank">AMP</a>!</strong>
        </p>
    
        <p class="body1 mt1 mb0 px2">
            Checkout the <a href="https://github.com/bemit/FormantaSass" rel="noreferrer noopener" class="italic">quick start, features and issues</a> of the current version.
        </p>
        <p class="body1 mt0 mb4 px2">
            <code>npm i --save-dev @formanta/sass</code>
        </p>
    </header>

    <section>
        <h2>Loading</h2>

        <div class="loading dense mxa my2"></div>
    </section>

    <section>
        <h2>Panels</h2>
        <div class="panel">
            <div class="panel-head">
                <h3 class="panel-title">Title Panel</h3>
            </div>

            <div class="panel-body">
                <p class="body1">Lorem ipsum dolor sit amet consectutor adispisci.</p>
            </div>

            <div class="panel-footer">
                <a class="btn btn-primary-o no-link" href="#">More</a>
            </div>
        </div>
    </section>

    <section>
        <h2>Tooltip</h2>

        <span class="tooltip">Hover for more info<span class="tooltip-text">awesome!</span></span>
    </section>
</article>

<footer class="px2">
    <p class="mb0">© 2015 - 2020 Michael Becker</p>
    <p class="mt0">styled with <a href="https://formanta.bemit.codes" rel="noreferrer noopener" target="_blank">Formanta</a></p>
</footer>

</body>
</html>
```

## Config

For a full list of variables consult the [documentation](https://formanta.bemit.codes/docs/).

Most important:

- [`$class-style`](https://formanta.bemit.codes/docs/#undefined-variable-class-style)
- [`$brand-color`](https://formanta.bemit.codes/docs/#vars:colors-variable-brand-color)
- [`$spacing`](https://formanta.bemit.codes/docs/#spacing-variable-spacing)
- [`$line-height`](https://formanta.bemit.codes/docs/#undefined-variable-line-height)
- [`$font-weight`](https://formanta.bemit.codes/docs/#undefined-variable-font-weight)
- [`$font-color`](https://formanta.bemit.codes/docs/#undefined-variable-font-color)
- [`$heading-font-color`](https://formanta.bemit.codes/docs/#undefined-variable-heading-font-color)
- [`$font-family`](https://formanta.bemit.codes/docs/#undefined-variable-font-family)
- [`$font-family-mono`](https://formanta.bemit.codes/docs/#undefined-variable-font-family-mono)
- [`$heading-font-family`](https://formanta.bemit.codes/docs/#undefined-variable-heading-font-family)

## Components

Styling for these components are available:

(todo: link examples and/or docs, after sassdoc groups are configured)

- Blockquote
- Buttons
- Code
- Container
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
- Base
    - Align
    - Border
    - Flexbox
    - Hide
    - Layout
    - Links
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

2015 - 2020 | [Michael Becker](https://mlbr.xyz), [bemit UG (haftungsbeschränkt)](https://bemit.codes)

Logo made by Born & Partner
