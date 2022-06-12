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

It is recommended to use `classes` with one word value (in short, value without spaces and special characters).

Using `classes` with dashes will not work since it's a special character.

```html
<!-- Bad -->
<p class="transition-background-image 0.2s ease-in-out, color 1s ease-out background-image-linear-gradient(to bottom, red, blue) font-family-var(--my-font)">Hello</p>
<!-- Good -->
<p class="color-orange background-color-black padding-8px font-family-courier">Hello</p>
```

***


`Attributes` are very useful for longer values with special characters.

```html
<p color="orange" background-color="black" padding="8px" font-family="courier">Hello</p>
```

## Format

Every properties are `kebab cases`.

```
text-align
font-weight
color
background-color
```

***

`Attributes`

```
<property>="<value>"
color="red"
font-family="courier"
background-color="teal"
```

***

`Classes`


```
<property>-<value>
color-red
font-family-courier
background-color-teal
```


## Custom Styles


### What is custom styles?

`Custom styles` are very useful for designing multiple tags.

`Custom styles` are like 


Example without `custom styles`:

```html
<p class="color-red font-size-2rem background-color-black border-radius-3px">Hello</p>
```