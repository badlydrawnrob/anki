# Themes

- [Home](../../../README.md)
    - Cards
      + [Simple](../simple/index.md)
      + [Missing!](../missing/index.md)
    - Themes
      + **[Syntax highlighting](../highlight/index.md)**


> **Default colors**: [Solarized light](https://ethanschoonover.com/solarized/) and [Monokai](https://www.monokai.pro)



## Basic syntax highlighting

You can mark any inline [`code string`](../simple/index.md#-syntax-inline-code) with **bold** or _**italic**_ buttons in the Anki editor for basic highlighting. It uses simple [HTML5 tags](https://developer.mozilla.org/en/docs/Web/HTML/Element) to add colour to your code (for [full highlighting](#full-syntax-highlighting) with `<pre>` code blocks, see below).

1. **Highlight**:
    + `<b>` or `<strong>`
2. **Lowlight**:
    + `<i>` or `<em>`



## Full syntax highlighting

### The easy way

> Currently using [Solarized light and Monokai](../../source/style/variables/colors.less) themes.

Anki Theme provides styles for use with [Pandoc](https://pandoc.org/MANUAL.html#syntax-highlighting), to generate full color syntax highlighting: 

1. Write your code as [Markdown fenced code blocks](https://help.github.com/articles/github-flavored-markdown/#fenced-code-blocks)
2. Convert [Markdown to HTML5 online](https://tinyurl.com/mr43ydea)
3. Add a card in Anki
4. Choose a `html` field and enter your code
5. Use the [toggle button](https://github.com/badlydrawnrob/anki/issues/62) to view a live preview of your code
6. Repeat the process — save your card!

That's it. You're done. Simple, right?!


## Customising themes

### The easy way

For quick customisations, view these files:

```text
source
│
└───style
    │
    └───modules
          colors.less
```

The easiest way to change the colors for the `code string` and `pre block` fields is to edit the `--color-code-light` and `--color-code-dark` variables in your Anki cards. This will overwrite the defaults.

#### Change colors

1. Make sure you have the latest [Anki themes release](https://github.com/badlydrawnrob/anki/releases).
2. In the Anki app menu, go to `Manage Note Types`.
3. Select the `Anki themes: ...` Note Type.
4. Select the `Cards` button.
5. Select the `Styling` option.
6. Use the search box and search for `--color-code` variables
7. You can find an example of a code highlight 

In your own repository, create a new `source/` folder and `package.json` and link them to the `Anki themes` clone files. Copy the [relevant files](https://github.com/badlydrawnrob/anki/issues/67) to override the [css variables](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties) in your new `source/` folder (see `colors.less` and `typography.less`).

> There's a bit of a [???] missing how-to guide here, but hopefully it's not too difficult to figure out, until I update things.

Go to the terminal and type `npm run build`; make any changes to your `.css` files and `npm run css` to compile the `build/main.css` file; next you'll want to go back into Anki app, and do the following:

- Navigate to `Tools -> Manage Note Types`,
- Select `Anki themes: ...` that you'd like to edit,
- Press `Cards` button, select `Styling` option,
- Add your changes in `Styling` field (at the bottom),
- Repeat for each Card Type you'd like to edit.

You'll need to do this everytime you [install the deck from Github Anki Themes Releases](https://github.com/badlydrawnrob/anki/releases). Your changes will be permanent on your local computer if you follow the instructions to [clone a repository](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository), and create your own, linking the two.

You'll always have to update your themes on the Anki app manually.


## So, you want more?

Once you've levelled up your programming skills, you can try your hand at doing things [the professional way](../advanced/index.md)