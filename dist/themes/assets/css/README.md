# Anki theme: Styles
## Tomorrow light and Monokai

- [Home](../../../../README.md)
  - **THEME**
    - [Simple Anki theme](../../README.md#simple-theme)
    - [Puzzle Anki theme](../../README.md#puzzle-theme)
      - [Deck example](../../../deck/README.md)
      - [Notes](../../README.md#notes)
  - **THEME COLOURS**
    - [Basic highlighting](#)
    - [Automatic highlighting](#automatic-syntax-highlighting-with-pygments)


## Basic styling

For basic styling of your html, css, python or your programming language of choice, you can use simple [HTML5 tags](https://developer.mozilla.org/en/docs/Web/HTML/Element) to add colour to your code. These work out of the box with `☆ Syntax (inline code)` and `♘ Puzzle (inline code)` (you don't need to add a `<code>` tag to these fields). For all other code you want to highlight, wrap in `<code>` or `<pre><code>` to get the pretty colours!

- Default colour is white
- `<b>` or `<strong>` for operators (`if`, `and`, `>=`, `print` etc)
- `<i>` or `<em>` for an `int` or `float`
- `<s>` or `<u>` for a `string`
- `<span>` or `<sup>` for keywords (`function`, `class`)
- `<var>` or `<sub>` for arguments (`args`, `variables`)
- `<small>` for `# comments`

- `<q>` wildcard (could be used for css `class` for instance)
- `<mark>` wildcard (could be used for a specific `highlight`)

### Changing the default theme

I'm using `Less` to generate the `main.css` file from `src/assets/less/main.less` — refer to code and comments there. The colour scheme is set with variables in `src/assets/less/theme/code.less` and `src/assets/less/theme/pre.less`, it's best to create your own variables file to avoid losing changes when updating the theme:

- Copy `@theme-dark-` and `@theme-light-` variables into `my-variables.less`.
- Add `my-variables.less` as the last @include in `main.less`.
- Recompile the `main.css` file using [Codekit](https://incident57.com/codekit/) (or [Gulp](http://gulpjs.com)).



## Automatic syntax highlighting with Pygments

_Previous versions of **Anki Theme** used [highlight.js](https://highlightjs.org/). It's an amazing plugin, but [proved too unreliable](https://github.com/badlydrawnrob/anki/issues/21) to be useful. ["Practicality beats purity"](https://www.python.org/dev/peps/pep-0020/#id3)._

Anki Theme now provides styles for use with [Pygments](http://pygments.org/). You can either convert Markdown to pygments [with a plugin](https://ankiweb.net/shared/info/162313389), or [via the command line](https://pythonhosted.org/Markdown/extensions/code_hilite.html).

### Step 1

1. Download the [power format pack](https://ankiweb.net/shared/info/162313389) for Anki. It's a great plugin that speeds up your workflow, allowing you to quickly convert Markdown to HTML.
2. By default, the plugin uses inline styles, not the standard Pygments classes. Follow [this guide](https://github.com/Neftas/supplementary-buttons-anki/issues/87) to force pygments to output properly.

> If you prefer using stock Anki, you can use [Python Markdown](https://pythonhosted.org/Markdown/) and it's [codehilite plugin](https://pythonhosted.org/Markdown/extensions/code_hilite.html) to generate your code blocks.

### Step 2

Ok, so that's the hard part over. Next, it's as simple as ...

1. Write your code as [Markdown fenced code blocks](https://help.github.com/articles/github-flavored-markdown/#fenced-code-blocks).
2. Hit the Markdown button <kbd>M↓</kbd> on your new plugin's control panel.
3. That's it. You're done. Did you expect more steps?!

You don't have to keep a backup, as Power Format Pack handles this for you (using a checksum, so even if you delete the plugin, your code is safe!). You can always keep a backup in the `✎ Markdown` field provided — here you can store raw markdown or a link to the original code (Github gist for example).


### Changing the Pygments theme:

See [Changing the default theme](#changing-the-default-theme). If you have specific needs, you can create your own `pygments.less` file:

1. Compile your prefered theme [via the command line with Pygments](http://pygments.org/docs/cmdline/#generating-styles)
2. Rename the file to `my-pygments.less`, add to `src/assets/less/theme/` folder
  - Add in the `@theme-dark-` variables if required.
3. Recompile `main.less`.
4. Done!
