---
title: Linear Progress Component
_description: Display a progress bar and customize its appearance with endless color and striping options with Ignite UI for Angular Linear Progress Bar component.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Linear Progress components, Angular Linear Progress controls
---

## Linear Progress
<p class="highlight">The Ignite UI for Angular Linear Progress Bar Indicator component provides a visual indicator of an application’s process as it changes. The indicator updates its appearance as its state changes. The indicator can be styled with a choice of colors in stripes or solids.</p>
<div class="divider--half"></div>

#### Demo
<div class="sample-container loading" style="height:50px">
    <iframe id="linear-progressbar-iframe" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/data-display/linear-progressbar" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="linear-progressbar-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>

### Usage
To get started with the Linear Progress Bar Indicator component, you need to import the **IgxProgressBarModule** in the **app.module.ts** file:
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

To have a better understanding of how everything works, let's create a simple example, like the one in the demo.

Let's add a plain linear progress bar to our template:

```html
<igx-linear-bar [striped]="false" [max]="100" [value]="0"></igx-linear-bar>
```

Create the logic that generates that visual loading:

```typescript
public interval: any;

@ViewChild(IgxLinearProgressBarComponent, { read: IgxLinearProgressBarComponent })
public linearBar: IgxLinearProgressBarComponent;

public ngOnInit() {
this.interval = setInterval(this.updateValue.bind(this), 60);
}

public updateValue() {
    this.linearBar.value += 1;
}
```
If all went well, you should see the demo sample in your browser.

#### Progress Types

You can set the type of your bar, using the [`type`]({environment:angularApiUrl}/classes/igxlinearprogressbarcomponent.html#type) attribute. There are five types of linear progress bars - `default`, `error`, `success`, `info`, and `warning`.

### Striped Progress
Also, you can make the bar striped, using the [`striped`]({environment:angularApiUrl}/classes/igxlinearprogressbarcomponent.html#type) property and setting it to `true`.

Let's see how to create the different types of loading bars, that can be striped or not.
```html
<div class="linear-container">
    <igx-linear-bar type="default"></igx-linear-bar>
    <igx-linear-bar type="success" [striped]="true"></igx-linear-bar>
    <igx-linear-bar type="error"></igx-linear-bar>
    <igx-linear-bar type="info" [striped]="true"></igx-linear-bar>
    <igx-linear-bar type="warning"></igx-linear-bar>
</div>
```

```typescript
public interval: any;

@ViewChildren(IgxLinearProgressBarComponent, { read: IgxLinearProgressBarComponent })
public linearBars: QueryList<IgxLinearProgressBarComponent>;

public ngOnInit() {
this.interval = setInterval(this.updateValue.bind(this), 60);
}

public updateValue() {
    this.linearBars.map((bar) => bar.value += this.randomIntFromInterval(1, 3));
    const shouldStop = this.linearBars.toArray().every((bar) => bar.value >= bar.max);
    if (shouldStop) {
    this.interval = clearInterval(this.interval);
    }
}

private randomIntFromInterval(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
```
So if we set up everything correctly, you should see this in your browser:
<div class="sample-container loading" style="height:200px">
    <iframe id="linear-sample-1-iframe" frameborder="0" seamless="" width="100%" height="100%" data-src="{environment:demosBaseUrl}/data-display/linear-progressbar-sample-1" class="lazyload"></iframe>
</div>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="linear-sample-1-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>

#### Indeterminate Progress
If you want to track a process, which does not provide predetermined end condition, you can set the [`indeterminate`]({environment:angularApiUrl}/classes/igxcircularprogressbarcomponent.html#indeterminate) input property to `true`.

#### Text Properties

You can customise the text, using the [`textAlign`]({environment:angularApiUrl}/classes/igxlinearprogressbarcomponent.html#textalign) property, to align the text left, center or right, you can hide the text, using the [`textVisibility`]({environment:angularApiUrl}/classes/igxlinearprogressbarcomponent.html#textvisibility) property, setting it to `false`, use the [`textTop`]({environment:angularApiUrl}/classes/igxlinearprogressbarcomponent.html#texttop) property, setting it to `true`, to move the text on top of the bar, and create your custom text, using the [`text`]({environment:angularApiUrl}/classes/igxlinearprogressbarcomponent.html#text) property.

Let's get our previous sample and play a little bit with the text properties and also throw one indeterminate progress bar in there, so you can see how this looks like.

```html
<div class="linear-container">
    <igx-linear-bar type="default"></igx-linear-bar>
    <igx-linear-bar
        type="success"
        class="indeterminate"
        [indeterminate]="true"
        [striped]="true"
    ></igx-linear-bar>
    <igx-linear-bar
        type="error"
        [textAlign]="positionEnd"
        [text]="'Custom text'"
    ></igx-linear-bar>
    <igx-linear-bar
        type="info"
        [textVisibility]="false"
        [striped]="true"
    ></igx-linear-bar>
    <igx-linear-bar
        type="warning"
        [textTop]="true"
    ></igx-linear-bar>
</div>
```

And do not forget to import [`IgxTextAlign`]({environment:angularApiUrl}/enums/igxtextalign.html) in your component if you're using the `textAlign` property.

```typescript
import { ..., IgxTextAlign } from 'igniteui-angular';
.....
public interval: any;
public positionCenter: IgxTextAlign;
public positionEnd: IgxTextAlign;

@ViewChildren(IgxLinearProgressBarComponent, { read: IgxLinearProgressBarComponent })
public linearBars: QueryList<IgxLinearProgressBarComponent>;

public ngOnInit() {
this.positionCenter = IgxTextAlign.CENTER;
this.positionEnd = IgxTextAlign.END;
this.interval = setInterval(this.updateValue.bind(this), 60);
}

public updateValue() {
    this.linearBars.map((bar) => bar.value += this.randomIntFromInterval(1, 3));
    const shouldStop = this.linearBars.toArray().every((bar) => bar.value >= bar.max);
    if (shouldStop) {
    this.interval = clearInterval(this.interval);
    }
}

private randomIntFromInterval(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
```

Let's take a look at how this turned out:

<div class="sample-container loading" style="height:200px">
    <iframe id="linear-sample-2-iframe" frameborder="0" seamless="" width="100%" height="100%" data-src="{environment:demosBaseUrl}/data-display/linear-progressbar-sample-2" class="lazyload"></iframe>
</div>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="linear-sample-2-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>

> [!NOTE]
> If the [`step`]({environment:angularApiUrl}/classes/igxlinearprogressbarcomponent.html#step) input value is not defined, the progress update is **1% of the [`max`]({environment:angularApiUrl}/classes/igxlinearprogressbarcomponent.html#max) value**. In case you want the progress to be faster, the [`step`]({environment:angularApiUrl}/classes/igxlinearprogressbarcomponent.html#step) value should be greater than (**[`max`]({environment:angularApiUrl}/classes/igxlinearprogressbarcomponent.html#max) * 1%**),  respectfully for slower progress the [`step`]({environment:angularApiUrl}/classes/igxlinearprogressbarcomponent.html#step) should be less than the default progress update.

> If the [`step`]({environment:angularApiUrl}/classes/igxlinearprogressbarcomponent.html#step) value is defined greater than the [`value`]({environment:angularApiUrl}/classes/igxlinearprogressbarcomponent.html#value) input, there is only one update, which gets **the value that is passed for progress update**.   
<div class="divider--half"></div>

#### Dynamic Progress

You can dynamically change the progress value of the circular progress bar, using controls to change the value of the progress. We can achieve that by binding the value, using a custom variable:

```html
<div class="linear-container">
    <igx-linear-bar
        [value]="currentValue"
        [max]="100"
    ></igx-linear-bar>

    <div class="button-container">
        <button igxButton="icon" (click)="removeProgress()">
            <igx-icon fontSet="material">remove</igx-icon>
        </button>
        <button igxButton="icon" (click)="addProgress()">
            <igx-icon fontSet="material">add</igx-icon>
        </button>
    </div>
</div>
```

Create the functions that add and remove value from the progress:

```typescript
public currentValue: number;

public ngOnInit() {
    this.currentValue = 0;
}

public addProgress() {
    this.currentValue += 10;
    if (this.currentValue > 100) {
        this.currentValue = 100;
    }
}

public removeProgress() {
    this.currentValue -= 10;
    if (this.currentValue < 0) {
        this.currentValue = 0;
    }
}
```

After completing the steps above, it should look like this:

<div class="sample-container loading" style="height:200px">
    <iframe id="linear-dynamic-sample-iframe" frameborder="0" seamless="" width="100%" height="100%" data-src="{environment:demosBaseUrl}/data-display/linear-dynamic-sample" class="lazyload"></iframe>
</div>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="linear-dynamic-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>

### Styling

To get started with styling the linear progress bar, we need to import the `index` file, where all the theme functions and component mixins live:

```scss
@import '~igniteui-angular/lib/core/styles/themes/index';
``` 

Following the simplest approach, we create a new theme that extends the [`igx-progress-linear-theme`]({environment:sassApiUrl}/index.html#function-igx-progress-linear-theme) and accepts the `$track-color`, `$fill-color-default` and `$text-color` parameters.

```scss
$custom-theme: igx-progress-linear-theme(
    $track-color: #D3D3D3,
    $fill-color-default: #ECAA53,
    $text-color: #ECAA53
);
```

#### Including Themes

<div class="divider"></div>

The last step is to **include** the component theme in our application.

If `$legacy-support` is set to `true`, include the **component theme** like that:

```scss
 @include igx-progress-linear($custom-theme);
```

>[!NOTE]
>If the component is using an [`Emulated`](../themes/component-themes.md#view-encapsulation) ViewEncapsulation, it is necessary to `penetrate` this encapsulation using `::ng-deep`

```scss
:host {
     ::ng-deep {
        @include igx-progress-linear($custom-theme);
    }
}
```

<div class="divider"></div>

If `$legacy-support` is set to `false`(default), include the component **css variables** like that:

```scss
@include igx-css-vars($custom-theme);
```

>[!NOTE]
>If the component is using an [`Emulated`](themes/component-themes.md#view-encapsulation) ViewEncapsulation, you still have to use `:host` because you need a global selector in order to override the variables.

```scss
:host {
    @include igx-css-vars($custom-theme);
}
```

#### Demo

<div class="sample-container loading" style="height:50px">
    <iframe id="linear-progressbar-styling-iframe" src='{environment:demosBaseUrl}/data-display/linear-progressbar-styling' width="100%" height="100%" 
        seamless frameBorder="0" class="lazyload no-theming"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="linear-progressbar-styling-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>

### API
<div class="divider--half"></div>

* [IgxLinearProgressBarComponent]({environment:angularApiUrl}/classes/igxlinearprogressbarcomponent.html)
* [IgxLinearProgressBarComponent Styles]({environment:sassApiUrl}/index.html#function-igx-progress-linear-theme)
* [IgxTextAlign]({environment:angularApiUrl}/enums/igxtextalign.html)
