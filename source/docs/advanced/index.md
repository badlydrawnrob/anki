# Becoming a professional programmer!

- [Home](../../../README.md)
    + 💡 [Simple](../simple/index.md) card
    + 🔎 [Missing!](../missing/index.md) card
    + 🧑‍🎨 [Add color to your code](../highlight/index.md)
    + 🧑‍🎓 **[The professional way](../advanced/index.md)**


## The advanced way to generate Anki code and themes ...

> **⚠️ This is currently a work-in-progress so be prepared for breaking changes!**

https://github.com/badlydrawnrob/anki/assets/1176875/e852e912-317b-4cd9-9ab5-82855a5274a5

### If you'd like to:

- Automatically compile `code blocks`
- Convert Markdown to HTML automatically
- Highlight your code blocks offline
- Change the theme's code colors
- Create custom cards

Then enter the world of the professional developer!

### Getting setup ...

> You'll know your way around Git and have [Homebrew](https://brew.sh) installed (or install `node` and `pandoc` individually) ..

You should familiarise yourself with [Github Desktop](https://desktop.github.com), [NPM](https://www.npmjs.com) and the command line (I use [Terminal](https://tinyurl.com/4w8p4wnx)).


1. [`brew install node`](https://nodejs.org/en/)
2. [`brew install pandoc`](https://pandoc.org)
3. You'll have the `.apkg` downloaded already and uploaded to Anki
4. You'll know how to create and manage a Github/local repository
5. You'll know what "Run `npm install`" means :)



## 1) Introducing the `Anki Child Theme` repo

> The [Anki Child Theme](https://github.com/badlydrawnrob/anki-child-theme) is a safe playground to test out Pandoc's features, as well as creating your own code colours, or theme, that won't be overriden by Anki theme updates.

1. Clone the [Anki Child Theme](https://github.com/badlydrawnrob/anki-child-theme) repo on your local device.
2. Run `npm install` to add dependencies
3. Also run `npm setup` for Github repo dependencies[^1]




## 2) Using Pandoc for `code block`s

> This is a replacement for [Power Format Pack](../error/index.md) and Pygments, in [older versions](https://github.com/badlydrawnrob/anki/releases/tag/1.0.0).

Write your code as Markdown fenced code blocks in `source/pandoc/code.md` which is great for _small_ pieces of code that will fit into a `code block`.

1. `npm run build`,
2. Add a card in Anki,
3. Choose a `code block` field,
4. Make sure the field is in [HTML mode](https://github.com/badlydrawnrob/anki/issues/62) (not rich text),
6. Add your compiled highlighted code,
5. Press the `A𝐴` button ([`Toggle Visual Editor ⌘⇧X`](https://github.com/badlydrawnrob/anki/issues/62)) to preview your code,
6. Repeat the process for any other code blocks you need!

### Generating card data from Markdown

> **There are two other options** for generating your card field data from Markdown, with Pandoc:

1. `npm run build` to generate `build/data/*.html` files. You can preview these in the browser to see how your Anki card will look:
    - Edit `source/themes/cards/simple/simple.md` and recompile.
    - Edit `source/themes/cards/missing/missing.md` and recompile.
2. `npm run pandoc-stripped` to generate simplified HTML files. These are in the same location as the `simple.md` and `missing.md` files.
    - `*-stripped.md` makes it far easier to view/copy your data quickly (once compiled)
    - It does, however, comes [with tradeoffs](https://github.com/badlydrawnrob/anki/issues/98).[^2]




## 3) Creating a custom color theme

> 🔥 **Hot tip: Unless you know what your're doing, [just use CSS](https://github.com/badlydrawnrob/anki/issues/38)!**[^3]
>
> [Less.js](https://lesscss.org) is a css preprocessor; it's [a nice way to organise and compile CSS files](https://github.com/badlydrawnrob/print-first-css/issues/42) but I use it very sparingly. Trust me, I've been around the block a few times![^4]

```text
/node_modules/print-first-css/*

/node_modules/anki/build/style/main.css
/node_modules/anki/source/style/modules/variables/*.less
/node_modules/anki/source/style/partials/*.less

source
│
└───style
    │
    └───modules
        │
        └───variables
              colors.less  // custom theme file
```


**This is the (slightly) harder way** to create your own `code block`  highlight theme, or just make some changes to how Anki themes looks. Updating your Anki deck with CSS will generally be safe, and I use [semantic versioning](https://semver.org) to avoid breaking changes. However, you'll almost certainly need to add your Child Theme changes every time you update Anki themes.

#### It's best to save your CSS changes somewhere:

1. You'll have followed [(1)](#1-introducing-the-anki-child-theme-repo) and [(2)](#2-using-pandoc-for-code-blocks) to keep a local version of Anki Child Themes.
2. Your `package.json` file will be up-to-date.


### Step 1
You'll already know about `--color-code-light` and `--color-code-dark` variables. You can also find other variables in [`print-first-css`](https://github.com/badlydrawnrob/print-first-css) and `anki`. In your Anki Child Theme, you can override those variables in `:root`. See the `"devDependencies"` in the `package.json` file.

### Step 2

> `npm run build`

You compile into the `build/` folder, and to the `main.css` CSS file.

This will also create a demo [Simple](../simple/index.md) and [Missing](../missing/index.md) file, which give a preview of the Anki Cards field data; from here you can copy/paste the data to your Anki card. Drag and drop each file into your browser/editor to view.

- The `main.css` file is what's in your Anki Cards `Note Type(s)`.
- The `build/data/*.html` files are just for demo purposes.


### Step 3

> `npm run css`

Once you've familiarised yourself with the `--css-variables` in both `print-first-css` and `anki`, you can create your own CSS any way you wish to. You could create [your own font stack](https://github.com/badlydrawnrob/anki/issues/12), correct any errors you might find, or redecorate the whole lot. The choice is yours.

You can follow the structure of `anki` files for the most part, but core files such as `config.less` and `main.less` might change (potentially, some files such as `Skylighting.less` might migrate/change from Anki themes).

If you want to be safe, you can create your own `custom-*.less` files.

### Step 4

Currently the Anki `main.css` file is being imported, not the individual `*.less` files. You can change that if you prefer and `@import` the `*.less` files.

Finally, open the Anki app and:

2. Go to `Tools > Manage Note Types`.
3. Select the `Anki themes: ...` Note Type.
4. Select the `Cards` button.
5. Select the `Styling` option.
6. Delete the CSS
7. Add your custom CSS from the compiled `main.css` file.
7. Repeat for each Card Type you'd like to edit.

Every time the [Anki Themes](https://github.com/badlydrawnrob/anki) updates it's CSS with a [new release](https://github.com/badlydrawnrob/anki/releases), make sure your Anki Child Theme fork is up-to-date, add the `.apkg` to Anki and manually override your CSS.

If there are any issues, [create an issue](https://github.com/badlydrawnrob/anki/issues) in this repo.



## Build your Anki cards from scratch

> 🔗 Some useful information [here](https://github.com/badlydrawnrob/anki/issues/54) and [here](https://github.com/badlydrawnrob/print-first-css/issues/25).

- You can find the original HTML for each of the Anki Cards `Note Type`:
    - `node_modules/anki/source/themes/cards/*/*-front.mustache`
    - `node_modules/anki/source/themes/cards/*/*-reverse.mustache`

If you're a skilled dev, you should be able to figure this out without too much guidance. You may run into some dependency errors and have to `npm audit`. The main files you'll want to change are below — feel free to copy and edit them in your child theme.

⚠️ Remember, Anki templates [_are not the same_](https://github.com/badlydrawnrob/anki/issues/34) as [Moustache.js](https://mustache.github.io/mustache.5.html) templates. Beware of dependency hell!


## Create custom cards

```text
node_modules/anki/

source
│
└───style
    │   config.less
    │   main.less
    │
    └───modules
          ...
    │
    └───themes
          cards
          components
          demo
```

In the main Anki themes repo, we're using [Mustache](https://www.npmjs.com/package/mustache) to preview the card themes in the demo version compiled to `build/demo/...` folder. There's been some [problems with compatibility](https://github.com/badlydrawnrob/anki/issues/56) in the Anki app, so this might be discontinued eventually.


[^1]: There's an issue with `npm update <package>` in which [`print-first-css` and other Github repos don't update properly](https://github.com/badlydrawnrob/anki/issues/65). Make sure to `npm install print-first-css` with the correct commit number. You might also have to [`npm audit`](https://docs.npmjs.com/cli/v10/commands/npm-audit) and `npm audit fix` to make sure dependencies have no errors. Follow the prompts.

[^2]: Because Safari defaults to `latin1` it won't render some characters (especially Unicode like `★`) properly without specifying `UTF-8` in the HTML `<header>`. `*-stripped.md` files compile to HTML without a header. Easier to read the HTML, but don't look as nice in the browser.

[^3]: There's plenty of time for preprocessors, fancy frameworks, and whatever else takes your fancy **later in your career**. Find yourself [a good book](https://www.goodreads.com/en/book/show/10361330) and get learning!

[^4]: **There and back again:** I've actually come full circle; cut my teeth with regular CSS (even some dirty [Dreamweaver websites(https://tinyurl.com/mr48e7yk)], with _images and tables_ in 2003!); graduated to [Bootstrap frameworks](https://web.archive.org/web/20130308110613/http://twitter.github.com/bootstrap/); created my own framework (with [some help](https://cardinalcss.com)) through [Less](https://lesscss.org); then [Stylus](https://stylus-lang.com); then Less — again — 'cos Stylus [died](https://github.com/stylus/stylus/issues/2282 (subsequently [resurrected](https://stylus-lang.com/docs/compare.html)); now scrapping it all to go back to (mostly) [vanilla CSS](https://github.com/badlydrawnrob/print-first-css). It's still a royal PITA, but technology is ever-evolving and, in some ways, circular 💩🔄❤️
