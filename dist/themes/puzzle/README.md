# Anki Puzzle Theme: How to add content to cards

- [Home](../../README.md)
  - **THEME**
    - [Simple Anki theme](../simple/README.md)
    - **Puzzle Anki theme**
    - [Cloze Anki theme](../cloze/README.md)
      - [Deck example](../../deck/README.md)
      - [Notes](#notes)
  - **THEME COLOURS**
    - [Basic highlighting](../assets/css/README.md)
    - [Automatic highlighting](../assets/css/README.md#automatic-syntax-highlighting-with-pygments)



## Card #01
> **Key:** ★ Required / ☆ Optional (recommended)

### What's the answer?

These fields are shared with the [Simple theme](../simple/README.md)). The purpose of these fields is to ask:

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




## Card #02
> **Key:** ♞ Required / ✄ Optional (explicitly *hide* fields) / ♻ Optional (explicity *show* fields) / ♘ Optional (Only if ✄ is used)

The puzzle theme allows us to get a little creative. We ask ourselves a puzzle question to:

- Drill yourself in a different way.
- Try a different result with the syntax you're learning.
- Add a new function to the mix.

#### ♞ Puzzle

- **Important:** Must fill `♞ Puzzle` to generate card.
- The puzzle question. Be creative!

#### –--✄--- Hide on front: Syntax (inline code)

- Optionally hide the [inline code sample](#-syntax-inline-code) on the **front of the card**.

#### »»♻«« Show as reference: Syntax (inline code)

- Optionally show the [inline code sample](#-syntax-inline-code) on the ***back of the card***.
  - Will be displayed as a **Reference guide**

#### –--✄--- Hide on front: Sample (code block or image)

- Optionally hide the [sample code block](#-sample-code-block-or-image) on the **front of the card**.

#### »»♻«« Show as reference: Sample (code block or image)

- Optionally show the main [sample code block](#-sample-code-block-or-image) on the ***back of the card***.
  - Will be displayed as a **Reference guide**.

#### ♘ Puzzle (inline code)

- Sometimes it can be useful to display a different syntax, one that is an extension of, or complementary of the original.
  - Requires `–--✄--- Hide on front: Syntax (inline code)` to be `true`

#### ♘ Puzzle (code block or image)

- Sometimes it can be useful to display a different code example, for instance using the original syntax with an extra function, or generating a different output.
  - Requires `–--✄--- Hide on front: Sample (code block or image)` to be `true`

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
