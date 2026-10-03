<!-- Simple! Missing! Draw! cards ==============================================

   💡 See "A workout for the brain" for study ideas.

    @ https://github.com/badlydrawnrob/anki/README.md#a-workout-for-the-brain
    @ https://github.com/badlydrawnrob/anki/README.md#cards
    @ https://github.com/badlydrawnrob/anki/source/docs/styleguide/index.md

    What are the cards for?

        - Simple! .... `Question » Answer` with a `code block` for each.
        - Missing! ... `Question` with a `{{c1::missing}}` word to guess.
        - Draw! ...... `Question » Answer` with snapshot image of program/problem

    Fields:

        ✍️ All cards share most fields and special fields are `▶ marked`.

    Special fields:

        ▶ = `★ Code Question` and `☆ Code Answer` (see styleguide link)

    Key:

        ★ = required field
        ☆ = optional field
        ⤷ = strict markdown

    Notes:

        🗑️ = remove `<tags>` from HTML output (automatically wrapped)

        ```
        <h1><code>codeIsOk()</code> but the h1 tags aren't</h1>
        xxxx----------------------------------------------xxxxx
        ```

        Html compiled data is for viewing in your editor to speed up the card
        creation process. It's not meant to be viewed in the browser.

========================================================================== -->

<!-- -------------------------------------------------------------------------
    ★ Question

    > ⤷ `plain string` (ABC123, `inlineCode()`, basic punctuation)

    The main question, statement, idea, or fact; a key learning outcome.

    ```
    ⓘ 🗑️ remove the `<h1>` tags (automatically wrapped)
    ```
-------------------------------------------------------------------------- -->

# Here's a more complicated `Maybe.map` setup. What's the result?

<!-- -------------------------------------------------------------------------
    ☆ Question Hint

    > ⤷ `plain string` (ABC, basic punctuation)

    - Helpful for when the header question grows too long ...
    - Or the `code block` requires some context or a hint
    - Alternative to using code comments!
-------------------------------------------------------------------------- -->

Uses a folding function which is a little advanced (you'll get there!)

<!-- -------------------------------------------------------------------------
    ☆ Subtitle

    > ⤷ `plain string` (ABC, no punctuation)

    - A short helpful tip or guide
    - Naming a group of related cards
    - The type of syntax we're learning

    ```
    ⓘ 🗑️ remove the `<h2>` tags (automatically wrapped)
    ```
-------------------------------------------------------------------------- -->

## Maybe types

<!-- -------------------------------------------------------------------------
    ☆ Code Inline

    > ⤷ `code string` (any inline code character, but no `backticks or `/n`ewlines)

    - A short line of code (not a `code block`)
    - The actual function or symbol, i.e. `len()`

    ```
    ⓘ 🗑️ remove the `<p><code>` tags (automatically wrapped)
    ```
-------------------------------------------------------------------------- -->

`Maybe.map`

<!-- -------------------------------------------------------------------------
    ★ Code Question

    > ⚠️ Important
    >
    > Special field and depends on the card.
    >
    > Check your content is correct for the card type.


    ▶ Simple card ------------------------------------------------------------

        > ⤷ `code block` (up to 3 fenced code blocks, `32` chars wide)


        - A sample of the code we're learning (essential code only)
        - A code sample that fits our one learning outcome (essential code only)


    ▶ Draw card ---------------------------------------------------------------

        > ⤷ `image` (minify and roughly `600`—`~1170` pixels wide)

        Press the ‹› button to "Toggle HTML Editor (⌘⇧X)" for this card, to enable
        the "Rich text preview", then add an image using the 📎 paperclip button.

        - A sketch of a program or problem
        - A sample of the code we're learning
        - A working app or user-interface

        ```
        ⓘ Image size:
          @ https://community.adobe.com/questions-621/best-image-size-for-mobile-devices-643936
        ```

    ▶ Missing card ------------------------------------------------------------

        > ⤷ `code block` (requires a cloze: `{{c1::missing word::with optional hint}}`)

        Press the ‹› button to "Toggle HTML Editor (⌘⇧X)" for this card, to enable
        the "Rich text preview", then add a cloze deletion tag using the `[...]` button.

        - A missing word or phrase you've got to remember
        - A code sample that fits our one learning outcome (essential code only)

        ```
        ⓘ Bug:
          @ https://github.com/badlydrawnrob/anki/issues/132 (may break `code block`)
        ```
-------------------------------------------------------------------------- -->

```Elm
list = [Just 100, Just 200, Just 100]

List.foldl
  (Maybe.map2 (+)) -- step
  (Just 0)         -- state
  list
```

```text
Just 400 : Maybe number
```

<!-- -------------------------------------------------------------------------
    ☆ Code Answer

    > ⚠️ IMPORTANT
    >
    > Special field and depends on the card.
    >
    > Check your content is correct for the card type.


    ▶ Simple card ------------------------------------------------------------

        > ⤷ `code block` (up to 3 fenced code blocks, `32` chars wide)

        - The answer or key learning point
        - The essential code that fits the question
        - The lesson you've learned

    ▶ Draw card ---------------------------------------------------------------

        ⤷ `code block | image` (minify and roughly `600`—`~1170` pixels wide)

        Press the ‹› button to "Toggle HTML Editor (⌘⇧X)" for this card, to enable the "Rich text preview", then add an image using the 📎 paperclip button.

        - The answer or key learning point
        - The essential code that fits the question
        - The sketch of the solution or answer

        ```
        ⓘ Image size:
          @ https://community.adobe.com/questions-621/best-image-size-for-mobile-devices-643936
        ```

    ▶ Missing card (not used) -------------------------------------------------

        ⚠️ Field is not used for this card type — only the `Code Question` field!

-------------------------------------------------------------------------- -->

Nothing

<!-- -------------------------------------------------------------------------
    ★ Answer

    > ⚠️ NOTE
    >
    > @ https://github.com/badlydrawnrob/anki/source/docs/styleguide/index.md
    >
    > See "Quick Markdown Lesson" link above to write Strict Rich Markdown.
    >
    > ⤷ `strict rich markdown`

    - A short explanation of what we're trying to learn
    - A stepper to walk through the code block (or a useful list)
    - A table of contents (not part of CommonMark)

    ```
    ⓘ Blockquote:
      If there's only a single paragraph in `★ Answer`, no need for a blockquote.

    ⓘ Tables and lists:
      Only one table OR a list (not both), and `codeVerbs()` always go first!
    ```
-------------------------------------------------------------------------- -->

> **Folding can be read as `foldl step state [...]`** and accumulates the value.

- `step` is the function to be applied to `values`
- `state` is piped as the second argument to `step`
- `state` is accumulated for each new step!

A function that uses `case` instead of `List.foldl` may be easier to read (especially for beginners).

<!-- -------------------------------------------------------------------------
    ☆ Answer Notes

    > ⤷ `strict markdown` (bold, italic, links)

    - Links to documentation (no more than 3)
    - Supplementary notes (or similar functions)
    - A common link or story between cards
-------------------------------------------------------------------------- -->

To accumulate a list you would use `(::)` as step and `[]` as state. See also [transducers](https://hackage.haskell.org/package/foldl-transduce-0.6.0.1/docs/Control-Foldl-Transduce.html) (more complicated to understand).

<!-- -------------------------------------------------------------------------
    ✎ ⚠️ Markdown (REMOVED)

    Field no longer required: `npm run data-code-reverse` if needed.

    ```
    ⓘ New app flashcards will edit with raw Markdown and cache HTML where required.
    ```
-------------------------------------------------------------------------- -->

Deprecated
