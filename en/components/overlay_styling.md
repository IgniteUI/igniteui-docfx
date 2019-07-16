---
title: Overlay Styling
_description: A detailed walkthrough that explains how to properly apply and scope styles to elements that are displayed using the IgniteUI for Angular Overlay Service.
_keywords: Ignite UI for Angular, Angular Overlay Service, Angular UI controls, Overlay Service, View Encapsulation Example, Sass scoped styles in Angular, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library
---

## Introduction
<p class="highlight">

[`IgxOverlayService`](overlay_main.md) is used to display content above some content or the whole page. A lot of `Ignite UI for Angular` components make use of the overlay - [Drop Down](drop_down.md), [Combo](combo.md), [Date Picker](date_picker.md) - so it is important to understand how the overlay displays content.
To show the content above other elements, the overlay moves it into a special outlet container (attached at the end of the document's body, by default). This behavior can lead to specific CSS rules (e.g. hierarchically scoped CSS) to not work as expected.
</p>
<div class="divider--half"></div>

## Styling Components

In order to better understand how the overlay affects component styling, let's take a look at some common examples.
One of the components that makes use of the overlay is the [`IgxDropDown`](drop_down.md). The overlay displays the drop-down's list of items in an overlay container. This container is, by default, positioned at the end of the document's body.
In the following section, we'll review how styling the drop-down is affected by the overlay.

### Global Styles

If we want to style our drop-downs, the easiest way to do is using the [`igx-drop-down-theme` function]({environment:sassApiUrl}/index.html#function-igx-drop-down-theme) to create a custom theme and apply it [`globally`](themes/global-theme.md) in our application.
Let's consider the following example - we have a custom component that renders a button that displays drop-down:

```html
<!-- overlay-styling.component.html -->
<button igxButton [igxToggleAction]="customDropDown"
    [igxDropDownItemNavigation]="customDropDown">
    Custom
</button>
<igx-drop-down #customDropDown height="350px">
    <igx-drop-down-item *ngFor="let item of items" [value]="item.id" [isHeader]="item.header"
        [selected]="item.id === 102">
        {{ item.name }}
    </igx-drop-down-item>
</igx-drop-down>
```
In order to style it, we just define a global theme in our app's `style.scss` file and apply it with the `@include` statement:

```scss
// styles.scss

@import '~igniteui-angular/lib/core/styles/themes/index';

$red: #ac4365;
$purple: #5434b8;

$my-palette: igx-palette($primary: $red, $secondary: $purple);

$my-drop-down-theme: igx-drop-down-theme(
    $palette: $my-palette
);

@include igx-drop-down($my-drop-down-theme);
```

With our styles defined by the [`igx-drop-down`]({environment:sassApiUrl}/index.html#mixin-igx-drop-down) and added to the global styles file, **all** drop-downs in our application will now use our custom theme.
This is because the global styles that are generated only target the components' class as selectors. So no matter where the content is our drop-down's list is positioned, be it in our custom component's host or at the end of the document body, the styles will always be applied to the items.

If we want to limit our theme to affect only drop-downs in our custom compnent, we need to take advantage of Angular's [`ViewEncapsulation`](themes/component-themes.md#view-encapsulation)

### Component Styles

To have our theme apply **only** to the drop-down defined in our custom component, we can move all of the styles (including the `themes/index` import) to our custom component's style file, `overlay-styling.component.scss`:

#### Demo

<div class="sample-container loading" style="height: 400px">
    <iframe id="overlay-styling-iframe" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/interactions/overlay-styling" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="overlay-styling-iframe" data-demos-base-url="{environment:demosBaseUrl}">View on Stackblitz</button>
</div>

The drop-down looks exactly as it did when the styles were globally applied. However, if we have another drop-down, defined somewhere outisde of our component, it will use the default theme instead of our custom one.
If we take a look at the generated styles from our custom component's themes, we can see that they are scoped by a custom attribute. This attribute is applied to all component hosts and their content - this is they way Angular handles `ViewEncapsulation` when it's set to `Emulated` (the default value).

If we take a look at where the conent of the drop-down is displayed, we'll find that it's outside of the component's host, still at the end of the body. However, the items that are displayed in this container were initialized **inside** of our custom component's view and, therefore, are valid targets for the generated scoped styles.

This happens because the drop-down renders *user defined content*. In the example component markup, *we* define the items for the content that will be shown inside the drop-down list. However, most of the `Ignite UI for Angular` components render at their own content based on options and/or bound data (e.g. [`igx-combo`](combo.md), [`igx-grid`](grids/grid.md)).

#### Bound Component

In our example, let's replace the drop-down with an `igx-combo`:
```html
<!-- in overlay-styling.component.html -->
<igx-combo [data]="items" valueKey="name" displayKey="name"></igx-combo>
```

The `igx-combo`'s item [styles](combo.md#styling) make use of the `igx-drop-down` theme, so they should be affected by our custom theme. However, they are not.
This is because the combo defines its own content inside of its own view. Since we're using `ViewEncapsulation.Emulated`, we need to penetrate the encapsulation in order for our styles to have any affect. However, when using `::ng-deep`, we need to scope our styles so they don't bleed to our whole app.

We can do the following:
```scss
// in overlay-styling.component.scss
:host {
    ::ng-deep {
        @include igx-drop-down($my-drop-down-theme);
    }
}
```
This defines the palette and has it affect all children of our component's host. However, the items in our combo's list **are not** descendants of our component - they are currently being displayed in the default overlay outlet, outside of our component.

We need to change that, so the overlay container is renders inside of our custom component's host. This is done by making use of the [`outlet`]({environment:angularApiUrl}/interfaces/overlaysettings.html#outlet) property in the `overlaySettings`. The `outlet` controls where the overlay container should be rendered. Here, we can pass a reference to the element where we'd like our container to be:

```html
<igx-combo [data]="items" valueKey="name" displayKey="name" [overlaySettings]="{ outlet: element }">
</igx-combo>
```

```typescript
export class OverlayStylingComponent {
    ...
    constructor(public element: ElementRef) {
    }
}
```

Now, the combo's list of items is properly rendered **inside** of our component's host, which means that our custom theme will take effect:

<div class="sample-container loading" style="height: 400px">
    <iframe id="overlay-styling-simple-iframe" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/interactions/overlay-styling-simple" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="overlay-styling-simple-iframe" data-demos-base-url="{environment:demosBaseUrl}">View on Stackblitz</button>
</div>

## Styling Overlay

Now that we've covered how `ViewEncapsulation` works together with the overlay's `outlet` property, we can take a look at how we can style the overlay wrapper itself.
The [`igx-overlay-theme`]({environment:sassApiUrl}/index.html#function-igx-overlay-theme) exposes only one property - `$background-color` - which affects the color of the backdrop when the overlay is set to modal.

### Global Styles

The easiest way to style the overlay modal is, once again, to include the theme in our app's global styles. This will affect **all** modal overlays across our application:

```scss
//  styles.scss
$background-purple: #5443b84a;

$my-overlay-theme: igx-overlay-theme(
    $background-color: $background-purple
);

@include igx-overlay($my-overlay-theme);
```

Now all *modal* overlays will have a purple tint to they background

### Component Styles

On the off chance we want our overlay to have a specific background **only** under a certain component, we can scope the theme as we did [earlier in the combo example](#bound-component). We need to move to move the styles we defined (including the `theme/index` import) to our component's styles file:

```scss
@import '~igniteui-angular/lib/core/styles/themes/index';
...
$background-purple: #5443b84a;

$my-overlay-theme: igx-overlay-theme(
    $background-color: $background-purple
);

:host {
    ::ng-deep {
        @include igx-overlay($my-overlay-theme);
    }
}
```
Regardless if the overlay's outlet is the default one or our component's host, the styles will not apply, unless we use `::ng-deep`. This is because the overlay wrapper is created dynamically each time we show something with the overlay service. These dynamically created DOM pieces are not part of any component's view and therefore **will not** be affected by our component's scoped styles.

 >[!NOTE]
 > If the component is using an [`Emulated`](themes/component-themes.md#view-encapsulation) ViewEncapsulation, it is necessary to penetrate this encapsulation using `::ng-deep`. To make sure the theme **does not** affect elements in *other components* in our app, we scope the `::ng-deep` statement under `:host`

## Additional Resources
* [IgniteUI for Angular - Theme Library](themes/index.md)
* [Overlay Main Topic](overlay_main.md)
* [Position strategies](overlay_position.md)
* [Scroll strategies](overlay_scroll.md)
