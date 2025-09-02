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
# How could we simplify this `Msg` type?


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
`SaladMsg SaladMsg`


<!-- -------------------------------------------------------------------------
    ★ Sample (code block)

    ⤷ `pre block`

      | Requires `markdown` fenced code block;

      A markdown fenced code block that will compile to our highlighted
      code with Pandoc. What does this code do?
-------------------------------------------------------------------------- -->
```elm
type Topping
    = Tomatoes
    | Cucumbers
    | Onions

type SaladMsg
    = ToggleTopping Topping Bool

type Msg
    = SaladMsg SaladMsg -- Constructor + SaladType

viewLabel : Set String -> Html Msg
viewLabel toppings =
  label [ class "select-option" ]
    [ input
        [ type_ "checkbox"
        , checked (Set.member (toppingToString Onions) toppings)
        , onCheck (SaladMsg << ToggleTopping Onions)
        ]
        []
    , text "Onions"
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
type Msg
    = ToggleTopping Topping Bool

viewLabel : Set String -> Html Msg
viewLabel toppings =
  label [ class "select-option" ]
    [ input
        [ type_ "checkbox"
        , checked (Set.member (toppingToString Onions) toppings)
        , onCheck (ToggleTopping Onions)
        ]
        []
    , text "Onions"
    ]
```


<!-- -------------------------------------------------------------------------
    ★ Key point notes

    ⤷ `rich html`
-------------------------------------------------------------------------- -->
> **Simplify your types wherever possible!** I'd prefer a longer list of `Msg` than being clever and hard to read.

The only reason we'd need this heavily nested `Msg` type is if we split our modules around the `SaladMsg` type (which in the book holds 3 different messages). We _really_ don't need to do that — aim for ONE level deep.


<!-- -------------------------------------------------------------------------
    ✎ Other notes

    ⤷ `rich html`
-------------------------------------------------------------------------- -->
This is from "Programming Elm" book, which you can find in `how-to-elm` in [`/06-build-larger-apps`](https://github.com/badlydrawnrob/elm-playground/blob/517f1cf57ba22afa3ab4c55913fdbbb5faa61fec/programming-elm/06-build-larger-apps/src/SaladBuilder.elm)!

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
