<!-- Simple code compiler ====================================================

     Useful for converting `code blocks` or other field data:

     1. Enter a Markdown fenced code block (for example)
     2. `npm run pandoc`
     3. View the file in `/build/data/code.html`

========================================================================== -->

```elm
list =
  [ { entry = "20" }
  , { entry = "10" }
  ]

validated : List (Result String Int)
validated =
  List.map
    (\a -> check a.entry)
    list

check : List Int -> List (Result String Int)
check lst =
  Debug.todo "Make the checker function"

makeClock : List (Result String Int) -> Result String Clock
makeClock lst =
  case lst of
    [a,b] ->
      Result.map2
        Clock a b

    _ ->
      Err "Not a Clock"
```
```terminal
> makeClock validated
Ok (Clock 20 10) : Result String Clock
```
