# STYLEGUIDE

> [!IMPORTANT]
>
>  ✍️ **Strict [CommonMark](https://commonmark.org)** required\
> 💡 **See [workout for the brain](https://github.com/badlydrawnrob/anki/README.md#a-workout-for-the-brain)** for study ideas.
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

### Using the `/data/*` files for speed

Read the styleguide properly first, but there's `<-- instruction` --> in the data files for speed.

1. **Write Markdown** in data files and `npm run data`
2. **Check the `/build` folder** for the compiled HTML (under comments)
3. **Remove the `🗑️ tags`** before adding to your card's fields (in Anki)
4. **Write [fenced code blocks](https://docs.github.com/en/get-started/writing-on-github/working-with-advanced-formatting/creating-and-highlighting-code-blocks#syntax-highlighting$0)** for `code block` fields (up to 3 per field)
5. **Check this styleguide** for mistakes in your writing!

```
ⓘ View in your code editor (they're not for the browser!)
   <-- instruction --> comments in the data files for a quick-lookup.
```


## Quick Markdown lesson

> How to write your flashcards with Markdown.

Not every field requires Markdown.

| Field | Example Markdown |
| ----- | ---------------- |
| [★ Question](#-question) | Heading with &grave;inline&grave; code |
| [☆ Question Hint](#-question-hint) | Only plain characters allowed (no numbers!) |
| [☆ Subtitle](#-subtitle) | Short header (no punctuation) |
| [☆ Code Inline](#-code-inline) | someCoolShort("code") |
| [★ Code Question](#-code-question) | &grave;&grave;&grave;<br> def someCoolShort(code): <br>&nbsp;&nbsp;&nbsp;print(f"in action {code}") <br>&grave;&grave;&grave; |
| [☆ Code Answer](#-code-answer) | ... |
| [★ Answer](#-answer) | See the [strict rich markdown](#strict-rich-markdown) guide below |
| [☆ Answer Notes](#-answer-notes) | Extra information with &#42;&#42;strong&#42;&#42; notes and optional &#91;link&#93;&#40;https://elm-lang.org/examples) |

```
ⓘ New app makes writing much easier.

Anki data entry is not great, I admit. Without an add-on this the best you'll get.
The `Markdown -> Html` flow is sub-optimal, but hopefully the limited preview app
will be a big impovement. I'm spending a lot of time on making data entry nicer!!
```

### Strict Rich Markdown

> Currently for the `Answer` field only.

Example that uses a "stepper" to shows what our code does:

````text
> **Key answer learning point in bold** with the essential detail up top.
> It's nice to bold a few key answer words so they'll stand out.

- `someCoolShort("code")` and what the function does
- `code` is the argument that gets passed to `print()`
- `print(f"")` with f-string passes string to `{code}`

An extra paragraph where you can write things like _code verbs first_ but make sure you don't stray too much from the **one idea** in this flashcard. Need another code block?

```
someCoolExtra(two, words):
  print(f"Putting {two} {words} together!")
```
````

You can also use a Markdown table instead of the list, but keep headings and rows short. Tables are not part of CommonMark, but they come in handy sometimes.

```text
| What it is            | What it does                  |
| --------------------- | ----------------------------- |
| `someCoolShort(code)` | Takes a string and prints it  |
```

```
ⓘ New app makes writing much easier.

Strict Markdown and styleguide order will be enforced automatically.
```


## Card fields

> [!CAUTION]
>
> **All cards share most fields** and special fields are marked.
>
> 🧐 **Key:**
>
> - ⤷ = strict markdown
> - ★ = required
> - ☆ = optional

### ★ Question

> ⤷ `plain string` (ABC123, `inlineCode()`, basic punctuation)

The main question, statement, or fact.

```
ⓘ 🗑️ remove the `<h1>` tags (automatically wrapped)
```

### ☆ Question Hint

> ⤷ `plain string` (ABC, basic punctuation)

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

> ⤷ `code string` (short inline code grammar with any `Char`, but no `` ` `` or `/n`ewlines)

- A short line of code (not a `code block`)
- The actual function or symbol, i.e. `len()`

```
ⓘ 🗑️ remove the `<p><code>` tags (automatically wrapped)
```

### ★ Code Question

> [!IMPORTANT]
>
> **This is a special field** and depends on the card.
>
> **Make sure you add correct content** for each card type!

<details open>
<summary>
<span id="simple-front"><strong>1. Simple card</strong></span>
</summary>

> ⤷ `code block` (up to 3 fenced code blocks, `32` chars wide)

- Essential code for key learning point (fits the question)

</details>

<details>
<summary>
<span id="draw-front"><strong>2. Draw card</strong></span>
</summary>

> ⤷ `image` (minify and roughly `600`—`~1170` pixels wide)
>
> 👆 **Toggle HTML and press 📎 paperclip button** to save to Anki.

- A sketch of a program or problem
- A sample of the code we're learning
- A working app or user-interface

```
ⓘ Image size:
  @ https://community.adobe.com/questions-621/best-image-size-for-mobile-devices-643936

You must press the `‹›` button to "Toggle HTML Editor (⌘⇧X)" for this card, to
enable "Rich text preview", where you can add an image using buttons in the menu.
```

</details>

<details>
<summary>
<span id="missing-front"><strong>3. Missing card</strong></span>
</summary>

> ⤷ `code block` (requires a cloze: `{{c1::missing word::with optional hint}}`)
>
> 👆 **Toggle HTML and press `[...]`** to add cloze deletion to Anki.

- Essential code for key learning point (fits the question)
- See [cloze deletion](https://docs.ankiweb.net/editing.html#cloze-deletion) in Anki docs

```
ⓘ Image size:
  @ https://community.adobe.com/questions-621/best-image-size-for-mobile-devices-643936

ⓘ Bug:
  @ https://github.com/badlydrawnrob/anki/issues/132 (may break `code block`)

It can be easier to press the `‹›` button to "Toggle HTML Editor (⌘⇧X)" for this
card, to enable "Rich text preview", where you can add press the `[...]` button
in the menu.
```

</details>


### ☆ Code Answer

> [!IMPORTANT]
>
> **This is a special field** and depends on the card.
>
> **Make sure you add correct content** for each card type!

<details open>
<summary>
<span id="simple-back"><strong>1. Simple card</strong></span>
</summary>

> ⤷ `code block` (up to 3 fenced code blocks, `32` chars wide)

- Essential code for key learning point (fits the question)

</details>

<details>
<summary>
<span id="draw-back"><strong>2. Draw card</strong></span>
</summary>

> ⤷ `image` (minify and roughly `600`—`~1170` pixels wide)
>
> 👆 **Toggle HTML and press 📎 paperclip button** to save to Anki.

- A sketch of a program or problem
- A sample of the code we're learning
- A working app or user-interface

```
ⓘ Image size:
  @ https://community.adobe.com/questions-621/best-image-size-for-mobile-devices-643936

You must press the `‹›` button to "Toggle HTML Editor (⌘⇧X)" for this card, to
enable "Rich text preview", where you can add an image using buttons in the menu.
```

</details>

<details>
<summary>
<span id="missing-back"><strong>3. Missing card (not used)</strong></span>
</summary>

> [!IMPORTANT]
>
> **Missing card does not use this field** — only the `Code Question` field.

</details>


### ★ Answer

> [!IMPORTANT]
>
> **See Quick Markdown Lesson** for how to write strict rich markdown.
>
> ⤷ [`strict rich markdown`](#strict-rich-markdown) (see above)

- A short explanation of what we're trying to learn
- A stepper to walk through the `code block`
- A table of contents (keep lines short, not part of CommonMark)

```
ⓘ Markdown tips:
  One blockquote, paragraphs, one list OR table (not both!), one code block.
  List stepper should put `codeVerb()` first on each line for readability, and
  table content should be short and sweet. Strictness makes reading reliable.
```


### ☆ Answer Notes

> ⤷ `strict markdown` (bold, italic, links)

- Links to documentation
- Supplementary notes (or similar functions)
- A common link or story between cards

---


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
