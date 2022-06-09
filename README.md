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

## Custom Design

**Classes**

This is an example without `custom design` as `classes`:

```html
<p class="color-white text-align-center margin-5px background-red border-radius-3px">Hello</p>
<p class="color-white text-align-center margin-5px background-red border-radius-3px">Hello</p>
<p class="color-white text-align-center margin-5px background-red border-radius-3px">Hello</p>
<p class="color-white text-align-center margin-5px background-red border-radius-3px">Hello</p>
<p class="color-white text-align-center margin-5px background-red border-radius-3px">Hello</p>
```

After declaring `custom design`:

```html
<dsign name="my-text">color-white text-align-center margin-5px background-red border-radius-3px</dsign>

<p data-dsign="my-text">Hello</p>
<p data-dsign="my-text">Hello</p>
<p data-dsign="my-text">Hello</p>
<p data-dsign="my-text">Hello</p>
<p data-dsign="my-text">Hello</p>
```

***

**Attributes**

This is an example without `custom design` as `attributes`:

```html
<p color="white" text-align="center" margin="5px" background="red" border-radius="3px">Hello</p>
<p color="white" text-align="center" margin="5px" background="red" border-radius="3px">Hello</p>
<p color="white" text-align="center" margin="5px" background="red" border-radius="3px">Hello</p>
<p color="white" text-align="center" margin="5px" background="red" border-radius="3px">Hello</p>
<p color="white" text-align="center" margin="5px" background="red" border-radius="3px">Hello</p>
```

After declaring `custom design`:

```html
<dsign name="my-text" color="white" text-align="center" margin="5px" background="red" border-radius="3px"></dsign>

<p data-dsign="my-text">Hello</p>
<p data-dsign="my-text">Hello</p>
<p data-dsign="my-text">Hello</p>
<p data-dsign="my-text">Hello</p>
<p data-dsign="my-text">Hello</p>
```


### Documentation

Add a `dsign` tag to declare new custom design.

Add an attribute `name` for the design name.

```html
<dsign name="my-design"></dsign>
```

#### Classes

Set the `dsign` tag's `innerText` to classes (space seperated).

```html
<dsign name="my-design">color-white text-align-center margin-5px background-red border-radius-3px</dsign>
```


#### Attributes

Set the `dsign` tag's `innerText` to empty text.

```html
<dsign name="my-design"></dsign>
```

Add attributes you want to apply when using the design.

**NOTE:** If the `dsign` tag's `innerText` is not empty, the style will declared as `class`


```html
<dsign name="my-design" color="white" text-align="center" margin="5px" background="red" border-radius="3px"></dsign>
```


##### Ignoring Attributes

To ignore an attribute, add an argument `data-ignore`.

Set the value to attributes you want to ignore (space seperated).

**NOTE:** Argument `style` is ignored by default

```html
<dsign name="my-design" data-hello="Hello, " data-world="World!" color="white" text-align="center" margin="5px" background="red" border-radius="3px" data-ignore="data-hello data-world color"></dsign>
```

### Usage

To use the custom style, add the attribute `data-dsign`.

Set the attribute value to the custom design name.

```html
<p data-dsign="my-design">Hello</p>
```
