Moving on from ECSS
===================

> 1. Need to rename card field for code block (rename image)
> 2. Stop using `{{FrontSide}}`. It's convenient but requires keeping TWO templates ...
> 3. ...  Which means reusing styles (like the Tailwind article says) becomes harder
> 4. The only thing that _should_ be different per card type is certain portions:\
>    - The `{{cloze}}` tag for Missing!
>    - The `{{image}}` field for (eventually) Draw!
         - Will Draw! Have fewer fields? Do these really need to be split out?

Components are a nice idea, and perhaps for really massive sites they're the best option, but for Anki it leads to lots and lots of repetition. Some might say, needless repetition.

Current CSS
-----------

I think we can safely say that the current layout for CSS is:

1. `style/modules/variables/` lives the `--css-variables` (why do we call it a modules folder? What's the reason for that name?
2. `style/modules/mixins/` aren't used at all (in Print First we have a `.baseline-grid()` mixin.
3. `partials` lives the raw HTML styles. That is everything at it's base level that doesn't involve components or conceptual design elements.

That lives the components, or designed elements, like `.anki-Front` or `.card` or whatever. Where should this live?

What GPS is trying to achieve
-----------------------------

> GPS stands for `global`, `page`, `section`.
> A caveat is: YOU SHOULD HAVE A DESIGN SYSTEM (for anything other than micro sites)
> If you're a team, you need something to work from or it'll get messy.
> That's why ECSS was born, for isolating code.

1. Cleaner code (dare I say, beautiful code?)
2. Fewer unwieldy class names
3. Repetition (BEM and ECSS aren't dry; neither is Tailwind!)
4. Just enough isolation (to stop inheritance issues, and what he calls "scope leaks")
5. The simplicity of frameworks like Pico CSS.

> By far the largest issue developers have with CSS are what I like to call scope leaks.
> These happen when you write styles for one specific section of a website, but because of the way you made the selection, the styles also affect elements on other random parts of the site. This is a side effect of CSS being written in the global scope by default.

Pandoc's being a pain
---------------------
For some reason whitespace inside a `<div>` gives an error when using `-o` with a standalone file.

```terminal
[WARNING] Could not deduce format from file extension .mustache
  Defaulting to markdown
[WARNING] Could not deduce format from file extension .mustache
  Defaulting to html
[WARNING] Div at TESTING.mustache line 1 column 1 unclosed at TESTING.mustache line 25 column 1, closing implicitly.
```