
@@if (igxName === 'IgxGrid') {
---
title: Grid Live Data - Native Angular | Ignite UI for Angular
_description: The Ignite UI for Angular Data Grid can handle thousands of updates per second.
_keywords: angular data grid, angular grid updates, angular live data
---
}

@@if (igxName === 'IgxTreeGrid') {
---
title: Tree Grid Live Data - Native Angular | Ignite UI for Angular
_description: The Ignite UI for Angular Data Grid can handle thousands of updates per second.
_keywords: angular data grid, angular grid updates, angular live data
_canonicalLink: grid/live-data
---
}

# @@igComponent Live Updating
The @@igComponent component is able to handle thousands of updates per second, while staying responsive for user interactions.

The sample below demonstrates the @@igComponent performance when all records are updated multiple times per second. Use the UI controls to choose the number of records loaded and the frequency of updates.
Feed the same data into the Category Chart to experience the powerful charting capabilities of Ignite UI. The `Chart` button will show `Category Prices per Region` data for the selected rows and the `Chart` column button will show the same for the current row.

## Demo
@@if (igxName === 'IgxGrid') {
<div class="sample-container loading" style="height:700px">
    <iframe id="grid-sample-finjs-iframe" data-src='{environment:lobDemosBaseUrl}/finjs-sample' width="100%" height="100%" seamless frameborder="0" class="lazyload"></iframe>
</div>
<p style="margin: 0;padding-top: 0.5rem">Like this sample? Get access to our complete Angular toolkit and start building your own apps in minutes. <a class="no-external-icon mchNoDecorate trackCTA" target="_blank" href="https://www.infragistics.com/products/ignite-ui-angular/download" data-xd-ga-action="Download" data-xd-ga-label="Ignite UI for Angular">Download it for free.</a></p>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="grid-sample-finjs-iframe" data-demos-base-url="{environment:lobDemosBaseUrl}">view on codesandbox</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-sample-finjs-iframe" data-demos-base-url="{environment:lobDemosBaseUrl}">view on stackblitz</button>
</div>

## Data binding and updates
A service provides data to the component when the page loads, and when the slider controller is used to fetch a certain number of records. While in a real scenario updated data would be consumed from the service, here data is updated in code. This is done to keep the demo simple and focus on its main goal - demonstrate the grid performance.
```html
<igx-grid #grid [data]="data" ...></igx-grid>
```
```typescript
public ngOnInit() {
    this.localService.getData(this.volume);
    this.volumeSlider.onValueChange.subscribe(x => this.localService.getData(this.volume);
    this.localService.records.subscribe(x => { this.data = x; });
}
```

Angular pipes are used internally to update the grid view. A change in the data field value or a change in the data object/data collection reference will trigger the corresponding pipes. However, this is not the case for columns, which are bound to [`complex data objects`](grid.md#complex-data-binding), because the Angular pure pipe will not to detect a change in a nested property. To resolve the situation, provide a new object reference for the data object containing the property. Example:

```html
<igx-grid #grid [data]="data" ...>
    <igx-column field="price.usd"></igx-column>
</igx-grid>
```
```typescript
private updateData(data: IRecord[]) {
    const newData = []
    for (const rowData of data) {
        rowData.price = { usd: getUSD(), eur: getEUR() };
        newData.push({...rowData});
    }
    this.grid.data = newData;
}
```

## Templates
Updating the view works the same for columns with a default template and for columns using a custom template. However, we recommend you to keep custom templates relatively simple. As number of elements in the template grows, negative performance impact rises as well.

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
* [Column Moving](column-moving.md)
* [Column Pinning](column-pinning.md)
* [Column Resizing](column-resizing.md)
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
<p style="margin: 0;padding-top: 0.5rem">Like this sample? Get access to our complete Angular toolkit and start building your own apps in minutes. <a class="no-external-icon mchNoDecorate trackCTA" target="_blank" href="https://www.infragistics.com/products/ignite-ui-angular/download" data-xd-ga-action="Download" data-xd-ga-label="Ignite UI for Angular">Download it for free.</a></p>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="grid-sample-finjs-iframe" data-demos-base-url="{environment:lobDemosBaseUrl}">view on codesandbox</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-sample-finjs-iframe" data-demos-base-url="{environment:lobDemosBaseUrl}">view on stackblitz</button>
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
* [Row Editing](row-editing.md)

<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)

}