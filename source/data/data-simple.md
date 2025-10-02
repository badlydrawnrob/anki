<!-- Front of card ===========================================================

    Simple Card Data

    - Type:
        What's the answer?
        A simple `question->answer` card;
        we're asking the question: "what does this code do?", e.g:

        - A function with an output you have to guess
        - A class with a method that you need to call

    - Docs:
        @ http://tinyurl.com/anki-simple-card

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
            xxxx-------------------------------------------------------xxxxx

        Compiled data is simply meant to speed up the card creation process —
        it's not meant to be viewed in the browser. Best viewed in a text editor
        (such as Visual Studio Code) to copy/paste your Anki card fields.

========================================================================== -->


<!-- -------------------------------------------------------------------------
    ★ Title

    ⤷ `string` (auto wrapped with a `H1` tag)
-------------------------------------------------------------------------- -->
# Why is the `Maybe Feed` here bad practice? How could it be improved?


<!-- -------------------------------------------------------------------------
    ☆ Subtitle

    ⤷ `string` (auto wrapped with a `H2` tag)
-------------------------------------------------------------------------- -->
## Maybe


<!-- -------------------------------------------------------------------------
    ☆ Syntax (inline code)

    ⤷ `code string` (auto wrapped with `<p><code>` tag)

    This is NOT a `code block` field! It's for short lines of code only.
-------------------------------------------------------------------------- -->
`type alias Feed = List Photo`


<!-- -------------------------------------------------------------------------
    ★ Sample (code block)

    ⤷ `pre block`

      | Requires `markdown` fenced code block;

      A markdown fenced code block that will compile to our highlighted
      code with Pandoc. What does this code do?
-------------------------------------------------------------------------- -->
```elm
photo : Photo
photo = Photo 1 "1.jpg" False

init : Model
init =
  { feed = Just [ photo ] }

toggleLiked : Photo -> Photo
toggleLiked photo =
  { photo
    | liked = not photo.liked }

updateFeed : (Photo -> Photo) -> Id -> Maybe Feed -> Maybe Feed
updateFeed fn id maybeFeed =
  Maybe.map
    (updatePhotoByID fn id)
    maybeFeed

updatePhotoByID : (Photo -> Photo) -> Int -> Feed -> Feed
updatePhotoByID fn id feed =
  List.map
    (\photo ->
      if photo.id == id then
        fn photo
      else
        photo
      )
      feed

update : Msg -> Model -> Model
update msg model =
  case msg of
    Liked id ->
      { model
        | feed = updateFeed toggleLiked id model.feed }
```
```terminal
>> update (Liked 1) init
{ feed = Just [{ id = 1, liked = True, url = "1.jpg" }] }
>> update (Liked 1) { feed = Nothing }
{ feed = Nothing }
```


<!-- -------------------------------------------------------------------------
    ☆ Sample (caption or hint)

    ⤷ `string` (auto wrapped with a `<figcaption>` tag — doesn't need `<p>` tag)

    Helpful for when the header question grows too long, or the Sample
    requires some context or a hint. Alternative to code comments.
-------------------------------------------------------------------------- -->
Our `Maybe Feed` is pulled in from an external API


<!-- Back of card ======================================================== -->


<!-- -------------------------------------------------------------------------
    ★ Key point (code block)

    ⤷ `pre block`

      | Requires `markdown` fenced code block;

      A markdown fenced code block that will compile to our highlighted
      code with Pandoc. The output or answer to the above question.
-------------------------------------------------------------------------- -->
```elm
type Status a
  = Loading
  | Loaded a

{- Similar to `Maybe.map` -}
statusMap : (a -> a) -> Status a -> Status a
statusMap fn status =
  case status of
    Loaded a ->
      Loaded (fn a)

    Loading ->
      Loading

{- Use unwrapped value for `Msg` -}
view : Model -> Html Msg
view model =
  case model.feed of
    Loading ->
      text "Do nothing"

    Loaded a ->
      a [ onClick (Lifted a)
        , Attr.href "/path"
        ]
        [ "🎤 We could be lifted" ]

{- Within the `Msg` branch, we can
use the value, then re-wrap it! -}
update : Msg -> Model -> (Model, Cmd Msg)
update msg model =
  case model of
    Lifted a ->
      { model | feed = Loaded a }
```


<!-- -------------------------------------------------------------------------
    ★ Key point notes

    ⤷ `rich html`
-------------------------------------------------------------------------- -->
> **`Maybe Feed` doesn't describe our situation well!** With `Status a` we can tell
> that (a) it's an API, and (b) has it been loaded yet?

It's better to use the `Maybe` type for _optional_ record values (e.g: we've got a
missing `photo.url`). Remember to never use a `Loaded (Maybe List Photo)` structure as
`[]` can be used instead of `Nothing`.

The `Maybe.map` function is very handy when it's needed.


<!-- -------------------------------------------------------------------------
    ✎ Other notes

    ⤷ `rich html`
-------------------------------------------------------------------------- -->
`statusLift : Status a -> a` (a lifting function) won't work here, because we
need to return the same type for each branch (we can't return `a` for the
`Loading` branch!). A `Result Error a` could potentially work in that scenario.

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
