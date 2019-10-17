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
    <iframe id="progressbar-sample-iframe" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/data-display/circular-progressbar" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="progressbar-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>

### Usage
Circular Progress Indicator can be used to show a user that they are in a process.

To get started with the Circular Progress Indicator component, first you need to install Ignite UI for Angular by typing the following command:

```cmd
ng add igniteui-angular
```
For a complete introduction to the Ignite UI for Angular, read the [*getting started*](general/getting_started.md) topic.

The next step is to import the **IgxProgressBarModule** in the **app.module.ts** file:
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
<div class="sample-container loading" style="height:400px">
    <iframe id="progressbar-sample-iframe" frameborder="0" seamless="" width="100%" height="100%" data-src="{environment:demosBaseUrl}/data-display/circular-progressbar" class="lazyload"></iframe>
</div>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="progressbar-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>

> [!NOTE]
> The default progress update is **1% of the [`max`]({environment:angularApiUrl}/classes/igxlinearprogressbarcomponent.html#max) value**, this occurs when the [`step`]({environment:angularApiUrl}/classes/igxlinearprogressbarcomponent.html#step) value is not defined. For faster progress, the [`step`]({environment:angularApiUrl}/classes/igxlinearprogressbarcomponent.html#step) value should be defined greater than (**[`max`]({environment:angularApiUrl}/classes/igxlinearprogressbarcomponent.html#max) * 1%**),  for slower, it should be less than the default progress update.

> When providing a value for the [`step`]({environment:angularApiUrl}/classes/igxlinearprogressbarcomponent.html#step) input, define this value greater than the [`value`]({environment:angularApiUrl}/classes/igxlinearprogressbarcomponent.html#value) input, otherwise there will be only one update, which gets **the value that is passed for progress update**.   

#### Indeterminate progress

If you want to track a process, which does not provide predetermined end condition, you can set the [`indeterminate`]({environment:angularApiUrl}/classes/igxcircularprogressbarcomponent.html#indeterminate) input property to `true`.
Applying this binding to your progress bar will result:

<div class="sample-container loading" style="height:300px">
    <iframe id="indeterminate-progressbar-sample-iframe" frameborder="0" seamless="" width="100%" height="100%" data-src="{environment:demosBaseUrl}/data-display/circular-indeterminate-progressbar" class="lazyload"></iframe>
</div>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="indeterminate-progressbar-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>

### Styling

To get started with styling the circular progress bar, we need to import the `index` file, where all the theme functions and component mixins live:

```scss
@import '~igniteui-angular/lib/core/styles/themes/index';
``` 

Following the simplest approach, we create a new theme that extends the [`igx-progress-circular-theme`]({environment:sassApiUrl}/index.html#function-igx-progress-circular-theme) and accepts the `$base-circle-color`, `$progress-circle-color` and `$text-color` parameters.

```scss
$custom-theme: igx-progress-circular-theme(
    $base-circle-color: lightgray,
    $progress-circle-color: rgb(32, 192, 17),
    $text-color: lightgray
);
```
The last step is to **include** the component mixins: 

```scss
 @include igx-progress-circular($custom-theme);
```

>[!NOTE]
 >If the component is using an [`Emulated`](./themes/component-themes.md#view-encapsulation) ViewEncapsulation, it is necessary to `penetrate` this encapsulation using `::ng-deep`:

 ```scss
:host {
  ::ng-deep {
    @include igx-progress-circular($custom-theme);
  }
}
```

#### Defining a color palette

Instead of hardcoding the color values like we just did, we can achieve greater flexibility in terms of colors by using the [`igx-palette`]({environment:sassApiUrl}/index.html#function-igx-palette) and [`igx-color`]({environment:sassApiUrl}/index.html#function-igx-color) functions.

`igx-palette` generates a color palette based on the primary and secondary colors that are passed:

```scss
$gray-color: lightgray;
$green-color: rgb(32, 192, 17);

$custom-palette: igx-palette($primary: $gray-color, $secondary: $green-color);
```

And then with [`igx-color`]({environment:sassApiUrl}/index.html#function-igx-color) we can easily retrieve color from the palette.

```scss
$custom-theme: igx-progress-circular-theme(
    $base-circle-color: igx-color($custom-palette, "primary", 500),
    $progress-circle-color: igx-color($custom-palette, "secondary", 500),
    $text-color: igx-color($custom-palette, "primary", 500)
);
```

>[!NOTE]
>The `igx-color` and `igx-palette` are powerful functions for generating and retrieving colors. Please refer to [`Palettes`](./themes/palette.md) topic for detailed guidance on how to use them.

#### Using Schemas

Going further with the theming engine, you can build a robust and flexible structure that benefits from [**schemas**](./themes/schemas.md). A **schema** is a recipe of a theme.

Extend one of the two predefined schemas, that are provided for every component, in this case - [`_light-progress-circular`]({environment:sassApiUrl}/index.html#variable-_light-progress-circular):  

```scss
// Extending the light progress circular schema
$custom-progress-schema: extend($_light-progress-circular,
    (
        base-circle-color: (igx-color:('primary', 500)),
        progress-circle-color: (igx-color:('secondary', 500)),
        text-color: (igx-color:('primary', 500))
    )
);
```

In order to apply our custom schema we have to **extend** one of the globals ([`light`]({environment:sassApiUrl}/index.html#variable-light-schema) or [`dark`]({environment:sassApiUrl}/index.html#variable-dark-schema)), which is basically pointing out the components with a custom schema, and after that add it to the respective component themes:

```scss
// Extending the global light-schema
$my-custom-schema: extend($light-schema, 
    (
        igx-circular-bar: $custom-progress-schema
    )
);

// Defining our custom theme with the custom schema
$custom-theme: igx-progress-circular-theme(
    $palette: $custom-palette,
    $schema: $my-custom-schema
);
```

Don't forget to include the themes in the same way as it was demonstrated above.

#### Demo

<div class="sample-container loading" style="height:350px">
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
