---
title: Angular List View | Angular List Example | Infragistics
_description: The Ignite UI for Angular List component displays rows of items and supports one or more header items as well as search and filtering of list items. Try it for FREE
_keywords: angular list, ignite ui for angular, angular list component, angular list view, angular list view component, angular ui components
---

# Angular List View Component Overview

The Ignite UI for Angular List component displays rows of items and supports one or more header items as well as search and filtering of list items. Each list item is completely templatable and supports any valid HTML or [Angular component](https://www.infragistics.com/products/ignite-ui-angular). The list component also providers built in panning functionality, templates for empty and loading states, and supports virtualization for large lists using the [`IgxForOf`](for-of.md) directive.

## Angular List Example
The following example represents a list populated with contacts with a _name_ and a _phone number_ properties. The [`IgxList`]({environment:angularApiUrl}/classes/igxlistcomponent.html) component uses [`igx-avatar`](avatar.md) and [`igx-icon`](icon.md) to enrich the user experience and expose the capabilities of setting avatar picture and different icon for _favorite a contact_. In addition, the List View expose sorting capabilities achieved by using our filtering pipe.

<code-view style="height: 513px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/lists/list-sample-4/" alt="Angular List Example">
</code-view>

<div class="divider--half"></div>

## Getting Started with Ignite UI for Angular List

To get started with the Ignite UI for Angular List View component, first you need to install Ignite UI for Angular. In an existing Angular application, type the following command:

```cmd
ng add igniteui-angular
```

For a complete introduction to the Ignite UI for Angular, read the [*getting started*](general/getting-started.md) topic.

The next step is to import the `IgxListModule` in the **app.module.ts** file.

>[!NOTE]
>**This component can utilize the [`HammerModule`](https://angular.io/api/platform-browser/HammerModule) **optionally**.It can be imported in the root module of the application in order for touch interactions to work as expected.**.

```typescript
// app.module.ts

import { HammerModule } from '@angular/platform-browser';
import { IgxListModule } from 'igniteui-angular';
// import { IgxListModule } from '@infragistics/igniteui-angular'; for licensed package

@NgModule({
    ...
    imports: [..., IgxListModule, HammerModule],
    ...
})
export class AppModule {}
```

Alternatively, as of `16.0.0` you can import the `IgxListComponent` as a standalone dependency, or use the [`IGX_LIST_DIRECTIVES`](https://github.com/IgniteUI/igniteui-angular/blob/master/projects/igniteui-angular/src/lib/list/public_api.ts) token to import the component and all of its supporting components and directives.

```typescript
// home.component.ts

import { HammerModule } from '@angular/platform-browser';
import { IGX_LIST_DIRECTIVES } from 'igniteui-angular';
// import { IGX_LIST_DIRECTIVES } from '@infragistics/igniteui-angular'; for licensed package

@Component({
    selector: 'app-home',
    template: `
    <igx-list>
        <igx-list-item isHeader="true">Header</igx-list-item>
        <igx-list-item>Item 1</igx-list-item>
        <igx-list-item>Item 2</igx-list-item>
        <igx-list-item>Item 3</igx-list-item>
    </igx-list>
    `,
    styleUrls: ['home.component.scss'],
    standalone: true,
    imports: [IGX_LIST_DIRECTIVES, HammerModule]
    /* or imports: [IgxListComponent, IgxListItemComponent, HammerModule] */
})
export class HomeComponent {}
```

Now that you have the Ignite UI for Angular List module or directives imported, you can start using the `igx-list` component.

## Using the Angular List

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


<code-view style="height: 100px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/lists/list-sample-5/" >
</code-view>


Sometimes there may be a delay in your data loading. In this case you can set the list's [`isLoading`]({environment:angularApiUrl}/classes/igxlistcomponent.html#isLoading) property to `true` and a default template will inform the user regarding the ongoing data loading process. You can also provide your own loading template using the [`igxDataLoading`]({environment:angularApiUrl}/classes/igxdataloadingtemplatedirective.html) directive:

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
           iframe-src="{environment:demosBaseUrl}/lists/list-sample-6/" >
</code-view>


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


<code-view style="height: 200px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/lists/list-sample-2/" >
</code-view>


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


<code-view style="height: 400px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/lists/list-sample-3/" >
</code-view>


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
// import { IgxListModule, IgxAvatarModule, IgxIconModule } from '@infragistics/igniteui-angular'; for licensed package

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
      <igx-avatar igxListThumbnail [src]="contact.photo" shape="circle"></igx-avatar>
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

Let's also allow the user to choose the size of the list by using the `--ig-size` CSS custom property. We will do this by importing the `IgxButtonGroupModule` and using the [**IgxButtonGroup**](button-group.md) to display all size values. This way whenever one gets selected, we will update the **size** of the list.

```typescript
// app.module.ts
...
import { IgxButtonGroupModule } from 'igniteui-angular';
// import { IgxButtonGroupModule } from '@infragistics/igniteui-angular'; for licensed package

@NgModule({
    imports: [..., IgxButtonGroupModule]
})
```

```html
<!--contacts.component.html-->

<igx-buttongroup [values]="sizes" (selected)="selectSize($event)"></igx-buttongroup>
...
<igx-list>
    ...
</igx-list>
```

```typescript
// contacts.component.ts

public size = 'large';
public sizes;

public ngOnInit() {
    this.sizes = [
        { label: 'large', selected: this.size === 'large', togglable: true },
        { label: 'medium', selected: this.size === 'medium', togglable: true },
        { label: 'small', selected: this.size === 'small', togglable: true }
    ];
}

public selectSize(event: any) {
    this.size = this.sizes[event.index].label;
}


@HostBinding('style.--ig-size')
protected get sizeStyle() {
    return `var(--ig-size-${this.size})`;
}
```

And here's the result of all that work:


<code-view style="height: 513px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/lists/list-sample-4/" >
</code-view>

<div class="divider--half"></div>

### List Items Panning

Now that we have such a beautiful Angular list with contacts and their phone numbers, why don't we implement an ability to call a contact.
The [`IgxList`]({environment:angularApiUrl}/classes/igxlistcomponent.html) has the perfect solution for this - list item panning.
To do this you have to implement the following steps:
- Enable the panning using the [`allowLeftPanning`]({environment:angularApiUrl}/classes/igxlistcomponent.html#allowLeftPanning) and/or the [`allowRightPanning`]({environment:angularApiUrl}/classes/igxlistcomponent.html#allowRightPanning) properties
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
    <igx-avatar igxListThumbnail [src]="contact.photo" shape="circle"></igx-avatar>
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
@ViewChild('toast')
public toast: IgxToastComponent;

public rightPanPerformed(args) {
  args.keepItem = true;
  this.toast.message = 'Dialing ' + this.contacts[args.item.index - 1].name;
  this.toast.open();
}

public leftPanPerformed(args) {
  args.keepItem = false;
  setTimeout((idx = args.item.index - 1) => {
    this.toast.message = 'Contact ' + this.contacts[idx].name + ' removed.';
    this.toast.open();
    this.contacts.splice(idx, 1);
  }, 500);
}

...
```

> [!NOTE]
> When panning list items there is a threshold which must be reached in order for the panning events to be emitted. You can change the threshold using the [`IgxList`]({environment:angularApiUrl}/classes/igxlistcomponent.html)'s [`panEndTriggeringThreshold`]({environment:angularApiUrl}/classes/igxlistcomponent.html#panEndTriggeringThreshold) property. By default this property has a value of 0.5 which means 50% of list item's width.

Now try panning the list items for yourself:


<code-view style="height: 500px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/lists/list-sample-7/" >
</code-view>

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
// import { IgxFilterModule, IgxInputGroupModule } from '@infragistics/igniteui-angular'; for licensed package

@NgModule({
    imports: [..., IgxFilterModule, IgxInputGroupModule]
})

// contacts.component.ts
...
import { IgxFilterOptions } from 'igniteui-angular';
// import { IgxFilterOptions } from '@infragistics/igniteui-angular'; for licensed package

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

<div class="divider--half"></div>

## List Item Selection

The list items have a `selected` property that helps us track which items are "selected". This property allows us to identify and manage the selection status of each item.

Here's an example illustrating how the visual style of the items changes when using the `selected` property:

<code-view style="height: 420px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/lists/list-item-selection/" >
</code-view>

By default, the `selected` property is set to `false`. We can toggle its value using an inline expression bound to the `(click)` event on each list item, effectively switching the visual state of the item each time it's clicked.

```html
<igx-list>
    <igx-list-item [isHeader]="true">Contacts</igx-list-item>
    @for (contact of contacts | igxFilter: filterContacts; track contact) {
      <igx-list-item [selected]="contact.selected" (click)="contact.selected = !contact.selected">
        <igx-avatar igxListThumbnail [src]="contact.photo" shape="circle"></igx-avatar>
        <span igxListLineTitle>{{ contact.name }}</span>
        <span igxListLineSubTitle>{{ contact.phone }}</span>
        <igx-icon igxListAction [style.color]="contact.isFavorite ? 'orange' : 'lightgray'" igxRipple="pink"
          [igxRippleCentered]="true" (click)="toggleFavorite(contact, $event)"
        (mousedown)="mousedown($event)">star</igx-icon>
      </igx-list-item>
    }
  </igx-list>
```

The list item also exposes a few CSS variables which you can use to style different parts of the selected elements:

- `--item-background-selected`
- `--item-text-color-selected`
- `--item-title-color-selected`
- `--item-action-color-selected`
- `--item-subtitle-color-selected`
- `--item-thumbnail-color-selected`

```scss
igx-list-item {
  --item-background-selected: var(--ig-secondary-500);
  --item-title-color-selected: var(--ig-secondary-500-contrast);
  --item-subtitle-color-selected: var(--ig-info-100);
}
```

If you prefer to use the list theming function, there are parameters available that allow you to style the selected state of the list items. You can find more information about these parameters here: [`list-theme`]({environment:sassApiUrl}/index.html#function-list-theme)

<div class="divider--half"></div>

## Chat Component
The following sample demonstrates how to create a simple chat component using **IgxList**.

<code-view style="height: 650px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/lists/list-chat-sample/" >
</code-view>

<div class="divider--half"></div>

## Styling

### List Theme Dependencies

When you modify a primary property, all related dependent properties are automatically updated to reflect the change:

<table class="collapsible-table">
  <thead>
    <tr>
      <th>Primary Property</th>
      <th>Dependent Property</th>
      <th>Description</th>
    </tr>
  </thead>

  <!-- group for background -->
  <tbody class="group">
    <tr class="primary">
      <td>
        <strong>$background</strong>
      </td>
      <td>$header-background</td>
      <td>The list header background color.</td>
    </tr>
    <tr>
      <td></td>
      <td>$item-background</td>
      <td>The list item background color.</td>
    </tr>
  </tbody>

  <!-- group for header-background -->
  <tbody class="group">
    <tr class="primary">
      <td>
        <strong>$header-background</strong>
      </td>
      <td>$header-text-color</td>
      <td>The list header text color.</td>
    </tr>
  </tbody>

  <!-- group for item-background -->
  <tbody class="group">
    <tr class="primary">
      <td>
        <details><summary><strong>$item-background</strong></summary></details>
      </td>
      <td>$background</td>
      <td>The list background color.</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$header-background</td>
      <td>The list header background color.</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$item-background-hover</td>
      <td>The list item hover background color.</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$item-text-color</td>
      <td>The list item text color.</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$item-title-color</td>
      <td>The list item title color.</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$item-action-color</td>
      <td>The list item action color.</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$item-thumbnail-color</td>
      <td>The list item thumbnail color.</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$item-subtitle-color</td>
      <td>The list item subtitle color.</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$border-color</td>
      <td>The list border color. (Fluent/Bootstrap only)</td>
    </tr>
  </tbody>

  <!-- group for item-background-hover -->
  <tbody class="group">
    <tr class="primary">
      <td>
        <details><summary><strong>$item-background-hover</strong></summary></details>
      </td>
      <td>$item-background-active</td>
      <td>The active list item background color.</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$item-text-color-hover</td>
      <td>The list item hover text color.</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$item-title-color-hover</td>
      <td>The list item hover title color.</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$item-action-color-hover</td>
      <td>The list item hover action color.</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$item-thumbnail-color-hover</td>
      <td>The list item hover thumbnail color.</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$item-subtitle-color-hover</td>
      <td>The list item hover subtitle color.</td>
    </tr>
  </tbody>

  <!-- group for item-background-active -->
  <tbody class="group">
    <tr class="primary">
      <td>
        <details><summary><strong>$item-background-active</strong></summary></details>
      </td>
      <td>$item-background-selected</td>
      <td>The selected list item background color.</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$item-text-color-active</td>
      <td>The active list item text color.</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$item-title-color-active</td>
      <td>The active list item title color.</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$item-action-color-active</td>
      <td>The active list item action color.</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$item-thumbnail-color-active</td>
      <td>The active list item thumbnail color.</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$item-subtitle-color-active</td>
      <td>The active list item subtitle color.</td>
    </tr>
  </tbody>

  <!-- group for item-background-selected -->
  <tbody class="group">
    <tr class="primary">
      <td>
        <details><summary><strong>$item-background-selected</strong></summary></details>
      </td>
      <td>$item-text-color-selected</td>
      <td>The selected list item text color.</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$item-title-color-selected</td>
      <td>The selected list item title color.</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$item-action-color-selected</td>
      <td>The selected list item action color.</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$item-thumbnail-color-selected</td>
      <td>The selected list item thumbnail color.</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$item-subtitle-color-selected</td>
      <td>The selected list item subtitle color.</td>
    </tr>
  </tbody>
</table>

> **Note:** The actual results may vary depending on the theme variant.


Let's see how we can change the background of our list. First we need to import index.scss in to our component .scss file.

```scss
@use "igniteui-angular/theming" as *;

// IMPORTANT: Prior to Ignite UI for Angular version 13 use:
// @import '~igniteui-angular/lib/core/styles/themes/index';
```

Following the simplest approach, we create a new theme that extends the [`list-theme`]({environment:sassApiUrl}/index.html#function-list-theme) and by passing only the `$background` parameter, the theme will automatically calculate the state colors and appropriate contrasting foregrounds. However, you can still manually define them if desired.

```scss
$my-list-theme: list-theme(
  $background: #57a5cd
);
```

Take a look at the [`list-theme`]({environment:sassApiUrl}/index.html#function-list-theme) section for a complete list of available parameters for styling the list.

The last step is to **include** the newly created themes.

```scss
@include css-vars($my-list-theme);
```

The result is the following:

<code-view style="height: 365px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/lists/list-sample-8/" >
</code-view>

For full list of parameters that you can change for the list component please refer to: [IgxListComponent Styles]({environment:sassApiUrl}/index.html#function-list-theme)

### Styling with Tailwind

You can style the list using our custom Tailwind utility classes. Make sure to [set up Tailwind](themes/misc/tailwind-classes.md) first.

Along with the tailwind import in your global stylesheet, you can apply the desired theme utilities as follows:

```scss
@import "tailwindcss";
...
@use 'igniteui-theming/tailwind/utilities/material.css';
```

The utility file includes both `light` and `dark` theme variants.
- Use `light-*` classes for the light theme.
- Use `dark-*` classes for the dark theme.
- Append the component name after the prefix, e.g., `light-list`, `dark-list`.

Once applied, these classes enable dynamic theme calculations. From there, you can override the generated CSS variables using `arbitrary properties`. After the semicolon, provide any valid CSS color format (HEX, CSS variable, RGB, etc.).

You can find the full list of properties in the [list-theme]({environment:sassApiUrl}/themes#function-list-theme). The syntax is as follows:

```html
<igx-list class="!light-list ![--background:#81B698] ![--item-background:#A3C7B2]">
    ...
</igx-list>
```

>[!NOTE]
>The exclamation mark(`!`) is required to ensure the utility class takes precedence. Tailwind applies styles in layers, and without marking these styles as important, they will get overridden by the component’s default theme.

At the end your list should look like this:

<div class="sample-container loading" style="height:400px">
    <iframe id="list-tailwind-style-iframe" data-src='{environment:demosBaseUrl}/lists/list-tailwind-styling' width="100%" height="100%" seamless frameBorder="0" class="lazyload"></iframe>
</div>

## API References

In this article we covered a lot of ground with the Angular list component. We created a list of contact items. Used some additional Ignite UI for Angular components inside our list items, like avatars and icons. Created some custom item layout and styled it. Finally, we added list filtering. The list component has a few more APIs to explore, which are listed below.

* [IgxListComponent API]({environment:angularApiUrl}/classes/igxlistcomponent.html)
* [IgxListComponent Styles]({environment:sassApiUrl}/index.html#function-list-theme)
* [IgxListItemComponent API]({environment:angularApiUrl}/classes/igxlistitemcomponent.html)

Additional Angular components that were used:

* [IgxAvatarComponent API]({environment:angularApiUrl}/classes/igxavatarcomponent.html)
* [IgxAvatarComponent Styles]({environment:sassApiUrl}/index.html#function-avatar-theme)
* [IgxIconComponent API]({environment:angularApiUrl}/classes/igxiconcomponent.html)
* [IgxIconComponent Styles]({environment:sassApiUrl}/index.html#function-icon-theme)

<div class="divider"></div>

## Theming Dependencies
* [IgxRipple Theme]({environment:sassApiUrl}/index.html#function-ripple-theme)
* [IgxAvatar Theme]({environment:sassApiUrl}/index.html#function-avatar-theme)

## Additional Resources

<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
