# Themes

- [Home](../../../README.md)
    + 💡 [Simple](../simple/index.md) card
    + 🔎 [Missing!](../missing/index.md) card
    + 🧑‍🎨 **[Add color to your code](../highlight/index.md)**
    + 🧑‍🎓 [The professional way](../advanced/index.md)


## Basic syntax highlighting

> **Default colors**: [Solarized light](https://ethanschoonover.com/solarized/) and [Monokai](https://www.monokai.pro)

You can mark any inline **[`code string`](../simple/index.md#-syntax-inline-code)** field with **bold** or _**italic**_ buttons in the Anki editor for basic highlighting. It uses simple [HTML5 tags](https://developer.mozilla.org/en/docs/Web/HTML/Element) to add colour to your code.

1. **Highlight**:
    + `<b>` or `<strong>`
2. **Lowlight**:
    + `<i>` or `<em>`

For regular fields, such as `★ Title` you can highlight a code section like so: `<code>(<b>aFunctionAndIts</b> <i>variable</i>)</code>`


## Full syntax highlighting

> Currently using [Solarized light and Monokai](../../source/style/modules/variables/colors.less) themes. Here's the easy way to generate highlights, but you can automate the process ([🧑‍🎓 the professional way](../advanced/index.md))

Basic colours are fine for small lines of code, but you'll probably want to go [full colour](#full-syntax-highlighting) next. Wherever you see a **[`code block`](../simple/index.md#-sample-code-block)**, Anki Theme provides pretty colours (CSS) to use with Markdown and [Pandoc](https://pandoc.org/demo/example18f.html) to generate your code.

1. Write your code as [Markdown fenced code blocks](https://help.github.com/articles/github-flavored-markdown/#fenced-code-blocks),
2. Convert [Markdown to HTML5 online](https://tinyurl.com/mr43ydea),
3. Add a card in Anki,
4. Choose a `code block` field,
5. Add your HTML,
6. Press the `A𝐴` button ([`Toggle Visual Editor ⌘⇧X`](https://github.com/badlydrawnrob/anki/issues/62)) to preview your code,
7. Repeat the process — save your card!

That's it. You're done. Simple, right?!


## Customising themes (the easy way)

For quick customisations, view this file:

```text
source
│
└───style
    │
    └───modules
        │
        └───variables
              colors.less
```

The easiest way to change the colors for the `code string` and `code block` fields is to edit the `--color-code-light` and `--color-code-dark` variables in your Anki cards. This will overwrite the defaults.

### Change colors

1. You'll have the latest [Anki themes release](https://github.com/badlydrawnrob/anki/releases).
2. In the Anki app menu, go to `Manage Note Types`.
3. Select the `Anki themes: ...` Note Type.
4. Select the `Cards` button.
5. Select the `Styling` option.
6. Use the search box and search for `--color-code` variables
7. Copy the variables, add to bottom of the css, [edit them](https://github.com/badlydrawnrob/anki/issues/78).

**Note:** Your changes will be lost every time you download a new release of Anki Themes, and import the Note Types to your deck.




## Customising themes (the better way)

> The easy way (above) is super simple for quick customisations, but you'll need to re-edit your changes every time Anki themes is updated. **For a better way, you'll need to create your own Child Theme.**

Once you've levelled up your programming skills and the thought of using [terminal](https://en.wikipedia.org/wiki/Command-line_interface) doesn't scare you, you're ready to try your hand at doing things **[🧑‍🎓 the professional way](../advanced/index.md)**.

