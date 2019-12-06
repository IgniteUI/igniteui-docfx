---
title: Spreadsheet | Grid コントロール | Ignite UI for Angular | クリップボード | Infragistics |
_description: スプレッドシート コントロールを使用して、Excel ドキュメントの作成と編集のエクスペリエンスをアプリケーションに直接埋め込むことができます。
_keywords: Spreadsheet, Ignite UI for Angular, Infragistics
_language: ja
mentionedTypes: ['Spreadsheet']
---

## クリップボードでの作業

このトピックでは、クリップボードの操作を実行する方法を説明します。

### サンプル

<div class="sample-container loading" style="height: 500px">
    <iframe id="spreadsheet-clipboard-sample-iframe" src='{environment:dvDemosBaseUrl}/spreadsheet/spreadsheet-clipboard' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>

<div class="divider--half"></div>

### 依存関係

クリップボードを利用する前に、SpreadsheetAction をインポートします。

<!-- Angular -->

```ts
import { IgxSpreadsheetComponent } from "igniteui-angular-spreadsheet/ES5/igx-spreadsheet-component";
import { SpreadsheetAction } from "igniteui-angular-spreadsheet/ES5/SpreadsheetAction";
```

<div class="divider--half"></div>

### 使用方法

以下のコードスニペットは、データの検証規則を設定する方法を示しています。

```ts
<<<<<<< HEAD
=======
@ViewChild("spreadsheet", { read: IgxSpreadsheetComponent })
public spreadsheet: IgxSpreadsheetComponent;

// ...

>>>>>>> origin/vnext
public cut(): void {
    this.spreadsheet.executeAction(SpreadsheetAction.Cut);
}

public copy(): void {
    this.spreadsheet.executeAction(SpreadsheetAction.Copy);
}

public paste(): void {
    this.spreadsheet.executeAction(SpreadsheetAction.Paste);
}
```
