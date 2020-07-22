---
title: Map | Shape Styling | Ignite UI for Angular | Infragistics
_description: This topic explains how to apply custom styling to the geographic shape series.
_keywords: map, Ignite UI for Angular, infragistics, Shape Styling, GeographicShapeSeries
mentionedTypes: ['XamGeographicMap', 'GeographicShapeSeries']
---

## Shape Styling on Geographic Shape Series

This topic explains how to apply custom styling to the [`IgxGeographicShapeSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographicshapeseriescomponent.html) in the [`IgxGeographicMapComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographicmapcomponent.html).

### Demo

<div class="sample-container loading" style="height: 500px">
    <iframe id="geo-map-shape-styling-iframe" src='{environment:dvDemosBaseUrl}/maps/geo-map-shape-styling' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="geo-map-shape-styling-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">View on StackBlitz
    </button>
</div>


<div class="divider--half"></div>

### Required Imports

Shape styling requires that you import the following classes:

```ts
import { IgxGeographicShapeSeries } from 'igniteui-angular-maps';
import { IgxStyleShapeEventArgs } from 'igniteui-angular-charts';
import { IgxShapeDataSource } from 'igniteui-angular-core';
import { IgxShapefileRecord } from 'igniteui-angular-core';
```

Note that the following code examples are using the [Shape Styling Utility](geo-map-resources-shape-styling-utility.md) file that provides four different ways of styling shapes:

-   [Shape Comparison Styling](#shape-comparison-styling)
-   [Shape Random Styling](#shape-random-styling)
-   [Shape Range Styling](#shape-range-styling)
-   [Shape Scale Styling](shape-scale-styling)

### Shape Random Styling

This code snippet creates instances of **ShapeRandomStyling** that will randomly assign fill colors to the countries of the world.

```ts
import { ShapeRandomStyling } from './ShapeStylingUtility';
// ...

this.shapeRandomStyling = new ShapeRandomStyling();
this.shapeRandomStyling.shapeStrokeColors = ['Black'];
this.shapeRandomStyling.shapeFillColors = ['#8C23D1', '#0E9759', '#B4D336', '#F2A464', '#D74545', 'DodgerBlue'];

this.geoSeries = new IgxGeographicShapeSeries();
this.geoSeries.styleShape = this.onStylingShape;
// ...
public onStylingShape(s: IgxGeographicShapeSeries, args: IgxStyleShapeEventArgs) {
    const itemRecord = args.item as IgxShapefileRecord;
    const shapeStyle = this.ShapeRandomStyling.getStyle(itemRecord);
    args.shapeOpacity = shapeStyle.opacity;
    args.shapeFill = shapeStyle.fill;
    args.shapeStroke = shapeStyle.stroke;
    args.shapeStrokeThickness = shapeStyle.strokeThickness;
}
```

### Shape Scale Styling

This code snippet creates instances of **ShapeScaleStyling** that will assign fill colors to shape of countries based on population scaled on logarithmic scale.

```ts
import { ShapeScaleStyling } from './ShapeStylingUtility';
// ...
this.shapeScaleStyling = new ShapeScaleStyling();
this.shapeScaleStyling.itemMinimumValue = 5000;
this.shapeScaleStyling.itemMaximumValue = 2000000000; // 2 Billions
this.shapeScaleStyling.itemMemberPath = 'Population';
this.shapeScaleStyling.isLogarithmic = true;
this.shapeScaleStyling.defaultFill = 'Gray';
this.shapeScaleStyling.shapeStrokeColors = ['Black'];
this.shapeScaleStyling.shapeFillColors = ['DodgerBlue', 'yellow', '#c2f542', '#e8c902', '#e8b602', '#e87902', 'brown'];

this.geoSeries = new IgxGeographicShapeSeries();
this.geoSeries.styleShape = this.onStylingShape;
// ...
public onStylingShape(s: IgxGeographicShapeSeries, args: IgxStyleShapeEventArgs) {
    const itemRecord = args.item as IgxShapefileRecord;
    const shapeStyle = this.shapeScaleStyling.getStyle(itemRecord);
    args.shapeOpacity = shapeStyle.opacity;
    args.shapeFill = shapeStyle.fill;
    args.shapeStroke = shapeStyle.stroke;
    args.shapeStrokeThickness = shapeStyle.strokeThickness;
}
```

### Shape Range Styling

This code snippet creates instances of **ShapeRangeStyling** that will assign colors to shape of countries based on ranges of population.

```ts
import { ShapeRangeStyling } from './ShapeStylingUtility';
// ...
this.shapeRangeStyling = new ShapeRangeStyling();
this.shapeRangeStyling.defaultFill = 'Gray';
this.shapeRangeStyling.itemMemberPath = 'Population';
this.shapeRangeStyling.ranges = [
    { fill: 'yellow', minimum: 5000, maximum: 10000000, },        // 5 K - 10 M
    { fill: 'orange', minimum: 10000000, maximum: 100000000, },   // 10 M - 100 M
    { fill: 'red',    minimum: 100000000, maximum: 500000000, },  // 100 M - 500 M
    { fill: 'brown',  minimum: 500000000, maximum: 2000000000, }, // 500 M - 2 B
];

this.geoSeries = new IgxGeographicShapeSeries();
this.geoSeries.styleShape = this.onStylingShape;
// ...
public onStylingShape(s: IgxGeographicShapeSeries, args: IgxStyleShapeEventArgs) {
    const itemRecord = args.item as IgxShapefileRecord;
    const shapeStyle = this.shapeRangeStyling.getStyle(itemRecord);
    args.shapeOpacity = shapeStyle.opacity;
    args.shapeFill = shapeStyle.fill;
    args.shapeStroke = shapeStyle.stroke;
    args.shapeStrokeThickness = shapeStyle.strokeThickness;
}
```

### Shape Comparison Styling

This code snippet creates instances of **ShapeComparisonStyling** that will assign colors to countries based on their region name in the world.

```ts
import { ShapeComparisonStyling } from './ShapeStylingUtility';
this.shapeComparisonStyling = new ShapeComparisonStyling();
this.shapeComparisonStyling.defaultFill = 'Gray';
this.shapeComparisonStyling.itemMemberPath = 'Region';
this.shapeComparisonStyling.itemMappings = [
    { fill: 'Red', itemValue: 'Eastern Europe' },
    { fill: 'Red', itemValue: 'Central Asia' },
    { fill: 'Red', itemValue: 'Eastern Asia' },
    { fill: 'Orange', itemValue: 'Southern Asia' },
    { fill: 'Orange', itemValue: 'Middle East' },
    { fill: 'Orange', itemValue: 'Northern Africa' },
    { fill: 'Yellow', itemValue: 'Eastern Africa' },
    { fill: 'Yellow', itemValue: 'Western Africa' },
    { fill: 'Yellow', itemValue: 'Middle Africa' },
    { fill: 'Yellow', itemValue: 'Southern Africa' },
    { fill: 'DodgerBlue', itemValue: 'Central America' },
    { fill: 'DodgerBlue', itemValue: 'Northern America' },
    { fill: 'DodgerBlue', itemValue: 'Western Europe' },
    { fill: 'DodgerBlue', itemValue: 'Southern Europe' },
    { fill: 'DodgerBlue', itemValue: 'Northern Europe' },
    { fill: '#22c928', itemValue: 'South America' },
    { fill: '#b64fff', itemValue: 'Melanesia' },
    { fill: '#b64fff', itemValue: 'Micronesia' },
    { fill: '#b64fff', itemValue: 'Polynesia' },
    { fill: '#b64fff', itemValue: 'Australia' },
];

this.geoSeries = new IgxGeographicShapeSeries();
this.geoSeries.styleShape = this.onStylingShape;
// ...
public onStylingShape(s: IgxGeographicShapeSeries, args: IgxStyleShapeEventArgs) {
    const itemRecord = args.item as IgxShapefileRecord;
    const shapeStyle = this.shapeComparisonStyling.getStyle(itemRecord);
    args.shapeOpacity = shapeStyle.opacity;
    args.shapeFill = shapeStyle.fill;
    args.shapeStroke = shapeStyle.stroke;
    args.shapeStrokeThickness = shapeStyle.strokeThickness;
}
```
