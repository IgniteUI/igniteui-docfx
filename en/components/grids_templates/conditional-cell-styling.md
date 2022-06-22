@@if (igxName === 'IgxGrid') {
---
title: Conditional Cell Styling in Angular Data Grid - Ignite UI for Angular
_description: Let users identify different cells quickly. Define a variety of cell styles. Use the conditional cell styling in Angular Data grid to make cells stand out.
_keywords: conditional styling, ignite ui for angular, infragistics
---
}
@@if (igxName === 'IgxTreeGrid') {
---
title: Conditional Cell Styling in Angular Tree Grid - Ignite UI for Angular
_description: Let users identify different cells quickly. Define a variety of cell styles. Use the conditional cell styling in Angular Data grid to make cells stand out.
_keywords: conditional styling, ignite ui for angular, infragistics
_canonicalLink: grid/conditional-cell-styling
---
}
@@if (igxName === 'IgxHierarchicalGrid') {
---
title: Conditional Cell Styling in Angular Hierarchical Grid - Ignite UI for Angular 
_description: Let users identify different cells quickly. Define a variety of cell styles. Use the conditional cell styling in Angular Data grid to make cells stand out.
_keywords: conditional styling, ignite ui for angular, infragistics
_canonicalLink: grid/conditional-cell-styling
---
}

# Angular @@igComponent Conditional Styling
If you need to provide any custom styling in the @@igxName component, you can do it on either row or cell level.

## @@igComponent Conditional Row Styling

The @@igxName component in Ignite UI for Angular provides two ways to **conditional styling of rows** based on custom rules.

- By setting [`rowClasses`]({environment:angularApiUrl}/classes/IgxGridBaseDirective.html#rowClasses) input on the @@igxName component;
- By setting [`rowStyles`]({environment:angularApiUrl}/classes/IgxGridBaseDirective.html#rowStyles) input on the @@igxName component;

Further in this topic wi will cover both of them in more details.

### Using rowClasses
You can conditionally style the @@igxName rows by setting the [`rowClasses`]({environment:angularApiUrl}/classes/IgxGridBaseDirective.html#rowClasses) input and define custom rules.

@@if (igxName === 'IgxGrid') {
```html
<!-- sample.component.html -->
<igx-grid #grid [data]="data" [height]="'600px'" [width]="'100%'" [rowClasses]="rowClasses">
    ...
</igx-grid>
```
}
@@if (igxName === 'IgxTreeGrid'){
```html
<!-- sample.component.html -->
<igx-tree-grid #treeGrid [data]="data" [height]="'600px'" [width]="'100%'" [rowClasses]="rowClasses">
    ...
</igx-tree-grid>
```
}
@@if (igxName === 'IgxHierarchicalGrid') {
```html
<igx-hierarchical-grid  #hierarchicalGrid class="hgrid" [data]="localData" [height]="'580px'" [width]="'100%'" [rowStyles]="rowStyles">
    ...
</igx-hierarchical-grid>
```
}


The [`rowClasses`]({environment:angularApiUrl}/classes/IgxGridBaseDirective.html#rowClasses) input accepts an object literal, containing key-value pairs, where the key is the name of the CSS class, while the value is either a callback function that returns a boolean, or boolean value.

```typescript
// sample.component.ts

public rowClasses = {
    activeRow: this.activeRowCondition
};

public activeRowCondition = (row: RowType) => this.grid?.navigation.activeNode?.row === row.index;
```

```scss
// sample.component.scss

::ng-deep {
 .activeRow {
    border: 2px solid #fc81b8;
    border-left: 3px solid #e41c77;
 }
}
```

Use **::ng-deep** or **`ViewEncapsulation.None`** to force the custom styles down through the current component and its children.



### Demo

@@if (igxName === 'IgxGrid') {

<code-view style="height:530px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/grid/grid-rowClasses-sample" >
</code-view>

}
@@if (igxName === 'IgxTreeGrid') {

<code-view style="height:600px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/tree-grid/tree-grid-classes" >
</code-view>

}
@@if (igxName === 'IgxHierarchicalGrid') {
<code-view style="height:600px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/hierarchical-grid/hGrid-row-classes" >
</code-view>
}
<div class="divider--half"></div>


### Using rowStyles
Columns now expose the `rowStyles` property which allows conditional styling of the data rows. Similar to `rowClasses` it accepts an object literal where the keys are style properties and the values are expressions for evaluation. Also, you can apply regular styling (without any conditions).

> The callback signature for both `rowStyles` and `rowClasses` is:

```ts
(row: RowType) => boolean
```

Let's define our styles:

@@if (igxName === 'IgxGrid') {
```typescript
// component.ts
public rowStyles = {
    background: (row: RowType) => (+row.data['Change'] < 0  && +row.data['Change On Year(%)'] < 0) ? '#FF000088' : '#00000000',
    border: (row: RowType) => (+row.data['Change'] < 0  && +row.data['Change On Year(%)'] < 0) ? '2px solid' : '1px solid',
    'border-color': (row: RowType) => (+row.data['Change'] < 0  && +row.data['Change On Year(%)'] < 0) ? '#FF000099' : '#E9E9E9'
};
```

```html
<!-- sample.component.html -->
<igx-grid #grid1 [data]="data | async" [height]="'500px'" width="100%"
        [autoGenerate]="false" [allowFiltering]="true" [rowStyles]="rowStyles">
    ...
</igx-grid>
```
}

@@if (igxName === 'IgxTreeGrid'){

```typescript
// component.ts
public background = (row: RowType) => row.data.data['Title'] === 'CEO' ? '#6c757d' :
    row.data.data['Title'].includes('President') ? '#adb5bd' : row.data.data['Title'].includes('Director') ?  '#ced4da' :
    row.data.data['Title'].includes('Manager') ? '#dee2e6' :
    row.data.data['Title'].includes('Lead') ? '#e9ecef' :
    row.data.data['Title'].includes('Senior') ? '#f8f9fa' : null;

public rowStyles = {
    background: this.background,
    'border-left': (row: RowType) => row.data.data['Title'] === 'CEO' || row.data.data['Title'].includes('President') ?
        '2px solid' : null,
    'border-color': (row: RowType) => row.data.data['Title'] === 'CEO' ? '#495057' : null,
    color: (row: RowType) => row.data.data['Title'] === 'CEO' ? '#fff' : null
};
```

```html
<!-- sample.component.html -->
<igx-tree-grid #treeGrid [data]="data" [moving]="true" primaryKey="ID" foreignKey="ParentID"
        width="100%" height="550px" [rowStyles]="rowStyles">
    ...
</igx-tree-grid>
```
}

@@if (igxName === 'IgxHierarchicalGrid') {

```typescript
// component.ts
public rowStyles = {
    background:(row: RowType) => row.data['HasGrammyAward'] ? '#eeddd3' : '#f0efeb',
    'border-left': (row: RowType) => row.data['HasGrammyAward'] ? '2px solid #dda15e' : null
};

public childRowStyles = {
    'border-left': (row: RowType) => row.data['BillboardReview'] > 70 ? '3.5px solid #dda15e' : null
};
```

```html
<igx-hierarchical-grid  #hierarchicalGrid [data]="localdata" [autoGenerate]="false"
        [height]="'580px'" [width]="'100%'" [rowStyles]="rowStyles">
        <igx-row-island [key]="'Albums'" [autoGenerate]="false" [rowStyles]="childRowStyles">
             ...
        </igx-row-island>  
    ...
</igx-hierarchical-grid>
```
}


### Demo

@@if (igxName === 'IgxGrid') {

<code-view style="height:530px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/grid/grid-rowStyles-sample" >
</code-view>

}
@@if (igxName === 'IgxTreeGrid') {

<code-view style="height:600px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/tree-grid/tree-grid-styles-sample" >
</code-view>

}
@@if (igxName === 'IgxHierarchicalGrid') {
<code-view style="height:600px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/hierarchical-grid/hGrid-row-styles" >
</code-view>
}
<div class="divider--half"></div>


## @@igComponent Conditional Cell Styling
## Overview
The @@igxName component in Ignite UI for Angular provides two ways to **conditional styling of cells** based on custom rules.

- By setting the [`IgxColumnComponent`]({environment:angularApiUrl}/classes/igxcolumncomponent.html) input [`cellClasses`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#cellclasses) to an object literal containing key-value pairs. The key is the name of the CSS class, while the value is either a callback function that returns a boolean, or boolean value. The result is a convenient material styling of the cell.

```ts
// component.ts file
public beatsPerMinuteClasses = {
    downFont: this.downFontCondition,
    upFont: this.upFontCondition
};
...

private downFontCondition = (rowData: any, columnKey: any): boolean => {
    return rowData[columnKey] <= 95;
}
```

```css
// component.scss file
.upFont {
    color: red;
}

.downFont {
    color: green;
}
```


### Using cellClasses
You can conditionally style the @@igxName cells by setting the [`IgxColumnComponent`]({environment:angularApiUrl}/classes/igxcolumncomponent.html) [`cellClasses`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#cellclasses) input and define custom rules.

@@if (igxName === 'IgxGrid') {
```html
<!-- sample.component.html -->
<igx-column field="BeatsPerMinute" dataType="number" [cellClasses]="beatsPerMinuteClasses"></igx-column>
```
}
@@if (igxName === 'IgxTreeGrid'){
```html
<!-- sample.component.html -->
<igx-column field="UnitPrice" header="Unit Price" [dataType]="'number'" [cellClasses] = "priceClasses">
    <ng-template igxCell let-cell="cell" let-val>
        <span *ngIf="cell.row.data.UnitPrice == 0">-</span>
        <span *ngIf="cell.row.data.UnitPrice != 0">${{val}}</span>
    </ng-template>
</igx-column>
```
}
@@if (igxName === 'IgxHierarchicalGrid') {
<!-- TODO -->
}

The [`cellClasses`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#cellclasses) input accepts an object literal, containing key-value pairs, where the key is the name of the CSS class, while the value is either a callback function that returns a boolean, or boolean value.

@@if (igxName === 'IgxGrid') {
```typescript
// sample.component.ts

private upFontCondition = (rowData: any, columnKey: any): boolean => {
    return rowData[columnKey] > 95;
}

private downFontCondition = (rowData: any, columnKey: any): boolean => {
    return rowData[columnKey] <= 95;
}

public beatsPerMinuteClasses = {
    downFont: this.downFontCondition,
    upFont: this.upFontCondition
};
```

```scss
// sample.component.scss

::ng-deep {
    .upFont {
        color: green;
    }

    .downFont {
        color: red;
    }
}
```
}
@@if (igxName === 'IgxTreeGrid'){
```typescript
// sample.component.ts

private upPriceCondition = (rowData: any, columnKey: any): boolean => {
    return rowData[columnKey] > 25;
}

private downPriceCondition = (rowData: any, columnKey: any): boolean => {
    return rowData[columnKey] <= 25;
}

public priceClasses = {
    downPrice: this.downPriceCondition,
    upPrice: this.upPriceCondition
};
```

```scss
// sample.component.scss

::ng-deep {
    .upPrice {
        color: red;
    }

    .downPrice {
        color: green;
    }
}
```
}
@@if (igxName === 'IgxHierarchicalGrid') {
<!-- TODO -->
}

Use **::ng-deep** or **`ViewEncapsulation.None`** to force the custom styles down through the current component and its children.

### Demo

@@if (igxName === 'IgxGrid') {

<code-view style="height:530px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/grid/grid-cell-styling" >
</code-view>

}
@@if (igxName === 'IgxTreeGrid') {

<code-view style="height:600px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/tree-grid/treegrid-conditional-cell-style" >
</code-view>

}
@@if (igxName === 'IgxHierarchicalGrid') {
<!-- TODO -->
}
<div class="divider--half"></div>

- By using the [`IgxColumnComponent`]({environment:angularApiUrl}/classes/igxcolumncomponent.html) input [`cellStyles`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#cellStyles) which accepts an object literal where the keys are style properties and the values are expressions for evaluation.

```ts
public styles = {
    'background': 'linear-gradient(180deg, #dd4c4c 0%, firebrick 100%)',
    'text-shadow': '1px 1px 2px rgba(25,25,25,.25)',
    'animation': '0.25s ease-in-out forwards alternate popin'
};
```

> The callback signature for both `cellStyles` and `cellClasses` is now changed to:

```ts
(rowData: any, columnKey: string, cellValue: any, rowIndex: number) => boolean
```

### Using cellStyles
Columns now expose the `cellStyles` property which allows conditional styling of the column cells. Similar to `cellClasses` it accepts an object literal where the keys are style properties and the values are expressions for evaluation. Also, you can apply regular styling with ease (without any conditions).

In the [sample above](#demo) we've created:
- Two different styles that will be applied based on the column index.
- You will also change the `text color` based on even/odd rows.

> The callback signature for both `cellStyles` is:

```ts
(rowData: any, columnKey: string, cellValue: any, rowIndex: number) => boolean
```

Let's define our styles:

```typescript
// component.ts
public oddColStyles = {
    background: 'linear-gradient(to right, #b993d6, #8ca6db)',
    color: (rowData, coljey, cellValue, rowIndex) => rowIndex % 2 === 0 ? 'white' : 'gray',
    animation: '0.75s popin'
};

public evenColStyles = {
    background: 'linear-gradient(to right, #8ca6db, #b993d6)',
    color: (rowData, coljey, cellValue, rowIndex) => rowIndex % 2 === 0 ? 'gray' : 'white',
    animation: '0.75s popin'
};
```

On `ngOnInit` we will add the `cellStyles` configuration for each column of the predefined `columns` collection, which is used to create the @@igxName columns dynamically.

```ts
// component.ts
public ngOnInit() {
    this.data = athletesData;
    this.columns = [
        { field: 'Id' },
        { field: 'Position' },
        { field: 'Name' },
        { field: 'AthleteNumber' },
        { field: 'CountryName' }
    ];

    this.applyCSS();
}

public applyCSS() {
    this.columns.forEach((column, index) => {
        column.cellStyles = (index % 2 === 0 ? this.evenColStyles : this.oddColStyles);
    });
}

public updateCSS(css: string) {
    this.oddColStyles = {...this.oddColStyles, ...JSON.parse(css)};
    this.evenColStyles = {...this.evenColStyles, ...JSON.parse(css)};
    this.applyCSS();
}
```

```html
// component.html
<igx-grid
    #grid1 [data]="data"
    primaryKey="ID"
    width="80%"
    height="300px">
    <igx-column *ngFor="let c of columns"
        [field]="c.field"
        [header]="c.field"
        [cellStyles]="c.cellStyles">
    </igx-column>
</igx-grid>
```

Define a `popin` animation

```scss
// component.scss
@keyframes popin {
    0% {
        opacity: 0.1;
        transform: scale(.75, .75);
        filter: blur(3px) invert(1);
    }

    50% {
        opacity: .5;
        filter: blur(1px);
    }

    100% {
        transform: scale(1, 1);
        opacity: 1;
        filter: none;
    }
}
```

### Demo

@@if (igxName === 'IgxGrid') {

<code-view style="height:530px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/grid/grid-cell-cellStyling" >
</code-view>

}
@@if (igxName === 'IgxTreeGrid') {

<code-view style="height:600px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/tree-grid/tree-grid-cell-cellStyling" >
</code-view>

}
@@if (igxName === 'IgxHierarchicalGrid') {
<!-- TODO -->
}
<div class="divider--half"></div>

## Known issues and limitations

- If there are cells bind to the same condition (from different columns) and one cell is updated, the other cells won't be updated based on the new value, if the condition is met.
A pipe check should be performed in order to apply the changes to the rest of the cells. The example below shows how to do that with a `spread operator` ... on [`onCellEdit`]({environment:angularApiUrl}/classes/igxgridcomponent.html#oncelledit) event. This will copy the original object with a new instance, and lead pure pipe to be fired.

```ts
public backgroundClasses = {
    myBackground: (rowData: any, columnKey: string) => {
        return rowData.Col2 < 10;
    }
};
...

editDone(evt) {
    this.backgroundClasses = {...this.backgroundClasses};
}

```

```html
<igx-grid #grid1 [data]="data" height="500px" width="100%" (onCellEdit)="editDone($event)">
  <igx-column field="Col1" dataType="number" [cellClasses]="backgroundClasses"></igx-column>
  <igx-column field="Col2" dataType="number" [editable]="true" [cellClasses]="backgroundClasses"></igx-column>
  <igx-column field="Col3" header="Col3" dataType="string" [cellClasses]="backgroundClasses"></igx-column>
</igx-grid>
```

## API References
<div class="divider--half"></div>

* [IgxColumnComponent]({environment:angularApiUrl}/classes/igxcolumncomponent.html)
* [@@igxNameComponent]({environment:angularApiUrl}/classes/@@igTypeDoc.html)
* [@@igxNameComponent Styles]({environment:sassApiUrl}/index.html#mixin-igx-grid)

## Additional Resources
<div class="divider--half"></div>

* [@@igComponent overview](@@igMainTopic.md)
* [Virtualization and Performance](virtualization.md)
* [Editing](editing.md)
* [Paging](paging.md)
* [Filtering](filtering.md)
* [Sorting](sorting.md)
* [Summaries](summaries.md)
* [Column Moving](column-moving.md)
* [Column Pinning](column-pinning.md)
* [Column Resizing](column-resizing.md)
* [Column Hiding](column-hiding.md)
* [Selection](selection.md)
* [Searching](search.md)
* [Toolbar](toolbar.md)
* [Multi-column Headers](multi-column-headers.md)
* [Display Density](display-density.md)

<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
