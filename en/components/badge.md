---
title: Angular Badge Component – Ignite UI for Angular | Infragistics
_description: Display an active count or icon in a predefined style to decorate other components anywhere in an application with Ignite UI for Angular Badge control.
_keywords: Angular Badge component, Angular Badge control, Ignite UI for Angular, Angular UI Components 
---

# Angular Badge Component Overview
<p class="highlight">The Ignite UI for Angular Badge is a component used in conjunction with avatars, navigation menus, or other components in an application when a visual notification is needed. Badges are usually  designed as icons with a predefined style to communicate information, success, warnings, or errors.</p>
<div class="divider"></div>

## Angular Badge Example

<code-view style="height:100px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/data-display/badge-sample-2" alt="Angular Badge Example">
</code-view>

<div class="divider--half"></div>

## Getting Started with Ignite UI for Angular Badge

To get started with the Ignite UI for Angular Badge component, first you need to install Ignite UI for Angular. In an existing Angular application, type the following command:

```cmd
ng add igniteui-angular
```
For a complete introduction to the Ignite UI for Angular, read the [*getting started*](general/getting-started.md) topic.

The next step is to import the `IgxBadgeModule` in your **app.module.ts** file. 

```typescript
// app.module.ts

...
import { IgxBadgeModule } from 'igniteui-angular';
// import { IgxBadgeModule } from '@infragistics/igniteui-angular'; for licensed package

@NgModule({
    ...
    imports: [..., IgxBadgeModule],
    ...
})
export class AppModule {}
```
Now that you have the Ignite UI for Angular Badge module imported, you can start with a basic configuration of the `igx-badge` and its panels.

Alternatively, as of `16.0.0` you can import the `IgxBadgeComponent` as a standalone dependency.

```typescript
// home.component.ts

...
import { IgxBadgeComponent } from 'igniteui-angular';
// import { IgxBadgeComponent } from '@infragistics/igniteui-angular'; for licensed package

@Component({
    selector: 'app-home',
    template: '<igx-badge icon="check" type="success" shape="square"></igx-badge>',
    styleUrls: ['home.component.scss'],
    standalone: true,
    imports: [IgxBadgeComponent]
})
export class HomeComponent {}
```

## Usage
Let's see how the demo sample is done. It's a simple success badge on an avatar. To build that, we need to import the `IgxAvatarModule`, along with the `IgxBadgeModule`:

```typescript
// app.module.ts
...
import { IgxBadgeModule, IgxAvatarModule } from 'igniteui-angular';
// import {  IgxBadgeModule, IgxAvatarModule } from '@infragistics/igniteui-angular'; for licensed package

@NgModule({
  ...
  imports: [..., IgxBadgeModule, IgxAvatarModule],
  ...
})

export class AppModule {}
```

*Alternatively, as of `16.0.0` you can import the `IgxBadgeComponent` and `IgxAvatarComponent` as standalone dependencies.*

Next, we will add those components to our template:

```html
<div class="wrapper">
    <igx-avatar icon="person" shape="circle" size="small"></igx-avatar>
    <igx-badge icon="check" type="success"></igx-badge>
</div>
```

Using the wrapper, we will position the badge absolutely, covering a little bit of the avatar:

```scss
.wrapper {
  position: relative;
  margin-top: 15px;
}

igx-badge {
  position: absolute;
  bottom: 0;
  left: 28px;
}
```

### Badge Shape

We can change the badge shape through the `shape` attribute setting its value to `square`. By default, the shape of the badge is `rounded`.

```html
<igx-badge icon="check" type="success" shape="square"></igx-badge>
```

If everything's done right, you should see the demo sample shown above in your browser.

### Badge in List

Let's extend the previous sample and create a list with contacts, similar to those in chat clients. In addition to the contact name, we want to display an avatar and the current state of the contact (online, offline or away). To achieve this, we're using the [`igx-badge`]({environment:angularApiUrl}/classes/igxbadgecomponent.html) and [`igx-avatar`]({environment:angularApiUrl}/classes/igxavatarcomponent.html) components. For a container, [`igx-list`]({environment:angularApiUrl}/classes/igxlistcomponent.html) is used.

To continue, include all needed modules and import them in the **app.module.ts** file.

```typescript
// app.module.ts

...
import {
    IgxListModule,
    IgxAvatarModule,
    IgxBadgeModule
} from 'igniteui-angular';
// import { IgxListModule, IgxAvatarModule, IgxBadgeModule } from '@infragistics/igniteui-angular'; for licensed package

@NgModule({
    ...
    imports: [..., IgxListModule, IgxAvatarModule, IgxBadgeModule],
})
export class AppModule {}
```

>[!NOTE]
>The [`igx-badge`]({environment:angularApiUrl}/classes/igxbadgecomponent.html) has [`icon`]({environment:angularApiUrl}/classes/igxbadgecomponent.html#icon) and [`type`]({environment:angularApiUrl}/classes/igxbadgecomponent.html#type) inputs to configure the badge look. You can set the icon by providing its name from the official [material icons set](https://material.io/icons/). The badge type can be set to either [`default`]({environment:angularApiUrl}/enums/type.html#default), [`info`]({environment:angularApiUrl}/enums/type.html#info), [`success`]({environment:angularApiUrl}/enums/type.html#success), [`warning`]({environment:angularApiUrl}/enums/type.html#warning), or [`error`]({environment:angularApiUrl}/enums/type.html#error). Depending on the type, a specific background color is applied.

In our sample, [`icon`]({environment:angularApiUrl}/classes/igxbadgecomponent.html#icon) and [`type`]({environment:angularApiUrl}/classes/igxbadgecomponent.html#type) are bound to model properties named *icon* and *type*.

Next, we're adding the contacts in our template:

```html
<!-- contacts.component.html -->

<igx-list>
  <igx-list-item isHeader="true">
    Team Members (4)
  </igx-list-item>
  <igx-list-item *ngFor="let member of members">
    <div class="wrapper">
      <div>
        <igx-avatar icon="person" shape="circle" size="small"></igx-avatar>
        <igx-badge [icon]="member.icon" [type]="member.type" class="badge-style"></igx-badge>
      </div>
      <div class="contact-container">
        <span class="contact-name">{{ member.name }}</span>
      </div>
    </div>
  </igx-list-item>
</igx-list>
```

We're going to create our members in the typescript file like this:

```typescript
// contacts.component.ts

...
 public members: Member[] = [
    new Member('Terrance Orta', 'online'),
    new Member('Donna Price', 'online'),
    new Member('Lisa Landers', 'away'),
    new Member('Dorothy H. Spencer', 'offline'),
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
            case 'online':
                this.type = 'success';
                this.icon = 'check';
                break;
            case 'away':
                this.type = 'warning';
                this.icon = 'schedule';
                break;
            case 'offline':
                this.type = 'error';
                this.icon = 'remove';
                break;
        }
    }
}
```

Position the badge in its parent container:

```css
/* contacts.component.css */

.wrapper {
    display: flex;
    flex-direction: row;
}

.contact-name {
    font-weight: 600;
}

.contact-container {
    margin-left: 20px;
}

.badge-style {
  position: absolute;
  bottom: 2.5px;
  left: 40px;
}

```

If the sample is configured properly, a list of members should be displayed and every member has an avatar and a badge, showing its current state.

<code-view style="height: 280px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/data-display/badge-sample-3" >
</code-view>

## Styling

To get started with styling the badges, we need to import the `index` file, where all the theme functions and component mixins live:

```scss
@use "igniteui-angular/theming" as *;

// IMPORTANT: Prior to Ignite UI for Angular version 13 use:
// @import '~igniteui-angular/lib/core/styles/themes/index';
``` 

Following the simplest approach, we create a new theme that extends the [`badge-theme`]({environment:sassApiUrl}/index.html#function-badge-theme) and accepts some parameters that style the badge's items.

```scss
$custom-badge-theme: badge-theme(
    $border-color: white,
    $border-width: 1px,
    $icon-color: white,
    $text-color: black,
    $shadow: 3px 2px 5px 0px rgba(0,0,0,0.4)
);
```

### Including Themes

<div class="divider"></div>

The last step is to **include** the component theme in our application.

If `$legacy-support` is set to `true`, include the **component theme** like that:

```scss
 @include badge($custom-badge-theme);
```
>[!NOTE]
>If the component is using an [`Emulated`](themes/sass/component-themes.md#view-encapsulation) ViewEncapsulation, it is necessary to `penetrate` this encapsulation using `::ng-deep`

```scss
:host {
     ::ng-deep {
        @include badge($custom-badge-theme);
    }
}
```

<div class="divider"></div>

If `$legacy-support` is set to `false`(default), include the component **css variables** like that:

```scss
@include css-vars($custom-badge-theme);
```

>[!NOTE]
>If the component is using an [`Emulated`](themes/sass/component-themes.md#view-encapsulation) ViewEncapsulation, you still have to use `:host` because you need a global selector in order to override the variables.

```scss
:host {
    @include css-vars($custom-badge-theme);
}
```

Don't forget to include the themes in the same way as it was demonstrated above.

### Demo

<code-view style="height:340px" 
           no-theming
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/data-display/badge-styling-sample" >
</code-view>


## API References
<div class="divider--half"></div>

* [IgxAvatarComponent]({environment:angularApiUrl}/classes/igxavatarcomponent.html)
* [IgxBadgeComponent]({environment:angularApiUrl}/classes/igxbadgecomponent.html)
* [IgxBadgeComponent Styles]({environment:sassApiUrl}/index.html#function-badge-theme)
* [IgxListComponent]({environment:angularApiUrl}/classes/igxlistcomponent.html)
* [IgxListItemComponent]({environment:angularApiUrl}/classes/igxlistitemcomponent.html)
* [IgxBadgeType]({environment:angularApiUrl}/index.html#IgxBadgeType)

## Theming Dependencies
* [IgxIcon Theme]({environment:sassApiUrl}/index.html#function-icon-theme)

## Additional Resources
<div class="divider--half"></div>

Our community is active and always welcoming to new ideas.
* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
