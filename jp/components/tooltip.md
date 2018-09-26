---
title: Tooltip - Native Angular | Ignite UI for Angular
_description: The Ignite UI for Angular Tooltip and Tooltip Target directives feature the ability to create a tooltip and attach it to an element.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Tooltip directives, Angular Tooltip controls, Angular Tooltip, tooltip, tooltip target
---

## Tooltip

The **IgxTooltip** and the **IgxTooltipTarget** directives provide us with the ability to create a fully customizable tooltip and attach it to any element on our page.
While most tooltips have a limited number of available positions, with the IgxTooltipTargetDirective we can specify any position we want on the page while keeping it in relation to the target (anchor) and provide various other overlay settings like scroll strategies and custom animations!

### Demo

<div class="sample-container loading" style="height:450px">
    <iframe id="tooltip-simple-iframe" src='{environment:demosBaseUrl}/tooltip-simple' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="tooltip-simple-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>

### Setup

To get started with the Ignite UI for Angular Tooltip and Tooltip Target, let's first import the **IgxTooltipModule** in the app.module.ts file.

```typescript
// app.module.ts

...
import {
    IgxTooltipModule
} from 'igniteui-angular';

@NgModule({
    ...
    imports: [IgxTooltipModule],
})
export class AppModule {}
```

### Simple tooltip

Let's say we want to create a simple text tooltip for an element on our page. In our case, let's use our awesome [**IgxAvatar**](https://www.infragistics.com/products/ignite-ui-angular/angular/components/avatar.html) as the element in question by importing the **IgxAvatarModule** first.

```typescript
// app.module.ts

...
import {
    IgxTooltipModule,
    IgxAvatarModule
} from 'igniteui-angular';

@NgModule({
    ...
    imports: [IgxTooltipModule, IgxAvatarModule],
})
export class AppModule {}
```

In addition, we will define some custom styles for our elements!


```css
/* simpleTooltip.component.css */

.wrapper {
    text-align: center;
    margin: 20px;
}

.avatar {
    display: inline-block;
}

.switchContainer {
    margin-bottom: 50px;
}
```

#### Tooltip target
The avatar will be our target and all we have to do is set the `igxTooltipTarget` directive on it, which basically marks our element as one that has a tooltip.

- The `igxTooltipTarget` directive extends the [**igxToggleAction**](https://www.infragistics.com/products/ignite-ui-angular/angular/components/toggle.html) directive.
- The `igxTooltipTarget` directive is exported with the name **tooltipTarget**.

```html
<!--simpleTooltip.component.html-->

<igx-avatar class="avatar" #target="tooltipTarget" igxTooltipTarget
            src="assets/images/avatar/10.jpg" size="medium" [roundShape]="true">
</igx-avatar>
```

#### Tooltip
Now let's create the tooltip element itself! Since we want a simple text tooltip, we will define an ordinary div element with text inside and set the `igxTooltip` directive on it, which marks it as a tooltip.

- The `igxTooltip` directive extends the [**igxToggle**](https://www.infragistics.com/products/ignite-ui-angular/angular/components/toggle.html) directive.
- The `igxTooltip` directive is exported with the name **tooltip**.

```html
<!--simpleTooltip.component.html-->

<div #tooltipRef="tooltip" igxTooltip>
    Her name is Toola Tipa
</div>
```

#### Attach tooltip to target
Now that we have both our target and tooltip defined, all that's left for us to do is assign the tooltip's reference to the igxTooltipTarget property of the target.

```html
<!--simpleTooltip.component.html-->

<igx-avatar class="avatar" #target="tooltipTarget" [igxTooltipTarget]="tooltipRef"
            src="assets/images/avatar/10.jpg" size="medium" [roundShape]="true">
</igx-avatar>

<div #tooltipRef="tooltip" igxTooltip>
    Her name is Toola Tipa
</div>
```

#### Show/Hide delay settings
What if we want to control the amount of time that should pass before showing and hiding the tooltip? For this purpose we can use the `showDelay` and the `hideDelay` properties of the `igxTooltipTarget` directive. Both properties are of type **number** and take time span in milliseconds.

Now let's add a couple of [**IgxSlider**](https://www.infragistics.com/products/ignite-ui-angular/angular/components/slider.html) elements to control the `showDelay` and the `hideDelay`. In addition, we will also use the [**IgxSwitch**](https://www.infragistics.com/products/ignite-ui-angular/angular/components/switch.html) to enable/disable the user interaction over the tooltip target by using the `tooltipDisabled` property of the target.

We will go ahead and get the **IgxSlider** and the **IgxSwitch** modules:
```typescript
// app.module.ts

...
import {
    IgxTooltipModule,
    IgxAvatarModule,
    IgxSliderModule,
    IgxSwitchModule
} from 'igniteui-angular';

@NgModule({
    ...
    imports: [IgxTooltipModule, IgxAvatarModule, IgxSliderModule, IgxSwitchModule],
})
export class AppModule {}
```

Now we can define our sliders and switch controls in the template of the component! Then all we have to do is bind the `showDelay` and the `hideDealy` properties as **ngModels** to the two sliders respectively and the bind the `tooltipDisabled` property of the target to the switch control in the same manner.

```html
<!--simpleTooltip.component.html-->

...
<div>
    <div class="switchContainer">
        <igx-switch [(ngModel)]="target.tooltipDisabled">Disable tooltip</igx-switch>
    </div>
    <div>
        <igx-slider minValue="0" maxValue="3000" [step]="100" [(ngModel)]="target.showDelay"></igx-slider>
        <span>Show Delay: {{target.showDelay}} ms</span>
    </div>
    <div>
        <igx-slider minValue="0" maxValue="3000" [step]="100" [(ngModel)]="target.hideDelay"></igx-slider>
        <span>Hide Delay: {{target.hideDelay}} ms</span>
    </div>
</div>
```

You can see the result of the code from above at the beginning of this article in the [Tooltip Demo](#demo) section.

> [!NOTE]
> The built-in UI interaction behavior of the **IgxTooltipTargetDirective** and its respective API methods work by taking `showDelay` and `hideDelay` property values into account. Showing and hiding the tooltip through the API of the **IgxTooltipDirective** does not take the `showDelay` and `hideDealy` property values into account. If necessary, such logic would have to be implemented manually according to the application's specifics.

### Rich tooltip

Customizing and styling the content of our tooltip has never been easier with the `igxTooltip` directive! Since the tooltip itself is an ordinary element in our markup, we can basically improve its content by adding any elements we need and have the ability to style them accordingly!

Let's expand on the use of the `igxTooltip` and use it to provide more details for a specific location on a map! In order to make our application look even more awesome, we will use the [**IgxCard**](https://www.infragistics.com/products/ignite-ui-angular/angular/components/card.html) to represent our map, the [**IgxAvatar**](https://www.infragistics.com/products/ignite-ui-angular/angular/components/avatar.html) for a logo in our tooltip, the [**IgxIcon**](https://www.infragistics.com/products/ignite-ui-angular/angular/components/icon.html) for the location icon on our map and the [**IgxButton**](https://www.infragistics.com/products/ignite-ui-angular/angular/components/button.html) for some card actions! For this purpose, we will get their respective modules.

```typescript
// app.module.ts

...
import {
    IgxTooltipModule,
    IgxCardModule,
    IgxAvatarModule,
    IgxIconModule,
    IgxButtonModule
} from 'igniteui-angular';

@NgModule({
    ...
    imports: [IgxTooltipModule, IgxCardModule, IgxAvatarModule, IgxIconModule, IgxButtonModule],
})
export class AppModule {}
```

We will also use the following styles for our application:

```css
/* richTooltip.component.css */

.wrapper { 
    margin: 20px;
}

.cursorHover:hover {
    cursor: pointer;
}

.card-wrapper {
    max-width: 200px;
    min-width: 120px;
}

.location {
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 200px;
    height: 252px;
    background-image: url(../../../assets/images/card/media/infragisticsMap.png);
}

.locationTooltip {
    width: 310px;
    background-color: rgba(128, 128, 128, 0.7);
    padding: 3px;
    font-size: 13px;
}

.locationTooltipContent {
    display: flex;
    justify-content: center;
    align-items: center;
}

.locationIcon {
    width: 45px;
    height: 45px;
}
```

Let's start by creating our card and setting its content to be an element that has a map background image! In addition, we will add an icon that will indicate the position of our location! Since we want to provide more details for this location, our icon will obviously be the tooltip target.

```html
<!--richTooltip.component.html-->

<igx-card>
    <igx-card-content style="padding: 0px;">
        <div class="location">
            <igx-icon class="cursorHover" color="blue" fontSet="material" name="location_on" igxTooltipTarget></igx-icon>
        </div>
    </igx-card-content>
</igx-card>
```

Now for the tooltip! For its content, we will create a container that will be populated with some text information elements and an avatar. Then we will simply attach the tooltip to the target and include some nice css styling!

```html
<!--richTooltip.component.html-->

<igx-card>
    <igx-card-content style="padding: 0px;">
        <div class="location">
            <igx-icon class="cursorHover" color="blue" fontSet="material" name="location_on" [igxTooltipTarget]="locationTooltip"></igx-icon>

            <div class="locationTooltip" #locationTooltip="tooltip" igxTooltip>
                <div class="locationTooltipContent">
                    <igx-avatar class="locationIcon" src="../../../assets/images/card/avatars/igLogo.png" size="medium"
                        [roundShape]="false"></igx-avatar>
                    <div>
                        <div>Infragistics Inc. HQ</div>
                        <div>2 Commerce Dr, Cranbury, NJ 08512, USA</div>
                    </div>
                </div>
            </div>
        </div>
    </igx-card-content>
</igx-card>
```

As a finishing touch, we will add a couple of button icons as card actions at the bottom.

```html
<!--richTooltip.component.html-->

<igx-card>
    <igx-card-content style="padding: 0px;">
        ...
    </igx-card-content>
    <igx-card-actions>
        <div class="igx-card-actions__igroup--start">
            <span igxButton="icon" igxRipple igxRippleCentered="true">
                <igx-icon fontSet="material" name="favorite"></igx-icon>
            </span>
            <span igxButton="icon" igxRipple igxRippleCentered="true">
                <igx-icon fontSet="material" name="share"></igx-icon>
            </span>
        </div>
    </igx-card-actions>
</igx-card>
```

If all went well, this is how our location and tooltip should look like:

<div class="sample-container loading" style="height:400px">
    <iframe id="tooltip-rich-iframe" src='{environment:demosBaseUrl}/tooltip-rich' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="tooltip-rich-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>

### Overlay configuration
Both the `igxTooltip` and `igxTooltipTarget` use the [**IgxOverlayService**](https://www.infragistics.com/products/ignite-ui-angular/angular/components/overlay_main.html) to open and close the respective tooltip element.

The `igxTooltipTarget` directive exposes an `overlaySettings` property (inherited from the `igxToggleACtion`), which can be used to customize the animations of our tooltip, its position in the UI and a lot more! If this property is not set, then default overlay settings will be used.

> [!NOTE]
> Any property that is set through the `overlaySettings` will override the same property from the default overlay settings and will have a direct impact on tooltip.


### Accessibility

Elements with the `igxTooltip` directive have an autogenerated **id** property (if not set by the developer), a tooltip **role** and the **aria-hidden** attribute that is automatically updated depending on whether the tooltip is visible or not. By setting the **aria-describedby** attribute of the target to its respective tooltip's **id**, a reference will be provided to the tooltip element. This provides screenreaders the information needed to read out the tooltip's contents when the end-user triggers the tooltip.

Extra care should be taken in the following scenarios:
- The tooltip's content is too complex to be automatically interpreted.
- The tooltip is used with a manually implemented behavior (e.g. manually show/hide) instead of the built-in one.
- The target element is unfocusable.

### API Summary

In this article we learned how to create, configure and style awesome tooltips for the elements on our page! We also used some additional Ignite UI for Angular components like icons, avatars and cards to improve on the design of our application! The respective APIs are listed below:

> [!NOTE]
> Since the **IgxTooltipDirective** extends the **IgxToggleDirective** and there is no specific functionality it adds apart from some styling classes and attributes, you can refer to the [IgxToggle API](https://www.infragistics.com/products/ignite-ui-angular/angular/components/toggle.html#api-summary) for additional details.

#### Properties

The following properties are available on the **IgxTooltipTargetDirective**
| Name | Type | Description |
| :--- |:--- | :--- |
| `showDelay` | number | Specifies the amount of milliseconds that should pass before showing the tooltip. |
| `hideDelay` | number | Specifies the amount of milliseconds that should pass before hiding the tooltip. |
| `tooltipDisabled` | boolean | Specifies if the tooltip should not show when hovering its target with the mouse. (defaults to false) |
| `tooltipHidden` | boolean | Indicates if the tooltip is currently hidden. |
| `nativeElement` | any | Reference to the native element of the directive. |

<div class="divider"></div>

#### Methods

The following methods are available on the **IgxTooltipTargetDirective**
| Name | Type | Arguments | Description |
| :--- |:--- | :--- | :--- |
| `showTooltip` | void | N/A | Shows the tooltip after the amount of ms specified by the `showDelay` property. |
| `hideTooltip` | void | N/A | Hides the tooltip after the amount of ms specified by the `hideDelay` property. |

<div class="divider"></div>

#### Events

The following events are available on the **IgxTooltipTargetDirective**
|Name|Description|Cancelable|Event arguments|
|--|--|--|--|
| `onTooltipShow` | Emitted when the tooltip starts showing. (This event is fired before the start of the countdown to showing the tooltip.) | True | ITooltipShowEventArgs |
| `onTooltipHide` | Emitted when the tooltip starts hiding. (This event is fired before the start of the countdown to hiding the tooltip.) | True | ITooltipHideEventArgs |

<div class="divider"></div>

### Additional Resources

<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
