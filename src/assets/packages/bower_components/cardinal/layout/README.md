# Cardinal Layout

The `layout/` directory is where all the style tools for creating UI layouts exist. These tools work in tandem with some of Cardinal’s utilities (e.g. widths) to make it easy for front-end developers to whip up fast, flexible UI layouts.

# Table of Contents

- [Overview](#overview)
- [Included Layout Tools](#included-layout-tools)
  - [Wrappers](#wrappers)
  - [Grids](#grids)

# Overview

Using a combination of `.wrapper` and `.grid` elements, you can create some very interesting and complex layouts. Each of these tools also include modifier classes to change their behavior, even across different device sizes using prefixed class names like `.lg-2/3`, which sets the width of the element to 2/3, or 66.667% for devices “large” and up.

# Included Layout Tools

## Wrappers

[View Demo](http://codepen.io/cbracco/pen/eNZNML)

The `.wrapper` class is a common CSS layout tool that sets a maximum width and centers the element inside its parent.

### Usage

```
<div class="wrapper">Hello World!</div>
```

It also includes a few modifier classes to force wrappers to either sit flush with its parent, or remove the maximum width, like so:

```
<div class="wrapper wrapper-flush">I am 100% the width of my parent!</div>
<div class="wrapper wrapper-full-bleed">I don’t have a maximum width or horizontal centering!</div>
```

## Grids

[View Demo](http://codepen.io/cbracco/pen/LVNVdw)

The `.grid` classes are used to create both simple and complex UI layouts. There are several modifier classes available for changing the order and alignment of `.grid-item` elements across various device sizes.

`.grid-item` classes are used alongside the [width utility classes](https://github.com/cbracco/cardinal/blob/master/utilities/widths.less) to help create layouts.

### Usage

```
<div class="grid">
  <div class="grid-item 1/12">1</div>
  <div class="grid-item 1/12">2</div>
  <div class="grid-item 1/12">3</div>
  <div class="grid-item 1/12">4</div>
  <div class="grid-item 1/12">5</div>
  <div class="grid-item 1/12">6</div>
  <div class="grid-item 1/12">7</div>
  <div class="grid-item 1/12">8</div>
  <div class="grid-item 1/12">9</div>
  <div class="grid-item 1/12">10</div>
  <div class="grid-item 1/12">11</div>
  <div class="grid-item 1/12">12</div>
</div>
```
