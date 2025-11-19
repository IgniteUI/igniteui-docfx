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

For a complete introduction to the Ignite UI for Angular, read the [_getting started_](general/getting-started.md) topic.

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

As of version `17.1.0` the IgniteUI for Angular exposes a new `igxIconButton` directive intended to turn icons into fully functional buttons. You can read more about the [_Icon Button here_](icon-button.md).

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

### Button Theme Property Map

When you modify a primary property, all related dependent properties are updated automatically:

<div class="theme-switcher-wrapper">
<input type="radio" name="theme" id="material" checked>
<label for="material" class="switch-label">Material</label>
<input type="radio" name="theme" id="fluent">
<label for="fluent" class="switch-label">Fluent</label>
<input type="radio" name="theme" id="bootstrap">
<label for="bootstrap" class="switch-label">Bootstrap</label>
<input type="radio" name="theme" id="indigo">
<label for="indigo" class="switch-label">Indigo</label>
<div class="tables">
  <div class="theme-table material">
    <h3>Material Theme</h3>
    <h4>Flat Button</h4>
    <table class="collapsible-table">
      <thead>
        <tr>
          <th>Primary Property</th>
          <th>Dependent Property</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody class="group">
        <tr class="primary">
          <td><details><summary><strong>$foreground</strong></summary></details></td>
          <td>$hover-background</td>
          <td>Background color for hovered button</td>
        </tr>
        <tr class="dependent">
          <td></td>
          <td>$focus-background</td>
          <td>Background color for focused button</td>
        </tr>
        <tr class="dependent">
          <td></td>
          <td>$focus-hover-background</td>
          <td>Background color for button on focus + hover</td>
        </tr>
        <tr class="dependent">
          <td></td>
          <td>$active-background</td>
          <td>Background color for active button</td>
        </tr>
        <tr class="dependent">
          <td></td>
          <td>$hover-foreground</td>
          <td>Foreground color for hovered button</td>
        </tr>
        <tr class="dependent">
          <td></td>
          <td>$icon-color-hover</td>
          <td>Icon color for hovered button</td>
        </tr>
        <tr class="dependent">
          <td></td>
          <td>$focus-foreground</td>
          <td>Foreground color for focused button</td>
        </tr>
        <tr class="dependent">
          <td></td>
          <td>$focus-hover-foreground</td>
          <td>Foreground color for button on focus + hover</td>
        </tr>
        <tr class="dependent">
          <td></td>
          <td>$active-foreground</td>
          <td>Foreground color for active button</td>
        </tr>
        <tr class="dependent">
          <td></td>
          <td>$focus-visible-background</td>
          <td>Background when focus is visible</td>
        </tr>
        <tr class="dependent">
          <td></td>
          <td>$focus-visible-foreground</td>
          <td>Foreground when focus is visible</td>
        </tr>
      </tbody>
    </table>
    <h4>Contained Button</h4>
    <table class="collapsible-table">
      <thead>
        <tr>
          <th>Primary Property</th>
          <th>Dependent Property</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody class="group">
        <tr class="primary">
          <td><details><summary><strong>$background</strong></summary></details></td>
          <td>$foreground</td>
          <td>Foreground based on background</td>
        </tr>
        <tr class="dependent">
          <td></td>
          <td>$icon-color</td>
          <td>Icon color based on background</td>
        </tr>
        <tr class="dependent">
          <td></td>
          <td>$hover-background</td>
          <td>Hover background color</td>
        </tr>
        <tr class="dependent">
          <td></td>
          <td>$hover-foreground</td>
          <td>Foreground on hover</td>
        </tr>
        <tr class="dependent">
          <td></td>
          <td>$icon-color-hover</td>
          <td>Icon color on hover</td>
        </tr>
        <tr class="dependent">
          <td></td>
          <td>$focus-background</td>
          <td>Focus background color</td>
        </tr>
        <tr class="dependent">
          <td></td>
          <td>$focus-foreground</td>
          <td>Foreground on focus</td>
        </tr>
        <tr class="dependent">
          <td></td>
          <td>$focus-hover-background</td>
          <td>Focus + hover background</td>
        </tr>
        <tr class="dependent">
          <td></td>
          <td>$focus-hover-foreground</td>
          <td>Foreground on focus + hover</td>
        </tr>
        <tr class="dependent">
          <td></td>
          <td>$active-background</td>
          <td>Active background color</td>
        </tr>
        <tr class="dependent">
          <td></td>
          <td>$active-foreground</td>
          <td>Active foreground color</td>
        </tr>
        <tr class="dependent">
          <td></td>
          <td>$focus-visible-background</td>
          <td>Background when focus is visible</td>
        </tr>
        <tr class="dependent">
          <td></td>
          <td>$focus-visible-foreground</td>
          <td>Foreground when focus is visible</td>
        </tr>
      </tbody>
    </table>
    <h4>Outlined Button</h4>
    <table class="collapsible-table">
      <thead>
        <tr>
          <th>Primary Property</th>
          <th>Dependent Property</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody class="group">
        <tr class="primary">
          <td><details><summary><strong>$foreground</strong></summary></details></td>
          <td>$hover-background</td>
          <td>Background color for hovered button</td>
        </tr>
        <tr class="dependent">
          <td></td>
          <td>$focus-background</td>
          <td>Background color for focused button</td>
        </tr>
        <tr class="dependent">
          <td></td>
          <td>$focus-hover-background</td>
          <td>Background color for button on focus + hover</td>
        </tr>
        <tr class="dependent">
          <td></td>
          <td>$active-background</td>
          <td>Background color for active button</td>
        </tr>
        <tr class="dependent">
          <td></td>
          <td>$hover-foreground</td>
          <td>Foreground color for hovered button</td>
        </tr>
        <tr class="dependent">
          <td></td>
          <td>$icon-color-hover</td>
          <td>Icon color for hovered button</td>
        </tr>
        <tr class="dependent">
          <td></td>
          <td>$focus-foreground</td>
          <td>Foreground color for focused button</td>
        </tr>
        <tr class="dependent">
          <td></td>
          <td>$focus-hover-foreground</td>
          <td>Foreground color for button on focus + hover</td>
        </tr>
        <tr class="dependent">
          <td></td>
          <td>$active-foreground</td>
          <td>Foreground color for active button</td>
        </tr>
        <tr class="dependent">
          <td></td>
          <td>$focus-visible-background</td>
          <td>Background when focus is visible</td>
        </tr>
        <tr class="dependent">
          <td></td>
          <td>$focus-visible-foreground</td>
          <td>Foreground when focus is visible</td>
        </tr>
        <tr class="dependent">
          <td></td>
          <td>$border-color</td>
          <td>The border color for outlined buttons.</td>
        </tr>
        <tr class="dependent">
          <td></td>
          <td>$hover-border-color</td>
          <td>The border color for hovered outlined buttons.</td>
        </tr>
        <tr class="dependent">
          <td></td>
          <td>$focus-border-color</td>
          <td>The border color for focused outlined buttons.</td>
        </tr>
        <tr class="dependent">
          <td></td>
          <td>$focus-visible-border-color</td>
          <td>The border color for outlined buttons when focus is visible.</td>
        </tr>
        <tr class="dependent">
          <td></td>
          <td>$active-border-color</td>
          <td>The border color for active outlined buttons.</td>
        </tr>
      </tbody>
    </table>
    <h4>FAB Button</h4>
    <table class="collapsible-table">
      <thead>
        <tr>
          <th>Primary Property</th>
          <th>Dependent Property</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody class="group">
        <tr class="primary">
          <td><details><summary><strong>$background</strong></summary></details></td>
          <td>$foreground</td>
          <td>Foreground based on background</td>
        </tr>
        <tr class="dependent">
          <td></td>
          <td>$icon-color</td>
          <td>Icon color based on background</td>
        </tr>
        <tr class="dependent">
          <td></td>
          <td>$hover-background</td>
          <td>Hover background color</td>
        </tr>
        <tr class="dependent">
          <td></td>
          <td>$hover-foreground</td>
          <td>Foreground on hover</td>
        </tr>
        <tr class="dependent">
          <td></td>
          <td>$icon-color-hover</td>
          <td>Icon color on hover</td>
        </tr>
        <tr class="dependent">
          <td></td>
          <td>$focus-background</td>
          <td>Focus background color</td>
        </tr>
        <tr class="dependent">
          <td></td>
          <td>$focus-foreground</td>
          <td>Foreground on focus</td>
        </tr>
        <tr class="dependent">
          <td></td>
          <td>$active-background</td>
          <td>Active background color</td>
        </tr>
        <tr class="dependent">
          <td></td>
          <td>$active-foreground</td>
          <td>Active foreground color</td>
        </tr>
        <tr class="dependent">
          <td></td>
          <td>$focus-hover-background</td>
          <td>Focus + hover background</td>
        </tr>
        <tr class="dependent">
          <td></td>
          <td>$focus-hover-foreground</td>
          <td>Foreground on focus + hover</td>
        </tr>
        <tr class="dependent">
          <td></td>
          <td>$focus-visible-background</td>
          <td>Background when focus is visible</td>
        </tr>
        <tr class="dependent">
          <td></td>
          <td>$focus-visible-foreground</td>
          <td>Foreground when focus is visible</td>
        </tr>
      </tbody>
    </table>
  </div>

<div class="theme-table fluent">
<h3>Fluent Theme</h3>
<h4>Flat Button</h4>
<table class="collapsible-table">
  <thead>
    <tr>
      <th>Primary Property</th>
      <th>Dependent Property</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody class="group">
    <tr class="primary">
      <td><details><summary><strong>$foreground</strong></summary></details></td>
      <td>$hover-background</td>
      <td>Background color for hovered button</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$focus-background</td>
      <td>Background color for focused button</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$focus-hover-background</td>
      <td>Background color for button on focus + hover</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$active-background</td>
      <td>Background color for active button</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$hover-foreground</td>
      <td>Foreground color for hovered button</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$icon-color-hover</td>
      <td>Icon color for hovered button</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$focus-foreground</td>
      <td>Foreground color for focused button</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$focus-hover-foreground</td>
      <td>Foreground color for button on focus + hover</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$active-foreground</td>
      <td>Foreground color for active button</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$focus-visible-foreground</td>
      <td>Foreground when focus is visible</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$focus-visible-border-color</td>
      <td>Border color when focus is visible</td>
    </tr>
  </tbody>
</table>
<h4>Contained Button</h4>
<table class="collapsible-table">
<thead><tr><th>Primary Property</th><th>Dependent Property</th><th>Description</th></tr></thead>
<tbody class="group">
<tr class="primary"><td><details><summary><strong>$background</strong></summary></details></td><td>$foreground</td><td>Foreground based on background</td></tr>
<tr class="dependent"><td></td><td>$icon-color</td><td>Icon color based on background</td></tr>
<tr class="dependent"><td></td><td>$hover-background</td><td>Hover background color</td></tr>
<tr class="dependent"><td></td><td>$focus-background</td><td>Focus background color</td></tr>
<tr class="dependent"><td></td><td>$active-background</td><td>Active background color</td></tr>
<tr class="dependent"><td></td><td>$hover-foreground</td><td>Foreground on hover</td></tr>
<tr class="dependent"><td></td><td>$icon-color-hover</td><td>Icon color on hover</td></tr>
<tr class="dependent"><td></td><td>$focus-foreground</td><td>Foreground on focus</td></tr>
<tr class="dependent"><td></td><td>$active-foreground</td><td>Active foreground color</td></tr>
<tr class="dependent"><td></td><td>$focus-hover-background</td><td>Focus + hover background</td></tr>
<tr class="dependent"><td></td><td>$focus-hover-foreground</td><td>Foreground on focus + hover</td></tr>
<tr class="dependent"><td></td><td>$focus-visible-background</td><td>Background when focus is visible</td></tr>
<tr class="dependent"><td></td><td>$focus-visible-foreground</td><td>Foreground when focus is visible</td></tr>
<tr class="dependent"><td></td><td>$focus-visible-border-color</td><td>Border color when focus is visible</td></tr>
</tbody>
</table>
<h4>Outlined Button</h4>
<table class="collapsible-table">
<thead><tr><th>Primary Property</th><th>Dependent Property</th><th>Description</th></tr></thead>
<tbody class="group">
<tr class="primary"><td><details><summary><strong>$foreground</strong></summary></details></td><td>$hover-background</td><td>Background color for hovered outlined button.</td></tr>
<tr class="dependent"><td></td><td>$focus-background</td><td>Background color for focused outlined button.</td></tr>
<tr class="dependent"><td></td><td>$focus-hover-background</td><td>Background color for outlined button on focus + hover.</td></tr>
<tr class="dependent"><td></td><td>$active-background</td><td>Background color for active outlined button.</td></tr>
<tr class="dependent"><td></td><td>$hover-foreground</td><td>Foreground color for hovered outlined button.</td></tr>
<tr class="dependent"><td></td><td>$icon-color-hover</td><td>Icon color for hovered outlined button.</td></tr>
<tr class="dependent"><td></td><td>$focus-foreground</td><td>Foreground color for focused outlined button.</td></tr>
<tr class="dependent"><td></td><td>$focus-hover-foreground</td><td>Foreground color for outlined button on focus + hover.</td></tr>
<tr class="dependent"><td></td><td>$active-foreground</td><td>Foreground color for active outlined button.</td></tr>
<tr class="dependent"><td></td><td>$focus-visible-foreground</td><td>Foreground color for outlined button when focus is visible.</td></tr>
<tr class="dependent"><td></td><td>$focus-visible-border-color</td><td>Border color for outlined button when focus is visible.</td></tr>
<tr class="dependent"><td></td><td>$border-color</td><td>Border color for outlined button.</td></tr>
<tr class="dependent"><td></td><td>$hover-border-color</td><td>Border color for hovered outlined button.</td></tr>
<tr class="dependent"><td></td><td>$focus-border-color</td><td>Border color for focused outlined button.</td></tr>
<tr class="dependent"><td></td><td>$active-border-color</td><td>Border color for active outlined button.</td></tr>
</tbody>
</table>
<h4>FAB Button</h4>
<table class="collapsible-table">
<thead><tr><th>Primary Property</th><th>Dependent Property</th><th>Description</th></tr></thead>
<tbody class="group">
<tr class="primary"><td><details><summary><strong>$background</strong></summary></details></td><td>$foreground</td><td>Foreground based on background</td></tr>
<tr class="dependent"><td></td><td>$icon-color</td><td>Icon color based on background</td></tr>
<tr class="dependent"><td></td><td>$hover-background</td><td>Hover background color</td></tr>
<tr class="dependent"><td></td><td>$hover-foreground</td><td>Foreground on hover</td></tr>
<tr class="dependent"><td></td><td>$icon-color-hover</td><td>Icon color on hover</td></tr>
<tr class="dependent"><td></td><td>$active-background</td><td>Active background color</td></tr>
<tr class="dependent"><td></td><td>$active-foreground</td><td>Active foreground color</td></tr>
<tr class="dependent"><td></td><td>$focus-background</td><td>Focus background color</td></tr>
<tr class="dependent"><td></td><td>$focus-foreground</td><td>Foreground on focus</td></tr>
<tr class="dependent"><td></td><td>$focus-hover-background</td><td>Focus + hover background</td></tr>
<tr class="dependent"><td></td><td>$focus-hover-foreground</td><td>Foreground on focus + hover</td></tr>
<tr class="dependent"><td></td><td>$focus-visible-background</td><td>Background when focus is visible</td></tr>
<tr class="dependent"><td></td><td>$focus-visible-foreground</td><td>Foreground when focus is visible</td></tr>
<tr class="dependent"><td></td><td>$focus-visible-border-color</td><td>Border color when focus is visible</td></tr>
</tbody>
</table>
</div>

<div class="theme-table bootstrap">
<h3>Bootstrap Theme</h3>
<h4>Flat Button</h4>
<table class="collapsible-table">
  <thead>
    <tr>
      <th>Primary Property</th>
      <th>Dependent Property</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody class="group">
    <tr class="primary">
      <td><details><summary><strong>$foreground</strong></summary></details></td>
      <td>$hover-foreground</td>
      <td>Foreground color for hovered button</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$icon-color-hover</td>
      <td>Icon color for hovered button</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$focus-foreground</td>
      <td>Foreground color for focused button</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$focus-hover-foreground</td>
      <td>Foreground color for button on focus + hover</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$active-foreground</td>
      <td>Foreground color for active button</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$focus-visible-foreground</td>
      <td>Foreground when focus is visible</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$focus-visible-border-color</td>
      <td>Border color when focus is visible</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$disabled-foreground</td>
      <td>Foreground color for disabled button</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$disabled-icon-color</td>
      <td>Icon color for disabled button</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$shadow-color</td>
      <td>Shadow color</td>
    </tr>
  </tbody>
</table>
<h4>Contained Button</h4>
<table class="collapsible-table">
  <thead>
    <tr>
      <th>Primary Property</th>
      <th>Dependent Property</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody class="group">
    <tr class="primary">
      <td><details><summary><strong>$background</strong></summary></details></td>
      <td>$foreground</td>
      <td>Foreground based on background</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$icon-color</td>
      <td>Icon color based on background</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$hover-background</td>
      <td>Hover background color</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$focus-background</td>
      <td>Focus background color</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$active-background</td>
      <td>Active background color</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$hover-foreground</td>
      <td>Foreground on hover</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$icon-color-hover</td>
      <td>Icon color on hover</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$focus-foreground</td>
      <td>Foreground on focus</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$focus-hover-background</td>
      <td>Focus + hover background</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$focus-hover-foreground</td>
      <td>Foreground on focus + hover</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$focus-visible-background</td>
      <td>Background when focus is visible</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$focus-visible-foreground</td>
      <td>Foreground when focus is visible</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$active-foreground</td>
      <td>Active foreground color</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$shadow-color</td>
      <td>Shadow color</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$disabled-background</td>
      <td>Disabled background color</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$disabled-foreground</td>
      <td>Disabled foreground color</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$disabled-icon-color</td>
      <td>Disabled icon color</td>
    </tr>
  </tbody>
</table>
<h4>Outlined Button</h4>
<table class="collapsible-table">
  <thead>
    <tr>
      <th>Primary Property</th>
      <th>Dependent Property</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody class="group">
    <tr class="primary">
      <td><details><summary><strong>$foreground</strong></summary></details></td>
      <td>$hover-background</td>
      <td>Background color for hovered button</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$focus-background</td>
      <td>Background color for focused button</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$focus-hover-background</td>
      <td>Background color for button on focus + hover</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$active-background</td>
      <td>Background color for active button</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$hover-foreground</td>
      <td>Foreground color for hovered button</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$icon-color-hover</td>
      <td>Icon color for hovered button</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$focus-foreground</td>
      <td>Foreground color for focused button</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$focus-hover-foreground</td>
      <td>Foreground color for button on focus + hover</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$active-foreground</td>
      <td>Foreground color for active button</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$focus-visible-background</td>
      <td>Background when focus is visible</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$focus-visible-foreground</td>
      <td>Foreground when focus is visible</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$focus-visible-border-color</td>
      <td>Border color when focus is visible</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$disabled-foreground</td>
      <td>Foreground color for disabled button</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$disabled-icon-color</td>
      <td>Icon color for disabled button</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$disabled-border-color</td>
      <td>Border color for disabled button</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$hover-border-color</td>
      <td>Hover border color</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$focus-border-color</td>
      <td>Focus border color</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$focus-visible-border-color</td>
      <td>Focus-visible border color</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$active-border-color</td>
      <td>Active border color</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$shadow-color</td>
      <td>Shadow color</td>
    </tr>
  </tbody>
</table>
<h4>FAB Button</h4>
<table class="collapsible-table">
  <thead>
    <tr>
      <th>Primary Property</th>
      <th>Dependent Property</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody class="group">
    <tr class="primary">
      <td><details><summary><strong>$background</strong></summary></details></td>
      <td>$foreground</td>
      <td>Foreground based on background</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$icon-color</td>
      <td>Icon color based on background</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$hover-background</td>
      <td>Hover background color</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$focus-background</td>
      <td>Focus background color</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$active-background</td>
      <td>Active background color</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$disabled-background</td>
      <td>Disabled background color</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$hover-foreground</td>
      <td>Foreground on hover</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$icon-color-hover</td>
      <td>Icon color on hover</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$focus-foreground</td>
      <td>Foreground on focus</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$focus-hover-background</td>
      <td>Focus + hover background</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$focus-hover-foreground</td>
      <td>Foreground on focus + hover</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$focus-visible-background</td>
      <td>Background when focus is visible</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$focus-visible-foreground</td>
      <td>Foreground when focus is visible</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$active-foreground</td>
      <td>Active foreground color</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$shadow-color</td>
      <td>Shadow color</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$disabled-foreground</td>
      <td>Disabled foreground color</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$disabled-icon-color</td>
      <td>Disabled icon color</td>
    </tr>
  </tbody>
</table>
</div>

<div class="theme-table indigo">
<h3>Indigo Theme</h3>
<h4>Flat Button</h4>
<table class="collapsible-table"><thead><tr><th>Primary Property</th><th>Dependent Property</th><th>Description</th></tr></thead><tbody class="group">
<tr class="primary"><td><details><summary><strong>$foreground</strong></summary></details></td><td>$hover-background</td><td>Background color for hovered button</td></tr>
<tr class="dependent"><td></td><td>$focus-background</td><td>Background color for focused button</td></tr>
<tr class="dependent"><td></td><td>$focus-hover-background</td><td>Background color for button on focus + hover</td></tr>
<tr class="dependent"><td></td><td>$active-background</td><td>Background color for active button</td></tr>
<tr class="dependent"><td></td><td>$hover-foreground</td><td>Foreground color for hovered button</td></tr>
<tr class="dependent"><td></td><td>$icon-color-hover</td><td>Icon color for hovered button</td></tr>
<tr class="dependent"><td></td><td>$focus-foreground</td><td>Foreground color for focused button</td></tr>
<tr class="dependent"><td></td><td>$focus-hover-foreground</td><td>Foreground color for button on focus + hover</td></tr>
<tr class="dependent"><td></td><td>$active-foreground</td><td>Foreground color for active button</td></tr>
<tr class="dependent"><td></td><td>$focus-visible-foreground</td><td>Foreground when focus is visible</td></tr>
<tr class="dependent"><td></td><td>$disabled-foreground</td><td>Disabled foreground color</td></tr>
<tr class="dependent"><td></td><td>$disabled-icon-color</td><td>Disabled icon color</td></tr>
<tr class="dependent"><td></td><td>$shadow-color</td><td>Shadow color</td></tr>
</tbody>
</table>
<h4>Contained Button</h4>
<table class="collapsible-table">
  <thead>
    <tr>
      <th>Primary Property</th>
      <th>Dependent Property</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody class="group">
    <tr class="primary">
      <td><details><summary><strong>$background</strong></summary></details></td>
      <td>$foreground</td>
      <td>Foreground based on background</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$icon-color</td>
      <td>Icon color based on background</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$hover-background</td>
      <td>Hover background color</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$focus-background</td>
      <td>Focus background color</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$active-background</td>
      <td>Active background color</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$hover-foreground</td>
      <td>Foreground on hover</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$icon-color-hover</td>
      <td>Icon color on hover</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$focus-foreground</td>
      <td>Foreground on focus</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$focus-hover-background</td>
      <td>Focus + hover background</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$focus-hover-foreground</td>
      <td>Foreground on focus + hover</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$focus-visible-background</td>
      <td>Background when focus is visible</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$focus-visible-foreground</td>
      <td>Foreground when focus is visible</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$active-foreground</td>
      <td>Active foreground color</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$shadow-color</td>
      <td>Shadow color</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$disabled-background</td>
      <td>Disabled background color</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$disabled-foreground</td>
      <td>Disabled foreground color</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$disabled-icon-color</td>
      <td>Disabled icon color</td>
    </tr>
  </tbody>
</table>
<h4>Outlined Button</h4>
<table class="collapsible-table">
  <thead>
    <tr>
      <th>Primary Property</th>
      <th>Dependent Property</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody class="group">
    <tr class="primary">
      <td><details><summary><strong>$foreground</strong></summary></details></td>
      <td>$hover-background</td>
      <td>Background color for hovered button</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$focus-background</td>
      <td>Background color for focused button</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$focus-hover-background</td>
      <td>Background color for button on focus + hover</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$active-background</td>
      <td>Background color for active button</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$hover-foreground</td>
      <td>Foreground color for hovered button</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$icon-color-hover</td>
      <td>Icon color for hovered button</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$focus-foreground</td>
      <td>Foreground color for focused button</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$focus-hover-foreground</td>
      <td>Foreground color for button on focus + hover</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$active-foreground</td>
      <td>Foreground color for active button</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$focus-visible-background</td>
      <td>Background when focus is visible</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$focus-visible-foreground</td>
      <td>Foreground when focus is visible</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$focus-visible-border-color</td>
      <td>Border color when focus is visible</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$border-color</td>
      <td>Border color</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$hover-border-color</td>
      <td>Hover border color</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$focus-border-color</td>
      <td>Focus border color</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$focus-visible-border-color</td>
      <td>Focus-visible border color</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$active-border-color</td>
      <td>Active border color</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$shadow-color</td>
      <td>Shadow color</td>
    </tr>
  </tbody>
</table>
<h4>FAB Button</h4>
<table class="collapsible-table">
  <thead>
    <tr>
      <th>Primary Property</th>
      <th>Dependent Property</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody class="group">
    <tr class="primary">
      <td><details><summary><strong>$background</strong></summary></details></td>
      <td>$foreground</td>
      <td>Foreground based on background</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$icon-color</td>
      <td>Icon color based on background</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$hover-background</td>
      <td>Hover background color</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$focus-background</td>
      <td>Focus background color</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$active-background</td>
      <td>Active background color</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$disabled-background</td>
      <td>Disabled background color</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$hover-foreground</td>
      <td>Foreground on hover</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$icon-color-hover</td>
      <td>Icon color on hover</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$focus-foreground</td>
      <td>Foreground on focus</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$focus-hover-background</td>
      <td>Focus + hover background</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$focus-hover-foreground</td>
      <td>Foreground on focus + hover</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$focus-visible-background</td>
      <td>Background when focus is visible</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$focus-visible-foreground</td>
      <td>Foreground when focus is visible</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$active-foreground</td>
      <td>Active foreground color</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$shadow-color</td>
      <td>Shadow color</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$disabled-foreground</td>
      <td>Disabled foreground color</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$disabled-icon-color</td>
      <td>Disabled icon color</td>
    </tr>
  </tbody>
</table>
</div>
</div>
</div>

> **Note:** The resulting dependent properties may vary slightly depending on the selected theme (Material, Fluent, Bootstrap, Indigo).

To style the button you can use our type-specific theme functions: [`flat-button-theme`]({environment:sassApiUrl}/themes#function-flat-button-theme), [`outlined-button-theme`]({environment:sassApiUrl}/themes#function-outlined-button-theme), [`contained-button-theme`]({environment:sassApiUrl}/themes#function-contained-button-theme), and [`fab-button-theme`]({environment:sassApiUrl}/themes#function-fab-button-theme). 

Each of them will target only the buttons of that specific type.

To get started with styling the button, first import the `index` file, which includes all theme functions and component mixins:

```scss
@use "igniteui-angular/theming" as *;

// IMPORTANT: Prior to Ignite UI for Angular version 13 use:
// @import '~igniteui-angular/lib/core/styles/themes/index';
```

Next, create a new theme that extends the type-specific theme function for the type of button you are styling. In this example, we will use the [`contained-button-theme`]({environment:sassApiUrl}/themes#function-contained-button-theme) function and pass values to the `$foreground` and the `$background` parameters, along with their respective hover and active parameters.

Given the following markup:

```html
<div class="my-contained-btn">
  <button igxButton="contained">Contained button</button>
</div>
```

You can create the following theme:

```scss
$custom-contained-theme: contained-button-theme(
    $background: #f9f0ff,
    $foreground: #722ed1,
    $hover-background: #efdbff,
    $hover-foreground: #9254de,
    $active-foreground: #531dab,
    $active-background: #dfc2fa,
);
```

Take a look at the [`contained-button-theme`]({environment:sassApiUrl}/themes#function-contained-button-theme) section for a complete list of available parameters for styling the contained-type buttons.

Finally, **include** the custom theme in your application:

```scss
.my-contained-btn {
    @include css-vars($custom-contained-theme);
}
```

With the type-specific theme functions, styling buttons is much easier. 

For [`contained-button-theme`]({environment:sassApiUrl}/themes#function-contained-button-theme) and [`fab-button-theme`]({environment:sassApiUrl}/themes#function-fab-button-theme) functions, you only need to provide a color value to the `$background` parameter. All other button state and text colors (if they are not provided) will then be automatically generated and applied based on that value. 

The text color is determined by the newly added [`adaptive-contrast`]({environment:sassApiUrl}/color#function-adaptive-contrast) function, which calculates whether black or white provides better contrast against the supplied background color.

For [`flat-button-theme`]({environment:sassApiUrl}/themes#function-flat-button-theme) and [`outlined-button-theme`]({environment:sassApiUrl}/themes#function-outlined-button-theme) functions, the button state colors are also automatically generated and applied, but they are derived from the supplied `$foreground` parameter instead of `$background`.

In the sample below, you can see how using the button component with customized CSS variables allows you to create a design that visually resembles the button used in the [`Ant`](https://ant.design/components/button?theme=light#button-demo-color-variant) design system.

<code-view style="height: 260px"
           no-theming
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/data-entries/buttons-style/" >
</code-view>

> [!NOTE]
> The sample uses the [Bootstrap Light](themes/sass/schemas.md#predefined-schemas) schema.

### Styling with Tailwind

You can style the `button` using our custom Tailwind utility classes. Make sure to [set up Tailwind](themes/misc/tailwind-classes.md) first.

Along with the tailwind import in your global stylesheet, you can apply the desired theme utilities as follows:

```scss
@import "tailwindcss";
...
@use 'igniteui-theming/tailwind/utilities/material.css';
```

The utility file includes both `light` and `dark` theme variants.

- Use `light-*` classes for the light theme.
- Use `dark-*` classes for the dark theme.
- Append the component name after the prefix. Because the button has types, the classes are used like so, e.g., `light-contained-button`, `light-flat-button` `dark-outlined-button`, `dark-fab-button`, etc.

Once applied, these classes enable dynamic theme calculations. From there, you can override the generated CSS variables using `arbitrary properties`. After the colon, provide any valid CSS color format (HEX, CSS variable, RGB, etc.).

You can find the full list of properties in the [button-theme]({environment:sassApiUrl}/themes#function-button-theme) which reflect differently in the different variants, the primary property for the `flat` and `outlined` buttons is `$foreground` and for the `contained` and `fab` buttons is `$background`. The syntax is as follows:

```html
<div class="buttons-sample">
  <div class="button-sample">
    <button
    igxButton="flat"
    class="!light-flat-button ![--foreground:#7B9E89]">
      Flat Button
    </button>
  </div>
  <div class="button-sample">
    <button
    igxButton="contained"
    class="!light-contained-button ![--background:#7B9E89]">
      Contained Button
    </button>
  </div>
  <div class="button-sample">
    <button
    igxButton="outlined"
    class="!light-outlined-button ![--foreground:#7B9E89]">
      Outlined Button
    </button>
  </div>
  <div class="button-sample">
    <button
    igxButton="fab"
    class="!light-fab-button ![--background:#7B9E89]">
      Fab Button
    </button>
  </div>
</div>
```

>[!NOTE]
>The exclamation mark(`!`) is required to ensure the utility class takes precedence. Tailwind applies styles in layers, and without marking these styles as important, they will get overridden by the component’s default theme.

At the end your buttons should look like this:

<div class="sample-container loading" style="height:100px">
    <iframe id="buttons-tailwind-styling-iframe" data-src='{environment:demosBaseUrl}/data-entries/buttons-tailwind-style' width="100%" height="100%" seamless frameBorder="0" class="lazyload"></iframe>
</div>

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

- [IgxButtonDirective]({environment:angularApiUrl}/classes/igxbuttondirective.html)
- [IgxButton Styles]({environment:sassApiUrl}/themes#function-button-theme)
- [IgxRippleDirective]({environment:angularApiUrl}/classes/igxrippledirective.html)
- [IgxIconButtonDirective]({environment:angularApiUrl}/classes/igxiconbuttondirective.html)
- [IgxButtonGroupComponent]({environment:angularApiUrl}/classes/igxbuttongroupcomponent.html)

## Additional Resources

<div class="divider--half"></div>

Our community is active and always welcoming to new ideas.

- [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
- [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
