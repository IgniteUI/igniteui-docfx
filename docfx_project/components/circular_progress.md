---
title: Circular Progress Component
_description: Ignite UI for Angular Circular Progress Indicator component allows developers to display progress in a circle with endless customization options.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Circular Progress components, Angular Circular Progress controls
---

##Circular Progress
The `circular` progress indicator component provides the ability to display progress in a circle and update its appearance as its state changes.  

### Usage
```html
<igx-circular-bar (onProgressChanged)="f($event)" [value]="currentValue">
</igx-circular-bar>
```

### API Summary
| Name   |       Type      |  Description |
|:----------|:-------------:|:------|
| `max` |  number | Set maximum value that can be passed. Default `max` value is 100. |
| `value` |  number | Set value that indicates the completed bar position. |
| `animate` |  boolean | animation on progress bar. |

### Methods
| Name   |  Description |
|:----------|:------|
| `getValue()` | Return passed value to progress bar to be in range between min(0) and max. |
| `getPercentValue()` | Calculate the percentage based on passed value. |
| `onProgressChanged` | Exposed event, that could be handled to track progress changing |

### Circular progress bar example
<div class="sample-container" style="height: 400px">
    <iframe frameborder="0" seamless width="100%" height="800px" src="https://run.plnkr.co/preview/cj9oblr9u000a3b5w02w05u42/"></iframe>
</div>