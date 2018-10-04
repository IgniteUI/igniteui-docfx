---
title: 列移動 - ネイティブ Angular | Ignite UI for Angular
_description: 列移動機能は、標準ドラッグ/ドロップ マウス ジェスチャでインタラクティブに列を並べ替えます。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スイート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, Angular Data Grid コンポーネント, Angular Data Grid コントロール, ネイティブ Angular コンポーネント, Angular Grid コンポーネント, Angular Grid コントロール, Angular 高いパフォーマンス Grid, 列のサイズ変更, 遅延列サイズ変更, グリッド列のサイズ変更, Angular Grid 列のサイズ変更, Angular 列
_language: ja
---

### グリッドの列移動

Ignite UI for Angular の Grid コンポーネントは、標準ドラッグ/ドロップのマウス ジェスチャで**列移動**を使用した列の並び替えをサポートします。

固定列の列移動も可能なため、ピン固定していない列をドラッグしてピン固定領域内にドロップして列をピンを固定したり、ピン固定領域内から列をドラッグして非固定領域にドロップしてピン固定の解除ができます。

#### デモ

<div class="sample-container loading" style="height:630px">
    <iframe id="column-moving-sample-iframe" src='{environment:demosBaseUrl}/grid-moving-sample' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="column-moving-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で開く</button>
</div>
<div class="divider--half"></div>

#### 概要
**列移動**は各列レベルで有効にできます。つまり、[**igx-grid**]({environment:angularApiUrl}/classes/igxgridcomponent.html) に移動可能な列と移動不可の列の両方を含むことができます。[`igx-column`]({environment:angularApiUrl}/classes/igxcolumncomponent.html) の [`movable`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#movable) 入力によって制御されます。

```html
<igx-column [field]="'Category'" [movable]="true"></igx-column>
```
> [!NOTE]
> ピン固定領域が最大幅 (グリッド幅合計の 80 %)を超えた場合、ドロップ操作が禁止されていてピン固定ができないことをヒントの表示でエンドユーザーに通知します。つまり、ピン固定領域に列をドロップできません。

#### イベント
列のドラッグアンドドロップ操作をカスタマイズするための列移動に関連するイベントが複数あります。[`onColumnMovingStart`]({environment:angularApiUrl}/classes/igxgridcomponent.html#oncolumnmovingstart)、[`onColumnMoving`]({environment:angularApiUrl}/classes/igxgridcomponent.html#oncolumnmoving)、[`onColumnMovingEnd`]({environment:angularApiUrl}/classes/igxgridcomponent.html#oncolumnmovingend) があります。
[`igx-grid`]({environment:angularApiUrl}/classes/igxgridcomponent.html) の [`onColumnMovingEnd`]({environment:angularApiUrl}/classes/igxgridcomponent.html#oncolumnmovingend) イベントを処理し、列が新しい位置にドロップされたときにカスタム ロジックを実装できます。たとえば、Change On Year(%) 列の後に Category のドロップをキャンセルできます。

```html
<igx-grid #dataGrid [data]="data" [autoGenerate]="false" (onColumnMovingEnd)="onColumnMovingEnd($event)">
    <igx-column [field]="'Category'" [movable]="true"></igx-column>
    <igx-column [field]="'Change On Year(%)'" [dataType]="'number'" [movable]="true" ></igx-column>
</igx-grid>
```

```typescript
public onColumnMovingEnd(event) {
    if (event.source.field === "Category" && event.target.field === "Change On Year(%)") {
        event.cancel = true;
    }
}
```

### API References
<div class="divider--half"></div>

* [IgxColumnComponent]({environment:angularApiUrl}/classes/igxcolumncomponent.html)
* [IgxGridComponent]({environment:angularApiUrl}/classes/igxgridcomponent.html)
* [IgxGridComponent Styles]({environment:sassApiUrl}/index.html#mixin-igx-grid)

### その他のリソース
<div class="divider--half"></div>

* [Grid の概要](grid.md)
* [仮想化とパフォーマンス](grid_virtualization.md)
* [ページング](grid_paging.md)
* [フィルタリング](grid_filtering.md)
* [並べ替え](grid_sorting.md)
* [集計](grid_summaries.md)
* [列のピン固定](grid_column_pinning.md)
* [列のサイズ変更](grid_column_resizing.md)
* [選択](grid_selection.md)
* [検索](grid_search.md)
* [Excel エクスポーター](exporter_excel.md)

<div class="divider--half"></div>
コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)
