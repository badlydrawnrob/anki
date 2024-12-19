<!-- Simple code compiler ====================================================

     Useful for converting `code blocks` or other field data:

     1. Enter a Markdown fenced code block (for example)
     2. `npm run pandoc`
     3. View the file in `/build/data/code.html`

========================================================================== -->

```elm
view : Html msg
view model =
  div []
    <| List.map viewCat model.cats

viewCat : Html msg
viewCat cats =
     p [] [ text cats.name ]
```
