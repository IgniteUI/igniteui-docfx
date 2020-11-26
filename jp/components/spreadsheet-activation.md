---
title: Angular スプレッドシート | アクティブ化 | インフラジスティックス
_description: セル、ペイン、およびワークシート間で分割される Angular スプレッドシート コントロールのアクティブ化を使用する方法について説明します。Ignite UI for Angular スプレッドシートのサンプルを是非お試しください!
_keywords: Excel Spreadsheet, activation, Ignite UI for Angular, Infragistics, Excel スプレッドシート、アクティブ化, インフラジスティックス
mentionedTypes: ['Spreadsheet']
_language: ja
---

# Angular スプレッドシートのアクティブ化

Angular Spreadsheet コンポーネントは、コントロールで現在アクティブなセル、ペイン、およびワークシートを決定できるプロパティを公開します。これは、ユーザーがコントロール内で移動または編集している場所を判断するのに役立ちます。

## Angular スプレッドシートのアクティブ化の例

<div class="sample-container loading" style="height: 500px">
    <iframe id="spreadsheet-overview-sample-iframe" src='{environment:dvDemosBaseUrl}/excel/spreadsheet-activation' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);" alt="Angular スプレッドシートのアクティブ化の例"></iframe>
</div>


<div class="divider--half"></div>

## アクティベーションの概要

Angular [`IgxSpreadsheetComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxspreadsheetcomponent.html) コントロールのアクティブ化は、スプレッドシートの現在の [`workbook`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxspreadsheetcomponent.html#workbook) のセル、ペイン、およびワークシート間で分割されます。3 つの アクティブなプロパティは以下のとおりです。

-   [`activeCell`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxspreadsheetcomponent.html#activecell): スプレッドシートのアクティブ セルを設定します。設定するには、[`SpreadsheetCell`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/spreadsheetcell.html) の新しいインスタンスを作成し、そのセルに関する列と行、またはセルの文字列アドレスなどの情報を渡す必要があります。
-   [`activePane`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxspreadsheetcomponent.html#activepane): スプレッドシート コントロールの現在アクティブなワークシートのアクティブ ペインを返します。
-   [`activeWorksheet`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxspreadsheetcomponent.html#activeworksheet): スプレッドシート コントロールの [`workbook`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxspreadsheetcomponent.html#workbook) 内のアクティブ ワークシートを返すか、設定します。これは、スプレッドシートに添付されている`ワークブック`内の既存のワークシートに設定することで設定できます。

## コード スニペット

次のコード スニペットは、[`IgxSpreadsheetComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxspreadsheetcomponent.html) コントロールのセルとワークシートのアクティブ化の設定を示しています。

```ts
this.spreadsheet.activeWorksheet = this.spreadsheet.workbook.worksheets(1);

this.spreadsheet.activeCell = new SpreadsheetCell("C5");
```
