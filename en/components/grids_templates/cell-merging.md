---
title: Angular Grid Cell Merging - Ignite UI for Angular
_description: Position and size columns in a more powerful way, using the multi-row layout functionality in the Ignite UI for Angular Data Grid. Check out examples and demos!
_keywords: angular multi-row layout, material row layout, ignite ui for angular
---

# Angular Cell Merging

The Ignite UI for Angular @@igComponent provides a Cell Merging feature that combines two or more adjacent cells with the same value into a single, larger cell. Merging is applied vertically within a column and helps improve readability by reducing duplicate values. The feature can be configured to merge cells either by default matching data values or by applying a custom condition.

## Angular Cell Merging Example

@@if(igxName === 'IgxGrid'){
<code-view style="height:755px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/grid/grid-cellMerge" alt="Angular Cell Merging Example">
</code-view>
}
@@if(igxName === 'IgxHierarchicalGrid'){
<code-view style="height:755px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-cell-merge" alt="Angular Cell Merging Example">
</code-view>
}
@@if(igxName === 'IgxTreeGrid'){
<code-view style="height:755px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/tree-grid/treegrid-cell-merge" alt="Angular Cell Merging Example">
</code-view>
}

## Enabling and Using Cell Merging

Cell merging in the grid is controlled at two levels:
 - Grid-level merge mode – determines when merging is applied.
 - Column-level merge toggle – determines which columns can merge cells.

### Grid Merge Mode
The grid exposes a `cellMergeMode` property that accepts values from the `GridCellMergeMode` enum:
 - `always` - Merges any adjacent cells that meet the merging condition, regardless of sort state.
 - `onSort` - Merges adjacent cells only when the column is sorted **(default value)**.

```html
<@@igSelector [data]="data" [cellMergeMode]="cellMergeMode">
    ...
</@@igSelector>
```
```ts
protected cellMergeMode: GridCellMergeMode = 'always';
```

### Column Merge Toggle
At the column level, merging can be enabled or disabled with the `merge` property.

```html
<igx-column field="OrderID" [merge]="true"></igx-column>
<igx-column field="ShipperName" [merge]="false"></igx-column>
```

In the above example:
 - The **OrderID** column will merge adjacent duplicate values.
 - The **ShipperName** column will render normally without merging.

 ### Combined Example

 ```html
<@@igSelector [data]="data" [cellMergeMode]="cellMergeMode" [autoGenerate]="false">
    <igx-column field="OrderID" header="Order ID" [merge]="true"></igx-column>
    <igx-column field="ShipperName" header="Shipper Name" [merge]="true"></igx-column>
    <igx-column field="Salesperson" header="Salesperson"></igx-column>
</@@igSelector>
 ```
 ```ts
protected cellMergeMode: GridCellMergeMode = 'onSort';
```
Here, the grid is set to merge only when columns are sorted, and both Category and Product columns are configured for merging.

## Custom Merge Conditions
In addition to the built-in `always` and `onSort` modes, the grid allows you to define a custom condition for merging cells through the `mergeStrategy` property. This strategy controls both how cells are compared and how merged ranges are calculated.

### Merge Strategy Interface
A custom merge strategy must implement the `IGridMergeStrategy` interface:

```ts
export interface IGridMergeStrategy {
    merge: (
        data: any[],
        field: string,
        comparer: (prevRecord: any, currentRecord: any, field: string) => boolean,
        result: any[],
        activeRowIndex?: number,
        grid?: GridType
    ) => any[];

    comparer: (prevRecord: any, record: any, field: string) => boolean;    
}
```
- `merge` - defines how merged cells are produced.
- `comparer` - defines the condition to decide if two adjacent records should be merged.

@@if(igxName === 'IgxGrid' || igxName === 'IgxHierarchicalGrid'){
### Extending the Default Strategy

If you only want to customize part of the behavior (for example, the comparer logic), you can extend the built-in `DefaultMergeStrategy` and override the relevant methods.

```ts
export class MyCustomStrategy extends DefaultMergeStrategy {
    /* Merge only cells within their respective projects */
    public override comparer(prevRecord: any, record: any, field: string): boolean {
        const a = prevRecord[field];
        const b = record[field];
        const projA = prevRecord['ProjectName'];
        const projB = record['ProjectName'];
        return a === b && projA === projB;
    }
}
```
}
@@if(igxName === 'IgxTreeGrid'){
The `IgxTreeGrid` provides two built-in strategies that implement the `IGridMergeStrategy` interface: `DefaultTreeGridMergeStrategy` and `ByLevelTreeGridMergeStrategy`. `DefaultTreeGridMergeStrategy` merges all cells with the same value, regardless of their hierarchical level. In contrast, `ByLevelTreeGridMergeStrategy` only merges cells if they have the same value and are located at the same level, making level a required condition for merging.

### Extending the Default Strategy

If you only want to customize part of the behavior (for example, the comparer logic), you can extend one of the built-in strategies, either `DefaultTreeGridMergeStrategy` or `ByLevelTreeGridMergeStrategy`, and override the relevant methods.

```ts
export class MyCustomStrategy extends DefaultTreeGridMergeStrategy {
    /* Merge only cells within their respective projects */
    public override comparer(prevRecord: any, record: any, field: string): boolean {
        const a = prevRecord[field];
        const b = record[field];
        const projA = prevRecord['ProjectName'];
        const projB = record['ProjectName'];
        return a === b && projA === projB;
    }
}
```
}

### Applying a Custom Strategy
Once defined, assign the strategy to the grid through the `mergeStrategy` property:
```html
<@@igSelector [data]="data" [mergeStrategy]="customStrategy">
  <igx-column field="ActionID" [merge]="true"></igx-column>
  <igx-column field="ProjectName" [merge]="true"></igx-column>
</@@igSelector>
```
```ts
protected customStrategy = new MyCustomStrategy();
```
@@if(igxName === 'IgxGrid'){
### Demo
<code-view style="height:755px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/grid/grid-cellMerge-custom" alt="Angular Cell Merging Example with Custom Condition">
</code-view>
}

## Feature Integration 
Due to the specific behavior of merged cells it has to be noted how exactly it ties together with some of the other features of the grid:
@@if(igxName === 'IgxGrid'){
- **Expand/Collapse**: if a feature (such as master-detail, grouping, etc.) generates a non-data row, then the cell merging is interrupted and the group will be split.
}
- **Excel export**: merged cells remain merged when exported to Excel.
- **Column pinning**: cells remain merged when a column is pinned and are displayed in the pinned area.
- **Row pinning**: cells merge only withing their containing area, i.e. cells of pinned rows merge only with cells of other pinned rows, while cells of unpinned rows merge only with cells of unpinned rows.
- **Navigation/Activation**: when a cell is active, all merged cells in the same row become single cells, i.e. their merge sequence is broken. This also includes activation via keyboard navigation.

>[!NOTE]
> If a merged cell is clicked, the closest cell from the merge sequence will become active.

- **Updating/Editing**: since activation breaks the merge sequence, only a single cell will be in edit mode.
- **Row selection**: if selected rows intersect merged cells, all related merged cells should be marked as part of the selection.

@@if(igxName === 'IgxGrid'){
## Limitations
|Known Limitations| Description|
| --- | --- |
| Cell merging is not supported in combination with Multi-row Layout. | Both span complex layouts that don't make sense when combined. A warning will be thrown if such invalid configuration is detected. |
}

## API References
* [@@igxNameComponent API]({environment:angularApiUrl}/classes/@@igTypeDoc.html)
* [@@igxNameComponent Styles]({environment:sassApiUrl}/themes#function-grid-theme)

## Additional Resources
<div class="divider--half"></div>

* [@@igComponent overview](@@igMainTopic.md)

<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
