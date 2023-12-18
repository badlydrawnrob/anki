# Simple card

- [Home](../../../README.md)
    - **Cards**
        + 💡 **[Simple](../simple/index.md)**
        + 🔎 [Missing!](../missing/index.md)
    - **Themes**
        + 🧑‍🎨 [Syntax highlighting](../highlight/index.md)


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


## ★ Title

> ⤷ **`string`**

- The main question, statement or fact.
- Automatically wrapped with a `H1` tag


## ☆ Subtitle

> ⤷ **`string`**

- A helpful tip or guide
- A group of related cards
- The type of `syntax` we're learning
- Automatically wrapped with a `H2` tag


## ☆ Syntax (inline code)

> ⤷ **[`code string`](../highlight/index.md#basic-syntax-highlighting)**
>    Automatically wrapped with `<code>` tag.

- A short line of code
- The actual function or symbol, i.e. `len()`.


## ★ Sample (code block or image)

> ⤷ **[`pre block | image`](../highlight/index.md#full-syntax-highlighting)**
>    (requires [`markdown -> html`](../highlight/index.md#full-syntax-highlighting) conversion)

- A sample of the code we're learning:
- If you're feeling lazy, a snapshot image


## ★ Key point (code block or image)

> ⤷ **[`pre block | image`](../highlight/index.md#full-syntax-highlighting)**
>     (requires [`markdown -> html`](../highlight/index.md#full-syntax-highlighting) conversion)

- The answer or key learning point
- If you're feeling lazy, a snapshot image


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
