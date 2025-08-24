``` sourceCode
update : Msg -> Model -> Model
update msg model =
  case msg.description of
    "ClickedPhoto" ->
      { model
        | selectedUrl = msg.data
      }

    "ClickedSurpriseMe" ->
      { model
        | selectedUrl = "2.jpeg"
      }

    ...
```
