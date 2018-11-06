---
title: Financial Chart 注釈
_description: Ignite UI for Angular Financial Chart コンポーネントは、シンプルで直感的な API を使用してファイナンシャル データを表示します。ユーザーがデータにバインド後、チャートはデータの可視化オプションを複数提供します。
_keywords: Ignite UI for Angular, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components, Native Angular Components Library, Angular Chart, Angular Chart Control, Angular Chart Example, Angular Grid Component, Angular Chart Component, Angular Financial Chart
_language: ja
---
## 注釈

このトピックでは、`igx-financial-chart` の注釈について説明します。

### デモ
<div class="sample-container" style="height: 550px">
    <iframe id="financial-chart-annotations-iframe" src='{environment:demosBaseUrl}/financial-chart-annotations' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn"   data-iframe-id="financial-chart-annotations-iframe" data-demos-base-url="{environment:demosBaseUrl}">View on StackBlitz
    </button>
</div>
<div class="divider--half"></div>

### 十字線レイヤー

Crosshair Layer は、各ターゲット シリーズの実際の値に一致する十字線を提供します。  Crosshair タイプは、Horizontal、Vertical、Both があります。  `crosshairsSnapToData` プロパティを true に設定してデータに十字線のスナップできます。十字線がデータ ポイント間で補完されます。  注釈を有効にして軸に沿って十字線の値を表示できます。

```html
<igx-financial-chart
    [dataSource]="data"
    width="850px"
    height="600px"
    crosshairsDisplayMode="Horizontal"
    crosshairsSnapToData="true"
    crosshairsAnnotationEnabled="true">
</igx-financial-chart>
```

### 最終値レイヤー

最終値レイヤーは、シリーズに表示された最終値の軸に沿ったクイックビューをサポートします。

```html
<igx-financial-chart
    [dataSource]="data"
    width="850px"
    height="600px"
    finalValueAnnotationsVisible="true">
</igx-financial-chart>
```

### コールアウト レイヤー

コールアウト レイヤーは、X/Y 位置にコールアウトを表示します。 

> 注: X 軸モードを使用する際に `calloutsXMemberPath` は数値インデックスをポイントする必要があります。あるいは、`calloutsXMemberPath` を時間値にポイントしてください。

```html
<igx-financial-chart
    [dataSource]="data"
    width="850px"
    height="600px"
    calloutsVisible="true"
    [calloutsDataSource]="calloutData"
    calloutsXMemberPath="index"
    calloutsYMemberPath="yValue"
    calloutsLabelMemberPath="title"
    calloutsContentMemberPath="content">
</igx-financial-chart>
```
