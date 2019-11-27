---
title: Data Chart コンポーネント - ネイティブ Angular|Ignite UI for Angular
_description: Ignite UI for Angular Data Chart は、軸、マーカー、凡例、および注釈レイヤーのモジュール設計を提供するチャート コンポーネントです。チャート機能は、複合チャート ビューを作成するために同じチャート領域でのビジュアル要素の複数のインスタンスを利用できます。
_keywords: Ignite UI for Angular, Angular, Native Angular コンポーネント スイート, Native Angular コントロール, ネイティブ Angular コンポーネント, ネイティブ Angular コンポーネント ライブラリ, Angular チャート, Angular チャート コントロール, Angular チャート例, Angular チャート コンポーネント, Angular データ チャート
_language: ja
---

## タイトルとサブタイトル

[`IgxDataChartComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachartcomponent.html) コントロールの `title` と `subtitle` の機能は、チャート コントロールの一番上のセクションに情報を追加できます。チャートにタイトルまたはサブタイトルを追加すると、チャートの内容は自動的にサイズ変更され、指定したタイトルとサブタイトルの情報が表示されます。

### デモ

<div class="sample-container loading" style="height: 500px">
    <iframe id="data-chart-titles-iframe" src='{environment:dvDemosBaseUrl}/charts/data-chart-titles' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="data-chart-titles-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">StackBlitz で表示
    </button>
</div>

<div class="divider--half"></div>

チャートのタイトルと字幕のテキストの色、スタイル、および余白をスタイルするためのプロパティが用意されています。次のコードスニペットは、チャートのタイトルを設定およびカスタマイズする方法を示しています。

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
