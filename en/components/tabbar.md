---
title: Bottom Navigation Component
_description: Display tabs for any occasion and implement a completely tabbed user interface. These UI controls manage every aspect of your tabs’ appearance and behavior.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Bottom Nav component, Angular Bottom Navigation controls
---

## Bottom Navigation

<p class="highlight">The Ignite UI for Angular Bottom Navigation component enables the user to navigate among a number of content panels displayed in a single view. The navigation through the panels is accomplished with the tab buttons located at bottom.</p>
<div class="divider"></div>

> [!NOTE]
> `igx-tab-bar` selector is deprecated. You could use [`igx-bottom-nav`]({environment:angularApiUrl}/classes/igxbottomnavcomponent.html) instead. `IgxTabBarComponent` class is renamed to [`IgxBottomNavComponent`]({environment:angularApiUrl}/classes/igxbottomnavcomponent.html). `IgxTabBarModule` is renamed to `IgxBottomNavModule`.

### Bottom Navigation Demo

<div class="divider--half"></div>

<div class="sample-container loading" style="height: 200px; width: 400px; border: 1px solid #D4D4D4;" >
    <iframe id="tabbar-sample-1-iframe" src='{environment:demosBaseUrl}/layouts/tabbar-sample-1' width="100%" height="100%" seamless
        frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="tabbar-sample-1-iframe"
    data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>

<div class="divider--half"></div>

### Usage

The first step is to import the `IgxBottomNavModule` in the **app.module.ts** file:

```typescript
// app.module.ts

...
import { IgxBottomNavModule } from 'igniteui-angular';

@NgModule({
    ...
    imports: [..., IgxBottomNavModule],
    ...
})
export class AppModule {}
```

Then, modify the component's template to include the Bottom Navigation and add three panels.

```html
<igx-bottom-nav>
  <igx-tab-panel label="Tab 1">This is Tab 1 content.</igx-tab-panel>
  <igx-tab-panel label="Tab 2">This is Tab 2 content.</igx-tab-panel>
  <igx-tab-panel label="Tab 3">This is Tab 3 content.</igx-tab-panel>
</igx-bottom-nav>
```
If all went well, you should see the demo sample in your browser.

<div class="divider--half"></div>

### Customizing Bottom Navigation

Let's modify the tabs and make them more appealing by including icons. The Bottom Navigation control is compatible with the Material Design
[**Icons**](https://material.io/icons/) so it will be very easy for you to adopt them in your application.

First add the Material+Icons import in your 'styles.css' file in the main application folder.

```css
// styles.css

...
@import url('https://fonts.googleapis.com/icon?family=Material+Icons');
...
```

Define some object arrays for the data source in the component typescript file:

```typescript
...
public songsList: object[] = [
  { title: "Havana", artist: "Camila Cabello" },
  { title: "Meant To Be", artist: "Bebe Rexha & Florida Georgia Line" },
  { title: "New Rules", artist: "Dua Lipa" },
  { title: "Wolves", artist: "Selena Gomez & Marshmello" }
];

public moviesList: object[] = [
  { title: "Logan", genre: "Action, Drama, Sci-Fi" },
  { title: "Wonder Woman", genre: "Action, Adventure, Fantasy" },
  { title: "Guardians of the Galaxy Vol. 2", genre: "Action, Adventure, Sci-Fi" },
  { title: "Star Wars: The Last Jedi", genre: "Action, Adventure, Fantasy" }
];

public booksList: object[] = [
  { title: "Wonder", author: "R. J. Palacio" },
  { title: "Milk and Honey", author: "Rupi Kaur" },
  { title: "Giraffes Can't Dance", author: "Jeff Kinne" },
  { title: "The Getaway", author: "Selena Gomez & Marshmello" }
];
...
```

Update the component's template markup by adding new tabs' labels, icon names from the Material Design Icons library
and also DIV and SPAN elements to visualize the data content correctly:

```html
<igx-bottom-nav>

  <igx-tab-panel label="Songs" icon="library_music">
    <div class="item" *ngFor="let song of songsList">
      <span class="item-line1">{{song.title}}</span><br/>
      <span class="item-line2">{{song.artist}}</span>
    </div>
  </igx-tab-panel>

  <igx-tab-panel label="Movies" icon="video_library">
    <div class="item" *ngFor="let movie of moviesList">
      <span class="item-line1">{{movie.title}}</span><br/>
      <span class="item-line2">{{movie.genre}}</span>
    </div>
  </igx-tab-panel>

  <igx-tab-panel label="Books" icon="library_books">
    <div class="item" *ngFor="let book of booksList">
      <span class="item-line1">{{book.title}}</span><br/>
      <span class="item-line2">{{book.author}}</span>
    </div>
  </igx-tab-panel>

</igx-bottom-nav>
```

Finally add the CSS classes used by the DIV and SPAN elements of the template to the component's CSS file:

```css
.item {
    margin-bottom: 5px;
}

.item-line1 {
    font-size: 14px;
    color: gray;
}

.item-line2 {
    font-size: 12px;
    color: darkgray;
}

igx-tab-panel {
    padding: 10px;
}
```

After these modifications our Bottom Navigation should look similar to this:

<div class="sample-container loading" style="height: 350px; width: 300px; border: 1px solid #D4D4D4;">
    <iframe id="tabbar-sample-2-iframe" data-src='{environment:demosBaseUrl}/layouts/tabbar-sample-2' width="100%" height="100%" seamless="" frameBorder="0" class="lazyload"></iframe>
</div>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="tabbar-sample-2-iframe"
    data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>

<div class="divider--half"></div>

If changing the tabs' labels and tabs' icons is not enough, you can also create your own template for each tab.
Here is an example:

```html
<igx-bottom-nav>
    <igx-tab-panel>

        <ng-template igxTab>
            <div>
                <!-- your custom tab content goes here -->
            </div>
        </ng-template>

        <h1>Tab content</h1>
    </igx-tab-panel>
</igx-bottom-nav>
```

<div class="divider"></div>

### Integration With Router Outlet Container

Despite the primary usage of the Bottom Navigation component is to define panels with content, there may be cases in which you may need to define tab items only.

> [!NOTE]
> Keep in mind that the tab items definition mode does not support any content in the tabs - the component renders a tab items' strip only. The component also does not support mixing of tab item definitions and panel definitions at the same time.

When defining tab items you have the ability to apply directives on them. For example, you may use this functionality to achieve navigation between views using the Angular Router. The following example will demonstrate how to configure the Bottom Navigation component to switch between three components in a single router-outlet.

To start we need a main component hosting the Bottom Navigation component and three view components with some content for demonstration purpose. For code snippets' simplicity, the view components will have a very short template but feel free to make them more distinguishable if you need. Also import these view components in your `app.module.ts` file.

```typescript
// bottomnav-routing.component.ts
import { Component } from "@angular/core";

@Component({
    selector: "app-bottomnav-routing",
    styleUrls: ["bottomnav-routing.component.scss"],
    templateUrl: "bottomnav-routing.component.html"
})
export class BottomNavRoutingComponent { }

@Component({
    template: "<p>Item 1 Content</p>"
})
export class BottomNavRoutingView1Component { }

@Component({
    template: "<p>Item 2 Content</p>"
})
export class BottomNavRoutingView2Component { }

@Component({
    template: "<p>Item 3 Content</p>"
})
export class BottomNavRoutingView3Component { }
```

The next step is to create the appropriate navigation mappings in the `app-routing.module.ts` file:

```typescript
import { RouterModule, Routes } from "@angular/router";

import {
    TabbarRoutingComponent,
    TabbarRoutingView1Component,
    TabbarRoutingView2Component,
    TabbarRoutingView3Component,
} from './tabbar-routing.component';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/tabbar-routing'
    },
    {
        path: "tabbar-routing",
        component: TabbarRoutingComponent,
        children: [
            { path: "tabbar-view1", component: TabbarView1Component },
            { path: "tabbar-view2", component: TabbarView2Component },
            { path: "tabbar-view3", component: TabbarView3Component }
        ]
    }
];

@NgModule({
    exports: [ RouterModule ],
    imports: [ RouterModule.forChild(routes) ]
})
export class TabbarRoutingModule { }
```

Now that we have all navigation routes setup, we need to declare the BottomNavigation component and configure it for routing.
Also, make sure to add a router-outlet for rendering the view components' output.

```html
<!-- bottomnav-routing.component.html -->
<router-outlet></router-outlet>

<igx-bottom-nav>
    <igx-tab
    label="Item 1"
    routerLink="tabbar-view1"
    routerLinkActive
    #rla1="routerLinkActive"
    [isSelected]="rla1.isActive"
    ></igx-tab>

    <igx-tab
    label="Item 2"
    routerLink="tabbar-view2"
    routerLinkActive
    #rla2="routerLinkActive"
    [isSelected]="rla2.isActive"
    ></igx-tab>

    <igx-tab
    label="Item 3"
    routerLink="tabbar-view3"
    routerLinkActive
    #rla3="routerLinkActive"
    [isSelected]="rla3.isActive"
    ></igx-tab>
</igx-bottom-nav>
```

The above code creates a BottomNavigation component with three tab items. All tab items are having the `RouterLink` directive applied which is used to specify the routing link used for the navigation. If any of these links becomes active, the corresponding tab item will have its `isSelected` property set because of the binding to the `RouterLinkActive` directive's `isActive` property. This way the selected tab item will always stay synchronized with the current browser's address.

The described approach above is used by the following sample to demonstrate routing using the BottomNavigation component:

<div class="sample-container loading" style="height: 250px; width: 500px; border: 1px solid #D4D4D4;">
    <iframe id="tabbar-sample-3-iframe" data-src='{environment:demosBaseUrl}/layouts/tabbar-sample-3' width="100%" height="100%" seamless="" frameBorder="0" class="lazyload"></iframe>
</div>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="tabbar-sample-3-iframe"
    data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>

### Styles

To get started with styling the tabs, we need to import the `index` file, where all the theme functions and component mixins live:

```scss
@import '~igniteui-angular/lib/core/styles/themes/index';
```

Following the simplest approach, we create a new theme that extends the [`igx-bottom-nav-theme`]({environment:sassApiUrl}/index.html#function-igx-bottom-nav-theme) and accepts various parameters that allow us to style the tab groups.

```scss
$dark-bottom-nav: igx-bottom-nav-theme(
    $background: #292826,
    $active-item-color: #F4D45C
);
```

If we take a look at the [`igx-bottom-nav-theme`]({environment:sassApiUrl}/index.html#function-igx-bottom-nav-theme), we will notice that there are even more parameters available to us in order to style our bottom navigation component!

> [!NOTE]
> In order to style any additional components that are used as part of a tab panel's content, an additional theme should be created that is specific to the respective component.

#### Including themes

<div class="divider"></div>

The last step is to **include** the component theme in our application.

If `$legacy-support` is set to `true`, include the **component theme** like that:

```scss
@include igx-bottom-nav($dark-bottom-nav);
```

>[!NOTE]
>If the component is using an [`Emulated`](themes/component-themes.md#view-encapsulation) ViewEncapsulation, it is necessary to `penetrate` this encapsulation using `::ng-deep`

```scss
:host {
     ::ng-deep {
        @include igx-bottom-nav($dark-bottom-nav);
    }
}
```

<div class="divider"></div>

If `$legacy-support` is set to `false`(default), include the component **css variables** like that:

```scss
@include igx-css-vars($dark-bottom-nav);
```

>[!NOTE]
>If the component is using an [`Emulated`](themes/component-themes.md#view-encapsulation) ViewEncapsulation, you still have to use `:host` because you need a global selector in order to override the variables.

```scss
:host {
    @include igx-css-vars($dark-bottom-nav);
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
$dark-bottom-nav: igx-bottom-nav-theme(
    $background: igx-color($dark-palette, "primary", 400),
    $active-item-color: igx-color($dark-palette, "secondary", 400)
);
```

#### Using Schemas

Going further with the theming engine, you can build a robust and flexible structure that benefits from [**schemas**](themes/schemas.md). A **schema** is a recipe of a theme.

Extend one of the two predefined schemas, that are provided for every component, in this case - [`dark-bottom-nav`]({environment:sassApiUrl}/index.html#variable-_dark-bottom-nav) schema:

```scss
// Extending the dark bottom nav schema
$dark-bottom-nav-schema: extend($_dark-bottom-nav,
    (
        background: (
            igx-color: ("primary", 400)
        ),
        active-item-color: (
            igx-color: ("secondary", 400)
        )
    )
);
```

In order to apply our custom schemas we have to **extend** one of the globals ([`light`]({environment:sassApiUrl}/index.html#variable-light-schema) or [`dark`]({environment:sassApiUrl}/index.html#variable-dark-schema)), which is basically pointing out the components with a custom schema, and after that add it to the respective component themes:

```scss
// Extending the global dark-schema
$custom-dark-schema: extend($dark-schema,(
    igx-bottom-nav: $dark-bottom-nav-schema
));

// Defining bottom-nav-theme with the global dark schema
$dark-bottom-nav: igx-bottom-nav-theme(
  $palette: $dark-palette,
  $schema: $custom-dark-schema
);
```

Don't forget to include the themes in the same way as it was demonstrated above.

#### Demo

<div class="sample-container loading" style="height: 350px; width: 300px; border: 1px solid #D4D4D4;" >
    <iframe id="tabbar-style-iframe" src='{environment:demosBaseUrl}/layouts/tabbar-style' width="100%" height="100%" seamless
        frameBorder="0" class="lazyload no-theming"></iframe>
</div>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="tabbar-style-iframe"
    data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>

### API References
<div class="divider--half"></div>

* [IgxAvatarComponent]({environment:angularApiUrl}/classes/igxavatarcomponent.html)
* [IgxBottomNavComponent]({environment:angularApiUrl}/classes/igxbottomnavcomponent.html)
* [IgxBottomNavComponent Styles]({environment:sassApiUrl}/index.html#function-igx-bottom-nav-theme)
* [IgxIconComponent]({environment:angularApiUrl}/classes/igxiconcomponent.html)
* [IgxListComponent]({environment:angularApiUrl}/classes/igxlistcomponent.html)
* [IgxListItemComponent]({environment:angularApiUrl}/classes/igxlistitemcomponent.html)
* [IgxTabComponent]({environment:angularApiUrl}/classes/igxtabcomponent.html)
* [IgxTabPanelComponent]({environment:angularApiUrl}/classes/igxtabpanelcomponent.html)

### Additional Resources
<div class="divider--half"></div>

Our community is active and always welcoming to new ideas.

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
