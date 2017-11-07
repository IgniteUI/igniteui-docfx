---
title: Navbar Component
_description: Ignite UI for Angular Navbar control provides optimal UI experience with seamless integration to allow users to move within an application smoothly.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular NavBar component, Angular Navbar control
---

##Navbar
**igx-navbar** is position on top and represents current state and enables a user defined action.

### Usage
```html
<igx-navbar title="Settings">
</igx-navbar>
```

You can be more descriptive and set title `title="User settings"`.

#### With back button

```html
<igx-navbar title="Settings"
            actionButtonIcon="arrow_back"
            [isActionButtonVisible]="canGoBack()"
            (onAction)="navigateBack()">
</igx-navbar>
```

You can set the title of the navbar by setting `title="Settings"`;

You can set the action button icon of the navbar by setting `actionButtonIcon="arrow_back"`;

You can set the visible state of the navbar by setting `isActionButtonVisible="true"`;

You can set the action of the navbar button by setting `(onAction)="executeAction()"`;

### Demo
<div class="sample-container" style="height: 600px">
    <iframe frameborder="0" seamless width="100%" height="800px" src="https://embed.plnkr.co/CsSNXnyAdtcJktBOssOB/?show=preview&sidebar=false"></iframe>
</div>