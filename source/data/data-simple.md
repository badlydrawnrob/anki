<!-- Front of card ===========================================================

    Simple Card Data

    - Type:
        What's the answer?
        A simple `question->answer` card;
        we're asking the question: "what does this code do?", e.g:

        - A function with an output you have to guess.
        - A class with a method that you need to call.

    - Docs:
        http://tinyurl.com/anki-simple-card

    - Key:
        ★ Required
        ☆ Optional (recommended)
        ✎ Optional (notes, markdown)
        ⤷ Field Type

    - Notes:
        Where fields are auto-wrapped with an HTML tag, copy/paste the compiled
        data _within_ those tags in your Anki fields, otherwise you'll have
        formatting issues. For example:

            `★ Title` field:

            <h1>What happens is we type <code>Model</code> in the repl?</h1>
                -------------------------------------------------------
            xxxx                                                       xxxxx

        Compiled data is simple meant to speed up the card creation process —
        it's not meant to be viewed in the browser. Best viewed in a text editor (such as Visual Studio Code) to copy/paste your Anki field data.

========================================================================== -->


<!-- -------------------------------------------------------------------------
    ★ Title

    ⤷ `string` (auto wrapped with a `H1` tag)
-------------------------------------------------------------------------- -->
# Here we have a `Songs` type that might be empty. What simple data type is this similar to?


<!-- -------------------------------------------------------------------------
    ☆ Subtitle

    ⤷ `string` (auto wrapped with a `H2` tag)
-------------------------------------------------------------------------- -->
## Maybe


<!-- -------------------------------------------------------------------------
    ☆ Syntax (inline code)

    ⤷ `code string` (auto wrapped with <p><code> tag)
-------------------------------------------------------------------------- -->
`Maybe`


<!-- -------------------------------------------------------------------------
    ★ Sample (code block)

    ⤷ `pre block`

      | Requires `markdown` fenced code block;

      A markdown fenced code block that will compile to our highlighted
      code with Pandoc. What does this code do?
-------------------------------------------------------------------------- -->
```elm
{-| `Songs` is a custom type. It's a bit like
`Random.Uniform`, with `first` and `rest` -}
Song = { song : String }

Songs
    = NoSongs
    | Songs Song (List Song)
--          ^^^^       ^^^^

Songs
  (Song "Afraid")
  [(Song "Get Back"), (Entry "Ship Building")]

-- Model
model = {
  songs = NoSongs -- custom type
}
```



<!-- Back of card ======================================================== -->


<!-- -------------------------------------------------------------------------
    ★ Key point (code block)

    ⤷ `pre block`

      | Requires `markdown` fenced code block;

      A markdown fenced code block that will compile to our highlighted
      code with Pandoc. The output or answer to the above question.
-------------------------------------------------------------------------- -->
```elm
-- Do we have text or not?
renderView model =
  case model.songs of
    NoSongs -> songlessView -- No text view
    Songs first rest  -> (view first rest) -- Render songs
```


<!-- -------------------------------------------------------------------------
    ★ Key point notes

    ⤷ `rich html`
-------------------------------------------------------------------------- -->
| Try to not reach for withDefault early | You could use a custom type, but it adds some complexity |
|--|--|
| Use it at the very end (as late as possible) | And it’s not always a big improvement on simpler data types! |

- You _could_ use a custom type, but it adds some complexity ...
    - And it's not always a big improvement on simpler data types!

 Only use a `type Custom` where it makes a noticeable improvement — `[]` and `NoSongs : Songs` are similar, so it doesn't bring much to the table. Instead you could've used a `Maybe List`. Remember — when using `Maybe`, reach for `withDefault` late (e.g. in the `view` that needs to show something).

 You could also use a collection type, so it's either `AlbumNotFound` or an `AlbumId Int` that links to a `List Song`.

<!-- -------------------------------------------------------------------------
    ✎ Other notes

    ⤷ `rich html`
-------------------------------------------------------------------------- -->
A list can be `empty`, `singleton`, or `many`, so bear that in mind when you're creating a custom type. `Random.Uniform` is a good example of this.

<!-- -------------------------------------------------------------------------
    ✎ Markdown

    ⤷ `raw text`

      Do not add the compiled HTML to your card, rather, use the raw text
      Markdown fenced code block. This makes for easier editing of a card
      later on.

      Warning: may increase card file size
        @ https://github.com/badlydrawnrob/anki/issues/116
-------------------------------------------------------------------------- -->
false
