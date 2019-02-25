---
title: Column Hiding Component – Native Angular | Ignite UI for Angular
_description: Column hiding with the Ignite UI for Angular Column Hiding component allows the users hide and show columns by using a built-in UI of the Data Grid.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Native Angular Components, Angular Grid, Angular Table, Angular Data Grid component, Angular Data Table component, Angular Data Grid control, Angular Data Table control, Angular Grid component, Angular Table component, Angular Grid control, Angular Table control, Angular High Performance Grid, Angular High Performance Data Table, grid column hiding, column hiding, angular grid column hiding, angular data table column hiding, angular column hiding
---

### @@igComponent Column Hiding

The Ignite UI for Angular @@igComponent provides an [`IgxColumnHidingComponent`]({environment:angularApiUrl}/classes/igxcolumnhidingcomponent.html), which allows users to hide and show columns directly through the **UI**. The @@igComponent has a built-in column hiding UI, which can be used through the @@igComponent's toolbar. In addition, developers can always define the column hiding UI as a separate component and place it anywhere they want on the page.

#### Demo

@@if (igxName === 'IgxGrid') {
<div class="sample-container loading" style="height:600px">
    <iframe id="grid-column-hiding-toolbar-sample-iframe" src='{environment:demosBaseUrl}/grid/grid-column-hiding-toolbar-sample' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-column-hiding-toolbar-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>
}
@@if (igxName === 'IgxTreeGrid') {
<div class="sample-container loading" style="height:600px">
    <iframe id="treegrid-column-hiding-toolbar-sample-iframe" src='{environment:demosBaseUrl}/tree-grid/treegrid-column-hiding-toolbar' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="treegrid-column-hiding-toolbar-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>
}
@@if (igxName === 'IgxHierarchicalGrid') {
<div class="sample-container loading" style="height:600px">
    <iframe id="hierarchicalgrid-column-hiding-sample-iframe" src='{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-hiding' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="hierarchicalgrid-column-hiding-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>

}

### @@igComponent setup
Let's start by creating our @@igComponent and binding it to our data. We will also enable both filtering and sorting for the columns.

@@if (igxName === 'IgxGrid') {
```html
<!--columnHiding.component.html-->

<igx-grid #grid id="grid" [data]="data" [autoGenerate]="false" width="100%" height="560px" columnWidth="200px" [allowFiltering]="true">
    <igx-column [field]="'ID'" dataType="string" [sortable]="true"></igx-column>
    <igx-column [field]="'ContactName'" dataType="string" [sortable]="true"></igx-column>
    <igx-column [field]="'ContactTitle'" dataType="string" [sortable]="true"></igx-column>
    <igx-column [field]="'City'" dataType="string" [sortable]="true"></igx-column>
    <igx-column [field]="'CompanyName'" dataType="string" [sortable]="true"></igx-column>
    <igx-column [field]="'Fax'" dataType="string" [sortable]="true"></igx-column>
    <igx-column [field]="'Address'" dataType="string" [sortable]="true"></igx-column>
    <igx-column [field]="'PostalCode'" dataType="string" [sortable]="true"></igx-column>
    <igx-column [field]="'Country'" dataType="string" [sortable]="true"></igx-column>
    <igx-column [field]="'Phone'" dataType="string" [sortable]="true"></igx-column>
</igx-grid>
```
}
@@if (igxName === 'IgxTreeGrid') {
```html
<!--columnHiding.component.html-->

<igx-tree-grid #treeGrid [data]="data" primaryKey="ID" foreignKey="ParentID" [autoGenerate]="false" width="100%"
    height="560px" columnWidth="200px" [allowFiltering]="true">
    <igx-column [field]="'Name'" dataType="string" [sortable]="true"></igx-column>
    <igx-column [field]="'ID'" dataType="number" [sortable]="true"></igx-column>
    <igx-column [field]="'Title'" dataType="string" [sortable]="true"></igx-column>
    <igx-column [field]="'HireDate'" dataType="date" [sortable]="true"></igx-column>
    <igx-column [field]="'Age'" dataType="number" [sortable]="true"></igx-column>
    <igx-column [field]="'Address'" dataType="string" [sortable]="true"></igx-column>
    <igx-column [field]="'City'" dataType="string" [sortable]="true"></igx-column>
    <igx-column [field]="'Country'" dataType="string" [sortable]="true"></igx-column>
    <igx-column [field]="'Fax'" dataType="string" [sortable]="true"></igx-column>
    <igx-column [field]="'PostalCode'" dataType="string" [sortable]="true"></igx-column>
    <igx-column [field]="'Phone'" dataType="string" [sortable]="true"></igx-column>
</igx-tree-grid>
```
}
@@if (igxName === 'IgxHierarchicalGrid') {
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
}

### Toolbar's Column Hiding UI

The built-in Column Hiding UI is placed inside an [`IgxDropDownComponent`]({environment:angularApiUrl}/classes/igxdropdowncomponent.html) in the @@igComponent's toolbar. We can show/hide the Column Hiding UI by using this exact dropdown.
For this purpose all we have to do is set both the [`showToolbar`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#showtoolbar) and the [`columnhiding`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#columnhiding) properties of the @@igComponent to true. If the toolbar is not enabled, enabling the [`columnhiding`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#columnhiding) property will have no effect.
We will also add a title to our toolbar by using the [`toolbarTitle`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#toolbartitle) property and a custom style for our @@igComponent's wrapper.

@@if (igxName === 'IgxHierarchicalGrid') {
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
}

@@if (igxName === 'IgxGrid' || igxName === 'IgxTreeGrid') {
```html
<!--columnHiding.component.html-->

<div class="grid__wrapper">
    <@@igSelector ... [showToolbar]="true" [columnHiding]="true" toolbarTitle="Employees">
        ...
    </@@igSelector>
</div>
```

```css
/* columnHiding.component.css */

.grid__wrapper {
    margin: 10px;
}
```
}
@@if (igxName === 'IgxHierarchicalGrid') {

}


The @@igComponent provides us with some useful properties when it comes to using the toolbar's column hiding UI.
By using the [`columnHidingTitle`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#columnhidingtitle) and the [`hiddenColumnsText`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#hiddencolumnstext) properties, we will set the title and the text that is displayed inside the dropdown button in the toolbar. More specifically, the [`hiddenColumnsText`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#hiddencolumnstext) is displayed right next to the columns count number, which is included by default in the button.
The [`hiddenColumnsText`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#hiddencolumnstext) property is quite handy since it can be used for localization purposes as well.

@@if (igxName === 'IgxGrid' || igxName === 'IgxTreeGrid') {
```html
<!--columnHiding.component.html-->

<div class="grid__wrapper">
    <@@igSelector ... [showToolbar]="true" [columnHiding]="true" toolbarTitle="Employees" columnHidingTitle="Column Hiding" hiddenColumnsText="Hidden">
        ...
    </@@igSelector>
</div>
```
}
@@if (igxName === 'IgxHierarchicalGrid') {
```html
<div class="hgrid-sample">
    <igx-hierarchical-grid class="hgrid" [data]="localdata" [showToolbar]="true"[columnHiding]="true" toolbarTitle="Singers" 
    columnHidingTitle="Column Hiding" hiddenColumnsText="Hidden">
 </igx-hierarchical-grid>
</div>
```
}

By using the [`columnsAreaMaxHeight`]({environment:angularApiUrl}/classes/igxcolumnhidingcomponent.html#columnsareamaxheight) property of the column hiding UI, we can set the maximum height of the area that contains the columns. This way if we have a lot of columns and not all of them can fit in the container, a scrollbar will appear, which will allow us to navigate to any column we want by keeping the search input pinned at the top and the show/hide all buttons at the bottom.

```typescript
// columnHiding.component.ts

public ngAfterViewInit() {        
    this.@@igObjectRef.toolbar.columnHidingUI.columnsAreaMaxHeight = "200px";
}
```

In order to use the expanded set of functionalities for the column hiding UI, we can use the toolbar's [`columnHidingUI`]({environment:angularApiUrl}/classes/igxgridtoolbarcomponent.html#columnhidingui) property, which returns a reference to the column hiding UI component itself. This way we can access its respective API and use it according to our application's requirements.

You can see the result of the code from above at the beginning of this article in the [Column Hiding Demo](#demo) section.

@@if (igxName !== 'IgxHierarchicalGrid') {
### Custom Column Hiding UI

Let's say we want to manually define our [`IgxColumnHidingComponent`]({environment:angularApiUrl}/classes/igxcolumnhidingcomponent.html) and put it anywhere we want on our page. This can be easily done by simply creating an instance of the component in our markup. In order to do this, let's first grab the [`IgxColumnHidingModule`]({environment:angularApiUrl}/classes/igxcolumnhidingmodule.html).

```typescript
// app.module.ts

...
import {
    ...
    IgxColumnHidingModule 
} from 'igniteui-angular';

@NgModule({
    ...
    imports: [..., IgxColumnHidingModule],
})
export class AppModule {}
```

Now let's create our [`IgxColumnHidingComponent`]({environment:angularApiUrl}/classes/igxcolumnhidingcomponent.html)! In our application, we will place it next to the grid (which is not the case with the toolbar's column hiding UI, where the component is inside a dropdown by design). We will also set the [`columns`]({environment:angularApiUrl}/classes/igxcolumnhidingcomponent.html#columns) property of the component to the columns of our @@igComponent and include some custom styles to make our application look even better!

@@if (igxName === 'IgxGrid') {
```html
<!--columnHiding.component.html-->

<div class="columnHidingContainer">
    <igx-column-hiding #columnHidingUI [columns]="@@igObjectRef.columns">
    </igx-column-hiding>
</div>
<div class="gridContainer">
    <@@igSelector #@@igObjectRef [data]="data" [autoGenerate]="false" width="100%" height="500px" columnWidth="200px">
        ...
    </@@igSelector>
</div>
```
}
@@if (igxName === 'IgxTreeGrid') {
```html
<!--columnHiding.component.html-->

<div class="columnHidingContainer">
    <igx-column-hiding #columnHidingUI [columns]="@@igObjectRef.columns">
    </igx-column-hiding>
</div>
<div class="gridContainer">
    <@@igSelector #@@igObjectRef [data]="data" primaryKey="ID" foreignKey="ParentID" [autoGenerate]="false" width="100%" height="500px" columnWidth="200px">
        ...
    </@@igSelector>
</div>
```
}

@@if (igxName === 'IgxGrid' || igxName === 'IgxTreeGrid') {
```css
/* columnHiding.component.css */

.grid__wrapper {
    margin: 15px;
    display: flex;
    flex-direction: row;
}

.columnHidingContainer {
    min-width: 250px;
    height: 560px;
    display: flex;
    flex-direction: column;
    padding-left: 20px;
    padding-right: 20px;
    border: 1px gray;
    border-radius: 10px;
    box-shadow: 1px 1px 2px 2px rgba(50, 50, 50, 0.25);
    igx-column-hiding {
        height: 460px;
    }
}

.columnsOrderOptionsContainer {
    margin-top: 20px;
    margin-bottom: 20px;
}

.gridContainer {
    width: 100%;
    min-width: 200px;
    display: flex;
    flex-direction: column;
    margin-left: 30px;    
}
```
}

#### Add title and filter prompt

A couple more things we can do in order to enrich the user experience of our column hiding component is to set the [`title`]({environment:angularApiUrl}/classes/igxcolumnhidingcomponent.html#title) and the [`filterColumnsPrompt`]({environment:angularApiUrl}/classes/igxcolumnhidingcomponent.html#filtercolumnsprompt) properties! The [`title`]({environment:angularApiUrl}/classes/igxcolumnhidingcomponent.html#title) is displayed on the top and the [`filterColumnsPrompt`]({environment:angularApiUrl}/classes/igxcolumnhidingcomponent.html#filtercolumnsprompt) is the prompt text that is displayed in the filter input of our column hiding UI.

```html
<!--columnHiding.component.html-->

<div class="columnHidingContainer">
    <igx-column-hiding #columnHidingUI [columns]="@@igObjectRef.columns"
                       title="Column Hiding" filterColumnsPrompt="Type here to search">
    </igx-column-hiding>
</div>
```

#### Add column display order options

We can also allow the user to choose the display order of the columns in the column hiding UI. For this purpose we will use the [`columnDisplayOrder`]({environment:angularApiUrl}/classes/igxcolumnhidingcomponent.html#columndisplayorder) property, which is an enumeration type property and has the following options:

- **Alphabetical** (order the columns alphabetically)
- **DisplayOrder** (order the columns according to the way they are displayed in the @@igComponent)

Let's create a couple of nicely designed radio buttons for our options! We just have to go ahead and get the [**IgxRadio**](../radio_button.md) module.

```typescript
// app.module.ts

...
import {
    ...
    IgxRadioModule    
} from 'igniteui-angular';

@NgModule({
    ...
    imports: [..., IgxRadioModule],    
})
export class AppModule {}
```

Now all we have to do is bind the [`checked`]({environment:angularApiUrl}/classes/igxradiocomponent.html#checked) property of both radio buttons respectively with different conditions and handle their click events.

```html
<!--columnHiding.component.html-->

<div class="columnHidingContainer">
    ...
    <div class="columnsOrderOptionsContainer">
        <igx-radio [checked]="columnHidingUI.columnDisplayOrder === 'Alphabetical'"
                   (click)="columnHidingUI.columnDisplayOrder = 'Alphabetical'">
            Alphabetical order
        </igx-radio>
        <igx-radio [checked]="columnHidingUI.columnDisplayOrder === 'DisplayOrder'"
                   (click)="columnHidingUI.columnDisplayOrder = 'DisplayOrder'">
            Display order
        </igx-radio>
    </div>
</div>
```

#### Disable hiding of a column
We can easily prevent the user from being able to hide columns through the column hiding UI by simply setting their [`disableHiding`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#disablehiding) property to true.

@@if (igxName === 'IgxGrid') {
```html
<!--columnHiding.component.html-->

<div class="gridContainer">
    <igx-grid ... >
        ...
        <igx-column [field]="'ContactName'" dataType="string" [sortable]="true" [disableHiding]="true"></igx-column>
        <igx-column [field]="'ContactTitle'" dataType="string" [sortable]="true" [disableHiding]="true"></igx-column>
        ...
    </igx-grid>
</div>
```
}
@@if (igxName === 'IgxTreeGrid') {
```html
<!--columnHiding.component.html-->

<div class="gridContainer">
    <igx-tree-grid ... >
        ...
        <igx-column [field]="'Name'" dataType="string" [sortable]="true" [disableHiding]="true"></igx-column>
        <igx-column [field]="'Title'" dataType="string" [sortable]="true" [disableHiding]="true"></igx-column>
        ...
    </igx-tree-grid>
</div>
```
}

If all went well, this is how our column hiding UI component should look like:

@@if (igxName === 'IgxGrid') {
<div class="sample-container loading" style="height:600px">
    <iframe id="grid-column-hiding-sample-iframe" src='{environment:demosBaseUrl}/grid/grid-column-hiding-sample' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-column-hiding-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>
}
@@if (igxName === 'IgxTreeGrid') {
<div class="sample-container loading" style="height:600px">
    <iframe id="treegrid-column-hiding-sample-iframe" src='{environment:demosBaseUrl}/tree-grid/treegrid-column-hiding' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="treegrid-column-hiding-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>
}
}
### API References

@@if (igxName !== 'IgxHierarchicalGrid') {
In this article we learned how to use the built-in column hiding UI in the @@igComponent's toolbar and we defined it as a separate component as well. We introduced a UI that allows the user to choose between different column orders and we set our own custom title and filter prompt texts. We also used an additional Ignite UI for Angular component - the [**IgxRadio**](../radio_button.md) button.
}
@@if (igxName === 'IgxHierarchicalGrid') {
In this article we learned how to use the built-in column hiding UI in the @@igComponent's toolbar.
}

The column hiding UI has a few more APIs to explore, which are listed below.

* [`IgxColumnHidingComponent`]({environment:angularApiUrl}/classes/igxcolumnhidingcomponent.html)
* [`IgxColumnHidingComponent Styles`]({environment:sassApiUrl}/index.html#function-igx-column-hiding-theme)

Additional components and/or directives with relative APIs that were used:

[`@@igxNameComponent`]({environment:angularApiUrl}/classes/@@igTypeDoc.html) properties:
* [`columnHiding`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#columnhiding)
* [`columnHidingTitle`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#columnhidingtitle)
* [`hiddenColumnsCount`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#hiddencolumnscount)
* [`hiddenColumnsText`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#hiddencolumnstext)

[`IgxColumnComponent`]({environment:angularApiUrl}/classes/igxcolumncomponent.html) properties:
* [`disableHiding`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#disablehiding)

[`IgxGridToolbarComponent`]({environment:angularApiUrl}/classes/igxgridtoolbarcomponent.html) properties:
* [`columnHidingUI`]({environment:angularApiUrl}/classes/igxgridtoolbarcomponent.html#columnhidingui)
* [`columnHidingDropdown`]({environment:angularApiUrl}/classes/igxgridtoolbarcomponent.html#columnhidingdropdown)

[`IgxGridToolbarComponent`]({environment:angularApiUrl}/classes/igxgridtoolbarcomponent.html) methods:
* [`toggleColumnHidingUI`]({environment:angularApiUrl}/classes/igxgridtoolbarcomponent.html#togglecolumnhidingui)

[`@@igxNameComponent`]({environment:angularApiUrl}/classes/@@igTypeDoc.html) events:
* [`onColumnVisibilityChanged`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#oncolumnvisibilitychanged)

[`IgxRadioComponent`]({environment:angularApiUrl}/classes/igxradiocomponent.html)

Styles:

* [`@@igxNameComponent Styles`]({environment:sassApiUrl}/index.html#function-igx-grid-theme)
* [`IgxRadioComponent Styles`]({environment:sassApiUrl}/index.html#function-igx-radio-theme)

### Additional Resources
<div class="divider--half"></div>

* [@@igComponent overview](@@igMainTopic.md)
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