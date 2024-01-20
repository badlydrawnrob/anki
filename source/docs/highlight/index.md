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



## Full syntax highlighting

> Currently using [Solarized light and Monokai](../../source/style/modules/variables/colors.less) themes. Here's the easy way to generate highlights, but you can automate the process ([🧑‍🎓 the professional way](../advanced/index.md))

Basic colours are fine for small lines of code, but you'll probably want to go [full colour](#full-syntax-highlighting) next. Wherever you see a **[`code block`](../simple/index.md#-sample-code-block-or-image)**, Anki Theme provides pretty colours (CSS) to use with Markdown and [Pandoc](https://pandoc.org/demo/example18f.html) to generate your code.

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

> 🔥 **Hot tip: Unless you know what your're doing, just use CSS!**[^1]
> [Less.js](https://lesscss.org) is a css preprocessor; it's [a nice way to organise and compile CSS files](https://github.com/badlydrawnrob/print-first-css/issues/42) but I use it very sparingly. Trust me, I've been around the block a few times![^2]

This is the (slightly) harder way to create your own highlighting theme. Updating your Anki deck with CSS will generally be safe, and I use [semantic versioning](https://semver.org) to avoid breaking changes. However, you'll almost certainly need to add your (CSS) colour theme changes every time you update Anki themes. It's best to save your CSS changes somewhere.

1. Fork this repository to keep a local version of Anki Themes for reference.
2. Create a child theme with it's own `package.json` file.

Once you've levelled up your programming skills and the thought of using [terminal](https://en.wikipedia.org/wiki/Command-line_interface) doesn't scare you, you're ready to try your hand at doing things **[🧑‍🎓 the professional way](../advanced/index.md)**.



[^1]: There's plenty of time for preprocessors, fancy frameworks, and whatever else takes your fancy **later in your career**. Find yourself [a good book](https://www.goodreads.com/en/book/show/10361330) and get learning!

[^2]: **There and back again:** I've actually come full circle; cut my teeth with regular CSS (even some dirty [Dreamweaver websites(https://tinyurl.com/mr48e7yk)], with _images and tables_ in 2003!); graduated to [Bootstrap frameworks](https://web.archive.org/web/20130308110613/http://twitter.github.com/bootstrap/); created my own framework (with [some help](https://cardinalcss.com)) through [Less](https://lesscss.org); then [Stylus](https://stylus-lang.com); then Less — again — 'cos Stylus [died](https://github.com/stylus/stylus/issues/2282 (subsequently [resurrected](https://stylus-lang.com/docs/compare.html)); now scrapping it all to go back to (mostly) [vanilla CSS](https://github.com/badlydrawnrob/print-first-css). It's still a royal PITA, but technology is ever-evolving and, in some ways, circular 💩🔄❤️
