---
title: Angular Hierarchical Grid の Excel と PDF へのエクスポート - Ignite UI for Angular
_description: Ignite UI Excel および PDF Exporter を使用すると、クライアント エクスポートをより便利でシンプルにできます。これらの形式により、フィルタリング、ソートなどの機能が可能になります。
_keywords: データ エクスポート, ignite ui for angular, インフラジスティックス
_canonicalLink: grid/export-excel
_license: commercial
_language: ja
---



# Angular Hierarchical Grid Excel を Excel と PDF サービスへエクスポート





<p class="highlight">

Ignite UI Excel および PDF Exporter サービスは、IgxHierarchicalGrid をユーザーが画面で見ているとおりに扱います。階層レイアウトと集計を含みます。[`IgxExcelExporterService`]({environment:angularApiUrl}/classes/igxexcelexporterservice.html) または [`IgxPdfExporterService`]({environment:angularApiUrl}/classes/igxpdfexporterservice.html) をインジェクトし、適切な [`export`]({environment:angularApiUrl}/classes/igxexcelexporterservice.html#export)/[`export`]({environment:angularApiUrl}/classes/igxpdfexporterservice.html#export) メソッドを呼び出して、サービスに最終ドキュメントを生成させます。
</p>



以下のセクションでは、セットアップ、使用パターン、およびユーザーが好むファイル タイプに関係なく、すぐに使用できるデータを受け取れるように各エクスポートを調整するためのヒントについて説明します。

<div class="divider"></div>

## Angular Excel Exporter の例

このライブ例は、Hierarchical Grid の標準的な Excel および PDF エクスポート ワークフローを示しています。バインドされたデータ、2 つのエクスポート ボタン (Excel と PDF)、およびフィルタリングとソート状態が保持された結果の `.xlsx` ファイルと `.pdf` ファイルです。アプリケーションに組み込む前にエクスペリエンスをプレビューしたい関係者と共有してください。





<code-view style="height: 600px;"
        data-demos-base-url="{environment:demosBaseUrl}"
        explicit-editor="stackblitz"
        iframe-src="{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-excel-export/" alt="Angular Excel Exporter の例">
</code-view>




<div class="divider--half"></div>

## Hierarchical Grid のデータのエクスポート

エクスポーターをプロジェクトに取り込むには、数行のコードのみが必要です。次の手順に従うと、オンデマンドで Excel または PDF 出力を作成できる再利用可能なサービスが得られます。

1. ルート モジュールで [`IgxExcelExporterService`]({environment:angularApiUrl}/classes/igxexcelexporterservice.html) および/または [`IgxPdfExporterService`]({environment:angularApiUrl}/classes/igxpdfexporterservice.html) をインポートします。
2. 必要なエクスポーターをインジェクトし、ユーザーがファイルを要求したときにその `export` メソッドを呼び出します。

```typescript
// component.ts
import { IgxExcelExporterService, IgxPdfExporterService } from 'igniteui-angular/grids/core';
// import { IgxExcelExporterService, IgxPdfExporterService } from '@infragistics/igniteui-angular/grids/core'; for licensed package

...

private excelExportService = inject(IgxExcelExporterService);
private pdfExportService = inject(IgxPdfExporterService);

```

> [!Note]
> v12.2.1 以降、`IgxExcelExporterService` はルートで提供され、`providers` 配列に登録する必要はありません。PDF Exporter は後のバージョンで導入され、追加の構成なしでインジェクタブル サービスとして利用できます。

エクスポート処理の開始は、コンポーネントのテンプレートでボタンのハンドラーを使用します。



```html
<igx-hierarchical-grid #hierarchicalGrid [data]="localData" [autoGenerate]="true"></igx-hierarchical-grid>
<button (click)="exportButtonHandler()">Export IgxHierarchicalGrid to Excel</button>
<button (click)="exportPdfButtonHandler()">Export IgxHierarchicalGrid to PDF</button>
```





コンストラクターの依存関係として定義し、Angular にインスタンスを提供させることで、いずれかのエクスポーター サービスにアクセスできます。共有 [`export`]({environment:angularApiUrl}/classes/igxexcelexporterservice.html#export) メソッドを呼び出すと、コンポーネントの状態、選択された行、および書式設定ルールを自動的に尊重しながらダウンロードが開始されます。

以下は、コンポーネントの TypeScript ファイルで両方のエクスポート プロセスを実行するコードです。

```typescript
// component.ts
import { IgxExcelExporterService, IgxExcelExporterOptions, IgxPdfExporterService, IgxPdfExporterOptions } from 'igniteui-angular/grids/core';
import { IgxHierarchicalGridComponent } from 'igniteui-angular/grids/hierarchical-grid';

@ViewChild('hierarchicalGrid') public hierarchicalGrid: IgxHierarchicalGridComponent;

private excelExportService = inject(IgxExcelExporterService);
private pdfExportService = inject(IgxPdfExporterService);

public exportButtonHandler() {
  this.excelExportService.export(this.hierarchicalGrid, new IgxExcelExporterOptions('ExportedDataFile'));
}

public exportPdfButtonHandler() {
  this.pdfExportService.export(this.hierarchicalGrid, new IgxPdfExporterOptions('ExportedDataFile'));
}
```

配線が完了すると、それぞれのボタンを押すと、現在の Hierarchical Grid ビューが入力された `ExportedDataFile.xlsx` または `ExportedDataFile.pdf` という名前のファイルがダウンロードされます。顧客に優しいファイル名に置き換えたり、タイムスタンプを追加したり、成功トーストを表示したりして、ユーザーにエクスポートが完了したことを知らせることができます。





## すべてのデータのエクスポート

大規模なリモート データセットは、多くの場合、ページごとまたはオンデマンドで読み込まれます。これは、ユーザーが **[Export]** をクリックしたときに Hierarchical Grid がすべてのレコードを使用できない可能性があることを意味します。完全なワークブックを保証するには、プロセスを開始する前に、完全なデータ コレクションでエクスポーターをハイドレートします。`exportData` ヘルパーはコンポーネントをバイパスし、プレーン オブジェクトに対して直接機能するため、スケジュールされたエクスポートまたは管理者専用ダウンロードに同じルーチンを再利用できます。

```ts
public exportButtonHandler() {
  this.excelExportService.exportData(this.localData, new IgxExcelExporterOptions('ExportedDataFile'));
}
```

> [!TIP]
> リモート データに PDF ダウンロードを提供する場合は、最初に完全なデータセットを取得してから `export` を呼び出して、ドキュメントがユーザーの期待を反映するようにすることを検討してください。



## 複数列ヘッダー グリッドのエクスポート

ダッシュボードは、多くの場合、[複数列ヘッダー](multi-column-headers.md)に依存してコンテキストを追加します。個々の月列の上に 「Q1/Q2/Q3」 バンドを配置することを考えてください。エクスポーターはこの構造をミラーリングするため、スプレッドシート ユーザーはグループ化ロジックをすぐに理解できます。ダウンストリーム ワークフローで単純な列名を優先する場合は、[エクスポーター オプション]({environment:angularApiUrl}/classes/igxexporteroptionsbase.html) [ignoreMultiColumnHeaders]({environment:angularApiUrl}/classes/igxexporteroptionsbase.html#ignoremulticolumnheaders) フラグを `true` に反転すると、出力にはリーフ ヘッダーのみが含まれます。

> [!NOTE]
> Excel テーブルは複数の行ヘッダーをサポートしていないため、エクスポートされた Hierarchical Grid はテーブルとしてフォーマットされません。


> [!NOTE]
> 行アイランド内の複数列ヘッダーのエクスポートされた展開状態は常に初期状態になります。







<code-view style="height: 800px;"
           data-demos-base-url="{environment:demosBaseUrl}"
           explicit-editor="stackblitz"
           iframe-src="{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-multi-column-export/" alt="Angular Multi-Column Headers Export">
</code-view>


## 固定された列ヘッダーを使用してグリッドをエクスポートする

長いシートは、ヘッダー行が表示範囲外にスクロールされると読みにくくなる可能性があります。固定ヘッダーを有効にすると、ユーザーがデータをさらに下に探索している間、ワークシートの上部に 「Customer」 や 「Invoice Total」 などの重要なコンテキストが表示されたままになります。`export` を呼び出す前に[エクスポーター オプション]({environment:angularApiUrl}/classes/igxexporteroptionsbase.html) [freezeHeaders]({environment:angularApiUrl}/classes/igxexporteroptionsbase.html#freezeHeaders) フラグを `true` に切り替えると、サービスが残りを処理します。

```typescript
public exportButtonHandler() {
    const exporterOptions = new IgxExcelExporterOptions('ExportedDataFile');
    exporterOptions.freezeHeaders = true;
    this.excelExportService.export(this.grid, exporterOptions);
}
```



PDF エクスポートには、ドキュメントの上部に列ヘッダー行が自動的に含まれるため、読者がファイルを開いたり印刷したりしても同じコンテキストが保持されます。

## エクスポートするコンテンツのカスタマイズ

ほとんどのチームは、共有する前にエクスポートを調整します。内部使用列を非表示にしたり、ヘッダーの名前を変更したり、管理者にのみ適用される行をスキップしたりします。両方のエクスポーター サービスは、すべての行または列をインターセプトし、ファイルにどのように表示するかを決定できるイベントを公開します。[`columnExporting`]({environment:angularApiUrl}/classes/igxexcelexporterservice.html#columnexporting) および [`rowExporting`]({environment:angularApiUrl}/classes/igxexcelexporterservice.html#rowexporting) をサブスクライブして、最後の瞬間の調整を行います。`cancel = true` を設定して項目を省略するか、イベント引数を調整してその場で値を更新します。



以下の例では、ヘッダーが "Age" で、インデックスが 1 の場合、エクスポートから列を除外します。

```typescript
// component.ts

this.excelExportService.columnExporting.subscribe((args: IColumnExportingEventArgs) => {
  if (args.header == 'Age' && args.columnIndex == 1) {
      args.cancel = true;
  }
});
this.excelExportService.export(this.hierarchicalGrid, new IgxExcelExporterOptions('ExportedDataFile'));
```





Hierarchical Grid コンポーネントからデータをエクスポートする場合、サービスはソート、フィルタリング、集計、および非表示列を自動的に尊重するため、ファイルにはユーザーが現在表示しているものが反映されます。代わりに完全なデータセットが必要ですか? [`IgxExcelExporterOptions`]({environment:angularApiUrl}/classes/igxexcelexporteroptions.html) または [`IgxPdfExporterOptions`]({environment:angularApiUrl}/classes/igxpdfexporteroptions.html) の関連フラグを切り替えて、フィルターされた行、非表示列、またはカスタム メタデータを含めます。

## 既知の制限

エクスポートを本番ユーザーに配布する前に、次のプラットフォームの制約を確認して、アプリ内で期待を設定し、役立つガイダンスを提供できるようにしてください。







|制限|説明|
|--- |--- |
|階層レベル|エクスポーターは最大 8 レベルの階層をサポートします。より深い構造が必要な場合は、ファイルを読みやすく保つために、データをフラット化するか、サブセットをエクスポートしてください。|
|ワークシートの最大サイズ|Excel でサポートされているワークシートの最大サイズは、1,048,576 行 x 16,384 列です。これらの制限内に収まるように、非常に大きなエクスポートを日付範囲またはセグメントでスライスすることを検討してください。|
|ピン固定列のエクスポート|エクスポートされた Excel ファイルでは、ピン固定列は凍結されませんが、順序は保持されます。凍結が重要な場合は、エクスポート後に手動でシートを調整してください。|
|セルのスタイル設定|Excel Exporter サービスは、セル コンポーネントに直接適用されたカスタム スタイルのエクスポートをサポートしていません。このようなシナリオでは、きめ細かい書式設定のために、より豊富な [Excel ライブラリ](../excel-library.md)を使用することをお勧めします。|
|幅の広い PDF レイアウト|非常に幅の広い Grid は、PDF の列がページに収まるように縮小されることがあります。ドキュメントを読みやすく保つために、エクスポートする前に列幅を適用するか、優先度の低いフィールドを非表示にしてください。|





## API リファレンス

以下は、その他の Excel Exporter と PDF Exporter サービスの API です。

- [IgxExcelExporterService API]({environment:angularApiUrl}/classes/igxexcelexporterservice.html)
- [IgxExcelExporterOptions API]({environment:angularApiUrl}/classes/igxexcelexporteroptions.html)
- [IgxPdfExporterService API]({environment:angularApiUrl}/classes/igxpdfexporterservice.html)
- [IgxPdfExporterOptions API]({environment:angularApiUrl}/classes/igxpdfexporteroptions.html)

使用したその他のコンポーネント:

- [IgxHierarchicalGridComponent API]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html)
- [IgxHierarchicalGridComponent スタイル]({environment:sassApiUrl}/themes#function-grid-theme)

<div class="divider"></div>

## その他のリソース

<div class="divider--half"></div>
コミュニティに参加して新しいアイデアをご提案ください。以下のリンクは、サンプル、コミュニティの回答、およびエンジニアリング チームにつながります。

- [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
- [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)
