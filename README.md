# Anki theme
## Anki theme for programming snippets

This is a template for all your Anki development decks, which was inspired by the excellent [Janki method](http://www.jackkinsella.ie/2011/12/05/janki-method.html). Works with both front-end and back-end programming languages such as `html`, `css`, `python`, `ruby`, `php`, `jquery`, `javascript` and whatever else you want to throw at it. Comes with inline and code block styling using the beautiful `Monokai` and `Tomorrow` themes I personally use in [Sublime Text](http://www.sublimetext.com).

![Preview image](./img/preview.png)

*Anki theme card #01 preview image*

## Card Types
There are currently two types of card, a simple card and a complex card. Both share the `themes/style.css` file.

1. [Simple](themes/simple/README.md)
  - A basic question/answer card: e.g. What is the shortcut for `X`?
2. [Complex](themes/complex/README.md)
  - A more fully-rounded set of cards: an simple question, a symbol question and a puzzle question. Very flexible.


## Styling fields, inline code fields and code blocks

I've included some nice default styles for code; some fields will be automatically wrapped in `<code>` or `<pre><code>` so all you need to do is add the symbol, class or function. You can quickly add colours in the `Key point` field by wrapping elements:

#### Tomorrow theme (inline), Monokai theme (code block):
These are kind of abitrary and it's a bit dirty, but I'm utilising simple [HTML5 tags](https://developer.mozilla.org/en/docs/Web/HTML/Element) for styling code.

- Default colour is white
- `<b>` or `<strong>` for major symbols (`if`, `print` etc)
- `<i>` or `<em>` for an integer or float
- `<s>` or `<u>` for a string
- `<span>` or `<sup>` for minor hightlights (`function`, `class`)
- `<var>` or `<sub>` for minor higlights (`args`, `variables`)
- `<small>` for comments.

- `<q>` wildcard (could be used for css `class` for instance)
- `<mark>` wildcard (could be used for a specific `highlight`)
