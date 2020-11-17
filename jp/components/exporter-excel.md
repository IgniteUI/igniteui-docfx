---
title: Excel コンポーネントの統合 - ネイティブ Angular | Ignite UI for Angular
_description: ユーザーは編集やオフライン プレゼンテーション用にデータをエクスポートできます。Ignite UI for Angular コンポーネントと統合した Excel 形式でエクスポートできます。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント スィート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, Angular Grid, Angular Data Grid, Angular Grid コントロール, Angular Grid コンポーネント, Excel エクスポート, Angular Excel コンポーネント, Angular エクスポート Excel
_language: ja
---

# Excel Exporter

<p class="highlight">
Ignite UI for Angular Excel Exporter サービスは、Microsoft® Excel® 形式で生データ (配列) または [**IgxGrid**](grid/grid.md) または [**IgxTreeGrid**](treegrid/tree-grid.md) のデータをエクスポートできます。エクスポート機能は、[`IgxExcelExporterService`]({environment:angularApiUrl}/classes/igxexcelexporterservice.html) クラスでカプセル化され、MS Excel テーブル形式でデータをエクスポートします。この形式では、フィルタリングやソートなどの機能が使用できます。</p>
<div class="divider"></div>

## Angular Excel Exporter の例

<div class="sample-container loading" style="height: 100px;">
    <iframe id="excel-export-sample-iframe" src="{environment:demosBaseUrl}/services/export-excel" width="100%" height="100%" seamless="" frameborder="0" onload="onSampleIframeContentLoaded(this);" alt="Angular Excel Exporter の例"></iframe>
</div>
<p style="margin: 0;padding-top: 0.5rem">このサンプルが気に入りましたか? 完全な Angular ツールキットにアクセスして、すばやく独自のアプリの作成を開始します。<a class="no-external-icon mchNoDecorate trackCTA" target="_blank" href="https://www.infragistics.com/products/ignite-ui-angular/download" data-xd-ga-action="Download" data-xd-ga-label="Ignite UI for Angular">無料でダウンロードできます。</a></p>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="excel-export-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="excel-export-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">Stackblitz で表示</button>
</div>
<div class="divider--half"></div>

## 使用方法

IgniteUI Excel Exporter を使用するには、[`IgxExcelExporterService`]({environment:angularApiUrl}/classes/igxexcelexporterservice.html) を app.module.ts ファイルにインポートし、`providers` 配列にサービスを追加します。

```typescript
// app.module.ts

...
import { IgxExcelExporterService } from "igniteui-angular";

@NgModule({
  providers: [ IgxExcelExporterService ]
})

export class AppModule {}
```

> [!Note]
> Excel Exporter サービスは JSZip にピア依存関係があります。JSZip ライブラリは Excel Exporter の使用時にインストールしてください。

エクスポート処理の開始は、コンポーネントのテンプレートでボタンのハンドラーを使用します。

```html
<button (click)="exportButtonHandler()">Export Data to Excel</button>
```

エクスポーター サービスへのアクセスは、コンポーネントのコンストラクターで [`IgxExcelExporterService`]({environment:angularApiUrl}/classes/igxexcelexporterservice.html) 型の引数を定義し、Angular フレームワークはサービスのインスタンスを提供します。データを MS Excel 形式でエクスポートするには、エクスポーター サービスの [`exportData`]({environment:angularApiUrl}/classes/igxexcelexporterservice.html#exportdata) メソッドを呼び出します。このメソッドで、エクスポートするデータは最初の引数です。2 番目の引数は [`IgxExcelExporterOptions`]({environment:angularApiUrl}/classes/igxexcelexporteroptions.html) 型で、エクスポート処理の構成を許可します。

以下のコードはコンポーネントの typescript ファイルでエクスポート処理を実行します。

```typescript
// component.ts

...
import { IgxExcelExporterService, IgxExcelExporterOptions } from "igniteui-angular";
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

## IgxGrid データのエクスポート

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

## 既知の制限
> [!NOTE] 
> [JSZip](https://www.npmjs.com/package/jszip) のライブラリがの[問題](https://github.com/Stuk/jszip/issues/617)が原因で、大きな Excel ファイルのエクスポートが遅延する場合があります。問題が解決するまで、Excel エクスポーターの速度を上げるために、アプリケーションに [`setImmediate`](https://developer.mozilla.org/en-US/docs/Web/API/Window/setImmediate) [polyfill](https://www.npmjs.com/package/setimmediate) をインポートできます。

```cmd
npm install --save setimmediate
```

```ts
import 'setimmediate';
```

## API リファレンス

以下は、その他の Excel Exporter サービスの API です。

* [`IgxExcelExporterService API`]({environment:angularApiUrl}/classes/igxexcelexporterservice.html)
* [`IgxExcelExporterOptions API`]({environment:angularApiUrl}/classes/igxexcelexporteroptions.html)

Grid Excel エクスポーター:
* [`IgxGrid Excel エクスポーター`](grid/export-excel.md)
* [`IgxTreeGrid Excel エクスポーター`](treegrid/export-excel.md)

その他の使用されたコンポーネント:
* [IgxGridComponent API]({environment:angularApiUrl}/classes/igxgridcomponent.html)
* [IgxGridComponent スタイル]({environment:sassApiUrl}/index.html#function-igx-grid-theme)

<div class="divider"></div>

## その他のリソース

<div class="divider--half"></div>
コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)
