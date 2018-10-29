---
title: グリッド ツールバー コンポーネント - ネイティブ Angular | Ignite UI for Angular
_description: Ignite UI for Angular Grid ツールバー コンポーネントは、IgxGrid 機能 UI コントロールを一元管理できます。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スイート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, ネイティブ Angular コンポーネント, Angular Grid, Angular Data Grid コンポーネント, Angular Data Grid コントロール, Angular Grid コンポーネント, Angular Grid コントロール, Angular 高いパフォーマンス Grid, Angular Data Grid ツールバー, Grid ツールバー, Angular Grid ツールバー, excel エクスポート, グリッド列非表示選択, グリッド列ピン固定選択
_language: ja
---

### グリッド ツールバー

Ignite UI for Angular のグリッドは、**UI** 操作のコンテナーとなる [`IgxGridToolbarComponent`]({environment:angularApiUrl}/classes/igxgridtoolbarcomponent.html) 機能をサポートします。ツールバーはグリッドの一番上に配置されグリッドの水平サイズに一致します。ツールバーのコンテナーは、グリッド機能に関連するさまざまな UI コントロール (列の非表示、列ピン固定、エクセル エクスポートなど) をホストします。

#### デモ

<div class="sample-container loading" style="height:420px">
    <iframe id="grid-toolbar-sample-1-iframe" src='{environment:demosBaseUrl}/grid-toolbar-sample-1' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-toolbar-sample-1-iframe" data-demos-base-url="{environment:demosBaseUrl}">stackblitz で開く</button>
</div>

[`showToolbar`]({environment:angularApiUrl}/classes/igxgridcomponent.html#showtoolbar) プロパティを使用して IgxGrid ツールバーを表示するには、**true** に設定します。ツールバーは、テキスト タイトルの左揃えをサポートし、グリッドの [`toolbarTitle`]({environment:angularApiUrl}/classes/igxgridcomponent.html#toolbartitle) プロパティを使用してコンテンツを設定します。以下のコード スニペットは、ツールバーとタイトルを設定する方法を確認できます。

```html
<igx-grid [data]="data" [autoGenerate]="true" height="400px" width="600px"
    [showToolbar]="true"
    toolbarTitle="Grid Title">
</igx-grid>
```

#### 機能

IgxGrid のツールバーは、列の非表示、列のピン固定、データを MS Excel や CSV 形式にエクスポートできます。 各機能は、対応する boolean プロパティを設定して個別に有効にすることができます。
- 列の非表示は [`columnHiding`]({environment:angularApiUrl}/classes/igxgridcomponent.html#columnhiding) を **true** に設定
- 列のピン固定は [`columnPinning`]({environment:angularApiUrl}/classes/igxgridcomponent.html#columnpinning) を **true** に設定
- MS Excel エクスポートは、グリッドの [`exportExcel`]({environment:angularApiUrl}/classes/igxgridcomponent.html#exportexcel) プロパティを **true** に設定
- CSV エクスポートは、グリッドの [`exportCsv`]({environment:angularApiUrl}/classes/igxgridcomponent.html#exportcsv) プロパティを **true** に設定

各ボタン テキストを設定するプロパティについては、以下の API セクションを確認してください。

<div class="sample-container loading" style="height:420px">
    <iframe id="grid-toolbar-sample-2-iframe" src='{environment:demosBaseUrl}/grid-toolbar-sample-2' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-toolbar-sample-2-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で開く</button>
</div>

以下のコード スニペットは、ツールバーのすべての機能を有効にする方法を示します。

```html
<igx-grid [data]="data" [autoGenerate]="true" height="400px" width="600px"
    [showToolbar]="true"
    toolbarTitle="Grid Title"
	[columnHiding]="true"
    [columnPinning]="true"
    [exportExcel]="true"
    [exportCsv]="true"
    exportText="Export"
    exportExcelText="Export to Excel"
    exportCsvText="Export to CSV">
</igx-grid>
```

MS Excel および CSV へのエクスポートは、プロバイダーとしてそれぞれ [`IgxExcelExporterService`]({environment:angularApiUrl}/classes/igxexcelexporterservice.html) と [`IgxCsvExporterService`]({environment:angularApiUrl}/classes/igxcsvexporterservice.html) を使用します。いずれかを使用する場合は、**app.module.ts** ファイルのプロバイダー配列で指定してください。たとえば、以下のコード スニペットは、すべてのエクスポーター サービスを含む方法を示します。

```typescript
// app.module.ts

...
import { IgxExcelExporterService, IgxCsvExporterService } from "igniteui-angular";

@NgModule({
  providers: [ IgxExcelExporterService, IgxCsvExporterService ]
})

export class AppModule {}
```

#### エクスポートのカスタマイズ

更にツールバー機能は簡単にオン/オフすることができます。エクスポート処理は、エクスポート処理初期化する際に発生される  [`onToolbarExporting`]({environment:angularApiUrl}/classes/igxgridcomponent.html#ontoolbarexporting) イベントで詳細設定することができます。このイベントは、エクスポーターとエクスポーターのオプションで公開できます。

> [!NOTE]
> デフォルトで CSV にエクスポートした際にエクスポーターがカンマ区切りセパレーターを使用してエクスポートし、出力ファイルに .csv 拡張しを使用します。
> エクスポーターのイベントにサブスクライブまたはエクスポーター オプション フィールドの値を変更して、エクスポート パラメーターをカスタマイズできます。
> またイベント引数のキャンセル フィールドを true に設定してエクスポートをキャンセルすることもできます。

以下のコード スニペットは、[`onToolbarExporting`]({environment:angularApiUrl}/classes/igxgridcomponent.html#ontoolbarexporting) イベントにサブスクライブする方法やデフォルトのエクスポート処理をキャンセルする方法を示します。

```html
<igx-grid ... (onToolbarExporting)="toolbarExportingHandler($event)"></igx-grid>
```

```typescript
import { IgxExcelExporterService, IgxCsvExporterService } from "igniteui-angular";

...

public toolbarExportingHandler(args) {
    // You can customize the exporting from this event
    const options: IgxExporterOptionsBase = args.options ;
    options.fileName = "Custom Title";

    if (options instanceof IgxExcelExporterOptions) {
        const excelOptions = options as IgxExcelExporterOptions;
        excelOptions.columnWidth = 10;
    } else {
        const csvOptions = options as IgxCsvExporterOptions;
        csvOptions.fileType = CsvFileTypes.TSV;
        csvOptions.valueDelimiter = "\t";
    }

    args.exporter.onColumnExport.subscribe((columnArgs: IColumnExportingEventArgs) => {
        // Don't export image fields
        columnArgs.cancel = columnArgs.header === "Avatar" ||
                            columnArgs.header === "CountryFlag";
    });
}
```

以下のサンプルは、エクスポート ファイルをカスタマイズする方法を示します。

<div class="sample-container loading" style="height:420px">
    <iframe id="grid-toolbar-sample-3-iframe" src='{environment:demosBaseUrl}/grid-toolbar-sample-3' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-toolbar-sample-3-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で開く</button>
</div>

<div class="divider"></div>

### API リファレンス

以下は、Grid ツールバー サービスのその他の API のリンクです。

[`IgxGridToolbarComponent`]({environment:angularApiUrl}/classes/igxgridtoolbarcomponent.html)

[`IgxGridComponent`]({environment:angularApiUrl}/classes/igxgridcomponent.html) properties:
* [`toolbar`]({environment:angularApiUrl}/classes/igxgridcomponent.html#toolbar)
* [`showToolbar`]({environment:angularApiUrl}/classes/igxgridcomponent.html#showtoolbar)
* [`toolbarTitle`]({environment:angularApiUrl}/classes/igxgridcomponent.html#toolbartitle)
* [`columnHiding`]({environment:angularApiUrl}/classes/igxgridcomponent.html#columnhiding)
* [`columnHidingTitle`]({environment:angularApiUrl}/classes/igxgridcomponent.html#columnhidingtitle)
* [`hiddenColumnsText`]({environment:angularApiUrl}/classes/igxgridcomponent.html#hiddencolumnstext)
* [`columnPinning`]({environment:angularApiUrl}/classes/igxgridcomponent.html#columnpinning)
* [`columnPinningTitle`]({environment:angularApiUrl}/classes/igxgridcomponent.html#columnpinningtitle)
* [`pinnedColumnsText`]({environment:angularApiUrl}/classes/igxgridcomponent.html#pinnedcolumnstext)
* [`exportExcel`]({environment:angularApiUrl}/classes/igxgridcomponent.html#exportexcel)
* [`exportCsv`]({environment:angularApiUrl}/classes/igxgridcomponent.html#exportcsv)
* [`exportText`]({environment:angularApiUrl}/classes/igxgridcomponent.html#exporttext)
* [`exportExcelText`]({environment:angularApiUrl}/classes/igxgridcomponent.html#exportexceltext)
* [`exportCsvText`]({environment:angularApiUrl}/classes/igxgridcomponent.html#exportcsvtext)

[`IgxGridComponent`]({environment:angularApiUrl}/classes/igxgridcomponent.html) events:
* [`onToolbarExporting`]({environment:angularApiUrl}/classes/igxgridcomponent.html#ontoolbarexporting)

スタイル:

* [`IgxGridComponent Styles`]({environment:sassApiUrl}/index.html#function-igx-grid-theme)

### その他のリソース

<div class="divider--half"></div>
コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)
