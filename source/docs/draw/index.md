# Simple card

- [Home](../../../README.md)
    + 💡 [Simple](../simple/index.md) card
    + 🔎 [Missing!](../missing/index.md) card
    + 🖍️ **[Draw!](../draw/index.md) card**
    + 🧑‍🎨 [Add color to your code](../highlight/index.md)
    + 🧑‍🎓 [The professional way](../professional/index.md)


## What's the answer?

> ★ Required  &nbsp;&nbsp;&nbsp;☆ ✎ Optional &nbsp;&nbsp;&nbsp;⤷ Field Type

**⚠️ For now this is simply a clone of a simple `question->answer` card;** but with images! We're asking the question something along the lines of: _"what does this code do?"_, or _"how might I sketch this idea out?"_ e.g:

- A whiteboard diagram with a small program or function
    - You have to remember or guess something about it.
- A function or program that you need to sketch out.
    - Something you'd like to drill yourself with to rememeber.
    - Alternatively, you might be at a computer and want to write it out.

| You'll probably want: | It's helpful to add: |
| --------------------- | ------------------------------ |
| A descriptive title (or intro) | A subtitle or tags |
| A clear question and answer | Supporting notes (bullet points) |
| Your key learning point | Links to articles, documentation, videos, etc |

In general it's best to make sure `★ Required` fields are filled in. However, for a very simple `question->answer` card, feel free to only use the fields that you need. An example of this might be a picture you want to remember, so you only use the `★ Title`, `★ Key Point (image)`, and `★ Key point notes` fields.

<!-- #! Example needed, similar to Simple card -->

The code sample fields asks for an `image`, but it's basically a


## ★ Title

> ⤷ **`string`** (automatically wrapped with a `H1` tag)

- The main question, statement or fact.


## ☆ Subtitle

> ⤷ **`string`** (automatically wrapped with a `H2` tag)

- A helpful tip or guide
- A group of related cards
- The type of `syntax` we're learning


## ☆ Syntax (inline code)

> ⤷ **[`code string`](../highlight/index.md#basic-syntax-highlighting)**
>    (automatically wrapped with `<p><code>` tag)

- A short line of code (_not_ a code block)
- The actual function or symbol, i.e. `len()`.


## ★ Sample (image)

> ⤷ **`image`**
>    (may require the `markdown->html` compiler in future)

- A sample of the code we're learning


## ★ Key point (image)

> ⤷ **`image`**
>    (may require the `markdown->html` compiler in future)

- The answer or key learning point


## ★ Key point notes

> ⤷ **`rich html`**

- A short explanation of what we're trying to learn.


## ✎ Other notes

> ⤷ **`rich html`**

A short reference if needed. Remember to [KISS](../../../#keep-it-simple-stupid)!

- Links to documentation
- Supplementary notes
- A common link between cards


## ✎ Markdown

> ⤷ **`raw text`**

For the risk-averse, you can keep `raw text` in the `✎ Markdown` field provided — here you can store raw markdown, or a link to the original code (Github gist for example).

- Store raw `.md` for future editing, if necessary


---

## Other helpful Anki stuff

> I decided _not_ to use Anki's image occlusion, so use whatever software you want to edit your images, whether that's simply to reduce it's size, or to hide bits of it for reveal later. I feel it's just as easy to use a Photoshop type tool then mess around with a half-baked one, which Anki's version is.

1. It could be very useful to add tags to these cards:
    - `code::stories` and `code::elm` is descriptive
    - They'll also allow you to create a [filtered deck](https://docs.ankiweb.net/filtered-decks.html) by tags, limiting the cards you're studying.
2. [Image Occlusion](https://docs.ankiweb.net/editing.html#image-occlusion) is a new(ish) feature in Anki, and was a candidate for Draw! but ...
    - It's a very rudimentary editor (feels quite clunky),
    - I use iPhone images with notes _a lot_, so I don't really need it,
    - It's not helpful for motion images, such as `.gif`s,
    - It limits us to Anki's way of doing things, which isn't always ideal.


[^1]: We're asking for an image here, as that's fundamentally what this card is about (more about visual medium than textual). It's basically a `rich html` field, however, so you can pretty much add in what you want here, an `image`, a `code block`, or `rich html`. I can't, however guarantee that it won't change to be wrapped in a [`figure`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/figure) (for instance) — in fact, that's quite a good idea, but I also realise having flexibility could be useful too! Time will tell.
