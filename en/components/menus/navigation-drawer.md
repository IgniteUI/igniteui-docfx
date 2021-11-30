# Angular Navigation Drawer Overview

The Infragistics Angular Navigation Drawer is a WebComponent that provides side navigation. It can be expanded or collapsed within the content. A mini version provides quick access to navigation even when closed. Its content is completely customizable while also providing default menu item styling.

## Angular Navigation Drawer Example

<code-view style="height: 300px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/menus/nav-drawer-add-drawer-items"
           alt="Angular Navigation Drawer Items Example"
           github-src="menus/nav-drawer/add-drawer-items">
</code-view>

## Usage

To get started with the [`IgcNavDrawerComponent`]({environment:wcApiUrl}/classes/igcnavdrawercomponent.html), first you need to install Ignite UI for Angular by executing the following command:

```cmd
npm install {PackageComponents}
```

Next, you need to import the package in your typescript file where you want to use it:

```ts
import 'igniteui-webcomponents';
```

## Adding Navigation Drawer Items

After the Navigation Drawer component is imported, we are ready to start using it! We can add the following code that displays a simple Navigation Drawer with some items:

If all went well, you should see the following in your browser:

<code-view style="height: 300px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/menus/nav-drawer-add-drawer-items"
           alt="Angular Navigation Drawer Items Example"
           github-src="menus/nav-drawer/add-drawer-items">
</code-view>

While any content can be provided in the drawer, the [`igc-nav-drawer-item`]({environment:wcApiUrl}/classes/igcnavdraweritemcomponent.html) is available to apply out-of-the-box styling to the items.

To enhance our component a bit, we can use it in conjunction with the [`IgcNavbarComponent`]({environment:wcApiUrl}/classes/igcnavbarcomponent.html). This way we can achieve a more completed look and use the drawer's methods. Let's look at how we can use this in the next example:

Let's also add some radio buttons to display all [`position`]({environment:wcApiUrl}/classes/igcnavdrawercomponent.html#position) values. This way whenever one gets selected, we will change the position of the drawer.

And finally, we need a way to open and close our navigation drawer. There are a couple of ways to achieve this, but for the sake of this example we will do the following:

If all goes well, your component should now look like this:

<code-view style="height: 500px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/menus/nav-drawer-add-positions-navbar"
           alt="Angular Navigation Drawer Navbar Example"
           github-src="menus/nav-drawer/add-positions-navbar">
</code-view>

## Mini Variant

With the mini variant, the Navigation Drawer changes its width instead of closing. It is used to maintain quick navigation, available at all times, leaving just the icons. To achieve that, you only need to set up the `mini` slot of the drawer.

And here's the result:

<code-view style="height: 500px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/menus/nav-drawer-add-mini"
           alt="Angular Navigation Drawer Mini Example"
           github-src="menus/nav-drawer/add-mini">
</code-view>

## Styling the Navigation Drawer

The navigation drawer component exposes several CSS parts - `base`, `main`, and `mini`. The navigation drawer item component exposes three CSS parts as well - `base`, `icon` and `content`, giving you full control over their styling.

```scss
igc-nav-drawer::part(base) {
    background: #2d313a;
}

igc-nav-drawer-item::part(base) {
    color: #fff;
}

igc-nav-drawer-item::part(base):hover {
    background-color: #3D4149;
}

igc-nav-drawer-item[active]::part(base) {
    background: #f3c03e;
    color: #2c2c2c
}

igc-nav-drawer-header-item {
    color: #f3c03e
}
```

<code-view style="height: 500px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/menus/nav-drawer-styling"
           alt="Angular Navigation Drawer Styling Example"
           github-src="menus/nav-drawer/styling">
</code-view>

## API References

-   [IgcNavDrawerComponent]({environment:wcApiUrl}/classes/igcnavdrawercomponent.html)
-   [IgcNavDrawerItemComponent]({environment:wcApiUrl}/classes/igcnavdraweritemcomponent.html)
-   [IgcNavDrawerHeaderItemComponent]({environment:wcApiUrl}/classes/igcnavdrawerheaderitemcomponent.html)

Additional Web Components that were used:

-   [IgcIconComponent]({environment:wcApiUrl}/classes/igciconcomponent.html)
-   [IgcButtonComponent]({environment:wcApiUrl}/classes/igcbuttoncomponent.html)
-   [IgcRadioComponent]({environment:wcApiUrl}/classes/igcradiocomponent.html)
-   [IgcRadioGroupComponent]({environment:wcApiUrl}/classes/igcradiogroupcomponent.html)

## Additional Resources

<div class="divider--half"></div>

Our community is active and always welcoming to new ideas.

-   [Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-webcomponents)
-   [Angular **GitHub**](https://github.com/IgniteUI/igniteui-webcomponents)
