---
title: Angular Navigation Drawer Component – Ignite UI for Angular | Infragistics
_description: Implement a user-friendly slide in/out navigation container with complete programmatic control with Ignite UI for Angular Navigation Drawer component.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Navigation Drawer component, Angular Navigation Drawer control
---

# Angular Navigation Drawer Component Overview

<p class="highlight">The Ignite UI for Angular Navigation Drawer component is a side navigation container. It can rest above content and slide in/out of view or be pinned to expand/collapse within the content. A mini version provides quick access to navigation even when closed. The Navigation Drawer features responsive mode selection and touch gestures. Content is completely customizable and can make use of default menu item styling.</p>

## Angular Navigation Drawer Example

<div class="divider--half"></div>

<code-view style="height: 500px; border: 1px solid #D4D4D4;" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/menus/navigation-drawer-simple" alt="Angular Navigation Drawer Example">
</code-view>

<div class="divider--half"></div>

## Getting Started with Ignite UI for Angular Navigation Drawer

To get started with the Ignite UI for Angular Navigation Drawer component, first you need to install Ignite UI for Angular. In an existing Angular application, type the following command:

```cmd
ng add igniteui-angular
```

For a complete introduction to the Ignite UI for Angular, read the [*getting started*](general/getting-started.md) topic.

The first step is to import the `IgxNavigationDrawerModule` inside our **app.module.ts** file.

> [!NOTE]
> The [`IgxNavigationDrawerComponent`]({environment:angularApiUrl}/classes/igxnavigationdrawercomponent.html) also depends on the [`BrowserAnimationsModule`](https://angular.io/api/platform-browser/animations/BrowserAnimationsModule) and **optionally** the [`HammerModule`](https://angular.io/api/platform-browser/HammerModule) for touch interactions, so they need to be added to the AppModule as well:

```typescript
// app.module.ts
...
import { HammerModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IgxNavigationDrawerModule } from 'igniteui-angular';
// import { IgxNavigationDrawerModule } from '@infragistics/igniteui-angular'; for licensed package

@NgModule({
    ...
    imports: [..., BrowserAnimationsModule, HammerModule, IgxNavigationDrawerModule],
    ...
})
export class AppModule {}
```

Alternatively, as of `16.0.0` you can import the `IgxNavigationDrawerComponent` as a standalone dependency, or use the [`IGX_NAVIGATION_DRAWER_DIRECTIVES`](https://github.com/IgniteUI/igniteui-angular/blob/master/projects/igniteui-angular/src/lib/navigation-drawer/public_api.ts) token to import the component and all of its supporting components and directives.

```typescript
// home.component.ts

import { HammerModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgFor } from '@angular/common';
import { IGX_NAVIGATION_DRAWER_DIRECTIVES, IgxRippleDirective, IgxIconComponent } from 'igniteui-angular';
// import { IGX_NAVIGATION_DRAWER_DIRECTIVES, IgxRippleDirective, IgxIconComponent } from '@infragistics/igniteui-angular'; for licensed package

@Component({
  selector: 'app-home',
  template: `
    <div class="content-wrap">
      <igx-nav-drawer [isOpen]="true">
        <ng-template igxDrawer>
            <span igxDrawerItem [isHeader]="true">Components</span>
            <span
              *ngFor="let item of navItems"
              igxDrawerItem
              [active]="item.text === selected"
              igxRipple
              (click)="navigate(item)"
            >
              <igx-icon fontSet="material">{{ item.name }}</igx-icon>
              <span>{{ item.text }}</span>
            </span>
        </ng-template>
      </igx-nav-drawer>
      <main>
        <!-- app content -->
      </main>
    </div>
  `,
  styleUrls: ['home.component.scss'],
  standalone: true,
  imports: [BrowserAnimationsModule, HammerModule, IGX_NAVIGATION_DRAWER_DIRECTIVES, IgxRippleDirective, IgxIconComponent, NgFor],
  /* or imports: [BrowserAnimationsModule, HammerModule, IgxNavigationDrawerComponent, IgxNavDrawerTemplateDirective, IgxNavDrawerItemDirective, IgxIconComponent, IgxRippleDirective, NgFor] */
})
export class HomeComponent {
  public navItems: Product[];
}
```

Now that you have the Ignite UI for Angular Navigation Drawer module or directives imported, you can start using the `igx-nav-drawer` component.

## Using the Angular Navigation Drawer

With the dependencies imported, the Navigation Drawer can be defined in the app component template:

```html
<igx-nav-drawer id="navdrawer" [isOpen]="true">
  <!-- template(s) -->
</igx-nav-drawer>
```

The content for the drawer should be provided via `<ng-template>` decorated with `igxDrawer` directive.
While any content can be provided in the template, the [`igxDrawerItem`]({environment:angularApiUrl}/classes/igxnavdraweritemdirective.html) directive (see [Item styling](#styling)) is available to apply out-of-the-box styling to items.
The directive has two `@Input` properties:

- `active` to style an item as selected.
- `isHeader` to style an item as a group header, cannot be active.

The [`igxRipple`](ripple.md) directive completes the look and feel:

```html
<!-- app.component.html -->
<div class="content-wrap">
  <igx-nav-drawer id="navigation" #drawer [isOpen]="true">
    <ng-template igxDrawer>
        <span igxDrawerItem [isHeader]="true">Components</span>
        <span *ngFor="let item of navItems" igxDrawerItem [active]="item.text === selected" igxRipple (click)="navigate(item)">
          <igx-icon fontSet="material">{{ item.name }}</igx-icon>
          <span>{{ item.text }}</span>
        </span>
    </ng-template>
  </igx-nav-drawer>
  <main>
    <!-- app content -->
  </main>
</div>
```

> An additional template decorated with `igxDrawerMini` directive can be provided for the alternative [Mini variant](#mini-variant) as closed state.

> [!NOTE]
> The Navigation Drawer can float above the content or be pinned alongside it. By default the drawer switches between those modes depending on the viewport size. See [Modes](#modes) for more information.

To accommodate for the drawer switching modes, a simple flexible wrapper around the two content sections can be styled like so:

```css
/* app.component.css */
.content-wrap {
  width: 100%;
  height: 100%;
  display: flex;
}
```

To add elements to our navigation drawer and be able to select them, our typescript file should look like this:

```ts
/* app.component.ts */
@Component({...})
export class AppComponent {
    public navItems = [
        { name: 'account_circle', text: 'Avatar' },
        ...
    ];

    public selected = 'Avatar';

    public navigate(item) {
        this.selected = item.text;
    }
}
```

There are various ways to open and close the drawer. Input properties can be bound to app state, programatic access to the API in the component using a [`@ViewChild(IgxNavigationDrawerComponent)`](https://angular.io/api/core/ViewChild) reference or even in this case using the `#drawer` [template reference variable](https://angular.io/guide/template-syntax#ref-vars):

```html
<button (click)="drawer.toggle()">Menu</button>
```

The Navigation Drawer also integrates with [`igxNavigationService`]({environment:angularApiUrl}/classes/igxnavigationservice.html) and can be targeted by id with an [`igxToggleAction`](toggle.md#automatic-toggle-actions) directive.

Let's replace the `<main>` in **app.component.html** with the following, adding [`igxIconButton`](icon-button.md) and [Icon component](icon.md) to style our toggle:

```html
<main>
  <span igxIconButton="flat" igxToggleAction="navigation">
    <igx-icon fontSet="material">menu</igx-icon>
  </span>
</main>
```

Also, if you want the drawer to close when you select an item from it, you can use a [`@ViewChild(IgxNavigationDrawerComponent)`](https://angular.io/api/core/ViewChild) reference like that:

```ts
/* app.component.ts */
import { Component, ViewChild } from '@angular/core';
import { IgxNavigationDrawerComponent } from 'igniteui-angular';
// import { IgxNavigationDrawerComponent } from '@infragistics/igniteui-angular'; for licensed package

@Component({...})
export class AppComponent  {
    @ViewChild(IgxNavigationDrawerComponent, { static: true })
    public drawer: IgxNavigationDrawerComponent;

    // And of course add the key line to our navigate function

    public navigate(item) {
        this.selected = item.text;
        this.drawer.close();
    }
}
```

If everything went well, you should see the demo sample in your browser.

<div class="divider--half"></div>

## Modes

Unpinned (elevated above the content) mode is the normal behavior where the drawer sits above and applies a darkened overlay over the content. Generally used to provide temporary navigation suitable for mobile devices.

The drawer can be pinned to take advantage of larger screens, placing it within normal content flow with relative position. Depending on whether the app provides a way to toggle the drawer, the pinned mode can be used to achieve either [permanent or persistent behavior](https://material.io/guidelines/patterns/navigation-drawer.html#navigation-drawer-behavior).

> [!NOTE]
> By default the Navigation Drawer is responsive, actively changing between unpinned and pinned mode based on screen size. This behavior is controlled by the [`pinThreshold`]({environment:angularApiUrl}/classes/igxnavigationdrawercomponent.html#pinThreshold) property and can be disabled by setting a falsy value (e.g. 0).

### Pinned (persistent) setup

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

<code-view style="height: 500px; border: 1px solid #D4D4D4;" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/menus/navigation-drawer-pin" >
</code-view>

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

### Mini variant

With the mini variant, the Navigation Drawer changes its width instead of closing.
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

<code-view style="height: 400px; border: 1px solid #D4D4D4;" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/menus/navigation-drawer-mini" >
</code-view>

<div class="divider--half"></div>

## Using Angular Router

To use the Angular Router, first, we need to import git from `@angular/router` and create an instance of the router in our constructor.
Then we have to define our navigation items using the router for their link values.

```typescript
/* app.component.ts */
 ...

export class AppComponent {
    public componentLinks = [
        {
            link: 'avatar',
            name: 'Avatar'
        },
        {
            link: 'badge',
            name: 'Badge'
        },
        {
            link: 'button-group',
            name: 'Button Group'
        }
    ];
}
```

You can use `routerLinkActive` where it's assigned to a template variable and its `isActive` property can be used for binding to the `active` input on the `igxDrawerItem`. The `<igx-nav-drawer>` template would look like this:

```html
/* app.component.html */

<!-- ... -->
<ng-template igxDrawer>
  <nav>
    <span igxDrawerItem [isHeader]="true">Components</span>

    <span
      *ngFor="let item of componentLinks"
      routerLink="{{item.link}}"
      routerLinkActive
      #rla="routerLinkActive"
      igxDrawerItem
      igxRipple
      [active]="rla.isActive">
       {{item.name}}
    </span>
  </nav>
</ng-template>
<!-- ... -->
```

Finally, import the RouterModule along with the items' routes in your `app.module.ts` file:

```ts
/*app.module.ts*/
import { RouterModule } from '@angular/router';

@NgModule([
    imports: [
        RouterModule,
		RouterModule.forRoot([
            {path: 'avatar', component: NavDrawerRoutingComponent},
            {path: 'badge', component: NavDrawerRoutingComponent},
            {path: 'button-group', component: NavDrawerRoutingComponent}
        ])
    ]
])
```

After all the steps above are completed, your app should look like that:

<code-view style="height: 400px; border: 1px solid #D4D4D4;" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/menus/navigation-drawer-routing" >
</code-view>

<div class="divider--half"></div>

## Hierarchical Navigation

To create a multi-level hierarchical navigation using the `IgxNavigationDrawerComponent`, you can use the [IgxTreeComponent](tree.md) in the `igxDrawer` template. The tree can be constructed directly from your application `Routes` object. Here's how this can be achieved:

```html
<igx-nav-drawer [isOpen]="true" [enableGestures]="true" width="280px">
  <ng-template igxDrawer>
    <igx-tree>
      <igx-tree-node *ngFor="let route of routes">
        <a igxTreeNodeLink [routerLink]="route.path" routerLinkActive="route-selected-class">{{ route.data?.displayName }}</a>
        <igx-tree-node *ngFor="let child of route.children">
          <a igxTreeNodeLink [routerLink]="[route.path, child.path]" routerLinkActive="route-selected-class">{{ child.data?.displayName }}</a>
        </igx-tree-node>
      </igx-tree-node>
    </igx-tree>
  </ng-template>
</igx-nav-drawer>
```

> [!NOTE]
> In this example, we're not using the `igxDrawerItem`, instead we're populating directly with custom `igxDrawer` content, in this case using an `igx-tree`.

```typescript
import { menusRoutes } from '../../menus-routing.module';

@Component({
  selector: 'app-nav-drawer-hierarchical',
  templateUrl: './nav-drawer-hierarchical.component.html',
  styleUrls: ['./nav-drawer-hierarchical.component.scss'],
})
export class NavDrawerHierarchicalComponent {
  public routes = menusRoutes;
}
```

In this example, we're populating the routes with custom routing `data`, which contains a `displayName` property, used to visualize the link text in the `igx-tree` nodes. A sample `Route` looks like this:

```typescript
export const menusRoutes: Routes = [
  {
    component: NavDrawerHierarchicalComponent,
    path: 'navigation-drawer-hierarchical',
    data: { displayName: 'Hierarchical Drawer Menu' },
  },
];
```

There's also child routing extracted from the `children` property of the routes. The sample shows two levels of hierarchy, but if your routing has more, then all you need to do is define the levels below the second one in the [tree node templates](tree.md#templating).

> [!NOTE]
> Keep in mind that some routes, like empty route redirect, error route, page not found, etc., might not be suitable for visualization directly. Before binding the tree to the routing object, you can strip those routes out of your object in your component logic.

The example below presents the capabilities of a hierarchical structure by using predefined data with topic names and links. The structure allows users to easily generate functional and detailed navigations and to have the ability to define each element whether to be displayed as a link or as an indicator.

<code-view style="height: 400px; border: 1px solid #D4D4D4;" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/menus/navigation-drawer-hierarchical" >
</code-view>

<div class="divider--half"></div>

## Styling

To get started with styling the navigation drawer, we need to import the `index` file, where all the theme functions and component mixins live:

```scss
@use "igniteui-angular/theming" as *;

// IMPORTANT: Prior to Ignite UI for Angular version 13 use:
// @import '~igniteui-angular/lib/core/styles/themes/index';
```

Following the simplest approach, we create a new theme that extends the [`navdrawer-theme`]({environment:sassApiUrl}/index.html#function-navdrawer-theme) and accepts a few parameters that style the navdrawer's items:

```scss
$custom-theme: navdrawer-theme(
  $background: #2d313a,
  $item-active-background: #ecc256,
  $item-header-text-color: #ecc256,
);
```

As seen, the `navdrawer-theme` exposes some useful parameters for basic styling of its items.

The last step is to **include** the component theme in our application.

```scss
@include css-vars($custom-theme);
```

>[!NOTE]
>If the component is using an [`Emulated`](themes/sass/component-themes.md#view-encapsulation) ViewEncapsulation, it is necessary to `penetrate` this encapsulation using `::ng-deep` to apply the styles.

```scss
:host {
  ::ng-deep { 
    @include css-vars($custom-theme);
  }
}
```        

<code-view style="height: 400px; border: 1px solid #D4D4D4;" 
           no-theming
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/menus/navigation-drawer-styling" >
</code-view>

<div class="divider--half"></div>

## API and Style References

* [IgxNavigationDrawerComponent API]({environment:angularApiUrl}/classes/igxnavigationdrawercomponent.html)
* [IgxNavigationDrawerComponent Styles]({environment:sassApiUrl}/index.html#function-navdrawer-theme)
