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


### Less

I'm using `Less` to generate the `css/main.css` file from `src/assets/less/main.less` — refer to code and comments there. Quickly change the colour scheme by changing or creating your own variables in `src/assets/less/theme.less` and recompiling the css file.

## Basic styling

For basic styling of your html, css, python or your programming language of choice, you can use simple [HTML5 tags](https://developer.mozilla.org/en/docs/Web/HTML/Element) to add colour to your code. These work out of the box with `(inline code)`, as they're already wrapped in `<code>` tag. For all other code you want to be highlighted, wrap in `<code>` or `<pre><code>` to get the pretty colours!

- Default colour is white
- `<b>` or `<strong>` for major symbols (`if`, `and`, `>=`, `print` etc)
- `<i>` or `<em>` for an `int` or `float`
- `<s>` or `<u>` for a `string`
- `<span>` or `<sup>` for minor highlights (`function`, `class`)
- `<var>` or `<sub>` for minor higlights (`args`, `variables`)
- `<small>` for `# comments`.

- `<q>` wildcard (could be used for css `class` for instance)
- `<mark>` wildcard (could be used for a specific `highlight`)



## Automatic syntax highlighting with highlight.js
**BETA** Currently works reliably on iOS. You'll need to add the code in `js/highlight.js` on every card in the ***front*** section. You'll need to wrap it in `<script> ... </script>` tags.

<!-- ![Marked App syntax highlighting with highlight.js](../../img/marked-app-inspector.png)

*Quickly generate syntax highlighting with Marked App* -->

Styling our code with HTML5 tags is pretty efficient with the Anki wysiwyg, but can get a little tedious when working with larger code blocks. **Enter [highlight.js](https://highlightjs.org/)**! It's as easy as 1, 2, 3:

1. Write your code as [Markdown fenced code blocks](https://help.github.com/articles/github-flavored-markdown/#fenced-code-blocks)
2. Generate the HTML with [Marked App](http://marked2app.com/help/Special_Features/For_Programmers.html)
  - If you're on Linux or PC, you can use an [any markdown editor that utilises highlight.js](http://jbt.github.io/markdown-editor/)
  - The syntax should be detected automatically, but you can specify a language if you prefer using the following syntax: <pre><code>```python```</pre></code>
3. Copy and paste into any `* (code block or image)` field.
   - Including everything from `<pre><code>` to `<code></pre>`

It's wise to keep a backup for easy editing, so I've added a `✎ Markdown` field in both the **Simple** and **Complex** themes — here you can store raw markdown or a link to the original code (Github gist for example).



### Changing the theme:

1. Download your prefered theme from [highlight.js](https://highlightjs.org/download/)
2. Replace the `less/highlight.less` file with your chosen theme
  - Or, change the `less/variables.less` `@theme-dark-` colors
3. Recompile the `css/main.css`
4. Done!
