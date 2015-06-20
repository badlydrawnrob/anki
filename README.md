# Anki theme
## Anki theme for programming snippets


![Preview image](./img/preview.png)

## Fields:

1. **Title**
  - The main question, statement or fact
2. **Syntax** – **(optional)**
  - The main `syntax` we're learning
3. **Syntax code**
  - The actual function or symbol, i.e. `len()`
  - This will be wrapped in `<code>`
4. **Sample code image**
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
8. **Puzzle** – *optional*
  - If the card is suitable for a puzzle-style question, add a title
9. **Puzzle hint** – *optional*
  - Something that might give us some clues as to the puzzle
10. **Puzzle answer (code)** – *optional*
  - Same as `key point (code)` for the puzzle question
11. **Puzzle answer notes** – *optional*
  - Same as `Key point notes` for the puzzle question
12. **Other notes** – *optional*
  - A more in-depth explanation of what we're trying to learn, or any supplementary notes for either `Key points` or `Puzzle`


## Cards

There's 3 cards here:

### 1. What's the answer?

A simple question/answer. From the `syntax`, `syntax code` and the `title`, guess the answer. Must have at least `Key point` and `Key point notes` filled.

### 2. What does this symbol do?

A slight variation on the 1st card. From the `syntax` and `syntax` code, guess the function or symbol's uses. Must have at least `Key point` and `Key point notes` filled.

### 3. Puzzle question (optional)

Here we can get creative. As we don't have `syntax` or `syntax code`, create a puzzle question which forces you to guess how to solve a specific problem and with what function you'd need to do so. Must have at least `Puzzle` and `Puzzle answer notes` filled — often `Sample code image` and `Key points (code)` give enough examples to know if you've solved the puzzle properly.

It's easy for to become too complex here, so sometimes it's easier splitting out into another card set.


## Styling code

I've included some nice default styles for code; some fields will be automatically wrapped in `<code>` or `<pre><code>` so all you need to do is add the symbol, class or function. You can quickly add colours in the `Key point` field by wrapping elements:

#### Monokai theme:
It's a bit dirty, but I'm utilising simple [HTML5 tags](https://developer.mozilla.org/en/docs/Web/HTML/Element) for styling code.

- Default colour is white
- `<b>` or `<strong>` for major symbols (`if`, `print` etc)
- `<i>` or `<em>` for an integer or float
- `<s>` for a string
- `<span>` for a minor hightlights (`function`, `class`)
- `<var>` for minor higlights (`args`, `variables`)
- `<small>` for comments.

- `<q>` wildcard (could be used for css `class` for instance)
- `<mark>` wildcard (could be used for a specific `highlight`)


## Notes

Fields marked **optional** can be left blank and the template will ignore them. If all fields are used, 3 cards will be generated.
