---
title: Button Directive
_description: Enhance standard buttons with built-in text, images and more features through Ignite UI for Angular Buttons control.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Buttons components, Angular Buttons controls
---

##Button
<p class="highlight">The Button directive is intended to be used on any button, span, div, or anchor element to turn it into a fully functional button.</p>
<div class="divider"></div>

### Button Demo

Using `igxButton` to turn a span element into a Ignite UI for Angular styled button.
```html
<span igxButton="raised" igxButtonColor="yellow" igxButtonBackground="#000">Click me<span>
```
<div class="sample-container" style="height: 1192px">
    <iframe seamless width="100%" height="100%" frameborder="0" src="https://www.infragistics.com/angular-demos/buttons">
</div>
<div class="divider--half"></div>

### Usage
```html
<target-element igxButton [..options]>Click me</target-element>
```
<div class="divider--half"></div>

### Button Types
| Name   | Description |
|:----------|:-------------:|
| `flat` | The default button type. Transparent background and primary theme color for text. |
| `raised` | As the name implies, this button type uses subtle box-shadow. Primary theme color for background and white for text color. |
| `gradient` | Same as the raised button type. Additionally you can specify a gradient value for background color. |
| `fab` | Floating action button type. Circular with primary theme color for background and white text. |
| `icon` | This is the simplest of button types. Use it whenever you need to use an icon as button. |
| `navbar` | Same as the icon button type, albeit optimized for use with the igx-navbar component. |
<div class="divider--half"></div>

### API
| Name   |      Type      |  Description |
|:----------|:-------------:|:------|
| `igxButton` |  string | Set the type of igxButton to be used. Default is set to flat. |
| `igxButtonColor` |    string   |   Set the button text color. You can pass any CSS valid color value. |
| `igxButtonBackground` | string | Set the button background color. You can pass any CSS valid color value. |
<div class="divider--half"></div>
