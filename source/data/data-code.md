<!-- Simple code compiler ====================================================

     Useful for converting `code blocks` or other field data:

     1. Enter a Markdown fenced code block (for example)
     2. `npm run data-code`
     3. View the file in `/build/data/data-code.html`

========================================================================== -->

```python
d = {
  "first_name": "Keanu",
  "last_name": "Reeves"
}

for key in d:
  print(f"{key} = {d[key]}")
```

```python
for key, value in d.items():
  print(f"{key} = {value}")
```
