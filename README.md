<p align="center">
  <a href="https://formanta.bemit.codes" rel="noopener noreferrer" target="_blank"><img width="125" src="https://formanta.bemit.codes/formanta_logo.svg" alt="Formanta Logo"></a>
</p>

<h1 align="center">FormantaSass</h1>

[![npm (scoped)](https://img.shields.io/npm/v/@formanta/sass?style=flat-square)](https://www.npmjs.com/package/@formanta/sass)

Feature rich Sass library with small output size: `~46KB` *(gzip `9.5KB`)* CSS - or **only `~27.5KB`** *(gzip `6.7KB`)* without responsive spacings!

Low-level OOCSS framework with modular style files (optional CSS output), contains additionally ready to use components to speed up development and page load!

CSS semantics like bootstrap *or* Basscss (e.g. `col-md-6` or `md-col-6`). Used CSS selectors can be changed for most components, like applying button styles only to `.btn` and not on `.btn, button` or using `.button`/`.button-round`/`.button-lg` instead of `.btn`/`.btn-round`/`.btn-lg`.

**Take a look & inspect the [example page](https://formanta.bemit.codes)** for all selectors and styles. For implementation details check the [documentation](https://formanta.bemit.codes/docs/) of Sass and CSS.

*Compatible with [AMP](https://amp.dev).*

- [Quick Start](#quick-start)
- [Config](#config)
- [Modular Imports](#modular-imports)
- [Aims](#aims)
- [Pre Build CSS](#pre-build-css)
- [License](#license)

> Easily build your homepage with a modern static site generator, try out [create-amp-page]((https://github.com/bemit/create-amp-page)) with one of the [starter repos](https://github.com/bemit/create-amp-page#starter-templates), for AMP or PWA-enhanced pages.

## Quick Start

Install package: `npm i --save-dev @formanta/sass`

Add imports, config and custom styles in your `.scss`/`.sass` file:

```scss
// `@import` may differ depending on your setup

// overwrite default variables here
$color-primary: pink;

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

// get everything that actually produces CSS from Formanta or import only the wanted styles
@import "node_modules/@formanta/sass/style";

// maybe, maybe overwrite Formanta styles here
// add styles which rely on component variables (e.g. `$panel-shadow`)
```

Load the transpiled CSS file - faster style your next awesome project!

Small boilerplate to get you started, also on [codesandbox](https://codesandbox.io/s/formanta-starter-9onf2), for a more real life example check the [example page](https://formanta.bemit.codes).

## Config

For a full list of variables consult the [documentation](https://formanta.bemit.codes/docs/).

Most important:

- [`$class-style`](https://formanta.bemit.codes/docs/#vars:naming-variable-class-style)
- [`$color-primary`](https://formanta.bemit.codes/docs/#vars:colors-semantic-variable-color-primary)
- [`$color-secondary`](https://formanta.bemit.codes/docs/#vars:colors-semantic-variable-color-secondary)
- [`$spacing`](https://formanta.bemit.codes/docs/#spacing-variable-spacing)
- [`$line-height`](https://formanta.bemit.codes/docs/#typography-variable-line-height)
- [`$font-weight`](https://formanta.bemit.codes/docs/#typography-variable-font-weight)
- [`$font-color`](https://formanta.bemit.codes/docs/#typography-variable-font-color)
- [`$font-family`](https://formanta.bemit.codes/docs/#typography-variable-font-family)
- [`$font-family-mono`](https://formanta.bemit.codes/docs/#typography-variable-font-family-mono)
- [`$title-font-color`](https://formanta.bemit.codes/docs/#typography-variable-title-font-color)
- [`$title-font-family`](https://formanta.bemit.codes/docs/#typography-variable-title-font-family)
- [`$container-sizes`](https://formanta.bemit.codes/docs/#container-variable-container-sizes)

## Modular Imports

The Sass files are structured, so it's possible to include just the needed styles, but have all variables and mixins ready.

The general overriding order is `low-level > specific` for variables (`_meta*`) and `specific > low-level` for most styles (`_style*`), this enables the reuse of low-level variables while configuring the more complex structures. But with the inversion at the style order, it is possible to overwrite more specific structures with the low-level CSS styles again.

> `specific` = more complex structures, mostly called `components` in this library
>
> `low-level` = low-level / object-oriented CSS rules, called `elements` / `base` / `attributes` in this library
>
> `base` = lowest low-level CSS rules, based/inspired upon `Basscss@v8`

This file shows one way to re-build it:

```scss
// 1. here the base vars can be overwritten
$spacing: 8px;
$color-light: #f3f3f3;

// 2. import: base, spacing vars and mixins
@import '~@formanta/sass/meta-base';

// here reuse the base vars, e.g.
//    - configure `color-semantic` and attribute/component colors using the `color-map` vars
//    - configure the component sizing, using the spacing vars and mixins

$title-font-color: $color-gray-900;
$font-color: $color-gray-700;
$line-height: 1.45;
$color-primary: #6224ff;
$container-sizes: (
    'small' : $bp-small,
    'medium' : $bp-medium,
    'large' : $bp-large + 100,
    'xlarge' : $bp-xlarge,
);
$button-padding: space(2) space(3);

// 3. import the missing vars and the low-level/basic mixins/variables
@import '~@formanta/sass/meta-attributes';

// here the component vars can be reconfigured, using vars and mixins from the attributes/elements

// 4. import the component defaults/mixins
@import '~@formanta/sass/meta-components';

// 5. get everything that actually produces CSS from Formanta or import only the wanted styles
@import '~@formanta/sass/style-global'; // global html, body style
@import '~@formanta/sass/style-components'; // complex structures (e.g. panel) and basic components
@import '~@formanta/sass/style-elements'; // basic HTML elements (e.g. `h1 - h6`, `body1`, `code`, `blockquote`)

// add own custom structures here, so they can be overwritten using the low-level styles,
// but can override basic styles of titles, links, buttons etc.

// 6. get the low-level CSS output rules
@import '~@formanta/sass/style-attributes'; // low-level attribute rules, incl. typography attribute styles, responsive spacings
@import '~@formanta/sass/style-base'; // low-level base rules

// here - if really necessary - the low-level rules can be overwritten
```

## Aims

Having a code-controlled CSS framework, which produces CSS from variable configurations and provides logic components, to ease config-based styles in clean-data environments.

**additional aim since `0.20.0`:**

Combining the flexibility of low-level style architectures, like Basscss, with the readyness and consistency of frameworks like Bootstrap.

Using the CSS generator (Sass) var overriding together with optional CSS output and CSS overriding patterns to produce a small-size output.

> From Version `>0.20.0` onwards this library is inspired and based upon [mustard-ui](https://kylelogue.github.io/mustard-ui) and [Basscss](https://basscss.com/). But written in Sass, with more configuration options through Sass variables, which where not existing in mustard or done by CSS vars in Basscss. Sass mixins are included for easier reuse without copying Sass/CSS.

**additional aim since `0.23.0`:**

Optimal design translations from UI language specifications, through better interoperable low-level attributes and elements which use e.g. Material-UI influenced color semantics, together with the low-level/OOCSS type of naming, modular components and controlled CSS output.

## Versions

This project is **in beta**.

This package is managed [in a monorepo](https://github.com/bemit/Formanta).

## Pre Build CSS

Prebuild CSS are available to try it out with some default configs.

> build together with [normalize.css v8.0.1](https://github.com/necolas/normalize.css), except the two files with the `-no-normalize` suffix

- [defaults.css](https://formanta.bemit.codes/styles/prebuild/main.css)
    - [defaults no-normalize](https://formanta.bemit.codes/styles/prebuild/main-no-normalize.css)
    - uses just the defaults
    - source files in demo monorepo:
        - [prebuild/main](https://github.com/bemit/Formanta/blob/master/packages/demo/src/styles/prebuild/main.scss)
        - [prebuild/main-no-normalize](https://github.com/bemit/Formanta/blob/master/packages/demo/src/styles/prebuild/main-no-normalize.scss)
- [defaults-no-responsive-spacings.css](https://formanta.bemit.codes/styles/prebuild/main-no-responsive-spacings.css)
    - [defaults no-responsive-spacings no-normalize](https://formanta.bemit.codes/styles/prebuild/main-no-responsive-spacings-no-normalize.css)
    - uses just the defaults, but does not include responsive spacings
    - source files in demo monorepo:
        - [prebuild/main-no-responsive-spacings](https://github.com/bemit/Formanta/blob/master/packages/demo/src/styles/prebuild/main-no-responsive-spacings.scss)
        - [prebuild/main-no-responsive-spacings-no-normalize](https://github.com/bemit/Formanta/blob/master/packages/demo/src/styles/prebuild/main-no-responsive-spacings-no-normalize.scss)
- [contrast.css](https://formanta.bemit.codes/styles/prebuild/main-contrast.css)
    - source files in demo monorepo:
        - [config/_vars-contrast](https://github.com/bemit/Formanta/blob/master/packages/demo/src/styles/config/_vars-contrast.scss)
        - [prebuild/main-contrast](https://github.com/bemit/Formanta/blob/master/packages/demo/src/styles/prebuild/main-contrast.scss)
- [dark.css](https://formanta.bemit.codes/styles/prebuild/main-dark.css)
    - source files in demo monorepo:
        - [config/_vars-dark](https://github.com/bemit/Formanta/blob/master/packages/demo/src/styles/config/_vars-dark.scss)
        - [prebuild/main-dark](https://github.com/bemit/Formanta/blob/master/packages/demo/src/styles/prebuild/main-dark.scss)
- [dark-contrast.css](https://formanta.bemit.codes/styles/prebuild/main-dark-contrast.css)
    - source files in demo monorepo:
        - [config/_vars-dark-contrast](https://github.com/bemit/Formanta/blob/master/packages/demo/src/styles/config/_vars-dark-contrast.scss)
        - [prebuild/main-dark-contrast](https://github.com/bemit/Formanta/blob/master/packages/demo/src/styles/prebuild/main-dark-contrast.scss)
- [dark-cssvars.css](https://formanta.bemit.codes/styles/prebuild/main-dark-cssvars.css)
    - source files in demo monorepo:
        - [prebuild/main-dark-cssvars](https://github.com/bemit/Formanta/blob/master/packages/demo/src/styles/prebuild/main-dark-cssvars.scss)

## License

Formanta: Michael Becker / bemit [MIT License](https://github.com/bemit/FormantaSass/blob/master/LICENSE)

Since 0.20.0 influenced and based upon:

Basscss: Copyright (c) 2013 – 2016 Brent Jackson, [MIT License](https://github.com/basscss/basscss/blob/master/LICENSE.md), *used as initial source of `base`/low-level rules*.

Mustard-UI: Copyright 2018 Kyle Logue, [MIT License](https://github.com/kylelogue/mustard-ui/blob/master/LICENSE), *used as initial code for forms, buttons and other elements, the general influence of components*.

## Copyright

2015 - 2022 | [Michael Becker](https://i-am-digital.eu), [bemit](https://bemit.codes)
