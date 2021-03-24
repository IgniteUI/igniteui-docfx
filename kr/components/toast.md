---
title: Toast Component
_description: With Ignite UI for Angular Toast component, users can provide quick, non-interactive messages to end users within their application.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Toast component, Angular Toast control
_language: kr
---

##Toast
<p class="highlight">The Ignite UI for Angular Toast component provides information and warning messages that are non-interactive and cannot be dismissed by the user. Notifications can be displayed at the bottom, the middle, or the top of the page.</p>
<div class="divider"></div>

### Toast Demo

<code-view style="height: 500px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/notifications/toast-sample-1" >
</code-view>

<div class="divider--half"></div>

> [!NOTE]
> To start using Ignite UI for Angular components in your own projects, make sure you have configured all necessary dependencies and have performed the proper setup of your project. You can learn how to do this in the [**installation**](https://www.infragistics.com/products/ignite-ui-angular/getting-started#installation) topic.

###Usage

To get started with the Ignite UI for Angular Toast, let's first import the `IgxToastModule` in our **app.module.ts** file:

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
In order to display the toast component, use its [`open()`]({environment:angularApiUrl}/classes/igxtoastcomponent.html#open) method and call it on a button click. Use the [`message`]({environment:angularApiUrl}/classes/igxtoastcomponent.html#message) input to set a notification.

```html
<!--sample.component.html-->

<button igxButton="raised" (click)="toast.open()">Show notification</button>
<igx-toast #toast message="Notification displayed"></igx-toast>
```

If the sample is configured properly, a toast appears displaying a notification when the button is clicked.

<div class="sample-container loading" style="height: 300px">
    <iframe id="toast-sample-iframe" frameborder="0" seamless width="100%" height="100%" data-src="{environment:demosBaseUrl}/notifications/toast-sample-2" class="lazyload"></iframe>
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
    <iframe id="toast-sample-iframe" frameborder="0" seamless width="100%" height="100%" data-src="{environment:demosBaseUrl}/notifications/toast-sample-3" class="lazyload"></iframe>
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
    <iframe id="toast-sample-iframe" frameborder="0" seamless width="100%" height="100%" data-src="{environment:demosBaseUrl}/notifications/toast-sample-4" class="lazyload"></iframe>
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


<code-view style="height: 300px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/notifications/toast-sample-5" >
</code-view>


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
