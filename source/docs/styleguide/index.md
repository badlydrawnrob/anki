# STYLEGUIDE

> ✍️ **Strict [CommonMark](https://commonmark.org) format.**<br>
> 📧 **Questions?** Get in touch and let me know.

No JS. Strict Markdown. Strict HTML.

```
ⓘ New app will introduce quicker-to-read, opinionated, strict styleguide.

Sharing becomes easier; reading becomes predictable and standardised (a linter).
Not enforced in Legacy, but will be in limited preview app.

What's a linter? @ https://tinyurl.com/linter-for-beginners
```

## Installing the compiler

> 📖 **Read this styleguide properly first!**

1. Git clone
2. Install [pandoc](https://pandoc.org/installing.html) (not `.wasm`)
3. Run the commands below

```
# Dependencies
npm install

# Build
npm run build

# Data
npm run data

# Html -> Markdown
npm run data-code-reverse
```

The `/data/*` files help you quickly write your flashcards. They contain `<!-- instructions -->` in comments, but read docs below first. View in your code editor — they're not meant for the browser!

## Writing cards

> 🧐 See [workout for the brain](https://github.com/badlydrawnrob/anki/README.md#a-workout-for-the-brain) for study ideas.<br>
> ⤷ ★ = required field | ☆ = optional field

- **Write Markdown** in `/data/*` files and `npm run data`
- **Check the `/build` folder** for the compiled HTML (under comments)
- **Remove the `🗑️ tags`** before adding to your card's fields (in Anki)
- **Write [fenced code blocks](https://docs.github.com/en/get-started/writing-on-github/working-with-advanced-formatting/creating-and-highlighting-code-blocks#syntax-highlighting$0)** for `code block` fields (up to 3)
- **Check this styleguide** for mistakes in your writing!

```
ⓘ New app makes writing much easier.

Anki data entry is not great, I admit. Without an add-on this the best you'll get.
The `Markdown -> Html` flow is sub-optimal, but hopefully the limited preview app
will be a big impovement. I'm spending a lot of time on making data entry nicer!!
```

## Common fields (all cards)

💡 See [a workout for the brain](https://github.com/badlydrawnrob/anki/README.md#a-workout-for-the-brain) for study ideas.

### ★ Question

> ⤷ `plain string` (ABC123, `inlineCode()`, basic punctuation)

The main question, statement, or fact.

```
ⓘ 🗑️ remove the `<h1>` tags (automatically wrapped)
```

### ☆ Question Hint

> ⤷ `plain string` (ABC123, basic punctuation)

- Helpful for when the header question grows too long ...
- Or the `code block` requires some context or a hint
- Alternative to using code comments!

### ☆ Subtitle

> ⤷ `plain string` (ABC, no punctuation)

- A short helpful tip or guide
- Naming a group of related cards
- The type of syntax we're learning

```
ⓘ 🗑️ remove the `<h2>` tags (automatically wrapped)
```

### ☆ Code Inline

> ⤷ `code string` (inline code grammar, any `Char` except `` ` `` or `/n`ewlines)

- A short line of code (not a `code block`)
- The actual function or symbol, i.e. `len()`

```
ⓘ 🗑️ remove the `<p><code>` tags (automatically wrapped)
```

### ★ Code Question

> ⤷ `code block` (up to 3 fenced code blocks, `32` chars wide)

- Essential code for key learning point (fits the question)
- See notes below for Draw! and Missing! cards

```
ⓘ ⚠️ Draw! card requires an image:
  (toggle HTML » press 📎 paperclip button)

ⓘ ⚠️ Missing! card requires a cloze field:
  `{{c1::missing word::optional hint}}` (toggle HTML » press `[...]`)

It's best to press the `‹›` button to "Toggle HTML Editor (⌘⇧X)" for these cards.
Rich text preview is enabled, where you add content by using buttons in top-right.
Add correct content for each card type! (📎 image, `[...]` cloze, `[...]+` cloze).

Cloze:
@ https://docs.ankiweb.net/editing.html#cloze-deletion

Bugs:
@ https://github.com/badlydrawnrob/anki/issues/132 (may break `code block`)
```

### ☆ Code Answer

> ⤷ `code block` (up to 3 fenced code blocks, `32` chars wide)

- Essential code for key learning point (describes the answer)

```
ⓘ Missing! card does not have this field.
```

### ★ Answer

> ⤷ `strict rich markdown` (blockquote, paragraph, lists, table, `code block`)

- A short explanation of what we're trying to learn
- A stepper to walk through the `code block` (code `verbs()` go first)
- A table of contents (keep lines short, not part of CommonMark)

```
ⓘ Preferred structure below (list OR table — only one per card!)

> **Key learning point ...**
> With essential detail: it's nice to bold the key part.

- `function()` optional stepper (1)
- `variable` with next step (2)
- `finally` the last step (3)

| What it is | What it does |
|------------|--------------|
| Optional   | Table        |

Paragraph or two that supplements the key learning point.
```

### ☆ Answer Notes

> ⤷ `strict markdown` (bold, italic, links)

- Links to documentation
- Supplementary notes (or similar functions)
- A common link or story between cards

---

## Draw! Missing! Card

> Special fields used for these cards.

### ★ Code Question (Draw!)

> ⤷ `image` (minify and save to Anki with 📎 paperclip button)

- A sketch of a program or problem
- A sample of the code we're learning
- A working app or user-interface

### ★ Code Question (Missing!)

> ⤷ `code block` (requires a `{{c1::missing word::with optional hint}}`)

`Code Answer` field is not used (uses `Code Question` front and back)

- See the [code question field](#code-question)!
- See the [cloze deletion](https://docs.ankiweb.net/editing.html#cloze-deletion) section of Anki docs

---

## ⚠️ Deprecated

> Disagree with any of these changes? Let me know!

1. `Code Inline` field no longer colors **bold** and _italic_ for styling.
2. `Markdown` field no longer required: `npm run data-code-reverse` if needed.

```
ⓘ New app flashcards will edit with raw Markdown and cache HTML where required.
```
