---
title: Toast Component
_description: With Ignite UI for Angular Toast component, users can provide quick, non-interactive messages to end users within their application.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Toast component, Angular Toast control
---

##Toast
<p class="highlight">The Ignite UI for Angular Toast component provides information and warning messages that are non-interactive and cannot be dismissed by the user. Notifications can be displayed at the bottom, the middle, or the top of the page.</p>
<div class="divider"></div>

### Toast Demo
<div class="sample-container loading" style="height: 500px">
    <iframe id="toast-sample-iframe" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/notifications/toast-sample-1" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="toast-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>

###Usage

To get started with the Toast component, first you need to install Ignite UI for Angular by typing the following command:

```cmd
ng add igniteui-angular
```
For a complete introduction to the Ignite UI for Angular, read the [*getting started*](general/getting_started.md) topic.

The next step is to import the `IgxToastModule` in our **app.module.ts** file:

```typescript
// app.module.ts

...
import { IgxToastModule } from 'igniteui-angular';

@NgModule({
    ...
    imports: [..., IgxToastModule],
    ...
})
export class AppModule {}
```
#### Show Toast
In order to display the toast component, use its [`show()`]({environment:angularApiUrl}/classes/igxtoastcomponent.html#show) method and call it on a button click. Use the [`message`]({environment:angularApiUrl}/classes/igxtoastcomponent.html#message) input to set a notification.

```html
<!--sample.component.html-->

<button igxButton="raised" (click)="toast.show()">Show notification</button>
<igx-toast #toast message="Notification displayed"></igx-toast>
```

If the sample is configured properly, a toast appears displaying a notification when the button is clicked.

<div class="sample-container loading" style="height: 300px">
    <iframe id="toast-sample-iframe" frameborder="0" seamless="" width="100%" height="100%" data-src="{environment:demosBaseUrl}/notifications/toast-sample-2" class="lazyload"></iframe>
</div>

#### Hide/Auto Hide
Once opened, the toast disappears after a period specified by the [`displayTime`]({environment:angularApiUrl}/classes/igxtoastcomponent.html#displaytime) input which is set initially to 4000 milliseconds. This behavior is enabled by default but you can change this by setting [`autoHide`]({environment:angularApiUrl}/classes/igxtoastcomponent.html#autohide) to **false**. In this way, the toast remains visible. Using the toast [`hide()`]({environment:angularApiUrl}/classes/igxtoastcomponent.html#hide) method, you can close the component.

```html
<!--sample.component.html-->

<button igxButton="raised" (click)="toast.show()">SHOW TOAST</button>
<button igxButton="raised" (click)="toast.hide()">HIDE TOAST</button>
<igx-toast #toast message="Notification displayed" [autoHide]="false"></igx-toast>
```

If the sample is configured properly, the toast appears when the 'SHOW' button is clicked. The auto hide feature is disabled and the toast disappears on 'HIDE' button click.

<div class="sample-container loading" style="height: 300px">
    <iframe id="toast-sample-iframe" frameborder="0" seamless="" width="100%" height="100%" data-src="{environment:demosBaseUrl}/notifications/toast-sample-3" class="lazyload"></iframe>
</div>

#### Display Time
Use [`displayTime`]({environment:angularApiUrl}/classes/igxtoastcomponent.html#displaytime) and set it to an interval in milliseconds to configure how long the toast component is visible. 

```html
<!--sample.component.html-->

<button igxButton="raised" (click)="toast.show()">Show notification</button>
<igx-toast #toast message="Notification displayed" displayTime="1000"></igx-toast>
```

If the sample is configured properly, the toast auto hides faster.

<div class="sample-container loading" style="height: 300px">
    <iframe id="toast-sample-iframe" frameborder="0" seamless="" width="100%" height="100%" data-src="{environment:demosBaseUrl}/notifications/toast-sample-4" class="lazyload"></iframe>
</div>

#### Positioning
Use [`position`]({environment:angularApiUrl}/classes/igxtoastcomponent.html#position) to configure where the toast appears. By default, the toast is displayed at the bottom of the page. In the sample below, we set notification to appear at the top position.

```html
<!--sample.component.html-->

<div>
    <button igxButton="raised" (click)="show(toast)">Show notification on top</button>
    <igx-toast #toast message="Notification displayed" [position]="toastPosition"></igx-toast>
</div>

```

```typescript
// sample.component.ts

import { IgxToastPosition } from 'igniteui-angular';

...
public toastPosition: IgxToastPosition;
public show(toast) {
    this.toastPosition = IgxToastPosition.Top;
    toast.show();
}
...

```

<div class="sample-container loading" style="height: 300px">
    <iframe id="toast-sample-5-iframe" frameborder="0" seamless="" width="100%" height="100%" data-src="{environment:demosBaseUrl}/notifications/toast-sample-5" class="lazyload"></iframe>
</div>

<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="toast-sample-5-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>

<div class="divider--half"></div>

### Styling

To get started with styling the toast, we need to import the index file, where all the theme functions and component mixins live:

```scss
@import '~igniteui-angular/lib/core/styles/themes/index';
```

Following the simplest approach, we create a new theme that extends the [`igx-toast-theme`]({environment:sassApiUrl}/index.html#function-igx-toast-theme) and accepts the `$background`, `$text-color` and the `$border-radius` parameters.

```scss
$dark-toast: igx-toast-theme(
    $background: #292826,
    $text-color: #FFCD0F,
    $border-radius: 12px
);
```

The last step is to **include** the newly created theme.

```scss
@include igx-toast($dark-toast);
```

>[!NOTE]
>If the component is using an [`Emulated`](themes/component-themes.md#view-encapsulation) ViewEncapsulation, it is necessary to `penetrate` this encapsulation using `::ng-deep`:

```scss
:host {
    ::ng-deep {
        @include igx-toast($dark-toast);
    }
}
```

#### Defining a color palette

Instead of hardcoding the color values like we just did, we can achieve greater flexibility in terms of colors by using the [`igx-palette`]({environment:sassApiUrl}/index.html#function-igx-palette) and [`igx-color`]({environment:sassApiUrl}/index.html#function-igx-color) functions.

`igx-palette` generates a color palette based on the primary and secondary colors that are passed:

```scss
$yellow-color: #FFCD0F;
$black-color: #292826;

$dark-palette: igx-palette($primary: $black-color, $secondary: $yellow-color);
```

And then with [`igx-color`]({environment:sassApiUrl}/index.html#function-igx-color) we can easily retrieve color from the palette. 

```scss
$dark-toast: igx-toast-theme(
    $background: igx-color($dark-palette, "primary", 400),
    $text-color: igx-color($dark-palette, "secondary", 400),
    $border-radius: 12px
);
```

>[!NOTE]
>The `igx-color` and `igx-palette` are powerful functions for generating and retrieving colors. Please refer to [`Palettes`](themes/palette.md) topic for detailed guidance on how to use them.

#### Using Schemas

Going further with the theming engine, you can build a robust and flexible structure that benefits from [**schemas**](themes/schemas.md). A **schema** is a recipe of a theme.

Extend one of the two predefined schemas, that are provided for every component, in this case - [`dark-toast`]({environment:sassApiUrl}/index.html#variable-_dark-toast) schema: 

```scss
//  Extending the toast schema
$dark-toast-schema: extend($_dark-toast,
    (
        background: (
            igx-color: ("primary", 400)
        ),
        text-color: (
            igx-color: ("secondary", 400)
        ),
        border-radius: 12px
    )
);
```

In order to apply our custom schemas we have to **extend** one of the globals ([`light`]({environment:sassApiUrl}/index.html#variable-light-schema) or [`dark`]({environment:sassApiUrl}/index.html#variable-dark-schema)), which is basically pointing out the components with a custom schema, and after that add it to the respective component themes:

```scss
// Extending the global dark-schema
$custom-dark-schema: extend($dark-schema,(
    igx-toast: $dark-toast-schema
));

// Defining toast with the global dark schema
$dark-toast: igx-toast-theme(
  $palette: $dark-palette,
  $schema: $custom-dark-schema
);
```

Don't forget to include the themes in the same way as it was demonstrated above.

<div class="sample-container loading" style="height: 200px">
    <iframe id="toast-style-iframe" frameborder="0" seamless="" width="100%" height="100%" data-src="{environment:demosBaseUrl}/notifications/toast-style" class="lazyload no-theming"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="toast-style-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>

### API References
In this article we learned how to use and configure the [`IgxToastComponent`]({environment:angularApiUrl}/classes/igxtoastcomponent.html). For more details in regards its API, take a look at the links below:

* [`IgxToastComponent`]({environment:angularApiUrl}/classes/igxtoastcomponent.html)

Styles:

* [`IgxToastComponent Styles`]({environment:sassApiUrl}/index.html#function-igx-toast-theme)

###Additional Resources

<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.
* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
