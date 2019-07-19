---
title: Spreadsheet | Grid コントロール | Ignite UI for Angular | 構成 | Infragistics |
_description: スプレッドシート コントロールを使用して、Excel ドキュメントの作成と編集のエクスペリエンスをアプリケーションに直接埋め込むことができます。
_keywords: Spreadsheet, Ignite UI for Angular, Infragistics
_language: ja
mentionedTypes: ['Spreadsheet']
---

## Spreadsheet の構成

[`IgxSpreadsheetComponent`](spreadsheet_configuring.md) を使用すると、セルの編集、グリッド線とヘッダーの表示、保護、ズームレベル、および Excel ワークシートに関連するその他のさまざまなプロパティを含むがこれらに限定されない、コントロールのさまざまな側面を設定できます。

### デモ

<div class="sample-container loading" style="height: 500px">
    <iframe id="spreadsheet-overview-sample-iframe" src='{environment:demosBaseUrl}/spreadsheet/spreadsheet-configuring' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="spreadsheet-overview-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示
    </button>
</div>

<div class="divider--half"></div>

### セル編集の構成

ユーザーがセルの値を編集して新しい入力を確認すると、スプレッドシートの構成に応じて、[`IgxSpreadsheetComponent`](spreadsheet_configuring.md) コントロールに `Enter` キーを押すと現在アクティブなセルに隣接するセルに移動できます。

この Enter キーナビゲーションを有効にするために、IsEnterKeyNavigationEnabled プロパティを true に設定できます。false に設定すると、`Enter` キーを押してもアクティブ セルは変わりません。

`Enter` キーを押したときに移動する隣接セルの方向を、[`enterKeyNavigationDirection`](spreadsheet_configuring.md) プロパティを `Down`、`Up`、`Left` または `Right` に設定して構成することもできます。

次のコードスニペットは上記のデモです。

```html
<igx-spreadsheet isEnterKeyNavigationEnabled=true
    enterKeyNavigationDirection="Left">
</igx-spreadsheet>
```

```ts
import { SpreadsheetEnterKeyNavigationDirection } from "igniteui-react-spreadsheet/ES5/SpreadsheetEnterKeyNavigationDirection";
```

```ts
this.spreadsheet.isEnterKeyNavigationEnabled = true;
this.spreadsheet.enterKeyNavigationDirection = SpreadsheetEnterKeyNavigationDirection.Left;
```

### 数式バーの構成

[`IgxSpreadsheetComponent`](spreadsheet_configuring.md) を使用すると、コントロールの [`isFormulaBarVisible`](spreadsheet_configuring.md) プロパティを設定して数式バーの表示/非表示を設定できます。

次のコードスニペットは上記のデモです。

```html
<igx-spreadsheet isFormulaBarVisible=true></igx-spreadsheet>
```

```ts
this.spreadsheet.isFormulaBarVisible = true;
```

### ガイドラインの設定

[`IgxSpreadsheetComponent`](spreadsheet_configuring.md) を使用すると、コントロールの [`areGridlinesVisible`](spreadsheet_configuring.md) プロパティを設定し目盛線, グリッド線の表示/非表示を設定できます。

次のコードスニペットは上記のデモです。

```html
<igx-spreadsheet areGridlinesVisible=true></igx-spreadsheet>
```

```ts
this.spreadsheet.areGridlinesVisible = true;
```

### ヘッダーの構成

[`IgxSpreadsheetComponent`](spreadsheet_configuring.md) では、コントロールの [`areHeadersVisible`](spreadsheet_configuring.md) プロパティを設定することで、ヘッダーの表示設定を構成できます。

次のコードスニペットは上記のデモです。

```html
<igx-spreadsheet areHeadersVisible=false></igx-spreadsheet>
```

```ts
this.spreadsheet.areHeadersVisible = false;
```

### ナビゲーションの構成

[`IgxSpreadsheetComponent`](spreadsheet_configuring.md) コントロールは、コントロールが「終了モード」にあるかどうかを構成することによって、ワークシートのセル間のナビゲーションを構成できます。終了モードは、矢印キーを押すと、アクティブなセルが、押された矢印キーの方向に応じて、現在のセルからデータが隣接するセルの行または列の末尾に移動する機能です。この機能は、大量のデータ ブロックの終わりまですばやく移動するのに役立ちます。

たとえば、終了モードになっているときに、100x100 の大きなデータブロックをクリックして右矢印キーを押すと、現在の行の右端に移動し、データのある一番右の列に移動します。この操作の後、[`IgxSpreadsheetComponent`](spreadsheet_configuring.md) は終了モードから飛び出します。

ユーザーが End キーを押すと、実行時に終了モードが有効になりますが、スプレッドシート コントロールの IsInEndMode プロパティを設定することでプログラムで設定できます。

以下のコードスニペットは、[`IgxSpreadsheetComponent`](spreadsheet_configuring.md) を終了モードで開始させる方法を示しています。

```html
<igx-spreadsheet isInEndMode=true></igx-spreadsheet>
```

```ts
this.spreadsheet.isInEndMode = true;
```

### 保護の設定

[`IgxSpreadsheetComponent`](spreadsheet_configuring.md) は、ワークシートごとにブックを保護します。ワークシートの保護の設定は、ワークシートの Protect() メソッドを呼び出して保護し、`Unprotect()` メソッドを呼び出して保護解除することで設定できます。

以下のコードは、[`IgxSpreadsheetComponent`](spreadsheet_configuring.md) コントロールの現在アクティブなワークシートの保護を有効または無効にすることができます。

```ts
this.spreadsheet.activeWorksheet.protect();
this.spreadsheet.activeWorksheet.unprotect();
```

### 選択の設定

[`IgxSpreadsheetComponent`](spreadsheet_configuring.md) コントロールは、コントロールで許可されている選択の種類を設定できます。その後、ユーザーが修飾キー (`Shift` または `Ctrl`)  を押します。これは、スプレッドシートの [`selectionMode`](spreadsheet_configuring.md) プロパティを次のいずれかの値に設定することによって行われます。

-   `AddToSelection`: マウスでドラッグしているときにCtrlキーを押す必要がなく、新しいセル範囲が [`SpreadsheetSelection`](spreadsheet_configuring.md) オブジェクトの [`cellRanges`](spreadsheet_configuring.md) コレクションに追加され、モードに入った後の最初の矢印キーナビゲーションで範囲が追加されます。Shift+F8 を押すとモードに入ります。
-   `ExtendSelection`: アクティブセルを表す [`SpreadsheetSelection`](spreadsheet_configuring.md) オブジェクトの [`cellRanges`](spreadsheet_configuring.md) コレクション内の選択範囲は、マウスを使用してセルを選択するかキーボードで移動すると更新されます。
-   `Normal`: 選択範囲は、マウスをドラッグしてセルまたはセル範囲を選択すると置き換えられます。同様に、キーボードで移動すると新しい選択範囲が作成されます。Ctrl キーを押したままマウスを使用することで新しい範囲を追加できます。また、Shift キーを押したままマウスでクリックする、あるいはキーボードで移動することでアクティブ セルを含む選択範囲を変更できます。

上記の説明で述べた [`SpreadsheetSelection`](spreadsheet_configuring.md) オブジェクトは、[`IgxSpreadsheetComponent`](spreadsheet_configuring.md) コントロールの [`activeSelection`](spreadsheet_configuring.md) プロパティを使用して取得できます。

次のコードスニペットは、選択モードの設定を示しています。

```html
<igx-spreadsheet selectionMode="ExtendSelection"></igx-spreadsheet>
```

```ts
import { SpreadsheetCellSelectionMode } from "igniteui-react-spreadsheet/ES5/SpreadsheetCellSelectionMode";
```

```ts
this.spreadsheet.selectionMode = SpreadsheetCellSelectionMode.ExtendSelection;
```

[`IgxSpreadsheetComponent`](spreadsheet_configuring.md) コントロールの選択は、プログラムで設定または取得することもできます。単一選択の場合は、[`activeCell`](spreadsheet_configuring.md) プロパティを設定できます。複数選択は、[`IgxSpreadsheetComponent`](spreadsheet_configuring.md) コントロールの [`activeSelection`](spreadsheet_configuring.md) プロパティによって返される [`SpreadsheetSelection`](spreadsheet_configuring.md) オブジェクトを介して行われます。

[`SpreadsheetSelection`](spreadsheet_configuring.md) オブジェクトには、新しい [`SpreadsheetCellRange`](spreadsheet_configuring.md) オブジェクトの形式でスプレッドシートの選択範囲にプログラムでセルの範囲を追加できる `AddCellRange()` メソッドがあります。

次のコードスニペットは、スプレッドシートの選択範囲にセル範囲を追加する方法を示しています。

```ts
this.spreadsheet.activeSelection.addCellRange(new SpreadsheetCellRange(2, 2, 5, 5));
```

### タブバー領域の構成

[`IgxSpreadsheetComponent`](spreadsheet_configuring.md) コントロールは、`TabBarWidth` プロパティと `TabBarVisibility` プロパティを介して、現在アクティブな [`workbook`](spreadsheet_configuring.md) の [`WindowOptions`](spreadsheet_configuring.md) からタブバー領域の表示設定と幅の設定を使用します。

タブバー領域は、ワークシート名をコントロール内のタブとして可視化する領域です。

次のコードスニペットを使用して、タブバーの表示と幅を設定できます。

```ts
this.spreadsheet.workbook.windowOptions.tabBarVisible = false;

this.spreadsheet.workbook.windowOptions.tabBarWidth = 200;
```

### ズーム レベルの設定

[`IgxSpreadsheetComponent`](spreadsheet_configuring.md) コントロールは、[`zoomLevel`](spreadsheet_configuring.md) プロパティを設定することによってズームインおよびズームアウトをサポートします。ズーム レベルは最大 400%、最小 10% です。

このプロパティを数値に設定すると、整数としてのパーセンテージが表されるため、[`zoomLevel`](spreadsheet_configuring.md) を 100 に設定することは、100% に設定することと同じです。

次のコード スニペットは、スプレッドシートのズームレベルを設定する方法を示しています。

```html
<igx-spreadsheet zoomLevel=200></igx-spreadsheet>
```

```ts
this.spreadsheet.zoomLevel = 200;
```
