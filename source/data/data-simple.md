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
# Does `update` always need to know about server state?


<!-- -------------------------------------------------------------------------
    ☆ Subtitle

    ⤷ `string` (auto wrapped with a `H2` tag)
-------------------------------------------------------------------------- -->
## Set


<!-- -------------------------------------------------------------------------
    ☆ Syntax (inline code)

    ⤷ `code string` (auto wrapped with `<p><code>` tag)

    This is NOT a `code block` field! It's for short lines of code only.
-------------------------------------------------------------------------- -->
`Status a`


<!-- -------------------------------------------------------------------------
    ★ Sample (code block)

    ⤷ `pre block`

      | Requires `markdown` fenced code block;

      A markdown fenced code block that will compile to our highlighted
      code with Pandoc. What does this code do?
-------------------------------------------------------------------------- -->
```elm
...
```


<!-- -------------------------------------------------------------------------
    ☆ Sample (caption or hint)

    ⤷ `string` (auto wrapped with a `<figcaption>` tag — doesn't need `<p>` tag)

    Helpful for when the header question grows too long, or the Sample
    requires some context or a hint. Alternative to code comments.
-------------------------------------------------------------------------- -->
This is a big question which will depend on your circumstances




<!-- Back of card ======================================================== -->


<!-- -------------------------------------------------------------------------
    ★ Key point (code block)

    ⤷ `pre block`

      | Requires `markdown` fenced code block;

      A markdown fenced code block that will compile to our highlighted
      code with Pandoc. The output or answer to the above question.
-------------------------------------------------------------------------- -->
```elm
-- Aware of server state
type alias Model
  { comments : Status (List String) }

-- Unaware of server state
type alias Model
  { fruits : Status (List String)
  , selected : Set String -- or Id
  }
```


<!-- -------------------------------------------------------------------------
    ★ Key point notes

    ⤷ `rich html`
-------------------------------------------------------------------------- -->
> **It depends on your architecture and UI design!** amongst other things.

- Does server data need updating? (Comments)
- Does server data not hold state? (Fruits)

Either way, you should rarely hold duplicate data in `Model`! To guarantee impossible states on the server, `Status a` and `Status.map` might be unavoidable, but always design your API to explore which data _must_ sync with the server, and which doesn't. You may even need _more_ than one `Status a` (e.g: article and comments endpoints).


<!-- -------------------------------------------------------------------------
    ✎ Other notes

    ⤷ `rich html`
-------------------------------------------------------------------------- -->
Sometimes (as @lydell says) worrying about impossible states in update (we already know about in view), leads to complex code. The inverse is impossible states do sometimes happen in a state we didn't think about; a message triggers breaking our server code.


<!-- -------------------------------------------------------------------------
    ✎ Markdown (DEPRECATED)

    ⤷ `raw text`

      Do not add the compiled HTML to your card, rather, use the raw text
      Markdown fenced code block. This makes for easier editing of a card
      later on.

      Warning: may increase card file size
        @ https://github.com/badlydrawnrob/anki/issues/116
-------------------------------------------------------------------------- -->
false
