---
title: Tooltip - Native Angular | Ignite UI for Angular
_description: The Ignite UI for Angular Tooltip and Tooltip Target directives feature the ability to create a tooltip and attach it to an element.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Tooltip directives, Angular Tooltip controls, Angular Tooltip, tooltip, tooltip target
---

# Tooltip

The [`igxTooltip`]({environment:angularApiUrl}/classes/igxtooltipdirective.html) and the [`igxTooltipTarget`]({environment:angularApiUrl}/classes/igxtooltiptargetdirective.html) directives provide us with the ability to create a fully customizable tooltip and attach it to any element on our page.
While most tooltips have a limited number of available positions, with the [`igxTooltipTarget`]({environment:angularApiUrl}/classes/igxtooltiptargetdirective.html) directive we can specify any position we want on the page while keeping it in relation to the target (anchor) and provide various other overlay settings like scroll strategies and custom animations!

## Angular Tooltip Example

<div class="sample-container loading" style="height:150px">
    <iframe id="tooltip-simple-iframe" src='{environment:demosBaseUrl}/interactions/tooltip-simple' width="100%" height="100%" seamless="" frameborder="0" onload="onSampleIframeContentLoaded(this);" alt="Angular Tooltip Example"></iframe>
</div>
<p style="margin: 0;padding-top: 0.5rem">Like this sample? Get access to our complete Angular toolkit and start building your own apps in minutes. <a class="no-external-icon mchNoDecorate trackCTA" target="_blank" href="https://www.infragistics.com/products/ignite-ui-angular/download" data-xd-ga-action="Download" data-xd-ga-label="Ignite UI for Angular">Download it for free.</a></p>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="tooltip-simple-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on codesandbox</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="tooltip-simple-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>

## Usage

The first step is to import the `IgxTooltipModule` in the app.module.ts file.

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

## Simple tooltip

Let's say we want to create a simple text tooltip like the one above. In our case, we're using our awesome [`IgxAvatar`](avatar.md) as the element, so we start by importing the `IgxAvatarModule` first.

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

### Tooltip target
The avatar will be our target and all we have to do is set the [`igxTooltipTarget`]({environment:angularApiUrl}/classes/igxtooltiptargetdirective.html) directive on it, which basically marks our element as one that has a tooltip.

- The [`igxTooltipTarget`]({environment:angularApiUrl}/classes/igxtooltiptargetdirective.html) directive extends the [`igxToggleAction`]({environment:angularApiUrl}/classes/igxtoggleactiondirective.html) directive.
- The [`igxTooltipTarget`]({environment:angularApiUrl}/classes/igxtooltiptargetdirective.html) directive is exported with the name **tooltipTarget**.

```html
<!--simpleTooltip.component.html-->

<igx-avatar class="avatar" #target="tooltipTarget" igxTooltipTarget
            src="assets/images/avatar/10.jpg" size="medium" [roundShape]="true">
</igx-avatar>
```

### Tooltip
Now let's create the tooltip element itself! Since we want a simple text tooltip, we will define an ordinary div element with text inside and set the [`igxTooltip`]({environment:angularApiUrl}/classes/igxtooltipdirective.html) directive on it, which marks it as a tooltip.

- The [`igxTooltip`]({environment:angularApiUrl}/classes/igxtooltipdirective.html) directive extends the [`igxToggle`]({environment:angularApiUrl}/classes/igxtoggledirective.html) directive.
- The [`igxTooltip`]({environment:angularApiUrl}/classes/igxtooltipdirective.html) directive is exported with the name **tooltip**.

```html
<!--simpleTooltip.component.html-->

<div #tooltipRef="tooltip" igxTooltip>
    Her name is Madelyn James
</div>
```

### Attach tooltip to target
Now that we have both our target and tooltip defined, all that's left for us to do is assign the tooltip's reference to the [`igxTooltipTarget`]({environment:angularApiUrl}/classes/igxtooltiptargetdirective.html) selector of the target.

```html
<!--simpleTooltip.component.html-->

<igx-avatar class="avatar" #target="tooltipTarget" [igxTooltipTarget]="tooltipRef"
            src="assets/images/avatar/10.jpg" size="medium" [roundShape]="true">
</igx-avatar>

<div #tooltipRef="tooltip" igxTooltip>
    Her name is Madelyn James
</div>
```

If everything went well, you should see the sample shown in the [Tooltip Demo](#demo) section.

### Show/Hide delay settings
What if we want to control the amount of time that should pass before showing and hiding the tooltip? For this purpose we can use the [`showDelay`]({environment:angularApiUrl}/classes/igxtooltiptargetdirective.html#showdelay) and the [`hideDelay`]({environment:angularApiUrl}/classes/igxtooltiptargetdirective.html#hidedelay) properties of the [`igxTooltipTarget`]({environment:angularApiUrl}/classes/igxtooltiptargetdirective.html) directive. Both properties are of type **number** and take time in milliseconds.

> [!NOTE]
> The built-in UI interaction behavior of the [`IgxTooltipTargetDirective`]({environment:angularApiUrl}/classes/igxtooltiptargetdirective.html) and its respective API methods work by taking [`showDelay`]({environment:angularApiUrl}/classes/igxtooltiptargetdirective.html#showdelay) and [`hideDelay`]({environment:angularApiUrl}/classes/igxtooltiptargetdirective.html#hidedelay) property values into account. Showing and hiding the tooltip through the API of the [`IgxTooltipDirective`]({environment:angularApiUrl}/classes/igxtooltipdirective.html) does not take the [`showDelay`]({environment:angularApiUrl}/classes/igxtooltiptargetdirective.html#showdelay) and [`hideDelay`]({environment:angularApiUrl}/classes/igxtooltiptargetdirective.html#hidedelay) property values into account. If necessary, such logic would have to be implemented manually according to the application's specifics.

## Rich tooltip

Customizing and styling the content of our tooltip has never been easier with the [`igxTooltip`]({environment:angularApiUrl}/classes/igxtooltipdirective.html) directive! Since the tooltip itself is an ordinary element in our markup, we can basically improve its content by adding any elements we need and have the ability to style them accordingly!

Let's expand on the use of the [`igxTooltip`]({environment:angularApiUrl}/classes/igxtooltipdirective.html) and use it to provide more details for a specific location on a map! We'll use a simple div to represent our map, the [`IgxAvatar`](avatar.md) for a logo in our tooltip and the [`IgxIcon`](icon.md) for the location icon on our map. For this purpose, we will get their respective modules.

```typescript
// app.module.ts

...
import {
    IgxTooltipModule,
    IgxAvatarModule,
    IgxIconModule,
} from 'igniteui-angular';

@NgModule({
    ...
    imports: [IgxTooltipModule, IgxAvatarModule, IgxIconModule],
})
export class AppModule {}
```

We will also use the following styles for our application:

```css
/* richTooltip.component.css */

.location:hover {
    cursor: pointer;
}

.map {
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 200px;
    height: 252px;
    background-image: url(assets/images/card/media/infragisticsMap.png);
    border: 1px solid #D4D4D4;
}

.locationTooltip {
    width: 310px;
    background-color: var(--igx-grays-700);
    padding: 3px;
    font-size: 13px;
}

.locationTooltipContent {
    display: flex;
    justify-content: center;
    align-items: center;
}

.logo {
    margin-right: 10px;
    min-width: 25px;
    width: 45px;
    height: 45px;
}
```

Let's start by creating our map. We need a simple div that has for a background an image with a map. Also, we will add an icon that will indicate the position of our location! Since we want to provide more details for this location, our icon will obviously be the tooltip target.

```html
<!--richTooltip.component.html-->

<div class="map">
    <igx-icon class="location" color="blue" fontSet="material"
    [igxTooltipTarget]="locationTooltip">location_on</igx-icon>
    ...
</div>
```

Now for the tooltip! For its content, we will create a container that will be populated with some text information elements and an avatar. Then we will simply attach the tooltip to the target and include some nice CSS styling!

```html
<!--richTooltip.component.html-->

<div class="wrapper">
    <div class="map">
        <igx-icon class="location" color="blue" fontSet="material"
        [igxTooltipTarget]="locationTooltip">location_on</igx-icon>

        <div class="locationTooltip" #locationTooltip="tooltip" igxTooltip>
            <div class="locationTooltipContent">
                <igx-avatar class="logo" src="assets/images/card/avatars/igLogo.png"
                    size="medium" [roundShape]="false"></igx-avatar>
                <div>
                    <div>Infragistics Inc. HQ</div>
                    <div>2 Commerce Dr, Cranbury, NJ 08512, USA</div>
                </div>
            </div>
        </div>
    </div>
</div>

```

If all went well, this is how our location and tooltip should look like:

<div class="sample-container loading" style="height:300px">
    <iframe id="tooltip-rich-iframe" data-src='{environment:demosBaseUrl}/interactions/tooltip-rich' width="100%" height="100%" seamless frameBorder="0" class="lazyload"></iframe>
</div>
<br/>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="tooltip-rich-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on codesandbox</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="tooltip-rich-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>

## Overlay configuration
Both the [`igxTooltip`]({environment:angularApiUrl}/classes/igxtooltipdirective.html) and [`igxTooltipTarget`]({environment:angularApiUrl}/classes/igxtooltiptargetdirective.html) directives use the [`IgxOverlayService`](overlay-main.md) to open and close the respective tooltip element.

The [`igxTooltipTarget`]({environment:angularApiUrl}/classes/igxtooltiptargetdirective.html) directive exposes an [`overlaySettings`]({environment:angularApiUrl}/classes/igxtooltiptargetdirective.html#overlaysettings) property (inherited from the [`igxToggleAction`]({environment:angularApiUrl}/classes/igxtoggleactiondirective.html)), which can be used to customize the animations of our tooltip, its position in the UI and a lot more! If this property is not set, then default overlay settings will be used.

> [!NOTE]
> Any property that is set through the [`overlaySettings`]({environment:angularApiUrl}/classes/igxtooltiptargetdirective.html#overlaysettings) will override the same property from the default overlay settings and will have a direct impact on the tooltip.

## Styling

To get started with styling the tooltip, we need to import the `index` file, where all the theme functions and component mixins live:

```scss
@import '~igniteui-angular/lib/core/styles/themes/index';
```

Following the simplest approach, we create a new theme that extends the [`igx-tooltip-theme`]({environment:sassApiUrl}/index.html#function-igx-tooltip-theme) and accepts the `$text-color`, `$background` and the `$border-radius` parameters.

```scss
$dark-tooltip: igx-tooltip-theme(
    $text-color: #ECAA53,
    $background: #011627,
    $border-radius: 6px
);
```

> [!NOTE]
> In order to style any additional components that are used as part of the tooltip's content (such as [`IgxButton`](button.md), [`IgxSwitch`](switch.md), etc.), an additional theme should be created that is specific to the respective component and placed under the tooltip's scope only (so it does not affect the rest of the application).

Since the tooltip uses the [`IgxOverlayService`](overlay-main.md), in order for our custom theme to reach down the tooltip that we want to style, we will provide a specific outlet where the tooltip will be placed in the DOM when it is visible.

```html
<igx-avatar #target="tooltipTarget" [igxTooltipTarget]="tooltipRef"
            [igxToggleOutlet]="outlet">
</igx-avatar>

<div #outlet="overlay-outlet" igxOverlayOutlet>
    <div #tooltipRef="tooltip" igxTooltip>
        Her name is Madelyn James
    </div>
</div>
```

> [!NOTE]
> In order to learn more about various options for providing themes to elements that are shown by using the [`IgxOverlayService`](overlay-main.md), you can take a look at this [link](overlay-main.md#styling).

### Including Themes

<div class="divider"></div>

The last step is to **include** the component theme in our application.

If `$legacy-support` is set to `true`, include the **component theme** like that:

```scss
 @include igx-tooltip($dark-tooltip);
```
>[!NOTE]
>If the component is using an [`Emulated`](themes/component-themes.md#view-encapsulation) ViewEncapsulation, it is necessary to `penetrate` this encapsulation using `::ng-deep`

```scss
:host {
     ::ng-deep {
        @include igx-tooltip($dark-tooltip);
    }
}
```

<div class="divider"></div>

If `$legacy-support` is set to `false`(default), include the component **css variables** like that:

```scss
@include igx-css-vars($dark-tooltip);
```

>[!NOTE]
>If the component is using an [`Emulated`](themes/component-themes.md#view-encapsulation) ViewEncapsulation, you still have to use `:host` because you need a global selector in order to override the variables.

```scss
:host {
    @include igx-css-vars($dark-tooltip);
}
```

So now our styled tooltip should look like this:

### Demo

<div class="sample-container loading" style="height:200px">
    <iframe id="tooltip-style-iframe" data-src='{environment:demosBaseUrl}/interactions/tooltip-style' width="100%" height="100%" seamless frameBorder="0" class="lazyload"></iframe>
</div>
<br/>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="tooltip-style-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on codesandbox</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="tooltip-style-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>

## Accessibility

Elements with the [`igxTooltip`]({environment:angularApiUrl}/classes/igxtooltipdirective.html) directive have an autogenerated [`id`]({environment:angularApiUrl}/classes/igxtooltipdirective.html#id) property (if not set by the developer), a tooltip [`role`]({environment:angularApiUrl}/classes/igxtooltipdirective.html#role) and the **aria-hidden** attribute that is automatically updated depending on whether the tooltip is visible or not. By setting the **aria-describedby** attribute of the target to its respective tooltip's [`id`]({environment:angularApiUrl}/classes/igxtooltipdirective.html#id), a reference will be provided to the tooltip element. This provides screenreaders the information needed to read out the tooltip's contents when the end-user triggers the tooltip.

Extra care should be taken in the following scenarios:
- The tooltip's content is too complex to be automatically interpreted.
- The tooltip is used with a manually implemented behavior (e.g. manually show/hide) instead of the built-in one.
- The target element is unfocusable.

## API References

In this article we learned how to create, configure and style awesome tooltips for the elements on our page! We also used some additional Ignite UI for Angular components like icons and avatars to improve on the design of our application! The respective APIs are listed below:

* [IgxTooltipDirective]({environment:angularApiUrl}/classes/igxtooltipdirective.html)
* [IgxTooltipTargetDirective]({environment:angularApiUrl}/classes/igxtooltiptargetdirective.html)

Additional components and/or directives that were used:

* [IgxAvatarComponent]({environment:angularApiUrl}/classes/igxavatarcomponent.html)
* [IgxIconComponent]({environment:angularApiUrl}/classes/igxiconcomponent.html)
* [IgxToggleDirective]({environment:angularApiUrl}/classes/igxtoggledirective.html)
* [IgxToggleActionDirective]({environment:angularApiUrl}/classes/igxtoggleactiondirective.html)

Styles:

* [IgxTooltipDirective Styles]({environment:sassApiUrl}/index.html#function-igx-tooltip-theme)
* [IgxAvatarComponent Styles]({environment:sassApiUrl}/index.html#function-igx-avatar-theme)
* [IgxIconComponent Styles]({environment:sassApiUrl}/index.html#function-igx-icon-theme)

<div class="divider"></div>

## Additional Resources

<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
