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
# Our editor gives a (minor) complaint about this code. What is it?


<!-- -------------------------------------------------------------------------
    ☆ Subtitle

    ⤷ `string` (auto wrapped with a `H2` tag)
-------------------------------------------------------------------------- -->
## Maybe


<!-- -------------------------------------------------------------------------
    ☆ Syntax (inline code)

    ⤷ `code string` (auto wrapped with `<p><code>` tag)
-------------------------------------------------------------------------- -->
`Maybe User`


<!-- -------------------------------------------------------------------------
    ★ Sample (code block)

    ⤷ `pre block`

      | Requires `markdown` fenced code block;

      A markdown fenced code block that will compile to our highlighted
      code with Pandoc. What does this code do?
-------------------------------------------------------------------------- -->
```elm
makeUser : String -> Maybe User
makeUser str =
  case String.toInt str of
    Just value ->
      Just (User ("Age: " ++ String.fromInt value))
    Nothing ->
      Nothing
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
type User = User String

makeUser : String -> Maybe User
makeUser str =
  String.toInt str
    |> Maybe.andThen
        (\maybeInt ->
            Just (User (makeAge maybeInt)))

makeAge : Int -> String
makeAge num =
  "Age: " ++ String.fromInt num
```


<!-- -------------------------------------------------------------------------
    ★ Key point notes

    ⤷ `rich html`
-------------------------------------------------------------------------- -->
The code is 100% valid, but our Visual Studio Code (Elm plugin) complains: "You're mapping a `Nothing` to `Nothing`; use `Maybe.map` or `Maybe.andThen` instead."


<!-- -------------------------------------------------------------------------
    ✎ Other notes

    ⤷ `rich html`
-------------------------------------------------------------------------- -->
You could leave it as-is, but you'll have a minor error squiggle.


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
