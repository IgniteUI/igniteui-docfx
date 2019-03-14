---
title: ツールチップ タイプ
_description: Ignite UI for Angular Financial Chart コンポーネントは、シンプルで直感的な API を使用してファイナンシャル データを表示します。ユーザーがデータにバインド後、チャートはデータの可視化オプションを複数提供します。
_keywords: Ignite UI for Angular, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components, Native Angular Components Library, Angular Chart, Angular Chart Control, Angular Chart Example, Angular Chart Component, Angular Financial Chart
_language: ja
---

## ツールチップ タイプ

このトピックでは、`IgxFinancialChart` のツールチップ タイプについて説明します。

### デモ

<div class="sample-container loading" style="height: 500px">
    <iframe id="financial-chart-tooltip-types-iframe" src='{environment:demosBaseUrl}/charts/financial-chart-tooltip-types' width="100%" height="100%" seamless="" frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn"   data-iframe-id="financial-chart-tooltip-types-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示
    </button>
</div>
<div class="divider--half"></div>

### ツールチップ タイプ

IgxFinancialChart は以下の方法でツールチップの表示を設定できます。

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
