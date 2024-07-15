<!-- Front of card ===========================================================

    Missing! Card Data

    - Type:
        A question with a [missing] word;

        - A missing function or expression you have to guess,
        - A missing input or output to remember.

    - Docs:
        http://tinyurl.com/anki-missing-card

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

            <h1>We’ve changed from <code>Browser.sandbox</code> to <code>Browser.element</code>. What’s changed?</h1>
                ------------------------------------------------------------------------------------------------
            xxxx                                                                                                xxxxx

        Compiled data is simple meant to speed up the card creation process —
        it's not meant to be viewed in the browser. Best viewed in a text editor (such as Visual Studio Code) to copy/paste your Anki field data.

========================================================================== -->


<!-- -------------------------------------------------------------------------
    ★ Title

    ⤷ `string` (auto wrapped with a `H1` tag)
-------------------------------------------------------------------------- -->
# We've changed from `Browser.sandbox` to `Browser.element`. What's changed?


<!-- -------------------------------------------------------------------------
    ☆ Subtitle

    ⤷ `string` (auto wrapped with a `H2` tag)
-------------------------------------------------------------------------- -->
## Commands


<!-- -------------------------------------------------------------------------
    ☆ Syntax (inline code)

    ⤷ `code string` (auto wrapped with <p><code> tag)
-------------------------------------------------------------------------- -->
`Cmd`


<!-- -------------------------------------------------------------------------
    ★ Key point (code block or image)

    ⤷ `pre block | image`

      | Requires `markdown` fenced code block;
      | Requires `{{c1::cloze}}` tag(s))

      A markdown fenced code block that will compile to our highlighted
      code with Pandoc. Make sure to add at least one cloze deletion:

        `{{c1::the answer::HINT TEXT}}`

      Here's an example cloze card:

        @ https://codepen.io/testuser-247585903/pen/BabRjvb

      You can add cloze deletion tags to the fenced code block and
      they should work fine in Anki. You can also:

      1. `Toggle HTML Editor ⌘⇧X` (`‹›`) to enable rich text preview
      2. Highlight the text that you'd like to convert to a cloze.
      3. Press the `[...]` or `[...]+` button to add the cloze deletion

      !# Warning: These buttons may break your code:
        @ https://github.com/badlydrawnrob/anki/issues/132
-------------------------------------------------------------------------- -->
```elm
-- other imports here
import Browser
import Html exposing (Html, button, div, text, img)
import Html.Attributes exposing (..)
import Html.Events exposing (onClick)
import Random
import Array exposing (Array)

-- A bunch of other stuff:
--   2. A `viewThumbnail string` -> `Html Msg` (an image)
--   3. A `getPhoto` that returns `Just Photo` (i.e: "1.jpeg")
--   4. Of course, our `Model`, `View`, `Update` etc

type Msg
    = ClickedButton
    | GotSelectedIndex Int

randomPhoto : Random.Generator Int
randomPhoto =
  Random.int 0 (Array.length arrayOfPhotos - 1)  -- Returns a random index

update : Msg -> Model -> (Model, Cmd Msg)
update msg model =
  case msg of
    ClickedButton ->  -- Generates a `Cmd` and returns a `Msg`
      ( model, Random.generate GotSelectedIndex randomPhoto )  -- Gets random Photo
    GotSelectedIndex index ->  -- Updates the model from a `Msg`
      ( { model | selectedUrl = (getPhoto index) }, Cmd.none )  -- Returns a Photo


main : Program () Model Msg
main =
  Browser.element
    { init = \flags -> ( initialModel, Cmd.none )
    , view = view
    , update = update
    , subscriptions = \model -> Sub.none
  }
```


<!-- -------------------------------------------------------------------------
    ★ Key point notes

    ⤷ `rich html`
-------------------------------------------------------------------------- -->
1. `Browser.sandbox` lets us "stay within the world of Elm"
2. To use functions that have side-effects like `Random` we need `Cmd`.
3. For _that_, we switch from `Browser.sandbox` to [`Browser.element`](https://guide.elm-lang.org/effects/)
4. This allows us to interact with the outside world (and it's data).

You can see the [simplified full program here](https://ellie-app.com/qbXb7HZtxpya1).



<!-- -------------------------------------------------------------------------
    ✎ Other notes

    ⤷ `rich html`
-------------------------------------------------------------------------- -->
You can see [how we transformed a update function](http://tinyurl.com/elm-lang-convert-update-tuple) with a regular `Model` to a tuple with a `(Model, Cmd Msg)`. **More on [`commands` here](https://elmprogramming.com/commands.html)**


<!-- -------------------------------------------------------------------------
    ✎ Markdown

    ⤷ `raw text`

      Do not add the compiled HTML to your card, rather, use the raw text
      Markdown fenced code block. This makes for easier editing of a card
      later on.

      Please be careful:

        Warning: remove all `{{c1:cloze}}` cloze deletion tags!

      If you save your card with cloze deletion tags in the `★ Markdown`
      field, Anki will throw an error, and you might not be able to save
      your card.
-------------------------------------------------------------------------- -->
false
