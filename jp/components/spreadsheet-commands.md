---
title: Angular スプレッドシート | コマンド | インフラジスティックス
_description: インフラジスティックスの Angular スプレッドシート コントロールのさまざまな機能をアクティブにするためのコマンドを実行できます。Ignite UI for Angular スプレッドシートで ZoomIn や ZoomOut などのコマンドを使用できます。
_keywords: Spreadsheet, commands, Ignite UI for Angular, Infragistics, スプレッドシート, コマンド, インフラジスティックス
mentionedTypes: ['Spreadsheet', 'SpreadsheetAction']
_language: ja
---

# Angular コマンドの使用

Angular Spreadsheet コンポーネントは、スプレッドシートのさまざまな機能をアクティブにするためのコマンドを実行できます。このトピックでは、コマンドによりコントロールを使用してさまざまな操作を実行する方法を説明します。多くのコマンドは、アクティブセル、行、またはワークシートに基づいてアクションを実行します。例えば、ZoomIn と ZoomOut の 2 つのコマンドです。完全なリストは SpreadsheetAction 列挙型を見てください。

## Angular コマンドの使用の例

<code-view style="height: 500px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/excel/spreadsheet-commands"
           alt="コマンドの使用の例"
           github-src="excel/spreadsheet/commands">
</code-view>

<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
    <body>
      <a target="_blank" href="https://codesandbox.io/s/github/IgniteUI/igniteui-angular-examples/tree/master/samples/excel/spreadsheet/commands?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/app.component.html" rel="noopener noreferrer">
            <img height="40px" style="border-radius: 0rem; max-width: 100%;" alt="Code Sandbox" src="https://static.infragistics.com/xplatform/images/browsers/open-sandbox.png"/>
        </a>
        <a target="_blank" href="https://stackblitz.com/github/IgniteUI/igniteui-angular-examples/tree/master/samples/excel/spreadsheet/commands?file=src%2Fapp.component.html" rel="noopener noreferrer">
            <img height="40px" style="border-radius: 0rem; max-width: 100%;" alt="Stackblitz" src="https://static.infragistics.com/xplatform/images/browsers/open-stackblitz.png"/>
        </a>
    </body>
</html>

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

## API メンバー

-   `ExecuteAction`
-   `SpreadsheetAction`
