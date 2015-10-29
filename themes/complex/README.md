# Anki theme: Complex
## Anki complex theme for programming snippets

A more fully-rounded set of cards: a simple question, a symbol question and a puzzle question. Very flexible. The complex theme has 10 fields which will output 2 cards — fields marked ***[required]*** must be filled. If you just need one question/answer, the [simple theme](../simple/README.md) may be more appropriate.



## Card 01: What's the answer? (Fields 1-7)

A simple question/answer. From the `Title`, `Syntax` and `Syntax (inline code)`, guess the answer.

**1. Title** ***— [required]***

- The main question, statement or fact

**2. Syntax**

- The main `Syntax` we're learning

**3. Syntax (inline code)**

- The actual function or symbol, i.e. `len()`
- This will be wrapped in `<code>`

**4. Sample (code block or image)**

  - Upload a snapshot of the code we're learning

**5. Key point (code block)**  ***— [required]***

- What's the main takeaway from this flashcard? (Small statement or snippet of code)
- You will need to wrap in `<pre><code>`
- You can colour code [using the included themes](../styles/README.md)

**6. Key point image**

- Complementary image

**7. Key point notes** ***- [required]***

- A short explanation of what we're trying to learn
- For any key functions or symbols, wrap in `<code>`



## Card 02: What does this syntax do? (Field 8) *— [optional]*

A slight variation on the 1st card. This hides `Sample (code block or image)` so you'll have to guess what `Syntax` or `Syntax (inline code)` does by looking at the symbol or function. Add a helpful question to `What does this syntax do?` field to generate the card.

**8. What does this syntax do?** ***— [required to generate Card 02]***

- Give a title for a question without the `Sample (code block or image)`
- Optional, explicitly set title if you want a reverse question.



## Card 03: Puzzle question (Fields 10-13) *— [optional]*

Here we can get creative with a puzzle question. This hides `Syntax`, `Syntax (inline code)` and `Sample (code block or image)`, forcing you to figure out how to solve a specific problem and which function you'd need to do so. The answer will return a reference guide including `Sample (code block or image)` and `Key points (code)` — this is often enough to know if you've solved the puzzle properly.

**9. Puzzle** 

- If the card is suitable for a puzzle-style question, add a title

**10. Puzzle image**

- Sometimes it can be useful to display an image with the puzzle question
- If the `Puzzle image` is filled out, we display it below the `Puzzle` title. 90% of the time you'll probably want to reference the `{{Sample (code block or image)}}` in this field.
- We can reference `{{Sample (code block or image)}}` or add a related one that helps to clarify the `{{Syntax}}` we're learning.

**11. Puzzle hint**

- Something that might give us some clues as to the puzzle

**12. Puzzle answer (code block)**

- Same as `Key point (code block)` for the puzzle question answer
- If filled out `Puzzle answer (code block)`, don't display `Sample (code block or image)` but add it as a reference below.
- If not filled out `Puzzle answer (code block)`, assume that the `Sample (code block or image)` is the answer and display it above any `Puzzle answer notes`.

**13. Puzzle answer notes** ***— [required to generate Card 03]***

- Same as `Key point notes` for the puzzle question



## Extra fields (Fields 14-15) *— [optional]*

**14. Other notes**

- A more in-depth explanation of what we're trying to learn, or any supplementary notes.

**15. Markdown**

- Store raw `.md` for quick editing
- Also allows you to [quickly generate highlight.js styles](../styles/README.md) from raw fenced `(code blocks)`




## Notes

1. [Style fields, inline code and code blocks](../styles/README.md)
2. Fields that aren't required can be left blank and the template will ignore them. If all fields are used, 3 cards will be generated.
3. You can reference fields within fields. For instance, `{{Syntax (inline code)}}` or `{{Key point (code block)}}` - this will pick up all the HTML from those fields. If you want the fancy code styles, you'll need to select *Edit HTML* in Wysiwig and wrap in `<code>`, it'll be rendered as an inline code block.


##### Quick links

- [Anki Themes](../../README.md)
- [Simple Anki theme](../simple/README.md)
- [Complex Anki theme](../complex/README.md)
- [Deck example](../../deck/README.md)
