---
title: Grid column pinning
_description: The Ignite UI for Angular Data Grid control features the fastest, touch-responsive data-rich grid with popular features, including hierarchical and list views.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Data Grid component, Angular Data Grid control, Angular Grid component, Angular Grid control, Angular High Performance Grid, column pinning, pinning, pin
_language: ja
---

### 列のピン固定

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

### Additional Resources
<div class="divider--half"></div>

* [Grid overview](grid.html)
* [Virtualization and Performance](grid_virtualization.html)
* [Paging](grid_paging.html)
* [Filtering](grid_filtering.html)
* [Sorting](grid_sorting.html)
* [Summaries](grid_summaries.html)

<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)