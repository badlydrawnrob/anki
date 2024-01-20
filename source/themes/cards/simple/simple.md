---
title:
  Simple Card Data
card type: |
  A simple `question->answer` card;
  we're asking the question: "what does this code do?", e.g:

  - A function with an output you have to guess,
  - A class with a method that you need to call.
card key: |
  ★ Required,
  ☆ Optional (recommended),
  ✎ Optional (notes, markdown),
  ⤷ Field Type.
docs:
  http://tinyurl.com/anki-simple-card
notes:
  View compiled file in your text editor or a Chrome-type browser.
  The `## H2` titles represent Anki text fields, with the contents below.
css: ../style/main.css
---


<!-- -------------------------------------------------------------------------
    ★ Title

    ⤷ `string` (auto wrapped with a `H1` tag)
-------------------------------------------------------------------------- -->
## ★ Title

What will each <code>residents[<b>'key'</b>]</code> print out?


<!-- -------------------------------------------------------------------------
    ☆ Subtitle

    ⤷ `string` (auto wrapped with a `H2` tag)
-------------------------------------------------------------------------- -->
## ☆ Subtitle

Dictionaries


<!-- -------------------------------------------------------------------------
    ☆ Syntax (inline code)

    ⤷ `code string` (auto wrapped with <p><code> tag)
-------------------------------------------------------------------------- -->
## ☆ Syntax (inline code)

d = {<b>'key'</b>: <i>value</i>}


<!-- -------------------------------------------------------------------------
    ★ Sample (code block or image)

    ⤷ `code block | image`

      | Requires `markdown` fenced code block;

      A markdown fenced code block that will compile to our highlighted
      code with Pandoc. What does this code do?
-------------------------------------------------------------------------- -->
## ★ Sample (code block or image)

```python
residents = {'Puffin' : 104, 'Sloth' : 105, 'Burmese Python' : 106}

print(residents['Puffin'])
print(residents['Sloth'])
print(residents['Burmese Python'])
```


<!-- -------------------------------------------------------------------------
    ★ Key point (code block or image)

    ⤷ `code block | image`

      | Requires `markdown` fenced code block;

      A markdown fenced code block that will compile to our highlighted
      code with Pandoc. The output or answer to the above question.
-------------------------------------------------------------------------- -->
## ★ Key point (code block or image)

```text
104
105
106
```


<!-- -------------------------------------------------------------------------
    ★ Key point notes

    ⤷ `rich html`
-------------------------------------------------------------------------- -->
## ★ Key point notes

Access a **dictionary** item with it's `key`, which returns it's `value`.

A dictionary is similar to a list, but you access values by looking up a key instead of an index. A key can be any string or number. Dictionaries are enclosed in curly braces `{ }`.


<!-- -------------------------------------------------------------------------
    ✎ Other notes

    ⤷ `rich html`
-------------------------------------------------------------------------- -->
## ✎ Other notes

**Warning:** [Never search for a value in a dictionary using a for loop](https://jeffknupp.com/blog/2015/08/30/python-dictionaries)!


<!-- -------------------------------------------------------------------------
    ✎ Markdown

    ⤷ `raw text`

      Do not add the compiled HTML to your card, rather, use the raw text
      Markdown fenced code block. This makes for easier editing of a card
      later on.

      Warning: may increase card file size
        @ https://github.com/badlydrawnrob/anki/issues/116
-------------------------------------------------------------------------- -->
## ✎ Markdown

false
