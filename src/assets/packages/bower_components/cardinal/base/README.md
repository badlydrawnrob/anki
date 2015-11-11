# Cardinal Base

The `base/` directory houses all of the essential styles that build the foundation for this framework.

Without `base/`, this framework **will not work correctly.** It is the only required part of Cardinal.

# Table of Contents

- [Overview](#overview)
- [Variables](#variables)
- [Mixins](#mixins)
  - [.to-rem()](#to-rem)
  - [Media Queries](#media-queries)
- [normalize.css](#normalize-css)
- [Reset](#reset)
- [Debug](#debug)
- [Default Styles](#default-styles)
  - [Root](#root)
  - [Anchors](#anchors)
  - [Text Elements](#text-elements)
  - [Headings](#headings)
  - [Lists](#lists)
  - [Horizontal Rules](#horizontal-rules)
  - [Code](#code)
  - [Embedded Content](#embedded-content)
  - [Form Elements](#form-elements)
  - [Tables](#tables)
  - [Print](#print)

# Overview

Cardinal Base provides a solid foundation for the framework, including things like:

- Useful LESS [variables](https://github.com/cbracco/cardinal/blob/master/base/variables.less) and [mixins](https://github.com/cbracco/cardinal/tree/master/base/mixins)
- [normalize.css](https://github.com/necolas/normalize.css)
- a [thin reset layer](https://github.com/cbracco/cardinal/blob/master/base/reset.less) on top of normalization
- Sensible default styles for common HTML elements

# Variables

Cardinal stores all of its LESS variables in a single file aptly named `variables.less`. These variables provide some good default settings for any project, but you can easily customize them to suit your needs.

The recommended way to include Cardinal in your project is by using the [Bower package manager](http://bower.io/). In doing so, you will never have to modify Cardinal directly (which makes updating the project as simple as `bower update --save cardinal`).

Instead, you should create your own `variables.less` file in your project’s LESS directory which includes the variables you would like to modify, and include it in your main LESS stylesheet **after** you include Cardinal, like so:

```
// your-project.less

//
// Vendor
//

@import url("../../path/to/bower_components/cardinal/cardinal.less");

//
// Project
//

@import url("variables.less");
```

# Mixins

A handful of useful LESS mixins are included with Cardinal, several of which are **required** for this framework to function properly. The required mixins are outlined below:

## .to-rem()

The `.to-rem()` mixin is a simple yet powerful function that converts all unitless pixel values to REM units, with a pixel fallback version.

This mixin is used to convert unitless pixel values  stored in `variables.less` to REM units.

### Usage

```
$unitless-pixel-value: 45;

.selector {
  .to-rem(left, $unitless-pixel-value);
  .to-rem(padding, 10 5 12);
  .to-rem(border, 1, solid green);
  .to-rem(box-shadow, 1 1 0 -1, rgba(0, 0, 0, 0.3));
  .to-rem(margin, 30 auto 0);
}
```

## Media Queries

The `media-queries.less` file includes a handful of useful mixins that speed up the writing and usage of `@media` queries in your project.

These mixins correspond to the screen sizes declared in `variables.less`. Overriding those variables in your project will also change the values for these mixins.

### Usage

There are mixins for both `min-width` and `max-width` query scenarios, as well as specific intervals (e.g. "Small only").

```
// Small only
// @media (min-width: @screen-sm-min)
// and (max-width: @screen-sm-max)

.screen-sm({
  .selector {
    color: blue;
  }
});

// Medium and up
// @media (min-width: @screen-md-min)

.screen-md-min({
  .selector {
    color: blue;
  }
});

// Extra-large and down
.screen-xl-max({
  .selector {
    color: green;
  }
});
```

If you want to change the styles for a selector at all the declared screen sizes, you can use the `.screen()` mixin to chain these `@media` queries together, like so:

```
.my-element {
  .screen({
    color: red;    // xs and up
  },{
    color: green;  // sm and up
  },{
    color: yellow; // md and up
  },{
    color: purple; // lg and up
  },{
    color: blue;   // xl and up
  },{
    color: orange; // xxl and up
  });
}
```

# normalize.css

Cardinal includes the 3rd-party library [normalize.css](https://github.com/necolas/normalize.css), which makes browsers render all elements more consistently and in line with modern web standards.

# Reset

On top of [normalize.css](https://github.com/necolas/normalize.css), Cardinal includes a light reset layer to add even more consistency to the framework.

- All elements inherit `box-sizing: border-box;` property from the `<html>` element ([more info](http://cbrac.co/RQrDL5)).
- Remove margins, paddings, and borders from HTML elements ([more info](http://cbrac.co/1Ev9etR)).
- Remove default border for `<iframe>` elements ([more info](http://cbrac.co/1CVyNTj)).
- Remove `:focus` outline on links that cannoy be accessed via keyboard ([more info](http://cbrac.co/1Evazku)).

# Debug

**This stylesheet is for development use only.** Do not include it in your production code/build. It can help you visually detect any nesting issues, invalid markup, or inaccessible code in your project. It is commented out by default, so you will have to explicitly include it in your project’s main LESS file, like so:

```
// your-project.less

//
// Vendor
//

@import url("../../path/to/bower_components/cardinal/cardinal.less");
@import url("../../path/to/bower_components/cardinal/less/base/debug.less");

//
// Project
//

...
```

([more info](http://cbrac.co/1C01g8C))

# Default Styles

After [normalize.css](https://github.com/necolas/normalize.css) and a light reset, Cardinal sets some more default styles for common HTML elements.

## Root

Root defines core styles for the `<html>` element, such as default font family, font size, line height, background and text colors, forcing vertical scrollbars in IE, and more.

It also ensures the `<body>` element is at least the viewport height, sets a consistent margin for common elements to maintain a vertical rhythm, adds word-wrapping and basic hyphenation to common elements, and sets default `:focus` styles for the framework.

## Anchors

[View Demo](http://codepen.io/cbracco/pen/BNKNBo)

Default anchor link styles for this framework reside here.

## Text Elements

[View Demo](http://codepen.io/cbracco/pen/jPqPqm)

This file adds some opinionated default styles for inline text elements, such as adding the appropriate `cursor` styles to `<abbr>` elements, and adding `text-decoration: line-through` styles to `<del>` elements.

## Headings

[View Demo](http://codepen.io/cbracco/pen/PqNqzP)

Headings help break up blocks of text and visual content into consumable chunks, and Cardinal includes some default headings styles to facilitate better readability from the get-go.

## Lists

[View Demo](http://codepen.io/cbracco/pen/vOGOXB)

List elements like `<dl>`, `<ul>`, and `<ol>` also get their own default styles to provide a more consistent experience across browsers.

## Horizontal Rules

[View Demo](http://codepen.io/cbracco/pen/yNONaP)

`<hr>` elements also help break up text and visual content into consumable chunks, and Cardinal normalizes the styling of this element so it displays consistently across browsers.

```
hr {
  display: block;
  padding: 0;
  border: 0;
  .to-rem(border-top, @hr-border-width, @hr-border-style @hr-border-color);
}
```

## Blockquotes

[View Demo](http://codepen.io/cbracco/pen/doMopE)

Depending on the type of project, you may never have a use for the `<blockquote>` element, but Cardinal provides some light styling to this element just in case.

The styles are set up for the preferred use case for the `<blockquote>` element, demonstrated below ([more info](http://cbrac.co/18LWCOw)):

```
<blockquote>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit nihil neque distinctio aliquid esse similique et placeat, consequatur hic quas earum sequi nulla voluptas facilis provident eos ab aperiam nisi!</p>
  <p>Aperiam tempora veritatis in, officia eos recusandae debitis culpa saepe quam, sapiente, asperiores quidem est nulla consequatur sint earum pariatur dolore neque ipsum. Eum earum possimus, voluptates, numquam veniam tempora!</p>
  <footer>
    <cite>
      <a href="#!">Citation Name</a>
    </cite>
  </footer>
</blockquote>
```

## Code

[View Demo](http://codepen.io/cbracco/pen/gprpLa)

Again, depending on your project, you may never have a use for basic code styles, but they are included just in case.

Cardinal provides some simple styling to common HTML elements that are used to display programming language code, such as `<kbd>`, `<code>`, and `<pre>`.

## Embedded Content

[View Demo](http://codepen.io/cbracco/pen/pJyJNW)

Cardinal also includes some basic fixes and styles for embedded content (e.g. images, HTML5 audio & video, iframe, canvas, and SVG).

Embedded content elements are responsive out-of-the-box, by simply declaring `width: 100%` on these elements. Images and several other elements can resize automatically, and images will maintain their aspect ratio by way the following:

```
embed,
img,
object,
video {
  max-width: 100%;
  height: auto;
}

embed,
object {
  height: 100%;
}
```

Some basic styles are also given to `<figure>` and `<figcaption>` elements, just in case you need it.

## Form Elements

[View Demo](http://codepen.io/cbracco/pen/xGVGqm)

Forms are notoriously finicky, so this base file aims to remove and normalize the form experience before any major aesthetic design decisions are made.

## Tables

[View Demo](http://codepen.io/cbracco/pen/QbNbvg)

Similarly to forms, tables can be difficult to style correctly. This file corrects some table oddities to make the basic table element behave more consistently across browsers.

## Print

A default `@print` stylesheet is also included in Cardinal, which is an almost-exact copy of the [HTML5 Boilerplate print styles](http://cbrac.co/1PgyYR2).

These styles are inlined to avoid an extra HTTP request.
