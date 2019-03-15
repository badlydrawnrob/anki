# Anki theme: Styles

- [Home](../../README.md)
    - [Simple](./simple.md)
    - [Cloze](./cloze.md)
    - [Syntax highlighting](./themes.md)

**Default colors**: Solarized light and Monokai (modified)



## Basic highlighting

This allows you to highlight code quickly, but is not [full highlighting](#full-syntax-highlighting). It uses simple [HTML5 tags](https://developer.mozilla.org/en/docs/Web/HTML/Element) to add colour to your code.

Works with any `<pre>` or `<code>` blocks:

1. **Highlight**:
    + `<b>` or `<strong>`
2. **Lowlight**:
    + `<i>` or `<em>`



## Full syntax highlighting

### The easy way

Anki Theme provides styles for use with [Pandoc](https://pandoc.org/try/). 

1. Write your code as [Markdown fenced code blocks](https://help.github.com/articles/github-flavored-markdown/#fenced-code-blocks).
2. Convert Markdown to HTML online
3. Add it to your card

That's it. You're done. Did you expect more steps?!

### The "proper" way

Install [Anki theme](../../README.md#advanced) to build automatically, or:

- `brew install pandoc`
- `pandoc`

### Always backup

For the risk-averse, you can keep a backup in the `✎ Markdown` field provided — here you can store raw markdown or a link to the original code (Github gist for example).



## Customising themes

The repo should be _extended_ with `npm`, **not** edited directly.

### Change colors

For quick customisations, view these files:

```text
source
│
└───_global
    │   config.less
    │   main.less
    │
    └───modules
          _root.less
          colors.less
          typography.less
```

#### CSS variables

##### The easy way

Override the [css variables](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties) (see `colors.less` and `typography.less`) in Anki:

- `Browse`
- Select `Anki theme ...`
- Press `Cards...` button
- Add your changes in `Styling` field (at the bottom)
- Repeat for each Card Type

You'll need to do this everytime you install the deck.

##### The "proper" way

Follow installation directions on [custom theme](../../README.md#advanced) first.

1. Copy `config.less` and `main.less` to your own repo
2. Copy `colors.less` and any others you'd like to change
2. Change the [css variables](../source/_global/_root.less)
3. Recompile the css with `npm run css`
4. Add to card type as [shown above](#css-variables)


### Create your own card or theme

You're mostly on your own here, for now. But if you're a skilled dev, you'll figure it out :)

- Use the `source/themes/cards/...` as a starting point
- Create your own HTML and [Less](http://lesscss.org)
- Preview with [Mustache](https://www.npmjs.com/package/mustache)
- Compile with `npm run build`

