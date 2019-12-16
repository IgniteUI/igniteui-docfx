---
title: Dialog Window Component
_description: Whether building informative dialogs or data manipulation windows, Ignite UI for Angular Dialog Window component can manage information shown in real-time for fast capability.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Dialog Window components, Angular Dialog Window controls
---

##Dialog Window
<p class="highlight">Use the Ignite UI for Angular Dialog Window component to display messages or present forms for users to fill out. The component opens a dialog window centered on top of app content. You can also provide a standard alert message that users can cancel.</p>
<div class="divider"></div>

### Dialog Demo
<div class="sample-container loading" style="height:300px">
    <iframe id="dialog-sample-iframe" src='{environment:demosBaseUrl}/interactions/dialog' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="dialog-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>

### Usage

To get started with the Dialog Window component, first you need to install Ignite UI for Angular by typing the following command:

```cmd
ng add igniteui-angular
```
For a complete introduction to the Ignite UI for Angular, read the [*getting started*](general/getting_started.md) topic.

The next step is to import the **IgxDialogModule** in our **app.module.ts** file:

```typescript
// app.module.ts

...
import { IgxDialogModule } from 'igniteui-angular';

@NgModule({
    ...
    imports: [..., IgxDialogModule],
    ...
})
export class AppModule {}
```
<div class="divider--half"></div>

#### Alert

To add alert, in the template of our email component we can add the following code to get the notification dialog. We have to set the [`title`]({environment:angularApiUrl}/classes/igxdialogcomponent.html#title), [`message`]({environment:angularApiUrl}/classes/igxdialogcomponent.html#message), 
[`leftButtonLabel`]({environment:angularApiUrl}/classes/igxdialogcomponent.html#leftbuttonlabel) and handle [`onLeftButtonSelect`]({environment:angularApiUrl}/classes/igxdialogcomponent.html#onleftbuttonselect) event:

```html
<!--email.component.html-->

<igx-dialog #alert
    title="Notification"
    message="Your email has been sent successfully!"
    leftButtonLabel="OK"
    (onLeftButtonSelect)="alert.close()">
</igx-dialog>
```

<div class="sample-container loading" style="height:250px">
    <iframe id="dialog-sample-1-iframe" data-src='{environment:demosBaseUrl}/interactions/dialog-sample-1' width="100%" height="100%" seamless="" frameBorder="0" class="lazyload"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="dialog-sample-1-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>

#### Standard Dialog

To add standard dialog, in the template of our file manager component we can add the following code to get the standard dialog. We have to set the [`title`]({environment:angularApiUrl}/classes/igxdialogcomponent.html#title), [`message`]({environment:angularApiUrl}/classes/igxdialogcomponent.html#message), 
[`leftButtonLabel`]({environment:angularApiUrl}/classes/igxdialogcomponent.html#leftbuttonlabel), [`rightButtonLabel`]({environment:angularApiUrl}/classes/igxdialogcomponent.html#rightbuttonlabel), and handle [`onLeftButtonSelect`]({environment:angularApiUrl}/classes/igxdialogcomponent.html#onleftbuttonselect) and [`onRightButtonSelect`]({environment:angularApiUrl}/classes/igxdialogcomponent.html#onrightbuttonselect) events:

```html
<!--file-manager.component.html-->

<igx-dialog #dialog title="Confirmation"
    leftButtonLabel="Cancel"
    (onLeftButtonSelect)="dialog.close()"
    rightButtonLabel="OK"
    (onRightButtonSelect)="onDialogOKSelected($event)"
    message="Are you sure you want to delete the Microsoft_Annual_Report_2015.pdf and Microsoft_Annual_Report_2015.pdf files?">
</igx-dialog>
```

<div class="sample-container loading" style="height:250px">
    <iframe id="dialog-sample-2-iframe" data-src='{environment:demosBaseUrl}/interactions/dialog-sample-2' width="100%" height="100%" seamless="" frameBorder="0" class="lazyload"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="dialog-sample-2-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>

#### Custom Dialog

To add custom dialog, in the template of our sign in component we can add the following code to get the custom dialog. We have to set the [`title`]({environment:angularApiUrl}/classes/igxdialogcomponent.html#title),[`leftButtonLabel`]({environment:angularApiUrl}/classes/igxdialogcomponent.html#leftbuttonlabel), [`rightButtonLabel`]({environment:angularApiUrl}/classes/igxdialogcomponent.html#rightbuttonlabel), [`closeOnOutsideSelect`]({environment:angularApiUrl}/classes/igxdialogcomponent.html#closeonoutsideselect) and handle [`onLeftButtonSelect`]({environment:angularApiUrl}/classes/igxdialogcomponent.html#onleftbuttonselect) and [`onRightButtonSelect`]({environment:angularApiUrl}/classes/igxdialogcomponent.html#onrightbuttonselect) event.
Also we can add two groups of label and input decorated with the [**igxLabel**](input_group.md) and [**igxInput**](input_group.md) directives.

```html
<!--sign-in.component.html-->

<igx-dialog #form title="Sign In"
    leftButtonLabel="Cancel"
    (onLeftButtonSelect)="form.close()"
    (onRightButtonSelect)="signIn($event)"
    rightButtonLabel="Sign In"
    [closeOnOutsideSelect]="true">
    <form class="signInForm">
        <igx-input-group>
            <igx-prefix>
                <igx-icon>person</igx-icon>
            </igx-prefix>
            <label igxLabel for="username">Username</label>
            <input igxInput id="username" type="text" />
        </igx-input-group>
        <igx-input-group>
            <igx-prefix>
                <igx-icon>lock</igx-icon>
            </igx-prefix>
            <label igxLabel>Password</label>
            <input igxInput id="password" type="password" />
        </igx-input-group>
    </form>
</igx-dialog>
```

<div class="sample-container loading" style="height:300px">
    <iframe id="dialog-sample-3-iframe" data-src='{environment:demosBaseUrl}/interactions/dialog-sample-3' width="100%" height="100%" seamless="" frameBorder="0" class="lazyload"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="dialog-sample-3-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>

#### Customized Title and Actions

Dialog title area can be customized using `igxDialogTitle` directive or `igx-dialog-title` selector. The actions area can be customized using `igxDialogActions` directive or `igx-dialog-actions` selector.

```html
<!-- dialog.component.html -->

<igx-dialog #dialog [closeOnOutsideSelect]="true" message="This will create a new social media account.">
    <igx-dialog-title>
        <div class="dialog-container">
            <igx-icon>account_box</igx-icon>
            <div class="dialog-title">Create a new account?</div>
        </div>
    </igx-dialog-title>
    <div igxDialogActions class="dialog-container dialog-actions">
        <button igxButton (click)="dialog.close()">CREATE</button>
        <button igxButton (click)="dialog.close()">CANCEL</button>
    </div>
</igx-dialog>
```

<div class="sample-container loading" style="height:300px">
    <iframe id="custom-dialog-sample-iframe" data-src='{environment:demosBaseUrl}/interactions/custom-dialog-sample' width="100%" height="100%" seamless="" frameBorder="0" class="lazyload"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="custom-dialog-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>

#### Configure different Position and Animation Settings

There are two ways to change the position at which the `igxDialog` will be shown:

- Use [`open`]({environment:angularApiUrl}/classes/igxdialogcomponent.html#open) method and pass a valid [`overlaySettings`]({environment:angularApiUrl}/interfaces/overlaysettings.html). Example:

```typescript
public positionSettingsOnOpen: PositionSettings = {
    horizontalDirection: HorizontalAlignment.Right,
    verticalDirection: VerticalAlignment.Middle,
    horizontalStartPoint: HorizontalAlignment.Right,
    verticalStartPoint: VerticalAlignment.Middle,
};

public overlaySettings: OverlaySettings = {
    positionStrategy: new GlobalPositionStrategy(this.positionSettingsOnOpen),
    scrollStrategy: new NoOpScrollStrategy(),
    modal: false,
    closeOnOutsideClick: true
};

....


public openDialog() {
    this.alert.open(this.overlaySettings);
}
....

this.dialog.open(overlaySettings)

```

- Use `positionSettings` @input. Example:

```html
<igx-dialog #alert title="Notification" [positionSettings]="positionSettings" >
</igx-dialog>
```

```typescript
public positionSettings: PositionSettings = {
    openAnimation: useAnimation(slideInTop, { params: { duration: '2000ms' } }),
    closeAnimation: useAnimation(slideOutBottom, { params: { duration: '2000ms'} }),
    horizontalDirection: HorizontalAlignment.Left,
    verticalDirection: VerticalAlignment.Middle,
    horizontalStartPoint: HorizontalAlignment.Left,
    verticalStartPoint: VerticalAlignment.Middle,
    minSize: { height: 100, width: 100 }
};
```

> [!Note] The same approach should be used for the animation settings, use `openAnimation` and `closeAnimation` to define animation params like duration etc. 

`params` object example:

```typescript
params: {
    delay: '0s',
    duration: '350ms',
    easing: EaseOut.quad,
    endOpacity: 1,
    fromPosition: 'translateX(-500px)',
    startOpacity: 0,
    toPosition: 'translateY(0)'
}
```

### Styling

To get started with styling the dialog window, we need to import the `index` file, where all the theme functions and component mixins live:

```scss
@import '~igniteui-angular/lib/core/styles/themes/index';
``` 

Following the simplest approach, we create a new theme that extends the [`igx-dialog-theme`]({environment:sassApiUrl}/index.html#function-igx-dialog-theme) and accepts the `$background`, `$title-color`, `$message-color`, `$border-radius` and `$shadow` parameters.

```scss
$color-1: rgb(119, 119, 119);
$color-2: #1c83e4;
$color-3: rgb(16, 4, 51);

$elevations-color: igx-elevations($color-1 , $color-2, $color-3);

$my-dialog-theme: igx-dialog-theme(
    $background: #000000,
    $title-color: #1c83e4,
    $message-color: #ffffff,
    $border-radius: .3,
    $shadow: igx-elevation($elevations-color, 14)
);
```

> [!NOTE]
> As we see the `$shadow` parameter accepts `igx-elevation`, which is of type box-shadow. In order to learn more about various options for IgniteUI Shadows, you can take a look at this [link](shadows.md).

> [!NOTE]
> In order to style any additional components that are used as part of the dialog window's content (such as [`IgxButton`](button.md)), an additional theme should be created that is specific to the respective component and placed under the dialog window's scope only (so it does not affect the rest of the application).

Since the dialog window uses the [`IgxOverlayService`](overlay_main.md), in order for our custom theme to reach down the dialog window that we want to style, we will provide a specific outlet where the dialog window will be placed in the DOM when it is visible.

```html
<div igxOverlayOutlet>
    <igx-dialog #dialog1>
        <!-- .... -->
    </igx-dialog>
</div>
```

> [!NOTE]
> In order to learn more about various options for providing themes to elements that are shown by using the [`IgxOverlayService`](overlay_main.md), you can take a look at this [link](overlay_main.md#styling).

The last step is to **include** the component mixins: 

```scss
@include igx-dialog($my-dialog-theme);
```

>[!NOTE]
 >If the component is using an [`Emulated`](../themes/component-themes.md#view-encapsulation) ViewEncapsulation, it is necessary to `penetrate` this encapsulation using `::ng-deep`:

 ```scss
:host {
  ::ng-deep {
    @include igx-dialog($my-dialog-theme);
  }
}
```

#### Defining a color palette

Instead of hardcoding the color values like we just did, we can achieve greater flexibility in terms of colors by using the [`igx-palette`]({environment:sassApiUrl}/index.html#function-igx-palette) and [`igx-color`]({environment:sassApiUrl}/index.html#function-igx-color) functions.

`igx-palette` generates a color palette based on the primary and secondary colors that are passed:

```scss
$black-color: #000000;
$light-blue-color: #1c83e4;
$white-color: #ffffff;

$custom-palette: igx-palette(
    $primary: $black-color,
    $secondary: $light-blue-color,
    $info: $white-color
);
```

And then with [`igx-color`]({environment:sassApiUrl}/index.html#function-igx-color) we can easily retrieve color from the palette.

```scss
$my-dialog-theme: igx-dialog-theme(
    $background: igx-color($custom-palette, "primary", 500),
    $title-color: igx-color($custom-palette, "secondary", 500),
    $message-color: igx-color($custom-palette, "info", 500),
    $border-radius: .3,
    $shadow: igx-elevation($elevations-color, 14)
);
```

>[!NOTE]
>The `igx-color` and `igx-palette` are powerful functions for generating and retrieving colors. Please refer to [`Palettes`](../themes/palette.md) topic for detailed guidance on how to use them.

#### Using Schemas

Going further with the theming engine, you can build a robust and flexible structure that benefits from [**schemas**](../themes/schemas.md). A **schema** is a recipe of a theme.

Extend one of the two predefined schemas, that are provided for every component, in this case - [`_light-dialog`]({environment:sassApiUrl}/index.html#variable-_light-dialog):  

```scss
// Extending the light dialog schema
$custom-dialog-schema: extend($_light-dialog,
    (
        background: igx-color($custom-palette, "primary", 500),
        title-color: igx-color($custom-palette, "secondary", 500),
        message-color: igx-color($custom-palette, "info", 500),
        border-radius: .3,
        shadow: igx-elevation($elevations-color, 14)
    )
);
```

In order to apply our custom schema we have to **extend** one of the globals ([`light`]({environment:sassApiUrl}/index.html#variable-light-schema) or [`dark`]({environment:sassApiUrl}/index.html#variable-dark-schema)), which is basically pointing out the components with a custom schema, and after that add it to the respective component themes:

```scss
// Extending the global light-schema
$my-custom-schema: extend($light-schema, 
    (
        igx-dialog: $custom-dialog-schema
    )
);

// Defining our custom theme with the custom schema
$my-dialog-theme: igx-dialog-theme(
  $palette: $custom-palette,
  $schema: $my-custom-schema
);
```

Don't forget to include the themes in the same way as it was demonstrated above.

#### Demo
<div class="sample-container loading" style="height:300px">
    <iframe id="dialog-styling-sample-iframe" src='{environment:demosBaseUrl}/interactions/dialog-styling-sample' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="dialog-styling-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>

### API Summary
<div class="divider--half"></div>

* [IgxDialogComponent]({environment:angularApiUrl}/classes/igxdialogcomponent.html)
* [IgxDialogComponent Styles]({environment:sassApiUrl}/index.html#function-igx-dialog-theme)
* [IgxOverlay]({environment:angularApiUrl}/interfaces/overlaysettings.html)
* [IgxOverlay Styles]({environment:sassApiUrl}/index.html#function-igx-overlay-theme)

### Additional Resources

<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.
* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)