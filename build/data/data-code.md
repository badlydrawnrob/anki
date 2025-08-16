``` terminal
>>> .size1.get("size")
10
>>> .size2.get("size") # Returns `None`
>>> .size2.get("size", "Does not exist")
'Does not exist'
```
