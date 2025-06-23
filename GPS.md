Moving on from ECSS
===================

<!-- #! Add in links to Tailwind article, GPS article and Portfolio

    The only thing that isn't flexible is the `id="front"` and `id="answer"`
    ids, which aren't quite page-level elements, but allow Anki to "skip"
    to the correct part of the template on the card answer reveal.

    Wherever global styles can be turned into raw HTML and placed in `partials`
    they should be. -->


## Summary

> ⚠️ CSS is a bloody chore. There are things that just don't work as they should
> with the AnkiMobile browser, it's not particularly intuitive to code, and it
> takes AGES to get right. AVOID, AVOID, AVOID, wherever possible. Choose a decent
> CSS framework or Ai tool, use purgeCSS to reduce the file size. Ai isn't quite
> there yet, but for simple things, manual CSSing isn't entirely needed.

### `@media` styles CAN'T be nested still, only `.class` names?

With ECSS you write a unique scoped class for each and every item.

1. **Aim to be explicit in the code's meaning**
    - `<div>`s are no good. Add a class
    - If it's unclear, add good comments
    - There's nothing wrong with adding a class if the element doesn't describe the situation properly, but aim to use raw html as much as possible.
    - `gl-Form p` isn't as good as `.gl-Form .error` of `gl-Form_Error`
    - Should it be scoped? (to global or page)
2. GPS aims to reduce bloat that BEM and ECSS bring.
    - Simplifying class names, using raw html elements to style, reducing repetition of code
3. **Aim to be consistant with your naming conventions**
4. `#fragments` for links can be safely ignored
5. **Similar is not the same, have a solution**
    - I don't think `.gl-Class { #page & { ... } }` is a good idea.
    - It adds complexity where there should be reliable continuity in design
    - When there's more than a few lines of code is different, consider splitting it into a new `.gl` element (rather than a variant. If more than that, make it a unique `#section`.
6. **You'll need to refactor if you move elements around**
    - If you wrap your `p.error` in `<div>` what then?
    - Do you disallow `>` specific css?
7. Always properly scope css to avoid inheritance issues
8. **Never wrap or give a class if it isn't being used?**
9. Flat style css is preferred, but 3 levels deep is ok (nested)
10. Styles that are nested must have demos available (so they're easy to reason about)
11. **Better to declare overrides within the child class, such as `.nightMode` or `@media screen` but these should be few and far between. The latter might need to be used often**
12. Use Tailwind's method of reusing styles wherever possible.
13. `#page` and `#section` elements should be unique. Use `gl-Demo` or `gl-GridHeader` etc if you're reusing styles? Or just repeat yourself?
14. NEVER style a `.gl-` element with a `#page` or `#section`. Always use a `-variant` class on the `.gl-` parent, or create a unique `#section`. TL;DR `gl`obal means it's the same site wide, full stop.

HTML5 tags may still not be enough to guide you in what each element is for. Create a design-system, or make it obvious with comments or classes. Aim to isolate styles. Make rules concrete.

If your `h1` element is always wrapped in a `gl-Card` just style the h1 font and margins that way? If it's not going to be visible outside this context.

A good example is `code` in Anki flashcards. It needs `font-size: inherit` and this kind of style should live in one place for all it's variations. Basically, inherit it's parent styles.

GPS doesn't solve every problem. I'm sure there's more that ECSS is solving that we'll have to consider at some point.




## To Do

> GPS seems to be sometimes a bit messy. Personal opinion. Subjective.
>
> With GPS it seems fuzzy when to use `.gl` styles or `#id` in some situations.
> Or even which should be raw html styles and which needs a class or id.
> **Code order becomes more of a challenge too**, for instance I'm needing the `code` to inherit styles from `h1`, but I want to name styles of `code` altogether for ease of scanning.
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

I'm not sure if the above is correct, or if it should always live with `/partials` raw html. I'm also not super keen on the nested style over the `.gl-Card_HeaderTitle` style. GPS is all about gettin out of the BEM habit however.

## The problems with GPS

> It can take a long time to switch between frameworks (about 2-3 days with Anki), so better to choose wisely and stick with it.
>
> - Is GPS suited to _all_ types of sites?
> - How do we tackle fringe or subjective problems?
> - How does it cope at scale, with a team of devs?


Repetition should be avoided ([see sharing styles](..)) so here's your options:

1. A loop
2. A component
3. Some kind of conditional css (depending on type of card)

### Bye Bye ECSS (almost)

In some ways it's nice to go back to styling raw html elements (which can be wrapped in a `.gl-` class) but I don't personally like overly nested elements. With ECSS you could scan the css file and see very quickly what was part of what:

1. The file lived with it's page or component
2. It has the concept of `.gl-` styles (which in my portfolio is for _true_ global styles, such as `.gl-Nav`, `.gl-Header`, which are site-wide ...
3. Things that affect portions of the website, such as a `/page` template, would be scoped as `.pg-Intro`, and it's child elements `.
    - These live in a folder named `/pages`
    - Page templates live here also.
4. Next we have page-level sections `/pages/manifesto`, which may be _exactly_ the same as other page sections, but we scope them as unique individual pages; `.manifesto`, `.about`, etc.
5. Elements that live inside the `/manifesto` template, _even though_ they're `.gl-` elements as far as GPS are concerned get scoped to the page.
6. `.manifesto-List` and `.manifesto-Photos_WithChildren` or `.manifesto-Button-variant` are all examples of this line of thought. So there's a _lot_ of repetition across the site.

There's some subtly to how we decide things that are `.gl-` elements in ECSS, but less so than GPS it seems to me. If there's likely to be differences, ECSS says treat them as unique components. Our Anki cards in that case scope to `.simple-Card` and `.missing-Card` with all their children. They share nothing.

### Hello GPS (mostly)

> How can we reason about all our elements with ease?

With ECSS you didn't have to wonder what an element was or where it was positioned. With GPS the naming conditions are slightly different:

- Is `.gl-header` part of `.gl-card` or it's own thing? Can I place `.gl-header` anywhere or is it dependant on it's relative position?
- When _do_ I add a class? A `p` tag is a bit weak and doesn't give any semantic information, for instance.
- If we move elements around, this _must_ be reflected in our CSS, unless that element is it's own thing.


### On "uniqueness" and "sameness"

> What happens when a global component _mostly_ shares styles, but has some minor differences. At what point do we split into a new `.gl-` component, or a `-variant`? When do we create a unique `#section`?

A good for instance here is `Missing!` and `Simple` cards are _almost_ identical, but `#answer` wraps differently.

If we wanted to create a `Draw!` card type which uses images, our `.gl-CodeBlock` isn't required anymore (which I named as a separate entity for this reason). How far can we stretch our design system before we have to be unique?

Again, ECSS didn't have this issue as almost EVERYTHING was unique.


## Here's what I know so far:

1. GPS has some nuances that ECSS does not suffer from.
2. Folder names and file names should make sense with our new framework
    - Raw html should be separate from `.gl-` styles and `#page #section`s
3. The `/demo/` folder is equivalent to a font specimen or design system.
    - We should have a base `specimen` file, for defaults styles, as well as a design system for our `.gl-` styles.
    - These should be consistant and the place you go preview any changes.
4. Make sure there's no `.gl` styles that should be raw `/partials` html and vice-versa.
    - As much as is possible should be styled in raw html (base styles)
    - Styles such as `.gl-Card h1 code b` might best live in `/partials` with our specimen styles. Do we always set `h1 code` as `font-size: inherit;` for instance?
    - `#section` and `.gl` have to be carefully considered. A `#section` should be unique. It gets complicated when you have _slight_ differences between two components. You can move it up or down the scope.
    - A `#section` should always be underneath a `#page` (I think)
5. Our `.anki-Front` and `.anki-Reverse` are now `#front` and `#reverse`. They're _sort of_ pages (as they're complete Anki templates) but within `#demo` they're more like sections. **It's a view within a view.** What to do here?
    - Our `#demo > ...` classes are pretty much just grid components to give ourselves some page layout. Do we name them as `.gl-Grid` components or use a page id?
    - ECSS would treat every class as unique, and scoped to it's page/component.
6. <s>Does a `#section` _have_ to be a unique element, only one per site, nested inside a unique`#page`?</s> It seems a `#section` should be unique to, and nested inside, a `#page` level element.
    - A piece of styling that applies to ONE area only should be under at least `#page #section` ids (2 levels).
    - If you had `#photo` and inside `gl-Photo` should the `.gl-` element be left alone? Is it wrong to style it dependant on the `#photo` section? (such as `.gl-Photo { #photo & { .. } }`)
    - What about our "uniqueness" problem, where two pages are similar, but not the same?
    - If we have a slight `-variant` element, do we treat this as a brand new thing?
7. If an element is only seen in one _type_ of card, such as `#missing > .cloze` I'm guessing it should be a uniqe `#section` or `.class`? (in our case, the `.cloze` class is required by Anki).
    - i.e: where should it live?
8. `.gl-` elements should _only_ be nested if they contain multiple children, or for `-hover` and `-active` states.





## Conceptually different, fundamentally the same

> Do we give our "views" in Anki a unique `#page` ID? How do we account for variations in our `.gl-Card` which both `#missing` and `#simple` will share? How do we name the `.gl-Card` `-front` and `-reverse`?

```html
<!-- The simple card had the `.simple-Sample` on
front and the `.simple-KeyPoint` and `.simple-KeyPoint_Code` on reverse. -->
<div class="simple-Sample">
  {{★ Sample (code block)}}
</div>
```

```html
<!-- The Missing! card only has the `.missing-KeyPoint` on the front and reverse. Both-->
<div class="missing-KeyPoint"> <!-- There's no CSS for this at all -->
  <div class="missing-KeyPoint_Code">  <!-- Same CSS as `.simple-Sample` -->
    {{cloze:★ Key point (code block)}}
  </div>
</div>
```

We also used to use `{{FrontSide}}` tag for our `#simple` `.gl-Card` because it's simpler to do that and render our `.gl-Card` `-front` within our `-reverse` template. **This won't work if we want to share styles with Missing!**

Not only do we have the above issue, where they're using different `{{card fields}}` but our Missing! card wraps the entire `-reverse` in an `div#answer` (our Simple template uses `#answer` as a child of `-reverse`).

Here in lies the conundrum.

```html
<!-- Missing! -->
<div id="reverse">
  <div id="answer">
    <!-- Missing! wraps everything in an `#answer`
    so we can skip to the right place on reveal -->
  </div>
</div>
```

```html
<!-- Simple -->
<div id="reverse">
  <section class="gl-Card">
    <!-- We used to use `{{FrontSide}}` here, but we can't do that and share our templates with Missing! -->
    <div id="answer">
      <!-- Simple has it's skip to link further down the page -->
    </div>
  </section>
</div>
```

Luckily we don't actually _style_ `#answer` as it's just an internal link, but it begs the question "what if we want to share a template but it's layout forbids it?". Do we ...

1. Create a new _almost identical_ element (and assume it must be a `#section` as it's used in one place);
2. Create a `.gl-` `-variant` for this one scenario, bearing in mind we may only use it once;
3. Create some `.gl-` bits that are universal, and `#page #section` or `#page .class` for the bits that are unique?
4. Some other hybrid solution?


-----


## Basic overview of GPS

> What GPS is trying to achieve.

Full article and Github repo.

GPS stands for `global`, `page`, `section`. If you're in a team, you need a document to work from, so you should definitely have a design system at least for your `global` styles. ECSS was all about complete isolation, but GPS isn't so strict. It's trying to achieve:

1. Cleaner code (dare I say, beautiful code?)
2. Fewer unwieldy class names
3. Repetition (BEM and ECSS aren't dry; neither is Tailwind!)
4. Just enough isolation (to stop inheritance issues, and what he calls "scope leaks")[^1]
5. The simplicity of frameworks like Pico CSS.


### Global styles

> For this I'm still using `ECSS` naming convention of `global-CapitalCase`. Elm lang uses CamelCase too.

Some styles are used in multiple places across a website. For example, your `h1` element might consistently look the same (and it should!), or you might have a `.box` class that wraps a piece of content in an elegant box, or a `.button` that creates a standard button on your site. These are good candidates for global styles. Global styles are great, they give a sense of unity to your site, and should be used frequently. If you’ve seen something like a brand manual or style guide, everything within represents global styles.

Should always be classes, and styles should only be defined as global if and only if they appear on multiple different pages.

## Page

You should probably have a unique `#id` for a page or view element, and all page-level styles (that are not global elements) should live here. Any CSS that you write that is not global should always be scoped under a page or view’s id.

Ids are intended to be used for elements that only appear once per page — **it is invalid html to have more than one of the same id on a page.** I think it's also invalid to have more than one `#id` on the same element?

## Section

> **A unique section within a page**
>
> If you are writing styling that applies only to one specific section, it **should be nested under at least 2 levels of ids — the page id and the section id.** This is the default place you should put code if you aren’t sure, as there is no chance of a scope leak for code here.
>
> **Pull it up to page-specific style:** if later on you notice that the same style is actually used elsewhere on the same page
>
> **Pull it up to global:** if you notice it being used on other pages!
>
> **If you are copy-pasting blocks of CSS in order to get around this problem you are doing it wrong.**

A non-reusable section or element that is page-specific, and isn't going to be reused across the site. For example, on your about page, you might have a portion that contains an introductory paragraph, then a section that has some of your company’s staff, and a section that has some of the clients you’ve worked with.

Since there can only be one of them per page, these are also marked with ids.


[^1]: By far the largest issue developers have with CSS are what I like to call scope leaks. These happen when you write styles for one specific section of a website, but because of the way you made the selection, the styles also affect elements on other random parts of the site. This is a side effect of CSS being written in the global scope by default.
