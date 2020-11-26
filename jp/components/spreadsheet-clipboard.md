---
title: Angular スプレッドシート | クリップボード操作 | インフラジスティックス
_description: インフラジスティックスの Angular スプレッドシート コントロール内でコピー、切り取り、貼り付けなどのクリップボード操作を使用します。Infragistics Ignite UI for Angular スプレッドシートのサンプルを是非お試しください!
_keywords: Spreadsheet, clipboard operations, Ignite UI for Angular, Infragistics, スプレッドシート, クリップボード操作, インフラジスティックス
mentionedTypes: ['Spreadsheet', 'SpreadsheetAction', 'SpreadsheetCommandType', 'Command']
_language: ja
---

# Angular クリップボードでの作業

このトピックでは、クリップボードの操作を実行する方法を説明します。

## Angular クリップボードでの作業の例

<div class="sample-container loading" style="height: 500px">
    <iframe id="spreadsheet-clipboard-sample-iframe" src='{environment:dvDemosBaseUrl}/excel/spreadsheet-clipboard' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);" alt="Angular クリップボードでの作業の例"></iframe>
</div>


<div class="divider--half"></div>

## 依存関係

クリップボードを利用する前に、`SpreadsheetAction` 列挙体をインポートします。

<!-- Angular -->

```ts
import { IgxSpreadsheetComponent } from 'igniteui-angular-spreadsheet';
import { SpreadsheetAction } from 'igniteui-angular-spreadsheet';
```

<div class="divider--half"></div>

## 使用方法

次のコード スニペットは、Angular [`IgxSpreadsheetComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxspreadsheetcomponent.html) コントロールでクリップボードに関連するコマンドを実行する方法を示しています。

```ts
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
