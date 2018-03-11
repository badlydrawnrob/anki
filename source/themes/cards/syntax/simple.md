# Simple card demo


## ★ Title
What will this print out?


## ☆ Syntax
Anonymous functions


## ☆ Syntax (inline code)
`filter(<b>lambda</b>...)``


## ☆ Sample (code block or image)
```python
my_list = range(16)
print(filter(lambda x: x % 3 == 0, my_list))
```


## ★ Key point (code block or image)
```text
[0, 3, 6, 9, 12, 15]
```


## ★ Key point notes
- **Lambda** is an **anonymous function**.
    - It's **comparable to a regular `def` function**.  
- As a single function, `x` would be passed an `int` and return `True` if divisible by 3.
- `filter(function, iterable)` accepts a function as an argument, and something like `my_list` to iterate over.
- Using `filter(lambda x: x % 3 == 0, my_list)` is the [same as using **list comprehension**](https://stackoverflow.com/questions/3013449/list-filtering-list-comprehension-vs-lambda-filter#3013686)  

```python
lambda x: x % 3 == 0

# is the same as ...
def by_three(x):
    return x % 3 == 0
```


## ---✄-- Hide on front: Syntax (inline code)"
false


## »»♻«« Show as reference: Syntax (inline code)
false


## ----✄-- Hide on front: Sample (code block or image)"
false


## »»♻«« Show as reference: Sample (code block or image)"
false


## ✎ Other notes
This is an example of **functional programming**. You're passing the anonymous `lambda` function to the `filter()` function. However, Python was [never intended as a functional language](http://bit.ly/2FEwUTy), and is said by some to [not be very good at it](http://bit.ly/2p2dA8I).


## ✎ Markdown
false
