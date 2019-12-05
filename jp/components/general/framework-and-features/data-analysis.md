---
title: Ignite UI for Angular のデータ分析
_description: Ignite UI for Angular でチャート統合の機能を使用して最適なビジネス目標を達成するためのデータ分析手段を提供する方法。
_keywords: Ignite UI for Angular, チャート統合, データ分析
_language: ja
---

## データ分析 
このトピックでは、エンドユーザーがグリッドのデータに基づいてチャートを視覚化し、必要に応じて異なるチャート タイプを選択できる、チャート作成機能とグリッドの統合を紹介します。データ分析とは、特定の方法でデータを検査、変換、および整理して、そこから役立つ情報を生成するプロセスです。データ分析では、分析的および論理的な推論を通じてデータを評価し、コンテキストに基づいた結果または結論を導き出すことができます。

チャートは、セルの範囲を選択し、コンテキスト メニューをクリックすると表示されます。

<div class="sample-container loading" style="height: 650px;">
    <iframe id="grid-dynamic-chart" frameborder="0" seamless="" width="100%" height="100%" data-src="{environment:demosBaseUrl}/grid/grid-dynamic-chart-data" class="lazyload"></iframe>
</div>

以下のチャート タイプをサポートします。
- [ColumnGrouped](../../data-chart-type-category-series.md), [AreaGrouped](../../data-chart-type-category-area-series.md), [LineGrouped](../../data-chart-type-category-line-series.md), [BarGrouped](../../data-chart-type-category-series.md)
- [ColumnStacked](../../data-chart-type-stacked-column-series.md), [AreaStacked](../../data-chart-type-category-spline-area-series.md), [LineStacked](../../data-chart-type-stacked-line-series.md), [BarStacked](../../data-chart-type-stacked-bar-series.md)
- Column100Stacked, [Area100Stacked](../../data-chart-type-stacked-100-area-series.md), [Line100Stacked](../../data-chart-type-stacked-100-line-series.md), [Bar100Stacked](../../data-chart-type-stacked-100-bar-series.md)
- ScatterPoint, ScatterBubble, ScatterLine. 意味のある散布バブル チャートを表示するために、データが有効な形式でない場合、プレビューを無効にします。
- [Pie チャート](../../pie-chart.md)

> 注: この機能は、構成を簡単にし、必要なコードを最小限に制限するために、ディレクティブとして導入されます。

### 便利なリソース

<div class="divider--half"></div>

* [Angular Universal ガイド (英語)](https://angular.io/guide/universal)
* [Ignite UI スタート キット (英語)](https://github.com/IgniteUI/ng-universal-example)
* [サーバー側レンダリング用語](https://developers.google.com/web/updates/2019/02/rendering-on-the-web)
* [Ignite UI で作業を開始](../getting_started.md)
* [Ignite UI CLI ガイド](../cli/step-by-step-guide.md)
