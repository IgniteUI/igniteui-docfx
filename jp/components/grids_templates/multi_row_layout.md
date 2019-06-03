﻿---	
title: Grid - 複数行レイアウト - ネイティブ Angular | Ignite UI for Angular	
_description: 複数行レイアウトでは、列をより柔軟な方法で配置およびサイズ変更できます。各列のレイアウトは、列フィールドで構成されるすべてのグリッド レイアウトを表しています。	
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スイート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, Angular Grid, Angular Table, Angular Data Grid コンポーネント, Angular Data Table コンポーネント, Angular Data Grid コントロール, Angular Data Table コントロール, Angular Grid コンポーネント, Angular Table コンポーネント, Angular Grid コントロール, Angular Table コントロール, Angular 高パフォーマンス Grid, Angular 高パフォーマンス Data Table, Multi Row Layout, Angular Multi Row Layout, Angular Data Table Multi Row Layout, Grid Layout, Angular Grid Layout, Column Layout, ColumnLayout, igxColumnLayout	
_language: ja	
---	
 ### 複数行レイアウト	
 Multi Row Layout は、`igxGridComponent` のレンダリング機能を拡張します。この機能により、単一のデータレコードを複数の表示行に分割することができます。	
 #### デモ	

 <div class="sample-container loading" style="height:755px">	
    <iframe id="grid-multi-row-layout-iframe" src='{environment:demosBaseUrl}/grid/grid-multi-row-layout' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>	
</div>	
<br/>	
<div>	
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-multi-row-layout-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>	
</div>	


 複数行レイアウトの宣言は、[`igx-column-layout`]({environment:angularApiUrl}/classes/igxcolumnlayoutcomponent.html) コンポーネントによって実現されます。各 `igx-column-layout` コンポーネントは、単一または複数の `igx-column` コンポーネントを含むブロックと見なします。一部のグリッド機能はブロック レベルで機能します (下記の「機能の統合」セクション参照)。たとえば、仮想化ではブロックを使用して仮想チャンクを決定します。そのため、レイアウトで許容される場合は、パフォーマンスを向上させるために列を更に `igx-column-layout` ブロックに分割します。複数行のレイアウトを設定するときは、これらのブロックの外側に列がなく、`IgxColumnGroupComponent` を使用しないでください。Multi Row Layout は、[グリッド レイアウト](https://www.w3.org/TR/css-grid-1/)仕様上に実装されており、その要件に準拠する必要があります。	
 `IgxColumnComponent` は各セルの位置と範囲を決めるために 4 つの `@Input` プロパティを公開しています。	
* [`colStart`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#colstart) - フィールドの開始位置となる列インデックス。このプロパティは**必須**です。	
* [`rowStart`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#rowstart) - フィールドの開始位置となる行インデックス。このプロパティは**必須**です。
* [`colEnd`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#colend) - 現在のフィールドが終了する位置の列インデックス。colStart と colEnd の間の列数によって、そのフィールドまでの列の幅が決まります。このプロパティは**オプション**です。設定されていない場合は、デフォルトで 1 に設定されます。	
* [`rowEnd`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#rowend) - 現在のフィールドが終了する行インデックス。rowStart と rowEnd の間の行数によって、そのフィールドにまたがる行数が決まります。このプロパティは**オプション**です。設定されていない場合は、デフォルトで `rowStart + 1` に設定されます。	


 ```html	
<igx-column-layout>	
	<igx-column [rowStart]="1" [colStart]="1" [rowEnd]="3" field="ID"></igx-column>	
</igx-column-layout>	
<igx-column-layout>	
	<igx-column [rowStart]="1" [colStart]="1" [colEnd]="3" field="CompanyName"></igx-column>	
	<igx-column [rowStart]="2" [colStart]="1" [colEnd]="2" field="ContactName"></igx-column>	
	<igx-column [rowStart]="2" [colStart]="2" [colEnd]="3" field="ContactTitle"></igx-column>	
</igx-column-layout>	
<igx-column-layout>	
	<igx-column [rowStart]="1" [colStart]="1" [colEnd]="3" field="Country"></igx-column>	
	<igx-column [rowStart]="1" [colStart]="3" [colEnd]="5" field="Region"></igx-column>	
	<igx-column [rowStart]="1" [colStart]="5" [colEnd]="7" field="PostalCode"></igx-column>	
	<igx-column [rowStart]="2" [colStart]="1" [colEnd]="4" field="City"></igx-column>	
	<igx-column [rowStart]="2" [colStart]="4" [colEnd]="7" field="Address"></igx-column>	
</igx-column-layout>	
<igx-column-layout>	
		<igx-column [rowStart]="1" [colStart]="1" field="Phone"></igx-column>	
		<igx-column [rowStart]="2" [colStart]="1" field="Fax"></igx-column>	
</igx-column-layout>	
```	

 上記の設定の結果は、以下のスクリーンショットで確認できます。	

 <img src="../../images/multi-row-layout-1.png" style="width: 100%"/>	


> [!Note]	
> [`rowStart`]({environment：angularApiUrl} /classes/igxcolumncomponent.html#colstart) プロパティは、それぞれの `igx-column` に対して`igx-column-layout` に設定する必要があります。`igxColumnLayout` コンポーネントはレイアウトが正しいかどうかを検証しておらず、それについてエラーや警告を投げていません。 開発者は、自分のレイアウトの宣言が正しく完全であることを確認する必要があります。そうしないと、誤った配置、オーバーラップ、ブラウザの不整合などが発生し、壊れたレイアウトになる可能性があります。	

 ### 機能の統合	
Multi Row Layout のレンダリング方法は全く異なるため、列固定や列非表示など一部の列機能は `igx-column-layout` コンポーネントでのみ機能します。  その他の機能ソートとグループ化などは、`igx-column` コンポーネントで同じように機能します。	
- フィルタリング - Excel スタイルのフィルタリングのみがサポートされています。`filterMode` を `FilterMode.quickFilter` に明示的に設定しても効果はありません。	
- ページング - 表示行ではなくレコードで機能します。	
- Group By - `hideGroupedColumns` オプションは、Multi Row Layout では効果がありません。グループ化された列は常に表示されます。	

 以下の機能は現在サポート**されません**。	
- 列移動 	
- 複数列ヘッダー	
- Excel へエクスポート	
- 集計	

 ### キーボード ナビゲーション	

IgxGridComponent with Multi-Row Layouts provides build-in keyboard navigation.

#### TAB navigation
* <kbd>TAB</kbd> and <kbd>Shift</kbd> + <kbd>TAB</kbd> - move to the next/previous cell from left to right row after row unaffected by the column groups/blocks that are defined.  The navigation is done through the cells once for each row, meaning that it should skip cell if doesn't have the same `rowStart` as the currently selected cell. And each cell from the row will be selected only once. When the row is in edit mode, the navigation is restricted to the cells into that row and to the CANCEL and DONE buttons.

#### Horizontal nagivation
* <kbd>Arrow Left</kbd> or <kbd>Arrow Right</kbd> - move to the adjacent cell on the left/right within the current row unaffected by the column groups/blocks that are defined. If the current cell spans on more than one row, <kbd>Arrow Left</kbd> and <kbd>Arrow Right</kbd> should navigate to the first cell on the left and right with the same `rowStart`, unless you have navigated to some other adjacent cell before. The navigation stores the starting navigation cell and navigates to the cells with the same `rowStart` if possible.
* <kbd>Ctrl</kbd> + <kbd>Arrow Left</kbd> (<kbd>HOME</kbd>) or <kbd>Ctrl</kbd> + <kbd>Arrow Right</kbd> (<kbd>END</kbd>) - navigate to the start or end of the row and select the cell with accordance to the starting navigation cell.


#### Vertical nagivation
* <kbd>Arrow Up</kbd> or <kbd>Arrow Down</kbd> - move to the cell above/below in relation to a starting position and is unaffected by the rows. If the current cell spans on more than one column the next active cell will be chosen with accordance to the starting navigation cell.
* <kbd>Ctrl</kbd> + Arrow Up</kbd> or <kbd>Ctrl</kbd> + <kbd>Down</kbd> - Navigates and selects the same column field on the first or on the last row.
* <kbd>Ctrl</kbd> + <kbd>Home</kbd> or <kbd>Ctrl</kbd> + <kbd>End</kbd> - should navigate to the first row and selects first cell or navigates to the last row and selects the last cell.
	
	
> [!Note]
> Navigation though cells which span on multiple rows or columns is done with accordance to the starting navigation cell. And will allow returning to the starting cell with the key for the opposite direction. The same approach is used when navigating through group rows.

> [!Note]
> Selection and multi cell selection are working on blocks. Meaning that when a cell is active, its layout will be selected. Also all features of multiple selection like drag selection are applicable and will work per layout not per cell.

 ### API リファレンス	
<div class="divider--half"></div>	

* [@@igxNameComponent]({environment:angularApiUrl}/classes/@@igTypeDoc.html)
* [@@igxNameComponent スタイル]({environment:sassApiUrl}/index.html#function-igx-grid-theme)
* [IgxColumnLayoutComponent]({environment:angularApiUrl}/classes/igxcolumnlayoutcomponent.html)
* [IgxColumnComponent]({environment:angularApiUrl}/classes/igxcolumncomponent.html)
<div class="divider--half"></div>	

 ### その他のリソース	
<div class="divider--half"></div>

* [@@igComponent 概要](@@igMainTopic.md)	
* [仮想化とパフォーマンス](virtualization.md)	
* [ページング](paging.md)	
* [並べ替え](sorting.md)	
* [列のサイズ変更](column_resizing.md)	
* [選択](selection.md)	

 <div class="divider--half"></div>	
コミュニティに参加して新しいアイデアをご提案ください。
	
* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)	
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)