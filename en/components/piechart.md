---
title: Pie Chart Component - Native Angular | Ignite UI for Angular 
_description: With the Ignite UI for Angular Pie Chart component, see the column information in a separate container with a predefined set of default summary views, depending on the type of data within the column. 
_keywords: Ignite UI for Angular, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components, Native Angular Components Library, Angular Chart, Angular Pie Chart, Angular Pie Chart Control, Angular Pie Chart Component 
---
## Pie Chart

The Pie Chart is a specialized component that renders a pie chart, consisting of a circular area divided into sections. Each section has arc length proportional to its underlying data value.

This control is used for representing categorical data. It is most effective when there are only a few categories, and when each category makes up a relatively large percentage of the data as a whole.

### Demo

<div class="sample-container" style="height: 350px">
    <iframe id="pie-chart-data-sample-iframe" src='{environment:demosBaseUrl}/pie-chart-data-sample' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn"   data-iframe-id="pie-chart-data-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">View on StackBlitz
    </button>
</div>

<div class="divider--half"></div>

### Dependencies
When installing the charts package, the core package must also be installed.

**npm install ignite-angular-charts ignite-angular-core**

The pie chart is exported as an `NgModule`, you need to import the _IgxPieChartModule_ inside your `AppModule`:

```typescript
// app.module.ts
import { IgxPieChartModule } from 'ignite-angular-charts/ES5/igx-pie-chart-module';

@NgModule({
    imports: [
        ...
        IgxPieChartModule,
        ...
    ]
})
export class AppModule {}
```

<div class="divider--half"></div>

### Usage

Now that the pie chart module is imported, next step is to bind it to data.
In order to create an igx-pie-chart component, you must first have data to bind it to. The following code snippet demonstrates how to create a simple data source.

```typescript
var data = [
 { "Label": "Item1", "Value": 5 },
 { "Label": "Item2", "Value": 6 },
 { "Label": "Item3", "Value": 3 },
 { "Label": "Item4", "Value": 7 },
 { "Label": "Item5", "Value": 4 }
];
```

The following code demonstrates how to bind the pie chart to the above data.

```html
 <igx-pie-chart [dataSource]="data"
                width="700px"
                height="500px"
                labelMemberPath="Label"
                valueMemberPath="Value">
 </igx-pie-chart>
```

<div class="divider--half"></div>

## Configurable Elements

### Legend

In order to display a legend next to the pie chart an ItemLegend needs to be created and assigned to the `legend` property. The `legendLabelMemberPath` can then be used to specify which property on your data model it will use to display inside the legend for each pie slice.

Additionally you can use the `legendItemTemplate` and `legendItemBadgeTemplate` properties and the various font properties on ItemLegend to further customize the look of the legend items. 

```html
 <igx-pie-chart [dataSource]="data" 
                width="700px"
                height="500px"
                valueMemberPath="Value" 
                labelMemberPath="Label" 
                legendLabelMemberPath="Label"
                [legend]="PieChartLegend">
</igx-pie-chart>
```

<div class="sample-container" style="height: 320px">
    <iframe id="pie-chart-legend-iframe" src='{environment:demosBaseUrl}/pie-chart-legend' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn"   data-iframe-id="pie-chart-legend-iframe" data-demos-base-url="{environment:demosBaseUrl}">View on StackBlitz
    </button>
</div>

### Others Category

Sometimes, the underlying data for the Pie Chart component will contain many items with small values. In this case, the Others category will permit automatic aggregation of several data values into a single slice

In the sample below, the `othersCategoryThreshold` is set to 2, and `othersCategoryType` is set to Number. Therefore, items with value less than or equal to 2 will be assigned to the “Others” category.

> Note: If you set `othersCategoryType` to Percent, then `othersCategoryThreshold` will be interpreted as a percentage rather than as a value, i.e. items whose values are less than 2% of the sum of all item values would be assigned to the Others category. You can use whichever `othersCategoryType` is most appropriate for your application.


```html
 <igx-pie-chart [dataSource]="data"
                width="700px"
                height="500px"
                labelMemberPath="Label"
                valueMemberPath="Value"
                othersCategoryThreshold="2"
                othersCategoryType="Number"
                othersCategoryText="Others">
 </igx-pie-chart>
```

<div class="sample-container" style="height: 320px">
    <iframe id="pie-chart-others-iframe" src='{environment:demosBaseUrl}/pie-chart-others' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn"   data-iframe-id="pie-chart-others-iframe" data-demos-base-url="{environment:demosBaseUrl}">View on StackBlitz
    </button>
</div>

### Explosion
The pie chart supports explosion of individual pie slices as well as a 'sliceClick' event that allows you to modify selection states and implement custom logic

```html
<igx-pie-chart [dataSource]="data"
               width="700px"
               height="500px"
               allowSliceExplosion="true"
               sliceClick="piechart_SliceClick">
</igx-pie-chart>
```
<div class="sample-container" style="height: 320px">
    <iframe id="pie-chart-explosion-iframe" src='{environment:demosBaseUrl}/pie-chart-explosion' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn"   data-iframe-id="pie-chart-explosion-iframe" data-demos-base-url="{environment:demosBaseUrl}">View on StackBlitz
    </button>
</div>

### Selection 
The pie chart supports slice selection by mouse click as the default behavior. You can determine the selected slices by using the `selectedItems` property. The selected slices are then highlighted.

There is a property called `selectionMode` which is how you set what mode you want the pie chart to use. The default value is `single`. In order to disable selection, set the property to `manual`.

The pie chart supports three different selection modes.
* Single - When the mode is set to single, only one slice can be selected at a time. When you select a new slice the previously selected slice will be deselected and the new one will become selected.
* Multiple - When the mode is set to Multiple, many slices can be selected at once. If you click on a slice, it will become selected and clicking on a different slice will also select that slice leaving the previous slice selected.
* Manual - When the mode is set to Manual, selection is disabled.

The pie chart has 4 events associated with selection:
* SelectedItemChanging
* SelectedItemChanged
* SelectedItemsChanging
* SelectedItemsChanged

The events that end in “Changing” are cancelable events which means you can stop the selection of a slice by setting the event argument property `Cancel` to true. When set to true the associated property will not update and the slice will not become selected. This is useful for scenarios where you want to keep users from being able to select certain slices based on the data inside it.

For scenarios where you click on the Others slice, the pie chart will return an object called `pieSliceOthersContext`. This object contains a list of the data items contained within the Others slice.


```html
<igx-pie-chart [dataSource]="data"
               width="700px"
               height="500px"
               selectionMode="multiple">
</igx-pie-chart>
```
<div class="sample-container" style="height: 320px">
    <iframe id="pie-chart-selection-iframe" src='{environment:demosBaseUrl}/pie-chart-selection' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn"   data-iframe-id="pie-chart-selection-iframe" data-demos-base-url="{environment:demosBaseUrl}">View on StackBlitz
    </button>
</div>
