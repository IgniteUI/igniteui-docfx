---
title: Icon Component
_description: Developers can unify and use various icon and font sets interchangeably with custom colors and more with Ignite UI for Angular Icon component. 
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Icon components, Angular Icon controls
---

##Icon
<p class="highlight">The Ignite UI for Angular Icon component unifies icon/font sets so developers can use them interchangeably and add material icons to markup. The component supports custom colors. Icons can be set as inactive.</p>
<div class="divider"></div>

### Usage

```html
<igx-icon fontSet="material" name="home" color="magenta" isActive="false"></igx-icon>
```

You can set the `fontSet` to `fontSet="material"` to select the material icons set (default). _More to be added later_.

You can set the icon by providing its name from the official [material icons set](https://material.io/icons/) `name="home"`.

You can set the icon color by providing a string value with the color `color="#474747"`

You can attach set the icon to active/inactive by providing setting `isActive="true"` to true or false (default is true).

You can access all properties of the button component with the following attributes:

`fontSet`

`name`

`color`

`isActive`


**Setters**
You can programmatically set all of the icon properties with the following icon setters: 

`fontSet(fontFamily: string)` sets the icon font family
`color(color: string)` sets the icon `color`
`name(icon: string)` sets the icon name
`isActive(state: boolean)` sets the icon style to inactive if set to false

**Getters**
You can programmatically get all of the icon properties with the following icon getters: 

`getFontSet()` returns the icon font family
`getIconColor()` returns the icon color
`getIconName()` returns the icon name
`getActive()` returns the icon active state
<div class="divider"></div>
