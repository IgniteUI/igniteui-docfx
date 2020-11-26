---
title: Angular ファイナンシャル チャート | 構成オプション | インフラジスティックス
_description: ナビゲーション、価格ペイン、オーバーレイ、インジケーター、ボリューム ペイン、トレンドライン、タイトル、サブタイトル、凡例の設定など、インフラジスティックスの Angular ファイナンシャル チャート コントロールの機能の使用方法をについて説明します。Ignite UI for Angular ファイナンシャル グラフのサンプルを是非お試しください!
_keywords: Angular charts, financial chart, stock chart, trendlines, indicators, Ignite UI for Angular, Infragistics, Angular チャート, ファイナンシャル チャート, 株価チャート, ドレンドライン, インジケーター, インフラジスティックス
mentionedTypes: ['FinancialChart', 'FinancialOverlayType']
_language: ja
---

# Angular 近似曲線

Angular Financial Chart コンポーネントで、ナビゲーション動作、トレンドライン レイヤー、オーバーレイ、凡例、チャート タイトル、チャート サブタイトルなどのカスタマイズ可能なビジュアルがあります。

## Angular 近似曲線の例

<div class="sample-container loading" style="height: 500px">
    <iframe id="financial-chart-trendlines-iframe" src='{environment:dvDemosBaseUrl}/charts/financial-chart-trendlines' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);" alt="Angular 近似曲線の例"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="financial-chart-trendlines-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">StackBlitz で表示
    </button>


</div>

<div class="divider--half"></div>

## ナビゲーションの構成

Angular Financial Chart コンポーネントでは、チャート ナビゲーションがデフォルトで有効になっています。ただし、以下のプロパティを設定することによって、カスタマイズできます。

-   [`isHorizontalZoomEnabled`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxfinancialchartcomponent.html#ishorizontalzoomenabled) - チャートがユーザー操作により水平方向にズーム可能かどうかを指定します。デフォルトでこのプロパティは true に設定されます。
-   [`isVerticalZoomEnabled`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxfinancialchartcomponent.html#isverticalzoomenabled) - チャートがユーザー操作により垂直方向にズーム可能かどうかを指定します。デフォルトでこのプロパティは false に設定されます。
-   [`isWindowSyncedToVisibleRange`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxfinancialchartcomponent.html#iswindowsyncedtovisiblerange) - true に設定される場合、Y 軸は表示データ範囲に自動的にサイズ変更します。デフォルトでこのプロパティは false に設定されます。
-   [`windowRect`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdomainchartcomponent.html#windowrect) - [`IgxFinancialChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxfinancialchartcomponent.html) のスクロール状態およびズーム状態を取得または設定するために使用できます。[`windowRect`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdomainchartcomponent.html#windowrect) は、 0 ~ 1 の間の座標およびサイズの Rectangle として表現されます。

```html
 <igx-financial-chart
    [dataSource]="data"
    width="850px"
    height="600px"
    isHorizontalZoomEnabled="true"
    isVerticalZoomEnabled="false">
 </igx-financial-chart>
```

## 価格ペインの構成

価格ペインは常に Financial Chart で表示されます。チャート タイプを変更、またはビジュアルの外観をカスタマイズして構成します。以下のコードは価格ペインでシリーズのブラシおよび太さを設定します。

```html
 <igx-financial-chart
    [dataSource]="data"
    width="850px"
    height="600px"
    chartType="Candle"
    brushes="Green, Blue"
    outlines="Green, Blue"
    negativeBrushes="Red"
    negativeOutlines="Red"
    thickness="2">
 </igx-financial-chart>
```

## オーバーレイの構成

オーバーレイはデフォルトで Angular Financial Chart に表示されません。オーバーレイには、[`BollingerBands`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/financialoverlaytype.html#bollingerbands) および [`PriceChannel`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/financialoverlaytype.html#pricechannel) の 2 種類があります。オーバーレイのデフォルト設定をカスタマイズできます。以下のコードはオーバーレイの色、アウトライン、および太さを設定します。

```html
 <igx-financial-chart
    [dataSource]="data"
    width="850px"
    height="600px"
    overlayTypes="BollingerBands"
    overlayBrushes="Red"
    overlayOutlines="Green"
    overlayThickness="2">
 </igx-financial-chart>
```

## インジケーターの構成

デフォルトでインジケーター ペインは Financial Chart に表示されません。ツールバーを使用してランタイムに表示するインジケーターを選択できます。ペインを表示するには、以下のコードのようにインジケーター タイプを設定する必要があります。

```html
 <igx-financial-chart
    [dataSource]="data"
    width="850px"
    height="600px"
    indicatorTypes="AverageTrueRange,ForceIndex"
    indicatorBrushes="Green, Blue"
    indicatorNegativeBrushes="Red"
    indicatorDisplayTypes="Line"
    indicatorThickness="2">
 </igx-financial-chart>
```

## ボリューム ペインの構成

デフォルトでボリューム ペインは Financial Chart に表示されません。ただし、チャート ツールバーを使用してランタイムにこのペインを有効にするか、以下のコードのようにコードで有効にできます。

```html
 <igx-financial-chart
    [dataSource]="data"
    width="850px"
    height="600px"
    volumeType="Column"
    volumeBrushes="Green, Blue"
    volumeOutlines="White"
    volumeThickness="2">
 </igx-financial-chart>
```

## トレンドラインの構成

トレンドラインはデフォルトでは Angular Financial Chart に表示されません。トレンドラインが表示される場合、同じトレンドラインがすべてのチャート ペインに表示されます。トレンドラインのデフォルト設定をカスタマイズできます。

以下のコードはトレンドラインの色および太さを設定します。

```html
 <igx-financial-chart
    [dataSource]="data"
    width="850px"
    height="600px"
    trendLineType="QuinticFit"
	trendLineThickness="2"
    trendLineBrushes="Green, Blue">
 </igx-financial-chart>
```

## タイトルの構成

チャート ツールバーおよび Financial Chart の価格ペインの間に表示されるタイトルおよびサブタイトルを設定できます。以下のコード例は、タイトルとサブタイトルを設定する方法を紹介します。

```html
 <igx-financial-chart
    [dataSource]="data"
    width="850px"
    height="600px"
    chartTitle="Stock Prices"
    subtitle="Between 2000 and 2015">
 </igx-financial-chart>
```

## 凡例の構成

凡例はデフォルトで表示されません。以下のコードは、凡例を有効する方法を示します。

```html
 <igx-financial-chart
    [dataSource]="data"
    width="850px"
    height="600px"
    isLegendVisible="true">
 </igx-financial-chart>
```
