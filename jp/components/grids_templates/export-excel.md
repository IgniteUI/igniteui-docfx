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

# @@igComponent Excel を Excel サービスへエクスポート

<p class="highlight">
Excel Exporter サービスは @@igxName のデータを MS Excel へエクスポートできます。エクスポート機能は、[`IgxExcelExporterService`]({environment:angularApiUrl}/classes/igxexcelexporterservice.html) クラスでカプセル化され、MS Excel テーブル形式でデータをエクスポートします。この形式ではフィルタリングやソートなどの機能が使用でき、[`IgxExcelExporterService`]({environment:angularApiUrl}/classes/igxexcelexporterservice.html) の [`export`]({environment:angularApiUrl}/classes/igxexcelexporterservice.html#export) メソッドを呼び出して最初の引数として @@igxName コンポーネントを渡し、グリッドを簡単にエクスポートします。</p>

<div class="divider"></div>

## Angular Excel Exporter の例

@@if (igxName === 'IgxGrid') {
<div class="sample-container loading" style="height: 800px;">
    <iframe id="excel-export-sample-iframe" src="{environment:demosBaseUrl}/services/export-excel-sample-1"
        width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);" alt="Angular Excel Exporter 例"></iframe>
</div>
<p style="margin: 0;padding-top: 0.5rem">このサンプルが気に入りましたか? 完全な Angular ツールキットにアクセスして、すばやく独自のアプリの作成を開始します。<a class="no-external-icon mchNoDecorate trackCTA" target="_blank" href="https://jp.infragistics.com/products/ignite-ui-angular/download" data-xd-ga-action="Download" data-xd-ga-label="Ignite UI for Angular">無料でダウンロードできます。</a></p>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="excel-export-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="excel-export-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">Stackblitz で表示</button>
</div>
}
@@if (igxName === 'IgxTreeGrid') {
<div class="sample-container loading" style="height: 350px;">
    <iframe id="excel-export-sample-iframe" src="{environment:demosBaseUrl}/services/export-excel-tree-grid-sample"
        width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);" alt="Angular Excel Exporter 例"></iframe>
</div>
<p style="margin: 0;padding-top: 0.5rem">このサンプルが気に入りましたか? 完全な Angular ツールキットにアクセスして、すばやく独自のアプリの作成を開始します。<a class="no-external-icon mchNoDecorate trackCTA" target="_blank" href="https://jp.infragistics.com/products/ignite-ui-angular/download" data-xd-ga-action="Download" data-xd-ga-label="Ignite UI for Angular">無料でダウンロードできます。</a></p>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="excel-export-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="excel-export-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">Stackblitz で表示</button>
</div>
}
@@if (igxName === 'IgxHierarchicalGrid') {
    <!-- todo -->
}

<div class="divider--half"></div>

## @@igComponent のデータのエクスポート

IgniteUI Excel Exporter を使用するには、[`IgxExcelExporterService`]({environment:angularApiUrl}/classes/igxexcelexporterservice.html) を app.module.ts ファイルにインポートし、`providers` 配列にサービスを追加します。

```typescript
// app.module.ts

...
import { IgxExcelExporterService } from "igniteui-angular/services/index";

@NgModule({
  providers: [ IgxExcelExporterService ]
})

export class AppModule {}
```

> [!NOTE] 
> Excel Exporter サービスは JSZip にピア依存関係があります。JSZip ライブラリは Excel Exporter の使用時にインストールしてください。

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

上記をすべて行うと、@@igxName コンポーネントとその下にボタンを確認できます。ボタンを押すととエクスポート処理をトリガーし、ブラウザーで ExportedDataFile.xlsx ファイルをダウンロードします。このファイルは MS Excel 形式の @@igComponent のデータを含みます。

## すべてのデータのエクスポート

ページングなどのリモート操作を使用している場合に、Grid がすべてのデータにアクセスできない場合があります。このような場合、[Excel Export サービス](../exporter-excel.html#excel-exporter)を使用してデータ コレクション全体を渡すことをお勧めします。例:

```ts
public exportButtonHandler() {
  this.excelExportService.exportData(this.localData, new IgxExcelExporterOptions("ExportedDataFile"));
}
```

@@if (igxName === 'IgxGrid') {
## グループ化されたデータのエクスポート

グループ化されたデータをエクスポートするには、@@igComponent を 1 つ以上の列でグループ化する必要があります。ブラウザーは、選択した列でグループ化された MSExcel 形式の @@igComponent コンポーネントからのデータを含む 「ExportedDataFile.xlsx」 という名前のファイルをダウンロードします。例:

<div class="sample-container loading" style="height: 800px;">
    <iframe id="excel-group-export-sample-iframe" src="{environment:demosBaseUrl}/services/export-excel-sample-1"
        width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);" alt="Angular Grouped Data Excel Exporter Example"></iframe>
</div>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="excel-group-export-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="excel-group-export-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">Stackblitz で表示</button>
</div>
}

## エクスポートするコンテンツのカスタマイズ

上記の例では、Excel Exporter サービスで利用可能なデータをすべてエクスポートしました。行または列全体のエクスポートをしない方が良い場合があります。実装は、各列で発生される [`columnExporting`]({environment:angularApiUrl}/classes/igxexcelexporterservice.html#columnexporting) または各行で発生される [`rowExporting`]({environment:angularApiUrl}/classes/igxexcelexporterservice.html#rowexporting) イベントを処理し、イベント引数オブジェクトの [`cancel`]({environment:angularApiUrl}/interfaces/irowexportingeventargs.html#cancel) プロパティを `true` に設定して各イベントをキャンセルします。

以下の例では、ヘッダーが "Age" で、インデックスが 1 の場合、エクスポートから列を除外します。

```typescript
// component.ts

this.excelExportService.columnExporting.subscribe((args: IColumnExportingEventArgs) => {
  if (args.header == "Age" && args.columnIndex == 1) {
      args.cancel = true;
  }
});
this.excelExportService.export(this.@@igObjectRef, new IgxExcelExporterOptions("ExportedDataFile"));
```

@@igComponent コンポーネントのデータ エクスポートでは、行フィルタリングおよび列の非表示などの機能に応じて @@igComponent で表示されるデータのみをエクスポートします。[`IgxExcelExporterOptions`]({environment:angularApiUrl}/classes/igxexcelexporteroptions.html) オブジェクトのプロパティを設定し、エクスポーター サービスを構成してフィルターした行または非表示の列を含むことができます。
## 既知の制限

@@if (igxName === 'IgxGrid') {
|制限|説明|
|--- |--- |
|複数列ヘッダーのエクスポート|Excel エクスポーター サービスは、複数列ヘッダーを持つ @@igComponent のエクスポートをサポートしていません。|
}

> [!NOTE]
> [JSZip](https://www.npmjs.com/package/jszip) のライブラリがの [問題](https://github.com/Stuk/jszip/issues/617) が原因で、大きな Excel ファイルのエクスポートが遅延する場合があります。問題が解決するまで、Excel エクスポーターの速度を上げるために、アプリケーションに [`setImmediate`](https://developer.mozilla.org/en-US/docs/Web/API/Window/setImmediate) [polyfill](https://www.npmjs.com/package/setimmediate) をインポートできます。

```cmd
npm install --save setimmediate
```

```ts
import 'setimmediate';
```

## API リファレンス

以下は、その他の Excel Exporter サービスの API です。

* [IgxExcelExporterService API]({environment:angularApiUrl}/classes/igxexcelexporterservice.html)
* [IgxExcelExporterOptions API]({environment:angularApiUrl}/classes/igxexcelexporteroptions.html)

使用したその他のコンポーネント:

* [@@igxNameComponent API]({environment:angularApiUrl}/classes/@@igTypeDoc.html)
* [@@igxNameComponent スタイル]({environment:sassApiUrl}/index.html#function-igx-grid-theme)

<div class="divider"></div>

## その他のリソース

<div class="divider--half"></div>
コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)