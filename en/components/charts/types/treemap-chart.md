---
title: Angular Treemap | Data Visualization Tools | Orientation | Layout | Data Binding | Infragistics
_description: Use Infragistics' Angular Treemap control show relative weighting of data points at more than one level supporting strip, squarified, and slice-and-dice algorithms. Learn about Ignite UI for Angular treemap!
_keywords: Angular Tree Map, Treemap, layout, orientation, Ignite UI for Angular, Infragistics
mentionedTypes: ["Treemap", "TreemapOrientation", "TreemapLayoutType"]
---

# Angular Treemap

The Ignite UI for Angular Treemap chart displays hierarchical (tree-structured) data as a set of nested nodes. Each branch of the tree is given a treemap node, which is then tiled with smaller nodes representing sub-branches. Each node’s rectangle has an area proportional to a specified dimension on the data. Often the nodes are colored to show a separate dimension of the data.

## Angular Treemap Example

In the following example, the treemap demonstrates the 30 largest countries in the world by total area.

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/tree-map-overview"
           alt="Angular Treemap Example"
           github-src="charts/tree-map/overview">
</code-view>

<div class="divider--half"></div>

## Treemap Recommendations

### Are Angular Treemaps right for your project?

When the color and size dimensions are correlated in some way with the tree structure, one can often easily see patterns that would be difficult to spot in other ways. A second advantage of treemaps is that, by construction, they make efficient use of space. As a result, they can legibly display thousands of items on the screen simultaneously.

-   Treemaps are more effective than pie charts and other forms of area charts that often do a poor job of classifying data points and communicating the relative differences of their values.
-   Treemaps are designed for drill down scenarios. You can continuously drill down into the data set that is represented by smaller rectangles for more efficient data analysis.
-   Treemaps are not designed to convey numerical quantities; the intent is to show relative rankings.

Like any other data visualization, a Treemap chart visualization should be used in specific scenarios. It does not solve the same problem that a visualization like a Bar Chart or a Line Chart would. It is really meant for a more complex, richer data display.

### Treemap Use Cases

There are several common use cases for choosing a Treemap. When you:

-   Have drill-down hierarchical data (data organized as a tree, with branches and sub-branches).
-   Want to illustrate hierarchies of relative weight and comparative values between categories (branches) and subcategories (sub-branches).
-   Want to display large data sets that need a compact, space-efficient visualization.
-   Want to deliver at-a-glance, quick data analysis without precise values. The relative size of the rectangles help identify patterns and/or outliers very quickly.
-   Want to make efficient use of space. Treemaps can legibly display thousands of items on the screen simultaneously.

### When not to Use a Treemap

-   You are telling a data story that requires precise values
-   You have negative data values
-   You have flat, non-hierarchical data
-   Your data is similar in size

### Treemap Data Structure

-   The data source must be an array or a list of data items
-   The data source must contain at least one data item otherwise the map will not render any nodes.
-   All data items must contain at least one data column (e.g. string) which should be mapped to the [`labelMemberPath`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxtreemapcomponent.html#labelmemberpath) property.
-   All data items must contain at least one numeric data column which should be mapped using the [`valueMemberPath`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxtreemapcomponent.html#valuememberpath) property.
-   To categorize data into organized tiles you can optionally use [`parentIdMemberPath`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxtreemapcomponent.html#parentidmemberpath) and [`idMemberPath`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxtreemapcomponent.html#idmemberpath).

## Angular Treemap Configuration

In the following example, the treemap demonstrates the ability of changing it's algorithmic structure by modifying the [`layoutType`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxtreemapcomponent.html#layouttype) and [`layoutOrientation`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxtreemapcomponent.html#layoutorientation) properties.

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/tree-map-layout"
           alt="Angular Treemap Layout Configuration"
           github-src="charts/tree-map/layout">
</code-view>

<div class="divider--half"></div>

### Layout Types

The Treemap chart displays the relative weight of data. It uses a variety of algorithms to help it determine how the layout of its data items should occur:

-   `SliceAndDiced` - layout algorithm aims to preserve the initial order at the expense of the aspect ratio.
-   [`Squarified`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/treemaplayouttype.html#squarified) - layout tiling algorithm has a better aspect ratio than the [`SliceAndDice`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/treemaplayouttype.html#sliceanddice) and keeps a better order than Squarified.
-   [`Stripped`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/treemaplayouttype.html#stripped) - layout type algorithm obtains the best aspect ratio but the objects are arranged by size.

The Treemap allows you to choose the algorithm that is best for your requirements, defaulting to use the Squarified method. It also includes the ability to allow you to colorize nodes using two mechanisms:

-   A group-based mechanism that colors items with like values
-   A scale-based mechanism similar to a map choropleth, which maps node colors based on their value.

### Layout Orientation

[`layoutOrientation`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxtreemapcomponent.html#layoutorientation) property enables the user to set the direction in which the nodes of the hierarchy will be expanded.

Note that the [`layoutOrientation`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxtreemapcomponent.html#layoutorientation) property works with the layout types SliceAndDice and Strip.

-   [`Horizontal`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/treemaporientation.html#horizontal) – the child nodes are going to be stacked horizontally(SliceAndDice).
-   [`Vertical`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/treemaporientation.html#vertical) – the child nodes are going to be stacked vertically (SliceAndDice).

## Angular Treemap Styling

In the following example, the treemap demonstrates the ability of changing the look and feel of the nodes achieved by styling through the `NodeStylingScript` event.

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/tree-map-styling"
           alt="Angular Treemap Styling"
           github-src="charts/tree-map/styling">
</code-view>

<div class="divider--half"></div>

## Additional Resources

You can find more information about related chart types in these topics:

-   [Area Chart](area-chart.md)
-   [Shape Chart](shape-chart.md)

## API Members

The following is a list of API members mentioned in the above sections:

-   [`IgxTreemapComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxtreemapcomponent.html)
-   [`layoutOrientation`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxtreemapcomponent.html#layoutorientation)
-   [`layoutType`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxtreemapcomponent.html#layouttype)
