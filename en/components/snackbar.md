---
title: Snackbar Component
_description: Easily integrate a brief, single-line message within your mobile and desktop applications with Ignite UI for Angular Snackbar component.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Snackbar component, Angular Snackbar control
---
##Snackbar
<p class="highlight">The Ignite UI for Angular Snack Bar component provides feedback about an operation with a single-line message, which can include a link to an action such as Undo. The Snack Bar message appears above all other screen elements, located at the bottom of a mobile device screen or at the lower left of larger device screens.</p>
<div class="divider"></div>

### Snackbar Demo
<div class="divider--half"></div>

<div class="sample-container loading" style="height: 140px">
    <iframe id="snackbar-sample-1-iframe" src='{environment:demosBaseUrl}/notifications/snackbar-sample-1' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="snackbar-sample-1-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>

<div class="divider--half"></div>

### Usage

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
#### Show Snackbar
In order to display the snackbar component, use its [`show()`]({environment:angularApiUrl}/classes/igxsnackbarcomponent.html#show) method and call it on a button click.

```html
<!--sample.component.html-->

<button igxButton="raised" (click)="snackbar.show()">Delete Message</button>
<div>
    <igx-snackbar #snackbar>Message deleted</igx-snackbar>
</div>
```

If the sample is configured properly, you should see the demo sample. A snackbar appears displaying a text message when the button is clicked.

#### Hide/Auto Hide
Once opened, the snackbar disappears after a period specified by the [`displayTime`]({environment:angularApiUrl}/classes/igxsnackbarcomponent.html#displaytime) input which is set initially to 4000 milliseconds. This behavior is enabled by default but you can change this by setting [`autoHide`]({environment:angularApiUrl}/classes/igxsnackbarcomponent.html#autohide) to **false**. In this way, the snackbar will remain visible. Using the snackbar [`hide()`]({environment:angularApiUrl}/classes/igxsnackbarcomponent.html#hide) method, you can close the component in the code.

```html
<!--sample.component.html-->

<button igxButton="raised" (click)="snackbar.show()">Send message</button>
<div>
  <igx-snackbar #snackbar [autoHide]="false" actionText="CLOSE" (onAction)="close(snackbar)">Message sent</igx-snackbar>
</div>
```

```typescript
// sample.component.ts

public close(element) {
    element.hide();
}
```

If the sample is configured properly, a snackbar appears when the button is clicked showing message and action button. The auto hide feature is disabled and the snackbar disappears on 'CLOSE' button click.

<div class="sample-container loading" style="height: 170px">
    <iframe id="snackbar-sample-2-iframe" frameborder="0" seamless="" width="100%" height="100%" data-src="{environment:demosBaseUrl}/notifications/snackbar-sample-2" class="lazyload"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="snackbar-sample-2-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>

#### Display Time
Use [`displayTime`]({environment:angularApiUrl}/classes/igxsnackbarcomponent.html#displaytime) and set it to an interval in milliseconds to configure how long the snackbar component is visible. By default, as we said, it's initially set to 4000 miliseconds.

#### Customize Snackbar
We can also customize the content of the Snackbar to display more complex elements than a message and a button. If we want to show the snackbar while loading a file, for example, a loading animation could be added to its content.

```html
<!--sample.component.html-->
<button igxButton="raised" (click)="snackbar.show()">Load file</button>
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

<div class="sample-container loading" style="height: 170px">
    <iframe id="snackbar-sample-5-iframe" frameborder="0" seamless="" width="100%" height="100%" data-src="{environment:demosBaseUrl}/notifications/snackbar-sample-5" class="lazyload"></iframe>
</div>

<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="snackbar-sample-5-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>

</div>

#### Snackbar in list
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
                <igx-icon color="#ff5252">delete</igx-icon>
            </span>
        </div>

    </igx-list-item>

    <igx-snackbar actionText="Undo" (onAction)="restore()">Contact deleted</igx-snackbar>
</igx-list>
```

```typescript
//sample.component.ts

import { Component, OnInit, ViewChild } from "@angular/core";
import { IgxSnackbarComponent } from 'igniteui-angular';

...
@ViewChild(IgxSnackbarComponent)
public snackbar: IgxSnackbarComponent;
public navItems: any[];
public deletedItems = [];

constructor() { }

public ngOnInit() {
    this.navItems = [{
        avatar: "assets/images/avatar/2.jpg",
        text: "Richard Mahoney"
    },
    {
        avatar: "assets/images/avatar/4.jpg",
        text: "Lisa Landers"
    },
    {
        avatar: "assets/images/avatar/14.jpg",
        text: "Marianne Taylor"
    },
    {
        avatar: "assets/images/avatar/17.jpg",
        text: "Ward Riley"
    }];
  }

public delete(item) {
    this.deletedItems.push([item, this.navItems.indexOf(item)]);
    this.navItems.splice(this.navItems.indexOf(item), 1);
    this.snackbar.show();
}

public restore() {
    const [item, index] = this.deletedItems.pop();
    this.navItems.splice(index, 0, item);
    this.snackbar.hide();
}

```

<div class="sample-container loading" style="height: 350px">
    <iframe id="snackbar-sample-4-iframe" frameborder="0" seamless="" width="100%" height="100%" data-src="{environment:demosBaseUrl}/notifications/snackbar-sample-4" class="lazyload"></iframe>
</div>

<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="snackbar-sample-4-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>

### Styling

To get started with styling the snackbar, we need to import the index file, where all the theme functions and component mixins live:

```scss
@import '~igniteui-angular/lib/core/styles/themes/index';
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

#### Including themes

<div class="divider"></div>

The last step is to **include** the component theme in our application.

If `$legacy-support` is set to `true`, include the **component theme** like that:

```scss
 @include igx-snackbar($igx-snackbar-theme);
```
>[!NOTE]
>If the component is using an [`Emulated`](../themes/component-themes.md#view-encapsulation) ViewEncapsulation, it is necessary to `penetrate` this encapsulation using `::ng-deep`

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
>If the component is using an [`Emulated`](themes/component-themes.md#view-encapsulation) ViewEncapsulation, you still have to use `:host` because you need a global selector in order to override the variables.

```scss
:host {
    @include igx-css-vars($igx-snackbar-theme);
}
```

#### Defining a color palette

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
>The `igx-color` and `igx-palette` are powerful functions for generating and retrieving colors. Please refer to [`Palettes`](themes/palette.md) topic for detailed guidance on how to use them.

#### Using Schemas

Going further with the theming engine, you can build a robust and flexible structure that benefits from [**schemas**](themes/schemas.md). A **schema** is a recipe of a theme.

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

#### Demo

<div class="sample-container loading" style="height: 150px">
    <iframe id="snackbar-style-iframe" frameborder="0" seamless="" width="100%" height="100%" data-src="{environment:demosBaseUrl}/notifications/snackbar-style" class="lazyload no-theming"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="snackbar-style-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>

<div class="divider--half"></div>

### API References
In this article we learned how to use and configure the [`IgxSnackbarComponent`]({environment:angularApiUrl}/classes/igxsnackbarcomponent.html). For more details in regards its API, take a look at the links below:

* [`IgxSnackbarComponent`]({environment:angularApiUrl}/classes/igxsnackbarcomponent.html)

Styles:

* [`IgxSnackbarComponent Styles`]({environment:sassApiUrl}/index.html#function-igx-snackbar-theme)

###Additional Resources

<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.
* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
