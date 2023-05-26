---
title: Angular Accordion Component – Fully-featured collapsible panels - Infragistics 
_description: Angular Accordion is used to build vertical expandable panels in accordion menu. Check how to do it with Ignite UI for Angular accordion component. 
_keywords: angular accordion, angular accordion component, angular accordion example, ignite ui for angular, angular UI components, infragistics
---

# Angular Accordion Component Overview

## What is Angular Accordion? 

The Angular Accordion is a GUI component for building vertical expandable panels with clickable headers and associated content sections, displayed in a single container. The accordion is commonly used to reduce the need of scrolling across multiple sections of content on a single page. It offers keyboard navigation and API to control the underlying panels' expansion state. 

Users are enabled to interact and navigate among a list of items, such as thumbnails or labels. Each one of those items can be toggled (expanded or collapsed) in order to reveal the containing information. Depending on the configuration, there can be a single or multiple expanded items at a time. 

## Angular Accordion Example
The following is a basic Angular Accordion example of a FAQ section. It operates as an accordion, with individually working sections. You can toggle each text block with a single click, while expanding multiple panels at the same time. This way you can read information more easily, without having to go back and forth between an automatically expanding and collapsing panel, which conceals the previously opened section every time. 

In it, you can see how to define an `igx-accrodion` and its [expansion panels]({environment:angularApiUrl}/classes/igxexpansionpanelcomponent.html). The sample also demonstrates the two types of expansion behavior. The switch button sets the [singleBranchExpand]({environment:angularApiUrl}/classes/igxaccordioncomponent.html#singleBranchExpand) property to toggle between single and multiple branches to be expanded at a time.

<code-view style="height:460px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/layouts/accordion-sample-1" alt="Angular Avatar Example">
</code-view>

<div class="divider--half"></div>

## Getting Started with Ignite UI for Angular Accordion

To get started with the Ignite UI for Angular Accordion component, first you need to install Ignite UI for Angular. In an existing Angular application, type the following command:

```cmd
ng add igniteui-angular
```
For a complete introduction to the Ignite UI for Angular, read the [*getting started*](general/getting-started.md) topic.

The next step is to import the `IgxAccordionModule` in your **app.module.ts** file. 

```typescript
// app.module.ts

...
import { IgxAccordionModule } from 'igniteui-angular';
// import { IgxAccordionModule } from '@infragistics/igniteui-angular'; for licensed package

@NgModule({
    ...
    imports: [..., IgxAccordionModule],
    ...
})
export class AppModule {}
```
Now that you have the Ignite UI for Angular Accordion module imported, you can start with a basic configuration of the `igx-accordion` and its panels.

Alternatively, as of `16.0.0` you can import the `IgxAccordionComponent` as a standalone dependency, or use the [`IGX_ACCORDION_DIRECTIVES`](https://github.com/IgniteUI/igniteui-angular/blob/master/projects/igniteui-angular/src/lib/accordion/public_api.ts) token to import the component and all of its supporting components and directives.

```typescript
// home.component.ts

...
import { IGX_ACCORDION_DIRECTIVES } from 'igniteui-angular';
// import { IGX_ACCORDION_DIRECTIVES } from '@infragistics/igniteui-angular'; for licensed package

@Component({
    selector: 'app-home',
    template: `
    <igx-accordion>
        <igx-expansion-panel>
            <igx-expansion-panel-header>
                <igx-expansion-panel-title>Title Panel 1</igx-expansion-panel-title>
            </igx-expansion-panel-header>
            <igx-expansion-panel-body>
                Content Panel 1
            </igx-expansion-panel-body>
        </igx-expansion-panel>
    </igx-accordion>
    `,
    styleUrls: ['home.component.scss'],
    standalone: true,
    imports: [IGX_ACCORDION_DIRECTIVES]
    /* or imports: [IgxAccordionComponent] */
})
export class HomeComponent {}
```

## Usage

Each section in the [IgxAccordionComponent]({environment:angularApiUrl}/classes/igxaccordioncomponent.html) is defined using an [expansion panel]({environment:angularApiUrl}/classes/igxexpansionpanelcomponent.html).
Panels provide [disabled]({environment:angularApiUrl}/classes/igxexpansionpanelheadercomponent.html#disabled), [collapsed]({environment:angularApiUrl}/classes/igxexpansionpanelcomponent.html#collapsed) and [animationSettings]({environment:angularApiUrl}/classes/igxexpansionpanelcomponent.html#animationSettings) properties, which give you the ability to configure the states of the panel as per your requirement. 

### Declaring an accordion

The accordion wraps all [`igx-expansion-panel`s]({environment:angularApiUrl}/classes/igxexpansionpanelcomponent.html) declared inside it.

```html
<igx-accordion #accordion [singleBranchExpand]="true">
    <igx-expansion-panel>
        <igx-expansion-panel-header>
            <igx-expansion-panel-title>Title Panel 1</igx-expansion-panel-title>
        </igx-expansion-panel-header>
        <igx-expansion-panel-body>
            Content Panel 1
        </igx-expansion-panel-body>
    </igx-expansion-panel>
    <igx-expansion-panel>
        <igx-expansion-panel-header>
            <igx-expansion-panel-title>Title Panel 2</igx-expansion-panel-title>
        </igx-expansion-panel-header>
        <igx-expansion-panel-body>
            Content Panel 2
        </igx-expansion-panel-body>
    </igx-expansion-panel>
</igx-accordion>
```

Using the [panels]({environment:angularApiUrl}/classes/igxaccordioncomponent.html#panels) accessor you can get a reference to the collection containing all [expansion panels]({environment:angularApiUrl}/classes/igxexpansionpanelcomponent.html) children of the `igx-accordion`.

```typescript
@ViewChild('accordion', { static: true })
public accordion!: IgxAccordionComponent;

this.accordion.panels;
```

As demonstrated above, the [singleBranchExpand]({environment:angularApiUrl}/classes/igxaccordioncomponent.html#singleBranchExpand) property gives you the ability to set whether single or multiple panels can be expanded at a time.

### Angular Accordion Animations 

Angular Accordion supports animations for both expanding and collapsing actions of the panels. Animation behavior can be customized. Normally, animations can be set for each expansion panel individually. However, it could also be applied to all panels at once on [IgxAccordionComponent]({environment:angularApiUrl}/classes/igxaccordioncomponent.html) level. This gives users the ability to disable animations for all sections at once via the animations property of the [IgxAccordionComponent]({environment:angularApiUrl}/classes/igxaccordioncomponent.html). 

With regards to animation, you have two options. First, you could set the `animationSettings` property on the accordion component:

```typescript
import { useAnimation } from '@angular/animations';
import { slideInLeft, slideOutRight } from 'igniteui-angular';
// import { slideInLeft, slideOutRight } from '@infragistics/igniteui-angular'; for licensed package

@Component({
    ...
})
export class AccordionComponent {
    public animationSettingsCustom = {
        closeAnimation: useAnimation(slideOutRight, {
            params: {
                duration: '100ms',
                toPosition: 'translateX(25px)'
            }
        }),
        openAnimation: useAnimation(slideInLeft, {
            params: {
                duration: '500ms',
                fromPosition: 'translateX(-15px)',
                startOpacity: 0.1
            }
        })
    };
}
```

As you can see, we are using [`slideInLeft`]({environment:sassApiUrl}/index.html#mixin-slide-in-left) and [`slideOutRight`]({environment:sassApiUrl}/index.html#mixin-slide-out-right) animations from our [**inbuilt suite of animations**]({environment:sassApiUrl}/index.html#animations) to make the component content appear from the left side and disappear to the right when collapsing the content. We further customize the animations by overriding some of the animations' parameters.

The following snippet demonstrates passing the animation settings to the component:

```html
<igx-accordion #accordion [animationSettings]="animationSettingsCustom">
    ...
</igx-accordion>
```

> Note: If you would like to turn off the animation for the [IgxAccordionComponent]({environment:angularApiUrl}/classes/igxaccordioncomponent.html) the `animationSettings` could be set to `null`.

Alternatively, you have the ability to set every single [expansion panel]({environment:angularApiUrl}/classes/igxexpansionpanelcomponent.html)`s [animationSettings]({environment:angularApiUrl}/classes/igxexpansionpanelcomponent.html#animationSettings) input.

```html
<igx-accordion #accordion [singleBranchExpand]="true">
     <igx-expansion-panel [animationSettings]="slideLeftRightSettings">
        <igx-expansion-panel-header>
            <igx-expansion-panel-title>Title Panel 1</igx-expansion-panel-title>
        </igx-expansion-panel-header>
        <igx-expansion-panel-body>
            Content Panel 1
        </igx-expansion-panel-body>
    </igx-expansion-panel>
    <igx-expansion-panel [animationSettings]="slideTopBottomSettings">
        <igx-expansion-panel-header>
            <igx-expansion-panel-title>Title Panel 2</igx-expansion-panel-title>
        </igx-expansion-panel-header>
        <igx-expansion-panel-body>
            Content Panel 2
        </igx-expansion-panel-body>
    </igx-expansion-panel>
</igx-accordion>
```
Using the [collapseAll]({environment:angularApiUrl}/classes/igxaccordioncomponent.html#collapseAll) and [expandAll]({environment:angularApiUrl}/classes/igxaccordioncomponent.html#expandAll) methods you can respectively collapse and expand all [IgxExpansionPanels]({environment:angularApiUrl}/classes/igxexpansionpanelcomponent.html) of the [IgxAccordion]({environment:angularApiUrl}/classes/igxaccordioncomponent.html) programmatically.

> Note: If [singleBranchExpand]({environment:angularApiUrl}/classes/igxaccordioncomponent.html#singleBranchExpand) property is set to *true* calling [expandAll]({environment:angularApiUrl}/classes/igxaccordioncomponent.html#expandAll) method would expand only the last [panel]({environment:angularApiUrl}/classes/igxexpansionpanelcomponent.html).

### Angular Accordion Templating Example
With the Angular [Accordion component]({environment:angularApiUrl}/classes/igxaccordioncomponent.html), you can customize the header and content panel`s appearance. 
The sample below demonstrates how elaborate filtering options can be implemented using the built-in templating functionality of the [IgxExpansionPanel]({environment:angularApiUrl}/classes/igxexpansionpanelcomponent.html).

<code-view style="height:550px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/layouts/accordion-sample-3" alt="Angular Accoridon Example">
</code-view>

<div class="divider--half"></div>

### Nested Angular Accordions Scenario
In the following Angular accordion example, we are going to create a complex FAQ section in order to illustrate how you can go about this common application scenario. In the sample nested [IgxAccordionComponent]({environment:angularApiUrl}/classes/igxaccordioncomponent.html) is achieved by adding an [accordion]({environment:angularApiUrl}/classes/igxaccordioncomponent.html) inside the body of an [expansion panel]({environment:angularApiUrl}/classes/igxexpansionpanelcomponent.html).

```html
<igx-accordion #accordion>
     <igx-expansion-panel>
        <igx-expansion-panel-header>
            <igx-expansion-panel-title>Title Panel 1</igx-expansion-panel-title>
        </igx-expansion-panel-header>
        <igx-expansion-panel-body>
            <igx-accordion #childAccordion>
                <igx-expansion-panel>
                    <igx-expansion-panel-header>
                        <igx-expansion-panel-title>Title Nested Panel 1</igx-expansion-panel-title>
                    </igx-expansion-panel-header>
                    <igx-expansion-panel-body>
                        Content Nested Panel 1
                    </igx-expansion-panel-body>
                </igx-expansion-panel>
                ...
            </igx-accordion>
        </igx-expansion-panel-body>
    </igx-expansion-panel>
    ...
</igx-accordion>
```

You can see the result below.

<code-view style="height:550px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/layouts/accordion-sample-2" alt="Angular Avatar Example">
</code-view>

<div class="divider--half"></div>

## Keyboard Navigation
Keyboard navigation in the Angular Material Accordion provides a rich variety of keyboard interactions to the end-user. This functionality is enabled by default and allows end-users to easily navigate through the panels.
The [IgxAccordionComponent]({environment:angularApiUrl}/classes/igxaccordioncomponent.html) navigation is compliant with W3C accessibility standards and convenient to use.

**Key Combinations**

 - <kbd>Tab</kbd> - moves the focus to the first(if the focus is before accordion)/next panel
 - <kbd>Shift + Tab</kbd> - moves the focus to the last(if the focus is after accordion)/previous panel
 - <kbd>Arrow Down</kbd> - moves the focus to the panel below
 - <kbd>Arrow Up</kbd> - moves the focus to the panel above
 - <kbd>Alt + Arrow Down</kbd> - expands the focused panel in the accordion
 - <kbd>Alt + Arrow Up</kbd> - collapses the focused panel in the accordion
 - <kbd>Shift + Alt + Arrow Down</kbd> - expands all enabled panels(if singleBranchExpand is set to true expands the last enabled panel)
 - <kbd>Shift + Alt + Arrow Up</kbd> - collapses all enabled panels
 - <kbd>Home</kbd> - navigates to the FIRST enabled panel in the accordion
 - <kbd>End</kbd> - navigates to the LAST enabled panel in the accordion

## Angular Accordion Styling
The [accordion]({environment:angularApiUrl}/classes/igxaccordioncomponent.html) serves only as a container for the underlying [panels]({environment:angularApiUrl}/classes/igxexpansionpanelcomponent.html). Styles can be applied directly through the panel's theme, as described in the [styling section of the IgxExpansionPanel topic](expansion-panel.md#styling).

By design, there is a margin set to the expanded panels, in case that they are positioned within an `igx-accordion`. In order to modify it there is a property exposed inside the igx-expansion-panel theme.
In order to take advantage of the functions exposed by the theming engine, we have to import the `index` file in our style file:

```scss
@use "igniteui-angular/theming" as *;

// IMPORTANT: Prior to Ignite UI for Angular version 13 use:
// @import '~igniteui-angular/lib/core/styles/themes/index';
``` 

Following the simplest approach, we create a new theme that extends the [expansion-panel-theme]({environment:sassApiUrl}/index.html#function-expansion-panel-theme) and accepts an `$expanded-margin` parameter. 
```scss
$custom-panel-theme: expansion-panel-theme(
    $expanded-margin: 0px
);
```
### Using CSS Variables

The last step is to include the component's theme.
```scss
:host {
    @include css-vars($custom-panel-theme);
}
```

### Using Theme Overrides

In order to style components in Internet Explorer 11, we have to use a different approach, since CSS variables are not supported there.

If the component is using the [Emulated](themes/sass/component-themes.md#view-encapsulation) `ViewEncapsulation`, it is necessary to `penetrate` this encapsulation using `::ng-deep`. To prevent the custom theme from leaking into other components, make sure to wrap the `::ng-deep` in a `:host` selector: 
```scss
:host {
    ::ng-deep {
        @include expansion-panel($custom-panel-theme);    
    }
}
```
## API Reference
* [IgxAccordion API]({environment:angularApiUrl}/classes/igxaccordioncomponent.html)
* [IgxExpansionPanel API]({environment:angularApiUrl}/classes/igxexpansionpanelcomponent.html)
* [IgxExpansionPanelHeader API]({environment:angularApiUrl}/classes/igxexpansionpanelheadercomponent.html)
* [IgxExpansionPanelBody API]({environment:angularApiUrl}/classes/igxexpansionpanelbodycomponent.html)
* [IgxExpansionPanel Styles]({environment:sassApiUrl}/index.html#mixin-igx-expansion-panel)


## Additional Resources
Our community is active and always welcoming new ideas.

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
