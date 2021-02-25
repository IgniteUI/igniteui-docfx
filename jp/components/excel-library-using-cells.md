---
title: Angular Excel ライブラリ | セルの使用 | インフラジスティックス
_description: インフラジスティックスの Angular Excel ライブラリのセルでセルへのアクセス、数式とコメントの追加、セルの結合、セルの書式設定などの操作を実行する方法について説明します。Ignite UI for Angular Excel のサンプルを是非お試しください!
_keywords: Excel library,  cell operations, Ignite UI for Angular, Infragistics, Excel ライブラリ, セル操作, インフラジスティックス
mentionedTypes: ['Workbook', 'Worksheet', 'WorksheetCell', 'WorkbookStyleCollection', 'IWorksheetCellFormat', 'WorkbookColorInfo', 'DisplayOptions']
_language: ja
---

# Angular セルの使用

Excel ワークシートの [`WorksheetCell`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/worksheetcell.html) オブジェクトは、ワークシートの実際のデータ値を保持するオブジェクトです。このトピックは、名前で領域にアクセス、数式やコメントをセルに追加、結合および書式設定など、セルで実行できる多くの操作について説明します。

## Angular セルの使用の例

<div class="sample-container loading" style="height: 150px">
    <iframe id="excel-library-overview-sample-iframe" src='{environment:dvDemosBaseUrl}/excel/excel-library-working-with-cells' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);" alt="Angular セルの使用の例"></iframe>
</div>


<div class="divider--half"></div>

<!-- Angular, React, WebComponents -->

## 参照

以下のコードは、以下のコード スニペットを使用するインポートを示します。

```ts
import { Workbook } from "igniteui-angular-excel";
import { WorkbookFormat } from "igniteui-angular-excel";
import { Worksheet } from "igniteui-angular-excel";
import { WorksheetTable } from "igniteui-angular-excel";
import { NamedReference } from "igniteui-angular-excel";
import { WorksheetCellComment } from "igniteui-angular-excel";
import { FormattedString } from "igniteui-angular-excel";
```

<!-- end: Angular, React, WebComponents -->

## セルと領域を参照

[`worksheet`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/worksheetcell.html#worksheet) オブジェクトの [`getCell`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/worksheet.html#getcell) または [`getRegion`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/worksheet.html#getregion) メソッドを呼び出して [`WorksheetCell`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/worksheetcell.html) オブジェクト または [`WorksheetRegion`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/worksheetregion.html) オブジェクトへアクセスできます。両メソッドはセルを参照する文字列パラメーターを許容します。書式設定を適用する場合または数式とセルのコンテンツで作業する場合にセル参照を取得すると便利です。

以下のコード例では、セルと領域を参照する方法を示します。

```ts
var workbook = new Workbook();
var worksheet = workbook.worksheets().add("Sheet1");

//Accessing a single cell
var cell = worksheet.getCell("E2");
//Accessing a range of cells
var region = worksheet.getRegion("G1:G10");
```

## セルと領域に名前でアクセス

Microsoft Excel では各セルとセル領域に名前が割り当てられています。アドレスの代わりにセルまたは領域の名前を使用してセルまたは領域を参照できます。

Infragistics Angular Excel Library は、[`worksheet`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/worksheetregion.html#worksheet) オブジェクトの [`getCell`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/worksheet.html#getcell) と [`getRegion`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/worksheet.html#getregion) メソッドによって、名前によるセルおよび領域の参照をサポートします。そのセルまたは領域を参照する [`NamedReference`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/namedreference.html) インスタンスを使用してセルまたは領域を参照します。

以下のコード スニペットは、セルまたは領域の名前の例です。

```ts
var workbook = new Workbook();
var worksheet = workbook.worksheets().add("Sheet1");

var cell_reference = workbook.namedReferences().add("myCell", "=Sheet1:A1");
var region_reference = workbook.namedReferences().add("myRegion", "=Sheet1!A1:B2");
```

以下のコードは、"myCell" と "myRegion" 名前付き参照によって参照されたセルと領域を取得する例です。

```ts
var cell = worksheet.getCell("myCell");
var region = worksheet.getRegion("myRegion");
```

## セルにコメントを追加

コメントによって、エンドユーザーがマウスをセル上にホバーするとセルのヒントまたはメモを表示することができます。コメントはテキストを含むツールチップのような吹き出しとして表示します。Infragistics Angular Excel Library は [`WorksheetCell`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/worksheetcell.html) オブジェクトの [`comment`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/worksheetcell.html#comment) プロパティでセルにコメントを追加できます。

以下のコード例は、セルにコメントを追加する方法を示します。

```ts
var workbook = new Workbook();
var worksheet = workbook.worksheets().add("Sheet1");

var cellComment = new WorksheetCellComment();
var commentText = new FormattedString("This cell has a comment.");
cellComment.text = commentText;

worksheet.rows(0).cells(0).comment = cellComment;
```

## セルに数式を追加

Infragistics Excel ライブラリは、ワークシートでセルまたはセルのグループに Microsoft Excel の数式を追加できます。[`WorksheetCell`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/worksheetcell.html) オブジェクトの [`applyFormula`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/worksheetcell.html#applyformula) メソッドを使用、または [`formula`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/worksheetcell.html#formula) オブジェクトを初期化してセルに割り当てることができます。セルに数式を適用する方法に関わらず、[`WorksheetCell`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/worksheetcell.html) オブジェクトのプロパティを使用して [`formula`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/worksheetcell.html#formula) オブジェクトにアクセスできます。値が必要な場合、セルの [`value`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/worksheetcell.html#value) プロパティを使用します。

以下のコードは、セルに数式を追加する方法を示します。

```ts
 var workbook = new Workbook();
 var worksheet = workbook.worksheets().add("Sheet1");
 worksheet.rows(5).cells(0).applyFormula("=SUM(A1:A5)");

 //Using a Formula object to apply a formula
 var sumFormula = Formula.parse("=SUM(A1:A5)", CellReferenceMode.A1);
 sumFormula.applyTo(worksheet.rows(5).cells(0));
```

## セル書式のコピー

セルには背景色、書式文字列、フォント スタイルなどさまざまな書式を持つことができます。以前書式設定したセルと同じ書式を持つようにする場合、[`WorksheetCell`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/worksheetcell.html) オブジェクトの [`cellFormat`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/worksheetcell.html#cellformat) プロパティで公開した各オプションを設定する代わりに [`cellFormat`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/worksheetcell.html#cellformat) オブジェクトの [`setFormatting`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/iworksheetcellformat.html#setformatting) メソッドを呼び出して [`cellFormat`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/worksheetcell.html#cellformat) オブジェクトへ渡してコピーします。これによって最初のセルから 2 番目のセルにすべての書式設定をコピーします。行、結合セル領域、または列でも行うことができます。

以下のコードは、2 列目の書式を 4 列目にコピーする方法を示します。

```ts
var workbook = new Workbook();
var worksheet = workbook.worksheets().add("Sheet1");

//Format 2nd column
worksheet.columns(1).cellFormat.fill = CellFill.createSolidFill("Blue");
worksheet.columns(1).cellFormat.font.bold = true;

//Copy format of 2nd column to 4th column
worksheet.columns(3).cellFormat.setFormatting(worksheet.columns(1).cellFormat);
```

## セルの書式設定

Infragistics Angular Excel Library は、セルの外観と動作をカスタマイズすることができます。[`WorksheetCell`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/worksheetcell.html)、[`WorksheetRow`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/worksheetrow.html)、[`WorksheetColumn`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/worksheetcolumn.html)、または [`WorksheetMergedCellsRegion`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/worksheetmergedcellsregion.html) オブジェクトの [`cellFormat`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/worksheetmergedcellsregion.html#cellformat) プロパティで公開したプロパティを設定してセルをカスタマイズできます。

セル外観の各アスペクトをカスタマイズできます。セルのフォント、背景、境界線だけでなくテキストの配列と回転を設定できます。セルのテキストで文字ごとに異なる書式を適用することさえ可能です。

書式文字列を割り当てることによってセル値を書式設定することも可能です。許容可能な書式文字列は .NET の標準書式および書式コードに従います。

以下のコードは、セルの書式設定と数値を通貨として表示する方法を示します。

```ts
var workbook = new Workbook(format);
var workbook = workbook.worksheets().add("Sheet1");

worksheet.columns(2).cellFormat.formatString = "\"$\"#,##0.00";
```

## Excel 2007 カラー モデル

このカラー パレットは Microsoft Excel 2007 UI のカラー ダイアログと似ています。[Excel オプション] => [保存] => [色] からこのカラー ダイアログを開くことができます。

[`CellFill`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/cellfill.html) クラスで静的なプロパティおよびメソッドを使用してすべての可能な塗りつぶしタイプを作成できます。以下の通りです:

-   `NoColor` - 色なしの塗りつぶしを表すプロパティ。ワークシートの背景画像がある場合は透けて見えます。

-   `CreateSolidFill` - Solid のパターン スタイルと、メソッドで指定された [`color`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/workbookcolorinfo.html#color) または [`WorkbookColorInfo`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/workbookcolorinfo.html) に設定された背景色を持つ [`CellFillPattern`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/cellfillpattern.html) インスタンスを返します。

-   `CreatePatternFill` - 指定されたパターン スタイルと、背景とパターンの色に指定された [`color`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/workbookcolorinfo.html#color) または [`WorkbookColorInfo`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/workbookcolorinfo.html) 値がある [`CellFillPattern`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/cellfillpattern.html) インスタンスを返します。

-   `CreateLinearGradientFill` - 角度とグラデーション境界が指定された [`CellFillLinearGradient`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/cellfilllineargradient.html) インスタンスを返します。

-   `CreateRectangularGradientFill` - 内側の長方形とグラデーション境界の左、上、右、下が指定された [`CellFillRectangularGradient`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/cellfillrectangulargradient.html) インスタンスを返します。内側の四角形値が指定されていない場合、セルの中心が内側の四角形として使用されます。

以下は、作成可能なさまさまな塗りつぶしを表す派生タイプです。

-   [`CellFillPattern`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/cellfillpattern.html) - 色なし、単色、パターン塗りつぶしのセル塗りつぶしを表すパターン。Excel の [セルの書式設定] ダイアログの [塗りつぶし] タブに、カラー セクションに直接対応する背景色の情報とパターンの色があります。

-   [`CellFillLinearGradient`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/cellfilllineargradient.html) - 線状グラデーションの塗りつぶしを表します。角度 (左から右の線状グラデーションの時計回りの角度) と、グラデーションの長さに沿って 2 つ以上の色のトランジションを説明するグラデーション境界コレクションがあります。

-   [`CellFillRectangularGradient`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/cellfillrectangulargradient.html) - 長方形グラデーションの塗りつぶしを表します。相対座標で、グラデーションが開始し、セルの端で終わる内側の四角形を説明する上、左、右、下の値があります。内側の四角形からセルの端までのパスに沿って 2 つ以上の色のトランジションを説明するグラデーション境界コレクションもあります。

以下のコード スニペットは、[`WorksheetCell`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/worksheetcell.html) で単色の塗りつぶしを作成する方法を示します。

```ts
var workbook = new Workbook();
var worksheet = workbook.worksheets().add("Sheet1");

var cellFill = CellFill.createSolidFill("Blue");
worksheet.rows(0).cells(0).cellFormat.fill = cellFill;
```

セルで線状グラデーションと長方形グラデーションを使用して、色 (Excel セルの背景、罫線などの色) を指定できます。これらのグラデーションを付けられたワークブックを .xls ファイル形式で保存して、Excel 2007/2010 で開いたときはグラデーションを表示し、これらのファイルを Microsoft Excel 2003 で開くときは、最初のグラデーション境界からのベタ一色の色でセルが塗りつぶされるようにします。

以下は色を定義する方法です。

-   自動的な色 (WindowText システム カラー)

-   任意のユーザー定義の RGB カラー

-   テーマの色

RGB またはテーマの色が使用される場合、色を明るくする、または暗くするためにオプションの濃淡を適用できます。この濃淡は Microsoft Excel 2007 UI では直接設定できませんが、ユーザーに表示されるカラー パレットのさまざまな色が濃淡が適用された実際的なテーマの色になります。

以下は各ワークブックと関連付けされた 12 色のテーマ色です。

-   ライト 1

-   ライト 2

-   ダーク 1

-   ダーク 2

-   アクセント1

-   アクセント2

-   アクセント3

-   アクセント4

-   アクセント5

-   アクセント6

-   ハイパーリンク

-   表示済みハイパーリンク

-   これらはワークブックが作成されるときの既定値で、Excel を介してカスタマイズできます。

色は、シールされた不変クラスである [`WorkbookColorInfo`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/workbookcolorinfo.html) クラスで定義されます。このクラスには静的な `Automatic` プロパティがあり、自動的な色を返します。色またはテーマ値とオプションの濃淡で [`WorkbookColorInfo`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/workbookcolorinfo.html) インスタンスを作成することを可能にするさまざまなコンストラクタがあります。

[`WorkbookColorInfo`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/workbookcolorinfo.html) の [`getResolvedColor`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/workbookcolorinfo.html#getresolvedcolor) メソッドは、Excel でファイルを開く際にユーザーに実際に表示される色を決定することが可能となります。

[`WorkbookColorInfo`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/workbookcolorinfo.html) がテーマの色を表す場合、Workbook インストールをこのメソッドに渡す必要があります。これによってテーマの色の RGB 値をワークブックから取得できます。

.xlsx など新しいファイル形式で保存するときは、より新しい色の情報が直接ファイルに保存されます。xls など古いファイル形式で保存するときは、パレットで最も近い色のインデックスが保存されます。さらに、古い形式には、新しい色の情報を示すために保存できる機能レコードがあります。

古い形式が Microsoft Excel 2003 以前のバージョンで開かれると機能が無視されますが Excel 2007 以降で開かれるとレコードが読み取られて色情報が標準形式レコードから以前読み込まれたインデックス付きの色を上書きします。

## Excel 書式設定のサポート

セルの `cellFormat` プロパティから返された [`cellFormat`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/worksheetcell.html#cellformat) オブジェクトを使用して [`WorksheetCell`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/worksheetcell.html) でさまざまな形式のホストを設定できます。この [`cellFormat`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/worksheetcell.html#cellformat) オブジェクトはさまざまなセルの側面 (境界線、フォント、塗りつぶし、配置) のスタイル設定、セルのサイズ自動調整やロックなどを設定できます。

[`workbook`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/sheet.html#workbook) オブジェクトの [`styles`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/workbook.html#styles) コレクションを使用して Microsoft Excel 2007 ビルトイン スタイルにアクセスできます。Excel のスタイル リストは、Microsoft Excel 2007 で [ホーム] タブの [セルのスタイル] ギャラリーにあります。

ワークブックの [`styles`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/workbook.html#styles) コレクションに標準スタイルという特別なタイプのスタイルがあり、コレクションの [`normalStyle`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/workbookstylecollection.html#normalstyle) プロパティによって、または Normal という名前でコレクションにインデックスしてアクセスできます。

[`normalStyle`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/workbookstylecollection.html#normalstyle) にはワークブックのすべてのセルのデフォルトのプロパティが含まれています。ただし、行、列またはセルで指定されている場合はその限りではありません。[`normalStyle`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/workbookstylecollection.html#normalstyle) でプロパティを変更すると、ワークブックのすべてのデフォルトのセル書式プロパティが変更されます。ワークブックの既定のフォント以外に変更したい場合などに便利です。

以下のメソッドを使用して [`styles`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/workbook.html#styles) コレクションのクリア、または [`clear`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/workbookstylecollection.html#clear) や [`reset`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/workbookstylecollection.html#reset) メソッドで定義された状態にリセットすることができます。両メソッドはすべてのユーザー定義スタイルを削除しますが [`clear`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/workbookstylecollection.html#clear) は [`styles`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/workbook.html#styles) コレクション全体をクリアします。

この機能では、[`style`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/iworksheetcellformat.html#style) プロパティが [`cellFormat`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/worksheetcell.html#cellformat) オブジェクトに追加されています。これは書式の親スタイルを表す、[`WorkbookStyle`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/workbookstyle.html) インターフェイスへの参照です。スタイルの書式では、このプロパティは常に null です。スタイルが親スタイルを持つことができないためです。行、列およびセル書式には、[`style`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/iworksheetcellformat.html#style) プロパティが常にデフォルトで [`normalStyle`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/workbookstylecollection.html#normalstyle) スタイルを返します。

[`style`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/iworksheetcellformat.html#style) プロパティを null に設定した場合、[`normalStyle`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/workbookstylecollection.html#normalstyle) スタイルに戻ります。スタイル コレクションで別のスタイルに設定される場合、そのスタイルはセル書式にすべての未設定のプロパティのデフォルトを保持するようになります。

[`style`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/iworksheetcellformat.html#style) プロパティをセル書式に設定した場合、[`style`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/iworksheetcellformat.html#style) に含まれる書式オプションはセル書式から削除されます。すべてのその他のプロパティはそのまま残されます。たとえば、境界線の書式を含むセルの [`style`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/iworksheetcellformat.html#style) を作成してスタイルをセルのスタイルとして設定した場合、セル書式の境界線の書式オプションは削除され、セル書式に塗りつぶしの書式のみ含まれます。

書式オプション フラグが書式から削除されると、すべての関連付けたプロパティは未設定値にリセットされます。したがってセル書式の罫線プロパティはデフォルト/未設定値に暗黙的にリセットされます。

行、列、セルおよび結合セルを表すクラスで、[`getResolvedCellFormat`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/worksheetcell.html#getresolvedcellformat) メソッドを使用することで、セルに実際に何が表示されるかを決定できます。

このメソッドは、ベースとなった関連付けられた [`cellFormat`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/worksheetcell.html#cellformat) に参照を返す [`cellFormat`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/worksheetcell.html#cellformat) インスタンスを返します。そのため [`cellFormat`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/worksheetcell.html#cellformat) プロパティへの以降の変更は、[`getResolvedCellFormat`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/worksheetcell.html#getresolvedcellformat) の呼び出しから返されるインスタンスに反映されます。

## セルの結合

セルの値または書式の設定以外に、2 つ以上のセルをひとつのセルとして表示するためにセルを結合することができます。セルを結合する場合、長方形の領域内にセルがなければなりません。

セルを結合した場合、領域の各セルが同じ値とセル書式になります。結合セルは同じ [`WorksheetMergedCellsRegion`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/worksheetmergedcellsregion.html) オブジェクトに関連付けされ、[`associatedMergedCellsRegion`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/worksheetcell.html#associatedmergedcellsregion) プロパティからアクセスできるようになります。[`WorksheetMergedCellsRegion`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/worksheetmergedcellsregion.html) オブジェクトも結果としてセルと同じ値およびセル書式になります。

領域または領域内の任意のセルの値（またはセル書式）を設定すると、すべてのセルおよび領域の値を変更します。セルを結合を解除する場合、以前結合したセルすべて結合以前に指定された共有のセル書式を保持します。ただし、領域の左上のセルのみが共有値を保持します。

結合されたセル領域を作成するには、セルの範囲を [`worksheet`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/worksheetcell.html#worksheet) オブジェクトの [`mergedCellsRegions`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/worksheet.html#mergedcellsregions) コレクションに追加する必要があります。このコレクションは、4 つの整数パラメーターを取得する `Add` メソッドを公開します。4 つのパラメーターは、開始する行と列（左上隅のセル）のインデックス、および終了する行と列（右下隅のセル）のインデックスを決定します。

```ts
var workbook = new Workbook();
var worksheet = workbook.worksheets().add("Sheet1");

// Make some column headers
worksheet.rows(1).cells(1).value = "Morning";
worksheet.rows(1).cells(2).value = "Afternoon";
worksheet.rows(1).cells(3).value = "Evening";

// Create a merged region from column 1 to column 3
var mergedRegion1 =  ws.mergedCellsRegions().add(0, 1, 0, 3);

// Set the value of the merged region
mergedRegion1.value = "Day 1";

// Set the cell alignment of the middle cell in the merged region.
// Since a cell and its merged region shared a cell format, this will ultimately set the format of the merged region
worksheet.rows(0).cells(2).cellFormat.alignment = HorizontalCellAlignment.Center;
```

## Excel に表示されるセル テキストを取得

セルに表示されるテキストは、書式文字列やセルが含まれる列幅など実際のセル値以外の複数の要因に依存します。

書式文字列は、セルの値がテキストに変換される方法と、書式設定された値でどのリテラル文字が表示されるのかを決定します。ここで書式コードに関する詳細情報を見つけることができます。

セルで使用可能な水平領域の量は、値がユーザーに表示される方法に大きく影響します。

さまざまな列幅に基づいて表示されるテキストは異なります。

数字を表示して “General” または “@” を含む書式文字列を使用するとき、セルの幅に合った書式設定を見つけるさまざまな書式があります。以下は書式の例です。

-   **Normal Value** - スペースに制限がない場合と同じように数字が表示されます。

-   **10 進数の削除** - 10 進数は、一致する書式が見つかるまで 1 つづつ削除されます。たとえば、値 12345.6789 値は以下の書式に一致するまで減らされます。 12345.679、12345.68、12345.7、12346。最初の有効数字が 1 つだけ残るとこれは停止します。したがって、たとえば 0.0001234567890 のような値は 0.0001 に短縮されます。

-   **指数、5 decimal digits** - 数字は 1.23457E+09 または 1.23457E-04 などの 0.00000E+00 の形式で表示されます。

-   **指数、4 decimal digits** - 数字は 1.23457E+09 または 1.23457E-04 などの 0.0000E+00 の形式で表示されます。

-   **指数、3 decimal digits** - 数字は 1.235E+09 または 1.235E-0 などの 0.000E+00 の形式で表示されます。

-   **指数、2 decimal digits** - 数字は 1.23E+09 または 1.23E-04 などの 0.00E+00 の形式で表示されます。

-   **指数、1 decimal digits** - 数字は 1.2E+09 または 1.2E-04 などの 0.0E+00 の形式で表示されます。

-   **指数、0 decimal digits** - 数字は 1E+09 または 1E-04 などの 0E+00 の形式で表示されます。

-   **四捨五入された値** - 最初の有効数字が数の 10 進部分にある場合、値は直近の整数値に丸められます。たとえば、値 0.0001234567890 の場合、0 に四捨五入され、セルに表示されるテキストは 0になります。

-   **Hash marks** - 数の凝縮されたバージョンを表示できる場合、ハッシュ (#) がセルの幅一杯繰り返されます。

-   **Empty string** - ハッシュ マークでセルを埋められない場合、空の文字列が表示されるセル テキストとして返されます。

数値の書式文字列に General または @ が含まれない場合、以下の段階のサイズ変更しかありません。普通の値、ハッシュ マーク、空の文字列。

テキストがセルで使用される場合、切り取られる、またはセル内にないにかかわらず、セルに表示されるテキストは常にフル値です。

これが該当しない唯一のときは、パディング文字が書式文字列で使用される時です。テキストのために十分な余地がないとき、値はすべてのハッシュ マークとして表示されます。

ワークシートの [`displayOptions`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/worksheet.html#displayoptions) の [`showFormulasInCells`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/displayoptions.html#showformulasincells) プロパティを設定してセルに結果の代わりに数式を表示できます。書式文字列やセル幅は無視されます。テキスト値は書式文字列が @ であるかのように表示します。整数でない数値は書式文字列が 0.0 であるかのように表示し、整数の数値は書式文字列が 0 のように表示します。

さらに、値が合わない場合、すべてのハッシュとして表示しません。完全に表示できないとしても、表示テキストはセル テキストとしてフル テキストを今まで通り返します。

以下のコード スニペットは、[`getText`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/worksheetcell.html#gettext) メソッドを使用して Excel で表示されるようなテキストを取得する方法を示します。

```ts
var workbook = new Workbook();
var worksheet = this.workbook.worksheets().add("Sheet1");

var cellText = worksheet.rows(0).cells(0).getText();
```
