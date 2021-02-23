---
title: Button Directive
_description: Enhance standard buttons with built-in text, images and more features through Ignite UI for Angular Buttons control.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Buttons components, Angular Buttons controls
---

# Button
<p class="highlight">The Ignite UI for Angular Button directive is intended to turn any button, span, div, or anchor element into a fully functional button.</p>

## Angular Button Example
<div class="divider--half"></div>
<div class="sample-container loading" style="height: 150px">
    <iframe id="buttons-sample-iframe" seamless="" width="100%" height="100%" frameborder="0" src="{environment:demosBaseUrl}/data-entries/buttons-sample-1" onload="onSampleIframeContentLoaded(this);" alt="Angular Button Example">
</iframe></div>
<p style="margin: 0;padding-top: 0.5rem">Like this sample? Get access to our complete Angular toolkit and start building your own apps in minutes. <a class="no-external-icon mchNoDecorate trackCTA" target="_blank" href="https://www.infragistics.com/products/ignite-ui-angular/download" data-xd-ga-action="Download" data-xd-ga-label="Ignite UI for Angular">Download it for free.</a></p>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="buttons-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on codesandbox</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="buttons-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>

## Usage

The Button Directive is exported as an `NgModule`, thus all you need to do in your application is to import the `IgxButtonModule` inside your `AppModule`:

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

## Button Types

### Flat Button

Use the [`igxButton`]({environment:angularApiUrl}/classes/igxbuttondirective.html) directive to add a simple flat button in your component template. Note that if you do not choose a type, by default it will be set to `flat`.

```html
<button igxButton="flat">Flat</button>
```

<div class="sample-container loading" style="height: 70px">
    <iframe class="lazyload" seamless width="100%" height="100%" frameborder="0" data-src="{environment:demosBaseUrl}/data-entries/buttons-sample-2">
</iframe></div>

### Raised Button 

All you have to do to create a raised button is to change the value of the `igxButton` property:

```html
<button igxButton="raised">Raised</button>
```

<div class="sample-container loading" style="height: 70px">
    <iframe class="lazyload" seamless width="100%" height="100%" frameborder="0" data-src="{environment:demosBaseUrl}/data-entries/buttons-sample-5">
</iframe></div>

### Outlined Button

Analogically, we can switch to outlined type:

```html
<button igxButton="outlined">Outlined</button>
```

<div class="sample-container loading" style="height: 70px">
    <iframe class="lazyload" seamless width="100%" height="100%" frameborder="0" data-src="{environment:demosBaseUrl}/data-entries/buttons-sample-8">
</iframe></div>

### Icon Button

We can also use icons as buttons:

```html
<button igxButton="icon">
  <igx-icon fontSet="material">favorite</igx-icon>
</button>
```

<div class="sample-container loading" style="height: 70px">
    <iframe class="lazyload" seamless width="100%" height="100%" frameborder="0" data-src="{environment:demosBaseUrl}/data-entries/buttons-sample-7">
</iframe></div>

### Floating Action Button

We can create a floating action button and use an icon to display:

```html
<button igxButton="fab">
  <igx-icon fontSet="material">edit</igx-icon>
</button>
```

To create an extended FAB, you can add any element prior to the `igx-icon`:

```html
<button class="btn" igxButton="fab">
    <span>like</span>
    <igx-icon fontSet="material">favorite</igx-icon>
</button>
```

>[!NOTE]
>To get the extended FAB text styled properly, use `<span>`, `<div>` or `<p>` tags.

<div class="sample-container loading" style="height: 100px">
    <iframe class="lazyload" seamless width="100%" height="100%" frameborder="0" data-src="{environment:demosBaseUrl}/data-entries/buttons-sample-6">
</iframe></div>

## Examples

### Disable Button

The `disabled` property can be used to make a button unclickable:

```html
<button igxButton="raised" [disabled]="'true'">Disabled</button>
```

<div class="sample-container loading" style="height: 70px">
    <iframe class="lazyload" seamless width="100%" height="100%" frameborder="0" data-src="{environment:demosBaseUrl}/data-entries/buttons-disabled-sample">
</iframe></div> 

### Ripple

The [`igxRipple`]({environment:angularApiUrl}/classes/igxrippledirective.html) directive adds a ripple effect to your buttons or other specified elements. You can easily change the default ripple color, position and duration, using its properties:

```html
<button igxButton="raised" igxRipple="white" [igxRippleCentered]="true" [igxRippleDuration]="2000">
    Ripple
</button>
```

<div class="sample-container loading" style="height: 70px">
    <iframe class="lazyload" seamless width="100%" height="100%" frameborder="0" data-src="{environment:demosBaseUrl}/data-entries/buttons-sample-3">
</iframe></div> 

### Span

We can also use the `igxButton` directive to turn elements like `span` and `div` into Ignite UI for Angular styled buttons. The default colors can be customized via the `igxButtonColor` and the `igxButtonBackground` properties:

```html
<span igxButton="raised" igxButtonColor="white" igxButtonBackground="#72da67" igxRipple="white">
    Span
</span>
```

<div class="sample-container loading" style="height: 70px">
    <iframe class="lazyload" seamless width="100%" height="100%" frameborder="0" data-src="{environment:demosBaseUrl}/data-entries/buttons-sample-4">
</iframe></div>

## Display Density

We can allow the user to choose the display density of the `igxButton` by using its [`displayDensity`]({environment:angularApiUrl}/classes/igxbuttondirective.html#displaydensity) input. То do this, first we have to import the `IgxButtonGroupModule`, and then use the [`igxButtonGroup`]({environment:angularApiUrl}/classes/igxbuttongroupcomponent.html) component to display all density values. This way whenever one gets selected, we will update our own **density** property that is bound to the `displayDensity` of the button.

> [!NOTE] 
> Note that the `icon` type button does not introduce visual changes for different display density values.

```typescript
// app.module.ts
...
import { IgxButtonGroupModule } from 'igniteui-angular';

@NgModule({
    imports: [
        ...
        IgxButtonGroupModule
        ...
    ]
})
```

```html
<!--buttons-density.component.html-->

<igx-buttongroup [values]="displayDensities" (selected)="selectDensity($event)"></igx-buttongroup>
...
<button igxButton="flat" [displayDensity]="density">Flat</button>
```

```typescript
// buttons-density.component.ts
public density = "comfortable";
public displayDensities;

public ngOnInit() {
    this.displayDensities = [
        { label: 'comfortable', selected: this.density === 'comfortable', togglable: true },
        { label: 'cosy', selected: this.density === 'cosy', togglable: true },
        { label: 'compact', selected: this.density === 'compact', togglable: true }
    ];
}

public selectDensity(event) {
    this.density = this.displayDensities[event.index].label;
}
```

If all went well, you should see something like the following in the browser:

<div class="sample-container loading" style="height: 150px">
    <iframe id="buttons-display-density-iframe" seamless width="100%" height="100%" frameborder="0" src="{environment:demosBaseUrl}/data-entries/buttons-display-density" onload="onSampleIframeContentLoaded(this);">
</div>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="buttons-display-density-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on codesandbox</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="buttons-display-density-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>

## Styling

To get started with styling the button, we need to import the `index` file, where all the theme functions and component mixins live:

```scss
@import '~igniteui-angular/lib/core/styles/themes/index';
``` 

Following the simplest approach, we create a new theme that extends the [`igx-button-theme`]({environment:sassApiUrl}/index.html#function-igx-button-theme) and accepts the `$raised-text-color` and the `$raised-background` parameters with their respective hover and focus parameters.

```scss
$custom-button-theme: igx-button-theme(
    $raised-text-color: #fdfdfd,
    $raised-hover-text-color: #fdfdfd,
    $raised-background: #345779,
    $raised-hover-background: #2e4d6b,
    $raised-focus-text-color: #fdfdfd,
    $raised-focus-background: #2e4d6b,
    $disabled-color: #2e4d6b
);
```

In our custom theme we have provided parameter values only for the `raised` button. In order to implement this for any other type of button, we simply have to target the corresponding parameters.

Take a look at the [`igx-button-theme`]({environment:sassApiUrl}/index.html#function-igx-button-theme) section for a complete list of available parameters for styling any type of button.

### Using CSS variables 

The last step is to pass the custom button theme in our application: 

```scss
 @include igx-css-vars($custom-button-theme);
```

### Using Theme Overrides

In order to style components for older browsers, like Internet Explorer 11, we have to use a different approach, since it doesn't support CSS variables. 

If the component is using the [`Emulated`](themes/component-themes.md#view-encapsulation) ViewEncapsulation, it is necessary to `penetrate` this encapsulation using `::ng-deep`. To prevent the custom theme to leak into other components, be sure to include the `:host` selector before `::ng-deep`:

```scss
:host {
     ::ng-deep {
        @include igx-button($custom-button-theme);
    }
}
```

### Demo

<div class="sample-container loading" style="height: 100px">
    <iframe id="buttons-style-iframe" seamless width="100%" height="100%" frameborder="0" src="{environment:demosBaseUrl}/data-entries/buttons-style" class="lazyload no-theming">
</iframe></div>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="buttons-style-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on codesandbox</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="buttons-style-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>

## API References
<div class="divider--half"></div>

* [IgxButtonDirective]({environment:angularApiUrl}/classes/igxbuttondirective.html)
* [IgxButton Styles]({environment:sassApiUrl}/index.html#function-igx-button-theme)
* [IgxRippleDirective]({environment:angularApiUrl}/classes/igxrippledirective.html)
* [IgxButtonGroupComponent]({environment:angularApiUrl}/classes/igxbuttongroupcomponent.html)

## Additional Resources
<div class="divider--half"></div>

Our community is active and always welcoming to new ideas.

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
