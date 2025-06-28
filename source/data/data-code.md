<!-- Simple code compiler ====================================================

     Useful for converting `code blocks` or other field data:

     1. Enter a Markdown fenced code block (for example)
     2. `npm run data-code`
     3. View the file in `/build/data/data-code.html`

========================================================================== -->

```elm
padRight : Int -> Char -> String -> String
padRight = pad True

padFive : Char -> String -> String
padFive = padRight 5

padH : String -> String
padH = padFive "h"

padI : String -> String
padI = padFive "i"
```

```terminal
> padH "hi"
"hhhhhhi" : String
```
