<style>
    /* Fix for the overlapping right side-affix when the screen is shrinked */
    .table-responsive {
        width:63vw;
    }
</style>

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

Ignite UI for Angular @@igComponent コンポーネントは、レコードの作成、更新、削除などのデータ操作を簡単に実行できます。データの変更のフェーズは次のとおりです: [セル編集](cell-editing.md)、[行編集](row-editing.md)、および[一括編集](batch-editing.md)。@@igComponent は、これらの操作をカスタマイズできる強力なパブリック API を提供します。さらに、**セル編集**は、列のデータ型に基づいていくつかのデフォルト エディターを公開します。これらは、[igxCellEditor ディレクティブ](cell-editing.md#セル編集テンプレート)または [igxRow ディレクティブ](row-editing.md#行編集オーバーレイのカスタマイズ)を介して簡単にカスタマイズできます。 

## 設定
有効にする編集モードを指定するために、@@igComponent は [`editable`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#editable) および [`rowEditable`]({environment:angularApiUrl}/classes/igxgridcomponent.html#roweditable) ブール値プロパティを公開します。

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

 - `string` データ型の場合、デフォルトのテンプレートは [igxInput]({environment:angularApiUrl}/classes/igxinputdirective.html) を使用します。
 - `number` データ型のデフォルト テンプレートは [igxInput]({environment:angularApiUrl}/classes/igxinputdirective.html) type="number" を使用します。数値に解析できない値にセルを更新した場合、変更は無視されてセルの値が 0 に設定されます。
 - `date` データ型ではデフォルトのテンプレートは [igxDatePicker]({environment:angularApiUrl}/classes/igxdatepickercomponent.html) を使用します。
 - `dateTime` データ型の場合、デフォルトのテンプレートは [IgxDateTimeEditor directive]({environment:angularApiUrl}/classes/igxdatetimeeditordirective.html) を使用しています。このエディターは、DateTime オブジェクトの入力要素部分のマスク方向を提供します。
 - `date` データ型の場合、デフォルトのテンプレートは [IgxDatePicker component]({environment:angularApiUrl}/classes/igxdatepickercomponent.html) を使用しています。
 - `time` データ型の場合、デフォルトのテンプレートは [IgxTimePicker component]({environment:angularApiUrl}/classes/igxtimepickercomponent.html) を使用しています。
- `boolean` データ型ではデフォルトのテンプレートは [igxCheckbox]({environment:angularApiUrl}/classes/igxcheckboxcomponent.html) を使用します。
 - `currency` データ型の場合、デフォルトのテンプレートは、アプリケーションまたはグリッドのロケール設定に基づいたプレフィックス/サフィックス構成の [IgxInputGroup]({environment:angularApiUrl}/classes/igxinputgroupcomponent.html) を使用します。
 - `percent` パーセント データ型の場合、デフォルトのテンプレートは、編集された値のプレビューをパーセントで表示するサフィックス要素を持つ [IgxInputGroup]({environment:angularApiUrl}/classes/igxinputgroupcomponent.html) を使用します。 
- カスタム テンプレートについては、[セル編集トピック](cell-editing.md#セル編集テンプレート)を参照してください。

すべての利用可能な列データ型は、公式の[列タイプ トピック](column-types.md#デフォルトのテンプレート)にあります。

### イベントの引数とシーケンス
グリッドは、編集エクスペリエンスをより詳細に制御できる広範なイベントを公開します。これらのイベントは、[**行の編集**](row-editing.md)および[**セルの編集**](cell-editing.md)のライフサイクル - 編集の開始、コミット、またはキャンセル時に発生します。

 | イベント | 説明 | 引数 | キャンセル可能 |
|-------|-------------|-----------|-------------|
| [`rowEditEnter`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#rowEditEnter) | `rowEditing` が有効な場合、行が編集モードに入るときに発生します。 | [IGridEditEventArgs]({environment:angularApiUrl}/interfaces/igridediteventargs.html) | `true` |
| [`cellEditEnter`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#cellEditEnter) | セルが**編集モードに入る**ときに発生します (`rowEditEnter` の後)。| [IGridEditEventArgs]({environment:angularApiUrl}/interfaces/igridediteventargs.html) | `true` |
| [`cellEdit`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#cellEdit) | 値が変更された場合、セルの値が**コミットされた前に**発生します (`Enter` の押下など)。| [IGridEditEventArgs]({environment:angularApiUrl}/interfaces/igridediteventargs.html) | `true` |
| [`cellEditDone`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#celleditdone) | 値が変更された場合、セルが編集され、セルの値が**コミットされた後に**発生します。| [IGridEditDoneEventArgs]({environment:angularApiUrl}/interfaces/igrideditdoneeventargs.html) | `false` |
| [`cellEditExit`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#cellEditExit) | セルが**編集モードを終了した**ときに発生します。| [IGridEditDoneEventArgs]({environment:angularApiUrl}/interfaces/igridediteventargs.html) | `false` |
| [`rowEdit`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#rowedit) | `rowEditing` が有効な場合、編集モードの値の行が**コミットされた前に**発生します (行編集オーバーレイの`完了`ボタンをクリックなど)。| [IGridEditEventArgs]({environment:angularApiUrl}/interfaces/igridediteventargs.html) | `true` |
| [`rowEditDone`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#roweditdone) |`rowEditing`が有効な場合、行が編集され、新しい行の値が**コミットされた後に**発生します。| [IGridEditDoneEventArgs]({environment:angularApiUrl}/interfaces/igridediteventargs.html) | `false` |
| [`rowEditExit`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#rowEditExit) |`rowEditing`が有効な場合、行が**編集モードを終了した**ときに発生します。| [IGridEditDoneEventArgs]({environment:angularApiUrl}/interfaces/igridediteventargs.html) | `false` |

### イベントのキャンセル
 - `RowEditEnter` - 行もセルも編集モードに入りません。
 - `CellEditEnter` - セル編集に入ることを防止します。[`rowEditable`]({environment:angularApiUrl}/classes/igxgridcomponent.html#roweditable) が有効になっている場合、セル編集は禁止されたままですが、行編集がトリガーされます。
 - `CellEdit` - セル/行の編集を許可し、**[完了]** ボタンまたは **[Enter]** を押しても値または行のトランザクションはコミットされません。**[キャンセル]** ボタンをクリックするまで、セル編集と行編集は閉じません。
 - `RowEdit` - 行全体ではなくセルのコミットは可能です。行は編集モードのままになり、行トランザクションは開いていると見なされます。**[完了]** を押しても、行をコミットまたは閉じません。**[キャンセル]** ボタンは、変更をコミットせずに編集プロセスとトランザクションを閉じます。

以下のサンプルは、実行中の編集実行シーケンスを示しています:
@@if (igxName === 'IgxGrid') {

<code-view style="height:650px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/grid/grid-editing-lifecycle" >
</code-view>

}
@@if (igxName === 'IgxTreeGrid') {

<code-view style="height:650px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/tree-grid/tree-grid-editing-lifecycle" >
</code-view>

}
@@if (igxName === 'IgxHierarchicalGrid') {

<code-view style="height:650px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/hierarchical-grid/hGrid-editing-lifecycle" >
</code-view>

}

### 機能の統合
セル/行が編集モードの場合、ユーザーはさまざまな方法でグリッドを操作できます。以下のテーブルは、特定の操作が現在の編集にどのように影響するかを示しています。

| @@igComponent     | フィルタリング  | ソート | ページング | 移動 | ピン固定 | 非表示 | グループ化 | サイズ変更 | Escape | Enter | F2 | Tab | セル クリック | 新しい行の追加/削除/編集 |
| ----------------- |:---------:|:-------:|:------:|:------:|:-------:|:------:|:-------:|:--------:|:------:|:-----:|:--:|:---:|:----------:|:-----------------------:|
| 編集モードを保持    |           |      |   |   |   |   |   | ✔ |   |   |   |   |   |   |
| 編集モードを終了    |✔         | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ |   | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ |
| コミット            |   |   |  |  |  |   |   |   |  | ✔ | ✔ | ✔ | ✔ | ✔ |
| 破棄        | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ |✔ |   | ✔  |  |   |   |   |  |

テーブルからわかるように、列のサイズ変更を除くすべての操作は編集を終了し、新しい値を破棄します。新しい値がコミットされる場合、対応する機能の '-ing' イベントで開発者が実行できます。

たとえば、ユーザーがセル/行が編集モードのときに列をソートしようとする場合に、新しい値をコミットする方法:

```html
<igx-grid #grid [data]="localData" [primaryKey]="'ProductID'" (sorting)="onSorting($event)">
...
</igx-grid>
```

```typescript
public onSorting(event: ISortingEventArgs) {
    this.grid.endEdit(true);
    // (event.owner as IgxGridComponent).endEdit(true);
}
```

## API リファレンス

* [IgxGridCell]({environment:angularApiUrl}/classes/igxgridcell.html)
* [@@igxNameComponent スタイル]({environment:sassApiUrl}/index.html#function-igx-grid-theme)
@@if (igxName !== 'IgxTreeGrid') {* [IgxGridRow]({environment:angularApiUrl}/classes/igxgridrow.html)}@@if (igxName === 'IgxTreeGrid') {* [IgxTreeGridRow]({environment:angularApiUrl}/classes/igxtreegridrow.html)}
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
* [列のデータ型](column-types.md#デフォルトのテンプレート)
* [仮想化とパフォーマンス](virtualization.md)
* [ページング](paging.md)
* [フィルタリング](filtering.md)
* [ソート](sorting.md)
* [集計](summaries.md)
* [列のピン固定](column-pinning.md)
* [列のサイズ変更](column-resizing.md)
* [選択](selection.md)
@@if (igxName !== 'IgxHierarchicalGrid') {* [検索](search.md)}
