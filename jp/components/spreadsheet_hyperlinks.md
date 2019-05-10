---
title: Angular Spreadsheet | Grid コントロール | Ignite UI for Angular | ハイパーリンク | Infragistics |
_description: スプレッドシート コントロールを使用して、Excel ドキュメントの作成と編集機能をアプリケーションに直接埋め込むことができます。
_keywords: Spreadsheet, Ignite UI for Angular, Infragistics
_language: ja
---

## Spreadsheet ハイパーリンク

Angular Spreadsheetコンポーネントを使用すると、Excelワークブックに既存のハイパーリンクを表示したり、Webサイト、ファイルディレクトリ、およびワークブック内の他のワークシートにリンクできる新しいハイパーリンクを挿入したりできます。

### デモ

<div class="sample-container" style="height: 500px">
    <iframe id="spreadsheet-overview-sample-iframe" src='{environment:demosBaseUrl}/spreadsheet/spreadsheet-hyperlinks' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>

<div class="divider--half"></div>

### ハイパーリンク概要

ハイパーリンクを配置するワークシートの `Hyperlinks` コレクションにアクセスすると、ハイパーリンクが `IgxSpreadsheet` コントロールに追加されます。このコレクションには、`WorksheetHyperlink` オブジェクトを受け取る `add` メソッドがあり、セル アドレス、移動先のハイパーリンク URL、表示テキスト、およびオプションでホバー時に表示するツールチップを定義できます。

### 依存関係

ハイパーリンクを使用するようにスプレッドシート コントロールを設定するときは、`WorksheetHyperlink` クラスをインポートする必要があります。

```typescript
import { WorksheetHyperlink } from "igniteui-angular-excel/ES5/WorksheetHyperlink";
```

### コード スニペット

次のコードスニペットは、`IgxSpreadsheet` コントロールで現在表示されているワークシートにハイパーリンクを追加する方法を示しています。

```typescript
this.spreadsheet.activeWorksheet.hyperlinks().add(new WorksheetHyperlink("A1", "http://www.infragistics.com", "Infragistics", "Infragistics Home Page"));
```
