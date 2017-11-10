---
title: Linear Progress Component
_description: Display a progress bar and customize its appearance with endless color and striping options with Ignite UI for Angular Linear Progress Bar component. 
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Linear Progress components, Angular Linear Progress controls
---

##Linear Progress
<p class="highlight">The Ignite UI for Angular Linear Progress Bar Indicator component provides a visual indicator of an application’s process as it changes. The indicator updates its appearance as its state changes. The indicator can be styled with a choice of colors in stripes or solids.</p>
<div class="divider"></div>

### Usage
```html
<igx-linear-bar [striped]="false" [value]="currentValue" [max]="200">
</igx-linear-bar>
```
<div class="divider--half"></div>

### API
| Name   |       Type      |  Description |
|:----------|:-------------:|:------|
| `max` |  number | Set maximum value that can be passed. |
| `type` |  string | Set type of the linear bar. Possible options - `default`, `success`, `info`, `warning` and `danger`. |
| `value` |  number | Set value that indicates the completed bar position. |
| `stripped` |  boolean | Set bar to have striped style. |
| `animate` |  boolean | animation on progress bar. |
<div class="divider--half"></div>

### Methods
| Name   |  Description |
|:----------|:------|
| `getValue()` | Return passed value to progress bar to be in range between min(0) and max. |
| `getPercentValue()` | Calculate the percentage based on passed value. |
| `onProgressChanged` | Exposed event, that could be handled to track progress changing |
<div class="divider--half"></div>

### Linear Progress Demo 
<div class="sample-container" style="height: 400px">
    <iframe frameborder="0" seamless width="100%" height="800px" src="https://embed.plnkr.co/C8rf1s2ImziUZRnskkjp/?show=preview&sidebar=false"></iframe>
</div>