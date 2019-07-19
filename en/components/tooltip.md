---
title: Tooltip - Native Angular | Ignite UI for Angular
_description: The Ignite UI for Angular Tooltip and Tooltip Target directives feature the ability to create a tooltip and attach it to an element.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Tooltip directives, Angular Tooltip controls, Angular Tooltip, tooltip, tooltip target
---

## Tooltip

The [`igxTooltip`]({environment:angularApiUrl}/classes/igxtooltipdirective.html) and the [`igxTooltipTarget`]({environment:angularApiUrl}/classes/igxtooltiptargetdirective.html) directives provide us with the ability to create a fully customizable tooltip and attach it to any element on our page.
While most tooltips have a limited number of available positions, with the [`igxTooltipTarget`]({environment:angularApiUrl}/classes/igxtooltiptargetdirective.html) directive we can specify any position we want on the page while keeping it in relation to the target (anchor) and provide various other overlay settings like scroll strategies and custom animations!

### Demo

<div class="sample-container loading" style="height:450px">
    <iframe id="tooltip-simple-iframe" src='{environment:demosBaseUrl}/interactions/tooltip-simple' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="tooltip-simple-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>

### Setup

To get started with the Ignite UI for Angular Tooltip and Tooltip Target, let's first import the `IgxTooltipModule` in the app.module.ts file.

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

Let's say we want to create a simple text tooltip for an element on our page. In our case, let's use our awesome [`IgxAvatar`](avatar.md) as the element in question by importing the `IgxAvatarModule` first.

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

.bottomMargin {
    margin-bottom: 50px;
}
```

#### Tooltip target
The avatar will be our target and all we have to do is set the [`igxTooltipTarget`]({environment:angularApiUrl}/classes/igxtooltiptargetdirective.html) directive on it, which basically marks our element as one that has a tooltip.

- The [`igxTooltipTarget`]({environment:angularApiUrl}/classes/igxtooltiptargetdirective.html) directive extends the [`igxToggleAction`]({environment:angularApiUrl}/classes/igxtoggleactiondirective.html) directive.
- The [`igxTooltipTarget`]({environment:angularApiUrl}/classes/igxtooltiptargetdirective.html) directive is exported with the name **tooltipTarget**.

```html
<!--simpleTooltip.component.html-->

<igx-avatar class="avatar" #target="tooltipTarget" igxTooltipTarget
            src="assets/images/avatar/10.jpg" size="medium" [roundShape]="true">
</igx-avatar>
```

#### Tooltip
Now let's create the tooltip element itself! Since we want a simple text tooltip, we will define an ordinary div element with text inside and set the [`igxTooltip`]({environment:angularApiUrl}/classes/igxtooltipdirective.html) directive on it, which marks it as a tooltip.

- The [`igxTooltip`]({environment:angularApiUrl}/classes/igxtooltipdirective.html) directive extends the [`igxToggle`]({environment:angularApiUrl}/classes/igxtoggledirective.html) directive.
- The [`igxTooltip`]({environment:angularApiUrl}/classes/igxtooltipdirective.html) directive is exported with the name **tooltip**.

```html
<!--simpleTooltip.component.html-->

<div #tooltipRef="tooltip" igxTooltip>
    Her name is Toola Tipa
</div>
```

#### Attach tooltip to target
Now that we have both our target and tooltip defined, all that's left for us to do is assign the tooltip's reference to the [`igxTooltipTarget`]({environment:angularApiUrl}/classes/igxtooltiptargetdirective.html) selector of the target.

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
What if we want to control the amount of time that should pass before showing and hiding the tooltip? For this purpose we can use the [`showDelay`]({environment:angularApiUrl}/classes/igxtooltiptargetdirective.html#showdelay) and the [`hideDelay`]({environment:angularApiUrl}/classes/igxtooltiptargetdirective.html#hidedelay) properties of the [`igxTooltipTarget`]({environment:angularApiUrl}/classes/igxtooltiptargetdirective.html) directive. Both properties are of type **number** and take time span in milliseconds.

Now let's add a couple of [`IgxSlider`](slider.md) elements to control the [`showDelay`]({environment:angularApiUrl}/classes/igxtooltiptargetdirective.html#showdelay) and the [`hideDelay`]({environment:angularApiUrl}/classes/igxtooltiptargetdirective.html#hidedelay). In addition, we will also use the [`IgxSwitch`](switch.md) to enable/disable the user interaction over the tooltip target by using the [`tooltipDisabled`]({environment:angularApiUrl}/classes/igxtooltiptargetdirective.html#tooltipdisabled) property of the target.

We will go ahead and get the `IgxSliderModule` and the `IgxSwitchModule`.
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

Now we can define our sliders and switch controls in the template of the component! Then all we have to do is bind the [`showDelay`]({environment:angularApiUrl}/classes/igxtooltiptargetdirective.html#showdelay) and the [`hideDelay`]({environment:angularApiUrl}/classes/igxtooltiptargetdirective.html#hidedelay) properties as **ngModels** to the two sliders respectively and then bind the [`tooltipDisabled`]({environment:angularApiUrl}/classes/igxtooltiptargetdirective.html#tooltipdisabled) property of the target to the switch control in the same manner.

```html
<!--simpleTooltip.component.html-->

...
<div>
    <div class="bottomMargin">
        <igx-switch [(ngModel)]="target.tooltipDisabled">Disable tooltip</igx-switch>
    </div>
    <div class="bottomMargin">
        <span>Show Delay: {{target.showDelay}} ms</span>
        <igx-slider minValue="0" maxValue="3000" [step]="100" [(ngModel)]="target.showDelay"></igx-slider>                
    </div>
    <div>
        <span>Hide Delay: {{target.hideDelay}} ms</span>
        <igx-slider minValue="0" maxValue="3000" [step]="100" [(ngModel)]="target.hideDelay"></igx-slider>                
    </div>
</div>
```

You can see the result of the code from above at the beginning of this article in the [Tooltip Demo](#demo) section.

> [!NOTE]
> The built-in UI interaction behavior of the [`IgxTooltipTargetDirective`]({environment:angularApiUrl}/classes/igxtooltiptargetdirective.html) and its respective API methods work by taking [`showDelay`]({environment:angularApiUrl}/classes/igxtooltiptargetdirective.html#showdelay) and [`hideDelay`]({environment:angularApiUrl}/classes/igxtooltiptargetdirective.html#hidedelay) property values into account. Showing and hiding the tooltip through the API of the [`IgxTooltipDirective`]({environment:angularApiUrl}/classes/igxtooltipdirective.html) does not take the [`showDelay`]({environment:angularApiUrl}/classes/igxtooltiptargetdirective.html#showdelay) and [`hideDelay`]({environment:angularApiUrl}/classes/igxtooltiptargetdirective.html#hidedelay) property values into account. If necessary, such logic would have to be implemented manually according to the application's specifics.

### Rich tooltip

Customizing and styling the content of our tooltip has never been easier with the [`igxTooltip`]({environment:angularApiUrl}/classes/igxtooltipdirective.html) directive! Since the tooltip itself is an ordinary element in our markup, we can basically improve its content by adding any elements we need and have the ability to style them accordingly!

Let's expand on the use of the [`igxTooltip`]({environment:angularApiUrl}/classes/igxtooltipdirective.html) and use it to provide more details for a specific location on a map! In order to make our application look even better, we will use the [`IgxCard`](card.md) to represent our map, the [`IgxAvatar`](avatar.md) for a logo in our tooltip, the [`IgxIcon`](icon.md) for the location icon on our map and the [`IgxButton`](button.md) for some card actions! For this purpose, we will get their respective modules.

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
            <igx-icon class="cursorHover" color="blue" fontSet="material" igxTooltipTarget>location_on</igx-icon>
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
            <igx-icon class="cursorHover" color="blue" fontSet="material" [igxTooltipTarget]="locationTooltip">location_on</igx-icon>

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
            <span igxButton="icon">
                <igx-icon fontSet="material">favorite</igx-icon>
            </span>
            <span igxButton="icon">
                <igx-icon fontSet="material">share</igx-icon>
            </span>
        </div>
    </igx-card-actions>
</igx-card>
```

If all went well, this is how our location and tooltip should look like:

<div class="sample-container loading" style="height:400px">
    <iframe id="tooltip-rich-iframe" data-src='{environment:demosBaseUrl}/interactions/tooltip-rich' width="100%" height="100%" seamless="" frameBorder="0" class="lazyload"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="tooltip-rich-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>

### Overlay configuration
Both the [`igxTooltip`]({environment:angularApiUrl}/classes/igxtooltipdirective.html) and [`igxTooltipTarget`]({environment:angularApiUrl}/classes/igxtooltiptargetdirective.html) directives use the [`IgxOverlayService`](overlay_main.md) to open and close the respective tooltip element.

The [`igxTooltipTarget`]({environment:angularApiUrl}/classes/igxtooltiptargetdirective.html) directive exposes an [`overlaySettings`]({environment:angularApiUrl}/classes/igxtooltiptargetdirective.html#overlaysettings) property (inherited from the [`igxToggleAction`]({environment:angularApiUrl}/classes/igxtoggleactiondirective.html)), which can be used to customize the animations of our tooltip, its position in the UI and a lot more! If this property is not set, then default overlay settings will be used.

> [!NOTE]
> Any property that is set through the [`overlaySettings`]({environment:angularApiUrl}/classes/igxtooltiptargetdirective.html#overlaysettings) will override the same property from the default overlay settings and will have a direct impact on the tooltip.

### Styles

To get started with styling the tooltip, we need to import the `index` file, where all the theme functions and component mixins live:

```scss
@import '~igniteui-angular/lib/core/styles/themes/index';
```

Following the simplest approach, we create a new theme that extends the [`igx-tooltip-theme`]({environment:sassApiUrl}/index.html#function-igx-tooltip-theme) and accepts the `$text-color`, `$background` and the `$border-radius` parameters.

```scss
$dark-tooltip: igx-tooltip-theme($text-color: #F4D45C, $background: rgb(65,65,65), $border-radius: 10px);
```

> [!NOTE]
> In order to style any additional components that are used as part of the tooltip's content (such as [`IgxButton`](button.md), [`IgxSwitch`](switch.md), etc.), an additional theme should be created that is specific to the respective component and placed under the tooltip's scope only (so it does not affect the rest of the application).

Since the tooltip uses the [`IgxOverlayService`](overlay_main.md), in order for our custom theme to reach down the tooltip that we want to style, we will provide a specific outlet where the tooltip will be placed in the DOM when it is visible.

```html
<igx-avatar #target="tooltipTarget" [igxTooltipTarget]="tooltipRef"
            [igxToggleOutlet]="outlet">
</igx-avatar>

<div #outlet="overlay-outlet" igxOverlayOutlet>
    <div #tooltipRef="tooltip" igxTooltip>
        Her name is Toola Tipa
    </div>
</div>
```

> [!NOTE]
> In order to learn more about various options for providing themes to elements that are shown by using the [`IgxOverlayService`](overlay_main.md), you can take a look at this [link](overlay_main.md#styling).

The last step is to **include** the component theme in our application.

```scss
@include igx-tooltip($dark-tooltip);
```

>[!NOTE]
>If the component is using an [`Emulated`](../themes/component-themes.md#view-encapsulation) ViewEncapsulation, it is necessary to `penetrate` this encapsulation using `::ng-deep`:

```scss
:host {
    ::ng-deep {
        @include igx-tooltip($dark-tooltip);
    }
}
```

#### Defining a color palette

Instead of hardcoding the color values like we just did, we can achieve greater flexibility in terms of colors by using the [`igx-palette`]({environment:sassApiUrl}/index.html#function-igx-palette) and [`igx-color`]({environment:sassApiUrl}/index.html#function-igx-color) functions.

`igx-palette` generates a color palette based on the primary and secondary colors that are passed:

```scss
$yellow-color: #F4D45C;
$black-color: rgb(65,65,65);
$dark-palette: igx-palette($primary: $black-color, $secondary: $yellow-color);
```

And then with [`igx-color`]({environment:sassApiUrl}/index.html#function-igx-color) we can easily retrieve color from the palette. 

```scss
$dark-tooltip: igx-tooltip-theme(
    $palette: $dark-palette,
    $text-color: igx-color($dark-palette, "secondary", 400),
    $background: igx-color($dark-palette, "primary", 400),
    $border-radius: 10px
);
```

#### Using Schemas

Going further with the theming engine, you can build a robust and flexible structure that benefits from [**schemas**](../themes/schemas.md). A **schema** is a recipe of a theme.

Extend one of the two predefined schemas, that are provided for every component, in this case - [`dark-tooltip`]({environment:sassApiUrl}/index.html#variable-_dark-tooltip) schema:

```scss
// Extending the dark tooltip schema
$dark-tooltip-schema: extend($_dark-tooltip,
    (
        text-color:(
            igx-color: ("secondary", 400)
        ),
        background: (
            igx-color: ("primary", 400)
        ),
        border-radius: 10px
    )
);
```

In order to apply our custom schemas we have to **extend** one of the globals ([`light`]({environment:sassApiUrl}/index.html#variable-light-schema) or [`dark`]({environment:sassApiUrl}/index.html#variable-dark-schema)), which is basically pointing out the components with a custom schema, and after that add it to the respective component themes:

```scss
// Extending the global dark-schema
$custom-dark-schema: extend($dark-schema,(
    igx-tooltip: $dark-tooltip-schema
));

// Defining tooltip-theme with the global dark schema
$dark-tooltip: igx-tooltip-theme(
  $palette: $dark-palette,
  $schema: $custom-dark-schema
);
```

Don't forget to include the themes in the same way as it was demonstrated above.

#### Demo

<div class="sample-container loading" style="height:200px">
    <iframe id="tooltip-style-iframe" data-src='{environment:demosBaseUrl}/interactions/tooltip-style' width="100%" height="100%" seamless="" frameBorder="0" class="lazyload"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="tooltip-style-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>

### Accessibility

Elements with the [`igxTooltip`]({environment:angularApiUrl}/classes/igxtooltipdirective.html) directive have an autogenerated [`id`]({environment:angularApiUrl}/classes/igxtooltipdirective.html#id) property (if not set by the developer), a tooltip [`role`]({environment:angularApiUrl}/classes/igxtooltipdirective.html#role) and the **aria-hidden** attribute that is automatically updated depending on whether the tooltip is visible or not. By setting the **aria-describedby** attribute of the target to its respective tooltip's [`id`]({environment:angularApiUrl}/classes/igxtooltipdirective.html#id), a reference will be provided to the tooltip element. This provides screenreaders the information needed to read out the tooltip's contents when the end-user triggers the tooltip.

Extra care should be taken in the following scenarios:
- The tooltip's content is too complex to be automatically interpreted.
- The tooltip is used with a manually implemented behavior (e.g. manually show/hide) instead of the built-in one.
- The target element is unfocusable.

### API References

In this article we learned how to create, configure and style awesome tooltips for the elements on our page! We also used some additional Ignite UI for Angular components like icons, avatars and cards to improve on the design of our application! The respective APIs are listed below:

* [IgxTooltipDirective]({environment:angularApiUrl}/classes/igxtooltipdirective.html)
* [IgxTooltipTargetDirective]({environment:angularApiUrl}/classes/igxtooltiptargetdirective.html)

Additional components and/or directives that were used:

* [IgxAvatarComponent]({environment:angularApiUrl}/classes/igxavatarcomponent.html)
* [IgxButtonDirective]({environment:angularApiUrl}/classes/igxbuttondirective.html)
* [IgxCardComponent]({environment:angularApiUrl}/classes/igxcardcomponent.html)
* [IgxIconComponent]({environment:angularApiUrl}/classes/igxiconcomponent.html)
* [IgxSliderComponent]({environment:angularApiUrl}/classes/igxslidercomponent.html)
* [IgxSwitchComponent]({environment:angularApiUrl}/classes/igxswitchcomponent.html)
* [IgxToggleDirective]({environment:angularApiUrl}/classes/igxtoggledirective.html)
* [IgxToggleActionDirective]({environment:angularApiUrl}/classes/igxtoggleactiondirective.html)

Styles:

* [IgxTooltipDirective Styles]({environment:sassApiUrl}/index.html#function-igx-tooltip-theme)
* [IgxAvatarComponent Styles]({environment:sassApiUrl}/index.html#function-igx-avatar-theme)
* [IgxButtonDirective Styles]({environment:sassApiUrl}/index.html#function-igx-button-theme)
* [IgxCardComponent Styles]({environment:sassApiUrl}/index.html#function-igx-card-theme)
* [IgxIconComponent Styles]({environment:sassApiUrl}/index.html#function-igx-icon-theme)
* [IgxSliderComponent Styles]({environment:sassApiUrl}/index.html#function-igx-slider-theme)
* [IgxSwitchComponent Styles]({environment:sassApiUrl}/index.html#function-igx-switch-theme)

<div class="divider"></div>

### Additional Resources

<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
