---
title: Overlay Styling
_description: A detailed walkthrough that explains how to properly apply and scope styles to elements that are displayed using the IgniteUI for Angular Overlay Service.
_keywords: Ignite UI for Angular, Angular Overlay Service, Angular UI controls, Overlay Service, View Encapsulation Example, Sass scoped styles in Angular, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library
---

# Overlay Styling
<p class="highlight">
[`IgxOverlayService`](overlay.md) is used to display content above the page content. A lot of Ignite UI for Angular components use the overlay - [Drop Down](drop-down.md), [Combo](combo.md), [Date Picker](date-picker.md) and more - so it is important to understand how the overlay displays content.
To display the content above other elements, the service moves it into a special outlet container (attached at the end of the document's body, by default). This behavior can affect styles [scoped to specific container](#scoped-component-styles).
</p>
<div class="divider--half"></div>

## Styling Overlay Components

In most cases [global](themes/sass/global-themes.md) theme styles are not affected by the overlay outlets. For example, let's take a look at a Drop Down, [styled](drop-down.md#styling) by the global [`igx-css-vars`]({environment:sassApiUrl}/index.html#mixin-igx-css-vars) mixin:

```html
<!-- overlay-styling.component.html -->
<igx-drop-down #customDropDown height="350px">
    <igx-drop-down-item *ngFor="let item of items" [value]="item.id">
        {{ item.name }}
    </igx-drop-down-item>
</igx-drop-down>
```

```scss
// styles.scss
@import '~igniteui-angular/lib/core/styles/themes/index';
...

$my-drop-down-theme: igx-drop-down-theme(
    $palette: $my-custom-palette
);

@include igx-css-vars($my-drop-down-theme);
```

The global styles are not generated under a scoped rule and are not affected by any encapsulation, and thus can match any element on the page, including `igx-drop-down-item` the service moved to the overlay outlet.

## Scoped Component Styles

When scoping styles for elements that are displayed in the overlay, we need to specify to the position of the overlay `outlet` in the DOM. CSS rules that are scoped require a specific hierarchical structure of the elements - we need to make sure the overlay content is displayed in the correct context of the styles we want to apply.

For example, let's take the `igx-combo` - its item [styles](combo.md#angular-combobox-styling) use the `igx-drop-down` theme, because the combo defines its content inside of its own view.

> [!NOTE]
> Always scope your styles in a `:host` selector to prevent the styles from leaking.

```scss
// overlay-styling.component.scss
:host {
    @include igx-css-vars($my-drop-down-theme);
}
```

If the `$legacy-support` variable in your theme is set to `true`, you have to style your component, using the component's theme function.

>[!NOTE]
>If the component is using an [`Emulated`](themes/sass/component-themes.md#view-encapsulation) ViewEncapsulation, it is necessary to `penetrate` this encapsulation using `::ng-deep`

```scss
// overlay-styling.component.scss
:host {
   ::ng-deep{ 
        @include igx-drop-down($my-drop-down-theme);
    }
}
```

The items in our combo's list **are not** descendants of our component `host` - they are currently being displayed in the default overlay outlet, at the end of the document's body. You can change this by using the [`outlet`]({environment:angularApiUrl}/interfaces/overlaysettings.html#outlet) property in the `overlaySettings`. The `outlet` controls where the overlay container should be rendered.

Here, we can pass a reference to the element where we'd like our container to be:

```html
<igx-combo [data]="items" valueKey="name" displayKey="name" [overlaySettings]="{ outlet: element, modal: true }">
</igx-combo>
```

```typescript
export class OverlayStylingComponent {
    ...
    constructor(public element: ElementRef) {
    }
}
```

Now, the combo's list of items are properly rendered **inside** of our component's host, which means that our custom theme will take effect:


<code-view style="height: 400px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/interactions/overlay-styling-simple" >
</code-view>


## Styling The Overlay

Now that we've covered how `ViewEncapsulation` works along with the overlay's `outlet` property, we can take a look at how we can style the overlay's wrapper itself.
The [`igx-overlay-theme`]({environment:sassApiUrl}/index.html#function-igx-overlay-theme) exposes a single property - `$background-color`, which affects the color of the backdrop when the overlay is set to `modal: true`.

### Global Styles

The easiest way to style the overlay modal is to include its theme in our app's global styles:

```scss
//  styles.scss
$my-overlay-theme: igx-overlay-theme(
  $background-color: rgba(0, 153, 255, 0.3)
);

@include igx-css-vars($my-overlay-theme);
```

If the `$legacy-support` variable in your theme is set to `true`, you have to style your component, using the overlay's theme function.

```scss
// styles.scss
...
@include igx-overlay($my-overlay-theme);
```        

Now **all** modal overlays will have a purple tint to their background.

### Scoped Overlay Styles

If we want our overlay to have a specific background **only** under a certain component, we can [scope the theme](#scoped-component-styles).
When scoping a modal overlay, you need to move the overlay outlet, which has some [limitations](overlay.md#assumptions-and-limitations). In order to minimize the risks of overflow clipping, z-index and viewport issues, we recommend using outlets for modal overlays only in higher level components:

```scss
//  styles.scss
...
.purple {
    @include igx-css-vars($my-overlay-theme);
}
```

To make sure the theme **does not** affect other components in our app, use the `:host` selector.

```scss
// overlay-styling.component.scss
@import '~igniteui-angular/lib/core/styles/themes/index';
...
:host {
    @include igx-css-vars($my-overlay-theme);
}
```

>[!NOTE]
>If the component is using an [`Emulated`](themes/sass/component-themes.md#view-encapsulation) ViewEncapsulation and the `$legacy-support` is set to `true`, use the overlay's theme function and `penetrate` the encapsulation using `::ng-deep`

## API References
* [IgniteUI for Angular - Theme Library](themes/index.md)
* [IgxOverlay Styles]({environment:sassApiUrl}/index.html#function-igx-overlay-theme)

## Additional Resources
* [IgniteUI for Angular - Theme Library](themes/index.md)
* [Overlay Main Topic](overlay.md)
* [Position strategies](overlay-position.md)
* [Scroll strategies](overlay-scroll.md)
