---
title: Overlay Styling
_description: A detailed walkthrough that explains how to properly apply and scope styles to elements that are displayed using the IgniteUI for Angular Overlay Service.
_keywords: Ignite UI for Angular, Angular Overlay Service, Angular UI controls, Overlay Service, View Encapsulation Example, Sass scoped styles in Angular, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library
---

## Introduction
<p class="highlight">

[`IgxOverlayService`](overlay_main.md) dynamically inserts elements in the DOM. In this topic, we'll go over styling those elements (and components that use the overlay).
</p>
<div class="divider--half"></div>

## Premise
Let's review the following example - we want to display two [`igx-drop-down`](drop_down.md) components in one view. We want one of them to be styled with a custom theme and the other to use the default theme.
We want the overlay to be `modal: true` for both of them and have a different background color depending on the drop-down (the custom one should have a custom style).

For this example, we define our `OverlayStylingComponent`, including the following in the template:

```html
<!-- overlay-styling.component.ts -->
<button igxButton [igxToggleAction]="customDropDown" [overlaySettings]="{ modal: true }"
    [igxDropDownItemNavigation]="customDropDown">
    Custom
</button>
<igx-drop-down #customDropDown height="350px">
    <igx-drop-down-item *ngFor="let item of items" [value]="item.id" [isHeader]="item.header"
        [selected]="item.id === 102">
        {{ item.name }}
    </igx-drop-down-item>
</igx-drop-down>

<button igxButton [igxToggleAction]="defaultDropDown" [overlaySettings]="{ modal: true }"
    [igxDropDownItemNavigation]="defaultDropDown">
    Default
</button>
<igx-drop-down #defaultDropDown height="350px">
    <igx-drop-down-item *ngFor="let item of items" [value]="item.id" [isHeader]="item.header"
        [selected]="item.id === 102">
        {{ item.name }}
    </igx-drop-down-item>
</igx-drop-down>
```

In our `overlay-styling.component.ts`, in addition to the `items` array we want to show, we define that our component should expose its `Host` `ElementRef` inside of the constructor:

```typescript
// overlay-styling.component.ts
@Component({
    selector: "app-overlay-styling",
    styleUrls: ["overlay-styling.component.scss"],
    templateUrl: "overlay-styling.component.html"
})
export class OverlayStylingComponent {
    public items = [
        {
            name: "Group 1",
            header: true,
            id: 1
        }, { name: "Option 1", id: 100 }, { name: "Option 2", id: 101 }, { name: "Option 3", id: 102 },
        {
            name: "Group 2",
            header: true,
            id: 2
        }, { name: "Option 1", id: 200 }, { name: "Option 2", id: 201 }, { name: "Option 3", id: 202 }
    ];

    constructor(public element: ElementRef) {
    }
}
```

## Styling

### Including Styles

In order to use the [IgniteUI Theming Library](themes/index.md), we must first import the theme `index` file in our global styles:

```scss
@import '~igniteui-angular/lib/core/styles/themes/index';
...
```
Now we can make use of all of the functions exposed by the IgniteUI theme engine.

### Defining a palette

After we've properly imported the index file, we create a custom palette that we can use. Let's define two colors that we like and use them to build a palette with [`igx-palette`](themes/palettes.md):

```scss
$red: #ac4365;
$purple: #5434b8;

$my-palette: igx-palette($primary: $red, $secondary: $purple);
```

### Defining themes

We can now define the theme using our palette. In the example, we are using `igx-drop-down`, so we need to use [`igx-drop-down-theme`]({environment:sassApiUrl}/index.html#function-igx-drop-down-theme) to generate a theme for the component:

```scss
$my-drop-down-theme: igx-drop-down-theme(
    $palette: $my-palette
);
```
You can read more about styling the drop-down [here](drop_down.md#styling)

In order to style the Overlay's modal background, we also use [`igx-overlay-theme`]({environment:sassApiUrl}/index.html#function-igx-overlay-theme):

```scss
$background-purple: #5443b84a;

$my-overlay-theme: igx-overlay-theme(
    $background-color: $background-purple
);
```

### Applying the themes

The easiest way to apply our theme is to `@include` the [`igx-drop-down`]({environment:sassApiUrl}/index.html#mixin-igx-drop-down) and [`igx-overlay`]({environment:sassApiUrl}/index.html#mixin-igx-overlay) mixins in our global styles file (typically `styles.scss`):

```scss
@include igx-overlay($my-overlay-theme)
@include igx-drop-down($my-drop-down-theme)
```

This will apply our custom themes to **all** instances of Drop Downs and to **all** modal overlays, regardless of where they are spawned from.

### Scoping Drop Down Theme

In order to better explain how the theme is applied to the drop-down and its items, we need to first take some time to explain how Angular's [ViewEncapsulation](https://angular.io/guide/component-styles#view-encapsulation) works. `ViewEncapsulation` takes care of our styles being scoped to a certain part (component) of our application. As stated in the official Angular documentation, we can define what `ViewEncapsulation` is used by our component. For this example, we'll discuss the default one - `ViewEncapsulation.Emulated`.

If we want our themes to affect only the elements under our example component, we need to properly scope the styles.
The first thing we can do is move all of the styles defined in the previous steps (including the [import statement](#including-styles)) to our component's `style` file, `overlay-styling.component.scss`.

If we just move the `@include` statements in our component's style file, both of our drop-down's are styled with our custom theme - the `igx-drop-down-items` are *initialized* in our component's template and, even though they are placed under the document's `body` tag (by default), our component's scoped styles still apply to them.

### Managing Overlay Outlet

If we want to scope only one of the drop-downs, while the other remains unaffected by the theme, we can move our `@include` statement for the drop-down theme under a `:host` selector. This way, the styles will only affect components that are actually rendered *inside* of our component's host element. 

```scss
    :host {
        @include igx-drop-down($my-drop-down-theme);
    }
```

To do this, we need to change the [`outlet`]({environment:angularApiUrl}/interfaces/overlaysettings.html#outlet) in the `overlaySettings` with which the overlay's [`show`]({environment:angularApiUrl}/classes/igxoverlayservice.html#show) method is called. In our example we can do this by passing custom overlay settings to the [`igxToggleAction directive`]({environment:angularApiUrl}/classes/igxtoggleactiondirective.html)'s [`overlaySettings`]({environment:angularApiUrl}/classes/igxtoggleactiondirective.html#overlaysettings) input. This way, the overlay's container will not be attached under our component's body and the included themes under `:host` will properly take effect:

```html
<!-- overlay-styling.component.ts -->
<button igxButton [igxToggleAction]="customDropDown" [overlaySettings]="{ outlet: element, modal: true }"
    [igxDropDownItemNavigation]="customDropDown">
    Custom
</button>
<igx-drop-down #customDropDown height="350px">
    <igx-drop-down-item *ngFor="let item of items" [value]="item.id" [isHeader]="item.header"
        [selected]="item.id === 102">
        {{ item.name }}
    </igx-drop-down-item>
</igx-drop-down>
...
```

The drop-down theme is now properly applying to the drop-down with the defined outlet.

### Scoping Overlay Theme

Scoping the overlay theme is done similarly. If we just have the `@include` in our component's .scss file, the styles do not properly apply to the modal background - regardless if the overlay's outlet is the default one or our component's host. This is because the overlay wrapper is created dynamically each time we show something with the overlay service. These dynamically created DOM pieces are not part of any component's view and therefore **will not** be affected by our component's scoped styles.

To style the modal background, we need to penetrate Angular's `ViewEncapsulation` by using `::ng-deep`.

```scss
// overlay-styling.component.scss
:host {
    ::ng-deep {
        @include igx-overlay($my-overlay-theme);
    }
}
```

 >[!NOTE]
 > If the component is using an [`Emulated`](themes/component-themes.md#view-encapsulation) ViewEncapsulation, it is necessary to penetrate this encapsulation using `::ng-deep`. To make sure the theme **does not** affect elements in *other components* in our app, we scope the `::ng-deep` statement under `:host`

### Demo

The result of applying the above styles can be seen in the below demo:

<div class="sample-container loading" style="height: 400px">
    <iframe id="overlay-styling-iframe" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/interactions/overlay-styling" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="overlay-styling-iframe" data-demos-base-url="{environment:demosBaseUrl}">View on Stackblitz</button>
</div>
<div class="divider--half"></div>

## Additional Resources
* [IgniteUI for Angular - Theme Library](themes/index.md)
* [Overlay Main Topic](overlay_main.md)
* [Position strategies](overlay_position.md)
* [Scroll strategies](overlay_scroll.md)
