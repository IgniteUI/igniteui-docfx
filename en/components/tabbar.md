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

<div class="sample-container loading" style="height: 600px; width: 400px; border: 1px solid gray;" >
    <iframe id="tabbar-sample-iframe" src='{environment:demosBaseUrl}/layouts/tabbar' width="100%" height="100%" seamless
        frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="tabbar-sample-iframe"
    data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>

<div class="divider--half"></div>

### Usage

To get started with the control, let's first import the `IgxBottomNavModule` in the **app.module.ts** file:

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
If all went well, you should see the following in your browser:

<div class="sample-container loading" style="height: 200px; width: 300px; border: 1px solid gray;">
    <iframe id="tabbar-sample-1-iframe" data-src='{environment:demosBaseUrl}/layouts/tabbar-sample-1' width="100%" height="100%" seamless="" frameBorder="0" class="lazyload"></iframe>
</div>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="tabbar-sample-1-iframe"
    data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>

<div class="divider"></div>

#### Customizing Tabs

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
```

After these modifications our Bottom Navigation should look similar to this:

<div class="sample-container loading" style="height: 350px; width: 300px; border: 1px solid gray;">
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

#### Embedding Other Igx Controls

You can combine other Ignite UI for Angular components with the Bottom Navigation to achieve more complex applications.
For example you may use the [`IgxListComponent`]({environment:angularApiUrl}/classes/igxlistcomponent.html) to create a list of contacts in a Bottom Navigation's panel and also visualize each contact using [`IgxAvatarComponent`]({environment:angularApiUrl}/classes/igxavatarcomponent.html) and [`IgxIconComponent`]({environment:angularApiUrl}/classes/igxiconcomponent.html).

This time you will need to include both the `IgxBottomNavModule` and `IgxListModule` in your "app.module.ts" file:

```typescript
// app.module.ts

...
import { IgxAvatarModule } from 'igniteui-angular';
import { IgxIconModule } from 'igniteui-angular';
import { IgxListModule } from 'igniteui-angular';
import { IgxBottomNavModule } from 'igniteui-angular';

@NgModule({
    ...
    imports: [..., IgxAvatarModule, IgxIconModule, IgxListModule, IgxBottomNavModule],
    ...
})
export class AppModule {}
```

Let's start the application by creating a data source of the contacts in the component typescript file:

```typescript
...
public contactsList: object[] = [{
        avatar: "assets/images/avatar/1.jpg",
        favorite: true,
        key: "1",
        link: "#",
        phone: "770-504-2217",
        text: "Terrance Orta"
    }, {
        avatar: "assets/images/avatar/2.jpg",
        favorite: false,
        key: "2",
        link: "#",
        phone: "423-676-2869",
        text: "Richard Mahoney"
    }, {
        avatar: "assets/images/avatar/3.jpg",
        favorite: false,
        key: "3",
        link: "#",
        phone: "859-496-2817",
        text: "Donna Price"
    }, {
        avatar: "assets/images/avatar/4.jpg",
        favorite: false,
        key: "4",
        link: "#",
        phone: "901-747-3428",
        text: "Lisa Landers"
    }, {
        avatar: "assets/images/avatar/12.jpg",
        favorite: true,
        key: "5",
        link: "#",
        phone: "573-394-9254",
        text: "Dorothy H. Spencer"
    }, {
        avatar: "assets/images/avatar/13.jpg",
        favorite: false,
        key: "6",
        link: "#",
        phone: "323-668-1482",
        text: "Stephanie May"
    }, {
        avatar: "assets/images/avatar/14.jpg",
        favorite: false,
        key: "7",
        link: "#",
        phone: "401-661-3742",
        text: "Marianne Taylor"
    }];
...
```

Edit the component's template markup by adding the following Bottom Navigation with an [`IgxListComponent`]({environment:angularApiUrl}/classes/igxlistcomponent.html) in its first panel:

```html
...
<igx-bottom-nav>
    <igx-tab-panel icon="phone">
        <igx-list [allowRightPanning]="true" [allowLeftPanning]="true">
            <igx-list-item [isHeader]="true">History</igx-list-item>
            <igx-list-item igxRipple="pink" igxRippleTarget=".igx-list__item"
              *ngFor="let contact of contactsList">
                <div class="item">
                    <igx-avatar [src]="contact.avatar" roundShape="true"></igx-avatar>
                    <div class="person">
                        <p class="name">{{contact.text}}</p>
                        <span class="phone">{{contact.phone}}</span>
                    </div>
                    <igx-icon>phone</igx-icon>
                </div>
            </igx-list-item>
        </igx-list>
    </igx-tab-panel>
    <igx-tab-panel icon="supervisor_account">
        <div class="tab-content">
            <h3>Tab 2 Content ...</h3>
        </div>
    </igx-tab-panel>
    <igx-tab-panel icon="format_list_bulleted">
        <div class="tab-content">
            <h3>Tab 3 Content ...</h3>
        </div>
    </igx-tab-panel>
</igx-bottom-nav>
...
```

And don't forget to include the following CSS definitions in order for the application to look correctly:

```css
.tab-content {
    padding: 16px;
}

.item {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.item > [igxLabel],
.item > .person {
    position: absolute;
    margin-left: 72px;
}

.person .name {
    padding: 0;
    margin: 0;
}

.person .phone {
    font-size: 12px;
    color: gray;
}

.item igx-icon {
    color: lightgray;
}

.item igx-icon.favorite {
    color: orange;
}
```

You can see the result of the code above at the beginning of this article in the [Bottom Navigation Demo](#bottom-navigation-demo) section.

#### Integration With Router Outlet Container

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
export class BottomNavRoutingComponent {
    constructor() { }
}

@Component({
    template: "<h3>Tab 1 Content</h3>"
})
export class BottomNavRoutingView1Component {
}

@Component({
    template: "<h3>Tab 2 Content</h3>"
})
export class BottomNavRoutingView2Component {
}

@Component({
    template: "<h3>Tab 3 Content</h3>"
})
export class BottomNavRoutingView3Component {
}
```

The next step is to create the appropriate navigation mappings in the `app-routing.module.ts` file:

```typescript
// app-routing.module.ts
import {
    BottomNavRoutingComponent,
    BottomNavRoutingView1Component,
    BottomNavRoutingView2Component,
    BottomNavRoutingView3Component } from './bottomnav-routing.component';

...

const appRoutes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/bottomnav-routing'
    },
    {
        path: 'bottomnav-routing',
        component: BottomNavRoutingComponent,
        children: [
            { path: 'view1', component: BottomNavRoutingView1Component },
            { path: 'view2', component: BottomNavRoutingView2Component },
            { path: 'view3', component: BottomNavRoutingView3Component },
        ]
    }
];

@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forRoot(appRoutes)]
})
export class AppRoutingModule { }
```

Now that we have all navigation routes setup, we need to declare the BottomNavigation component and configure it for routing.
Also, make sure to add a router-outlet for rendering the view components' output.

```html
<!-- bottomnav-routing.component.html -->
<router-outlet></router-outlet>

<igx-bottom-nav>
  <igx-tab label="Tab 1" icon="dashboard"
    routerLink="view1"
    routerLinkActive #rla1="routerLinkActive"
    [isSelected]="rla1.isActive">
  </igx-tab>

  <igx-tab label="Tab 2" icon="check_circle_outline"
    routerLink="view2"
    routerLinkActive #rla2="routerLinkActive"
    [isSelected]="rla2.isActive">
  </igx-tab>

  <igx-tab label="Tab 3" icon="radio_button_checked"
    routerLink="view3"
    routerLinkActive #rla3="routerLinkActive"
    [isSelected]="rla3.isActive">
  </igx-tab>
</igx-bottom-nav>
```

The above code creates a BottomNavigation component with three tab items. All tab items are having the `RouterLink` directive applied which is used to specify the routing link used for the navigation. If any of these links becomes active, the corresponding tab item will have its `isSelected` property set because of the binding to the `RouterLinkActive` directive's `isActive` property. This way the selected tab item will always stay synchronized with the current browser's address.

The described approach above is used by the following sample to demonstrate routing using the BottomNavigation component:

<div class="sample-container loading" style="height: 500px; width: 500px; border: 1px solid gray;">
    <iframe id="tabbar-sample-3-iframe" data-src='{environment:demosBaseUrl}/layouts/tabbar-sample-3' width="100%" height="100%" seamless="" frameBorder="0" class="lazyload"></iframe>
</div>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="tabbar-sample-3-iframe"
    data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>

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
