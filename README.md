[![License](https://img.shields.io/badge/License-MIT-blue.svg)](license.md)
[![Release](https://img.shields.io/github/release/badlydrawnrob/anki)](https://github.com/badlydrawnrob/anki/releases)
[![GitHub Repo stars](https://img.shields.io/github/stars/badlydrawnrob/anki?style=social)](https://github.com/badlydrawnrob/anki/stargazers)

# Anki programming flashcards
## Learning to code with Anki: themes, templates, and syntax highlighting for beginners and pros.

<img width="100%" height="auto" src="./source/media/preview-30-08-24.png" style="padding-bottom: 20px;">


## Want to learn how to code? 👨🏻‍💻👩🏻‍💻

> Anki helps you learn and remember quickly. You'll know how to code in no time!

The Anki app is a great way to learn, revise, and practice your coding skills, but Anki's default cards aren't great for programming. We can do better! These handy flashcards (and CSS themes) help make it fun to learn.

- Suitable for all learning levels,
- Great for frontend and backend,
- Popular languages supported,
- Add color to your code,
- Create your own custom theme.

Are you looking to master **html**, **css**, **javascript**, **php**, **python**, **lisp**, **elm**, **R**, **SQL** — or just getting started? If you're new to Anki, [read these guides first](https://github.com/badlydrawnrob/anki/discussions/123); otherwise ... let's begin!

## Quick start

> If you're updating from a previous version, [go here](https://github.com/badlydrawnrob/anki/issues/156).
> You can merge the old notetypes with the new.

1. Get the [latest Anki deck (`.apkg`)](https://github.com/badlydrawnrob/anki/releases)
2. Open the [Anki](https://apps.ankiweb.net) desktop app.
3. `File > Import ...` the deck,
4. Add a new card,
5. Select the `APF` type (Anki Programming Flashcards),
6. Get creative with your cards!


## Cards

There's two types of cards to choose from:

1. 💡 **[Simple](./source/docs/simple/index.md)**
    - What's the answer?
    - What does this syntax do?
2. 🔎 **[Missing!](./source/docs/missing/index.md)**
    - A question with a `[…]` word
    - A question with a `[missing]` word

Next, you'll probably want to [add some pretty colors](#add-color-to-your-code) to your code. But first, a quick tip on how to keep your Anki deck nice and organised ...


## Keep it simple, stupid!

> ☝️ [One idea](https://github.com/badlydrawnrob/anki/issues/41) per card. Just one.

**Simple is better.** If you only had 280 characters, what would you say? It's good practice to write your flashcards like you'd write code — as clear as possible. Those 10 cards you wrote with 100 related ideas? Sifting through those will become a chore; 100 cards with one idea is much better!

Imagine you're stupid, writing for your stupid future self; you'll look back on your flashcards and they'll make perfect sense.

- One idea per card
- Less is more (trim the fat)
- Keep it concise and relevant (reduce cognitive load)

A card stuffed with facts will overload the brain. I imagine you're trying to learn:

- A theme, or idea
- A function, or code snippet
- Syntax, or high-level documentation

That's great! But. Keep your questions clear — perhaps split a hard question into three easy cards — if you're spending more than a minute reviewing each card; reduce, reduce, reduce. Simplify it!


## Add color to your code

### Syntax highlighting

> 🎨 Life is better in full colour!

They say code is an art form. Anki flashcard's CSS themes come with a light and dark colour palette; it's also good for `dark mode` if that's your thing.

- 👨🏻‍🎨 **Starter themes**
    - 🥷🏻 Monochrome
    - ⛵️ Breeze Dark

You can highlight any [`code string`](./source/docs/simple/index.md#-syntax-inline-code) with [basic highlighting](./source/docs/highlight/index.md#basic-syntax-highlighting), or go [full colour](./source/docs/highlight/index.md#full-syntax-highlighting) with Markdown and Pandoc.


## It's more fun with a compiler (advanced)

When you've levelled up your programming skills, it's time to **[🧑‍🎓 do things the professional way!](./source/docs/professional/index.md)**

### `markdown->html` with data files

> ⏱️ Want a faster way to create your flashcards?
> 🤖 I've got you covered with `npm`, `pandoc`, and `less`.

https://github.com/user-attachments/assets/99a87801-4a4a-488c-9666-613280f6d0b5

Once you've got the basics of Anki flashcards down, it's time to get fancy with the **[offline `markdown->html` compiler](./source/docs/professional/index.md#compiling-your-card-field-data)**. It'll render all your card's fields for you in a flash!

### Custom colours for your theme

> 🧑‍🎨 Want your own custom colour theme?
> 🤖 I've got you covered with `npm`, `pandoc`, and `less`.

https://github.com/user-attachments/assets/4769a61f-0843-41d6-a3a3-6f3c93a2d8e7

If you're feeling creative, you can also take your code to the next level by **🧑‍🎨 [creating your own colour theme](./source/docs/professional/index.md#the-professional-way-to-create-your-own-css-theme)**, with any syntax highlighting pallette you like for your `code block`s. You can also change the Typography to your favourite `--font`!


## Why Anki flashcards instead of an add-on?

I've spent a lot of time so you can:

- Use Anki flashcards as they are — or customise the CSS themes,
- Use the excellent `markdown->html` workflow  ... online or locally.

The flashcards work on all platforms: [AnkiMobile](http://ankisrs.net/docs/AnkiMobile.html), [MacOS](https://apps.ankiweb.net) (Intel, Silicon) and [Android](https://github.com/ankidroid/Anki-Android). It depends on very little from the Anki app; it's stable software, with no add-ons or plugins required, and is a very simple setup.

### Dependency hell

> 🕰️ A tool or a piece of software that's still around in 5 years, without any serious changes, [is a good thing](https://github.com/badlydrawnrob/anki/issues/53)

There _are_ other plugins out there that are fun to use, but [beware of dependency hell](./source/docs/error/index.md)!



## ⚠️ Be careful when ...

### 1. Upgrading your deck

> **Always backup your deck** before installing a new version!

I try to stick to **major.minor.patch** [semantic versioning](http://semver.org), so updates don't break existing cards. Anki makes this tricky, so view commits for any major changes to the theme.

### 2. Creating your flashcards

> Keep it simple and avoid javascript

**Stick to [Common Markdown](https://commonmark.org/) or [safe HTML](https://en.wikipedia.org/wiki/HTML_sanitization)** to [avoid unintended consequences in Anki](https://github.com/badlydrawnrob/anki/issues/27). Here's some [helpful guides](https://github.com/badlydrawnrob/anki/discussions/123) on how to use the Anki software.

### 3. Can't swipe left to view code on Anki Mobile

The Anki Mobile app defaults to launching the menu with the _swipe left_ gesture.
This is not desirable, as often our code will have an `overflow` which we want to
scroll horizontally. You can change the settings, [see issue #118](https://github.com/badlydrawnrob/anki/issues/118) for a fix.

### 4. Text Formatting problems

> Paste **raw html** or **plain text** to avoid styling issues.

If you're having formatting problems, make sure you're **[following the guide](#cards)** and clicking `Toggle HTML Editor ⌘⇧X` (`‹›`) in the editor to copy/paste your HTML or raw text. For more information, see [this issue](https://github.com/badlydrawnrob/anki/issues/62). Many [editors](https://en.wikipedia.org/wiki/WYSIWYG) break formatting when you `copy->paste` text, or add junk to the html. **TL;DR** [paste as plain text](https://forums.ankiweb.net/t/paste-plain-text/4326) to avoid formatting issues.



## License and inspiration

> Anki flashcards are licensed under the [MIT Open Source License](./license.md)

Thanks to Ben Frain for [Enduring CSS](https://tinyurl.com/yc4pnxyr) and Jeff Escalante for [GPS](https://medium.com/@jescalan/bem-is-terrible-f421495d093a), I've borrowed ideas from both for sane stylesheets. Anki flashcards are based on [Print First](https://github.com/badlydrawnrob/print-first-css), in turn inspired by [@cbracco](https://github.com/cbracco) (Cardinal CSS) and [Material Design](https://m2.material.io/design/typography/the-type-system.html). Pick [`@mdo`](http://codeguide.co/) or [Google's](https://google.github.io/styleguide/htmlcssguide.html) code guide for orderly code.[^1] iPhone photo by `@svstudioart` on Freepik.


[^1]: I don't follow these religiously but it's good to have something to aim for. Hopefully my code isn't too sloppy!
