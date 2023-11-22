---
title: Angular Icon Button Component – Ignite UI for Angular
_description: Enhance standard icons with button functionalities. Try it now.
_keywords: Angular Icon Button component, Angular Icon Button control, Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Angular UI Components,
---

# Angular Icon Button Overview

The Ignite UI for Angular Icon Button directive is intended to turn any icon into a fully functional button. The `igxIconButton` comes in three types - flat, outlined, and contained which is the default one. 

## Angular Icon Button Example

<code-view style="height: 70px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/data-entries/icon-button-overview" alt="Angular Icon Button Example">
</code-view>

<div class="divider--half"></div>

## Getting Started with Ignite UI for Angular Icon Button

To get started with the Ignite UI for Angular Icon Button directive, first you need to install Ignite UI for Angular. In an existing Angular application, type the following command:

```cmd
ng add igniteui-angular
```

For a complete introduction to the Ignite UI for Angular, read the [*getting started*](general/getting-started.md) topic.

The next step is to import the `IgxIconButtonDirective` as a standalone dependency:

```typescript
// home.component.ts

...
import { IgxIconButtonDirective } from 'igniteui-angular';
// import { IgxIconButtonDirective } from '@infragistics/igniteui-angular'; for licensed package

@Component({
    selector: 'app-home',
    template: `
        <button igxIconButton="outlined">
            <igx-icon>home</igx-icon>
        </button>`,
    styleUrls: ['home.component.scss'],
    standalone: true,
    imports: [IgxIconButtonDirective]
})
export class HomeComponent {}
```

Now that you have the Ignite UI for Angular Icon Button directive imported, you can start using the `igxIconButton` directive on elements.

## Angular Icon Button Types

### Flat Icon Button

Use the [`igxIconButton`]({environment:angularApiUrl}/classes/igxiconbuttondirective.html) directive to add a simple flat icon button in your component template:

```html
<button igxIconButton="flat">
    <igx-icon>edit</igx-icon>
</button>
```

<div class="sample-container loading" style="height: 70px">
    <iframe class="lazyload" seamless width="100%" height="100%" frameborder="0" data-src="{environment:demosBaseUrl}/data-entries/flat-icon-button"></iframe>
</div>

### Contained Icon Button

All you have to do to create a contained icon button is to change the value of the `igxIconButton` property. Note that if you do not choose a type, by default it will also be set to `contained`.

```html
<button igxIconButton>
    <igx-icon>favorite</igx-icon>
</button>
```

<div class="sample-container loading" style="height: 70px">
    <iframe class="lazyload" seamless width="100%" height="100%" frameborder="0" data-src="{environment:demosBaseUrl}/data-entries/contained-icon-button">
</iframe></div>

### Outlined Icon Button

Analogically, we can switch to outlined type:

```html
<button igxIconButton="outlined">
    <igx-icon>more_vert</igx-icon>
</button>
```

<div class="sample-container loading" style="height: 70px">
    <iframe class="lazyload" seamless width="100%" height="100%" frameborder="0" data-src="{environment:demosBaseUrl}/data-entries/outlined-icon-button">
</iframe></div>

## Examples

### Disabled Icon Button

If you want to disable an icon button, you can use the [`disabled`]({environment:angularApiUrl}/classes/igxiconbuttoncomponent.html#disabled) property. In this sample we also demonstrate how to use icons from different families with the `igxIconButton` directive:

```html
<button igxIconButton="flat" disabled>
    <igx-icon family="fa" name="fa-home"></igx-icon>
</button>
```

<div class="sample-container loading" style="height: 70px">
    <iframe class="lazyload" seamless width="100%" height="100%" frameborder="0" data-src="{environment:demosBaseUrl}/data-entries/disabled-icon-button">
</iframe></div>

### SVG Icons

In addition to material icons, the `igxIconButton` directive also supports usage of SVG images as icons. To do so, first we should inject the [`IgxIconService`]({environment:angularApiUrl}/classes/igxiconservice.html) dependency and then use the [`addSvgIcon`]({environment:angularApiUrl}/classes/igxiconservice.html#addSvgIcon) method to import the SVG file in cache. For further information, you can read the [SVG section](icon.md#svg-icons) in the icon topic.

```typescript
constructor(private _iconService: IgxIconService) { }

public ngOnInit() {
    // register custom SVG icon
    this._iconService.addSvgIcon('rain', 'assets/images/card/icons/rain.svg', 'weather-icons');
}
```

```html
<button igxIconButton>
    <igx-icon family="weather-icons" name="rain"></igx-icon>
</button>
```

<div class="sample-container loading" style="height: 70px">
    <iframe class="lazyload" seamless width="100%" height="100%" frameborder="0" data-src="{environment:demosBaseUrl}/data-entries/svg-icon-button">
</iframe></div>

### Size 

Users can choose one of the three predefined `igxIconButton` sizes by using the `--ig-size` custom CSS property. By default, the size of the component is set medium. 

<code-view style="height: 70px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/data-entries/icon-button-size" alt="Angular Icon Button Size Example">
</code-view>
<div class="divider--half"></div>


As you can see from the sample above, we can also use the `igxIconButton` directive to turn elements like `span` and `div` into Ignite UI for Angular styled icon buttons. 

## Angular Icon Button Styling

To get started with styling the icon button, we need to import the `index` file, where all the theme functions and component mixins live:

```scss
@use "igniteui-angular/theming" as *;
```

Following the simplest approach, we use CSS variables to customize the appearance of the icon button:

```scss
[igxIconButton="contained"] {
    --background: #011627;
    --foreground: #FEFEFE;
    --hover-foreground:  #011627dc;
    --hover-background: #ECAA53;
    --focus-foreground: #011627dc;
    --focus-background: #ECAA53;
    --focus-border-color:  #0116276c;
    --active-foreground: #011627dc;
    --active-background: #ECAA53;
}
```

Take a look at the [`icon-button-theme`]({environment:sassApiUrl}/index.html#function-icon-button-theme) section for a complete list of available parameters for styling any type of icon button.

<code-view style="height: 100px"
           no-theming
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/data-entries/icon-button-styling" >
</code-view>
<div class="divider--half"></div>

## API References
<div class="divider--half"></div>

* [IgxIconButtonDirective]({environment:angularApiUrl}/classes/igxiconbuttondirective.html)
* [IgxIconButton Styles]({environment:sassApiUrl}/index.html#function-icon-button-theme)
* [IgxRippleDirective]({environment:angularApiUrl}/classes/igxrippledirective.html)

## Additional Resources
<div class="divider--half"></div>

Our community is active and always welcoming to new ideas.

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
