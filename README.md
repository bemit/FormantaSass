# FormantaSass: Core

A Sass Library with style output or not, complete themes could be build using only config values.

It is split into two parts:

- [FormantaSass](https://bitbucket.org/bemit_eu/formantasass), containing full sets of reusable components
- [FormantaSass: Core](https://bitbucket.org/bemit_eu/formantasass-core), this repo, core logic, basic style and utility functions
- Core is independent, whereas FormantaSass relies on Core

## This part

Mixins, functions and style output for building the structure of a web app.

### Features

- default output of components could be turned of
- bp: breakpoint mixins and breakpoint controlled visible tools and more
- container: bp based centered block
- grid: dynamic grid and stacking system, on default 24 columns based
- typography: setting all needed typographic parts, normalize the font in complete
- doc coverage: inline and generated (simple) source code docu
- color: basic color functions and variables
- animation: some animation (dev)
- everything is mixin and function based, meaning you could use everything that would have been with a default formanta class also everywhere else, write less duplicate code which will differ very soon (in some way, anytime). Worried about the size? As the code blocks are identical, they will easily compressed before they will be transferred. When applying BEM style selectors you could also decrese size and use the mixins efficiently.

## Install

### With Composer
```
composer require bemit/formantasass
composer require bemit/formantasass-core
```

### Manual Installation

Download or clone both repo's `master` into one folder, it is needed that both projects are in the same folder with their names.

```text
/vendor/bemit/formantasass
/vendor/bemit/formantasass-core
``` 
or
```text
/asset/formantasass
/asset/formantasass-core
``` 

Clone:

```bash
git clone https://bitbucket.org/bemit_eu/formantasass.git ./vendor/bemit/formantasass
git clone https://bitbucket.org/bemit_eu/formantasass-core.git ./vendor/bemit/formantasass-core
```

### Download

- FormantaSass
    - [master zip](https://bitbucket.org/bemit_eu/formantasass/get/master.zip)
    - [develop zip](https://bitbucket.org/bemit_eu/formantasass/get/develop.zip)
- FormantaSass-Core
    - [master zip](https://bitbucket.org/bemit_eu/formantasass-core/get/master.zip)
    - [develop zip](https://bitbucket.org/bemit_eu/formantasass-core/get/develop.zip)
    
## Ready To Use

For example, integrated in [`Flood\Canal`](https://painttheweb.de/flood-canal/setup-and-run-a-project)

### Licence

This project is free software distributed under the terms of two licences, the CeCILL-C and the GNU Lesser General Public License. You can use, modify and/ or redistribute the software under the terms of CeCILL-C (v1) for Europe or GNU LGPL (v3) for the rest of the world.

This file and the LICENCE.* files need to be distributed and not changed when distributing.

> For more informations on the licences which are applied read: [LICENCE.md](LICENCE.md)

### Information, Support and Documentation

More informations, contacts and support for FormantaSass could be found under <https://formanta.bemit.eu> the documentation is located at <https://help.formanta.bemit.eu>.

# Made by

Michael Becker, mb@project.bemit.eu

The Logo was made by friends of Born & Partner <http://werbeagentur-born.de>

## Copyright

    2015 - 2018 | Michael Becker, bemit UG (haftungsbeschränkt) - project@we.bemit.eu