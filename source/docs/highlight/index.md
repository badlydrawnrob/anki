# Themes

- [Home](../../../README.md)
    + 💡 [Simple](../simple/index.md) card
    + 🔎 [Missing!](../missing/index.md) card
    + 🖍️ [Draw!](../draw/index.md) card
    + 🧑‍🎨 **[Add color to your code](../highlight/index.md)**
    + 🧑‍🎓 [The professional way](../professional/index.md)


## Basic syntax highlighting

You can mark any inline **[`code string`](../simple/index.md#-syntax-inline-code)** field with **bold** or _**italic**_ buttons in the Anki editor for basic highlighting. It uses simple [HTML5 tags](https://developer.mozilla.org/en/docs/Web/HTML/Element) to add colour to your code.

1. **Bold**:
    + `<b>` or `<strong>`
2. **Italic**:
    + `<i>` or `<em>`

For regular `string` fields, such as `★ Title` you can highlight a code section by wrapping your text in a `code` tag. Something like this:

```html
<!-- ★ Title card field is wrapped in a `h1` -->
<code>{ string = <b>"bold"</b>, italic = <i>42</i> }</code>
```


## Full syntax highlighting

> - **View our [default colour themes](../../README.md#syntax-highlighting).**
> - We use Markdown rendered `code block`s for our pretty colours.
>
> For beginners, use this [online tool](https://tinyurl.com/mr43ydea); if you know how to use `npm`, [🧑‍🎓 it's more fun with a compiler](../../README.md#its-more-fun-with-a-compiler-advanced)

Basic colours are fine for small lines of code, but you'll probably want to go [full colour](#full-syntax-highlighting) next. Wherever you see a **[`code block`](../simple/index.md#-sample-code-block)**, Anki Theme provides pretty colours (CSS), and we generate your highlighted code using Markdown and [Pandoc](https://pandoc.org/demo/example18f.html). Here's how:

1. Write your code as [Markdown fenced code blocks](https://help.github.com/articles/github-flavored-markdown/#fenced-code-blocks),
2. Convert [Markdown to HTML5 online](https://tinyurl.com/mr43ydea),
3. Add a card in Anki,
4. Choose a [`code block`](../simple/index.md#-sample-code-block) field,
5. Add your rendered HTML,
6. Press the `A𝐴` button ([`Toggle Visual Editor ⌘⇧X`](https://github.com/badlydrawnrob/anki/issues/62)) to preview your code,
7. Repeat the process — save your card!

That's it. You're done. Simple, right?!


### Customising themes (the easy way)

For quick customisations, view this file:

```text
source
│
└───style
    │
    └───base
        │
        └───variables
              breezedark.less
```

The easiest way to change the colors for the `code string` and `code block` fields is to edit the `--color-code-bold`, `--color-code-italic`, and `--color-code-dark-*` variables in your Anki cards. This will overwrite the defaults.

### How to change your theme colours

> If you're a beginner, here's how to change colours.
> The [🧑‍🎓 professional guide](./source/docs/professional/index.md) provides a better way.

1. You'll have the latest [Anki flashcards release](https://github.com/badlydrawnrob/anki/releases).
2. In the Anki app menu, go to `Manage Note Types`.
3. Select the `Anki flashcards: ...` Note Type.
4. Select the `Cards` button.
5. Select the `Styling` option.
6. Copy our `--color-code` variables from [`breeze.dark.less`](../../style/base/variables/breezedark.less).
7. Add them to the bottom of the `Styling` box, and [edit them](https://github.com/badlydrawnrob/anki/issues/78).
8. Repeat for all Anki flashcard card types

#### Updates to Anki flashcards

If you edit your colors this way, **changes will be lost every time** you download a new release of Anki Flashcards and import them to Anki. See below for a better way.


## Custom themes, `markdown->html` data files, and offline cards
### A better way to manage our flashcards

> So far we've learned how to use colours, but we can do better!
> Every time you update Anki Programming Flashcards, you'll lose changes.

Once you've levelled up your programming skills and the words "[clone](https://github.com/git-guides/git-clone)", "[fork](https://docs.github.com/articles/fork-a-repo)", "`npm`" and "[terminal](https://en.wikipedia.org/wiki/Command-line_interface)" don't scare you, you're just about ready to do something interesting: let's keep our themes up-to-date, save our changes, create cards at lightning speed _offline_ with Markdown, all with a few little tools ...

Let's do things the professional way, because [🧑‍🎓 it's more fun with a compiler!](its-more-fun-with-a-compiler-advanced)

