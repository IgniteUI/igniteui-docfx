---
title: Spreadsheet | Grid コントロール | Ignite UI for Angular | アクティブ化 | Infragistics |
_description: スプレッドシート コントロールを使用して、Excel ドキュメントの作成と編集のエクスペリエンスをアプリケーションに直接埋め込むことができます。
_keywords: Spreadsheet, Ignite UI for Angular, Infragistics
_language: ja
mentionedTypes: ['Spreadsheet']
---

## スプレッドシートのアクティブ化

[`IgxSpreadsheetComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxspreadsheetcomponent.html) コントロールは、コントロール内で現在アクティブなセル、ペイン、およびワークシートを決定するためのプロパティを公開しています。これは、ユーザーがコントロール内のどこを移動または編集している可能性があるかを判断するのに役立ちます。

### デモ

<div class="sample-container loading" style="height: 500px">
    <iframe id="spreadsheet-overview-sample-iframe" src='{environment:dvDemosBaseUrl}/spreadsheet/spreadsheet-overview' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="spreadsheet-overview-sample-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">StackBlitz で表示
    </button>
</div>

<div class="divider--half"></div>

### アクティベーションの概要

[`IgxSpreadsheetComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxspreadsheetcomponent.html) コントロールのアクティブ化は、スプレッドシートの現在の [`workbook`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxspreadsheetcomponent.html#workbook) のセル、ペイン、およびワークシート間で分割されます。3 つの アクティブなプロパティは以下のとおりです。

-   [`activeCell`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxspreadsheetcomponent.html#activecell): スプレッドシート内のアクティブ セルを返すか、設定します。設定するには、[`SpreadsheetCell`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/spreadsheetcell.html) の新しいインスタンスを作成し、そのセルに関する列と行、またはセルの文字列アドレスなどの情報を渡す必要があります。
-   [`activePane`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxspreadsheetcomponent.html#activepane): スプレッドシート コントロールの現在アクティブなワークシートのアクティブ ペインを返します。
-   [`activeWorksheet`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxspreadsheetcomponent.html#activeworksheet): スプレッドシート コントロールの [`workbook`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxspreadsheetcomponent.html#workbook) 内のアクティブ ワークシートを返すか、設定します。これは、スプレッドシートに添付されているワークブック内の既存のワークシートに設定することで設定できます。

次のコードスニペットは、[`IgxSpreadsheetComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxspreadsheetcomponent.html) コントロールのセルとワークシートのアクティブ化の設定を示しています。

```ts
this.spreadsheet.activeWorksheet = this.spreadsheet.workbook.worksheets(1);

this.spreadsheet.activeCell = new SpreadsheetCell("C5");
```
