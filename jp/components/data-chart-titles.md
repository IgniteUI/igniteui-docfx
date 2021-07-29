---
title: Angular データ チャート | データ可視化ツール | タイトルとサブタイトル | インフラジスティックス
_description: インフラジスティックスの Angular チャートのタイトルとサブタイトルを使用して、上部セクションに情報を追加します。Ignite UI for Angular グラフのタイトルとサブタイトル機能をお試しください!
_keywords: Angular charts, data chart, chart title, chart subtitle, Ignite UI for Angular, Infragistics, Angular チャート, データ チャート, チャート サブタイトル, インフラジスティックス
mentionedTypes: ['XamDataChart']
_language: ja
---

# Angular タイトルとサブタイトル

Angular データ チャート コンポーネントの [`chartTitle`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxseriesviewercomponent.html#charttitle) と [`subtitle`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxseriesviewercomponent.html#subtitle) の機能は、チャート コントロールの一番上のセクションに情報を追加できます。チャートにタイトルまたはサブタイトルを追加すると、チャートの内容は自動的にサイズ変更され、指定したタイトルとサブタイトルの情報が表示されます。

## Angular タイトルとサブタイトルの例

<code-view style="height: 500px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-chart-titles"
           alt="Angular タイトルとサブタイトルの例"
           github-src="charts/data-chart/chart-titles">
</code-view>

<div class="divider--half"></div>

チャートのタイトルと字幕のテキストの色、スタイル、および余白をスタイルするためのプロパティが用意されています。以下のコード スニペットは、チャートのタイトルを設定およびカスタマイズする方法を示しています。

```html
<igx-data-chart [dataSource]="data"
    height="600px"
    width="100%"
    chartTitle="Energy Use Per Country"
    subtitle="Results over a two year period"
    titleTextColor="Red"
    titleTextStyle="24pt Verdana"
    subtitleTextColor="Red"
    subtitleTextStyle="16pt Verdana">
</igx-data-chart>
```
