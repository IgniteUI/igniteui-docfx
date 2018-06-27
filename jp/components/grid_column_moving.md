---
title: 列移動 - ネイティブ Angular | Ignite UI for Angular
_description: 列移動機能は、標準ドラッグ/ドロップ マウス ジェスチャでインタラクティブに列を並べ替えます。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スイート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, Angular Data Grid コンポーネント, Angular Data Grid コントロール, ネイティブ Angular コンポーネント, Angular Grid コンポーネント, Angular Grid コントロール, Angular 高いパフォーマンス Grid, 列のサイズ変更, 遅延列サイズ変更, グリッド列のサイズ変更, Angular Grid 列のサイズ変更, Angular 列
_language: ja
---

### グリッドの列移動機能

Ignite UI for Angular の Grid コンポーネントは、標準ドラッグ/ドロップのマウス ジェスチャで**列移動**を使用して列の並び替えができます。

#### デモ

<div class="sample-container loading" style="height:630px">
    <iframe id="column-moving-sample-iframe" src='{environment:demosBaseUrl}/grid-moving-sample' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="column-moving-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で開く</button>
</div>
<div class="divider--half"></div>

#### 概要
**列移動**は各列レベルで有効にできます。つまり、**igx-grid** に移動可能な列と移動不可の列の両方を含むことができます。`igx-column` の `movable` 入力によって制御されます。

```html
<igx-column [field]="'Category'" [movable]="true"></igx-column>
```

#### イベント
列のドラッグアンドドロップ操作をカスタマイズするための列移動に関連するイベントが複数あります。`onColumnMovingStart`、`onColumnMoving`、`onColumnMovingEnd` があります。
igx-grid の `onColumnMovingEnd` イベントを処理し、列が新しい位置にドロップされたときにカスタム ロジックを実装できます。たとえば、Change On Year(%) 列の後に Category のドロップをキャンセルできます。

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

### API まとめ

#### 入力
以下の `IgxColumnComponent` 入力は、**列移動**の構成に使用できます。

| 名前 | 型 | 説明 |
| :--- | :--- | :--- |
|`movable`|boolean|列を移動可能に設定します。|

<div class="divider--half"></div>

#### 出力
以下の `IgxGridComponent` 出力は**列移動**で使用できます。

| 名前 | 型 | 説明 |
| :--- | :--- | :--- |
|`onColumnMoving`| EventEmitter |列が移動されたときに発生されます。ソースとターゲットの列オブジェクトを返します。このイベントはキャンセルできます。|
|`onColumnMovingEnd`| EventEmitter |列移動が終了したときに発生されます。ソースとターゲットの列オブジェクトを返します。このイベントはキャンセルできます。|
|`onColumnMovingStart`| EventEmitter |列移動を開始したときに発生されます。移動した列オブジェクトを返します。|

<div class="divider--half"></div>

#### メソッド
以下は、**列移動** に関連する `IgxGridComponent` メソッドです。

| 名前 | 説明 |
| :--- | :--- |
|`moveColumn(column: IgxColumnComponent, dropTarget: IgxColumnComponent)` | API を使用して指定したドロップ ターゲットに列を移動する方法を提供します。 |

<div class="divider--half"></div>

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
