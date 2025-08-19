<!-- Simple code compiler ====================================================

     Useful for converting `code blocks` or other field data:

     1. Enter a Markdown fenced code block (for example)
     2. `npm run data-code`
     3. View the file in `/build/data/data-code.html`

========================================================================== -->

```elm
-- [] : List a
List.map []

-- [] : List Int
List.map (\n -> n * 2) [1,2,3]
List.filter (\n -> n \= 2) [1,2,3]

-- [] : List Int

```
```terminal
>> List.map (\n -> n * 2) ["1", 2]
```

```text
-- TYPE MISMATCH ---------------------------------------------------------- REPL

The 2nd element of this list does not match all the previous elements:

3|   List.map (\n -> n * 2) ["1", 2]
                                  ^
The 2nd element is a number of type:

    number

But all the previous elements in the list are:

    String

Hint: Everything in a list must be the same type of value. This way, we never
run into unexpected values partway through a List.map, List.foldl, etc. Read
<https://elm-lang.org/0.19.1/custom-types> to learn how to “mix” types.

Hint: Try using String.fromInt to convert it to a string?
```
