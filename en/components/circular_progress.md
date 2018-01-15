---
title: Circular Progress Component
_description: Ignite UI for Angular Circular Progress Indicator component allows developers to display progress in a circle with endless customization options.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Circular Progress components, Angular Circular Progress controls
---

##Circular Progress
<p class="highlight">The Ignite UI for Angular Circular Progress Indicator component provides a visual indicator of an application’s process as it changes. The circular indicator updates its appearance as its state changes.<p>
<div class="divider"></div>

### Circular Progress Demo
<div class="sample-container" style="height:650px">
    <iframe frameborder="0" seamless width="100%" height="100%" src="https://{environment:demosBaseUrl}/progressbar"></iframe>
</div>
<div class="divider--half"></div>

### Usage
```html
<igx-circular-bar (onProgressChanged)="f($event)" [value]="currentValue">
</igx-circular-bar>
```
<div class="divider--half"></div>

### API
| Name   |       Type      |  Description |
|:----------|:-------------:|:------|
| `max` |  number | Set maximum value that can be passed. Default `max` value is 100. |
| `value` |  number | Set value that indicates the completed bar position. |
| `animate` |  boolean | animation on progress bar. |
<div class="divider--half"></div>

### Methods
| Name   |  Description |
|:----------|:------|
| `getValue()` | Return passed value to progress bar to be in range between min(0) and max. |
| `getPercentValue()` | Calculate the percentage based on passed value. |
| `onProgressChanged` | Exposed event, which could be handled to track progress changing |
<div class="divider--half"></div>
