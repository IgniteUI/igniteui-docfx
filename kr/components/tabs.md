---
title: Tabs Component - Native Angular | Ignite UI for Angular 
_description: The Ignite UI for Angular Tabs component places tabs at the top and allows for scrolling when there are multiple tab items on the screen. 
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Components, Native Angular Controls, Native Angular Components Library, Angular Tabs component, Angular Tabs controls, Angular Tabs
_language: kr
---

## Tabs

The [`igx-tabs`]({environment:angularApiUrl}/classes/igxtabscomponent.html) component in Ignite UI for Angular is used to organize or switch between similar data sets. It functions as a wrapper for [`igx-tab-item`]({environment:angularApiUrl}/classes/igxtabitemcomponent.html) and [`igx-tabs-group`]({environment:angularApiUrl}/classes/igxtabsgroupcomponent.html), as these respectively represent the container for the data and the tab header. The tabs component places tabs at the top and allows scrolling when there are multiple tab items on the screen.

### Tabs Demo

<code-view style="height: 250px; width: 600px;" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/layouts/tabs-sample-3" >
</code-view>

<div class="divider--half"></div>

> [!NOTE]
> To start using Ignite UI for Angular components in your own projects, make sure you have configured all necessary dependencies and have performed the proper setup of your project. You can learn how to do this in the [**installation**](https://www.infragistics.com/products/ignite-ui-angular/getting-started#installation) topic.

### Usage

To get started with the Ignite UI for Angular Tabs component, let's first import the `IgxTabsModule` in the **app.module.ts** file.

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


<code-view style="height: 200px; width: 600px; border: 1px solid gray;" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/layouts/tabs-sample-1" >
</code-view>


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


<code-view style="height: 450px; width: 800px;" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/layouts/tabs-sample-2" >
</code-view>


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


<code-view style="height: 250px; width: 600px;" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/layouts/tabs-sample-3" >
</code-view>


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

### Using Tabs and Routing

The following examples demonstrate sample usage of the tabs component and basic routing scenarios. You can learn more about Angular Routing & Navigation <a href="https://angular.io/guide/router" target="_blank">here</a>. 

#### Using igxTab, routerLink Directives and Single router-outlet

In order to implement basic routing with [`igx-tabs`]({environment:angularApiUrl}/classes/igxtabscomponent.html), you can re-template the igx-tabs item header using the [`igxTab`]({environment:angularApiUrl}/classes/igxtabitemtemplatedirective.html) directive and provide links via `routerLink` in `ng-template`. Views are switched and displayed after a single `router-outlet` placed outside the tabs component. Note that `ng-template` content overides the default tabs headers style.

```html
<!-- tabs-sample-1.component.html -->
<igx-tabs #tabs1>
  <igx-tabs-group *ngFor="let routerLink of routerLinks">
    <ng-template igxTab>
      {{routerLink.label}}
      <a routerLink="{{routerLink.link}}"></a>
    </ng-template>
  </igx-tabs-group>
</igx-tabs>

<div>
  <router-outlet></router-outlet>
</div>
```

```typescript
// tabs-sample-1.component.ts
this.routerLinks = [
  {
    label: 'View 1',
    link: '/view1',
    index: 0
  }, 
  {
    label: 'View 2',
    link: '/view2',
    index: 1
  },
  {
    label: 'View 3',
    link: '/view3',
    index: 2
  },
];
```
Declare all needed route definitions that map URL path to a specific component. All available child components with their URL paths are listed in a separate routing module named tabs.routing.module.ts which is imported in the main routing module named app.routing.module.ts. Configure the router via the RouterModule.forChild method.

```typescript
// tabs.routing.module.ts
const routes: Routes = [
    // simple links
    { path: 'view1', component: View1Component },
    { path: 'view2', component: View2Component },
    { path: 'view3', component: View3Component },
    { path: '', redirectTo: 'view1', pathMatch: 'full' }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class TabsRoutingModule { }
```
Configure the main router using RouterModule.forRoot method.

```typescript
// app.routing.module.ts
const routes: Routes = [
  {
    path: 'tabs',
    component: TabsSample1Component
  },
  { path: '', redirectTo: '/tabs', pathMatch: 'full' }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
```

In order to handle the back/forward browser buttons in this particular case, add the following code in ngOnInit and use the [`IgxTabsGroupComponent`]({environment:angularApiUrl}/classes/igxtabsgroupcomponent.html) [`select`]({environment:angularApiUrl}/classes/igxtabsgroupcomponent.html#select) method to activate the relevant tabs group.

```typescript
// tabs-sample-1.component.ts
constructor(private router: Router) {}

public ngOnInit() {
  // Initial view loaded
  this.router.navigate(['view1']);

  // Handle the back/forward browser buttons
  this._navigationEndSubscription = this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe((args) => {
  const index = this.routerLinks.indexOf(this.routerLinks.find(tab => tab.link === this.router.url));
  (this.tabs.groups.filter(item => item.index === index)[0] as IgxTabsGroupComponent).select();
  });
}
```


<code-view style 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/layouts/tabs-sample-4" >
</code-view>


#### Using Separate router-outlet as Tabs Content
In order to render views inside the [`igx-tabs`]({environment:angularApiUrl}/classes/igxtabscomponent.html) content, use named router outlets. In this case, implement [`onTabItemSelected`]({environment:angularApiUrl}/classes/igxtabscomponent.html#ontabitemselected) event handler to navigate and render the specified view.

```html
<!-- tabs-sample-1.component.html -->
<!-- router-outlet inside the tabs items content -->
<igx-tabs #tabs1 (onTabItemSelected)="navigate($event)">
  <igx-tabs-group label="Product1" name="product1">
    <router-outlet name="product1"></router-outlet>
  </igx-tabs-group>
  <igx-tabs-group label="Product2" name="product2">
    <router-outlet name="product2"></router-outlet>
  </igx-tabs-group>
  <igx-tabs-group label="Product3" name="product3">
    <router-outlet name="product3"></router-outlet>
  </igx-tabs-group>
</igx-tabs>
```

```typescript
// tabs-sample-1.component.ts
public navigate(eventArgs) {
    const selectedIndex = eventArgs.group.index;
    switch(selectedIndex) {
      case 0: {
        this.router.navigate(['/productDetails',
          {
            outlets:
            {
              product1: ['product1']
            }
          }
        ]);
        break;
    }
    case 1: {
      this.router.navigate(['/productDetails',
        {
          outlets:
          {
            product2: ['product2']
          }
        }
      ]);
      break;
    }
    case 2: {
      this.router.navigate(['/productDetails',
          {
            outlets:
            {
              product3: ['product3']
            }
          }
        ]);
        break;
      }
    }
  }
```
Declare all needed route definitions that map URL path to a specific component:

```typescript
// tabs.routing.module.ts
const routes: Routes = [
  {
    // children outlets
    path: 'productDetails',
    children: [
      { path: 'product1', component: View1Component, outlet: 'product1' },
      { path: 'product2', component: View2Component, outlet: 'product2' },
      { path: 'product3', component: View3Component, outlet: 'product3' },
      { path: '', redirectTo: 'product1', pathMatch: 'full' }
    ]
  },
  {
    path: '',
    redirectTo: '/productDetails',
    pathMatch: 'full'
  }
];
...
```


<code-view style 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/layouts/tabs-sample-5" >
</code-view>


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
