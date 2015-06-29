# Anki theme: Simple
## Anki complex theme for programming snippets

A simple question/answer card. If you need more flexibility the [complex theme](../complex/README.md) may be more appropriate.

## Fields:

1. **Title**
  - The main question, statement or fact
2. **Syntax** – *(optional)*
  - The main `syntax` we're learning
3. **Syntax code** - *(optional)*
  - The actual function or symbol, i.e. `len()`
  - This will be wrapped in `<code>`
4. **Sample code image** - *(optional)*
  - Upload a snapshot of the code we're learning
5. **Key point (code)**
  - What's the main takeaway from this flashcard? (Small statement or snippet of code)
  - This will be wrapped in `<pre><code>`
  - You can colour code using:
    - `<span>` for blue,
    - `<strong>` or `<b>` for pink,
    - `<em>` or `<i>` for purple,
    - `<small>` for comments
6. **Key point image** – *optional*
  - Complementary image
7. **Key point notes**
  - A short explanation of what we're trying to learn
  - For any key functions or symbols, wrap in `<code>`
8. **What does this syntax code do?** — **optional**
  - If you want a reverse of the question (i.e. giving the specific syntax and asking what it does), enter a question here.
9. **What does this syntax code do? (code)** — **optional**
  - Sometimes you won't want to give away the `syntax code` as you're supposed to be guessing it. If the `syntax code` isn't filled, you can enter it here to be displayed if `What does this syntax code do?` is used.
10. **Other notes** – *optional*
  - A more in-depth explanation of what we're trying to learn, or any supplementary notes for either `Key points` or `Puzzle`


## Cards

There's 2 cards here:

### 1. What's the answer?

A simple question/answer. From the `title` question, guess the answer — sometimes you won't want to display `syntax` or `syntax code`, as it might not be relevant or you don't want to make it too obvious. Must have at least `Key point (code)` or `Key point notes` filled.

### 2. What does this symbol do? (optional)

If you want to have a sort of reverse card, where you have to guess what the `syntax` or `syntax code` does, fill in `What does this symbol do?` field. If `syntax` isn't set, you can fill in the `What does this syntax code do? (code)` field. Must have at least `Key point (code)` or `Key point notes` filled.


## Notes

1. [Style fields, inline code and code blocks](../../README.md)
2. Fields marked **optional** can be left blank and the template will ignore them. If all fields are used, 3 cards will be generated.
3. You can reference fields within fields. For instance, `{{Syntax code}}` or `{{Key point (code)}}` - this will pick up all the HTML from those fields. If you want the fancy code styles, you'll need to select *Edit HTML* in Wysiwig and wrap in `<code>`, it'll be rendered as an inline code block.
