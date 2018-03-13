# Anki Syntax Theme: How to add content to cards

- [Home](../../README.md)
  - **THEME**
    - **Simple Anki theme**
    - [Puzzle Anki theme](../puzzle/README.md)
    - [Cloze Anki theme](../cloze/README.md)
      - [Deck example](../deck/README.md)
      - [Notes](#notes)
  - **THEME COLOURS**
    - [Basic highlighting](../../../assets/css/README.md)
    - [Automatic highlighting](../../../assets/css/README.md#automatic-syntax-highlighting-with-pygments)



## Syntax card
> **Key:** ⚑ Required / ⚐ Optional (recommended)

### What does this syntax do?

Quiz yourself on syntax. It's purpose is to ask "What does this syntax do?":

- Guess the function's description from it's name.
- Guess the function's name from it's description.

#### ⚑ Title

- The main question, statement or fact.

#### ⚐ Syntax

- The type of `Syntax` we're learning.

#### ⚑ Syntax (inline code)

- The actual function or symbol, i.e. `len()`.
- This will be wrapped in `<code>`.

#### ⚐ Sample (code block or image)

- A sample of the syntax we're learning, in context:
    - Enter a `<pre>` block
        - or if you're feeling lazy, upload a snapshot
    - Syntax highlighting [using the included themes](../../README.md).

#### ⚑ Key point notes

- A short explanation of the syntax.
    - If you're using `{{♻ Reverse the card?}}` be careful!
        - Don't give too much away in the description.

#### ♻ Reverse the card?

- Create an extra card which reverses the question:
    - Guess the syntax from the `{{⚑ Key point notes}}` description.



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
