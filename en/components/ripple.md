---
title: Ripple Directive
_description: With Ignite UI for Angular Ripple directive, developers can define an area which received a ripple animation effect for powerful UI enhancement.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Ripple components, Angular Ripple controls
---

# Ripple
<p class="highlight">The Ignite UI for Angular Ripple component creates an animation in response to a touch or a mouse click.</p>

## Angular Ripple Example
<div class="divider--half"></div>
<div class="sample-container loading" style="height: 100px">
    <iframe seamless="" width="100%" height="100%" frameborder="0" data-src="{environment:demosBaseUrl}/interactions/ripple-sample-5" class="lazyload" alt="Angular Ripple Example">
</iframe></div>
<p style="margin: 0;padding-top: 0.5rem">Like this sample? Get access to our complete Angular toolkit and start building your own apps in minutes. <a class="no-external-icon mchNoDecorate trackCTA" target="_blank" href="https://www.infragistics.com/products/ignite-ui-angular/download" data-xd-ga-action="Download" data-xd-ga-label="Ignite UI for Angular">Download it for free.</a></p>
<div class="divider--half"></div>

## Usage

### First Steps

The Ripple Directive is exported as an `NgModule`, thus all you need to do in your application is to import the `IgxRippleModule` inside your **app.module.ts** file:

```typescript
// app.module.ts

import { IgxRippleModule } from 'igniteui-angular';

@NgModule({
    imports: [
        ...
        IgxRippleModule,
        ...
    ]
})
export class AppModule {}
```

> [!WARNING]
> The [`igxRipple`]({environment:angularApiUrl}/classes/igxrippledirective.html) uses the Web Animation API and runs natively on [browsers that support it.](http://caniuse.com/#feat=web-animation)
The `web-animations.min.js` polyfill is [available](https://github.com/web-animations/web-animations-js)
for other browsers.


### Adding Ripple Effect

Use the `igxRipple` directive to add a ripple effect to the specified element:

```html
<button igxButton="raised" igxRipple>Click Me</button>
```

## Examples 

### Custom Color

You can easily change the default ripple color using the `igxRipple`:

```html
<button igxButton="raised" igxRipple="white">White</button>
```
<div class="sample-container loading" style="height: 100px">
    <iframe seamless width="100%" height="100%" frameborder="0" data-src="{environment:demosBaseUrl}/interactions/ripple-sample-6" class="lazyload">
</iframe></div>

### Centered Ripple Effect 
By default, the ripple effect starts from the position of the click event. You can change this behavior using the [`igxRippleCentered`]({environment:angularApiUrl}/classes/igxrippledirective.html#centered) property and setting the center of the element as origin.

```html
<button igxButton="raised" igxRipple="white" [igxRippleCentered]="true">Centered</button>
```
<div class="sample-container loading" style="height: 100px">
    <iframe seamless width="100%" height="100%" frameborder="0" data-src="{environment:demosBaseUrl}/interactions/ripple-sample-3" class="lazyload">
</iframe></div>

### Ripple Duration
We can use the [`igxRippleDuration`]({environment:angularApiUrl}/classes/igxrippledirective.html#rippleduration) property to change the duration of the ripple animation, which, by default, is set to 600 milliseconds.

```html
<button igxButton="raised" igxRipple [igxRippleDuration]="2000">Click Me</button>
```
<div class="sample-container loading" style="height: 100px">
    <iframe seamless width="100%" height="100%" frameborder="0" data-src="{environment:demosBaseUrl}/interactions/ripple-sample-4" class="lazyload">
</iframe></div>

### Ripple Target
Use the [`igxRippleTarget`]({environment:angularApiUrl}/classes/igxrippledirective.html#rippletarget) property to attach a ripple effect to a specific element inside a parent element.

```html
<div class="parent" igxRipple="white" igxRippleTarget=".child" [igxRippleCentered]="true">
    ...
    <button class="sample-button child" igxButton="raised">Read More</button>
</div>
```
Notice that no matter whether you click on the parent or the child element, the ripple effect will only appear on the button.

<div class="sample-container loading" style="height: 350px">
    <iframe seamless width="100%" height="100%" frameborder="0" data-src="{environment:demosBaseUrl}/interactions/ripple-sample-2" class="lazyload">
</iframe></div>

> [!NOTE]
> The child element, which you want to target with the `igxRippleTarget` property, has to be relatively positioned.


## Styling

First, in order to use the functions exposed by the theme engine, we need to import the `index` file, where all styling functions and mixins are located, into our style file: 
      
```scss
@import '~igniteui-angular/lib/core/styles/themes/index'
```   

You can easily create a new theme, that extends the [`igx-ripple-theme`]({environment:sassApiUrl}/index.html#function-igx-ripple-theme) and accepts the parameters, required to customize the ripple as desired.

```scss
$custom-ripple-theme: igx-ripple-theme(
  $color: #217346
);
```  

### Using CSS variables 

The next step is to pass the custom ripple theme:

```scss
@include igx-css-vars($custom-ripple-theme);
```

### Using Component Theme Overrides

In order to style components for older browsers, like Internet Explorer 11, we have to use a different approach, since it doesn't support CSS variables. 

If the component is using the [`Emulated`](themes/component-themes.md#view-encapsulation) ViewEncapsulation, it is necessary to `penetrate` this encapsulation using `::ng-deep`. To prevent the custom theme to leak into other components, be sure to include the `:host` selector before `::ng-deep`:

```scss
:host {
    ::ng-deep {
        // Pass the custom ripple theme to the `igx-ripple` mixin
        @include igx-ripple($custom-ripple-theme);
    }
}
```

>[!NOTE]
  > A color that is set using the `igxRiple` directive, would take precedence from the one, set within a custom theme.  

### Demo
<div class="sample-container loading" style="height:200px">
    <iframe id="ripple-styling-sample-iframe" data-src='{environment:demosBaseUrl}/interactions/ripple-styling' width="100%" height="100%" seamless frameBorder="0" class="lazyload no-theming" alt="Angular Ripple Example"></iframe>
</div>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="ripple-styling-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on codesandbox</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="ripple-styling-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>


## API References
<div class="divider--half"></div>

* [IgxRippleDirective]({environment:angularApiUrl}/classes/igxrippledirective.html)
* [IgxRipple Styles]({environment:sassApiUrl}/index.html#function-igx-ripple-theme)

## Additional Resources
<div class="divider--half"></div>

Our community is active and always welcoming to new ideas.

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
