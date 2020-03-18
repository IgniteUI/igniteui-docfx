---
title: Navigation Drawer Component
_description: Implement a user-friendly slide in/out navigation container with complete programmatic control with Ignite UI for Angular Navigation Drawer component.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Navigation Drawer component, Angular Navigation Drawer control
---

## Navigation Drawer
<p class="highlight">The Ignite UI for Angular Navigation Drawer component is a side navigation container. It can rest above content and slide in/out of view or be pinned to expand/collapse within content. A mini version provides quick access to navigation even when closed. The Navigation Drawer features responsive mode selection and touch gestures. Content is completely customizable and can make use of default menu item styling.</p>
<div class="divider"></div>

### Navigation Drawer Demo
<div class="divider--half"></div>

<div class="sample-container loading" style="height: 500px">
    <iframe id="nav-drawer-simple-iframe" frameborder="0" seamless="" width="100%" height="100%" data-src="{environment:demosBaseUrl}/menus/navigation-drawer-simple" class="lazyload"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="nav-drawer-simple-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>

<div class="divider--half"></div>

### Dependencies

>[!NOTE]
>This component requires [`HammerModule`](https://angular.io/api/platform-browser/HammerModule) to be imported in the root module of the application in order for touch interactions to work as expected..

To start with all necessary dependencies you can use the `IgxNavigationDrawerModule` and import it in your application from 'igniteui-angular/navigation-drawer';
```ts
@NgModule({
    imports: [
        IgxNavigationDrawerModule,
        ...
    ]
})
export class AppModule {
}
```

> Alternatively both barrels export the [`IgxNavigationDrawerComponent`]({environment:angularApiUrl}/classes/igxnavigationdrawercomponent.html) and additional directives, so those can be declared/referenced separately if needed.

<div class="divider--half"></div>

### Usage

With the dependencies imported, the Navigation Drawer can be defined in the app component template:

```html
<igx-nav-drawer id="navdrawer" [isOpen]="true">
    <!-- template(s) -->
</igx-nav-drawer>
```
The content for the drawer should be provided via `<ng-template>` decorated with `igxDrawer` directive.
While any content can be provided in the template, the [`igxDrawerItem`]({environment:angularApiUrl}/classes/igxnavdraweritemdirective.html) directive (see [Item styling](#item-styling)) is available to apply out-of-the-box styling to items. The [`igxRipple`](ripple.md) directive completes the look and feel:
```html
<!-- app.component.html -->
<div class="content-wrap">
  <igx-nav-drawer id="navigation" #drawer [isOpen]="true">
    <ng-template igxDrawer>
      <nav>
        <span igxDrawerItem [isHeader]="true">Components</span>
        <span *ngFor="let item of navItems" igxDrawerItem [active]="item.text === selected"
        igxRipple (click)="navigate(item)">
          <igx-icon fontSet="material">{{ item.name }}</igx-icon>
          <span>{{ item.text }}</span>
        </span>
      </nav>
    </ng-template>
  </igx-nav-drawer>
  <main>
    <!-- app content -->
  </main>
</div>
```
> An additional template decorated with `igxDrawerMini` directive can be provided for the alternative [Mini variant](#mini-variant) as closed state.

> [!NOTE]
> The Navigation Drawer can either sit above content or be pinned alongside it and by default will switch between those depending the view size. See [Modes](#modes) for more.

To accommodate for the drawer switching modes, a simple flexible wrapper around the two content sections can be styled like so:
```css
/* app.component.css */
.content-wrap
{
    width: 100%;
    height: 100%;
    display: flex;
}
```

In order to add elements to our navigation drawer and be able to select them, our typescript file should look like this:

```ts
/* app.component.ts */
export class AppComponent {
    public navItems = [
        { name: "account_circle", text: "Avatar" },
        ...
    ];

    public selected = "Avatar";

    public navigate(item) {
        this.selected = item.text;
    }
}
```
There are various ways to open and close the drawer. Input properties can be bound to app state, programatic access to the API in the component using a [`@ViewChild(IgxNavigationDrawerComponent)`](https://angular.io/api/core/ViewChild) reference or even in this case using the `#drawer` [template reference variable](https://angular.io/guide/template-syntax#ref-vars):
```html
<button (click)="drawer.toggle()"> Menu </button>
```
The Navigation Drawer also integrates with [`igxNavigationService`]({environment:angularApiUrl}/classes/igxnavigationservice.html) and can be targeted by id with an [`igxToggleAction`](toggle.md#automatic-toggle-actions) directive.

Let's replace the `<main>` in **app.component.html** with the following, adding [`igxButton`](button.md) and [Icon component](icon.md) to style our toggle:
```html
<main>
  <span igxButton="icon" igxToggleAction="navigation">
    <igx-icon fontSet="material">menu</igx-icon>
  </span>
</main>
```

Also, if you want the drawer to close when you select an item from it, you can use a [`@ViewChild(IgxNavigationDrawerComponent)`](https://angular.io/api/core/ViewChild) reference like that:

```ts
/* app.component.ts */
import { Component, ViewChild } from "@angular/core";
import { IgxNavigationDrawerComponent } from "igniteui-angular";

...

export class AppComponent  {
    @ViewChild(IgxNavigationDrawerComponent, { static: true })
    public drawer: IgxNavigationDrawerComponent;

    // And of couse add the key line to our navigate function

    public navigate(item) {
        this.selected = item.text;
        this.drawer.close();
    }
}
```

If everything went well, you should see the demo sample in your browser.

<div class="divider--half"></div>

### Modes

Unpinned (elevated above content) mode is the normal behavior where the drawer sits above and applies a darkened overlay over all content. Generally used to provide a temporary navigation suitable for mobile devices. 

The drawer can be pinned to take advantage of larger screens, placing it within normal content flow with relative position. Depending on whether the app provides a way to toggle the drawer, the pinned mode can be used to achieve either [permanent or persistent behavior](https://material.io/guidelines/patterns/navigation-drawer.html#navigation-drawer-behavior).

> [!NOTE]
> By default the Navigation Drawer is responsive, actively changing between unpinned and pinned mode based on screen size. This behavior is controlled by the [`pinThreshold`]({environment:angularApiUrl}/classes/igxnavigationdrawercomponent.html#pinthreshold) property and can be disabled by setting a falsy value (e.g. 0).


#### Pinned (persistent) setup
Pin changes the position of the drawer from `fixed` to `relative` to put it on the same flow as content. Therefore, the app styling should account for such layout, especially if the drawer needs to be toggled in this mode. While there's more than one way to achieve such fluid layout (including programmatically), the easiest way is using [`igxLayout`]({environment:angularApiUrl}/classes/igxlayoutdirective.html) and [`igxFlex`]({environment:angularApiUrl}/classes/igxflexdirective.html) directives.

Here's how that would look applied to the previous example: 
```html
<div class="content-wrap" igxLayout igxLayoutDir="row">
    <igx-nav-drawer id="navigation" #drawer [isOpen]="true" [pin]="true" [pinThreshold]="0">
        <!-- template(s) -->
    </igx-nav-drawer>
    <main igxFlex>
        <!-- content here -->
    </main>
</div>
```
```css
.content-wrap {
    width: 100%;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
}
```

Now the changed example should look like that:

<div class="sample-container loading" style="height: 500px">
    <iframe id="nav-drawer-pin-iframe" frameborder="0" seamless="" width="100%" height="100%" data-src="{environment:demosBaseUrl}/menus/navigation-drawer-pin" class="lazyload"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="nav-drawer-pin-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>

The drawer applies `flex-basis` on its host element, allowing the rest of the content to take up the remaining width.
Alternatively, skipping using directives, manual styling can be applied similar to:
```css
.main {
    position: absolute;
    display: flex;
    flex-flow: row nowrap;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
}

.main > * {
    width: 100%;
}
```

#### Mini variant
With the mini variant the Navigation Drawer changes its width instead of closing.
Most commonly used to maintain quick selection available on the side at all times, leaving just the icons.
This variant is enabled simply by the presence of an alternative mini template decorated with `igxDrawerMini` directive.

The mini variant is commonly used in a persistent setup, so we've set `pin` and disabled the responsive threshold:
```html
<igx-nav-drawer id="navigation" [pin]="true" [pinThreshold]="0">
    <ng-template igxDrawer>
        <span *ngFor="let item of navItems" igxDrawerItem [active]="item.text === selected" igxRipple (click)="navigate(item)">
          <igx-icon fontSet="material">{{ item.name }}</igx-icon>
          <span>{{ item.text }}</span>
        </span>
    </ng-template>
    <ng-template igxDrawerMini>
        <span *ngFor="let item of navItems" igxDrawerItem [active]="item.text === selected" igxRipple (click)="navigate(item)">
            <igx-icon fontSet="material">{{ item.name }}</igx-icon>
        </span>
    </ng-template>
</igx-nav-drawer>
```

<div class="sample-container loading" style="height: 400px">
    <iframe id="nav-drawer-mini-iframe" frameborder="0" seamless="" width="100%" height="100%" data-src="{environment:demosBaseUrl}/menus/navigation-drawer-mini" class="lazyload"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="nav-drawer-mini-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>

<div class="divider--half"></div>

### Item Styling

The content of the Navigation Drawer can be anything provided by the template, however for scenarios using the standard list of navigation items the optional [`igxDrawerItem`]({environment:angularApiUrl}/classes/igxnavdraweritemdirective.html) directive can be used to style them. This will apply default styles and patterns to your items as well as the appropriate theme colors.

The directive has two `@Input` properties:
- `active` to style an item as selected.
- `isHeader` to style an item as a group header, cannot be active.

```html
<!-- ... -->
<ng-template igxDrawer>
    <span igxDrawerItem [isHeader]="true"> Header </span>
    <span igxDrawerItem [active]="true"> Selected Item </span>
<!-- ... -->
```
The directive is exported both from the main `IgxNavigationDrawerModule` and separately as `IgxNavDrawerItemDirective`.

<div class="divider--half"></div>

#### Example: Use default item styles with Angular Router
To make use of the [`igxDrawerItem`]({environment:angularApiUrl}/classes/igxnavdraweritemdirective.html) directive to style items normally the `active` input should be set, however with routing that state is controlled externally.
Take the following items defined in `app`:
```typescript
export class AppComponent {
    public componentLinks = [
        {
            link: "/avatar",
            name: "Avatar"
        },
        {
            link: "/badge",
            name: "Badge"
        }
        // ...
    ];
}
```
One way to tie in the active state is to directly use the [`routerLinkActive`](https://angular.io/api/router/RouterLinkActive) default functionality and pass the drawer items active class `igx-nav-drawer__item--active`, so the `<igx-nav-drawer>` template would look like:

```html
<!-- ... -->
<ng-template igxDrawer>
    <nav>
        <span *ngFor="let item of componentLinks" routerLink="{{item.link}}"
            igxDrawerItem igxRipple 
            routerLinkActive="igx-nav-drawer__item--active" >
                {{item.name}}
        </span>
    </nav>
</ng-template>
<!-- ... -->
```
This approach, of course, does not affect the actual directive active state and could be affected by styling changes. An alternative would be the more advanced use of `routerLinkActive` where it's assigned to a template variable and the `isActive` can be used for binding:
```html
<!-- ... -->
<ng-template igxDrawer>
    <nav>
        <span *ngFor="let item of componentLinks" routerLink="{{item.link}}"
            routerLinkActive #rla="routerLinkActive"
            igxDrawerItem igxRipple [active]="rla.isActive">
                {{item.name}}
        </span>
    </nav>
</ng-template>
<!-- ... -->
```

<div class="divider--half"></div>

### API Reference
* [IgxNavigationDrawerComponent]({environment:angularApiUrl}/classes/igxnavigationdrawercomponent.html)
