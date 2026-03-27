---
title: Conditional Cell Styling in Angular Data Grid - Ignite UI for Angular
_description: Let users identify different cells quickly. Define a variety of cell styles. Use the conditional cell styling in Angular Data grid to make cells stand out.
_keywords: conditional styling, ignite ui for angular, infragistics
_license: commercial
---





# Angular Grid Conditional Styling

If you need to provide any custom styling in the IgxGrid component, you can do it on either row or cell level.

## Grid Conditional Row Styling

The IgxGrid component in Ignite UI for Angular provides two ways to **conditional styling of rows** based on custom rules.



- By setting [`rowClasses`]({environment:angularApiUrl}/classes/igxgridcomponent.html#rowClasses) input on the IgxGrid component;
- By setting [`rowStyles`]({environment:angularApiUrl}/classes/igxgridcomponent.html#rowStyles) input on the IgxGrid component;




Further in this topic wi will cover both of them in more details.

### Using rowClasses


You can conditionally style the IgxGrid rows by setting the [`rowClasses`]({environment:angularApiUrl}/classes/igxgridcomponent.html#rowClasses) input and define custom rules.






```html
<!-- sample.component.html -->
<igx-grid #grid [data]="data" [height]="'600px'" [width]="'100%'" [rowClasses]="rowClasses">
    ...
</igx-grid>
```






The [`rowClasses`]({environment:angularApiUrl}/classes/igxgridcomponent.html#rowClasses) input accepts an object literal, containing key-value pairs, where the key is the name of the CSS class, while the value is either a callback function that returns a boolean, or boolean value.




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

> [!NOTE]
> Use **`::ng-deep`** or **`ViewEncapsulation.None`** to force the custom styles down through the current component and its children.

### Demo



<code-view style="height:620px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/grid/grid-rowClasses-sample/" >
</code-view>




<div class="divider--half"></div>


### Using rowStyles

Columns now expose the `rowStyles` property which allows conditional styling of the data rows. Similar to `rowClasses` it accepts an object literal where the keys are style properties and the values are expressions for evaluation. Also, you can apply regular styling (without any conditions).

> The callback signature for both `rowStyles` and `rowClasses` is:

```ts
(row: RowType) => boolean
```

Let's define our styles:



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








### Demo



<code-view style="height:530px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/grid/grid-rowStyles-sample/" >
</code-view>




<div class="divider--half"></div>


## Grid Conditional Cell Styling

## Overview

The IgxGrid component in Ignite UI for Angular provides two ways to **conditional styling of cells** based on custom rules.

- By setting the [`IgxColumnComponent`]({environment:angularApiUrl}/classes/igxcolumncomponent.html) input [`cellClasses`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#cellClasses) to an object literal containing key-value pairs. The key is the name of the CSS class, while the value is either a callback function that returns a boolean, or boolean value. The result is a convenient material styling of the cell.

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

```scss
// component.scss file
.upFont {
  color: red;
}

.downFont {
  color: green;
}
```

### Using cellClasses

You can conditionally style the IgxGrid cells by setting the [`IgxColumnComponent`]({environment:angularApiUrl}/classes/igxcolumncomponent.html) [`cellClasses`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#cellClasses) input and define custom rules.



```html
<!-- sample.component.html -->
<igx-column field="BeatsPerMinute" dataType="number" [cellClasses]="beatsPerMinuteClasses"></igx-column>
```





The [`cellClasses`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#cellClasses) input accepts an object literal, containing key-value pairs, where the key is the name of the CSS class, while the value is either a callback function that returns a boolean, or boolean value.



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





> [!NOTE]
> Use **`::ng-deep`** or **`ViewEncapsulation.None`** to force the custom styles down through the current component and its children.

### Demo



<code-view style="height:530px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/grid/grid-cell-styling/" >
</code-view>




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

On `ngOnInit` we will add the `cellStyles` configuration for each column of the predefined `columns` collection, which is used to create the IgxGrid columns dynamically.



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
```





```ts
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



<code-view style="height:530px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/grid/grid-cell-cellStyling/" >
</code-view>




<div class="divider--half"></div>

## Known issues and limitations

- If there are cells bind to the same condition (from different columns) and one cell is updated, the other cells won't be updated based on the new value, if the condition is met.
A pipe check should be performed in order to apply the changes to the rest of the cells. The example below shows how to do that with a `spread operator(...)` on [`onCellEdit`]({environment:angularApiUrl}/classes/igxgridcomponent.html#onCellEdit) event. This will copy the original object with a new instance, and lead pure pipe to be fired.

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

- [IgxColumnComponent]({environment:angularApiUrl}/classes/igxcolumncomponent.html)
- [IgxGridComponent]({environment:angularApiUrl}/classes/igxgridcomponent.html)
- [IgxGridComponent Styles]({environment:sassApiUrl}/themes#mixin-grid)

## Additional Resources

<div class="divider--half"></div>

- [Grid overview](grid.md)
- [Virtualization and Performance](virtualization.md)
- [Editing](editing.md)
- [Paging](paging.md)
- [Filtering](filtering.md)
- [Sorting](sorting.md)
- [Summaries](summaries.md)
- [Column Moving](column-moving.md)
- [Column Pinning](column-pinning.md)
- [Column Resizing](column-resizing.md)
- [Column Hiding](column-hiding.md)
- [Selection](selection.md)
- [Searching](search.md)
- [Toolbar](toolbar.md)
- [Multi-column Headers](multi-column-headers.md)
- [Size](display-density.md)

<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.

- [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
- [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
