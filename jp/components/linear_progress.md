---
title: Linear Progress Component
_description: Display a progress bar and customize its appearance with endless color and striping options with Ignite UI for Angular Linear Progress Bar component.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Linear Progress components, Angular Linear Progress controls
---

##Linear Progress
<p class="highlight">The Ignite UI for Angular Linear Progress Bar Indicator component provides a visual indicator of an application’s process as it changes. The indicator updates its appearance as its state changes. The indicator can be styled with a choice of colors in stripes or solids.</p>
<div class="divider"></div>

### Linear Progress Demo
<div class="sample-container loading" style="height:550px">
    <iframe id="progressbar-sample-iframe" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/linear-progressbar-sample-1" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
<button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="progressbar-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>

### Usage
To get started with the Ignite UI for Angular Linear Progress, we should first import the **IgxProgressBarModule** in the **app.module.ts** file:
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

And now let's create a simple example in which we are going to simulate a continuous process, that is triggered on button click. In addition you can notice
that the speed of loading depends on the `max` attribute that we are set to our `igx-linear-bar`. In first case our max value is set to 200 and loads quite slower,
than in the second where is set to 100(default value). So let's see the code...

```html
...
<section class="sample-content">
    <h4 class="sample-title">Linear progress bar</h4>
    <div class="linear-container">
        <h5>Max value: 200</h5>
        <igx-linear-bar [striped]="false" [max]="200" [value]="0"></igx-linear-bar>
    </div>
    <div class="linear-container">
        <h5>Max value: 100</h5>
        <igx-linear-bar [striped]="false" [max]="100" [value]="0" type="danger" ></igx-linear-bar>
    </div>
</section>
....
<div class="button-container">
    <p>Press the button to start updating the bars</p>
    <button igxButton="fab" igxButtonBackground="#333" igxRipple="white" (click)="tick()">
        <igx-icon fontSet="material" [name]="changeIcon()"></igx-icon>
    </button>
</div>
...
```
```typescript
  @ViewChildren(IgxLinearProgressBarComponent, { read: IgxLinearProgressBarComponent })
  public linearBars: QueryList<IgxLinearProgressBarComponent>;

  public interval: any;

  public updateValue() {
      this.linearBars.map((bar) => bar.value += this.randomIntFromInterval(1, 3));
      const shouldStop = this.linearBars.toArray().every((bar) => bar.value >= bar.max);
      if (shouldStop) {
        this.interval = clearInterval(this.interval);
      }
  }

  public tick() {
      if (this.interval) {
          this.interval = clearInterval(this.interval);
          return;
      }
      this.interval = setInterval(this.updateValue.bind(this), 60);
  }

  private randomIntFromInterval(min: number, max: number) {
      return Math.floor(Math.random() * (max - min + 1) + min);
  }
```
If all went well, you should see something like the following in your browser:
<div class="sample-container loading" style="height:500px">
    <iframe id="linear-progressbar-iframe" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/linear-progressbar" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
<button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="linear-progressbar-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>
And now let's enhance our example and create a different types of loading bars, that can be striped or not.
```html
...
<section class="sample-content">
    <h4 class="sample-title">Linear progress bar</h4>
    <div class="linear-container">
        <igx-linear-bar type="default"></igx-linear-bar>
        <igx-linear-bar type="info" [striped]="true"></igx-linear-bar>
        <igx-linear-bar type="success"></igx-linear-bar>
        <igx-linear-bar type="warning" [striped]="true"></igx-linear-bar>
        <igx-linear-bar type="danger"></igx-linear-bar>
    </div>
</section>
<div class="button-container">
    <p>Press the button to start updating the bars</p>
    <button igxButton="fab" igxButtonBackground="#333" igxRipple="white" (click)="tick()">
        <igx-icon fontSet="material" [name]="changeIcon()"></igx-icon>
    </button>
</div>
<div class="button-container">
    <p>Press the button to reset the bars</p>
    <button igxButton="fab" igxButtonBackground="#333" igxRipple="white" (click)="reset()" [disabled]="disable">
        <igx-icon name="replay" color="white" isActive="true" ></igx-icon>
    </button>
</div>
...
```

```typescript
  @ViewChildren(IgxLinearProgressBarComponent, { read: IgxLinearProgressBarComponent })
  public linearBars: QueryList<IgxLinearProgressBarComponent>;

  public disable = false;
  public interval: any;

  public updateValue() {
    this.disable = true;
    this.linearBars.map((bar) => bar.value += this.randomIntFromInterval(1, 3));
    const shouldStop = this.linearBars.toArray().every((bar) => bar.value >= bar.max);
    if (shouldStop) {
    this.disable = false;
    this.interval = clearInterval(this.interval);
    }
  }

  public tick() {
    if (this.interval) {
        this.interval = clearInterval(this.interval);
        this.disable = false;
        return;
    }
    this.interval = setInterval(this.updateValue.bind(this), 60);
  }

  public reset() {
    this.linearBars.toArray().forEach((bar) => bar.value = 0);
  }

  private randomIntFromInterval(min: number, max: number) {
      return Math.floor(Math.random() * (max - min + 1) + min);
  }
```
So if we set up everything correct, let's see what happened in the browser:
<div class="sample-container loading" style="height:550px">
    <iframe id="linear-sample-1-iframe" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/linear-progressbar-sample-1" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
<button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="linear-sample-1-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>

Finally let's make our sample even more exciting and good as we set the following attributes: `textAlign`, `textVisibility`, `textTop` and `text`.
And now let's see how looks like our code:
```html
...
<section class="sample-content">
    <h4 class="sample-title">Linear progress bar</h4>
        <div class="linear-container">
        <h5>This is the default appearance of IgxLinearProgressBarComponent</h5>
        <igx-linear-bar type="default"></igx-linear-bar>
        <h5>Text is aligned CENTER</h5>
        <igx-linear-bar type="info" [textTop]="false" [textAlign]="positionCenter" [striped]="true"></igx-linear-bar>
        <h5>Text is aligned END</h5>
        <igx-linear-bar type="success" [textTop]="false" [textAlign]="positionEnd"></igx-linear-bar>
        <h5> Set your custom text</h5>
        <igx-linear-bar type="warning" [text]="'Custom text'" [textAlign]="positionCenter" [striped]="true"></igx-linear-bar>
        <h5>Text is set above the line</h5>
        <igx-linear-bar type="danger" [textTop]="true"></igx-linear-bar>
        <h5>Witout text</h5>
        <igx-linear-bar type="default" [textVisibility]="false"></igx-linear-bar>
        </div>
</section>
<div class="button-container">
    <p>Press the button to start updating the bars</p>
    <button igxButton="fab" igxButtonBackground="#333" igxRipple="white" (click)="tick()">
        <igx-icon fontSet="material" [name]="changeIcon()"></igx-icon>
    </button>
</div>
<div class="button-container">
    <p>Press the button to reset the bars</p>
    <button igxButton="fab" igxButtonBackground="#333" igxRipple="white" (click)="reset()" [disabled]="disable">
        <igx-icon name="replay" color="white" isActive="true" ></igx-icon>
    </button>
</div>
...
```

And do not forget to firts import `IgxTextAlign` in your component.

```typescript
import { ..., IgxTextAlign } from "igniteui-angular/main";
.....
export class LinearProgressbarSample2Component implements OnInit {
  @ViewChildren(IgxLinearProgressBarComponent, { read: IgxLinearProgressBarComponent })
  public linearBars: QueryList<IgxLinearProgressBarComponent>;

  public disable = false;
  public interval: any;
  public positionCenter: IgxTextAlign;
  public positionEnd: IgxTextAlign;

  public ngOnInit() {
    this.positionCenter = IgxTextAlign.CENTER;
    this.positionEnd = IgxTextAlign.END;
  }

  public updateValue() {
    this.disable = true;
    this.linearBars.map((bar) => bar.value += this.randomIntFromInterval(1, 3));
    const shouldStop = this.linearBars.toArray().every((bar) => bar.value >= bar.max);
    if (shouldStop) {
    this.disable = false;
    this.interval = clearInterval(this.interval);
    }
  }

  public tick() {
    if (this.interval) {
        this.interval = clearInterval(this.interval);
        this.disable = false;
        return;
    }
    this.interval = setInterval(this.updateValue.bind(this), 60);
  }

  public reset() {
    this.linearBars.toArray().forEach((bar) => bar.value = 0);
  }

  private randomIntFromInterval(min: number, max: number) {
      return Math.floor(Math.random() * (max - min + 1) + min);
  }
}
```

And now let's see it in the browser:

<div class="sample-container loading" style="height:700px">
    <iframe id="linear-sample-2-iframe" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/linear-progressbar-sample-2" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
<button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="linear-sample-2-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>

### API
| Name   |       Type      |  Description |
|:----------|:-------------:|:------|
| `max` |  number | Set maximum value that can be passed. By default it is set to 100. |
| `type` |  string | Set type of the linear bar. Possible options - `default`, `success`, `info`, `warning`, and `danger`. |
| `value` |  number | Set value that indicates the completed bar position. |
| `striped` |  boolean | Set bar to have striped style. |
| `animate` |  boolean | animation on progress bar. |
| `textAlign` | enum | Set the position that define where the text is aligned. Possible options - `IgxTextAlign.START` (default), `IgxTextAlign.CENTER`, `IgxTextAlign.END`. |
| `textVisibility` | boolean | Set the text to be visible. By default is set to `true`. |
| `textTop` | boolean | Set the position that defene is text to be aligned above the progress line. By default is set to `false`. |
| `text` | string | Set a custom text that is displayed according defined position. |
<div class="divider--half"></div>

### Methods
| Name   |  Description |
|:----------|:------|
| `getValue()` | Return passed value to progress bar to be in range between min(0) and max. |
| `getPercentValue()` | Calculate the percentage based on passed value. |
| `onProgressChanged` | Exposed event, which could be handled to track progress changing |
<div class="divider--half"></div>
