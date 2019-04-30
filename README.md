# Anki themes
## Learning to code with Anki — themes, cards, templates and syntax highlighting

Want to learn how to code?

Anki helps you learn and remember quickly. The default cards aren't great for programming, so these flashcards and themes make it fun to learn.

- Suitable for all learning levels
- Perfect for frontend and backend programmers
- Popular languages supported
- Syntax highlighting colors
- Fully customisable (create your own themes and cards!)

Are you looking to master **html**, **css**, **javascript**, **php**, **python**, **R** — or just getting started? If you're new to Anki, [read these guides first](#inspiration); otherwise ... let's begin!


![Simple card preview](./preview.png)



## Keep it simple, stupid!

> Simple is better.

When building your flashcards, simple is better:

- One idea per card
- Trim the fat (less is more)
- Keep it relevant (reduce cognitive load)

Try not to stuff a card with facts, as it can overload the brain. You're generally trying to learn:

- A theme, or idea
- A function, or code snippet
- Syntax, or high-level documentation

### Imagine you're stupid, writing for your stupid future self

> 100 cards with [one idea](https://github.com/badlydrawnrob/anki/issues/41) each, is better than 10 cards with 100 ideas.

Think of it like a tweet. If you only had 280 characters, what would you say? Just like writing code, it's good practice to make your flashcards clear, so when you look back on them they make sense.

#### You'll probably want

1. A descriptive title (or intro)
2. A clear question and answer
3. Your key learning point

#### It's sometimes helpful to add

4. A subtitle or tags (to group cards)
5. Supporting notes (in bullet point form)
6. Links to articles or documentation

Unless its a super hard question, if you're spending more than a minute reviewing each card — reduce, reduce, reduce. Simplify it!


## Cards

There's two types of cards to choose from:

1. **[Simple](./source/docs/simple/index.md)**
    - What's the answer?
    - What does this syntax do?
2. **[Missing!](./source/docs/missing/index.md)**
    - A question with a `[…]` word
    - A question with a `[missing]` word


## Anki syntax highlighting

### Basic syntax highlighting

[Basic syntax highlighting](./source/docs/highlight/index.md#basic-syntax-highlighting) can be achieve by marking the selecting `<code>` or `<pre>` blocks with the **bold** or _**italic**_ buttons in the Anki editor (or the equivalent HTML tags).

### Full syntax highlighting (Markdown)

- **Default themes**
    - [Monokai](https://www.monokai.pro)
    - [Solarized light](https://ethanschoonover.com/solarized/)
- **[Custom themes](./source/docs/highlight/index.md#customising-themes)**

If you like pretty code blocks, you're in luck: themes work with Pandoc to convert Markdown into HTML with full syntax highlighting (a replacement for Power Format Pack which used Pygments — [see below](#dependency-hell))



## Quick start

1. Download the [latest deck (`.apkg`)](https://github.com/badlydrawnrob/anki/releases)
2. Open [Anki](https://apps.ankiweb.net). Select `File > Import ...`
3. Import the deck
4. Add card
5. Select `Anki theme` type
6. Get creative!

Next, you'll probably want to [add some pretty colors](./source/docs/highlight/index.md).



## Advanced

- Offline syntax highlighting
- Convert Markdown to HTML
- Select your theme colors
- Create custom cards!

You'll know your way around [Git](https://git-scm.com) and have [Homebrew](https://brew.sh) installed.

1. [`brew install node`](https://nodejs.org/)
2. <s>Add this [`package.json`](#) to your project folder</s>
3. `npm install`

Next, follow the instructions for [custom theme colors](./source/docs/highlight//index.md):



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

- Use Anki themes as they are ...
- Use the excellent `Markdown > HTML` workflow
- Customise the css to your hearts content.

Works on all platforms: [AnkiMobile](http://ankisrs.net/docs/AnkiMobile.html), MacOS and [Android](https://github.com/ankidroid/Anki-Android).



## ⚠️ Be careful when ...

### Upgrading your deck

> ⚠️ **Always backup your deck** for safety before installing a new version!

I try to stick to **major.minor.patch** [semantic versioning](http://semver.org), so updates don't break existing cards. Unfortunately Anki makes this tricky, so view commits for any major changes to the theme.

### Creating your flashcards

> ⚠️ **Only use [Common Markdown](https://commonmark.org/) or [safe HTML](https://en.wikipedia.org/wiki/HTML_sanitization)** to [avoid unintended consequences in Anki](https://github.com/badlydrawnrob/anki/issues/27).

### Formatting problems

> ⚠️ It's better to use the **[plain html](./source/docs/highlight/#full-syntax-highlighting)** as `copy->paste` in Anki often breaks formatting (adds messy `br` or `div`). Choose a field and navigate to: `☰ -> Edit html` to correct any formatting issues.


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
