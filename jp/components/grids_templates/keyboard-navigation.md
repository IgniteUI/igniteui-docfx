@@if (igxName === 'IgxGrid') {
---
title: Grid キーボード ナビゲーション | Ignite UI for Angular | インフラジスティックス
_description: Ignite UI for Angular で Grid キーボード ナビゲーションを使用する方法を説明します。キーボード インタラクションでは、キーを使用してセル、行、列を移動できます。
_keywords: keyboard navigation, ignite ui for angular, infragistics, キーボード ナビゲーション, インフラジスティックス
_language: ja
---
}
@@if (igxName === 'IgxTreeGrid') {
---
title: TreeGrid キーボード ナビゲーション | Ignite UI for Angular | インフラジスティックス
_description: Ignite UI for Angular で TreeGrid キーボードナ ビゲーションを使用する方法を説明します。キーボード インタラクションでは、キーを使用してセル、行、列を移動できます。
_keywords: keyboard navigation, ignite ui for angular, infragistics, キーボード ナビゲーション, インフラジスティックス
_language: ja
---
}
@@if (igxName === 'IgxHierarchicalGrid') {
---
title: HierarchicalGrid キーボード ナビゲーション | Ignite UI for Angular | インフラジスティックス
_description: Ignite UI for Angular で HierarchicalGrid キーボード ナビゲーションを使用する方法を説明します。キーボード インタラクションでは、キーを使用してセル、行、列を移動できます。
_keywords: keyboard navigation, ignite ui for angular, infragistics, キーボード ナビゲーション, インフラジスティックス
_language: ja
---
}

# @@igComponent キーボード ナビゲーション

**@@igxName** のキーボード ナビゲーションは、さまざまなキーボード操作をユーザーに提供します。これにより **@@igxName** のアクセシビリティが向上し、内部の要素 (セル、行、列ヘッダー、ツールバー、フッターなど) をナビゲートできるようになります。この機能はデフォルトで有効になっています。デフォルトの動作を簡単にオーバーライドするオプションがあります。

@@igxName のタブが削減され、ナビゲーションが W3C のアクセシビリティ標準に準拠し、使いやすくなりました。

現在、@@igxName には以下のタブ位置が導入されています。
* **GroupBy または ツールバーの領域** (有効な場合)
* **@@igxName ヘッダー**
* **@@igxName 本体**
* **列集計** (有効な場合)
* **@@igxName ページネーター** (有効な場合)

>[!NOTE]
> この動作変更のため、<kbd>Tab</kbd> と <kbd>Shift + Tab</kbd> キーでセル間を移動することは @@igxName でサポートされなくなりました。
> <kbd>Tab</kbd>キーを押すと、**グループ化** / **ツール バー** -> **ヘッダー** -> **本体** -> **集計** -> **フッター / ページネーター** の順序にタブ位置を移動します。 

>[!NOTE]
> テンプレートによって**フォーカス可能な**要素を **@@igxName** の本体に公開すると、ブラウザのデフォルトの動作が防止されていないため、**予期されない結果**が発生する可能性があります。
> したがって、それを適切に**防止/変更する**のは開発者の責任です。

## ヘッダー ナビゲーション

**@@igxName** ヘッダーのキーボード ナビゲーションが完全にサポートされるようになりました。列ヘッダーは矢印キーで簡単にトラバースできます。さらに、**フィルタリング**、**ソート**、**グループ化**などの列操作をトリガーするキーの組み合わせがいくつかあります。
**@@igxName** ヘッダー コンテナーがフォーカスされている場合、以下のキー組み合わせを使用できます。

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
@@if (igxName === "IgxGrid") { - <kbd>Shift + Alt + 左矢印</kbd> - 列がグループ化可能としてマークされている場合、列をグループ化します。
 - <kbd>Shift + Alt + 右矢印</kbd> - 列がグループ化可能としてマークされている場合、列のグループ化を解除します。
 - <kbd>Alt +左矢印</kbd> または <kbd>Alt +上矢印</kbd> - 列が縮小されていない場合、列グループ ヘッダーを縮小します。
 - <kbd>Alt +右矢印</kbd> または <kbd>Alt +下矢印</kbd> - 列がまだ展開されていない場合、列グループヘッダーを展開します。}

## 本体ナビゲーション

**@@igxName** 本体がフォーカスされている場合、以下のキー組み合わせを使用できます。

### キーの組み合わせ

 - <kbd>上矢印</kbd> - 1 つ上のセルへ移動 @@if (igxName === 'IgxHierarchicalGrid') {、必要に応じてグリッド階層の 1 つ上のレベルへ移動} (ラッピングなし)
 - <kbd>下矢印</kbd> - 1 つ下のセルへ移動 @@if (igxName === 'IgxHierarchicalGrid') {、必要に応じてグリッド階層の 1 つ下のレベルへ移動}  (ラッピングなし)
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
 - <kbd>Alt + 左矢印</kbd> または <kbd>Alt + 上矢印</kbd> - @@if (igxName === "IgxGrid") {グループ行はグループを縮小します。} @@if (igxName === "IgxHierarchicalGrid") { 行アイランドを縮小します。} @@if (igxName === "IgxTreeGrid") { 現在のノードを縮小します。}
 - <kbd>Alt + 右矢印</kbd> または <kbd>Alt + 下矢印</kbd> - @@if (igxName === "IgxGrid") {グループ行はグループを展開します。} @@if (igxName === "IgxHierarchicalGrid") { 行アイランドを展開します。} @@if (igxName === "IgxTreeGrid") { 現在のノードを展開します。}
 @@if (igxName === "IgxGrid") {- <kbd>Alt + 左矢印</kbd> または <kbd>Alt + 上矢印</kbd> - マスター/詳細行で詳細ビューを縮小します。
 - <kbd>Alt + 右矢印</kbd> または <kbd>Alt + 下矢印</kbd> - マスター/詳細行で詳細ビューを展開します。}

以下のデモサンプルで上記のすべての操作を実行できます。ナビゲーション可能なグリッド要素をフォーカスすると、利用可能な操作のリストが表示されます。

## デモ
@@if (igxName === "IgxGrid") {
<div class="sample-container loading" style="height:470px">
    <iframe id="grid-keyboardnav-guide-sample-iframe" src='{environment:demosBaseUrl}/grid/grid-keyboardnav-guide' width="100%" height="100%" seamless="" frameborder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<p style="margin: 0;padding-top: 0.5rem">このサンプルが気に入りましたか? 完全な Angular ツールキットにアクセスして、すばやく独自のアプリの作成を開始します。<a class="no-external-icon mchNoDecorate trackCTA" target="_blank" href="https://www.infragistics.com/products/ignite-ui-angular/download" data-xd-ga-action="Download" data-xd-ga-label="Ignite UI for Angular">無料でダウンロードできます。</a></p>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="grid-keyboardnav-guide-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-keyboardnav-guide-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
</div>
<div class="divider--half"></div>
}
@@if (igxName === "IgxHierarchicalGrid") {
<div class="sample-container loading" style="height:470px">
    <iframe id="hgrid-keyboardnav-guide-sample-iframe" src='{environment:demosBaseUrl}/hierarchical-grid/hgrid-keyboard-guide' width="100%" height="100%" seamless="" frameborder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<p style="margin: 0;padding-top: 0.5rem">このサンプルが気に入りましたか? 完全な Angular ツールキットにアクセスして、すばやく独自のアプリの作成を開始します。<a class="no-external-icon mchNoDecorate trackCTA" target="_blank" href="https://www.infragistics.com/products/ignite-ui-angular/download" data-xd-ga-action="Download" data-xd-ga-label="Ignite UI for Angular">無料でダウンロードできます。</a></p>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="hgrid-keyboardnav-guide-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="hgrid-keyboardnav-guide-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
</div>
<div class="divider--half"></div>
}
@@if (igxName === "IgxTreeGrid") {
<div class="sample-container loading" style="height:470px">
    <iframe id="tgrid-keyboardnav-guide-sample-iframe" src='{environment:demosBaseUrl}/tree-grid/tgrid-keyboardnav-guide' width="100%" height="100%" seamless="" frameborder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<p style="margin: 0;padding-top: 0.5rem">このサンプルが気に入りましたか? 完全な Angular ツールキットにアクセスして、すばやく独自のアプリの作成を開始します。<a class="no-external-icon mchNoDecorate trackCTA" target="_blank" href="https://www.infragistics.com/products/ignite-ui-angular/download" data-xd-ga-action="Download" data-xd-ga-label="Ignite UI for Angular">無料でダウンロードできます。</a></p>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="tgrid-keyboardnav-guide-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="tgrid-keyboardnav-guide-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
</div>
<div class="divider--half"></div>
}


## カスタム キーボード ナビゲーション
特定のキーまたはキーの組み合わせのデフォルトの動作をオーバーライドすることができるは、**キーボード ナビゲーション**機能の利点の 1 つです。たとえば、<kbd>Enter</kbd> キーまたは <kbd>Tab</kbd> キーを押して次のセルまたは下のセルへ移動します。この以外のナビゲーションシナリオでも、**キーボード ナビゲーション**の API で簡単に実現できます。


| API | 説明 | 引数 |
|---------|-------------|-----------|
| [`onGridKeydown`]({environment:angularApiUrl}/classes/igxgridcomponent.html#ongridkeydown) | 上記のキー押下やキー押下の組み合わせのいずれかが実行されたときに発生されるイベント。キャンセルできます。その他のキーの押下/組み合わせには、デフォルトの `onkeydown`イベントを使用します。 | [IGridKeydownEventArgs]({environment:angularApiUrl}/interfaces/igridkeydowneventargs.html) |
| [`activeNodeChange`]({environment:angularApiUrl}/classes/igxgridcomponent.html#activenodechange) | アクティブ ノードが変更されたときに発生するイベント。これを使用して、アクティブ フォーカス位置 (ヘッダー、tbody など)、列インデックス、行インデックス、またはネストされたレベルを決定できます。| [IActiveNodeChangeEventArgs]({environment:angularApiUrl}/interfaces/iactivenodechangeeventargs.html) |
| [`navigateTo`]({environment:angularApiUrl}/classes/igxgridcomponent.html#navigateto) | 提供された `rowindex` と `visibleColumnIndex` に基づいてグリッド内の位置に移動します。`{ targetType: GridKeydownTargetType, target: Object }` タイプのパラメーターを受け入れるコールバック関数を通してターゲット要素上でカスタム ロジックを実行することもできます。使用方法: <br />*grid.navigateTo(10, 3, (args) => { args.target.nativeElement.focus(); });* | `rowindex`: number, `visibleColumnIndex`: number, `callback`: (`{ targetType: GridKeydownTargetType, target: Object }`) => {} |
| [`getNextCell`]({environment:angularApiUrl}/classes/igxgridcomponent.html#getnextcell)| `rowIndex` と `visibileColumnIndex` で次のセルを定義する [`ICellPosition`]({environment:angularApiUrl}/interfaces/icellposition.html) オブジェクトを返します。コールバック関数は、[`getNextCell`]({environment:angularApiUrl}/classes/igxgridcomponent.html#getnextcell) メソッドの 3 番目のパラメーターとして渡すことができます。コールバック関数は、パラメーターとして `IgxColumnComponent` を受け取り、指定された条件が満たされた場合に `boolean` 値を返します: <br />*const nextEditableCell = grid.getNextCell(0, 4, (col) => col.editable);* | `currentRowIndex`: number, `currentVisibleColumnIndex`: number, `callback`: (`IgxColumnComponent`) => boolean |
| [`getPreviousCell`]({environment:angularApiUrl}/classes/igxgridcomponent.html#getPreviousCell)| `rowIndex` と ` visibileColumnIndex` で前のセルを定義する [`ICellPosition`]({environment:angularApiUrl}/interfaces/icellposition.html) オブジェクトを返します。コールバック関数は、[`getPreviousCell`]({environment:angularApiUrl}/classes/igxgridcomponent.html#getPreviousCell) メソッドの 3 番目のパラメーターとして渡すことができます。コールバック関数は、パラメーターとして `IgxColumnComponent` を受け取り、指定された条件が満たされた場合に `boolean` 値を返します: <br />*const prevEditableCell = grid.getPreviousCell(0, 4, (col) => col.editable);* | `currentRowIndex`: number, `currentVisibleColumnIndex`: number, `callback`: (`IgxColumnComponent`) => boolean |
<br />
 @@if (igxName === 'IgxHierarchicalGrid') {
>[!NOTE]
>[`getNextCell`]({environment:angularApiUrl}/classes/igxgridcomponent.html#getnextcell) および [`getPreviousCell`]({environment:angularApiUrl}/classes/igxgridbasedirective.html#getpreviouscell) は現在のレベルで使用し、上位または下位レベルのセルにアクセスできません。
}

API を使用して、ユーザー入力の検証やカスタム ナビゲーションなどの一般的なシナリオを実現する方法を示します。最初に、[`onGridKeydown`]({environment:angularApiUrl}/classes/igxgridcomponent.html#ongridkeydown) イベントのイベント ハンドラーを登録する必要があります。

@@if (igxName === 'IgxGrid') {
```html
<igx-grid #grid1 [data]="data" [primaryKey]="'ProductID'" (onGridKeydown)="customKeydown($event)">
```
}

@@if (igxName === 'IgxHierarchicalGrid') {

```html
<igx-hierarchical-grid #grid1 [data]="data" (onGridKeydown)="customKeydown($event, grid1)">
    <igx-row-island [key]="'Albums'" (onGridCreated)="childGridCreated($event)">
    </igx-row-island>
</igx-hierarchical-grid>
```

igxHierarchicalGrid子グリッドにカスタムキーボードナビゲーションを追加するには、各子グリッドを [`onGridKeydown`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html#ongridkeydown) イベントにサブスクライブする必要があります。そのため、上記の例で[`onGridCreated`]({environment:angularApiUrl}/classes/igxrowislandcomponent.html#ongridcreated) イベントのイベント ハンドラーを登録しました。

```typescript
public childGridCreated(event: IGridCreatedEventArgs) {
    const grid = event.grid;
    event.grid.onGridKeydown.subscribe((args) => {
        this.customKeydown(args, grid);
    });
}
```
}


@@if (igxName === 'IgxTreeGrid') {
```html
<igx-tree-grid #grid1 [data]="data" (onGridKeydown)="customKeydown($event)">
</igx-tree-grid>
```
}

```typescript
public customKeydown(args: IGridKeydownEventArgs) {
    const target: IgxGridCellComponent = args.target as IgxGridCellComponent;
    const evt: KeyboardEvent = args.event as KeyboardEvent;
    const type = args.targetType;

    if (type === "dataCell" && target.inEditMode && evt.key.toLowerCase() === "tab") {
        // 1. USER INPUT VALIDATON ON TAB
    }
    if (type === "dataCell" && evt.key.toLowerCase() === "enter") {
        // 2. CUSTOM NAVIGATION ON ENTER KEY PRESS
    }
}
```

[IGridKeydownEventArgs]({environment:angularApiUrl}/interfaces/igridkeydowneventargs.html) 値に基づいて、独自のロジックを提供する 2つ のケースを識別しました (上記を参照)。API のメソッドを使用して、目的の処理を実行しましょう。ユーザーが編集モードでセル上で <kbd>Tab</kbd> キーを押している場合、入力の検証を実行します。ユーザーがセル上で <kbd>Enter</kbd> キーを押すと、次の行のセルへフォーカスを移動します。

@@if (igxName === 'IgxGrid') {
```typescript
    // 1. USER INPUT VALIDATON ON TAB
    if (target.column.dataType === "number" && target.editValue < 10) {
        // alert the user that the input is invalid
        return;
    }
    // 2. CUSTOM NAVIGATION ON ENTER KEY PRESS
    grid.navigateTo(target.rowIndex + 1, target.visibleColumnIndex,
        (obj) => { obj.target.nativeElement.focus(); });
```
> 注: 実装の詳細は、サンプルコードを参照してください。

実装したカスタム シナリオを試すには以下のデモを使用してください。
- `Order` 列のセルをダブルクリックするか <kbd>F2</kbd> キーを押し、値を `7` に変更して <kbd>Tab</kbd> キーを押します。プロンプト メッセージが表示されます。
- セルを選択して <kbd>Enter</kbd> キー を数回押します。キーを押すたびに、同じ列の下にある次の行のセルへフォーカスを移動します。

#### デモ

<div class="sample-container loading" style="height:400px">
    <iframe id="grid-custom-keyboard-navigation-sample-iframe" src='{environment:demosBaseUrl}/grid/grid-custom-keyboard-navigation' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="grid-custom-keyboard-navigation-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-custom-keyboard-navigation-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
</div>
}

@@if (igxName === 'IgxHierarchicalGrid') {
```typescript
    // 1. USER INPUT VALIDATON ON TAB
    if (target.column.dataType === "number" && target.editValue < 0) {
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

<div class="sample-container loading" style="height:520px">
    <iframe id="hgrid-custom-keyboard-navigation-sample-iframe" src='{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-custom-kb-navigation' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="hgrid-custom-keyboard-navigation-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="hgrid-custom-keyboard-navigation-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
</div>
}



@@if (igxName === 'IgxTreeGrid') {
```typescript
    // 1. USER INPUT VALIDATON ON TAB
    if (target.column.dataType === "number" && target.editValue < 18) {
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
- `Age` 列のセルをダブルクリックするか <kbd>F2</kbd> キーを押し、値を `16` に変更して <kbd>Tab</kbd> キーを押します。プロンプト メッセージが表示されます。
- セルを選択して <kbd>Enter</kbd> キー を数回押します。キーを押すたびに、同じ列の下にある次の行のセルへフォーカスを移動します。
<div class="sample-container loading" style="height:520px">
    <iframe id="tree-grid-custom-keyboard-navigation-sample-iframe" src='{environment:demosBaseUrl}/tree-grid/treegrid-keyboard-navigation' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="tree-grid-custom-keyboard-navigation-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="tree-grid-custom-keyboard-navigation-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
</div>
}

## 既知の制限

|制限|説明|
|--- |--- |
|スクロール可能な親コンテナーを使用してグリッド内を移動します。| グリッドがスクロール可能な親コンテナー内に配置され、ユーザーが表示されていないグリッドのセルへ移動した場合、親コンテナーはスクロールされません。|

## API リファレンス
* [@@igxNameComponent API]({environment:angularApiUrl}/classes/@@igTypeDoc.html)
* [@@igxNameComponent スタイル]({environment:sassApiUrl}/index.html#function-igx-grid-theme)

## その他のリソース
<div class="divider--half"></div>

@@if (igxName === 'IgxHierarchicalGrid') {* [Grid キーボード ナビゲーション](../grid/keyboard-navigation.md)}
@@if (igxName === 'IgxHierarchicalGrid') {* [Tree Grid キーボード ナビゲーション](../treegrid/keyboard-navigation.md)}
@@if (igxName === 'IgxTreeGrid') {* [Hierarchical Grid キーボード ナビゲーション](../hierarchicalgrid/keyboard-navigation.md)}
@@if (igxName === 'IgxTreeGrid') {* [Grid キーボード ナビゲーション](../grid/keyboard-navigation.md)}
@@if (igxName === 'IgxGrid') {* [Hierarchical Grid キーボード ナビゲーション](../hierarchicalgrid/keyboard-navigation.md)}
@@if (igxName === 'IgxGrid') {* [Tree Grid キーボード ナビゲーション](../treegrid/keyboard-navigation.md)}
* [@@igComponent 概要](@@igMainTopic.md)
* [仮想化とパフォーマンス](virtualization.md)
* [フィルタリング](filtering.md)
* [ソート](sorting.md)
* [集計](summaries.md)
* [列移動](column-moving.md)
* [列のピン固定](column-pinning.md)
* [列のサイズ変更](column-resizing.md)
* [選択](selection.md)

<div class="divider--half"></div>
コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)
