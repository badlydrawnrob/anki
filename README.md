# Anki themes
## Learning to code with Anki: Themes, cards, templates & syntax highlighting

Want to learn how to code? This Anki programming theme will help make your Anki development decks a little more fun to work with. Inspired by the excellent [Janki method](#further-reading), spaced repetition software is a helpful learning tool for front-end and back-end programmers, beginner to experienced.

The template is built in html and css, with [syntax highlighting](./dist/themes/assets/css/README.md) for inline code and code blocks using the beautiful `Monokai` and `Tomorrow` themes (I personally use these in [Sublime Text](http://www.sublimetext.com)). Supports developer languages such as **html**, **css**, **python**, **ruby**, **php**, **jquery**, **javascript** and whatever else you want to throw at it!

![Preview image](./preview.png)

*Anki theme card #01 preview image*


## Card Types
There are currently two types of card, a simple card and a complex card. Both share the `dist/themes/assets/css/main.css` file.

1. **[Simple](./dist/themes/README.md)**
  - What's the answer?
  - What does this syntax do?
2. **[Complex](./dist/themes/README.md#complex-theme)**
  - Everything in **Simple** theme
  - **+** Puzzle question


## Anki syntax highlighting with Markdown

- **[Anki syntax highlighting and themes](./dist/themes/assets/css/README.md)**

Basic syntax highlighting can be acheived simply by wrapping `<code>` with html tags, such as `<b>`, `<i>`. This works nicely with Anki's editor buttons for quick code blocks or inline code. The included *Monokai* and * and *Tomorrow light* themes can be easily customised with [`less`](http://lesscss.org).

If you like living life on the edge, I've also included the amazing **highlight.js** for full Markdown syntax highlighting. Currently stable on iPhone, so if you're on Android or a js wizzard [please give me a shout](https://github.com/badlydrawnrob/anki/issues/6).

There's some nice default colour schemes; some fields are automatically wrapped in `<code>` so all you need to do is add the symbol, class or function. The main `(code blocks ..)` need to be wrapped in `<pre><code>`. See [fields documentation](./dist/themes/README.md) for more details

##### Why use Anki Themes instead of an Anki plugin?

**Because it's plain html.**

There's a few Anki syntax highlighting plugins around, but as far I'm aware these all involve solutions like [Pygments](http://pygments.org). Call me old fashioned, but cramming your code with `spans` or inline css feels icky to me. 

With **Anki themes**, you use pure html/Markdown/js and *easily customisable* css. If *highlight.js* dies tomorrow, I can swap it out for another javascript alternative. Granted, it currently works best on mobile, but I use [AnkiMobile](http://ankisrs.net/docs/AnkiMobile.html) 90% of the time anyway!

Having ditched Wordpress for [Craft](https://craftcms.com), I'm also skeptical of plugins and try to use supported, documented, stable software wherever possible[^1].


## Notes

### Further reading

Not sure what all the fuss is about Anki? Some great reading material below ...

- [Anki essentials](http://alexvermeer.com/anki-essentials/)
- [Janki method](http://www.jackkinsella.ie/2011/12/05/janki-method.html)

### Versioning

This is a major overhaul from the original, so it's not compatible with earlier versions. In future I'll try to stick to **minor.major.patch** [semantic versioning](http://semver.org), so updates don't break existing cards. Unfortunately Anki makes this tricky, so view commits for any major changes to the theme. [Follow the instructions](./dist/deck/README.md) for the easiest way to test the [.apkg package](./dist/deck) before updating future versions.

<!-- NOTES -->

[1]: I'm no ludite, the popular [Power format pack](https://ankiweb.net/shared/info/162313389) could complement Anki themes and make for a nice workflow. I generally work with Sublime/Atom and render html with Marked App but this plugin could save you some hassle.
