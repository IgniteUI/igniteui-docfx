---
title: Conditional Cell Styling - Native Angular | Ignite UI for Angular
_description: Conditional Cell Styling feature provides a means for column cells styling based on custom conditions.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Grid, Angular Table, Angular Data Grid component, Angular Data Table component, Angular Data Grid control, Angular Data Table control,Angular Grid component, Angular Table component, Angular Grid control, Angular Table control, Angular High Performance Grid, Angular High Performance Data Table, Cell Styling, Conditional Formatting, Conditional Cell Styling, Angular Grid Conditional Column Styling, Angular Data Table Conditional Column Styling, Angular Conditional Cell Styling
---

### Conditional Cell Styling
The IgxHierarchicalGrid component in Ignite UI for Angular provides **conditional cell styling** based on custom rules.

This can be achieved by setting the [`IgxColumnComponent`]({environment:angularApiUrl}/classes/igxcolumncomponent.html) input [`cellClasses`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#cellclasses) to an object literal containing key-value pairs. The key is the name of the CSS class, while the value is either a callback function that returns a boolean, or boolean value.

#### Demo




<!-- TODO -->

<div class="divider--half"></div>

#### Overview
You can conditionally style the IgxHierarchicalGrid cells by setting the [`IgxColumnComponent`]({environment:angularApiUrl}/classes/igxcolumncomponent.html) [`cellClasses`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#cellclasses) input and defining custom rules.




<!-- TODO -->


The [`cellClasses`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#cellclasses) input accepts an object literal, containing key-value pairs, where the key is the name of the CSS class, while the value is either a callback function that returns a boolean, or boolean value.




<!-- TODO -->


Use **::ng-deep** or **`ViewEncapsulation.None`** to force the custom styles down through the current component and its children.

### API References
<div class="divider--half"></div>

* [IgxColumnComponent]({environment:angularApiUrl}/classes/igxcolumncomponent.html)
* [IgxHierarchicalGridComponent]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html)
* [IgxHierarchicalGridComponent Styles]({environment:sassApiUrl}/index.html#mixin-igx-grid)

### Additional Resources
<div class="divider--half"></div>

* [Hierarchical Grid overview](hierarchical_grid.md)
* [Virtualization and Performance](virtualization.md)
* [Editing](editing.md)
* [Paging](paging.md)
* [Filtering](filtering.md)
* [Sorting](sorting.md)
* [Summaries](summaries.md)
* [Column Moving](column_moving.md)
* [Column Pinning](column_pinning.md)
* [Column Resizing](column_resizing.md)
* [Column Hiding](column_hiding.md)
* [Selection](selection.md)
* [Searching](search.md)
* [Toolbar](toolbar.md)
* [Multi Column Headers](multi_column_headers.md)
* [Display Density](display_density.md)

<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
