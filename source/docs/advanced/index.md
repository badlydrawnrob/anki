# Becoming a professional programmer!

- [Home](../../../README.md)
    + 💡 [Simple](../simple/index.md) card
    + 🔎 [Missing!](../missing/index.md) card
    + 🧑‍🎨 [Add color to your code](../highlight/index.md)
    + 🧑‍🎓 **[The professional way](../advanced/index.md)**


## The advanced way to generate Anki code and themes ...

> You'll know your way around Git and have [Homebrew](https://brew.sh) installed (or install `node` and `pandoc` individually) ..

You should familiarise yourself with [Github Desktop](https://desktop.github.com), [NPM](https://www.npmjs.com) and the command line (I use [Terminal](https://tinyurl.com/4w8p4wnx)). You can find the main color files here:


1. [`brew install node`](https://nodejs.org/en/)
2. [`brew install pandoc`](https://pandoc.org)
3. You'll have the `.apkg` downloaded already and uploaded to Anki
4. You'll know how to create and manage a Github/local repository
5. You'll know what "Run `npm install`" means :)


### If you'd like to:

- Automatically compile `code blocks`
- Convert Markdown to HTML automatically
- Highlight your code blocks offline
- Change the theme's code colors
- Create custom cards

Then enter the world of the professional developer!


-----

## Introducing the `Anki Child Theme` repo

> The [Anki Child Theme](https://github.com/badlydrawnrob/anki-child-theme) is a safe playground to test out Pandoc's features, as well as creating your own code colours, or theme, that won't be overriden by Anki theme updates.

1. Clone the [Anki Child Theme](https://github.com/badlydrawnrob/anki-child-theme) repo on your local device.
2. Run `npm install` to add dependencies
3. Also run `npm setup` for Github repo dependencies[^1]

-----

## Using Pandoc for `code block`s

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

There are two other options for generating your card field data from Markdown, with Pandoc:

1. `npm run build` to generate `build/data/*.html` files. You can preview these in the browser to see how your Anki card will look:
    - Edit `source/themes/cards/simple/simple.md` and recompile.
    - Edit `source/themes/cards/missing/missing.md` and recompile.
2. `npm run pandoc-stripped` to generate simplified HTML files. These are in the same location as the `simple.md` and `missing.md` files.
    - `*-stripped.md` makes it far easier to view/copy your data quickly (once compiled)
    - It does, however, comes [with tradeoffs](https://github.com/badlydrawnrob/anki/issues/98).[^2]


-----


## Creating a custom color theme

```text
source
│
└───style
    │
    └───modules
        │
        └───variables
              colors.less  // original file
```

### Step 1
You have a cloned `Anki Child Theme` repository, and have followed the instructions in earlier check your files and the `package.json`; they should be up-to-date. You can find `"devDependencies"` in the `.json` file which you'll need to install (see the note above on `print-first-css`). Install the packages we need with:

[`npm install`](https://docs.npmjs.com/cli/v8/commands/npm-install)

### Step 3
You can then create a `build/` folder, along with the `main.css` CSS file with the following command:

> `npm run build`

This will also create a demo [Simple](../simple/index.md) and [Missing](../missing/index.md) file, which give preview of the Note Type Cards [in the release](https://github.com/badlydrawnrob/anki/releases) you'll upload to Anki app. Drag and drop each file into your browser/editor to view.

- The `main.css` file is what's in your Note Type Cards in Anki.
- The `build/*.html` files are just for demo purposes.

To create your own colour scheme, you _could_ simply change the `source/style/modules/variables/colors.less` file and run `npm run css` to update the `main.css` CSS file. However it's better to create your own file:

`variables/custom.less` — your custom theme!

Here you could add your own `--color-code` variables, and `@include` it into `style/modules/variables/_root.less` — then `npm run build` to re-compile your `main.css` CSS file.

Finally, go back into your Anki app and:

2. Go to `Manage Note Types`.
3. Select the `Anki themes: ...` Note Type.
4. Select the `Cards` button.
5. Select the `Styling` option.
6. Delete the CSS and add your own from `main.css`.
7. Repeat for each Card Type you'd like to edit.

You could also go ahead and mess around with the other `.less` files, but every time your forked repo needs updating (to grab changes from Anki Themes) you'd run into problems with outdated files.

See below for [creating your own child theme](#creating-your-own-child-theme)!


-----


## Creating your own child theme

> ⚠️ A work in progress, you're mostly on your own for now ...
> ⚠️ I think it's better to [extend Anki themes](https://github.com/badlydrawnrob/anki/issues/42), not edit the clone/fork directly.

There's a [couple of ways](https://github.com/badlydrawnrob/anki/issues/42#issuecomment-1834381594) we can achieve this. Currently one of our dependencies is in our `package.json` dependencies; the other one (Anki Themes) can be cloned or forked. So ...

1. First clone the Anki Themes repository, or fork it.
2. Create a new empty repository (and link it to Github)
3. In your empty repository, create a new `source/` folder and `package.json`.
4. Make sure you have `print-first-css` (at least) as a dependency. You _could_ add `anki` (themes) as a dependency also (although this [requires changes to the code base](https://github.com/badlydrawnrob/anki/issues/42#issuecomment-1834381594))
5. Copy `main.less`, `config.less`, `_root.less`, `colors.less` files to your repo (and any others you want to change)
6. Override any CSS [`--variables](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties) you want, and `@include` others from the original Anki themes repo.
7. Make sure the `"scripts"` in `package.json` point to the correct files/folders.
    - This will be either the original Anki themes ...
    - or your own folders.
8. Compile all the files needed with `npm <command>`
    - `npm run build`
    - `npm run css`
    - ...

Finally, you can go into the Anki app, and add any changes to your Note Type Card(s).


### Build your Anki cards from scratch

> 🔗 Some useful information [here](https://github.com/badlydrawnrob/anki/issues/54) and [here](https://github.com/badlydrawnrob/print-first-css/issues/25).

If you're a skilled dev, you should be able to figure this out without too much guidance. You may run into some dependency errors and have to `npm audit`. The main files you'll want to change are below — feel free to copy and edit them in your child theme.


## Create custom cards

```text
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

We're using [Mustache](https://www.npmjs.com/package/mustache) to preview the card themes in the demo version compiled to `build/` folder. There's been some [problems with compatibility](https://github.com/badlydrawnrob/anki/issues/56) in the Anki app, so this might be discontinued eventually.


[^1]: There's an issue with `npm update <package>` in which [`print-first-css` and other Github repos don't update properly](https://github.com/badlydrawnrob/anki/issues/65). Make sure to `npm install print-first-css` with the correct commit number. You might also have to [`npm audit`](https://docs.npmjs.com/cli/v10/commands/npm-audit) and `npm audit fix` to make sure dependencies have no errors. Follow the prompts.

[^2]: Because Safari defaults to `latin1` it won't render some characters (especially Unicode like `★`) properly without specifying `UTF-8` in the HTML `<header>`. `*-stripped.md` files compile to HTML without a header. Easier to read the HTML, but don't look as nice in the browser.
