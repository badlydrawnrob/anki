# Becoming a professional programmer!

- [Home](../../../README.md)
    + 💡 [Simple](../simple/index.md) card
    + 🔎 [Missing!](../missing/index.md) card
    + 🖍️ [Draw!](../draw/index.md) card
    + 🧑‍🎨 [Add color to your code](../highlight/index.md)
    + 🧑‍🎓 **[The professional way](../professional/index.md)**


## First steps

> First `npm install` to install dependencies.[^1]
> `npm ls` should list `less` and `print-first-css`.
> `npm run build` to compile the css and demo.

**You should know how to clone or fork a Github repository.** You should also have [`npm`](https://nodejs.org/en/download/package-manager) and [`pandoc`](https://pandoc.org/installing.html) installed. Once you've done that, run the commands above, and you can continue reading.


## Compiling your card field data

> `npm run data` and you're done. So simple!

The `/data/*` files are a helpful way to quickly write your Anki cards. You can compile them into HTML and use that to add to the card's fields. They're well `<!-- commented -->` so you'll know what to do with each field. **Make sure you've read [each card's documentation](https://github.com/badlydrawnrob/anki#cards) before you use these `data-` files.** They'll make more sense then.

Each `data-*` file will be updated when you run this command. There's also a special `data-code.md` and `data-code.html` file that's helpful to compile `code block`s. This can convert from `.md -> .html` and back again.


## The professional way to create your own CSS theme

> I'm keeping this dead simple, for beginners to intermediates.
> We're only interested in colours and typography for customisations.

```text
source
│
└───style
    │   main.less
    │
    └───base
    │   │
    │   └───variables
    │          breezedark.less
    │          typography.less
    │
    └───globals
    │     breezedark.less
    │
    └───themes
        │
        └───custom
              custom-theme.md
              template.html
```

Let's quickly run through those files:

- You can reference the `--color-code-*` variables from `breezedark.less`.
- And the typography `--font-*` variables in `typography.less`.
- Our `themes/custom/*` compile to `/build/custom/custom-theme.html`:
    - Here we can preview our `custom-theme.less` with different programming languages!

 Setup is quite straightforward. Go to the `main.less` file and create and `@import` a `base/variables/` `custom-theme.less` and `custom-typography.less` file; a `globals/custom-theme.less` file too. You can reference the defaults, from which you'll be copying the variables and `// comment` them out or override them in `main.less`. You may also need to change (or copy) other `base/html/*.less` files for finer-grain changes.


### Pandoc's Skylighting

> Check out Pandoc's [syntax highlighting](https://pandoc.org/chunkedhtml-demo/13-syntax-highlighting.html) and [demos](https://pandoc.org/demos.html) (number 18)

Pandoc's Skylighting comes with a bunch of `--list-highlight-styles` and `--print-highlight-style=<theme>` that you can reference when editing your `--color-code-dark-*` variables. I currently work in the following way:

1. Setup a few programming language `code block`s in `themes/custom/custom-theme.md`,
2. Start making changes in the `custom-theme.less` files,
3. Compile the `.md` file to `build/custom/*` with `npm run custom`,
4. Rinse and repeat until you've got colours you're happy with.
5. For typography, you'll want to compile CSS with `npm run css`,
6. Then view the `build/demo/*md` files to see how it looks.

If you want to check out all of Pandoc's highlighting themes to get inspiration, you can use `pandoc -s data-code.md --highlight-style=<theme> -o data-code.html`. You can also output `pandoc --print-highlight-style=breezedark` json (or a different theme) and cross-reference those styles. The `span` classes in the `base/globals/breezedark.less` file matches up with the `json` keys (and our `--color-code-dark-*` variables).

It'll take a little playing around to find the right match of colours. Have fun!


### Compiling your CSS stylesheet

> Simply `npm run css` to compile your changes!

With your `globals/custom-theme.less` file we can add in our `var(--color-code-dark-*)` CSS inside the Pandoc Skylighting `.gl-CodeBlock .sourceCode` class. You can also add in here any `font-*` styles such as bold and italic. Finally, you can compile the CSS changes with `npm run css`.

Your brand new theme will be built, ready to add to Anki!


### Adding your new theme to the Anki desktop app

Open the Anki desktop app and:

2. Go to `Tools > Manage Note Types`.
3. Select the `Anki flashcards: ...` Note Type.
4. Select the `Cards` button.
5. Select the `Styling` option.
6. Delete the CSS
7. Add your custom CSS from the compiled `main.css` file.
7. Repeat for each Card Type you'd like to edit.


## Updating Anki flashcards (and your custom theme)

> Take care to keep your repository up-to-date.

Every time the [Anki Programming Flashcards](https://github.com/badlydrawnrob/anki) updates it's CSS with a [new release](https://github.com/badlydrawnrob/anki/releases), make sure your clone or fork is up-to-date. Upload the `.apkg` deck to the Anki desktop app first, then manually override your CSS.

If you have any problems, [create an issue](https://github.com/badlydrawnrob/anki/issues) in this repo.


## A couple of notes

The `/themes/demo/*` files are just for demo purposes. These can be previewed with your new CSS changes, but should be left alone. Our repository should be up-to-date with all the correct `devDependencies`, but if anything goes wrong, send me an issue.[^1] The `/data/*html` files are for viewing in your code editor only.[^2].

Finally, just a quick note on Less CSS and those `.less` files. I'm only using this to nicely order the CSS files for quick viewing and compiling. I don't advocate using preprocessors anymore.[^3]


## Build your own custom Anki cards from scratch

> This is now out of scope for this repo.



[^1]: There's an issue with `npm update <github-repo-package>` in which [repos don't update properly](https://github.com/badlydrawnrob/anki/issues/65). I'll make sure `print-first-css` is kept up-to-date with each release, but for bleeding-edge versions, you'll need to make sure `devDependencies` are pointing to the correct commit number and `npm install print-first-css`. If you're having error messages with other dependencies, you might have to [`npm audit`](https://docs.npmjs.com/cli/v10/commands/npm-audit) and `npm audit fix` to remove the errors. Follow the prompts.

[^2]: Our `/data/*html` files are not supposed to be rendered in the browser. They're just for speedy compiling of data ready for your Anki Flashcard fields.

[^3]: There's plenty of time for preprocessors, fancy frameworks, and whatever else takes your fancy **later in your career**. Find yourself [a good book](https://www.goodreads.com/en/book/show/10361330) and get learning!
