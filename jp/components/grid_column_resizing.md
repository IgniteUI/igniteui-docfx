---
title: Column Resizing Component - Native Angular | Ignite UI for Angular
_description: With deferred column resizing, see a temporary resize indicator while the drag operation is in effect with using the Ignite UI for Angular Column Resizing Component.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Data Grid component, Angular Data Grid control, Native Angular Components, Angular Grid component, Angular Grid control, Angular High Performance Grid, Column Resizing, Deferred Column Reszing, Grid Column Resizing, Angular Grid Column Resizing, Angular column 
_language: ja
---

### グリッドの列サイズ変更

With deferred column resizing, the user will see a temporary resize indicator while the drag operation is in effect. The new column size is only put into its place once the drag operation has ended.

#### デモ

<div class="sample-container loading" style="height:550px">
    <iframe id="grid-resizing-sample-iframe" src='{environment:demosBaseUrl}/grid-resizing-sample' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="grid-resizing-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>

**列のサイズ変更**も列ごとのレベルで有効化されます。つまり、**igx-grid** にサイズ変更可能な列およびサイズ変更可能ではない列の両方を含むことが可能です。`igx-column` の `resizable` 入力によって制御されます。

```html
    <igx-column [field]="Name" [width]="'200px'" [resizable]="true"></igx-column>
    <igx-column [field]="AthleteNumber" [width]="'200px'"></igx-column>
```

`igx-grid` の `onColumnResized` イベントを処理し、列がサイズ変更されたときにカスタム ロジックを実装できます。以前の列幅、新しい列幅、および `IgxColumnComponent` オブジェクトがイベント引数で公開されます。

```html
<igx-grid [data]="data" (onColumnResized)="onResize($event)" [autoGenerate]="false">
    <igx-column [field]="Name" [width]="'200px'" [resizable]="true"></igx-column>
    <igx-column [field]="AthleteNumber" [width]="'200px'"></igx-column>
</igx-grid>
```

```typescript
public onResize(event) {
    this.col = event.column;
    this.pWidth = event.prevWidth;
    this.nWidth = event.newWidth;
}
```

#### 列のサイズ変更の制限

列の最小幅および最大幅も構成できます。`igx-column` の `minWidth` および `maxWidth` 入力によって制御されます。この場合、サイズ変更インジケーターのドラッグ操作が制限されます。列が `minWidth` および `maxWidth` によって定義される範囲以外にサイズ変更できないことをユーザーに通知します。

```html
    <igx-column [field]="Name" [width]="'150px'" [resizable]="true" [minWidth]="'60px'"
        [maxWidth]="'250px'"></igx-column>
```

> [!NOTE]
> `minWidth` がその値より小さい値に設定されても、列を **48px** より小さくサイズ変更することができません。

#### ダブルクリックで列の自動サイズ調整

各列ヘッダーの右側をダブルクリックすると**自動サイズ調整**できます。列は、ヘッダーを含む一番長い現在表示されているセル値にサイズ設定されます。この動作がデフォルトで有効化されます。追加で構成する必要はありません。ただし、`maxWidth` がその列に設定され、新しい幅が `maxWidth` 値より大きい場合、列は自動サイズ調整されません。この場合、列が `maxWidth` 値に設定されます。

#### ピン固定列のサイズ変更

ピン固定列もサイズ変更できます。ただし、ピン固定される列のコンテナーがグリッド全体の幅の 80% より大きくなれないためにサイズ変更が制限されます。ピン固定列の自動サイズ調整で、新しい幅がピン固定列コンテナーをグリッド全体の幅の 80% より大きい場合、自動サイズ調整操作は無視されます。ピン固定されていない列を常にユーザーに表示し、利用可能にするためです。

### API まとめ

#### 入力
以下の入力は**列のサイズ変更**で利用できます。

| 名前 | 型 | 説明 |
| :--- | :--- | :--- |
|`resizable`|boolean|列をサイズ変更可能に設定します。|
|`minWidth`|string|列の最小幅|
|`maxWidth`|string|列の最大幅|

<div class="divider--half"></div>

#### 出力
以下の出力は**列のサイズ変更**で利用できます。

| 名前 | 説明 |
| :--- | :--- |
|`onColumnResized`|列がサイズ変更されたときに発生されます。列オブジェクト、以前の列幅、および新しい列幅を返します。|

<div class="divider--half"></div>

### 追加のリソース
<div class="divider--half"></div>

* [Grid の概要](grid.html)
* [仮想化とパフォーマンス](grid_virtualization.html)
* [ページング](grid_paging.html)
* [フィルタリング](grid_filtering.html)
* [並べ替え](grid_sorting.html)
* [集計](grid_summaries.html)
* [列のピン固定](grid_column_pinning.html)
* [選択](grid_selection.html)

<div class="divider--half"></div>
コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)
