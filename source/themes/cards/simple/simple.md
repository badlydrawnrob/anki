# Simple card demo


## ★ Title
What will this print out?


## ☆ Subtitle
Anonymous functions


## ☆ Syntax (inline code)
`filter(<b>lambda</b>...)`


## ★ Sample (code block or image)
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
    - Similar to a **regular `def` function**.  
- `x` receives an `int` and returns `True` if divisible by 3.
- `filter(function, iterable)`
- See also: [Filter _-vs-_ list comprehension](https://stackoverflow.com/a/3013686)

```python
lambda x: x % 3 == 0

# similar to ...
def by_three(x):
    return x % 3 == 0

# and ...
[x for x in range(16) if x % 3 == 0]
```



## ✎ Other notes
Example of **functional programming**. Python was [never intended as a functional language](http://bit.ly/2FEwUTy), and some say it's [not very good at it](http://bit.ly/2p2dA8I).


## ✎ Markdown
false
