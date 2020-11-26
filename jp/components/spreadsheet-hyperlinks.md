---
title: Angular スプレッドシート | ハイパーリンク | インフラジスティックス
_description: インフラジスティックスの Angular スプレッドシート コントロールを使用して、Excel ワークブックに Webサイト、ファイル ディレクトリ、およびその他のワークシートにリンクするハイパーリンクを表示します。Ignite UI for Angular スプレッドシート チュートリアルを是非お試しください!
_keywords: Excel Spreadsheet, hyperlinks, Ignite UI for Angular, Infragistics, Excel スプレッドシート、ハイパーリンク, インフラジスティックス
mentionedTypes: ['Spreadsheet']
_language: ja
---

# Angular Spreadsheet ハイパーリンク

Angular Spreadsheet コンポーネントは、Excel ワークブックに既存のハイパーリンクを表示、Webサイト、ファイルディレクトリ、およびワークブック内の他のワークシートにリンクできる新しいハイパーリンクを挿入できます。

## Angular Spreadsheet ハイパーリンクの例

<div class="sample-container loading" style="height: 500px">
    <iframe id="spreadsheet-overview-sample-iframe" src='{environment:dvDemosBaseUrl}/excel/spreadsheet-hyperlinks' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);" alt="Angular Spreadsheet ハイパーリンクの例"></iframe>
</div>


<div class="divider--half"></div>

## ハイパーリンク概要

ハイパーリンクを配置するワークシートの `Hyperlinks` コレクションにアクセスすると、ハイパーリンクが `表計算、スプレッドシート` コントロールに追加されます。このコレクションには、[`WorksheetHyperlink`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/worksheethyperlink.html) オブジェクトを受け取る `add` メソッドがあり、セル アドレス、移動先のハイパーリンク URL、表示テキスト、およびオプションでホバー時に表示するツールチップを定義できます。

## 依存関係

ハイパーリンクを使用するように Angular スプレッドシート コントロールを設定するときは、[`WorksheetHyperlink`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/worksheethyperlink.html) クラスをインポートする必要があります。

<!-- Angular -->

```ts
import { WorksheetHyperlink } from 'igniteui-angular-excel';
```

## コード スニペット

以下のコード スニペットは、Angular [`IgxSpreadsheetComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxspreadsheetcomponent.html) コントロールで現在表示されているワークシートにハイパーリンクを追加する方法を示しています。

```ts
this.spreadsheet.activeWorksheet.hyperlinks().add(new WorksheetHyperlink("A1", "http://www.infragistics.com", "Infragistics", "Infragistics Home Page"));
```
