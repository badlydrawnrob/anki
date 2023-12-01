# Themes

- [Home](../../../README.md)
    - Cards
      + [Simple](../simple/index.md)
      + [Missing!](../missing/index.md)
    - Themes
      + **[Syntax highlighting](../highlight/index.md)**


> **Default colors**: [Solarized light](https://ethanschoonover.com/solarized/) and [Monokai](https://www.monokai.pro)



## Basic syntax highlighting

You can mark any inline [`code string`](../simple/index.md#-syntax-inline-code) field with **bold** or _**italic**_ buttons in the Anki editor for basic highlighting. It uses simple [HTML5 tags](https://developer.mozilla.org/en/docs/Web/HTML/Element) to add colour to your code (for [full highlighting](#full-syntax-highlighting) with a [`pre block`](../simple/index.md#-sample-code-block-or-image) field, see below).

1. **Highlight**:
    + `<b>` or `<strong>`
2. **Lowlight**:
    + `<i>` or `<em>`



## Full syntax highlighting

### The easy way

> Currently using [Solarized light and Monokai](../../source/style/variables/colors.less) themes.

Wherever you see a `pre block`, Anki Theme provides colours (CSS) to use with [Pandoc](https://pandoc.org/MANUAL.html#syntax-highlighting), to generate colourful syntax highlighting: 

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

1. You'll have the latest [Anki themes release](https://github.com/badlydrawnrob/anki/releases).
2. In the Anki app menu, go to `Manage Note Types`.
3. Select the `Anki themes: ...` Note Type.
4. Select the `Cards` button.
5. Select the `Styling` option.
6. Use the search box and search for `--color-code` variables
7. <s>You can find an example of a code highlight </s>


-----

### The (slightly) harder way

> **A hot tip for beginners is ... just use CSS!**
> I'm using [Less.js](https://lesscss.org) simply as it's [a nice way to lay out the files](https://github.com/badlydrawnrob/print-first-css/issues/42). There's plenty of time for preprocessors, fancy frameworks, and whatever else takes your fancy **later in your career**. Find yourself [a good book](https://www.goodreads.com/en/book/show/10361330) and get learning.[^1]

> There's a bit of a [???] missing how-to guide here, but hopefully it's not too difficult to figure out, until I update things.

1. [Clone the repository](https://tinyurl.com/46bx4bj5) to your computer (I use [Github Desktop](https://desktop.github.com))
2. You should be familiar with **[NPM](https://www.npmjs.com)**.

Once you've cloned the repository, make sure your files and the `package.json` are up-to-date. Check `"devDependencies"` in the `.json` file and make sure they're the same as the Anki Themes repo. [Print First CSS] may need to be [updated manually](https://github.com/badlydrawnrob/anki/issues/54).

You can create the necessary CSS files and a `build/` folder with the following command:

> `npm run build`

This will generate the `main.css` file and the demo [Simple](../simple/index.md) and [Missing](../missing/index.md) themes; you can drag and drop each file into your browser/editor to view.

- The `main.css` file is what's in your Note Types in Anki.
- The `build/*.html` files are just for show
- To view the Note Type Cards, head to `source/themes/cards`

To create your own colour scheme, you _could_ simply change the `source/style/modules/variables/colors.less` file and run `npm run css` to update the `main.css` CSS file.

You could also go ahead and mess around with the other `.less` files, bearing in mind that I'm simply using Less.js to compile the files and **nothing more**.




Go to the terminal and type `npm run build`; make any changes to your `.css` files and `npm run css` to compile the `build/main.css` file; next you'll want to go back into Anki app, and do the following:

- Navigate to `Tools -> Manage Note Types`,
- Select `Anki themes: ...` that you'd like to edit,
- Press `Cards` button, select `Styling` option,
- Add your changes in `Styling` field (at the bottom),
- Repeat for each Card Type you'd like to edit.

You'll need to do this everytime you [install the deck from Github Anki Themes Releases](https://github.com/badlydrawnrob/anki/releases). Your changes will be permanent on your local computer if you follow the instructions to [clone a repository](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository), and create your own, linking the two.

You'll always have to update your themes on the Anki app manually.

-----


## So, you want more?

Once you've levelled up your programming skills, you can try your hand at doing things [the professional way](../advanced/index.md)

[^1]: **There and back again:** I've actually come full circle; cut my teeth with regular CSS (even some dirty [Dreamweaver websites(https://tinyurl.com/mr48e7yk)], with _images and tables_ in 2003!); graduated to [Bootstrap frameworks](https://web.archive.org/web/20130308110613/http://twitter.github.com/bootstrap/); created my own framework (with [some help](https://cardinalcss.com)) through [Less](https://lesscss.org); then [Stylus](https://stylus-lang.com); then Less — again — 'cos Stylus [died](https://github.com/stylus/stylus/issues/2282 (subsequently [resurrected](https://stylus-lang.com/docs/compare.html)); now scrapping it all to go back to (mostly) [vanilla CSS](https://github.com/badlydrawnrob/print-first-css).

It's still a royal PITA, but technology is ever-evolving and, in some ways, circular 💩🔄❤️