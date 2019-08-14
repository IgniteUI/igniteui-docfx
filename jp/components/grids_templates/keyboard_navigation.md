﻿@@if (igxName === 'IgxGrid') {
---
title: Data Grid コンポーネント
_description: Ignite UI for Angular Data Grid コントロールは、タッチ レスポンシブなデータ グリッドです。階層およびリスト ビューなどの機能があります。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スイート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, Angular Data Grid コンポーネント, Angular Data Grid コントロール, Angular Grid コンポーネント, Angular Grid コントロール, Angular 高パフォーマンス Grid
_language: ja
---
}
@@if (igxName === 'IgxTreeGrid') {
---
title: Tree Grid コンポーネント
_description: Ignite UI for Angular Tree Grid コントロールは、タッチ レスポンシブなデータ グリッドです。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コントロール Suite, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, Angular Tree Grid コンポーネント, Angular Tree Grid コントロール, Angular Tree Grid コンポーネント, Angular 高パフォーマンス Tree Grid, Tree Grid
_language: ja
---
}
@@if (igxName === 'IgxHierarchicalGrid') {
---
title: Hierarchical Grid コンポーネント
_description: Ignite UI for Angular Hierarchical Grid コントロールは、タッチ レスポンシブが有効なデータ リッチな階層グリッドです。
_keywords: Ignite UI for Angular, UI controls, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スイート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, Angular Hierarchical Grid コンポーネント, Angular Hierarchical Grid コントロール, Angular 高パフォーマンス Hierarchical Grid, Hierarchical Grid
_language: ja
---
}

## @@igComponent キーボード ナビゲーション

キーボード ナビゲーションはすべてのグリッドでデフォルトで有効です。エンドユーザーの要件に合わせて機能を追加できます。以下は、特定のセルをフォーカスして以下のキーの組み合わせを押した場合の動作を示します。

### キー コンビネーション
@@if (igxName === 'IgxHierarchicalGrid') {
 - `上矢印` - 1 つ上のセル、必要に応じてグリッド上階層へ移動 (ラッピングなし);
 - `下矢印` - 1 つ下のセル、必要に応じてグリッド下階層へ移動 (ラッピングなし);}@@if (igxName === 'IgxGrid' || igxName === 'IgxTreeGrid') {
 - `上矢印` - 1 つ上のセルへ移動 (ラッピングなし);
 - `下矢印` - 1 つ下のセルへ移動 (ラッピングなし);}
 - `左矢印` - 1 つ左のセルへ移動 (行間のラッピングなし);
 - `右矢印` - 1 つ右のセルへ移動 (行間のラッピングなし);
 - `Ctrl + 上矢印` - 現在の列の最初のセルへ移動
 - `Ctrl + 下矢印` - 現在の列の最後のセルへ移動
 - `Ctrl + 左矢印` -  行の左端のセルへ移動;
 - `Home` - 行の左端のセルへ移動;
 - `Ctrl + Home` - グリッドの左上のセルへ移動;
 - `Ctrl + 右矢印` -  行の右端のセルへ移動;
 - `End` - 行の右端のセルへ移動;
 - `Ctrl + End` - グリッドの右下のセルへ移動;
 - `Page Up` - 1 ページ (ビューポート) 上へスクロール;
 - `Page Down` - 1 ページ (ビューポート) 下へスクロール;
 - `Enter` - 編集モードに入る;
 - `F2` - 編集モードに入る;
 - `Esc` - 編集モードを終了する;
 - `Tab` - フォーカスを行の次のセルへ順番に移動し、最後のセルのあとは次の行へ移動します。次の行がグループ行の場合、行全体がフォーカスされます。データ行の場合、最初のセルにフォーカスを移動します。セルが編集モードの場合、フォーカスを次の編集可能なセルへ移動し、編集可能な一番右のセルから`CANCEL`、`DONE` ボタン、`DONE` から編集可能な一番左のセルへ移動します。
 - `Shift + Tab` - 行の前のセルへフォーカスを順番に移動し、最初のセルの次に前の行へフォーカスを移動します。前の行がグループ行の場合、行全体をフォーカスします。データ行の場合、最後のセルをフォーカスします。セルが編集モードの場合、フォーカスを次の編集可能なセルへ移動し、編集可能な一番右のセルから `CANCEL` および `DONE` ボタン、`DONE` から編集可能な一番左のセルへ移動します;
 - `Space` - 行が選択可能な場合、スペースキーを押下すると行選択をトリガーします。;@@if (igxName === 'IgxGrid' || igxName === 'IgxHierarchicalGrid') {
 - GroupRow で `Alt + 左矢印` - 行が縮小されていない場合はグループ行コンテンツを縮小します。
 - GroupRow で `Alt + 右矢印` - 行が展開されていない場合はグループ行コンテンツを展開します。}
 - マウス `ホイール` - フォーカス要素をぼかします。

### カスタム キーボード ナビゲーション
特定のキーが押されたときに上記に示したデフォルトの動作をカスタマイズすることは、キーボード　ナビゲーション機能が提供する利点の 1 つです。`Enter キー`または `Tab キー`が押されたときと同じです。`次のセル`または`下のセル`に移動するようなアクションは、強力なキーボードナビゲーションAPIを使用して簡単に処理できます。

- [`onGridKeydown`]({environment:angularApiUrl}/classes/igxgridbasecomponent.html#ongridkeydown) が公開されます。イベントは [`IGridKeydownEventArgs`]({environment:angularApiUrl}/interfaces/igridkeydowneventargs.html) を発生します。このイベントは、キーボードで上記のキー組み合わせを介してのみ使用できます。他のすべてのキー操作では、`keydown` event（keydown）= "onKeydown（$ event）"を使用できます。
- [`navigateTo`]({environment:angularApiUrl}/classes/igxgridbasecomponent.html#navigateto) - 
このメソッドを使用すると、提供された `rowindex` と `visibleColumnIndex` に基づいて位置に移動できます。
- [`getNextCell`]({environment:angularApiUrl}/classes/igxgridbasecomponent.html#navigateto) - 
現在の位置に従って、特定の基準に一致する次のセルを定義する [`ICellPosition`]({environment:angularApiUrl}/interfaces/icellposition.html) を返します。[`getPreviousCell`]({environment:angularApiUrl}/classes/igxgridbasecomponent.html#getpreviouscell) メソッドの 3 番目のパラメータ－としてコールバック関数を渡すことができます。
- [`getPreviousCell`]({environment:angularApiUrl}/classes/igxgridbasecomponent.html#getpreviouscell) -
現在の位置に従って、特定の基準に一致する前のセルを定義する [`ICellPosition`]({environment:angularApiUrl}/interfaces/icellposition.html) を返します。[`getPreviousCell`]({environment:angularApiUrl}/classes/igxgridbasecomponent.html#getpreviouscell) メソッドの 3 番目のパラメータ－としてコールバック関数を渡すことができます。。

 @@if (igxName === 'IgxHierarchicalGrid') {
> 注: [`getNextCell`]({environment:angularApiUrl}/classes/igxgridbasecomponent.html#navigateto) および [`getPreviousCell`]({environment:angularApiUrl}/classes/igxgridbasecomponent.html#getpreviouscell) は現在のレベルでは使用できないため、子セルにアクセスすることはできません。
}

以下のサンプルは、その方法を示しています。
- `Tab キー` を押したときに数値にセル検証を追加します (水平ナビゲーション)。

#### デモ
@@if (igxName === 'IgxGrid') {

```html
<igx-grid #grid1 [data]="data" [primaryKey]="'ProductID'" [autoGenerate]="false" [displayDensity]="'compact'"
    width="100%" height="350px" [paging]="true" [rowSelectable]="true" (onGridKeydown)="customKeydown($event)">
    <igx-column field="ProductID" header="Product ID" width="16%" [headerClasses]="'prodId'"
        [editable]="true">
    </igx-column>
```

```typescript
const cell = args.event.shiftKey ?
    this.grid1.getPreviousCell(target.rowIndex, target.visibleColumnIndex, (col) => col.editable) :
    this.grid1.getNextCell(target.rowIndex, target.visibleColumnIndex, (col) => col.editable);

this.grid1.navigateTo(cell.rowIndex, cell.visibleColumnIndex,
    (obj) => { obj.target.nativeElement.focus(); });
```
- `Enter key` キーを押すと列ベースのナビゲーション（垂直）を実行します。

```typescript
if (type === "dataCell" && args.event.key.toLowerCase() === "enter") {
    this.grid1.navigateTo(target.rowIndex + 1, target.visibleColumnIndex,
        (obj) => { obj.target.nativeElement.focus(); });
    ...
}
```

カスタム キーボード ナビゲーションを確認するために以下の操作を試すことができます。
- 数値列タイプのセルをダブルクリックし、セルが編集モードになったら、値を `7` に変更して `tab キー` を押します。プロンプト メッセージが表示されます。
- セルを選択して `Enter キー` を数回押します。列ベースのナビゲーションが適用されます。

> 注: デフォルトの `Enter キー` 操作は上書きされ、編集モードに入るには代わりに F2 キーを使用できることに注意してください。

<div class="sample-container loading" style="height:400px">
    <iframe id="grid-custom-keyboard-navigation-sample-iframe" src='{environment:demosBaseUrl}/grid/grid-custom-keyboard-navigation' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-custom-keyboard-navigation-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">stackblitzb で表示</button>
</div>
}

@@if (igxName === 'IgxHierarchicalGrid') {
igxHierarchicalGrid子グリッドにカスタムキーボードナビゲーションを追加するには、[`onGridCreated`]({environment:angularApiUrl}/classes/igxrowislandcomponent.html#ongridcreated) を処理し、各子グリッドを [`onGridKeydown`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html#ongridkeydown) イベントにサブスクライブする必要があります。

```typescript
public childGridCreated(event: IGridCreatedEventArgs) {
    const grid = event.grid;
    event.grid.onGridKeydown.subscribe((args) => {
        this.customKeydown(args, grid);
    });
}
```

```html
<igx-hierarchical-grid #grid1 class="hgrid" [data]="data" (onGridKeydown)="customKeydown($event, grid1)"
    [height]="'500px'" [width]="'80%'" [rowHeight]="'65px'">
        <igx-column field="Artist" editable="true" width="20%"></igx-column>
        ...
        <igx-column field="Grammy Awards" editable="true" dataType="number" width="20%"></igx-column>

        <igx-row-island [key]="'Albums'" [autoGenerate]="false" [showToolbar]="true" toolbarTitle="Albums"
        (onGridCreated)="childGridCreated($event)">
            <igx-column field="Album"></igx-column>
            <igx-column field="Launch Date" [dataType]="'date'"></igx-column>
            <igx-column field="Billboard Review" editable="true"></igx-column>
            <igx-column field="US Billboard 200" editable="true"></igx-column>
        </igx-row-island>

</igx-hierarchical-grid>
```

- `Enter key` キーを押すと列ベースのナビゲーション (垂直) を実行します。

```typescript
public customKeydown(args: IGridKeydownEventArgs, grid) {
    ...
    if (type === "dataCell" && target.inEditMode && evt.key.toLowerCase() === "tab") {
        ...
        const cell = evt.shiftKey ?
            grid.getPreviousCell(target.rowIndex, target.visibleColumnIndex, (col) => col.editable) :
            grid.getNextCell(target.rowIndex, target.visibleColumnIndex, (col) => col.editable);

        grid.navigateTo(cell.rowIndex, cell.visibleColumnIndex,
            (obj) => { obj.target.nativeElement.focus(); });
    } else if (type === "dataCell" && evt.key.toLowerCase() === "enter") {
        ...
        grid.navigateTo(target.rowIndex + 1, target.visibleColumnIndex,
            (obj) => { obj.target.nativeElement.focus(); });
    }
}
```

カスタム キーボード ナビゲーションを確認するために`以下の操作`を試すことができます。
- `数値タイプ`のセルをダブル クリックし、セルが編集モードになったら、値を負の数値 (-1 など) に変更して `Tabキー` を押します。プロンプト メッセージが表示されます。
- セルを選択して `Enter キー` を数回押します。列ベースのナビゲーションが適用されます。

> 注: デフォルトの `Enter キー` 操作は上書きされ、編集モードに入るには代わりに F2 キーを使用できることに注意してください。

<div class="sample-container loading" style="height:520px">
    <iframe id="hgrid-custom-keyboard-navigation-sample-iframe" src='{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-custom-kb-navigation' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="hgrid-custom-keyboard-navigation-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">stackblitzb で表示</button>
</div>
}

@@if (igxName === 'IgxTreeGrid') {

```html
<igx-tree-grid #grid1 [data]="data" [primaryKey]="'ProductID'" [autoGenerate]="false" [displayDensity]="'compact'"
    width="100%" height="350px" [paging]="true" [rowSelectable]="true" (onGridKeydown)="customKeydown($event)">
    <igx-column field="ProductID" header="Product ID" width="16%" [headerClasses]="'prodId'"
        [editable]="true">
    </igx-column>
    ...
```

```typescript
const cell = args.event.shiftKey ?
    this.grid1.getPreviousCell(target.rowIndex, target.visibleColumnIndex, (col) => col.editable) :
    this.grid1.getNextCell(target.rowIndex, target.visibleColumnIndex, (col) => col.editable);

this.grid1.navigateTo(cell.rowIndex, cell.visibleColumnIndex,
    (obj) => { obj.target.nativeElement.focus(); });
```
- `Enter key` キーを押すと列ベースのナビゲーション (垂直) を実行します。

```typescript
if (type === "dataCell" && args.event.key.toLowerCase() === "enter") {
    this.grid1.navigateTo(target.rowIndex + 1, target.visibleColumnIndex,
        (obj) => { obj.target.nativeElement.focus(); });
    ...
}
```

カスタム キーボード ナビゲーションを確認するために`以下の操作`を試すことができます。
- `Age` 列のセルをダブルクリックし、セルが編集モードになったら、値を `17` に変更して `Tab キー` を押します。プロンプト メッセージが表示されます。
- セルを選択して `Enter キー` を数回押します。列ベースのナビゲーションが適用されます。

> 注: デフォルトの `Enter キー` 操作は上書きされ、編集モードに入るには代わりに F2 キーを使用できることに注意してください。

<div class="sample-container loading" style="height:520px">
    <iframe id="tree-grid-custom-keyboard-navigation-sample-iframe" src='{environment:demosBaseUrl}/tree-grid/treegrid-keyboard-navigation' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="tree-grid-custom-keyboard-navigation-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">stackblitzb で表示</button>
</div>
}

<!-- ### Known Limitations
|Limitation|Description|
|--- |--- |
| Navigating inside grid with scrollable parent container. | If the grid is positioned inside a scrollable parent container and the user navigates inside the grid, it will not scroll the parent container if there are cells out of view.| -->

### API リファレンス
* [@@igxNameComponent API]({environment:angularApiUrl}/classes/@@igTypeDoc.html)
* [@@igxNameComponent スタイル]({environment:sassApiUrl}/index.html#function-igx-grid-theme)

### その他のリソース
<div class="divider--half"></div>

* [@@igComponent 概要](@@igMainTopic.md)
* [仮想化とパフォーマンス](virtualization.md)
* [フィルタリング](filtering.md)
* [並べ替え](sorting.md)
* [集計](summaries.md)
* [列移動](column_moving.md)
* [列のピン固定](column_pinning.md)
* [列のサイズ変更](column_resizing.md)
* [選択](selection.md)

<div class="divider--half"></div>
コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)

