# Anki theme: Styles
## Tomorrow light and Monokai

- [Home](../../README.md)
    - **THEMES**
        - [Simple Anki theme](./cards/simple/README.md)
        - [Puzzle Anki theme](./cards/puzzle/README.md)
        - [Cloze Anki theme](./cards/cloze/README.md)
        - [Deck example](../deck/README.md)
    - **THEME COLOURS**
        - [Basic highlighting](#basic-highlighing)
        - [Automatic highlighting](#automatic-syntax-highlighting-with-pygments)


## Basic highlighting

For basic styling of your html, css, python or your programming language of choice, you can use simple [HTML5 tags](https://developer.mozilla.org/en/docs/Web/HTML/Element) to add colour to your code. These work out of the box with `☆ Syntax (inline code)` and `♘ Puzzle (inline code)` (you don't need to add a `<code>` tag to these fields).

For all other code you want to highlight, wrap in `<code>` or `<pre><code>` to get the pretty colours!

Default colour is white.

1. **Operators** [`if`, `and`, `>=`, `print`]:
    + `<b>` or `<strong>`
2. **Strings** and **numbers**:
    + `<i>` or `<em>` [`int`, `float`]
    + `<s>` or `<u>` [`string`]
3. **Keywords** [`function`, `class`]:
    + `<span>` or `<sup>`
4. **Arguments** [`args`, `variables`]:
    + `<var>` or `<sub>`
5. **Comments**:
    + `<small>` for `# comments`
6. **Other**:
    + `<q>` wildcard (could be used for css `class` for instance)
    + `<mark>` wildcard (could be used for a specific `highlight`)

### Changing the default theme

I'm using `Stylus` to generate the `main.css` file from `src/assets/stylus/main.stylus` — refer to code and comments there. The colour scheme is set with variables in `src/assets/stylus/theme/code.stylus` and `src/assets/stylus/theme/pre.stylus`, it's best to create your own variables file to avoid losing changes when updating the theme:

1. Make sure you have the [required dependencies](../../README.md/#requirements) installed.
2. Copy `@theme-dark-` and `@theme-light-` variables into `my-variables.stylus`.
3. Add `variables-custom.stylus` as the last @include in `main.stylus`.
4. Recompile the `main.css` file using [Codekit](https://incident57.com/codekit/) (or [Gulp](http://gulpjs.com)).



## Automatic syntax highlighting with Pygments

Anki Theme provides styles for use with [Pygments](http://pygments.org/). You can either convert Markdown to pygments [with a plugin](https://ankiweb.net/shared/info/162313389), or [via the command line](http://pygments.org/docs/cmdline/).

### Step 1

1. Download the [power format pack](https://ankiweb.net/shared/info/162313389) (_PFP_) for Anki. It's a great plugin that speeds up your workflow, allowing you to quickly convert Markdown to HTML.
2. By default, the plugin uses inline styles, not the standard Pygments classes. To make sure the default styles work properly:
    1. Select `Tools` from the Anki menu
    2. Select `Power format pack` > `options...`
    3. Select `Markdown`
    4. Select the `Use user stylesheet for styling code blocks` option.

> If you'd like to use Markdown, but prefer using stock Anki, try [Python Markdown](https://pythonhosted.org/Markdown/) with it's [codehilite plugin](https://pythonhosted.org/Markdown/extensions/code_hilite.html) to generate your code blocks.

### Step 2

Ok, so that's the hard part over. Next, it's as simple as ...

1. Write your code as [Markdown fenced code blocks](https://help.github.com/articles/github-flavored-markdown/#fenced-code-blocks).
2. Hit the Markdown button <kbd>M↓</kbd> on _PFP_ control panel.
3. That's it. You're done. Did you expect more steps?!

You don't have to keep a backup, as Power Format Pack handles this for you (using a checksum, so even if you delete the plugin, your code is safe!). For the risk-averse, you can always keep a backup in the `✎ Markdown` field provided — here you can store raw markdown or a link to the original code (Github gist for example).


### Changing the Pygments theme:

See [Changing the default theme](#changing-the-default-theme). If you have specific needs, you can create your own `pygments.stylus` file:

1. Compile your prefered theme [via the command line with Pygments](http://pygments.org/docs/cmdline/#generating-styles)
2. Rename the file to `pygments-custom.stylus`, add to `src/assets/stylus/theme/` folder
    - Add in the `@theme-dark-` variables if required.
3. Recompile `main.stylus`.
4. Done!
