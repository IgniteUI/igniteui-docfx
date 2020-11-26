---
title: Angular ファイナンシャル チャート | 注釈 | インフラジスティックス
_description: インフラジスティックスの Angular ファイナンシャル チャート コントロールを使用して、十字線レイヤー、最終値レイヤー、コールアウト レイヤーなどの注釈をチャート軸に追加できます。Ignite UI for Angular でチャートと可視化を向上させます。
_keywords: Angular charts, financial chart, stock chart, callout layer, final value, crosshair, Ignite UI for Angular, Infragistics, Angular チャート, ファイナンシャル チャート, 株価チャート, コールアウト レイヤー, 最終値, 十字線, インフラジスティックス
mentionedTypes: ['FinancialChart']
_language: ja
---

# Angular 注釈

このトピックでは、Angular Financial Chart コンポーネントの注釈について説明します。

## Angular 注釈の例

<div class="sample-container loading" style="height: 500px">
    <iframe id="financial-chart-annotations-iframe" src='{environment:dvDemosBaseUrl}/charts/financial-chart-annotations' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);" alt="Angular 注釈の例"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn"   data-iframe-id="financial-chart-annotations-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">stackblitz で表示
    </button>


</div>
<div class="divider--half"></div>

## 十字線レイヤー

Crosshair Layer は、各ターゲット シリーズの実際の値に一致する十字線を提供します。Crosshair タイプは、Horizontal、Vertical、Both があります。[`crosshairsSnapToData`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdomainchartcomponent.html#crosshairssnaptodata) プロパティを true に設定してデータに十字線のスナップできます。十字線がデータ ポイント間で補完されます。  注釈を有効にして軸に沿って十字線の値を表示できます。

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

## 最終値レイヤー

最終値レイヤーは、シリーズに表示された最終値の軸に沿ったクイックビューをサポートします。

```html
<igx-financial-chart
    [dataSource]="data"
    width="850px"
    height="600px"
    finalValueAnnotationsVisible="true">
</igx-financial-chart>
```

## コールアウト レイヤー

コールアウト レイヤーは、X/Y 位置にコールアウトを表示します。

> 注: X 軸モードを使用する際に [`calloutsXMemberPath`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdomainchartcomponent.html#calloutsxmemberpath) は数値インデックスをポイントする必要があります。あるいは、[`calloutsXMemberPath`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdomainchartcomponent.html#calloutsxmemberpath) を時間値にポイントしてください。

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
