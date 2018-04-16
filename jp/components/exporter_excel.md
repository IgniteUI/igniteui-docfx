---
title: Excel Exporter
_description: IgniteUI Excel Exporter サービスは Microsoft Excel 形式でデータをエクスポートできます。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スィート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, Excel エクスポート
_language: ja
---

## Excel Exporter

<p class="highlight">
Ignite UI Excel Exporter サービスは、Microsoft® Excel® 形式で生データ (配列) または `IgxGrid` のデータをエクスポートできます。エクスポート機能は、`IgxExcelExporterService` クラスでカプセル化され、MS Excel テーブル形式でデータをエクスポートします。この形式では、フィルタリングや並べ替えなどの機能が使用できます。</p>
<div class="divider"></div>

### Excel Exporter デモ

<div class="sample-container loading" style="height: 100px;">
    <iframe id="excel-export-sample-iframe" src="{environment:demosBaseUrl}/export-excel"
        width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
<button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="excel-export-sample-iframe"
    data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で開く</button>
</div>
<div class="divider--half"></div>

### 使用方法

Ignite UI Excel Exporter を使用するには、**IgxCsvExporterService** を **app.module.ts** ファイルにインポートし、`providers` 配列にサービスを追加します。

```typescript
// app.module.ts

...
import { IgxExcelExporterService } from "igniteui-angular/services/index";

@NgModule({
  providers: [ IgxExcelExporterService ]
})

export class AppModule {}
```

エクスポート処理を開始するためにコンポーネントのテンプレートでボタンのハンドラーを使用できます。

```html
<button (click)="exportButtonHandler()">Export Data to Excel</button>
```

エクスポーター サービスにアクセスするには、コンポーネントのコンストラクターで `IgxExcelExporterService` 型の引数を定義します。Angular フレームワークはサービスのインスタンスを提供します。データを MS Excel 形式でエクスポートするには、エクスポーター サービスの `exportData` メソッドを呼び出します。このメソッドで、エクスポートするデータは最初の引数です。2 番目の引数は `IgxExcelExporterOptions` 型で、エクスポート処理の構成を許可します。

以下のコードはコンポーネントの typescript ファイルでエクスポート処理を実行します。

```typescript
// component.ts

...
import { IgxExcelExporterService, IgxExcelExporterOptions } from "igniteui-angular/services/index";
...

public localData = [
  { Name: "Eric Ridley", Age: "26" },
  { Name: "Alanis Brook", Age: "22" },
  { Name: "Jonathan Morris", Age: "23" }
];

constructor(private excelExportService: IgxExcelExporterService) {
}

public exportButtonHandler() {
  this.excelExportService.exportData(this.localData, new IgxExcelExporterOptions("ExportedDataFile"));
}

```

正しく設定された場合、エクスポート ボタンが表示されます。ボタンが押されるとエクスポート処理をトリガーし、ブラウザーで "ExportedDataFile.csv" ファイルをダウンロードします。このファイルは `localData` 配列のデータを CSV 形式で含みます。


### IgxGrid のデータのエクスポート

Excel Exporter サービスも `IgxGrid` からのデータを MS Excel 形式でエクスポートできますが、`IgxExcelExporterService` の `export` メソッドを呼び出し、`IgxGrid` を最初の引数として渡す必要があります。

以下はその例です。

```html
<igx-grid #igxGrid1 [data]="localData" [autoGenerate]="true"></igx-grid>
<button (click)="exportButtonHandler()">Export IgxGrid</button>
```

```typescript
// component.ts

...
import { IgxExcelExporterService, IgxExcelExporterOptions } from "igniteui-angular/services/index";
import { IgxGridComponent } from "igniteui-angular/grid/grid.component";
...

@ViewChild("igxGrid1") public igxGrid1: IgxGridComponent;

public localData = [
  { Name: "Eric Ridley", Age: "26" },
  { Name: "Alanis Brook", Age: "22" },
  { Name: "Jonathan Morris", Age: "23" }
];

constructor(private excelExportService: IgxExcelExporterService) {
}

public exportButtonHandler() {
  this.excelExportService.export(this.igxGrid1, new IgxExcelExporterOptions("ExportedDataFile"));
}

```

<div class="sample-container loading" style="height: 300px;">
    <iframe id="excel-export-sample-iframe2" src="{environment:demosBaseUrl}/export-excel-sample-1"
        width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
<button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="excel-export-sample-iframe2"
    data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で開く</button>
</div>



### エクスポートするコンテンツのカスタマイズ化

上記の例で、Excel Exporter サービスがすべての利用可能なデータをエクスポートしました。行または列のエクスポートをスキップするシナリオがあります。これを実装するには、各列のために発生される `onColumnExport` または各行のために発生される `onRowExport` イベントを処理し、イベント引数オブジェクトの `cancel` プロパティを `true` に設定すると各イベントをキャンセルできます。

以下の例では、ヘッダーが "Age" で、インデックスが 1 の場合、エクスポートから列を除外します。

```typescript
// component.ts

this.excelExportService.onColumnExport.subscribe((args: IColumnExportingEventArgs) => {
  if (args.header == "Age" && args.columnIndex == 1) {
      args.cancel = true;
  }
});
this.excelExportService.export(this.igxGrid1, new IgxExcelExporterOptions("ExportedDataFile"));
```

`IgxGrid` からのデータのエクスポートで、エクスポート処理は行フィルタリングおよび列の非表示などの機能に応じてグリッドで表示されるデータのみをエクスポートします。`IgxExcelExporterOptions` オブジェクトのプロパティを設定し、エクスポーター サービスを構成してフィルターした行または非表示の列を含むことができます。このプロパティは以下の表で説明します。

### API まとめ

以下は、その他の Excel Exporter サービスの API です。

#### 入力

以下の入力は **IgxExcelExporterService** コンポーネントで利用できます。

| 名前 | 型 | 説明 |
| :--- | :--- | :--- |
| `export` | Method | IgxGrid コンポーネントのデータを MS Excel 形式にエクスポートするメソッド。 |
| `exportData` | Method | 配列データを MS Excel 形式でエクスポートするメソッド。 |

<div class="divider--half"></div>

以下の入力は **IgxExcelExporterOptions** コンポーネントで利用できます。

| 名前 | 型 | 説明 |
| :--- | :--- | :--- |
| `fileName` | string | エクスポート操作でファイル名を提供します。 |
| `ignorePinning` | boolean | 列固定が無視されるかどうかを指定します。ignoreColumnsOrder を true に設定した場合、このオプションは常に true に設定されているとみなされます。 |
| `ignoreColumnsOrder` | boolean | エクスポーターがグリッドの列順序を無視するかどうかを指定します。 |
| `ignoreColumnsVisibility` | boolean | 非表示列をエクスポートするかどうかを指定します。 |
| `ignoreFiltering` | boolean | フィルター アウトされた行をエクスポートするかどうかを指定します。 |
| `ignoreSorting` | boolean | エクスポートするデータをグリッドのように並べ替えるかどうかを指定します。 |
| `exportAsTable` | boolean | エクスポートするデータを Excel テーブルとして書式設定するかどうかを指定します。(デフォルトで True) |
| `columnWidth` | number | エクスポートする Excel ファイルの列幅を設定します。指定なしまたは 0 の場合、列の最大文字列の幅が使用されます。 |
| `rowHeight` | number | エクスポートされた Excel ファイルの行の高さを設定します。指定なしまたは 0 の場合、Excel 行のデフォルトの高さが使用されます。 |

<div class="divider"></div>

#### 出力

以下の出力は **IgxExcelExporterService** コンポーネントで利用できます。

| 名前 | 型 | 説明 |
| :--- | :--- | :--- |
| `onColumnExport` | EventEmitter<`IColumnExportingEventArgs`> | Excel 列がエクスポートされているときに発生します。 |
| `onRowExport` | EventEmitter<`IRowExportingEventArgs`> | Excel 行がエクスポートされているときに発生します。 |
| `onExportEnded` | EventEmitter<`IExcelExportEndedEventArgs`> | Excel ファイルがエクスポートされたときに発生します。 |

<div class="divider"></div>

### 追加のリソース

<div class="divider--half"></div>
コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)
