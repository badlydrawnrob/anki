We need to render our list in the view. What function could we use to
handle `Nothing`? Maybe Maybe

``` sourceCode
model = {
  -- A possible list
  songs = Nothing
}
```

False

``` sourceCode
-- List or not?
renderView model =
  case model.songs of
    Nothing ->
      songlessView

    Just songs ->
      (view songs)

-- Within the view
Maybe.withDefault "n/a" model.songs
```

> **`Maybe.withDefault`** solves our problem here. Remember that we can
> simply use an empty list here.

| Use it late …                  | You could also ...             |
|--------------------------------|--------------------------------|
| As late as possible (the view) | Use `Maybe.map` to lift values |

A list can be `empty`, `singleton`, or `many`: you’ve got to handle all
cases. A custom type can *sometimes* be a better option
( [`Random.Uniform`](https://package.elm-lang.org/packages/elm/random/latest/Random#uniform) is
a good example) but only if it offers a distinct improvement on `Maybe`.
Is it more descriptive? A non-empty list?
