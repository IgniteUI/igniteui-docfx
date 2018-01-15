---
title: Navigation Drawer Component
_description: Implement a user-friendly slide in/out navigation container with complete programmatic control with Ignite UI for Angular Navigation Drawer component.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Navigation Drawer component, Angular Navigation Drawer control
---

##Navigation Drawer
<p class="highlight">The Ignite UI for Angular Navigation Drawer component is a slide in/slide out navigation container that can be pinned or allowed to collapse out of the way when not in use. It can be positioned on either side of the page, with left as the default. The component allows complete programmatic control, including reporting on which panel is currently selected, and allows the use of both navigation items and non-active headers.</p>
<div class="divider"></div>

### Navigation Drawer Demo
<div class="sample-container" style="height: 600px">
    <iframe frameborder="0" seamless width="100%" height="100%" src="https://{environment:demosBaseUrl}/navigation-drawer"></iframe>
</div>
<div class="divider--half"></div>

### Usage
```html
<ig-nav-drawer id="test"
    (opened)="logEvent($event)"
    [position]="position"
    [pin]="pin"
    [enableGestures]='gestures'
    [isOpen]="open"
    [width]="drawerWidth"
    [miniWidth]="drawerMiniWidth">
        <div class="ig-drawer-content">
            <h3>Drawer Title</h3>
            <div *ngFor="let navItem of navItems"><img src="http://www.infragistics.com/assets/images/favicon.ico" width='16' />
            <a routerLink="{{navItem.link}}"> {{navItem.text}} </a></div>
        </div>
        <div *ngIf="miniTemplate" class="ig-drawer-mini-content">
            <span class="hamburger" igxNavToggle="test" > &#9776; </span>
            <div *ngFor="let navItem of navItems"><img src="http://www.infragistics.com/assets/images/favicon.ico" width='16' /></div>
        </div>
</ig-nav-drawer>
```
<div class="divider--half"></div>

### API

#### Properties
| Name      | Type|  Description |
|:----------|:----:|:------|
| `ID`| string | ID of the component. |
| `position` | string | Position of the Navigation Drawer. Can be "left"(default) or "right". Only has effect when not pinned.|
| `enableGestures`| boolean | Enables the use of touch gestures to manipulate the drawer - such as swipe/pan from edge to open, swipe toggle and pan drag. |
| `isOpen` | boolean | State of the drawer. |
| `pin` | boolean | Pinned state of the drawer. Currently only support. |
| `pinThreshold` | number | Minimum device width required for automatic pin to be toggled. Deafult is 1024, can be set to falsy value to ignore. |
| `width` | string| Width of the drawer in its open state. Defaults to 300px based on the `.ig-nav-drawer` style. Can be used to override or dynamically modify the width.|
| `miniWidth` | string | Width of the drawer in its mini state. Defaults to 60px based on the `.ig-nav-drawer.mini` style. Can be used to override or dynamically modify the width. |
<div class="divider--half"></div>

### Methods
| Name      |  Description |
|:----------|:------|
| `open`    | Open the Navigation Drawer. Has no effect if already opened. *@param* fireEvents Optional flag determining whether events should be fired or not. *@return* Promise that is resolved once the operation completes. |
| `close`   | Close the Navigation Drawer. Has no effect if already closed. *@param* fireEvents Optional flag determining whether events should be fired or not. *@return* Promise that is resolved once the operation completes. |
| `expectedWidth()`  | Get the Drawer width for specific state. Will attempt to evaluate requested state and cache. |
| `expectedMiniWidth()`| Get the Drawer mini width for specific state. Will attempt to evaluate requested state and cache. |
<div class="divider--half"></div>

### Events
| Name      |  Description |
|:----------|:------|
| `opening` | Event fired as the Navigation Drawer is about to open. |
| `opened`  | Event fired when the Navigation Drawer has opened. |
| `closing` | Event fired as the Navigation Drawer is about to close. |
| `closed`  | Event fired when the Navigation Drawer has closed. |
<div class="divider--half"></div>

Using `TypeScript` to configure Drawer component

```typescript
export class MainDrawerSampleComponent {
    navItems: Array<Object> = [
        { text: 'Default sample', link: '/navigation-drawer' },
        { text: 'Pin sample', link: '/navigation-drawer/pin' },
        { text: 'Mini sample', link: '/navigation-drawer/mini' }
    ];

    pin: boolean = false;
    open: boolean = false;
    position = 'left';
    drawerMiniWidth = '';
    @ViewChild(NavigationDrawer) viewChild: NavigationDrawer;
    /** Sample-specific configurations: */
    showMiniWidth: boolean = false;
    showEventLog: boolean = true;
    showToggle: boolean = true;

    logEvent(event) {
        if (event === 'closing') {
            // this will cause change detection, potentially run outside of angular
            this.open = false;
        }
    }
    testToggle() {
        this.viewChild.toggle().then(value => {
            this.logEvent('API call resolved: ' + value);
        });
    }
}
```
