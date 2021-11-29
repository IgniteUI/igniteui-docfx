---
title: Angular Snackbar Component
_description: Easily integrate a brief, single-line message within your mobile and desktop applications with Ignite UI for Angular Snackbar component.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Snackbar component, Angular Snackbar control
---
# Snackbar
<p class="highlight">The Ignite UI for Angular Snackbar component provides feedback about an operation with a single-line message, which can include an action. The Snackbar message appears above all other elements and is positioned at the bottom center of the screen.</p>
<div class="divider"></div>

## Angular Snackbar Example
<div class="divider--half"></div>


<code-view style="height: 140px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/notifications/snackbar-sample-1" alt="Angular Snackbar Example">
</code-view>


<div class="divider--half"></div>

## Usage

The first step is to import the `IgxSnackbarModule` in our **app.module.ts** file:

```typescript
// app.module.ts

...
import { IgxSnackbarModule } from 'igniteui-angular';

@NgModule({
    ...
    imports: [..., IgxSnackbarModule],
    ...
})
export class AppModule {}
```
### Show Snackbar
In order to display the snackbar component, use its [`open()`]({environment:angularApiUrl}/classes/igxsnackbarcomponent.html#open) method and call it on a button click.

```html
<!--sample.component.html-->

<button igxButton="raised" (click)="snackbar.open()">Delete Message</button>
<div>
    <igx-snackbar #snackbar>Message deleted</igx-snackbar>
</div>
```
If the sample is configured properly, you should see the demo sample. A snackbar appears displaying a text message when the button is clicked.
As you can see in the code snippet above, one way to set the massage displayed in the snackbar is to use the content projection. But if you need to switch the value programmatically based on some custom logic you can just pass the value as a parameter to the [`open()`]({environment:angularApiUrl}/classes/igxsnackbarcomponent.html#open) method.

```html
<!--sample.component.html-->

<button igxButton="raised" (click)="snackbar.open('Message deleted')">Delete Message</button>
<button igxButton="raised" (click)="snackbar.open('Message deletion was not successful. Please try again')">Delete Message</button>
<div>
    <igx-snackbar #snackbar></igx-snackbar>
</div>
```

### Hide/Auto Hide
Once opened, the snackbar disappears after a period specified by the [`displayTime`]({environment:angularApiUrl}/classes/igxsnackbarcomponent.html#displaytime) input which is set initially to 4000 milliseconds. This behavior is enabled by default but you can change it by setting [`autoHide`]({environment:angularApiUrl}/classes/igxsnackbarcomponent.html#autohide) to **false**. In this way, the snackbar will remain visible. Using the snackbar [`close()`]({environment:angularApiUrl}/classes/igxsnackbarcomponent.html#close) method, you can close the component in the code.

```html
<!--sample.component.html-->

<button igxButton="raised" (click)="snackbar.open()">Send message</button>
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
           iframe-src="{environment:demosBaseUrl}/notifications/snackbar-sample-2" >
</code-view>

### Display Time
Use [`displayTime`]({environment:angularApiUrl}/classes/igxsnackbarcomponent.html#displaytime) and set it to an interval in milliseconds to configure how long the snackbar component is visible. By default, as we said, it's initially set to 4000 miliseconds.

### Customize Snackbar
We can also customize the content of the Snackbar to display more complex elements than a message and a button. If we want to show the snackbar while loading a file, for example, a loading animation could be added to its content.

```html
<!--sample.component.html-->
<button igxButton="raised" (click)="snackbar.open()">Load file</button>
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
           iframe-src="{environment:demosBaseUrl}/notifications/snackbar-sample-5" >
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
                <igx-avatar [src]="item.avatar" roundShape="true"></igx-avatar>
                <div class="contact__info">
                    <span class="name">{{item.text}}</span>
                </div>
            </div>
            <span igxButton="icon" igxRipple igxRippleCentered="true" (click)="delete(item)">
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
           iframe-src="{environment:demosBaseUrl}/notifications/snackbar-sample-4" >
</code-view>

### Overlay Settings
The [`IgxSnackbarComponent`]({environment:angularApiUrl}/classes/igxsnackbarcomponent.html) uses [Overlay Settings]({environment:angularApiUrl}/interfaces/overlaysettings.html) to control the position of its container. The default settings can be changed by defining Custom OverlaySettings and passing them to the snackbar `open()` method:

```typescript
public customSettings: OverlaySettings = {
    positionStrategy: new GlobalPositionStrategy(
        { 
            horizontalDirection: HorizontalAlignment.Left,
            verticalDirection: VerticalAlignment.Top
        }),
    modal: true,
    closeOnOutsideClick: true,
};

snackbar.open(customSettings);
```

Users can also provide a specific outlet where the snackbar will be placed in the DOM when it is visible:

```html
<igx-snackbar [outlet]="igxBodyOverlayOutlet"></igx-snackbar>
<div #igxBodyOverlayOutlet igxOverlayOutlet></div>
```
## Styling
To get started with styling the snackbar, we need to import the index file, where all the theme functions and component mixins live:

```scss
@use "igniteui-angular/theming" as *;

// IMPORTANT: Prior to Ignite UI for Angular version 13 use:
// @import '~igniteui-angular/lib/core/styles/themes/index';
``` 

Following the simplest approach, we create a new theme that extends the [`igx-snackbar-theme`]({environment:sassApiUrl}/index.html#function-igx-snackbar-theme) and accepts the `$text-color`, `$background`, `$button-color` and the `$border-radius` parameters.

```scss
$dark-snackbar: igx-snackbar-theme(
    $text-color: #FFCD0F,
    $background: #292826,
    $button-color: #FFCD0F,
    $border-radius: 12px
);
```

### Including themes

<div class="divider"></div>

The last step is to **include** the component theme in our application.

If `$legacy-support` is set to `true`, include the **component theme** like that:

```scss
 @include igx-snackbar($igx-snackbar-theme);
```
>[!NOTE]
>If the component is using an [`Emulated`](themes/sass/component-themes.md#view-encapsulation) ViewEncapsulation, it is necessary to `penetrate` this encapsulation using `::ng-deep`

```scss
:host {
     ::ng-deep {
        @include igx-snackbar($igx-snackbar-theme);
    }
}
```

<div class="divider"></div>

If `$legacy-support` is set to `false`(default), include the component **css variables** like that:

```scss
@include igx-css-vars($igx-snackbar-theme);
```

>[!NOTE]
>If the component is using an [`Emulated`](themes/sass/component-themes.md#view-encapsulation) ViewEncapsulation, you still have to use `:host` because you need a global selector in order to override the variables.

```scss
:host {
    @include igx-css-vars($igx-snackbar-theme);
}
```

### Defining a color palette

Instead of hardcoding the color values like we just did, we can achieve greater flexibility in terms of colors by using the [`igx-palette`]({environment:sassApiUrl}/index.html#function-igx-palette) and [`igx-color`]({environment:sassApiUrl}/index.html#function-igx-color) functions.

`igx-palette` generates a color palette based on the primary and secondary colors that are passed:

```scss
$yellow-color: #FFCD0F;
$black-color: #292826;

$dark-palette: igx-palette($primary: $black-color, $secondary: $yellow-color);
```

And then with [`igx-color`]({environment:sassApiUrl}/index.html#function-igx-color) we can easily retrieve color from the palette.

```scss
$dark-snackbar: igx-snackbar-theme(
    $text-color: igx-color($dark-palette, "secondary", 400),
    $background: igx-color($dark-palette, "primary", 400),
    $button-color: igx-color($dark-palette, "secondary", 400),
    $border-radius: 12px
);
```

>[!NOTE]
>The `igx-color` and `igx-palette` are powerful functions for generating and retrieving colors. Please refer to [`Palettes`](themes/palettes.md) topic for detailed guidance on how to use them.

### Using Schemas

Going further with the theming engine, you can build a robust and flexible structure that benefits from [**schemas**](themes/sass/schemas.md). A **schema** is a recipe of a theme.

Extend one of the two predefined schemas, that are provided for every component, in this case - [`dark-snackbar`]({environment:sassApiUrl}/index.html#variable-_dark-snackbar) schema:

```scss
//  Extending the dark snackbar schema
$dark-snackbar-schema: extend($_dark-snackbar,
    (
        text-color:(
            igx-color: ("secondary", 400)
        ),
        background: (
            igx-color: ("primary", 400)
        ),
        button-color: (
            igx-color: ("secondary", 400)
        ),
        border-radius: 12px
    )
);
```

In order to apply our custom schemas we have to **extend** one of the globals ([`light`]({environment:sassApiUrl}/index.html#variable-light-schema) or [`dark`]({environment:sassApiUrl}/index.html#variable-dark-schema)), which is basically pointing out the components with a custom schema, and after that add it to the respective component themes:

```scss
// Extending the global dark-schema
$custom-dark-schema: extend($dark-schema,(
    igx-snackbar: $dark-snackbar-schema
));

// Defining snackbar theme with the global dark schema
$dark-snackbar: igx-snackbar-theme(
  $palette: $dark-palette,
  $schema: $custom-dark-schema
);
```

Don't forget to include the themes in the same way as it was demonstrated above.

### Demo


<code-view style="height: 150px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/notifications/snackbar-style" >
</code-view>


<div class="divider--half"></div>

## API References
In this article we learned how to use and configure the [`IgxSnackbarComponent`]({environment:angularApiUrl}/classes/igxsnackbarcomponent.html). For more details in regards its API, take a look at the links below:

* [`IgxSnackbarComponent`]({environment:angularApiUrl}/classes/igxsnackbarcomponent.html)

Styles:

* [`IgxSnackbarComponent Styles`]({environment:sassApiUrl}/index.html#function-igx-snackbar-theme)

## Additional Resources

<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.
* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
