<!-- Simple code compiler ====================================================

     Useful for converting `code blocks` or other field data:

     1. Enter a Markdown fenced code block (for example)
     2. `npm run pandoc`
     3. View the file in `/build/data/code.html`

========================================================================== -->

```elm
String.split " " tagList
  |> List.filter notEmpty

notEmpty : Bool
notEmpty =
  (\str -> str /= "")
```
