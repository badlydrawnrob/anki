<!-- Fenced code block compiler ================================================

     Useful for ```fenced code blocks```

     1. Write a fenced code block (Markdown)
     2. In the terminal: `npm run data-code`
     3. View `/build/data/code.html` in your editor

========================================================================== -->

```racket
(require 2htdp/image)

; Here's the constants

(define WIDTH 180)
(define HEIGHT 180)
(define MIDDLE (/ WIDTH 2))

(define BACKGROUND
  (rectangle WIDTH HEIGHT "solid" "black"))

(define ROCKET
  (bitmap/file "rocket.png"))

(define MOON
  (circle 40 "solid" "white"))

; Let's make our image!

(place-image
  ROCKET MIDDLE MIDDLE
    (place-image
      MOON 10 10
        BACKGROUND))
```
