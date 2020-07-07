---
title: Toast Component
_description: With Ignite UI for Angular Toast component, users can provide quick, non-interactive messages to end users within their application.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Toast component, Angular Toast control
---

## Toast
<p class="highlight">The Ignite UI for Angular Toast component provides information and warning messages that are non-interactive and cannot be dismissed by the user. Notifications can be displayed at the bottom, the middle, or the top of the page.</p>
<div class="divider"></div>

### Demo

<div class="sample-container loading" style="height: 300px">
    <iframe id="toast-sample-2-iframe" frameborder="0" seamless="" width="100%" height="100%" data-src="{environment:demosBaseUrl}/notifications/toast-sample-2" class="lazyload"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="toast-sample-2-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>


### Usage

#### First Steps

To get started with the Toast component, first you need to import the `IgxToastModule` in our **app.module.ts** file:

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
In order to display the toast component, use its [`show()`]({environment:angularApiUrl}/classes/igxtoastcomponent.html#show) method and call it on a button click. You can pass the toast content inside the element.

```html
<!--sample.component.html-->

<button igxButton="raised" (click)="toast.show()">Show notification</button>
<igx-toast #toast >Notification displayed</igx-toast>
```

If the sample is configured properly, a toast appears displaying a notification when the button is clicked.

Another way to set the toast content is to directly pass the message as a parameter to the [`show()`]({environment:angularApiUrl}/classes/igxtoastcomponent.html#show) method.

```html
<!--sample.component.html-->

<button igxButton="raised" (click)="toast.show('Notification displayed')">Show notification</button>
<igx-toast #toast ></igx-toast>
```

### Examples

#### Hide/Auto Hide
Once opened, the toast disappears after a period specified by the [`displayTime`]({environment:angularApiUrl}/classes/igxtoastcomponent.html#displaytime) input which is set initially to 4000 milliseconds. This behavior is enabled by default but you can change this by setting [`autoHide`]({environment:angularApiUrl}/classes/igxtoastcomponent.html#autohide) to **false**. This way, the toast remains visible. Using the toast [`hide()`]({environment:angularApiUrl}/classes/igxtoastcomponent.html#hide) method, you can close the component.

```html
<!--sample.component.html-->

<button igxButton="raised" (click)="toast.show()">Show Toast</button>
<button igxButton="raised" (click)="toast.hide()">Hide Toast</button>
<igx-toast #toast message="Notification displayed" [autoHide]="false"></igx-toast>
```

If the sample is configured properly, the toast will appear when the *Show button* is clicked. For the first component auto-hide feature is disabled and the toast will disappear on 'Hide' button click.
In the other two components you can see in action how to pass different messages through the [`show()`]({environment:angularApiUrl}/classes/igxtoastcomponent.html#show) method and use content projection.

<div class="sample-container loading" style="height: 300px">
    <iframe id="toast-sample-3-iframe" frameborder="0" seamless width="100%" height="100%" data-src="{environment:demosBaseUrl}/notifications/toast-sample-3" class="lazyload"></iframe>
</div>

<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="toast-sample-3-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="toast-sample-3-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on codesandbox</button>
</div>

#### Display Time
Use [`displayTime`]({environment:angularApiUrl}/classes/igxtoastcomponent.html#displaytime) and set it to an interval in milliseconds to configure how long the toast component is visible.

```html
<!--sample.component.html-->

<button igxButton="raised" (click)="toast.show()">Show notification</button>
<igx-toast #toast message="Notification displayed" displayTime="1000"></igx-toast>
```

If the sample is configured properly, the toast auto hides faster.

<div class="sample-container loading">
    <iframe id="toast-sample-4-iframe" frameborder="0" seamless="" width="100%" height="100%" data-src="{environment:demosBaseUrl}/notifications/toast-sample-4" class="lazyload"></iframe>
</div>

#### Positioning
Use [`position`]({environment:angularApiUrl}/classes/igxtoastcomponent.html#position) to configure where the toast appears. By default, it is displayed at the bottom of the page. In the sample below, we set notification to appear at the top position.

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

<div class="sample-container loading" style="height: 200px">
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

Following the simplest approach, we create a new theme that extends the [`igx-toast-theme`]({environment:sassApiUrl}/index.html#function-igx-toast-theme) and accepts the `$shadow`, `$background`, `$text-color` and the `$border-radius` parameters.

```scss
$custom-toast-theme: igx-toast-theme(
    $background: #dedede,
    $text-color: #151515,
    $border-radius: 12px
);
```

#### Using CSS variables

The last step is to pass the custom toast theme:

```scss
@include igx-css-vars($custom-toast-theme);
```

#### Using mixins

In order to style components for older browsers, like Internet Explorer 11, we have to use a different approach, since it doesn't support CSS variables.

If the component is using the [`Emulated`](themes/component-themes.md#view-encapsulation) ViewEncapsulation, it is necessary to `penetrate` this encapsulation using `::ng-deep`. To prevent the custom theme to leak into other components, be sure to include the `:host` selector before `::ng-deep`:

```scss
:host {
    ::ng-deep {
        // Pass the custom toast theme to the `igx-toast` mixin
        @include igx-toast($custom-toast-theme);
    }
}
```

#### Using color palettes

Instead of hardcoding the color values, like we just did, we can achieve greater flexibility in terms of colors by using the [`igx-palette`]({environment:sassApiUrl}/index.html#function-igx-palette) and [`igx-color`]({environment:sassApiUrl}/index.html#function-igx-color) functions.

`igx-palette` generates a color palette based on the primary and secondary colors that are passed:

```scss
$white-color: #dedede;
$black-color: #151515;

$light-toast-palette: igx-palette($primary: $white-color, $secondary: $black-color);
```

And then with [`igx-color`]({environment:sassApiUrl}/index.html#function-igx-color) we can easily retrieve color from the palette.

```scss
$custom-toast-theme: igx-toast-theme(
    $background: igx-color($light-toast-palette, "primary", 400),
    $text-color: igx-color($light-toast-palette, "secondary", 400),
    $border-radius: 12px
);
```

>[!NOTE]
>The `igx-color` and `igx-palette` are powerful functions for generating and retrieving colors. Please refer to the [`Palettes`](themes/palette.md) topic for detailed guidance on how to use them.

#### Using schemas

You can build a robust and flexible structure that benefits from [**schemas**](themes/schemas.md). A **schema** is a recipe of a theme.

Extend one of the two predefined schemas, that are provided for every component, in this case - [`light-toast`]({environment:sassApiUrl}/index.html#variable-_light-toast) schema:

```scss
//  Extending the toast schema
$light-toast-schema: extend($_light-toast,
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
// Extending the global light-schema
$custom-light-schema: extend($light-schema,(
    igx-toast: $light-toast-schema
));

// Defining toast with the global light schema
$custom-toast-theme: igx-toast-theme(
  $palette: $light-toast-palette,
  $schema: $custom-light-schema
);
```

Don't forget to include the themes in the same way as it was demonstrated above.

<div class="sample-container loading" style="height: 500px">
    <iframe id="toast-style-iframe" frameborder="0" seamless="" width="100%" height="100%" data-src="{environment:demosBaseUrl}/notifications/toast-style" class="lazyload"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="toast-style-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>

### API References
<div class="divider--half"></div>

* [IgxToastComponent]({environment:angularApiUrl}/classes/igxtoastcomponent.html)
* [IgxToastComponent Styles]({environment:sassApiUrl}/index.html#function-igx-toast-theme)

### Additional Resources
<div class="divider--half"></div>

Our community is active and always welcoming to new ideas.
* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
