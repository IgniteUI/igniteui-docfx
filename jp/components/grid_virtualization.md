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

ユーザーが大きいデータ セットでスムーズにスクロールできます。`igxForOf` ディレクティブを使用すると、ビューポートに表示されているデータのみを描画し、ユーザーがスクロールするときに表示されるデータを切り替えると、Data Grid は DOM 描画およびメモリ使用を最適化します。`igxGrid` の `width` および `height` のデフォルト値は 100% です。コンテンツが利用可能なスペースにフィットせず、垂直方向または水平方向にスクロールバーが必要な場合に仮想化が有効になります。ただし、グリッドの `width` または `height` を明示的に `null` 値に設定できます。つまり、関連するディメンションが項目の合計サイズに基づいて決定されます。スクロールバーが表示されず、すべての項目が相対するディメンション (`width` が `null` 値の場合は列で、`height` が `null` 値の場合は行) に描画されます。

データ部分のサイズが以下のことによって決定されます。

*   垂直 (行) 仮想化の行高さ。これは `rowHeight` オプションによって決定され、デフォルト値は 50 (px) です。
*   水平 (列) 仮想化の列幅 (ピクセル単位)。各列コンポーネントで明示的に幅を設定するか、明示的に幅が設定されないすべての列に適用するグリッドの `columnWidth` オプションを設定できます。

ほとんどの場合、ディメンションを設定せずにグリッドでデフォルト動作を適用する場合、望ましいレイアウトになります。列幅は列カウント、幅が設定された列、およびグリッド コンテナーの計算幅に基づいて決定されます。グリッドは、割り当てる幅が 136px より小さくならない場合、すべての列を利用可能なスペースに合わせようとします。その場合、割り当てられない幅を持つ列は 136px の最小幅に設定され、水平方向スクロールバーが表示されます。グリッドは水平方向に仮想化されます。

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
<igx-grid #grid1 [data]="remoteData | async" (onDataPreLoad)="dataLoading($event)" >
    <igx-column *ngFor="let c of columns" [field]="c.field" [header]="c.header">
    </igx-column>
</igx-grid>
```

```typescript
public ngAfterViewInit() {
    this.remoteService.getData(this.grid.virtualizationState, (data) => {
        this.grid.totalItemCount = data["@odata.count"];
    });
}

public dataLoading(evt) {
    if (this.prevRequest) {
        this.prevRequest.unsubscribe();
    }
    this.prevRequest = this.remoteService.getData(evt, () => {
        this.cdr.detectChanges();
    });
}
```

データを要求する際に `startIndex` および `chunkSize` プロパティを提供する `IForOfState` インターフェイスを使用できます。

**注:** 最初の `chunkSize` は常に 0 で、特定のアプリケーション シナリオに基づいて設定する必要があります。

```typescript
public getData(data?: IForOfState, cb?: (any) => void): any {
    const dataState = data;
    return this.http
        .get(this.buildUrl(dataState))
        .subscribe((d: any) => {
            this._remoteData.next(d.value);
            if (cb) {
                cb(d);
            }
        });
}

private buildUrl(dataState: IForOfState): string {
    let qS: string = "?";
    let requiredChunkSize: number;
    if (dataState) {
        const skip = dataState.startIndex;

        requiredChunkSize = dataState.chunkSize === 0 ?
            // Set initial chunk size, the best value is igxForContainerSize divided on igxForItemSize
            10 : dataState.chunkSize;
        const top = requiredChunkSize;
        qS += `$skip=${skip}&$top=${top}&$count=true`;
    }
    return `${this.url}${qS}`;
}
```

### 仮想化の制限

*   変更可能な行高さはサポートされません。すべての行を同じ高さに設定する必要があります。
*   行/列の指定したディメンションが実際の描画された要素と一致する必要があります。たとえば、グリッド セルのために行高さを大きくするテンプレートまたはクラスが定義される場合、指定した `rowHeight` 値と一致しない場合、垂直仮想化が正しく操作しません。仮想項目数が DOM の実際要素と一致しません。列およびその幅に同じ条件があります。
*   ブラウザーは現在 DOM 要素に高さの制限があります。そのため、行の高さの合計をブラウザーの高さの制限より大きくする必要があります。より大きくなる場合、`igxGrid` が正しく動作しない可能性があります。たとえば、Internet Explorer 11 の高さの制限は 1,533,916 ピクセルです。つまり、高さが 50px の行の制限は 30,678 行です。


### FAQ

#### 仮想化のためにグリッドでディメンションを設定する必要がある理由とは?

描画する前にコンテナーおよび項目のサイズの情報がない場合、グリッドでランダム位置にスクロールすると、スクロールバーの幅または高さの設定、または表示する項目の決定は正しくありません。実際のディメンションの前提がスクロールバーの変な動作になり、エクスペリエンスが悪くなります。そのため、仮想化を有効化するには、関連ディメンションを設定する必要があります。

### 追加のリソース
<div class="divider--half"></div>

* [グリッドの概要](grid.html)
* [ページング](grid_paging.html)
* [フィルタリング](grid_filtering.html)
* [並べ替え](grid_sorting.html)
* [集計](grid_summaries.html)
* [列のピン固定](grid_column_pinning.html)
* [列のサイズ変更](grid_column_resizing.html)
* [選択](grid_selection.html)

<div class="divider--half"></div>
コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)
