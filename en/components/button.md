---
title: Button Directive
_description: Enhance standard buttons with built-in text, images and more features through Ignite UI for Angular Buttons control.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Buttons components, Angular Buttons controls
---

## Button

The Button directive within Ignite UI for Angular is intended to be used on any button, span, div, or anchor element to turn it into a fully functional button. 

### Button Demo

<div class="sample-container" style="height: 436px">
    <iframe id="buttons-sample-iframe" seamless width="100%" height="100%" frameborder="0" src="{environment:demosBaseUrl}/data-entries/buttons-sample-1" onload="onSampleIframeContentLoaded(this);">
</div>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="buttons-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>

### Dependencies

The Button Directive is exported as an `NgModule`, thus all you need to do in your application is to import the [`IgxButtonModule`]({environment:angularApiUrl}/classes/igxbuttonmodule.html) inside your `AppModule`:

```typescript
// app.module.ts

import { IgxButtonModule } from 'igniteui-angular';

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

Setting a simple [`igxButton`]({environment:angularApiUrl}/classes/igxbuttondirective.html). Note that if you do not choose a type, by default it will be set to `flat`.

```html
<button igxButton="flat">Flat</button>
```

Result:
<div class="sample-container" style="height: 48px">
    <iframe seamless width="100%" height="100%" frameborder="0" src="{environment:demosBaseUrl}/data-entries/buttons-sample-2">
</div>

You can add a Ripple effect. And also set its color `igxRipple="blue"`.

```html
<button igxButton="flat" igxRipple>Flat</button>
```

Default ripple color. Custom ripple color:
<div class="sample-container" style="height: 48px">
    <iframe seamless width="100%" height="100%" frameborder="0" src="{environment:demosBaseUrl}/data-entries/buttons-sample-3">
</div>

Using [`igxButton`]({environment:angularApiUrl}/classes/igxbuttondirective.html) to turn a `span` element into a Ignite UI for Angular styled button.

```html
<span igxButton="raised" igxButtonColor="yellow" igxButtonBackground="#000" igxRipple="yellow">Click me</span>
```

The span now looks like:
<div class="sample-container" style="height: 54px">
    <iframe seamless width="100%" height="100%" frameborder="0" src="{environment:demosBaseUrl}/data-entries/buttons-sample-4">
</div>

You can create a rased button.

```html
<button igxButton="raised" igxRipple="white">Raised</button>
```

<div class="sample-container" style="height: 54px">
    <iframe seamless width="100%" height="100%" frameborder="0" src="{environment:demosBaseUrl}/data-entries/buttons-sample-5">
</div>

A floating action button and use an icon to display:

```html
<button igxButton="fab" igxButtonColor="#FBB13C" igxButtonBackground="#340068" igxRipple="#FBB13C">
  <igx-icon fontSet="material">edit</igx-icon>
</button>
```
<div class="sample-container" style="height: 74px">
    <iframe seamless width="100%" height="100%" frameborder="0" src="{environment:demosBaseUrl}/data-entries/buttons-sample-6">
</div>

Or use icons as buttons:

```html
<button igxButton="icon" igxRipple igxRippleCentered="true">
  <igx-icon fontSet="material">search</igx-icon>
</button>
```
```html
<button igxButton="icon" igxRipple igxButtonColor="#E41C77" igxRippleCentered="true">
  <igx-icon fontSet="material">favorite</igx-icon>
</button>
```
Icon results:
<div class="sample-container" style="height: 54px">
    <iframe seamless width="100%" height="100%" frameborder="0" src="{environment:demosBaseUrl}/data-entries/buttons-sample-7">
</div>

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


### API References
<div class="divider--half"></div>

* [IgxButtonDirective]({environment:angularApiUrl}/classes/igxbuttondirective.html)
* [IgxButton Styles]({environment:sassApiUrl}/index.html#function-igx-button-theme)
* [IgxRippleDirective]({environment:angularApiUrl}/classes/igxrippledirective.html)

### Additional Resources
<div class="divider--half"></div>

Our community is active and always welcoming to new ideas.

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
