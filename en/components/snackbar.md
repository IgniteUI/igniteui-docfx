---
title: Angular Snackbar Component - MIT license 
_description: Easily integrate a brief, single-line message within your mobile and desktop applications with Ignite UI for Angular Snackbar component.
_keywords: Angular Snackbar component, Angular Snackbar control, Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Angular UI Components, Native Angular Components Library
_license: MIT
---

# Angular Snackbar Component Overview
<p class="highlight">The Ignite UI for Angular Snackbar component provides feedback about an operation with a single-line message, which can include an action. The Snackbar message appears above all other elements and is positioned at the bottom center of the screen.</p>

## Angular Snackbar Example
<div class="divider--half"></div>


<code-view style="height: 140px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/notifications/snackbar-sample-1/" alt="Angular Snackbar Example">
</code-view>


<div class="divider--half"></div>

## Getting Started with Ignite UI for Angular Snackbar

To get started with the Ignite UI for Angular Snackbar component, first you need to install Ignite UI for Angular. In an existing Angular application, type the following command:

```cmd
ng add igniteui-angular
```

For a complete introduction to the Ignite UI for Angular, read the [*getting started*](general/getting-started.md) topic.

The next step is to import the `IgxSnackbarModule` in your **app.module.ts** file.

```typescript
// app.module.ts

...
import { IgxSnackbarModule } from 'igniteui-angular';
// import { IgxSnackbarModule } from '@infragistics/igniteui-angular'; for licensed package

@NgModule({
    ...
    imports: [..., IgxSnackbarModule],
    ...
})
export class AppModule {}
```

Alternatively, as of `16.0.0` you can import the `IgxSnackbarComponent` as a standalone dependency.

```typescript
// home.component.ts

import { IgxSnackbarComponent, IgxButtonDirective } from 'igniteui-angular';
// import { IgxSnackbarComponent, IgxButtonDirective } from '@infragistics/igniteui-angular'; for licensed package

@Component({
    selector: 'app-home',
    template: `
    <button igxButton="contained" (click)="snackbar.open()">Delete Message</button>
    <div>
        <igx-snackbar #snackbar>Message deleted</igx-snackbar>
    </div>
    `,
    styleUrls: ['home.component.scss'],
    standalone: true,
    imports: [IgxSnackbarComponent, IgxButtonDirective]
})
export class HomeComponent {}
```

Now that you have the Ignite UI for Angular Snackbar module or component imported, you can start using the `igx-snackbar` component.

## Using the Angular Snackbar

### Show Snackbar
In order to display the snackbar component, use its [`open()`]({environment:angularApiUrl}/classes/igxsnackbarcomponent.html#open) method and call it on a button click.

```html
<!--sample.component.html-->

<button igxButton="contained" (click)="snackbar.open()">Delete Message</button>
<div>
    <igx-snackbar #snackbar>Message deleted</igx-snackbar>
</div>
```
If the sample is configured properly, you should see the demo sample. A snackbar appears displaying a text message when the button is clicked.
As you can see in the code snippet above, one way to set the massage displayed in the snackbar is to use the content projection. But if you need to switch the value programmatically based on some custom logic you can just pass the value as a parameter to the [`open()`]({environment:angularApiUrl}/classes/igxsnackbarcomponent.html#open) method.

```html
<!--sample.component.html-->

<button igxButton="contained" (click)="snackbar.open('Message deleted')">Delete Message</button>
<button igxButton="contained" (click)="snackbar.open('Message deletion was not successful. Please try again')">Delete Message</button>
<div>
    <igx-snackbar #snackbar></igx-snackbar>
</div>
```

### Hide/Auto Hide
Once opened, the snackbar disappears after a period specified by the [`displayTime`]({environment:angularApiUrl}/classes/igxsnackbarcomponent.html#displayTime) input which is set initially to 4000 milliseconds. This behavior is enabled by default but you can change it by setting [`autoHide`]({environment:angularApiUrl}/classes/igxsnackbarcomponent.html#autoHide) to **false**. In this way, the snackbar will remain visible. Using the snackbar [`close()`]({environment:angularApiUrl}/classes/igxsnackbarcomponent.html#close) method, you can close the component in the code.

```html
<!--sample.component.html-->

<button igxButton="contained" (click)="snackbar.open()">Send message</button>
<div>
  <igx-snackbar #snackbar [autoHide]="false" actionText="CLOSE" (clicked)="close(snackbar)">Message sent</igx-snackbar>
</div>
```

```typescript
// sample.component.ts

public close(element) {
    element.close();
}
```

If the sample is configured properly, the first snackbar appears when the button is clicked, showing both the *message* and *action button*. The auto-hide feature is disabled and the snackbar disappears on 'CLOSE' button click. Another snackbar passes a different message through the [`open()`]({environment:angularApiUrl}/classes/igxsnackbarcomponent.html#open) method and hides it when the *display time* expires. The third component passes a message as a param to the [`open()`]({environment:angularApiUrl}/classes/igxsnackbarcomponent.html#open) method and adds an icon using content projection.

<code-view style="height: 230px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/notifications/snackbar-sample-2/" >
</code-view>

### Display Time
Use [`displayTime`]({environment:angularApiUrl}/classes/igxsnackbarcomponent.html#displayTime) and set it to an interval in milliseconds to configure how long the snackbar component is visible. By default, as we said, it's initially set to 4000 milliseconds.

### Customize Snackbar
We can also customize the content of the Snackbar to display more complex elements than a message and a button. If we want to show the snackbar while loading a file, for example, a loading animation could be added to its content.

```html
<!--sample.component.html-->
<button igxButton="contained" (click)="snackbar.open()">Load file</button>
<div>
  <igx-snackbar #snackbar displayTime="5000">File loading
    <svg id="dots" height="20px">
        <g id="dots" fill="#FFFFFF">
            <circle id="dot1" cx="5" cy="18" r="2"></circle>
            <circle id="dot2" cx="15" cy="18" r="2"></circle>
            <circle id="dot3" cx="25" cy="18" r="2"></circle>
        </g>
    </svg>
  </igx-snackbar>
</div>
```

```scss
//sample.component.scss
#dots #dot1 {
    animation: load 1s infinite;
}

#dots #dot2 {
    animation: load 1s infinite;
    animation-delay: 0.2s;
}

#dots #dot3 {
    animation: load 1s infinite;
    animation-delay: 0.4s;
}

@keyframes load {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
}
```

As a result, a message and three loading dots appear in the snackbar.


<code-view style="height: 170px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/notifications/snackbar-sample-5/" >
</code-view>


### Snackbar in list
Having all main snackbar features covered, we can integrate this component in a more interesting scenario. We can use the snackbar to provide a notification and the ability to revert actions.

Let’s create a list with contacts that can be deleted. When an item is deleted, a snackbar is displayed containing a message and a button to undo the action.

```html
<!--sample.component.html-->
<igx-list>
    <igx-list-item [isHeader]="true">Contacts</igx-list-item>

    <igx-list-item igxRipple="pink" igxRippleTarget=".igx-list__item" *ngFor="let item of navItems">
        <div class="item-container">
            <div class="contact">
                <igx-avatar [src]="item.avatar" shape="circle"></igx-avatar>
                <div class="contact__info">
                    <span class="name">{{item.text}}</span>
                </div>
            </div>
            <span igxIconButton="flat" igxRipple igxRippleCentered="true" (click)="delete(item)">
                <igx-icon [style.color]="'#ff5252'">delete</igx-icon>
            </span>
        </div>

    </igx-list-item>

    <igx-snackbar actionText="Undo" (clicked)="restore()">Contact deleted</igx-snackbar>
</igx-list>
```

```typescript
//sample.component.ts

import { Component, OnInit, ViewChild } from '@angular/core';
import { IgxSnackbarComponent } from 'igniteui-angular';
// import { IgxSnackbarComponent } from '@infragistics/igniteui-angular'; for licensed package
...
@ViewChild(IgxSnackbarComponent)
public snackbar: IgxSnackbarComponent;
public navItems: any[];
public deletedItems = [];

constructor() { }

public ngOnInit() {
    this.navItems = [
        { avatar: 'assets/images/avatar/2.jpg', text: 'Richard Mahoney'},
        { avatar: 'assets/images/avatar/4.jpg', text: 'Lisa Landers' },
        { avatar: 'assets/images/avatar/14.jpg', text: 'Marianne Taylor' },
        { avatar: 'assets/images/avatar/17.jpg', text: 'Ward Riley' }
    ];
}

public delete(item) {
    this.deletedItems.push([item, this.navItems.indexOf(item)]);
    this.navItems.splice(this.navItems.indexOf(item), 1);
    this.snackbar.open();
}

public restore() {
    const [item, index] = this.deletedItems.pop();
    this.navItems.splice(index, 0, item);
    this.snackbar.close();
}
```

<code-view style="height: 350px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/notifications/snackbar-sample-4/" >
</code-view>

### Positioning
Use [`positionSettings`]({environment:angularApiUrl}/classes/igxsnackbarcomponent.html#positionSettings) property to configure where the snackbar appears. By default, it is displayed at the bottom of the page. In the sample below, we set notification to appear at the top position.

```html
<!--sample.component.html-->
<button igxButton="contained" (click)="open(snackbar)">Show notification on top</button>
<igx-snackbar #snackbar>Notification displayed</igx-snackbar>
```

```typescript
// sample.component.ts
import { VerticalAlignment, HorizontalAlignment } from 'igniteui-angular';
// import { VerticalAlignment, HorizontalAlignment } from '@infragistics/igniteui-angular'; for licensed package
...
public open(snackbar) {
    snackbar.positionSettings.verticalDirection = VerticalAlignment.Top;
    snackbar.positionSettings.horizontalDirection = HorizontalAlignment.Right;
    snackbar.open();
}
...
```

## Styling
To get started with styling the snackbar, we need to import the index file, where all the theme functions and component mixins live:

```scss
@use "igniteui-angular/theming" as *;

// IMPORTANT: Prior to Ignite UI for Angular version 13 use:
// @import '~igniteui-angular/lib/core/styles/themes/index';
``` 

Following the simplest approach, we create a new theme that extends the [`snackbar-theme`]({environment:sassApiUrl}/themes#function-snackbar-theme) and accepts the `$text-color`, `$background`, `$button-color` and the `$border-radius` parameters.

```scss
$dark-snackbar: snackbar-theme(
  $text-color: #ffcd0f,
  $background: #292826,
  $button-color: #ffcd0f,
  $border-radius: 12px
);
```

>[!NOTE]
>Instead of hardcoding the color values like we just did, we can achieve greater flexibility in terms of colors by using the [`palette`]({environment:sassApiUrl}/palettes#function-palette) and [`color`]({environment:sassApiUrl}/palettes#function-color) functions. Please refer to [`Palettes`](/themes/sass/palettes.md) topic for detailed guidance on how to use them.

The last step is to **include** the component theme in our application.

```scss
@include css-vars($dark-snackbar);
```

### Demo

<code-view style="height: 150px" 
           no-theming
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/notifications/snackbar-style/" >
</code-view>

<div class="divider--half"></div>

## API References
In this article we learned how to use and configure the [`IgxSnackbarComponent`]({environment:angularApiUrl}/classes/igxsnackbarcomponent.html). For more details in regards its API, take a look at the links below:

* [`IgxSnackbarComponent`]({environment:angularApiUrl}/classes/igxsnackbarcomponent.html)

Styles:

* [`IgxSnackbarComponent Styles`]({environment:sassApiUrl}/themes#function-snackbar-theme)

## Additional Resources

<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.
* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
