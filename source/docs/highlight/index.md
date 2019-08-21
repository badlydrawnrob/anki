# Themes

- [Home](../../../README.md)
    - Cards
      + [Simple](../simple/index.md)
      + [Missing!](../missing/index.md)
    - Themes
      + **[Syntax highlighting](../highlight/index.md)**


> **Default colors**: [Solarized light](https://ethanschoonover.com/solarized/) and [Monokai](https://www.monokai.pro)



## Basic syntax highlighting

You can mark any inline `<code>` with **bold** or _**italic**_ buttons in the Anki editor for basic highlighting. It uses simple [HTML5 tags](https://developer.mozilla.org/en/docs/Web/HTML/Element) to add colour to your code (for [full highlighting](#full-syntax-highlighting) with `<pre>` code blocks, see below).

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

### So, you want more?

Once you've levelled up your programming skills, you can try your hand at doing things [the professional way](#the-professional-way-)



## Customising themes

### The easy way

For quick customisations, view these files:

```text
source
│
└───_global
    │
    └───modules
          colors.less
          typography.less
```

#### Change colors

Override the [css variables](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties) (see `colors.less` and `typography.less`) — in Anki:

- `Browse`
- Select `Anki theme ...`
- Press `Cards...` button
- Add your changes in `Styling` field (at the bottom)
- Repeat for each Card Type

You'll need to do this everytime you install the deck. If you'd like to make your changes permanent, you'll need to do things ...


### The professional way ...

So you want to:

- Highlight your code blocks offline
- Convert Markdown to HTML automatically
- Select your theme colors
- Create custom cards

Then [enter the world](../advanced/index.md) of the professional developer!
