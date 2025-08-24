<!-- Simple code compiler ====================================================

     Useful for converting `code blocks` or other field data:

     1. Enter a Markdown fenced code block (for example)
     2. `npm run data-code`
     3. View the file in `/build/data/data-code.html`

========================================================================== -->

```elm
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
