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
    <iframe id="toast-sample-iframe" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/toast-sample-1" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="toast-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>

> [!NOTE]
> To start using Ignite UI for Angular components in your own projects, make sure you have configured all necessary dependencies and have performed the proper setup of your project. You can learn how to do this in the [**installation**](https://www.infragistics.com/products/ignite-ui-angular/getting-started#installation) topic.

###Usage

To get started with the Ignite UI for Angular Toast, let's first import the **IgxToastModule** in our **app.module.ts** file:

```typescript
// app.module.ts

...
import { IgxToastModule } from 'igniteui-angular/main';

@NgModule({
    ...
    imports: [..., IgxToastModule],
    ...
})
export class AppModule {}
```
#### Show Toast
In order to display the toast component, use its `show()` method and call it on a button click. Use the `message` input to set a notification.

```html
<!--sample.component.html-->

<button igxButton="raised" (click)="toast.show()">Show notification</button>
<igx-toast #toast message="Notification displayed"></igx-toast>
```

If the sample is configured properly, a toast appears displaying a notification when the button is clicked.

<div class="sample-container loading" style="height: 300px">
    <iframe id="toast-sample-iframe" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/toast-sample-2" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>

#### Hide/Auto Hide
Once opened, the toast disappears after a period specified by the `displayTime` input which is set initially to 4000 milliseconds. This behavior is enabled by default but you can change this by setting `autoHide` to **false**. In this way, the toast remains visible. Using the toast `hide()` method, you can close the component.

```html
<!--sample.component.html-->

<button igxButton="raised" (click)="toast.show()">SHOW TOAST</button>
<button igxButton="raised" (click)="toast.hide()">HIDE TOAST</button>
<igx-toast #toast message="Notification displayed" [autoHide]="false"></igx-toast>
```

If the sample is configured properly, the toast appears when the 'SHOW' button is clicked. The auto hide feature is disabled and the toast disappears on 'HIDE' button click.

<div class="sample-container loading" style="height: 300px">
    <iframe id="toast-sample-iframe" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/toast-sample-3" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>

#### Display Time
Use `displayTime` and set it to an interval in milliseconds to configure how long the toast component is visible. 

```html
<!--sample.component.html-->

<button igxButton="raised" (click)="toast.show()">Show notification</button>
<igx-toast #toast message="Notification displayed" displayTime="1000"></igx-toast>
```

If the sample is configured properly, the toast auto hides faster.

<div class="sample-container loading" style="height: 300px">
    <iframe id="toast-sample-iframe" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/toast-sample-4" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>

#### Positioning
Use `position` to configure where the toast appears. By default, the toast is displayed at the bottom of the page. In the sample below, we set notification to appear at the top position.

```html
<!--sample.component.html-->

<div>
    <button igxButton="raised" (click)="show(toast)">Show notification on top</button>
    <igx-toast #toast message="Notification displayed" [position]="toastPosition"></igx-toast>
</div>

```

```typescript
// sample.component.ts

import { IgxToastPosition } from "igniteui-angular/main";

...
public toastPosition: IgxToastPosition;
public show(toast) {
    this.toastPosition = IgxToastPosition.Top;
    toast.show();
}
...

```

<div class="sample-container loading" style="height: 300px">
    <iframe id="toast-sample-5-iframe" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/toast-sample-5" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>

<div>
    <button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="toast-sample-5-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>

<div class="divider--half"></div>

### API Summary
The following tables summarize some of the useful **igx-toast** component inputs, outputs and methods.

<div class="divider--half"></div>

#### Inputs
The following inputs are available in the **igx-toast** component:

| Name | Type | Description |
| :--- | :--- | :--- |
| `autoHide` | boolean | Specifies whether the toast is automatically hidden after `displayTime`. By default, `autoHide` is set to **true**. |
| `displayTime` | number | Specifies the interval in milliseconds in which the toast is visible. By default, `displayTime` is set to 4000 milliseconds. |
| `isVisible` | boolean | Specifies the component visual state. By default, `isVisible` is set to **false**. |
| `message` | string | Specifies the displayed message. |
| `position` | `IgxToastPosition` | Specifies the toast position. Possible options are `IgxToastPosition.Top`, `IgxToastPosition.Middle`, `IgxToastPosition.Bottom`. By default, `position` is set to `IgxToastPosition.Bottom`. |

<div class="divider--half"></div>

#### Outputs
The following outputs are available in the **igx-toast** component:

| Name | Description |
| :--- | :--- |
| `onShowing`  | Emits an event prior the toast is shown.  |
| `onShown`  | Emits an event when the toast is shown. |
| `onHiding`  | Emits an event prior the toast is hidden. |
| `onHidden`  | Emits an event when the toast is hidden. |

#### Methods
The following methods are available for the **igx-toast** component:

| Name | Description |
| :--- | :--- |
| `show()`  | Shows the toast component and hides it after `displayTime` if `autoHide` is set to **true**. |
| `hide()`  | Hides the toast component. |


###Additional Resources

<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.
* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
