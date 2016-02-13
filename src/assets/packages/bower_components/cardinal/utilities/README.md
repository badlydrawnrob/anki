# Cardinal Utilities

The `utilities/` directory houses all the helper classes included in Cardinal.

Utilities are typically used for rapid prototyping, or a last resort when needing to apply styles to an element.

# Table of Contents

- [Overview](#overview)
- [Included Utilities](#included-utilities)
  - [Display](#display)
  - [Floats](#floats)
  - [Font Sizes](#font-sizes)
  - [Margins](#margins)
  - [Paddings](#paddings)
  - [Positions](#positions)
  - [Text Alignment](#text-alignment)
  - [Vertical Alignment](#vertical-alignment)
  - [Visually Hidden](#visually-hidden)
  - [Font Sizes](#font-sizes)
  - [Widths](#widths)
  - [Z-Index](#z-index)
- [Credits](#credits)

# Overview

Utilities apply common CSS styles either as a single declaration or a very simple, common pattern of styles.

In Cardinal, all utilities are **optional** except for [width utility classes](https://github.com/cbracco/cardinal/blob/master/utilities/widths.less), but that is only if you plan on also using Cardinal’s [grid layout tools](https://github.com/cbracco/cardinal/blob/master/layout/grids.less), which depend on those utilities.

- Utilities should only ever affect one element.
- Utilities do not typically affect child elements.
- Utilities should follow the [single responsibility principle](http://cbrac.co/1KFzLUY) and the [open/closed principle](http://en.wikipedia.org/wiki/Open/closed_principle) whenever possible.

Cardinal utilities have a very simplistic and minimal naming convention that is pretty specific to itself. Each utility file includes a brief legend at the top of the file to help describe what each letter combination represents.

Many utilities also include breakpoint-specific modifer classes e.g. `.lg-dn`, `.xs-fl`, etc.

# Included Utilities

## Display

[View Demo](http://codepen.io/cbracco/pen/Xbdbqy)

Display utilities allow you to manipulate the `display` property of a given element.

### Usage

```
<!-- Hides the given element on devices large and up -->
<div class="lg-dn">You can’t see me on devices large and up!</div>
```

## Floats

[View Demo](http://codepen.io/cbracco/pen/doMojy)

Display utilities allow you to manipulate the `float` property of a given element.

### Usage

```
<!-- Floats the given element to the right on devices medium and up -->
<div class="md-fr">I am floated to the right on devices medium and up!</div>
```

## Font Sizes

[View Demo](http://codepen.io/cbracco/pen/WvwvKZ)

Font Size utilities allow you to manipulate the `font-size` property of a given element.

### Usage

```
<!-- Increase the given element’s font size -->
<div class="fz--- xs-fz-- sm-fz- md-fz lg-fz+ xl-fz++ xxl-fz+++">My font size changes from small to big depending on device size!</div>
```

## Margins

[View Demo](http://codepen.io/cbracco/pen/qdZdye)

Margin utilities allow you to manipulate the `margin` property of a given element.

### Usage

```
<!-- Increase the given element’s top margin on devices large and up -->
<div class="mt lg-mt++">My top margin increases on devices large and up!</div>
```

## Paddings

[View Demo](http://codepen.io/cbracco/pen/QbNbVa)

Padding utilities allow you to manipulate the `padding` property of a given element.

### Usage

```
<!-- Increase the given element’s left padding on devices medium and up -->
<div class="pl md-pl+">My left padding increases on devices medium and up!</div>
```

## Positions

[View Demo](http://codepen.io/cbracco/pen/EjKjeM)

Position utilities allow you to manipulate the `position` property of a given element.

### Usage

```
<!-- Change the given element’s positioning from static (default) to fixed on devices small and up -->
<div class="sm-pf">My positioning changes from static to fixed on devices small and up!</div>
```

## Text Alignment

[View Demo](http://codepen.io/cbracco/pen/KpzpGo)

Text Alignment utilities allow you to manipulate the `text-align` property of a given element.

### Usage

```
<!-- Change the given element’s text alignment from left (default) to center on devices extra-large and up -->
<div class="xl-tc">My text alignment changes from left to center on devices extra-large and up!</div>
```

## Vertical Alignment

[View Demo](http://codepen.io/cbracco/pen/aONORx)

Vertical Alignment utilities allow you to manipulate the `vertical-align` property of a given element.

### Usage

```
<!-- Change the given element’s vertical alignment from baseline (default) to middle on devices extra-small and up -->
<div class="xs-vam">My text alignment changes from left to center on devices extra-small and up!</div>
```

## Visually Hidden

[View Demo](http://codepen.io/cbracco/pen/RPaPqa)

Visually Hidden utilities allow you to manipulate the visibility of a given element.

### Usage

```
<!-- Hide only visually, but have it available for screenreaders. -->
<div class="vh">You cannot see me visually, but I am still accessible to screenreaders.</div>
<!-- Hide only visually, but have it available for screenreadersa and also focusable when navigating with the keyboard. -->
<div class="vh focusable">You cannot see me visually, but I am still accessible to screenreaders and also focusable when navigating with the keyboard.</div>
```

## Widths

[View Demo](http://codepen.io/cbracco/pen/MwywzB)

Width utilities allow you to manipulate the `width` property of a given element.

### Usage

```
<!-- Change the given element’s width from 100% (default) to 50% on devices extra-small and up -->
<div class="1/1 xs-1/2">My width changes from 100% to 50% on devices extra-small and up!</div>
```

## Z-Index

[View Demo](http://codepen.io/cbracco/pen/waGaRq)

Z-Index utilities allow you to manipulate the `z-index` property of a given element.

### Usage

```
<!-- Change the given element’s z-index from 1 to 7 on devices small and up -->
<div class="z1 sm-z7">My z-index changes from 1 to 7 on devices small and up!</div>
```

# Credits

Cardinal’s utilities are influenced by the following projects, organizations, and individuals:

- [inuit.css](https://github.com/inuitcss/) ([@csswizardry](https://github.com/csswizardry/))
- [TACHYONS](http://tachyons.io/) ([@mrmrs](https://github.com/mrmrs/))
- [Scally](https://github.com/chris-pearce/scally/) ([@chris-pearce](https://github.com/chris-pearce/))

Many thanks for your hard work and great ideas!
