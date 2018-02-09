---
title: Navbar Component
_description: Ignite UI for Angular Navbar control provides optimal UI experience with seamless integration to allow users to move within an application smoothly.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular NavBar component, Angular Navbar control
---

##Navbar
<p class="highlight">The Ignite UI for Angular Navigation Bar component informs the user of their current position in an app, and helps them move back (much like the “back” button in a browser). The Navigation Bar can also provide links to quick actions such as search or favorite, helping users navigate smoothly through an application without trying to move to invalid routes or states. The bar sits at the top of the container it is placed in.</p>
<div class="divider"></div>

### Navbar Demo
<div class="sample-container loading" style="height: 930px">
    <iframe frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/navbar" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div class="divider--half"></div>

### Usage
```html
<igx-navbar title="Settings"></igx-navbar>
```

You can be more descriptive and set title `title="User settings"`.

#### With back button
<div class="divider--half"></div>

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
<div class="divider--half"></div>
