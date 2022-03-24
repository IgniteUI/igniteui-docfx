@@if (igxName === 'IgxGrid') {
---
title: Angular 条件付きスタイル設定 | Ignite UI for Angular | インフラジスティックス 
_description: 豊富な API でさまざまなマテリアル スタイリング ガイドラインを使用して、Material UI グリッドの条件付きスタイリング機能を使用してさまざまなスタイルの定義。
_keywords: conditional styling, ignite ui for angular, infragistics
_language: ja
---
}
@@if (igxName === 'IgxTreeGrid') {
---
title: Angular 条件付きスタイル設定 | Ignite UI for Angular | インフラジスティックス 
_description: 豊富な API でさまざまなマテリアル スタイリング ガイドラインを使用して、Material UI グリッドの条件付きスタイリング機能を使用してさまざまなスタイルの定義。
_keywords: conditional styling, ignite ui for angular, infragistics
_language: ja
---
}
@@if (igxName === 'IgxHierarchicalGrid') {
---
title: Angular 条件付きスタイル設定 | Ignite UI for Angular | インフラジスティックス 
_description: 豊富な API でさまざまなマテリアル スタイリング ガイドラインを使用して、Material UI グリッドの条件付きスタイリング機能を使用してさまざまなスタイルの定義。
_keywords: conditional styling, ignite ui for angular, infragistics
_language: ja
---
}

# @@igComponent 条件付きスタイル設定
@@igxName コンポーネントでカスタム スタイルを提供する必要がある場合は、行レベルまたはセル レベルで行うことができます。

## @@igComponent 条件付き行のスタイル設定

Ignite UI for Angular の @@igxName コンポーネントは、カスタム ルールに基づいて**行の条件付きスタイル設定**を作成する次の 2 つの方法を提供します:

- @@igxName コンポーネントで [`rowClasses`]({environment:angularApiUrl}/classes/IgxGridBaseDirective.html#rowClasses) 入力を設定する方法。
- @@igxName コンポーネントで [`rowStyles`]({environment:angularApiUrl}/classes/IgxGridBaseDirective.html#rowStyles) 入力を設定する方法。

さらにこのトピックでは、両方について詳しく説明します。

### rowClasses の使用
[`rowClasses`]({environment:angularApiUrl}/classes/IgxGridBaseDirective.html#rowClasses) 入力を設定し、カスタム ルールを定義することで、@@igxName 行のスタイルを条件付きで設定できます。

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


[`rowClasses`]({environment:angularApiUrl}/classes/IgxGridBaseDirective.html#rowClasses) 入力は、キー値のペアを含むオブジェクト リテラルを受け入れます。ここで、キーは CSS クラスの名前であり、値はブール値またはブール値を返すコールバック関数となります。

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

**::ng-deep** または **`ViewEncapsulation.None`** を使用してカスタム スタイルを現在のコンポーネントとその子コンポーネントに適用します。



### デモ

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


### rowStyles の使用
列は、データ行の条件付きスタイル設定を可能にする `rowStyles` プロパティを公開するようになりました。`rowClasses` と同様、キーがスタイル プロパティであり、値が評価用の式であるオブジェクト リテラルを受け取ります。また、通常のスタイル設定 (条件なし) を適用することもできます。

> `rowStyles` と `rowClasses` の両方のコールバック署名は次のとおりです:

```ts
(row: RowType) => boolean
```

次にスタイルを定義します。

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


### デモ

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


## @@igComponent 条件付きセル スタイル設定
## 概要
Ignite UI for Angular の @@igxName コンポーネントは、カスタム条件に基づいて 2 通りの条件付きセルのスタイル設定をサポートします。

- [`IgxColumnComponent`]({environment:angularApiUrl}/classes/igxcolumncomponent.html) を設定して、キーと値のペアを含むオブジェクト リテラルに [`cellClasses`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#cellclasses) を入力します。キーは CSS クラスの名前です。値はブール値を返すコールバック関数またはブール値です。その結果、セルのマテリアル スタイル設定が簡単にできます。

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


### cellClasses の使用
[`IgxColumnComponent`]({environment:angularApiUrl}/classes/igxcolumncomponent.html) [`cellClasses`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#cellclasses) 入力を設定してカスタム条件を定義することにより、@@igxName の条件付きセルのスタイルを設定できます。

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

[`cellClasses`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#cellclasses) 入力は、キーと値のペアを含むオブジェクト リテラルを受け取ります。キーは CSS クラスの名前です。値はブール値を返すコールバック関数またはブール値です。

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

**::ng-deep** または **`ViewEncapsulation.None`** を使用してカスタム スタイルを現在のコンポーネントとその子コンポーネントに適用します。

### デモ

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

- [`IgxColumnComponent`]({environment:angularApiUrl}/classes/igxcolumncomponent.html) 入力を使用して、キーがスタイル プロパティであり、値が評価用の式であるオブジェクト リテラルを受け取る [`cellStyles`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#cellStyles)。

```ts
public styles = {
    'background': 'linear-gradient(180deg, #dd4c4c 0%, firebrick 100%)',
    'text-shadow': '1px 1px 2px rgba(25,25,25,.25)',
    'animation': '0.25s ease-in-out forwards alternate popin'
};
```

> `cellStyles` と `cellClasses` の両方のコールバック シグネチャが次のように変更されました。

```ts
(rowData: any, columnKey: string, cellValue: any, rowIndex: number) => boolean
```

### cellStyles の使用
列の `cellStyles` プロパティを公開。列セルの条件付きスタイリングが可能になりました。`cellClasses` と同様、キーがスタイル プロパティであり、値が評価用の式であるオブジェクト リテラルを受け取ります。また、通常のスタイリングを簡単に適用できます (条件なし)。

[上記のサンプル](#デモ)で作成した項目:
- 列インデックスに基づいて適用される 2 つの異なるスタイル。
- また、偶数/奇数行に基づいて`テキストの色`を変更します。

> 両方の `cellStyles` のコールバック署名は以下のとおりです。

```ts
(rowData: any, columnKey: string, cellValue: any, rowIndex: number) => boolean
```

次にスタイルを定義します。

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

`ngOnInit` で、@@igxName 列を動的に作成するために使用される事前定義 `columns` コレクションの各列に `cellStyles` 構成を追加します。

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

`popin` アニメーションの定義

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

### デモ

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

## 既知の問題と制限

- 他の列に同じ条件でバインドされたセルがある場合、その 1 つのセルが更新された際に条件が満たされて要る場合も他のセルが新しい値に基づいて更新されない問題。
残りのセルに変更を適用するには、パイプ チェックを実行する必要があります。以下の例は、[`onCellEdit`]({environment:angularApiUrl}/classes/igxgridcomponent.html#oncelledit) イベントで`スプレッド演算子` ... を使用してチェックを実行する方法を示します。これにより、元のオブジェクトが新しいインスタンスでコピーされ、パイプのみ発生します。

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

## API リファレンス
<div class="divider--half"></div>

* [IgxColumnComponent]({environment:angularApiUrl}/classes/igxcolumncomponent.html)
* [@@igxNameComponent]({environment:angularApiUrl}/classes/@@igTypeDoc.html)
* [@@igxNameComponent スタイル]({environment:sassApiUrl}/index.html#mixin-igx-grid)

## その他のリソース
<div class="divider--half"></div>

* [@@igComponent 概要](@@igMainTopic.md)
* [仮想化とパフォーマンス](virtualization.md)
* [編集](editing.md)
* [ページング](paging.md)
* [フィルタリング](filtering.md)
* [ソート](sorting.md)
* [集計](summaries.md)
* [列移動](column-moving.md)
* [列のピン固定](column-pinning.md)
* [列のサイズ変更](column-resizing.md)
* [列の非表示](column-hiding.md)
* [選択](selection.md)
* [検索](search.md)
* [ツールバー](toolbar.md)
* [複数行ヘッダー](multi-column-headers.md)
* [表示密度](display-density.md)

<div class="divider--half"></div>
コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語) ](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語) ](https://github.com/IgniteUI/igniteui-angular)
