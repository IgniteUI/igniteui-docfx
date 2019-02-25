---
title: Column Group Component - Native Angular | Ignite UI for Angular
_description: Multi-column headers allow grouping columns by placing them under a common header. Every column group could be a representation of combination between  other groups or columns.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Data Grid component, Angular Data Grid control, Native Angular Components, Angular Grid component, Angular Grid control, Angular High Performance Grid, Multi Column Headers, Deferred Multi Column Headers, Grid Multi Column Headers, Angular Grid Multi Column Headers, Angular column
---

### Multi Column Headers

[`IgxHierarchicalGrid`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html) supports `multi-column headers` which allows you to group columns by placing them under a common header. Every `column group` could be a representation of combinations between other groups or columns.

### Demo




<div class="sample-container loading" style="height:550px">
    <iframe id="hierarchical-grid-multi-column-headers-iframe" src='{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-multi-column' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="hierarchical-grid-multi-column-headers-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>


The declaration of `Multi column header` could be achieved by wrapping a set of columns into [`igx-column-group`]({environment:angularApiUrl}/classes/igxcolumngroupcomponent.html) component with [`header`]({environment:angularApiUrl}/classes/igxcolumngroupcomponent.html#header) title passed.




```html
<igx-hierarchical-grid #hierarchicalGrid [data]="localdata" [height]="'600px'" [width]="'100%'" displayDensity="compact" [allowFiltering]="true">
    <igx-column field="CustomerID" [movable]="true" sortable="true" resizable="true"></igx-column>
        ...
        <igx-column-group header="Location">
            <igx-column field="Address" [movable]="true" sortable="true" resizable="true"></igx-column>
            <igx-column field="City" [movable]="true" sortable="true" resizable="true"></igx-column>
            <igx-column field="PostalCode" [movable]="true" sortable="true" resizable="true"></igx-column>
            <igx-column field="Country" [movable]="true" sortable="true" resizable="true"></igx-column>
        </igx-column-group>
        <igx-column-group header="Contact Information">
            <igx-column field="Phone" sortable="true" resizable="true"></igx-column>
            <igx-column field="Fax" sortable="true" resizable="true"></igx-column>
        </igx-column-group>
    </igx-column-group>
...
</igx-hierarchical-grid>
```


For achieving `n-th` level of nested headers, the declaration above should be followed. So by nesting [`igx-column-group`]({environment:angularApiUrl}/classes/igxcolumngroupcomponent.html) leads to the desired result.




```html
<igx-hierarchical-grid #hierarchicalGrid [data]="localdata" [height]="'600px'" [width]="'100%'" displayDensity="compact" [allowFiltering]="true">
    <igx-column field="CustomerID" [movable]="true" sortable="true" resizable="true"></igx-column>
    <igx-column-group [movable]="true" [pinned]="false" header="General Information">
        <igx-column field="CompanyName" [movable]="true" sortable="true" resizable="true"></igx-column>
        <igx-column-group [movable]="true" header="Person Details">
            <igx-column field="ContactName" [movable]="true" sortable="true" resizable="true"></igx-column>
            <igx-column field="ContactTitle" [movable]="true" sortable="true" resizable="true"></igx-column>
        </igx-column-group>
    </igx-column-group>
   
    ...
</igx-hierarchical-grid>
```


Every [`igx-column-group`]({environment:angularApiUrl}/classes/igxcolumngroupcomponent.html) supports [`moving`](column_moving.md), [`pinning`](column_pinning.md) and [`hiding`](column_hiding.md).
> [!NOTE]
> When there is a set of columns and column groups, pinning works only for top level column parents. More specifically pinning per nested `column groups` or `columns` is not allowed. <br />
> Moving between `columns` and `column groups` is allowed only when they are at the same level in the hierarchy and both are in the same `group`. <br />
> When `columns/column-groups` are not wrapped by current `group` which means they are **top level** `columns`, moving is allowed between whole visible columns.




```html
<igx-hierarchical-grid #hierarchicalGrid [data]="localdata" [height]="'600px'" [width]="'100%'" displayDensity="compact" [allowFiltering]="true">
    <igx-column field="CustomerID" [movable]="true" sortable="true" resizable="true"></igx-column>
    <igx-column-group [movable]="true" [pinned]="false" header="General Information">
        <igx-column field="CompanyName" [movable]="true" sortable="true" resizable="true"></igx-column>
        <igx-column-group [movable]="true" header="Person Details">
            <igx-column field="ContactName" [movable]="true" sortable="true" resizable="true"></igx-column>
            <igx-column field="ContactTitle" [movable]="true" sortable="true" resizable="true"></igx-column>
        </igx-column-group>
    </igx-column-group>
    ...
</igx-hierarchical-grid>
```


### API References
<div class="divider--half"></div>

* [IgxHierarchicalGridComponent]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html)
* [IgxHierarchicalGridComponent Styles]({environment:sassApiUrl}/index.html#function-igx-grid-theme)
* [IgxColumnGroupComponent]({environment:angularApiUrl}/classes/igxcolumngroupcomponent.html)
<div class="divider--half"></div>

### Additional Resources
<div class="divider--half"></div>

* [Hierarchical Grid overview](hierarchical_grid.md)
* [Virtualization and Performance](virtualization.md)
* [Paging](paging.md)
* [Filtering](filtering.md)
* [Sorting](sorting.md)
* [Summaries](summaries.md)
* [Column Resizing](column_resizing.md)
* [Selection](selection.md)


<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)