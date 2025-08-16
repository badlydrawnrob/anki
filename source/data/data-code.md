<!-- Simple code compiler ====================================================

     Useful for converting `code blocks` or other field data:

     1. Enter a Markdown fenced code block (for example)
     2. `npm run data-code`
     3. View the file in `/build/data/data-code.html`

========================================================================== -->

```terminal
>>> .size1.get("size")
10
>>> .size2.get("size")
# Returns `None`
>>> .size2.get("size", "Does not exist")
'Does not exist'
```
