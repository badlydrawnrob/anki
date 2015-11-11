# Cardinal

Build more with less.

- [Go to Website](http://cardinalcss.com)
- [Review the CHANGELOG](https://github.com/cbracco/cardinal/blob/master/CHANGELOG.md)

# Table of Contents

- [What is Cardinal?](#what-is-cardinal)
- [Principles](#principles)
- [Features](#features)
- [Dependencies](#dependencies)
- [Getting Started](#getting-started)
  - [Package Managers](#package-managers)
    - [Updating Cardinal](#updating-cardinal)
  - [LESS Plugin](#less-plugin)
  - [Direct Download](#direct-download)
- [Customizing](#customizing)
  - [Including Partials](#including-partials)
  - [Modifying Variables](#modifying-variables)
- [Further Documentation](#further-documentation)
- [Browser Support](#browser-support)
- [Contributing](#contributing)
- [Versioning](#versioning)
- [License](#license)
- [Credits](#credits)

# What is Cardinal?

Cardinal is a modular, “mobile-first” CSS framework built with performance and scalability in mind.

The purpose of this framework is to make it easier for front-end web developers to prototype, build, scale, and maintain CSS for responsive websites, user interfaces, and applications. Cardinal omits many aesthetic design decisions that often bog down other CSS frameworks (which are often [UI toolkits, not frameworks](https://speakerdeck.com/csswizardry/what-is-a-css-framework-anyway)), leaving the design and creativity up to you.

# Principles

Cardinal adheres to the following principles whenever possible:

- **[Open / Closed](http://en.wikipedia.org/wiki/Open/closed_principle):** Styles should be open for extension, but closed for modification. Avoid styles that are highly specific to context.
- **Reuse:** Content-agnostic, modular styles allow for design flexibility and will have a longer lifespan.
- **Don’t Make Assumptions:** Try not to make too many assumptions too early, because design and development are both iterative processes.
- **Clarity Over Cleverness:** Avoid creating styles that have ambiguous applications, or are rarely used. Obvious styles are easier for humans to internalize, and will be more widely adopted.

# Features

- “Mobile-first” CSS written for the [LESS preprocessor](http://lesscss.org/)
- [normalize.css](https://github.com/necolas/normalize.css)
- Sensible global styles, variables, and useful mixins
- A flexible grid system and encapsulated styles for common UI objects (buttons, forms, tables, etc.)
- A collection of utility classes optimized for great gzip compression
- The entire framework, minified and gzipped, clocks in at a mere **11.27kB**

# Dependencies

If you would like to install Cardinal with the [Bower](http://bower.io/) package manager tool, you will first need to install [Node.js](http://nodejs.org/) on your machine or server. Once you have Node.js installed, make sure npm is installed ([info here](http://blog.npmjs.org/post/85484771375/how-to-install-npm)), and use it to install Bower, like so:

```
npm install -g bower
```

Also, Cardinal depends on the awesome tool [Autoprefixer](https://github.com/postcss/autoprefixer), which adds the proper vendor prefixes that provide the [specified browser support](#browser-support) for this project. This way, you don’t have to worry about manually including the correct prefixes while writing LESS/CSS. You are encouraged to incorporate Autoprefixer into your build process (this is easy to do with tools like [Grunt](http://gruntjs.com/) or [Gulp](http://gulpjs.com/)).

# Getting Started

There are several ways that you can use Cardinal in your new and existing web projects.

## Package Managers

The fastest way to get up-and-running with Cardinal is by using a package manager, like so:

**Bower**

Run the following commands from your terminal:

```
cd your-project-directory
bower install --save cardinal
```
Once installed, you can find Cardinal here:

```
your-project-directory
│
└───bower_components
    │
    └───cardinal
```

### Updating Cardinal

With Bower, you can easily grab the latest version of Cardinal by running the following command:

```
bower update cardinal
```

**NOTE:** This is the recommended way to use Cardinal. It should never be edited directly so you can keep it updated. Instead of modifying Cardinal’s source, you are encouraged `@import` Cardinal into your own `your-project.less` file and create your own `.less` files where you can override default variables and extend styles.

## LESS Plugin

There is also a [LESS.js plugin available](https://github.com/bassjobsen/less-plugin-cardinal) for Cardinal, created and maintained by [@bassjobsen](https://github.com/bassjobsen). You can use this plugin to include Cardinal in your project before your custom project code.

**Installation**

```
npm install less
npm install less-plugin-cardinal
```

**Usage**

```
lessc custom.less --cardinal
```

## Direct Download

If you do not want to use a package manager to integrate Cardinal into your project, you can also download it directly:

**Build from Source**

To do so, you need to already have Node.js and npm installed on your machine. Cardinal uses Gulp to build and watch the CSS files.

```
git clone git@github.com:cbracco/cardinal.git
cd cardinal
npm install
gulp
```

**Download the Zip**

You can also download the `.zip` file and proceed however you wish. Include the minified CSS file in the `<head>` of your project, or modify the LESS files directly (not recommended, since it will be difficult to update to future versions). It’s your world!

- [Download the zip](https://github.com/cbracco/cardinal/archive/master.zip)

# Customizing

## Including Partials

The easiest way to include Cardinal in your project is to include the entire thing before your project files, like so:

```
//
// Vendor
//

@import url("../../path/to/bower_components/cardinal/cardinal.less");

//
// Project
//

@import url("project-file.less");
```

However, you don’t have to use the entire Cardinal framework. The only required partials are located in the `base/` directory:

```
//
// Vendor
//

//
// Base
//
// These variables, mixins, and styles are required if you want to use this
// framework, and they should be included in the following order.
//

// Base -> Variables

@import url("base/variables.less");

// Base -> Mixins

@import url("base/mixins/to-rem.less");
@import url("base/mixins/media-queries.less");
@import url("base/mixins/antialiasing.less");
@import url("base/mixins/clearing.less");
@import url("base/mixins/font-face.less");
@import url("base/mixins/momentum-scrolling.less");
@import url("base/mixins/text-truncate.less");
@import url("base/mixins/vertically-centered.less");

// Base -> Normalize

@import url("base/normalize.less");

// Base -> Reset

@import url("base/reset.less");

// Base -> Debug (DO NOT USE THIS STYLESHEET IN PRODUCTION!)

//@import url("base/debug.less");

// Base -> Default Styles

@import url("base/root.less");
@import url("base/anchors.less");
@import url("base/text-elements.less");
@import url("base/headings.less");
@import url("base/lists.less");
@import url("base/horizontal-rules.less");
@import url("base/blockquotes.less");
@import url("base/code.less");
@import url("base/embedded-content.less");
@import url("base/form-elements.less");
@import url("base/tables.less");
@import url("base/print.less");
```

Beyond that, you can use whatever grid system, components, and utilities you would like. The `base/` directory just sets some good base styles for the framework.

## Modifying Variables

After getting started and including Cardinal, you will probably want to begin customizing it to suit your project. Cardinal has a bunch of LESS variables located in the `base/variables.less` file that can be tweaked to your needs. **These variables should not be edited directly.** The recommended way to make changes to Cardinal LESS variables is to create your own project-specific variables file (e.g. `project-variables.less`), and override the default variables in this file, like so:

```
// project-variables.less

// Typography -> Font Sizes -> Base

$font-size: 17;

//
// Typography -> Line height
//

$line-height: 26;
```

This file should be included in your main LESS file after you’ve included Cardinal.

# Further Documentation

There is a `README.md` file included in each major directory of this project that further details the code located in those directories.

- [Base](https://github.com/cbracco/cardinal/tree/master/base)
- [Components](https://github.com/cbracco/cardinal/tree/master/components)
- [Layout](https://github.com/cbracco/cardinal/tree/master/layout)
- [Utilities](https://github.com/cbracco/cardinal/tree/master/utilities)

# Browser support

Cardinal supports most modern browsers:

* Google Chrome 25+
* Mozilla Firefox 19+
* Safari 6.0+
* iOS Safari 6.0+
* Opera 12.1+
* Android 4.2+
* Internet Explorer 9+

## Contributing

Is something broken? Do you have ideas or feature requests? Please [submit an issue](https://github.com/cbracco/cardinal/issues/new) here on GitHub. Or, if you are feeling especially motivated, write some code and submit a pull request!

**IMPORTANT**: Before doing a bunch of work, please consult the [CONTRIBUTING.md document](https://github.com/cbracco/cardinal/blob/master/CONTRIBUTING.md), which gives detailed instructions on how to contribute to this project. If you do not follow the instructions, your code will probably not make it into this project.

## Versioning

Cardinal will be maintained using the [Semantic Versioning](http://semver.org/) guidelines. From here on out, releases will be numbered using the following format:

`major.minor.patch`

* Breaking backwards compatibility increments `major`, while resetting `minor` and `patch`.
* New code that does not break backwards compatibility increments `minor`, while resetting `patch`.
* Bug fixes and other small changes increment `patch`.

## License

Cardinal is licensed under the MIT Open Source license. For more information, see the [LICENSE.md](https://github.com/cbracco/cardinal/blob/master/LICENSE.md) file in this repository.

## Credits

Cardinal is a project by [@cbracco](http://twitter.com/cbracco).
