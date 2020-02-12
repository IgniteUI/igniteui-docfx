---
title: Badge Component
_description: Display an active count or icon in a predefined style to decorate other components anywhere in an application with Ignite UI for Angular Badge control.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Badge components, Angular Badge controls
_language: kr
---

##Badge
<p class="highlight">The Ignite UI for Angular Badge is an absolutely positioned element that is used to decorate avatars, navigation menus, or other components in the application when visual notification is needed. Badges usually are designed as icons with a predefined style to communicate information, success, warnings, or errors.</p>
<div class="divider"></div>

### Badge Demo
<div class="sample-container loading" style="height:280px">
    <iframe id="badge-sample-iframe" src='{environment:demosBaseUrl}/data-display/badge-sample-3' width="100%" height="100%" seamless="" frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="badge-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz 에서보기</button>
</div>
<div class="divider--half"></div>

> [!NOTE]
> To start using Ignite UI for Angular components in your own projects, make sure you have configured all necessary dependencies and have performed the proper setup of your project. You can learn how to do this in the [**installation**](https://www.infragistics.com/products/ignite-ui-angular/getting-started#installation) topic.

###Usage
To get started with the Ignite UI for Angular Badge, let's first import the `IgxBadgeModule` in the **app.module.ts** file:

```typescript
// app.module.ts

...
import { IgxBadgeModule } from 'igniteui-angular';

@NgModule({
    ...
    imports: [..., IgxBadgeModule],
    ...
})
export class AppModule {}
```

Let's create a simple list with contacts similar to those in chat clients. In addition to the contact name, we want to display an avatar and the current state of the contact (online, offline or away). To achieve this, we use the [`igx-badge`]({environment:angularApiUrl}/classes/igxbadgecomponent.html) and [`igx-avatar`]({environment:angularApiUrl}/classes/igxavatarcomponent.html) components. For a container, [`igx-list`]({environment:angularApiUrl}/classes/igxlistcomponent.html) is used.

To continue, include all needed modules and import them in the **app.module.ts** file.

```typescript
// app.module.ts

...
import {
    IgxListModule,
    IgxAvatarModule,
    IgxBadgeModule
} from 'igniteui-angular';

@NgModule({
    ...
    imports: [..., IgxListModule, IgxAvatarModule, IgxBadgeModule],
})
export class AppModule {}
```

Having all set up, let's show all the contacts in the [`IgxListComponent`]({environment:angularApiUrl}/classes/igxlistcomponent.html) component. The list contains the member name and its availability.

```html
<!-- contacts.component.html -->

<igx-list>
  <igx-list-item isHeader="true">
    Team Members (4)
  </igx-list-item>
  <igx-list-item *ngFor="let member of members">
    <div>
      <div>
        <span class="contact-name">{{ member.name }}</span>
        <span>({{ member.status }})</span>
      </div>
    </div>
  </igx-list-item>
</igx-list>
```

```typescript
// contacts.component.ts

...
 public members: Member[] = [
    new Member("Terrance Orta", "online"),
    new Member("Donna Price", "online"),
    new Member("Lisa Landers", "away"),
    new Member("Dorothy H. Spencer", "offline"),
  ];

```

```typescript

...
class Member {
    public name: string;
    public status: string;
    public type: string;
    public icon: string;

    constructor(name: string, status: string) {
        this.name = name;
        this.status = status;
        switch (status) {
            case "online":
                this.type = "success";
                this.icon = "check";
                break;
            case "away":
                this.type = "warning";
                this.icon = "schedule";
                break;
            case "offline":
                this.type = "error";
                this.icon = "remove";
                break;
        }
    }
}
```
If the sample is configured properly, a list with members' name and status should be displayed.

<div class="sample-container loading" style="height: 280px">
    <iframe id="badge-sample-1-iframe" data-src='{environment:demosBaseUrl}/data-display/badge-sample-1' width="100%" height="100%" seamless="" frameBorder="0" class="lazyload"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="badge-sample-1-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz 에서보기
    </button>
</div>

<div class="divider--half"></div>

Let's add an avatar in front of every chat member. To do this, put another div element in the [`igx-list-item`]({environment:angularApiUrl}/classes/igxlistitemcomponent.html) containing the [`IgxAvatarComponent`]({environment:angularApiUrl}/classes/igxavatarcomponent.html). Modify the list item content as shown below.

```html
<!-- contacts.component.html -->

<igx-list>
  <igx-list-item isHeader="true">
    Team Members (4)
  </igx-list-item>
  <igx-list-item *ngFor="let member of members">
    <div class="wrapper">
      <div>
        <igx-avatar icon="person" roundShape="true" size="small"></igx-avatar>
      </div>
      <div style="margin-left: 20px; align-content: center;">
        <span class="contact-name">{{ member.name }}</span>
        <span>({{ member.status }})</span>
      </div>
    </div>
  </igx-list-item>
</igx-list>
```

<div class="sample-container loading" style="height: 280px">
<iframe id="badge-sample-2-iframe" data-src='{environment:demosBaseUrl}/data-display/badge-sample-2' width="100%" height="100%" seamless="" frameBorder="0" class="lazyload"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="badge-sample-2-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz 에서보기
    </button>
</div>

<div class="divider--half"></div>

Having just a list with names doesn't provide much useful visual information. The last step is to add [`igx-badge`]({environment:angularApiUrl}/classes/igxbadgecomponent.html) to show the contact state notification. Modify the list items content as shown below adding a badge component inside the avatar component.

Notice that the [`igx-badge`]({environment:angularApiUrl}/classes/igxbadgecomponent.html) has [`icon`]({environment:angularApiUrl}/classes/igxbadgecomponent.html#icon) and [`type`]({environment:angularApiUrl}/classes/igxbadgecomponent.html#type) inputs to configure the badge look. You can set the icon by providing its name from the official [material icons set](https://material.io/icons/). The badge type can be set to either [`default`]({environment:angularApiUrl}/enums/type.html#default), [`info`]({environment:angularApiUrl}/enums/type.html#info), [`success`]({environment:angularApiUrl}/enums/type.html#success), [`warning`]({environment:angularApiUrl}/enums/type.html#warning), or [`error`]({environment:angularApiUrl}/enums/type.html#error). Depending on the type, a specific background color is applied.

In our sample, [`icon`]({environment:angularApiUrl}/classes/igxbadgecomponent.html#icon) and [`type`]({environment:angularApiUrl}/classes/igxbadgecomponent.html#type) are bound to model properties named *icon* and *type*.

In order to position the badge in its parent container, create a custom css class *badge-style* and define the top and right positions.

```html
<!-- contacts.component.html -->

<igx-list>
  <igx-list-item isHeader="true">
    Team Members (4)
  </igx-list-item>
  <igx-list-item *ngFor="let member of members">
    <div class="wrapper">
      <div>
        <igx-avatar icon="person" roundShape="true" size="small"></igx-avatar>
        <igx-badge [icon]="member.icon" [type]="member.type" class="badge-style"></igx-badge>
      </div>
      <div style="margin-left: 20px; align-content: center;">
        <span class="contact-name">{{ member.name }}</span>
      </div>
    </div>
  </igx-list-item>
</igx-list>
```

```css
<!-- contacts.component.css -->

.badge-style
{
  position: absolute;
  bottom: -6px;
  right: -50px;
}
```

If the sample is configured properly, a list of members should be displayed and every member has an avatar and a badge showing its current state.

<div class="sample-container loading" style="height: 280px">
    <iframe id="badge-sample-3-iframe" data-src='{environment:demosBaseUrl}/data-display/badge-sample-3' width="100%" height="100%" seamless="" frameBorder="0" class="lazyload"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="badge-sample-3-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz 에서보기
    </button>
</div>

### API References
<div class="divider--half"></div>

* [IgxAvatarComponent]({environment:angularApiUrl}/classes/igxavatarcomponent.html)
* [IgxBadgeComponent]({environment:angularApiUrl}/classes/igxbadgecomponent.html)
* [IgxBadgeComponent Styles]({environment:sassApiUrl}/index.html#function-igx-badge-theme)
* [IgxListComponent]({environment:angularApiUrl}/classes/igxlistcomponent.html)
* [IgxListItemComponent]({environment:angularApiUrl}/classes/igxlistitemcomponent.html)
* [Type]({environment:angularApiUrl}/enums/type.html)

### Additional Resources
<div class="divider--half"></div>

Our community is active and always welcoming to new ideas.
* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)



