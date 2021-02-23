---
title: Angular チャートおよびグラフ | データ可視化ツール | ツールチップ タイプ | インフラジスティックス
_description: インフラジスティックスの Angular チャートのツールチップを使用して、重要なデータを表示します。インフラジスティックスの Ignite UI for Angular グラフ チュートリアルを是非お試しください!
_keywords: Angular charts, category chart, tooltip, Ignite UI for Angular, Infragistics, Angular チャート, カテゴリ チャート, ツールチップ, インフラジスティックス
mentionedTypes: ['CategoryChart', 'ToolTipType']
_language: ja
---

# Angular ツールチップ タイプ

Ignite UI for Angular カテゴリ チャート コンポネントには、さまざまなツールチップ タイプがあります。

## Angular ツールチップ タイプの例

<div class="sample-container loading" style="height: 500px">
    <iframe id="category-chart-tooltip-types-iframe" src='{environment:dvDemosBaseUrl}/charts/category-chart-tooltip-types' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);" alt="Angular ツールチップ タイプの例"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn"   data-iframe-id="category-chart-tooltip-types-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">StackBlitz で表示
    </button>


</div>
<div class="divider--half"></div>

## ツールチップ タイプ

カテゴリ チャート コンポネントは以下の方法でツールチップの表示を設定できます。

1.  [`Default`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/tooltiptype.html#default) ツールチップはポインターが項目上に配置されたときに単一の項目に対してツールチップを表示できます。
2.  [`Item`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/tooltiptype.html#item) ツールチップはポインターが項目上に配置されたときに各データ項目に対してツールチップを表示できます。
3.  [`Category`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/tooltiptype.html#category) ツールチップはポインターがデータ ポイント上に配置されたときにすべてのデータ ポイントに対してツールチップを表示できます。
4.  [`None`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/tooltiptype.html#none) はツールチップが非表示になります。

```html
<igx-category-chart
    [dataSource]="data"
    toolTipType="Category">
</igx-category-chart>
```
