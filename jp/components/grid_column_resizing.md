---
title: グリッド列の遅延サイズ変更
_description: Ignite UI for Angular Data Grid コントロールは、タッチ レスポンシブなデータ グリッドです。階層およびリスト ビューなどの機能があります。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スィート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, Angular Data Grid コンポーネント, Angular Data Grid コントロール, Angular Grid コンポーネント, Angular Grid コントロール, Angular 高いパフォーマンス Grid, 列のサイズ変更, 遅延列サイズ変更, グリッド列のサイズ変更, Angular Grid 列のサイズ変更
_language: ja
---

### グリッドの列サイズ変更

**列のサイズ変更**も列ごとのレベルで有効化されます。つまり、**igx-grid** にサイズ変更可能な列およびサイズ変更可能ではない列の両方を含むことが可能です。`igx-column` の `resizable` 入力によって制御されます。**igx-grid** は遅延列のサイズ変更をサポートします。つまり、列はすぐにサイズ変更されません。サイズ変更インジケーターがドラッグ操作で一時的に表示され、ドラッグ操作が終了したときに新しい列サイズが適用されます。特定の列のサイズ変更はグリッド全体の幅に影響するため、残りの列の現在の幅は変更されません。

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

<div class="divider--half"></div>
コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)
