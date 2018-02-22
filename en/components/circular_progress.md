---
title: Circular Progress Component
_description: Ignite UI for Angular Circular Progress Indicator component allows developers to display progress in a circle with endless customization options.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Circular Progress components, Angular Circular Progress controls
---

##Circular Progress
<p class="highlight">The Ignite UI for Angular Circular Progress Indicator component provides a visual indicator of an application’s process as it changes. The circular indicator updates its appearance as its state changes.<p>
<div class="divider"></div>

### Circular Progress Demo
<div class="sample-container loading" style="height:400px">
    <iframe id="progressbar-sample-iframe" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/circular-progressbar" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
<button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="progressbar-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>

### Usage
 Circular Progress Indicator can be used to show a user that he is in a process.
To get started with the Ignite UI for Angular Circular Progress,  we should first import import the **IgxProgressBarModule** in the **app.module.ts** file:
```typescript
// app.module.ts

...
import { IgxProgressBarModule } from 'igniteui-angular/main';

@NgModule({
    ...
    imports: [..., IgxProgressBarModule],
    ...
})
export class AppModule {}
```
And now to have a better understanding how everything works, let's create a simple example, in which we will simulate a real process progress, that is
triggered on button click. In order to make out example better we will need to import and some additional modules in the **app.module.ts** file.

```typescript
// app.module.ts
import {
    ..., IgxButtonModule, IgxIconModule, IgxRippleModule
} from 'igniteui-angular/main';

@NgModule({
    ...
    imports: [..., IgxButtonModule, IgxIconModule, IgxRippleModule],
})
export class AppModule {}
```
Notice that the **igx-circular-bar** emits `onProgressChanged` event that outputs object that give us `{currentValue: 65, previousValue: 64}` on each step.

```html
<section class="sample-content">
    <h4 class="sample-title">Circular progress indicator</h4>
    <div class="circular-samples circular-container">
        <igx-circular-bar [value]="currentValue" [max]="100" [animate]="true" (onProgressChanged)="progresChanged($event)"></igx-circular-bar>
    </div>
</section>
<div class="button-container">
    <p>Press the button to start updating the bar</p>
    <button igxButton="fab" igxButtonBackground="#333" igxRipple="white" (click)="tick()">
        <igx-icon fontSet="material" [name]="changeIcon()"></igx-icon>
    </button>
</div>
```

```typescript
...
  public currentValue: number;
  public interval: any;
  @ViewChild(IgxCircularProgressBarComponent) public circularBar: IgxCircularProgressBarComponent;
  public ngOnInit() {
    this.currentValue = 0;
  }
  public changeIcon() {
    return this.interval ? "pause" : "play_arrow";
  }
  public tick() {
    if (this.interval) {
        this.interval = clearInterval(this.interval);
        return;
    }
    this.interval = setInterval(this.updateValue.bind(this), 60);
  }
  public updateValue() {
     this.circularBar.updateProgressSmoothly(this.currentValue += this.randomIntFromInterval(1, 3), 1);
     if (this.circularBar.value > this.circularBar.max + 3) {
       this.interval = clearInterval(this.interval);
     }
  }
  public progresChanged(progress) { ... }
  private randomIntFromInterval(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
```

And now if we set up everything correct we should have the folllowing displayed in our browser:
<div class="sample-container loading" style="height:400px">
    <iframe id="progressbar-sample-iframe" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/circular-progressbar" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
<button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="progressbar-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
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
