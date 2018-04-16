---
title: グリッドの列のピン固定
_description: Ignite UI for Angular Data Grid コントロールは、タッチ レスポンシブなデータ グリッドです。階層およびリスト ビューなどの機能があります。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スィート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, Angular Data Grid コンポーネント, Angular Data Grid コントロール, Angular Grid コンポーネント, Angular Grid コントロール, Angular 高いパフォーマンス Grid, 列のピン固定, ピン固定, ピン
_language: ja
---

### グリッドの列のピン固定

**列のピン固定**は **igx-grid** API で利用できます。ピン固定領域の幅がグリッドより大きくならない限り各列をピン固定できます。列のピン固定は `igx-column` の `pinned` 入力によって制御されます。ピン固定列は常にグリッドの左側に描画され、グリッド本体のピン固定されていない列の水平スクロールで固定されます。

```html
<igx-grid #grid1 [data]="data | async" [width]="700px" [autoGenerate]="false" [paging]="true" [perPage]="6" (onColumnInit)="initColumns($event)"
    (onSelection)="selectCell($event)">
    <igx-column [field]="Name" [pinned]="true"></igx-column>
    <igx-column [field]="AthleteNumber"></igx-column>
    <igx-column [field]="TrackProgress"></igx-column>
</igx-grid>
```

グリッドの `IgxGridComponent` の `pinColumn` または `unpinColumn` メソッドを使用してフィールド名によって列をピン固定またはピン固定解除できます。

```typescript
this.grid.pinColumn("AthleteNumber");
this.grid.unpinColumn("Name");
```

両方のメソッドは操作に成功したかどうかを示すブール値を返します。よくある失敗原因に列が既にその状態である場合ことがあります。`pinColumn` は、ピン固定領域がグリッドのサイズ以上である場合も失敗します。以下はその例です。

```html
<igx-grid #grid1 [data]="data | async" [width]="300px" [autoGenerate]="false">
    <igx-column [field]="Name" [width]="200px" [pinned]="true"></igx-column>
    <igx-column [field]="AthleteNumber" [width]="200px"></igx-column>
</igx-grid>
```

```typescript
var succeed = this.grid.pinColumn("AthleteNumber"); // pinning fails and succeed will be false
```

`AthleteNumber` 列をピン固定すると、ピン固定領域がグリッドの幅より大きくなります。

列をピン固定すると、一番右に配置されたピン固定列の右にピン固定されます。ピン固定列の順序を変更するには、`onColumnPinning` イベントでイベント引数の `insertAtIndex` プロパティを適切な位置インデックスに変更します。

```html
<igx-grid #grid1 [data]="data | async" [autoGenerate]="true" (onColumnPinning)="columnPinning($event)"></igx-grid>
```

```typescript
public columnPinning(event) {
    if (event.column.field === "Name") {
        event.insertAtIndex = 0;
    }
}
```

<div class="divider--half"></div>

### 追加のリソース
<div class="divider--half"></div>

* [グリッドの概要](grid.html)
* [仮想化とパフォーマンス](grid_virtualization.html)
* [ページング](grid_paging.html)
* [フィルタリング](grid_filtering.html)
* [並べ替え](grid_sorting.html)
* [集計](grid_summaries.html)
* [列のサイズ変更](grid_column_resizing.html)

<div class="divider--half"></div>
是非コミュニティに参加してください。

* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)