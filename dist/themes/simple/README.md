# Anki theme: Simple
## Anki simple theme for programming snippets

A simple question/answer card. The simple theme has 10 fields which will output 2 cards — fields marked ***[required]*** must be filled. If you need more flexibility the [complex theme](../complex/README.md) may be more appropriate.


## Card 01: What's the answer? (Fields 1-7)

A simple question/answer. From the `Title` question, guess the answer.

Sometimes you won't want to display `Syntax` or `Syntax (inline code)`, as it might not be relevant or you don't want to make it too obvious. If so, you can [create a reverse card](#card-02-what-does-this-syntax-do-fields-8-9-optional) to drill yourself on syntax.

**1. Title** ***— [required]***

- The main question, statement or fact

**2. Syntax**
  
- The main `Syntax` we're learning

**3. Syntax (inline code)**

- The actual function or symbol, i.e. `len()`
- This will be wrapped in `<code>`

**4. Sample (code block or image)**

- A sample of the code we're learning
  - Enter a `<pre><code>` block
  - Or if you're feeling lazy, upload a snapshot

**5. Key point (code block or image)** ***— [required]***

- What's the main takeaway from this flashcard? (Small statement or snippet of code)
  - Enter a `<pre><code>` block
  - Syntax highlighting [using the included themes](../assets/css/README.md)

**6. Key point image**

- Complementary image

**7. Key point notes** ***- [required]***

- A short explanation of what we're trying to learn
- For any key functions or symbols, wrap in `<code>`



## Card 02: What does this syntax do? (Fields 8-9) *— [optional]*

If you want a reverse card, where you have to guess what the `Syntax` or `Syntax (inline code)` does, fill in `What does this syntax do?` field — this gives you a question header. If you've left the `Syntax` field empty, you can also fill in the `What does this syntax code do? (inline code)` field.

**8. What does this syntax do?** ***— [required to generate Card 02]***

- If you want a reverse of the question (i.e. giving the specific syntax and asking what it does), enter a question here.

**9. What does this syntax do? (inline code)**

- If you want to drill yourself on syntax, you might want to leave the `Syntax (inline code)` field empty. You can use this field on your reverse question card to make the syntax viewable.
- This will be wrapped in `<code>`



## Extra fields (Fields 10-11) *— [optional]*

**10. Other notes**

- A more in-depth explanation of what we're trying to learn, or any supplementary notes.

**11. Markdown**

- Store raw `.md` for quick editing
- Also allows you to [quickly generate highlight.js styles](../assets/css/README.md) from raw fenced `(code blocks)`


-----

## Notes

1. [Style fields, inline code and code blocks](../assets/css/README.md)
2. Fields that aren't required can be left blank and the template will ignore them. If all fields are used, 2 cards will be generated.
3. You can reference fields within fields. For instance, `{{Syntax (inline code)}}` or `{{Key point (code block or image)}}` - this will pick up all the HTML from those fields. If you want the fancy code styles, you'll need to select *Edit HTML* in Wysiwig and wrap in `<code>`, it'll be rendered as an inline code block.


##### Quick links

- [Anki Themes](../../../README.md)
- [Simple Anki theme](../simple/README.md)
- [Complex Anki theme](../complex/README.md)
- [Deck example](../../../dist/deck/README.md)
