---
title: Missing! Card data
---


## ★ Title

What type of condition group do these symbols belong to?


## ☆ Subtitle

Conditions


## ☆ Syntax (inline code)

false


## ★ Key point (code block or image)

> Once you've generated your code, you'll need to add the `{{c1::cloze tag}}` somewhere in the code. To do this, press the `A𝐴` button ([`Toggle Visual Editor ⌘⇧X`](https://github.com/badlydrawnrob/anki/issues/62)) to enter rich text mode, then press `[...]` or `[...]+` button to add the cloze deletion tags.

```python
[0, 20] # {{c1::>= 0, <= 20}}

(0, 20] # {{c1::> 0, <= 20}}

(0, 20) # {{c1::> 0, < 20}}

[0, 20) # {{c1::>= 0, < 20}}
```


## ★ Key point notes

An example of [intervals](https://www.mathsisfun.com/sets/intervals.html).

- `[` symbol means **include** the number.
- `(` symbol means **exclude** the number.


## ✎ Other notes

More [ways to think about intervals](https://www.mathsisfun.com/sets/intervals.html)


## ✎ Markdown

> Beware when saving your card! If you have `{{c1::cloze tags}}` in the Markdown field, Anki will complain!

```python
[0, 20] # >= 0, <= 20

(0, 20] # > 0, <= 20

(0, 20) # > 0, < 20

[0, 20) # >= 0, < 20
```
