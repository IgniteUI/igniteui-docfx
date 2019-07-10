---
title: Spreadsheet | Grid コントロール | Ignite UI for Angular | アクティブ化 | Infragistics |
_description: スプレッドシート コントロールを使用して、Excel ドキュメントの作成と編集のエクスペリエンスをアプリケーションに直接埋め込むことができます。
_keywords: Spreadsheet, Ignite UI for Angular, Infragistics
_language: ja
mentionedTypes: ['Spreadsheet']
---

## スプレッドシートのアクティブ化

[`IgxSpreadsheetComponent`](/components/spreadsheet_activation.html) コントロールは、コントロール内で現在アクティブなセル、ペイン、およびワークシートを決定するためのプロパティを公開しています。これは、ユーザーがコントロール内のどこを移動または編集している可能性があるかを判断するのに役立ちます。

### デモ

<div class="sample-container loading" style="height: 500px">
    <iframe id="spreadsheet-overview-sample-iframe" src='{environment:demosBaseUrl}/spreadsheet/spreadsheet-overview' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="spreadsheet-overview-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示
    </button>
</div>

<div class="divider--half"></div>

### アクティベーションの概要

[`IgxSpreadsheetComponent`](/components/spreadsheet_activation.html) コントロールのアクティブ化は、スプレッドシートの現在の [`workbook`](/components/spreadsheet_activation.html) のセル、ペイン、およびワークシート間で分割されます。3 つの アクティブなプロパティは以下のとおりです。

-   [`activeCell`](/components/spreadsheet_activation.html): スプレッドシート内のアクティブ セルを返すか、設定します。設定するには、[`SpreadsheetCell`](/components/spreadsheet_activation.html) の新しいインスタンスを作成し、そのセルに関する列と行、またはセルの文字列アドレスなどの情報を渡す必要があります。
-   [`activePane`](/components/spreadsheet_activation.html): スプレッドシート コントロールの現在アクティブなワークシートのアクティブ ペインを返します。
-   [`activeWorksheet`](/components/spreadsheet_activation.html): スプレッドシート コントロールの [`workbook`](/components/spreadsheet_activation.html) 内のアクティブ ワークシートを返すか、設定します。これは、スプレッドシートに添付されているワークブック内の既存のワークシートに設定することで設定できます。

次のコードスニペットは、[`IgxSpreadsheetComponent`](/components/spreadsheet_activation.html) コントロールのセルとワークシートのアクティブ化の設定を示しています。

```ts
this.spreadsheet.activeWorksheet = this.spreadsheet.workbook.worksheets(1);

this.spreadsheet.activeCell = new SpreadsheetCell("C5");
```
