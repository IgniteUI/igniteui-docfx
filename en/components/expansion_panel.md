---
title: Angular Panel | Expandable | Ignite UI for Angular | Infragistics
_description: Use an Angular accordion/material expansion panel which provides an easily configurable expandable component with two states - collapsed and expanded.
_keywords: angular accordion, igniteui for angular, infragistics
---

## Expansion Panel
<p class="highlight">
    The [igx-expansion-panel]({environment:angularApiUrl}/classes/igxexpansionpanelcomponent.html) is a lightweight Angular accordion component which can be rendered in two states - collapsed or expanded. The expansion panel can be toggled using mouse click, or keyboard interactions.
</p>
<div class="divider--half"></div>
### Usage
<div class="sample-container loading" style="height: 320px;">
    <iframe id="expansion-sample-1-sample" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/layouts/expansion-sample-1" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="expansion-sample-1-sample" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>

First, we need to import the **IgxExpansionPanelModule** in our **app.module**:
```typescript
// app.module.ts
...
import { IgxExpansionPanelModule } from 'igniteui-angular';

@NgModule({
    ...
    imports: [..., IgxExpansionPanelModule],
    ...
})
export class AppModule {}
```

After that we can add the markup for our component:
```html
<!-- expansible-panel.component.html -->
<igx-expansion-panel>
    <igx-expansion-panel-header>
        <igx-expansion-panel-title>
           Golden Retriever
        </igx-expansion-panel-title>
        <igx-expansion-panel-description>
           Medium-large gun dog
        </igx-expansion-panel-description>
    </igx-expansion-panel-header>
    <igx-expansion-panel-body>
        The Golden Retriever is a medium-large gun dog that retrieves shot waterfowl, 
such as ducks and upland game birds, during hunting and shooting parties. 
The name "retriever" refers to the breed's ability to retrieve shot game undamaged due to their soft mouth. 
Golden retrievers have an instinctive love of water, and are easy to train to basic or advanced obedience standards.
    </igx-expansion-panel-body>
</igx-expansion-panel>
```

The table below shows all the available markup parts for the expansion panel.
| Tag Name                          | Description                                                                                                            |
| :-------------------------------: | :--------------------------------------------------------------------------------------------------------------------: |
| `igx-expansion-panel`             | The component host - stores header and body.                                                                           |
| `igx-expansion-panel-header`      | Stores the component header. This is always visible. Stores title and description as well as any additional content    |
| `igx-expansion-panel-title`       | Use it to set expansion panel title.                                                                                   |
| `igx-expansion-panel-description` | It can be used to provide a short summary. The description will always appear after the title (if the title is set).   |
| `igx-expansion-panel-icon`        | Use it to change the default expand/collapse icon.                                                                     |
| `igx-expansion-panel-body`        | This is the expandable container and it's only visible when the panel is expanded.                                     |


### Properties Binding and Events
We can add some logic to our component to make it show/hide the `igx-expansion-panel-description` depending on the current state of the panel.  
We can do this by binding the description to the control [`collapsed`]({environment:angularApiUrl}/classes/igxexpansionpanelcomponent.html#collapsed) property:

```typescript
// in expansion-panel.component.ts
import { IgxExpansionPanelComponent } from 'igniteui-angular';
@Component({
    ...
})
export class ExpansionPanelComponent {
    @ViewChild(IgxExpansionPanelComponent, {read: IgxExpansionPanelComponent})
    public panel: IgxExpansionPanelComponent;
}
```

```html
<!-- in expansion-component.component.html -->
...
    <igx-expansion-panel-header>
        Golden Retriever
        <igx-expansion-panel-description *ngIf="panel.collapsed">
            Medium-large gun dog
        </igx-expansion-panel-description>
    </igx-expansion-panel-header>
    ...
```

The following code sample will show the short description only when the component is in its collapsed state.
If we want to add more complex functionality depending on the component state, we could also bind to an event emitter.
```typescript
// in expansion-panel.component.ts

export class ExpansionPanelComponent {
    ...
    public handleExpansion(args: {event: Event}): void {
        ... // Some functionality
    }
}
```
```html
<!-- in expansion-component.component.html -->
<igx-expansion-panel (onExpanded)="handleExpansion($event)  (onCollapsed)="handleCollapse($event)"></igx-expansion-panel>
```

Below we have the results:
<div class="sample-container loading" style="height: 320px;">
    <iframe id="expansion-sample-2-sample" frameborder="0" seamless="" width="100%" height="100%" data-src="{environment:demosBaseUrl}/layouts/expansion-sample-2" class="lazyload"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="expansion-sample-2-sample" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>

### Component Customization
The [`IgxExpansionPanelComponent`]({environment:angularApiUrl}/classes/igxexpansionpanelcomponent.html) allows for easy customization of [the header]({environment:angularApiUrl}/classes/igxexpansionpanelheadercomponent.html).
Configuring the position of the header icon can be done through the [`iconPosition`]({environment:angularApiUrl}/classes/igxexpansionpanelheadercomponent.html#iconposition) input on the `igx-expansion-panel-header`. The possible options for the icon position are **left**, **right** and **none**. The next code sample demonstrates how to configure the component's button to go on the *right* side.

```html
<!-- in expansion-component.component.html -->
<igx-expansion-panel>
    <igx-expansion-panel-header [iconPosition]="'right'"></igx-expansion-panel-header>
    ...
</igx-expansion-panel>
```
> Note: The [`iconPosition`]({environment:angularApiUrl}/classes/igxexpansionpanelheadercomponent.html#iconposition) property works with `RTL` - e.g. an icon set to show up in **right** will show in the leftmost part of the header when RTL is on.

The default icon for the toggle state of the control can be templated.
We can do that by passing content in an `igx-expansion-panel-icon` tag:
```html
<!-- in expansion-component.component.html -->
    <igx-expansion-panel>
    ...
        <igx-expansion-panel-header [iconPosition]="'right'">
        ...
        <igx-expansion-panel-icon>
            <span class="example-icon" *ngIf="panel.collapsed">Show More</span>
            <span class="example-icon" *ngIf="!panel.collapsed">Show Less</span>
        </igx-expansion-panel-icon>
        </igx-expansion-panel-header>
    </igx-expansion-panel>
```
Our component will now render "Show More" when the panel is collapsed and "Show Less" once it's fully expanded.

The `IgxExpansionPanel` control allows all sorts of content to be added inside of the `igx-expansion-panel-body`. It can render [`IgxGrid`](grid/grid.md)s, [`IgxCombo`](combo.md), charts and even other expansion panels!

For the sake of simplicity let's add some basic markup to the body of our expansion panel.
```html
<!-- in expansion-panel.component.html -->
...
<igx-expansion-panel-body>
    <div class="example-content">
        <img [src]="imgSource" alt="dog-image">
        The Golden Retriever is a medium-large gun dog that retrieves shot waterfowl, such as ducks and upland game birds, during hunting and shooting parties. The name "retriever" refers to the breed's ability to retrieve shot game undamaged due to their soft mouth. Golden retrievers have an instinctive love of water, and are easy to train to basic or advanced obedience standards.
        <a igxButton="outlined" target="_blank" [href]="readMore">Read more</a>
    </div>
</igx-expansion-panel-body>
...
```

Lets see the result from all the above changes:
<div class="sample-container loading" style="height: 460px;">
    <iframe id="expansion-sample-3-sample" frameborder="0" seamless="" width="100%" height="100%" data-src="{environment:demosBaseUrl}/layouts/expansion-sample-3" class="lazyload"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="expansion-sample-3-sample" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>


## Styling  

### Demo
<div class="sample-container loading" style="height: 440px;">
    <iframe id="expansion-styling" frameborder="0" seamless="" width="100%" height="100%" data-src="{environment:demosBaseUrl}/layouts/expansion-styling" class="lazyload no-theming"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="expansion-styling" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>

### Palettes & Colors
Fist we create a custom palette which can later be passed to our component:
```scss
// In real life, this should be in our main sass file so we can share the palette between all components. 
// In our case, it's in the component SCSS file "expansion-styling.component.scss".

// Import theming engine functionality.
@import '~igniteui-angular/lib/core/styles/themes/index';

// Add your brand colors.
$my-primary-color:#353a4b;
$my-secondary-color: #ffd351;

// Create custom palette.
$my-color-palette: igx-palette(
    $primary: $my-primary-color,
    $secondary: $my-secondary-color
);
```

### Creating the Component Theme
Now let's create our component theme and pass the `$my-color-palette` palette from the above sniped.
```scss
// In expansion-styling.component.scss
// Create expansion panel theme.
$custom-panel-theme: igx-expansion-panel-theme(
    // pass `$my-color-palette` palette.
    $palette: $my-color-palette,

    // Styling parameters.
    $header-background: igx-color($my-color-palette, "primary", 700),
    $header-focus-background: igx-color($my-color-palette, "primary", 700),
    $header-title-color: igx-color($my-color-palette, "secondary"),
    $header-icon-color: igx-color($my-color-palette, "secondary"),
    $body-background: igx-color($my-color-palette, "primary", 700),
    $body-color: igx-color($my-color-palette, "secondary" 100),
    $border-radius: .5
);
```
>[!NOTE]
> To see all the available parameters for styling trough the [`theming`](themes/component-themes.md) engine check the [`API documentation`]({environment:sassApiUrl}/index.html#function-igx-expansion-panel-theme)

### Applying the Component Theme
Now to apply the component theme all that's left is to include `igx-css-vars` mixin and pass the `$custom-panel-theme` map.
```scss
// In expansion-styling.component.scss
// Pass our custom-panel-theme to `igx-expansion-panel` mixin.
// The `:host` here makes sure that all the theming will affect only this component.
:host {
  @include igx-css-vars($custom-panel-theme);
}
```

 >[!NOTE]
 > If you need to support Internet explorer 11 you have to use the component mixin `igx-expansion-panel` instead of `igx-css-vars` and because our component have [`Emulated`](themes/component-themes.md#view-encapsulation) ViewEncapsulation we have to penetrate it by using `::ng-deep`.
 > Also in order to prevent our custom theme from leaking into other components, we have to include the `:host` selector before `::ng-deep`:

```scss
// In expansion-styling.component.scss
// The `:host` here makes sure that all the theming will affect only this component after the ViewEncapsulation Penetration.
:host {
    // Penetrate the ViewEncapsulation.
    ::ng-deep {
        @include igx-expansion-panel($custom-panel-theme);
    }
}
```

To find out more on how you can use Ignite UI theming engine [`click here`](themes/component-themes.md)

## Using Animations
### Using specific animation
It is possible to use other than default animation when expanding and collapsing the component.
Assuming the igxExpansionPanel is already imported in `app.module.ts` as previously described, you can create a custom animation setting object and set it to be used in the igxExpansionPanel. The approach requires the [`useAnimation`](https://angular.io/api/animations/useAnimation) method and the specific animations to be used so we start importing these and defining the animation settings like:

```typescript
// in expansion-panel.component.ts
import { useAnimation } from "@angular/animations";
import { IgxExpansionPanelComponent, slideInLeft, slideOutRight } from 'igniteui-angular';
@Component({
    ...
})
export class ExpansionPanelComponent {
    @ViewChild(IgxExpansionPanelComponent, {read: IgxExpansionPanelComponent})
    public panel: IgxExpansionPanelComponent;

    public animationSettingsCustom = {
        closeAnimation: useAnimation(slideOutRight, {
            params: {
                duration: "100ms",
                toPosition: "translateX(25px)"
            }
        }),
        openAnimation: useAnimation(slideInLeft, {
            params: {
                duration: "500ms",
                fromPosition: "translateX(-15px)",
                startOpacity: 0.1
            }
        })
    };

    public collapsed() {
        return this.panel && this.panel.collapsed;
    }
}
```
As you can see, we are going to use [`slideInLeft`]({environment:sassApiUrl}/index.html#mixin-slide-in-left) and [`slideOutRight`]({environment:sassApiUrl}/index.html#mixin-slide-out-right) animations from our [**inbuilt suite of animations**]({environment:sassApiUrl}/index.html#animations) to make the component content appear more dramatically from the left side and disappear on the right when collapsing the content. In the process, we override some of the existing parameters with the specific ones we want to use.

The sample shows some user information and the key point here is passing the animation settings to the component like:
`[animationSettings] = "animationSettingsCustom"`

```html
<!-- in expansion-panel.component.html -->
...
<igx-expansion-panel [animationSettings] = "animationSettingsCustom" class="my-expansion-panel">
    <igx-expansion-panel-header>
        <igx-expansion-panel-title class="sample-title">Angular</igx-expansion-panel-title>
    </igx-expansion-panel-header>
    <igx-expansion-panel-body class="example-content">
        Angular (commonly referred to as "Angular 2+" or "Angular v2 and above") is a TypeScript-based open-source web application framework led by the Angular Team at Google and by a community of individuals and corporations.
    </igx-expansion-panel-body>
</igx-expansion-panel>
...
```

You can see the results below:
<div class="sample-container loading" style="height: 380px;">
    <iframe id="expansion-sample-5-sample" frameborder="0" seamless="" width="100%" height="100%" data-src="{environment:demosBaseUrl}/layouts/expansion-sample-5" class="lazyload"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="expansion-sample-5-sample" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>

## Multiple panel scenario
In the following example, we are going to implement more like app case scenario, where you want to follow a particular workflow showing and requiring more user details on portions. In this sample, the default `growVerIn` and `growVerOut` animations from our inbuilt animations suite are used thus there is no need to pass any specific animation settings or import animations. Notice how we do not allow more than one `igxExpansionPanel` to be expanded at a time, handling the [`onInteraction`]({environment:angularApiUrl}/classes/igxexpansionpanelheadercomponent.html#oninteraction)  event.

```typescript
// in expansion-panel.component.ts
import { Component, QueryList, ViewChildren } from "@angular/core";
import { IgxExpansionPanelComponent } from "igniteui-angular";

@Component({
    ...
})
export class ExpansionPanelComponent {
    @ViewChildren(IgxExpansionPanelComponent)
    public accordion: QueryList<IgxExpansionPanelComponent>;

    public collapsed(index: number) {
         if (!this.accordion) {
            return true;
         }
         return this.accordion.toArray()[index] && this.accordion.toArray()[index].collapsed;
     }

    public onInteraction(event) {
        const expandedPanels = this.accordion.filter((panel) => !panel.collapsed);
        expandedPanels.forEach((expandedPanel) => {
            if (expandedPanel.elementRef !==  event.event.currentTarget) {
                expandedPanel.collapse();
            }
        });
    }
}
```

```html
<!-- in expansion-panel.component.html -->
<igx-expansion-panel class="my-expansion-panel">
    <igx-expansion-panel-header (onInteraction)="onInteraction($event)" [disabled]="false">
        <igx-expansion-panel-title class="sample-title">HTML5</igx-expansion-panel-title>
    </igx-expansion-panel-header>
    <igx-expansion-panel-body>
        <div class="example-content">
            HTML5 is a software solution stack that defines the properties and behaviors of web page content by implementing a markup-based pattern to it.            
    </div>
    </igx-expansion-panel-body>
</igx-expansion-panel>
<igx-expansion-panel class="my-expansion-panel">
    <igx-expansion-panel-header (onInteraction)="onInteraction($event)" [disabled]="false">
        <igx-expansion-panel-title class="sample-title">CSS3</igx-expansion-panel-title>
    </igx-expansion-panel-header>
    <igx-expansion-panel-body>
        <div class="example-content">
            Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language like HTML            
        </div>
    </igx-expansion-panel-body>
</igx-expansion-panel>
<igx-expansion-panel class="my-expansion-panel">
    <igx-expansion-panel-header (onInteraction)="onInteraction($event)" [disabled]="false">
        <igx-expansion-panel-title class="sample-title">SASS/SCSS</igx-expansion-panel-title>
    </igx-expansion-panel-header>
    <igx-expansion-panel-body>
        <div class="example-content">
            Sass is a preprocessor scripting language that is interpreted or compiled into Cascading Style Sheets (CSS). 
        </div>
    </igx-expansion-panel-body>
</igx-expansion-panel>
```
You can see the results below:
<div class="sample-container loading" style="height: 480px;">
    <iframe id="expansion-sample-4-sample" frameborder="0" seamless="" width="100%" height="100%" data-src="{environment:demosBaseUrl}/layouts/expansion-sample-4" class="lazyload"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="expansion-sample-4-sample" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>

## API Reference
* [IgxExpansionPanel API]({environment:angularApiUrl}/classes/igxexpansionpanelcomponent.html)
* [IgxExpansionPanelHeader API]({environment:angularApiUrl}/classes/igxexpansionpanelheadercomponent.html)
* [IgxExpansionPanelBody API]({environment:angularApiUrl}/classes/igxexpansionpanelbodycomponent.html)
* [IgxExpansionPanel Styles]({environment:sassApiUrl}/index.html#mixin-igx-expansion-panel)
