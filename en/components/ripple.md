---
title: Ripple Directive
_description: With Ignite UI for Angular Ripple directive, developers can define an area which received a ripple animation effect for powerful UI enhancement.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Ripple components, Angular Ripple controls
---

## Ripple
<p class="highlight">With the Ignite UI for Angular Ripple directive, you can create a ripple animation effect to give users feedback when they’re trying to click or touch regions that aren’t configured to receive that input. Use it to define a relatively positioned element to animate in response to a touch or mouse click.</p>
<div class="divider"></div>

### Ripple Demo
<div class="sample-container" style="height: 1192px">
    <iframe seamless width="100%" height="100%" frameborder="0" src="{environment:demosBaseUrl}/buttons">
</div>
<div class="divider--half"></div>

### Usage
```html
<target-element igxRipple [...options]>Click me</target-element>
```
<div class="divider--half"></div>

### Examples
Using `igxRippleTarget` to attach a ripple effect to a specific element inside a
more complex component.
```html
<igx-list>
    <igx-list-item igxRipple igxRipplTarget=".igx-list__item" *ngFor="let item of navItems">
        {{ item.text }}
    </igx-list-item>
</igx-list>
```

Setting a centered ripple effect with custom color.
```html
<span igxButton="raised" igxRipple="#e41c77" igxRippleCentered="true">
    <i class="material-icons">edit</i>
</span>
```

The `igxRipple` uses the Web Animation API and runs natively on
[browsers that support it.](http://caniuse.com/#feat=web-animation)
The `web-animations.min.js` polyfill is [available](https://github.com/web-animations/web-animations-js)
for other browsers.
<div class="divider--half"></div>

### API
| Name   |      Type      |  Description |
|:----------|:-------------:|:------|
| `igxRipple` |  string | The color of the ripple animation |
| `igxRippleTarget` |    string   |   Set the ripple to activate on a child element inside the parent of the `igxRipple`. Accepts a CSS selector. Defaults to the parent of the `igxRipple`.  |
| `igxRippleCentered` | boolean | If true, the ripple animation originates from the center of the element rather than the location of the click event. |
| `igxRippleDuration` | number | The duration of the ripple animation. Defaults to 600 milliseconds. |
<div class="divider--half"></div>
