# Puzzle card demo


## ★ Title
If **-14** is the argument passed, what will be returned?


## ☆ Syntax
Absolute value and type


## ☆ Syntax (inline code)
abs()


## ☆ Sample (code block or image)
```python
def distance_from_zero(args):
    if type(args) == int or type(args) == float:
        return abs(args)
    else:
        return "Nope"
```


## ★ Key point (code block or image)
```python
>>> absolute = abs(-14)
>>> print(absolute)
14
```


## ★ Key point notes
Returns absolute value of `number`, the (positive) distance between **x** and **zero**


## ♞ Puzzle
What are we using `type()` for?


## ---✄-- Hide on front: Syntax (inline code)
true


## »»♻«« Show as reference: Syntax (inline code)
false


## ----✄-- Hide on front: Sample (code block or image)
false


## »»♻«« Show as reference: Sample (code block or image)
false


## ♘ Puzzle (inline code)
false


## ♘ Puzzle (code block or image)
false


## ♘ Puzzle hint
false


## ♞ Puzzle answer (code block or image)
```python
>>> n = 7
>>> type(n)
<class 'int'>
```


## ♞ Puzzle answer notes
`type()` returns the _**type**_ of an _**object**:_ a `str`, `int` or `float`


## ✎ Other notes
The **`abs()`** argument may be a plain or long integer or a floating point number.


## ✎ Markdown
false
