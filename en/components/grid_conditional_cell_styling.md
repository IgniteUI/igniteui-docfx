---
title: Conditional Cell Styling - Native Angular | Ignite UI for Angular
_description: Conditional Cell Styling feature provides a means for column cells styling based on custom conditions.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Data Grid component, Angular Data Grid control, Native Angular Components, Angular Grid component, Angular Grid control, Cell Styling, Conditional Formatting, Conditional Cell Styling, Angular Grid Conditional Column Styling, Angular Conditional Cell Styling
---

### Conditional Cell Styling
The Grid component in Ignite UI for Angular provides **conditional cell styling** based on custom rules. 

This can be achieved by setting the [`IgxColumnComponent`]({environment:angularApiUrl}/classes/igxcolumncomponent.html) input [`cellClasses`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#cellclasses) to an object literal containing key-value pairs. The key is the name of the CSS class, while the value is either a callback function that returns a boolean, or boolean value.

#### Demo

<div class="sample-container loading" style="height:530px">
    <iframe id="cell-styling-sample-iframe" src='{environment:demosBaseUrl}/grid-cell-styling' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="cell-styling-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>

#### Overview
You can conditionally style the igGrid cells by setting the [`IgxColumnComponent`]({environment:angularApiUrl}/classes/igxcolumncomponent.html) [`cellClasses`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#cellclasses) input and defining custom rules.

```html
<!-- sample.component.html -->
<igx-column field="BeatsPerMinute" dataType="number" [cellClasses]="beatsPerMinuteClasses"></igx-column>
```

The [`cellClasses`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#cellclasses) input accepts an object literal, containing key-value pairs, where the key is the name of the CSS class, while the value is either a callback function that returns a boolean, or boolean value.

```typescript
// sample.component.ts

private upFontCondition = (rowData: any, columnKey: any): boolean => {
    return rowData[columnKey] > 95;
}

private downFontCondition = (rowData: any, columnKey: any): boolean => {
    return rowData[columnKey] <= 95;
}

public beatsPerMinuteClasses = {
    downFont: this.downFontCondition,
    upFont: this.upFontCondition
};
```

```scss
// sample.component.scss

::ng-deep {
    .upFont {
        color: green;
    }

    .downFont {
        color: red;
    }
}
```

Use **::ng-deep** or **`ViewEncapsulation.None`** to force the custom styles down through the current component and its children.

### API References
<div class="divider--half"></div>

* [IgxColumnComponent]({environment:angularApiUrl}/classes/igxcolumncomponent.html)
* [IgxGridComponent]({environment:angularApiUrl}/classes/igxgridcomponent.html)
* [IgxGridComponent Styles]({environment:sassApiUrl}/index.html#mixin-igx-grid)

### Additional Resources
<div class="divider--half"></div>

* [Grid overview](grid.md)
* [Virtualization and Performance](grid_virtualization.md)
* [Editing](grid_editing.md)
* [Paging](grid_paging.md)
* [Filtering](grid_filtering.md)
* [Sorting](grid_sorting.md)
* [Group By](grid_groupby.md)
* [Summaries](grid_summaries.md)
* [Column Moving](grid_column_moving.md)
* [Column Pinning](grid_column_pinning.md)
* [Column Resizing](grid_column_resizing.md)
* [Column Hiding](grid_column_hiding.md)
* [Selection](grid_selection.md)
* [Searching](grid_search.md)
* [Toolbar](grid_toolbar.md)
* [Export to Excel](exporter_excel.md)
* [Paste from Excel](grid_paste_excel.md)
* [Multi Column Headers](grid_multi_column_headers.md)
* [Display Density](grid_displayDensity.md)

<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
