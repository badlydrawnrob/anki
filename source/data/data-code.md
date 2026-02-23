<!-- Simple code compiler ====================================================

     Useful for converting `code blocks` or other field data:

     1. Enter a Markdown fenced code block (for example)
     2. `npm run data-code`
     3. View the file in `/build/data/data-code.html`

========================================================================== -->

```elm
-- View ------------------------

view model =
  div [ id "thumbnails" ]
    -- Loop through `List Photo`
    (List.map
      -- Apply with one argument
      (viewThumbnail model.selectedUrl)
      model.photos
    )

-- Helper ----------------------

viewThumbnail selectedUrl photo
  img [ src (urlPrefix ++ photo.url)
      , classList
        [ ("selected"
          , selectedUrl == thumb.url
          )
        ]
  ] []
```

