---
title: Overlay Styling
_description: A detailed walkthrough that explains how to properly apply and scope styles to elements that are displayed using the IgniteUI for Angular overlay service.
_keywords: Ignite UI for Angular, Angular Overlay Service, Angular UI controls, Overlay Service, View Encapsulation example, Sass scoped styles in Angular, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library
---

## Introduction
<p class="highlight">

Since the [`IgxOverlayService`](overlay_main.md) dynamically inserts elements in the DOM, styling components that use it can get a bit tricky. In this topic, we'll go over different scenarios that showcase how components, making use the overlay, can be styled.
</p>
<div class="divider--half"></div>

## Getting Started

### Premise
Let's review the following sample - we want to display two [`igx-drop-down`](drop_down.md) components in one view. We want one of them to be styled with a custom theme and the other to use the default theme.
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

### Including Styles

In order to use the [theme engine](theme/index.md), we must first import the theme `index` file in our global styles:

```scss
@import '~igniteui-angular/lib/core/styles/themes/index';
...
```

Now we can make use of all of the functions exposed by the IgniteUI theme engine.

## Styling components

### Define a palette

After we've properly [imported the index file](#including-styles), we can create a custom palette that we'd like to use. Let's define two colors that we like and use them to build a palette with [`igx-palette`](themes/palettes.md):

```scss
$red: #ac4365;
$purple: #5434b8;

$my-palette: igx-palette($primary: $red, $secondary: $purple);
```

### Define a theme

We can now define the theme using our palette. In the example, we are using `igx-drop-down`, so we need to use `igx-drop-down-theme` to generate a theme for the component:

```scss
$my-drop-down-theme: igx-drop-down-theme(
    $palette: $my-palette
);
```

You can read more about styling the drop-down [here](drop_down.md#PENDING_LINK)

### Apply the theme

Now comes the tricky part. In order to better explain how the theme is applied to the drop-down and its items, we need to first take some time to explain how Angular's [ViewEncapsulation](https://angular.io/guide/component-styles#view-encapsulation) works.

#### Assumptions

As we know, `ViewEncapsulation` is *that thing* that allows our styles to be scoped to a certain part (component) of our application.
As stated in the official Angular documentation, we can define what `ViewEncapsulation` is used by our component. For this example, we'll discuss the default one - `ViewEncapsulation.Emulated`.

#### Example Premise

Currently, our component has the following:
    - two buttons (which we will not be explicitly styling)
    - two `igx-drop-down` (one of which we would like to style)
        - the `igx-drop-down` tags accept `igx-drop-down-items` which are passed as `ng-content` to their components' views

In the example we'll review the different ways that `ViewEncapsulation.ShadowDom` will interact with our components' styling.

#### Including the theme

The easiest way to include our theme is to just the sass `@inlcude` straight in our component's `.scss` file. After we've defined our theme, we just apply it to the whole context of our component:
```scss
// in overlay-styling.component.scss
@include igx-drop-down($my-drop-down-theme);

```
Now, both our drop-downs will use the custom theme.

If we inspect the styles, we can see that the scoping is done using the attributes with which Angular emulated ShadowDom encapsulation. These custom attribute applied to all tags that are in our component's view and begin with either `_nghost` (for the element that represent that component's `host` in the DOM) or `_ngcontent`(for elements in the component's view). For example, the styles generated for the `igx-drop-down-item` are with a selector `.igx-drop-down__item[_ngcontent-xyz]`, as these are *initialized* in the view of our `OverlayStylingComponent` and then *projected* (via `ng-content`) to the body of our `igx-drop-down`.

#### Overlay theme

In order to better illustrate view encapsulation, let's apply some styles to the overlay container as well. For that, we can use the `igx-overlay-theme` function that is exposed by the theme engine. Let's make the backdrop of our overlay containers have a shade of purple:

```scss
    $my-overlay-theme: igx-overlay-theme($background-color: #5434b848);
    @include igx-overlay($my-overlay-theme);
```

Even after we `@include` the theme in our component, it does not seem to have any affect on the overlay backdrop. If we inspect the generated styles, we will see that a style is generated for e.g. the overlay container - `.igx-overlay__wrapper--modal[_ng-content-xyz]`. However, we notice that this style is scoped to our component's view, but the overlay itself is not actually present inside of the view - it is rendered in the default overlay outlet - the very last element inside of our page's `body` tag.



## Styling overlay

## Additional Resources
* [Position strategies](overlay_position.md)
* [Scroll strategies](overlay_scroll.md)
