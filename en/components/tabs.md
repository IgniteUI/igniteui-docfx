---
title: Tabs Component - Native Angular | Ignite UI for Angular 
_description: The Ignite UI for Angular Tabs component places tabs at the top and allows for scrolling when there are multiple tab items on the screen. 
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Components, Native Angular Controls, Native Angular Components Library, Angular Tabs component, Angular Tabs controls, Angular Tabs
---

## Tabs

The [`igx-tabs`]({environment:angularApiUrl}/classes/igxtabscomponent.html) component in Ignite UI for Angular is used to organize or switch between similar data sets. It functions as a wrapper for [`igx-tab-item`]({environment:angularApiUrl}/classes/igxtabitemcomponent.html) and [`igx-tabs-group`]({environment:angularApiUrl}/classes/igxtabsgroupcomponent.html), as these respectively represent the container for the data and the tab header. The tabs component places tabs at the top and allows scrolling when there are multiple tab items on the screen.

### Tabs Demo
<div class="sample-container loading" style="height: 250px; width: 600px;">
    <iframe id="tabs-sample-0" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/layouts/tabs-sample-3" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="tabs-sample-0" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>

### Usage

To get started with the Tabs component, first you need to install Ignite UI for Angular by typing the following command:

```cmd
ng add igniteui-angular
```
For a complete introduction to the Ignite UI for Angular, read the [*getting started*](general/getting_started.md) topic.

The next step is to import the `IgxTabsModule` in the **app.module.ts** file.

```typescript
// app.module.ts

...
import { IgxTabsModule } from 'igniteui-angular';

@NgModule({
    ...
    imports: [..., IgxTabsModule],
    ...
})
export class AppModule {}
```

Then, specify several tabs groups with [`label`]({environment:angularApiUrl}/classes/igxtabsgroupcomponent.html#label) and content.

```html
<igx-tabs>
  <igx-tabs-group label="Tab 1">This is Tab 1 content.</igx-tabs-group>
  <igx-tabs-group label="Tab 2">This is Tab 2 content.</igx-tabs-group>
  <igx-tabs-group label="Tab 3">This is Tab 3 content.</igx-tabs-group>
  <igx-tabs-group label="Tab 4">This is Tab 4 content.</igx-tabs-group>
  <igx-tabs-group label="Tab 5">This is Tab 5 content.</igx-tabs-group>
</igx-tabs>
```

If the sample is configured properly, the final result should look like that:

<div class="sample-container loading" style="height: 200px; width: 600px; border: 1px solid gray;">
    <iframe id="tabs-sample-1-iframe" data-src='{environment:demosBaseUrl}/layouts/tabs-sample-1' width="100%" height="100%" seamless="" frameBorder="0" class="lazyload"></iframe>
</div>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="tabs-sample-1-iframe"
    data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>

<div class="divider"></div>

### Tabs Types
There are two types of tabs. Set the [`tabsType`]({environment:angularApiUrl}/classes/igxtabscomponent.html#tabstype) input to choose between [`fixed`]({environment:angularApiUrl}/enums/tabstype.html#fixed) and [`contentfit`]({environment:angularApiUrl}/enums/tabstype.html#contentfit) tabs.
- **Content-fit tabs** (default): the width of the tab header depends on the content (label, icon, both) and all tabs have equal padding.
Nevertheless what type of tabs you have chosen, the tab header width is limited by the specified min and max width. 
- **Fixed tabs**: all tab headers are with equal width and fit in the tabs container. If the provided space is not enough for all items, scroll buttons are displayed.

```html
<div class="items-wrapper__item items-wrapper__item-small items-wrapper__item--blue">
  <h4 class="sample-title">CONTENT-FIT TABS</h4>
  <igx-navbar title="Contacts" actionButtonIcon="menu">
    <igx-icon>search</igx-icon>
    <igx-icon>more_vert</igx-icon>
  </igx-navbar>
  <igx-tabs>
    <igx-tabs-group label="HOME">Home content.</igx-tabs-group>
    <igx-tabs-group label="RECENT CONTACTS">Recent contacts list.</igx-tabs-group>
    <igx-tabs-group label="MORE INFORMATION ABOUT SELECTED CONTACT">More detailed contact information.</igx-tabs-group>
  </igx-tabs>
</div>

<div class="items-wrapper__item items-wrapper__item-small items-wrapper__item--blue">
  <h4 class="sample-title">FIXED TABS</h4>
  <igx-navbar title="Contacts" actionButtonIcon="menu">
    <igx-icon>search</igx-icon>
    <igx-icon>more_vert</igx-icon>
  </igx-navbar>
  <igx-tabs tabsType="fixed">
    <igx-tabs-group label="HOME">Home content.</igx-tabs-group>
    <igx-tabs-group label="RECENT CONTACTS">Recent contacts list.</igx-tabs-group>
    <igx-tabs-group label="MORE INFORMATION ABOUT SELECTED CONTACT">More detailed contact information.</igx-tabs-group>
  </igx-tabs>
</div>
```

<div class="sample-container loading" style="height: 450px; width: 800px;">
    <iframe id="tabs-sample-2-iframe" data-src='{environment:demosBaseUrl}/layouts/tabs-sample-2' width="100%" height="100%" seamless="" frameBorder="0" class="lazyload"></iframe>
</div>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="tabs-sample-2-iframe"
    data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>

<div class="divider"></div>

### Customizing Tabs

Let's modify the tabs and make them more appealing by including icons using [`icon`]({environment:angularApiUrl}/classes/igxtabsgroupcomponent.html#icon) input. The Tabs component is compatible with the Material Design
[**Icons**](https://material.io/icons/) so it will be very easy to adopt them in your application.

First add the Material+Icons import in your 'styles.css' file in the main application folder.

```css
// styles.css

...
@import url('https://fonts.googleapis.com/icon?family=Material+Icons');
...
```

```html
<igx-tabs>
  <igx-tabs-group label="MY ALBUMS" icon="library_music">
    <div style="margin: 15px">
      <igx-card>
        <igx-card-header class="compact">
          <igx-avatar src="assets/images/card/avatars/alicia_keys.jpg" roundShape="true"></igx-avatar>
          <div class="igx-card-header__tgroup">
            <h3 class="igx-card-header__title--small">HERE</h3>
            <h5 class="igx-card-header__subtitle">by Alicia Keys</h5>
          </div>
        </igx-card-header>
        <igx-card-actions>
          <div class="igx-card-actions__bgroup">
            <button igxButton igxRipple>PLAY</button>
          </div>
        </igx-card-actions>
      </igx-card>
    </div>
  </igx-tabs-group>
  <igx-tabs-group label="FAVOURITES" icon="favorite">
    <div style="margin: 15px">
      <h5 class="igx-card-header__subtitle">Add your favourite songs here.</h5>
    </div>
  </igx-tabs-group>
  <igx-tabs-group label="INFO" icon="info">
    <div style="margin: 15px">
      <h5 class="igx-card-header__subtitle">"Here" is the sixth studio album by American singer and songwriter Alicia Keys.</h5>
    </div>
  </igx-tabs-group>
</igx-tabs>
```

If the sample is configured properly, the tabs should look like the following example:

<div class="sample-container loading" style="height: 250px; width: 600px;">
    <iframe id="tabs-sample-3-iframe" data-src='{environment:demosBaseUrl}/layouts/tabs-sample-3' width="100%" height="100%" seamless="" frameBorder="0" class="lazyload"></iframe>
</div>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="tabs-sample-3-iframe"
    data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>

<div class="divider--half"></div>

If changing the tabs' labels and icons is not enough, you can also create your own [`IgxTabItemTemplateDirective`]({environment:angularApiUrl}/classes/igxtabitemtemplatedirective.html) for each tab header.

```html
<igx-tabs>
    <igx-tabs-group>
        <ng-template igxTab>
            <div>
                <!-- your custom tab content goes here -->
            </div>
        </ng-template>
        <h1>Tab content</h1>
    </igx-tabs-group>
</igx-tabs>
```

### Integration With Router Outlet Container

Despite the primary usage of the Tabs component is to define groups with content, there may be cases in which you may need to define tab items only.

> [!NOTE]
> Keep in mind that the tab items definition mode does not support any content in the tabs - the component renders a tab items' strip only. The component also does not support mixing of tab item definitions and group definitions at the same time.

When defining tab items you have the ability to apply directives on them. For example, you may use this functionality to achieve navigation between views using the Angular Router. The following example will demonstrate how to configure the Tabs component to switch between three components in a single router-outlet.

To start we need a main component hosting the Tabs component and three view components with some content for demonstration purpose. For code snippets' simplicity, the view components will have a very short template but feel free to make them more distinguishable if you need. Also import these view components in your `app.module.ts` file.

```typescript
// tabs-routing.component.ts
import { Component } from "@angular/core";

@Component({
    selector: "app-tabs-routing",
    styleUrls: ["tabs-routing.component.scss"],
    templateUrl: "tabs-routing.component.html"
})
export class TabsRoutingComponent {
    constructor() { }
}

@Component({
    template: "<h3>Tab 1 Content</h3>"
})
export class TabsRoutingView1Component {
}

@Component({
    template: "<h3>Tab 2 Content</h3>"
})
export class TabsRoutingView2Component {
}

@Component({
    template: "<h3>Tab 3 Content</h3>"
})
export class TabsRoutingView3Component {
}
```

The next step is to create the appropriate navigation mappings in the `app-routing.module.ts` file:

```typescript
// app-routing.module.ts
import {
    TabsRoutingComponent,
    TabsRoutingView1Component,
    TabsRoutingView2Component,
    TabsRoutingView3Component } from './tabs-routing.component';

...

const appRoutes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/tabs-routing'
    },
    {
        path: 'tabs-routing',
        component: TabsRoutingComponent,
        children: [
            { path: 'view1', component: TabsRoutingView1Component },
            { path: 'view2', component: TabsRoutingView2Component },
            { path: 'view3', component: TabsRoutingView3Component },
        ]
    }
];

@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forRoot(appRoutes)]
})
export class AppRoutingModule { }
```

Now that we have all navigation routes setup, we need to declare the Tabs component and configure it for routing.
Also, make sure to add a router-outlet for rendering the view components' output.

```html
<!-- tabs-routing.component.html -->
<igx-tabs>
  <igx-tab-item label="Tab 1" icon="dashboard"
    routerLink="view1"
    routerLinkActive #rla1="routerLinkActive"
    [isSelected]="rla1.isActive">
  </igx-tab-item>

  <igx-tab-item label="Tab 2" icon="check_circle_outline"
    routerLink="view2"
    routerLinkActive #rla2="routerLinkActive"
    [isSelected]="rla2.isActive">
  </igx-tab-item>

  <igx-tab-item label="Tab 3" icon="radio_button_checked"
    routerLink="view3"
    routerLinkActive #rla3="routerLinkActive"
    [isSelected]="rla3.isActive">
  </igx-tab-item>
</igx-tabs>

<router-outlet></router-outlet>
```

The above code creates a Tabs component with three tab items. All tab items are having the `RouterLink` directive applied which is used to specify the routing link used for the navigation. If any of these links becomes active, the corresponding tab item will have its `isSelected` property set because of the binding to the `RouterLinkActive` directive's `isActive` property. This way the selected tab item will always stay synchronized with the current browser's address.

The described approach above is used by the following sample to demonstrate routing using the Tabs component:

<div class="sample-container loading" style="height: 500px; width: 500px;">
    <iframe id="tabs-sample-6-iframe" data-src='{environment:demosBaseUrl}/layouts/tabs-sample-6' width="100%" height="100%" seamless="" frameBorder="0" class="lazyload"></iframe>
</div>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="tabs-sample-6-iframe"
    data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>

### Styles

To get started with styling the tabs, we need to import the `index` file, where all the theme functions and component mixins live:

```scss
@import '~igniteui-angular/lib/core/styles/themes/index';
```

Following the simplest approach, we create a new theme that extends the [`igx-tabs-theme`]({environment:sassApiUrl}/index.html#function-igx-tabs-theme) and accepts various parameters that allow us to style the tab groups.

```scss
$dark-tabs: igx-tabs-theme(
    $item-text-color: #F4D45C,
    $item-background: #292826,
    $item-hover-background: #F4D45C,
    $item-hover-color: #292826,
    $item-active-color: #F4D45C,
    $item-active-icon-color: #F4D45C,
    $indicator-color: #F4D45C,
    $tab-ripple-color: #F4D45C
);
```

If we take a look at the [`igx-tabs-theme`]({environment:sassApiUrl}/index.html#function-igx-tabs-theme), we will notice that there are even more parameters available to us in order to style our tabs component!

> [!NOTE]
> In order to style any additional components that are used as part of a tab group's content, an additional theme should be created that is specific to the respective component.

The last step is to **include** the component theme in our application.

```scss
@include igx-tabs($dark-tabs);
```

>[!NOTE]
>If the component is using an [`Emulated`](themes/component-themes.md#view-encapsulation) ViewEncapsulation, it is necessary to `penetrate` this encapsulation using `::ng-deep`:

```scss
:host {
     ::ng-deep {
        @include igx-tabs($dark-tabs);
    }
}
```


#### Defining a color palette

Instead of hardcoding the color values like we just did, we can achieve greater flexibility in terms of colors by using the [`igx-palette`]({environment:sassApiUrl}/index.html#function-igx-palette) and [`igx-color`]({environment:sassApiUrl}/index.html#function-igx-color) functions.

`igx-palette` generates a color palette based on the primary and secondary colors that are passed:

```scss
$yellow-color: #F4D45C;
$black-color: #292826;
$dark-palette: igx-palette($primary: $black-color, $secondary: $yellow-color);
```

And then with [`igx-color`]({environment:sassApiUrl}/index.html#function-igx-color) we can easily retrieve color from the palette. 

```scss
$dark-tabs: igx-tabs-theme(
    $palette: $dark-palette,
    $item-text-color: igx-color($dark-palette, "secondary", 400),
    $item-background: igx-color($dark-palette, "primary", 400),
    $item-hover-background: igx-color($dark-palette, "secondary", 400),
    $item-hover-color: igx-color($dark-palette, "primary", 400),
    $item-active-color: igx-color($dark-palette, "secondary", 400),
    $item-active-icon-color: igx-color($dark-palette, "secondary", 400),
    $indicator-color: igx-color($dark-palette, "secondary", 400),
    $tab-ripple-color: igx-color($dark-palette, "secondary", 400)
);
```

#### Using Schemas

Going further with the theming engine, you can build a robust and flexible structure that benefits from [**schemas**](themes/schemas.md). A **schema** is a recipe of a theme.

Extend one of the two predefined schemas, that are provided for every component, in this case - [`dark-tabs`]({environment:sassApiUrl}/index.html#variable-_dark-tabs) schema:

```scss
// Extending the dark tabs schema
$dark-tabs-schema: extend($_dark-tabs,
    (
        item-text-color: (
            igx-color: ("secondary", 400)
        ),
        item-background: (
            igx-color: ("primary", 400)
        ),
        item-hover-background: (
            igx-color: ("secondary", 400)
        ),
        item-hover-color: (
            igx-color: ("primary", 400)
        ),
        item-active-color: (
            igx-color: ("secondary", 400)
        ),
        item-active-icon-color: (
            igx-color: ("secondary", 400)
        ),
        indicator-color: (
            igx-color: ("secondary", 400)
        ), 
        tab-ripple-color: (
            igx-color: ("secondary", 400)
        )
    )
);
```

In order to apply our custom schemas we have to **extend** one of the globals ([`light`]({environment:sassApiUrl}/index.html#variable-light-schema) or [`dark`]({environment:sassApiUrl}/index.html#variable-dark-schema)), which is basically pointing out the components with a custom schema, and after that add it to the respective component themes:

```scss
// Extending the global dark-schema
$custom-dark-schema: extend($dark-schema,(
    igx-tabs: $dark-tabs-schema
));

// Defining tabs-theme with the global dark schema
$dark-tabs: igx-tabs-theme(
  $palette: $dark-palette,
  $schema: $custom-dark-schema
);
```

Don't forget to include the themes in the same way as it was demonstrated above.

#### Demo

<div class="sample-container loading" style="height: 400px; width: 600px;">
    <iframe id="tabs-style-iframe" data-src='{environment:demosBaseUrl}/layouts/tabs-style' width="100%" height="100%" seamless="" frameBorder="0" class="lazyload no-theming"></iframe>
</div>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="tabs-style-iframe"
    data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>

<div class="divider--half"></div>

### API References
<div class="divider"></div>

* [IgxAvatarComponent]({environment:angularApiUrl}/classes/igxavatarcomponent.html)
* [IgxCardComponent]({environment:angularApiUrl}/classes/igxcardcomponent.html)
* [IgxIconComponent]({environment:angularApiUrl}/classes/igxiconcomponent.html)
* [IgxNavbarComponent]({environment:angularApiUrl}/classes/igxnavbarcomponent.html)
* [IgxTabsComponent]({environment:angularApiUrl}/classes/igxtabscomponent.html)
* [IgxTabsComponent Styles]({environment:sassApiUrl}/index.html#function-igx-tabs-theme)
* [IgxTabsGroupComponent]({environment:angularApiUrl}/classes/igxtabsgroupcomponent.html)
* [IgxTabItemComponent]({environment:angularApiUrl}/classes/igxtabitemcomponent.html)

### Additional Resources
<div class="divider--half"></div>

Our community is active and always welcoming to new ideas.

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
