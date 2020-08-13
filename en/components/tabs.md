---
title: Tabs Component - Native Angular | Ignite UI for Angular 
_description: The Ignite UI for Angular Tabs component places tabs at the top and allows for scrolling when there are multiple tab items on the screen. 
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Components, Native Angular Controls, Native Angular Components Library, Angular Tabs component, Angular Tabs controls, Angular Tabs
---

## Tabs

<p class="highlight">
The [`igx-tabs`]({environment:angularApiUrl}/classes/igxtabscomponent.html) component in Ignite UI for Angular is used to organize or switch between similar data sets. It functions as a wrapper for [`igx-tab-item`]({environment:angularApiUrl}/classes/igxtabitemcomponent.html) and [`igx-tabs-group`]({environment:angularApiUrl}/classes/igxtabsgroupcomponent.html), as these respectively represent the container for the data and the tab header. The tabs component places tabs at the top and allows scrolling when there are multiple tab items on the screen.
</p>

### Demo

<div class="sample-container loading" style="height: 250px; border: 1px solid #ededed;">
    <iframe id="tabs-sample-0" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/layouts/tabs-sample-3" onload="onSampleIframeContentLoaded(this);">
    </iframe>
</div>

<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="tabs-sample-0" data-demos-base-url="{environment:demosBaseUrl}">view on codesandbox</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="tabs-sample-0" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>

### Usage

First, we need to import the `IgxTabsModule` in the **app.module.ts** file.

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

We set the names of tabs using the [`label`]({environment:angularApiUrl}/classes/igxtabsgroupcomponent.html#label) attribute. Any content provided between the opening and closing `igx-tabs-group` tags will appear in the respective tab group as content.

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

<div class="sample-container loading" style="height: 200px; border: 1px solid #ededed;">
    <iframe id="tabs-sample-1-iframe" data-src='{environment:demosBaseUrl}/layouts/tabs-sample-1' width="100%" height="100%" seamless frameBorder="0" class="lazyload"></iframe>
</div>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="tabs-sample-1-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on codesandbox</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="tabs-sample-1-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>

<div class="divider"></div>

### Tabs Types
There are two types of tabs - `fixed` and `contentfit`. Set the [`type`]({environment:angularApiUrl}/classes/igxtabscomponent.html#tabstype) input to choose between [`fixed`]({environment:angularApiUrl}/enums/tabstype.html#fixed) and [`contentfit`]({environment:angularApiUrl}/enums/tabstype.html#contentfit) tabs.
- **Content-fit tabs** (default): the width of the tab header depends on the content (label, icon, both) and all tabs have equal padding.
No matter what type of tabs you chose, the width of the tab header is limited by the specified min and max width. 
- **Fixed tabs**: all tab headers are equal in width and fully fit the tabs container. If the space is not enough to fit all items, scroll buttons are displayed.

```html
  <igx-tabs>
    <igx-tabs-group label="Home">Home content.</igx-tabs-group>
    <igx-tabs-group label="Recent Contacts">Recent contacts list.</igx-tabs-group>
    <igx-tabs-group label="More">More detailed contact information.</igx-tabs-group>
  </igx-tabs>

  <igx-tabs tabsType="fixed">
    <igx-tabs-group label="Home">Home content.</igx-tabs-group>
    <igx-tabs-group label="Recent Contacts">Recent contacts list.</igx-tabs-group>
    <igx-tabs-group label="More">More detailed contact information.</igx-tabs-group>
  </igx-tabs>
```

<div class="sample-container loading" style="height: 450px; border: 1px solid #ededed">
    <iframe id="tabs-sample-2-iframe" data-src='{environment:demosBaseUrl}/layouts/tabs-sample-2' width="100%" height="100%" seamless frameBorder="0" class="lazyload"></iframe>
</div>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="tabs-sample-2-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on codesandbox</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="tabs-sample-2-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>

<div class="divider"></div>

### Customizing Tabs

Let's modify the tabs and make them more appealing by including icons using the [`icon`]({environment:angularApiUrl}/classes/igxtabsgroupcomponent.html#icon) input. The `igx-tabs` component is compatible with the Material Design
[**Icons**](https://material.io/icons/) so it will be very easy to adopt them in your application.

First add the Material Icons in your 'styles.scss' file in the main application folder.

```css
// styles.scss

...
@import url('https://fonts.googleapis.com/icon?family=Material+Icons');
...
```

```html
<igx-tabs>
  <igx-tabs-group label="Albums" icon="library_music">
    Albums
  </igx-tabs-group>

  <igx-tabs-group label="Songs" icon="favorite">
    Songs
  </igx-tabs-group>

  <igx-tabs-group label="Details" icon="info">
    Details
  </igx-tabs-group>
</igx-tabs>
```

If the sample is configured properly, the tabs should look like the following example:

<div class="sample-container loading" style="height: 250px; border: 1px solid #ededed;">
    <iframe id="tabs-sample-3" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/layouts/tabs-sample-3" onload="onSampleIframeContentLoaded(this);">
    </iframe>
</div>

<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="tabs-sample-3" data-demos-base-url="{environment:demosBaseUrl}">view on codesandbox</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="tabs-sample-3" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>

If changing the labels and icons is not enough, you can also provide your own template by utilizing the [`IgxTabItemTemplateDirective`]({environment:angularApiUrl}/classes/igxtabitemtemplatedirective.html) for each tab header.

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

Although the `igx-tabs` component is meant to be used as a list of tabs with content specified for each tab group, there might be cases in which you need to define tab items where the content is separate from the tab group.

> [!NOTE]
> Keep in mind that the tab items definition mode does not support any content in the tab group - the component renders the tab item strip only. The component also does not support mixing of tab item definitions and group definitions at the same time.

When defining tab items you have the ability to apply directives to them. For example, you may use this functionality to achieve navigation between views using the Angular Router. The following example will demonstrate how to configure the `igx-tabs` component to switch between three components in a single router-outlet.

To start we need a component to hold our `igx-tabs` component and three view components with some content for demonstration purposes. For simplicity, the view components have very short templates.

```typescript
import { Component } from "@angular/core";

@Component({
    selector: "app-tabs-routing",
    styleUrls: ["tabs-routing.component.scss"],
    templateUrl: "tabs-routing.component.html"
})
export class TabsRoutingComponent { }

@Component({
    template: "<p>Tab 1 Content</p>"
})
export class TabsRoutingView1Component { }

@Component({
    template: "<p>Tab 2 Content</p>"
})
export class TabsRoutingView2Component { }

@Component({
    template: "<p>Tab 3 Content</p>"
})
export class TabsRoutingView3Component { }
```

Next, we create the appropriate navigation mappings in the `app-routing.module.ts` file:

```typescript
import { RouterModule, Routes } from "@angular/router";

import {
    TabsRoutingComponent,
    TabsRoutingView1Component,
    TabsRoutingView2Component,
    TabsRoutingView3Component 
} from './tabs-routing.component';

...

const routes: Routes = [
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

Now that we have all navigation routes set up, we need to declare the `igx-tabs` component and configure it for routing. Make sure to add a router-outlet for rendering the view components.

```html
<!-- tabs-routing.component.html -->

<igx-tabs>
  <igx-tab-item 
    label="Tab 1" 
    icon="dashboard"
    routerLink="view1"
    routerLinkActive 
    #rla1="routerLinkActive"
    [isSelected]="rla1.isActive"
  ></igx-tab-item>

  <igx-tab-item 
    label="Tab 2" 
    icon="check_circle_outline"
    routerLink="view2"
    routerLinkActive 
    #rla2="routerLinkActive"
    [isSelected]="rla2.isActive"
  ></igx-tab-item>

  <igx-tab-item 
    label="Tab 3" 
    icon="radio_button_checked"
    routerLink="view3"
    routerLinkActive 
    #rla3="routerLinkActive"
    [isSelected]="rla3.isActive"
  ></igx-tab-item>
</igx-tabs>

<router-outlet></router-outlet>
```

The above code creates an `igx-tabs` component with three tab items. All tab items have the `RouterLink` directive applied, which is used to specify the routing link used for the navigation. If any of the links becomes active, the corresponding tab item will have its `isSelected` property set because of the binding to the `RouterLinkActive` directive's `isActive` property. This way the selected tab item will always be synchronized with the current url path.

<div class="sample-container loading" style="height: 250px; border: 1px solid #ededed">
    <iframe id="tabs-sample-4-iframe" data-src='{environment:demosBaseUrl}/layouts/tabs-sample-4' width="100%" height="100%" seamless frameBorder="0" class="lazyload"></iframe>
</div>

<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="tabs-sample-4-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on codesandbox</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="tabs-sample-4-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>

### Styles

To get started with styling the tabs, we need to import the theming module, where all the theme functions and component mixins live:

```scss
@import '~igniteui-angular/lib/core/styles/themes/index';
```

Following the simplest approach, we create a new theme that extends the [`igx-tabs-theme`]({environment:sassApiUrl}/index.html#function-igx-tabs-theme) and accepts various properties that allow us to style the tab groups.

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

If we take a look at the [`igx-tabs-theme`]({environment:sassApiUrl}/index.html#function-igx-tabs-theme), we will notice that there are even more properties available to us in order to style our tabs.

> [!NOTE]
> In order to style any component used as part of a tab group content, additional themes should be created specific to the respective component.

The last step is to **include** the component theme in our application.

```scss
@include igx-css-vars($dark-tabs);
```

If you are targeting browsers that don't support CSS variables, like IE 11, you can use the theme component mixin to overwrite its default theme:

```scss
:host {
  ::ng-deep {
    @include igx-tabs($dark-tabs);
  }
}
```
#### Palettes & Colors

Instead of hardcoding the color values, like we just did, we can achieve greater flexibility in terms of colors by using the [`igx-palette`]({environment:sassApiUrl}/index.html#function-igx-palette) and [`igx-color`]({environment:sassApiUrl}/index.html#function-igx-color) functions.

`igx-palette` generates a color palette based on the primary and secondary colors that are passed:

```scss
$yellow-color: #F4D45C;
$black-color: #292826;

$dark-palette: igx-palette(
  $primary: $black-color, 
  $secondary: $yellow-color, 
  $grays: #fff
);
```

We can easily retrieve any color from the palette using [`igx-color`]({environment:sassApiUrl}/index.html#function-igx-color). 

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

<div class="sample-container loading" style="height: 250px; border: 1px solid #ededed">
    <iframe id="tabs-style-iframe" data-src='{environment:demosBaseUrl}/layouts/tabs-style' width="100%" height="100%" seamless frameBorder="0" class="lazyload no-theming"></iframe>
</div>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="tabs-style-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on codesandbox</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="tabs-style-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
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
