# STYLEGUIDE

> [!IMPORTANT]
>
>  ✍️ **Strict [CommonMark](https://commonmark.org)** required**
>
> 📧 **Questions?** Get in touch.

No JS. Strict Markdown. Strict HTML.

```
ⓘ New app introduces strict styleguide.
ⓘ Quick to read, opinionated, standardised.

Sharing becomes easier; reading is predictable and standardised.
Not enforced in Legacy, but linter arrives in limited preview app.

What's a linter? @ https://tinyurl.com/linter-for-beginners
```

## Installing the compiler

> [!TIP]
>
> 📖 **Read the styleguide properly first!**

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

**The `/data/*` files help you quickly write your flashcards.** They contain `<!-- instructions -->` in comments, but read docs below first. View in your code editor — they're not meant for the browser!

## Writing cards

> [!IMPORTANT]
>
> 💡 **See [workout for the brain](https://github.com/badlydrawnrob/anki/README.md#a-workout-for-the-brain)** for study ideas.
>
> 🧐 **Key:**
>
> - ⤷ = strict markdown
> - ★ = required
> - ☆ = optional

1. **Write Markdown** in `/data/*` files and `npm run data`
2. **Check the `/build` folder** for the compiled HTML (under comments)
3. **Remove the `🗑️ tags`** before adding to your card's fields (in Anki)
4. **Write [fenced code blocks](https://docs.github.com/en/get-started/writing-on-github/working-with-advanced-formatting/creating-and-highlighting-code-blocks#syntax-highlighting$0)** for `code block` fields (up to 3 per field)
5. **Check this styleguide** for mistakes in your writing!

```
ⓘ New app makes writing much easier.

Anki data entry is not great, I admit. Without an add-on this the best you'll get.
The `Markdown -> Html` flow is sub-optimal, but hopefully the limited preview app
will be a big impovement. I'm spending a lot of time on making data entry nicer!!
```

## Simple! Card

> [!CAUTION]
>
> **All cards share most fields**
>
> **See [Draw!](#draw-card) and [Missing!](#missing-card)** for special fields.

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

> [!IMPORTANT]
>
> ⤷ `code block` (up to 3 fenced code blocks, `32` chars wide)
>
> **See [Draw!](#draw-card) and [Missing!](#missing-card)** for special fields.

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

Images:
@ https://community.adobe.com/questions-621/best-image-size-for-mobile-devices-643936

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
ⓘ Preferred styleguide below
ⓘ List OR table (not both in one card)

> **Key answer learning point in bold** with some extra
> essential detail (it's nice to bold a few key answer words).

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

## Draw! Card

### ★ Code Question

> [!NOTE]
>
> ⤷ `image` (minify and roughly `600`—`~1170` pixels wide)
>
> Toggle HTML and press 📎 paperclip button to save to Anki.

- A sketch of a program or problem
- A sample of the code we're learning
- A working app or user-interface

## Missing! Card

### ★ Code Question

> [!NOTE]
>
> ⤷ `code block` (requires a `{{c1::missing word::with optional hint}}`)
>
> Toggle HTML and press `[...]` to add cloze deletion to Anki.

`Code Answer` field is not used (uses `Code Question` front and back)

- See the [cloze deletion](https://docs.ankiweb.net/editing.html#cloze-deletion) section of Anki docs


## 🗑 Deprecated

> [!Note]
>
> **Disagree with any of these changes?** Get in touch.

1. `Code Inline` field no longer colors **bold** and _italic_ for styling.
2. `Markdown` field no longer required: `npm run data-code-reverse` if needed.

```
ⓘ New app features

Flashcards will edit raw Markdown and cache HTML where required.
```
