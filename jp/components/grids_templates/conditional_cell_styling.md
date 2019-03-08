@@if (igxName === 'IgxGrid') {
---
title: 条件付きセルのスタイル設定 - ネイティブ Angular | Ignite UI for Angular
_description: 条件付きセル スタイル機能は、カスタム条件に基づいて列のセル スタイル設定が可能です。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スイート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, Angular Grid, Angular Table, Angular Data Grid コンポーネント, Angular Data Table コンポーネント, Angular Data Grid コントロール, Angular Data Table コントロール, Angular Grid コンポーネント, Angular Table コンポーネント, Angular Grid コントロール, Angular Table コントロール, Angular 高パフォーマンス Grid, Angular 高パフォーマンス Data Table, セルのスタイル設定, 条件付き書式, 条件付きセルのスタイル設定, Angular グリッド条件付き列のスタイル設定, Angular Data Table 条件付き列のスタイル設定, Angular 条件付きセルのスタイル設定
_language: ja
---
}
@@if (igxName === 'IgxTreeGrid') {
---
title: 条件付きセルのスタイル設定 - ネイティブ Angular | Ignite UI for Angular
_description: 条件付きセル スタイル機能は、カスタム条件に基づいて列のセル スタイル設定が可能です。
_keywords: Ignite UI for Angular, UI controls, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, Native Angular コンポーネント Suite, ネイティブ Angular Controls, ネイティブ Angular コンポーネント Library, Angular Tree Grid, Angular Tree Table, Angular Tree Grid コンポーネント, Angular Tree Table コンポーネント, Angular Tree Grid control, Angular Tree Table コントロール, Angular Tree Grid コンポーネント, Angular Tree Table コンポーネント, Angular Tree Grid コントロール, Angular Tree Table コントロール, Angular 高パフォーマンス Tree Grid, Angular 高パフォーマンス Tree Table, Cell Styling, Conditional Formatting, Conditional Cell Styling, Angular Tree Grid Conditional Column Styling, Angular Tree Table Conditional Column Styling, Angular Conditional Cell Styling
_language: ja
---
}
@@if (igxName === 'IgxHierarchicalGrid') {
---
title: 条件付きセルのスタイル設定 - ネイティブ Angular | Ignite UI for Angular
_description: 条件付きセル スタイル機能は、カスタム条件に基づいて列のセル スタイル設定が可能です。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スイート, Native Angular コントロール, ネイティブ Angular コンポーネント Library, Angular Hierarchical Grid, Angular Hierarchical Table, Angular Hierarchical Grid コンポーネント, Angular Hierarchical Table コンポーネント, Angular Hierarchical Grid コントロール, Angular Hierarchical Table コントロール, Angular 高パフォーマンス Hierarchical Grid, Angular 高パフォーマンス Hierarchical Table, Cell Styling, Conditional Formatting, Conditional Cell Styling, Angular Hierarchical Grid Conditional Column Styling, Angular Hierarchical Table Conditional Column スタイリング, Angular Conditional Cell スタイリング
_language: ja
---
}

### 条件付きセルのスタイル設定
Ignite UI for Angular の @@igxName コンポーネントは、カスタム条件に基づいた**条件付きセルのスタイル設定**をサポートします。

[`IgxColumnComponent`]({environment:angularApiUrl}/classes/igxcolumncomponent.html) 入力 [`cellClasses`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#cellclasses) をキーと値のペアを含むオブジェクト リテラルに設定します。キーは CSS クラスの名前です。値はブール値を返すコールバック関数またはブール値です。

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

* [Ignite UI for Angular** フォーラム** (英語) ](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語) ](https://github.com/IgniteUI/igniteui-angular)
