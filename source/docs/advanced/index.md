# Becoming a professional programmer!
## The advanced way to generate Anki code and themes ...

> You'll know your way around Git and have [Homebrew](https://brew.sh) installed (or install `node` and `pandoc` individually) ..
>
> 1. [`brew install node`](https://nodejs.org/en/)
> 2. [`brew install pandoc`](https://pandoc.org)
> 3. You'll have the `.apkg` downloaded already
> You'll know how to create and manage a Github/local repository
> 4. You'll know what "Run `npm install`" means :)


If you'd like to:

- Change the theme's code colors
- Highlight your code blocks offline
- Convert Markdown to HTML automatically
- Create custom cards

Then enter the world of the professional developer!



## Creating a custom color theme

### Get started with NPM

> Some dependencies, such as [Print First CSS](https://github.com/badlydrawnrob/print-first-css) may need to be [updated manually](https://github.com/badlydrawnrob/anki/issues/54): `npm update print-first-css`.[^1]

You should familiarise yourself with [Github Desktop](https://desktop.github.com), [NPM](https://www.npmjs.com) and the command line (I use [Terminal](https://tinyurl.com/4w8p4wnx)). You can find the main color files here:

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


#### Step 1
[Fork](https://docs.github.com/en/get-started/quickstart/fork-a-repos) Anki Themes and [clone it to your computer](https://tinyurl.com/46bx4bj5) using Github Desktop.

#### Step 2
Once you've cloned the repository, check your files and the `package.json`; they should be up-to-date. You can find `"devDependencies"` in the `.json` file which you'll need to install (see the note above on `print-first-css`). Install the packages we need with:

[`npm install`](https://docs.npmjs.com/cli/v8/commands/npm-install)

#### Step 3
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


## Using Pandoc for `pre block`

> This is a replacement for [Power Format Pack](../error/index.md) and Pygments, in [older versions](https://github.com/badlydrawnrob/anki/releases/tag/1.0.0).

Write your code as Markdown fenced code blocks in `source/pandoc/pre.md` ...

1. `npm run pandoc`,
2. Add a card in Anki,
3. Choose a `pre block` field and add the HTML,
4. Press the "Toggle visual editor" to preview your HTML,
5. Repeat the process for any other code blocks you need!


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


[^1]: Sometimes [`print-first-css` doesn't load properly](https://github.com/badlydrawnrob/anki/issues/65), so make sure to `npm update print-first-css` with the correct commit number. You might also have to [`npm audit`](https://docs.npmjs.com/cli/v10/commands/npm-audit) and `npm audit fix` to make sure dependencies have no errors. Follow the prompts.