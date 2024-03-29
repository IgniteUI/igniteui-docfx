---
title: Snackbar Component
_description: Easily integrate a brief, single-line message within your mobile and desktop applications with Ignite UI for Angular Snackbar component.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Snackbar component, Angular Snackbar control
_language: kr
---
##Snackbar
<p class="highlight">The Ignite UI for Angular Snack Bar component provides feedback about an operation with a single-line message, which can include a link to an action such as Undo. The Snack Bar message appears above all other screen elements, located at the bottom of a mobile device screen or at the lower left of larger device screens.</p>
<div class="divider"></div>

### Snackbar Demo

<code-view style="height: 350px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/notifications/snackbar-sample-4" >
</code-view>

<div class="divider--half"></div>

> [!NOTE]
> To start using Ignite UI for Angular components in your own projects, make sure you have configured all necessary dependencies and have performed the proper setup of your project. You can learn how to do this in the [**installation**](https://www.infragistics.com/products/ignite-ui-angular/getting-started#installation) topic.

### Usage
To get started with the Ignite UI for Angular Snack Bar, let's first import the `IgxSnackbarModule` in our **app.module.ts** file:

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

If the sample is configured properly, a snackbar appears displaying a text message when the button is clicked.

<div class="sample-container loading" style="height: 170px">
    <iframe id="snackbar-sample-iframe" frameborder="0" seamless width="100%" height="100%" data-src="{environment:demosBaseUrl}/notifications/snackbar-sample-1" class="lazyload"></iframe>
</div>

#### Hide/Auto Hide
Once opened, the snackbar disappears after a period specified by the [`displayTime`]({environment:angularApiUrl}/classes/igxsnackbarcomponent.html#displaytime) input which is set initially to 4000 milliseconds. This behavior is enabled by default but you can change this by setting [`autoHide`]({environment:angularApiUrl}/classes/igxsnackbarcomponent.html#autohide) to **false**. In this way, the snackbar will remain visible. Using the snackbar [`hide()`]({environment:angularApiUrl}/classes/igxsnackbarcomponent.html#hide) method, you can close the component in the code.

```html
<!--sample.component.html-->

<button igxButton="raised" (click)="snackbar.show()">Send message</button>
<div>
  <igx-snackbar #snackbar [autoHide]="false" actionText="CLOSE" (clicked)="close(snackbar)">Message sent</igx-snackbar>
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
    <iframe id="snackbar-sample-iframe" frameborder="0" seamless width="100%" height="100%" data-src="{environment:demosBaseUrl}/notifications/snackbar-sample-2" class="lazyload"></iframe>
</div>

#### Display Time
Use [`displayTime`]({environment:angularApiUrl}/classes/igxsnackbarcomponent.html#displaytime) and set it to an interval in milliseconds to configure how long the snackbar component is visible.

```html
<!--sample.component.html-->

<button igxButton="raised" (click)="snackbar.show()">Send message</button>
<div>
  <igx-snackbar #snackbar displayTime="1000">Message sent</igx-snackbar>
</div>
```

If the sample is configured properly, the snackbar auto hides faster.

<div class="sample-container loading" style="height: 170px">
    <iframe id="snackbar-sample-iframe" frameborder="0" seamless width="100%" height="100%" data-src="{environment:demosBaseUrl}/notifications/snackbar-sample-3" class="lazyload"></iframe>
</div>

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

<code-view style="height: 170px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/notifications/snackbar-sample-5" >
</code-view>

#### Snackbar in list
Having all main snackbar features covered, we can integrate this component in more interesting scenario. We can use the snackbar to provide a notification and ability to revert actions.

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


<code-view style="height: 350px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/notifications/snackbar-sample-4" >
</code-view>


<div class="divider--half"></div>

### API References
In this article we learned how to use and configure the [`IgxSnackbarComponent`]({environment:angularApiUrl}/classes/igxsnackbarcomponent.html). For more details in regards its API, take a look at the links below:

* [`IgxSnackbarComponent`]({environment:angularApiUrl}/classes/igxsnackbarcomponent.html)

Styles:

* [`IgxSnackbarComponent Styles`]({environment:sassApiUrl}/index.html#function-snackbar-theme)

###Additional Resources

<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.
* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
