---
title: CSV/TSV へのエクスポート コンポーネント - ネイティブ Angular | Ignite UI for Angular
_description: ユーザーが編集またはオフライン プレゼンテーションのためにデータをエクスポートできます。CSV/TSV へのエクスポート Ignite UI for Angular コンポーネントで CSV または TSV 形式にエクスポートできます。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント, ネイティブ Angular コンポーネント スィート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, Angular Grid, Angular Data Grid, Angular Grid コントロール, Angular Grid コンポーネント, CSV エクスポート, TSV エクスポート
_language: ja
---

## CSV Exporter

<p class="highlight">
Ignite UI CSV Exporter サービスは、文字分割値 (CSV) 形式で生データ (配列) または `IgxGrid` からデータをエクスポートします。
エクスポート機能は `IgxCsvExporterService` クラスにカプセル化されます。</p>
<div class="divider"></div>

### CSV Exporter デモ

<div class="sample-container loading" style="height: 150px;">
    <iframe id="csv-export-sample-iframe" src="{environment:demosBaseUrl}/export-csv"
        width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
<button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="csv-export-sample-iframe"
    data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で開く</button>
</div>
<div class="divider--half"></div>

Ignite UI CSV Exporter をインスタンス化するには、**IgxCsvExporterService** を **app.module.ts** ファイルにインポートし、サービスを `providers` 配列に追加します。

```typescript
// app.module.ts

...
import { IgxCsvExporterService } from "igniteui-angular/services/index";

@NgModule({
  providers: [ IgxCsvExporterService ]
})

export class AppModule {}
```

エクスポート処理を開始するためにコンポーネントのテンプレートでボタンのハンドラーを使用できます。

```html
<button (click)="exportButtonHandler()">Export Data to CSV</button>
```

エクスポーター サービスにアクセスするには、コンポーネントのコンストラクターで `IgxCsvExporterService` 型の引数を定義します。Angular フレームワークはサービスのインスタンスを提供します。データを CSV 形式でエクスポートするには、エクスポーター サービスの `exportData` メソッドを起動します。このメソッドで、エクスポートするデータは最初の引数です。2 番目の引数は `IgxCsvExporterOptions` 型で、エクスポート処理の構成を許可します。

以下のコードはコンポーネントの typescript ファイルでエクスポート処理を実行します。

```typescript
// component.ts

...
import { IgxCsvExporterService, IgxCsvExporterOptions, CsvFileTypes } from "igniteui-angular/services/index";
...

public localData = [
  { Name: "Eric Ridley", Age: "26" },
  { Name: "Alanis Brook", Age: "22" },
  { Name: "Jonathan Morris", Age: "23" }
];

constructor(private csvExportService: IgxCsvExporterService) {
}

public exportButtonHandler() {
  this.csvExportService.exportData(this.localData, new IgxCsvExporterOptions("ExportedDataFile"), CsvFileTypes.CSV);
}

```

結果とは、エクスポート ボタンが表示されます。押されたとき、エクスポート処理をトリガーし、ブラウザーが "ExportedDataFile.csv" ファイルをダウンロードします。このファイルは `localData` 配列のデータを CSV 形式で含みます。


### IgxGrid のデータのエクスポート

CSV Exporter サービスも `IgxGrid` からのデータを CSV 形式でエクスポートできます。`IgxCsvExporterService` の `export` メソッドを起動し、`IgxGrid` を最初の引数として渡します。

以下は例です。

```html
<igx-grid #igxGrid1 [data]="localData" [autoGenerate]="true"></igx-grid>
<button (click)="exportButtonHandler()">Export IgxGrid</button>
```

```typescript
// component.ts

...
import { IgxCsvExporterService, IgxCsvExporterOptions, CsvFileTypes } from "igniteui-angular/services/index";
import { IgxGridComponent } from "igniteui-angular/grid/grid.component";
...

@ViewChild("igxGrid1") public igxGrid1: IgxGridComponent;

public localData = [
  { Name: "Eric Ridley", Age: "26" },
  { Name: "Alanis Brook", Age: "22" },
  { Name: "Jonathan Morris", Age: "23" }
];

constructor(private csvExportService: IgxCsvExporterService) {
}

public exportButtonHandler() {
  this.csvExportService.export(this.igxGrid1, new IgxCsvExporterOptions("ExportedDataFile", CsvFileTypes.CSV));
}

```

<div class="sample-container loading" style="height: 300px;">
    <iframe id="csv-export-sample-iframe2" src="{environment:demosBaseUrl}/export-csv-sample-1"
        width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
<button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="csv-export-sample-iframe2"
    data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で開く</button>
</div>


### エクスポートされた形式のカスタマイズ化

CSV Exporter は複数のエクスポート形式タイプをサポートします。エクスポート形式を以下の方法で指定できます:
* `IgxCsvExporterOptions` オブジェクトのコンストラクターの 2 番目の引数として指定
* `IgxCsvExporterOptions` オブジェクトの `fileType` プロパティを使用して指定

別のエクスポート形式は別のファイル拡張子および区切り記号があります。以下の表はエクスポート形式を相対するファイル拡張子および区切り記号にマップします。

| 形式 | ファイルの拡張子 | デフォルトの区切り記号 |
| :--- | :--- | :--- |
| `CsvFileTypes.CSV` | .csv | コンマ  |
| `CsvFileTypes.TAB` | .tab | タブ |
| `CsvFileTypes.TSV` | .tsv | タブ |

<div class="divider--half"></div>

`IgxCsvExporterOptions` オブジェクトの `valueDelimiter` プロパティを使用してカスタム区切り記号を指定できます。

### エクスポートされたコンテンツのカスタマイズ化

上記の例で、CSV Exporter サービスがすべての利用可能なデータをエクスポートしました。行または列のエクスポートをスキップするシナリオがあります。これを実装するには、各列のために発生される `onColumnExport` または各行のために発生される `onRowExport` イベントを処理し、イベント引数オブジェクトの `cancel` プロパティを `true` に設定すると各イベントをキャンセルできます。

以下の例では、名前が "Age" で、インデックスが 1 の場合、エクスポートから列を除外します。

```typescript
// component.ts

this.csvExportService.onColumnExport.subscribe((args: IColumnExportingEventArgs) => {
  if (args.header == "Age" && args.columnIndex == 1) {
      args.cancel = true;
  }
});
this.csvExportService.export(this.igxGrid1, new IgxCsvExporterOptions("ExportedDataFile"));
```

`IgxGrid` からのデータのエクスポートで、エクスポート処理は行フィルタリングおよび列の非表示などの機能に応じてグリッドで表示されるデータのみをエクスポートします。`IgxCsvExporterOptions` オブジェクトのプロパティを設定し、エクスポーター サービスを構成してフィルターした行または非表示の列を含むことができます。このプロパティは以下の表で説明します。

### API まとめ

以下は、CSV Exporter サービスのその他の API です。

#### 入力

以下の入力は **IgxCsvExporterService** コンポーネントで利用できます。

| 名前 | 型 | 説明 |
| :--- | :--- | :--- |
| `export` | Method | IgxGrid コンポーネントのデータを CSV 形式にエクスポートするメソッド。 |
| `exportData` | Method | 任意の配列のデータを CSV 形式にエクスポートするメソッド。 |

<div class="divider--half"></div>

以下の入力は **IgxCsvExporterOptions** コンポーネントで利用できます。

| 名前 | 型 | 説明 |
| :--- | :--- | :--- |
| `fileName` | string | エクスポート操作でファイル名を提供します。 |
| `fileType` | `CsvFileTypes` | CSV エクスポート形式を指定します。 |
| `ignoreColumnsOrder` | boolean | エクスポーターがグリッドの列順序を無視するかどうかを指定します。 |
| `ignoreColumnsVisibility` | boolean | 非表示される列をエクスポートするかどうかを指定します。 |
| `ignoreFiltering` | boolean | フィルター アウトされた行をエクスポートするかどうかを指定します。 |
| `ignoreSorting` | boolean | エクスポートされたデータをグリッドのように並べ替えるかどうかを指定します。 |
| `valueDelimiter` | string | 選択したファイル タイプのデフォルト区切り記号を上書きするカスタム区切り記号を提供します。 |

<div class="divider"></div>

#### 出力

以下の出力は **IgxCsvExporterService** コンポーネントで利用できます。

| 名前 | 型 | 説明 |
| :--- | :--- | :--- |
| `onColumnExport` | EventEmitter<`IColumnExportingEventArgs`> | 列がエクスポートされたときにイベントを発生します。 |
| `onRowExport` | EventEmitter<`IRowExportingEventArgs`> | 行がエクスポートされたときにイベントを発生します。 |
| `onExportEnded` | EventEmitter<`ICsvExportEndedEventArgs`> | エクスポート処理が完了されたときにイベントを発生します。 |

<div class="divider"></div>

### 追加のリソース

<div class="divider--half"></div>
コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)
