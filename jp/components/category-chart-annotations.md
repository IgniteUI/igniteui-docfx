---
title: Angular チャートおよびグラフ | データ可視化ツール | 注釈 | インフラジスティックス
_description: インフラジスティックスの Angular チャート コントロールを使用すると、チャートに注釈を追加できます。Ignite UI for Angular を使用してグラフと視覚化を改善します。
_keywords: Angular charts, category chart, annotations, Ignite UI for Angular, Infragistics, Angular チャート, カテゴリ チャート, 注釈, インフラジスティックス
mentionedTypes: ['CategoryChart']
_language: ja
---

# Angular 注釈

このトピックでは、Angular カテゴリ チャート コンポーネントの注釈やインタラクションについて説明します。

## Angular 注釈の例

<div class="sample-container loading" style="height: 500px">
    <iframe id="category-chart-annotations-iframe" src='{environment:dvDemosBaseUrl}/charts/category-chart-annotations' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);" alt="Angular 注釈例"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn"   data-iframe-id="category-chart-annotations-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">StackBlitz で表示
    </button>


</div>
<div class="divider--half"></div>

## 十字線レイヤー

カテゴリ チャートの十字線レイヤーは、各ターゲット シリーズの実際の値に一致する十字線を提供します。十字線タイプは、Horizontal、Vertical、Both があります。[`crosshairsSnapToData`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdomainchartcomponent.html#crosshairssnaptodata) プロパティを true に設定してデータに十字線のスナップできます。十字線がデータ ポイント間で補完されます。注釈を有効にして軸に沿って十字線の値を表示できます。

```html
<igx-category-chart
    [dataSource]="data"
    crosshairsDisplayMode="Horizontal"
    crosshairsSnapToData="true"
    crosshairsAnnotationEnabled="true">
</igx-category-chart>
```

## 最終値レイヤー

カテゴリ チャート コンポーネントの最終値レイヤーは、シリーズに表示された最終値の軸に沿ったクイックビューをサポートします。

```html
<igx-category-chart
    [dataSource]="data"
    finalValueAnnotationsVisible="true">
</igx-category-chart>
```

## コールアウト レイヤー

カテゴリ チャート コンポーネントのコールアウト レイヤーは、データで指定された X/Y 位置にテキスト コールアウトを表示します。

```html
<igx-category-chart
    [dataSource]="data"
    calloutsVisible="true"
    [calloutsDataSource]="calloutData"
    calloutsXMemberPath="index"
    calloutsYMemberPath="yValue"
    calloutsLabelMemberPath="title">
</igx-category-chart>
```
