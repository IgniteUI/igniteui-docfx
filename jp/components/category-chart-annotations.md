---
title: カテゴリ チャート | データ可視化ツール | Ignite UI for Angular | 注釈 | インフラジスティックス
_description: カテゴリ チャート コンポネントを使用して、データを解析し、データを表すための最適なチャート タイプを自動的に選択します。可視化のチャート タイプについて説明します。
_keywords: category chart, Ignite UI for Angular, Infragistics, カテゴリ チャート, インフラジスティックス
mentionedTypes: ['XamCategoryChart']
_language: ja
---

## 注釈

このトピックでは、Angular カテゴリ チャート コンポーネントの注釈やインタラクションについて説明します。

### サンプル

<div class="sample-container loading" style="height: 500px">
    <iframe id="category-chart-annotations-iframe" src='{environment:dvDemosBaseUrl}/charts/category-chart-annotations' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn"   data-iframe-id="category-chart-annotations-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">StackBlitz で表示
    </button>
</div>
<div class="divider--half"></div>

### 十字線レイヤー

カテゴリ チャートの十字線レイヤーは、各ターゲット シリーズの実際の値に一致する十字線を提供します。十字線タイプは、Horizontal、Vertical、Both があります。`CrosshairsSnapToData` プロパティを true に設定してデータに十字線のスナップできます。十字線がデータ ポイント間で補完されます。注釈を有効にして軸に沿って十字線の値を表示できます。

```html
<igx-category-chart
    [dataSource]="data"
    crosshairsDisplayMode="Horizontal"
    crosshairsSnapToData="true"
    crosshairsAnnotationEnabled="true">
</igx-category-chart>
```

### 最終値レイヤー

カテゴリ チャート コンポーネントの最終値レイヤーは、シリーズに表示された最終値の軸に沿ったクイックビューをサポートします。

```html
<igx-category-chart
    [dataSource]="data"
    finalValueAnnotationsVisible="true">
</igx-category-chart>
```

### コールアウト レイヤー

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
