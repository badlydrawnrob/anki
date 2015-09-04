# Anki theme: Simple
## Anki complex theme for programming snippets

A simple question/answer card. If you need more flexibility the [complex theme](../complex/README.md) may be more appropriate.

## Fields:

1. **Title**
  - The main question, statement or fact
2. **Syntax** – *(optional)*
  - The main `syntax` we're learning
3. **Syntax (inline code)** - *(optional)*
  - The actual function or symbol, i.e. `len()`
  - This will be wrapped in `<code>`
4. **Sample code image** - *(optional)*
  - Upload a snapshot of the code we're learning
5. **Key point (code block)**
  - What's the main takeaway from this flashcard? (Small statement or snippet of code)
  - You will need to wrap in `<pre><code>`
  - You can colour code [using the included themes](../styles/README.md)
6. **Key point image** – *optional*
  - Complementary image
7. **Key point notes**
  - A short explanation of what we're trying to learn
  - For any key functions or symbols, wrap in `<code>`
8. **What does this syntax code do?** — **optional**
  - If you want a reverse of the question (i.e. giving the specific syntax and asking what it does), enter a question here.
9. **What does this syntax code do? (inline code)** — **optional**
  - Sometimes you won't want to use `Syntax (inline code)` as you'll make it too easy; you're supposed to be guessing it! You can use this field instead to make it harder (and leave `Syntax (inline code)` field empty)
  - This will be wrapped in `<code>`
10. **Other notes** – *optional*
  - A more in-depth explanation of what we're trying to learn, or any supplementary notes for either `Key points` or `Puzzle`
11. **Markdown** - *optional*
  - Store raw `.md` for quick editing
  - Also allows you to [quickly generate highlight.js styles](../styles/README.md) from raw fenced `(code blocks)`


## Cards

There's 2 cards here:

### 1. What's the answer?

A simple question/answer. From the `title` question, guess the answer — sometimes you won't want to display `syntax` or `Syntax (inline code)`, as it might not be relevant or you don't want to make it too obvious. Must have at least `Key point (code block)` or `Key point notes` filled.

### 2. What does this symbol do? (optional)

If you want to have a sort of reverse card, where you have to guess what the `syntax` or `Syntax (inline code)` does, fill in `What does this symbol do?` field. If `syntax` isn't set, you can fill in the `What does this syntax code do? (code)` field. Must have at least `Key point (code block)` or `Key point notes` filled.


## Notes

1. [Style fields, inline code and code blocks](../styles/README.md)
2. Fields marked **optional** can be left blank and the template will ignore them. If all fields are used, 3 cards will be generated.
3. You can reference fields within fields. For instance, `{{Syntax (inline code)}}` or `{{Key point (code block)}}` - this will pick up all the HTML from those fields. If you want the fancy code styles, you'll need to select *Edit HTML* in Wysiwig and wrap in `<code>`, it'll be rendered as an inline code block.


##### Quick links

- [Home](../../README.md)
- [Simple theme](../simple/README.md)
- [Complex theme](../complex/README.md)
- [Deck example](../../deck/README.md)
