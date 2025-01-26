<!-- Front of card ===========================================================

    Missing! Card Data

    - Type:
        A question with a [missing] word;

        - A missing function or expression you have to guess,
        - A missing input or output to remember.

    - Docs:
        http://tinyurl.com/anki-missing-card

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

            <h1>We’ve changed from <code>Browser.sandbox</code> to <code>Browser.element</code>. What’s changed?</h1>
                ------------------------------------------------------------------------------------------------
            xxxx                                                                                                xxxxx

        Compiled data is simple meant to speed up the card creation process —
        it's not meant to be viewed in the browser. Best viewed in a text editor (such as Visual Studio Code) to copy/paste your Anki field data.

========================================================================== -->


<!-- -------------------------------------------------------------------------
    ★ Title

    ⤷ `string` (auto wrapped with a `H1` tag)
-------------------------------------------------------------------------- -->
# What's wrong with our current data flow?


<!-- -------------------------------------------------------------------------
    ☆ Subtitle

    ⤷ `string` (auto wrapped with a `H2` tag)
-------------------------------------------------------------------------- -->
## Update


<!-- -------------------------------------------------------------------------
    ☆ Syntax (inline code)

    ⤷ `code string` (auto wrapped with `<p><code>` tag)
-------------------------------------------------------------------------- -->
`Maybe String`


<!-- -------------------------------------------------------------------------
    ★ Key point (code block)

    ⤷ `pre block`

      | Requires `markdown` fenced code block;
      | Requires `{{c1::cloze}}` tag(s))

      A markdown fenced code block that will compile to our highlighted
      code with Pandoc. Make sure to add at least one cloze deletion:

        `{{c1::the answer::HINT TEXT}}`

      Here's an example cloze card:

        @ https://codepen.io/testuser-247585903/pen/BabRjvb

      You can add cloze deletion tags to the fenced code block and
      they should work fine in Anki. You can also:

      1. `Toggle HTML Editor ⌘⇧X` (`‹›`) to enable rich text preview
      2. Highlight the text that you'd like to convert to a cloze.
      3. Press the `[...]` or `[...]+` button to add the cloze deletion

      !# Warning: These buttons may break your code:
        @ https://github.com/badlydrawnrob/anki/issues/132
-------------------------------------------------------------------------- -->
```elm
type alias Model
    = { base64 : Maybe String }

viewImage : Model -> Html Msg
viewImage model =
    case model.base64 of
        Nothing ->
            button [ onClick ImageRequested ]
                   [ text "Upload an image" ]

        Just url ->
            -- button [ onClick SendToServer ]
            button [ onClick (SendToServer url) ]
                   [ text "Send to the server" ]

{- Currently we "lift" the `Maybe String`-}
update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        ImageRequested ->
            ...

        ImageSelected ->
            ...

        ImageLoaded base64 ->
            ( { model | base64 = Just base64 }
            , Cmd.none
            )

        -- SendToServer ->
        --     ( model
        --     , postImage
        --         "" ""
        --         (lift model.image)
        --     )

        SendToServer base64 ->
            ( model
            , postImage
                "" "" base64
            )
```


<!-- -------------------------------------------------------------------------
    ★ Key point notes

    ⤷ `rich html`
-------------------------------------------------------------------------- -->
Instead of unpacking the `Maybe String` _yet again_, we can unpack it once in the `Just url` branch of `viewImage` and pass it along to our `SendToServer String`
message. This way we lift it once, and once only!


<!-- -------------------------------------------------------------------------
    ✎ Other notes

    ⤷ `rich html`
-------------------------------------------------------------------------- -->
It's always a good idea to sketch out the user flow, and your data structures, to figure out the best way to organise your `update` and `view` logic. We could improve this code further by _[narrowing the types](https://discourse.elm-lang.org/t/domain-driven-type-narrowing/7753/8)_ in `viewImage` (accept a `Maybe String` instead of a full `Model`).


<!-- -------------------------------------------------------------------------
    ✎ Markdown

    ⤷ `raw text`

      Do not add the compiled HTML to your card, rather, use the raw text
      Markdown fenced code block. This makes for easier editing of a card
      later on.

      Please be careful:

        Warning: remove all `{{c1:cloze}}` cloze deletion tags!

      If you save your card with cloze deletion tags in the `★ Markdown`
      field, Anki will throw an error, and you might not be able to save
      your card.
-------------------------------------------------------------------------- -->
false
