<p align="center">
  <a href="https://formanta.bemit.codes" rel="noopener noreferrer" target="_blank"><img width="125" src="https://formanta.bemit.codes/formanta_logo.svg" alt="Formanta Logo"></a>
</p>

# FormantaSass

[![npm (scoped)](https://img.shields.io/npm/v/@formanta/sass?style=flat-square)](https://www.npmjs.com/package/@formanta/sass)

A Sass Library with style output or not, optimized for [AMP](https://amp.dev) and with CSS semantics like bootstrap *or* Basscss (either `col-md-6` or `md-col-6`). Size: `44KB` - or **only `27KB`** without responsive spacings!

From Version `>0.20.0` onwards this library is inspired and based upon [mustard-ui](https://kylelogue.github.io/mustard-ui) and [Basscss](https://basscss.com/). But written in Sass, with more configuration options through Sass variables, which where not existing in mustard or done by CSS vars in Basscss. Sass mixins are included for easier reuse without copying Sass/CSS.

**Take a look & inspect the [example page](https://formanta.bemit.codes)** for all selectors and styles. Or the [documentation](https://formanta.bemit.codes/docs/) of Sass and CSS for implementation details.

Simply install with: `npm i --save-dev @formanta/sass` and use like:

```scss
// `@import` may differ depending on setup

// overwrite default variables here

// get mixins, functions, variables from Formanta
@import "node_modules/@formanta/sass/meta";

// own styles which may use Formanta Sass
.bg-grey {
    background: $color-gray-600;
    margin: space(1);
}

// get everything that actually produces CSS from Formanta
@import "node_modules/@formanta/sass/style";
```

Styling for these components are available:

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

## License

Formanta: Michael Becker, [MIT License](LICENSE)

Basscss: Copyright (c) 2013 – 2016 Brent Jackson, MIT License

Mustard-UI: Copyright 2018 Kyle Logue, MIT License

## Copyright

2015 - 2020 | [Michael Becker](https://mlbr.xyz), [bemit UG (haftungsbeschränkt)](https://bemit.codes)

Logo made by Born & Partner
