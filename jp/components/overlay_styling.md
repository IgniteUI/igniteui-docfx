---
title: Overlay Styling
_description: A detailed walkthrough that explains how to properly apply and scope styles to elements that are displayed using the IgniteUI for Angular Overlay Service.
_keywords: Ignite UI for Angular, Angular Overlay Service, Angular UI controls, Overlay Service, View Encapsulation Example, Sass scoped styles in Angular, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library
---

## Overlay Styling
<p class="highlight">

[`IgxOverlayService`](overlay_main.md) is used to display content above some content or the whole page. A lot of Ignite UI for Angular components make use of the overlay - [Drop Down](drop_down.md), [Combo](combo.md), [Date Picker](date_picker.md) and more - so it is important to understand how the overlay displays content.
To show the content above other elements, the service moves it into a special outlet container (attached at the end of the document's body, by default). This behavior can affect styles [scoped to specific container](#scoped-component-styles).
</p>
<div class="divider--half"></div>

## Styling Overlay Components

In the most common use case - defining a theme for our app [globally](themes/global-theme.md) - styles are generally unaffected by the overlay outlets. For examples, let's take a look at a Drop Down, [styled](drop_down.md#styling) by a global [`igx-drop-down-theme` function]({environment:sassApiUrl}/index.html#function-igx-drop-down-theme):

```html
<!-- in overlay-styling.component.html -->
<igx-drop-down #customDropDown height="350px">
    <igx-drop-down-item *ngFor="let item of items" [value]="item.id">
        {{ item.name }}
    </igx-drop-down-item>
</igx-drop-down>
```

```scss
// in styles.scss
@import '~igniteui-angular/lib/core/styles/themes/index';
...

$my-drop-down-theme: igx-drop-down-theme(
    $palette: $my-custom-palette
);

@include igx-drop-down($my-drop-down-theme);
```

The global styles are not generated under a scoped rule and are not affected by any encapsulation, and thus can match any element on the page, including `igx-drop-down-item` the service moved to the overlay outlet.

Alternatively, to limit the style only to our custom component's view, we can sometimes use [`ViewEncapsulation`](themes/component-themes.md#view-encapsulation) without additional considerations for the overlay. This applies to components that display mostly templated content like the Drop Down above or the [`igxToggle`]() directive.

For example, we can define the above styles in our custom component's style file, `overlay-styling.component.scss`.

```scss
// in overlay-styling.component.scss
@import '~igniteui-angular/lib/core/styles/themes/index';
...
@include igx-drop-down($my-drop-down-theme);
```

When using `ViewEncapsulation.Emulated` (the default), styles will be generated the same way as with the app `styles.scss`, with Angular appending a specific attribute selector to each rule. The same attribute is applied to elements initialized **inside** of our custom component's view  - including the `igx-drop-down-item`s. This means the generated styles will still match all elements on the page, based on the attribute, including the ones in the overlay outlet.

However, most of the Ignite UI for Angular components create their own content based on options and/or bound data (e.g. [`igx-combo`](combo.md), [`igx-grid`](grid/grid.md) and more). That requires us to break through the emulated encapsulation using `::ng-deep`, which we in turn have to scope to prevent the styles from affecting our whole app.

### Scoped Component Styles

When scoping styles for elements that are displayed in the overlay, we need to specify to the position of the overlay `outlet` in the DOM. CSS rules that are scoped require a specific hierarchical structure of our elements - we need to make sure the overlay content is displayed in the correct context of the styles we want to apply.

For example, let's take the `igx-combo` - its item [styles](combo.md#styling) make use of the `igx-drop-down` theme, because the combo defines its content inside of its own view. For a custom theme to affect them, when using `ViewEncapsulation.Emulated`, we need to penetrate the encapsulation with `::ng-deep`, scoping our styles so they don't bleed to our whole app:

```scss
// in overlay-styling.component.scss
:host {
    ::ng-deep {
        @include igx-drop-down($my-drop-down-theme);
    }
}
```
The items in our combo's list **are not** descendants of our component `host` - they are currently being displayed in the default overlay outlet, at the end of the `document` body. Changing this is done by making use of the [`outlet`]({environment:angularApiUrl}/interfaces/overlaysettings.html#outlet) property in the `overlaySettings`. The `outlet` controls where the overlay container should be rendered.

Here, we can pass a reference to the element where we'd like our container to be:

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
The [`igx-overlay-theme`]({environment:sassApiUrl}/index.html#function-igx-overlay-theme) exposes a single property - `$background-color` - which affects the color of the backdrop when the overlay is set to `modal: true`.

### Global Styles

The easiest way to style the overlay modal is to include the theme in our app's global styles:

```scss
//  styles.scss
$background-purple: #5443b84a;

$my-overlay-theme: igx-overlay-theme(
    $background-color: $background-purple
);

@include igx-overlay($my-overlay-theme);
```

Now **all** modal overlays will have a purple tint to thier background.

### Scoped Overlay Styles

On the off chance we want our overlay to have a specific background **only** under a certain component, we can [scope the theme](#scoped-component-styles).
When scoping a modal overlay, you need to move the overlay outlet, which has some [limitations](overlay_main.md#assumptions-and-limitations). In order to minimize the risks of overflow clipping, `z-index` and viewport issues, we recommend using outlets for modal overlays only in higher level components:

```scss
//  styles.scss
...
.purple {
    @include igx-overlay($my-overlay-theme);
}
```

>[!NOTE]
> If the component is using an [`Emulated`](themes/component-themes.md#view-encapsulation) ViewEncapsulation, it is necessary to penetrate this encapsulation using `::ng-deep`. This is because the overlay wrapper is created dynamically by the overlay service is **not** part of the component's view.
> To make sure the theme **does not** affect elements in *other components* in our app, we scope the `::ng-deep` statement under `:host`:

```scss
// in overlay-styling.component.scss
@import '~igniteui-angular/lib/core/styles/themes/index';
...
:host {
    ::ng-deep {
        @include igx-overlay($my-overlay-theme);
    }
}
```

## Additional Resources
* [IgniteUI for Angular - Theme Library](themes/index.md)
* [IgxOverlay Styles]({environment:sassApiUrl}/index.html#function-igx-overlay-theme)
* [Overlay Main Topic](overlay_main.md)
