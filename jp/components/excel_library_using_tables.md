---
title: テーブルを使用した Excel Library
_description: テーブルを使用した Ignite UI for Excel Library コンポーネント
_keywords: Ignite UI for Angular, Angular, ネイティブ Angular コンポーネント スイート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント, ネイティブ Angular コンポーネント ライブラリ, Angular Excel ライブラリ, Angular Excel ライブラリ例,  Angular Excel Library コンポーネント, Angular Excel Engine, Tables, Sorting, フィルタリング
_language: ja
---
## テーブルの使用

Infragistics Excel Engine の `WorksheetTable` 機能は、行列のデータを書式設定できます。ワークシート テーブルのデータは他の行や列のデータから個々に管理できます。

<!--### Demo

<!-- <div class="sample-container" style="height: 500px">
    <iframe id="excel-library-overview-sample-iframe" src='{environment:demosBaseUrl}/excel-library-working-with-tables' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <!-- TODO uncomment when Stackblitz is ready for EXCEL
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="excel-library-working-with-tables-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示
    </button>
</div>  -->

<div class="divider--half"></div>

### テーブルをワークシートに追加
Infragistics Excel Engine のワークシート テーブルは、`WorksheetTable` オブジェクトとワークシートの `tables` コレクションに追加されます。テーブルを追加するには、このコレクションで `add` メソッドを呼び出す必要があります。このメソッドは、ヘッダーを含むかどうかなどテーブルを追加する領域の追加、オプションでオブジェクトのテーブル スタイルを指定できます。

以下のコード デモは、ヘッダーを含むテーブルを `Worksheet` の A1 to G10 (A1 to G1 が列ヘッダー) 領域に追加する方法を示します。

```typescript
var workbook = new Workbook(WorkbookFormat.Excel2007);
var worksheet = this.workbook.worksheets().add("Sheet1");

worksheet.tables().add("A1:G10", true);
```

テーブルを追加後 `WorksheetTable` で `insertColumns`、`insertDataRows`、`deleteColumns`、または `deleteDataRows` メソッドを呼び出して行列を追加または削除して変更できます。テーブルの `Resize` メソッドを使用して新しいテーブル範囲を設定できます。

以下のコード スニペットは、3 つのメソッドの使用方法を示します。

```typescript
var workbook = new Workbook(WorkbookFormat.Excel2007);
var worksheet = this.workbook.worksheets().add("Sheet1");
var table = worksheet.tables().add("A1:G10", true);

//Will add 5 columns at index 1.
table.insertColumns(1, 5);

//Will add 5 rows at index 0.
table.insertDataRows(0, 5);

//Will delete 5 columns starting at index 1.
table.deleteColumns(1, 5);

//Will delete 5 rows starting at index 0.
table.deleteDataRows(0, 5);

//Will resize the table to be in the region of A1:G15.
table.resize("A1:G15");
```

### テーブルのフィルタリング
`WorksheetTable` の列にフィルターを適用します。フィルターが列で適用されると、テーブルに適用したすべてのフィルター条件と一致する行を決定するために再評価されます。

テーブルのデータを後で変更または行の `hidden` プロパティを変更した場合、フィルター条件は自動的に再評価されません。テーブル列フィルターが追加、削除、変更、あるいは `reapplyFilters` メソッドがテーブルで呼ばれた場合にテーブルのフィルター条件のみ再適用されます。

以下は、`WorksheetTable` の列で使用できるフィルター タイプです。

- `AverageFilter` - このコードは、列のすべてのセルの平均値の上か下かに基づいてセルをフィルターする方法を示します。
- `CustomFilter` - 1 つ以上のカスタム条件に基づいてセルをフィルターできます。
- `DatePeriodFilter` - 年の特定の月または四半期の日付を含むセルのみが表示されます。
- `FillFilter` - 特定の塗りつぶしを含むセルのみが表示されます。
- `FixedValuesFilter` - 特定の表示値のみに一致するまたは日付/時間の特定のグループ内に分類されるセルが表示されます。
- `FontColorFilter` - 特定のフォントの色を含むセルのみが表示されます。
- `RelativeDateRangeFilter` - フィルターが適用されたときに、次の日または前の四半期のように日付の相対的な時間の範囲内で発生するかどうかに基づいて、日付値ををフィルターできます。
- `TopOrBottomFilter` - このフィルターはトップまたはボトム N 値をフィルターします。このフィルターはトップまたはボトム N %値をフィルターします。
- `YearToDateFilter` - 年の始まりとフィルターが適用される日付の間に発生する場合、日付値を含むYearToDateFilter-をフィルターできます。

以下のコード スニペットは、`WorksheetTable`' の最初の列に平均を超えるフィルターを適用する方法を示します。

```typescript
var workbook = new Workbook(WorkbookFormat.Excel2007);
var worksheet = this.workbook.worksheets().add("Sheet1");
var table = worksheet.tables().add("A1:G10", true);

table.columns(0).applyAverageFilter(AverageFilterType.AboveAverage);
```

### テーブルの並べ替え
テーブル列で並べ替え条件を設定すると並べ替えが実行されます。並べ替え条件が列で設定されると、テーブルのセルの順番を決定するためにテーブルのすべての並べ替え条件が再評価されます。並べ替えの基準を満たすためにセルを移動させる必要があるとき、テーブルのセルの行全体が 1 つの単位として移動されます。

テーブルのデータが後で変更される場合、並べ替え条件は自動的に再評価されません。テーブルの並べ替え条件は、並べ替え条件の追加、削除、変更時、または `reapplySortConditions` メソッドがテーブルで呼び出される場合のみ再適用されます。並べ替え条件が再評価されると、表示されたセルのみが並べ替えられます。非表示行のすべてのセルは適切に維持されます。

テーブル列から並べ替え条件へアクセスする以外に `WorksheetTable` の `sortSettings` プロパティの `sortConditions` コレクションからも公開されます。これは、列/並べ替え条件のペアの順番に並べられたコレクションです。このコレクション内の順序は並べ替えの優先順位です。

列に設定可能な並べ替え条件タイプは次のとおりです。

- `OrderedSortCondition` - セル値に基づいてセルを昇順または降順に並べ替えます。
- `CustomListSortCondition` - テキストまたは表示値に基づいて定義された順序でセルを並べ替えます。この並べ替え方法は、日付がカレンダーに表示されるためアルファベット順よりも便利です。
- `FillSortCondition` - 塗りつぶしが特定のパターン/グラデーションであるかどうかに基づいてセルを並べ替えます。
- `FontColorSortCondition` - フォントが特定の色であるかどうかによってセルを並べ替えます。

また `WorksheetTable` の `sortSettings` の `caseSensitive` プロパティは、文字列が大文字と小文字を区別して並べ替えできるかどうかを開発者が設定できます。

以下のコード スニペットは、`WorksheetTable` に `OrderedSortCondition` を適用する方法です。

```typescript
var workbook = new Workbook(WorkbookFormat.Excel2007);
var worksheet = this.workbook.worksheets().add("Sheet1");
var table = worksheet.tables().add("A1:G10", true);

table.columns(0).sortCondition = new OrderedSortCondition(SortDirection.Ascending);

//Alternative:
table.sortSettings.sortConditions().addItem(table.columns(0), new OrderedSortCondition(SortDirection.Ascending));
```