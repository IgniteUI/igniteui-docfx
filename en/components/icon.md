---
title: Angular Icon Component – Ignite UI for Angular | Infragistics
_description: Developers can unify and use various icon and font sets interchangeably with custom colors and more with Ignite UI for Angular Icon component.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Icon components, Angular Icon controls
---

# Angular Icon Component Overview

<p class="highlight">The Ignite UI for Angular Icon component unifies icon/font families so developers can use them interchangeably and add material icons to markup.</p>

## Angular Icon Example

<code-view style="height: 75px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/data-display/icon-sample-1/" alt="Angular Icon Example">
</code-view>

<div class="divider--half"></div>

## Getting Started with Ignite UI for Angular Icon

To get started with the Ignite UI for Angular Icon component, first you need to install Ignite UI for Angular. In an existing Angular application, type the following command:

```cmd
ng add igniteui-angular
```

For a complete introduction to the Ignite UI for Angular, read the [*getting started*](general/getting-started.md) topic.

The next step is to import the `IgxIconModule` in your **app.module.ts** file.

```typescript
// app.module.ts

import { IgxIconModule } from 'igniteui-angular';
// import { IgxIconModule } from '@infragistics/igniteui-angular'; for licensed package

@NgModule({
    imports: [
        ...
        IgxIconModule,
        ...
    ]
})
export class AppModule {}
```

Alternatively, as of `16.0.0` you can import the `IgxIconComponent` as a standalone dependency.

```typescript
// home.component.ts

import { IgxIconComponent } from 'igniteui-angular';
// import { IgxIconComponent } from '@infragistics/igniteui-angular'; for licensed package

@Component({
  selector: 'app-home',
  template: '<igx-icon [style.color]="color">home</igx-icon>',
  styleUrls: ['home.component.scss'],
  standalone: true,
  imports: [IgxIconComponent],
})
export class HomeComponent {
  public color = '#e41c77';
}
```

Now that you have the Ignite UI for Angular Icon module or component imported, you can start using the `igx-icon` component.

## Using the Angular Icon

### Icon Color

Use `style.color` CSS property to change its default color:

```html
<igx-icon [style.color]="#e41c77">home</igx-icon>
```

<div class="sample-container loading" style="height: 40px">
    <iframe id="icon-sample-3-iframe" seamless width="100%" height="100%" frameborder="0" data-src="{environment:demosBaseUrl}/data-display/icon-sample-3" class="lazyload">
</iframe></div>

### Inactive Icon

If you want to disable an icon, you can use the [`active`]({environment:angularApiUrl}/classes/igxiconcomponent.html#active) property:

```html
<igx-icon [active]="false">volume_off</igx-icon>
```

<div class="sample-container loading" style="height: 40px">
    <iframe id="icon-sample-4-iframe" seamless width="100%" height="100%" frameborder="0" data-src="{environment:demosBaseUrl}/data-display/icon-sample-4" class="lazyload">
</iframe></div>

### Content Projection

You can set icons with content projection:

```html
<igx-icon>bluetooth</igx-icon>
```

<div class="sample-container loading" style="height: 40px">
    <iframe id="icon-sample-5-iframe" seamless width="100%" height="100%" frameborder="0" data-src="{environment:demosBaseUrl}/data-display/icon-sample-5" class="lazyload">
</iframe></div>

### Icon Size

You can customize the icons using CSS. To change an icon size use the `--size` CSS variable:

```scss
.custom-size {
  --size: 56px;
}
```

<div class="sample-container loading" style="height: 80px">
    <iframe id="icon-sample-2-iframe" seamless width="100%" height="100%" frameborder="0" data-src="{environment:demosBaseUrl}/data-display/icon-sample-2" class="lazyload">
</iframe></div>

## SVG Icons

You can also use an SVG image as an icon. First, inject the [`IgxIconService`]({environment:angularApiUrl}/classes/igxiconservice.html) dependency. In this example we will inject it in a component's constructor but you can use it wherever it is needed in your code.

Use the [`addSvgIcon`]({environment:angularApiUrl}/classes/igxiconservice.html#addSvgIcon) method to import the SVG file in cache. When the SVG is cached, it can be used anywhere in the application. The icon name and file URL path are the method's mandatory parameters; family can be specified as well. After that, you can use the SVG files in the HTML markup. Alternatively, you can use the `addSvgIconFromText` method to import an SVG file, providing the SVG text content instead of the file URL.

* Have in mind that if there are two icons with the same name and the same family, the SVG icon will be displayed with priority.
* It is better not to provide image width and height in the SVG file.
* You may need additional polyfill scripts ("polyfills") for Internet Explorer.

```typescript
constructor(private iconService: IgxIconService) { }

public ngOnInit() {
    // register custom SVG icons
    this.iconService.addSvgIcon('contains', '/assets/images/svg/contains.svg', 'filter-icons');
}
```

```html
<igx-icon name="contains" family="filter-icons"></igx-icon>
```

<code-view style="height: 70px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/data-display/svg-icon-sample/" >
</code-view>

## Material Symbols

Additionally, users can take advantage of the latest Material icons and their design variations included in the newly created [`Material Symbols Library`](https://fonts.google.com/icons). To start using Material Symbols, first you have to add the library to your application:

```html
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" rel="stylesheet"/>
```

Then we need to inject the [`IgxIconService`]({environment:angularApiUrl}/classes/igxiconservice.html) dependency and make use of its `setFamily` method so that Material Symbols can work with `igx-icon`:

```ts
constructor(private iconService: IgxIconService) { }

public ngOnInit() {
    // registers a 'material-symbols-outlined' class to be applied to all igx-icons with 'material-symbols' font-family
    this.iconService.setFamily('material-symbols', { className: 'material-symbols-outlined', type: 'liga' });
}
```

Now, we are ready to add the desired icon into our markup and customize it using adjustable font styles:

```html
<igx-icon family="material-symbols" name="diamond" class="custom-icon"></igx-icon>
```

```scss
.custom-icon {
  font-variation-settings: "FILL" 0, "wght" 200, "GRAD" 0, "opsz" 40;
}
```

<code-view style="height: 70px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/data-display/material-symbols/" >
</code-view>

To learn more about Material Symbols styles please visit their [`official documentation`](https://fonts.google.com/icons).

## Server-side Rendering Note

> [!NOTE]
> In case you have implemented server side rendering logic in your application using Angular Universal and have used the `IgxIconService` to register icons, this may cause the following exception:
> <br/><br/> > `XMLHttpRequest is not defined. Could not fetch SVG from url.` > <br/><br/>
> In order to avoid this, execute the listed steps:

<ol>
<li>
Install `xmlhttprequest`:

```cmd
npm i xmlhttprequest
```

</li>
<li>
On the top of your `server.ts` file, add:

```typescript
(global as any).XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
```

</li>
</ol>

## Styling

To get started with styling the icons, we need to import the `index` file, where all the theme functions and component mixins live:

```scss
@use "igniteui-angular/theming" as *;

// IMPORTANT: Prior to Ignite UI for Angular version 13 use:
// @import '~igniteui-angular/lib/core/styles/themes/index';
```

Following the simplest approach, we create a new theme that extends the [`icon-theme`]({environment:sassApiUrl}/index.html#function-icon-theme) and accepts the parameters, required to customize the icon as desired.

```scss
$custom-icon-theme: icon-theme(
  $color: #1481b8,
  $disabled-color: #494949,
);
```

The last step is to pass the custom icon theme in our application:

```scss
@include css-vars($custom-icon-theme);
```

### Demo

<code-view style="height:75px" 
           no-theming
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/data-display/icon-styling/" alt="Angular Icon Example">
</code-view>

### SVG Limitations

It’s important to note that when using custom SVG icons, the [`icon-theme`]({environment:sassApiUrl}/index.html#function-icon-theme) can apply and overwrite colors only on the `<svg>` element itself. If the SVG contains child elements such as `<path>`, `<rect>`, `<circle>`, `<g>`, etc., with hardcoded color values, those colors cannot be overridden by the theme.

For example:

```html
<svg>
    <path fill="#050d42"/>
</svg>
```

In this case, the icon will always use the `#050d42` color defined in the `<path>`, regardless of the color provided by the theme.

```html
<svg fill="#050d42">
    <path .../>
</svg>
```

Here, the fill color is applied to the `<svg>` element, so it can be overridden with custom color provided via [`icon-theme`]({environment:sassApiUrl}/index.html#function-icon-theme).

We recommend not using hardcoded colors on SVG child elements so the icon can be styled entirely using the [`icon-theme`]({environment:sassApiUrl}/index.html#function-icon-theme). However, if you still want to apply hardcoded colors to child elements, you can also use the Ignite UI color variables.

```html
<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <!-- This element uses the theme color from the igx-icon component -->
  <path d="M12 2L15 8H9L12 2Z" />

  <!-- This element uses an accent color from Ignite UI palette -->
  <circle cx="12" cy="17" r="4" fill="var(--ig-primary-500)" />
</svg>
```

### Custom sizing

You can either use the `--size` variable, targeting the `igx-icon` directly:

```scss
igx-icon {
  --size: 50px;
}
```

Or you can use the universal `--igx-icon-size` variable to target all instances:

```html
<div class="my-app">
  <igx-icon></igx-icon>
</div>
```

```scss
.my-app {
  --igx-icon-size: 50px;
}
```

You can also use one of the predefined sizes, assigning it to the `--ig-size` variable. The available values for `--ig-size` are `--ig-size-small`, `--ig-size-medium`, and `--ig-size-large`:

```scss
igx-icon {
  --ig-size: var(--ig-size-medium);
}
```

Learn more about it in the [Size](display-density.md) article.

### Styling with Tailwind

You can style the icon using our custom Tailwind utility classes, which apply the appropriate theme for you. To do this, simply add the corresponding class to your `igx-icon`. Be sure to [set up Tailwind](themes/misc/tailwind-classes.md) first.

Each component styling utility class begins with the schema name as a prefix, choose from `material`, `fluent`, `bootstrap`, or `indigo` for light themes, or `dark-material`, `dark-fluent`, and so on for dark themes. This sets the schema for your custom theme.

The value inside square brackets defines the color and can be any valid CSS color format, such as a HEX code, CSS variable, RGB, etc.

You can also override any other CSS variable using `arbitrary properties`, as shown below for the `size` variable:

```html
 <igx-icon class="!material-icon-color-[#7B9E89] ![--size:48px]">person</igx-icon>
```

>[!NOTE]
>The exclamation mark(`!`) is required to ensure the utility class takes precedence. Tailwind applies styles in layers, and without marking these styles as important, they will get overridden by the component’s default theme.

At the end your icon should look like this:

<div class="sample-container loading" style="height:60px">
    <iframe id="icon-tailwind-styling-iframe" data-src='{environment:demosBaseUrl}/data-display/icon-tailwind-styling' width="100%" height="100%" seamless frameBorder="0" class="lazyload"></iframe>
</div>

## API References

<div class="divider--half"></div>

* [IgxIconComponent]({environment:angularApiUrl}/classes/igxiconcomponent.html)
* [IgxIconComponent Styles]({environment:sassApiUrl}/index.html#function-icon-theme)

## Additional Resources

<div class="divider--half"></div>

Our community is active and always welcoming to new ideas.

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
