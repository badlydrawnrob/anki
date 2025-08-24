<!-- Front of card ===========================================================

    Simple Card Data

    - Type:
        What's the answer?
        A simple `question->answer` card;
        we're asking the question: "what does this code do?", e.g:

        - A function with an output you have to guess
        - A class with a method that you need to call

    - Docs:
        @ http://tinyurl.com/anki-simple-card

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
# Are these two `Msg` actions the same?


<!-- -------------------------------------------------------------------------
    ☆ Subtitle

    ⤷ `string` (auto wrapped with a `H2` tag)
-------------------------------------------------------------------------- -->
## Messages


<!-- -------------------------------------------------------------------------
    ☆ Syntax (inline code)

    ⤷ `code string` (auto wrapped with `<p><code>` tag)

    This is NOT a `code block` field! It's for short lines of code only.
-------------------------------------------------------------------------- -->
`Msg`


<!-- -------------------------------------------------------------------------
    ★ Sample (code block)

    ⤷ `pre block`

      | Requires `markdown` fenced code block;

      A markdown fenced code block that will compile to our highlighted
      code with Pandoc. What does this code do?
-------------------------------------------------------------------------- -->
```elm
-- Our message
type alias Msg =
  { description : String, data : String }

-- An image
onClick
  { description = "ClickedPhoto"
  , data = thumb.url
  }

-- A button
onClick
  { description = "ClickedSurpriseMe"
  , data = ""
  }
```


<!-- -------------------------------------------------------------------------
    ☆ Sample (caption or hint)

    ⤷ `string` (auto wrapped with a `<figcaption>` tag — doesn't need `<p>` tag)

    Helpful for when the header question grows too long, or the Sample
    requires some context or a hint. Alternative to code comments.
-------------------------------------------------------------------------- -->
false


<!-- Back of card ======================================================== -->


<!-- -------------------------------------------------------------------------
    ★ Key point (code block)

    ⤷ `pre block`

      | Requires `markdown` fenced code block;

      A markdown fenced code block that will compile to our highlighted
      code with Pandoc. The output or answer to the above question.
-------------------------------------------------------------------------- -->
```elm
update : Msg -> Model -> Model
update msg model =
  case msg.description of
    "ClickedPhoto" ->
      { model
        | selectedUrl = msg.data
      }

    "ClickedSurpriseMe" ->
      { model
        | selectedUrl = "2.jpeg"
      }

    ...
```


<!-- -------------------------------------------------------------------------
    ★ Key point notes

    ⤷ `rich html`
-------------------------------------------------------------------------- -->
> **These actions look the same, but are ultimately different.** Don't shoehorn two similar messages in one `Msg` as it'll get messy fast: what happens if we add a _third_ action?

We use a proper `type Msg` with variants that properly map our messages with correct data. This way we can add as many as we need, and similar but different messages don't get conflated. One event shouldn’t need to know about the other!


<!-- -------------------------------------------------------------------------
    ✎ Other notes

    ⤷ `rich html`
-------------------------------------------------------------------------- -->
More on [custom types and messages](https://guide.elm-lang.org/types/custom_types#messages)

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
