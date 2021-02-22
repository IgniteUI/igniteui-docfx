---
title: Angular スプレッドシート | 設定 | セル | 数式 | ナビゲーション | 選択 | インフラジスティックス
_description: Ignite UI for Angular によって Angular スプレッドシートを設定して、チャート データを向上させる方法について説明します。Infragistics はデータ可視化を向上させます。
_keywords: Excel Spreadsheet, Ignite UI for Angular, Infragistics, Excel スプレッドシート, インフラジスティックス
mentionedTypes: ['Spreadsheet']
_language: ja
---

# Angular Spreadsheet の構成

Angular Spreadsheet コンポネントは、セルの編集、グリッド線とヘッダーの表示、保護、ズームレベル、および Excel ワークシートに関連するその他のさまざまなプロパティなど、コントロールのさまざまな側面を設定できます。

## Angular Spreadsheet の構成の例

<div class="sample-container loading" style="height: 500px">
    <iframe id="spreadsheet-overview-sample-iframe" src='{environment:dvDemosBaseUrl}/excel/spreadsheet-config-options' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);" alt="Angular Spreadsheet の構成の例"></iframe>
</div>


<div class="divider--half"></div>

## セル編集の構成

ユーザーがセルの値を編集して新しい入力を確認すると、スプレッドシートの構成に応じて、[`IgxSpreadsheetComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxspreadsheetcomponent.html) コントロールに Enter キーを押すと現在アクティブなセルに隣接するセルに移動できます。

この `Enter` キーナビゲーションを有効にするために、[`isEnterKeyNavigationEnabled`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxspreadsheetcomponent.html#isenterkeynavigationenabled) プロパティを `true` に設定できます。false に設定すると、`Enter` キーを押してもアクティブ セルは変わりません。

Enter キーを押したときに移動する隣接セルの方向は、[`enterKeyNavigationDirection`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxspreadsheetcomponent.html#enterkeynavigationdirection) プロパティを `Down`、`Up`、`Left`、`Right` に設定して構成することもできます。

以下のコード スニペットは上記のデモです。

```html
<igx-spreadsheet isEnterKeyNavigationEnabled=true
    enterKeyNavigationDirection="Left">
</igx-spreadsheet>
```

```ts
this.spreadsheet.isEnterKeyNavigationEnabled = true;
this.spreadsheet.enterKeyNavigationDirection = SpreadsheetEnterKeyNavigationDirection.Left;
```

## 数式バーの構成

Angular [`IgxSpreadsheetComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxspreadsheetcomponent.html) は、コントロールの IsFormulaBarVisible プロパティを設定して数式バーの表示/非表示を設定できます。

以下のコード スニペットは上記のデモです。

```html
<igx-spreadsheet isFormulaBarVisible=true></igx-spreadsheet>
```

```ts
this.spreadsheet.isFormulaBarVisible = true;
```

## ガイドラインの設定

[`IgxSpreadsheetComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxspreadsheetcomponent.html) は、コントロールの [`areGridlinesVisible`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxspreadsheetcomponent.html#aregridlinesvisible) プロパティを設定して数式バーの表示/非表示を設定できます。

以下のコード スニペットは上記のデモです。

```html
<igx-spreadsheet areGridlinesVisible=true></igx-spreadsheet>
```

```ts
this.spreadsheet.areGridlinesVisible = true;
```

## ヘッダーの構成

[`IgxSpreadsheetComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxspreadsheetcomponent.html) は、AreHeadersVisible プロパティを設定してへッダーの可視性を設定できます。

以下のコード スニペットは上記のデモです。

```html
<igx-spreadsheet areHeadersVisible=false></igx-spreadsheet>
```

```ts
this.spreadsheet.areHeadersVisible = false;
```

## ナビゲーションの構成

[`IgxSpreadsheetComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxspreadsheetcomponent.html) コントロールは、コントロールが「終了モード」にあるかどうかを構成することによって、ワークシートのセル間のナビゲーションを構成できます。終了モードは、矢印キーを押すと、アクティブなセルが、押された矢印キーの方向に応じて、現在のセルからデータが隣接するセルの行または列の末尾に移動する機能です。この機能は、大規模なデータ ブロックの最後まですばやく移動する際に役立ちます。

たとえば、終了モードになっているときに、100x100 の大きなデータブロックをクリックして`右`矢印キーを押すと、現在の行の右端に移動し、データのある一番右の列に移動します。この操作の後、[`IgxSpreadsheetComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxspreadsheetcomponent.html) は終了モードから飛び出します。

ユーザーが `End` キーを押すと、実行時に終了モードが有効になりますが、スプレッドシート コントロールの [`isInEndMode`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxspreadsheetcomponent.html#isinendmode) プロパティを設定することでプログラムで設定できます。

以下のコード スニペットは、[`IgxSpreadsheetComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxspreadsheetcomponent.html) を終了モードで開始させる方法を示しています。

```html
<igx-spreadsheet isInEndMode=true></igx-spreadsheet>
```

```ts
this.spreadsheet.isInEndMode = true;
```

## 保護の設定

[`IgxSpreadsheetComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxspreadsheetcomponent.html) は、ワークシートごとにブックを保護します。ワークシートの保護の設定は、ワークシートの `Protect()` メソッドを呼び出して保護し、`Unprotect()` メソッドを呼び出して保護解除することで設定できます。

以下のコードは、[`IgxSpreadsheetComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxspreadsheetcomponent.html) コントロールの現在アクティブなワークシートの保護を有効または無効にすることができます。

```ts
this.spreadsheet.activeWorksheet.protect();
this.spreadsheet.activeWorksheet.unprotect();
```

## 選択の設定

[`IgxSpreadsheetComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxspreadsheetcomponent.html) コントロールは、コントロールで許可されている選択の種類を設定できます。その後、ユーザーが修飾キー (**Shift** または **Ctrl**)  を押します。これは、スプレッドシートの [`selectionMode`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxspreadsheetcomponent.html#selectionmode) プロパティを次のいずれかの値に設定することによって行われます。

-   `AddToSelection`: マウスでドラッグするときに Ctrl キーを押す必要はありません。新しいセル範囲が [`SpreadsheetSelection`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/spreadsheetselection.html) オブジェクトの [`cellRanges`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/spreadsheetselection.html#cellranges) コレクションに追加され、モードに入った後に最初の矢印キーナビゲーションで範囲が追加されます。シフト+F8 を押すとモードに入ります。
-   `ExtendSelection`: [`SpreadsheetSelection`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/spreadsheetselection.html) オブジェクトの [`cellRanges`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/spreadsheetselection.html#cellranges) コレクション内の選択範囲は、マウスを使用してセルを選択するかキーボードで移動すると更新されます。
-   `Normal`: セルまたはセルの範囲を選択するためにマウスをドラッグすると選択が置き換えられます。同様に、キーボードで移動すると新しい選択範囲が作成されます。Ctrl キーを押したままマウスを使用することで新しい範囲を追加できます。また、Shift キーを押したままマウスでクリックする、あるいはキーボードで移動することでアクティブ セルを含む選択範囲を変更できます。

上記の説明で述べた [`SpreadsheetSelection`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/spreadsheetselection.html) オブジェクトは、[`IgxSpreadsheetComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxspreadsheetcomponent.html) コントロールの [`activeSelection`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxspreadsheetcomponent.html#activeselection) プロパティを使用して取得できます。

次のコード スニペットは、選択モードの設定を示しています。

```html
<igx-spreadsheet selectionMode="ExtendSelection"></igx-spreadsheet>
```

```ts
this.spreadsheet.selectionMode = SpreadsheetCellSelectionMode.ExtendSelection;
```

[`IgxSpreadsheetComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxspreadsheetcomponent.html) コントロールの選択は、プログラムで設定または取得することもできます。単一選択の場合は、[`activeCell`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxspreadsheetcomponent.html#activecell) プロパティを設定できます。複数選択は、[`IgxSpreadsheetComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxspreadsheetcomponent.html) コントロールの ActiveSelection プロパティによって返される [`SpreadsheetSelection`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/spreadsheetselection.html) オブジェクトを介して行われます。

[`SpreadsheetSelection`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/spreadsheetselection.html) オブジェクトには、新しい [`SpreadsheetCellRange`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/spreadsheetcellrange.html) オブジェクトの形式でスプレッドシートの選択範囲にプログラムでセルの範囲を追加できる `AddCellRange()` メソッドがあります。

次のコード スニペットは、スプレッドシートの選択範囲にセル範囲を追加する方法を示しています。

```ts
this.spreadsheet.activeSelection.addCellRange(new SpreadsheetCellRange(2, 2, 5, 5));
```

## タブバー領域の構成

[`IgxSpreadsheetComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxspreadsheetcomponent.html) コントロールは、`TabBarWidth` プロパティと `TabBarVisibility` プロパティを介して、現在アクティブな Workbook の [`WindowOptions`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/windowoptions.html) からタブバー領域の表示設定と幅の設定を使用します。

タブバー領域は、ワークシート名をコントロール内のタブとして可視化する領域です。

次のコード スニペットを使用して、タブバーの表示と幅を設定できます。

```ts
this.spreadsheet.workbook.windowOptions.tabBarVisible = false;

this.spreadsheet.workbook.windowOptions.tabBarWidth = 200;
```

## ズーム レベルの設定

Angular Spreadsheet コンポーネントは、ZoomLevel プロパティを設定してズームインとズームアウト機能を追加できます。ズーム レベルは最大 400%、最小 10% です。

このプロパティを数値に設定すると、整数としてのパーセンテージが表されるため、[`zoomLevel`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxspreadsheetcomponent.html#zoomlevel) を 100 に設定することは、100% に設定することと同じです。

次のコード スニペットは、スプレッドシートのズームレベルを設定する方法を示しています。

```html
<igx-spreadsheet zoomLevel=200></igx-spreadsheet>
```

```ts
this.spreadsheet.zoomLevel = 200;
```
