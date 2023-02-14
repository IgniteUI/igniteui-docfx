---
title: 複数選択の階層ドロップダウン - Ignite UI for Angular
_description: Ignite UI を使用して複数選択ツリー スタイルの階層ドロップダウンを作成する方法について説明します。
_keywords: 複数選択ドロップダウン, 階層選択, ignite ui for angular, infragistics, インフラジスティックス
_language: ja
---

# 複数選択の階層ドロップダウン

次のサンプルは、ユーザーがツリー スタイルの階層ドロップダウン リストから 1 つまたは複数のオプションを選択できるようにする複数選択の階層ドロップダウンを作成する方法を示しています。

## トピックの概要

ドロップダウン リストには、[IgxDropDownComponent]({environment:angularApiUrl}/classes/igxdropdowncomponent.html) とドロップダウンを開閉するための [IgxToggleActionDirective]({environment:angularApiUrl}/classes/igxtoggleactiondirective.html) を使用する予定です。

ドロップダウンで階層データを視覚化するには、[IgxTreeComponent]({environment:angularApiUrl}/classes/igxtreecomponent.html) または [IgxTreeGridComponent]({environment:angularApiUrl}/classes/igxtreegridcomponent.html) のいずれかを使用できます。

[`IgxChipComponent`]({environment:angularApiUrl}/classes/igxchipcomponent.html) は、選択した項目を表示するために使用されます。

## 選択

リストから選択したノード/行を表示するには、選択の変更を通知するイベントを処理して [`IgxChipComponent`]({environment:angularApiUrl}/classes/igxchipcomponent.html) を使用し、`selectedNodes` / `selectedRows` 配列を設定します。これは、IgxTreeComponent の [`nodeSelection`]({environment:angularApiUrl}/classes/igxtreecomponent.html#nodeSelection) イベントと IgxTreeGridComponent の [`rowSelectionChanging`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html#rowSelectionChanging) イベントをサブスクライブすることで実行できます。

DOM からチップを削除し、ツリー/グリッドから項目を選択解除するには、IgxChipComponent の [`remove`]({environment:angularApiUrl}/classes/igxchipcomponent.html#remove) イベントを処理する必要があります。

さらに、チップの削除時にドロップダウンが閉じないようにする方法は、イベントの複合パスで `igx-chip` ノードを確認し、`IgxDropDownComponent` の [`closing`]({environment:angularApiUrl}/classes/igxdropdowncomponent.html#closing) イベント ハンドラーでイベントをキャンセルすることです。

### デモ
<code-view style="height: 560px;" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/data-entries/dropdown-tree-hierarchical-selection" >
</code-view>

<code-view style="height:560px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/data-entries/dropdown-tree-grid-hierarchical-selection">
</code-view>


## API リファレンス

* [IgxDropDownComponent]({environment:angularApiUrl}/classes/igxdropdowncomponent.html)
* [IgxChipComponent]({environment:angularApiUrl}/classes/igxchipcomponent.html)
* [IgxChipsAreaComponent]({environment:angularApiUrl}/classes/igxchipsareacomponent.html)
* [IgxTreeComponent]({environment:angularApiUrl}/classes/igxtreecomponent.html)
* [IgxTreeNodeComponent]({environment:angularApiUrl}/classes/igxtreenodecomponent.html)
* [IgxTreeGridComponent]({environment:angularApiUrl}/classes/igxtreegridcomponent.html)

## その他のリソース
<div class="divider--half"></div>    

* [Drop Down の概要](drop-down.md)
* [Chip の概要](chip.md)
* [Tree の概要](tree.md)
* [Tree Grid の概要](treegrid/tree-grid.md)

<div class="divider--half"></div>
コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)    
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)     
