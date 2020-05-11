---
title: Circular Progress Component
_description: Ignite UI for Angular Circular Progress Indicator component allows developers to display progress in a circle with endless customization options.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Circular Progress components, Angular Circular Progress controls
---

## Circular Progress
<p class="highlight">The Ignite UI for Angular Circular Progress Indicator component provides a visual indicator of an application’s process as it changes. The circular indicator updates its appearance as its state changes.<p>
<div class="divider"></div>

#### Demo
<div class="sample-container loading" style="height:100px">
    <iframe id="progressbar-sample-iframe" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/data-display/circular-progressbar" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="progressbar-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>

### Usage

To get started with the Circular Progress Indicator component, first you need to import the **IgxProgressBarModule** in the **app.module.ts** file:
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

To have a better understanding how everything works, let's create a simple example, like the one in the demo.

Let's add a simple circular bar to our tempate:

```html
<igx-circular-bar
[max]="100"
[animate]="true"
class="custom-size"
></igx-circular-bar>
```

Then we create the logic that generates that visual loading.

```typescript
...
public interval: any;

@ViewChild(IgxCircularProgressBarComponent, { static: true }) public circularBar: IgxCircularProgressBarComponent;

public ngOnInit() {
  this.interval = setInterval(this.updateValue.bind(this), 60);
}

public updateValue() {
    this.circularBar.value += 1;
    if (this.circularBar.value === this.circularBar.max) {
      this.interval = clearInterval(this.interval);
    }
}

```

If we set up everything correctly, we should have the demo sample in your browser.

>[!NOTE]
>The **igx-circular-bar** emits [`onProgressChanged`]({environment:angularApiUrl}/classes/igxcircularprogressbarcomponent.html#onprogresschanged) event that outputs an object like this `{currentValue: 65, previousValue: 64}` on each step.

> [!NOTE]
> The default progress increments by **1% of the [`max`]({environment:angularApiUrl}/classes/igxlinearprogressbarcomponent.html#max) value** per update cycle, this happens if the [`step`]({environment:angularApiUrl}/classes/igxlinearprogressbarcomponent.html#step) value is not defined. To change the update rate, the [`step`]({environment:angularApiUrl}/classes/igxlinearprogressbarcomponent.html#step) value should be defined.```


#### Indeterminate Progress

If you want to track a process, which does not provide predetermined end condition, you can set the [`indeterminate`]({environment:angularApiUrl}/classes/igxcircularprogressbarcomponent.html#indeterminate) input property to `true`.

```html
<igx-circular-bar
[animate]="false"
[indeterminate]="true"
[textVisibility]="false"
></igx-circular-bar>
```

>[!NOTE]
>You can hide the text of the circular progress bar by setting the [`textVisibility`]({environment:angularApiUrl}/classes/igxcircularprogressbarcomponent.html#textvisibility) property to `false`.

The final result should be:

<div class="sample-container loading" style="height:100px">
    <iframe id="indeterminate-progressbar-sample-iframe" frameborder="0" seamless="" width="100%" height="100%" data-src="{environment:demosBaseUrl}/data-display/circular-indeterminate-progressbar" class="lazyload"></iframe>
</div>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="indeterminate-progressbar-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>

#### Dynamic Progress

You can dynamically change the value of the progress by using external controls like buttons. To achieve this, we can bind the value to a class property:

```html
<div class="sample-content">
    <igx-circular-bar
    [value]="currentValue"
    [max]="100"
    [animate]="true"
    class="custom-size"
    >
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

Add the functions that add and remove value from the progress:

```typescript
public currentValue: number;

public ngOnInit() {
    this.currentValue = 0;
}

public incrementProgress() {
    this.currentValue += 10;
    if (this.currentValue > 100) {
        this.currentValue = 100;
    }
}

public decrementProgress() {
    this.currentValue -= 10;
    if (this.currentValue < 0) {
        this.currentValue = 0;
    }
}
```

Add some styles:

```scss
.custom-size {
  width: 100px;
  height: 100px;
}

.sample-content {
  width: 300px;
  display: flex;
  align-items: center;
  margin-top: 30px;
}
```

#### Gradient Progress

You can use the [`IgxProgressBarGradientDirective`]({environment:angularApiUrl}/classes/igxcircularprogressbarcomponent.html#gradienttemplate) to colorize the progress bar with a gradient color.

We can do that by adding a template in our `igx-circular-bar` like that:

```html
<div class="sample-content">
  <igx-circular-bar
  [value]="currentValue"
  [max]="100"
  [animate]="true"
  class="custom-size"
  >
      <ng-template igxProgressBarGradient let-id>
          <svg:linearGradient [id]="id" gradientTransform="rotate(90)">
              <stop offset="0%"   stop-color="#ff9a40"/>
              <stop offset="50%" stop-color="#1eccd4"/>
              <stop offset="100%" stop-color="#ff0079"/>
          </svg:linearGradient>
      </ng-template>
  </igx-circular-bar>

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

After reproducing the steps above, you should get this as a result:

<div class="sample-container loading" style="height:200px">
    <iframe id="circular-dynamic-sample-iframe" frameborder="0" seamless="" width="100%" height="100%" data-src="{environment:demosBaseUrl}/data-display/circular-dynamic-sample" class="lazyload"></iframe>
</div>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="circular-dynamic-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>

### Styling

To get started with styling the circular progress bar, we need to import the `index` file, where all the theme functions and component mixins live:

```scss
@import '~igniteui-angular/lib/core/styles/themes/index';
``` 

Following the simplest approach, we create a new theme that extends the [`igx-progress-circular-theme`]({environment:sassApiUrl}/index.html#function-igx-progress-circular-theme) and accepts the `$base-circle-color` and the `$progress-circle-color` parameters.

```scss
$custom-theme: igx-progress-circular-theme(
    $base-circle-color: lightgray,
    $progress-circle-color: rgb(32, 192, 17)
);
```

#### Including Themes

<div class="divider"></div>

The last step is to **include** the component theme in our application.

If `$legacy-support` is set to `true`, include the **component theme** like that:

```scss
 @include igx-progress-circular($custom-theme);
```
>[!NOTE]
>If the component is using an [`Emulated`](../themes/component-themes.md#view-encapsulation) ViewEncapsulation, it is necessary to `penetrate` this encapsulation using `::ng-deep`

```scss
:host {
     ::ng-deep {
        @include igx-progress-circular($custom-theme);
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
<div class="divider--half"></div>
<div class="sample-container loading" style="height:100px">
    <iframe id="circular-styling-sample-iframe" src='{environment:demosBaseUrl}/data-display/circular-styling-sample' width="100%" height="100%" 
        seamless frameBorder="0" class="lazyload no-theming"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="circular-styling-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>

### API
<div class="divider--half"></div>

* [IgxCircularProgressBarComponent]({environment:angularApiUrl}/classes/igxcircularprogressbarcomponent.html)
* [IgxCircularProgressBarComponent Styles]({environment:sassApiUrl}/index.html#function-igx-progress-circular-theme)
