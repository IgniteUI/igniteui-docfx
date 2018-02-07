---
title: Button Directive
_description: Enhance standard buttons with built-in text, images and more features through Ignite UI for Angular Buttons control.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Buttons components, Angular Buttons controls
---

##Button
<p class="highlight">The Ignite UI for Angular Button directive is intended to be used on any button, span, div, or anchor element to turn it into a fully functional button.</p>
<div class="divider"></div>

### Button Demo

<div class="sample-container" style="height: 1192px">
    <iframe seamless width="100%" height="100%" frameborder="0" src="{environment:demosBaseUrl}/buttons">
</div>
<div class="divider--half"></div>

### Dependencies

The Button Directive is exported as an `NgModule`, thus all you need to do in your application is to import the _IgxButtonModule_
inside your `AppModule`:

```typescript
// app.module.ts

import { IgxButtonModule } from 'igniteui-angular/main';

@NgModule({
    imports: [
        ...
        IgxButtonModule,
        ...
    ]
})
export class AppModule {}
```

### Usage
```html
<target-element igxButton [..options]>Click me</target-element>
```
### Examples

Using `igxButton` to turn a span element into a Ignite UI for Angular styled button.
```html
<span igxButton="raised" igxButtonColor="yellow" igxButtonBackground="#000">Click me</span>
```
Setting a ripple effect on igxButton.
```html
<span igxButton="raised" igxRipple="#e41c77" igxRippleCentered="true">
    <i class="material-icons">edit</i>
</span>
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

### API Summary

In this article we covered the different button types. The Button directive has a few more APIs to explore, which are listed below.

####Inputs
The following inputs are available on the **igxButton** directive:
| Name   |      Type      |  Description |
|:----------|:-------------:|:------|
| `igxButton` |  string | Set the type of igxButton to be used. Default is set to flat. |
| `igxButtonColor` |    string   |   Set the button text color. You can pass any CSS valid color value. |
| `igxButtonBackground` | string | Set the button background color. You can pass any CSS valid color value. |
<div class="divider--half"></div>

<div class="divider"></div>

###Additional Resources

<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
