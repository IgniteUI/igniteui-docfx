---
title: Angular Hierarchical Grid Selection - Ignite UI for Angular
_description: See how easy it is to select data in Ignite UI for Angular grid using variety of events, rich API or with simple mouse interactions like single select.
_keywords: data select, igniteui for angular, infragistics
_license: commercial
_canonicalLink: grid/selection
---



# Angular Hierarchical Grid Selection

With Ignite UI for Angular Hierarchical Grid you can easily select data by using variety of events, rich API or with simple mouse interactions like single select.

## Angular Grid Selection Example

The sample below demonstrates the three types of Hierarchical Grid's **cell selection** behavior. Use the buttons below to enable each of the available selection modes. A brief description will be provided on each button interaction through a snackbar message box.
<div class="divider--half"></div>






<code-view style="height:750px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/hierarchical-grid/hGrid-cell-selection/" alt="Angular Grid Selection Example">
</code-view>

<div class="divider--half"></div>


## Angular Grid Selection Options

IgniteUI for Angular Hierarchical Grid component provides three different selection modes - [Row selection](row-selection.md), [Cell selection](cell-selection.md) and [Column selection](column-selection.md). By default only **Multi-cell selection** mode is enabled in the Hierarchical Grid. In order to change/enable selection mode you can use [`rowSelection`]({environment:angularApiUrl}/classes/igxgridcomponent.html#rowSelection), [`cellSelection`]({environment:angularApiUrl}/classes/igxgridcomponent.html#cellSelection) or [`selectable`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#selectable) properties.

### Angular Row Selection

Property [`rowSelection`]({environment:angularApiUrl}/classes/igxgridcomponent.html#rowSelection) enables you to specify the following options:

- none - Row selection would be disabled for the Hierarchical Grid
- single - Selection of only one row within the Hierarchical Grid would be available
- multiple - Multi-row selection would be available by using the `Row selectors`, with a key combination like <kbd>ctrl</kbd> + <kbd>click</kbd>, or by pressing the <kbd>space key</kbd> once a cell is focused 

> Go to [Row selection topic](row-selection.md) for more information.

### Angular Cell Selection

Property [`cellSelection`]({environment:angularApiUrl}/classes/igxgridcomponent.html#cellSelection) enables you to specify the following options:

- none - Cell selection would be disabled for the Hierarchical Grid
- single - Selection of only one cell within the Hierarchical Grid would be available.
- multiple - Currently, this is the default state of the selection in the Hierarchical Grid. Multi-cell selection is available by mouse dragging over the cells, after a left button mouse clicked continuously.

> Go to [Cell selection topic](cell-selection.md) for more information.

### Angular Column Selection

The [`selectable` property]({environment:angularApiUrl}/classes/igxcolumncomponent.html#selectable) enables you to specify the following options for each **column**:

- false - the corresponding column selection will be disabled for the Hierarchical Grid
- true - the corresponding column selection will be enabled for the Hierarchical Grid
- This lead to the following three variations:
- Single selection - <kbd>mouse click</kbd> over the column cell.
- Multi column selection - holding <kbd>ctrl</kbd> + <kbd>mouse click</kbd> over the column cells.
- Range column selection - holding <kbd>shift</kbd> + <kbd>mouse click</kbd> selects everything in between.

> Go to [Column selection topic](column-selection.md) for more information.



## Known Issues and Limitations

- Using the Hierarchical Grid with Selection enabled on IE11 requires the explicit import of the array polyfill in polyfill.ts of the angular application. IE11 is no longer supported as of version 13.0.0.

    ```typescript
    import 'core-js/es7/array';
    ```

- When the grid has no `primaryKey` set and remote data scenarios are enabled (when paging, sorting, filtering, scrolling trigger requests to a remote server to retrieve the data to be displayed in the grid), a row will lose the following state after a data request completes:
  - Row Selection
  - Row Expand/collapse
  - Row Editing
  - Row Pinning

## API References

- [IgxHierarchicalGridComponent API]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html)
_[IgxGridRow API]({environment:angularApiUrl}/classes/igxgridrow.html)
- [IgxGridCell API]({environment:angularApiUrl}/classes/igxgridcell.html)
- [IgxHierarchicalGridComponent Styles]({environment:sassApiUrl}/themes#function-grid-theme)

## Additional Resources

<div class="divider--half"></div>

- [Hierarchical Grid overview](hierarchical-grid.md)
- [Row Selection](row-selection.md)
- [Cell Selection](cell-selection.md)
- [Paging](paging.md)
- [Filtering](filtering.md)
- [Sorting](sorting.md)
- [Summaries](summaries.md)
- [Column Moving](column-moving.md)
- [Virtualization and Performance](virtualization.md)


<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.

- [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
- [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
