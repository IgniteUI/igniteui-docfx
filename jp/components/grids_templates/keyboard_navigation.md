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

## @@igComponent キーボード ナビゲーション

@@igComponent は、さまざまなキーボード操作をユーザーに提供します。キーボード ナビゲーションは、各セル、行、列ヘッダー、またはその他のナビゲート可能な要素をナビゲートする際に各要素の詳細を提供することにより、@@igxName のアクセシビリティを向上させます。この機能はデフォルトで @@igxName に含まれていますが、ユーザーはカスタム機能を実装することで自由にオーバーライドできます。

@@igxName のタブが完全に準拠し、使いやすくなりました。現在、@@igxName には以下のタブ位置が導入されています。
* `GroupBy` または `ツールバーの領域` (有効な場合)
* @@igxName `ヘッダー`
* @@igxName `本体`
* `列集計` (有効な場合)
* @@igxName `ページネーター` (有効な場合)

>[!NOTE]
> この動作変更のため、`tab` と `shift + tab` キーでセル間を移動することは @@igxName でサポートされなくなりました。
> Tabキーを押すと、以下のナビゲーション シーケンスが実行されます。 Grid ツール バー -> Grid ヘッダー -> Grid 本体 -> 集計 -> フッター / Grid ページネーター
> また、@@igxName テンプレートにフォーカス可能な要素が含まれる場合、それらもナビゲーション シーケンスに含まれます。

### ヘッダー ナビゲーション

矢印キーで簡単に移動できるように、@@igxName ヘッダーで完全なキーボード ナビゲーション サポートが導入されました。さらに、フィルタリング、並べ替え、グループ化などの異なる列機能をトリガーするキーの組み合わせがいくつかあります。以下は、@@igxName ヘッダー コンテナーをフォーカスして以下のキーの組み合わせを押した場合の動作を示します。

#### キーの組み合わせ

 - `上矢印` - ヘッダーで 1 つ上のセルへ移動 (ラッピングなし); 複数行レイアウトまたは列グループが定義されている場合のみ使用できます。
 - `下矢印` - ヘッダーの 1 つ下のセルに移動 (ラッピングなし); 複数行レイアウトまたは列グループが定義されている場合のみ使用できます。
 - `左矢印` - 1 つ左のセルへ移動 (行間のラッピングなし)
 - `右矢印` - 1 つ右のセルへ移動 (行間のラッピングなし)
 - `Ctrl + 左矢印` - 同じレベルの左端のセルに複数行レイアウトまたは複数列ヘッダーがある場合、行の左端のセルへ移動
 - `Home` - 同じレベルの左端のセルに複数行レイアウトまたは複数列ヘッダーがある場合、行の左端のセルへ移動
 - `Ctrl + 右矢印` - 同じレベルの右端のセルに複数行レイアウトまたは複数列ヘッダーがある場合、行の右端のセルへ移動
 - `End` - 同じレベルの右端のセルに複数行レイアウトまたは複数列ヘッダーがある場合、行の右端のセルへ移動
 - `Alt + L` - 詳細フィルタリングが有効な場合、詳細フィルタリング ダイアログを開きます。
 - `Ctrl + Shift + L` - 列がフィルター可能な場合、Excel スタイル フィルターまたはデフォルト (行) フィルターを開きます。
 - `Ctrl + 上矢印` - アクティブな列ヘッダーを昇順に並べ替えます。列が昇順で既に並べ替えられている場合、並べ替えを削除します。
 - `Ctrl + 下矢印` - アクティブな列ヘッダーを降順に並べ替えます。列が降順で既に並べ替えられている場合、並べ替えを削除します。
 - `Shift + Alt + 左矢印` - 列がグループ化可能としてマークされている場合、列をグループ化します。
 - `Shift + Alt + 右矢印` - 列がグループ化可能としてマークされている場合、アクティブな列のグループ化を解除します。
 - `Alt + 左矢印` または `Alt + 上矢印` - 列が縮小されていない場合、列グループ ヘッダーを縮小します。
 - `Alt + 右矢印` または `Alt +下矢印` - 列がまだ展開されていない場合、列グループヘッダーを展開します。
 - `Space` - 現在の列を選択します。列がすでに選択されている場合、選択を削除します。

### 本体ナビゲーション

以下は、@@igxName 本体をフォーカスして以下のキーの組み合わせを押した場合の動作を示します。

#### キーの組み合わせ

 - `上矢印` - 1 つ上のセルへ移動 @@if (igxName === 'IgxHierarchicalGrid') {、必要に応じてグリッド上階層へ移動} (ラッピングなし)
 - `下矢印` - 1 つ下のセルへ移動 @@if (igxName === 'IgxHierarchicalGrid') {、必要に応じてグリッド下階層へ移動} (ラッピングなし)
 - `左矢印` - 1 つ左のセルへ移動 (行間のラッピングなし)
 - `右矢印` - 1 つ右のセルへ移動 (行間のラッピングなし)
 - `Ctrl + 左矢印` - 行の左端のセルへ移動
 - `Ctrl + 右矢印` - 行の右端のセルへ移動
 - `Ctrl + 上矢印` - 現在の列の最初のセルへ移動
 - `Ctrl + 下矢印` - 現在の列の最後のセルへ移動
 - `Home` - 行の左端のセルへ移動
 - `End` - 行の右端のセルへ移動
 - `Ctrl + Home` - グリッドの左上のデータ セルへ移動
 - `Ctrl + End` - グリッドの右下のデータ セルへ移動
 - `Page Up` - 1 ページ (ビューポート) 上へスクロール
 - `Page Down` - 1 ページ (ビューポート) 下へスクロール
 - `Enter` - 編集モードに入る
 - `F2` - 編集モードに入る
 - `Esc` - 編集モードを終了する
 - `Tab` - 編集モードのセルがある場合のみ使用できます。フォーカスを行の次のセルへ順番に移動し、最後のセルのあとは次の行へ移動します。セルが編集モードの場合、フォーカスを次の編集可能なセルへ移動し、編集可能な一番右のセルから `CANCEL`、`DONE` ボタンへ移動し、`DONE` から編集可能な一番左のセルへ移動します。
 - `Shift + TabF2` - 編集モードのセルがある場合のみ使用できます。最初のセルに達した場合、フォーカスを前の行の最後の編集可能なセルに移動します。行編集が有効な場合、編集可能な一番右のセルからフォーカスを `CANCEL` および `DONE` ボタンへ移動し、`DONE` ボタンから現在の編集行の一番左の編集可能なセルへ移動します。
 - `Space` - 行が選択可能な場合、スペース キーを押下すると行選択をトリガーします。
 - グループ化された行で `Alt + 左矢印` または `Alt + 上矢印` - 行が縮小されていない場合はグループ行コンテンツを縮小します。
 - グループ化された行で `Alt + 左矢印` または `Alt + 下矢印` - 行が展開されていない場合はグループ行コンテンツを展開します。

次のデモは上記の組み合わせを示します。

ナビゲーション可能なグリッド コンテナーにフォーカスすると、上記のキーボードの組み合わせをガイドするアクション リストが表示されます。

### デモ
<div class="sample-container loading" style="height:700px">
    <iframe id="grid-keyboardnav-guide-sample-iframe" src='{environment:demosBaseUrl}/grid/grid-keyboardnav-guide' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-keyboardnav-guide-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
</div>
<div class="divider--half"></div>

### カスタム キーボード ナビゲーション
特定のキーが押されたときに上記に示したデフォルトの動作をカスタマイズすることは、キーボード　ナビゲーション機能が提供する利点の 1 つです。`Enter キー`または `Tab キー`が押されたときと同じです。`次のセル`または`下のセル`に移動するようなアクションは、強力なキーボードナビゲーションAPIを使用して簡単に処理できます。

- [`onGridKeydown`]({environment:angularApiUrl}/classes/igxgridbasedirective.html#ongridkeydown) が公開されます。イベントは [`IGridKeydownEventArgs`]({environment:angularApiUrl}/interfaces/igridkeydowneventargs.html) を発生します。このイベントは、キーボードで上記のキー組み合わせを介してのみ使用できます。他のすべてのキー操作では、`keydown` イベント `(keydown)="onKeydown($event)"` を使用できます。
- [`navigateTo`]({environment:angularApiUrl}/classes/igxgridbasedirective.html#navigateto) - 
このメソッドを使用すると、提供された `rowindex` と `visibleColumnIndex` に基づいて位置に移動できます。
- [`getNextCell`]({environment:angularApiUrl}/classes/igxgridbasedirective.html#navigateto) - 
現在の位置に従って、特定の基準に一致する次のセルを定義する [`ICellPosition`]({environment:angularApiUrl}/interfaces/icellposition.html) を返します。[`getPreviousCell`]({environment:angularApiUrl}/classes/igxgridbasedirective.html#getpreviouscell) メソッドの 3 番目のパラメータ－としてコールバック関数を渡すことができます。
- [`getPreviousCell`]({environment:angularApiUrl}/classes/igxgridbasedirective.html#getpreviouscell) -
現在の位置に従って、特定の基準に一致する前のセルを定義する [`ICellPosition`]({environment:angularApiUrl}/interfaces/icellposition.html) を返します。[`getPreviousCell`]({environment:angularApiUrl}/classes/igxgridbasedirective.html#getpreviouscell) メソッドの 3 番目のパラメータ－としてコールバック関数を渡すことができます。

 @@if (igxName === 'IgxHierarchicalGrid') {
> 注: [`getNextCell`]({environment:angularApiUrl}/classes/igxgridbasedirective.html#navigateto) および [`getPreviousCell`]({environment:angularApiUrl}/classes/igxgridbasedirective.html#getpreviouscell) は現在のレベルでは使用できないため、子セルにアクセスすることはできません。
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
- `Enter キー` を押すと列ベースのナビゲーション (垂直) を実行します。

```typescript
if (type === "dataCell" && args.event.key.toLowerCase() === "enter") {
    this.grid1.navigateTo(target.rowIndex + 1, target.visibleColumnIndex,
        (obj) => { obj.target.nativeElement.focus(); });
    ...
}
```

カスタム キーボード ナビゲーションを確認するために以下の操作を試すことができます。
- 数値列タイプのセルをダブルクリックし、セルが編集モードになったら、値を `7` に変更して `Tab キー` を押します。プロンプト メッセージが表示されます。
- セルを選択して `Enter キー` を数回押します。列ベースのナビゲーションが適用されます。

> 注: デフォルトの `Enter キー` 操作は上書きされ、編集モードに入るには代わりに `F2 キー`を使用できることに注意してください。

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

既知の制限
|制限|説明|
|--- |--- |
|スクロール可能な親コンテナを使用してグリッド内を移動します。|グリッドがスクロール可能な親コンテナ内に配置され、ユーザーがグリッド内をナビゲートする際にビュー範囲外にセルがある場合、親コンテナーはスクロールしません。|

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

