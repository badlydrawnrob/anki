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
# How are we lifting the `Status value` here?


<!-- -------------------------------------------------------------------------
    ☆ Subtitle

    ⤷ `string` (auto wrapped with a `H2` tag)
-------------------------------------------------------------------------- -->
## Types


<!-- -------------------------------------------------------------------------
    ☆ Syntax (inline code)

    ⤷ `code string` (auto wrapped with `<p><code>` tag)

    This is NOT a `code block` field! It's for short lines of code only.
-------------------------------------------------------------------------- -->
`Loaded (List photo)`


<!-- -------------------------------------------------------------------------
    ★ Sample (code block)

    ⤷ `pre block`

      | Requires `markdown` fenced code block;

      A markdown fenced code block that will compile to our highlighted
      code with Pandoc. What does this code do?
-------------------------------------------------------------------------- -->
```elm
import Browser
import Html exposing (Html)
import Html.Attributes as Attr
import Html.Events as Events
import Html exposing (a)


type alias Photo =
  { id : Int
  , url : String
  , liked : Bool
  }

type alias Feed =
  List Photo

type alias Id =
  Int

type Status a
  = Loading
  | Loaded a

type alias Model =
  { feed : Status (List Photo) }


-- Messages --------------------

type Msg =
    Lifted Photo


-- Setup -----------------------
pic : Photo
pic = Photo 1 "1.jpg" False

init : Model
init =
  { feed = Loaded [ pic ] }

-- View ------------------------

view : Model -> Html Msg
view model =
  case model.feed of
    Loading ->
      Html.text "Do nothing"

    Loaded photos ->
      Html.div []
        (List.map viewPhoto photos)

-- View code -------------------
```


<!-- -------------------------------------------------------------------------
    ☆ Sample (caption or hint)

    ⤷ `string` (auto wrapped with a `<figcaption>` tag — doesn't need `<p>` tag)

    Helpful for when the header question grows too long, or the Sample
    requires some context or a hint. Alternative to code comments.
-------------------------------------------------------------------------- -->
Null


<!-- Back of card ======================================================== -->


<!-- -------------------------------------------------------------------------
    ★ Key point (code block)

    ⤷ `pre block`

      | Requires `markdown` fenced code block;

      A markdown fenced code block that will compile to our highlighted
      code with Pandoc. The output or answer to the above question.
-------------------------------------------------------------------------- -->
```elm
viewPhoto : Photo -> Html Msg
viewPhoto photo =
  Html.a
  [ Events.onClick (Lifted photo)
  , Attr.href "#" -- photo.url
  ]
  [ Html.text
    ((++) "🎤 We could be lifted: "
    <| if photo.liked then "True" else "False")
  ]
```


<!-- -------------------------------------------------------------------------
    ★ Key point notes

    ⤷ `rich html`
-------------------------------------------------------------------------- -->
> We can lift our `Loaded value` ONCE and ONCE only!

There's no need to unwrap a `CustomType` or `Maybe` more than once in the view.
Our `onClick` and `Html.Events` can _all_ use the naked value.


<!-- -------------------------------------------------------------------------
    ✎ Other notes

    ⤷ `rich html`
-------------------------------------------------------------------------- -->
Our `Msg` type could've also been a simpler `Lifted Int` for the `photo.id`.

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
