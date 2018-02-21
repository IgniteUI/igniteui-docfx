---
title: List View Component
_description: Using any template, display data within rows seamlessly and intuitively through a native Angular framework with Ignite UI for Angular List View component.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular List View components, Angular List View controls
---

## List View

<p class="highlight">The Ignite UI for Angular List component displays rows of items and supports one or more header items as well as search and filtering of list items. Each list item is completely templateable and will support any valid HTML or Angular component. </p>
<div class="divider"></div>

### List Demo

<div class="sample-container loading" style="height: 477px">
<iframe id="list-sample-4-iframe" src='{environment:demosBaseUrl}/list-sample-4' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
<button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="list-sample-4-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>

> [!WARNING]
> Ignite UI for Angular has a [peer dependency](https://nodejs.org/en/blog/npm/peer-dependencies/) on [**HammerJS**](https://hammerjs.github.io/).
> Make sure you add it to your Angular project.
> <br/> <br/>`$ npm install hammerjs @types/hammerjs`

### Usage
At its core the list component allows you to easily display a vertical list of items. The default styling of the items is done according to the single-line list specification as per the Material Design [**guidelines**](https://material.io/guidelines/components/lists.html).
To get started with the Ignite UI for Angular List, let's first import the **IgxListModule** in our **app.module.ts** file:

```typescript
// app.module.ts

...
import { IgxListModule } from 'igniteui-angular/main';

@NgModule({
    ...
    imports: [..., IgxListModule],
    ...
})
export class AppModule {}
```

Then in the template of our contacts component we can create our list, but what if currently (or at some point in the future) we have no items in it?
In this case, the list provides us with a default template that is used when the list is empty.
We can always provide our own template for the look of our empty list by simply using the `igxEmptyList` directive. In this case, the default template will not be used:

```html
<!--contacts.component.html-->

<igx-list>
    <ng-template igxEmptyList>
        <p class="empty">No contacts! :(</p>
    </ng-template>
</igx-list>
```

And our style for the empty template:

```css
/* contacts.component.css */

.empty {
    color: rgba(0, 153, 255, 1);
    font-size: 25px;
    font-weight: 600;
    text-shadow: 2px 1px 2px rgba(150, 150, 150, 1);
}
```

If all went great, this is how our empty list should look like:

<div class="sample-container loading" style="height: 100px">
<iframe id="list-sample-5-iframe" src='{environment:demosBaseUrl}/list-sample-5' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
<button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="list-sample-5-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>

#### Add List Items

It's nice having a template for when the list is empty, but now let's add some items! We can add the following code to get a simple list of items:

```html
<!--contacts.component.html-->

<igx-list>
    <igx-list-item isHeader="true">Header</igx-list-item>
    <igx-list-item>Item 1</igx-list-item>
    <igx-list-item>Item 2</igx-list-item>
    <igx-list-item>Item 3</igx-list-item>
</igx-list>
```

If all went well, you should see the following in your browser:

<div class="sample-container loading" style="height: 200px">
<iframe id="list-sample-2-iframe" src='{environment:demosBaseUrl}/list-sample-2' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
<button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="list-sample-2-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>

#### Custom List Items

Let's up our game a bit and create some custom markup and styles for our list items. Say we want to create a list of contacts with a name and a phone number displayed under the name.
In our component typescript file we can define a list of contacts:

```typescript
// contacts.component.ts
...
public contacts = [{
    name: "Terrance Orta",
    phone: "770-504-2217"
}, {
    name: "Richard Mahoney",
    phone: "423-676-2869"
}, {
    name: "Donna Price",
    phone: "859-496-2817"
}, {
    name: "Lisa Landers",
    phone: "901-747-3428"
}, {
    name: "Dorothy H. Spencer",
    phone: "573-394-9254"
}];
```

Now that we have some data we want to render, let's set up some markup:

```html
<!--contacts.component.html-->

<igx-list>
  <igx-list-item isHeader="true">
    Contacts
  </igx-list-item>
  <igx-list-item *ngFor="let contact of contacts">
    <span class="name">{{ contact.name }}</span>
    <span class="phone">{{ contact.phone }}</span>
  </igx-list-item>
</igx-list>
```

> [!NOTE]
> The list item uses `flex` as its display value, with `flex-direction` set to `column`. Bear this in mind when building list layouts.

You may have noticed that despite the fact that we used span elements to display the name and phone number for our contacts, we still see them rendered one under the other. This is due to the column nature of each list item. Now that we have that out of the way, let's add some custom styling. We added two new classes to our name and phone spans - _name_ and _phone_. Let's use those classes to style the items:

```css
/* contacts.component.css */

.name {
    font-weight: 600;
}

.phone {
    font-size: 0.875em;
}
```

After all that our list should now look like that:

<div class="sample-container loading" style="height: 400px">
<iframe id="list-sample-3-iframe" src='{environment:demosBaseUrl}/list-sample-3' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
<button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="list-sample-3-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>

#### Adding Avatar and Icons

We can use some of our other components in conjuction with the Igx List component to enrich the experience and add some functionality. We can have a nice picture avatar to the left of the name and phone values. Additionally, we can add a star icon to the right of them to allow the user to favorite a contact. To do that let's grab the [**IgxAvatar**](https://www.infragistics.com/products/ignite-ui-angular/angular/components/avatar.html) and [**IgxIcon**](https://www.infragistics.com/products/ignite-ui-angular/angular/components/icon.html) modules and import them in our **app.module.ts** file.

```typescript
// app.module.ts

...
import {
    IgxListModule,
    IgxAvatarModule,
    IgxIconModule
} from 'igniteui-angular/main';

@NgModule({
    ...
    imports: [..., IgxAvatarModule, IgxIconModule],
})
export class AppModule {}
```

Next, we need to add some more information to our contact object, like a `photo` source for our avatar and a `isFavorite` property to indicate the contact's favorite status.

```typescript
// contacts.comoponent.ts

public contacts = [{
    name: 'Terrance Orta',
    phone: '770-504-2217',
    photo: 'https://randomuser.me/api/portraits/men/27.jpg',
    isFavorite: false
}, {
    name: 'Richard Mahoney',
    phone: '423-676-2869',
    photo: 'https://randomuser.me/api/portraits/men/1.jpg',
    isFavorite: true
}, {
    name: 'Donna Price',
    phone: '859-496-2817',
    photo: 'https://randomuser.me/api/portraits/women/50.jpg',
    isFavorite: false
}, {
    name: 'Lisa Landers',
    phone: '901-747-3428',
    photo: 'https://randomuser.me/api/portraits/women/3.jpg',
    isFavorite: false
}, {
    name: 'Dorothy H. Spencer',
    phone: '573-394-9254',
    photo: 'https://randomuser.me/api/portraits/women/67.jpg',
    isFavorite: true
}];
```

Cool, now let's update the template for our contacts list to to show the avatar and icon:

```html
<!--contacts.component.html-->

<igx-list>
  <igx-list-item isHeader="true">
    Contacts
  </igx-list-item>
  <igx-list-item #item *ngFor="let contact of contacts;">
    <div class="item-container">
      <div class="contact">
        <igx-avatar [src]="contact.photo" roundShape="true"></igx-avatar>
        <div class="contact__info">
          <span class="name">{{ contact.name }}</span>
          <span class="phone">{{ contact.phone }}</span>
        </div>
      </div>
      <igx-icon name="star" [color]="contact.isFavorite ? 'orange' : 'lightgray'" (click)="toggleFavorite(item)"></igx-icon>
    </div>
  </igx-list-item>
</igx-list>
```

First we wrap all our elements in an item container to allow us to style the flow a bit easier. Then we add our IgxAvatar component alongside our contact info in a contact wrapper. Lastly, we include the IgxIcon component. Let's update the css stylesheet to reflect the changes made to our markup:

```css
/* contacts.component.css */

igx-icon {
    cursor: pointer;
    user-select: none;
}

.item-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.contact {
    display: flex;
    flex: 1 0 240px;
    align-items: center;
}

.contact__info {
    display: flex;
    flex-flow: column nowrap;
    margin-left: 24px;
}

.name {
    font-weight: 600;
}

.phone {
    font-size: 0.875em;
}
```

We then listen for a click event on the IgxIcon component to toggle the _isFavorite_ property in our contact object.

```typescript
// contacts.component.ts

...
toggleFavorite(item: IgxListItem) {
    const contact = this.contacts[item.index - 1];
    contact.isFavorite = !contact.isFavorite;
}
```

And here's the result of all that work:

<div class="sample-container loading" style="height: 477px">
<iframe id="list-sample-4-final-iframe" src='{environment:demosBaseUrl}/list-sample-4' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
<button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="list-sample-4-final-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>

### Filtering

Our list is looking good, but wouldn't it be even better if we could search for contacts by name? We can easily achieve that by using our filtering pipe.
Let's do this.

Let's add an input field to the top in our component template first and bind it to a property in our component called _searchContact_:

```html
<!--contacts.component.html-->

<div class="igx-form-group" style="margin: 4px">
  <input class="igx-form-group__input--search" placeholder="Search Contacts" [(ngModel)]="searchContact">
  <label class="igx-form-group__label">
    <igx-icon name="search"></igx-icon>
  </label>
</div>
```

It's time to import the **IgxFilterModule** in our **app.module.ts** file and **IgxFilterOptions** in our contacts component:

```typescript
    // app.module.ts
    ...
    import { IgxFilterModule } from 'igniteui-angular/main';

    @NgModule({
        imports: [..., IgxFilterModule]
    })

    // contacts.component.ts
    ...
    import { IgxFilterOptions } from 'igniteui-angular/main';

    @Component({...})
    export class ContactListComponent {
        public searchContact: string;
        ...
        get filterContacts(): IgxFilterOptions {
            const fo = new IgxFilterOptions();
            fo.key = 'name';
            fo.inputFiels = this.searchContact;
            return fo;
        }
    }
```

After importing the `IgxFilterOptions`, we need to register a new getter method that will return the filtering options to be used by the pipe each time the `searchContact` property gets updated. For the filter to work we need to register a `key` to filter the contact object by. In our case that would be the `name` of each contact. The second property that has to be registered on the `IgxFilterOptions` object is the value that we should check against when comparing our contact name. This would be the `searchContact` property that we bound to the input field above our contacts list.

Finally, we need to apply the filtering pipe to our contacts data before we can use it. So in our template we simply add:

```html
<!--contacts.component.html-->

<igx-list-item *ngFor="let contact of contacts | igxFilter: filterContacts; let i = index">
    ...
</igx-list-item>
```

<div class="divider"></div>

### API Summary

In this article we covered a lot of ground with the list component. We created a list of contact items. Used some additional Ignite UI for Angular components inside our list items, like avatars and icons. Created some custom item layout and styled it. Finally, we added list filtering. The list component has a few more APIs to explore, which are listed below.

#### Inputs
The following inputs are available on the **igx-list** component:
| Name | Type | Description |
| :--- | :--- | :--- |
| `allowLeftPanning` | Boolean | Determines whether the left panning of an item is allowed. |
| `allowRightPanning` | Boolean | Determines whether the right panning of an item is allowed. |
| `emptyListTemplate` | IgxEmptyListTemplateDirective | The custom template to be used when the list is empty. |

<div class="divider"></div>

The following inputs are available on the **igx-list-item** component:
| Name | Type | Description |
| :--- | :--- | :--- |
| `isHeader` | Boolean | Sets the current list item as list header. |
| `hidden` | Boolean | Determines whether the item should be displayed. |

<div class="divider"></div>

#### Outputs
The following outputs are available on the **igx-list** component:
| Name | Type | Description |
| :--- | :--- | :--- |
| `onPanStateChange` | EventEmitter | Emits an event with the current list when pan gesture is executed on list item. |
| `onLeftPan` | EventEmitter | Emits an event with the current list when left pan gesture is executed on list item. |
| `onRightPan` | EventEmitter | Emits an event with the current list when right pan gesture is executed on list item. |
| `onItemClicked` | EventEmitter | Emits an event with the current list when a list item has been clicked. |

<div class="divider"></div>

#### Properties
The following properties are available on the **igx-list** component:
| Name | Type | Description |
| :--- | :--- | :--- |
| `children` | QueryList | Returns a collection of all IListChild components: items and headers. |
| `items` | IgxListItemComponent[] | Returns an array of all list items excluding item headers. |
| `headers` | IgxListItemComponent[] | Returns an array of all list headers. |

<div class="divider"></div>

The following properties are available on the **igx-list-item** component:
| Name | Type | Description |
| :--- | :--- | :--- |
| `index` | number | Retrieve the index of the list item. |
| `panState` | IgxListPanState | Retrieve the pan state of the list item. |
| `list` | IgxListComponent | Retrieve the list that is associated with the list item. |

<div class="divider"></div>

### Additional Resources

<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
