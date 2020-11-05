---
title: Dialog Window Component
_description: Whether building informative dialogs or data manipulation windows, Ignite UI for Angular Dialog Window component can manage information shown in real-time for fast capability.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Dialog Window components, Angular Dialog Window controls
_language: kr
---

##Dialog Window
<p class="highlight">Use the Ignite UI for Angular Dialog Window component to display messages or present forms for users to fill out. The component opens a dialog window centered on top of app content. You can also provide a standard alert message that users can cancel.</p>
<div class="divider"></div>

### Dialog Demo
<div class="sample-container loading" style="height:300px">
    <iframe id="dialog-sample-iframe" src='{environment:demosBaseUrl}/interactions/dialog' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="dialog-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz 에서보기</button>
</div>
<div class="divider--half"></div>

### Usage

To get started with the Ignite UI for Angular Dialog Window, let's first import the [**IgxDialogModule**]({environment:angularApiUrl}/classes/igxdialogmodule.html) in our **app.module.ts** file:

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
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="dialog-sample-1-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz 에서보기</button>
</div>
<div class="divider--half"></div>

####Standard Dialog

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
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="dialog-sample-2-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz 에서보기</button>
</div>
<div class="divider--half"></div>

####Custom Dialog

To add custom dialog, in the template of our sign in component we can add the following code to get the custom dialog. We have to set the [`title`]({environment:angularApiUrl}/classes/igxdialogcomponent.html#title),[`leftButtonLabel`]({environment:angularApiUrl}/classes/igxdialogcomponent.html#leftbuttonlabel), [`rightButtonLabel`]({environment:angularApiUrl}/classes/igxdialogcomponent.html#rightbuttonlabel), [`closeOnOutsideSelect`]({environment:angularApiUrl}/classes/igxdialogcomponent.html#closeonoutsideselect) and handle [`onLeftButtonSelect`]({environment:angularApiUrl}/classes/igxdialogcomponent.html#onleftbuttonselect) and [`onRightButtonSelect`]({environment:angularApiUrl}/classes/igxdialogcomponent.html#onrightbuttonselect) event.
Also we can add two groups of label and input decorated with the [**igxLabel**](input-group.md) and [**igxInput**](input-group.md) directives.

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
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="dialog-sample-3-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz 에서보기</button>
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