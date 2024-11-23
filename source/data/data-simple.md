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
# What is the disadvantage of using nested state?


<!-- -------------------------------------------------------------------------
    ☆ Subtitle

    ⤷ `string` (auto wrapped with a `H2` tag)
-------------------------------------------------------------------------- -->
## Nested records


<!-- -------------------------------------------------------------------------
    ☆ Syntax (inline code)

    ⤷ `code string` (auto wrapped with `<p><code>` tag)
-------------------------------------------------------------------------- -->
``


<!-- -------------------------------------------------------------------------
    ★ Sample (code block)

    ⤷ `pre block`

      | Requires `markdown` fenced code block;

      A markdown fenced code block that will compile to our highlighted
      code with Pandoc. What does this code do?
-------------------------------------------------------------------------- -->
```elm
type Dressing
  = Caesar
  | OliveOil

type DressingMsg
  = SetDressing Dressing

type Msg
  = DressingMsg DressingMsg

type alias Salad =
  { dressing : Dressing }

init =
  { salad = { dressing = Caesar } }
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
updateDressing : DressingMsg -> Salad -> Salad
updateDressing msg salad =
    case msg of
        SetDressing dressing ->
            { salad | dressing = dressing }

update : Msg -> Model -> Model
update msg model =
  case msg of
    DressingMsg dressingMsg ->
      { model
        | salad =
          updateDressing dressingMsg model.salad
      }
```


<!-- -------------------------------------------------------------------------
    ★ Key point notes

    ⤷ `rich html`
-------------------------------------------------------------------------- -->
We've got to create a _nested function_ to update our _nested record_ which **can get quite complicated and ugly** if you go more than one level deep. @rtfeldman uses [a simple `model.form` record](https://github.com/rtfeldman/elm-spa-example/blob/cb32acd73c3d346d0064e7923049867d8ce67193/src/Page/Login.elm#L27) and an anonymous function to update it.


<!-- -------------------------------------------------------------------------
    ✎ Other notes

    ⤷ `rich html`
-------------------------------------------------------------------------- -->
You can also use [extensible records](https://discourse.elm-lang.org/t/extensible-records-seems-to-be-pruning-fields-and-failing-to-compile/8078/7) to narrow the types, which doesn't require nesting records.


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
