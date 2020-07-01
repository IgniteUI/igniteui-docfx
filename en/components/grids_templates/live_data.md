
@@if (igxName === 'IgxGrid') {
---
title: Grid Live Data - Native Angular | Ignite UI for Angular
_description: The Ignite UI for Angular Data Grid can handle thousands of updates per second.
_keywords: angular data grid, agular grid updates, angular live data
---
}

@@if (igxName === 'IgxTreeGrid') {
---
title: Tree Grid Live Data - Native Angular | Ignite UI for Angular
_description: The Ignite UI for Angular Data Grid can handle thousands of updates per second.
_keywords: angular data grid, agular grid updates, angular live data
---
}

### Live Updating Demo
The @@igComponent component in Ignite UI for Angular is able to handle thousands of updates per seconds, while keeping the grid responsive for any interaction that the user may undertake. This sample demonstrates the @@igComponent handling thousands of updates per second and also Chart representation of data, based on Category Prices per Region. Use the `Chart` button to show data based on the `selected rows` or use the button under `Chart column` to see the same based on row `Region` value.

@@if (igxName === 'IgxGrid') {
<div class="sample-container loading" style="height:700px">
    <iframe id="grid-sample-finjs-iframe" data-src='{environment:lobDemosBaseUrl}/finjs-sample' width="100%" height="100%" seamless frameborder="0" class="lazyload"></iframe>
</div>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-sample-finjs-iframe" data-demos-base-url="{environment:lobDemosBaseUrl}">view on stackblitz</button>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="grid-sample-finjs-iframe" data-demos-base-url="{environment:lobDemosBaseUrl}">view on codesandbox</button>
</div>

## API References
* [IgxGridComponent]({environment:angularApiUrl}/classes/igxgridcomponent.html)
* [IgxGridComponent Styles]({environment:sassApiUrl}/#function-igx-grid-theme)
* [IgxColumnComponent]({environment:angularApiUrl}/classes/igxcolumncomponent.html)
* [IgxGridRowComponent]({environment:angularApiUrl}/classes/igxgridrowcomponent.html)
* [IgxGridCellComponent]({environment:angularApiUrl}/classes/igxgridcellcomponent.html)

## Additional Resources
<div class="divider--half"></div>

* [Virtualization and Performance](virtualization.md)
* [Paging](paging.md)
* [Filtering](filtering.md)
* [Sorting](sorting.md)
* [Summaries](summaries.md)
* [Column Moving](column_moving.md)
* [Column Pinning](column_pinning.md)
* [Column Resizing](column_resizing.md)
* [Selection](selection.md)

<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
}

@@if (igxName === 'IgxTreeGrid') {
<div class="sample-container loading" style="height:700px">
    <iframe id="grid-sample-finjs-iframe" data-src='{environment:lobDemosBaseUrl}/treegrid-finjs-sample' width="100%" height="100%" seamless frameborder="0" class="lazyload"></iframe>
</div>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-sample-finjs-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="grid-sample-finjs-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on codesandbox</button>
</div>

## API References

<div class="divider--half"></div>

* [IgxTreeGridComponent]({environment:angularApiUrl}/classes/igxtreegridcomponent.html)
* [IgxTreeGridCellComponent]({environment:angularApiUrl}/classes/igxtreegridcellcomponent.html)
* [IgxTreeGridRowComponent]({environment:angularApiUrl}/classes/igxtreegridrowcomponent.html)
* [IgxGridComponent]({environment:angularApiUrl}/classes/igxgridcomponent.html)
* [IgxGridComponent Styles]({environment:sassApiUrl}/#function-igx-grid-theme)
* [IgxGridCellComponent]({environment:angularApiUrl}/classes/igxgridcellcomponent.html)
* [IgxGridRowComponent]({environment:angularApiUrl}/classes/igxgridrowcomponent.html)
* [IgxBaseTransactionService]({environment:angularApiUrl}/classes/igxbasetransactionservice.html)


## Additional Resources

<div class="divider--half"></div>

* [Data Grid](../grid/grid.md)
* [Row Editing](row_editing.md)

<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)

}