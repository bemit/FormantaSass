<p align="center">
  <a href="https://formanta.bemit.codes" rel="noopener noreferrer" target="_blank"><img width="125" src="https://formanta.bemit.codes/formanta_logo.svg" alt="Formanta Logo"></a>
</p>

<h1 align="center">FormantaSass</h1>

[![npm (scoped)](https://img.shields.io/npm/v/@formanta/sass?style=flat-square)](https://www.npmjs.com/package/@formanta/sass)

Sass library optimized for [AMP](https://amp.dev), size: `45KB` *(gzip `8.75KB`)* - or **only `27KB`** *(gzip `6.36KB`)* without responsive spacings!

Features a low-level OOCSS framework with optional CSS output and ready components to speed up development and page load!

CSS semantics like bootstrap *or* Basscss (e.g. `col-md-6` or `md-col-6`). Used CSS selectors can be changed for most components, like applying button styles only to `.btn` and not on `.btn, button` or using `.button`/`.button-round`/`.button-lg` instead of `.btn`/`.btn-round`/`.btn-lg`.

From Version `>0.20.0` onwards this library is inspired and based upon [mustard-ui](https://kylelogue.github.io/mustard-ui) and [Basscss](https://basscss.com/). But written in Sass, with more configuration options through Sass variables, which where not existing in mustard or done by CSS vars in Basscss. Sass mixins are included for easier reuse without copying Sass/CSS.

**Take a look & inspect the [example page](https://formanta.bemit.codes)** for all selectors and styles. For implementation details check the [documentation](https://formanta.bemit.codes/docs/) of Sass and CSS.

Looking for an easy [static site generator for AMP or PWA-enhanced pages](https://github.com/bemit/create-amp-page)?

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
- [`$color-primary`](https://formanta.bemit.codes/docs/#vars:colors-variable-color-primary)
- [`$color-secondary`](https://formanta.bemit.codes/docs/#vars:colors-variable-color-secondary)
- [`$spacing`](https://formanta.bemit.codes/docs/#spacing-variable-spacing)
- [`$line-height`](https://formanta.bemit.codes/docs/#typography-variable-line-height)
- [`$font-weight`](https://formanta.bemit.codes/docs/#typography-variable-font-weight)
- [`$font-color`](https://formanta.bemit.codes/docs/#typography-variable-font-color)
- [`$font-family`](https://formanta.bemit.codes/docs/#typography-variable-font-family)
- [`$font-family-mono`](https://formanta.bemit.codes/docs/#typography-variable-font-family-mono)
- [`$title-font-color`](https://formanta.bemit.codes/docs/#typography-variable-title-font-color)
- [`$title-font-family`](https://formanta.bemit.codes/docs/#typography-variable-title-font-family)
- [`$container-sizes`](https://formanta.bemit.codes/docs/#container-variable-container-sizes)

## Modular Loading

The Sass files are structured, so it's possible to include just the needed styles, but have all variables and mixins ready.

The general overriding order is `base > specific` for variables (`_meta*`) and `specific > base` for most styles (`_style*`), this enables the reusable of more basic variables while configuring the more complex structures. But with the inversion for the styles, it is possible to overwrite more specific structures with the low-level CSS basics again.

This file shows one way to re-build it, it enables reusing "the more basic vars/mixins" at the config and output of the "more rich elements and components" - and overwriting styles in a similar fashion.

```scss
// 1. here the base vars can be overwritten
$spacing: 8px;
$color-light: #f3f3f3;

// 2. import: base, spacing vars and mixins
@import '~@formanta/sass/meta-base';

// 3. here the component vars can be overwritten - the base vars and spacing mixin can be used

$title-font-color: $color-gray-800;
$font-color: #2f373a;
$line-height: 1.45;
$color-primary: #6224ff;
$container-sizes: (
    'small' : $bp-small,
    'medium' : $bp-medium,
    'large' : $bp-large + 100,
    'xlarge' : $bp-xlarge,
);

// 4. import the missing vars and the basic mixins/variables
@import '~@formanta/sass/meta-elements';

// here the component vars can be reconfigured, using vars and mixins from the elements

// 6. import the component defaults/mixins
@import '~@formanta/sass/meta-components';

// 6. add own CSS rules which may use variable/mixins from Formanta Sass

// 7. here the `style` component vars (e.g. `$blockquote-selector`) can be overwritten

// 8. get everything that actually produces CSS from Formanta or import only the wanted styles
@import '~@formanta/sass/style';

// 9. here - if really necessary - the formanta rules can be overwritten,
//    or styles which rely on component variables (e.g. `$panel-shadow`)
```

## Versions

This project is **in beta**.

This package is managed [in a monorepo](https://github.com/bemit/Formanta).

## License

Formanta: Michael Becker, [MIT License](https://github.com/bemit/Formanta/blob/master/LICENSE)

Basscss: Copyright (c) 2013 – 2016 Brent Jackson, [MIT License](https://github.com/basscss/basscss/blob/master/LICENSE.md)

Mustard-UI: Copyright 2018 Kyle Logue, [MIT License](https://github.com/kylelogue/mustard-ui/blob/master/LICENSE)

## Copyright

2015 - 2022 | [Michael Becker](https://i-am-digital.eu), [bemit](https://bemit.codes)
