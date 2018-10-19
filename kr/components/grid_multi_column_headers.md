---
title: Column Group Component - Native Angular | Ignite UI for Angular
_description: Multi-column headers allow grouping columns by placing them under a common header. Every column group could be a representation of combination between  other groups or columns.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Data Grid component, Angular Data Grid control, Native Angular Components, Angular Grid component, Angular Grid control, Angular High Performance Grid, Multi Column Headers, Deferred Multi Column Headers, Grid Multi Column Headers, Angular Grid Multi Column Headers, Angular column
_language: kr
---

## Multi Column Headers

[`IgxGrid`]({environment:angularApiUrl}/classes/igxgridcomponent.html) supports `multi-column headers` which allows you to group columns by placing them under a common header. Every `column group` could be a representation of combinations between other groups or columns.

## Demo

<div class="sample-container loading" style="height:550px">
    <iframe id="grid-multi-column-headers-iframe" src='{environment:demosBaseUrl}/multi-column-headers' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-multi-column-headers-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>

The declaration of `Multi column header` could be achieved by wrapping a set of columns into [`igx-column-group`]({environment:angularApiUrl}/classes/igxcolumngroupcomponent.html) component with [`header`]({environment:angularApiUrl}/classes/igxcolumngroupcomponent.html#header) title passed.

```html
<igx-grid [data]="data" height="600px">
    <igx-column-group header="Contact Information">
        <igx-column filterable="true" sortable="true" resizable="true" field="Phone"></igx-column>
        <igx-column filterable="true" sortable="true" resizable="true" field="Fax"></igx-column>
        <igx-column filterable="true" sortable="true" resizable="true" field="PostalCode"></igx-column>
    </igx-column-group>
</igx-grid>
```

For achieving `n-th` level of nested headers, the declaration above should be followed. So by nesting [`igx-column-group`]({environment:angularApiUrl}/classes/igxcolumngroupcomponent.html) leads to the desired result.

```html
<igx-grid [data]="data" height="600px">
    <igx-column-group header="General Information">
        <igx-column [movable]="true" filterable="true" sortable="true" resizable="true" field="CompanyName"></igx-column>
        <igx-column-group [movable]="true" header="Person Details">
            <igx-column [movable]="true" [pinned]="false" filterable="true" sortable="true" resizable="true" field="ContactName"></igx-column>
            <igx-column [movable]="true" filterable="true" sortable="true" resizable="true" field="ContactTitle"></igx-column>
        </igx-column-group>
    </igx-column-group>
</igx-grid>
```

Every [`igx-column-group`]({environment:angularApiUrl}/classes/igxcolumngroupcomponent.html) supports [`moving`](grid_column_moving.md), [`pinning`](grid_column_pinning.md) and [`hiding`](grid_column_hiding.md).
> [!NOTE]
> When there is a set of columns and column groups, pinning works only for top level column parents. More specifically pinning per nested `column groups` or `columns` is not allowed. <br />
> Moving between `columns` and `column groups` is allowed only when they are at the same level in the hierarchy and both are in the same `group`. <br />
> When `columns/column-groups` are not wrapped by current `group` which means they are **top level** `columns`, moving is allowed between whole visible columns.

```html
<igx-grid [data]="data" height="600px">
    <igx-column-group  [movable]="true" [pinned]="true" header="General Information">
        <igx-column [movable]="true" filterable="true" sortable="true" resizable="true" field="CompanyName"></igx-column>
    </igx-column-group>
    <igx-column filterable="true" sortable="true" resizable="true" field="Phone"></igx-column>
    <igx-column filterable="true" sortable="true" resizable="true" field="Fax"></igx-column>
    <igx-column filterable="true" sortable="true" resizable="true" field="PostalCode"></igx-column>
</igx-grid>
```

### API References
<div class="divider--half"></div>

* [IgxGridComponent]({environment:angularApiUrl}/classes/igxgridcomponent.html)
* [IgxGridComponent Styles]({environment:sassApiUrl}/index.html#function-igx-grid-theme)
* [IgxColumnGroupComponent]({environment:angularApiUrl}/classes/igxcolumngroupcomponent.html)
<div class="divider--half"></div>

### Additional Resources
<div class="divider--half"></div>

* [Grid overview](grid.md)
* [Virtualization and Performance](grid_virtualization.md)
* [Paging](grid_paging.md)
* [Filtering](grid_filtering.md)
* [Sorting](grid_sorting.md)
* [Summaries](grid_summaries.md)
* [Column Resizing](grid_column_resizing.md)
* [Selection](grid_selection.md)
* [Group by](grid_groupby.md)

<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)