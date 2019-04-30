# Themes

- [Home](../../../README.md)
    - Cards
      + [Simple](../simple/index.md)
      + [Missing!](../missing/index.md)
    - Themes
      + **[Syntax highlighting](../highlight/index.md)**


> **Default colors**: [Solarized light](https://ethanschoonover.com/solarized/) and [Monokai](https://www.monokai.pro)



## Basic syntax highlighting

This allows you to highlight code quickly, but is not [full highlighting](#full-syntax-highlighting). It uses simple [HTML5 tags](https://developer.mozilla.org/en/docs/Web/HTML/Element) to add colour to your code.

Works with any `<pre>` or `<code>` block:

1. **Highlight**:
    + `<b>` or `<strong>`
2. **Lowlight**:
    + `<i>` or `<em>`



## Full syntax highlighting

### The easy way

Anki Theme provides styles for use with [Pandoc](https://pandoc.org/try/), to generate full color syntax highlighting: 

1. Write your code as [Markdown fenced code blocks](https://help.github.com/articles/github-flavored-markdown/#fenced-code-blocks)
2. Convert [Markdown to HTML online](https://bit.ly/2XURJkd)
3. Add a card in Anki
4. Choose a field and navigate to: `☰ -> Edit html`
5. Paste your code, then close `Edit html`
6. Repeat the process — save your card!

That's it. You're done. Simple, right?!

### The "proper" way

> Requires [Homebrew](https://brew.sh) and [Pandoc](https://pandoc.org/).

1. Write your code as [Markdown fenced code blocks](https://help.github.com/articles/github-flavored-markdown/#fenced-code-blocks) in a `file.md`
2. `brew install pandoc`
3. `pandoc file.md`
4. Follow steps `3—6` above

If you've [installed the Anki theme](../../../README.md#advanced), <s>!= do something</s>


## Backup your code

For the risk-averse, you can keep `raw text` in the `✎ Markdown` field provided — here you can store raw markdown, or a link to the original code (Github gist for example).



## Customising themes

Anki themes should be _extended_ with `npm`, **not** edited directly.

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

#### The easy way

Override the [css variables](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties) (see `colors.less` and `typography.less`) — in Anki:

- `Browse`
- Select `Anki theme ...`
- Press `Cards...` button
- Add your changes in `Styling` field (at the bottom)
- Repeat for each Card Type

You'll need to do this everytime you install the deck.

#### The "proper" way

Follow installation directions on [custom theme](../../../README.md#advanced) first.

1. Copy `config.less` and `main.less` to your own repo
2. Copy `colors.less` and any others you'd like to change
2. Change the [css variables](../source/_global/_root.less)
3. Recompile the css with `npm run css`
4. Add to card type as [shown above](#css-variables)


### Create your own card or theme

You're mostly on your own here, for now. But if you're a skilled dev, you'll figure it out :)

- Follow the [installation instructions](../../../README.md#advanced) first.
- Use the `source/themes/cards/...` as a starting point
- Create your own HTML and [Less](http://lesscss.org)
- Preview with [Mustache](https://www.npmjs.com/package/mustache)
- Compile with `npm run build`

