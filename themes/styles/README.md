# Anki theme: Styles
## Tomorrow light and Monokai

### Less

I'm using `Less` to generate the `css/main.css` file — refer to code and comments there. Quickly change the colour scheme by changing or creating your own variables in `less/theme.less` and recompiling the css file.

### Basic styling

For basic styling of your html, css, python or your programming language of choice, you can use simple [HTML5 tags](https://developer.mozilla.org/en/docs/Web/HTML/Element) to add colour to your code.

- Default colour is white
- `<b>` or `<strong>` for major symbols (`if`, `and`, `>=`, `print` etc)
- `<i>` or `<em>` for an `int` or `float`
- `<s>` or `<u>` for a `string`
- `<span>` or `<sup>` for minor highlights (`function`, `class`)
- `<var>` or `<sub>` for minor higlights (`args`, `variables`)
- `<small>` for `# comments`.

- `<q>` wildcard (could be used for css `class` for instance)
- `<mark>` wildcard (could be used for a specific `highlight`)

These are also handy in `<pre><code>` blocks, as you can highlight specific syntax that you're studying for clarity.


### Super-charged code blocks

Using HTML5 tags is pretty efficient using the Anki wysiwyg, but can get a little tedious when working with larger code blocks. Enter `http://highlightjs.org/`!

I considered using highlight.js within Anki theme cards, but it would prove problematic including javascript [depending on the Anki client](http://ankisrs.net/docs/manual.html#javascript) — far simpler to use a third-party tool, copy and paste the results, then style them with CSS (my js isn't great anyway!). So, in order for this to work:

#### Setting up the theme:

1. Download your prefered theme from [highlight.js](https://highlightjs.org/download/) or [here](http://jmblog.github.io/color-themes-for-highlightjs/)
2. Replace the `less/highlight.less` file with your chosen theme
  - Or, change the `less/variables.less` `theme-dark-` colors
3. Recompile the `css/main.css`
4. Done!

#### Using the theme:

To use the theme you'll need to know about [fenced code blocks](https://help.github.com/articles/github-flavored-markdown/#fenced-code-blocks) with Markdown. They look something like this:

<pre><code>```
def function(args):
  pass
```</code></pre>

You can also specify a language:

<pre></code>```less
.class {
    color: #fff;
    .inner-class {
        color: #000;
    }
}
```</code></pre>

1. Get the [Marked App](http://marked2app.com/help/Special_Features/For_Programmers.html), or find an [online markdown editor that utilises highlight.js](http://jbt.github.io/markdown-editor/)
2. Write your code in Markdown using a [fenced code block](https://help.github.com/articles/github-flavored-markdown/#fenced-code-blocks) in your editor.
  - The syntax should be detected automatically, but you can be specify a language if you prefer
3. View the source code with *inspect element*, or output the html
4. Copy and paste into your `Key point (code block)` or `Puzzle answer (code block)`
   - You'll need everything from `<pre>` to `</pre>`

It's wise to keep a backup for easy editing, so I've added a `Markdown` field in both the [Simple](../simple/README.md) and [Complex](../complex/README.md) themes — here you can store raw markdown or a link to the original code (Github gist for example).


##### Quick links

- [Home](../../README.md)
- [Simple theme](../simple/README.md)
- [Complex theme](../complex/README.md)
- [Deck example](../../deck/README.md)


