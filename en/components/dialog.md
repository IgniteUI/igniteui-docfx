---
title: Dialog Window Component
_description: Whether building informative dialogs or data manipulation windows, Ignite UI for Angular Dialog Window component can manage information shown in real-time for fast capability.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Dialog Window components, Angular Dialog Window controls
---

# Dialog Window
<p class="highlight">Use the Ignite UI for Angular Dialog Window component to display messages or present forms for users to fill out. The component opens a dialog window centered on top of app content. You can also provide a standard alert message that users can cancel.</p>
<div class="divider"></div>

## Angular Dialog Window Example
<div class="sample-container loading" style="height:200px">
    <iframe id="dialog-sample-1-iframe" src='{environment:demosBaseUrl}/interactions/dialog-sample-1' width="100%" height="100%" seamless="" frameborder="0" onload="onSampleIframeContentLoaded(this);" alt="Angular Dialog Window Example"></iframe>
</div>
<p style="margin: 0;padding-top: 0.5rem">Like this sample? Get access to our complete Angular toolkit and start building your own apps in minutes. <a class="no-external-icon mchNoDecorate trackCTA" target="_blank" href="https://www.infragistics.com/products/ignite-ui-angular/download" data-xd-ga-action="Download" data-xd-ga-label="Ignite UI for Angular">Download it for free.</a></p>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="dialog-sample-1-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on codesandbox</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="dialog-sample-1-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>

## Usage

The first step is to import the **IgxDialogModule** in our **app.module.ts** file:

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

### Alert Dialog

To create an alert dialog, in the template of our email component, we add the following code. We have to set the [`title`]({environment:angularApiUrl}/classes/igxdialogcomponent.html#title), [`message`]({environment:angularApiUrl}/classes/igxdialogcomponent.html#message), 
[`leftButtonLabel`]({environment:angularApiUrl}/classes/igxdialogcomponent.html#leftbuttonlabel) and handle [`onLeftButtonSelect`]({environment:angularApiUrl}/classes/igxdialogcomponent.html#onleftbuttonselect) event:

```html
<!--email.component.html-->
<button igxButton="raised" igxRipple="white" (click)="alert.open()">Show Alert Dialog</button>

<igx-dialog #alert
    title="Notification"
    message="Your email has been sent successfully!"
    leftButtonLabel="OK"
    (onLeftButtonSelect)="alert.close()">
</igx-dialog>
```

If everything's done right, you should see the demo sample shown above in your browser.

<div class="divider--half"></div>

### Standard Dialog

To create a standard dialog, in the template of our file manager component, we add the following code. We have to set the [`title`]({environment:angularApiUrl}/classes/igxdialogcomponent.html#title), [`message`]({environment:angularApiUrl}/classes/igxdialogcomponent.html#message), 
[`leftButtonLabel`]({environment:angularApiUrl}/classes/igxdialogcomponent.html#leftbuttonlabel), [`rightButtonLabel`]({environment:angularApiUrl}/classes/igxdialogcomponent.html#rightbuttonlabel), and handle [`onLeftButtonSelect`]({environment:angularApiUrl}/classes/igxdialogcomponent.html#onleftbuttonselect) and [`onRightButtonSelect`]({environment:angularApiUrl}/classes/igxdialogcomponent.html#onrightbuttonselect) events:

```html
<!--file-manager.component.html-->
<button igxButton="raised" igxRipple="white" (click)="dialog.open()">Show Confirmation Dialog</button>

<igx-dialog #dialog title="Confirmation"
    leftButtonLabel="Cancel"
    (onLeftButtonSelect)="dialog.close()"
    rightButtonLabel="OK"
    (onRightButtonSelect)="onDialogOKSelected($event)"
    message="Are you sure you want to delete the Microsoft_Annual_Report_2015.pdf and Microsoft_Annual_Report_2015.pdf files?">
</igx-dialog>
```

<div class="sample-container loading" style="height:250px">
    <iframe id="dialog-sample-2-iframe" data-src='{environment:demosBaseUrl}/interactions/dialog-sample-2' width="100%" height="100%" seamless frameBorder="0" class="lazyload"></iframe>
</div>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="dialog-sample-2-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on codesandbox</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="dialog-sample-2-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>

### Custom Dialog

To create a custom dialog, in the template of our sign-in component, we add the following code. The dialog title area can be customized using the `igxDialogTitle` directive or the `igx-dialog-title` selector. The actions area can be customized using the `igxDialogActions` directive or the `igx-dialog-actions` selector.
We add two input groups consisting of a label and and input decorated with the [**igxLabel**](input-group.md) and [**igxInput**](input-group.md) directives.

```html
<!--sign-in.component.html-->
<button igxButton="raised" igxRipple="white" (click)="alert.open()">Show Custom Dialog</button>

<igx-dialog #form [closeOnOutsideSelect]="true">
    <igx-dialog-title>
        <div class="dialog-container">
            <igx-icon>vpn_key</igx-icon>
            <div class="dialog-title">Sign In</div>
        </div>
    </igx-dialog-title>

    <form class="signInForm">
        <igx-input-group>
            <igx-prefix>
                <igx-icon>person</igx-icon>
            </igx-prefix>
            <label igxLabel for="username">Username</label>
            <input igxInput id="username" type="text"/>
        </igx-input-group>
        <igx-input-group>
            <igx-prefix>
                <igx-icon>lock</igx-icon>
            </igx-prefix>
            <label igxLabel>Password</label>
            <input igxInput id="password" type="password"/>
        </igx-input-group>
    </form>

    <div igxDialogActions>
        <button igxButton (click)="form.close()">CANCEL</button>
        <button igxButton (click)="form.close()">SIGN IN</button>
    </div>
</igx-dialog>
```

<div class="sample-container loading" style="height:300px">
    <iframe id="dialog-sample-3-iframe" data-src='{environment:demosBaseUrl}/interactions/dialog-sample-3' width="100%" height="100%" seamless frameBorder="0" class="lazyload"></iframe>
</div>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="dialog-sample-3-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on codesandbox</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="dialog-sample-3-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>

### Position and Animation Settings

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

- Use the `positionSettings` @input. Example:

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

> [!Note] The same approach should be used for the animation settings, use the `openAnimation` and `closeAnimation` properties to define animation params like duration. 
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

## Styling

To get started with styling the dialog window, we need to import the `index` file, where all the theme functions and component mixins live:

```scss
@import '~igniteui-angular/lib/core/styles/themes/index';
``` 

Following the simplest approach, we create a new theme that extends the [`igx-dialog-theme`]({environment:sassApiUrl}/index.html#function-igx-dialog-theme) and accepts parameters that style the dialog.

```scss
$my-dialog-theme: igx-dialog-theme(
    $background: #011627,
    $title-color: #ECAA53,
    $message-color: #FEFEFE,
    $border-radius: .3,
);
```

> [!NOTE]
> In order to style any additional components that are used as part of the dialog window's content (such as the [`IgxButton`](button.md)), an additional theme should be created that is specific to the respective component and is placed under the dialog window's scope only (so it does not affect the rest of the application).

Since the dialog window uses the [`IgxOverlayService`](overlay.md), in order for our custom theme to reach down the dialog window that we want to style, we will provide a specific outlet where the dialog window will be placed in the DOM when it is visible.

```html
<div igxOverlayOutlet>
    <igx-dialog #dialog1>
        <!-- .... -->
    </igx-dialog>
</div>
```

> [!NOTE]
> In order to learn more about the various options for providing themes to elements that are shown by using the [`IgxOverlayService`](overlay.md), you can take a look at this [link](overlay.md#styling).

### Including Themes

<div class="divider"></div>

The last step is to **include** the component theme in our application.

If `$legacy-support` is set to `true`, include the **theme** like that:

```scss
 @include igx-dialog($my-dialog-theme);
```
>[!NOTE]
>If the component is using an [`Emulated`](themes/component-themes.md#view-encapsulation) ViewEncapsulation, it is necessary to `penetrate` this encapsulation using `::ng-deep`

```scss
:host {
     ::ng-deep {
        @include igx-dialog($my-dialog-theme);
    }
}
```

<div class="divider"></div>

If `$legacy-support` is set to `false`(default), include the component **css variables** like that:

```scss
@include igx-css-vars($my-dialog-theme);
```

>[!NOTE]
>If the component is using an [`Emulated`](themes/component-themes.md#view-encapsulation) ViewEncapsulation, you still have to use `:host` because you need a global selector in order to override the variables.

```scss
:host {
    @include igx-css-vars($my-dialog-theme);
}
```

### Demo
<div class="sample-container loading" style="height:300px">
    <iframe id="dialog-styling-sample-iframe" src='{environment:demosBaseUrl}/interactions/dialog-styling-sample' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="dialog-styling-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on codesandbox</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="dialog-styling-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>

## API Summary
<div class="divider--half"></div>

* [IgxDialogComponent]({environment:angularApiUrl}/classes/igxdialogcomponent.html)
* [IgxDialogComponent Styles]({environment:sassApiUrl}/index.html#function-igx-dialog-theme)
* [IgxOverlay]({environment:angularApiUrl}/interfaces/overlaysettings.html)
* [IgxOverlay Styles]({environment:sassApiUrl}/index.html#function-igx-overlay-theme)

## Additional Resources

<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.
* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
