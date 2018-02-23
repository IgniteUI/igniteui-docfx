---
title: Tab Bar Component
_description: Display tabs for any occasion and implement a completely tabbed user interface. These UI controls manage every aspect of your tabs’ appearance and behavior.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Tab Bar component, Angular Tab Bar controls
---

## Tab Bar

<p class="highlight">The Ignite UI for Angular Tab Bar component enables the user to navigate among a number of content panels displayed in a single view. The navigation through the panels is accomplished with the tab buttons located at bottom.</p>
<div class="divider"></div>

### Tabbar Demo

<div class="sample-container loading" style="height: 600px; width: 400px; border: 1px solid gray;" >
    <iframe id="tabbar-sample-iframe" src='{environment:demosBaseUrl}/tabbar' width="100%" height="100%" seamless
        frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
<button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="tabbar-sample-iframe"
    data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>

<div class="divider--half"></div>

> [!WARNING]
> Ignite UI for Angular has a [peer dependency](https://nodejs.org/en/blog/npm/peer-dependencies/) on [**HammerJS**](https://hammerjs.github.io/).
> Make sure you add it to your Angular project.
> <br/> <br/>`$ npm install hammerjs @types/hammerjs`

### Usage

To get started with the control, let's first import the **IgxTabBarModule** in the **app.module.ts** file:

```typescript
// app.module.ts

...
import { IgxTabBarModule } from 'igniteui-angular/main';

@NgModule({
    ...
    imports: [..., IgxTabBarModule],
    ...
})
export class AppModule {}
```

Then, modify the component's template to include the Tab Bar and add three panels.

```html
<igx-tab-bar>
  <igx-tab-panel label="Tab 1">This is Tab 1 content.</igx-tab-panel>
  <igx-tab-panel label="Tab 2">This is Tab 2 content.</igx-tab-panel>
  <igx-tab-panel label="Tab 3">This is Tab 3 content.</igx-tab-panel>
</igx-tab-bar>
```
If all went well, you should see the following in your browser:

<div class="sample-container loading" style="height: 200px; width: 300px; border: 1px solid gray;">
    <iframe id="tabbar-sample-1-iframe" src='{environment:demosBaseUrl}/tabbar-sample-1' width="100%" height="100%" seamless
        frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
<button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="tabbar-sample-1-iframe"
    data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>

<div class="divider"></div>

### Customizing Tabs

Let's modify the tabs and make them more appealing by including icons. The Tab Bar contorl is compatible with the Material Design 
[**Icons**](https://material.io/icons/) so it will be very easy for you to addopt them in your application.

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
<igx-tab-bar>
  
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

</igx-tab-bar>
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

After these modifications our Tab Bar should looks similar to this:

<div class="sample-container loading" style="height: 350px; width: 300px; border: 1px solid gray;">
    <iframe id="tabbar-sample-2-iframe" src='{environment:demosBaseUrl}/tabbar-sample-2' width="100%" height="100%" seamless
        frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
<button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="tabbar-sample-2-iframe"
    data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>

<div class="divider--half"></div>

If changing the tabs' labels and tabs' icons is not enough, you can also create your own template for each tabs.
Here is an example:

```html
<igx-tab-bar>
    <igx-tab-panel>

        <ng-template igxTab>
            <div>
                <!-- your custom tab content goes here -->
            </div>
        </ng-template>
        
        <h1>Tab content</h1>
    </igx-tab-panel>
</igx-tab-bar>
```

<div class="divider"></div>

### Embedding Other Igx Controls

You can combine other Ignite UI for Angular components with the Tab Bar to achieve more complex applications.
For example you may use the IgxList to create a list of contacts in a Tab Bar's panel and also visualize each contact using IgxAvatar and IgxIcon.

This time you will need to include both the IgxTabBar and IgxList components in your "app.module.ts" file:

```typescript
// app.module.ts

...
import { IgxAvatarModule } from 'igniteui-angular/main';
import { IgxIconModule } from 'igniteui-angular/main';
import { IgxListModule } from 'igniteui-angular/main';
import { IgxTabBarModule } from 'igniteui-angular/main';

@NgModule({
    ...
    imports: [..., IgxAvatarModule, IgxIconModule, IgxListModule, IgxTabBarModule],
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

Edit the component's template markup by adding the following Tab Bar with an IgxList in its first panel:

```html
...
<igx-tab-bar>
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
                    <igx-icon name="phone"></igx-icon>
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
</igx-tab-bar>
...
```

And don't forget to include these CSS definitions in order for the application to looks correctly:

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

You can see the result of the code above at the begining of this article in the [Tabbar Demo](#tabbar-demo) section.

<div class="divider"></div>

### API Summary

The tab bar component has a few more APIs to explore, which are listed below.

#### Inputs

The following inputs are available on the **igx-tab-panel** component:
| Name | Type | Description |
| :--- | :--- | :--- |
| `label` | String | Defines the label on the associated tab. |
| `icon` | String | Defines the icon on the associated tab. |
| `select` | Method | Selects the panel and the associated tab. |

<div class="divider--half"></div>

The following inputs are available on the **igx-tab** component:
| Name | Type | Description |
| :--- | :--- | :--- |
| `select` | Method | Selects the tab and the associated panel. |

<div class="divider"></div>

#### Outputs

The following outputs are available on the **igx-tab-bar** component:
| Name | Type | Description |
| :--- | :--- | :--- |
| `onTabSelected` | EventEmitter | Emits an event when a new tab is selected. |
| `onTabDeselected` | EventEmitter | Emits an event when a tab is deselected. |

<div class="divider"></div>

#### Getters

The following getters are available on the **igx-tab-bar** component:
| Name | Type | Description |
| :--- | :--- | :--- |
| `tabs` | QueryList | Provides an observable collection of all IgxTab view children. |
| `panels` | QueryList | Provides an observable collection of all IgxTabPanel content children. |
| `selectedIndex` | Number | Gets the index of selected tab/panel in the respective collection. |
| `selectedTab` | IgxTab | Gets the selected IgxTab in the tabbar based on `selectedIndex`. |

<div class="divider--half"></div>

The following getters are available on the **igx-tab-panel** component:
| Name | Type | Description |
| :--- | :--- | :--- |
| `isDisabled` | Boolean | Determines whether the panel is disabled. |
| `isSelected` | Boolean | Determines whether the panel is selected. |
| `index` | Number | Gets the index of a panel in the panel collection. |
| `relatedTab` | IgxTab | Gets the tab associated with the panel. |

<div class="divider--half"></div>

The following getters are available on the **igx-tab** component:
| Name | Type | Description |
| :--- | :--- | :--- |
| `isDisabled` | Boolean | Determines whether the tab is disabled. |
| `isSelected` | Boolean | Determines whether the tab is selecte. |
| `index` | Number | Gets the index of the tab in the tab collection. |
| `relatedPanel` | IgxTabPanel | Gets the panel associated with the tab. |

<div class="divider"></div>

###Additional Resources

<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
