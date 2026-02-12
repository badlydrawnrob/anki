``` elm
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
dressing record =
  record.dressing

-- Extract with selector -------

dressing : Model -> Dressing
dressing =
  .dressing -- helper function
```
