---
title: Angular Grid Cell Merging - Ignite UI for Angular
_description: Position and size columns in a more powerful way, using the multi-row layout functionality in the Ignite UI for Angular Data Grid. Check out examples and demos!
_keywords: angular multi-row layout, material row layout, ignite ui for angular
---

# Angular Cell Merging

The Ignite UI for Angular @@igComponent provides a Cell Merging feature that combines two or more adjacent cells with the same value into a single, larger cell. Merging is applied vertically within a column and helps improve readability by reducing duplicate values. The feature can be configured to merge cells either by default matching data values or by applying a custom condition.

## Angular Cell Merging Example

<code-view style="height:755px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/grid/grid-cell-merging" alt="Angular Cell Merging Example">
</code-view>

## Enabling and Using Cell Merging

Cell merging in the grid is controlled at two levels:
 - Grid-level merge mode – determines when merging is applied.
 - Column-level merge toggle – determines which columns can merge cells.

### Grid Merge Mode
The grid exposes a `cellMergeMode` property that accepts values from the `GridCellMergeMode` enum:
 - `always` - Merges any adjacent cells that meet the merging condition, regardless of sort state.
 - `onSort` - Merges adjacent cells only when the column is sorted.

```html
<@@igSelector [data]="data" [cellMergeMode]="GridCellMergeMode.always">
    ...
</@@igSelector>
```

### Column Merge Toggle
At the column level, merging can be enabled or disabled with the `merge` property.

```html
<igx-column field="Category" [merge]="true"></igx-column>
<igx-column field="Product" [merge]="false"></igx-column>
```

In the above example:
 - The **Category** column will merge adjacent duplicate values.
 - The **Product** column will render normally without merging.

 ### Combined Example

 ```html
<@@igSelector [data]="data" [cellMergeMode]="GridCellMergeMode.onSort" [autoGenerate]="false">
    <igx-column field="Category" header="Category" [merge]="true"></igx-column>
    <igx-column field="Product" header="Product" [merge]="true"></igx-column>
    <igx-column field="Price" header="Price"></igx-column>
</@@igSelector>
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

### Extending the Default Strategy
If you only want to customize part of the behavior (for example, the comparer logic), you can extend the built-in `DefaultMergeStrategy` and override the relevant methods.

```ts
export class MyCustomStrategy extends DefaultMergeStrategy {
    public override comparer(prevRecord: any, record: any, field: string): boolean {
    // Example: merge cells if values match AND are not empty
    return prevRecord[field] === record[field] && prevRecord[field] !== '';
  }
}
```

### Applying a Custom Strategy
Once defined, assign the strategy to the grid through the `mergeStrategy` property:
```html
<@@igSelector [data]="data" [mergeStrategy]="customStrategy">
  <igx-column field="Category" [merge]="true"></igx-column>
  <igx-column field="Product" [merge]="true"></igx-column>
</@@igSelector>
```
```ts
public customStrategy = new MyCustomStrategy();
```

## Limitations
|Known Limitations| Description|
| --- | --- |
| Cell merging is not supported in combination with Multi-row Layout. | Both span complex layouts that don't make sense when combined. A warning will be thrown if such invalid configuration is detected. |

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
