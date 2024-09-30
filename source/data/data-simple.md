<!-- Front of card ===========================================================

    Simple Card Data

    - Type:
        What's the answer?
        A simple `question->answer` card;
        we're asking the question: "what does this code do?", e.g:

        - A function with an output you have to guess.
        - A class with a method that you need to call.

    - Docs:
        http://tinyurl.com/anki-simple-card

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
                -------------------------------------------------------
            xxxx                                                       xxxxx

        Compiled data is simple meant to speed up the card creation process —
        it's not meant to be viewed in the browser. Best viewed in a text editor (such as Visual Studio Code) to copy/paste your Anki field data.

========================================================================== -->


<!-- -------------------------------------------------------------------------
    ★ Title

    ⤷ `string` (auto wrapped with a `H1` tag)
-------------------------------------------------------------------------- -->
# Explain each part of this type signature


<!-- -------------------------------------------------------------------------
    ☆ Subtitle

    ⤷ `string` (auto wrapped with a `H2` tag)
-------------------------------------------------------------------------- -->
## Http


<!-- -------------------------------------------------------------------------
    ☆ Syntax (inline code)

    ⤷ `code string` (auto wrapped with <p><code> tag)
-------------------------------------------------------------------------- -->
`Http.expectJson`


<!-- -------------------------------------------------------------------------
    ★ Sample (code block)

    ⤷ `pre block`

      | Requires `markdown` fenced code block;

      A markdown fenced code block that will compile to our highlighted
      code with Pandoc. What does this code do?
-------------------------------------------------------------------------- -->
```elm
Http.expectJson : (Result Http.Error a -> msg) -> Decoder a -> Http.Expect msg
```



<!-- Back of card ======================================================== -->


<!-- -------------------------------------------------------------------------
    ★ Key point (code block)

    ⤷ `pre block`

      | Requires `markdown` fenced code block;

      A markdown fenced code block that will compile to our highlighted
      code with Pandoc. The output or answer to the above question.
-------------------------------------------------------------------------- -->
```elm
import Http
import Json.Decode exposing (Decoder, string)

init : () -> ( Model, Cmd Msg )
init () =
    ( initialModel, loadJson )

loadJson =
    Http.get
        { url = "https://url.com/feed/"
        , expect = Http.expectJson gotJson string
        }

type Msg =
    GotJson (Result Http.Error String)

update msg model =
    case msg of
        GotJson (Ok data) ->
            -- update model

        GotJson (Err _) ->
            -- update error message
```
```terminal
> Http.expectJson GotJson string
<internals> : Http.Expect Msg
```


<!-- -------------------------------------------------------------------------
    ★ Key point notes

    ⤷ `rich html`
-------------------------------------------------------------------------- -->
1. `Http.expectJson` takes a function that returns a `msg` ...
2. It also takes a `Decoder a`, in this instance [`string`](https://package.elm-lang.org/packages/elm/json/latest/Json-Decode#string)
3. The result of `Http.exectJson` _expects_ a `msg`

Our `msg` could be anything, but it must hold a `Result` of same type. Our decoder takes in a `json` string, converts it to a `String`, then passes that value to our `msg` (in this case a `Msg` type). `GotJson` now holds either an `Ok String` or an `Http.Error`. We handle it in `update` with a `case`.

The problem with the type signature is it doesn't quite show the flow of data. Our decoder seems to handle the data (our `json` string) first.

<!-- -------------------------------------------------------------------------
    ✎ Other notes

    ⤷ `rich html`
-------------------------------------------------------------------------- -->
Try messing around with the `elm repl` if you don't understand the type signature fully, give it a value and see what happens!

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
