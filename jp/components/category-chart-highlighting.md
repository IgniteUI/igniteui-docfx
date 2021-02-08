---
title: Angular チャートおよびグラフ | データ可視化ツール | 強調表示 | インフラジスティックス
_description: インフラジスティックスの Angular チャート コントロールを使用すると、グラフの領域を強調表示できます。$Product Name$ 強調表示機能について説明します。
_keywords: Angular charts, category chart, Highlight Layers, Highlighting, Ignite UI for Angular, Infragistics, Angular チャート, カテゴリ チャート, 強調表示レイヤー, 強調表示, インフラジスティックス
mentionedTypes: ['CategoryChart']
_language: ja
---

# Angular ハイライト

Ignite UI for Angular カテゴリ チャート コンポネントには、ハイライト機能があります。

## Angular ハイライトの例

<div class="sample-container loading" style="height: 500px">
    <iframe id="category-chart-highlighting-iframe" src='{environment:dvDemosBaseUrl}/charts/category-chart-highlighting' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);" alt="Angular ハイライトの例"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn"   data-iframe-id="category-chart-highlighting-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">StackBlitz で表示
    </button>


</div>
<div class="divider--half"></div>

## Ignite UI for Angular レイヤーのハイライト

カテゴリ チャート コンポネントは、項目のホバー オーバー時に 3 種類のハイライト タイプを使用できます。

1.  シリーズ ハイライトは、ポインターがデータ ポイント上にある場合にそのポイントをハイライトします。

2.  項目ハイライトは、バンド図形をその位置で描画またはマーカーをその位置で描画のいずれかでカテゴリ軸を使用するシリーズの項目をハイライトするシリーズ。

3.  カテゴリ ハイライトはすべてのカテゴリ軸を対象にします。カーソル位置に最も近い軸領域を照らす図形を描画します。

```html
<igx-category-chart
    [dataSource]="data"
    isSeriesHighlightingEnabled="true"
    isCategoryHighlightingEnabled="true"
    isItemHighlightingEnabled="true">
</igx-category-chart>
```
