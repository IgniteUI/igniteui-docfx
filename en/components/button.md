---
title: Angular Button Component – Ignite UI for Angular
_description: Enhance standard buttons with built-in text, images and more features using Ignite UI for Angular Button component. Try it now.
_keywords: Angular Button component, Angular Button control, Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Angular UI Components,
---

# Angular Button Overview

Angular Button directive is used for creating and adding actionable buttons to a web page/application. There are different Angular Button types that are easy to customize and include several built-in features. By default, Angular Material uses native `<button>` and `<a>` elements to deliver an accessible experience.

The Ignite UI for Angular Button directive is intended to turn any button, span, div, or anchor element into a fully functional button. You can use the following Angular Button types - Flat Button, Contained Button, Outlined Button, and Floating Action Button. With customizable colors, options to create themes and change the Angular Button Style and enabling users to choose the button size and more.

## Angular Button Example

We have created the Angular Button example below to show you how different button types can appear and look like when they are styled with a border or when a transparent background is applied.

<div class="divider--half"></div>

<code-view style="height: 150px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/data-entries/buttons-sample-1/" alt="Angular Button Example">
</code-view>

<div class="divider--half"></div>

## Getting Started with Ignite UI for Angular Button

To get started with the Ignite UI for Angular Button directive, first you need to install Ignite UI for Angular. In an existing Angular application, type the following command:

```cmd
ng add igniteui-angular
```

For a complete introduction to the Ignite UI for Angular, read the [*getting started*](general/getting-started.md) topic.

The next step is to import the `IgxButtonModule` in your **app.module.ts** file.

```typescript
// app.module.ts
import { IgxButtonModule } from 'igniteui-angular';
// import { IgxButtonModule } from '@infragistics/igniteui-angular'; for licensed package
@NgModule({
    imports: [
        ...
        IgxButtonModule,
        ...
    ]
})
export class AppModule {}
```

Alternatively, as of `16.0.0` you can import the `IgxButtonDirective` as a standalone dependency.

```typescript
// home.component.ts

...
import { IgxButtonDirective } from 'igniteui-angular';
// import { IgxButtonDirective } from '@infragistics/igniteui-angular'; for licensed package

@Component({
    selector: 'app-home',
    template: '<button igxButton="flat">Flat</button>',
    styleUrls: ['home.component.scss'],
    standalone: true,
    imports: [IgxButtonDirective]
})
export class HomeComponent {}
```

Now that you have the Ignite UI for Angular Button module or directive imported, you can start using the `igxButton` directive on elements.

## Angular Button Types

### Flat Button

Use the [`igxButton`]({environment:angularApiUrl}/classes/igxbuttondirective.html) directive to add a simple flat button in your component template. Note that if you do not choose a type, by default it will be set to `flat`.

```html
<button igxButton="flat">Flat</button>
```

<div class="sample-container loading" style="height: 70px">
    <iframe class="lazyload" seamless width="100%" height="100%" frameborder="0" data-src="{environment:demosBaseUrl}/data-entries/buttons-sample-2"></iframe>
</div>

### Contained Button

All you have to do to create a contained button is to change the value of the `igxButton` property:

```html
<button igxButton="contained">Contained</button>
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

As of version `17.1.0` the IgniteUI for Angular exposes a new `igxIconButton` directive intended to turn icons into fully functional buttons. You can read more about the [*Icon Button here*](icon-button.md).

```html
<button igxIconButton="flat">
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

> [!NOTE]
> To get the extended FAB text styled properly, use `<span>` or `<div>` tags.

<div class="sample-container loading" style="height: 100px">
    <iframe class="lazyload" seamless width="100%" height="100%" frameborder="0" data-src="{environment:demosBaseUrl}/data-entries/buttons-sample-6">
</iframe></div>

## Examples

### Angular Disable Button

The `disabled` property can be used to make a button unclickable:

```html
<button igxButton="contained" [disabled]="'true'">Disabled</button>
```

<div class="sample-container loading" style="height: 70px">
    <iframe class="lazyload" seamless width="100%" height="100%" frameborder="0" data-src="{environment:demosBaseUrl}/data-entries/buttons-disabled-sample">
</iframe></div>

### Ripple

The [`igxRipple`]({environment:angularApiUrl}/classes/igxrippledirective.html) directive adds a ripple effect to your buttons or other specified elements. You can easily change the default ripple color, position and duration, using its properties:

```html
<button igxButton="contained" igxRipple="white" [igxRippleCentered]="true" [igxRippleDuration]="2000">
  Ripple
</button>
```

<div class="sample-container loading" style="height: 70px">
    <iframe class="lazyload" seamless width="100%" height="100%" frameborder="0" data-src="{environment:demosBaseUrl}/data-entries/buttons-sample-3">
</iframe></div>

### Span

We can also use the `igxButton` directive to turn elements like `span` and `div` into Ignite UI for Angular styled buttons. The default colors can be customized via the `igxButtonColor` and the `igxButtonBackground` properties:

```html
<span igxButton="contained" igxButtonColor="white" igxButtonBackground="#72da67" igxRipple="white">
  Span
</span>
```

<div class="sample-container loading" style="height: 70px">
    <iframe class="lazyload" seamless width="100%" height="100%" frameborder="0" data-src="{environment:demosBaseUrl}/data-entries/buttons-sample-4">
</iframe></div>

## Size

We can allow the user to choose the size of the `igxButton` by using the `--ig-size` custom CSS property. To do this, first we have to import the `IgxButtonGroupModule`, and then use the [`igxButtonGroup`]({environment:angularApiUrl}/classes/igxbuttongroupcomponent.html) component to display size values. This way whenever one gets selected, we will update the **--ig-size** CSS property.

```typescript
// app.module.ts
...
import { IgxButtonGroupModule } from 'igniteui-angular';
// import { IgxButtonGroupModule } from '@infragistics/igniteui-angular'; for licensed package
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
<igx-buttongroup [values]="sizes" (selected)="selectSize($event)"></igx-buttongroup>
...
<button igxButton="flat">Flat</button>
```

```typescript
// buttons-density.component.ts
public size = "large";
public sizes;
public ngOnInit() {
    this.sizes = [
        { label: 'large', selected: this.size === 'large', togglable: true },
        { label: 'medium', selected: this.size === 'medium', togglable: true },
        { label: 'small', selected: this.size === 'small', togglable: true }
    ];
}

public selectSize(event: any) {
    this.size = this.sizes[event.index].label;
}


@HostBinding('style.--ig-size')
protected get sizeStyle() {
    return `var(--ig-size-${this.size})`;
}
```

If all went well, you should see something like the following in the browser:

<code-view style="height: 150px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/data-entries/buttons-display-density/" alt="Angular Button Example">
</code-view>

<div class="divider--half"></div>

## Styling

Following the simplest approach, you can use CSS variables to customize the appearance of the button:

```css
.igx-button {
    --background: #ff4d4f;
    --hover-background: #ff7875;
    --active-background: #d9363e;
    --focus-visible-background: #ff4d4f;
    --focus-visible-foreground: #fff;
}
```

By changing the values of these CSS variables, you can alter the entire look of the button.

<div class="divider--half"></div>

Another way to style the button is by using **Sass**, along with our [`button-theme`]({environment:sassApiUrl}/index.html#function-button-theme) function.

To start styling the button using **Sass**, first import the `index` file, which includes all theme functions and component mixins:

```scss
@use "igniteui-angular/theming" as *;

// IMPORTANT: Prior to Ignite UI for Angular version 13 use:
// @import '~igniteui-angular/lib/core/styles/themes/index';
```

Following the simplest approach, we create a new theme that extends the [`button-theme`]({environment:sassApiUrl}/themes#function-button-theme) and accepts the `$foreground` and the `$background` parameters with their respective hover and focus parameters.

Given the following markup:

```html
<div class="my-contained-btn">
  <button igxButton="contained">Contained button</button>
</div>
```

We need to create the following theme:

```scss
$custom-button-theme: button-theme(
    $foreground: #fdfdfd,
    $hover-foreground: #fdfdfd,
    $focus-foreground: #fdfdfd,
    $background: #345779,
    $hover-background: #2e4d6b,
    $focus-background: #2e4d6b,
    $disabled-foreground: #2e4d6b,
);
```

Take a look at the [`button-theme`]({environment:sassApiUrl}/themes#function-button-theme) section for a complete list of available parameters for styling any type of button.

Finally, **include** the custom theme in your application:

```scss
.button-sample {
    @include css-vars($custom-button-theme);
}
```

You can also choose to style only buttons of a specific type - `flat`, `outlined`, `contained`, or `fab`.
To do this, you can use the new type-specific theme functions: [`flat-button-theme`]({environment:sassApiUrl}/themes#function-flat-button-theme), [`outlined-button-theme`]({environment:sassApiUrl}/themes#function-outlined-button-theme), [`contained-button-theme`]({environment:sassApiUrl}/themes#function-contained-button-theme), and [`fab-button-theme`]({environment:sassApiUrl}/themes#function-fab-button-theme)

For example, given the following markup:

```html
<div class="my-contained-btn">
  <button igxButton="contained">Contained button</button>
</div>
<div class="my-flat-btn">
  <button igxButton="flat">Flat button</button>
</div>
```

If you want to style only the `contained` button, you can use the [`contained-button-theme`]({environment:sassApiUrl}/themes#function-flat-button-theme) function:

```scss
$custom-contained-theme: contained-button-theme(
    $background: #348ae0,
);
```

With the new type-specific theme functions, styling buttons is now easier. For [`contained-button-theme`]({environment:sassApiUrl}/themes#function-contained-button-theme) and [`fab-button-theme`]({environment:sassApiUrl}/themes#function-fab-button-theme) functions (as shown in the example above), you only need to provide a color to the `$background` parameter. All other button state and text colors will then be automatically generated and applied based on that value. The text color is determined by the newly added [`adaptive-contrast`]({environment:sassApiUrl}/color#function-adaptive-contrast) function, which calculates whether black or white provides better contrast against the supplied background color.

For [`flat-button-theme`]({environment:sassApiUrl}/themes#function-flat-button-theme) and [`outlined-button-theme`]({environment:sassApiUrl}/themes#function-outlined-button-theme) functions, the button state colors are also automatically generated and applied, but they are derived from the supplied `$foreground` parameter instead of `$background`.

In the sample below, you can see how using the button component with customized CSS variables allows you to create a design that visually resembles the button used in the [`Ant`](https://ant.design/components/button?theme=light#button-demo-color-variant) design system. 

<code-view style="height: 260px"
           no-theming
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/data-entries/buttons-style/" >
</code-view>

> [!NOTE]
> The sample uses the [Bootstrap Light](themes/sass/schemas.md#predefined-schemas) schema.

### Custom sizing

You can change the button height either by using the `--size` variable, targeting the `button` directly:

```scss
button {
  --size: 50px;
}
```

Or you can use the universal `--igx-button-size` variable to target all instances:

```html
<div class="my-app">
  <button igxButton="raised"></button>
</div>
```

```scss
.my-app {
  --igx-button-size: 50px;
}
```

You can also use one of the predefined sizes, assigning it to the `--ig-size` variable. The available values for `--ig-size` are `--ig-size-small`, `--ig-size-medium`, and `--ig-size-large`:

```scss
button {
  --ig-size: var(--ig-size-large);
}
```

Learn more about it in the [Size](display-density.md) article.

<div class="divider--half"></div>

## API References

<div class="divider--half"></div>

* [IgxButtonDirective]({environment:angularApiUrl}/classes/igxbuttondirective.html)
* [IgxButton Styles]({environment:sassApiUrl}/themes#function-button-theme)
* [IgxRippleDirective]({environment:angularApiUrl}/classes/igxrippledirective.html)
* [IgxIconButtonDirective]({environment:angularApiUrl}/classes/igxiconbuttondirective.html)
* [IgxButtonGroupComponent]({environment:angularApiUrl}/classes/igxbuttongroupcomponent.html)

## Additional Resources

<div class="divider--half"></div>

Our community is active and always welcoming to new ideas.

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
