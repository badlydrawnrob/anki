<!-- Simple code compiler ====================================================

     Useful for converting `code blocks` or other field data:

     1. Enter a Markdown fenced code block (for example)
     2. `npm run data-code`
     3. View the file in `/build/data/data-code.html`

========================================================================== -->

```elm
type Dressing
  = Caesar
  | OliveOil

type Msg
  = UpdateDressing Dressing

type alias Model =
  { user : User
  , dressing : Dressing
  , other : Other
  }

-- An extensible record --------

type alias Dressing r
  = { r | dressing : Dressing }

dressing : Dressing r -> Dressing
dressing record =
  record.dressing

-- Extract w/ type signature ---

dressing :
  { r | dressing : Dressing }
  -> Dressing
dressing =
  .dressing
```

