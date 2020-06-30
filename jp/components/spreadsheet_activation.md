---
title: スプレッドシート | Grid コントロール | Ignite UI for Angular | アクティブ化 | インフラジスティックス
_description: スプレッドシート コントロールを使用して、Excel ドキュメントの作成と編集機能をアプリケーションに直接組み込むことができます。
_keywords: Spreadsheet, Ignite UI for Angular, Infragistics, スプレッドシート, インフラジスティックス
mentionedTypes: ['Spreadsheet']
_language: ja
---

## スプレッドシートのアクティブ化

Angular Spreadsheet コンポーネントは、コントロールで現在アクティブなセル、ペイン、およびワークシートを決定できるプロパティを公開します。これは、ユーザーがコントロール内で移動または編集している場所を判断するのに役立ちます。

### サンプル

<div class="sample-container loading" style="height: 500px">
    <iframe id="spreadsheet-overview-sample-iframe" src='{environment:dvDemosBaseUrl}/spreadsheet/spreadsheet-activation' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>

<div class="divider--half"></div>

### アクティベーションの概要

[`IgxSpreadsheetComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxspreadsheetcomponent.html) コントロールのアクティブ化は、スプレッドシートの現在の [`workbook`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxspreadsheetcomponent.html#workbook) のセル、ペイン、およびワークシート間で分割されます。3 つの アクティブなプロパティは以下のとおりです。

-   [`activeCell`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxspreadsheetcomponent.html#activecell): スプレッドシートのアクティブ セルを設定します。設定するには、[`SpreadsheetCell`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/spreadsheetcell.html) の新しいインスタンスを作成し、そのセルに関する列と行、またはセルの文字列アドレスなどの情報を渡す必要があります。
-   [`activePane`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxspreadsheetcomponent.html#activepane): スプレッドシート コントロールの現在アクティブなワークシートのアクティブ ペインを返します。
-   [`activeWorksheet`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxspreadsheetcomponent.html#activeworksheet): スプレッドシート コントロールの [`workbook`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxspreadsheetcomponent.html#workbook) 内のアクティブ ワークシートを返すか、設定します。これは、スプレッドシートに添付されている`ワークブック`内の既存のワークシートに設定することで設定できます。

### コード スニペット

次のコードスニペットは、[`IgxSpreadsheetComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxspreadsheetcomponent.html) コントロールのセルとワークシートのアクティブ化の設定を示しています。

```ts
this.spreadsheet.activeWorksheet = this.spreadsheet.workbook.worksheets(1);

this.spreadsheet.activeCell = new SpreadsheetCell("C5");
```
