Moving on from ECSS
===================

## To Do

> I can see GPS getting a bit messy (sometimes personal opinion). At least with
> ECSS you know that everything is going to have a unique class, and the code
> lives with each page or component. It's much clearer where to put the CSS
>
> With GPS it seems fuzzy when to use `.gl` styles or `#id` in some situations.
> Or even which should be raw html styles and which needs a class or id.
> **Code order becomes more of a challenge too**, for instance I'm needing the `code` to inherit styles from `h1`, but I want to name styles of `code` altogether.
> If my code styles (inherit) come _after_ my `h1` styles, will they inherit that header style? **Probably not!**.
>
> Sometimes it's best to be explicit and style them insitu (i.e. the `.gl-Card` that they live in, rather than at the root raw html level)

```css
code {
  .gl-Card header h1 &,
  .gl-Card header h2 &,
  .simple-Header_Code & {

    b, strong,
    i, em {
      font-size: inherit;
      font-style: inherit;
      font-weight: inherit;
      text-decoration: none;
      background: none;
}
```

1. Solve the problems with our new system. Make rules concrete.
2. Make sure folder names and file names make sense.
    - Why are we using `/modules/` and `/partials/`?
    - Does it make sense to rename these folders (i.e: simply `variables`)
    - We're repeating the name `_root.less` twice.
3. Test out the new GPS styles. Do they work?
4. How are we going to allow for variations in the master template?
    - Missing! for cloze tags
    - Simple for ...
    - Draw! for image fields
    - Perhaps we can simply use conditional fields `{{#☆ field}} ... {{/☆ field}}`
5. Our demo files are our specimen files. Is our design system consistant?
6. Are there any raw HTML css that should live in `/partials`? Any `.gl` that should be a `#page` or a `#section`?
7. Remember Elm Lang's lessons: **just because something is _similar_ does not mean it is the same!** When do you _not_ reuse styles?
8. What happens if much of the code's base is shared? For instance `.test-Anki` is used for all demo cards; `.gl-Card` is used for all demo cards; some bits are dependant on `#card-type` ...
    - It doesn't seem sensible to me to do something like `#card-type -> .gl-Card` and make changes this way (I don't think it recommends in GPS anyway)
    - It's also a little bit difficult (without a compiler, which Pandoc might help with) to differentiate cards without having a bit of (or a lot of) HTML code repetition (Tailwind advises against this where possible).
    - For instance the main bits that are going to change are an `<img>` for Draw! (perhaps slightly different layout); a `{{cloze}}` tag for Missing! and so on.
    - If a layout is _slightly_ different, does (7) apply? Should you make this an entirely different template? Or adapt the `.gl-` elements? Or add a `.gl-Element-variation`? I used to have `.simple` and `.simple-reverse`, for instance.
    - If they're part of a design system, perhaps a `-variant` might make sense.
9. Is the `.gl-Card h1 code b` part of the `gl-Card` styles, or part of the global _raw_ html styles? This is nuanced and uncertain.
10. If `#section` should always be preceded by `#page` then it makes sense to have `#section` in the same file as it's page?
11. **Aim to keep RAW HTML and `.gl-` styles in separate folders.** You want to try and go as far as you can with raw html styles, but I feel that keeping global styles on their own is the way to go (for now).
    - <s>In `skylighting.less` I'm referencing `.gl-CodeBlock`. Is this valid to do this?</s>
    - <s>I feel like keeping `skylighting.less` as one of the main `partials` (well, a global style really) is the way to do things.</s>
    - <s>Perhaps moving it to be explicitly with the global classes is a better way to go though.</s>

## Problems

> It's quite a big job switching out frameworks.
> It takes time to figure out how to tackle fringe cases,
> Or to do justice to the _theory_, whichever one you've chosen!
> Perhaps our `.card` isn't suited to GPS? (cards share a lot of styles)

It's not a good idea to repeat HTML when you can get away without doing that. This means your code is living in two or more places. See Tailwind's "reusing styles" post. Ideally use:

1. A loop
2. A component
3. Some kind of conditional css (depending on type of card)

Another big question is "how many nested classes do you need for a global component?". GPS seems to say "very few!" and using regular (raw) html with a wrapping `.gl-` class.

For instance ...

Is the `.header` part of the `.card` or are they separate entities? Well, it definitely _feels_ part of the card, as the card has a header. I'm not sure about that. But if `.header` has a class, then the `h1` doesn't really need one. It's inside the `.header` and if it gets changed, we throw out those styles.

### A solution (I think)

1. The `.gl-Card` is shared amongst all card types.
2. The `.gl-Header` is _almost_ the same with all cards
3. The `pre code` blocks however, change depending on the card. But not much.
    - This is the only part that is likely to change ...
    - For instance, the `Draw!` card will host an `img`, or an `occlusion` (a special kind of image)
    - This would likely need to be a `#section` or a `.gl-` type that has variations.
4. It says in `GPS` that a `#section` needs to be nested inside a `#page` (in our case, a `#card`) so bear this in mind.
5. In either case with `(3)` and `(4)`, our CSS doesn't really do much at all; simply has a `pre` inside it without any margins. But if we _did_ need to do something with that wrapper, it'd need to be like `(4)` says!
    - For now, as it doesn't really _do_ anything, I think it's safe to have as a `gl-` type.


#### (3), (4), (5) — the original code

> There different _conceptually_, but essentially the exact same CSS code.
> If you were in Elm, it's likely the models would differ.

```html
<!-- The simple card -->
<div class="simple-Sample">
  {{★ Sample (code block)}}
</div>
```

```html
<!-- The Missing! card -->
<div class="missing-KeyPoint"> <!-- There's no CSS for this at all -->
  <div class="missing-KeyPoint_Code">  <!-- Same CSS as `.simple-Sample` -->
    {{cloze:★ Key point (code block)}}
  </div>
</div>
```

### Another (better?) example

With the Simple card, we have:

```html
<div id="front" class="anki-Front">
  <!-- other stuff here -->
    <div class="simple-Sample">
      {{{★ Sample (code block)}}}
    </div>
  </section>
</div>
<section id="answer" class="simple simple-reverse">
  <div class="simple-KeyPoint">
    <div class="simple-KeyPoint_Code">
      {{{★ Key point (code block)}}}
    </div>
    <div class="simple-KeyPoint_Notes">
      {{{★ Key point notes}}}
    </div>
  </div>
  <!-- other stuff here -->
</section>
```

Whereas the Missing! card just needs the exact same field (`{{ }}`) for the front and the reverse card (perhaps `gl-Front` should be a unique `#missing-front` and `#simple-front` page level id?). You can see the similarity in the reverse here:

```html
<!-- This uses the exact same Key Point field on the front
 as it does on the reverse! -->
<div class="missing-KeyPoint">
  <div class="missing-KeyPoint_Code">
    {{cloze:★ Key point (code block)}}
  </div>
  <div class="missing-KeyPoint_Notes">
    {{★ Key point notes}}
  </div>
</div>
```

### The problems with these card tags

When we used to use `{{FrontSide}}` (in the reverse card) where we had a `.anki-Front` tag on front template, this class becomes a child of `gl-Reverse` on the reverse of the card.

Obviously this doesn't make sense as `.anki-Front` has a border in `.nightmode` and it was awkward to remove that border and place it on `.anki-Reverse`.

So perhaps `{{FrontSide}}` is very useful when cards are simple, but when they become more complex cards it might not make sense to use it.

### A good candidate for `#section`

> Both Simple and Missing have `.anki-Reverse` but only one (Simple) requires collapsing two `pre` blocks (because Missing only has one `pre` block!)

```html
.anki-Reverse {
  .simple-Sample pre {
    margin-bottom: 0
  }
```

## Questions

### Is that a `global` element or a `section`?

> **Notice how there’s no nesting here.** The only time you should see nesting in the global CSS file is if you are handling some sort of hover or active properties, or if you have a global style that comprises multiple elements (which, to be fair, does definitely happen). These are all re-useable styles across the entire site.

A section (I think) is supposed to be seen once, and only once. So a `.card` and it's elements should be a `.gl-`obal element?

But does the above quote mean that `.gl-` elements should'nt be nested? Or just that it needs more styles for child elements, which aren't nested?

### Can a `#section` be seen on multiple pages?

> If you are writing styling that applies only to one specific section, **it should be nested under at least 2 levels of ids** — the page id and the section id.

Would you use a `.gl-` for a card, or a `#section` that repeats on multiple card templates? To me that quote seems to say "NO" because it'd be nested under page (or card) specific styles `#CARD-TYPE > #SECTION`.

### If a `.gl-` element is inside a `#section` should it be left alone?

Say for instance you had a `#photos` section, but your child elements are `.gl-photo` with some particular styles, should you create _completely new elements_ if your children are needing to be _slightly_ different than the global design system styles?

## Thoughts

**I still need to decide _where_ to put the css files** as it's quite nice to have them next to their "components", or their "pages". Our `styles/partials` are where all raw HTML level styles go (which could be classed as global), but our `.gl-`obal styles should be treated a bit differently. They live in a specific file or folder for design-system stuff. A bit like Pico CSS.

For instance, typography should live in `style/partials/headings.less` for example. So that's our base. It'd be useful to have a specimen file for these raw styles.

We currently have for example:

```html
 <section class="simple simple-front">
```

With `simple-reverse` on the reverse card. But this is premature optimisation, as they're both exactly the same! I think that follows on `ECSS` style variation; `-active` would be another version of this.



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

### Global styles

> For this I'm still using `ECSS` naming convention of `global-CapitalCase`. Elm lang uses CamelCase too.

Some styles are used in multiple places across a website. For example, your `h1` element might consistently look the same (and it should!), or you might have a `.box` class that wraps a piece of content in an elegant box, or a `.button` that creates a standard button on your site. These are good candidates for global styles. Global styles are great, they give a sense of unity to your site, and should be used frequently. If you’ve seen something like a brand manual or style guide, everything within represents global styles.

Should always be classes, and styles should only be defined as global if and only if they appear on multiple different pages.

I'm going to name these `.gl-` (based on ECSS)

## Page

You should probably have a unique `#id` for a page or view element, and all page-level styles (that are not global elements) should live here. Any CSS that you write that is not global should always be scoped under a page or view’s id.

Ids are intended to be used for elements that only appear once per page — it is invalid html to have more than one of the same id on a page.

## Section

> If you are writing styling that applies only to one specific section, it **should be nested under at least 2 levels of ids — the page id and the section id.** This is the default place you should put code if you aren’t sure, as there is no chance of a scope leak for code here.
>
> If later on you notice that the same style is actually used elsewhere on the same page, you can pull it up to a page-specific style.
>
>And if you notice it being used on other pages, you can pull it up to global.
>
> **If you are copy-pasting blocks of CSS in order to get around this problem you are doing it wrong.**

A non-reusable section or element that is page-specific, and isn't going to be reused across the site.

“a unique section
within a page”. For example, on your about page, you might have a portion that contains an introductory paragraph, then a section that has some of your company’s staff, and a section that has some of the clients you’ve worked with.

since there can only be one of them per page, these are also marked with ids.



Pandoc's being a pain
---------------------

> Pandoc changes `<header>` to `<section>` and I don't know why.
> What's the best way to compile files with imports (but not fuck up the HTML)?

For some reason whitespace inside a `<div>` gives an error when using `-o` with a standalone file. I think it's probably treating it as an indentation code block, rather than plain html.

```terminal
[WARNING] Could not deduce format from file extension .mustache
  Defaulting to markdown
[WARNING] Could not deduce format from file extension .mustache
  Defaulting to html
[WARNING] Div at TESTING.mustache line 1 column 1 unclosed at TESTING.mustache line 25 column 1, closing implicitly.
```
