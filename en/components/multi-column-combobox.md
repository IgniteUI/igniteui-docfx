---
title: Angular Combo | Data Visualization Tools | Infragistics
_description: Infragistics' Angular combo component helps you select the best chart to display your data. Improve your graphs and visualization with Ignite UI for  Angular!
_keywords: Angular combo, drop down, Ignite UI for Angular, Infragistics
mentionedTypes: []
---

# Angular Multi-Column Combo Box Overview

The Multi-Column Combo Box automatically generates columns for properties on the data object. This component is unique in that it's a combo box that visualizes large amounts of data similar to a data grid embedded in the dropdown.

## Angular Multi-Column Combo Box Overview Example

<div class="sample-container loading" style="height: 400px">
    <iframe id="category-chart-overview-iframe" src='{environment:dvDemosBaseUrl}/editors/multi-column-combobox-overview' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);" alt="Angular Multi-Column Combo Box Overview Example"></iframe>
</div>

<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="multi-column-combobox-overview-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">View on StackBlitz
    </button>


</div>

<!-- Angular, React, WebComponents -->

## Dependencies

When installing the charts component, the core package must also be installed.

<pre style="background:#141414;color:white;display:inline-block;padding:16x;margin-top:10px;font-family:'Consolas';border-radius:5px;width:100%">
npm install --save igniteui-angular-core
npm install --save {PackageInputs}
</pre>

<!-- end: Angular, React, WebComponents -->

## Required Modules

The Multi-Column Combo Box requires the following modules:

## Usage

### Binding a Data Source

In order to display your objects in the Multi-Column Combo Box component, you will need to bind the `DataSource` property. This can be bound in the form of an array of complex objects. The following code demonstrates how to bind the data source property.

### Setting Display Value and Data Value

You can configure different properties of the Multi-Column Combo Box's bound `DataSource` to act as the display text for the control as well as the underlying value when a selection is made. This is done by setting the `TextField` and `ValueField` properties of the control, respectively, to the name of the property on the data item that you want to represent these things.

The following code snippet shows how to set these properties, given that the underlying data item has a "Country" and "ID" property:

### Setting Fields

By default, the Multi-Column Combo Box will show all of the properties on the underlying data item, but this can be controlled by setting the `Fields` property on the component. This property takes a `string[]` of property paths on the underlying data item to determine which properties are shown.

The following code snippet shows how to set this, and the resulting drop-down would only show the ID and Country columns:

### Setting Placeholder Text

It is possible to configure the text that shows as a placeholder for when there is no selection in the Multi-Column Combo Box component. This is done by setting the `Placeholder` property to the string you would like to be displayed. The following code demonstrates how to set this:

### Configuring Sorting Mode

The user has the ability to sort the columns that are displayed in the Multi-Column Combo Box by clicking the header of the column in the drop-down. The way the sorting is configured can be modified as well, as the columns can be sorted by only a single column or multiple columns, and they can be limited to either ascending and descending, or they can be tri-state. This is done by setting the `SortMode` property of the component.

Note, the TriState sort options will allow sorted columns to be unsorted.

The following code demonstrates how to set the Multi-Column Combo Box to be able to sort by multiple columns tri-state.
