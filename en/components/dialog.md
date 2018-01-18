---
title: Dialog Window Component
_description: Whether building informative dialogs or data manipulation windows, Ignite UI for Angular Dialog Window component can manage information shown in real-time for fast capability.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Dialog Window components, Angular Dialog Window controls
---

##Dialog Windows
<p class="highlight">Use the Ignite UI for Angular Dialog Window component to display messages or present forms for users to fill out. The component opens a dialog window centered on top of app content. You can also provide a standard alert message that users can cancel.</p>
<div class="divider"></div>

### Dialog Example
<div class="sample-container" style="height:588px">
    <iframe src='{environment:demosBaseUrl}/dialog' width="100%" height="100%" seamless frameBorder="0"></iframe>
</div>
<div class="divider--half"></div>

### Alerts

**Alerts are done by adding title, message, and button label.**

```html
<igx-dialog #alert
    title="Alert"
    message="Your email has been sent successfully!"
    leftButtonLabel="OK" (onLeftButtonSelect)="alert.close()">
</igx-dialog>
```
You can set title to the alert `title="TitleofTheAlert"`

You can be more descriptive and set message `message="Your email has been sent successfully!"`

You can attach to the left button select event `(onLeftButtonSelect)="alert.close()"`
<div class="divider--half"></div>

###Standard Dialogs
**Dialogs are done by adding another button.**

```html
<igx-dialog #dialog
    title="Confirmation"
    message="Are you sure you want to delete the Microsoft_Annual_Report_2015.pdf and Microsoft_Annual_Report_2015.pdf files?"
    leftButtonLabel="Cancel"
    (onLeftButtonSelect)="dialog.close()"
    rightButtonLabel="OK"
    (onRightButtonSelect)="onDialogOKSelected($event)">
</igx-dialog>
```

You can access all properties of the button component with the following attributes:

`leftButtonLabel`

`leftButtonType`

`leftButtonColor`

`leftButtonBackgroundColor`

`leftButtonRipple`
<div class="divider--half"></div>

###Custom Dialogs
**Custom Dialogs are done by adding any markup in the igx-dialog tag.**
When you are using Custom Dialogs you don't have a message property set.

```HTML
<igx-dialog #form
    title="Sign In"
    leftButtonLabel="Cancel"
    (onLeftButtonSelect)="form.close()"
    rightButtonLabel="Sign In"
    rightButtonBackgroundColor="green"
    rightButtonColor="white"
    closeOnOutsideSelect="true">
    <div class="ig-form-group">
        <input type="text" igInput />
        <label igLabel>Username</label>
    </div>
    <div class="ig-form-group">
        <input type="password" igInput />
        <label igLabel>Password</label>
    </div>
</igx-dialog>
```

You can make the dialog dismissible `closeOnOutsideSelect="true"``
<div class="divider--half"></div>
