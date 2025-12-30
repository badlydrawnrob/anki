``` elm
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

update : Msg -> Model -> {{c1::(Model, Cmd Msg)::What goes here}}
update msg model =
  case msg of
    ClickedButton ->  -- Generates a `Cmd` and returns a `Msg`
      {{c2::( model, Random.generate GotSelectedIndex randomPhoto )::What kind of data type is this?}}  -- Gets random Photo

    GotSelectedIndex index ->  -- Updates the model from a `Msg`
      {{c2::( { model | selectedUrl = (getPhoto index) }, Cmd.none )::What kind of data type is this}}  -- Returns a Photo


main : Program () Model Msg
main =
  Browser.element
    { init = \flags -> {{c3::( initialModel, Cmd.none )::What goes here?}}
    , view = view
    , update = update
    , subscriptions = \model -> Sub.none
  }
```
