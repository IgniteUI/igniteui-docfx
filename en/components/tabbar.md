---
title: Bottom Navigation Component
_description: Display tabs for any occasion and implement a completely tabbed user interface. These UI controls manage every aspect of your tabs’ appearance and behavior.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Bottom Nav component, Angular Bottom Navigation controls
---

# Bottom Navigation

<p class="highlight">The Ignite UI for Angular Bottom Navigation component enables the user to navigate among a number of content panels displayed in a single view. The navigation through the panels is accomplished with the tab buttons located at bottom.</p>
<div class="divider"></div>

> [!NOTE]
> `igx-tab-bar` selector is deprecated. You could use [`igx-bottom-nav`]({environment:angularApiUrl}/classes/igxbottomnavcomponent.html) instead. `IgxTabBarComponent` class is renamed to [`IgxBottomNavComponent`]({environment:angularApiUrl}/classes/igxbottomnavcomponent.html). `IgxTabBarModule` is renamed to `IgxBottomNavModule`.

## Angular Bottom Navigation Example

<div class="divider--half"></div>


<code-view style="height: 200px; width: 400px; border: 1px solid #D4D4D4;"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/layouts/tabbar-sample-1" alt="Angular Bottom Navigation Example">
</code-view>


<div class="divider--half"></div>

## Usage

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

Then, modify the component's template to include the Bottom Navigation and add three items. Each item wraps an `igx-bottom-nav-header` and an `igx-bottom-nav-content` component which represent respectively the header and the container of the data. Headers usually consist of an icon and an optional text label. The Bottom Navigation control is compatible with the Material Design [**Icons**](https://material.io/icons/) so to adopt them in your application simply add the Material+Icons import in your 'styles.css' file in the main application folder.

```css
// styles.css

...
@import url('https://fonts.googleapis.com/icon?family=Material+Icons');
...
```

```html
<igx-bottom-nav>
    <igx-bottom-nav-item>
        <igx-bottom-nav-header>
            <igx-icon>library_music</igx-icon>
        </igx-bottom-nav-header>
        <igx-bottom-nav-content>This is Item 1 content.</igx-bottom-nav-content>
    </igx-bottom-nav-item>
    <igx-bottom-nav-item>
        <igx-bottom-nav-header>
            <igx-icon>video_library</igx-icon>
        </igx-bottom-nav-header>
        <igx-bottom-nav-content>This is Item 2 content.</igx-bottom-nav-content>
    </igx-bottom-nav-item>
    <igx-bottom-nav-item>
        <igx-bottom-nav-header>
            <igx-icon>library_books</igx-icon>
        </igx-bottom-nav-header>
        <igx-bottom-nav-content>This is Item 3 content.</igx-bottom-nav-content>
    </igx-bottom-nav-item>
</igx-bottom-nav>
```

If all went well, you should see the demo sample in your browser.

<div class="divider--half"></div>

## Customizing Bottom Navigation

Let's modify the tabs by adding labels alongside the icons and make sure the headers are properly styled.

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

Update the component's template markup as follows:

```html
<igx-bottom-nav>
    <igx-bottom-nav-item>
        <igx-bottom-nav-header>
            <igx-icon igxBottomNavHeaderIcon>library_music</igx-icon>
            <span igxBottomNavHeaderLabel>Songs</span>
        </igx-bottom-nav-header>
        <igx-bottom-nav-content>
            <div class="item" *ngFor="let song of songsList">
                <span class="item-line1">{{song.title}}</span><br/>
                <span class="item-line2">{{song.artist}}</span>
            </div>
        </igx-bottom-nav-content>
    </igx-bottom-nav-item>
    <igx-bottom-nav-item>
        <igx-bottom-nav-header>
            <igx-icon igxBottomNavHeaderIcon>video_library</igx-icon>
            <span igxBottomNavHeaderLabel>Movies</span>
        </igx-bottom-nav-header>
        <igx-bottom-nav-content>
            <div class="item" *ngFor="let movie of moviesList">
                <span class="item-line1">{{movie.title}}</span><br/>
                <span class="item-line2">{{movie.genre}}</span>
            </div>
        </igx-bottom-nav-content>
    </igx-bottom-nav-item>
    <igx-bottom-nav-item>
        <igx-bottom-nav-header>
            <igx-icon igxBottomNavHeaderIcon>library_books</igx-icon>
            <span igxBottomNavHeaderLabel>Books</span>
        </igx-bottom-nav-header>
        <igx-bottom-nav-content>
            <div class="item" *ngFor="let book of booksList">
                <span class="item-line1">{{book.title}}</span><br/>
                <span class="item-line2">{{book.author}}</span>
            </div>
        </igx-bottom-nav-content>
    </igx-bottom-nav-item>
</igx-bottom-nav>
```
You probably noticed that in addition to placing the icon and the span with the label between the item's header tags, we also attach the `igxBottomNavHeaderIcon` and the `igxBottomNavHeaderLabel` directives to them. These directives denote the respective elements and apply the proper styles to them.

Finally add the CSS classes used by the DIV and SPAN elements of the content's template to the component's CSS file:

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

<code-view style="height: 350px; width: 300px; border: 1px solid #D4D4D4;"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/layouts/tabbar-sample-2" >
</code-view>


<div class="divider--half"></div>

If having labels and icons in the headers is not enough, you can simply add your custom content between the header tags.
Here is an example:

```html
<igx-bottom-nav>
    <igx-bottom-nav-item>
        <igx-bottom-nav-header>
            <igx-icon igxBottomNavHeaderIcon>video_library</igx-icon>
            <span igxBottomNavHeaderLabel>Movies</span>
            <div>
                <!-- your custom tab header content goes here -->
            </div>
        </igx-bottom-nav-header>
        <igx-bottom-nav-content>
            <h1>Tab content</h1>
        </igx-bottom-nav-content>
    </igx-bottom-nav-item>
</igx-bottom-nav>
```

<div class="divider"></div>

## Integration With Router Outlet Container

Despite the primary usage of the Bottom Navigation component is to define tab items with content, there may be cases in which you may need to define tab items with headers only. Probably, the main scenario for such usage is navigation between views using the Angular Router. The following example will demonstrate how to configure the Bottom Navigation component to switch between three components in a single router-outlet.

To start we need a main component hosting the Bottom Navigation component and three view components with some content for demonstration purposes. For code snippets' simplicity, the view components will have a very short template but feel free to make them more distinguishable if you need. Also import these view components in your `app.module.ts` file.

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

<igx-bottom-nav #tabs1>
    <igx-bottom-nav-item
        routerLinkActive
        #rla1="routerLinkActive"
        [selected]="rla1.isActive"
        >
        <igx-bottom-nav-header routerLink="tabbar-view1">
            <igx-icon igxBottomNavHeaderIcon>phone</igx-icon>
        </igx-bottom-nav-header>
    </igx-bottom-nav-item>
    <igx-bottom-nav-item
        routerLinkActive
        #rla2="routerLinkActive"
        [selected]="rla2.isActive"
    >
        <igx-bottom-nav-header routerLink="tabbar-view2">
            <igx-icon igxBottomNavHeaderIcon>supervisor_account</igx-icon>
        </igx-bottom-nav-header>
    </igx-bottom-nav-item>
    <igx-bottom-nav-item
        routerLinkActive
        #rla3="routerLinkActive"
        [selected]="rla3.isActive"
    >
        <igx-bottom-nav-header routerLink="tabbar-view3">
            <igx-icon igxBottomNavHeaderIcon>format_list_bulleted</igx-icon>
        </igx-bottom-nav-header>
    </igx-bottom-nav-item>
</igx-bottom-nav>
```

The above code creates a BottomNavigation component with three tab items. All tab items are having the `RouterLinkActive` directive applied which tracks whether the linked route is currently active. Please, note, that the `RouterLink` directive is applied on the header element itself, not on the tab item. This allows us to create a visual distinction for the header currently associated with an active route. If any of these links becomes active, the corresponding tab item will have its `selected` property set because of the binding to the `RouterLinkActive` directive's `isActive` property. This way the selected tab item will always stay synchronized with the current browser's address.

The approach described above is used by the following sample to demonstrate routing using the BottomNavigation component:


<code-view style="height: 250px; width: 500px; border: 1px solid #D4D4D4;"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/layouts/tabbar-sample-3" >
</code-view>


## Styles

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
> In order to style any additional components that are used as part of an item's content, an additional theme should be created that is specific to the respective component.

### Including themes

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
### Defining a color palette

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

### Using Schemas

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

### Demo


<code-view style="height: 350px; width: 300px; border: 1px solid #D4D4D4;"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/layouts/tabbar-style" >
</code-view>

<div class="divider--half"></div>

## API References
<div class="divider--half"></div>

* [IgxBottomNavComponent]({environment:angularApiUrl}/classes/igxbottomnavcomponent.html)
* [IgxBottomNavComponent Styles]({environment:sassApiUrl}/index.html#function-igx-bottom-nav-theme)
* [IgxIconComponent]({environment:angularApiUrl}/classes/igxiconcomponent.html)
* [IgxTabComponent]({environment:angularApiUrl}/classes/igxtabcomponent.html)

## Additional Resources
<div class="divider--half"></div>

Our community is active and always welcoming to new ideas.

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
