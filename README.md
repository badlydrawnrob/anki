# Anki theme
## Anki theme for programming snippets


## Fields:

1. Title
  - The main question, statement or fact
2. Syntax
  - The main `syntax` we're learning
3. Syntax code
  - The actual function or symbol, i.e. `len()`
  - This will be wrapped in `<code>`
4. Sample code image
  - Upload a snapshot of the code we're learning
5. Key point
  - What's the main takeaway from this flashcard? (Small statement or snippet of code)
  - This will be wrapped in `<pre><code>`
  - You can colour code using:
    - `span` for blue,
    - `<strong>` for pink,
    - `<em>` for purple,
    - `<small>` for comments
6. Key point image
  - Complementary image (optional)
7. Key point notes
  - A short explanation of what we're trying to learn
  - For any key functions or symbols, wrap in `<code>`
8. Other notes
  - A more in-depth explanation of what we're trying to learn (optional)
9. Puzzle
  - If the card is suitable for a puzzle-style question, add a title (optional)
10. Puzzle hint
  - Something that might give us some clues as to the puzzle


## Cards

There's 3 cards here:

### 1. What's the answer?

A simple question/answer. From the `syntax`, `syntax code` and the `title`, guess the answer.

### 2. What does this symbol do?

A slight variation on the 1st card. From the `syntax` and `syntax` code, guess the function or symbol's uses.

### 3. Puzzle question (Optional)

Here we can get creative. As we don't have `syntax` or `syntax code`, create a puzzle question which forces you to guess how to solve a specific problem and with what function you'd need to do so.


## Styling code

I've included some nice default styles for code; some fields will be automatically wrapped in `<code>` or `<pre><code>` so all you need to do is add the symbol, class or function. You can quickly add colours in the `Key point` field by wrapping elements in a `span` for blue, `strong` for pink, `em` for purple and a `small` for comments. See `style.css` for all colour classes (just wrap element in a `span.orange` for example) — the quick defaults should be enough for most cases.

## Notes

Fields marked **optional** can be left blank and the template will ignore them. If all fields are used, 3 cards will be generated.
