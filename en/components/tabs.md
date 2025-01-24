---
title: Angular Tabs Component | Ignite UI for Angular
_description: The Ignite UI for Angular Tabs component places tabs at the top and allows for scrolling when there are multiple tab items on the screen. Try it now.
_keywords: Angular Tabs component, Angular Tabs control, Angular Tabs, Angular Tabbar Component, Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Components, Angular UI Components, Native Angular Components Library
---

# Angular Tabs Component Overview
Ignite UI for Angular Tabs is a full-featured user interface component that has the primary purpose to organize and group related content in a single tabbed view, thus saving space and making content more comprehensible. It packs different features like animations, templating, customization options, and others. 

Tabs in Angular are extremely useful when you’re building a web page with plenty of content that must be fitted into categories and displayed in a concise and space-efficient way. 

<p class="highlight">

The [`igx-tabs`]({environment:angularApiUrl}/classes/igxtabscomponent.html) component in Ignite UI for Angular is used to organize or switch between similar data sets. It functions as a wrapper for [`igx-tab-item`]({environment:angularApiUrl}/classes/igxtabitemcomponent.html) which respectively represent the container for the data and the tab header. The Angular Tabs Component places tabs at the top and allows scrolling when there are multiple tab items on the screen.

</p>

## Angular Tabs Example

This is a basic example of Angular Nested Tabs where we have one tab within another where only one view can be seen at the time. Using nested tabs in Angular, we can display information in a better, structured way. 

<code-view style="height: 250px; border: 1px solid #ededed;"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/layouts/tabs-sample-3" alt="Angular Tabs Example">
</code-view>

<div class="divider--half"></div>

## Getting Started with Ignite UI for Angular Tabs

To get started with the Ignite UI for Angular Tabs component, first you need to install Ignite UI for Angular. In an existing Angular application, type the following command:

```cmd
ng add igniteui-angular
```

For a complete introduction to the Ignite UI for Angular, read the [*getting started*](general/getting-started.md) topic.

The next step is to import the `IgxTabsModule` in your **app.module.ts** file.

```typescript
// app.module.ts

...
import { IgxTabsModule } from 'igniteui-angular';
// import { IgxTabsModule } from '@infragistics/igniteui-angular'; for licensed package

@NgModule({
    ...
    imports: [..., IgxTabsModule],
    ...
})
export class AppModule {}
```

Alternatively, as of `16.0.0` you can import the `IgxTabsComponent` as a standalone dependency, or use the [`IGX_TABS_DIRECTIVES`](https://github.com/IgniteUI/igniteui-angular/blob/master/projects/igniteui-angular/src/lib/tabs/tabs/public_api.ts) token to import the component and all of its supporting components and directives.

```typescript
// home.component.ts

import { IGX_TABS_DIRECTIVES } from 'igniteui-angular';
// import { IGX_TABS_DIRECTIVES } from '@infragistics/igniteui-angular'; for licensed package

@Component({
    selector: 'app-home',
    template: `
    <igx-tabs>
      <igx-tab-item>
        <igx-tab-header>
          <span igxTabHeaderLabel>Tab 1</span>
        </igx-tab-header>
        <igx-tab-content>
          This is Tab 1 content.
        </igx-tab-content>
      </igx-tab-item>
      <igx-tab-item>
        <igx-tab-header>
          <span igxTabHeaderLabel>Tab 2</span>
        </igx-tab-header>
        <igx-tab-content>
          This is Tab 2 content.
        </igx-tab-content>
      </igx-tab-item>
    </igx-tabs>
    `,
    styleUrls: ['home.component.scss'],
    standalone: true,
    imports: [IGX_TABS_DIRECTIVES]
    /* or imports: [IgxTabsComponent, IgxTabItemComponent, IgxTabHeaderComponent, IgxTabContentComponent, IgxTabHeaderLabelDirective] */
})
export class HomeComponent {}
```

Now that you have the Ignite UI for Angular Tabs module or directives imported, you can start using the `igx-tabs` component.

## Using the Angular Tabs

We set the Angular Tabs header by providing content to `igx-tab-header`. To set the tab's name we simply add a span with `igxTabHeaderLabel` directive. Any content that will appear as a tab item's content should be added between `igx-tab-content` tags.

```html
<igx-tabs>
  <igx-tab-item>
    <igx-tab-header>
      <span igxTabHeaderLabel>Tab 1</span>
    </igx-tab-header>
    <igx-tab-content>
      This is Tab 1 content.
    </igx-tab-content>
  </igx-tab-item>
  <igx-tab-item>
    <igx-tab-header>
      <span igxTabHeaderLabel>Tab 2</span>
    </igx-tab-header>
    <igx-tab-content>
      This is Tab 2 content.
    </igx-tab-content>
  </igx-tab-item>
  <igx-tab-item>
    <igx-tab-header>
      <span igxTabHeaderLabel>Tab 3</span>
    </igx-tab-header>
    <igx-tab-content>
      This is Tab 3 content.
    </igx-tab-content>
  </igx-tab-item>
  <igx-tab-item>
    <igx-tab-header>
      <span igxTabHeaderLabel>Tab 4</span>
    </igx-tab-header>
    <igx-tab-content>
      This is Tab 4 content.
    </igx-tab-content>
  </igx-tab-item>
  <igx-tab-item>
    <igx-tab-header>
      <span igxTabHeaderLabel>Tab 5</span>
    </igx-tab-header>
    <igx-tab-content>
      This is Tab 5 content.
    </igx-tab-content>
  </igx-tab-item>
</igx-tabs>
```

If the sample is configured properly, the final result should look like that:


<code-view style="height: 200px; border: 1px solid #ededed;"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/layouts/tabs-sample-1" alt="Angular Tabs Example">
</code-view>


<div class="divider"></div>

## Angular Tabs Alignment
`IgxTabs` [`tabAlignment`]({environment:angularApiUrl}/classes/igxtabscomponent.html#tabAlignment) input property controls how tabs are positioned and arranged. It accepts four different values - start, center, end and justify.
- **Start** (default): the width of the tab header depends on the content (label, icon, both) and all tabs have equal padding. First tab is aligned to the tabs container left side.
- **Center**: the width of the tab header depends on the content and occupies the tabs container center. If the space is not enough to fit all items, scroll buttons are displayed.
- **End**: the width of the tab header depends on the content and all tabs have equal padding. Last tab is aligned to the tabs container right side.
- **Justify**: all tab headers are equal in width and fully fit the tabs container. If the space is not enough to fit all items, scroll buttons are displayed.


Sample below demonstrates how tabs get aligned when switching between `tabAlignment` property values.

<code-view style="height: 250px; border: 1px solid #ededed"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/layouts/tabs-alignment" >
</code-view>


<div class="divider"></div>

## Customizing Angular Tabs

Let's modify the tabs and make them more appealing by including icons using the `igxTabHeaderIcon` directive. The `igx-tabs` component is compatible with the Material Design
[**Icons**](https://material.io/icons/) so it will be very easy to adopt them in your application.
> [!NOTE]
> If you haven't used the `igx-icon` in your application so far, please make sure to import the `IgxIconModule` in the **app.module.ts** before proceeding.

First, add the Material Icons in your 'styles.scss' file in the main application folder. Next, add `igx-icon` with `igxTabHeaderIcon` directive set, as a child of `igx-tab-header`.

```css
// styles.scss

...
@import url('https://fonts.googleapis.com/icon?family=Material+Icons');
...
```

```html
<igx-tabs>
  <igx-tab-item>
    <igx-tab-header>
        <igx-icon igxTabHeaderIcon>library_music</igx-icon>
        <span igxTabHeaderLabel>Albums</span>
    </igx-tab-header>
    <igx-tab-content>
        Albums
    </igx-tab-content>
  </igx-tab-item>
  <igx-tab-item>
    <igx-tab-header>
        <igx-icon igxTabHeaderIcon>favorite</igx-icon>
        <span igxTabHeaderLabel>Favorite</span>
    </igx-tab-header>
    <igx-tab-content>
        Favorite
    </igx-tab-content>
  </igx-tab-item>
  <igx-tab-item>
    <igx-tab-header>
        <igx-icon igxTabHeaderIcon>info</igx-icon>
        <span igxTabHeaderLabel>Details</span>
    </igx-tab-header>
    <igx-tab-content>
        Details
    </igx-tab-content>
  </igx-tab-item>
</igx-tabs>

```

If the sample is configured properly, the tabs should look like the following example:


<code-view style="height: 250px; border: 1px solid #ededed;"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/layouts/tabs-sample-3" >
</code-view>

<div class="divider--half"></div>

If setting the labels and icons is not enough, you can also provide your own custom content directly between `igx-tab-header` tags.

```html
<igx-tabs>
  <igx-tab-item>
    <igx-tab-header>
      <!-- your custom tab content goes here -->
      <div>
        <img src="https://static.infragistics.com/marketing/Website/products/ignite-ui-landing/ignite-ui-logo.svg"
             width="80px" height="40px">
      </div>
    </igx-tab-header>
    <igx-tab-content>
      <h1>IgniteUI Rocks!</h1>
    </igx-tab-content>
  </igx-tab-item>
</igx-tabs>
```

You can also add you own custom tab header's prefix and suffix simply by using `igxPrefix` and `igxSuffix` directives. The sample below demonstrates how to add a tab with custom header content and prefix/suffix.

<code-view style="height: 250px; border: 1px solid #ededed;"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/layouts/tabs-header-prefix-suffix" >
</code-view>

<div class="divider--half"></div>

## Integration With Router Outlet Container

Although the `igx-tabs` component is meant to be used as a list of tabs with content specified for each tab item, there might be cases in which you need to define tab items where the content is separate from the tab content.

When defining tab items you have the ability to apply directives to them. For example, you may use this functionality to achieve navigation between views using the Angular Router. The following example will demonstrate how to configure the `igx-tabs` component to switch between three components in a single router-outlet.

To start we need a component to hold our `igx-tabs` component and three view components with some content for demonstration purposes. For simplicity, the view components have very short templates.

```typescript
import { Component } from '@angular/core';

@Component({
    selector: 'app-tabs-routing',
    styleUrls: ['tabs-routing.component.scss'],
    templateUrl: 'tabs-routing.component.html'
})
export class TabsRoutingComponent { }

@Component({
    template: '<p>Tab 1 Content</p>'
})
export class TabsRoutingView1Component { }

@Component({
    template: '<p>Tab 2 Content</p>'
})
export class TabsRoutingView2Component { }

@Component({
    template: '<p>Tab 3 Content</p>'
})
export class TabsRoutingView3Component { }
```

Next, we create the appropriate navigation mappings in the `app-routing.module.ts` file:

```typescript
import { RouterModule, Routes } from '@angular/router';

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

<igx-tabs #tabs1>
  <igx-tab-item
      routerLinkActive
      #rla1="routerLinkActive"
      [selected]="rla1.isActive"
  >
      <igx-tab-header routerLink="view1">
          <span igxTabHeaderLabel>Tab 1</span>
      </igx-tab-header>
  </igx-tab-item>
  <igx-tab-item
      routerLinkActive
      #rla2="routerLinkActive"
      [selected]="rla2.isActive"
  >
      <igx-tab-header routerLink="view2">
          <span igxTabHeaderLabel>Tab 2</span>
      </igx-tab-header>
  </igx-tab-item>
  <igx-tab-item
      routerLinkActive
      #rla3="routerLinkActive"
      [selected]="rla3.isActive"
  >
      <igx-tab-header routerLink="view3">
          <span igxTabHeaderLabel>Tab 3</span>
      </igx-tab-header>
  </igx-tab-item>
</igx-tabs>

<router-outlet></router-outlet>
```

The above code creates an `igx-tabs` component with three tab items. Each tab item's header has the `RouterLink` directive applied, which is used to specify the routing link used for the navigation. If any of the links becomes active, the corresponding tab item will have its `selected` property set because of the binding to the `RouterLinkActive` directive's `isActive` property. This way the selected tab item will always be synchronized with the current url path.


<code-view style="height: 250px; border: 1px solid #ededed"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/layouts/tabs-sample-4" >
</code-view>

> [!NOTE]
> Please note that the routerLink directive is set to the `igx-tab-header`, not directly to the `igx-tab-item`.


## Styles

To get started with styling the tabs, we need to import the theming module, where all the theme functions and component mixins live:

```scss
@use "igniteui-angular/theming" as *;

// IMPORTANT: Prior to Ignite UI for Angular version 13 use:
// @import '~igniteui-angular/lib/core/styles/themes/index';
``` 

Following the simplest approach, we create a new theme that extends the [`tabs-theme`]({environment:sassApiUrl}/index.html#function-tabs-theme) and accepts various properties that allow us to style the tab groups.

```scss
$dark-tabs: tabs-theme(
  $item-text-color: #f4d45c,
  $item-background: #292826,
  $item-hover-background: #f4d45c,
  $item-hover-color: #292826,
  $item-active-color: #f4d45c,
  $item-active-icon-color: #f4d45c,
  $indicator-color: #f4d45c,
  $tab-ripple-color: #f4d45c
);
```

>[!NOTE]
>Instead of hardcoding the color values like we just did, we can achieve greater flexibility in terms of colors by using the [`palette`]({environment:sassApiUrl}/index.html#function-palette) and [`color`]({environment:sassApiUrl}/index.html#function-color) functions. Please refer to [`Palettes`](/themes/sass/palettes.md) topic for detailed guidance on how to use them.

If we take a look at the [`tabs-theme`]({environment:sassApiUrl}/index.html#function-tabs-theme), we will notice that there are even more properties available to us in order to style our tabs.

> [!NOTE]
> In order to style any component used as part of a tab content, additional themes should be created specific to the respective component.

The last step is to **include** the component theme in our application.

```scss
@include css-vars($dark-tabs);
```

### Demo

<code-view style="height: 250px; border: 1px solid #ededed"
           no-theming
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/layouts/tabs-style" >
</code-view>

<div class="divider--half"></div>

## API References
<div class="divider"></div>

* [IgxIconComponent]({environment:angularApiUrl}/classes/igxiconcomponent.html)
* [IgxNavbarComponent]({environment:angularApiUrl}/classes/igxnavbarcomponent.html)
* [IgxTabsComponent]({environment:angularApiUrl}/classes/igxtabscomponent.html)
* [IgxTabsComponent Styles]({environment:sassApiUrl}/index.html#function-tabs-theme)
* [IgxTabItemComponent]({environment:angularApiUrl}/classes/igxtabitemcomponent.html)
* [IgxTabHeaderComponent]({environment:angularApiUrl}/classes/igxtabheadercomponent.html)
* [IgxTabContentComponent]({environment:angularApiUrl}/classes/igxtabcontentcomponent.html)

## Theming Dependencies
* [IgxIcon Theme]({environment:sassApiUrl}/index.html#function-icon-theme)
* [IgxRipple Theme]({environment:sassApiUrl}/index.html#function-ripple-theme)
* [IgxButton Theme]({environment:sassApiUrl}/index.html#function-button-theme)

## Additional Resources
<div class="divider--half"></div>

Our community is active and always welcoming to new ideas.

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
