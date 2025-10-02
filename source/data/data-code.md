<!-- Simple code compiler ====================================================

     Useful for converting `code blocks` or other field data:

     1. Enter a Markdown fenced code block (for example)
     2. `npm run data-code`
     3. View the file in `/build/data/data-code.html`

========================================================================== -->

```elm
type Status a
  = Loading
  | Loaded a

lift : Status a -> a
lift status =
  case status of
    Loaded a ->
      a

    Loaded ->
      Loaded
```
