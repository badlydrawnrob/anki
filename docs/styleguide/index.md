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
```

You can use the `/data/*` files for speedy writing, which have `<-- instruction -->` comments. Some fields require deleting the `🗑️ tags` before adding your card field data to Anki (see [quick markdown lesson](#-quick-markdown-lesson)).

```
# Markdown -> Html
npm run data

# Html -> Markdown
npm run data-code-reverse
```

Check the `/build/data` folder for `card.html` (card fields) and `code.html` (a [fenced code block](https://commonmark.org/help/tutorial/09-code.html) in your editor (not the browser).


## Quick Markdown lesson

> [!NOTE]
>
> Writing your flashcards with Markdown.
>
> 🧐 **Key:**
>
> - &#95;italic&#95; &#42;&#42;bold&#42;&#42; &grave;inlineCode()&grave; &#91;link&#93;&#40;()

| Card field | Example Markdown |
| --------- | ---------------- |
| [★ Question](#-question) | How do you write &grave;fencedCode&grave; blocks? |
| [☆ Question Hint](#-question-hint) | Uses CommonMark characters<sup>¶</sup>  |
| [☆ Subtitle](#-subtitle) | Finger exercises<sup>¶</sup> |
| [☆ Code Inline](#-code-inline) | fencedCode("block") |
| [★ Code Question](#-code-question)<sup>∆</sup> | &grave;&grave;&grave;<br> def fencedCode(block): <br>&nbsp;&nbsp;&nbsp;print(f"renders the fenced code {block}") <br>&grave;&grave;&grave; |
| [☆ Code Answer](#-code-answer) | ... |
| [★ Answer](#-answer) <sup>§</sup> | See `§: rich strict markdown` notes below |
| [☆ Answer Notes](#-answer-notes) | Extra information for &#95;fenced code blocks&#95; can be found &#91;here&#93;&#40;https://commonmark.org/help/tutorial/09-code.html) |

Not every field requires Markdown (requires deleting `🗑️ tags` in `/data/*` files).

````text
¶: Field has limited characters (see card fields)
∆: Example of a fenced code block (see CommonMark docs)
§: Rich Strict Markdown used for `★ Answer` field, which looks like this:


> **Answers one key point should be in bold** with the essential detail up top.
> This makes the answer stand out and read quickly, when reviewing the flashcard.

- `fencedCode("block")` steps through it's code
- `block` is the argument which passes to `print()`
- `print(f"")` allows us to use the argument in the body

Perhaps you'll have an extra paragraph to write things like `_code verbs go first_
but make sure you're not straying too far from the **one idea** in this flashcard!

```
def oneExtra(code, block):
  print(f"If an extra {code} {block} helps finish the answer!")
```
````

If you prefer, you can use [a 2-column table](https://tools.timodenk.com/markdown-table-to-html) instead of the list and copy that as HTML. Headers and rows should be short and sweet!

```
ⓘ New app makes writing much easier.

Anki data entry is not great, I admit; without an add-on this the best you'll get.
The `Markdown -> Html` flow is sub-optimal, but hopefully the limited preview app
will be a big impovement. I'm spending a lot of time on making data entry nicer!!
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

> ⤷ `plain string` (ABC123, &grave;inlineCode()&grave;, basic punctuation)

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

> ⤷ `code string` (any inline code character, but no `` ` `` or `/n`ewlines)

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

<hr>

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

<hr>

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
