---
title: Badge Component
_description: Display an active count or icon in a predefined style to decorate other components anywhere in an application with Ignite UI for Angular Badge control.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Badge components, Angular Badge controls
---

##Badge
<p class="highlight">The Ignite UI for Angular Badge is an absolutely positioned element that is used to decorate avatars, navigation menus, or other components in the application when visual notification is needed. Badges usually are designed as icons with a predefined style to communicate information, success, warnings, or errors.</p>
<div class="divider"></div>

### Badge Demo
<div class="sample-container loading" style="height:280px">
    <iframe id="badge-sample-iframe" src='{environment:demosBaseUrl}/data-display/badge-sample-3' width="100%" height="100%" seamless="" frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="badge-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>

###Usage
To get started with the Badge, first you need to install Ignite UI for Angular by typing the following command:

```cmd
ng add igniteui-angular
```
For a complete introduction to the Ignite UI for Angular, read the [*getting started*](general/getting_started.md) topic.

The next step is to import the `IgxBadgeModule` in the **app.module.ts** file:

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
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="badge-sample-1-iframe" data-demos-base-url="{environment:demosBaseUrl}">                view on stackblitz
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
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="badge-sample-2-iframe" data-demos-base-url="{environment:demosBaseUrl}">                view on stackblitz
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
        <igx-avatar icon="person" roundShape="true" size="small">
          <igx-badge [icon]="member.icon" [type]="member.type" class="badge-style"></igx-badge>
        </igx-avatar>
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
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="badge-sample-3-iframe" data-demos-base-url="{environment:demosBaseUrl}">                view on stackblitz
    </button>
</div>

### Styling

To get started with styling the badges, we need to import the `index` file, where all the theme functions and component mixins live:

```scss
@import '~igniteui-angular/lib/core/styles/themes/index';
``` 

Following the simplest approach, we create a new theme that extends the [`igx-badge-theme`]({environment:sassApiUrl}/index.html#function-igx-badge-theme) and accepts the ` $icon-color`, `$text-color`, `$border-radius`, `$disable-border` and the `$shadow` parameters.

```scss
$color-1: #3d5770;
$color-2: rgb(119, 119, 119);
$color-3: rgb(16, 4, 51);

$elevations-color: igx-elevations($color-1, $color-2, $color-3);

$custom-theme: igx-badge-theme(
    $icon-color: white,
    $text-color: black,
    $border-radius: 20px,
    $disable-border: true,
    $shadow: igx-elevation($elevations-color, 5)
);
```

> [!NOTE]
> As we see the `$shadow` parameter accepts `igx-elevation`, which is of type box-shadow. In order to learn more about various options for IgniteUI Shadows, you can take a look at this [link](shadows.md).

The last step is to **include** the component mixins: 

```scss
@include igx-badge($custom-theme);
```

>[!NOTE]
 >If the component is using an [`Emulated`](./themes/component-themes.md#view-encapsulation) ViewEncapsulation, it is necessary to `penetrate` this encapsulation using `::ng-deep`:

 ```scss
:host {
  ::ng-deep {
    @include igx-badge($custom-theme);
  }
}
```

#### Defining a color palette

Instead of hardcoding the color values like we just did, we can achieve greater flexibility in terms of colors by using the [`igx-palette`]({environment:sassApiUrl}/index.html#function-igx-palette) and [`igx-color`]({environment:sassApiUrl}/index.html#function-igx-color) functions.

`igx-palette` generates a color palette based on the primary and secondary colors that are passed:

```scss
$white-color: white;
$black-color: black;

$custom-palette: igx-palette(
    $primary: $white-color,
    $secondary: $black-color
);
```

And then with [`igx-color`]({environment:sassApiUrl}/index.html#function-igx-color) we can easily retrieve color from the palette.

```scss
$custom-theme: igx-badge-theme(
    $icon-color: igx-color($custom-palette, "primary", 500),
    $text-color: igx-color($custom-palette, "secondary", 500),
    $border-radius: 20px,
    $disable-border: true,
    $shadow: igx-elevation($elevations-color, 5)
);
```

>[!NOTE]
>The `igx-color` and `igx-palette` are powerful functions for generating and retrieving colors. Please refer to [`Palettes`](./themes/palette.md) topic for detailed guidance on how to use them.

#### Using Schemas

Going further with the theming engine, you can build a robust and flexible structure that benefits from [**schemas**](./themes/schemas.md). A **schema** is a recipe of a theme.

Extend one of the two predefined schemas, that are provided for every component, in this case - [`_light-badge`]({environment:sassApiUrl}/index.html#variable-_light-badge):  

```scss
// Extending the light badge schema
$custom-badge-schema: extend($_light-badge,
    (   
        icon-color: (igx-color:('primary', 500)),
        text-color: (igx-color:('secondary', 500)),
        border-radius: 20px,
        elevation: 5
    )
);
```

In order to apply our custom schema we have to **extend** one of the globals ([`light`]({environment:sassApiUrl}/index.html#variable-light-schema) or [`dark`]({environment:sassApiUrl}/index.html#variable-dark-schema)), which is basically pointing out the components with a custom schema, and after that add it to the respective component themes:

```scss
// Extending the global light-schema
$my-custom-schema: extend($light-schema, 
    (
        igx-badge: $custom-badge-schema
    )
);

// Defining our custom theme with the custom schema
$custom-theme: igx-badge-theme(
  $palette: $custom-palette,
  $schema: $my-custom-schema,
  $elevations: $elevations-color
);
```
>[!NOTE]
> When `elevation` is set to a value different than 0 there are two possible scenarios for applying the shadow: <br>1) `$elevations` property of the theme is set => custom shadow is applied with `elevation` equal to the one set in the schema.<br>2) `$elevations` property of the theme is not set => the default shadow is applied with `elevation` equal to the one set in the schema.

Don't forget to include the themes in the same way as it was demonstrated above.

#### Demo

<div class="sample-container loading" style="height:340px">
    <iframe id="badge-styling-sample-iframe" src='{environment:demosBaseUrl}/data-display/badge-styling-sample' width="100%" height="100%" 
        seamless frameBorder="0" class="lazyload no-theming"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="badge-styling-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
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



