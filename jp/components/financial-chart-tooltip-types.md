---
title: Angular ファイナンシャル チャート | ツールチップ タイプ | インフラジスティックス
_description: インフラジスティックスの Angular ファイナンシャル チャートのツールチップを使用して重要なデータを表示します。Ignite UI for Angular グラフ チュートリアルを是非お試しください!
_keywords: Angular charts, financial chart, stock chart, tooltips, Ignite UI for Angular, Infragistics, Angular チャート, ファイナンシャル チャート, 株価チャート, ツールチップ, インフラジスティックス
mentionedTypes: ['FinancialChart']
_language: ja
---

# Angular ツールチップ タイプ

このトピックでは、Angular Financial Chart コンポーネントのツールチップ タイプについて説明します。

## Angular ツールチップ タイプの例

<code-view style="height: 500px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/financial-chart-tooltip-types"
           alt="Angular ツールチップ タイプの例"
           github-src="charts/financial-chart/tooltip-types">
</code-view>

<div class="divider--half"></div>

## ツールチップ タイプ

Angular Financial Chart コンポーネントは以下の方法でツールチップの表示を設定できます。

1.  `Default` ツールチップはポインターが項目上に配置されたときに単一の項目に対してツールチップを表示できます。
2.  `Item` ツールチップはポインターが項目上に配置されたときに各データ項目に対してツールチップを表示できます。
3.  `Category` ツールチップはポインターがデータ ポイント上に配置されたときにすべてのデータ ポイントに対してツールチップを表示できます。
4.  `None` はツールチップが非表示になります。

```html
<igx-financial-chart
    [dataSource]="data"
    toolTipType="Category">
</igx-financial-chart>
```
