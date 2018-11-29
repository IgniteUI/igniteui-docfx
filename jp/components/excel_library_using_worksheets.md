---
title: ワークシートを使用する Excel Library
_description: The Ignite UI for Excel Library component with Worksheet Operations.
_keywords: Ignite UI for Angular, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components, Native Angular Components Library, Angular Excel Library, Angular Excel Library Example, Angular Excel Library Component, Angular Excel Engine, Worksheet, Conditional Formatting, Sorting, Filtering, Gridlines, Headers, Protection
_language: ja
---
## ワークシートの使用

Infragistics Excel Engine の `Worksheet` にデータを保存できます。 Worksheet の行やセルにデータを入力し、対応する値を設定できます。以下のように `Worksheet` ではフィルター、並べ替え、ユーザー定義の書式設定が可能です。

### デモ

<div class="sample-container" style="height: 100px">
    <iframe id="excel-library-overview-sample-iframe" src='{environment:demosBaseUrl}/excel-library-operations-on-worksheets' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <!-- TODO uncomment when Stackblitz is ready for EXCEL
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="excel-library-operations-on-worksheets-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で開く
    </button> -->
</div> 

<div class="divider--half"></div>

### グリッド線の設定
グリッド線は、ワークシートでセルを視覚的に分離するために使用されます。グリッド線は表示または非表示にできます。また、色を変更することもできます。

ワークシートの `displayOptions` の `showGridlines` プロパティを使用するグリッドラインを表示または非表示にできます。以下のコードは、ワークシートのグリッド線を非表示にする方法を示します。

```typescript
var workbook = new Workbook(WorkbookFormat.Excel2007);
var worksheet = workbook.worksheets().add("Sheet1");
    
worksheet.displayOptions.showGridlines = false;
```

`displayOptions` の `gridlineColor` プロパティを使用してグリッドラインの色を設定できます。以下のコードは、ワークシートのグリッド線を赤色に変更する方法を示します。

```typescript
var workbook = new Workbook(WorkbookFormat.Excel2007);
var worksheet = workbook.worksheets().add("Sheet1");

worksheet.displayOptions.gridlineColor = "Red";
```

### ヘッダーの構成
列ヘッダーと行ヘッダーは、列と行を視覚的に特定するために使用します。また、現在選択されているセルやセル領域を強調表示する場合にも使用します。

列と行のヘッダーは、ワークシートの `displayOptions` の `showRowAndColumnHeaders` プロパティを使用して、表示と非表示を切り替えることができます。以下のコードは、列と行ヘッダーを非表示にする方法を示します。

```typescript
var workbook = new Workbook(WorkbookFormat.Excel2007);
var worksheet = workbook.worksheets().add("Sheet1");

worksheet.displayOptions.showRowAndColumnHeaders = false;
```

### ワークシートの編集を設定
デフォルトで保存する `Worksheet` オブジェクトが有効です。`Worksheet` オブジェクトの `Protect` メソッドを使用してワークシートを保護することにより、ワークシートの編集を禁止できます。このメソッドは、保護される部分を決定する `bool` 引数が多くあり、オプションの 1 つにオブジェクトの編集があり、`false` に設定するとワークシートの編集ができなくなります。

以下のコードは、ワークシートで編集を無効にする方法を示します。

```typescript
var workbook = new Workbook(WorkbookFormat.Excel2007);
var worksheet = workbook.worksheets().add("Sheet1");

worksheet.protect();
```

`Worksheet` オブジェクトの `protect` メソッドを使用して構造変更からワークシートを保護できます。

保護が設定されると、Worksheet オブジェクトの保護をこれらのオブジェクトでオーバーライドするために、`CellFormat` オブジェクトの `locked` プロパティを各セル、行、マージされたセル領域、または列で設定することができます。たとえば、1 つの列のセルを除き、ワークシートのすべてのセルを読み取り専用にする必要がある場合、特定の `WorksheetColumn` オブジェクトで `CellFormat` プロパティの `locked` を `false` に設定します。これにより、その列内のセルの編集をユーザーに許可し、ワークシートの他のセルの編集は禁止できます。

以下のコードはその方法を示します。

```typescript
var workbook = new Workbook(WorkbookFormat.Excel2007);
var worksheet = workbook.worksheets().add("Sheet1");

worksheet.protect();
worksheet.columns(0).cellFormat.locked = false;
```

### ワークシート領域のフィルタリング
フィルタリングは、`Worksheet` オブジェクトの `filterSettings` プロパティから取得できるワークシートの `CellFormat` でフィルター条件を設定できます。フィルター条件は、フィルター条件が追加、削除、変更されるとき、または `reapplyFilters` メソッドがワークシートで呼び出される場合のみ再適用されます。フィルターは、領域内で常にデータを評価するわけではありません。

`WorksheetFilterSettings` オブジェクトの `setRegion` メソッドでフィルターを適用する領域を指定できます。

以下は、ワークシートにフィルターを追加するために使用できるメソッドと説明のリストです。

| メソッド			| 説明     																	|
| ------------- 	|:-------------:																	|
|`ApplyAverageFilter`|データ範囲全体の平均を下回るデータであるか上回るデータであるかという条件に基づいてデータを絞り込むことのできるフィルターです。|
|`ApplyDatePeriodFilter`|月または四半期の日付をフィルターできるフィルターを表します。|
|`ApplyFillFilter`|背景の塗りつぶしに基づいてセルを絞り込むフィルターを表します。このフィルターには CellFill を 1 つ指定します。この塗りつぶしのセルがデータ範囲に表示されることになります。他のセルはすべて非表示になります。|
|`ApplyFixedValuesFilter`|具体的な指定値に基づいて表示セルを絞り込むことのできるフィルターです。|
|`ApplyFontColorFilter`|フォントの色に基づいてセルを絞り込むフィルターを表します。このフィルターに 1 色を指定します。 この色のフォントのセルがデータ範囲に表示されることになります。他のセルはすべて非表示になります。|
|`ApplyIconFilter`|条件付き書式アイコンに基づいてセルを絞り込むフィルターを表します。|
|`ApplyRelativeDateRangeFilter`|フィルターの適用日を基点とした相対日付によって日付セルの範囲を絞り込むことのできるフィルターです。|
|`ApplyTopOrBottomFilter`|並べ替えられた値リストの上位または下位にあるセルを表示できるフィルターです。|
|`ApplyYearToDateFilter`|日付セルの範囲を現在の年の開始日からフィルターの評価実施日までの期間に絞り込むことのできるフィルターです。|
|`ApplyCustomFilter`|1 つ、ないし 2 つのカスタム条件に基づいてデータを絞り込むことのできるフィルターです。この 2 つの絞り込み条件は論理積 (and) または論理和 (or) 演算子と組み合わせて使用できます。|

以下のコードスニペットは、ワークシート領域にフィルターを追加する例です。

```typescript
var workbook = new Workbook(WorkbookFormat.Excel2007);
var worksheet = workbook.worksheets().add("Sheet1");

worksheet.filterSettings.setRegion("Sheet1!A1:A10");
worksheet.filterSettings.applyAverageFilter(0, AverageFilterType.AboveAverage);
```

### ペインの固定と分割
ペイン固定機能は、行をワークシートの上または列を左にで固定できます。ユーザーがスクロールしている間、固定した行や列は表示されたままになります。固定された行列は、削除できない実線によってワークシートの残りの部分と区切られます。

ペイン固定を有効にするには、`Worksheet` オブジェクトの `displayOptions` を `true` に設定する必要があります。次に表示オプションの `frozenPaneSettings` の `frozenRows` や `frozenColumns` プロパティで固定する行または列を指定できます。

`firstRowInBottomPane` および `firstColumnInRightPane`  プロパティを使用して下のペインまたは最初の行または右ペインので最初の列を指定できます。

以下のコード スニペットは、ワークシートのペイン固定機能を使用する方法を示します。

```typescript
var workbook = new Workbook(WorkbookFormat.Excel2007);
var worksheet = workbook.worksheets().add("Sheet1");

worksheet.displayOptions.panesAreFrozen = true;
    
worksheet.displayOptions.frozenPaneSettings.frozenRows = 3;
worksheet.displayOptions.frozenPaneSettings.frozenColumns = 1;

worksheet.displayOptions.frozenPaneSettings.firstColumnInRightPane = 2;
worksheet.displayOptions.frozenPaneSettings.firstRowInBottomPane = 6;
```

### ワークシート ズーム レベルの設定
各ワークシートのズーム レベルは、`Worksheet` オブジェクトの `displayOptions` の `magnificationInNormalView` プロパティを使用して変更できます。このプロパティは 10 と 400 の間の値を取得し、適用するズーム率を表します。

以下のコードはその方法を示します。

```typescript
var workbook = new Workbook(WorkbookFormat.Excel2007);
var worksheet = workbook.worksheets().add("Sheet1");

worksheet.displayOptions.magnificationInNormalView = 300;
```

### ワークシート レベルの並べ替え
列または行にワークシート レベル オブジェクトで並べ替えの条件を設定することによって並べ替えが実行されます。列または行を昇順または降順に並べ替えることができます。

これには、シートの `sortSettings` プロパティを使用して取得できる領域と `Worksheet` オブジェクトの並べ替えタイプを指定します。

ワークシートの並べ替え条件は、並べ替え条件が追加、削除、変更される時に、または reapplySortConditions メソッドがシートで呼び出されるときに限り再適用されます。列または行を領域で並べ替えます。"Rows" がデフォルトの並べ替えタイプです。

以下のコード スニペットは、ワークシートのセル領域に並べ替えを適用する方法です。

```typescript
var workbook = new Workbook(WorkbookFormat.Excel2007);
var worksheet = workbook.worksheets().add("Sheet1");

worksheet.sortSettings.sortConditions().addItem(new RelativeIndex(0), new OrderedSortCondition(SortDirection.Ascending));
```

### ワークシートの保護
`Worksheet` オブジェクトで `protect` メソッドを呼び出してワークシートを保護できます。このメソッドは、以下のユーザー操作を制限または許容する null 許容型 `bool` パラメーターを公開します。

- セルの編集。
- 図形、チャート、その他のコントロールなどオブジェクトの編集。
- シナリオの編集。
- データのフィルタリング。
- セルの書式設定。
- 列の挿入、削除、書式設定。
- 行の挿入、削除￥、書式設定。
- ハイパーリンクの挿入。
- データの並べ替え。
- ピボット テーブルの使用

`Worksheet` オブジェクトで `unprotect` メソッド呼び出してワークシート保護を削除できます。

以下のコード スニペットは、上記リストユーザー操作すべての保護を有効にする方法を示します。

```typescript
var workbook = new Workbook(WorkbookFormat.Excel2007);
var worksheet = workbook.worksheets().add("Sheet1");

worksheet.protect();
```

### ワークシートの条件付き書式設定
`Worksheet` オブジェクトの条件付き書式の設定は、ワークシートの `conditionalFormats` コレクションで公開される Add メソッドを使用します。この Add メソッドの最初のパラメーターは条件付き書式に適用するワークシートの文字列領域です。

ワークシートに追加可能な条件付き書式の多くが条件が true の場合に `WorksheetCell` 要素の外観を決定する `cellFormat` プロパティがあります。たとえば、`Fill` と `Font` などのこの `cellFormat` プロパティにアタッチされるプロパティを使用してセルの背景およびフォント設定を決定できます。

ワークシート セルの可視化の動作が異なるため、`cellFormat` プロパティがない条件付き書式もあります。この条件付き書式は、`DataBarConditionalFormat`、`ColorScaleConditionalFormat`、`IconSetConditionalFormat` です。

既存の `Workbook` を Excel から読み込む場合、`Workbook` を読み込真れる際に書式が保持されます。`Workbook` を Excel ファイルに保存する場合も保持されます。

以下のコード例は、ワークシートで条件付き書式の使用方法を示します。

```typescript
var workbook = new Workbook(WorkbookFormat.Excel2007);
var worksheet = workbook.worksheets().add("Sheet1");

var color = new Color();
color.colorString = "Red";
    
var format = worksheet.conditionalFormats().addAverageCondition("A1:A10", FormatConditionAboveBelow.AboveAverage);
format.cellFormat.font.colorInfo = new WorkbookColorInfo(color);
```
