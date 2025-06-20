``` sourceCode
# Build the object first,
# then create a `ToDo` ...
data = {
  "id": 1,
  "item": {
    "item": "Water the plants",
    "status": "Done"
  }
}

new_to_do = ToDo(**data)

# Build from `ToDo`
todo =
  ToDo(id=2, item=Item(item="An Order", status="not done"))
# Access an attribute
todo.id
```
