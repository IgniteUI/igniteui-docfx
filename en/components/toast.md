---
title: Toast Component
_description: With Ignite UI for Angular Toast component, users can provide quick, non-interactive messages to end users within their application.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Toast component, Angular Toast control
---

##Toast
<p class="highlight">The Toast component provides information and warning messages that are non-interactive and cannot be dismissed by users. Notifications can be displayed at the bottom, middle, or top of the page.</p>
<div class="divider"></div>

### Toast Demo
<div class="sample-container loading" style="height: 928px">
    <iframe id="toast-sample-iframe" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/toast" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="toast-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>

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

You can hide the toast by using `toast.hide()` method.
<div class="divider--half"></div>

###Positioning

```html
<button (click)="toast.show()">Show toast</button>

<igx-toast #toast
           message="Something happened!"
           position="IgxToastPosition.Top">
</igx-toast>
```

You can modify the position of the toast by setting `postion="IgxToastPosition.Top"`.
<div class="divider--half"></div>

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
<div class="divider--half"></div>
