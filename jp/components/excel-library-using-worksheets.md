---
title: Angular Excel ライブラリ | ワークシートの使用 | インフラジスティックス
_description: インフラジスティックスの Angular Excel ライブラリを使用してワークシートの行やセルにデータを入力でき、対応する値を設定できます。Ignite UI for Angular Excel からアプリケーションへデータを簡単に転送できます。
_keywords: Excel library, worksheet, Ignite UI for Angular, Infragistics, Excel ライブラリ, ワークシート, インフラジスティックス
mentionedTypes: ['Workbook', 'Worksheet', 'WorksheetCell', 'DisplayOptions', 'WorksheetFilterSettings', 'IWorksheetCellFormat']
_language: ja
---

# Angular ワークシートの使用

Angular Excel Engine の [`worksheet`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/worksheetcell.html#worksheet) にデータが保存されます。Worksheet の行やセルにデータを入力でき、対応する値を設定できます。[`worksheet`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/worksheetcell.html#worksheet) は、フィルター、ソート、セル書式のカスタマイズができます。

## Angular ワークシートの使用の例

<div class="sample-container loading" style="height: 200px">
    <iframe id="excel-library-overview-sample-iframe" src='{environment:dvDemosBaseUrl}/excel/excel-library-operations-on-worksheets' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);" alt="Angular ワークシートの使用の例"></iframe>
</div>


<div class="divider--half"></div>

<!-- Angular, React, WebComponents -->

以下のコードは、以下のコード スニペットを使用するインポートを示します。

```ts
import { Workbook } from "igniteui-angular-excel";
import { Worksheet } from "igniteui-angular-excel";
import { WorkbookFormat } from "igniteui-angular-excel";
import { Color } from "igniteui-angular-core";

import { CustomFilterCondition } from "igniteui-angular-excel";
import { ExcelComparisonOperator } from "igniteui-angular-excel";
import { FormatConditionTextOperator } from "igniteui-angular-excel";
import { OrderedSortCondition } from "igniteui-angular-excel";
import { RelativeIndex } from "igniteui-angular-excel";
import { SortDirection } from "igniteui-angular-excel";
import { WorkbookColorInfo } from "igniteui-angular-excel";
```

<!-- end: Angular, React, WebComponents -->

## ガイドラインの設定

グリッド線は、ワークシートでセルを視覚的に分離するために使用されます。グリッド線は表示または非表示にできます。また、色を変更することもできます。

列と行のヘッダーは、ワークシートの [`displayOptions`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/worksheet.html#displayoptions) の [`showGridlines`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/displayoptions.html#showgridlines) プロパティを使用して、表示と非表示を切り替えることができます。以下のコードは、ワークシートのグリッドラインを非表示にする方法を示します。

```ts
var workbook = new Workbook(WorkbookFormat.Excel2007);
var worksheet = workbook.worksheets().add("Sheet1");

worksheet.displayOptions.showGridlines = false;
```

ワークシートの [`displayOptions`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/worksheet.html#displayoptions) の [`gridlineColor`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/displayoptions.html#gridlinecolor) プロパティを使用して、グリッド線の色を設定できます。以下のコードは、ワークシートのグリッド線を変更する方法を示します。

```ts
var workbook = new Workbook(WorkbookFormat.Excel2007);
var worksheet = workbook.worksheets().add("Sheet1");

worksheet.displayOptions.gridlineColor = "Red";
```

## ヘッダーの構成

列ヘッダーと行ヘッダーは、列と行を視覚的に特定するために使用します。また、現在選択されているセルやセル領域を強調表示する場合にも使用します。

列と行のヘッダーは、ワークシートの [`displayOptions`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/worksheet.html#displayoptions)  の [`showRowAndColumnHeaders`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/displayoptions.html#showrowandcolumnheaders) プロパティを使用して、表示と非表示を切り替えることができます。以下のコードは、列と行ヘッダーを非表示にする方法を示します。

```ts
var workbook = new Workbook(WorkbookFormat.Excel2007);
var worksheet = workbook.worksheets().add("Sheet1");

worksheet.displayOptions.showRowAndColumnHeaders = false;
```

## ワークシートの編集を設定

デフォルトで保存する [`worksheet`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/worksheetcell.html#worksheet) オブジェクトが有効です。[`worksheet`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/worksheetcell.html#worksheet) オブジェクトの [`protect`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/workbook.html#protect) メソッドを使用してワークシートを保護することにより、ワークシートの編集を禁止できます。このメソッドは、保護する部分を決定する null 許容型 `bool` 引数が多くあり、オプションの 1 つは編集オブジェクトを許容し、`false` に設定した場合はワークシートの編集を防止します。

以下のコードは、ワークシートで編集を無効にする方法を示します。

```ts
var workbook = new Workbook(WorkbookFormat.Excel2007);
var worksheet = workbook.worksheets().add("Sheet1");

worksheet.protect();
```

[`worksheet`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/worksheetcell.html#worksheet) オブジェクトの [`protect`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/workbook.html#protect) メソッドを使用して構造変更からワークシートを保護できます。

保護が設定されると、Worksheet オブジェクトの保護をこれらのオブジェクトでオーバーライドするために、[`cellFormat`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/worksheetcell.html#cellformat) オブジェクトの [`locked`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/iworksheetcellformat.html#locked) プロパティを各セル、行、マージされたセル領域、または列で設定することができます。たとえば、1 つの列のセルを除き、ワークシートのすべてのセルを読み取り専用にする必要がある場合、特定の [`WorksheetColumn`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/worksheetcolumn.html) オブジェクトで [`cellFormat`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/worksheetcell.html#cellformat) プロパティの [`locked`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/iworksheetcellformat.html#locked) を `false` に設定します。これにより、その列内のセルの編集をユーザーに許可し、ワークシートの他のセルの編集は禁止できます。

以下のコードはその方法を示します。

```ts
var workbook = new Workbook(WorkbookFormat.Excel2007);
var worksheet = workbook.worksheets().add("Sheet1");

worksheet.protect();
worksheet.columns(0).cellFormat.locked = false;
```

## ワークシート領域のフィルタリング

フィルタリングは、[`worksheet`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/worksheetcell.html#worksheet) オブジェクトの `filterSettings` プロパティから取得できるワークシートの [`WorksheetFilterSettings`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/worksheetfiltersettings.html) でフィルター条件を設定できます。フィルター条件は、フィルター条件追加、削除、変更される時に、または [`reapplyFilters`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/worksheetfiltersettings.html#reapplyfilters) メソッドがワークシートで呼び出されるときに限り再適用されます。フィルターは、領域内で常にデータを評価するわけではありません。

[`WorksheetFilterSettings`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/worksheetfiltersettings.html) オブジェクトの [`setRegion`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/worksheetfiltersettings.html#setregion) メソッドでフィルターを適用する領域を指定できます。

以下は、フィルターをワークシートに追加するためのメソッド一覧と概要です。

| メソッド                                                                                                                                                                                 |                                                      説明                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | :----------------------------------------------------------------------------------------------------------: |
| [`applyAverageFilter`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/worksheetfiltersettings.html#applyaveragefilter)                     |                        データ範囲全体の平均を下回るデータであるか上回るデータであるかという条件に基づいてデータを絞り込むことのできるフィルターです。                       |
| [`applyDatePeriodFilter`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/worksheetfiltersettings.html#applydateperiodfilter)               |                                        月または四半期の日付をフィルターできるフィルターを表します。                                        |
| [`applyFillFilter`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/worksheetfiltersettings.html#applyfillfilter)                           | 背景の塗りつぶしに基づいてセルを絞り込むフィルターを表します。このフィルターには CellFill を 1 つ指定します。この塗りつぶしのセルがデータ範囲に表示されることになります。他のセルはすべて非表示になります。 |
| `ApplyFixedValuesFilter`                                                                                                                                                             |                                      具体的な指定値に基づいて表示セルを絞り込むことのできるフィルターです。                                     |
| [`applyFontColorFilter`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/worksheetfiltersettings.html#applyfontcolorfilter)                 |      フォントの色に基づいてセルを絞り込むフィルターを表します。このフィルターには 1 つの色を指定します。この色のフォントのセルがデータ範囲に表示されることになります。他のセルはすべて非表示になります。     |
| [`applyIconFilter`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/worksheetfiltersettings.html#applyiconfilter)                           |                                       条件付き書式アイコンに基づいてセルを絞り込むフィルターを表します。                                      |
| [`applyRelativeDateRangeFilter`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/worksheetfiltersettings.html#applyrelativedaterangefilter) |                               フィルターの適用日を基点とした相対日付によって日付セルの範囲を絞り込むことのできるフィルターです。                              |
| [`applyTopOrBottomFilter`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/worksheetfiltersettings.html#applytoporbottomfilter)             |                                     ソートされた値リストの上位または下位にあるセルを表示できるフィルターです。                                    |
| [`applyYearToDateFilter`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/worksheetfiltersettings.html#applyyeartodatefilter)               |                             日付セルの範囲を現在の年の開始日からフィルターの評価実施日までの期間に絞り込むことのできるフィルターです。                            |
| [`applyCustomFilter`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/worksheetfiltersettings.html#applycustomfilter)                       |      1 つ、ないし 2 つのカスタム条件に基づいてデータを絞り込むことのできるフィルターです。この 2 つの絞り込み条件は論理積 (and) または論理和 (or) 演算子と組み合わせて使用できます。      |

以下のコード スニペットを使用してフィルターをワークシート領域に追加します。

```ts
var workbook = new Workbook(WorkbookFormat.Excel2007);
var worksheet = workbook.worksheets().add("Sheet1");

worksheet.filterSettings.setRegion("Sheet1!A1:A10");
worksheet.filterSettings.applyAverageFilter(0, AverageFilterType.AboveAverage);
```

## ペインの固定と分割

ペイン固定機能は、行をワークシートの上または列を左にで固定できます。ユーザーがスクロールしている間、固定した行や列は表示されたままになります。固定された行列は、削除できない実線によってワークシートの残りの部分と区切られます。

ペイン固定を有効にするために [`worksheet`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/worksheetcell.html#worksheet) オブジェクトの [`displayOptions`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/worksheet.html#displayoptions) の [`panesAreFrozen`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/displayoptions.html#panesarefrozen) プロパティを `true` に設定する必要があります。表示オプション [`frozenPaneSettings`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/displayoptions.html#frozenpanesettings) の `FrozenRows` と `FrozenColumns` プロパティを使用して固定する行列を指定できます。

また `FirstRowInBottomPane` と `FirstColumnInRightPane` を個々に使用して下ペインの最初の行または右ペインの最初の列を指定できます。

以下のコード スニペットは、ワークシートのペイン機能を固定する方法を示します。

```ts
var workbook = new Workbook(WorkbookFormat.Excel2007);
var worksheet = workbook.worksheets().add("Sheet1");

worksheet.displayOptions.panesAreFrozen = true;

worksheet.displayOptions.frozenPaneSettings.frozenRows = 3;
worksheet.displayOptions.frozenPaneSettings.frozenColumns = 1;

worksheet.displayOptions.frozenPaneSettings.firstColumnInRightPane = 2;
worksheet.displayOptions.frozenPaneSettings.firstRowInBottomPane = 6;
```

## ワークシート ズーム レベルの設定

各ワークシートのズーム レベルは、[`worksheet`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/worksheetcell.html#worksheet) オブジェクトの [`displayOptions`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/worksheet.html#displayoptions) の `MagnificationInNormalView` プロパティを使用して個別に変更できます。このプロパティは、10 から 400 の間の値を取得して適用したいズームのパーセンテージを表します。

以下のコードはその方法を示します。

```ts
var workbook = new Workbook(WorkbookFormat.Excel2007);
var worksheet = workbook.worksheets().add("Sheet1");

worksheet.displayOptions.magnificationInNormalView = 300;
```

## ワークシート レベルのソート

列または行にワークシート レベル オブジェクトでソートの条件を設定することによってソートが実行されます。列または行を昇順または降順にソートすることができます。

これには、シートの [`sortSettings`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/worksheetfiltersettings.html#sortsettings) プロパティを使用して取得できる [`worksheet`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/worksheetcell.html#worksheet) オブジェクトの [`WorksheetSortSettings`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/worksheetsortsettings.html) に領域とソートタイプを指定します。

シートのソート条件は、ソート条件が追加、削除、変更される時に、または [`reapplySortConditions`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/worksheetsortsettings.html#reapplysortconditions) メソッドがワークシートで呼び出されるときに限り再適用されます。列または行を領域でソートします。'Rows' はデフォルトのソートタイプです。

以下のコード スニペットは、ワークシートのセル領域を適用する方法を示します。

```ts
var workbook = new Workbook(WorkbookFormat.Excel2007);
var worksheet = workbook.worksheets().add("Sheet1");

worksheet.sortSettings.sortConditions().addItem(new RelativeIndex(0), new OrderedSortCondition(SortDirection.Ascending));
```

## ワークシートの保護

[`worksheet`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/worksheetcell.html#worksheet) オブジェクトで [`protect`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/workbook.html#protect) メソッドを呼び出してワークシートを保護できます。このメソッドは、以下のユーザー操作を制限または許容する null 許容型 `bool` パラメーターを公開します。

-   セルの編集
-   図形、コメント、チャートなどのオブジェクトやコントロールを編集します。
-   シナリオの編集。
-   データ フィルタリング。
-   セルの書式設定。
-   列の挿入、削除、書式設定。
-   行の挿入、削除、書式設定。
-   ハイパーリンクの挿入。
-   データのソート。
-   ピボット テーブルの使用

[`worksheet`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/worksheetcell.html#worksheet) オブジェクトで [`unprotect`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/workbook.html#unprotect) メソッドを呼び出してワークシートの保護を削除できます。

以下のコード スニペットは、上記にリストされたすべてのユーザー操作を保護を有効にします。

```ts
var workbook = new Workbook(WorkbookFormat.Excel2007);
var worksheet = workbook.worksheets().add("Sheet1");

worksheet.protect();
```

## ワークシートの条件付き書式設定

[`worksheet`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/worksheetcell.html#worksheet) の条件付き書式を設定するには、ワークシートの [`conditionalFormats`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/worksheet.html#conditionalformats) コレクションで公開される多数の Add メソッドを使用できます。この Add メソッドの最初のパラメーターは条件付き書式に適用する Worksheet の `string` 領域です。

Worksheet に追加可能な条件付き書式にその条件が true の場合に [`WorksheetCell`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/worksheetcell.html)  要素の外観を決定する [`cellFormat`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/worksheetcell.html#cellformat) プロパティがあります。たとえば、[`fill`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/iworksheetcellformat.html#fill) や [`font`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/iworksheetcellformat.html#font) などのこの [`cellFormat`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/worksheetcell.html#cellformat) プロパティにアタッチされるプロパティを使用してセルの背景およびフォント設定を決定できます。

ワークシート セルの可視化の動作が異なるため、[`cellFormat`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/worksheetcell.html#cellformat) プロパティがない条件付き書式もあります。この条件付き書式は [`DataBarConditionalFormat`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/databarconditionalformat.html)、[`ColorScaleConditionalFormat`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/colorscaleconditionalformat.html)、[`IconSetConditionalFormat`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/iconsetconditionalformat.html) です。

既存の [`workbook`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/sheet.html#workbook) を Excel から読み込む際に、その [`workbook`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/sheet.html#workbook) が読み込まれた場合も書式設定は保持されます。[`workbook`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/sheet.html#workbook) を Excel ファイルに保存する場合も保持されます。

以下のコード例はワークシートの条件付き書式の使用方法を紹介します。

```ts
var workbook = new Workbook(WorkbookFormat.Excel2007);
var worksheet = workbook.worksheets().add("Sheet1");

var color = new Color();
color.colorString = "Red";

var format = worksheet.conditionalFormats().addAverageCondition("A1:A10", FormatConditionAboveBelow.AboveAverage);
format.cellFormat.font.colorInfo = new WorkbookColorInfo(color);
```
