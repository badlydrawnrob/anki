# Simple card

- [Home](../../../README.md)
    + 💡 **[Simple](../simple/index.md) card**
    + 🔎 [Missing!](../missing/index.md) card
    + 🧑‍🎨 [Add color to your code](../highlight/index.md)
    + 🧑‍🎓 [The professional way](../advanced/index.md)


## What's the answer?

> ★ Required  &nbsp;&nbsp;&nbsp;☆ ✎ Optional &nbsp;&nbsp;&nbsp;⤷ Field Type

**A simple `question->answer` card;** we're asking the question: _"what does this code do?"_, e.g:

- A function with an output you have to guess.
- A class with a method that you need to call.

| You'll probably want: | It's helpful to add: |
| --------------------- | ------------------------------ |
| A descriptive title (or intro) | A subtitle or tags |
| A clear question and answer | Supporting notes (bullet points) |
| Your key learning point | Links to articles or documentation |

In general it's best to make sure `★ Required` fields are filled in. However, for a very simple `question->answer` card, where you don't need a code example, feel free to just use `★ Title` and `★ Key point notes` fields. [Example here](https://codepen.io/testuser-247585903/pen/yLwgBgp) and [issue](https://github.com/badlydrawnrob/anki/issues/46) here.


## ★ Title

> ⤷ **`string`** (automatically wrapped with a `H1` tag)

- The main question, statement or fact.


## ☆ Subtitle

> ⤷ **`string`** (automatically wrapped with a `H2` tag)

- A helpful tip or guide
- A group of related cards
- The type of `syntax` we're learning


## ☆ Syntax (inline code)

> ⤷ **[`code string`](../highlight/index.md#basic-syntax-highlighting)**
>    (automatically wrapped with `<p><code>` tag)

- A short line of code
- The actual function or symbol, i.e. `len()`.


## ★ Sample (code block)

> ⤷ **[`code block`](../highlight/index.md#full-syntax-highlighting)**
>    (requires [`markdown->html`](../highlight/index.md#full-syntax-highlighting) conversion)

- A sample of the code we're learning


## ★ Key point (code block)

> ⤷ **[`code block`](../highlight/index.md#full-syntax-highlighting)**
>     (requires [`markdown->html`](../highlight/index.md#full-syntax-highlighting) conversion)

- The answer or key learning point


## ★ Key point notes

> ⤷ **`rich html`**

- A short explanation of what we're trying to learn.


## ✎ Other notes

> ⤷ **`rich html`**

A short reference if needed. Remember to [KISS](../../../#keep-it-simple-stupid)!

- Links to documentation
- Supplementary notes
- A common link between cards


## ✎ Markdown

> ⤷ **`raw text`**

For the risk-averse, you can keep `raw text` in the `✎ Markdown` field provided — here you can store raw markdown, or a link to the original code (Github gist for example).

- Store raw `.md` for future editing, if necessary
