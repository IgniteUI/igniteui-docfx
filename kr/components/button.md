---
title: Button Directive
_description: Enhance standard buttons with built-in text, images and more features through Ignite UI for Angular Buttons control.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Buttons components, Angular Buttons controls
_language: kr
---

## Button

The Button directive within Ignite UI for Angular is intended to be used on any button, span, div, or anchor element to turn it into a fully functional button.

### Button Demo


<code-view style="height: 436px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/data-entries/buttons-sample-1" >
</code-view>

<div class="divider--half"></div>

### Dependencies

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
    <iframe seamless="" width="100%" height="100%" frameborder="0" data-src="{environment:demosBaseUrl}/data-entries/buttons-sample-2" class="lazyload">
</iframe></div>

You can add a Ripple effect. And also set its color `igxRipple="blue"`.

```html
<button igxButton="flat" igxRipple>Flat</button>
```

Default ripple color. Custom ripple color:
<div class="sample-container loading" style="height: 48px">
    <iframe seamless="" width="100%" height="100%" frameborder="0" data-src="{environment:demosBaseUrl}/data-entries/buttons-sample-3" class="lazyload">
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
    <iframe seamless="" width="100%" height="100%" frameborder="0" data-src="{environment:demosBaseUrl}/data-entries/buttons-sample-4" class="lazyload">
</iframe></div>

You can create a rased button.

```html
<button igxButton="raised" igxRipple="white">Raised</button>
```

<div class="sample-container loading" style="height: 54px">
    <iframe seamless="" width="100%" height="100%" frameborder="0" data-src="{environment:demosBaseUrl}/data-entries/buttons-sample-5" class="lazyload">
</iframe></div>

A floating action button and use an icon to display:

```html
<button igxButton="fab" igxButtonColor="#FBB13C" igxButtonBackground="#340068" igxRipple="#FBB13C">
  <igx-icon fontSet="material">edit</igx-icon>
</button>
```
<div class="sample-container loading" style="height: 74px">
    <iframe seamless="" width="100%" height="100%" frameborder="0" data-src="{environment:demosBaseUrl}/data-entries/buttons-sample-6" class="lazyload">
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
    <iframe seamless="" width="100%" height="100%" frameborder="0" data-src="{environment:demosBaseUrl}/data-entries/buttons-sample-7" class="lazyload">
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

We can allow the user to choose the display density of the [`igxButton`]({environment:angularApiUrl}/classes/igxbuttondirective.html) by using its [`displayDensity`]({environment:angularApiUrl}/classes/igxbuttondirective.html#displaydensity) input. We will do this by importing the `IgxButtonGroupModule` and using the [**IgxButtonGroup**](button-group.md) to display all density values. This way whenever one gets selected, we will update our own **density** property that is bound to the [`displayDensity`]({environment:angularApiUrl}/classes/igxbuttondirective.html#displaydensity) of the button.

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

And the final result:

<code-view style="height: 300px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/data-entries/buttons-display-density" >
</code-view>

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
