[![License](https://img.shields.io/badge/License-MIT-blue.svg)](license.md)
[![Release](https://img.shields.io/github/release/badlydrawnrob/anki)](https://github.com/badlydrawnrob/anki/releases)
[![GitHub Repo stars](https://img.shields.io/github/stars/badlydrawnrob/anki?style=social)](https://github.com/badlydrawnrob/anki/stargazers)


# Anki programming flashcards
## Learning to code with Anki: themes, templates, and syntax highlighting for beginners and pros.

<img width="100%" height="auto" src="./source/media/preview-30-08-24.png" style="padding-bottom: 20px;">


## Want to learn how to code? 👨🏻‍💻👩🏻‍💻

> I'm using Anki to learn **CSS/Html**, **Elm**, **Lisp**, **Python**, **SQlite** (and someday **Ocaml**); How about you? Use this tool and learn how to code in no time!

Anki helps you remember and lock-in learning quickly. Whatever [language](#syntax-highlighting) you're looking to master, let this tool help you! Backend, frontend, somewhere in-between, we've got you covered. It uses spaced-repetition (a fancy way to say "scheduled learning") and simple flashcards as a great way to learn, revise, and practice your coding skills.

- Suitable for all learning levels
- Great for frontend and backend
- Popular languages supported
- Add color to your code
- Create your own custom theme

The Anki app is great, but it's default cards aren't great for programming: we can do better. Beautify your code (with css colour themes) and make coding fun to learn. Make these handy flashcards part of your daily routine!

## Quick start

> For updates [check this issue first](https://github.com/badlydrawnrob/anki/issues/156) just to be safe. Always backup your decks first!

1. [Download](https://apps.ankiweb.net/) Anki desktop
2. Get the latest [Anki Programming Flashcards](https://github.com/badlydrawnrob/anki/releases) (APF) `.apkg` deck
3. Open the Anki desktop app
4. `File > Import ...` the deck
5. Add a new card
6. Select the `Anki Programming Flashcards (APF)` card type
7. Get creative with your cards!

Anki is simple to use, hard to master. Just getting started? Read [these Anki guides first](https://github.com/badlydrawnrob/anki/discussions/123); otherwise ... let's begin!

<details open>
<summary>🎥 Quick start video</summary>
Coming soon ...
</details>

### Next steps

> Once you're happy with your cards, it's wise to backup!

1. Create a [web account](https://apps.ankiweb.net/) to sync [your desktop profile](https://docs.ankiweb.net/profiles.html)[^1]
2. With the mobile app, click "Synchronize"
3. Login to your web account
4. You're all done!


## Cards

There's three types of cards to choose from:

1. 💡 **[Simple](./source/docs/simple/index.md)**
    - What's the answer?
    - What does this syntax do?
2. 🔎 **[Missing!](./source/docs/missing/index.md)**
    - A question with a `[…]` word
    - A question with a `[missing]` word
3. 🖍️ **[Draw!](./source/docs/draw/index.md)** (experimental)[^2]
    - A diagram of a small program you have to guess
    - A sketch of a function or program to drill yourself on

Next, you'll probably want to add some pretty colors to your code.


## Add color to your code

### Syntax highlighting

> 🎨 Life is better in full colour!

They say code is an art form. Anki flashcard's CSS themes come with a light and dark colour palette; it's also good for [`dark mode`](#dark-mode) if that's your thing.

- 👨🏻‍🎨 **Starter themes**
    - 🥷🏻 Monochrome
    - ⛵️ Breeze Dark

You can highlight any [`code string`](./source/docs/simple/index.md#-syntax-inline-code) with [basic highlighting](./source/docs/highlight/index.md#basic-syntax-highlighting), or go [full color](./source/docs/highlight/index.md#full-syntax-highlighting) with Markdown and Pandoc [`code block`](./source/docs/simple/index.md#-sample-code-block)s. We have a monochrome theme for notes, and a modified Breeze Dark theme[^3] for blocks of code.

We can bring colour to all your favourite languages:

<div id="languages" style="opacity: 0.9;">
<!-- Icon colors: #EBEBEB, #999999, #6E7070, #444444, #000000 -->
<img width="40px;" height="40px;" alt="learn to code CSS3" src="./source/media/icons/icon-css3.svg"><img width="40px;" height="40px;" alt="learn to code C, C#, or C++" src="./source/media/icons/icon-c.svg"><img width="40px;" height="40px;" alt="learn to code with lispy langs, like Clojure and Racket" src="./source/media/icons/icon-clojure.svg">&nbsp;<img width="60px;" height="36px;" alt="learn to code with Elm Lang, a delightful language with friendly error messages for web applications" src="./source/media/icons/icon-elm-resized.png">&nbsp;<img width="50px;" height="50px;" alt="learn to code with Go Lang" src="./source/media/icons/icon-go.svg"><img width="40px;" height="40px;" alt="learn to code with Haskell" src="./source/media/icons/icon-haskell.svg">&nbsp;<img width="40px;" height="40px;" alt="learn to code with Html5" src="./source/media/icons/icon-html5.svg"><img width="50px;" height="50px;" alt="learn to code with Java" src="./source/media/icons/icon-java-resized.png"><img width="40px;" height="40px;" alt="learn to code with Javascript" src="./source/media/icons/icon-javascript.svg">&nbsp;<img width="40px;" height="40px;" alt="learn to code with Ocaml" src="./source/media/icons/icon-ocaml.svg"><img width="50px;" height="50px;" alt="learn to code with PHP" src="./source/media/icons/icon-php.svg"><img width="50px;" height="50px;" alt="learn to code with Python" src="./source/media/icons/icon-python.svg"><img width="40px;" height="40px;" alt="learn to code with R Lang" src="./source/media/icons/icon-r.svg">&nbsp;<img width="40px;" height="40px;" alt="learn to code with Rust" src="./source/media/icons/icon-rust.svg">&nbsp;<img width="65px;" height="43px;" alt="learn to code with SQL tools, like SQlite and Postgres" src="./source/media/icons/icon-sqlite-resized.png">&nbsp;<img width="40px;" height="40px;" alt="learn to code with Typescript; Javascript with a typed system" src="./source/media/icons/icon-typescript.svg">
</div>


## Keep it simple, stupid!

> ☝️ [One idea](https://github.com/badlydrawnrob/anki/issues/41) per card. Just one.

Some quick tips on how to keep your Anki deck nice and organised ...

**Simple is better.** If you only had 280 characters, what would you say? It's good practice to write your flashcards like you'd write code — as clear as possible. Those 10 cards you wrote with 100 related ideas? Sifting through those will become a chore; 100 cards with one idea is much better!

**Imagine you're stupid, writing for your stupid future self;** you'll look back on your flashcards and they'll make perfect sense. Whenever you find yourself struggling to understand or getting overwhelmed (with information), it's time for a rewrite! Follow these rules:

- One idea per card
- Less is more (trim the fat)
- Keep it concise and relevant (reduce cognitive load)

A card stuffed with facts will overload the brain. I imagine you're trying to learn:

- A theme, or idea
- A function, or code snippet
- Syntax, or high-level documentation

That's great! But. Keep your questions clear — perhaps split a hard question into three easy cards — if you're spending more than a minute reviewing each card; reduce, reduce, reduce. Simplify it!





## It's more fun with a compiler (advanced)

> **[🧑‍🎓 do things the professional way!](./source/docs/professional/index.md)**, once you've levelled up your programming skills!





<details>
<summary><strong>🎥 Step 1. Write your flashcards quickly and easily (<code>markdown->html</code>)</strong></summary>&nbsp;

- ⏱️ Want a faster way to create your flashcards?
- 🤖 I've got you covered with `npm` and `pandoc`

Once you've got the basics of Anki programming flashcards down, it's time to get fancy with the **[offline `markdown->html` compiler](./source/docs/professional/index.md#first-steps)**. It'll render all your card's data fields for you in a flash!

https://github.com/user-attachments/assets/99a87801-4a4a-488c-9666-613280f6d0b5
</details>

<details>
<summary><strong>🎥 Step 2. Create your own colour theme</strong></summary>&nbsp;

- 🧑‍🎨 Want your own custom colour theme?
- 🤖 I've got you covered with `npm`, `pandoc` and `less`

If you're feeling creative, you can also take your code to the next level by **🧑‍🎨 [creating your own colour theme](./source/docs/professional/index.md#the-professional-way-to-create-your-own-css-theme)**, with any syntax highlighting pallette you like for your `code block`s. You can also change the Typography to your favourite `--font`!

https://github.com/user-attachments/assets/4769a61f-0843-41d6-a3a3-6f3c93a2d8e7
</details>

I'd advise beginners to start by writing great cards, before moving on to use the compiler. I know when I was starting out using terminal and compilers took some getting used to!

## Why Anki programming flashcards instead of an add-on?

> I've spent a lot of time fine-tuning the flashcards so they're pleasant to use.

The flashcards depend on _very_ little from the Anki app (no add-ons requiredplugins), and they'll work on ANY platform: [AnkiMobile](http://ankisrs.net/docs/AnkiMobile.html), [MacOS](https://apps.ankiweb.net) (Silicon: ARM64, Intel: x86_64), [Android](https://github.com/ankidroid/Anki-Android), and [Windows/Linux](https://apps.ankiweb.net/). You can use them how you want:

- Use the flashcards as they are; create your own colors/typography
- Use the excellent `markdown->html` workflow ... online or locally

Add-ons tend to go out-of-date (dependency hell), so I've made sure it [depends](https://github.com/badlydrawnrob/anki/network/dependencies) on little, using stable, well-supported, "boring" technology. It's pretty simple to setup too!

### Dependency hell

> 🕰️ A tool or a piece of software that's still around in 5 years, without any serious changes, [is a good thing](https://github.com/badlydrawnrob/anki/issues/53)

There _are_ other plugins out there that are fun to use, but [beware of dependency hell](./source/docs/error/index.md)!



## ⚠️ FAQs

<details>
<summary>
<strong>1. How do I upgrade?</strong> (semantic versioning)
</summary>

Always backup your deck before installing a new version! I try to stick to **major.minor.patch** [semantic versioning](http://semver.org), so updates don't break existing cards. Anki makes this tricky, so view commits for any major changes to the theme. You can [merge your old cards](https://github.com/badlydrawnrob/anki/issues/156) with the new ones.
</details>

<details>
<summary>
<strong>2. How do I write the flashcards?</strong>
</summary>

Keep it simple and avoid javascript. Stick to [Common Markdown](https://commonmark.org/) or [safe HTML](https://en.wikipedia.org/wiki/HTML_sanitization) to [avoid unintended consequences in Anki](https://github.com/badlydrawnrob/anki/issues/27). Here's some [helpful guides](https://github.com/badlydrawnrob/anki/discussions/123) on how to use the Anki software.
</details>

<details>
<summary>
<strong>3. I can't swipe left</strong> to view code on Anki Mobile
</summary>

The Anki Mobile app defaults to launching the menu with the _swipe left_ gesture.
This is not desirable, as often our code will have an `overflow` which we want to
scroll horizontally. You can change the settings, [see issue #118](https://github.com/badlydrawnrob/anki/issues/118) for a fix.

</details>

<details>
<summary>
<strong>4. I can't swipe up or down</strong> to view card on Anki Mobile
</summary>

The problem in [issue #168](https://github.com/badlydrawnrob/anki/issues/168) shows itself when there's a big `code block` that's overflowing the `viewport` (the width of your mobile). Touching and scrolling up/down immediately (in one swift motion) resolves this problem.

</details>

<details>
<summary>
<strong>5. I'm having text formatting problems</strong>, what do I do?
</summary>&nbsp;

> Paste **raw html** or **plain text** to avoid styling issues.

If you're having formatting problems, make sure you're **[following the guide](#cards)** and clicking `Toggle HTML Editor ⌘⇧X` (`‹›`) in the editor to copy/paste your HTML or raw text. For more information, see [this issue](https://github.com/badlydrawnrob/anki/issues/62). Many [editors](https://en.wikipedia.org/wiki/WYSIWYG) break formatting when you `copy->paste` text, or [add junk](https://forums.ankiweb.net/t/paste-plain-text/) to the html.
</details>

<details>
<summary>
<strong><span id="dark-mode">6. How do I use dark/night mode in Anki?</strong>
</summary>

The app should follow your preferences, for example, on a Mac or iPhone search for the "Appearance" or "Display and Brightness" settings and set to Light or Dark.

If you want to force the display mode, in Anki desktop select the toolbar `Anki -> Preferences -> Appearance -> Theme`, and select light or dark. For the mobile app, you can select the gear icon `Preferences -> Theme -> Night Mode ...` and "Force on/off".
</details>


## License and inspiration

> Anki programming flashcards (APF) are licensed under the [MIT Open Source License](./license.md)

Thanks to Ben Frain for [Enduring CSS](https://tinyurl.com/yc4pnxyr) and Jeff Escalante for [GPS](https://medium.com/@jescalan/bem-is-terrible-f421495d093a), I've borrowed ideas from both for sane stylesheets. Anki programming flashcards are based on [Print First](https://github.com/badlydrawnrob/print-first-css), in turn inspired by [@cbracco](https://github.com/cbracco) (Cardinal CSS) and [Material Design](https://m2.material.io/design/typography/the-type-system.html). Pick [`@mdo`](http://codeguide.co/) or [Google's](https://google.github.io/styleguide/htmlcssguide.html) code guide for orderly code.[^4] iPhone photo by `@svstudioart` on Freepik, icons by [Devicon](https://devicon.dev/) and edited with [DeEditor](https://deeditor.com/)!

Also noteworthy is **[Kanri](https://www.kanriapp.com/)**: a cool Kanban organiser for [getting things done](https://hamberg.no/gtd). Works offline and is free!


[^1]: You'll want to add cards with Anki desktop; review them with Anki mobile apps. That's how I generally do it anyway! You can sync different profiles with Anki web if you like: one for a test profile, one for proper.

[^2]: Meaning, likely to change. I'm [trying a few things out](https://github.com/badlydrawnrob/anki/issues/66) privately and when I have something to share, I'll let you know!

[^3]: This is based on the modified [Breeze Dark theme](https://marketplace.visualstudio.com/items?itemName=AndrewFridley.Breeze-Dark-Theme) for Visual Studio Code by Andrew Fridley. If you'd prefer the [original](https://github.com/badlydrawnrob/anki/issues/142#issuecomment-2227452134) Pandoc version, you can follow the instructions [here](https://github.com/badlydrawnrob/anki/issues/154).

[^4]: I don't follow these religiously but it's good to have something to aim for. Hopefully my code isn't too sloppy!
