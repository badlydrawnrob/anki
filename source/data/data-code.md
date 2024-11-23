<!-- Simple code compiler ====================================================

     Useful for converting `code blocks` or other field data:

     1. Enter a Markdown fenced code block (for example)
     2. `npm run pandoc`
     3. View the file in `/build/data/code.html`

========================================================================== -->

```elm
filterBy : (String -> Maybe Int) -> List Int
filterBy func =
     List.filterMap func ["this", "5.1", "that", "5"]
```
```terminal
> filterBy String.toInt
[5] : List Int
```
