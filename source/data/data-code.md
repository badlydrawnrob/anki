<!-- Simple code compiler ====================================================

     Useful for converting `code blocks` or other field data:

     1. Enter a Markdown fenced code block (for example)
     2. `npm run pandoc`
     3. View the file in `/build/data/code.html`

========================================================================== -->

```elm
import Username exposing (Username)

type Cred
  = Cred Username String

username : Cred -> Username
username (Cred user _) =
  user

grabUser record =
  let
    cred = record.cred
    -- Changes -------
    username =
      (username cred)
    ------------------
  in
    username
```
