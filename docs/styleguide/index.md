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

## Installing the Legacy compiler

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

You can use the `/data/*` files for speedy writing, which have `<-- instruction -->` comments. Some fields require deleting the html `🗑️ tags` from `/build/data/*` before adding your data to Anki flashcards (see [quick markdown lesson](#-quick-markdown-lesson)).

```
# Markdown -> Html
npm run data

# Html -> Markdown
npm run data-code-reverse
```

Check the `/build/data` folder for `card.html` (card fields) and `code.html` (a [fenced code block](https://commonmark.org/help/tutorial/09-code.html)) in your editor — not the browser.


## Quick Markdown lesson

> [!NOTE]
>
> ✍️ **Writing your flashcards with Markdown.**
>
> 🧐 **Key:**
>
> - &#95;italic&#95;
> - &#42;&#42;bold&#42;&#42;
> - &grave;inlineCode()&grave;
> - &#91;link&#93;(https://elm-lang.org/)

| Card field | Example Markdown |
| --------- | ---------------- |
| [★ Question](#-question) | How do you write &grave;fencedCode&grave; blocks? |
| [☆ Question Hint](#-question-hint) | Remember your CommonMark characters<sup>¶</sup>  |
| [☆ Subtitle](#-subtitle) | Finger exercises<sup>¶</sup> |
| [☆ Code Inline](#-code-inline) | fencedCode("block") |
| [★ Code Question](#-code-question)<sup>∆</sup> | &grave;&grave;&grave;<br> def fencedCode(block): <br>&nbsp;&nbsp;&nbsp;print(f"renders the fenced code {block}") <br>&grave;&grave;&grave; |
| [☆ Code Answer](#-code-answer) | ... |
| [★ Answer](#-answer) <sup>§</sup> | See &grave;§: rich strict markdown&grave; notes below |
| [☆ Answer Notes](#-answer-notes) | Extra information for &#95;fenced code blocks&#95; can be found &#91;here&#93;&#40;https://commonmark.org/help/tutorial/09-code.html) |

Not every field requires Markdown (requires deleting html `🗑️ tags` from `/build/data/*`).

````text
¶: Field has limited characters (see card fields)
∆: Example of a fenced code block (see CommonMark docs)
§: Rich Strict Markdown used for `★ Answer` field, which looks like this:


> **Answers one key point in bold text** with the essential detail up top, in a
> handy blockquote. Makes the answer stand out and read quickly, for reviewing!

- `fencedCode("block")` steps through it's code
- `block` is the argument which passes to `print()`
- `print(f"")` allows us to use the argument in the body

Perhaps you'll have an extra paragraph to write things like `_code verbs go first_
but make sure you're not straying too far from the **one idea** in this flashcard!

```
def oneExtra(code, block):
  print(f"If an extra {code} {block} helps to finish the answer!")
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
> **All cards share most fields** and special fields are `▶ marked`.
>
> 🧐 **Key:**
>
> - ⤷ = strict markdown
> - ★ = required
> - ☆ = optional

### ★ Question

> ⤷ `plain string` (ABC123, &grave;inlineCode()&grave;, basic punctuation)

The main question, statement, idea, or fact; a key learning outcome.

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
> **Special field** and depends on the card.
>
> Check your content is correct for the card type.

<details open>
<summary>
<span id="simple-front"><strong>Simple card</strong></span>
</summary>

<br>

> ⤷ `code block` (up to 3 fenced code blocks, `32` chars wide)

- A sample of the code we're learning (essential code only)
- A code sample that fits our one learning outcome (essential code only)

</details>

<hr>

<details>
<summary>
<span id="draw-front"><strong>Draw card</strong></span>
</summary>

<br>

> ⤷ `image` (minify and roughly `600`—`~1170` pixels wide)

Press the `‹›` button to "Toggle HTML Editor (⌘⇧X)" for this card, to enable the
"Rich text preview", then add an image using the 📎 paperclip button.

- A sketch of a program or problem
- A sample of the code we're learning
- A working app or user-interface

```
ⓘ Image size:
  @ https://community.adobe.com/questions-621/best-image-size-for-mobile-devices-643936
```

</details>

<hr>

<details>
<summary>
<span id="missing-front"><strong>Missing card</strong></span>
</summary>

<br>

> ⤷ `code block` (requires a cloze: `{{c1::missing word::with optional hint}}`)

Press the `‹›` button to "Toggle HTML Editor (⌘⇧X)" for this card, to enable the
"Rich text preview", then add a [cloze deletion tag](https://docs.ankiweb.net/editing.html#cloze-deletion) using the `[...]` button.

- A missing word or phrase you've got to remember
- A code sample that fits our one learning outcome (essential code only)

```
ⓘ Bug:
  @ https://github.com/badlydrawnrob/anki/issues/132 (may break `code block`)
```

</details>


### ☆ Code Answer

> [!IMPORTANT]
>
> **Special field** and depends on the card.
>
> **Make sure you add correct content** for each card type!

<details open>
<summary>
<span id="simple-back"><strong>Simple card</strong></span>
</summary>

<br>

> ⤷ `code block` (up to 3 fenced code blocks, `32` chars wide)

- The answer or key learning point
- The essential code that fits the question
- The lesson you've learned

</details>

<hr>

<details>
<summary>
<span id="draw-back"><strong>Draw card</strong></span>
</summary>

<br>

> ⤷ `image` (minify and roughly `600`—`~1170` pixels wide)

Press the `‹›` button to "Toggle HTML Editor (⌘⇧X)" for this card, to enable the
"Rich text preview", then add an image using the 📎 paperclip button.

- The answer or key learning point
- The essential code that fits the question
- The sketch of the solution or answer

```
ⓘ Image size:
  @ https://community.adobe.com/questions-621/best-image-size-for-mobile-devices-643936
```

</details>

<hr>

<details>
<summary>
<span id="missing-back"><strong>Missing card (not used)</strong></span>
</summary>

<br>

⚠️ **Field is not used for this card type** — only the `Code Question` field!

</details>


### ★ Answer

> [!NOTE]
>
> **See [Quick Markdown Lesson](#quick-markdown-lesson)** for writing strict rich markdown.
>
> ⤷ `strict rich markdown`

- A short explanation of what we're trying to learn
- A stepper to walk through the `code block` (or a useful list)
- A table of contents (not part of CommonMark)

```
ⓘ Blockquote:
   If there's only a single paragraph in `★ Answer`, no need for a blockquote.

ⓘ Tables and lists:
   Only one table OR a list (not both), and `codeVerbs()` always go first!
```


### ☆ Answer Notes

> ⤷ `strict markdown` (bold, italic, links)

- Links to documentation (no more than 3)
- Supplementary notes (or similar functions)
- A common link or story between cards

---


<details>
<summary>
<span id="simple-back"><strong>🗑 Deprecated</strong></span>
</summary>

<br>

1. `Code Inline` field no longer colors **bold** and _italic_ for styling.
2. `Markdown` field no longer required: `npm run data-code-reverse` if needed.

```
ⓘ New app features

Flashcards will edit raw Markdown and cache HTML where required.
```

</details>
