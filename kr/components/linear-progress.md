---
title: Linear Progress Component
_description: Display a progress bar and customize its appearance with endless color and striping options with Ignite UI for Angular Linear Progress Bar component.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Linear Progress components, Angular Linear Progress controls
_language: kr
---

##Linear Progress
<p class="highlight">The Ignite UI for Angular Linear Progress Bar Indicator component provides a visual indicator of an application’s process as it changes. The indicator updates its appearance as its state changes. The indicator can be styled with a choice of colors in stripes or solids.</p>
<div class="divider"></div>

### Linear Progress Demo

<code-view style="height:550px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/data-display/linear-progressbar-sample-1" >
</code-view>

<div class="divider--half"></div>

### Usage
To get started with the Ignite UI for Angular Linear Progress, we should first import the **IgxProgressBarModule** in the **app.module.ts** file:
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

And now let's create a simple example in which we are going to simulate a continuous process, that is triggered on button click. In addition you can notice
that the speed of loading depends on the [`max`]({environment:angularApiUrl}/classes/igxlinearprogressbarcomponent.html#max) attribute that we have set to our `igx-linear-bar`. In the first case our [`max`]({environment:angularApiUrl}/classes/igxlinearprogressbarcomponent.html#max) value is set to 200 and loads slower than in the second where it is set to 100 (default value). So let's see the code...

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
        <igx-linear-bar [striped]="false" [max]="100" [value]="0" type="danger"></igx-linear-bar>
    </div>
</section>
....
<div class="button-container">
    <p>Press the button to start updating the bars</p>
    <button igxButton="fab" igxButtonBackground="#333" igxRipple="white" (click)="tick()">
        <igx-icon fontSet="material">{{changeIcon()}}</igx-icon>
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

<code-view style="height:500px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/data-display/linear-progressbar" >
</code-view>

<div class="divider--half"></div>
And now let's enhance our example and create different types of loading bars, that can be striped or not.
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
        <igx-icon fontSet="material">{{changeIcon()}}</igx-icon>
    </button>
</div>
<div class="button-container">
    <p>Press the button to reset the bars</p>
    <button igxButton="fab" igxButtonBackground="#333" igxRipple="white" (click)="reset()" [disabled]="disable">
        <igx-icon color="white" isActive="true">replay</igx-icon>
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
So if we set up everything correctly, let's see what happened in the browser:

<code-view style="height:550px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/data-display/linear-progressbar-sample-1" >
</code-view>

<div class="divider--half"></div>

Finally let's make our sample even more exciting and good as we set the following attributes: [`textAlign`]({environment:angularApiUrl}/classes/igxlinearprogressbarcomponent.html#textalign), [`textVisibility`]({environment:angularApiUrl}/classes/igxlinearprogressbarcomponent.html#textvisibility), [`textTop`]({environment:angularApiUrl}/classes/igxlinearprogressbarcomponent.html#texttop) and [`text`]({environment:angularApiUrl}/classes/igxlinearprogressbarcomponent.html#text).
And now let's see how our code looks:
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
        <h5>Without text</h5>
        <igx-linear-bar type="default" [textVisibility]="false"></igx-linear-bar>
        </div>
</section>
<div class="button-container">
    <p>Press the button to start updating the bars</p>
    <button igxButton="fab" igxButtonBackground="#333" igxRipple="white" (click)="tick()">
        <igx-icon fontSet="material">{{changeIcon()}}</igx-icon>
    </button>
</div>
<div class="button-container">
    <p>Press the button to reset the bars</p>
    <button igxButton="fab" igxButtonBackground="#333" igxRipple="white" (click)="reset()" [disabled]="disable">
        <igx-icon color="white" isActive="true">replay</igx-icon>
    </button>
</div>
...
```

And do not forget to first import [`IgxTextAlign`]({environment:angularApiUrl}/enums/igxtextalign.html) in your component.

```typescript
import { ..., IgxTextAlign } from 'igniteui-angular';
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


<code-view style="height:700px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/data-display/linear-progressbar-sample-2" >
</code-view>

<div class="divider--half"></div>

> [!NOTE]
> If the [`step`]({environment:angularApiUrl}/classes/igxlinearprogressbarcomponent.html#step) input value is not defined, the progress update is **1% of the [`max`]({environment:angularApiUrl}/classes/igxlinearprogressbarcomponent.html#max) value**. In case you want the progress to be faster, the [`step`]({environment:angularApiUrl}/classes/igxlinearprogressbarcomponent.html#step) value should be greater than (**[`max`]({environment:angularApiUrl}/classes/igxlinearprogressbarcomponent.html#max) * 1%**),  respectfully for slower progress the [`step`]({environment:angularApiUrl}/classes/igxlinearprogressbarcomponent.html#step) should be less than the default progress update.

> If the [`step`]({environment:angularApiUrl}/classes/igxlinearprogressbarcomponent.html#step) value is defined greater than the [`value`]({environment:angularApiUrl}/classes/igxlinearprogressbarcomponent.html#value) input, there is only one update, which gets **the value that is passed for progress update**.   
<div class="divider--half"></div>

### API
<div class="divider--half"></div>

* [IgxLinearProgressBarComponent]({environment:angularApiUrl}/classes/igxlinearprogressbarcomponent.html)
* [IgxLinearProgressBarComponent Styles]({environment:sassApiUrl}/index.html#function-igx-progress-linear-theme)
* [IgxTextAlign]({environment:angularApiUrl}/enums/igxtextalign.html)
