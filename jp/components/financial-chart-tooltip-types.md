---
title: ファイナンシャル チャート | データ可視化ツール | Ignite UI for Angular | インフラジスティックス | ツールチップ タイプ
_description: 簡単な API を使用して財務データを視覚化するには、ファイナンシャル チャート コンポーネントを使用します。詳細については、デモ、依存関係、使用方法、およびツールバーを参照してください。
_keywords: financial chart, Ignite UI for Angular, infragistics, ファイナンシャル チャート, インフラジスティックス
mentionedTypes: ['XamFinancialChart']
_language: ja
---

## ツールチップ タイプ

このトピックでは、Angular Financial Chart コンポーネントのツールチップ タイプについて説明します。

### サンプル

<div class="sample-container loading" style="height: 500px">
    <iframe id="financial-chart-tooltip-types-iframe" src='{environment:dvDemosBaseUrl}/charts/financial-chart-tooltip-types' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn"   data-iframe-id="financial-chart-tooltip-types-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">StackBlitz で表示
    </button>
</div>
<div class="divider--half"></div>

### ツールチップ タイプ

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
