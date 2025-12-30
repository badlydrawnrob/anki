<!-- Front of card ===========================================================

    Draw! Card Data

    - Type:
        What's the answer?
        What does this image describe?

        Many potential use-cases for the Draw! card. See issue #165
        for ideas. At it's most basic we're asking "what does this code do?",
        or "what does this picture represent?", or "what routes could we use
        to fix this problem?", or "how do we solve this?".

        - An animated gif or photograph
        - A sketch or iPad drawing
        - A question that you must sketch out
        - Perhaps even a video!

    - Docs:
        @ https://tinyurl.com/anki-draw-card

    - Key:
        ★ Required
        ☆ Optional (recommended)
        ✎ Optional (notes, markdown)
        ⤷ Field Type

    - Notes:
        Where fields are auto-wrapped with an HTML tag, copy/paste the compiled
        data _within_ those tags in your Anki fields, otherwise you'll have
        formatting issues. For example:

            `★ Title` field:

            <h1>What happens is we type <code>Model</code> in the repl?</h1>
            xxxx-------------------------------------------------------xxxxx

        Compiled data is simply meant to speed up the card creation process —
        it's not meant to be viewed in the browser. Best viewed in a text editor
        (such as Visual Studio Code) to copy/paste your Anki card fields.

========================================================================== -->


<!-- -------------------------------------------------------------------------
    ★ Title

    ⤷ `string` (auto wrapped with a `H1` tag)
-------------------------------------------------------------------------- -->
# How can we avoid nested update functions and messages?


<!-- -------------------------------------------------------------------------
    ☆ Subtitle

    ⤷ `string` (auto wrapped with a `H2` tag)
-------------------------------------------------------------------------- -->
## Nested records


<!-- -------------------------------------------------------------------------
    ☆ Syntax (inline code)

    ⤷ `code string` (auto wrapped with `<p><code>` tag)

    This is NOT a `code block` field! It's for short lines of code only.
-------------------------------------------------------------------------- -->
`...`


<!-- -------------------------------------------------------------------------
    ☆ Sample (caption or hint)

    ⤷ `string` (auto wrapped with a `<figcaption>` tag — doesn't need `<p>` tag)

    Helpful for when the header question grows too long, or the Sample
    requires some context or a hint. Alternative to code comments.
-------------------------------------------------------------------------- -->
false


<!-- -------------------------------------------------------------------------
    ★ Sample (image)

    ⤷ `image`

      | Fuse the learning point with some imagery can help lock in learning.
      | It's better to stick to images, an animated GIF, or video for the Draw!
      | card's front, instead of a block of code. You could even add a code sample
      | as a snapshot if you're feeling particularly lazy (although you may as
      | well just use a Simple! card as it's easy).

      An image that asks the question _"what does this code do?"_, or _"what
      does this picture represent?"_, or _"what routes could we use to fix
      this problem?"_, or _"how do we solve this?"_.

      Use the 📎 paperclip button to add an image to Anki, or store it in the
      cloud and use the `<img ...>` tag. Be aware that duplicate file names could
      cause you problems with Anki's filesystem.

      Image should be roughly 390px wide (logical width) at a scale of @3x
      for an iPhone 15. Try to keep file size under 100kb. Ratio should be 4:3
      or 16:9 for full-width.
          @ https://www.ios-resolution.com
          @ https://tinyjpg.com (minimize)
          @ https://developer.apple.com/design/human-interface-guidelines/images
-------------------------------------------------------------------------- -->
![An image of a nest](../../source/media/draw-nested-function.png)




<!-- Back of card ======================================================== -->


<!-- -------------------------------------------------------------------------
    ★ Key point (image | code block)

    ⤷ `image | code block`

      | You can store either an image or `markdown->html` code block.

      An image that shows the answer to _"what does this code do?"_, or _"what
      does this picture represent?"_, or _"what routes could we use to fix
      this problem?"_, or _"how do we solve this?"_.

      The image will need to be added to Anki first, or you can store it
      in the cloud somewhere, and link to it like this.
-------------------------------------------------------------------------- -->
```elm
type Dressing
  = Caesar
  | OliveOil

type Msg
  = UpdateDressing Dressing

type alias Model =
  { user : User
  , dressing : Dressing
  , other : Other
  }

-- An extensible record --------

type alias Dressing r
  = { r | dressing : Dressing }

dressing : Dressing r -> Dressing
dressing record =
  record.dressing

-- Extract w/ type signature ---

dressing :
  { r | dressing : Dressing }
  -> Dressing
dressing record =
  record.dressing

-- Extract with selector -------

dressing : Model -> Dressing
dressing =
  .dressing -- helper function
```


<!-- -------------------------------------------------------------------------
    ★ Key point notes

    ⤷ `rich html`
-------------------------------------------------------------------------- -->
> We can simplify our `Msg` and prefer a flatter model

We can also _narrow the types_ for our view functions, to make them easier to
reason about. Without simplifying our model and messages, the code will become
a lot harder to read.


<!-- -------------------------------------------------------------------------
    ✎ Other notes

    ⤷ `rich html`
-------------------------------------------------------------------------- -->
Use [extensible records](https://discourse.elm-lang.org/t/extensible-records-seems-to-be-pruning-fields-and-failing-to-compile/8078/7) with a flat model to [narrow your types](https://discourse.elm-lang.org/t/domain-driven-type-narrowing/7753/20) wherever possible, removing the need for nested records! Extensible records have
downsides, so only use when necessary.


<!-- -------------------------------------------------------------------------
    ✎ Markdown

    ⤷ `raw text`

      Do not add the compiled HTML to your card, rather, use the raw text
      Markdown fenced code block. This makes for easier editing of a card
      later on.

      Warning: may increase card file size
        @ https://github.com/badlydrawnrob/anki/issues/116
-------------------------------------------------------------------------- -->
false
