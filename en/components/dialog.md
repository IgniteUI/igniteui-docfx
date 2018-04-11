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
    <iframe id="dialog-sample-iframe" src='{environment:demosBaseUrl}/dialog' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="dialog-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>

### Usage

To get started with the Ignite UI for Angular Dialog Window, let's first import the **IgxDialogModule** in our **app.module.ts** file:

```typescript
// app.module.ts

...
import { IgxDialogModule } from 'igniteui-angular/main';

@NgModule({
    ...
    imports: [..., IgxDialogModule],
    ...
})
export class AppModule {}
```
<div class="divider--half"></div>

#### Alert

To add alert, in the template of our email component we can add the following code to get the notification dialog. We have to set the `title`, `message`, 
`leftButtonLabel` and handle `onLeftButtonSelect` event:

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
    <iframe id="dialog-sample-1-iframe" src='{environment:demosBaseUrl}/dialog-sample-1' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="dialog-sample-1-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>

####Standard Dialog

To add standard dialog, in the template of our file manager component we can add the following code to get the standard dialog. We have to set the `title`, `message`, 
`leftButtonLabel`, `rightButtonLabel`, and handle `onLeftButtonSelect` and `onRightButtonSelect` events:

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
    <iframe id="dialog-sample-2-iframe" src='{environment:demosBaseUrl}/dialog-sample-2' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="dialog-sample-2-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>

####Custom Dialog

To add custom dialog, in the template of our sign in component we can add the following code to get the custom dialog. We have to set the `title`,`leftButtonLabel`, `rightButtonLabel`, `closeOnOutsideSelect` and handle `onLeftButtonSelect` and `onRightButtonSelect` event.
Also we can add two groups of label and input decorated with the [**igxLabel**](label_input.md) and [**igxInput**](label_input.md) directives.

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
    <iframe id="dialog-sample-3-iframe" src='{environment:demosBaseUrl}/dialog-sample-3' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="dialog-sample-3-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>

### API Summary
The following tables summarize some of the useful **igx-dialog** component inputs, outputs and methods.

#### Inputs
The following inputs are available in the **igx-dialog** component:

| Name | Type | Description |
| :--- | :--- | :--- |
| `id` | string | Unique identifier of the dialog. |
| `title` | string | Specifies the title of the dialog. |
| `message` | string | Specifies the message of the dialog. |
| `leftButtonLabel` | string | When set, the left button becomes visible. |
| `leftButtonType` | string | Specifies the left button [**type**](button.md#button-types). Default value is flat. |
| `leftButtonColor` | string | Specifies the left button text color. |
| `leftButtonBackgroundColor` | string | Specifies the left button background color. |
| `leftButtonRipple` | string | Specifies the left button [**ripple**](ripple.md) effect. |
| `rightButtonLabel` | string | When set, the right button becomes visible. |
| `rightButtonType` | string | Specifies the right button [**type**](button.md#button-types). Default value is flat. |
| `rightButtonColor` | string | Specifies the right button text color. |
| `rightButtonBackgroundColor` | string | Specifies the right button background color. |
| `rightButtonRipple` | string | Specifies the right button [**ripple**](ripple.md) effect. |
| `closeOnOutsideSelect` | boolean | When set to true the dialog closes when clicking outside. Default value is false. |
<div class="divider--half"></div>

#### Outputs
The following outputs are available in the **igx-dialog** component:

| Name | Description |
| :--- | :--- |
| `onOpen`  | Emits an event when the user open the dialog. |
| `onClose`  | Emits an event when the user close the dialog. |
| `onLeftButtonSelect`  | Emits an event when the user click on the left button. |
| `onRightButtonSelect`  | Emits an event when the user click on the right button. |

#### Methods
The following methods are available in the **igx-dialog** component:

| Signature | Description |
| :--- | :--- |
| `open`  | Opens the dialog. |
| `close`  | Closes the dialog. |
| `toggle`  | Changes the state of the dialog. |

#### Getters
The following getters are available on the **igx-dialog** component:

| Name | Type | Description |
| :--- | :--- | :--- |
| `state` | string | Returns the state of the dialog. |
| `isOpen` | boolean | Returns true if the the dialog is open and false if it is closed. |
| `role` | string | Returns the type of the dialog. |
| `titleId` | string | Returns the unique id of the dialog's title. |

###Additional Resources

<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.
* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)