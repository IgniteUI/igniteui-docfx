---
title: データ チャート | 可視化ツール | Ignite UI for Angular | インフラジスティックス | タイトルとサブタイトル
_description: 同じプロット領域に視覚要素の複数インスタンスを表示するデータ チャートを作成し、複合チャートビューを作成します。
_keywords: data chart, Ignite UI for Angular, Infragistics, データ チャート, インフラジスティックス
mentionedTypes: ['XamDataChart']
_language: ja
---

## タイトルとサブタイトル

Angular データ チャート コンポーネントの `title` と `subtitle` の機能は、チャート コントロールの一番上のセクションに情報を追加できます。チャートにタイトルまたはサブタイトルを追加すると、チャートの内容は自動的にサイズ変更され、指定したタイトルとサブタイトルの情報が表示されます。

### サンプル

<div class="sample-container loading" style="height: 500px">
    <iframe id="data-chart-titles-iframe" src='{environment:dvDemosBaseUrl}/charts/data-chart-titles' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="data-chart-titles-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">StackBlitz で表示
    </button>
</div>

<div class="divider--half"></div>

チャートのタイトルと字幕のテキストの色、スタイル、および余白をスタイルするためのプロパティが用意されています。以下のコードスニペットは、チャートのタイトルを設定およびカスタマイズする方法を示しています。

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
