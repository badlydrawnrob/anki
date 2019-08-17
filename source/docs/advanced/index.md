# Advanced installation

> ⚠️ A work in progress, you're on your own for now ...
> ⚠️ Extend Anki themes with `npm`, don't edit directly

You'll know your way around Git and have Homebrew installed.

1. `brew install node`
2. Add this `package.json` to your project folder
3. `npm install`

Create your custom colors below!


#### The "proper" way to highlight code

1. Copy `config.less` and `main.less` to your own repo
2. Copy `colors.less` and any others you'd like to change
2. Change the [css variables](../source/_global/_root.less)
3. Recompile the css with `npm run css`
4. Add to card type as [shown above](#css-variables)


### Create your own card or theme

```text
source
│
└───_global
    │   config.less
    │   main.less
    │
    └───modules
          _root.less
          colors.less
          typography.less
    │
    └───themes
          cards
          components
```

If you're a skilled dev, you'll figure it out :)

- Use the `source/themes/cards/...` as a starting point
- Create your own HTML and [Less](http://lesscss.org)
- Preview with [Mustache](https://www.npmjs.com/package/mustache)
- Compile with `npm run build`