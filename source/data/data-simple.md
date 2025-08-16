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
# We’ve got a BIG chunk of HTML in this view function. Why is that bad? How can we fix it?


<!-- -------------------------------------------------------------------------
    ☆ Subtitle

    ⤷ `string` (auto wrapped with a `H2` tag)
-------------------------------------------------------------------------- -->
## Refactoring


<!-- -------------------------------------------------------------------------
    ☆ Syntax (inline code)

    ⤷ `code string` (auto wrapped with `<p><code>` tag)

    This is NOT a `code block` field! It's for short lines of code only.
-------------------------------------------------------------------------- -->
`view`


<!-- -------------------------------------------------------------------------
    ★ Sample (code block)

    ⤷ `pre block`

      | Requires `markdown` fenced code block;

      A markdown fenced code block that will compile to our highlighted
      code with Pandoc. What does this code do?
-------------------------------------------------------------------------- -->
```elm
view : Model -> Html Msg
view model =
  div []
    [ h1 [ class "header" ]
      [ text "Saladise - Build a Salad" ]
    , div [ class "content" ]
      [ if model.sending then
        div [ class "sending" ]
          [ text "Sending your order" ]

        else if model.building then
          -- Lots of lines of code ...
          div [ class "building" ]
            a [ class "action"
              , onClick Build
              ]
              [ text "build my order" ]
          -- Lots of lines of code ...
        else
          div [ class "done" ]
      ]
    ]
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
viewSend : Html msg

viewBuild : Model -> Html Msg

viewDone : Html msg

viewStep : Model -> Html Msg
viewStep model =
  if model.sending then
    viewSend
  else if model.building then
    viewBuild model
  else
    viewDone model

view : Model -> Html Msg
view model =
  div []
    [ h1 [ class "header" ]
        [ text "Saladise - Build a Salad" ]
    , div [ class "content" ]
        [ viewStep model ]
    ]
```


<!-- -------------------------------------------------------------------------
    ★ Key point notes

    ⤷ `rich html`
-------------------------------------------------------------------------- -->

> **Our code is much easier to read** if we split out our `view` functions and `if`/`else` conditions!

1. `viewX` functions help isolate and spot bugs
2. `Html msg` means there are _zero_ actions and messages
3. `Html Msg` means there _are definitely_ actions and messages


<!-- -------------------------------------------------------------------------
    ✎ Other notes

    ⤷ `rich html`
-------------------------------------------------------------------------- -->
`Html msg` is guaranteed to have ZERO messages and actions if used in this way.


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
