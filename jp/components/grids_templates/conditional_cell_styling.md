@@if (igxName === 'IgxGrid') {
---
title: Angular 条件付きセル スタイル設定 | Ignite UI for Angular | インフラジスティックス 
_description: 豊富な API でさまざまなマテリアル スタイリング ガイドラインを使用して、Material UI グリッドの条件付きスタイリング機能を使用してさまざまなスタイルの定義。
_keywords: conditional styling, ignite ui for angular, infragistics
_language: ja
---
}
@@if (igxName === 'IgxTreeGrid') {
---
title: Angular 条件付きセル スタイル設定 | Ignite UI for Angular | インフラジスティックス 
_description: 豊富な API でさまざまなマテリアル スタイリング ガイドラインを使用して、Material UI グリッドの条件付きスタイリング機能を使用してさまざまなスタイルの定義。
_keywords: conditional styling, ignite ui for angular, infragistics
_language: ja
---
}
@@if (igxName === 'IgxHierarchicalGrid') {
---
title: Angular 条件付きセル スタイル設定 | Ignite UI for Angular | インフラジスティックス 
_description: 豊富な API でさまざまなマテリアル スタイリング ガイドラインを使用して、Material UI グリッドの条件付きスタイリング機能を使用してさまざまなスタイルの定義。
_keywords: conditional styling, ignite ui for angular, infragistics
_language: ja
---
}


### @@igComponent 条件付きセルのスタイル設定
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

#### 'cellClasses' を使用したデモ

@@if (igxName === 'IgxGrid') {
<div class="sample-container loading" style="height:530px">
    <iframe id="grid-cell-styling-sample-iframe" src='{environment:demosBaseUrl}/grid/grid-cell-styling' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-cell-styling-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">stackblitz で表示</button>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="grid-cell-styling-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
</div>
}
@@if (igxName === 'IgxTreeGrid') {
<div class="sample-container loading" style="height:600px">
    <iframe id="treegrid-cell-styling-sample-iframe" src='{environment:demosBaseUrl}/tree-grid/treegrid-conditional-cell-style' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="treegrid-cell-styling-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">stackblitz で表示</button>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="treegrid-cell-styling-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
</div>
}
@@if (igxName === 'IgxHierarchicalGrid') {
<!-- TODO -->
}
<div class="divider--half"></div>

- [`IgxColumnComponent`]({environment:angularApiUrl}/classes/igxcolumncomponent.html) 入力を使用して、キーがスタイル プロパティであり、値が評価用の式であるオブジェクト リテラルを受け取る [`cellStyles`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#cellStyles)。

```ts
public styles = {
    "background": "linear-gradient(180deg, #dd4c4c 0%, firebrick 100%)",
    "text-shadow": "1px 1px 2px rgba(25,25,25,.25)",
    "animation": "0.25s ease-in-out forwards alternate popin"
};
```

> `cellStyles` と `cellClasses` の両方のコールバック シグネチャが次のように変更されました。

```ts
(rowData: any, columnKey: string, cellValue: any, rowIndex: number) => boolean
```

#### 'cellStyles' を使用したデモ

@@if (igxName === 'IgxGrid') {
<div class="sample-container loading" style="height:530px">
    <iframe id="grid-cell-cellStyling-sample-2-iframe" src='{environment:demosBaseUrl}/grid/grid-cell-cellStyling' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-cell-cellStyling-sample-2-iframe" data-demos-base-url="{environment:demosBaseUrl}">stackblitz で表示</button>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="grid-cell-cellStyling-sample-2-iframe" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
</div>
}
@@if (igxName === 'IgxTreeGrid') {
<div class="sample-container loading" style="height:600px">
    <iframe id="treegrid-cell-cellStyling-sample-iframe" src='{environment:demosBaseUrl}/tree-grid/tree-grid-cell-cellStyling' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="treegrid-cell-cellStyling-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">stackblitz で表示</button>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="treegrid-cell-cellStyling-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
</div>
}
@@if (igxName === 'IgxHierarchicalGrid') {
<!-- TODO -->
}
<div class="divider--half"></div>

### 概要

#### cellClasses の使用
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
        <span *ngIf="cell.row.rowData.UnitPrice == 0">-</span>
        <span *ngIf="cell.row.rowData.UnitPrice != 0">${{val}}</span>
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

#### cellStyles の使用
列の `cellStyles` プロパティを公開。列セルの条件付きスタイリングが可能になりました。`cellClasses` と同様、キーがスタイル プロパティであり、値が評価用の式であるオブジェクト リテラルを受け取ります。また、通常のスタイリングを簡単に適用できます (条件なし)。

[上記のサンプル](conditional_cell_styling.md#cellStyles-を使用したデモ)で作成した項目:
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
    background: "linear-gradient(to right, #b993d6, #8ca6db)",
    color: (rowData, coljey, cellValue, rowIndex) => rowIndex % 2 === 0 ? "white" : "gray",
    animation: "0.75s popin"
};

public evenColStyles = {
    background: "linear-gradient(to right, #8ca6db, #b993d6)",
    color: (rowData, coljey, cellValue, rowIndex) => rowIndex % 2 === 0 ? "gray" : "white",
    animation: "0.75s popin"
};

```

`ngOnInit` で、@@igxName 列を動的に作成するために使用される事前定義 `columns` コレクションの各列に `cellStyles` 構成を追加します。

```ts
// component.ts
public ngOnInit() {
    this.data = athletesData;
    this.columns = [
        { field: "Id" },
        { field: "Position" },
        { field: "Name" },
        { field: "AthleteNumber" },
        { field: "CountryName" }
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


#### 既知の問題と制限

- 他の列に同じ条件でバインドされたセルがある場合、その 1 つのセルが更新された際に条件が満たされて要る場合も他のセルが新しい値に基づいて更新されない問題。
残りのセルに変更を適用するには、パイプ チェックを実行する必要があります。以下の例は、[`onCellEdit`]({environment:angularApiUrl}/classes/igxgridcomponent.html#oncelledit) イベントで`スプレッド演算子`...を使用してチェックを実行する方法を示します。これにより、元のオブジェクトが新しいインスタンスでコピーされ、パイプのみ発生します。

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
  ...
```

### API リファレンス
<div class="divider--half"></div>

* [IgxColumnComponent]({environment:angularApiUrl}/classes/igxcolumncomponent.html)
* [@@igxNameComponent]({environment:angularApiUrl}/classes/@@igTypeDoc.html)
* [@@igxNameComponent スタイル]({environment:sassApiUrl}/index.html#mixin-igx-grid)

### その他のリソース
<div class="divider--half"></div>

* [@@igComponent 概要](@@igMainTopic.md)
* [仮想化とパフォーマンス](virtualization.md)
* [編集](editing.md)
* [ページング](paging.md)
* [フィルタリング](filtering.md)
* [並べ替え](sorting.md)
* [集計](summaries.md)
* [列移動](column_moving.md)
* [列のピン固定](column_pinning.md)
* [列のサイズ変更](column_resizing.md)
* [列の非表示](column_hiding.md)
* [選択](selection.md)
* [検索](search.md)
* [ツールバー](toolbar.md)
* [複数行ヘッダー](multi_column_headers.md)
* [表示密度](display_density.md)

<div class="divider--half"></div>
コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語) ](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語) ](https://github.com/IgniteUI/igniteui-angular)
