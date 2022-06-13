# Dsign

![Dsign](dsign.png)

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

You can also create `Custom Styles`.

```js
Dsign(/* custom styles */);
```

```html
<p color="red" id="myEl">Hello</p>
<script src="path/to/dsign.js"></script>
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

`Custom styles` are like `stylesheet declarations` but it uses classes and attributes.

Comparison using `bootstrap`:


No `Custom Styles`:

```html
<style>

/* I want to create my own form-control without box shadow */
.my-style {
  /* bootstrap form-control */
  display: block;
  width: 100%;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border-radius: 0.375rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
.my-style:focus {
  color: #212529;
  background-color: #fff;
  border-color: #86b7fe;
  outline: 0;
  /*box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);*/
}

</style>

<input class="my-style" placeholder="Click Me!">
```


With `Custom Styles`:

```html
<!-- No <style> or <link>, just <script> -->
<script>
Dsign({
  "my-style": {
    "class": ["form-control"],
    "attr": {
      "box-shadow": "none !important"
    }
  }
});
</script>

<input data-dsign="my-style" placeholder="Click Me!">
```


### Declaring custom styles

With the function `Dsign()`, pass 1 argument (object) to declare custom styles.


```js
"my-style": {
  
},
"my-style2": {
  
},
"my-style3": {
  
}
//...
```

Inside of each styles, add 2 key (optional):

- `class` - _array string_
- `attr` - _object (key:string, value:string)_


```json
"my-style": {
  "class": [],
  "attr": {}
}
```


At `class`, add the classes you want to apply.

```json
"my-style": {
  "class": ["form-control"],
  "attr": {}
}
```


At `attr`, add the key (as argument name) and the value.

**NOTE:** It is recommended to use `JSON` incase the style name contains spaces, special characters, etc.. and the key "class" is token, IDE tools might confuse (e.g. prettier).

```json
"my-style": {
  "class": ["form-control"],
  "attr": {
    "box-shadow": "none !important"
  }
}
```


_Result:_

```txt
class="form-control" box-shadow="none !important"
```



### Using Custom Styles

Add the attribute `data-dsign` and the value is the style name.


```html
<!-- raw -->
<p data-dsign="my-style">Hello!</p>
<!-- result -->
<p data-dsign="my-style" class="form-control" box-shadow="none !important">Hello!</p>
```


**NOTE:** The `class` key overrides all classes, you might need to use attribute.

```html
<script>
  Dsign({
    "my-style": {
      "class": ["form-control"],
      "attr": {
        "box-shadow": "none !important"
      }
    }
  });
</script>
<!-- No underline since the classes overrides -->
<p data-dsign="my-style" class="text-decoration-underline">Hello!</p>
```


Solution: Use attribute instead

```html
<script>
  Dsign({
    "my-style": {
      "class": ["form-control"],
      "attr": {
        "box-shadow": "none !important"
      }
    }
  });
</script>
<p data-dsign="my-style" text-decoration="underline">Hello!</p>
```
