<!-- Front of card ===========================================================

    Draw! Card Data

    - Type:
        What's the answer?
        What does this image describe?

        Many potential use-cases for the Draw! card. See issue #165
        for ideas. At it's most basic we're asking "what does this code do?",
        or "what does this picture represent?", or "what routes could we use
        to fix this problem?", or "how do we solve this?".

        - An animated gif or photograph
        - A sketch or iPad drawing
        - A question that you must sketch out
        - Perhaps even a video!

    - Docs:
        @ https://tinyurl.com/anki-draw-card

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
# How can we replicate this with curried style in Elm Lang?


<!-- -------------------------------------------------------------------------
    ☆ Subtitle

    ⤷ `string` (auto wrapped with a `H2` tag)
-------------------------------------------------------------------------- -->
## The padding function


<!-- -------------------------------------------------------------------------
    ☆ Syntax (inline code)

    ⤷ `code string` (auto wrapped with `<p><code>` tag)

    This is NOT a `code block` field! It's for short lines of code only.
-------------------------------------------------------------------------- -->
`pad`


<!-- -------------------------------------------------------------------------
    ☆ Sample (caption or hint)

    ⤷ `string` (auto wrapped with a `<figcaption>` tag — doesn't need `<p>` tag)

    Helpful for when the header question grows too long, or the Sample
    requires some context or a hint. Alternative to code comments.
-------------------------------------------------------------------------- -->
false


<!-- -------------------------------------------------------------------------
    ★ Sample (image)

    ⤷ `image`

      | Technically you can put a `code block` here: I'd advise against it,
      | or at least use in this way sparingly! There's no guarantee for
      | long-term support for `code block`s here (consider using the `Key Point`
      | field instead).

      An image that asks the question _"what does this code do?"_, or _"what
      does this picture represent?"_, or _"what routes could we use to fix
      this problem?"_, or _"how do we solve this?"_.

      Use the 📎 paperclip button to add an image to Anki, or store it in the
      cloud and use the `<img ...>` tag.
-------------------------------------------------------------------------- -->
![The image will need to be added to Anki first](../../source/media/pad-function.png)

```racket
; #f pads left, #t pads right
(define (pad bool length c str)
  (cond
    [(and (false? bool) (> length 0))
     (string-append c
      (pad bool (- length 1) c str))]
    [(and (not (false? bool)) (> length 0))
     (string-append
      (pad bool (- length 1) c str) c)]
    [else str]))
```


<!-- Back of card ======================================================== -->


<!-- -------------------------------------------------------------------------
    ★ Key point (image | code block)

    ⤷ `image | code block`

      | You can store either an image or `markdown->html` code block.

      An image that shows the answer to _"what does this code do?"_, or _"what
      does this picture represent?"_, or _"what routes could we use to fix
      this problem?"_, or _"how do we solve this?"_.

      The image will need to be added to Anki first, or you can store it
      in the cloud somewhere, and link to it like this.
-------------------------------------------------------------------------- -->
```elm
-- Imagine our `pad` function is built already
padRight : Int -> Char -> String -> String
padRight = pad True

padFive : Char -> String -> String
padFive = padRight 5

padC : String -> String
padC = padFive "c"

padX : String -> String
padX = padFive "x"
```
```terminal
> padC "hart"
"ccccchart" : String
```


<!-- -------------------------------------------------------------------------
    ★ Key point notes

    ⤷ `rich html`
-------------------------------------------------------------------------- -->
In Elm, we can _curry_ a function: reusing a bigger function, using helper functions. This allows us to create multiple character padders with ease! Many languages don't have this capability (like our example, Racket) and require more work to achieve the same thing. Take that [javascript](https://en.wikipedia.org/wiki/Npm_left-pad_incident)!


<!-- -------------------------------------------------------------------------
    ✎ Other notes

    ⤷ `rich html`
-------------------------------------------------------------------------- -->
Remember you _could_ write a curried function using anonymous functions. It's sometimes helpful to think of curried functions in this way: you stack up arguments with `\_` [lambda style](https://elm-lang.org/docs/syntax#functions) and they combine to create a regular function with a few arguments. Arguments that'll change the least should always come first!

```elm
add1 = \x -> x + 1
adder = \x -> \y -> x + y
```


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
