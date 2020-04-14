---
title: カテゴリ チャート | データ可視化ツール | Ignite UI for Angular | ハイライト | インフラジスティックス
_description: カテゴリ チャート コンポネントを使用して、データを解析し、データを表すための最適なチャート タイプを自動的に選択します。視覚化のチャート タイプについて説明します。
_keywords: category chart, Ignite UI for Angular, Infragistics, カテゴリ チャート, インフラジスティックス
mentionedTypes: ['CategoryChart']
_language: ja
---

## ハイライト

Ignite UI for Angular カテゴリ チャート コンポネントには、ハイライト機能があります。

### サンプル

<div class="sample-container loading" style="height: 500px">
    <iframe id="category-chart-highlighting-iframe" src='{environment:dvDemosBaseUrl}/charts/category-chart-highlighting' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn"   data-iframe-id="category-chart-highlighting-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">StackBlitz で表示
    </button>
</div>
<div class="divider--half"></div>

### レイヤーのハイライト

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
