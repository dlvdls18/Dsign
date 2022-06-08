# Dsign
HTML CSS Design with Classes and Attributes

```html
<!-- Classes -->
<p class="color-red fontSize-2rem cursor-pointer">Hello</p>

<!-- Attributes -->
<p color="red" font-size="2rem" cursor="pointer">Hello</p>
```

# Installation

```html
<script src="https://cdn.jsdelivr.net/gh/dlvdls18/Dsign@main/src/dsign.js"></script>
```

# Usage

Call the function `Dsign` to update the style of classes and attributes. (called once by default)

```js
Dsign();
```

```html
<p color="red" id="myEl">Hello</p>
<script>
myEl.setAttribute("color", "orange");
// Color doesn't change

Dsign();
// Color changed
</script>
```

## Applying Styles

`Classes` can use for neat and clean style. however, it doesn't support special characters such as space, hashtags and more.

It is recommended to use `classes` with one word value (in short, no space and special characters).

Using `classes` with dashes will not work since it's a special character.

```html
<!-- Format -->
<!-- <style>-<value> -->
<!-- color-orange -->

<!-- Bad -->
<p class="transition-background-image 0.2s ease-in-out, color 1s ease-out backgroundImage-linear-gradient(to bottom, red, blue) fontFamily-var(--my-font)">Hello</p>
<!-- Good -->
<p class="color-orange backgroundColor-black padding-8px fontFamily-courier">Hello</p>
```

***


`Attributes` are very useful for longer values with special characters.

```html
<!-- Format -->
<!-- <style>="<value>" -->
<!-- color="orange" -->

<p color="orange" background-color="black" padding="8px" font-family="courier">Hello</p>
```

