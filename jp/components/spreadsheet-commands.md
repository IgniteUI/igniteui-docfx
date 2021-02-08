---
title: Angular スプレッドシート | コマンド | インフラジスティックス
_description: インフラジスティックスの Angular スプレッドシート コントロールのさまざまな機能をアクティブにするためのコマンドを実行できます。Ignite UI for Angular スプレッドシートで ZoomIn や ZoomOut などのコマンドを使用できます。
_keywords: Spreadsheet, commands, Ignite UI for Angular, Infragistics, スプレッドシート, コマンド, インフラジスティックス
mentionedTypes: ['Spreadsheet', 'SpreadsheetAction']
_language: ja
---

# Angular コマンドの使用

Angular Spreadsheet コンポーネントは、スプレッドシートのさまざまな機能をアクティブにするためのコマンドを実行できます。このトピックでは、コマンドによりコントロールを使用してさまざまな操作を実行する方法を説明します。多くのコマンドは、アクティブセル、行、またはワークシートに基づいてアクションを実行します。例えば、ZoomIn と ZoomOut の 2 つのコマンドです。完全なリストは SpreadsheetAction 列挙体を見てください。

## Angular コマンドの使用の例

<div class="sample-container loading" style="height: 500px">
    <iframe id="spreadsheet-commands-sample-iframe" src='{environment:dvDemosBaseUrl}/excel/spreadsheet-commands' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);" alt="Angular Spreadsheet コンポーネントは、スプレッドシートのさまざまな機能をアクティブにするためのコマンドを実行できます。このトピックでは、コマンドによりコントロールを使用してさまざまな操作を実行する方法を説明します。多くのコマンドは、アクティブセル、行、またはワークシートに基づいてアクションを実行します。例"></iframe>
</div>


<div class="divider--half"></div>

## 依存関係

コマンドボードを利用する前に、`SpreadsheetAction` をインポートします。

```ts
import { IgxSpreadsheetComponent } from 'igniteui-angular-spreadsheet';
import { SpreadsheetAction } from 'igniteui-angular-spreadsheet';
```

<div class="divider--half"></div>

## 使用方法

以下のコード スニペットは、データの検証規則を設定する方法を示します。

```ts
@ViewChild("spreadsheet", { read: IgxSpreadsheetComponent })
public spreadsheet: IgxSpreadsheetComponent;

// ...

public zoomIn(): void {
    this.spreadsheet.executeAction(SpreadsheetAction.ZoomIn);
}

public zoomOut(): void {
    this.spreadsheet.executeAction(SpreadsheetAction.ZoomOut);
}
```
