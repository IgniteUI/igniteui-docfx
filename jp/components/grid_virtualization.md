---
title: 仮想化ディレクティブ - ネイティブ Angular | Ignite UI for Angular
_description: Ignite UI for Angular Virtualization ディレクティブは大量データ セットの処理でスピードおよびパフォーマンスのための主な機能です。仮想描画機能はメモリでの DOM オブジェクトの数を固定すると、スムーズなスクロールを実現できます。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スィート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, ネイティブ Angular コンポーネント, Angular Data Grid コンポーネント, Angular Data Grid コントロール, Angular Grid コンポーネント, Angular Grid コントロール, Angular 高いパフォーマンス Grid, Angular Virtualization ディレクティブ, 仮想化, パフォーマンス
_language: ja
---

### グリッドの仮想化とパフォーマンス

Ignite UI for Angular `igxGrid` コントロールは `igxForOf` ディレクティブを使用します。コンテンツを垂直方向 (データ レコード) および水平方向 (列) に仮想化します。

#### デモ

<div class="sample-container loading" style="height:550px">
    <iframe id="grid-sample-2-iframe" src='{environment:demosBaseUrl}/grid-sample-2' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="grid-sample-2-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で開く</button>
</div>

### 仮想化の有効化

`igxForOf` ディレクティブは、ビューポートに表示されているデータのみを描画し、ユーザーがスクロール時に表示データを切り替えた際に Data Grid が DOM 描画およびメモリ使用を最適化します。`igxGrid` の `width` および `height` のデフォルト値は 100% です。コンテンツが利用可能なスペースにフィットせず、垂直方向または水平方向にスクロールバーが必要な場合に仮想化が有効になります。ただし、グリッドの `width` または `height` を明示的に `null` 値に設定できます。つまり、関連するディメンションが項目の合計サイズに基づいて決定されます。スクロールバーが表示されず、すべての項目が相対するディメンション (`width` が `null` 値の場合は列で、`height` が `null` 値の場合は行) に描画されます。

データ部分のサイズは以下によって決定されます。

*   垂直 (行) 仮想化の行の高さ。これは `rowHeight` オプションによって決定され、デフォルト値は 50 (px) です。
*   水平 (列) 仮想化の列幅 (ピクセル単位)。各列コンポーネントで明示的に幅を設定、または明示的に幅が設定されないすべての列に適用するグリッドの `columnWidth` オプションを設定できます。

ディメンションを設定せずにグリッドでデフォルト動作を適用する場合、ほとんどの場合は望ましいレイアウトになります。列幅は列カウント、幅が設定された列、およびグリッド コンテナーの計算幅に基づいて決定されます。グリッドは、割り当てる幅が 136px 未満になる以外はすべての列を利用可能なスペースに合わせようとします。その場合、割り当てられない幅を持つ列は 136px の最小幅に設定され、水平方向スクロールバーが表示されます。グリッドは水平方向に仮想化されます。

列幅をパーセンテージ (%) で明示的に設定する場合、ほとんどの場合に水平スクロールバーがない水平方向に仮想化されないグリッドを作成します。

### リモート仮想化

`igxGrid` は、データ部分がリモート サービスから要求されたシナリオをサポートします。このシナリオは内部に使用される `igxForOf` で実装される動作を公開します。

### Grid リモート仮想化デモ

<div class="sample-container loading" style="height:550px">
    <iframe id="grid-sample-4-iframe" src='{environment:demosBaseUrl}/grid-sample-4' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="grid-sample-4-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で開く</button>
</div>

この機能を使用するには、取得した引数に基づいて適切な要求を実行するために `onDataPreLoad` 出力にサブスクライブし、サービスから送信される相対する情報とパブリック `igxGrid` の `totalItemCount` プロパティを設定する必要があります。

```html
<igx-grid #grid [data]="remoteData | async" [height]="'500px'" [width]="'100%'" [autoGenerate]='false' (onDataPreLoad)="processData(false)"
    (onSortingDone)="processData(true)">
    <igx-column [field]="'ID'" [sortable]="true"></igx-column>
    <igx-column [field]="'ProductName'" [sortable]="true"></igx-column>
    <igx-column [field]="'CategoryName'" [sortable]="true"></igx-column>
    ...
</igx-grid>
```

```typescript
public ngAfterViewInit() {
    this._remoteService.getData(this.grid.virtualizationState, this.grid.sortingExpressions[0], true, (data) => {
        this.grid.totalItemCount = data.Count;
    });
}

public processData() {
    if (this.prevRequest) {
        this.prevRequest.unsubscribe();
    }

    this._prevRequest = this._remoteService.getData(this.grid.virtualizationState,
        this.grid.sortingExpressions[0], reset, () => {
        ...
        this.cdr.detectChanges();
    });
}
```

データを要求する際に `startIndex` および `chunkSize` プロパティを提供する `IForOfState` インターフェイスを使用できます。

**注:** 最初の `chunkSize` は常に 0 で、特定のアプリケーション シナリオに基づいて設定する必要があります。

### リモートの並べ替え/フィルタリングの仮想化
リモートの並べ替えおよびフィルタリングは、`onDataPreLoad`, `onSortingDone`, `onFilteringDone` 出力にサブスクライブし、パブリック `igxGrid` プロパティの `totalItemCount` をサービスから送信される個々の情報とともに設定し、受け取った引数に基づいて適切な要求を作成します。

<div class="sample-container loading" style="height:550px">
    <iframe id="grid-remote-filtering-iframe" src='{environment:demosBaseUrl}/grid-remote-filtering' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="grid-remote-filtering-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で開く</button>
</div>

### 仮想化の制限

*   行の高さの変更はサポートされません。すべての行を同じ高さに設定する必要があります。
*   行/列の指定したディメンションが実際の描画された要素と一致する必要があります。たとえば、グリッド セルに行の高さを高くするテンプレートまたはクラスを定義した際に指定した `rowHeight` 値と一致しない場合、垂直仮想化は正しく動作しません。仮想項目数は DOM の実際要素と一致しなくなり、列およびその幅も同様になります。
*   ブラウザーは現在 DOM 要素に高さの制限があります。そのため、行の高さの合計をブラウザーの高さの制限より大きくする必要があります。より大きくなる場合、`igxGrid` が正しく動作しない可能性があります。たとえば、Internet Explorer 11 の高さの制限は 1,533,916 ピクセルです。つまり、高さが 50px の行の制限は 30,678 行です。
*   グリッドにレスポンシブな幅または高さがあり、ブラウザーのウィンドウまたはその他の要素のサイズに合わせてサイズ変更する場合、スクロール位置は 0 にリセットされます。スクロールバーの位置およびサイズ変更については、今後のリリースで機能拡張が予定されています。
*   Mac OS で 「Show scrollbars only when scrolling」システム オプションを true (デフォルト値) に設定した場合、水平スクロールバーが表示されません。これは、グリッドの行コンテナーで、overflow が hidden に設定されているためです。オプションを "Always" に設定すると、スクロールバーが表示されます。

### FAQ

#### 仮想化のためにグリッドでディメンションを設定する必要があるのはなぜですか?

描画する前にコンテナーおよび項目のサイズの情報がない場合にグリッドでランダムな位置にスクロールすると、スクロールバーの幅や高さの設定、表示項目の決定で誤りが発生します。ディメンションの推測がスクロールバーの誤操作となり、ユーザー エクスペリエンスを低下させます。そのため、仮想化を有効化する際は、関連するディメンションを設定することをお勧めします。

### 追加のリソース
<div class="divider--half"></div>

* [グリッドの概要](grid.md)
* [ページング](grid_paging.md)
* [フィルタリング](grid_filtering.md)
* [並べ替え](grid_sorting.md)
* [集計](grid_summaries.md)
* [列移動](grid_column_moving.md)
* [列のピン固定](grid_column_pinning.md)
* [列のサイズ変更](grid_column_resizing.md)
* [選択](grid_selection.md)

<div class="divider--half"></div>
コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)
