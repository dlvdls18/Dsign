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

It is recommended to use `classes` with one word value (in short, no space and special characters).

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
text-align-center
font-weight-400
color-green
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



## Creating Style

If you have multiple elements that uses the same style, `Creating Style` is for you.


```html
<button class="color-white background-color-royalblue border-radius-3px border-color-transparent padding-8px font-size-1rem margin-5px">Action 1</button>
<button class="color-white background-color-royalblue border-radius-3px border-color-transparent padding-8px font-size-1rem margin-5px">Action 2</button>
<button class="color-white background-color-royalblue border-radius-3px border-color-transparent padding-8px font-size-1rem margin-5px">Action 3</button>
<button class="color-white background-color-red border-radius-3px border-color-transparent padding-8px font-size-1rem margin-5px">Danger Action</button>
<button class="color-white background-color-green border-radius-3px border-color-transparent padding-8px font-size-1rem margin-5px">Success Action</button>
```


### Usage