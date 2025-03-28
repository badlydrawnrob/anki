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
# Which function allows us to calculate this sum?


<!-- -------------------------------------------------------------------------
    ☆ Subtitle

    ⤷ `string` (auto wrapped with a `H2` tag)
-------------------------------------------------------------------------- -->
## Maybe


<!-- -------------------------------------------------------------------------
    ☆ Syntax (inline code)

    ⤷ `code string` (auto wrapped with `<p><code>` tag)
-------------------------------------------------------------------------- -->
`Just 100 : Maybe number`


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
num1 = Just 100
num2 = Just 50
empty = Nothing
```
```terminal
> Maybe.map2 (/) num1 num2
Just 2
> Maybe.map2 (/) num1 empty
Nothing
```


<!-- -------------------------------------------------------------------------
    ★ Key point notes

    ⤷ `rich html`
-------------------------------------------------------------------------- -->
`Maybe.map` "lifts" the value from it's `Maybe` type, and `.map2` takes a
function for two values.


<!-- -------------------------------------------------------------------------
    ✎ Other notes

    ⤷ `rich html`
-------------------------------------------------------------------------- -->
This function is very useful when we need a calculation, but don't want to _unwrap_ our `Maybe` types first. Remember, reaching for `Maybe.withDefault` should be the _last_ thing you do. Here's a more complex example:

```elm
values = [Just 100, Just 200, Just 100 ]

List.foldl
  (Maybe.map2 (+))
  (Just 0)
  values
```


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
