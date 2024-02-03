---
title:
  Missing! Card Data
card type: |
  A question with a [missing] word;
  - A missing function or expression you have to guess,
  - A missing input or output to remember.
card key: |
  ★ Required,
  ☆ Optional (recommended),
  ✎ Optional (notes, markdown),
  ⤷ Field Type.
docs:
  http://tinyurl.com/anki-missing-card
notes:
  Compile with `npm run pandoc`.
  View compiled file in your text editor or a Chrome-type browser.
  The `## H2` titles represent Anki text fields, with the contents below.
css: ../style/main.css
---


<!-- -------------------------------------------------------------------------
    ★ Title

    ⤷ `string` (auto wrapped with a `H1` tag)
-------------------------------------------------------------------------- -->
## ★ Title

What type of condition group do these symbols belong to?


<!-- -------------------------------------------------------------------------
    ☆ Subtitle

    ⤷ `string` (auto wrapped with a `H2` tag)
-------------------------------------------------------------------------- -->
## ☆ Subtitle

Conditions


<!-- -------------------------------------------------------------------------
    ☆ Syntax (inline code)

    ⤷ `code string` (auto wrapped with <p><code> tag)
-------------------------------------------------------------------------- -->
## ☆ Syntax (inline code)

false


<!-- -------------------------------------------------------------------------
    ★ Key point (code block or image)

    ⤷ `code block | image`

      | Requires `markdown` fenced code block;
      | Requires `{{c1::cloze}}` tag(s))

      A markdown fenced code block that will compile to our highlighted
      code with Pandoc. Once you've compiled your code block, be sure to
      add at least one cloze deletion in your Anki card:

        `{{c1::the answer::HINT TEXT}}`

      Here's an example cloze card:

        @ https://codepen.io/testuser-247585903/pen/BabRjvb

      Here's how to do it in the Anki editor:

      1. `Toggle HTML Editor ⌘⇧X` (`‹›`) to enable rich text preview
      2. Highlight the text that you'd like to convert to a cloze.
      3. Press the `[...]` or `[...]+` button to add the cloze deletion

      !# Warning: These buttons may break your code:
        @ https://github.com/badlydrawnrob/anki/issues/132
-------------------------------------------------------------------------- -->
## ★ Key point (code block or image)

> Once you've generated your code, you'll need to add the `{{c1::cloze tag}}` somewhere in the code. To do this, press the `A𝐴` button ([`Toggle Visual Editor ⌘⇧X`](https://github.com/badlydrawnrob/anki/issues/62)) to enter rich text mode, then press `[...]` or `[...]+` button to add the cloze deletion tags.

```python
[0, 20] # {{c1::>= 0, <= 20}}

(0, 20] # {{c1::> 0, <= 20}}

(0, 20) # {{c1::> 0, < 20}}

[0, 20) # {{c1::>= 0, < 20}}
```


<!-- -------------------------------------------------------------------------
    ★ Key point notes

    ⤷ `rich html`
-------------------------------------------------------------------------- -->
## ★ Key point notes

An example of [intervals](https://www.mathsisfun.com/sets/intervals.html).

- `[` symbol means **include** the number.
- `(` symbol means **exclude** the number.


<!-- -------------------------------------------------------------------------
    ✎ Other notes

    ⤷ `rich html`
-------------------------------------------------------------------------- -->
## ✎ Other notes

More [ways to think about intervals](https://www.mathsisfun.com/sets/intervals.html)


<!-- -------------------------------------------------------------------------
    ✎ Markdown

    ⤷ `raw text`

      Do not add the compiled HTML to your card, rather, use the raw text
      Markdown fenced code block. This makes for easier editing of a card
      later on.

      Please be careful:

        Warning: remove all `{{c1:cloze}}` cloze deletion tags!

      If you save your card with cloze deletion tags in the `✎ Markdown`
      field, Anki will throw an error, and you might not be able to save
      your card.
-------------------------------------------------------------------------- -->
## ✎ Markdown

> Beware when saving your card! If you have `{{c1::cloze tags}}` in the Markdown field, Anki will complain!

```python
[0, 20] # >= 0, <= 20

(0, 20] # > 0, <= 20

(0, 20) # > 0, < 20

[0, 20) # >= 0, < 20
```
