---
title: Circular Progress Component
_description: Ignite UI for Angular Circular Progress Indicator component allows developers to display progress in a circle with endless customization options.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Circular Progress components, Angular Circular Progress controls
_language: kr
---

##Circular Progress
<p class="highlight">The Ignite UI for Angular Circular Progress Indicator component provides a visual indicator of an application’s process as it changes. The circular indicator updates its appearance as its state changes.<p>
<div class="divider"></div>

### Circular Progress Demo

<code-view style="height:400px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/data-display/circular-progressbar" >
</code-view>

<div class="divider--half"></div>

### Usage
 Circular Progress Indicator can be used to show a user that he is in a process.
To get started with the Ignite UI for Angular Circular Progress,  we should first import import the **IgxProgressBarModule** in the **app.module.ts** file:
```typescript
// app.module.ts

...
import { IgxProgressBarModule } from 'igniteui-angular';

@NgModule({
    ...
    imports: [..., IgxProgressBarModule],
    ...
})
export class AppModule {}
```
And now to have a better understanding how everything works, let's create a simple example, in which we will simulate a real process progress, that is
triggered on button click. In order to make our example better we will need to import some additional modules in the **app.module.ts** file.

```typescript
// app.module.ts
import {
    ..., IgxButtonModule, IgxIconModule, IgxRippleModule
} from 'igniteui-angular';

@NgModule({
    ...
    imports: [..., IgxButtonModule, IgxIconModule, IgxRippleModule],
})
export class AppModule {}
```
Notice that the **igx-circular-bar** emits [`onProgressChanged`]({environment:angularApiUrl}/classes/igxcircularprogressbarcomponent.html#onprogresschanged) event that outputs an object that gives us `{currentValue: 65, previousValue: 64}` on each step.

```html
<section class="sample-content">
    <article class="sample-column">
      <h5>Text is hidden</h5>
      <div class="circular-container">
        <igx-circular-bar [value]="currentValue" [max]="100" [animate]="true" [textVisibility]="false" (onProgressChanged)="progresChanged($event)"></igx-circular-bar>
      </div>
    </article>
    <article class="sample-column">
      <h5>Text is displayed</h5>
      <div class="circular-container">
        <igx-circular-bar [value]="currentValue" [max]="100" [animate]="true" [textVisibility]="true" (onProgressChanged)="progresChanged($event)"></igx-circular-bar>
      </div>
     </article>
</section>
<div class="button-container">
    <p>Press the button to start updating the bar</p>
    <button igxButton="fab" igxButtonBackground="#333" igxRipple="white" (click)="tick()">
        <igx-icon fontSet="material">{{changeIcon()}}</igx-icon>
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

And now if we set up everything correctly we should have the folllowing displayed in our browser:

<code-view style="height:400px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/data-display/circular-progressbar" >
</code-view>

<div class="divider--half"></div>

> [!NOTE]
> The default progress update is **1% of the [`max`]({environment:angularApiUrl}/classes/igxlinearprogressbarcomponent.html#max) value**, this occurs when the [`step`]({environment:angularApiUrl}/classes/igxlinearprogressbarcomponent.html#step) value is not defined. For faster progress, the [`step`]({environment:angularApiUrl}/classes/igxlinearprogressbarcomponent.html#step) value should be defined greater than (**[`max`]({environment:angularApiUrl}/classes/igxlinearprogressbarcomponent.html#max) * 1%**),  for slower, it should be less than the default progress update.

> When providing a value for the [`step`]({environment:angularApiUrl}/classes/igxlinearprogressbarcomponent.html#step) input, define this value greater than the [`value`]({environment:angularApiUrl}/classes/igxlinearprogressbarcomponent.html#value) input, otherwise there will be only one update, which gets **the value that is passed for progress update**.   
<div class="divider--half"></div>

### API
<div class="divider--half"></div>

* [IgxCircularProgressBarComponent]({environment:angularApiUrl}/classes/igxcircularprogressbarcomponent.html)
* [IgxCircularProgressBarComponent Styles]({environment:sassApiUrl}/index.html#function-igx-progress-circular-theme)
