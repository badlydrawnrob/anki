<!-- Simple code compiler ====================================================

     Useful for converting `code blocks` or other field data:

     1. Enter a Markdown fenced code block (for example)
     2. `npm run data-code`
     3. View the file in `/build/data/data-code.html`

========================================================================== -->

```elm
gotInts : String -> List (Maybe Int)
gotInts =
  String.split ":"
    >> List.map String.toInt

toTuple : List (Maybe Int) -> Maybe (Int, Int)
toTuple l =
  case l of
    [Just a, Just b] ->
      Just (a, b)

    _ ->
      Nothing
```

