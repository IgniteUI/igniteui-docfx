---
title: Angular ファイナンシャル チャート | データ可視化 | インフラジスティックス
_description: インフラジスティックスの Angular ファイナンシャル チャート
_keywords: Angular Charts, Financial Chart, Infragistics, Angular チャート, ファイナンシャル チャート, インフラジスティックス
mentionedTypes: ["XamFinancialChart"]
_language: ja
---

# Angular ファイナンシャル チャート

Angular ファイナンシャル チャートを使用すると、シンプルで直感的な API を使用して、ファイナンシャル データと株価データを簡単に視覚化できます。その目的は、高パフォーマンスで大量のファイナンシャル サービス、および資本市場データ アプリケーションを構築することです。

価格および出来高のための複数の表示モード、そして多数の財務指標があります。ファイナンシャル チャートはデータ列を解析して選択します。日/時列を X 軸で使用し、Open、High、Low、Close、Volume 列、または最初の 5 つの数値列を Y 軸で使用します。ユーザーがチャート タイプを棒、ローソク足、柱状、または折れ線に設定できます。主要なビジュアル要素にツールバー、価格ペイン、ボリューム ペイン、インジケーター ペイン、およびナビゲーション ペインがあります。

chartType プロパティを以下のオプションの 1 つに設定してチャート タイプを明示的に指定することもできます:

-   Bar (棒)
-   Candle (ローソク足)
-   Column (縦棒)
-   Line (折れ線)
-   Auto (自動) - データ アダプターに基づいてチャート タイプの自動選択を指定します。これは、データの名前および数値列の数に基づいて上記の値を選択します。たとえば、Open、High、Low、および Close 列があるデータ項目のために棒を使用します。

## 複数シリーズの Angular 株価チャート

<div class="sample-container loading" style="height: 400px">
    <iframe id="cc-chart-with-legend" src='{environment:dvDemosBaseUrl}/charts/financial-chart-multiple-data' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);" alt="Angular 株価指数チャート"></iframe>
</div>

<div class="divider--half"></div>

<div class="divider--half"></div>

## Angular 株価チャート

この例では、ファイナンシャル チャートは 1 年間の S&P 500を表しています。投資家に役立ち、テクニカル解析を実施し、将来の価格/レポートを予測します。

<div class="sample-container loading" style="height: 400px">
    <iframe id="fc-chart-stock-index-chart" src='{environment:dvDemosBaseUrl}/charts/financial-chart-stock-index-chart' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);" alt="Angular 株価指数チャート"></iframe>
</div>

<div class="divider--half"></div>

## Angular 株価チャートのスタイル設定

他のシリーズの複合などのより多くの機能を備えたファイナンシャル チャートが必要な場合は、以下に示すように、厚さ、アウトライン、ブラシ、負のアウトライン、負のブラシを構成できます。この例では、ファイナンシャル チャートは Amazon、Microsoft、Tesla の収益を比較しています。

<div class="sample-container loading" style="height: 400px">
    <iframe id="fc-chart-styling-chart" src='{environment:dvDemosBaseUrl}/charts/financial-chart-styling' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);" alt="Angular 株価指数チャート"></iframe>
</div>

<div class="divider--half"></div>

<!-- TODO use this iframe which will point to a new sample:
<iframe src='{environment:dvDemosBaseUrl}/charts/category-chart-type-Line' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);" alt="Angular Financial Chart Example"></iframe> -->

## Angular チャートの注釈

<div class="sample-container loading" style="height: 400px">
    <iframe id="fc-chart-annotations" src='{environment:dvDemosBaseUrl}/charts/financial-chart-annotations' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);" alt="Angular チャートの注釈"></iframe>
</div>

<div class="divider--half"></div>

## Angular チャートのペイン

この例では、ファイナンシャル チャートは米国の収益をプロットしています。

<div class="sample-container loading" style="height: 400px">
    <iframe id="fc-chart-panes" src='{environment:dvDemosBaseUrl}/charts/financial-chart-panes' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);" alt="Angular Chart Panes"></iframe>
</div>

<div class="divider--half"></div>

<!-- TODO list API links used in this topic 
## API メンバー
-->
