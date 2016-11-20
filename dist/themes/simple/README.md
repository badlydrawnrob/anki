# Anki Simple Theme: How to add content to cards

- [Home](../../README.md)
  - **THEME**
    - **Simple Anki theme**
    - [Puzzle Anki theme](../puzzle/README.md)
    - [Cloze Anki theme](../cloze/README.md)
      - [Deck example](../../deck/README.md)
      - [Notes](#notes)
  - **THEME COLOURS**
    - [Basic highlighting](../assets/css/README.md)
    - [Automatic highlighting](../assets/css/README.md#automatic-syntax-highlighting-with-pygments)



## Card #01
> **Key:** ★ Required / ☆ Optional (recommended)

### What's the answer?

These fields are shared with the [Puzzle theme](../puzzle/README.md)). The purpose of these fields is to ask:

- What does the following code do?
- How can we use the syntax examples and what would be the result?

#### ★ Title

- The main question, statement or fact.

#### ☆ Syntax

- The type of `Syntax` we're learning.

#### ☆ Syntax (inline code)

- The actual function or symbol, i.e. `len()`.
- This will be wrapped in `<code>`.

#### ☆ Sample (code block or image)

- A sample of the code we're learning:
  - Enter a `<pre>` block
    - or if you're feeling lazy, upload a snapshot
  - Syntax highlighting [using the included themes](../assets/css/README.md).

#### ★ Key point (code block or image)**

- What's the main takeaway from this flashcard?
  - Snippet of code, or output.
  - Enter a `<pre>` block
    - or if you're feeling lazy, upload a snapshot
  - Syntax highlighting [using the included themes](../assets/css/README.md).

#### ★ Key point notes

- A short explanation of what we're trying to learn.
- For any key functions or symbols, wrap in `<code>`.



-----


## Card #02
> **Key:** ✔ Optional / ✄ Optional (explicitly *hide* fields) / ♻ Optional (explicity *show* fields)

### What does this syntax do?

The simple theme introduces a way to add a *syntax reminder* question:

- Ask another question about the code sample, or
- Drill on the specific uses for the function, or
- Remember the syntax:
  - What function or method is this?
  - What will it achieve?

#### ✔ What does this syntax do?

- **Important:** Must fill `✔ What does this syntax do?` to generate card.
- An alternative question to drill the syntax.

#### ----✄-- Hide on front: Syntax (inline code)

- Optionally hide the [inline code sample](#☆-syntax-inline-code) on the ***front of the card***.
  - Simply enter any text to hide field, i.e. `true`.
  - Great for questions that force you to remember the syntax, where you don't want any giveaways.

#### »»♻«« Show as reference: Syntax (inline code)

- Optionally show the [inline code sample](#☆-syntax-inline-code) on the ***back of the card***.
  - Simply enter any text to hide field, i.e. `true`.
  - Will be displayed as a **Reference guide**.

#### ----✄-- Hide on front: Sample (code block or image)

- Optionally hide the main [sample code block](#☆-sample-code-block-or-image) on the ***front of the card***.
  - Simply enter any text to hide field, i.e. `true`.
  - Depending on the sample code, you may want to hide this if it makes the answer too obvious.

#### »»♻«« Show as reference: Sample (code block or image)

- Optionally show the main [sample code block](#☆-sample-code-block-or-image) on the ***back of the card***.
  - Simply enter any text to hide field, i.e. `true`.
  - Will be displayed as a **Reference guide**.



-----



## Extra fields
> **Key:** ✎ Optional

#### ✎ Other notes

Use sparingly, as it's always best to be succinct with Anki. Think of this as a 'reference' for future use:

- Links to documentation
- Supplementary notes
- Anything that is universal between cards

#### ✎ Markdown

- Store raw `.md` for future editing, if necessary



-----



## Notes

1. Fields marked **Optional** fields (☆ ✄ ♻ ✎) can be left blank and the template will ignore them. **Required** fields (✔ and ♞) are required in order for a card to be generated.
2. You can reference fields within fields. For instance:
  - `{{☆ Syntax (inline code)}}` or `{{★ Key point (code block or image)}}`. This will pick up all the HTML from those fields.
  - Keep in mind any referenced fields will have to be manually edited if the field name is ever changed, which can be a huge pita.
