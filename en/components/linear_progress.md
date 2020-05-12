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

To have a better understanding of how everything works, let's create a simple example, like the one in the demo:

```html
<igx-linear-bar [value]="100"></igx-linear-bar>
```

After that, you should see the demo sample in your browser.

#### Progress Types

You can set the type of your bar, using the [`type`]({environment:angularApiUrl}/classes/igxlinearprogressbarcomponent.html#type) attribute. There are five types of linear progress bars - `default`, `error`, `success`, `info`, and `warning`.

### Striped Progress
You can make the bar striped, using the [`striped`]({environment:angularApiUrl}/classes/igxlinearprogressbarcomponent.html#type) property and by setting it to `true`.

Let's see how we can create different types of progress bars that can be both striped or not.

```html
<div class="linear-container">
    <igx-linear-bar [value]="100" type="default"></igx-linear-bar>
    <igx-linear-bar [value]="100" type="success" [striped]="true"></igx-linear-bar>
    <igx-linear-bar [value]="100" type="error"></igx-linear-bar>
    <igx-linear-bar [value]="100" type="info" [striped]="true"></igx-linear-bar>
    <igx-linear-bar [value]="100" type="warning"></igx-linear-bar>
</div>
```

So if we set up everything correctly, you should see the following in your browser:
<div class="sample-container loading" style="height:200px">
    <iframe id="linear-sample-1-iframe" frameborder="0" seamless="" width="100%" height="100%" data-src="{environment:demosBaseUrl}/data-display/linear-progressbar-sample-1" class="lazyload"></iframe>
</div>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="linear-sample-1-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>

#### Indeterminate Progress
If you want to track a process that is not determined precisely, you can set the [`indeterminate`]({environment:angularApiUrl}/classes/igxcircularprogressbarcomponent.html#indeterminate) input property to `true`.

#### Text Properties

You can align the text, using the [`textAlign`]({environment:angularApiUrl}/classes/igxlinearprogressbarcomponent.html#textalign) property. Permitted values are `left`, `center`, and `right`. 

To hide the text, use the [`textVisibility`]({environment:angularApiUrl}/classes/igxlinearprogressbarcomponent.html#textvisibility) property and set its value to `false`.

Set the [`textTop`]({environment:angularApiUrl}/classes/igxlinearprogressbarcomponent.html#texttop) property to `true` to move the text above the bar. 

The [`text`]({environment:angularApiUrl}/classes/igxlinearprogressbarcomponent.html#text) property can be used to customize the value of the text itself.

Let's update our previous sample by using the aforementioned text properties. We will also throw an indeterminate progress bar in the mix.

```html
<div class="linear-container">
    <igx-linear-bar
        type="default"
        [value]="100"
    ></igx-linear-bar>
    <igx-linear-bar
        type="success"
        [value]="100"
        class="indeterminate"
        [indeterminate]="true"
        [striped]="true"
    ></igx-linear-bar>
    <igx-linear-bar
        type="error"
        [value]="100"
        [textAlign]="positionEnd"
        [text]="'Custom text'"
    ></igx-linear-bar>
    <igx-linear-bar
        type="info"
        [value]="100"
        [textVisibility]="false"
        [striped]="true"
    ></igx-linear-bar>
    <igx-linear-bar
        type="warning"
        [value]="100"
        [textTop]="true"
    ></igx-linear-bar>
</div>
```

And do not forget to import the [`IgxTextAlign`]({environment:angularApiUrl}/enums/igxtextalign.html) enumerator in your component if you're using the `textAlign` property.

```typescript
import { ..., IgxTextAlign } from 'igniteui-angular';
...

public positionCenter: IgxTextAlign = IgxTextAlign.CENTER;
public positionEnd: IgxTextAlign = IgxTextAlign.END;
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

You can dynamically change the value of the progressbar by using external controls like buttons. To achieve this, we can bind the value to a class property:

```html
<div class="linear-container">
    <igx-linear-bar
        [value]="currentValue"
        [max]="100"
    ></igx-linear-bar>

    <div class="button-container">
        <button igxButton="icon" (click)="decrementProgress()">
            <igx-icon fontSet="material">remove</igx-icon>
        </button>
        <button igxButton="icon" (click)="incrementProgress()">
            <igx-icon fontSet="material">add</igx-icon>
        </button>
    </div>
</div>
```

Create the methods that increment and decrement the value:

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

After completing the steps above, our progressbar should look like this:

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
