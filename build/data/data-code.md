``` sourceCode
-- Imagine our `pad` function is built already
padRight : Int -> Char -> String -> String
padRight = pad True

padFive : Char -> String -> String
padFive = padRight 5

padC : String -> String
padC = padFive "c"

padX : String -> String
padX = padFive "x"
```

``` terminal
> padC "hart"
"ccccchart" : String
```
