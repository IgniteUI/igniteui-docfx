---
title: Column Hiding Component – Native Angular | Ignite UI for Angular
_description: Column hiding with the Ignite UI for Angular Column Hiding component allows the users hide and show columns by using a built-in UI of the Data Grid.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Native Angular Components, Angular Grid, Angular Table, Angular Data Grid component, Angular Data Table component, Angular Data Grid control, Angular Data Table control,Angular Grid component, Angular Table component, Angular Grid control, Angular Table control, Angular High Performance Grid, Angular High Performance Data Table, grid column hiding, column hiding, angular grid column hiding, angular data table column hiding, angular column hiding
---

### Hierarchical Grid Column Hiding

The Ignite UI for Angular Hierarchical Grid provides an [`IgxColumnHidingComponent`]({environment:angularApiUrl}/classes/igxcolumnhidingcomponent.html), which allows users to hide and show columns directly through the **UI**. The Hierarchical Grid has a built-in column hiding UI, which can be used through the Hierarchical Grid's toolbar. In addition, developers can always define the column hiding UI as a separate component and place it anywhere they want on the page.

#### Demo




<div class="sample-container loading" style="height:600px">
    <iframe id="hierarchicalgrid-column-hiding-sample-iframe" src='{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-hiding' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="hierarchicalgrid-column-hiding-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>



### Hierarchical Grid setup
Let's start by creating our Hierarchical Grid and binding it to our data. We will also enable both filtering and sorting for the columns.




```html
<igx-hierarchical-grid class="hgrid" [data]="localdata"
        [height]="'560px'" [width]="'100%'" columnWidth="200px" [allowFiltering]="true" #hGrid>
            <igx-column field="Artist" [sortable]="true" [disableHiding]="true"></igx-column>
            <igx-column field="Photo">
                <ng-template igxCell let-cell="cell">
                    <div class="cell__inner_2">
                        <img [src]="cell.value" class="photo" />
                    </div>
                </ng-template>
            </igx-column>
            <igx-column field="Debut" [sortable]="true"></igx-column>
            <igx-column field="Grammy Nominations" [sortable]="true"></igx-column>
            <igx-column field="Grammy Awards" [sortable]="true"></igx-column>

            <igx-row-island [key]="'Albums'" [autoGenerate]="false" #layout1 >
                <igx-column field="Album" [sortable]="true"></igx-column>
                <igx-column field="Launch Date" [sortable]="true"></igx-column>
                <igx-column field="Billboard Review" [sortable]="true"></igx-column>
                <igx-column field="US Billboard 200" [sortable]="true"></igx-column>
            <igx-row-island [key]="'Songs'" [autoGenerate]="false">
                    <igx-column field="No."></igx-column>
                    <igx-column field="Title"></igx-column>
                    <igx-column field="Released"></igx-column>
                    <igx-column field="Genre"></igx-column>
            </igx-row-island>
        </igx-row-island>

        <igx-row-island [key]="'Tours'" [autoGenerate]="false">
            <igx-column field="Tour"></igx-column>
            <igx-column field="Started on"></igx-column>
            <igx-column field="Location"></igx-column>
            <igx-column field="Headliner"></igx-column>
        </igx-row-island>

        </igx-hierarchical-grid>
```


### Toolbar's Column Hiding UI

The built-in Column Hiding UI is placed inside an [`IgxDropDownComponent`]({environment:angularApiUrl}/classes/igxdropdowncomponent.html) in the Hierarchical Grid's toolbar. We can show/hide the Column Hiding UI by using this exact dropdown.
For this purpose all we have to do is set both the [`showToolbar`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html#showtoolbar) and the [`columnhiding`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html#columnhiding) properties of the Hierarchical Grid to true. If the toolbar is not enabled, enabling the [`columnhiding`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html#columnhiding) property will have no effect.
We will also add a title to our toolbar by using the [`toolbarTitle`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html#toolbartitle) property and a custom style for our Hierarchical Grid's wrapper.


```html
<!--columnHiding.component.html-->
<div class="hgrid-sample">
    <igx-hierarchical-grid class="hgrid" [data]="localdata" [showToolbar]="true"[columnHiding]="true" toolbarTitle="Singers">
    ...
 </igx-hierarchical-grid>
</div>
```
```css
/* columnHiding.component.css */
.photo {
    vertical-align: middle;
    max-height: 62px;
}
.cell__inner_2 {
    margin: 1px
}
```








The Hierarchical Grid provides us with some useful properties when it comes to using the toolbar's column hiding UI.
By using the [`columnHidingTitle`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html#columnhidingtitle) and the [`hiddenColumnsText`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html#hiddencolumnstext) properties, we will set the title and the text that is displayed inside the dropdown button in the toolbar. More specifically, the [`hiddenColumnsText`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html#hiddencolumnstext) is displayed right next to the columns count number, which is included by default in the button.
The [`hiddenColumnsText`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html#hiddencolumnstext) property is quite handy since it can be used for localization purposes as well.



```html
<div class="hgrid-sample">
    <igx-hierarchical-grid class="hgrid" [data]="localdata" [showToolbar]="true"[columnHiding]="true" toolbarTitle="Singers" 
    columnHidingTitle="Column Hiding" hiddenColumnsText="Hidden">
 </igx-hierarchical-grid>
</div>
```


By using the [`columnsAreaMaxHeight`]({environment:angularApiUrl}/classes/igxcolumnhidingcomponent.html#columnsareamaxheight) property of the column hiding UI, we can set the maximum height of the area that contains the columns. This way if we have a lot of columns and not all of them can fit in the container, a scrollbar will appear, which will allow us to navigate to any column we want by keeping the search input pinned at the top and the show/hide all buttons at the bottom.

```typescript
// columnHiding.component.ts

public ngAfterViewInit() {        
    this.hierarchicalGrid.toolbar.columnHidingUI.columnsAreaMaxHeight = "200px";
}
```

In order to use the expanded set of functionalities for the column hiding UI, we can use the toolbar's [`columnHidingUI`]({environment:angularApiUrl}/classes/igxgridtoolbarcomponent.html#columnhidingui) property, which returns a reference to the column hiding UI component itself. This way we can access its respective API and use it according to our application's requirements.

You can see the result of the code from above at the beginning of this article in the [Column Hiding Demo](#demo) section.


### API References



In this article we learned how to use the built-in column hiding UI in the Hierarchical Grid's toolbar.


The column hiding UI has a few more APIs to explore, which are listed below.

* [`IgxColumnHidingComponent`]({environment:angularApiUrl}/classes/igxcolumnhidingcomponent.html)
* [`IgxColumnHidingComponent Styles`]({environment:sassApiUrl}/index.html#function-igx-column-hiding-theme)

Additional components and/or directives with relative APIs that were used:

[`IgxHierarchicalGridComponent`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html) properties:
* [`columnHiding`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html#columnhiding)
* [`columnHidingTitle`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html#columnhidingtitle)
* [`hiddenColumnsCount`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html#hiddencolumnscount)
* [`hiddenColumnsText`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html#hiddencolumnstext)

[`IgxColumnComponent`]({environment:angularApiUrl}/classes/igxcolumncomponent.html) properties:
* [`disableHiding`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#disablehiding)

[`IgxGridToolbarComponent`]({environment:angularApiUrl}/classes/igxgridtoolbarcomponent.html) properties:
* [`columnHidingUI`]({environment:angularApiUrl}/classes/igxgridtoolbarcomponent.html#columnhidingui)
* [`columnHidingDropdown`]({environment:angularApiUrl}/classes/igxgridtoolbarcomponent.html#columnhidingdropdown)

[`IgxGridToolbarComponent`]({environment:angularApiUrl}/classes/igxgridtoolbarcomponent.html) methods:
* [`toggleColumnHidingUI`]({environment:angularApiUrl}/classes/igxgridtoolbarcomponent.html#togglecolumnhidingui)

[`IgxHierarchicalGridComponent`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html) events:
* [`onColumnVisibilityChanged`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html#oncolumnvisibilitychanged)

[`IgxRadioComponent`]({environment:angularApiUrl}/classes/igxradiocomponent.html)

Styles:

* [`IgxHierarchicalGridComponent Styles`]({environment:sassApiUrl}/index.html#function-igx-grid-theme)
* [`IgxRadioComponent Styles`]({environment:sassApiUrl}/index.html#function-igx-radio-theme)

### Additional Resources
<div class="divider--half"></div>

* [Hierarchical Grid overview](hierarchical_grid.md)
* [Virtualization and Performance](virtualization.md)
* [Filtering](filtering.md)
* [Paging](paging.md)
* [Sorting](sorting.md)
* [Summaries](summaries.md)
* [Column Pinning](column_pinning.md)
* [Column Resizing](column_resizing.md)
* [Selection](selection.md)
* [Searching](search.md)

<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)