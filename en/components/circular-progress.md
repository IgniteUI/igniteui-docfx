---
title: Angular Circular Progress Component – Ignite UI for Angular | Infragistics
_description: Ignite UI for Angular Circular Progress Indicator component allows developers to display progress in a circle with endless customization options.
_keywords: Angular Circular Progress component, Angular Circular Progress control, Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Angular UI Components
---

# Angular Circular Progress Component Overview

<p class="highlight">The Ignite UI for Angular Circular Progress Indicator component provides a visual indicator of an application’s process as it changes. The circular indicator updates its appearance as its state changes.<p>

## Angular Circular Progress Example

<code-view style="height:100px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/data-display/circular-progressbar" alt="Angular Circular Progress Example">
</code-view>

<div class="divider--half"></div>

## Getting Started with Ignite UI for Angular Circular Progress

To get started with the Ignite UI for Angular Circular Progress component, first you need to install Ignite UI for Angular. In an existing Angular application, type the following command:

```cmd
ng add igniteui-angular
```

For a complete introduction to the Ignite UI for Angular, read the [*getting started*](general/getting-started.md) topic.

The next step is to import the `IgxProgressBarModule` in the **app.module.ts** file:

```typescript
// app.module.ts

...
import { IgxProgressBarModule } from 'igniteui-angular';
// import { IgxProgressBarModule } from '@infragistics/igniteui-angular'; for licensed package

@NgModule({
    ...
    imports: [..., IgxProgressBarModule],
    ...
})
export class AppModule {}
```

Alternatively, as of `16.0.0` you can import the `IgxCircularProgressBarComponent` as a standalone dependency, or use the [`IGX_CIRCULAR_PROGRESS_BAR_DIRECTIVES`](https://github.com/IgniteUI/igniteui-angular/blob/master/projects/igniteui-angular/src/lib/progressbar/public_api.ts) token to import the component and all of its supporting components and directives.

```typescript
// home.component.ts

import { IGX_CIRCULAR_PROGRESS_BAR_DIRECTIVES } from 'igniteui-angular';
// import { IGX_CIRCULAR_PROGRESS_BAR_DIRECTIVES } from '@infragistics/igniteui-angular'; for licensed package

@Component({
  selector: 'app-home',
  template: `
    <igx-circular-bar
      [value]="100"
      [animate]="true"
      class="custom-size"
    ></igx-circular-bar>
  `,
  styleUrls: ['home.component.scss'],
  standalone: true,
  imports: [IGX_CIRCULAR_PROGRESS_BAR_DIRECTIVES],
  /* or imports: [IgxCircularProgressBarComponent] */
})
export class HomeComponent {}
```

Now that you have the Ignite UI for Angular Progress Bar module or directives imported, you can start using the `igx-circular-bar` component.

## Using the Angular Circular Progress

To have a better understanding how everything works, let's create a simple example, like the one in the demo:

```html
<igx-circular-bar [value]="100" [animate]="true" class="custom-size"></igx-circular-bar>
```

After that, we should have the demo sample in your browser.

> [!NOTE]
> The **igx-circular-bar** emits [`onProgressChanged`]({environment:angularApiUrl}/classes/igxcircularprogressbarcomponent.html#onProgressChanged) event that outputs an object like this `{currentValue: 65, previousValue: 64}` on each step.

> [!NOTE]
> The default progress increments by **1% of the [`max`]({environment:angularApiUrl}/classes/igxcircularprogressbarcomponent.html#max) value** per update cycle, this happens if the [`step`]({environment:angularApiUrl}/classes/igxcircularprogressbarcomponent.html#step) value is not defined. To change the update rate, the [`step`]({environment:angularApiUrl}/classes/igxcircularprogressbarcomponent.html#step) value should be defined.```

### Indeterminate Progress

If you want to track a process that is not determined precisely, you can set the [`indeterminate`]({environment:angularApiUrl}/classes/igxcircularprogressbarcomponent.html#indeterminate) input property to `true`.

```html
<igx-circular-bar [animate]="false" [indeterminate]="true" [textVisibility]="false"></igx-circular-bar>
```

> [!NOTE]
> You can hide the text of the circular progress bar by setting the [`textVisibility`]({environment:angularApiUrl}/classes/igxcircularprogressbarcomponent.html#textVisibility) property to `false`.

The final result should be:

<code-view style="height:100px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/data-display/circular-indeterminate-progressbar" >
</code-view>

<div class="divider--half"></div>

### Dynamic Progress

You can dynamically change the value of the progress by using external controls like buttons. To achieve this, we can bind the value to a class property:

```html
<div class="sample-content">
  <igx-circular-bar
    [value]="currentValue"
    [max]="100"
    [animate]="true"
    class="custom-size">
  </igx-circular-bar>
  <div class="button-container">
    <button igxIconButton="flat" (click)="decrementProgress()">
      <igx-icon fontSet="material">remove</igx-icon>
    </button>
    <button igxIconButton="flat" (click)="incrementProgress()">
      <igx-icon fontSet="material">add</igx-icon>
    </button>
  </div>
</div>
```

Add the methods that increment and decrement the value:

```typescript
@Component({...})
export class HomeComponent {
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

### Gradient Progress

One way to customize the progress bar is by using a color gradient instead of a solid color.
This can be done in one of two ways - by using the [`IgxProgressBarGradientDirective`]({environment:angularApiUrl}/classes/igxcircularprogressbarcomponent.html#gradienttemplate) directive or by implementing a custom theme, which supports up to two color stops.

To create a gradient with just two color stops using a custom theme, you need to create a list of colors and pass it to the `$fill-color-default` theme parameter:

```scss
$colors: #695cf9, #ef017c;

$custom-theme: progress-circular-theme(
  $fill-color-default: $colors,
);
```

You can learn more about styling the circular progress bar in the [`Styling Section`](#styling)

To provide a gradient that has more than 2 color stops, we have to use the directive on an `ng-template` in our `igx-circular-bar` like that:

```html
<div class="sample-content">
  <igx-circular-bar
    [value]="currentValue"
    [max]="100"
    [animate]="true"
    class="custom-size">
    <ng-template igxProgressBarGradient let-id>
      <svg:linearGradient [id]="id" gradientTransform="rotate(90)">
        <stop offset="0%" stop-color="#ff9a40" />
        <stop offset="50%" stop-color="#1eccd4" />
        <stop offset="100%" stop-color="#ff0079" />
      </svg:linearGradient>
    </ng-template>
  </igx-circular-bar>

  <div class="button-container">
    <button igxIconButton="flat" (click)="removeProgress()">
      <igx-icon fontSet="material">remove</igx-icon>
    </button>
    <button igxIconButton="flat" (click)="addProgress()">
      <igx-icon fontSet="material">add</igx-icon>
    </button>
  </div>
</div>
```

After reproducing the steps above, you should get this as a result:

<code-view style="height:200px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/data-display/circular-dynamic-sample" >
</code-view>

<div class="divider--half"></div>

## Styling

To get started with styling the circular progress bar, we need to import the `index` file, where all the theme functions and component mixins live:

```scss
@use "igniteui-angular/theming" as *;

// IMPORTANT: Prior to Ignite UI for Angular version 13 use:
// @import '~igniteui-angular/lib/core/styles/themes/index';
```

Following the simplest approach, we create a new theme that extends the [`progress-circular-theme`]({environment:sassApiUrl}/index.html#function-progress-circular-theme) and accepts the `$base-circle-color` and the `$fill-color-default` parameters.

```scss
$custom-theme: progress-circular-theme(
  $fill-color-default: rgb(32, 192, 17),
);
```

The last step is to **include** the component theme in our application.

```scss
@include css-vars($custom-theme);
```

### Demo

<div class="divider--half"></div>

<code-view style="height:100px" 
           no-theming
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/data-display/circular-styling-sample" >
</code-view>

## API

<div class="divider--half"></div>

* [IgxCircularProgressBarComponent]({environment:angularApiUrl}/classes/igxcircularprogressbarcomponent.html)
* [IgxCircularProgressBarComponent Styles]({environment:sassApiUrl}/index.html#function-progress-circular-theme)
