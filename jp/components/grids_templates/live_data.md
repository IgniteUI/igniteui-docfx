
@@if (igxName === 'IgxGrid') {
---
title: Grid ライブ データ - ネイティブ Angular | Ignite UI for Angular
_description: Angular Data Grid の Ignite UI は、毎秒何千もの更新を処理できます。
_keywords: angular data grid, agular grid updates, angular live data
_language: ja
---
}

@@if (igxName === 'IgxTreeGrid') {
---
title: Tree Grid ライブ データ - ネイティブ Angular | Ignite UI for Angular
_description: The Ignite UI for Angular Data Grid は、毎秒数千に及ぶデータポイントの更新を処理します。
_keywords: angular data grid, agular grid updates, angular live data
_language: ja
---
}

### 更新のライブデモ
The @@igComponent component in Ignite UI for Angular is able to handle thousands of updates per seconds, while keeping the grid responsive for any interaction that the user may undertake. This sample demonstrates the @@igComponent handling thousands of updates per second and also Chart representation of data, based on Category Prices per Region. Use the `Chart` button to show data based on the `selected rows` or use the button under `Chart column` to see the same based on row `Region` value.

@@if (igxName === 'IgxGrid') {
<div class="sample-container loading" style="height:700px">
    <iframe id="grid-sample-finjs-iframe" data-src='{environment:demosBaseUrl}/finjs-sample' width="100%" height="100%" seamless="" frameborder="0" class="lazyload"></iframe>
</div>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-sample-finjs-iframe" data-demos-base-url="{environment:demosBaseUrl}">stackblitz で表示</button>
</div>

## API リファレンス
* [IgxGridComponent]({environment:angularApiUrl}/classes/igxgridcomponent.html)
* [IgxGridComponent Styles]({environment:sassApiUrl}/#function-igx-grid-theme)
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
* [列移動](column_moving.md)
* [列のピン固定](column_pinning.md)
* [列のサイズ変更](column_resizing.md)
* [選択](selection.md)

<div class="divider--half"></div>
コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
}

@@if (igxName === 'IgxTreeGrid') {
<div class="sample-container loading" style="height:700px">
    <iframe id="grid-sample-finjs-iframe" data-src='{environment:demosBaseUrl}/treegrid-finjs-sample' width="100%" height="100%" seamless="" frameborder="0" class="lazyload"></iframe>
</div>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-sample-finjs-iframe" data-demos-base-url="{environment:demosBaseUrl}">stackblitz で表示</button>
</div>

## API リファレンス

<div class="divider--half"></div>

* [IgxTreeGridComponent]({environment:angularApiUrl}/classes/igxtreegridcomponent.html)
* [IgxTreeGridCellComponent]({environment:angularApiUrl}/classes/igxtreegridcellcomponent.html)
* [IgxTreeGridRowComponent]({environment:angularApiUrl}/classes/igxtreegridrowcomponent.html)
* [IgxGridComponent]({environment:angularApiUrl}/classes/igxgridcomponent.html)
* [IgxGridComponent Styles]({environment:sassApiUrl}/#function-igx-grid-theme)
* [IgxGridCellComponent]({environment:angularApiUrl}/classes/igxgridcellcomponent.html)
* [IgxGridRowComponent]({environment:angularApiUrl}/classes/igxgridrowcomponent.html)
* [IgxBaseTransactionService]({environment:angularApiUrl}/classes/igxbasetransactionservice.html)


## その他のリソース

<div class="divider--half"></div>

* [データ グリッド](../grid/grid.md)
* [行編集](row_editing.md)

<div class="divider--half"></div>
コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語) ](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語) ](https://github.com/IgniteUI/igniteui-angular)

}