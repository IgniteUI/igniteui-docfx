---
title: Angular Toast Component – Ignite UI for Angular | Infragistics
_description: With Ignite UI for Angular Toast component, users can provide quick, non-interactive messages to end users within their application.
_keywords: Angular Toast component, Angular Toast control, Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Angular UI Components, Native Angular Components Library
---

# Angular Toast Component Overview
<p class="highlight">The Ignite UI for Angular Toast component provides information and warning messages that are auto-hiding, non-interactive and cannot be dismissed by the user. Notifications can be displayed at the bottom, the middle, or the top of the page.</p>

## Angular Toast Example


<code-view style="height: 300px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/notifications/toast-sample-2" alt="Angular Toast Example">
</code-view>

<div class="divider--half"></div>


## Getting Started with Ignite UI for Angular Toast

To get started with the Ignite UI for Angular Toast component, first you need to install Ignite UI for Angular. In an existing Angular application, type the following command:

```cmd
ng add igniteui-angular
```

For a complete introduction to the Ignite UI for Angular, read the [*getting started*](general/getting-started.md) topic.

The next step is to import the `IgxToastModule` in your **app.module.ts** file.

```typescript
// app.module.ts

...
import { IgxToastModule } from 'igniteui-angular';
// import { IgxToastModule } from '@infragistics/igniteui-angular'; for licensed package

@NgModule({
    ...
    imports: [..., IgxToastModule],
    ...
})
export class AppModule {}
```

Alternatively, as of `16.0.0` you can import the `IgxToastComponent` as a standalone dependency.

```typescript
// home.component.ts

import { IgxToastComponent, IgxButtonDirective } from 'igniteui-angular';
// import { IgxToastComponent, IgxButtonDirective } from '@infragistics/igniteui-angular'; for licensed package

@Component({
    selector: 'app-home',
    template: `
    <button igxButton="contained" (click)="toast.open()">Show notification</button>
    <igx-toast #toast>Notification displayed</igx-toast>
    `,
    styleUrls: ['home.component.scss'],
    standalone: true,
    imports: [IgxToastComponent, IgxButtonDirective]
    /* or imports: [IgxTimePickerComponent, IgxButtonDirective] */
})
export class HomeComponent {
    public time: Date;
}
```

Now that you have the Ignite UI for Angular Toast module or component imported, you can start using the `igx-toast` component.

## Using the Angular Toast

### Show Toast
In order to display the toast component, use its [`open()`]({environment:angularApiUrl}/classes/igxtoastcomponent.html#open) method and call it on a button click. You can pass the toast content inside the element.

```html
<!--sample.component.html-->

<button igxButton="contained" (click)="toast.open()">Show notification</button>
<igx-toast #toast>Notification displayed</igx-toast>
```

Another way to set the toast content is to directly pass the message as a parameter to the [`open()`]({environment:angularApiUrl}/classes/igxtoastcomponent.html#open) method.

```html
<!--sample.component.html-->

<button igxButton="contained" (click)="toast.open('Notification displayed')">Show notification</button>
<igx-toast #toast></igx-toast>
```

The [`open()`]({environment:angularApiUrl}/classes/igxtoastcomponent.html#open) method can also be used in the AppComponent file to manage the value of the message.

```typescript
// app.component.ts
@ViewChild('toast', { read: IgxToastComponent }) public toast: IgxToastComponent;

public message: any;

public ngOnInit() {
    this.message = 'Display message';
}

public showMessage() {
    this.toast.open(this.message);
}
```

## Examples

### Hide/Auto Hide
Once opened, the toast disappears after a period specified by the [`displayTime`]({environment:angularApiUrl}/classes/igxtoastcomponent.html#displayTime) input which is set initially to 4000 milliseconds. This behavior is enabled by default but you can change this by setting [`autoHide`]({environment:angularApiUrl}/classes/igxtoastcomponent.html#autoHide) to **false**. This way, the toast remains visible. Using the toast [`close()`]({environment:angularApiUrl}/classes/igxtoastcomponent.html#close) method, you can close the component.

```html
<!--sample.component.html-->

<button igxButton="contained" (click)="toast.open()">Show Toast</button>
<button igxButton="contained" (click)="toast.close()">Hide Toast</button>
<igx-toast #toast [autoHide]="false">Notification displayed</igx-toast>
```

If the sample is configured properly, the toast will appear when the *Show button* is clicked. For the first component auto-hide feature is disabled and the toast will disappear on 'Hide' button click.
In the other two components you can see in action how to pass different messages through the [`open()`]({environment:angularApiUrl}/classes/igxtoastcomponent.html#open) method and use content projection.

<code-view style="height: 450px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/notifications/toast-sample-3" >
</code-view>

### Display Time
Use [`displayTime`]({environment:angularApiUrl}/classes/igxtoastcomponent.html#displayTime) and set it to an interval in milliseconds to configure how long the toast component is visible.

```html
<!--sample.component.html-->

<button igxButton="contained" (click)="toast.open()">Show notification</button>
<igx-toast #toast displayTime="1000">Notification displayed</igx-toast>
```

If the sample is configured properly, the toast auto hides faster.

<div class="sample-container loading">
    <iframe id="toast-sample-4-iframe" frameborder="0" seamless width="100%" height="100%" data-src="{environment:demosBaseUrl}/notifications/toast-sample-4" class="lazyload"></iframe>
</div>

### Positioning
Use [`positionSettings`]({environment:angularApiUrl}/classes/igxtoastcomponent.html#positionSettings) property to configure where the toast appears. By default, it is displayed at the bottom of the page. In the sample below, we set notification to appear at the top position.

```html
<!--sample.component.html-->
<div>
    <button igxButton="contained" (click)="open(toast)">Show notification on top</button>
    <igx-toast #toast>Notification displayed</igx-toast>
</div>
```

```typescript
// sample.component.ts
import { VerticalAlignment } from 'igniteui-angular';
// import { VerticalAlignment } from '@infragistics/igniteui-angular'; for licensed package
...
public open(toast) {
    toast.positionSettings.verticalDirection = VerticalAlignment.Top;
    toast.open();
}
...
```

<code-view style="height: 300px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/notifications/toast-sample-5" >
</code-view>

<div class="divider--half"></div>

## Styling

To get started with styling the toast, we need to import the index file, where all the theme functions and component mixins live:

```scss
@use "igniteui-angular/theming" as *;

// IMPORTANT: Prior to Ignite UI for Angular version 13 use:
// @import '~igniteui-angular/lib/core/styles/themes/index';
``` 

Following the simplest approach, we create a new theme that extends the [`toast-theme`]({environment:sassApiUrl}/index.html#function-toast-theme) and provide the `$background`, `$text-color` and `$border-radius` parameters.

```scss
$custom-toast-theme: toast-theme(
  $text-color: #ffcd0f,
  $background: #292826,
  $border-radius: 12px
);
```

>[!NOTE]
>Instead of hardcoding the color values like we just did, we can achieve greater flexibility in terms of colors by using the [`palette`]({environment:sassApiUrl}/index.html#function-palette) and [`color`]({environment:sassApiUrl}/index.html#function-color) functions. Please refer to [`Palettes`](/themes/sass/palettes.md) topic for detailed guidance on how to use them.

The last step is to pass the custom toast theme:

```scss
@include css-vars($custom-toast-theme);
```

### Demo

<code-view style="height: 600px" 
           no-theming
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/notifications/toast-style" >
</code-view>

<div class="divider--half"></div>

## API References
<div class="divider--half"></div>

* [IgxToastComponent]({environment:angularApiUrl}/classes/igxtoastcomponent.html)
* [IgxToastComponent Styles]({environment:sassApiUrl}/index.html#function-toast-theme)

## Additional Resources
<div class="divider--half"></div>

Our community is active and always welcoming to new ideas.
* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
