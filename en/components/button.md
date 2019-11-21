---
title: Button Directive
_description: Enhance standard buttons with built-in text, images and more features through Ignite UI for Angular Buttons control.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Buttons components, Angular Buttons controls
---

## Button

The Button directive within Ignite UI for Angular is intended to be used on any button, span, div, or anchor element to turn it into a fully functional button.

### Button Demo

<div class="sample-container loading" style="height: 436px">
    <iframe id="buttons-sample-iframe" seamless width="100%" height="100%" frameborder="0" src="{environment:demosBaseUrl}/data-entries/buttons-sample-1" onload="onSampleIframeContentLoaded(this);">
</div>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="buttons-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>

### Dependencies

To get started with the Button directive, first you need to install Ignite UI for Angular by typing the following command:

```cmd
ng add igniteui-angular
```
For a complete introduction to the Ignite UI for Angular, read the [*getting started*](general/getting_started.md) topic.

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

### Usage

Setting a simple [`igxButton`]({environment:angularApiUrl}/classes/igxbuttondirective.html). Note that if you do not choose a type, by default it will be set to `flat`.

```html
<button igxButton="flat">Flat</button>
```

Result:
<div class="sample-container loading" style="height: 48px">
    <iframe class="lazyload" seamless="" width="100%" height="100%" frameborder="0" data-src="{environment:demosBaseUrl}/data-entries/buttons-sample-2">
</iframe></div>

You can add a Ripple effect. And also set its color `igxRipple="blue"`.

```html
<button igxButton="flat" igxRipple>Flat</button>
```

Default ripple color. Custom ripple color:
<div class="sample-container loading" style="height: 48px">
    <iframe class="lazyload" seamless="" width="100%" height="100%" frameborder="0" data-src="{environment:demosBaseUrl}/data-entries/buttons-sample-3">
</iframe></div>

Outlined button style:

```html
<button igxButton="outlined">Outlined</button>
```

Result:
<div class="sample-container loading" style="height: 48px">
    <iframe class="lazyload" seamless="" width="100%" height="100%" frameborder="0" data-src="{environment:demosBaseUrl}/data-entries/buttons-sample-8">
</iframe></div>

Using [`igxButton`]({environment:angularApiUrl}/classes/igxbuttondirective.html) to turn a `span` element into a Ignite UI for Angular styled button.

```html
<span igxButton="raised" igxButtonColor="yellow" igxButtonBackground="#000" igxRipple="yellow">Click me</span>
```

The span now looks like:
<div class="sample-container loading" style="height: 54px">
    <iframe class="lazyload" seamless="" width="100%" height="100%" frameborder="0" data-src="{environment:demosBaseUrl}/data-entries/buttons-sample-4">
</iframe></div>

You can create a raised button.

```html
<button igxButton="raised" igxRipple="white">Raised</button>
```

<div class="sample-container loading" style="height: 54px">
    <iframe class="lazyload" seamless="" width="100%" height="100%" frameborder="0" data-src="{environment:demosBaseUrl}/data-entries/buttons-sample-5">
</iframe></div>

A floating action button and use an icon to display:

```html
<button igxButton="fab" igxButtonColor="#FBB13C" igxButtonBackground="#340068" igxRipple="#FBB13C">
  <igx-icon fontSet="material">edit</igx-icon>
</button>
```
<div class="sample-container loading" style="height: 74px">
    <iframe class="lazyload" seamless="" width="100%" height="100%" frameborder="0" data-src="{environment:demosBaseUrl}/data-entries/buttons-sample-6">
</iframe></div>

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
<div class="sample-container loading" style="height: 54px">
    <iframe class="lazyload" seamless="" width="100%" height="100%" frameborder="0" data-src="{environment:demosBaseUrl}/data-entries/buttons-sample-7">
</iframe></div>

<div class="divider--half"></div>

### Button types
| Name   | Description |
|:----------|:-------------:|
| `flat` | The default button type. Uses transparent background and the secondary theme color from the palette color for the text. |
| `outlined` |  Very similar to the flat button type but with a thin outline around the edges of the button. |
| `raised` | As the name implies, this button type features a subtle shadow. Uses the secondary theme color from the palette for background. |
| `fab` | Floating action button type. Circular with secondary theme color for background. |
| `icon` | This is the simplest of button types. Use it whenever you need to use an icon as button. |

### Display Density

We can allow the user to choose the display density of the [`igxButton`]({environment:angularApiUrl}/classes/igxbuttondirective.html) by using its [`displayDensity`]({environment:angularApiUrl}/classes/igxbuttondirective.html#displaydensity) input. We will do this by importing the `IgxButtonGroupModule` and using the [**IgxButtonGroup**](buttonGroup.md) to display all density values. This way whenever one gets selected, we will update our own **density** property that is bound to the [`displayDensity`]({environment:angularApiUrl}/classes/igxbuttondirective.html#displaydensity) of the button.

> [!NOTE] 
> The `icon` type button does not introduce visual changes for different display density values.

```typescript
// app.module.ts
...
import { IgxButtonGroupModule } from 'igniteui-angular';
@NgModule({
    imports: [..., IgxButtonGroupModule]
})
```

```html
<!--buttons-density.component.html-->

<igx-buttongroup [values]="displayDensities" (onSelect)="selectDensity($event)"></igx-buttongroup>
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

And the final result:

<div class="sample-container loading" style="height: 300px">
    <iframe id="buttons-display-density-iframe" seamless width="100%" height="100%" frameborder="0" src="{environment:demosBaseUrl}/data-entries/buttons-display-density" onload="onSampleIframeContentLoaded(this);">
</div>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="buttons-display-density-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>

### Styling

To get started with styling the button, we need to import the `index` file, where all the theme functions and component mixins live:

```scss
@import '~igniteui-angular/lib/core/styles/themes/index';
``` 

Following the simplest approach, we create a new theme that extends the [`igx-button-theme`]({environment:sassApiUrl}/index.html#function-igx-button-theme) and accepts the `$raised-text-color` and the `$raised-background` parameters with their respective hover parameters and the focus parameters.

```scss
$dark-button: igx-button-theme(
    $raised-text-color: #FFCD0F, 
    $raised-hover-text-color: #292826, 
    $raised-background: #292826,
    $raised-hover-background: #FFCD0F,
    $raised-focus-text-color: #292826,
    $raised-focus-background: #FFCD0F,
    $raised-border-radius: 10px,
    $disabled-color: #16130C
);
```

In the theme from above, we have obviously provided parameter values only for the **raised buttons** and in order to implement this for any other type of button, the approach is analogical - we simply have to target the parameters that are specific for the button type we wish to style.
If we take a look at the [`igx-button-theme`]({environment:sassApiUrl}/index.html#function-igx-button-theme), we will notice the vast amount of parameters that are available to us in order to style any type of button!

The last step is to **include** the button theme in our application:

```scss
@include igx-button($dark-button);
```

>[!NOTE]
>If the component is using an [`Emulated`](themes/component-themes.md#view-encapsulation) ViewEncapsulation, it is necessary to `penetrate` this encapsulation using `::ng-deep`:

```scss
:host {
     ::ng-deep {
        @include igx-button($dark-button);
    }
}
```


#### Defining a color palette

Instead of hardcoding the color values like we just did, we can achieve greater flexibility in terms of colors by using the [`igx-palette`]({environment:sassApiUrl}/index.html#function-igx-palette) and [`igx-color`]({environment:sassApiUrl}/index.html#function-igx-color) functions.

`igx-palette` generates a color palette based on the primary and secondary colors that are passed:

```scss
$yellow-color: #FFCD0F;
$black-color: #292826;

$dark-palette: igx-palette($primary: $black-color, $secondary: $yellow-color);
```

And then with [`igx-color`]({environment:sassApiUrl}/index.html#function-igx-color) we can easily retrieve color from the palette. 

```scss
$dark-button: igx-button-theme(
    $palette: $dark-palette,
    $raised-text-color: igx-color($dark-palette, "secondary", 700),
    $raised-hover-text-color: igx-color($dark-palette, "primary", 500),
    $raised-background:  igx-color($dark-palette, "primary", 500),
    $raised-hover-background: igx-color($dark-palette, "secondary", 500),
    $raised-focus-text-color: igx-color($dark-palette, "primary", 500),
    $raised-focus-background: igx-color($dark-palette, "secondary", 500),
    $disabled-color: #16130C
);
```

>[!NOTE]
>The `igx-color` and `igx-palette` are powerful functions for generating and retrieving colors. Please refer to [`Palettes`](themes/palette.md) topic for detailed guidance on how to use them.

#### Using Schemas

Going further with the theming engine, you can build a robust and flexible structure that benefits from [**schemas**](themes/schemas.md). A **schema** is a recipe of a theme.

Extend one of the two predefined schemas, that are provided for every component, in this case - the [`dark-button`]({environment:sassApiUrl}/index.html#variable-_dark-button) schemas: 

```scss
// Extending the dark button schema
$dark-button-schema: extend($_dark-button,
    (
        raised-text-color:(
            igx-color:("secondary", 700)
        ),
        raised-hover-text-color:(
            igx-color:("primary", 500)
        ),
        raised-background:(
            igx-color:("primary", 500)
        ),
        raised-hover-background:(
            igx-color:("secondary", 500)
        ),
        raised-focus-text-color:(
            igx-color:("primary", 500)
        ),
        raised-focus-background:(
            igx-color:("secondary", 500)
        ),
        disabled-color: #16130C
    )
);
```

In order to apply our custom schemas we have to **extend** one of the globals ([`light`]({environment:sassApiUrl}/index.html#variable-light-schema) or [`dark`]({environment:sassApiUrl}/index.html#variable-dark-schema)), which is basically pointing out the components with a custom schema, and after that add it to the respective component themes:

```scss
// Extending the global dark-schema
$custom-dark-schema: extend($dark-schema,(
    igx-button: $dark-button-schema
));

// Defining button-theme with the global dark schema
$dark-button: igx-button-theme(
  $palette: $dark-palette,
  $schema: $custom-dark-schema
);
```

Don't forget to include the themes in the same way as it was demonstrated above.

#### Demo

<div class="sample-container loading" style="height: 100px">
    <iframe id="buttons-style-iframe" seamless width="100%" height="100%" frameborder="0" src="{environment:demosBaseUrl}/data-entries/buttons-style" class="lazyload no-theming">
</iframe></div>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="buttons-style-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>

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
