<!-- Front of card ===========================================================

    Missing! Card Data

    - Type:
        A question with a [missing] word;

        - A missing function or expression you have to guess,
        - A missing input or output to remember

    - Docs:
        @ http://tinyurl.com/anki-missing-card

    - Key:
        ★ Required
        ☆ Optional (recommended)
        ✎ Optional (notes, markdown)
        ⤷ Field Type

    - Notes:
        Where fields are auto-wrapped with an HTML tag, copy/paste the compiled
        data _within_ those tags for your Anki fields, otherwise you'll have
        formatting issues. For example:

            `★ Title` field:

            <h1><code>Browser.sandbox</code> must change to ...?</h1>
            xxxx------------------------------------------------xxxxx

        Compiled data is simply meant to speed up the card creation process —
        it's not meant to be viewed in the browser. Best viewed in a text editor
        (such as Visual Studio Code) to copy/paste your Anki card fields.

========================================================================== -->


<!-- -------------------------------------------------------------------------
    ★ Title

    ⤷ `string` (auto wrapped with a `H1` tag)
-------------------------------------------------------------------------- -->
# What function do we need to add here? What will it compute?


<!-- -------------------------------------------------------------------------
    ☆ Subtitle

    ⤷ `string` (auto wrapped with a `H2` tag)
-------------------------------------------------------------------------- -->
## Anonymous function


<!-- -------------------------------------------------------------------------
    ☆ Syntax (inline code)

    ⤷ `code string` (auto wrapped with `<p><code>` tag)

    This is NOT a `code block` field! It's for short lines of code only.
-------------------------------------------------------------------------- -->
`...`


<!-- -------------------------------------------------------------------------
    ☆ Key point (caption or hint)

    ⤷ `string` (auto wrapped with a `<figcaption>` tag — doesn't need `<p>` tag)

    Helpful for when the header question grows too long, or the Sample
    requires some context or a hint. Alternative to code comments.
-------------------------------------------------------------------------- -->
false


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
      2. Highlight the text that you'd like to convert to a cloze
      3. Press the `[...]` or `[...]+` button to add the cloze deletion

      !# Warning: These buttons may break your code:
        @ https://github.com/badlydrawnrob/anki/issues/132
-------------------------------------------------------------------------- -->
```elm
type Song =
  Song String (Int, Int)

title = (Ok "Afraid")
minutes = (Ok 3)
seconds = (Err "Out of bounds")

validate =
  Result.map3
    (\t m s -> Song t (m,s))
      title
      minutes
      seconds
```
```terminal
>> validate
Err ("Out of bounds") : Result String Song
```


<!-- -------------------------------------------------------------------------
    ★ Key point notes

    ⤷ `rich html`
-------------------------------------------------------------------------- -->
> We use `Result.map`, which can have up to 5 arguments (`.map5`). We create an anonymous function that takes in our three parameters and spits out a `Song`!


<!-- -------------------------------------------------------------------------
    ✎ Other notes

    ⤷ `rich html`
-------------------------------------------------------------------------- -->
If you have more than 5 arguments **this [running out of maps](https://thoughtbot.com/blog/running-out-of-maps) article** is a good read.


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
