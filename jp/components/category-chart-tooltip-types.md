---
title: カテゴリ チャート | データ可視化ツール | Ignite UI for Angular | ツールチップ タイプ | インフラジスティックス
_description: カテゴリ チャート コンポネントを使用して、データを解析し、データを表すための最適なチャート タイプを自動的に選択します。視覚化のチャート タイプについて説明します。
_keywords: category chart, Ignite UI for Angular, Infragistics, カテゴリ チャート, インフラジスティックス
mentionedTypes: ['CategoryChart', 'ToolTipType']
_language: ja
---

## ツールチップ タイプ

Ignite UI for Angular カテゴリ チャート コンポネントには、さまざまなツールチップ タイプがあります。

### サンプル

<div class="sample-container loading" style="height: 500px">
    <iframe id="category-chart-tooltip-types-iframe" src='{environment:dvDemosBaseUrl}/charts/category-chart-tooltip-types' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn"   data-iframe-id="category-chart-tooltip-types-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">StackBlitz で表示
    </button>
</div>
<div class="divider--half"></div>

### ツールチップ タイプ

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
