# Simple card

- [Home](../../../README.md)
    + 💡 [Simple](../simple/index.md) card
    + 🔎 [Missing!](../missing/index.md) card
    + 🖍️ **[Draw!](../draw/index.md) card**
    + 🧑‍🎨 [Add color to your code](../highlight/index.md)
    + 🧑‍🎓 [The professional way](../professional/index.md)


## What's the answer?

> ★ Required  &nbsp;&nbsp;&nbsp;☆ ✎ Optional &nbsp;&nbsp;&nbsp;⤷ Field Type

There's many potential use-cases for the Draw! card. I've listed some initial ideas in [this issue](https://github.com/badlydrawnrob/anki/issues/165). At it's most basic we're asking _"what does this code do?"_, or _"what does this picture represent?"_, or _"what routes could we use to fix this problem?"_, or _"how do we solve this?"_.

- An animated gif or photograph
- A sketch or iPad drawing
- A question that you must sketch out
- Perhaps even a video!

If the card is not suitable for mobile viewing, I find it helpful tagging it as `desktop`.

| You'll probably want: | It's helpful to add: |
| --------------------- | ------------------------------ |
| A descriptive title (or intro) | A subtitle or tags |
| A clear question and answer | Supporting notes (bullet points) |
| Your key learning point | Links to articles, documentation, videos, etc |

In general it's best to make sure `★ Required` fields are filled in. However, for a very simple `question->answer` card, feel free to only use the fields that you need. For example, you might want to remember a picture, so you'd use only the `★ Title`, `★ Key Point (image)`, and `★ Key point notes` fields.

You can [toggle](https://github.com/badlydrawnrob/anki/issues/62) between Anki's `<>` code editor and `A𝐴` visual editor at any time!

<!-- #! Examples would be helpful here, similar to Simple card (but not CodePen) -->


## ★ Title

> ⤷ **`string`** (automatically wrapped with a `H1` tag)

- The main question, statement or fact


## ☆ Subtitle

> ⤷ **`string`** (automatically wrapped with a `H2` tag)

- A short helpful tip or guide
- Naming a group of related cards
- The type of `syntax` we're learning


## ☆ Syntax (inline code)

> ⤷ **[`code string`](../highlight/index.md#basic-syntax-highlighting)**
>    (automatically wrapped with `<p><code>` tag)

- A short line of code (_not_ a code block)
- The actual function or symbol, i.e. `len()`


## ☆ Sample (caption or hint)

> ⤷ **`string`** (automatically wrapped with a `figcaption` tag)

- If the heading becomes too long, use this caption!
- Extend and describe the main question or idea; give the image context
- An alternative to comments in the image of code


## ★ Sample (image)

> ⤷ **`image`**
>    (use the 📎 paperclip button to add your image)

- A sample of the code we're learning


## ★ Key point (image)

> ⤷ **`image | code block`**
>    (to add an image, toggle the `A𝐴` button and click 📎 paperclip button)[^1]

- The answer or key learning point


## ★ Key point notes

> ⤷ **`rich html`**

- A short explanation of what we're trying to learn


## ✎ Other notes

> ⤷ **`rich html`**

A short reference if needed. Remember to [KISS](../../../#keep-it-simple-stupid)!

- Links to documentation
- Supplementary notes
- A common link between cards


## ✎ Markdown

Deprecated in favour of `npm run data-code-reverse` with Pandoc (next release will remove completely)

~~> ⤷ **`raw text`**~~

For the risk-averse, you can keep `raw text` in the `✎ Markdown` field provided — here you can store raw markdown, or a link to the original code (Github gist for example).

- ~~Store raw `.md` for future editing, if necessary~~


---

## Other helpful Anki stuff

> Use your photo software of choice to edit your images; change the size, hide bits of it to reveal, create a fun `.gif` file, add sketches or iPad drawings, so on. It's just as easy to use Photoshop than it is to mess around with a Anki's half-baked image editor.[^2]

1. You might want to storify these cards, or add tags:
    - `code::stories` plus `code::elm` is very descriptive
    - Those would be great for content like Ozaria (game) chapters
2. Create a [filtered deck](https://docs.ankiweb.net/filtered-decks.html) with tags:
    - Limiting the cards you're viewing for a study session
3. Use an app like Ozaria or CodeCombat to make learning fun ...
    - And create cards that'll rejig your memory for your `hero.commands()`!


[^1]: We're asking for an image here, as that's fundamentally what this card is about (more about visual medium than textual). It's basically a `rich html` field though, so you _could_ add pretty much anything you want here: an `image`, a `code block` (perhaps even a video). It all depends on the question you're asking and the ONE idea of the card. This _may_ get changed at a later date: flexibility is great, but living with constraints is sometimes better. I'll see how my experiments with it go, and time will tell.

[^2]: I decided _not_ to use Anki's image occlusion. [Image Occlusion](https://docs.ankiweb.net/editing.html#image-occlusion) is a new(ish) feature in Anki, and was a candidate for Draw! but: it's a very rudimentary editor (feels quite clunky); I use iPhone images with notes _a lot_, so I don't really need it; It's not helpful for motion images, such as `.gif`s; It limits us to Anki's way of doing things, which isn't always ideal.
