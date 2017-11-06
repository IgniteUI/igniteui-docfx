---
title: Snackbar Component
_description: Easily integrate a brief, single-line message within your mobile and desktop applications with Ignite UI for Angular Snackbar component. 
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Snackbar component, Angular Snackbar control
---
##Snackbar

**igx-snackbar** provides feedback about an operation by showing brief message at the bottom of the screen on mobile and lower left on larger devices. IgxSnackbar will appear above all  other elements on screen and only one can be displayed at a time.

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

### Snackbar example
<div class="sample-container" style="height: 400px">
    <iframe frameborder="0" seamless width="100%" height="800px" src="https://run.plnkr.co/preview/cj9ocym5b00093b5wbekq9xgm/"></iframe>
</div>