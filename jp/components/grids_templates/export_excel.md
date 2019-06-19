@@if (igxName === 'IgxGrid') {
---
title: Angular Grid Export to Excel | Ignite UI for Angular | Infragistics
_description: Learn how to use the Excel Exporter service in order to export Grid data to MS Excel file. Grid Angular material table has a rich set of helpful angular events
_keywords: data export, ignite ui for angular, infragistics
---
}
@@if (igxName === 'IgxTreeGrid') {
---
title: Angular Tree Grid Export to Excel | Ignite UI for Angular | Infragistics
_description: Learn how to use the Excel Exporter service in order to export Grid data to MS Excel file. Grid Angular material table has a rich set of helpful angular events
_keywords: data export, ignite ui for angular, infragistics
---
}
@@if (igxName === 'IgxHierarchicalGrid') {
---
title: Angular Hierarchical Grid Export to Excel | Ignite UI for Angular | Infragistics
_description: Learn how to use the Excel Exporter service in order to export Grid data to MS Excel file. Grid Angular material table has a rich set of helpful angular events
_keywords: data export, ignite ui for angular, infragistics
---
}

### @@igComponent Export to Excel Service

<p class="highlight">
The Excel Exporter service can export data to excel from the @@igxName. The data export functionality is encapsulated in the [`IgxExcelExporterService`]({environment:angularApiUrl}/classes/igxexcelexporterservice.html) class and the data is exported in MS Excel table format. This format allows features like filtering, sorting, etc. To do this you need to invoke the [`IgxExcelExporterService`]({environment:angularApiUrl}/classes/igxexcelexporterservice.html)'s [`export`]({environment:angularApiUrl}/classes/igxexcelexporterservice.html#export) method and pass the @@igxName component as first argument to export grid easily.</p>

<div class="divider"></div>

#### Excel Exporter デモ

@@if (igxName === 'IgxGrid') {
<div class="sample-container loading" style="height: 300px;">
    <iframe id="excel-export-sample-iframe" src="{environment:demosBaseUrl}/services/export-excel-sample-1"
        width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="excel-export-sample-iframe"
    data-demos-base-url="{environment:demosBaseUrl}">stackblitz で表示</button>
</div>
}
@@if (igxName === 'IgxTreeGrid') {
<div class="sample-container loading" style="height: 350px;">
    <iframe id="excel-export-sample-iframe" src="{environment:demosBaseUrl}/services/export-excel-tree-grid-sample"
        width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="excel-export-sample-iframe"
    data-demos-base-url="{environment:demosBaseUrl}">stackblitz で表示</button>
</div>
}
@@if (igxName === 'IgxHierarchicalGrid') {
    <!-- todo -->
}

<div class="divider--half"></div>

#### @@igComponent のデータのエクスポート

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

> **注:** Excel Exporter サービスは JSZip にピア依存関係があります。JSZip ライブラリは Excel Exporter の使用時にインストールしてください。

エクスポート処理の開始は、コンポーネントのテンプレートでボタンのハンドラーを使用します。

```html
<@@igSelector #@@igObjectRef [data]="localData" [autoGenerate]="true"></@@igSelector>
<button (click)="exportButtonHandler()">Export @@igxName to Excel</button>
```

エクスポーター サービスへのアクセスは、コンポーネントのコンストラクターで [`IgxExcelExporterService`]({environment:angularApiUrl}/classes/igxexcelexporterservice.html) 型の引数を定義し、Angular フレームワークはサービスのインスタンスを提供します。データを MS Excel 形式でエクスポートするには、エクスポーター サービスの [`export`]({environment:angularApiUrl}/classes/igxexcelexporterservice.html#export) メソッドを呼び出して@@igxNameコンポーネントを最初の引数として渡します。

以下のコードはコンポーネントの typescript ファイルでエクスポート処理を実行します。

```typescript
// component.ts

...
import { IgxExcelExporterService, IgxExcelExporterOptions } from "igniteui-angular";
import { @@igxNameComponent } from "igniteui-angular";
...

@ViewChild("@@igObjectRef") public @@igObjectRef: IgxGridComponent;

constructor(private excelExportService: IgxExcelExporterService) {
}

public exportButtonHandler() {
  this.excelExportService.export(this.@@igObjectRef, new IgxExcelExporterOptions("ExportedDataFile"));
}

```

上記をすべて行うと、@@igxName コンポーネントとその下にボタンを確認できます。ボタンを押すととエクスポート処理をトリガーし、ブラウザーで "ExportedDataFile.xlsx"  ファイルをダウンロードします。このファイルは MS Excel 形式の @@igComponent のデータを含みます。

#### エクスポートするコンテンツのカスタマイズ

上記の例では、Excel Exporter サービスで利用可能なデータをすべてエクスポートしました。行または列全体のエクスポートをしない方が良い場合があります。実装は、各列で発生される [`onColumnExport`]({environment:angularApiUrl}/classes/igxexcelexporterservice.html#oncolumnexport) または各行で発生される [`onRowExport`]({environment:angularApiUrl}/classes/igxexcelexporterservice.html#onrowexport) イベントを処理し、イベント引数オブジェクトの [`cancel`]({environment:angularApiUrl}/interfaces/irowexportingeventargs.html#cancel) プロパティを `true` に設定して各イベントをキャンセルします。

以下の例では、ヘッダーが "Age" で、インデックスが 1 の場合、エクスポートから列を除外します。

```typescript
// component.ts

this.excelExportService.onColumnExport.subscribe((args: IColumnExportingEventArgs) => {
  if (args.header == "Age" && args.columnIndex == 1) {
      args.cancel = true;
  }
});
this.excelExportService.export(this.@@igObjectRef, new IgxExcelExporterOptions("ExportedDataFile"));
```

@@igComponent コンポーネントのデータ エクスポートでは、行フィルタリングおよび列の非表示などの機能に応じて @@igComponent で表示されるデータのみをエクスポートします。[`IgxExcelExporterOptions`]({environment:angularApiUrl}/classes/igxexcelexporteroptions.html) オブジェクトのプロパティを設定し、エクスポーター サービスを構成してフィルターした行または非表示の列を含むことができます。このプロパティは以下の表で説明します。

#### API リファレンス

以下は、その他の Excel Exporter サービスの API です。

* [IgxExcelExporterService API]({environment:angularApiUrl}/classes/igxexcelexporterservice.html)
* [IgxExcelExporterOptions API]({environment:angularApiUrl}/classes/igxexcelexporteroptions.html)

使用したその他のコンポーネント:

* [@@igxNameComponent API]({environment:angularApiUrl}/classes/@@igTypeDoc.html)
* [@@igxNameComponent スタイル]({environment:sassApiUrl}/index.html#function-igx-grid-theme)

<div class="divider"></div>

#### その他のリソース

<div class="divider--half"></div>
コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)
