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
<!-- Bad -->
<p class="color-orange background-color-black padding-8px font-family-">Hello</p>
```


Example of usage for `classes`:

```html
<p class="color-orange background-color-black padding-8px font-family-courier">Hello</p>
```