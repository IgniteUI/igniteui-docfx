---
title: Linear Progress Component
_description: Display a progress bar and customize its appearance with endless color and striping options with Ignite UI for Angular Linear Progress Bar component. 
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Linear Progress components, Angular Linear Progress controls
---

##Linear Progress

The linear progress bar component provides the ability to display a progress bar and update its appearance as its state changes. This component offers a choice of colors and can be striped or non-striped.

### Usage
```html
<igx-linear-bar [striped]="false" [value]="currentValue" [max]="200">
</igx-linear-bar>
```

### API Summary
| Name   |       Type      |  Description |
|:----------|:-------------:|:------|
| `max` |  number | Set maximum value that can be passed. |
| `type` |  string | Set type of the linear bar. Possible options - `default`, `success`, `info`, `warning` and `danger`. |
| `value` |  number | Set value that indicates the completed bar position. |
| `stripped` |  boolean | Set bar to have striped style. |
| `animate` |  boolean | animation on progress bar. |

### Methods
| Name   |  Description |
|:----------|:------|
| `getValue()` | Return passed value to progress bar to be in range between min(0) and max. |
| `getPercentValue()` | Calculate the percentage based on passed value. |
| `onProgressChanged` | Exposed event, that could be handled to track progress changing |

### Linear progress bar example
<div class="sample-container" style="height: 400px">
    <iframe frameborder="0" seamless width="100%" height="800px" src="https://run.plnkr.co/preview/cj9obkyak000a3b5w5q3c5ax7/"></iframe>
</div>