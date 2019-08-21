# Missing card

- [Home](../../../README.md)
    - **Cards**
        + [Simple](../simple/index.md)
        + **[Missing!](../missing/index.md)**
    - **Themes**
        + [Syntax highlighting](../highlight/index.md)


## A question with a [missing] word

> ★ Required  &nbsp;&nbsp;&nbsp;☆ ✎ Optional &nbsp;&nbsp;&nbsp;⤷ Field Type

**A [`missing->answer`](https://apps.ankiweb.net/docs/manual.html#cloze-deletion) card;** we're hiding one or more words to guess the answer:

- A missing function or expression you have to guess
- A missing input or output to remember

| You'll probably want: | It's helpful to add: |
| --------------------- | ------------------------------ |
| A descriptive title (or intro) | A subtitle or tags |
| A clear question and answer | Supporting notes (bullet points) |
| Your key learning point | Links to articles or documentation |



## ★ Title

> ⤷ string

- The main question, statement or fact.
- Automatically wrapped with a `H1` tag


## ☆ Subtitle

> ⤷ string

- A helpful tip or guide
- A group of related cards
- The type of `syntax` we're learning
- Automatically wrapped with a `H2` tag


## ☆ Syntax (inline code)

> ⤷ [string](../highlight/index.md#basic-syntax-highlighting)

- A short line of code
- The actual function or symbol, i.e. `len()`.
- Automatically wrapped with `<code>` tag.


## ★ Key point (code block or image)

> ⤷ [pre block](../highlight/index.md#full-syntax-highlighting), or inline code

Create your code, add one or more [cloze deletion](https://apps.ankiweb.net/docs/manual.html#cloze-deletion) types to hide a selected word or phrase:

- The `{{c1::question->answer}}` or key learning point
- You can add a helpful `{{c1::Hint::For your answer}}`


## ★ Key point notes

> ⤷ rich html

- A short explanation of what we're trying to learn.


## ✎ Other notes

> ⤷ rich html

A short reference if needed. Remember to [KISS](../../../#keep-it-simple-stupid)!

- Links to documentation
- Supplementary notes
- A common link between cards


## ✎ Markdown

> ⤷ raw text

For the risk-averse, you can keep `raw text` in the `✎ Markdown` field provided — here you can store raw markdown, or a link to the original code (Github gist for example).

- Store raw `.md` for future editing, if necessary
