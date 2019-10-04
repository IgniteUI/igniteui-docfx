@@if (igxName === 'IgxGrid') {
---
title: Angular 条件付きセル スタイル設定|Ignite UI for Angular |Infragistics 
_description: 豊富な API でさまざまなマテリアル スタイリング ガイドラインを使用して、Material UI グリッドの条件付きスタイリング機能を使用してさまざまなスタイルの定義。
_keywords: conditional styling, ignite ui for angular, infragistics
_language: ja
---
}
@@if (igxName === 'IgxTreeGrid') {
---
title: Angular 条件付きセル スタイル設定|Ignite UI for Angular |Infragistics 
_description: 豊富な API でさまざまなマテリアル スタイリング ガイドラインを使用して、Material UI グリッドの条件付きスタイリング機能を使用してさまざまなスタイルの定義。
_keywords: conditional styling, ignite ui for angular, infragistics
_language: ja
---
}
@@if (igxName === 'IgxHierarchicalGrid') {
---
title: Angular 条件付きセル スタイル設定|Ignite UI for Angular |Infragistics 
_description: 豊富な API でさまざまなマテリアル スタイリング ガイドラインを使用して、Material UI グリッドの条件付きスタイリング機能を使用してさまざまなスタイルの定義。
_keywords: conditional styling, ignite ui for angular, infragistics
_language: ja
---
}

### @@igxName 条件付きセルのスタイル設定
Ignite UI for Angular の @@igxName コンポーネントは、カスタム条件に基づいた**条件付きセル**のスタイル設定をサポートします。

[`IgxColumnComponent`]({environment:angularApiUrl}/classes/igxcolumncomponent.html) 入力 [`cellClasses`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#cellclasses) をキーと値のペアを含むオブジェクト リテラルに設定します。キーは CSS クラスの名前です。値はブール値を返すコールバック関数またはブール値です。その結果、セルのマテリアル スタイル設定が簡単にできます。

#### デモ

@@if (igxName === 'IgxGrid') {
<div class="sample-container loading" style="height:530px">
    <iframe id="grid-cell-styling-sample-iframe" src='{environment:demosBaseUrl}/grid/grid-cell-styling' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-cell-styling-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">stackblitz で表示</button>
</div>
}
@@if (igxName === 'IgxTreeGrid') {
<div class="sample-container loading" style="height:600px">
    <iframe id="treegrid-cell-styling-sample-iframe" src='{environment:demosBaseUrl}/tree-grid/treegrid-conditional-cell-style' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="treegrid-cell-styling-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">stackblitz で表示</button>
</div>
}
@@if (igxName === 'IgxHierarchicalGrid') {
<!-- TODO -->
}
<div class="divider--half"></div>

#### 概要
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

#### Known issues and limitations

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
  ...
```

### API リファレンス
<div class="divider--half"></div>

* [IgxColumnComponent]({environment:angularApiUrl}/classes/igxcolumncomponent.html)
* [@@igxNameComponent]({environment:angularApiUrl}/classes/@@igTypeDoc.html)
* [@@igxNameComponent Styles]({environment:sassApiUrl}/index.html#mixin-igx-grid)

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
