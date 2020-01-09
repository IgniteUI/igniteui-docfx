---
title: スプレッドシート | Grid コントロール | Ignite UI for Angular | コマンド | インフラジスティックス
_description: スプレッドシート コントロールを使用して、Excel ドキュメントの作成と編集のエクスペリエンスをアプリケーションに直接埋め込むことができます。
_keywords: Spreadsheet, Ignite UI for Angular, Infragistics, スプレッドシート, インフラジスティックス
_language: ja
mentionedTypes: ['Spreadsheet']
---

## コマンドの使用

Angular Spreadsheet コンポーネントは、スプレッドシートのさまざまな機能をアクティブにするためのコマンドを実行できます。このトピックでは、コマンドによりコントロールを使用してさまざまな操作を実行する方法を説明します。多くのコマンドは、アクティブセル、行、またはワークシートに基づいてアクションを実行します。例えば、ZoomIn と ZoomOut の 2 つのコマンドです。完全なリストは SpreadsheetAction の enum を見てください。

### サンプル

<div class="sample-container loading" style="height: 500px">
    <iframe id="spreadsheet-commands-sample-iframe" src='{environment:dvDemosBaseUrl}/spreadsheet/spreadsheet-commands' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="spreadsheet-commands-sample-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">StackBlitz　で表示
    </button>
</div>

<div class="divider--half"></div>

### 依存関係

コマンドボードを利用する前に、`SpreadsheetAction` をインポートします。

```ts
import { IgxSpreadsheetComponent } from 'igniteui-angular-spreadsheet';
import { SpreadsheetAction } from 'igniteui-angular-spreadsheet';
```

<div class="divider--half"></div>

### 使用方法

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
