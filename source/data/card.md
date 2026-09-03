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

        ✍️ All cards share most fields.
        ⚠️ Check `ⓘ` for Draw! ("Code Question" field)
        ⚠️ Check `ⓘ` for Missing! ("Code Question" field)

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

    The main question, statement, or fact.

    ```
    ⓘ 🗑️ remove the `<h1>` tags (automatically wrapped)
    ```
-------------------------------------------------------------------------- -->

# Here's a more complicated `Maybe.map` setup. What's the result?

<!-- -------------------------------------------------------------------------
    ☆ Question Hint

    > ⤷ `plain string` (ABC123, basic punctuation)

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

    > ⤷ `code string` (inline code grammar, any `Char` except `backticks or `/n`ewlines)

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
    > ⤷ `code block` (up to 3 fenced code blocks, `32` chars wide)
    >
    > See Draw! and Missing! for special fields.

    - Essential code for key learning point (fits the question)
    - See notes below for Draw! and Missing! cards

    ```
    ⓘ ⚠️ Draw! card requires an image:
      (toggle HTML » press 📎 paperclip button)

    ⓘ ⚠️ Missing! card requires a cloze field:
      `{{c1::missing word::optional hint}}` (toggle HTML » press `[...]`)

    It's best to press the `‹›` button to "Toggle HTML Editor (⌘⇧X)" for these cards.
    Rich text preview is enabled, where you add content by using buttons in top-right.
    Add correct content for each card type! (📎 image, `[...]` cloze, `[...]+` cloze).

    Cloze:
    @ https://docs.ankiweb.net/editing.html#cloze-deletion

    Images:
    @ https://community.adobe.com/questions-621/best-image-size-for-mobile-devices-643936

    Bugs:
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

    > ⤷ `code block` (up to 3 fenced code blocks, `32` chars wide)

    - Essential code for key learning point (describes the answer)

    ```
    ⓘ Missing! card does not have this field.
    ```
-------------------------------------------------------------------------- -->

Nothing

<!-- -------------------------------------------------------------------------
    ★ Answer

    > ⤷ `strict rich markdown` (blockquote, paragraph, lists, table, `code block`)

    - A short explanation of what we're trying to learn
    - A stepper to walk through the `code block` (code `verbs()` go first)
    - A table of contents (keep lines short, not part of CommonMark)

    ```
    ⓘ Preferred styleguide below
    ⓘ List OR table (not both in one card)

    > **Key answer learning point in bold** with some extra
    > essential detail (it's nice to bold a few key answer words).

    - `function()` optional stepper (1)
    - `variable` with next step (2)
    - `finally` the last step (3)

    | What it is | What it does |
    |------------|--------------|
    | Optional   | Table        |

    Paragraph or two that supplements the key learning point.
    ```
-------------------------------------------------------------------------- -->

> Folding can be read as `foldl step state [...]` and accumulates the value.

- `step` is the function to be applied to `values`
- `state` is piped as the second argument to `step`
- `state` is accumulated for each new step!

A function that uses `case` instead of `List.foldl` may be easier to read (especially for beginners).

<!-- -------------------------------------------------------------------------
    ☆ Answer Notes

    > ⤷ `strict markdown` (bold, italic, links)

    - Links to documentation
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
