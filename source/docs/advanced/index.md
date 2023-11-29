# Becoming a professional programmer!
## The advanced way to generate Anki code and themes ...

If you'd like to:

- Highlight your code blocks offline
- Convert Markdown to HTML automatically
- Select your theme colors
- Create custom cards

Then enter the world of the professional developer!


### Using Pandoc

Write your code as Markdown fenced code blocks in `source/pandoc/pre.md` ...

1. `npm run pandoc`
2. Add a card in Anki
3. Choose a field and navigate to: `☰ -> Edit html`
4. Paste your code, then close `Edit html`
5. Repeat the process for any other code blocks you need

To view available languages, type `pandoc --list-highlight-languages` into the terminal. This is a replacement for [Power Format Pack](../error/index.md) and Pygments, in [older versions](https://github.com/badlydrawnrob/anki/releases/tag/1.0.0).


### Creating your own theme

1. Copy `config.less` and `main.less` to your own repo
2. Copy `colors.less` and any others you'd like to change
2. Change the [css variables](../source/_global/_root.less)
3. Recompile the css with `npm run css`
4. Add to card type as [shown above](#css-variables)


### Build your Anki themes from scratch

> ⚠️ A work in progress, you're on your own for now ...
> ⚠️ Extend Anki themes with `npm`, don't edit directly

You'll know your way around Git and have [Homebrew](https://brew.sh) installed (or install `node` and `pandoc` individually) ..

1. [`brew install node`](https://nodejs.org/en/)
2. [`brew install pandoc`](https://pandoc.org)
3. Download [project files](https://github.com/badlydrawnrob/anki/releases) and create a repository
4. Run `npm install`

> ¶: Sometimes [`print-first-css` doesn't load properly](https://github.com/badlydrawnrob/anki/issues/65), so make sure to `npm update print-first-css`. You might also have to [`npm audit`](https://docs.npmjs.com/cli/v10/commands/npm-audit) and `npm audit fix` to make sure dependencies have no errors. Follow the prompts.

If you're updating your repository, it's best to also:

1. Run `npm update`
2. Run `npm update print-first-css`<sup>¶</sup>

You may run into some dependency errors and have to `npm audit`.


## Create custom cards

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
    │
    └───themes
          cards
          components
```

If you're a skilled dev, you'll figure it out! :)

- Use the `source/themes/cards/...` as a starting point
- Create your own HTML and [Less](http://lesscss.org)
- Preview with [Mustache](https://www.npmjs.com/package/mustache)
- Compile with `npm run build`