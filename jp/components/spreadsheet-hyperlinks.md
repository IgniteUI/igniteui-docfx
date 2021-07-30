---
title: Angular スプレッドシート | ハイパーリンク | インフラジスティックス
_description: インフラジスティックスの Angular スプレッドシート コントロールを使用して、Excel ワークブックに Webサイト、ファイル ディレクトリ、およびその他のワークシートにリンクするハイパーリンクを表示します。Ignite UI for Angular スプレッドシート チュートリアルを是非お試しください!
_keywords: Excel Spreadsheet, hyperlinks, Ignite UI for Angular, Infragistics, Excel スプレッドシート、ハイパーリンク, インフラジスティックス
mentionedTypes: ['Spreadsheet']
_language: ja
---

# Angular Spreadsheet ハイパーリンク

Angular Spreadsheet コンポーネントは、Excel ワークブックに既存のハイパーリンクを表示、Web サイト、ファイル ディレクトリ、およびワークブック内の他のワークシートにリンクできる新しいハイパーリンクを挿入できます。

## Angular Spreadsheet ハイパーリンクの例

<code-view style="height: 500px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/excel/spreadsheet-hyperlinks"
           alt="Angular Spreadsheet ハイパーリンクの例"
           github-src="excel/spreadsheet/hyperlinks">
</code-view>

<div class="divider--half"></div>

## ハイパーリンク概要

ハイパーリンクを配置するワークシートの `Hyperlinks` コレクションにアクセスすると、ハイパーリンクが表計算、[`IgxSpreadsheetComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxspreadsheetcomponent.html) コントロールに追加されます。このコレクションには、[`WorksheetHyperlink`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/worksheethyperlink.html) オブジェクトを受け取る `Add` メソッドがあり、セル アドレス、移動先のハイパーリンク URL、表示テキスト、およびオプションでホバー時に表示するツールチップを定義できます。

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
