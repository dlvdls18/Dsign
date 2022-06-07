# Dsign
HTML CSS Design with Classes and Attributes

```html
<!-- Classes -->
<p class="color-red font-size-2rem cursor-pointer">Hello</p>

<!-- Attributes -->
<p color="red" font-size="2rem" cursor="pointer">Hello</p>
```

# Installation

```html
<script src="https://cdn.jsdelivr.com/gh/dlvdls18/Dsign@main/src/dsign.js"></script>
```

# Usage

Call the function `Dsign` to update the style of classes and attributes. (called once by default)

```js
Dsign();
// undefined
```

## Difference between Classes and Attributes

`Classes` can use for neat and clean style. however, it doesn't support special characters such as space, hashtags and more.

It is recommended to use `classes` with one word value (in short, no space and special characters).

Using `classes` with dashes will not work since it's a special character.

```html
<!-- Format -->
<!-- <style>-<value> -->
<!-- color-orange -->

<!-- Bad -->
<p class="transition-background-image 0.2s ease-in-out, color 1s ease-out background-image-linear-gradient(to bottom, red, blue) font-family-var(--my-font)">Hello</p>
<!-- Good -->
<p class="color-orange background-color-black padding-8px font-family-courier">Hello</p>
```

***


`Attributes` are very useful for longer and special character supported values.

```html
<!-- Format -->
<!-- <style>="<value>" -->
<!-- color="orange" -->

<p color="orange" background-color="black" padding="8px" font-family="courier">Hello</p>
```

