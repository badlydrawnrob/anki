# Themes

- [Home](../../../README.md)
    - Cards
      + 💡 [Simple](../simple/index.md)
      + 🔎 [Missing!](../missing/index.md)
    - Themes
      + 🧑‍🎨 **[Syntax highlighting](../highlight/index.md)**


> **Default colors**: [Solarized light](https://ethanschoonover.com/solarized/) and [Monokai](https://www.monokai.pro)



## Basic syntax highlighting

You can mark any inline **[`code string`](../simple/index.md#-syntax-inline-code)** field with **bold** or _**italic**_ buttons in the Anki editor for basic highlighting. It uses simple [HTML5 tags](https://developer.mozilla.org/en/docs/Web/HTML/Element) to add colour to your code.

1. **Highlight**:
    + `<b>` or `<strong>`
2. **Lowlight**:
    + `<i>` or `<em>`



## Full syntax highlighting

> Currently using [Solarized light and Monokai](../../source/style/modules/variables/colors.less) themes. Here's the easy way to generate highlights, but you can automate the process ([🧑‍🎓 the professional way](../advanced/index.md))

Basic colours are fine for small lines of code, but you'll probably want to go [full colour](#full-syntax-highlighting) next. Wherever you see a **[`pre block`](../simple/index.md#-sample-code-block-or-image)**, Anki Theme provides pretty colours (CSS) to use with Markdown and [Pandoc](https://pandoc.org/demo/example18f.html) to generate your code. 

1. Write your code as [Markdown fenced code blocks](https://help.github.com/articles/github-flavored-markdown/#fenced-code-blocks)
2. Convert [Markdown to HTML5 online](https://tinyurl.com/mr43ydea)
3. Add a card in Anki
4. Choose a `pre block` field and add your HTML
5. Use the [toggle button](https://github.com/badlydrawnrob/anki/issues/62) to view a live preview of your code
6. Repeat the process — save your card!

That's it. You're done. Simple, right?!


## Customising themes

### The easy way

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

The easiest way to change the colors for the `code string` and `pre block` fields is to edit the `--color-code-light` and `--color-code-dark` variables in your Anki cards. This will overwrite the defaults.

#### Change colors

1. You'll have the latest [Anki themes release](https://github.com/badlydrawnrob/anki/releases).
2. In the Anki app menu, go to `Manage Note Types`.
3. Select the `Anki themes: ...` Note Type.
4. Select the `Cards` button.
5. Select the `Styling` option.
6. Use the search box and search for `--color-code` variables
7. Edit them with your own colour theme

**Note:** Your changes will be lost every time you download a new release of Anki Themes, and import the Note Types to your deck.

-----

### The (slightly) harder way

> **A hot tip for beginners is ... just use CSS!**[^1]
> I'm simply using [Less.js](https://lesscss.org) as [a nice way to lay out the files](https://github.com/badlydrawnrob/print-first-css/issues/42). Trust me, I've been around the block a few times![^2]

Anki (the app) has some flexibility to help keep Anki Theme releases from major breaking changes; however you'll almost certainly need to add your (CSS) colour theme changes back in every time. I try to release [semantic changes](https://semver.org) to the code, but it's best to save your CSS changes somewhere.

1. You can fork this repository and make changes there.
2. You can create a child theme with it's own `package.json` file.

It's a little advanced, but both options are possible. Once you've levelled up your programming skills, you can try your hand at doing things **[🧑‍🎓 the professional way](../advanced/index.md)**



[^1]: There's plenty of time for preprocessors, fancy frameworks, and whatever else takes your fancy **later in your career**. Find yourself [a good book](https://www.goodreads.com/en/book/show/10361330) and get learning!

[^2]: **There and back again:** I've actually come full circle; cut my teeth with regular CSS (even some dirty [Dreamweaver websites(https://tinyurl.com/mr48e7yk)], with _images and tables_ in 2003!); graduated to [Bootstrap frameworks](https://web.archive.org/web/20130308110613/http://twitter.github.com/bootstrap/); created my own framework (with [some help](https://cardinalcss.com)) through [Less](https://lesscss.org); then [Stylus](https://stylus-lang.com); then Less — again — 'cos Stylus [died](https://github.com/stylus/stylus/issues/2282 (subsequently [resurrected](https://stylus-lang.com/docs/compare.html)); now scrapping it all to go back to (mostly) [vanilla CSS](https://github.com/badlydrawnrob/print-first-css). It's still a royal PITA, but technology is ever-evolving and, in some ways, circular 💩🔄❤️
