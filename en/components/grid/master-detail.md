---
title: Angular Master-Detail Grid - Ignite UI for Angular
_description: Define expandable detail view template for data in rows with Ignite UI Angular Grid. Useful for displaying master-detail style data in a hierarchical structure.
_keywords: master detail, igniteui for angular, infragistics
---

# Angular Master-Detail Grid

The `igxGrid` component supports specifying a detail template that displays additional details for a particular row by expanding/collapsing its content. When specified each record acts as a master, which upon expansion shows a customizable details template with contextual data for the current record.

This mode is useful when you need to display master-detail style data in a hierarchical structure.

## Angular Grid Master-Detail Example


<code-view style="height:600px" 
           data-demos-base-url="{environment:lobDemosBaseUrl}" 
           iframe-src="{environment:lobDemosBaseUrl}/grid/grid-master-detail" alt="Angular Grid Master-Detail Example">
</code-view>



## Configuration

To configure the `igxGrid` to display in master-detail mode you need to specify a template inside the grid, marked with the `igxGridDetail` directive:

```html
 <igx-grid ... >
         <ng-template igxGridDetail let-dataItem>
              <!-- Custom detail template content here -->
        </ng-template>
    </igx-grid>
```

Context of the template is the master record data, so that values from the master record can be displayed in the detail template. For example:

```html
    <igx-grid ... >
         <ng-template igxGridDetail let-dataItem>
            <div *ngIf="dataItem.Category">
                <header>{{dataItem.Category.CategoryName}}</header>
                <span>{{dataItem.Category.Description}}</span>
            </div>
        </ng-template>
    </igx-grid>
```


## API

The expansion states can be controlled via the [`expansionStates`]({environment:angularApiUrl}/classes/igxgridcomponent.html#expansionStates) input of the `igxGrid`. States are stored in key-value pairs [row identifier, expansion state]. The property gets/sets the current expansion states and supports two-way binding:

```html
  <igx-grid [(expansionStates)]='expansionState' >
    ...
  </igx-grid>
```

Additional API methods for controlling the expansion states are also exposed:
- [`expandAll`]({environment:angularApiUrl}/classes/igxgridcomponent.html#expandAll)
- [`collapseAll`]({environment:angularApiUrl}/classes/igxgridcomponent.html#collapseAll)
- [`toggleRow`]({environment:angularApiUrl}/classes/igxgridcomponent.html#toggleRow)
- [`expandRow`]({environment:angularApiUrl}/classes/igxgridcomponent.html#expandRow)
- [`collapseRow`]({environment:angularApiUrl}/classes/igxgridcomponent.html#collapseRow)

## Keyboard navigation

- When focus is on a detail row:

    - `Arrow Up` - navigates one row up, focusing a cell from the previous row.
    - `Arrow Down` -  navigates one row down, focusing a cell from the next row.
    - `Tab` - Allows focus to move to the next focusable element inside the template if there are focusable elements, otherwise moves to the next grid row.
    - `Shift + Tab` -  moves the focus to the previous row.

- When focus is on a data row with expander:
    - `Alt + Arrow Right/ Down` - expands the row.
    - `Alt + Arrow Left/Down` - collapses the row.

## Known Issues and Limitations


|Known Limitations| Description|
| --- | --- |
| Tab navigation inside the custom detail template may not update the master grid scroll position in case the next focused element is outside the visible view port.| Tab navigation inside the custom detail template is left up to the browser. |
| Details template will not be exported to Excel.| As the details template can contain any type of content we cannot export it to excel out of the box.|
| The search feature will not hightlight elements from the details template. | |



<div class="divider--half"></div>

## API References
* [IgxGridComponent]({environment:angularApiUrl}/classes/igxgridcomponent.html)
* [IgxGridComponent Styles]({environment:sassApiUrl}/#function-grid-theme)
* [IgxColumnComponent]({environment:angularApiUrl}/classes/igxcolumncomponent.html)
* [IgxGridRow]({environment:angularApiUrl}/classes/igxgridrow.html)
* [IgxTreeGridRow]({environment:angularApiUrl}/classes/igxtreegridrow.html)
* [IgxHierarchicalGridRow]({environment:angularApiUrl}/classes/igxhierarchicalgridrow.html)
* [IgxGridCell]({environment:angularApiUrl}/classes/igxgridcell.html)