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
# What's an alternative way to solve this problem?


<!-- -------------------------------------------------------------------------
    ☆ Subtitle

    ⤷ `string` (auto wrapped with a `H2` tag)
-------------------------------------------------------------------------- -->
## ...


<!-- -------------------------------------------------------------------------
    ☆ Syntax (inline code)

    ⤷ `code string` (auto wrapped with `<p><code>` tag)

    This is NOT a `code block` field! It's for short lines of code only.
-------------------------------------------------------------------------- -->
`...`


<!-- -------------------------------------------------------------------------
    ★ Sample (code block)

    ⤷ `pre block`

      | Requires `markdown` fenced code block;

      A markdown fenced code block that will compile to our highlighted
      code with Pandoc. What does this code do?
-------------------------------------------------------------------------- -->
```elm
gotInts : String -> List (Maybe Int)
gotInts =
  String.split ":"
    >> List.map String.toInt

toTuple : List (Maybe Int) -> Maybe (Int, Int)
toTuple l =
  case l of
    [Just a, Just b] ->
      Just (a, b)

    _ ->
      Nothing
```


<!-- -------------------------------------------------------------------------
    ☆ Sample (caption or hint)

    ⤷ `string` (auto wrapped with a `<figcaption>` tag — doesn't need `<p>` tag)

    Helpful for when the header question grows too long, or the Sample
    requires some context or a hint. Alternative to code comments.
-------------------------------------------------------------------------- -->
Try using a filter type function for list with "wishful thinking"!




<!-- Back of card ======================================================== -->


<!-- -------------------------------------------------------------------------
    ★ Key point (code block)

    ⤷ `pre block`

      | Requires `markdown` fenced code block;

      A markdown fenced code block that will compile to our highlighted
      code with Pandoc. The output or answer to the above question.
-------------------------------------------------------------------------- -->
```elm
simpleGotInts : String -> List Int
simpleGotInts =
  String.split ":"
    >> List.filterMap String.toInt

toTuple : List Int -> Maybe (Int,Int)
toTuple l =
  case l of
    [a,b] ->
      Just (a,b)

    _ ->
      Nothing
```
```text
>> toTuple (simpleGotInts "2:00")
Just (2,0) : Just ( Int,Int )
>> toTuple (simpleGotInts "200")
Nothing
```


<!-- -------------------------------------------------------------------------
    ★ Key point notes

    ⤷ `rich html`
-------------------------------------------------------------------------- -->
> **`List.filterMap` allows us to simplify our types with fewer maybes!**

- `String.toInt` only returns if `Just Int`
- `List.filterMap` avoids dealing with `Maybe`
- `toTuple` only returns `Just` if a 2-list

Unit testing would be advised here, but user input `"200"`, `"2,00"`,
`"2:00:00"`, `"two"` is handled.

<!-- -------------------------------------------------------------------------
    ✎ Other notes

    ⤷ `rich html`
-------------------------------------------------------------------------- -->
A trick I learned from the `"2:00"` problem was simplify your types as much as possible first! Treat type signatures as interfaces with "wishful thinking" and find the nicest types for this problem.


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
