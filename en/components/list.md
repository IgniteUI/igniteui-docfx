---
title: Angular List View | Angular List Example | Infragistics
_description: The Ignite UI for Angular List component displays rows of items and supports one or more header items as well as search and filtering of list items. Try it for FREE
_keywords: angular list, ignite ui for angular, angular list component
---

# Angular List View

The List element is extremely useful when presenting a group of items. You can create a simple list of textual items, or a more complex one, containing an array of different layout elements.
The Ignite UI for Angular List component displays rows of items and supports one or more header items as well as search and filtering of list items. Each list item is completely templatable and will support any valid HTML or Angular component.

## Angular List Example
The following example represents a list populated with contacts with a _name_ and a _phone number_ properties. The [`IgxList`]({environment:angularApiUrl}/classes/igxlistcomponent.html) component uses [**IgxAvatar**](avatar.md) and [**IgxIcon**](icon.md) to enrich the user experience and expose the capabilities of setting avatar picture and different icon for _favorite a contact_. In addition, the List View expose sorting capabilities achieved by using our filtering pipe.
<div class="sample-container loading" style="height: 513px">
<iframe id="list-sample-4-iframe" src='{environment:demosBaseUrl}/lists/list-sample-4' width="100%" height="100%" seamless="" frameborder="0" onload="onSampleIframeContentLoaded(this);" alt="Angular List Example"></iframe>
</div>
<p style="margin: 0;padding-top: 0.5rem">Like this sample? Get access to our complete Angular toolkit and start building your own apps in minutes. <a class="no-external-icon mchNoDecorate trackCTA" target="_blank" href="https://www.infragistics.com/products/ignite-ui-angular/download" data-xd-ga-action="Download" data-xd-ga-label="Ignite UI for Angular">Download it for free.</a></p>
<div>
<button data-localize="codesandbox" class="codesandbox-btn" data-iframe-id="list-sample-4-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on codesandbox</button>
<button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="list-sample-4-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>

## How to create list view with Angular?

>[!NOTE]
>**This component requires [`HammerModule`](https://angular.io/api/platform-browser/HammerModule) to be imported in the root module of the application in order for touch interactions to work as expected.**.

At its core the Angular list component allows you to easily display a vertical list of items. The default styling of the items is done according to the single-line list specification as per the Material Design [**guidelines**](https://material.io/guidelines/components/lists.html).

To get started with the Angular list component, first you need to install Ignite UI for Angular by typing the following command:

```cmd
ng add igniteui-angular
```
For a complete introduction to the Ignite UI for Angular, read the [*getting started*](general/getting-started.md) topic.

The next step is to import the `IgxListModule` in our app.module.ts file:

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
In this case, the Angular list provides us with a default template that is used when the list is empty.
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

<div class="sample-container loading" style="height: 100px">
<iframe id="list-sample-5-iframe" data-src='{environment:demosBaseUrl}/lists/list-sample-5' width="100%" height="100%" seamless frameBorder="0" class="lazyload"></iframe>
</div>
<div>
<button data-localize="codesandbox" class="codesandbox-btn" data-iframe-id="list-sample-5-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on codesandbox</button>
<button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="list-sample-5-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>

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

<div class="sample-container loading" style="height: 300px">
<iframe id="list-sample-6-iframe" data-src='{environment:demosBaseUrl}/lists/list-sample-6' width="100%" height="100%" seamless frameBorder="0" class="lazyload"></iframe>
</div>
<div>
<button data-localize="codesandbox" class="codesandbox-btn" data-iframe-id="list-sample-6-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on codesandbox</button>
<button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="list-sample-6-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>

### Add List Items

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
<iframe id="list-sample-2-iframe" data-src='{environment:demosBaseUrl}/lists/list-sample-2' width="100%" height="100%" seamless frameBorder="0" class="lazyload"></iframe>
</div>
<div>
<button data-localize="codesandbox" class="codesandbox-btn" data-iframe-id="list-sample-2-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on codesandbox</button>
<button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="list-sample-2-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>

Let's up our game a bit and enhance our list items. Say we want to create an Angular list of contacts with a name and a phone number displayed under the name.
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

Now that we have some data we want to render, let's set up some markup.
If we want some styling out of the box we can use some of the directives that come with the list items.

Let's look at how we can use some of them in the next example:

```html
<!--contacts.component.html-->

<igx-list>
  <igx-list-item isHeader="true">
    Contacts
  </igx-list-item>
  <igx-list-item *ngFor="let contact of contacts">
    <h4 igxListLineTitle>{{ contact.name }}</h4>
    <p igxListLineSubTitle>{{ contact.phone }}</p>
  </igx-list-item>
</igx-list>
```

Both directives `igxListLineTitle` and `igxListLineSubTitle` gives our list items some default look.

After all that our Angular list should now look like that:

<div class="sample-container loading" style="height: 400px">
<iframe id="list-sample-3-iframe" data-src='{environment:demosBaseUrl}/lists/list-sample-3' width="100%" height="100%" seamless frameBorder="0" class="lazyload"></iframe>
</div>
<div>
<button data-localize="codesandbox" class="codesandbox-btn" data-iframe-id="list-sample-3-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on codesandbox</button>
<button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="list-sample-3-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>

### Adding Avatar and Icons

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

Cool, now let's update the template for our contacts list to show the avatar and icon. Again we can do that by using some of the list directives.

```html
<!--contacts.component.html-->

<igx-list>
  <igx-list-item isHeader="true">
    Contacts
  </igx-list-item>
  <igx-list-item #item *ngFor="let contact of contacts;">
      <igx-avatar igxListThumbnail [src]="contact.photo" roundShape="true"></igx-avatar>
      <h4 igxListLineTitle>{{ contact.name }}</h4>
      <p igxListLineSubTitle class="phone">{{ contact.phone }}</p>
      <span igxListLine>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta, laborum.</span>
      <igx-icon igxListAction [color]="contact.isFavorite ? 'orange' : 'lightgray'" (click)="toggleFavorite(item)">star</igx-icon>
  </igx-list-item>
</igx-list>
```

- `igxListThumbnail` is meant to be used if we need to add some kind of media at the beginning of our list items. The directive will wrap the target element in our case igx-avatar in a container that will provide some default position and spacing.
- `igxListAction` is meant to be used for list items that have some kind of action or metadata, for example, switch, radio-button, checkbox, etc. In our case the action is will be represented by an `igx-icon`. Again, the directive will wrap the target element in a container that will have the correct position and spacing.
- `igxListLine` is meant to be used if we need some text in-between `igxListThumbnail` and `igxListAction` the directive will make sure that the text position, spacing and alignment will look great with the other two directives around.

Next we listen for a click event on the [**IgxIcon**](icon.md) component to toggle the _isFavorite_ property in our contact object.

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

<div class="sample-container loading" style="height: 513px">
<iframe id="list-sample-4-final-iframe" data-src='{environment:demosBaseUrl}/lists/list-sample-4' width="100%" height="100%" seamless frameBorder="0" class="lazyload"></iframe>
</div>
<div>
<button data-localize="codesandbox" class="codesandbox-btn" data-iframe-id="list-sample-4-final-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on codesandbox</button>
<button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="list-sample-4-final-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>

### List Items Panning

Now that we have such a beautiful Angular list with contacts and their phone numbers, why don't we implement an ability to call a contact.
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
  (leftPan)="leftPanPerformed($event)" (rightPan)="rightPanPerformed($event)">
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
    <igx-avatar igxListThumbnail [src]="contact.photo" roundShape="true"></igx-avatar>
    <h4 igxListLineTitle>{{ contact.name }}</h4>
    <p igxListLineSubTitle class="phone">{{ contact.phone }}</p>
    <igx-icon igxListAction [color]="contact.isFavorite ? 'orange' : 'lightgray'" (click)="toggleFavorite(item)">star</igx-icon>
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

<div class="sample-container loading" style="height: 500px">
<iframe id="list-sample-7-final-iframe" data-src='{environment:demosBaseUrl}/lists/list-sample-7' width="100%" height="100%" seamless frameBorder="0" class="lazyload"></iframe>
</div>
<div>
<button data-localize="codesandbox" class="codesandbox-btn" data-iframe-id="list-sample-7-final-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on codesandbox</button>
<button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="list-sample-7-final-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>

## Angular filter list

Our list is looking good, but wouldn't it be even better if we could search for contacts by name? We can easily achieve that by using our filtering pipe.
Let's do this.

Let's add an input field to the top in our Angular component template first and bind it to a property in our component called _searchContact_:

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

## Applying theme to the list component

Let's see how we can change the background of our list. First we need to import index.scss in to our component .scss file.

```scss
@import '~igniteui-angular/lib/core/styles/themes/index';
```

Then we need to create a theme for our component.

```scss
@import '~igniteui-angular/lib/core/styles/themes/index';

:host ::ng-deep {
    $my-list-theme: igx-list-theme(
        $background: #0568ab
    );

    @include igx-list($my-list-theme);
}
```
The result from the above code is

<div class="sample-container loading" style="height: 365px">
<iframe id="list-sample-8-final-iframe" data-src='{environment:demosBaseUrl}/lists/list-sample-8' width="100%" height="100%" seamless frameBorder="0" class="lazyload"></iframe>
</div>
<div>
<button data-localize="codesandbox" class="codesandbox-btn" data-iframe-id="list-sample-8-final-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on codesandbox</button>
<button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="list-sample-8-final-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>

> [!NOTE]
> Please note that if we create our component theme in the component .scss file we need to use `::ng-deep` in order to pass the view encapsulation otherwise our new theme will not work! for more info please refer to:  [Component Themes](https://www.infragistics.com/products/ignite-ui-angular/angular/components/themes/component-themes.html).

For full list of parameters that you can change for the list component please refer to: [IgxListComponent Styles]({environment:sassApiUrl}/index.html#function-igx-list-theme)

## API References

In this article we covered a lot of ground with the Angular list component. We created a list of contact items. Used some additional Ignite UI for Angular components inside our list items, like avatars and icons. Created some custom item layout and styled it. Finally, we added list filtering. The list component has a few more APIs to explore, which are listed below.

* [IgxListComponent API]({environment:angularApiUrl}/classes/igxlistcomponent.html)
* [IgxListComponent Styles]({environment:sassApiUrl}/index.html#function-igx-list-theme)
* [IgxListItemComponent API]({environment:angularApiUrl}/classes/igxlistitemcomponent.html)

Additional Angular components that were used:

* [IgxAvatarComponent API]({environment:angularApiUrl}/classes/igxavatarcomponent.html)
* [IgxAvatarComponent Styles]({environment:sassApiUrl}/index.html#function-igx-avatar-theme)
* [IgxIconComponent API]({environment:angularApiUrl}/classes/igxiconcomponent.html)
* [IgxIconComponent Styles]({environment:sassApiUrl}/index.html#function-igx-icon-theme)

<div class="divider"></div>

## Additional Resources

<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
