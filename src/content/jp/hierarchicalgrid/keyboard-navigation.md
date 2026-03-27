---
title: Angular Hierarchical Grid のキーボード ナビゲーション - Ignite UI for Angular
_description: Ignite UI for Angular で Hierarchical Grid キーボード ナビゲーションを使用する方法を説明します。キーボード インタラクションでは、セル、行、列を簡単に移動できます。
_keywords: keyboard navigation, ignite ui for angular, infragistics, キーボード ナビゲーション, インフラジスティックス
_license: commercial
_language: ja
---


# Angular Hierarchical Grid キーボード ナビゲーション

**IgxHierarchicalGrid** のキーボード ナビゲーションは、さまざまなキーボード操作をユーザーに提供します。これにより **IgxHierarchicalGrid** のアクセシビリティが向上し、内部の要素 (セル、行、列ヘッダー、ツールバー、フッターなど) をナビゲートできるようになります。この機能はデフォルトで有効になっています。デフォルトの動作を簡単にオーバーライドするオプションがあります。

IgxHierarchicalGrid のタブが削減され、ナビゲーションが W3C のアクセシビリティ標準に準拠し、使いやすくなりました。

現在、IgxHierarchicalGrid には以下のタブ位置が導入されています。
- **GroupBy または ツールバーの領域** (有効な場合)
- **IgxHierarchicalGrid ヘッダー**
- **IgxHierarchicalGrid 本体**
- **列集計** (有効な場合)
- **IgxHierarchicalGrid ページネーター** (有効な場合)

>[!NOTE]
> この動作変更のため、<kbd>Tab</kbd> と <kbd>Shift + Tab</kbd> キーでセル間を移動することは IgxHierarchicalGrid でサポートされなくなりました。
> <kbd>Tab</kbd>キーを押すと、**グループ化** / **ツール バー** -> **ヘッダー** -> **本体** -> **集計** -> **フッター / ページネーター** の順序にタブ位置を移動します。

>[!NOTE]
> テンプレートによって**フォーカス可能な**要素を **IgxHierarchicalGrid** の本体に公開すると、ブラウザのデフォルトの動作が防止されていないため、**予期されない結果**が発生する可能性があります。
> したがって、それを適切に**防止/変更する**のは開発者の責任です。

## ヘッダー ナビゲーション

**IgxHierarchicalGrid** ヘッダーのキーボード ナビゲーションが完全にサポートされるようになりました。列ヘッダーは矢印キーで簡単にトラバースできます。さらに、**フィルタリング**、**ソート**、**グループ化**などの列操作をトリガーするキーの組み合わせがいくつかあります。
**IgxHierarchicalGrid** ヘッダー コンテナーがフォーカスされている場合、以下のキー組み合わせを使用できます。

### キーの組み合わせ

- <kbd>上矢印</kbd> - ヘッダーで 1 つ上のセルへ移動 (ループなし); 複数行レイアウトまたは複数列ヘッダーが定義されている場合のみ使用できます。
- <kbd>下矢印</kbd> - ヘッダーの 1 つ下のセルに移動 (ラッピングなし); 複数行レイアウトまたは複数列ヘッダーが定義されている場合のみ使用できます。
- <kbd>左矢印</kbd> - 1 つ左のセルへ移動 (ループなし)
- <kbd>右矢印</kbd> - 1 つ右のセルへ移動 (行間のラッピングなし)
- <kbd>Ctrl + 左矢印</kbd> - 行の左端のセルへ移動; 複数行レイアウトまたは複数列ヘッダーが有効な場合、同じレベルの左端のセルへ移動
- <kbd>Home</kbd> - 行の左端のセルへ移動; 複数行レイアウトまたは複数列ヘッダーが有効な場合、同じレベルの左端のセルへ移動
- <kbd>Ctrl + 右矢印</kbd> - 行の右端のセルへ移動; 複数行レイアウトまたは複数列ヘッダーが有効な場合、同じレベルの右端のセルへ移動
- <kbd>End</kbd> - 行の右端のセルへ移動; 複数行レイアウトまたは複数列ヘッダーが有効な場合、同じレベルの右端のセルへ移動
- <kbd>Alt + L</kbd> - 詳細フィルタリングが有効な場合、詳細フィルタリング ダイアログを開きます。
- <kbd>Ctrl + Shift + L</kbd> - 列がフィルター可能な場合、Excel スタイル フィルターまたはデフォルト (行) フィルターを開きます。
- <kbd>Ctrl + Arrow Up</kbd> - アクティブな列ヘッダーを昇順にソートします。列が昇順で既にソートされている場合、ソート状態を削除します。
- <kbd>Ctrl + Arrow Down</kbd> - アクティブな列ヘッダーを降順にソートします。列が降順で既にソートされている場合、ソート状態を削除します。
- <kbd>Space</kbd> - 列を選択します。列がすでに選択されている場合、選択を解除します。


## 本体ナビゲーション

**IgxHierarchicalGrid** 本体がフォーカスされている場合、以下のキー組み合わせを使用できます。

### キーの組み合わせ

- <kbd>上矢印</kbd> - 1 つ上のセルへ移動 、必要に応じてグリッド階層の 1 つ上のレベルへ移動 (ラッピングなし)
- <kbd>下矢印</kbd> - 1 つ下のセルへ移動 、必要に応じてグリッド階層の 1 つ下のレベルへ移動  (ラッピングなし)
- <kbd>左矢印</kbd> - 1 つ左のセルへ移動 (行間のラッピングなし)
- <kbd>右矢印</kbd> - 1 つ右のセルへ移動 (行間のラッピングなし)
- <kbd>Ctrl + 左矢印</kbd> - 行の左端のセルへ移動
- <kbd>Ctrl + 右矢印</kbd> - 行の右端のセルへ移動
- <kbd>Ctrl + 上矢印</kbd> - 列の最初のセルへ移動
- <kbd>Ctrl + 下矢印</kbd> - 列の最後のセルへ移動
- <kbd>Home</kbd> - 行の左端のセルへ移動
- <kbd>End</kbd> - 行の右端のセルへ移動
- <kbd>Ctrl + Home</kbd> - グリッドの最も左上のデータ セルへ移動
- <kbd>Ctrl + End</kbd> - グリッドの最も右下のデータ セルへ移動
- <kbd>Page Up</kbd> - 1 ページ (ビューポート) 上へスクロール
- <kbd>Page Down</kbd> - 1 ページ (ビューポート) 下へスクロール
- <kbd>Enter</kbd> 編集モードに入る
- <kbd>F2</kbd> 編集モードに入る
- <kbd>Esc</kbd> 編集モードを終了する
- <kbd>Tab</kbd> - 編集モードのセルがある場合のみ使用できます。行の次の編集可能なセルにフォーカスを移動します。行の最後のセルに達した場合、フォーカスを次の行の最初の編集可能なセルに移動します。**行編集**が有効な場合、フォーカスを編集可能な一番右のセルから **CANCEL** および **DONE** ボタンへ移動し、**DONE** ボタンから行の一番左の編集可能なセルへ移動します。
- <kbd>Shift + Tab</kbd> - 編集モードのセルがある場合のみ使用できます。行の一つ前の編集可能なセルにフォーカスを移動します。行の最初のセルに達した場合、フォーカスを前の行の最後の編集可能なセルに移動します。**行編集**が有効な場合、フォーカスを編集可能な一番右のセルから **CANCEL** および **DONE** ボタンへ移動し、**DONE** ボタンから行の一番右の編集可能なセルへ移動します。
- <kbd>Space</kbd> - <kbd>行の選択</kbd>が有効な場合、行を選択します。
- <kbd>Alt + 左矢印</kbd> または <kbd>Alt + 上矢印</kbd> -   行アイランドを縮小します。 
- <kbd>Alt + 右矢印</kbd> または <kbd>Alt + 下矢印</kbd> -   行アイランドを展開します。 
 
 

以下のデモサンプルで上記のすべての操作を実行できます。ナビゲーション可能なグリッド要素をフォーカスすると、利用可能な操作のリストが表示されます。

## デモ




<code-view style="height:600px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/hierarchical-grid/hgrid-keyboard-guide/" >
</code-view>

<div class="divider--half"></div>




## カスタム キーボード ナビゲーション

特定のキーまたはキーの組み合わせのデフォルトの動作をオーバーライドすることができるは、**キーボード ナビゲーション**機能の利点の 1 つです。たとえば、<kbd>Enter</kbd> キーまたは <kbd>Tab</kbd> キーを押して次のセルまたは下のセルへ移動します。この以外のナビゲーションシナリオでも、**キーボード ナビゲーション**の API で簡単に実現できます。





| API | 説明 | 引数 |
|---------|-------------|-----------|
| [`gridKeydown`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html#gridKeydown) | 上記のキー押下やキー押下の組み合わせのいずれかが実行されたときに発生されるイベント。キャンセルできます。その他のキーの押下/組み合わせには、デフォルトの `onkeydown`イベントを使用します。 | [IGridKeydownEventArgs]({environment:angularApiUrl}/interfaces/igridkeydowneventargs.html) |
| [`activeNodeChange`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html#activeNodeChange) | アクティブ ノードが変更されたときに発生するイベント。これを使用して、アクティブ フォーカス位置 (ヘッダー、tbody など)、列インデックス、行インデックス、またはネストされたレベルを決定できます。| [IActiveNodeChangeEventArgs]({environment:angularApiUrl}/interfaces/iactivenodechangeeventargs.html) |
| [`navigateTo`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html#navigateTo) | 提供された `rowindex` と `visibleColumnIndex` に基づいてグリッド内の位置に移動します。`{ targetType: GridKeydownTargetType, target: Object }` タイプのパラメーターを受け入れるコールバック関数を通してターゲット要素上でカスタム ロジックを実行することもできます。使用方法: <br />_grid.navigateTo(10, 3, (args) => { args.target.nativeElement.focus(); });_ | `rowindex`: number, `visibleColumnIndex`: number, `callback`: (`{ targetType: GridKeydownTargetType, target: Object }`) => {} |
| [`getNextCell`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html#getNextCell)| `rowIndex` と `visibileColumnIndex` で次のセルを定義する [`ICellPosition`]({environment:angularApiUrl}/interfaces/icellposition.html) オブジェクトを返します。コールバック関数は、[`getNextCell`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html#getnextcell) メソッドの 3 番目のパラメーターとして渡すことができます。コールバック関数は、パラメーターとして `IgxColumnComponent` を受け取り、指定された条件が満たされた場合に `boolean` 値を返します: <br />_const nextEditableCell = grid.getNextCell(0, 4, (col) => col.editable);_ | `currentRowIndex`: number, `currentVisibleColumnIndex`: number, `callback`: (`IgxColumnComponent`) => boolean |
| [`getPreviousCell`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html#getPreviousCell)| `rowIndex` と `visibileColumnIndex` で前のセルを定義する [`ICellPosition`]({environment:angularApiUrl}/interfaces/icellposition.html) オブジェクトを返します。コールバック関数は、[`getPreviousCell`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html#getPreviousCell) メソッドの 3 番目のパラメーターとして渡すことができます。コールバック関数は、パラメーターとして `IgxColumnComponent` を受け取り、指定された条件が満たされた場合に `boolean` 値を返します: <br />_const prevEditableCell = grid.getPreviousCell(0, 4, (col) => col.editable);_ | `currentRowIndex`: number, `currentVisibleColumnIndex`: number, `callback`: (`IgxColumnComponent`) => boolean |



 
> [!NOTE]
> [`getNextCell`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html#getNextCell) および [`getPreviousCell`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html#getPreviousCell) は現在のレベルで使用し、上位または下位レベルのセルにアクセスできません。



API を使用して、ユーザー入力の検証やカスタム ナビゲーションなどの一般的なシナリオを実現する方法を示します。最初に、[`gridKeydown`]({environment:angularApiUrl}/classes/igxgridcomponent.html#gridKeydown) イベントのイベント ハンドラーを登録する必要があります。





```html
<igx-hierarchical-grid #grid1 [data]="data" (gridKeydown)="customKeydown($event, grid1)">
    <igx-row-island [key]="'Albums'" (gridCreated)="childGridCreated($event)">
    </igx-row-island>
</igx-hierarchical-grid>
```

igxHierarchicalGrid子グリッドにカスタムキーボードナビゲーションを追加するには、各子グリッドを [`gridKeydown`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html#gridKeydown) イベントにサブスクライブする必要があります。そのため、上記の例で[`gridCreated`]({environment:angularApiUrl}/classes/igxrowislandcomponent.html#gridCreated) イベントのイベント ハンドラーを登録しました。

```typescript
public childGridCreated(event: IGridCreatedEventArgs) {
    const grid = event.grid;
    event.grid.gridKeydown.subscribe((args) => {
        this.customKeydown(args, grid);
    });
}
```






```typescript
public customKeydown(args: IGridKeydownEventArgs) {
    const target: IgxGridCell = args.target as IgxGridCell;
    const evt: KeyboardEvent = args.event as KeyboardEvent;
    const type = args.targetType;

    if (type === 'dataCell' && target.editMode && evt.key.toLowerCase() === 'tab') {
        // 1. USER INPUT VALIDATON ON TAB
    }
    if (type === 'dataCell' && evt.key.toLowerCase() === 'enter') {
        // 2. CUSTOM NAVIGATION ON ENTER KEY PRESS
    }
}
```

[IGridKeydownEventArgs]({environment:angularApiUrl}/interfaces/igridkeydowneventargs.html) 値に基づいて、独自のロジックを提供する 2つ のケースを識別しました (上記を参照)。API のメソッドを使用して、目的の処理を実行しましょう。ユーザーが編集モードでセル上で <kbd>Tab</kbd> キーを押している場合、入力の検証を実行します。ユーザーがセル上で <kbd>Enter</kbd> キーを押すと、次の行のセルへフォーカスを移動します。





```typescript
    // 1. USER INPUT VALIDATON ON TAB
    if (target.column.dataType === 'number' && target.editValue < 0) {
        // alert the user that the input is invalid
        return;
    }
    // 2. CUSTOM NAVIGATION ON ENTER KEY PRESS
    const nexRowIndex = target.row.expanded ? target.rowIndex + 2 : target.rowIndex + 1;
    grid.navigateTo(nexRowIndex, target.visibleColumnIndex,
        (obj) => { obj.target.nativeElement.focus(); });
```

> 注: 実装の詳細は、サンプルコードを参照してください。

実装したカスタム シナリオを試すには以下のデモを使用してください。
- `Grammy Nominations` 列のセルをダブルクリックするか <kbd>F2</kbd> キーを押し、値を `-2` に変更して <kbd>Tab</kbd> キーを押します。プロンプト メッセージが表示されます。
- セルを選択して <kbd>Enter</kbd> キー を数回押します。キーを押すたびに、同じ列の下にある次の行のセルへフォーカスを移動します。

#### デモ


<code-view style="height:520px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-custom-kb-navigation/" >
</code-view>







## 既知の制限

|制限|説明|
|--- |--- |
|スクロール可能な親コンテナーを使用してグリッド内を移動します。| グリッドがスクロール可能な親コンテナー内に配置され、ユーザーが表示されていないグリッドのセルへ移動した場合、親コンテナーはスクロールされません。|

## API リファレンス

- [IgxHierarchicalGridComponent API]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html)
- [IgxHierarchicalGridComponent スタイル]({environment:sassApiUrl}/themes#function-grid-theme)

## その他のリソース

<div class="divider--half"></div>

- [Grid キーボード ナビゲーション](../grid/keyboard-navigation.md)
- [Tree Grid キーボード ナビゲーション](../treegrid/keyboard-navigation.md)




- [Hierarchical Grid 概要](hierarchical-grid.md)
- [仮想化とパフォーマンス](virtualization.md)
- [フィルタリング](filtering.md)
- [ソート](sorting.md)
- [集計](summaries.md)
- [列移動](column-moving.md)
- [列のピン固定](column-pinning.md)
- [列のサイズ変更](column-resizing.md)
- [選択](selection.md)

<div class="divider--half"></div>
コミュニティに参加して新しいアイデアをご提案ください。

- [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
- [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)
