---
title: Ripple Directive
_description: With Ignite UI for Angular Ripple directive, developers can define an area which received a ripple animation effect for powerful UI enhancement.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Ripple components, Angular Ripple controls
---

## Ripple
<p class="highlight">With the Ignite UI for Angular Ripple directive, you can create a ripple animation effect to give users feedback when they’re trying to click or touch regions that aren’t configured to receive that input. Set this directive to a relatively positioned element to create an animation in response to a touch or a mouse click.</p>
<div class="divider"></div>

### Ripple Demo
<div class="sample-container loading" style="height: 558px">
    <iframe id="ripple-sample-1-iframe" seamless width="100%" height="100%" frameborder="0" src="{environment:demosBaseUrl}/ripple-sample-1" onload="onSampleIframeContentLoaded(this);">
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="ripple-sample-1-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>

### Dependencies

The Ripple Directive is exported as an `NgModule`, thus all you need to do in your application is to import the _IgxRippleModule_
inside your `AppModule`:

```typescript
// app.module.ts

import { IgxRippleModule } from 'igniteui-angular/main';

@NgModule({
    imports: [
        ...
        IgxRippleModule,
        ...
    ]
})
export class AppModule {}
```
### Usage
#### Adding Ripple Effect

Use `igxRipple` to add a ripple effect to the specified element. It will add a ripple effect with the default color.
```html
<button igxButton="raised" igxRipple>Click Me</button>
```
<div class="sample-container loading" style="height: 68px">
    <iframe seamless width="100%" height="100%" frameborder="0" src="{environment:demosBaseUrl}/ripple-sample-5" onload="onSampleIframeContentLoaded(this);">
</div>

#### Custom Color

You can set the ripple color using `igxRipple`. In this sample, we set white color to the ripple.
```html
<button igxButton="raised" igxRipple="white">White</button>
```
<div class="sample-container loading" style="height: 68px">
    <iframe seamless width="100%" height="100%" frameborder="0" src="{environment:demosBaseUrl}/ripple-sample-6" onload="onSampleIframeContentLoaded(this);">
</div>

#### Centered Ripple Effect 
The ripple effect starts from the position of the click event. You can change this behavior using `igxRippleCentered` and setting the center of the element as origin.
```html
<button igxButton="raised" igxRipple="white" igxRippleCentered="true">Centered</button>
```
<div class="sample-container loading" style="height: 68px">
    <iframe seamless width="100%" height="100%" frameborder="0" src="{environment:demosBaseUrl}/ripple-sample-3" onload="onSampleIframeContentLoaded(this);">
</div>

#### Ripple Target
Use `igxRippleTarget` to attach a ripple effect to a specific element inside a parent element.
```html
<div class="parent-div" igxRipple="blue" igxRippleTarget=".child-div" igxRippleCentered="true">
  Parent Div
  <div class="child-div">
    Child Div
  </div>
</div>
```
Notice that if you click on the parent or the child divs the ripple effect will only appear inside the child div. The child div position has to be set to **relative**.
<div class="sample-container loading" style="height: 168px">
    <iframe seamless width="100%" height="100%" frameborder="0" src="{environment:demosBaseUrl}/ripple-sample-2" onload="onSampleIframeContentLoaded(this);">
</div>

#### Ripple Duration
Use `igxRippleDuration` to change the duration of the ripple animation. The default is 600 miliseconds. In this sample the `igxRippleDuration` is set to 2000 miliseconds.
```html
<div class="ripple-sample dark" [igxRippleDuration]=2000 igxRipple="white">
  <p style="margin-bottom:0">Long Ripple Animation</p>
</div>
```
<div class="sample-container loading" style="height: 148px">
    <iframe seamless width="100%" height="100%" frameborder="0" src="{environment:demosBaseUrl}/ripple-sample-4" onload="onSampleIframeContentLoaded(this);">
</div>

The `igxRipple` uses the Web Animation API and runs natively on
[browsers that support it.](http://caniuse.com/#feat=web-animation)
The `web-animations.min.js` polyfill is [available](https://github.com/web-animations/web-animations-js)
for other browsers.

> [!NOTE]
> Use a relatively positioned element for the ripple animation. You can also use `igxRippleTarget` to target a child element.
<div class="divider--half"></div>

### API
| Name   |      Type      |  Description |
|:----------|:-------------:|:------|
| `igxRipple` |  string | The color of the ripple animation |
| `igxRippleTarget` |    string   |   Set the ripple to activate on a child element inside the parent of the `igxRipple`. Accepts a CSS selector. Defaults to the parent of the `igxRipple`.  |
| `igxRippleCentered` | boolean | If true, the ripple animation originates from the center of the element rather than the location of the click event. |
| `igxRippleDuration` | number | The duration of the ripple animation. Defaults to 600 milliseconds. |
<div class="divider--half"></div>

###Additional Resources

<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
