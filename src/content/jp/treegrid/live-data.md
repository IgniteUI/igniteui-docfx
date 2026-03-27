---
title: Angular Tree Grid のライブ データ更新 - Ignite UI for Angular
_description: Ignite UI for Angular Tree Grid が、ユーザーの操作に応答し続けている間、1 秒あたり数千の更新を処理する方法を確認します。
_keywords: angular データ グリッド, angular グリッド更新, angular ライブ データ
_license: commercial
_language: ja
---


# Angular Tree Grid のライブ データ更新

Tree Grid コンポーネントは、ユーザーの操作に応答し続けている間、1 秒あたり数千の更新を処理できます。

## Angular ライブ データ更新の例

以下のサンプルは、すべてのレコードが 1 秒間に複数回更新される場合の Tree Grid のパフォーマンスを示しています。UI コントロールを使用して、読み込むレコードの数と更新の頻度を選択します。
同じデータを[カテゴリ チャート](../category-chart.md)に入力して、Ignite UI forAngular の強力なチャート作成機能を体験してください。`Chart` ボタンには、選択した行の `Category Prices per Region` データが表示され、`Chart` 列ボタンには現在の行の同じデータが表示されます。




<code-view style="height:700px"
           data-demos-base-url="{environment:lobDemosBaseUrl}"
           iframe-src="{environment:lobDemosBaseUrl}/treegrid-finjs/" alt="Angular 更新のライブデ例">
</code-view>


## API リファレンス

<div class="divider--half"></div>

- [IgxTreeGridComponent]({environment:angularApiUrl}/classes/igxtreegridcomponent.html)
- [IgxGridCell]({environment:angularApiUrl}/classes/igxgridcell.html)
- [IgxTreeGridRow]({environment:angularApiUrl}/classes/igxtreegridrow.html)
- [IgxGridComponent]({environment:angularApiUrl}/classes/igxgridcomponent.html)
- [IgxGridComponent スタイル]({environment:sassApiUrl}/themes#function-grid-theme)
- [IgxGridCell]({environment:angularApiUrl}/classes/igxgridcell.html)
- [IgxBaseTransactionService]({environment:angularApiUrl}/classes/igxbasetransactionservice.html)


## その他のリソース

<div class="divider--half"></div>

- [データ グリッド](../grid/grid.md)
- [行編集](row-editing.md)

<div class="divider--half"></div>
コミュニティに参加して新しいアイデアをご提案ください。

- [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
- [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)


