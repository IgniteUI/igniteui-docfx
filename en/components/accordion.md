---
title: Angular Accordion Component - Ignite UI for Angular
_description: With Ignite UI for Angular Accordion component, you can display a collection of vertically collapsible expansion panels. Try for FREE
_keywords: angular accordion, angular accordion component, angular accordion example, ignite ui for angular, UI controls, infragistics
---

# Angular Accordion Component Overview

The Angular Accordion Component enables the user to navigate among multiple collapsing panels displayed in a single container. The accordion offers keyboard navigation and API to control the underlying panels' expansion state.
## Angular Accordion Example
In this basic Angular Accordion example, you can see how to define an igx-accrodion and its  [IgxExpansionPanels]({environment:angularApiUrl}/classes/igxexpansionpanelcomponent.html). The sample also demonstrates the two types of expansion behavior. The switch button toggles the [singleBranchExpand]({environment:angularApiUrl}/classes/igxaccordioncomponent.html#singleBranchExpand) option to either set single or multiple branches to be expanded at a time.

<code-view style="height:550px" 
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

The next step is to import the `IgxAccordionModule` in your app.module file. 

```typescript
// app.module.ts

...
import { IgxAccordionModule } from 'igniteui-angular';

@NgModule({
    ...
    imports: [..., IgxAccordioneModule],
    ...
})
export class AppModule {}
```
Now that we have the accordion module imported, let’s get started with a basic configuration of the `igx-accordion` and its panels.

## Usage

[IgxExpansionPanelComponent]({environment:angularApiUrl}/classes/igxexpansionpanelcomponent.html) is the representation of every level that belongs to the [IgxAccordionComponent]({environment:angularApiUrl}/classes/igxaccordioncomponent.html).  
Panels provide [disabled]({environment:angularApiUrl}/classes/igxexpansionpanelcomponent.html#disabled), [collapsed]({environment:angularApiUrl}/classes/igxexpansionpanelcomponent.html#collapsed) and [animationSettings]({environment:angularApiUrl}/classes/igxexpansionpanelcomponent.html#animationSettings}) properties, which give you the opportunity to configure the states of the panel as per your requirement. 

### Declaring an accordion

In order to declare an accordion component you have to describe all its  [IgxExpansionPanels]({environment:angularApiUrl}/classes/igxexpansionpanelcomponent.html).

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

Using the [panels]({environment:angularApiUrl}/classes/igxaccordioncomponent.html#panels) option you can get reference to the collection containing all [IgxExpansionPanels]({environment:angularApiUrl}/classes/igxexpansionpanelcomponent.html) children of the accordion.

```ts
@ViewChild('accordion', { static: true })
public accordion: IgxAccordionComponent;

this.accordion.panels;
```

As demonstrated above, [singleBranchExpand]({environment:angularApiUrl}/classes/igxaccordioncomponent.html#singleBranchExpand) option gives you the opportunity to set whether single or multiple branches to be expanded at a time.
In regards to animation, you have two options. First, to set the animationSettings option on a higher level for the entire accordion component. 

```typescript
import { useAnimation } from "@angular/animations";
import { slideInLeft, slideOutRight } from 'igniteui-angular';
@Component({
    ...
})
export class AccordionComponent {
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
}
```

As you can see, we are going to use [`slideInLeft`]({environment:sassApiUrl}/index.html#mixin-slide-in-left) and [`slideOutRight`]({environment:sassApiUrl}/index.html#mixin-slide-out-right) animations from our [**inbuilt suite of animations**]({environment:sassApiUrl}/index.html#animations) to make the component content appear from the left side and disappear on the right when collapsing the content. We further customize the animations by overwriting some of the animations' parameters.

The following snippet demonstrates some user information and the key point here is passing the animation settings to the component like:
`[animationSettings] = "animationSettingsCustom"`

```html
<igx-accordion #accordion [animationSettings]="animationSettingsCustom">
    ...
</igx-accordion>
```

> Note: If you would like to turn off the animation for the [IgxAccordionComponent]({environment:angularApiUrl}/classes/igxaccordioncomponent.html}) the animationSettings could be set to null.

Alternatively, you have the ability to set every single [IgxExpansionPanel]({environment:angularApiUrl}/classes/igxexpansionpanelcomponent.html)`s [animationSettings]({environment:angularApiUrl}/classes/igxexpansionpanelcomponent.html#animationSettings}) option.

```html
<igx-accordion #accordion [singleBranchExpand]="true">
     <igx-expansion-panel [animationSettings]="animationSettingsCustom">
        <igx-expansion-panel-header>
            <igx-expansion-panel-title>Title Panel 1</igx-expansion-panel-title>
        </igx-expansion-panel-header>
        <igx-expansion-panel-body>
            Content Panel 1
        </igx-expansion-panel-body>
    </igx-expansion-panel>
    <igx-expansion-panel [animationSettings]="animationSettingsCustom">
        <igx-expansion-panel-header>
            <igx-expansion-panel-title>Title Panel 2</igx-expansion-panel-title>
        </igx-expansion-panel-header>
        <igx-expansion-panel-body>
            Content Panel 2
        </igx-expansion-panel-body>
    </igx-expansion-panel>
</igx-accordion>
```
Using the [collapseAll]({environment:angularApiUrl}/classes/igxaccordioncomponent.html#collapseAll}) and [expandAll]({environment:angularApiUrl}/classes/igxaccordioncomponent.html#expandAll}) methods you can respectively collapse and expand all [IgxExpansionPanels]({environment:angularApiUrl}/classes/igxexpansionpanelcomponent.html) of the [IgxAccordion]({environment:angularApiUrl}/classes/igxaccordioncomponent.html}).

> Note: If [singleBranchExpand]({environment:angularApiUrl}/classes/igxaccordioncomponent.html#singleBranchExpand) property is set to *true* calling [expandAll]({environment:angularApiUrl}/classes/igxaccordioncomponent.html#expandAll}) method would expand only the last [IgxExpansionPanel]({environment:angularApiUrl}/classes/igxexpansionpanelcomponent.html).

### Angular Accordion Templating Example
The sample below demonstrates how elaborate filtering options can be implemented using the built in templating functionality of the [IgxExpansionPanel]({environment:angularApiUrl}/classes/igxexpansionpanelcomponent.html).

<code-view style="height:550px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/layouts/accordion-sample-3" alt="Angular Accoridon Example">
</code-view>

<div class="divider--half"></div>

### Nested Angular Accordions Scenario
In the following example, we are going to implement more like an application scenario where you want to create a complex FAQ section. In the sample nested [IgxAccordionComponent]({environment:angularApiUrl}/classes/igxaccordioncomponent.html) is achieved by adding an [IgxAccordionComponent]({environment:angularApiUrl}/classes/igxaccordioncomponent.html) inside the body of an [IgxExpansionPanel]({environment:angularApiUrl}/classes/igxexpansionpanelcomponent.html).

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
Keyboard navigation in [IgxAccordion]({environment:angularApiUrl}/classes/igxaccordioncomponent.html}) provides a rich variety of keyboard interactions for the user. This functionality is enabled by default and allows users to navigate through the [IgxExpansionPanels]({environment:angularApiUrl}/classes/igxexpansionpanelcomponent.html).
The [IgxAccordion]({environment:angularApiUrl}/classes/igxaccordioncomponent.html}) navigation is compliant with W3C accessibility standards and convenient to use.

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
The [IgxAccordion]({environment:angularApiUrl}/classes/igxaccordioncomponent.html}) serves only as a container for the [IgxExpansionPanels]({environment:angularApiUrl}/classes/igxexpansionpanelcomponent.html). This is the reason styles could be applied only through the [IgxExpansionPanels]({environment:angularApiUrl}/classes/igxexpansionpanelcomponent.html). Styling of the [IgxExpansionPanels]({environment:angularApiUrl}/classes/igxexpansionpanelcomponent.html) is described in the [Styling section of the IgxExpansionPanel topic](expansion-panel.html#styling).

## API Reference
* [IgxAccordion API]({environment:angularApiUrl}/classes/igxaccordioncomponent.html})
* [IgxExpansionPanel API]({environment:angularApiUrl}/classes/igxexpansionpanelcomponent.html)
* [IgxExpansionPanelHeader API]({environment:angularApiUrl}/classes/igxexpansionpanelheadercomponent.html)
* [IgxExpansionPanelBody API]({environment:angularApiUrl}/classes/igxexpansionpanelbodycomponent.html)
* [IgxExpansionPanel Styles]({environment:sassApiUrl}/index.html#mixin-igx-expansion-panel)


## Additional Resources
Our community is active and always welcoming to new ideas.

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)