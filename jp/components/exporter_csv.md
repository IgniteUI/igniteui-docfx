---
title: CSV/TSV へのエクスポート コンポーネント - ネイティブ Angular | Ignite UI for Angular
_description: ユーザーが編集またはオフライン プレゼンテーションのためにデータをエクスポートできます。CSV/TSV へのエクスポート Ignite UI for Angular コンポーネントで CSV または TSV 形式にエクスポートできます。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント, ネイティブ Angular コンポーネント スィート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, Angular Grid, Angular Data Grid, Angular Grid コントロール, Angular Grid コンポーネント, CSV エクスポート, TSV エクスポート
_language: ja
---

## CSV Exporter

<p class="highlight">
Ignite UI CSV Exporter サービスは、文字分割値 (CSV) 形式で生データ (配列) または [**IgxGrid**](grid/grid.md) からデータをエクスポートします。
エクスポート機能は [`IgxCsvExporterService`]({environment:angularApiUrl}/classes/igxcsvexporterservice.html) クラスにカプセル化されます。</p>
<div class="divider"></div>

### CSV Exporter デモ

<div class="sample-container loading" style="height: 150px;">
    <iframe id="csv-export-sample-iframe" src="{environment:demosBaseUrl}/services/export-csv"
        width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="csv-export-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">Stackblitz で表示</button>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="csv-export-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
</div>
<div class="divider--half"></div>

Ignite UI CSV Exporter をインスタンス化するには、[`IgxCsvExporterService`]({environment:angularApiUrl}/classes/igxcsvexporterservice.html) を app.module.ts ファイルにインポートし、サービスを `providers` 配列に追加します。

```typescript
// app.module.ts

...
import { IgxCsvExporterService } from "igniteui-angular/services/index";

@NgModule({
  providers: [ IgxCsvExporterService ]
})

export class AppModule {}
```

> 注: CSV Exporter サービスは JSZip にピア依存関係があります。 JSZip ライブラリは CSV Exporter 使用時にインストールしてください。

エクスポート処理を開始するためにコンポーネントのテンプレートでボタンのハンドラーを使用できます。

```html
<button (click)="exportButtonHandler()">Export Data to CSV</button>
```

Exporter サービスにアクセスするには、コンポーネントのコンストラクターで [`IgxCsvExporterService`]({environment:angularApiUrl}/classes/igxcsvexporterservice.html) 型の引数を定義します。Angular フレームワークはサービスのインスタンスを提供します。データを CSV 形式でエクスポートするには、エクスポーター サービスの [`exportData`]({environment:angularApiUrl}/classes/igxcsvexporterservice.html#exportdata) メソッドを起動します。このメソッドで、エクスポートするデータは最初の引数です。2 番目の引数は [`IgxCsvExporterOptions`]({environment:angularApiUrl}/classes/igxcsvexporteroptions.html) 型で、エクスポート処理の構成を許可します。

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

CSV Exporter サービスも [**IgxGrid**](grid/grid.md) からのデータを CSV 形式でエクスポートできます。[`IgxCsvExporterService`]({environment:angularApiUrl}/classes/igxcsvexporterservice.html) の [`export`]({environment:angularApiUrl}/classes/igxcsvexporterservice.html#export) メソッドを起動し、[**IgxGrid**](grid/grid.md) を最初の引数として渡します。

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
    <iframe id="csv-export-sample-iframe2" data-src="{environment:demosBaseUrl}/services/export-csv-sample-1" width="100%" height="100%" seamless frameBorder="0" class="lazyload"></iframe>
</div>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="csv-export-sample-iframe2" data-demos-base-url="{environment:demosBaseUrl}">Stackblitz で表示</button>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="csv-export-sample-iframe2" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
</div>


### エクスポート形式のカスタマイズ

CSV Exporter は複数のエクスポート形式タイプをサポートします。エクスポート形式は以下の方法で指定できます。
* [`IgxCsvExporterOptions`]({environment:angularApiUrl}/classes/igxcsvexporteroptions.html) オブジェクトのコンストラクターの 2 番目の引数として指定。
* [`IgxCsvExporterOptions`]({environment:angularApiUrl}/classes/igxcsvexporteroptions.html) オブジェクトの [`fileType`]({environment:angularApiUrl}/classes/igxcsvexporteroptions.html#filetype) プロパティを使用して指定。

別のエクスポート形式は別のファイル拡張子および区切り記号があります。以下の表はエクスポート形式を相対するファイル拡張子および区切り記号にマップします。

| 形式 | ファイルの拡張子 | デフォルトの区切り記号 |
| :--- | :--- | :--- |
| [`CsvFileTypes.CSV`]({environment:angularApiUrl}/enums/csvfiletypes.html#csv) | .csv | Comma |
| [`CsvFileTypes.TAB`]({environment:angularApiUrl}/enums/csvfiletypes.html#tab) | .tab | Tab |
| [`CsvFileTypes.TSV`]({environment:angularApiUrl}/enums/csvfiletypes.html#tsv) | .tsv | Tab |

<div class="divider--half"></div>

[`IgxCsvExporterOptions`]({environment:angularApiUrl}/classes/igxcsvexporteroptions.html) オブジェクトの [`valueDelimiter`]({environment:angularApiUrl}/classes/igxcsvexporteroptions.html#valuedelimiter) プロパティを使用してカスタム区切り記号を指定できます。

### エクスポートされたコンテンツのカスタマイズ

上記の例では、CSV Exporter サービスで利用可能なデータをすべてエクスポートしましたが、特定の行や列をエクスポートしない場合の実装は、各列で発生される [`onColumnExport`]({environment:angularApiUrl}/classes/igxcsvexporterservice.html#oncolumnexport) または各行で発生される [`onRowExport`]({environment:angularApiUrl}/classes/igxcsvexporterservice.html#onrowexport) イベントを処理し、イベント引数オブジェクトの [`cancel`]({environment:angularApiUrl}/interfaces/irowexportingeventargs.html#cancel) プロパティを `true` に設定して各イベントをキャンセルできます。

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

[**IgxGrid**](grid/grid.md) からのデータのエクスポートで、エクスポート処理は行フィルタリングおよび列の非表示などの機能に応じてグリッドで表示されるデータのみをエクスポートします。[`IgxCsvExporterOptions`]({environment:angularApiUrl}/classes/igxcsvexporteroptions.html) オブジェクトのプロパティを設定し、エクスポーター サービスを構成してフィルターした行または非表示の列を含むことができます。このプロパティは以下の表で説明します。

### API まとめ

以下は、CSV Exporter サービスのその他の API です。

* [IgxCsvExporterService API]({environment:angularApiUrl}/classes/igxcsvexporterservice.html)
* [IgxCsvExporterOptions API]({environment:angularApiUrl}/classes/igxcsvexporteroptions.html)

使用したその他のコンポーネント:

* [IgxGridComponent API]({environment:angularApiUrl}/classes/igxgridcomponent.html)
* [IgxGridComponent スタイル]({environment:sassApiUrl}/index.html#function-igx-grid-theme)

<div class="divider"></div>

### 追加のリソース

<div class="divider--half"></div>
コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)
