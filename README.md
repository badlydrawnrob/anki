# Anki themes
## Learning to code with Anki — themes, cards, templates and syntax highlighting

Want to learn how to code?

Anki helps you learn and remember quickly. The default cards aren't great for programming, so these flashcards and themes make it fun to learn.

- Suitable for all learning levels
- Perfect for frontend and backend programmers
- Popular languages supported
- Syntax highlighting colours
- Fully customisable (create your own themes and cards!)

Are you looking to master **html**, **css**, **javascript**, **php**, **python**, **R** — or just getting started?

Let's begin.

![Simple card preview](./preview.png)


## Keep it simple, stupid!

> Simple is better

Remember, when creating your cards, simple is better. 

- One idea per card
- Trim the fat (less is more)
- Keep it relevant (reduce cognitive load)

Try not to pack a card with facts. Test yourself on a function, concept, or snippet, add some links to documentation if you like, but if you're spending more than a minute reviewing each card, there's probably too much information on there. Better to have 100 cards with one idea each, than 10 cards with 100 ideas.

Reduce! Simplify it!


### Cards

There's two types of cards to choose from:

1. **[Simple](./source/docs/simple.md)**
    - What's the answer?
    - What does this syntax do?
2. **[Cloze](./source/docs/cloze.md)**
    - A question with a `[…]` word
    - A question with a `[missing]` word


## Anki syntax highlighting

### Basic syntax highlighting

[Basic syntax highlighting](./source/docs/themes.md#basic-highlighting) can be achieve with `<b>`, `<strong>`, `<i>` or `<em>`, inside `<code>` or `<pre>` blocks. Works nicely with Anki's editor buttons.

### Full syntax highlighting (Markdown)

- **Default themes**
    - [Monokai](https://www.monokai.pro)
    - [Solarized](https://ethanschoonover.com/solarized/) (light)
- **[Create your own themes](./source/docs/themes.md#customising-themes)**

If you like pretty code blocks, you're in luck: themes work with Pandoc to convert Markdown into HTML with full syntax highlighting (a replacement for Power Format Pack which used Pygments — [see below](#dependency-hell))



## Quick start

1. Download the [latest deck (`.apkg`)](https://github.com/badlydrawnrob/anki/releases)
2. Open Anki. Select `File > Import ...`
3. Import the deck
4. Add card
5. Select `Anki theme` type
6. Get creative!

Next, you'll probably want to [add some pretty colours](./source/docs/themes.md).



## Advanced

- Offline syntax highlighting
- Convert Markdown to HTML
- Select your theme colors
- Create custom cards!

You'll know your way around [Git](https://git-scm.com) and have [Homebrew](https://brew.sh) installed.

1. Install Homebrew
2. Install [Node](https://nodejs.org/): `brew install node`
3. Add this [`package.json`](#) to your project folder
4. `npm install`

Next, follow the instructions for [custom theme colours](./source/docs/themes.md):



## Why Anki Themes instead of a plugin?

> ***Practicality beats purity***
>
> It may look cool, but [shit breaks](https://en.wikipedia.org/wiki/Dependency_hell).

### Dependency hell

If you're new to programming, let me explain. I previously used [Power Format Pack](https://gitlab.com/neftas/supplementary-buttons-anki/issues/96), [Stylus](http://stylus-lang.com) and [Highlight.js](https://highlightjs.org/) — all of which are great, until ...

1. One is dead, one dying.
2. One just doesn't work with Anki.
3. It happens _all the time_ in tech.
4. Be extra careful what you depend on.

I've worked hard so you can:

- Use Anki themes as they are,
- Or use the excellent `Markdown > HTML` workflow,
- You can edit the css to your hearts content.

It works on all platforms, too: [AnkiMobile](http://ankisrs.net/docs/AnkiMobile.html), MacOS and [Android](https://github.com/ankidroid/Anki-Android).



### Versions

I try to stick to **major.minor.patch** [semantic versioning](http://semver.org), so updates don't break existing cards. Unfortunately Anki makes this tricky, so view commits for any major changes to the theme.

**Always backup your deck** for safety before installing the new one.


## Licensed under MIT

Anki themes are licensed under the [MIT Open Source License](./license.md)


## Thanks to ...

### Inspiration

So what's all the fuss about Anki? Some inspiration below ...

- [Anki essentials](http://alexvermeer.com/anki-essentials/)
- [Janki method](http://www.jackkinsella.ie/2011/12/05/janki-method.html)

### Credits

1. [@kompa](https://konpa.github.io/devicon/) icons
2. [Enduring CSS](http://ecss.io) component naming conventions
3. [@mdo code guide](http://codeguide.co/)
