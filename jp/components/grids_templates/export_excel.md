@@if (igxName === 'IgxGrid') {
---
title: Angular Grid の Excel エクスポート | Ignite UI for Angular | インフラジスティックス
_description: Excel Exporter サービスを使用してグリッド データを MS Excel ファイルにエクスポートする方法を説明します。Grid Angular Material テーブルには、役立つ Angular イベントの豊富なセットがあります。
_keywords: データ エクスポート, ignite ui for angular, インフラジスティックス
_language: ja
---
}
@@if (igxName === 'IgxTreeGrid') {
---
title: Angular Tree Grid を Excel へエクスポート | Ignite UI for Angular | インフラジスティックス
_description: Excel Exporter サービスを使用してグリッド データを MS Excel ファイルにエクスポートする方法を説明します。Grid Angular Material テーブルには、役立つ Angular イベントの豊富なセットがあります。
_keywords: データ エクスポート, ignite ui for angular, インフラジスティックス
_language: ja
---
}
@@if (igxName === 'IgxHierarchicalGrid') {
---
title: Angular Hierarchica Grid を Excel へエクスポート | Ignite UI for Angular | インフラジスティックス
_description: Excel Exporter サービスを使用してグリッド データを MS Excel ファイルにエクスポートする方法を説明します。Grid Angular Material テーブルには、役立つ Angular イベントの豊富なセットがあります。
_keywords: データ エクスポート, ignite ui for angular, インフラジスティックス
_language: ja
---
}

### @@igComponent Excel を Excel サービスへエクスポート

<p class="highlight">
Excel Exporter サービスは @@igxName のデータを MS Excel へエクスポートできます。エクスポート機能は、[`IgxExcelExporterService`]({environment:angularApiUrl}/classes/igxexcelexporterservice.html) クラスでカプセル化され、MS Excel テーブル形式でデータをエクスポートします。この形式ではフィルタリングや並べ替えなどの機能が使用でき、[`IgxExcelExporterService`]({environment:angularApiUrl}/classes/igxexcelexporterservice.html) の [`export`]({environment:angularApiUrl}/classes/igxexcelexporterservice.html#export) メソッドを呼び出して最初の引数として @@igxName コンポーネントを渡し、グリッドを簡単にエクスポートします。</p>

<div class="divider"></div>

#### Excel Exporter デモ

@@if (igxName === 'IgxGrid') {
<div class="sample-container loading" style="height: 300px;">
    <iframe id="excel-export-sample-iframe" src="{environment:demosBaseUrl}/services/export-excel-sample-1"
        width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="excel-export-sample-iframe"
    data-demos-base-url="{environment:demosBaseUrl}">Stackblitz で表示</button>
</div>
}
@@if (igxName === 'IgxTreeGrid') {
<div class="sample-container loading" style="height: 350px;">
    <iframe id="excel-export-sample-iframe" src="{environment:demosBaseUrl}/services/export-excel-tree-grid-sample"
        width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="excel-export-sample-iframe"
    data-demos-base-url="{environment:demosBaseUrl}">Stackblitz で表示</button>
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

@@if (igxName === 'IgxGrid') {
#### 既知の制限

|制限|説明|
|--- |--- |
|グループ化したデータのエクスポート|複数列でグループ化されたグリッド データをエクスポートすると、Excel の出力結果ではグループ化されていないフラットなコレクションになります。|
}

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
