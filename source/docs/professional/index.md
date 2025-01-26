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
> We're only interested in colours and typography for customisations. Apologies if this is slightly convoluted right now. It'll take a little playing around to find the right match of colours. **Have fun, and please do share your themes!**

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
    |          custom-theme.less -- change this!
    │          typography.less
    │
    └───globals
    │     breezedark.less
    |     custom-theme.less -- to change this :)
    │
    └───themes
        │
        └───custom
              custom-theme.md -- compile this ...
              template.html
|
build
|
└───custom -- and preview changes here!
```

### Let's quickly run through those files:

> `custom-theme.less` holds all the colours you'll need to create your own theme. We're using CSS variables (e.g: `var(--color-code-dark-*)`) and compiling them with [Less CSS](https://lesscss.org/).

- You'll mainly be editing the `variables/custom-theme.less` colours ...
- You can reference the `--color-code-*` variables from `breezedark.less`:
    - This holds all the variables you'll need.
- You can also reference Pandoc's Skylighting themes (see below) for colours ...
    - But there's [better](https://draculatheme.com/) themes out in the wild!

If you'd like to also change the typography, such as `--font-*` variables, you'll can find this in `typography.less` and other files. You can edit in-place or create `custom-*.less` files and add them to `.gitignore` so you don't have to keep making changes when the repo updates.

### Setup is quite straightforward.

> Once you've chosen the colours you want within the `custom-*.less` files, you'll need to `// comment` out the default ones, to override them in `main.less`.

1. Go to the `main.less` file
2. Create and `@import` the `base/` files:
    - `variables/custom-theme.less`
    - `globals/custom-theme.less`
3. **`npm run css` to compile changes**

You may also need to change (or copy) other `base/html/*.less` files for finer-grain changes.

### Preview changes:

> Just like `/build/demo/*.html` files, we can preview our changes at `/build/custom/*`

Once you've compiled your `custom-theme.less` go to `/build/custom/custom-theme.html`:

- Preview your changes here ...
- You can see how it looks with different programming languages!


### A note on our light and dark themes

> You could convert our dark theme to a light theme if you wished. I'd encourage you to just use the `var(--color-code-dark-*)` variables anyway, as it'll take quite a bit of work to do it differently.

1. `.sourceCode .gl-CodeBlock` classes wrap our colour theme classes
2. I'm only styling a _dark_ theme in this repo, which is used for `(code block)` fields in Anki.
3. A light theme is inherited from [Print First CSS](https://github.com/badlydrawnrob/print-first-css):
    - This is used anywhere else you try to use a compiled Markdown code block.

If you _really_ wanted, you could create a new light theme as well as a new dark theme, but I'd probably advise against that. Keep things simple.


## Pandoc's Skylighting (under the hood)

> Check out Pandoc's [syntax highlighting](https://pandoc.org/chunkedhtml-demo/13-syntax-highlighting.html) and [demos](https://pandoc.org/demos.html) (number 18)

Pandoc's Skylighting comes with a bunch of `--list-highlight-styles` and `--print-highlight-style=<theme>` that you can reference when editing your `--color-code-dark-*` variables. I currently work in the following way:

1. Setup a few programming language `code block`s in `themes/custom/custom-theme.md`,
2. Start making changes in the `custom-theme.less` files, then `npm run css`,
3. Compile the `custom/*.md` files to `build/custom/*` and view your changes,
4. Rinse and repeat until you've got colours you're happy with.
5. You can also view the `build/demo/*html` files to see how they look, too.

If you want to check out all of Pandoc's highlighting themes to get inspiration, you can use `pandoc -s data-code.md --highlight-style=<theme> -o data-code.html`. You can also output `pandoc --print-highlight-style=breezedark` json (or a different theme) and cross-reference those styles. The `span` classes in the `base/globals/breezedark.less` file matches up with the `json` keys (and our `--color-code-dark-*` variables).

It'll take a little playing around to find the right match of colours. Have fun, and please do share your themes!

### The downsides of using Skylighting

There's a known bug in Pandoc [that I've noted here](https://github.com/badlydrawnrob/anki/issues/152) — currently some (all?) languages have limited "tokens", meaning our Markdown code blocks don't always render as well as other highlighting scripts. No matter how you arrange your colours, there's going to be trade-offs (which colours work best for each token?).

Another thing to mention is [dependency hell](https://github.com/badlydrawnrob/anki/blob/master/source/docs/error/index.md), and I feel I've made the best of the available options for highlighting (for long-term support).


## Adding your new theme to the Anki desktop app

> Now your brand new theme has been built, we're ready to add it to Anki!

Open the Anki desktop app and:

2. Go to `Tools > Manage Note Types`.
3. Select the `Anki flashcards: ...` Note Type.
4. Select the `Cards` button.
5. Select the `Styling` option.
6. Delete the CSS
7. Add your custom CSS from the compiled `main.css` file.
7. Repeat for each Card Type you'd like to edit.


## Keeping your custom theme up-to-date

> Take care to keep your repository up-to-date, so that whenever [Anki Programming Flashcards](https://github.com/badlydrawnrob/anki) update, you don't lose your changes.

Every time this repo the updates it's CSS with a [new release](https://github.com/badlydrawnrob/anki/releases), make sure your clone or fork is up-to-date. Upload the `.apkg` deck to the Anki desktop app first, then manually override your CSS.

If you have any problems, [create an issue](https://github.com/badlydrawnrob/anki/issues) in this repo.


## A couple of notes on `/demo` and Less CSS

The `/themes/demo/*` files are just for demo purposes. These can be previewed with your new CSS changes, but should be left alone. Our repository should be up-to-date with all the correct `devDependencies`, but if anything goes wrong, send me an issue.[^1] The `/data/*html` files are for viewing in your code editor only.[^2].

Finally, just a quick note on Less CSS and those `.less` files. **I'm only using this to nicely order the CSS files** for quick viewing and compiling. I don't advocate using preprocessors anymore.[^3]


## Build your own custom Anki cards from scratch (deprecated)

> This is now out of scope for this repo.



[^1]: There's an issue with `npm update <github-repo-package>` in which [repos don't update properly](https://github.com/badlydrawnrob/anki/issues/65). I'll make sure `print-first-css` is kept up-to-date with each release, but for bleeding-edge versions, you'll need to make sure `devDependencies` are pointing to the correct commit number and `npm install print-first-css`. If you're having error messages with other dependencies, you might have to [`npm audit`](https://docs.npmjs.com/cli/v10/commands/npm-audit) and `npm audit fix` to remove the errors. Follow the prompts.

[^2]: Our `/data/*html` files are not supposed to be rendered in the browser. They're just for speedy compiling of data ready for your Anki Flashcard fields.

[^3]: There's plenty of time for preprocessors, fancy frameworks, and whatever else takes your fancy **later in your career**. Find yourself [a good book](https://www.goodreads.com/en/book/show/10361330) and get learning!
