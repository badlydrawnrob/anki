# Cloze card demo


## ★ Title
What type of condition group do these symbols belong to?


## ☆ Subtitle
Conditions


## ☆ Syntax (inline code)
false


## ★ Key point (code block or image)
```text
[0, 20] # <span class="cloze">{{c1::>= 0, <= 20}}</span>

(0, 20] # <span class="cloze">{{c1::> 0, <= 20}}</span>

(0, 20) # <span class="cloze">{{c1::> 0, < 20}}</span>

[0, 20) # <span class="cloze">{{c1::>= 0, < 20}}</span>
```


## ★ Key point notes
An example of [intervals](https://www.mathsisfun.com/sets/intervals.html).

- `[` symbol means **include** the number.
- `(` symbol means **exclude** the number.


## ✎ Other notes
More [ways to think about intervals](https://www.mathsisfun.com/sets/intervals.html)


## ✎ Markdown
The online Pandoc convertor seems to ouput the cloze properly:

```text
[0, 20] # {{c1::>= 0, <= 20}}

(0, 20] # {{c1::> 0, <= 20}}

(0, 20) # {{c1::> 0, < 20}}

[0, 20) # {{c1::>= 0, < 20}}
```
