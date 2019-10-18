---
title: ハイライト
_description: Ignite UI for Angular Category Chart コンポーネントは複雑なデータ ビジュアライゼーションを API によって簡素化できます。ユーザーがデータのコレクションまたはコレクションのグループにバインドし、データを指定するプロパティを設定後、チャート コントロールが残りの作業を処理します。
_keywords: Ignite UI for Angular, Angular, ネイティブ Angular コンポーネント スイート, ネイティブ Angular コントロール, ネイティブ Angular Components, ネイティブ Angular コンポーネント ライブラリ, Angular Chart, Angular Chart コントロール, Angular Chart 例, Angular Grid コンポーネント, Angular Chart コンポーネント, Angular Category Chart
_language: ja
---

## ハイライト

このトピックでは、[`IgxCategoryChart`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategorychart.html) のハイライト機能について説明します。

### デモ

<div class="sample-container loading" style="height: 500px">
    <iframe id="category-chart-highlighting-iframe" src='{environment:dvDemosBaseUrl}/charts/category-chart-highlighting' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn"   data-iframe-id="category-chart-highlighting-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">View on StackBlitz
    </button>
</div>
<div class="divider--half"></div>

### レイヤーのハイライト

IgxCategoryChart は、項目のホバー オーバー時に 3 種類のハイライト タイプを使用できます。

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
