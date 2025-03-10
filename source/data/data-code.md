<!-- Simple code compiler ====================================================

     Useful for converting `code blocks` or other field data:

     1. Enter a Markdown fenced code block (for example)
     2. `npm run data-code`
     3. View the file in `/build/data/data-code.html`

========================================================================== -->

```python
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
