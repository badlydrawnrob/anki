# Anki Themes: How to add content to cards

- [Home](../../README.md)
  - **THEME**
    - [Simple Anki theme](#basic-field-template)
    - [Complex Anki theme](#complex-field-template)
      - [Deck example](../../dist/deck/README.md)
      - [Notes](#notes)
  - **THEME COLOURS**
    - [Basic highlighting](./assets/css/README.md)
    - [Automatic highlighting](./assets/css/#automatic-syntax-highlighting-with-highlight-js)



## Simple theme

Both the **Simple theme** and **[Complex theme](#complex-field-template)** share the same basic fields. This content will be used to output two cards:

1. **What's the answer?**
  - What does the following code do?
  - How can we use the syntax examples and what would be the result?
2. **What does this syntax do?**
  - Ask another question about the code sample, or
  - Drill on the specific uses for the function, or
  - Remember the syntax:
    - What function or method is this?
    - And what will it achieve?


## Card 01: What's the answer? (Fields 1-6)
**Key:** ★ Required / ☆ Optional (recommended)

#### ★ Title

- The main question, statement or fact.

#### ☆ Syntax

- The type of `Syntax` we're learning.

#### ☆ Syntax (inline code)

- The actual function or symbol, i.e. `len()`.
- This will be wrapped in `<code>`.

#### ☆ Sample (code block or image)

- A sample of the code we're learning:
  - Enter a `<pre><code>` block
    - or if you're feeling lazy, upload a snapshot
  - Syntax highlighting [using the included themes](../assets/css/README.md).

#### ★ Key point (code block or image)** ***— [required]***

- What's the main takeaway from this flashcard?
  - Snippet of code, or output.
  - Enter a `<pre><code>` block
    - or if you're feeling lazy, upload a snapshot
  - Syntax highlighting [using the included themes](../assets/css/README.md).

#### ★ Key point notes

- A short explanation of what we're trying to learn.
- For any key functions or symbols, wrap in `<code>`.


## Card 02: What does this syntax do? (Fields 7-9)
**Important:** Must fill `✔ What does this syntax do?` to generate card.
**Key:** ✄ Optional (explicitly hide fields)

#### ✔ What does this syntax do?

- An alternative question to drill the syntax.

#### ----✄-- Hide: Syntax (inline code)

- Optionally hide the [inline code sample](#☆-syntax-inline-code).
  - Simply enter any text to hide field, i.e. `true`.
  - Great for questions that force you to remember the syntax, where you don't want any giveaways.
- Will be displayed as a **Reference guide** if hidden.

#### ----✄-- Hide: Sample (code block or image)

- Optionally hide the [inline code sample](#☆-syntax-code-block-or-image).
  - Simply enter any text to hide field, i.e. `true`.
  - Depending on the sample code, you may want to hide this if it makes the answer too obvious.
- Will be displayed as a **Reference guide** if hidden.



-----

## Complex field template

<img align="right" src="https://media.giphy.com/media/C47AAXrd7EIz6/giphy.gif">

The complex theme extends the [Simple theme](#basic-field-template) to allow us to get a little creative.

1. **Puzzle question**
  - Drill yourself in a different way.
  - Try a different result with the syntax you're learning.
  - Add a new function to the mix.

## Card 03: Puzzle question (Fields 10-18)
**Important:** Must fill `♞ Puzzle` to generate card.
**Key:** ♞ Required / ✄ Optional (explicitly hide fields) / ♘ Optional (Only if ✄ is used)

#### 9. Puzzle

- The puzzle question. Be creative!

#### –--✄--- Hide: Syntax (inline code)

- Optionally hide the [inline code sample](#☆-syntax-inline-code).
- Will be displayed as a **Reference guide** if hidden.

#### –--✄--- Hide: Sample (code block or image)

- Optionally hide the [inline code sample](#☆-syntax-code-block-or-image)
- Will be displayed as a **Reference guide** if hidden.

#### ♘ Puzzle (inline code)

- Sometimes it can be useful to display a different syntax, one that is an extension of, or complementary of the original.
  - Requires `–--✄--- Hide: Syntax (inline code)` to be `true`

#### ♘ Puzzle (code block or image)

- Sometimes it can be useful to display a different code example, for instance using the original syntax with an extra function, or generating a different output.
  - Requires `–--✄--- Hide: Sample (code block or image)` to be `true`

#### ♘ Puzzle hint

- Give yourself a clue to the answer.

#### ♞ Puzzle answer (code block or image)

- As we have a specific question, we'll probably want a specific answer.
  - Similar to `★ Key point (code block or image)`
  - You can always reference `☆ Sample (code block or image)` or `Key point (code block or image)` instead of creating a new one.

#### 13. Puzzle answer notes**

- Similar to `★ Key point notes` for the puzzle question.
  - You can always reference `★ Key point notes` instead of creating a new one.

-----

## Extra fields
**Key:** ✎ Optional

#### ✎ Other notes

Use sparingly, as it's always best to be succinct with Anki. Simple is easier to remember than complex, so think of this as more of a 'reference' for future use.

- Links to documentation
- Supplementary notes
- Anything that is universal between cards

#### ✎ Markdown

- Store raw `.md` for quicker editing
- Also allows you to [quickly generate highlight.js styles](../assets/css/README.md) from raw fenced `(code blocks)`



-----

## Notes

1. [Style fields, inline code and code blocks](../assets/css/README.md)
2. Fields marked **☆✄✎ Optional** can be left blank and the template will ignore them. **✔** and **♞** fields are required in order for a card to be generated.
3. You can reference fields within fields. For instance, `{{☆ Syntax (inline code)}}` or `{{★ Key point (code block or image)}}` - this will pick up all the HTML from those fields. If you want the fancy code styles, you may need to select *Edit HTML* in the editor and wrap in `<code>` or `<pre><code>` to render correctly.
  - Keep in mind that any referenced fields will have to be manually edited if the field name is ever changed.
