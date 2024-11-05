<!-- Simple code compiler ====================================================

     Useful for converting `code blocks` or other field data:

     1. Enter a Markdown fenced code block (for example)
     2. `npm run pandoc`
     3. View the file in `/build/data/code.html`

========================================================================== -->

```elm
deconstruct { title, age } = title ++ ": " ++ String.fromInt age
```
```terminal
> deconstruct Dog "Buster" 8
"Buster: 8" : String
```
