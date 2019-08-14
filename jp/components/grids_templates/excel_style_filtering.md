---
title: Angular Grid Excel スタイル フィルタリング | Ignite UI for Angular の | infragistics
_description: Angular Material テーブルでデータ フィルターのように Excel を設定する方法を学びます。グリッド Excel フィルタリングがより使いやすくなりました。
_keywords: Excel ライクなフィルター, igniteui for angular, infragistics
_language: ja
---

### @@igComponent Excel スタイル フィルタリング

グリッド Excel フィルタリングは、@@igComponent などの Angular Material テーブルに対して Excel のようなフィルタリング UI を提供します。

#### デモ

@@if (igxName === 'IgxGrid') {
<div class="sample-container loading" style="height:950px">
    <iframe id="grid-sample-1-iframe" src='{environment:demosBaseUrl}/grid/grid-excel-style-filtering-sample-1' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-sample-1-iframe" data-demos-base-url="{environment:demosBaseUrl}">stackblitz で表示</button>
</div>
}
@@if (igxName === 'IgxTreeGrid') {
<div class="sample-container loading" style="height:950px">
    <iframe id="tree-grid-sample-1-iframe" src='{environment:demosBaseUrl}/tree-grid/treegrid-excel-style-filtering-sample-1' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="tree-grid-sample-1-iframe" data-demos-base-url="{environment:demosBaseUrl}">stackblitz で表示</button>
</div>
}
@@if (igxName === 'IgxHierarchicalGrid') {
<div class="sample-container loading" style="height:950px">
    <iframe id="hierarchical-grid-sample-1-iframe" src='{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-excel-style-filtering-sample-1' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="hierarchical-grid-sample-1-iframe" data-demos-base-url="{environment:demosBaseUrl}">stackblitz で表示</button>
</div>
}

<div class="divider--half"></div>

###使用方法

Excel スタイル フィルタリングをオンにするには、2 つの入力を設定します。  [`allowFiltering`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#allowfiltering) を `true` に設定し、[`filterMode`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#filtermode) を  `excelStyleFilter` に設定してください。

@@if (igxName === 'IgxGrid') {
```html
<igx-grid [data]="data" [autoGenerate]="true" [allowFiltering]="true" [filterMode]="'excelStyleFilter'">
</igx-grid>
```
}
@@if (igxName === 'IgxTreeGrid') {
```html
<igx-tree-grid [data]="data" [autoGenerate]="true" [allowFiltering]="true" [filterMode]="'excelStyleFilter'">
</igx-tree-grid>
```
}
@@if (igxName === 'IgxHierarchicalGrid') {
```html
<igx-hierarchical-grid [data]="data" [autoGenerate]="true" [allowFiltering]="true" [filterMode]="'excelStyleFilter'">
</igx-hierarchical-grid>
```
}

###インタラクション

特定の列のフィルター メニューを開くには、ヘッダーのフィルター アイコンをクリックします。列でフィルタリング機能と並べ替え、ピン固定、移動、非表示が設定された場合、オンになっている機能のボタンが表示されます。

フィルターが適用されていない場合、リストのすべての項目が選択されます￥。リストの上の入力からフィルターされます。データのフィルターは、リストで項目を選択/非選択して [Apply] ボタンをクリックします。リスト項目に適用したフィルタリングは、`equals` オペレーターでフィルター式を作成します。各式間のロジック オペレーターは [`OR`]({environment:angularApiUrl}/enums/filteringlogic.html#or) です。フィルターをクリアしたい場合、Select All をチェックして [Apply] ボタンを押します。 

異なる式でフィルターを適用する場合、**Text フィルター** をクリックし、特定の列で使用できるフィルター演算子のサブメニューを開きます。いずれかを選択してカスタム フィルター ダイアログを開き、フィルターとロジック演算子を使用して式を追加できます。[clear] ボタンでフィルターをクリアできます。


<div class="divider--half"></div>

###メニュー機能の構成

並べ替え、移動、ピン固定、非表示の機能をフィルター メニューから削除できます。制御のための入力は、[`sortable`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#sortable), [`movable`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#movable), [`disablePinning`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#disablepinning), [`disableHiding`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#disablehiding) があります。

@@if (igxName === 'IgxGrid') {
```html
<igx-grid #grid1 [data]="data" [autoGenerate]="false" height="650px" width="100%" [allowFiltering]="true" [filterMode]="'excelStyleFilter'">
    <igx-column field="ProductName" header="Product Name" [sortable]="true" [movable]="true" [dataType]="'string'">
    </igx-column>
    <igx-column field="QuantityPerUnit" header="Quantity Per Unit" [sortable]="false" [disablePinning]="true" [disableHiding]="true" [movable]="false" [dataType]="'string'">
    </igx-column>
    <igx-column field="UnitPrice" header="Unit Price" [disablePinning]="true" [disableHiding]="true" [sortable]="true" [movable]="true" [dataType]="'number'">
    </igx-column>
    <igx-column field="OrderDate" header="Order Date" [sortable]="false" [movable]="false" [dataType]="'date'" [formatter]="formatDate">
    </igx-column>
    <igx-column field="Discontinued" header="Discontinued" [sortable]="true" [movable]="true" [dataType]="'boolean'">
    </igx-column>
</igx-grid>
```

<div class="divider--half"></div>

以下のサンプルの Product Name’ と 'Discontinued’ 列で 4 つすべての機能が有効です。 'Quantity Per Unit’で 4 機能すべてが無効、’Unit Price’ で並べ替えと移動のみ有効、'Order Date’ でピン固定と非表示のみ有効です。  
}
@@if (igxName === 'IgxTreeGrid') {
```html
<igx-tree-grid #treegrid1 [data]="data" [autoGenerate]="false" height="480px" width="100%" [allowFiltering]="true" 
    primaryKey="ID" foreignKey="ParentID" filterMode="excelStyleFilter">
    <igx-column field="ID" header="Product ID" [dataType]="'string'">
    </igx-column>
    <igx-column field="Name" header="Product Name" [sortable]="true" [movable]="true" [dataType]="'string'">
    </igx-column>
    <igx-column field="UnitPrice" header="Unit Price" [dataType]="'number'" [sortable]="false" [disablePinning]="true" [disableHiding]="true" [movable]="false">
        <ng-template igxCell let-cell="cell" let-val>
            <span *ngIf="cell.row.rowData.UnitPrice == 0">-</span>
            <span *ngIf="cell.row.rowData.UnitPrice != 0">${{val}}</span>
        </ng-template>
    </igx-column>
    <igx-column field="AddedDate" header="Added Date" [dataType]="'date'" [formatter]="formatDate" [sortable]="false" [movable]="false">
    </igx-column>
    <igx-column field="Discontinued" header="Discontinued" [dataType]="'boolean'" [sortable]="true" [movable]="true">
        <ng-template igxCell let-cell="cell" let-val>
            <span *ngIf="cell.row.rowData.UnitPrice == 0">-</span>
            <img *ngIf="cell.row.rowData.UnitPrice != 0 && val" src="assets/images/grid/active.png" title="Continued" alt="Continued" />
            <img *ngIf="cell.row.rowData.UnitPrice != 0 && !val" src="assets/images/grid/expired.png" title="Discontinued" alt="Discontinued" />
        </ng-template>
    </igx-column>
</igx-tree-grid>
```

<div class="divider--half"></div>

以下のサンプル 'Product Name’ と 'Discontinued’ の列には 4 つの機能すべてが有効です。 'Unit Price’ で 4 機能すべてが無効で、'Added Date’ はピン固定と非表示のみ有効です。
}
@@if (igxName === 'IgxHierarchicalGrid') {
```html
<igx-hierarchical-grid class="hgrid" [data]="localdata" [autoGenerate]="false" [allowFiltering]='true' filterMode="excelStyleFilter"
    [height]="'650px'" [width]="'100%'" [rowHeight]="'65px'" #hierarchicalGrid>
    <igx-column field="Artist" [filterable]='true' [sortable]="true" [movable]="true"></igx-column>
    <igx-column field="Photo" [filterable]='false'>
        <ng-template igxCell let-cell="cell">
            <div class="cell__inner_2">
                <img [src]="cell.value" class="photo" />
            </div>
        </ng-template>
    </igx-column>
    <igx-column field="Debut" [filterable]='true' [disablePinning]="true" [disableHiding]="true"></igx-column>
    <igx-column field="Grammy Nominations" [filterable]='true' [dataType]="'number'" [sortable]="false" [movable]="false"></igx-column>
    <igx-column field="Grammy Awards" [filterable]='true' [dataType]="'number'"></igx-column>

    <igx-row-island [key]="'Albums'" [autoGenerate]="false" [allowFiltering]='true' filterMode="excelStyleFilter">
        <igx-column field="Album" [filterable]='true'></igx-column>
        <igx-column field="Launch Date" [filterable]='true' [dataType]="'date'"></igx-column>
        <igx-column field="Billboard Review" [filterable]='true' [dataType]="'number'"></igx-column>
        <igx-column field="US Billboard 200" [filterable]='true' [dataType]="'number'"></igx-column>
    <igx-row-island [key]="'Songs'" [autoGenerate]="false" >
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

<div class="divider--half"></div>

以下のサンプルは、'Artist’ 列で 4 つの機能が有効、'Debut' で 4 つの機能が無効、'Grammy Nominations’ でピン固定と非表示のみ有効です。
}

<div class="divider--half"></div>

@@if (igxName === 'IgxGrid') {
<div class="sample-container loading" style="height:900px">
    <iframe id="grid-sample-2-iframe" data-src='{environment:demosBaseUrl}/grid/grid-excel-style-filtering-sample-2' width="100%" height="100%" seamless frameborder="0" class="lazyload"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-sample-2-iframe" data-demos-base-url="{environment:demosBaseUrl}">stackblitz で表示</button>
</div>
}
@@if (igxName === 'IgxTreeGrid') {
<div class="sample-container loading" style="height:900px">
    <iframe id="tree-grid-sample-2-iframe" data-src='{environment:demosBaseUrl}/tree-grid/treegrid-excel-style-filtering-sample-2' width="100%" height="100%" seamless frameborder="0" class="lazyload"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="tree-grid-sample-2-iframe" data-demos-base-url="{environment:demosBaseUrl}">stackblitz で表示</button>
</div>
}
@@if (igxName === 'IgxHierarchicalGrid') {
<div class="sample-container loading" style="height:900px">
    <iframe id="hierarchical-grid-sample-2-iframe" data-src='{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-excel-style-filtering-sample-2' width="100%" height="100%" seamless frameborder="0" class="lazyload"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="hierarchical-grid-sample-2-iframe" data-demos-base-url="{environment:demosBaseUrl}">stackblitz で表示</button>
</div>
}

<div class="divider--half"></div>

列の並べ替え、移動、固定、および非表示の機能を維持しながら、エクセル スタイルのフィルター メニューから項目を削除する場合は、操作ごとにグリッドにテンプレートを追加できます。

@@if (igxName === 'IgxGrid') {
```html
<igx-grid #grid1 [data]="data" [autoGenerate]="false" height="650px" width="100%" [allowFiltering]="true" [filterMode]="'excelStyleFilter'">
    <ng-template igxExcelStyleSortingTemplate>Sorting Template</ng-template>
    <ng-template igxExcelStyleHidingTemplate>Hiding Template</ng-template>
    <ng-template igxExcelStyleMovingTemplate>Moving Template</ng-template>
    <ng-template igxExcelStylePinningTemplate>Pinning Template</ng-template>
    <igx-column field="ProductName" header="Product Name" [sortable]="true" [movable]="true" [dataType]="'string'">
    </igx-column>
    <igx-column field="QuantityPerUnit" header="Quantity Per Unit" [sortable]="false" [disablePinning]="true" [disableHiding]="true" [movable]="false" [dataType]="'string'">
    </igx-column>
    <igx-column field="UnitPrice" header="Unit Price" [disablePinning]="true" [disableHiding]="true" [sortable]="true" [movable]="true" [dataType]="'number'">
    </igx-column>
    <igx-column field="OrderDate" header="Order Date" [sortable]="false" [movable]="false" [dataType]="'date'" [formatter]="formatDate">
    </igx-column>
    <igx-column field="Discontinued" header="Discontinued" [sortable]="true" [movable]="true" [dataType]="'boolean'">
    </igx-column>
</igx-grid>
```

}
@@if (igxName === 'IgxTreeGrid') {
```html
<igx-tree-grid #treegrid1 [data]="data" [autoGenerate]="false" height="480px" width="100%" [allowFiltering]="true" 
    primaryKey="ID" foreignKey="ParentID" filterMode="excelStyleFilter">
    <ng-template igxExcelStyleSortingTemplate>Sorting Template</ng-template>
    <ng-template igxExcelStyleHidingTemplate>Hiding Template</ng-template>
    <ng-template igxExcelStyleMovingTemplate>Moving Template</ng-template>
    <ng-template igxExcelStylePinningTemplate>Pinning Template</ng-template>
    <igx-column field="ID" header="Product ID" [dataType]="'string'">
    </igx-column>
    <igx-column field="Name" header="Product Name" [sortable]="true" [movable]="true" [dataType]="'string'">
    </igx-column>
    <igx-column field="UnitPrice" header="Unit Price" [dataType]="'number'" [sortable]="false" [disablePinning]="true" [disableHiding]="true" [movable]="false">
        <ng-template igxCell let-cell="cell" let-val>
            <span *ngIf="cell.row.rowData.UnitPrice == 0">-</span>
            <span *ngIf="cell.row.rowData.UnitPrice != 0">${{val}}</span>
        </ng-template>
    </igx-column>
    <igx-column field="AddedDate" header="Added Date" [dataType]="'date'" [formatter]="formatDate" [sortable]="false" [movable]="false">
    </igx-column>
    <igx-column field="Discontinued" header="Discontinued" [dataType]="'boolean'" [sortable]="true" [movable]="true">
        <ng-template igxCell let-cell="cell" let-val>
            <span *ngIf="cell.row.rowData.UnitPrice == 0">-</span>
            <img *ngIf="cell.row.rowData.UnitPrice != 0 && val" src="assets/images/grid/active.png" title="Continued" alt="Continued" />
            <img *ngIf="cell.row.rowData.UnitPrice != 0 && !val" src="assets/images/grid/expired.png" title="Discontinued" alt="Discontinued" />
        </ng-template>
    </igx-column>
</igx-tree-grid>
```

}
@@if (igxName === 'IgxHierarchicalGrid') {
```html
<igx-hierarchical-grid class="hgrid" [data]="localdata" [autoGenerate]="false" [allowFiltering]='true' filterMode="excelStyleFilter"
    [height]="'650px'" [width]="'100%'" [rowHeight]="'65px'" #hierarchicalGrid>
    <ng-template igxExcelStyleSortingTemplate>Sorting Template</ng-template>
    <ng-template igxExcelStyleHidingTemplate>Hiding Template</ng-template>
    <ng-template igxExcelStyleMovingTemplate>Moving Template</ng-template>
    <ng-template igxExcelStylePinningTemplate>Pinning Template</ng-template>
    <igx-column field="Artist" [filterable]='true' [sortable]="true" [movable]="true"></igx-column>
    <igx-column field="Photo" [filterable]='false'>
        <ng-template igxCell let-cell="cell">
            <div class="cell__inner_2">
                <img [src]="cell.value" class="photo" />
            </div>
        </ng-template>
    </igx-column>
    <igx-column field="Debut" [filterable]='true' [disablePinning]="true" [disableHiding]="true"></igx-column>
    <igx-column field="Grammy Nominations" [filterable]='true' [dataType]="'number'" [sortable]="false" [movable]="false"></igx-column>
    <igx-column field="Grammy Awards" [filterable]='true' [dataType]="'number'"></igx-column>

    <igx-row-island [key]="'Albums'" [autoGenerate]="false" [allowFiltering]='true' filterMode="excelStyleFilter">
        <ng-template igxExcelStyleSortingTemplate>Sorting Template</ng-template>
        <ng-template igxExcelStyleHidingTemplate>Hiding Template</ng-template>
        <ng-template igxExcelStyleMovingTemplate>Moving Template</ng-template>
        <ng-template igxExcelStylePinningTemplate>Pinning Template</ng-template>
        <igx-column field="Album" [filterable]='true'></igx-column>
        <igx-column field="Launch Date" [filterable]='true' [dataType]="'date'"></igx-column>
        <igx-column field="Billboard Review" [filterable]='true' [dataType]="'number'"></igx-column>
        <igx-column field="US Billboard 200" [filterable]='true' [dataType]="'number'"></igx-column>
    <igx-row-island [key]="'Songs'" [autoGenerate]="false" >
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

<div class="divider--half"></div>

@@if (igxName === 'IgxGrid') {
<div class="sample-container loading" style="height:900px">
    <iframe id="grid-sample-3-iframe" data-src='{environment:demosBaseUrl}/grid/grid-excel-style-filtering-sample-3' width="100%" height="100%" seamless frameBorder="0" class="lazyload"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-sample-3-iframe" data-demos-base-url="{environment:demosBaseUrl}">stackblitz で表示</button>
</div>
}
@@if (igxName === 'IgxTreeGrid') {
<div class="sample-container loading" style="height:900px">
    <iframe id="tree-grid-sample-3-iframe" data-src='{environment:demosBaseUrl}/tree-grid/treegrid-excel-style-filtering-sample-3' width="100%" height="100%" seamless frameBorder="0" class="lazyload"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="tree-grid-sample-3-iframe" data-demos-base-url="{environment:demosBaseUrl}">stackblitz で表示</button>
</div>
}
@@if (igxName === 'IgxHierarchicalGrid') {
<div class="sample-container loading" style="height:900px">
    <iframe id="hierarchical-grid-sample-3-iframe" data-src='{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-excel-style-filtering-sample-3' width="100%" height="100%" seamless frameBorder="0" class="lazyload"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="hierarchical-grid-sample-3-iframe" data-demos-base-url="{environment:demosBaseUrl}">stackblitz で表示</button>
</div>
}

<div class="divider--half"></div>

### Unique Column Values Strategy

The list items inside the Excel Style Filtering dialog represent the unique values for the respective column. The @@igComponent generates these values based on its data source by default. In order to provide these unique values manually and load them on demand, we can take advantage of the @@igComponent's [`uniqueColumnValuesStrategy`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#uniquecolumnvaluesstrategy) input. This input is actually a method that provides three arguments:
- **column**  - The respective column instance.
- **filteringExpressionsTree** - The filtering expressions tree, which is reduced based on the respective column.
- **done** - Callback that should be called with the newly generated column values when they are retrieved from the server.

The developer can manually generate the necessary unique column values based on the information, that is provided by the **column** and the **filteringExpressionsTree** arguments and then invoke the **done** callback.

> [!NOTE]
> When the [`uniqueColumnValuesStrategy`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#uniquecolumnvaluesstrategy) input is provided, the default unique values generating process in the excel style filtering will not be used.

@@if (igxName === 'IgxGrid') {
```html
<igx-grid #grid1 [data]="data" [filterMode]="'excelStyleFilter'" [uniqueColumnValuesStrategy]="columnValuesStrategy">
    ...
</igx-grid>
```

```typescript
public columnValuesStrategy = (column: IgxColumnComponent,
                               columnExprTree: IFilteringExpressionsTree,
                               done: (uniqueValues: any[]) => void) => {
    // Get specific column data.
    this.remoteValuesService.getColumnData(column, columnExprTree, uniqueValues => done(uniqueValues));
}
```

<div class="sample-container loading" style="height:800px">
    <iframe id="grid-esf-loadOnDemand-iframe" data-src='{environment:demosBaseUrl}/grid/grid-excel-style-filtering-load-on-demand' width="100%" height="100%" seamless frameborder="0" class="lazyload"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-esf-loadOnDemand-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
}
@@if (igxName === 'IgxTreeGrid') {
```html
<igx-tree-grid #treeGrid [data]="data" [filterMode]="'excelStyleFilter'" [uniqueColumnValuesStrategy]="columnValuesStrategy">
    ...
</igx-tree-grid>
```

```typescript
public columnValuesStrategy = (column: IgxColumnComponent,
                               columnExprTree: IFilteringExpressionsTree,
                               done: (uniqueValues: any[]) => void) => {
    // Get specific column data.
    this.remoteValuesService.getColumnData(column, columnExprTree, uniqueValues => done(uniqueValues));
}
```

<div class="sample-container loading" style="height:800px">
    <iframe id="tree-grid-esf-loadOnDemand-iframe" data-src='{environment:demosBaseUrl}/tree-grid/treegrid-excel-style-filtering-load-on-demand' width="100%" height="100%" seamless frameborder="0" class="lazyload"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="tree-grid-esf-loadOnDemand-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
}
@@if (igxName === 'IgxHierarchicalGrid') {
```html
<igx-hierarchical-grid #hierarchicalGrid [primaryKey]="'Artist'" [data]="data" [filterMode]="'excelStyleFilter'"
                       [uniqueColumnValuesStrategy]="singersColumnValuesStrategy">
    ...
    <igx-row-island [primaryKey]="'Album'" [allowFiltering]="true" [filterMode]="'excelStyleFilter'"
                    [uniqueColumnValuesStrategy]="albumsColumnValuesStrategy">
        ...
    </igx-row-island>
</igx-hierarchical-grid>
```

```typescript
public singersColumnValuesStrategy = (column: IgxColumnComponent,
                                      columnExprTree: IFilteringExpressionsTree,
                                      done: (uniqueValues: any[]) => void) => {
// Get specific column data for the singers.
this.remoteValuesService.getColumnData(
    null, "Singers", column, columnExprTree, uniqueValues => done(uniqueValues));
}

public albumsColumnValuesStrategy = (column: IgxColumnComponent,
                                     columnExprTree: IFilteringExpressionsTree,
                                     done: (uniqueValues: any[]) => void) => {
// Get specific column data for the albums of a specific singer.
const parentRowId = (column.grid as any).foreignKey;
this.remoteValuesService.getColumnData(
    parentRowId, "Albums", column, columnExprTree, uniqueValues => done(uniqueValues));
}
```

<div class="sample-container loading" style="height:800px">
    <iframe id="hierarchical-grid-esf-load-on-demand-iframe" data-src='{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-excel-style-filtering-load-on-demand' width="100%" height="100%" seamless frameborder="0" class="lazyload"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="hierarchical-grid-esf-load-on-demand-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
}

In order to provide a custom loading template for the excel style filtering, we can use the `igxExcelStyleLoading` directive:

```html
<@@igSelector [data]="data" [filterMode]="'excelStyleFilter'" [uniqueColumnValuesStrategy]="columnValuesStrategy">
    ...
    <ng-template igxExcelStyleLoading>
        Loading ...
    </ng-template>
</@@igSelector>
```

<div class="divider--half"></div>

### Styling

To get started with styling the Excel Style Filtering dialog, we need to import the `index` file, where all the theme functions and component mixins live:

```scss
@import '~igniteui-angular/lib/core/styles/themes/index';
``` 

The excel style filtering dialog takes its background color from the grid's theme, using the `filtering-row-background` parameter. In order to change the background we need to create a custom theme:

```scss
$custom-grid: igx-grid-theme(
    $filtering-row-background: #FFCD0F
);
```

We obviously have a lot more components inside the excel like filtering dialog, such as buttons, checkboxes, a list and even a drop-down. In order to style them, we need to create a separate theme for each one:

```scss
$dark-button: igx-button-theme(
    $flat-background: #FFCD0F,
    $flat-text-color: #292826,
    $flat-hover-background: #292826,
    $flat-hover-text-color: #FFCD0F,

    $raised-background: #FFCD0F,
    $raised-text-color: #292826,
    $raised-hover-background: #292826,
    $raised-hover-text-color: #FFCD0F
);

$dark-input-group: igx-input-group-theme(
    $box-background: #292826,
    $idle-text-color: #FFCD0F,
    $focused-text-color: #FFCD0F,
    $filled-text-color: #FFCD0F
);

$custom-list: igx-list-theme(
    $background: #FFCD0F
);

$custom-checkbox: igx-checkbox-theme(
    $empty-color: #292826,
    $fill-color: #292826,
    $tick-color: #FFCD0F,
    $label-color: #292826
);

$custom-drop-down: igx-drop-down-theme(
    $background-color: #FFCD0F,
    $item-text-color: #292826,
    $hover-item-background: #292826,
    $hover-item-text-color: #FFCD0F
);
```

In this example we only changed some of the parameters for the listed components, but the [`igx-button-theme`]({environment:sassApiUrl}/index.html#function-igx-button-theme), [`igx-checkbox-theme`]({environment:sassApiUrl}/index.html#function-igx-checkbox-theme), [`igx-drop-down-theme`]({environment:sassApiUrl}/index.html#function-igx-drop-down-theme), [`igx-input-group-theme`]({environment:sassApiUrl}/index.html#function-igx-input-group-theme), [`igx-list-theme`]({environment:sassApiUrl}/index.html#function-igx-list-theme) themes provide way more parameters to control their respective styling.

The last step is to **include** the component mixins, each with its respective theme. We will also set the color property for the input's placeholder.

```scss
@include igx-drop-down($custom-drop-down);
@include igx-grid($custom-grid);
.igx-excel-filter, .igx-excel-filter__secondary {
    @include igx-button($dark-button);
    @include igx-input-group($dark-input-group);
    @include igx-list($custom-list);
    @include igx-checkbox($custom-checkbox);
    .igx-input-group__input::placeholder {
        color: #FFCD0F;
    }
}
```

>[!NOTE]
>We scope most of the components' mixins within `.igx-excel-filter` and `.igx-excel-filter__secondary`, so that these custom themes will affect only components nested in the excel style filtering dialog and all of its sub-dialogs. Otherwise other buttons, checkboxes, input-groups and lists would be affected too.

>[!NOTE]
>If the component is using an [`Emulated`](../themes/component-themes.md#view-encapsulation) ViewEncapsulation, it is necessary to `penetrate` this encapsulation using `::ng-deep`:

```scss
:host {
    ::ng-deep {
        @include igx-drop-down($custom-drop-down);
        @include igx-grid($custom-grid);
        .igx-excel-filter, .igx-excel-filter__secondary {
            @include igx-button($dark-button);
            @include igx-input-group($dark-input-group);
            @include igx-list($custom-list);
            @include igx-checkbox($custom-checkbox);
            .igx-input-group__input::placeholder {
                color: #FFCD0F;
            }
        }
    }
}
```

#### Defining a color palette

Instead of hardcoding the color values like we just did, we can achieve greater flexibility in terms of colors by using the [`igx-palette`]({environment:sassApiUrl}/index.html#function-igx-palette) and [`igx-color`]({environment:sassApiUrl}/index.html#function-igx-color) functions.

`igx-palette` generates a color palette based on the primary and secondary colors that are passed:

```scss
$yellow-color: #FFCD0F;
$black-color: #292826;

$dark-palette: igx-palette($primary: $black-color, $secondary: $yellow-color);
```
And then with [`igx-color`]({environment:sassApiUrl}/index.html#function-igx-color) we can easily retrieve color from the palette. 

```scss
$custom-grid: igx-grid-theme(
    $filtering-row-background: #FFCD0F
);

$dark-button: igx-button-theme(
    $flat-background: igx-color($dark-palette, "secondary", 400),
    $flat-text-color: igx-color($dark-palette, "primary", 400),
    $flat-hover-background: igx-color($dark-palette, "primary", 400),
    $flat-hover-text-color: igx-color($dark-palette, "secondary", 400),

    $raised-background: igx-color($dark-palette, "secondary", 400),
    $raised-text-color: igx-color($dark-palette, "primary", 400),
    $raised-hover-background: igx-color($dark-palette, "primary", 400),
    $raised-hover-text-color: igx-color($dark-palette, "secondary", 400)
);

$dark-input-group: igx-input-group-theme(
    $box-background: igx-color($dark-palette, "primary", 400),
    $idle-text-color: igx-color($dark-palette, "secondary", 400),
    $focused-text-color: igx-color($dark-palette, "secondary", 400),
    $filled-text-color: igx-color($dark-palette, "secondary", 400)
);

$custom-list: igx-list-theme(
    $background: igx-color($dark-palette, "secondary", 400)
);

$custom-checkbox: igx-checkbox-theme(
    $empty-color: igx-color($dark-palette, "primary", 400),
    $fill-color: igx-color($dark-palette, "primary", 400),
    $tick-color: igx-color($dark-palette, "secondary", 400),
    $label-color: igx-color($dark-palette, "primary", 400)
);

$custom-drop-down: igx-drop-down-theme(
    $background-color: igx-color($dark-palette, "secondary", 400),
    $item-text-color: igx-color($dark-palette, "primary", 400),
    $hover-item-background: igx-color($dark-palette, "primary", 400),
    $hover-item-text-color: igx-color($dark-palette, "secondary", 400)
);
```

>[!NOTE]
>The `igx-color` and `igx-palette` are powerful functions for generating and retrieving colors. Please refer to [`Palettes`](../themes/palette.md) topic for detailed guidance on how to use them.

#### Using Schemas

Going further with the theming engine, you can build a robust and flexible structure that benefits from [**schemas**](../themes/schemas.md). A **schema** is a recipe of a theme.

Extend one of the two predefined schemas, that are provided for every component, in this case - [`light-grid`]({environment:sassApiUrl}/index.html#variable-_light-grid), [`light-input-group`]({environment:sassApiUrl}/index.html#variable-_light-input-group), [`light-button`]({environment:sassApiUrl}/index.html#variable-_light-button), [`light-list`]({environment:sassApiUrl}/index.html#variable-_light-list), [`light-checkbox`]({environment:sassApiUrl}/index.html#variable-_light-checkbox) and [`light-drop-down`]({environment:sassApiUrl}/index.html#variable-_light-drop-down) schemas:

```scss
$custom-grid-schema: extend($_light-grid,
    (
        filtering-row-background:(
            igx-color: ("secondary", 400)
        )
    )
);

$custom-button-schema: extend($_light-button,
    (
        flat-background:(
            igx-color: ("secondary", 400)
        ),
        flat-text-color:(
            igx-color: ("primary", 400)
        ),
        flat-hover-background:(
            igx-color: ("primary", 400)
        ),
        flat-hover-text-color:(
            igx-color: ("secondary", 400)
        ),

        raised-background:(
            igx-color: ("secondary", 400)
        ),
        raised-text-color:(
            igx-color: ("primary", 400)
        ),
        raised-hover-background:(
            igx-color: ("primary", 400)
        ),
        raised-hover-text-color:(
            igx-color: ("secondary", 400)
        )
    )
);

$custom-input-group-schema: extend($_light-input-group,
    (
        box-background:(
            igx-color: ("primary", 400)
        ),
        idle-text-color:(
            igx-color: ("secondary", 400)
        ),
        focused-text-color:(
            igx-color: ("secondary", 400)
        ),
        filled-text-color:(
            igx-color: ("secondary", 400)
        )
    )
);

$custom-list-schema: extend($_light-list,
    (
        background:(
            igx-color: ("secondary", 400)
        )
    )
);

$custom-checkbox-schema: extend($_light-checkbox,
    (
        empty-color:(
            igx-color: ("primary", 400)
        ),
        fill-color:(
            igx-color: ("primary", 400)
        ),
        tick-color:(
            igx-color: ("secondary", 400)
        ),
        label-color:(
            igx-color: ("primary", 400)
        )
    )
);

$custom-drop-down-schema: extend($_light-drop-down,
    (
        background-color:(
            igx-color: ("secondary", 400)
        ),
        item-text-color:(
            igx-color: ("primary", 400)
        ),
        hover-item-background:(
            igx-color: ("primary", 400)
        ),
        hover-item-text-color:(
            igx-color: ("secondary", 400)
        )
    )
);
```

In order to apply our custom schemas we have to **extend** one of the globals ([`light`]({environment:sassApiUrl}/index.html#variable-light-schema) or [`dark`]({environment:sassApiUrl}/index.html#variable-dark-schema)), which is basically pointing out the components with a custom schema, and after that add it to the respective component themes:

```scss
$custom-light-schema: extend($light-schema,(
    igx-grid: $custom-grid-schema,
    igx-button: $custom-button-schema,
    igx-input-group: $custom-input-group-schema,
    igx-list: $custom-list-schema,
    igx-checkbox: $custom-checkbox-schema,
    igx-drop-down: $custom-drop-down-schema
));

$custom-grid: igx-grid-theme(
    $palette: $dark-palette,
    $schema: $custom-light-schema
);

$custom-button: igx-button-theme(
    $palette: $dark-palette,
    $schema: $custom-light-schema
);

$custom-input-group: igx-input-group-theme(
    $palette: $dark-palette,
    $schema: $custom-light-schema
);

$custom-list: igx-list-theme(
    $palette: $dark-palette,
    $schema: $custom-light-schema
);

$custom-checkbox: igx-checkbox-theme(
    $palette: $dark-palette,
    $schema: $custom-light-schema
);

$custom-drop-down: igx-drop-down-theme(
    $palette: $dark-palette,
    $schema: $custom-light-schema
);
```

Don't forget to include the themes in the same way as it was demonstrated above.

#### Demo

@@if (igxName === 'IgxGrid') {
<div class="sample-container loading" style="height:950px">
    <iframe id="grid-excel-style-filtering-style-iframe" data-src='{environment:demosBaseUrl}/grid/grid-excel-style-filtering-style' width="100%" height="100%" seamless="" frameBorder="0" class="lazyload no-theming"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-excel-style-filtering-style-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
}
@@if (igxName === 'IgxTreeGrid') {
<div class="sample-container loading" style="height:950px">
    <iframe id="treegrid-excel-style-filtering-style-iframe" data-src='{environment:demosBaseUrl}/tree-grid/treegrid-excel-style-filtering-style' width="100%" height="100%" seamless="" frameBorder="0" class="lazyload no-theming"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="treegrid-excel-style-filtering-style-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
}
@@if (igxName === 'IgxHierarchicalGrid') {
<div class="sample-container loading" style="height:950px">
    <iframe id="hierarchical-grid-excel-style-filtering-style-iframe" data-src='{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-excel-style-filtering-style' width="100%" height="100%" seamless="" frameBorder="0" class="lazyload no-theming"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="hierarchical-grid-excel-style-filtering-style-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
}

<div class="divider--half"></div>

### API リファレンス
<div class="divider--half"></div>

* [IgxColumnComponent]({environment:angularApiUrl}/classes/igxcolumncomponent.html)
* [@@igxNameComponent API]({environment:angularApiUrl}/classes/@@igTypeDoc.html)
* [@@igxNameComponent Styles]({environment:sassApiUrl}/index.html#function-igx-grid-theme)

### その他のリソース
<div class="divider--half"></div>

* [@@igComponent 概要](@@igMainTopic.md)
* [仮想化とパフォーマンス](virtualization.md)
* [ページング](paging.md)
* [並べ替え](sorting.md)
* [集計](summaries.md)
* [列移動](column_moving.md)
* [列のピン固定](column_pinning.md)
* [列のサイズ変更](column_resizing.md)
* [選択](selection.md)

<div class="divider--half"></div>
コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語) ](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語) ](https://github.com/IgniteUI/igniteui-angular)