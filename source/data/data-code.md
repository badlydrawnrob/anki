<!-- Simple code compiler ====================================================

     Useful for converting `code blocks` or other field data:

     1. Enter a Markdown fenced code block (for example)
     2. `npm run data-code`
     3. View the file in `/build/data/data-code.html`

========================================================================== -->

```elm
import Dict exposing (Dict)
import Json.Decode as D exposing (Decoder)
import Json.Encode as E

type alias User =
  { name : String }

decodeUser =
  D.map User
    (D.field "name" D.string)

tom =
  E.object
    [("name", E.string "Tom")]

dict =
  Dict.singleton
    "person" tom

-- Fix this code
getValue1 :
  Dict String D.Value
  -> Result D.Error User
getValue1 dict =
  case Dict.get "person" dict of
    Just value ->
      D.decodeValue decodeUser value

    Nothing ->
      Debug.todo
        "D.Error is ..."
```

```elm
getValue2 :
  Dict String D.Value
  -> Maybe User
getValue2 dictionary =
  -- ↓ `Just Value`
  Dict.get "person" dictionary
    -- ↓ `Just User` or `Nothing`
    |> Maybe.andThen
      (\maybeValue ->
        case D.decodeValue decodeUser maybeValue of
          Ok user ->
            Just user

          Err _ ->
            Nothing)
```
