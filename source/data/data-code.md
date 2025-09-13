<!-- Simple code compiler ====================================================

     Useful for converting `code blocks` or other field data:

     1. Enter a Markdown fenced code block (for example)
     2. `npm run data-code`
     3. View the file in `/build/data/data-code.html`

========================================================================== -->

```elm
Song = { song : String }

{-| A bit like `Random.Uniform` -}
Songs
    = NoSongs
    | Songs Song (List Song)
--          ^^^^       ^^^^

Songs
  (Song "Afraid")
  [(Song "Get Back"), (Song "Ship Building")]

model = {
  songs = NoSongs
}

{-| Render songs if available! -}
renderView model =
  case model.songs of
    NoSongs ->
      songlessView

    Songs first rest ->
      (view first rest)
```
