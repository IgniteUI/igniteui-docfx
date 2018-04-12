---
title: Snackbar Component
_description: Easily integrate a brief, single-line message within your mobile and desktop applications with Ignite UI for Angular Snackbar component.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Snackbar component, Angular Snackbar control
---
##Snackbar
<p class="highlight">The Ignite UI for Angular Snack Bar component provides feedback about an operation with a single-line message, which can include a link to an action such as Undo. The Snack Bar message appears above all other screen elements, located at the bottom of a mobile device screen or at the lower left of larger device screens.</p>
<div class="divider"></div>

### Snackbar Demo
<div class="sample-container loading" style="height: 350px">
    <iframe id="snackbar-sample-iframe" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/snackbar-sample-4" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="snackbar-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>

> [!NOTE]
> To start using Ignite UI for Angular components in your own projects, make sure you have configured all necessary dependencies and have performed the proper setup of your project. You can learn how to do this in the [**installation**](https://www.infragistics.com/products/ignite-ui-angular/getting-started#installation) topic.

### Usage
To get started with the Ignite UI for Angular Snack Bar, let's first import the **IgxSnackbarModule** in our **app.module.ts** file:

```typescript
// app.module.ts

...
import { IgxSnackbarModule } from 'igniteui-angular/main';

@NgModule({
    ...
    imports: [..., IgxSnackbarModule],
    ...
})
export class AppModule {}
```
#### Show Snackbar
In order to display the snackbar component, use its `show()` method and call it on a button click. Use the `message` input to set a text message.

```html
<!--sample.component.html-->

<button igxButton="raised" (click)="snackbar.show()">Delete Message</button>
<div>
    <igx-snackbar #snackbar message="Message deleted"></igx-snackbar>
</div>
```

If the sample is configured properly, a snackbar appears displaying a text message when the button is clicked.

<div class="sample-container loading" style="height: 170px">
    <iframe id="snackbar-sample-iframe" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/snackbar-sample-1" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>

#### Hide/Auto Hide
Once opened, the snackbar disappears after a period specified by the `displayTime` input which is set initially to 4000 milliseconds. This behavior is enabled by default but you can change this by setting `autoHide` to **false**. In this way, the snackbar will remain visible. Using the snackbar `hide()` method, you can close the component in the code.

```html
<!--sample.component.html-->

<button igxButton="raised" (click)="snackbar.show()">Send message</button>
<div>
  <igx-snackbar #snackbar message="Message sent" [autoHide]="false" actionText="CLOSE" (onAction)="close(snackbar)"></igx-snackbar>
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
    <iframe id="snackbar-sample-iframe" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/snackbar-sample-2" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>

#### Display Time
Use `displayTime` and set it to an interval in milliseconds to configure how long the snackbar component is visible. 

```html
<!--sample.component.html-->

<button igxButton="raised" (click)="snackbar.show()">Send message</button>
<div>
  <igx-snackbar #snackbar message="Message sent" displayTime="1000"></igx-snackbar>
</div>
```

If the sample is configured properly, the snackbar auto hides faster.

<div class="sample-container loading" style="height: 170px">
    <iframe id="snackbar-sample-iframe" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/snackbar-sample-3" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>

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
                <igx-icon color="#ff5252">delete</igx-icon>
            </span>
        </div>

    </igx-list-item>

    <igx-snackbar message="Contact deleted" actionText="Undo" (onAction)="restore()"></igx-snackbar>
</igx-list>
```

```typescript
//sample.component.ts 

import { Component, OnInit, ViewChild } from "@angular/core";
import { IgxSnackbarComponent } from "igniteui-angular/main";

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
    <iframe id="snackbar-sample-iframe" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/snackbar-sample-4" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>

<div>
    <button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="snackbar-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>

<div class="divider--half"></div>

### API Summary
The following tables summarize some of the useful **igx-snackbar** component inputs, outputs and methods.
#### Inputs
The following inputs are available in the **igx-snackbar** component:

| Name | Type | Description |
| :--- | :--- | :--- |
| `actionText` | string | Specifies the text to display for the action button.
| `autoHide` | boolean | Specifies whether the snackbar should be automatically hidden after `displayTime`. By default, `autoHide` is set to **true**. |
| `displayTime` | number | Specifies the interval in milliseconds in which the snackbar is visible. By default, `displayTime` is set to 4000 milliseconds. |
| `isVisible` | boolean | Specifies the component visual state. By default, `isVisible` is set to **false**.|
| `message` | string | Specifies the displayed message. |

<div class="divider--half"></div>

#### Outputs
The following events are available in the **igx-snackbar** component:

| Name | Description |
| :--- | :--- |
| `animationStarted`  | Emits an event when the snackbar animation starts. |
| `animationDone`  | Emits an event when the snackbar animation ends. |
| `onAction`  | Emits an event when an action is executed and provides a reference to the snackbar component as argument. |

#### Methods

The following methods are available for the **igx-snackbar** component:

| Signature       | Description                     |
| :-------------- | :------------------------------ |
| `show()`  | Shows the snackbar component and hides it after `displayTime` if `autoHide` is set to **true**. |
| `hide()`  | Hides the snackbar component. |

###Additional Resources

<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.
* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
