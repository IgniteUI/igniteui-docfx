---
title: Toast Component
_description: With Ignite UI for Angular Toast component, users can provide quick, non-interactive messages to end users within their application. 
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Toast component, Angular Toast control
---

##Toast
**igx-toast** IgxToast provides information and warning messages. They could not be dismissed, are non-interactive and can appear on top, middle and the bottom of the screen.

###Usage

```html
<button (click)="toast.show()">Show toast</button>
<button (click)="toast.hide()">Hide toast</button>

<igx-toast #toast
           message="Something happened!">
</igx-toast>
```

You can be more descriptive and set message `message="Something happened!"`.

You can show the toast by using `toast.show()` method.

You can show hide toast by using `toast.hide()` method.

###Positioning

```html
<button (click)="toast.show()">Show toast</button>

<igx-toast #toast
           message="Something happened!"
           position="IgxToastPosition.Top">
</igx-toast>
```

You can modify the position of the toast by setting `postion="IgxToastPosition.Top"`.

###Events

```html
<button (click)="toast.show()">Show toast</button>

<igx-toast #toast
           message="Something happened!"
           (onShowing)="onToastShowing($event)"
           (onShown)="onToastShown($event)"
           (onHiding)="onToastShowing($event)"
           (onHidden)="onToastHidden($event)">
</igx-toast>
```

You can handle the onShowing event by using `(onShowing)="someFunc($event)"`.
You can handle the onShown event by using `(onShowing)="someFunc($event)"`.
You can handle the onHiding event by using `(onHiding)="someFunc($event)"`.
You can handle the onHidden event by using `(onHidden)="someFunc($event)"`.