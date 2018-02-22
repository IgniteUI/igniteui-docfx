---
title: Navigation Drawer Component
_description: Implement a user-friendly slide in/out navigation container with complete programmatic control with Ignite UI for Angular Navigation Drawer component.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Navigation Drawer component, Angular Navigation Drawer control
---

## Navigation Drawer
<p class="highlight">The Ignite UI for Angular Navigation Drawer component is a side navigation container. It can rest above content and slide in/out of view or be pinned to expand/collapse within content. A mini version provides quick access to navigation even when closed. The Navigation Drawer features responsive mode selection and touch gestures. Content is completely customizable and can make use of default menu item styling.</p>
<div class="divider"></div>

### Navigation Drawer Demo
<div class="sample-container loading" style="height: 600px">
    <iframe id="nav-drawer-sample-iframe" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/navigation-drawer" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="nav-drawer-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>

### Dependencies
To started with all needed dependencies you can use the `IgxNavigationDrawerModule` and import it in your application's `AppModule`:
```typescript
import { IgxNavigationDrawerModule } from 'igniteui-angular/main';
```
or
```typescript
import { IgxNavigationDrawerModule } from 'igniteui-angular/navigation-drawer';
```
And include it in the app module:
```typescript
@NgModule({
    imports: [
        IgxNavigationDrawerModule,
        ...
    ]
})
export class AppModule {
}
```

> Alternatively both barrels export the `IgxNavigationDrawerComponent` and additional directives, so those can be declared/referenced separately if needed.

<div class="divider--half"></div>

### Usage

With the dependencies imported, the Navigation Drawer can be defined in the app component template:

```html
<igx-nav-drawer id="navdrawer" [isOpen]="true">
    <!-- template(s) -->
</igx-nav-drawer>
```
The content for the drawer should be provided via `<ng-template>` decorated with `igxDrawer` directive.
While any content can be provided in the template, the `igxDrawerItem` directive (see [Item styling](#item-styling)) is available to apply out-of-the-box styling to items. The `igxRipple` directive completes the look and feel:
```html
<!-- app.component.html -->
<div class="content-wrap">
  <igx-nav-drawer id="navigation" #drawer [isOpen]="true">
    <ng-template igxDrawer>
      <nav>
        <span igxDrawerItem [isHeader]="true"> Email Account </span>
        <span igxDrawerItem igxRipple> Inbox </span>
        <span igxDrawerItem igxRipple [active]="true"> Drafts </span>
        <span igxDrawerItem igxRipple> Sent </span>
        <span igxDrawerItem [isHeader]="true"> Folders </span>
        <span igxDrawerItem igxRipple> Deleted </span>
        <span igxDrawerItem igxRipple> Archive </span>
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
    flex-flow: row nowrap;
}
```
There are various ways to open and close the drawer. Input properties can be bound to app state, programatic access to the API in the component using a [`@ViewChild(IgxNavigationDrawerComponent)`](https://angular.io/api/core/ViewChild) reference or even in this case using the `#drawer` [template reference variable](https://angular.io/guide/template-syntax#ref-vars):
```html
<button (click)="drawer.toggle()"> Menu </button>
```
The Navigation Drawer also integrates with `igxNavigationService` and can be targeted by id with an [`igxToggleAction`](toggle.html#automatic-toggle-actions) directive.

Let's replace the `<main>` in **app.component.html** with the following, adding [`igxButton`](button.html) and [Icon component](icon.html) to style our toggle:
```html
<main>
  <span igxButton="icon" igxToggleAction="navigation" [closeOnOutsideClick]="false">
    <igx-icon fontSet="material" name="menu"></igx-icon>
  </span>
</main>
```

And the final result should look like that:
<div class="sample-container loading" style="height: 500px">
    <iframe id="nav-drawer-simple-iframe" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/navigation-drawer-simple" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="nav-drawer-simple-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>

<div class="divider--half"></div>

### Modes

Unpinned (elevated above content) mode is the normal behavior where the drawer sits above and applies a darkened overlay over all content. Generally used to provide a temporary navigation suitable for mobile devices. 

The drawer can be pinned to take advantage of larger screens, placing it within normal content flow with relative position. Depending on whether the app provides a way to toggle the drawer, the pinned mode can be used to achieve either [permanent or persistent behavior](https://material.io/guidelines/patterns/navigation-drawer.html#navigation-drawer-behavior).

> [!NOTE]
> By default the Navigation Drawer is responsive, actively changing between unpinned and pinned mode based on screen size. This behavior is controlled by the `pinThreshold` property and can be disabled by setting a falsy value (e.g. 0).


#### Pinned (persistent) setup
Pin changes the position of the drawer from `fixed` to `relative` to put it on the same flow as content. Therefore, the app styling should account for such layout, especially if the drawer needs to be toggled in this mode. While there's more than one way to achieve such fluid layout (including programmatically), the easiest way is using `igxLayout` and `igxFlex` directives.

Here's how that would would look applied to the previous example: 
```html
<div class="content-wrap" igxLayout igxLayoutDir="row">
    <igx-nav-drawer id="navigation" #drawer [isOpen]="true">
        <!-- template(s) -->
    </igx-nav-drawer>
    <main igxFlex>
        <!-- content here -->
    </main>
</div>
```
```css
.main {
    width: 100%;
}
```

<div class="sample-container loading" style="height: 500px">
    <iframe id="nav-drawer-pin-iframe" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/navigation-drawer-pin" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="nav-drawer-pin-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
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

This variant is enabled simply by the presence of an alternative mini template marked with `igxDrawerMini`.
The mini variant is commonly used in a persistent setup, so we've set `pin` and disabled the responsive threshold:

```html
<igx-nav-drawer id="navigation" [pin]="true" [pinThreshold]="0">
  <ng-template igxDrawer>
      <span igxDrawerItem [isHeader]="true"> Header </span>
      <span igxDrawerItem igxRipple> 
          <igx-icon fontSet="material" name="home"></igx-icon>
          <span>Home</span>
      </span>
  </ng-template>
  <ng-template igxDrawerMini>
      <span igxDrawerItem igxRipple> 
          <igx-icon fontSet="material" name="home"></igx-icon>
      </span>
  </ng-template>
</igx-nav-drawer>
```

<div class="sample-container loading" style="height: 400px">
    <iframe id="nav-drawer-mini-iframe" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/navigation-drawer-mini" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="nav-drawer-mini-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>

<div class="divider--half"></div>

### Item Styling

The content of the Navigation Drawer can be anything provided by the template, however for scenarios using the standard list of navigation items the optional `igxDrawerItem` directive can be used style them. This will apply default styles and patterns to your items as well as the appropriate theme colors.

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

### Example: Use default item styles with Angular Router
To make use of the `igxDrawerItem` directive to style items normally the `active` input should be set, however if the state is controlled externally as is the case with routing.

Take the following items defined in `app.component.ts` like:

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

### API

#### Inputs
| Name      | Type|  Description |
|:----------|:----:|:------|
| `id`| string | Unique identifier of the Grid. ID required to register with provided `IgxNavigationService` allow directives to target the control from other template files. |
| `position` | string | Position of the Navigation Drawer. Can be "left"(default) or "right". Only has effect when not pinned.|
| `enableGestures`| boolean | Enables the use of touch gestures to manipulate the drawer - such as swipe/pan from edge to open, swipe toggle and pan drag. |
| `isOpen` | boolean | State of the drawer. |
| `pin` | boolean | When pinned the drawer is relatively positioned instead of sitting above content. May require additional layout styling. |
| `pinThreshold` | number | Minimum device width required for automatic pin to be toggled. Default is 1024, can be set to a falsy value to disable this behavior. |
| `width` | string| Width of the drawer in its open state. Defaults to "280px".|
| `miniWidth` | string | Width of the drawer in its mini variant. Defaults to "60px". |

#### Outputs
| Name      |  Description |
|:----------|:------|
| `pinChange` | Pinned state change output for two-way binding of the pin property. Example `<igx-nav-drawer [(pin)]="drawerState.pin"> ..` |
| *Event emitters* | *Notify for a change* |
| `opening` | Event fired as the Navigation Drawer is about to open. |
| `opened`  | Event fired when the Navigation Drawer has opened. |
| `closing` | Event fired as the Navigation Drawer is about to close. |
| `closed`  | Event fired when the Navigation Drawer has closed. |

#### Methods
| Signature      |  Description |
|:----------|:------|
| `open`    | Open the Navigation Drawer. Has no effect if already opened. Returns `Promise` that is resolved once the operation completes. |
| `close`   | Close the Navigation Drawer. Has no effect if already closed. Returns `Promise` that is resolved once the operation completes. |
| `toggle`  | Toggle the open state of the Navigation Drawer. Returns `Promise` that is resolved once the operation completes. |