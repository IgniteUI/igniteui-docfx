---
title: Badge Component
_description: Display an active count or icon in a predefined style to decorate other components anywhere in an application with Ignite UI for Angular Badge control.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Badge components, Angular Badge controls
---

##Badge
<p class="highlight">The Ignite UI for Angular Badge is an absolutely positioned element that can be used to decorate avatars, navigation menus, or other components in the app that require an active indicator. Badges can display an active count, and can be designed as icons with a predefined style to communicate information, success, warnings, or errors.</p>
<div class="divider"></div>

### Badge Demo
<div class="sample-container loading" style="height:530px">
    <iframe id="badge-sample-iframe" src='{environment:demosBaseUrl}/badge' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
<button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="badge-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>

### Usage
```html
<igx-badge value="8"></igx-badge>
```
<div class="divider--half"></div>

### Examples

Using `igx-badge` with the `igx-avatar` component to show active status.
```html
<igx-avatar [src]="src" [roundShape]="true">
    <igx-badge type="info" value="8"></igx-badge>
</igx-avatar>
```
<div class="divider--half"></div>

### API Summary
| Name   |      Type      |  Description |
|:----------|:-------------:|:------|
| `type` | string | Set the type of the badge to either `default`, `info`, `success`, `warning`, or `error`. This will change the background color of the badge according to the values set in the default theme. |
| `position` | string | Set the position of the badge relative to its parent container to either `top-right`, `top-left`, `bottom-right`, or `bottom-left`. |
| `value` | string | Set the value to be displayed inside the badge. |
| `icon` | string | Set an icon for the badge from the material icons set. Will not be displayed if `value` for the badge is already set. |
<div class="divider--half"></div>


