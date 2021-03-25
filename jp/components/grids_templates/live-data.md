
@@if (igxName === 'IgxGrid') {
---
title: Grid ライブ データ - ネイティブ Angular | Ignite UI for Angular | インフラジスティックス
_description: Ignite UI for Angular Data Grid が、ユーザーの操作に応答し続けている間、1 秒あたり数千の更新を処理する方法を確認します。
_keywords: angular データ グリッド, angular グリッド更新, angular ライブ データ
_language: ja
---
}

@@if (igxName === 'IgxTreeGrid') {
---
title: Tree Grid ライブ データ - ネイティブ Angular | Ignite UI for Angular | インフラジスティックス
_description: Ignite UI for Angular Tree Grid が、ユーザーの操作に応答し続けている間、1 秒あたり数千の更新を処理する方法を確認します。
_keywords: angular データ グリッド, angular グリッド更新, angular ライブ データ
_language: ja
---
}

# Data @@igComponent ライブ更新
@@igComponent コンポーネントは、ユーザーの操作に応答し続けている間、1 秒あたり数千の更新を処理できます。

## Angular ライブ データ更新の例
以下のサンプルは、すべてのレコードが 1 秒間に複数回更新される場合の @@igComponent のパフォーマンスを示しています。UI コントロールを使用して、読み込むレコードの数と更新の頻度を選択します。
同じデータを[カテゴリ チャート](../category-chart.md)に入力して、Ignite UI forAngular の強力なチャート作成機能を体験してください。`Chart` ボタンには、選択した行の `Category Prices per Region` データが表示され、`Chart` 列ボタンには現在の行の同じデータが表示されます。
@@if (igxName === 'IgxGrid') {

<code-view style="height:700px" 
           data-demos-base-url="{environment:lobDemosBaseUrl}" 
           iframe-src="{environment:lobDemosBaseUrl}/grid-finjs" alt="Angular 更新のライブデ例">
</code-view>


## データ バインディングおよび更新
サービスは、ページが読み込まれたとき、およびスライダー コントローラーを使用して特定の数のレコードを取得したときに、コンポーネントにデータを提供します。実際のシナリオでは、更新されたデータはサービスから消費されますが、ここではデータはコードで更新されます。これは、デモをシンプルに保ち、その主な目標であるグリッドのパフォーマンスを実証するために行われます。
```html
<igx-grid #grid [data]="data" ...></igx-grid>
```
```typescript
public ngOnInit() {
    this.localService.getData(this.volume);
    this.volumeSlider.onValueChange.subscribe(x => this.localService.getData(this.volume);
    this.localService.records.subscribe(x => { this.data = x; });
}
```

Angular パイプは、グリッド ビューを更新するために内部的に使用されます。データ フィールド値の変更またはデータ オブジェクト/データ コレクション参照の変更により、対応するパイプがトリガーされます。ただし、これは[`複合データ オブジェクト`](grid.md#複雑なデータ-バインディング)にバインドされている列には当てはまりません。これは、Angular の純粋パイプがネストされたプロパティの変更を検出しないためです。この状況を解決するには、プロパティを含むデータ オブジェクトの新しいオブジェクト参照を提供します。例:

```html
<igx-grid #grid [data]="data" ...>
    <igx-column field="price.usd"></igx-column>
</igx-grid>
```
```typescript
private updateData(data: IRecord[]) {
    const newData = []
    for (const rowData of data) {
        rowData.price = { usd: getUSD(), eur: getEUR() };
        newData.push({...rowData});
    }
    this.grid.data = newData;
}
```

## テンプレート
ビューの更新は、デフォルト テンプレートの列とカスタム テンプレートの列で同じように機能します。ただし、カスタム テンプレートは比較的単純にしておくことをお勧めします。テンプレート内の要素の数が増えると、パフォーマンスへの悪影響も大きくなります。

## API リファレンス
* [IgxGridComponent]({environment:angularApiUrl}/classes/igxgridcomponent.html)
* [IgxGridComponent スタイル]({environment:sassApiUrl}/#function-igx-grid-theme)
* [IgxColumnComponent]({environment:angularApiUrl}/classes/igxcolumncomponent.html)
* [IgxGridRowComponent]({environment:angularApiUrl}/classes/igxgridrowcomponent.html)
* [IgxGridCellComponent]({environment:angularApiUrl}/classes/igxgridcellcomponent.html)

## その他のリソース
<div class="divider--half"></div>

* [仮想化とパフォーマンス](virtualization.md)
* [ページング](paging.md)
* [フィルタリング](filtering.md)
* [ソート](sorting.md)
* [集計](summaries.md)
* [列移動](column-moving.md)
* [列のピン固定](column-pinning.md)
* [列のサイズ変更](column-resizing.md)
* [選択](selection.md)

<div class="divider--half"></div>
コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語) ](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語) ](https://github.com/IgniteUI/igniteui-angular)
}

@@if (igxName === 'IgxTreeGrid') {

<code-view style="height:700px" 
           data-demos-base-url="{environment:lobDemosBaseUrl}" 
           iframe-src="{environment:lobDemosBaseUrl}/treegrid-finjs" alt="Angular 更新のライブデ例">
</code-view>


## API リファレンス

<div class="divider--half"></div>

* [IgxTreeGridComponent]({environment:angularApiUrl}/classes/igxtreegridcomponent.html)
* [IgxTreeGridCellComponent]({environment:angularApiUrl}/classes/igxtreegridcellcomponent.html)
* [IgxTreeGridRowComponent]({environment:angularApiUrl}/classes/igxtreegridrowcomponent.html)
* [IgxGridComponent]({environment:angularApiUrl}/classes/igxgridcomponent.html)
* [IgxGridComponent スタイル]({environment:sassApiUrl}/#function-igx-grid-theme)
* [IgxGridCellComponent]({environment:angularApiUrl}/classes/igxgridcellcomponent.html)
* [IgxGridRowComponent]({environment:angularApiUrl}/classes/igxgridrowcomponent.html)
* [IgxBaseTransactionService]({environment:angularApiUrl}/classes/igxbasetransactionservice.html)


## その他のリソース

<div class="divider--half"></div>

* [データ グリッド](../grid/grid.md)
* [行編集](row-editing.md)

<div class="divider--half"></div>
コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語) ](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語) ](https://github.com/IgniteUI/igniteui-angular)

}