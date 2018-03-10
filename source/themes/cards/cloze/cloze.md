# Cloze card demo


## ★ Title
A `method` and a `function` are missing here. What are they?


## ☆ Syntax
for loops, strings, lists


## ☆ Syntax (inline code)
false


## ★ Key point (code block or image)
```python
def censor(text, word):
    text = {{c1::text.split()}}  # Convert to list
    word_length = len(word)  # For our ****

    for i, item in {{c1::enumerate(text)}}:
        if item == word:
            asterix = '*' * word_length
            text[i] = asterix
            print("{} yup! '{}' is the same as '{}'".format(i, item, word))
            print('Replacing {} with {}'.format(i, asterix))
        else:
            print('{} is not {}'.format(i, word))

    return ' '.join(text)

print(censor('this is a sentence', 'sentence'))
```


## ★ Key point notes
1. `split()` converts a `string` to a `[]`
2. `enumerate()` allows us to return the index of a list

Another, surprisingly simple method to achieve this is with `.replace()` method:

```python
def censor(text, word):
           return text.replace(word, '@' * len(word))
```

> Uhm, it's really nice, but this will replace parts of a word too. So 'gnopg nop foo ' with 'nop' will become 'g@@g @@ foo' — [see&#32;more](http://bit.ly/2e0SwLl)


## ✎ Other notes
This assumes that all letters are lowercase (`split()` by default seperates by whitespace). See other methods of [accessing the index within the loop](http://treyhunner.com/2016/04/how-to-loop-with-indexes-in-python/) (such as `range(len(our_list))`)


## ✎ Markdown
false
