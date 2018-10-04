---
title: 条件付きセルのスタイル設定 - ネイティブ Angular|Ignite UI for Angular
_description: 条件付きセルのスタイル設定機能は、カスタム条件による列のセル スタイルの設定をサポートします。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スイート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, Angular Data Grid コンポーネント, Angular Data Grid コントロール, ネイティブ Angular コンポーネント, Angular Grid コンポーネント, Angular Grid コントロール, セルのスタイル設定, 条件付き書式, 条件付きセルのスタイル設定, Angular グリッド条件付き列のスタイル設定, Angular 条件付きセルのスタイル設定
_language: ja
---

### 条件付きセルのスタイル設定
Ignite UI for Angular の Grid コンポーネントは、カスタム条件に基づいた**条件付きセルのスタイル設定**をサポートします。 

[`IgxColumnComponent`]({environment:angularApiUrl}/classes/igxcolumncomponent.html) 入力 [`cellClasses`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#cellclasses) をキーと値のペアを含むオブジェクト リテラルに設定します。 キーは CSS クラスの名前です。値はブール値を返すコールバック関数またはブール値です。

#### デモ

<div class="sample-container loading" style="height:530px">
    <iframe id="cell-styling-sample-iframe" src='{environment:demosBaseUrl}/grid-cell-styling' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="cell-styling-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">stackblitz で開く</button>
</div>
<div class="divider--half"></div>

#### 概要
gGrid セルの条件付きスタイル設定は、[`IgxColumnComponent`]({environment:angularApiUrl}/classes/igxcolumncomponent.html) [`cellClasses`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#cellclasses)入力を設定してカスタム条件を定義するころによりスタイル設定できます。

```html
<!-- sample.component.html -->
<igx-column field="BeatsPerMinute" dataType="number" [cellClasses]="beatsPerMinuteClasses"></igx-column>
```

[`cellClasses`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#cellclasses) 入力は、キーと値のペアを含むオブジェクト リテラルを受け取ります。キーは CSS クラスの名前です。値はブール値を返すコールバック関数またはブール値です。

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

::ng-deep または **`ViewEncapsulation.None`** を使用してカスタム スタイルを現在のコンポーネントとその子コンポーネントに適用します。

### API リファレンス
<div class="divider--half"></div>

* [IgxColumnComponent]({environment:angularApiUrl}/classes/igxcolumncomponent.html)
* [IgxGridComponent]({environment:angularApiUrl}/classes/igxgridcomponent.html)
* [IgxGridComponent Styles]({environment:sassApiUrl}/index.html#mixin-igx-grid)

### その他のリソース
<div class="divider--half"></div>

* [Grid の概要](grid.md)
* [仮想化とパフォーマンス](grid_virtualization.md)
* [編集](grid_editing.md)
* [ページング](grid_paging.md)
* [フィルタリング](grid_filtering.md)
* [並べ替え](grid_sorting.md)
* [グループ化](grid_groupby.md)
* [集計](grid_summaries.md)
* [列移動](grid_column_moving.md)
* [列のピン固定](grid_column_pinning.md)
* [列のサイズ変更](grid_column_resizing.md)
* [列の非表示](grid_column_hiding.md)
* [選択](grid_selection.md)
* [検索](grid_search.md)
* [ツールバー](grid_toolbar.md)
* [Excel へエクスポート](exporter_excel.md)
* [Excel から貼り付け](grid_paste_excel.md)
* [複数列ヘッダー](grid_multi_column_headers.md)
* [表示密度](grid_displayDensity.md)

<div class="divider--half"></div>
コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)
