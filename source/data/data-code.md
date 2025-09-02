<!-- Simple code compiler ====================================================

     Useful for converting `code blocks` or other field data:

     1. Enter a Markdown fenced code block (for example)
     2. `npm run data-code`
     3. View the file in `/build/data/data-code.html`

========================================================================== -->

```elm
viewSection : String -> List (Html msg) -> Html msg
viewSection heading children =
  section []
    (h2 [] [ text "Title" ]
      :: children)

viewSection : List (Html msg)
viewSection =
  [ h2 []
    [ text "Secondly" ]
  , span []
    [ text "Thirdly" ]
  ]
```
