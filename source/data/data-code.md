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

toTuple : List (Maybe Int) -> (Int, Int)
toTuple l =
  case l of
    [Just a, Just b] -> (a, b)
    _ -> (0, 0) -- This should NEVER happen!
```

```terminal
> gotInts "2:00"
[Just 2, Just 0]
> toTuple [Just 2, Just 0]
(2, 0)
```
