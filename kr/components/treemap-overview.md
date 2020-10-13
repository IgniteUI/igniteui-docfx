---
title: Angular Treemap | Data Visualization Tools | Data Binding | Infragistics
_description: Use the Treemap to show users relative weighting of data points at more than one level supporting strip, squarified, and slice-and-dice algorithms.
mentionedTypes: ['Treemap']
---

## Treemap

Treemaps display hierarchical (tree-structured) data as a set of nested nodes. Each branch of the tree is given a treemap node, which is then tiled with smaller nodes representing sub-branches. Each node’s rectangle has an area proportional to a specified dimension on the data. Often the nodes are colored to show a separate dimension of the data.

When the color and size dimensions are correlated in some way with the tree structure, one can often easily see patterns that would be difficult to spot in other ways. A second advantage of treemaps is that, by construction, they make efficient use of space. As a result, they can legibly display thousands of items on the screen simultaneously.

Treemaps are not designed to convey numerical quantities; the intent is to show relative rankings. Treemaps can be more effective than pie charts and other forms of area charts that often do a poor job of classifying data points and communicating the relative differences of their values.

## Demo

<div class="sample-container loading" style="height: 400px">
    <iframe id="tree-map-overview-iframe" src='{environment:dvDemosBaseUrl}/charts/tree-map-overview' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="tree-map-overview-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">View on StackBlitz
    </button>


</div>

<div class="divider--half"></div>

## Required Data

Binding to the [`IgxTreemapComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxtreemapcomponent.html) contains the following data requirements:

-   The data source must be an array or a list of data items
-   The data source must contain at least one data item otherwise the map will not render any nodes.
-   All data items must contain at least one data column (e.g. string) which should be mapped to the [`labelMemberPath`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxtreemapcomponent.html#labelmemberpath) property.
-   All data items must contain at least one numeric data column which should be mapped using the [`valueMemberPath`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxtreemapcomponent.html#valuememberpath) property.
-   To categorize data into organized tiles you can optionally use [`parentIdMemberPath`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxtreemapcomponent.html#parentidmemberpath) and [`idMemberPath`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxtreemapcomponent.html#idmemberpath).

## Layout Types

The Ignite UI for Angular treemap component supports the following types algorithms:

-   `SliceAndDice`
-   `Squarified`
-   `Strip`

The type is defined by setting the [`layoutType`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxtreemapcomponent.html#layouttype) property. If the [`layoutType`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxtreemapcomponent.html#layouttype) property is not specified, then by default, the `Stripped` type is displayed. There are different tiling algorithms when it comes to displaying the data. All algorithms have their advantages depending on the user’s needs. Some aim to obtain the best aspect ratio – the nodes are as close to rectangles as possible. Other algorithms aim to preserve the initial order of the elements – object which are close to each other in the data source are arranged near each other on the treemap.

-   `Stripped` layout type algorithm obtains the best aspect ratio but the objects are arranged by size.

-   `SliceAndDice` layout algorithm aims to preserve the initial order at the expense of the aspect ratio.

-   `Strip` layout tiling algorithm has a better aspect ratio than the SliceAndDice and keeps a better order than Squarified.

## Layout Orientation

LayoutOrientation property enables the user to set the direction in which the nodes of the hierarchy will be expanded.

Note that the LayoutOrientation property works with the layout types SliceAndDice and Strip.

-   `Horizontal` – the child nodes are going to be stacked horizontally(SliceAndDice).

-   `Vertical` – the child nodes are going to be stacked vertically (SliceAndDice).

<!-- Angular, React, WebComponents -->

## Dependencies

When installing the chart package, the core package must also be installed.

-   **npm install --save igniteui-angular-core**
-   **npm install --save igniteui-angular-charts**
    <!-- end: Angular, React, WebComponents -->

## Required Modules

The [`IgxTreemapComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxtreemapcomponent.html) requires the following modules<!-- Angular, React, WebComponents -->.<!-- end: Angular, React, WebComponents --><!-- Blazor --> to be registered in your application entry point:

-   TreemapModule
    <!-- end: Blazor -->

```ts
import { IgxTreemapModule } from "igniteui-angular-charts";
import { IgxTreemapComponent } from 'igniteui-angular-charts';

@NgModule({
    imports: [
        // ...
        IgxTreemapModule,
        // ...
    ]
})
export class AppModule {}
```

## Code Snippet

The following code demonstrates how to setup the Treemap.

```html
<igx-treemap
    height="100%"
    width="100%"
    layoutType="stripped"
    layoutOrientation="horizontal"
    parentIdMemberPath="parent"
    idMemberPath="id"
    labelMemberPath="name"
    valueMemberPath="pop"
    transitionDuration="500"
    rootTitle="Countries"
    >
</igx-treemap>
```

<div class="divider--half"></div>
