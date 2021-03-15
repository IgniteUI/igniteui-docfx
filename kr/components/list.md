---
title: List View Component
_description: Using any template, display data within rows seamlessly and intuitively through a native Angular framework with Ignite UI for Angular List View component.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular List View components, Angular List View controls
_language: kr
---

## List View

<p class="highlight">The Ignite UI for Angular List component displays rows of items and supports one or more header items as well as search and filtering of list items. Each list item is completely templatable and will support any valid HTML or Angular component. </p>
<div class="divider"></div>

### List Demo


<code-view style="height: 477px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/lists/list-sample-4" >
</code-view>

<div class="divider--half"></div>

### Usage
At its core the list component allows you to easily display a vertical list of items. The default styling of the items is done according to the single-line list specification as per the Material Design [**guidelines**](https://material.io/guidelines/components/lists.html).
To get started with the Ignite UI for Angular List, let's first import the `IgxListModule` in our app.module.ts file:

```typescript
// app.module.ts

...
import { IgxListModule } from 'igniteui-angular';

@NgModule({
    ...
    imports: [..., IgxListModule],
    ...
})
export class AppModule {}
```

Then in the template of our contacts component we can create our list, but what if currently (or at some point in the future) we have no items in it?
In this case, the list provides us with a default template that is used when the list is empty.
We can always provide our own template for the look of our empty list by simply using the [`igxEmptyList`]({environment:angularApiUrl}/classes/igxemptylisttemplatedirective.html) directive. In this case, the default template will not be used:

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


<code-view style="height: 100px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/lists/list-sample-5" >
</code-view>


Sometimes there may be a delay in your data loading. In this case you can set the list's [`isLoading`]({environment:angularApiUrl}/classes/igxlistcomponent.html#isloading) property to `true` and a default template will inform the user regarding the ongoing data loading process. You can also provide your own loading template using the [`igxDataLoading`]({environment:angularApiUrl}/classes/igxdataloadingtemplatedirective.html) directive:

```html
<!--contacts.component.html-->

<igx-list>
    <ng-template igxDataLoading>
        <p class="loading">Patience, we are currently loading your data...</p>
    </ng-template>
</igx-list>
```
```css
/* contacts.component.css */

.loading {
    color: rgba(255, 153, 0, 1);
    font-size: 25px;
    font-weight: 600;
    text-shadow: 2px 1px 2px rgba(150, 150, 150, 1);
}
```


<code-view style="height: 300px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/lists/list-sample-6" >
</code-view>


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


<code-view style="height: 200px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/lists/list-sample-2" >
</code-view>


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


<code-view style="height: 400px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/lists/list-sample-3" >
</code-view>


#### Adding Avatar and Icons

We can use some of our other components in conjunction with the [`IgxList`]({environment:angularApiUrl}/classes/igxlistcomponent.html) component to enrich the experience and add some functionality. We can have a nice picture avatar to the left of the name and phone values. Additionally, we can add a star icon to the right of them to allow the user to favorite a contact. To do that let's grab the [**IgxAvatar**](avatar.md) and [**IgxIcon**](icon.md) modules and import them in our app.module.ts file.

```typescript
// app.module.ts

...
import {
    IgxListModule,
    IgxAvatarModule,
    IgxIconModule
} from 'igniteui-angular';

@NgModule({
    ...
    imports: [..., IgxAvatarModule, IgxIconModule],
})
export class AppModule {}
```

Next, we need to add some more information to our contact object, like a `photo` source for our avatar and a `isFavorite` property to indicate the contact's favorite status.

```typescript
// contacts.component.ts

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

Cool, now let's update the template for our contacts list to show the avatar and icon:

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
      <igx-icon [color]="contact.isFavorite ? 'orange' : 'lightgray'" (click)="toggleFavorite(item)">star</igx-icon>
    </div>
  </igx-list-item>
</igx-list>
```

First we wrap all our elements in an item container to allow us to style the flow a bit easier. Then we add our [**IgxAvatar**](avatar.md) component alongside our contact info in a contact wrapper. Lastly, we include the [**IgxIcon**](icon.md) component. Let's update the css stylesheet to reflect the changes made to our markup:

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

We then listen for a click event on the [**IgxIcon**](icon.md) component to toggle the _isFavorite_ property in our contact object.

```typescript
// contacts.component.ts

...
toggleFavorite(item: IgxListItem) {
    const contact = this.contacts[item.index - 1];
    contact.isFavorite = !contact.isFavorite;
}
```

Let's also allow the user to choose the display density of the list by using its [`displayDensity`]({environment:angularApiUrl}/classes/igxlistcomponent.html#displaydensity) input. We will do this by importing the `IgxButtonGroupModule` and using the [**IgxButtonGroup**](button-group.md) to display all density values. This way whenever one gets selected, we will update our own **density** property that is bound to the [`displayDensity`]({environment:angularApiUrl}/classes/igxlistcomponent.html#displaydensity) of the list.

```typescript
// app.module.ts
...
import { IgxButtonGroupModule } from 'igniteui-angular';

@NgModule({
    imports: [..., IgxButtonGroupModule]
})
```

```html
<!--contacts.component.html-->

<igx-buttongroup [values]="displayDensities" (selected)="selectDensity($event)"></igx-buttongroup>
...
<igx-list [displayDensity]="density">
    ...
</igx-list>
```

```typescript
// contacts.component.ts

public density = "comfortable";
public displayDensities;

public ngOnInit() {
this.displayDensities = [
    { label: 'comfortable', selected: this.density === 'comfortable', togglable: true },
    { label: 'cosy', selected: this.density === 'cosy', togglable: true },
    { label: 'compact', selected: this.density === 'compact', togglable: true }
];
}

public selectDensity(event) {
    this.density = this.displayDensities[event.index].label;
}
```

And here's the result of all that work:


<code-view style="height: 477px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/lists/list-sample-4" >
</code-view>

<div class="divider--half"></div>

#### List Items Panning

Now that we have such a beautiful list with contacts and their phone numbers, why don't we implement an ability to call a contact.
The [`IgxList`]({environment:angularApiUrl}/classes/igxlistcomponent.html) has the perfect solution for this - list item panning.
To do this you have to implement the following steps:
- Enable the panning using the [`allowLeftPanning`]({environment:angularApiUrl}/classes/igxlistcomponent.html#allowleftpanning) and/or the [`allowRightPanning`]({environment:angularApiUrl}/classes/igxlistcomponent.html#allowrightpanning) properties
- Define template(s) for the left and/or right panning
- Handle the list item's panning event(s) and perform the desired action

The following example demonstrates how to handle both left and right panning. The event handler for right panning shows a toast message. The event handler for the left panning deletes an item from the [`IgxList`]({environment:angularApiUrl}/classes/igxlistcomponent.html).

> [!NOTE]
> Please note that the list item removal is an application task. The [`IgxList`]({environment:angularApiUrl}/classes/igxlistcomponent.html) itself cannot remove items from the data source because the [`IgxList`]({environment:angularApiUrl}/classes/igxlistcomponent.html) does not have reference to the data source.

Here is the HTML code of the example:

```html
<!-- contacts.component.html -->

<igx-list [allowLeftPanning]="true" [allowRightPanning]="true"
  (onLeftPan)="leftPanPerformed($event)" (onRightPan)="rightPanPerformed($event)">
  <ng-template igxListItemLeftPanning>
    <div class="listItemLeftPanningStyle">
      <igx-icon [color]="white" style="margin-left:10px">delete</igx-icon>Delete
    </div>
  </ng-template>
  <ng-template igxListItemRightPanning>
    <div class="listItemRightPanningStyle">
      <igx-icon [color]="white" style="margin-right:10px">call</igx-icon>Dial
    </div>
  </ng-template>
  <igx-list-item isHeader="true">Contacts</igx-list-item>
  <igx-list-item #item *ngFor="let contact of contacts">
    <div class="item-container">
      <div class="contact">
        <igx-avatar [src]="contact.photo" roundShape="true"></igx-avatar>
        <div class="contact__info">
          <span class="name">{{ contact.name }}</span>
          <span class="phone">{{ contact.phone }}</span>
        </div>
      </div>
      <igx-icon [color]="contact.isFavorite ? 'orange' : 'lightgray'"
        (click)="toggleFavorite(item)">star</igx-icon>
    </div>
  </igx-list-item>
</igx-list>

<igx-toast #toast></igx-toast>
```

The above example is using some CSS styles which may be found here:

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

.listItemLeftPanningStyle {
    display: flex;
    flex-direction: row-reverse;
    background-color:orange;
    color: white;
    width: 100%;
    padding-right: 10px;
    align-items: center;
}

.listItemRightPanningStyle {
    display: flex;
    flex-direction: row;
    background-color:limegreen;
    color: white;
    width: 100%;
    padding-left: 10px;
    align-items: center;
}
```
And finally here is the typescript code handling the panning events:

```typescript
// contacts.component.ts

...
@ViewChild("toast")
public toast: IgxToastComponent;

public rightPanPerformed(args) {
  args.keepItem = true;
  this.toast.message = "Dialing " + this.contacts[args.item.index - 1].name;
  this.toast.open();
}

public leftPanPerformed(args) {
  args.keepItem = false;
  setTimeout((idx = args.item.index - 1) => {
    this.toast.message = "Contact " + this.contacts[idx].name + " removed.";
    this.toast.open();
    this.contacts.splice(idx, 1);
  }, 500);
}

...
```

> [!NOTE]
> When panning list items there is a threshold which must be reached in order for the panning events to be emitted. You can change the threshold using the [`IgxList`]({environment:angularApiUrl}/classes/igxlistcomponent.html)'s [`panEndTriggeringThreshold`]({environment:angularApiUrl}/classes/igxlistcomponent.html#panendtriggeringthreshold) property. By default this property has a value of 0.5 which means 50% of list item's width.

Now try panning the list items for yourself:


<code-view style="height: 500px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/lists/list-sample-7" >
</code-view>

<div class="divider--half"></div>

### Filtering

Our list is looking good, but wouldn't it be even better if we could search for contacts by name? We can easily achieve that by using our filtering pipe.
Let's do this.

Let's add an input field to the top in our component template first and bind it to a property in our component called _searchContact_:

```html
<!--contacts.component.html-->

<igx-input-group type="search" class="search">
    <igx-prefix>
        <igx-icon>search</igx-icon>
    </igx-prefix>
    <input #search igxInput placeholder="Search Contacts" [(ngModel)]="searchContact">
    <igx-suffix *ngIf="search.value.length > 0" (click)="searchContact = null">
        <igx-icon>clear</igx-icon>
    </igx-suffix>
</igx-input-group>
```

It's time to import the `IgxFilterModule` and the `IgxInputGroupModule` in our app.module.ts file and [`IgxFilterOptions`]({environment:angularApiUrl}/classes/igxfilteroptions.html) in our contacts component:

```typescript
    // app.module.ts
    ...
    import { IgxFilterModule, IgxInputGroupModule } from 'igniteui-angular';

    @NgModule({
        imports: [..., IgxFilterModule, IgxInputGroupModule]
    })

    // contacts.component.ts
    ...
    import { IgxFilterOptions } from 'igniteui-angular';

    @Component({...})
    export class ContactListComponent {
        public searchContact: string;
        ...
        get filterContacts(): IgxFilterOptions {
            const fo = new IgxFilterOptions();
            fo.key = 'name';
            fo.inputValue = this.searchContact;
            return fo;
        }
    }
```

After importing the [`IgxFilterOptions`]({environment:angularApiUrl}/classes/igxfilteroptions.html), we need to register a new getter method that will return the filtering options to be used by the pipe each time the `searchContact` property gets updated. For the filter to work we need to register a `key` to filter the contact object by. In our case that would be the `name` of each contact. The second property that has to be registered on the [`IgxFilterOptions`]({environment:angularApiUrl}/classes/igxfilteroptions.html) object is the value that we should check against when comparing our contact name. This would be the `searchContact` property that we bound to the input field above our contacts list.

Finally, we need to apply the filtering pipe to our contacts data before we can use it. So in our template we simply add:

```html
<!--contacts.component.html-->

<igx-list-item *ngFor="let contact of contacts | igxFilter: filterContacts; let i = index">
    ...
</igx-list-item>
```

<div class="divider"></div>

### API References

In this article we covered a lot of ground with the list component. We created a list of contact items. Used some additional Ignite UI for Angular components inside our list items, like avatars and icons. Created some custom item layout and styled it. Finally, we added list filtering. The list component has a few more APIs to explore, which are listed below.

* [IgxListComponent API]({environment:angularApiUrl}/classes/igxlistcomponent.html)
* [IgxListComponent Styles]({environment:sassApiUrl}/index.html#function-igx-list-theme)
* [IgxListItemComponent API]({environment:angularApiUrl}/classes/igxlistitemcomponent.html)

Additional components that were used:

* [IgxAvatarComponent API]({environment:angularApiUrl}/classes/igxavatarcomponent.html)
* [IgxAvatarComponent Styles]({environment:sassApiUrl}/index.html#function-igx-avatar-theme)
* [IgxIconComponent API]({environment:angularApiUrl}/classes/igxiconcomponent.html)
* [IgxIconComponent Styles]({environment:sassApiUrl}/index.html#function-igx-icon-theme)

<div class="divider"></div>

### Additional Resources

<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
