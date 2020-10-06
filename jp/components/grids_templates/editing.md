@@if (igxName === 'IgxGrid') {
---
title: Angular Grid 編集| データの変更 | Ignite UI for Angular| インフラジスティックス
_description: 機能豊富な Angular UI グリッドのセルデータ操作機能や Ignite UI for Angular グリッド編集機能を使用した CRUD (クラッド) をお試しください。 
_keywords: データ操作, ignite ui for angular, インフラジスティックス・ジャパン株式会社
_language: ja
---
}
@@if (igxName === 'IgxTreeGrid') {
---
title: Angular TreeGrid 編集 | データの変更 | Ignite UI for Angular
_description: 機能豊富な Angular UI グリッドのセルデータ操作機能や Ignite UI for Angular ツリー グリッド編集機能を使用した CRUD (クラッド) をお試しください。
_keywords: データ操作, ignite ui for angular, インフラジスティックス・ジャパン株式会社
_language: ja
---
}
@@if (igxName === 'IgxHierarchicalGrid') {
---
title: Angular HierarchicalGrid 編集 | データの変更 | Ignite UI for Angular
_description: 機能豊富な Angular UI グリッドのセルデータ操作機能や Ignite UI for Angular 階層グリッド編集機能を使用した CRUD (クラッド) をお試しください。
_keywords: データ操作, ignite ui for angular, インフラジスティックス・ジャパン株式会社
_language: ja
---
}

# @@igComponent 編集

Ignite UI for Angular @@igComponent コンポーネントは、レコードの作成、更新、削除などのデータ操作を簡単に実行できます。データの変更は、[セル編集](cell_editing.md)、[行編集](row_editing.md)、[一括編集](batch_editing.md)で実行できます。@@igComponent は、これらの操作をカスタマイズできる強力なパブリック API を提供します。**セル編集**モードはデフォルトで有効で、列のデータ タイプに基づいて異なるエディターが表示されます。また、[igxCellEditor](cell_editing.md#セル編集テンプレート) ディレクティブといくつかの [igxRow ディレクティブ](row_editing.md#customizing-row-editing-overlay)を使用してカスタム編集テンプレートを定義できます。

## 設定
有効にする編集モードを指定するために、@@igComponent は [`editable`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#editable) および [`rowEditable`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#roweditable) ブール値プロパティを公開します。

以下のオプションは、プロパティ **editable** で指定できます。
- **false** - 対応する列の編集は無効になります。 /デフォルト値/
- **true** - 対応する列の編集が有効になります。

>列が編集できない場合でも、@@igComponent によって公開されるパブリック API を介して値を変更できます。

以下のオプションは、プロパティ **rowEditable** で指定できます。
- **false** - 対応するグリッドの行編集は無効になります。 /デフォルト値/
- **true** - 対応するグリッドで行編集が有効になります。

@@igComponent で rowEditable プロパティを true に設定し、editable プロパティがどの列にも明示的に定義されていない場合、編集は**主キー**以外のすべての列で有効になります。

グリッドの**一括編集**は、**セル編集**モードと**行編集**モードの両方で有効にできます。一括編集を設定するには、グリッドに *TransactionService* を提供する必要があります。
- **セルおよび一括編集** - このシナリオでは、各セルの変更は個別に保持され、元に戻す/やり直し操作はセル レベルで使用できます。
- **行および一括編集** - このシナリオでは、変更は行レベルで保持されるため、元に戻す/やり直し操作は変更された各セルではなく、各行のセル全体に対して動作します。


### テンプレートの編集

 データ型固有の**編集テンプレート**を使用する場合、列 [`dataType`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#datatype) プロパティを指定する必要があります。次に各型のデフォルト テンプレートについて説明します。

 - `string` データ型ではデフォルトのテンプレートは [**igxInput**]({environment:angularApiUrl}/classes/igxinputdirective.html) を使用します。
 - `number` データ型のデフォルト テンプレートは **[igxInput]({environment:angularApiUrl}/classes/igxinputdirective.html) type="number"** を使用します。数値に解析できない値にセルを更新した場合、変更は無視されてセルの値が **0** に設定されます。
 - `date` データ型ではデフォルトのテンプレートは [**igx-date-picker**]({environment:angularApiUrl}/classes/igxdatepickercomponent.html) を使用します。
 - `boolean` データ型ではデフォルトのテンプレートは [**igx-checkbox**]({environment:angularApiUrl}/classes/igxcheckboxcomponent.html) を使用します。
 - カスタム テンプレートについては、[セル編集トピック](cell_editing.md#セル編集テンプレート)を参照してください。

## API リファレンス

* [IgxGridCellComponent]({environment:angularApiUrl}/classes/igxgridcellcomponent.html)
* [@@igxNameComponent スタイル]({environment:sassApiUrl}/index.html#function-igx-grid-theme)
@@if (igxName !== 'IgxTreeGrid') {* [IgxGridRowComponent]({environment:angularApiUrl}/classes/igxgridrowcomponent.html)}@@if (igxName === 'IgxTreeGrid') {* [IgxTreeGridRowComponent]({environment:angularApiUrl}/classes/igxtreegridrowcomponent.html)}
* [IgxInputDirective]({environment:angularApiUrl}/classes/igxinputdirective.html)
* [IgxDatePickerComponent]({environment:angularApiUrl}/classes/igxdatepickercomponent.html)
* [IgxDatePickerComponent スタイル]({environment:sassApiUrl}/index.html#function-igx-date-picker-theme)
* [IgxCheckboxComponent]({environment:angularApiUrl}/classes/igxcheckboxcomponent.html)
* [IgxCheckboxComponent スタイル]({environment:sassApiUrl}/index.html#function-igx-checkbox-theme)
* [IgxOverlay]({environment:angularApiUrl}/interfaces/overlaysettings.html)
* [IgxOverlay スタイル]({environment:sassApiUrl}/index.html#function-igx-overlay-theme)


## その他のリソース
<div class="divider--half"></div>

* [@@igComponent 概要](@@igMainTopic.md)
* [仮想化とパフォーマンス](virtualization.md)
* [ページング](paging.md)
* [フィルタリング](filtering.md)
* [ソート](sorting.md)
* [集計](summaries.md)
* [列のピン固定](column_pinning.md)
* [列のサイズ変更](column_resizing.md)
* [選択](selection.md)
@@if (igxName !== 'IgxHierarchicalGrid') {* [検索](search.md)}