---
title: Excel コンポーネントの統合 - ネイティブ Angular | Ignite UI for Angular
_description: ユーザーは編集やオフライン プレゼンテーション用にデータをエクスポートできます。Ignite UI for Angular コンポーネントと統合した Excel 形式でエクスポートできます。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント スィート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, Angular Grid, Angular Data Grid, Angular Grid コントロール, Angular Grid コンポーネント, Excel エクスポート, Angular Excel コンポーネント, Angular エクスポート Excel
_language: ja
---

## Excel Exporter

<p class="highlight">
Ignite UI for Angular Excel Exporter サービスは、Microsoft® Excel® 形式で生データ (配列) または [**IgxGrid**](grid.md) のデータをエクスポートできます。エクスポート機能は、[`IgxExcelExporterService`]({environment:angularApiUrl}/classes/igxexcelexporterservice.html) クラスでカプセル化され、MS Excel テーブル形式でデータをエクスポートします。この形式では、フィルタリングや並べ替えなどの機能が使用できます。</p>
<div class="divider"></div>

### Excel Exporter デモ

<div class="sample-container loading" style="height: 100px;">
    <iframe id="excel-export-sample-iframe" src="{environment:demosBaseUrl}/export-excel"
        width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="excel-export-sample-iframe"
    data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で開く</button>
</div>
<div class="divider--half"></div>

### 使用方法

Ignite UI Excel Exporter を使用するには、[`IgxExcelExporterService`]({environment:angularApiUrl}/classes/igxexcelexporterservice.html) を app.module.ts ファイルにインポートし、`providers` 配列にサービスを追加します。

```typescript
// app.module.ts

...
import { IgxExcelExporterService } from "igniteui-angular/services/index";

@NgModule({
  providers: [ IgxExcelExporterService ]
})

export class AppModule {}
```

> 注: Excel Exporter サービスは JSZip にピア依存関係があります。JSZip ライブラリは Excel Exporter の使用時にインストールしてください。

エクスポート処理の開始は、コンポーネントのテンプレートでボタンのハンドラーを使用します。

```html
<button (click)="exportButtonHandler()">Export Data to Excel</button>
```

エクスポーター サービスへのアクセスは、コンポーネントのコンストラクターで [`IgxExcelExporterService`]({environment:angularApiUrl}/classes/igxexcelexporterservice.html) 型の引数を定義し、Angular フレームワークはサービスのインスタンスを提供します。データを MS Excel 形式でエクスポートするには、エクスポーター サービスの [`exportData`]({environment:angularApiUrl}/classes/igxexcelexporterservice.html#exportdata) メソッドを呼び出します。このメソッドで、エクスポートするデータは最初の引数です。2 番目の引数は [`IgxExcelExporterOptions`]({environment:angularApiUrl}/classes/igxexcelexporteroptions.html) 型で、エクスポート処理の構成を許可します。

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

正しく設定された場合、エクスポート ボタンが表示されます。ボタンが押されるとエクスポート処理をトリガーし、ブラウザーで "ExportedDataFile.csv" ファイルをダウンロードします。このファイルは `localData` 配列のデータを MS Excel 形式で含みます。


### IgxGrid データのエクスポート

Excel Exporter サービスでも [**IgxGrid**](grid.md) からのデータを MS Excel 形式でエクスポートできますが、[`IgxExcelExporterService`]({environment:angularApiUrl}/classes/igxexcelexporterservice.html) の [`export`]({environment:angularApiUrl}/classes/igxexcelexporterservice.html#export) メソッドを呼び出し、[**IgxGrid**](grid.md) を最初の引数として渡す必要があります。

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
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="excel-export-sample-iframe2"
    data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で開く</button>
</div>



### エクスポートするコンテンツのカスタマイズ

上記の例では、Excel Exporter サービスで利用可能なデータをすべてエクスポートしましたが、特定の行や列をエクスポートしない場合の実装は、各列で発生される [`onColumnExport`]({environment:angularApiUrl}/classes/igxexcelexporterservice.html#oncolumnexport) または各行で発生される [`onRowExport`]({environment:angularApiUrl}/classes/igxexcelexporterservice.html#onrowexport) イベントを処理し、イベント引数オブジェクトの [`cancel`]({environment:angularApiUrl}/interfaces/irowexportingeventargs.html#cancel) プロパティを `true` に設定して各イベントをキャンセルします。

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

[**IgxGrid**](grid.md) からのデータのエクスポートで、エクスポート処理は行フィルタリングおよび列の非表示などの機能に応じてグリッドで表示されるデータのみをエクスポートします。[`IgxExcelExporterOptions`]({environment:angularApiUrl}/classes/igxexcelexporteroptions.html) オブジェクトのプロパティを設定し、エクスポーター サービスを構成してフィルターした行または非表示の列を含むことができます。このプロパティは以下の表で説明します。

### API まとめ

以下は、その他の Excel Exporter サービスの API です。

* [`IgxExcelExporterService API`]({environment:angularApiUrl}/classes/igxexcelexporterservice.html)
* [`IgxExcelExporterOptions API`]({environment:angularApiUrl}/classes/igxexcelexporteroptions.html)

使用したその他のコンポーネント:

* [IgxGridComponent API]({environment:angularApiUrl}/classes/igxgridcomponent.html)
* [IgxGridComponent スタイル]({environment:sassApiUrl}/index.html#function-igx-grid-theme)

<div class="divider"></div>

### その他のリソース

<div class="divider--half"></div>
コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)
