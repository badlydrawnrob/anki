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
# Here is a simple Python function. Compared to Elm, point out 3 problems with this code!


<!-- -------------------------------------------------------------------------
    ☆ Subtitle

    ⤷ `string` (auto wrapped with a `H2` tag)
-------------------------------------------------------------------------- -->
## Python


<!-- -------------------------------------------------------------------------
    ☆ Syntax (inline code)

    ⤷ `code string` (auto wrapped with `<p><code>` tag)
-------------------------------------------------------------------------- -->
``


<!-- -------------------------------------------------------------------------
    ★ Sample (code block)

    ⤷ `pre block`

      | Requires `markdown` fenced code block;

      A markdown fenced code block that will compile to our highlighted
      code with Pandoc. What does this code do?
-------------------------------------------------------------------------- -->
```python
todo_list =
    [{"id": 1}, {"id": 2}]

def does_id_exist(todo_list, id):
  for todo in todo_list:
    if todo.id == id:
      return True
    else:
      return "False"
```



<!-- Back of card ======================================================== -->


<!-- -------------------------------------------------------------------------
    ★ Key point (code block)

    ⤷ `pre block`

      | Requires `markdown` fenced code block;

      A markdown fenced code block that will compile to our highlighted
      code with Pandoc. The output or answer to the above question.
-------------------------------------------------------------------------- -->
```terminal
# Wrong types
>>> todo_exists([{"id": 1}], "1")
False
>>> todo_exists([{"id": "1"}], 1)
False
>>> todo_exists([1, 2, 3], 1)
TypeError: 'int' object is not subscriptable

# Empty lists (returns `None`)
>>> todo_exists([], 1)

# Wrong (or missing) key names
>>> todo_exists([{"ids": 1}], 1)
KeyError: 'id'
```


<!-- -------------------------------------------------------------------------
    ★ Key point notes

    ⤷ `rich html`
-------------------------------------------------------------------------- -->
1. Wrong types are not caught (generally),
2. Errors don't give me enough information to fix them?
3. Returning different values is allowed,
4. Duplicate variable name (even if it's scoped),
5. `None` especially seems like a potential headache!


<!-- -------------------------------------------------------------------------
    ✎ Other notes

    ⤷ `rich html`
-------------------------------------------------------------------------- -->
 Elm gives us plenty of guarantees, with less testing. Although it might be harder to read for beginners (there's easier ways I'm sure) all of these problems go away when you're using Elm — even without type annotations, e.g:

```elm
-- Must be a `List { b | id : a }`
-- Must be a `number`
does_id_exist lst id =
  case lst of
    [] -> False -- Return a value for empty list
    first::rest -> first.id == id |> (||) -- OR
            (does_id_exist rest id) -- Recursion
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
