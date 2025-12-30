<!-- Simple code compiler ====================================================

     Useful for converting `code blocks` or other field data:

     1. Enter a Markdown fenced code block (for example)
     2. `npm run data-code`
     3. View the file in `/build/data/data-code.html`

========================================================================== -->

```elm
import Browser
import Html exposing (Html, button, div, text, img)
import Html.Attributes exposing (..)
import Html.Events exposing (onClick)
import Random
import Array exposing (Array)

{- ... -}

type Msg
    = ClickedButton
    | GotSelectedIndex Int

randomPhoto : Random.Generator Int
randomPhoto =
  Random.int 0 (Array.length arrayOfPhotos - 1)  -- Returns a random index

update : Msg -> Model -> {{c1::(Model, Cmd Msg)::What goes here}}
update msg model =
  case msg of
    ClickedButton ->  -- Generates a `Cmd` and returns a `Msg`
      ( model, Random.generate GotSelectedIndex randomPhoto ) -- Gets random Photo

    GotSelectedIndex index ->  -- Updates the model from a `Msg`
      ( { model | selectedUrl = (getPhoto index) }, Cmd.none ) -- Returns a Photo


main : Program () Model Msg
main =
  Browser.element
    { init = \flags ->
        {{c1::( initialModel, Cmd.none )::What goes here?}}
    , view = view
    , update = update
    , subscriptions = \model -> Sub.none
  }
```

