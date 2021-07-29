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

@@if (igxName === 'IgxGrid' || igxName === 'IgxTreeGrid') {

<p class="highlight">
Excel Exporter サービスは @@igxName のデータを MS Excel へエクスポートできます。エクスポート機能は、[`IgxExcelExporterService`]({environment:angularApiUrl}/classes/igxexcelexporterservice.html) クラスでカプセル化され、MS Excel テーブル形式でデータをエクスポートします。この形式ではフィルタリングやソートなどの機能が使用でき、[`IgxExcelExporterService`]({environment:angularApiUrl}/classes/igxexcelexporterservice.html) の [`export`]({environment:angularApiUrl}/classes/igxexcelexporterservice.html#export) メソッドを呼び出して最初の引数として @@igxName コンポーネントを渡し、グリッドを簡単にエクスポートします。
</p>

}

@@if (igxName === 'IgxHierarchicalGrid') {

<p class="highlight">
  Excel Exporter サービスは @@igxName のデータを MS Excel へエクスポートできます。エクスポート機能は、[`IgxExcelExporterService`]({environment:angularApiUrl}/classes/igxexcelexporterservice.html) クラスでカプセル化されています。プロセスをトリガーするには、[`IgxExcelExporterService`]({environment:angularApiUrl}/classes/igxexcelexporterservice.html) の [`export`]({environment:angularApiUrl}/classes/igxexcelexporterservice.html#export) メソッドを呼び出し、最初の引数として @@igxName コンポーネントを渡す必要があります。
</p>

}

<div class="divider"></div>

## Angular Excel Exporter の例

@@if (igxName === 'IgxGrid') {

<code-view style="height: 800px;" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/services/export-excel-sample-1" alt="Angular Excel Exporter 例">
</code-view>

}
@@if (igxName === 'IgxTreeGrid') {

<code-view style="height: 350px;" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/services/export-excel-tree-grid-sample" alt="Angular Excel Exporter 例">
</code-view>

}
@@if (igxName === 'IgxHierarchicalGrid') {

<code-view style="height: 800px;" 
        data-demos-base-url="{environment:demosBaseUrl}" 
        iframe-src="{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-excel-export" alt="Angular Excel Exporter の例">
</code-view>

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

@ViewChild("@@igObjectRef") public @@igObjectRef: @@igxNameComponent;

constructor(private excelExportService: IgxExcelExporterService) {
}

public exportButtonHandler() {
  this.excelExportService.export(this.@@igObjectRef, new IgxExcelExporterOptions("ExportedDataFile"));
}

```

上記をすべて行うと、@@igxName コンポーネントとその下にボタンを確認できます。ボタンを押すととエクスポート処理をトリガーし、ブラウザーで ExportedDataFile.xlsx ファイルをダウンロードします。このファイルは MS Excel 形式の @@igComponent のデータを含みます。

## すべてのデータのエクスポート

ページングなどのリモート操作を使用している場合に、Grid がすべてのデータにアクセスできない場合があります。このような場合、[Excel Export サービス](../exporter-excel.md)を使用してデータ コレクション全体を渡すことをお勧めします。例:

```ts
public exportButtonHandler() {
  this.excelExportService.exportData(this.localData, new IgxExcelExporterOptions("ExportedDataFile"));
}
```

@@if (igxName === 'IgxGrid') {
## グループ化されたデータのエクスポート

グループ化されたデータをエクスポートするには、@@igComponent を 1 つ以上の列でグループ化する必要があります。ブラウザーは、選択した列でグループ化された MSExcel 形式の @@igComponent コンポーネントからのデータを含む 「ExportedDataFile.xlsx」 という名前のファイルをダウンロードします。例:


<code-view style="height: 800px;" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/services/export-excel-sample-1" alt="Angular Grouped Data Excel Exporter Example">
</code-view>

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
|ワークシートの最大サイズ|Excel でサポートされているワークシートの最大サイズは、1,048,576 行 x 16,384 列です。|
|複数列ヘッダーのエクスポート|Excel エクスポーター サービスは、複数列ヘッダーを持つ @@ igComponent のエクスポートをサポートしていません。|
}

@@if (igxName === 'IgxTreeGrid') {
|制限|説明|
|--- |--- |
|階層レベル|Excel エクスポーター サービスは、最大 8 レベルの階層を作成できます。|
|ワークシートの最大サイズ|Excel でサポートされているワークシートの最大サイズは、1,048,576 行 x 16,384 列です。|
|複数列ヘッダーのエクスポート|Excel エクスポーター サービスは、複数列ヘッダーを持つ @@ igComponent のエクスポートをサポートしていません。|
}

@@if (igxName === 'IgxHierarchicalGrid') {
|制限|説明|
|--- |--- |
|階層レベル|Excel エクスポーター サービスは、最大 8 レベルの階層を作成できます。|
|ワークシートの最大サイズ|Excel でサポートされているワークシートの最大サイズは、1,048,576 行 x 16,384 列です。|
|複数列ヘッダーのエクスポート|Excel エクスポーター サービスは、複数列ヘッダーを持つ @@igComponent のエクスポートをサポートしていません。|
|ピン固定列された列のエクスポート|エクスポートされた Excel ファイルでは、ピン固定列は固定されませんが、グリッドに表示されるのと同じ順序で表示されます。|
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