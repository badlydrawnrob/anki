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

The `/data/*` files are a helpful way to quickly write your Anki cards. You can compile them into HTML and add the sections to a card's fields. They're well `<!-- commented -->` so you'll know what to do with each field. **Make sure you've read [each card's documentation](https://github.com/badlydrawnrob/anki#cards) before you use these `data-` files.** They'll make more sense then.

Each `data-*` file will be updated when you run this command. There's also a special `data-code.md` and `data-code.html` file that's helpful to compile `code block`s. This can convert from `.md -> .html` and back again.

The `/data/*html` files are for viewing in your code editor only.[^1]


## The professional way to create your own CSS theme

> I'm keeping this dead simple, for beginners to intermediates.
> We're only interested in colours and typography for customisations. Apologies if this is slightly convoluted right now. It'll take a little playing around to find the right match of colours.
>
> 🧑‍🎨 **Have fun, and please do share your themes!** 🎨

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
    |          custom-theme.less -- create this file!
    │          typography.less
    │
    └───globals
    │     breezedark.less
    |     custom-theme.less -- and this one!
    │
    └───themes
        │
        └───custom
              custom-theme.md -- then compile this :)
              template.html
|
build
|
└───custom -- and preview your changes here!
```

### Let's quickly run through those files:

> You'll find a `/custom` folder with a helpful `.md` file that allows you to preview your `custom-theme.less` changes. You can see what each language looks like with your custom theme.

We're using CSS variables (e.g: `var(--color-code-dark-*)`) and compiling them with [Less CSS](https://lesscss.org/). You can find the current theme colours in `/style/base/variables/breezedark.less`. Have a play with them and see what you can create!

- You'll mostly be editing your `variables/custom-theme.less` colours ...
    - You can reference the `--color-code-*` variables in `breezedark.less`
- You can also view Pandoc's Skylighting theme colours (see below)
    - They're fine, but there's [much better](https://draculatheme.com/) themes in the wild!

If you'd like to make finer-grain changes to the flashcard styles (e.g: `--font-*` variables), you'll find them in `base/variables/typography.less` and (for basic changes) the `/base/html`  folder. I wouldn't go too crazy with changes, or else you may as well fork this repo and build your own.

It's best to create your own `custom-*.less` files (adding them to a `.gitignore` file), rather than risk losing any changes when this repo updates.

### Setup is quite straightforward.

> Once you've chosen the colours you want within the `custom-*.less` files, you'll need to `// comment` out the defaults to override them in `main.less`.

1. Go to the `main.less` file
2. Create and `@import` the `base/` files:
    - `variables/custom-theme.less` (color variables)
    - `globals/custom-theme.less` (Pandoc's Skylighting typography)
3. **`npm run css` to compile changes**

### Preview changes:

> Just like `/build/demo/*.html` files, we can preview our changes at `/build/custom/*`

Once you've compiled your `custom-theme.less` go to `/build/custom/custom-theme.html` and preview your changes! You can see how it looks with lots of different programming languages. You could also view the `build/demo/*html` files to see how they've changed too.


## A couple of notes on `/demo` and Less CSS

> ⚠️ It's not a good idea to edit the `/demo` folder!

The `/themes/demo/*` files are just for demo purposes. These can be previewed with your new CSS changes, but should be left alone. Our repository should be up-to-date with all the correct `devDependencies`, but if anything goes wrong, send me an issue.[^2]

Finally, just a quick note on Less CSS and those `.less` files. **I'm only using this to nicely order the CSS files** for quick viewing and compiling. I don't advocate using preprocessors anymore.[^3]


### A note on our light and dark themes

> It's best to stick to dark themes, but you can create a light one too!

Our main `code block`s use a dark theme. The light theme is only used for notes sections, where needed. For that reason, I'd generally stick with dark themes for your `custom-theme.less`. You _could_ look at how [Print First CSS](https://github.com/badlydrawnrob/print-first-css) manages it's light theme and use those variables if you wish, but I can't guarantee that it won't change in future.


## Adding your new theme to the Anki desktop app

> We're ready to add your brand new theme to Anki!

Open the Anki desktop app and:

1. Go to `Tools > Manage Note Types`
2. Select the `APF: ...` Note Type
3. Select the `Cards` button
4. Select the `Styling` option
5. Delete the CSS
6. Add your custom CSS from your custom `main.css` file
7. Repeat for each Card Type you'd like to edit

### Keeping your custom theme up-to-date

> Take care to keep your repository up-to-date, so that whenever [Anki Programming Flashcards](https://github.com/badlydrawnrob/anki) update, you don't lose your changes.

Every time this repo the updates it's CSS with a [new release](https://github.com/badlydrawnrob/anki/releases), make sure your clone or fork is up-to-date. Upload the `.apkg` deck to the Anki desktop app first, then manually override your CSS.

If you have any problems, [create an issue](https://github.com/badlydrawnrob/anki/issues) in this repo.


## Pandoc's Skylighting (under the hood)

> Check out Pandoc's [syntax highlighting](https://pandoc.org/chunkedhtml-demo/13-syntax-highlighting.html) and [demos](https://pandoc.org/demos.html) (number 18).

Pandoc's Skylighting comes with a bunch of default styles. The `json` names are very similar to the `--color-code-dark-*` variables and `.sourceCode` class names we're using. You can see a visual overview of [all default themes](https://github.com/badlydrawnrob/anki/issues/142).

- `pandoc --list-highlight-styles`
- `pandoc --print-highlight-style=<theme>`
- `pandoc -s data-code.md --highlight-style=<theme> -o data-code.html`

It'll take a little playing around to find the right match of colours. Have fun, and please do share your themes!

### The downsides of using Skylighting

There's a known bug in Pandoc [that I've noted here](https://github.com/badlydrawnrob/anki/issues/152) — currently some (all?) languages have limited "tokens", meaning our Markdown code blocks don't always render as well as other highlighting scripts. No matter how you arrange your colours, there's going to be trade-offs (which colours work best for each token?).

Another thing to mention is [dependency hell](../error/index.md), and I feel I've made the best of the available options for highlighting (for long-term support).


## Build your own custom Anki cards from scratch (deprecated)

> This is now out of scope for this repo.



[^1]: Our `/data/*html` files are not supposed to be rendered in the browser. They're just for speedy compiling of data ready for your Anki Flashcard fields.

[^2]: There's an issue with `npm update <github-repo-package>` in which [repos don't update properly](https://github.com/badlydrawnrob/anki/issues/65). I'll make sure `print-first-css` is kept up-to-date with each release, but for bleeding-edge versions, you'll need to make sure `devDependencies` are pointing to the correct commit number and `npm install print-first-css`. If you're having error messages with other dependencies, you might have to [`npm audit`](https://docs.npmjs.com/cli/v10/commands/npm-audit) and `npm audit fix` to remove the errors. Follow the prompts.

[^3]: There's plenty of time for preprocessors, fancy frameworks, and whatever else takes your fancy **later in your career**. Find yourself [a good book](https://www.goodreads.com/en/book/show/10361330) and get learning!
