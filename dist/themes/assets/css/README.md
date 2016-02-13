# Anki theme: Styles
## Tomorrow light and Monokai

- [Home](../../../../README.md)
  - **THEME**
    - [Simple Anki theme](../../README.md#basic-field-template)
    - [Complex Anki theme](../../README.md#complex-theme)
      - [Deck example](../../../dist/deck/README.md)
      - [Notes](../README.md#notes)
  - **THEME COLOURS**
    - [Basic highlighting](#)
    - [Automatic highlighting](#automatic-syntax-highlighting-with-highlightjs)


## Basic styling

For basic styling of your html, css, python or your programming language of choice, you can use simple [HTML5 tags](https://developer.mozilla.org/en/docs/Web/HTML/Element) to add colour to your code. These work out of the box with `(inline code)`, as they're already wrapped in `<code>` tag. For all other code you want to be highlighted, wrap in `<code>` or `<pre><code>` to get the pretty colours!

- Default colour is white
- `<b>` or `<strong>` for major symbols (`if`, `and`, `>=`, `print` etc)
- `<i>` or `<em>` for an `int` or `float`
- `<s>` or `<u>` for a `string`
- `<span>` or `<sup>` for minor highlights (`function`, `class`)
- `<var>` or `<sub>` for minor higlights (`args`, `variables`)
- `<small>` for `# comments`

- `<q>` wildcard (could be used for css `class` for instance)
- `<mark>` wildcard (could be used for a specific `highlight`)

### Changing the default theme

I'm using `Less` to generate the `main.css` file from `src/assets/less/main.less` — refer to code and comments there. The colour scheme is set with variables in `src/assets/less/theme/code.less` and `src/assets/less/theme/pre.less`, it's best to create your own variables file to avoid losing changes when updating the theme:

- Copy `@theme-dark-` and `@theme-light-` variables into `my-variables.less`.
- Add `my-variables.less` as the last @include in `main.less`.
- Recompile the `main.css` file using [Codekit](https://incident57.com/codekit/) (or [Gulp](http://gulpjs.com)).



## Automatic syntax highlighting with highlight.js
**BETA** Currently works reliably on iOS. You'll need to add the code in `js/highlight.js`, wrapped in `<script> ... </script>` tags, on every card in the ***front*** section after the template code.

<!-- ![Marked App syntax highlighting with highlight.js](../../img/marked-app-inspector.png)

*Quickly generate syntax highlighting with Marked App* -->

Styling our code with HTML5 tags is pretty efficient with the Anki wysiwyg, but can get a little tedious when working with larger code blocks. **Enter [highlight.js](https://highlightjs.org/)**! It's as easy as 1, 2, 3:

1. Write your code as [Markdown fenced code blocks](https://help.github.com/articles/github-flavored-markdown/#fenced-code-blocks).
2. Generate the HTML with [Marked App](http://marked2app.com/help/Special_Features/For_Programmers.html).
  - If you're on Linux or PC, you can use an [any markdown editor that utilises highlight.js](http://jbt.github.io/markdown-editor/).
  - The syntax should be detected automatically, but you can specify a language if you prefer like this: **```python**.
3. Copy and paste into any `* (code block or image)` field:
   - Including everything from `<pre><code>` to `<code></pre>`.

It's wise to keep a backup for easy editing, so I've added a `✎ Markdown` field in both the **Simple** and **Complex** themes — here you can store raw markdown or a link to the original code (Github gist for example).

#### Disable highlighting

Some fields may contain code with [Basic styling](#basic-styling), which `highlight.js` may intefere with. To disable styling for individual code blocks, use the `nohighlight` class:

```html
<pre><code class="nohighlight">...</code></pre>
```



### Changing the highlight.js theme:

See [Changing the default theme](#changing-the-default-theme). If you have specific needs, you can create your own `highlight.less` file:

1. Download your prefered theme from [highlight.js](https://highlightjs.org)
2. Replace the `less/highlight.less` file with `my-highlight.less`.
  - Add in the `@theme-dark-` variables if required.
3. Recompile `main.css`.
4. Done!
