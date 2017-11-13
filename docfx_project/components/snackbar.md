---
title: Snackbar Component
_description: Easily integrate a brief, single-line message within your mobile and desktop applications with Ignite UI for Angular Snackbar component. 
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Snackbar component, Angular Snackbar control
---
##Snackbar
<p class="highlight">The Snack Bar component provides feedback about an operation with a single-line message, which can include a link to an action such as Undo. The Snack Bar message appears above all other screen elements, located at the bottom of a mobile device screen or at the lower left of larger device screens.</p>
<div class="divider"></div>

### Snackbar Demo
<div class="sample-container" style="height: 500px">
    <iframe frameborder="0" seamless width="100%" height="100%" src="https://embed.plnkr.co/zSe5yxEigtRSEZQoKdzy/?show=preview&sidebar=false"></iframe>
</div>
<div class="divider--half"></div>

### Usage 
**Snackbar with button and action**
```html
<button (click)="snackbar.show()">Show snackbar</button>

<igx-snackbar #snackbar
            message="This is a simple snackbar!">
</igx-snackbar>
```

You can be more descriptive and set message `message="This is a simple snackbar!"`.

You can show the snacbar by using `snacbar.show()` method.


**Snackbar with button and action**
```html
<button (click)="snackbar.show()">Show snackbar</button>

<igx-snackbar #snackbar
             message="This is a snackbar with a button and action!"
             actionName="Dismiss"
             (onAction)="snackbar.hide()">
</igx-snackbar>
```

You can set the title of the button by setting `actionName="Dissmis"`;

You can hide the Snackbar by using `snackbar.hide()` method.

The Snackbar will be automatically hidden after 10000 milliseconds, this can be controller by the
`displayTime` attribute, the automatic hiding can be also controller by using the `autoHide` attribute.
<div class="divider--half"></div>