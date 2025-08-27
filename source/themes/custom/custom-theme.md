---
title: Testing out a custom theme
css: ../style/main.css
description: Make sure to add `.gl-CodeBlock` for the dark theme
notes: >-
  Remember to wrap your code block like this (with a class):
    ```lang {.gl-CodeBlock} code block
  or the `code block` will be missing some colours!
---

> This helps us build our new theme.
> You can test your colours here.

## Elm lang

```elm {.gl-CodeBlock}
module Main exposing (..)

{-| Here's a block of "documentation" code
That you can use to generate docs in Elm I think -}

import Browser as B exposing (..)

type Msg
  = ToMessage Int

onSlide : (Int -> msg) -> Attribute msg
onSlide toMsg =
  let
    detailUserSlidTo : Decode Int  -- A Json Decoder
    detailUserSlidTo =
      at [ "detail", "userSlidTo" ] int
    msgDecoder : Decoder msg  -- Maps to a Message
    msgDecoder =
      Json.Decode.map ToMsg detailUserSlidTo
  in
  on "slide" msgDecoder  -- Html.Event
at [ "detail", "userSlidTo" ] int  -- <internals> : Decoder Int
    |> Json.Decode.map ToMsg  -- <function> : Decoder Int -> Decoder Msg
    |> on "slide"  -- <function> : Decoder msg -> Html.Attribute ms


-- view --
view : Model -> Html Msg
view model =
  div [ id "choose-size" ]
    -- How can we clean up this section of the code?
    [ viewSizeChooser Small, viewSizeChooser Medium, viewSizeChooser Large ]

viewSizeChooser : ThumbnailSize -> Html Msg  -- #3
viewSizeChooser size =
  span [] [
    label []
    [ input [
        type_ "radio", name "size", onClick (ClickedSize size)  -- Handled by `Msg`
      ] []
    , text (sizeToString size)
    ]
  ]

-- case --
sizeToString : ThumbnailSize -> String
sizeToString size =
  case size of
      Small -> "small"
      Medium -> "med"
      Large -> "large"


-- model --
type ThumbnailSize
  = Small
  | Medium
  | Large
```

## HTML

```html {.gl-CodeBlock}
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Cards</title>
    <link rel="stylesheet" href="../style/main.css">
  </head>
  <body id="demo">
    <section class="wrapper">
      <div class="top">
        <!-- Missing! Card
             =============

            This is a demo file only. See `themes/cards/missing/*.mustache` for
            card type templates to use in Anki. Our demo requires ``
            triple brackets which Anki does not support!

        -->

        <div id="front">
          <section class="gl-Card">
            <header>
              <h1>What type of condition group do these symbols belong to?</h1>
                <h2>Conditions</h2>
            </header>
            <div class="gl-CodeBlock">
              <div class="sourceCode" id="cb2"><pre
class="sourceCode python"><code class="sourceCode python"><span id="cb2-1"><a href="#cb2-1" aria-hidden="true" tabindex="-1"></a>[<span class="dv">0</span>, <span class="dv">20</span>] <span class="co"># <span class="cloze">[ ... ]</span></span></span>
<span id="cb2-2"><a href="#cb2-2" aria-hidden="true" tabindex="-1"></a></span>
<span id="cb2-3"><a href="#cb2-3" aria-hidden="true" tabindex="-1"></a>(<span class="dv">0</span>, <span class="dv">20</span>] <span class="co"># <span class="cloze">[ ... ]</span></span></span>
<span id="cb2-4"><a href="#cb2-4" aria-hidden="true" tabindex="-1"></a></span>
<span id="cb2-5"><a href="#cb2-5" aria-hidden="true" tabindex="-1"></a>(<span class="dv">0</span>, <span class="dv">20</span>) <span class="co"># <span class="cloze">[ ... ]</span></span></span>
<span id="cb2-6"><a href="#cb2-6" aria-hidden="true" tabindex="-1"></a></span>
<span id="cb2-7"><a href="#cb2-7" aria-hidden="true" tabindex="-1"></a>[<span class="dv">0</span>, <span class="dv">20</span>) <span class="co"># <span class="cloze">[ ... ]</span></span></span></code></pre></div> <!-- Special name for .json only -->
            </div>
          </section>
        </div>
        <a class="button" href="#answer">See answer</a>
      </div>
      <div class="bottom">
        <div id="reverse">
          <div id="answer">  <!-- Missing! has it's #answer tag here (wraps the whole of reverse) -->
            <section class="gl-Card">
              <header>
                <h1>What type of condition group do these symbols belong to?</h1>
                  <h2>Conditions</h2>
              </header>
              <div class="gl-Card_KeyPoint">
                <div class="gl-CodeBlock">
                  <div class="sourceCode" id="cb1"><pre
class="sourceCode python"><code class="sourceCode python"><span id="cb1-1"><a href="#cb1-1" aria-hidden="true" tabindex="-1"></a>[<span class="dv">0</span>, <span class="dv">20</span>] <span class="co"># <span class="cloze">>= 0, <= 20</span></span></span>
<span id="cb1-2"><a href="#cb1-2" aria-hidden="true" tabindex="-1"></a></span>
<span id="cb1-3"><a href="#cb1-3" aria-hidden="true" tabindex="-1"></a>(<span class="dv">0</span>, <span class="dv">20</span>] <span class="co"># <span class="cloze">> 0, <= 20</span></span></span>
<span id="cb1-4"><a href="#cb1-4" aria-hidden="true" tabindex="-1"></a></span>
<span id="cb1-5"><a href="#cb1-5" aria-hidden="true" tabindex="-1"></a>(<span class="dv">0</span>, <span class="dv">20</span>) <span class="co"># <span class="cloze">> 0, < 20</span></span></span>
<span id="cb1-6"><a href="#cb1-6" aria-hidden="true" tabindex="-1"></a></span>
<span id="cb1-7"><a href="#cb1-7" aria-hidden="true" tabindex="-1"></a>[<span class="dv">0</span>, <span class="dv">20</span>) <span class="co"># <span class="cloze">>= 0, < 20</span></span></span></code></pre></div> <!-- special name for .json only -->
                </div>
                <div class="gl-Card_KeyPointNotes">
                  <p>An example of <a href="https://www.mathsisfun.com/sets/intervals.html">intervals</a>.</p>
<ul>
<li><code>[</code> symbol means <strong>include</strong> the number.</li>
<li><code>(</code> symbol means <strong>exclude</strong> the number.</li>
</ul>
                  <small>__anki-flashcards-2.13.0::python __anki-themes-2.13.0::demo testing</small>
                </div>
              </div>
                <footer>
                  <p>More <a href="https://www.mathsisfun.com/sets/intervals.html">ways to think about intervals</a></p>
                </footer>
            </section>
          </div>
        </div>
      </div>
    </section>
  </body>
</html>
```

## CSS

```css {.gl-CodeBlock}
/* -----------------------------------------------------------------------------
// Card styles
// =============================================================================
// Base `.Card` wrapper styles and it's children elements.
//
// #! HOW MANY LEVELS DEEP SHOULD THE CHILDREN GO?
//    In GPS he says `.gl-` styles shouldn't be nested? But it seems natural to
//    give a design system children, and if they're not obvious HTML elements,
//    such as `<ul><li>` then they'll need a proper class, no?                */

@import url("my-imported-styles.css");

:root {
    --an-example-colour-variable: #fff;
}

.gl-Card header {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  justify-content: space-evenly;
  align-items: baseline;
  background: var(--color-card-lll);
  border: var(--spacing-px) solid var(--color-card-lll);
  border-bottom: transparent;
  border-top-left-radius: var(--border-radius);
  border-top-right-radius: var(--border-radius);

  .nightMode & {
    background: var(--color-nightmode-background-ddd);
    border: transparent;
  }
}

.gl-Card header h1 {
  flex: 0 0 100%;
  margin: 0 0 var(--spacing-one);
  padding: var(--spacing-half);
  border-bottom: var(--spacing-px) solid var(--color-card-ll);
  background: var(--color-card-llll);

  &:only-child {
    margin-bottom: 0;
  }

  &::before {
    content: '★ ';
  }

  .nightMode & {
    background: var(--color-nightmode-background-dddd);
  }
}

.gl-Card header h2 {
  margin: 0 0 var(--spacing-half);
  padding: var(--spacing-half);
  border-top-left-radius: var(--border-radius);
  border-top-right-radius: var(--border-radius);

  .nightMode & {
    color: var(--color-nightmode-text-light);
  }
}

.gl-Card header p {
  margin: 0 0 var(--spacing-half) 0;
  padding: var(--spacing-half);
}

.gl-Card_KeyPoint {
  /* pass */
}

.gl-Card_KeyPointNotes {
  margin-bottom: var(--spacing);
  padding: var(--spacing) var(--spacing-one);
  background: var(--color-card-lll);
  border-radius: 0 0 var(--border-radius) var(--border-radius);
  font-size: var(--font-size-m);
  text-align: center;

  ul, ol {
    margin-left: var(--spacing-one);
    text-align: left;

    > li {
      margin-left: var(--spacing-one);
    }
  }

  /* {{Tags}} */
  small {
    color: var(--color-card-l);  /* #! This feels wrong to use `-card` var here */
    text-align: center;
    display: block;
  }

  .nightMode & {
    color: var(--color-nightmode-text-light);
    background: var(--color-nightmode-background-d);
  }
}

.gl-Card footer {
  margin-bottom: var(--spacing);
  padding: 0 var(--spacing-one);
  color: var(--color-card-l);
  font-size: var(--font-size-m);
}
```

## Python

```python {.gl-CodeBlock}
# test python (sample from offlineimap)

CONSTANT = "this is a string"

d = {
  "first_name": "Keanu",
  "last_name": "Reeves"
}

for key, value in d.items():
  print(f"{key} = {value}")

class ExitNotifyThread(Thread):
    """This class is designed to alert a "monitor" to the fact that a thread has
    exited and to provide for the ability for it to find out why."""
    def run(self):
        global exitthreads, profiledir
        self.threadid = thread.get_ident()
        try:
            if not profiledir:          # normal case
                Thread.run(self)
            else:
                try:
                    import cProfile as profile
                except ImportError:
                    import profile
                prof = profile.Profile()
                try:
                    prof = prof.runctx("Thread.run(self)", globals(), locals())
                except SystemExit:
                    pass
                prof.dump_stats( \
                            profiledir + "/" + str(self.threadid) + "_" + \
                            self.getName() + ".prof")
        except:
            self.setExitCause('EXCEPTION')
            if sys:
                self.setExitException(sys.exc_info()[1])
                tb = traceback.format_exc()
                self.setExitStackTrace(tb)
        else:
            self.setExitCause('NORMAL')
        if not hasattr(self, 'exitmessage'):
            self.setExitMessage(None)

        if exitthreads:
            exitthreads.put(self, True)

    def setExitCause(self, cause):
        self.exitcause = cause
    def getExitCause(self):
        """Returns the cause of the exit, one of:
        'EXCEPTION' -- the thread aborted because of an exception
        'NORMAL' -- normal termination."""
        return self.exitcause
    def setExitException(self, exc):
        self.exitexception = exc
    def getExitException(self):
        """If getExitCause() is 'EXCEPTION', holds the value from
        sys.exc_info()[1] for this exception."""
        return self.exitexception
    def setExitStackTrace(self, st):
        self.exitstacktrace = st
    def getExitStackTrace(self):
        """If getExitCause() is 'EXCEPTION', returns a string representing
        the stack trace for this exception."""
        return self.exitstacktrace
    def setExitMessage(self, msg):
        """Sets the exit message to be fetched by a subsequent call to
        getExitMessage.  This message may be any object or type except
        None."""
        self.exitmessage = msg
    def getExitMessage(self):
        """For any exit cause, returns the message previously set by
        a call to setExitMessage(), or None if there was no such message
        set."""
        return self.exitmessage
```


## Terminal

```elm {.gl-CodeBlock}
type alias Model
  { dieFace : Int }
```
```terminal {.gl-CodeBlock}
> Model
<function> : Int -> Model
```
```elm {.gl-CodeBlock}
Model 1  -- { dieFace = 1 } : Model
```
