---
title: Angular Combo | Data Visualization Tools | Infragistics
_description: Infragistics' Angular combo component helps you select the best chart to display your data. Improve your graphs and visualization with Ignite UI for  Angular!
_keywords: Angular combo, drop down, Ignite UI for Angular, Infragistics
mentionedTypes: []
---

# Angular Multi-Column Combo Box Overview

The Multi-Column Combo Box automatically generates columns for properties on the data object. This component is unique in that it's a combo box that visualizes large amounts of data similar to a data grid embedded in the dropdown. 

Data binding can be achieved using an array of complex objects via the column's `DataSource` property.

The `TextField` property determines which value is shown when users make a selection. 

The `ValueField` property determines the bound value of the underlying data item selected. This is necessary if your list of objects have several properties.

The `Fields` string array property determines which fields will be included and displayed. All fields not listed in the array will not be displayed in the dropdown.

The `PlaceHolder` property lets the edit portion of the control to display text when nothing is selected. 

The `SortMode` property lets you configure the field's sorting with the following configurations:

-   `None`
-   `SortByOneColumnOnly`
-   `SortByOneColumnOnlyTriState`
-   `SortByMultipleColumns`
-   `SortByMultipleColumnsTriState`

The TriState options will allow sorted columns to be unsorted.

## Angular Multi-Column Combo Box Overview Example

<div class="sample-container loading" style="height: 500px">
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
npm install --save igniteui-angular-charts
</pre>

<!-- end: Angular, React, WebComponents -->

## Required Modules

The Multi-Column Combo Box requires the following modules<!-- Angular, React, WebComponents -->.<!-- end: Angular, React, WebComponents --><!-- Blazor --> to be registered in your application entry point:

-   MultiColumnComboBoxModule
    <!-- end: Blazor -->

## Code Snippet
