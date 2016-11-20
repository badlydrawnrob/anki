# Anki themes
## Learning to code with Anki: Themes, cards, templates & syntax highlighting

Want to learn how to code? This Anki programming theme will help make your Anki development decks a little more fun to work with. Inspired by the excellent [Janki method](#further-reading), spaced repetition software is a helpful learning tool for front-end and back-end programmers, beginner to experienced.

The template is built in html and css, with [syntax highlighting](./dist/themes/assets/css/README.md) for inline code and code blocks using the beautiful `Monokai` and `Tomorrow` themes (I personally use these in [Sublime Text](http://www.sublimetext.com)). Supports developer languages such as **html**, **css**, **python**, **ruby**, **php**, **jquery**, **javascript** and whatever else you want to throw at it!

![Preview image](./preview.png)

*Anki Themes: 'Simple' preview image* <sup>***[1](#other-notes)***</sup>


## Card Types
There are currently two types of card, a simple card and a puzzle card. Both share the `dist/themes/assets/css/main.css` file.

1. **[Simple](./dist/themes/simple/README.md)**
  - What's the answer?
  - What does this syntax do?
2. **[Puzzle](./dist/themes/puzzle/README.md)**
  - What's the answer?
  - **+** Puzzle question
3. **[Cloze](./dist/themes/cloze/README.md)**
  - Freeform show/hide question/answer


## Anki syntax highlighting with Markdown

- **[Anki syntax highlighting and themes](./dist/themes/assets/css/README.md)**

Basic syntax highlighting can be acheived simply by wrapping `<code>` with html tags, such as `<b>`, `<i>`. This works nicely with Anki's editor buttons for quick code blocks or inline code. The included *Monokai* and *Tomorrow light* themes can be easily customised with [`less`](http://lesscss.org).

If you like pretty code blocks, you're in luck: our themes now work with [Pygments](http://pygments.org/); you'll need [a plugin](https://ankiweb.net/shared/info/162313389), unless you're willing to get your hands dirty with terminal. Power Format Pack has really sped up my workflow,

There's some nice default colour schemes; some fields are automatically wrapped in `<code>` so all you need to do is add the symbol, class or function. The main `(code blocks ..)` need to be wrapped in `<pre><code>`. See [fields documentation](./dist/themes/README.md) for more details.


#### Why use Anki Themes instead of an Anki plugin?

> ***Practicality beats purity***
>
> Ideally, we'd use [highlight.js](https://highlightjs.org/) or one of the many javascript syntax highlighters out there. In practice, however, it's proved far too difficult to make this happen with Anki, so Pygments is a far more pragmatic solution.

There's a few Anki syntax highlighting plugins around — call me old fashioned, but cramming your code with inline css feels icky to me. With **Anki themes**, you use a pure(ish) `Markdown > HTML` workflow and *easily customisable* css. It works on all platforms, too: [AnkiMobile](http://ankisrs.net/docs/AnkiMobile.html), MacOS and [Android](https://github.com/ankidroid/Anki-Android).

***Power format pack*** is a solid Markdown plugin for Anki — it compliments *Anki themes* and makes for a nice workflow. If you prefer using stock Anki, [see these notes](./dist/themes/assets/css/README.md#automatic-syntax-highlighting-with-pygments). I generally prefer to use supported, well documented, stable software wherever possible — minus the plugins — but **PFP** really speeds things up.

If ever Anki allows external javascript files, I can swap Pygments out for another alternative like _highlight.js_.


## Notes

### Further reading

Not sure what all the fuss is about Anki? Some great reading material below ...

- [Anki essentials](http://alexvermeer.com/anki-essentials/)
- [Janki method](http://www.jackkinsella.ie/2011/12/05/janki-method.html)

### Installation

This is a major overhaul from the original (pre-beta), so it's not compatible with earlier versions. In future I'll try to stick to **major.minor.patch** [semantic versioning](http://semver.org), so updates don't break existing cards. Unfortunately Anki makes this tricky, so view commits for any major changes to the theme. [Follow the instructions](./dist/deck/README.md) for the easiest way to test the [.apkg package](./dist/deck) before updating future versions.

<!-- NOTES -->

### Other notes

1. Icons courtesy of [@kompa](http://devicon.fr)
