---
title: Data Chart コンポーネント - ネイティブ Angular|Ignite UI for Angular
_description: Ignite UI for Angular Data Chart は、軸、マーカー、凡例、および注釈レイヤーのモジュール設計を提供するチャート コンポーネントです。チャート機能は、複合チャート ビューを作成するために同じチャート領域でのビジュアル要素の複数のインスタンスを利用できます。
_keywords: Ignite UI for Angular, Angular, ネイティブ Angular コンポーネント スイート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント, ネイティブ Angular コンポーネント ライブラリ, Angular Data Chart, Angular Data Chart コントロール, Angular Data Chart Example, Angular Data Chart コンポーネント, Angular Data Chart
_language: ja
---

## シリーズ

[`IgxDataChart`](datachart_series_types.md) コントロールでシリーズは類似するシリーズの次のグループに分類されます。カテゴリ シリーズ、ファイナンシャル シリーズ、極座標シリーズ、ラジアル シリーズ、エリア シリーズ、散布図シリーズ、積層シリーズ、図形シリーズ。

これらのシリーズに加えて、[`IgxDataChart`](datachart_series_types.md) コントロールに[シリーズ注釈](datachart_series_annotations.md)と[シリーズ ハイライト](datachart_series_highlighting.md)を追加できます。

以下のリストは、各グループのすべてのシリーズ タイプを示します。[`IgxDataChart`](datachart_series_types.md) コントロールで各シリーズを使用する方法についてのヘルプは、シリーズの名前をクリックしてください。

#### カテゴリ シリーズ

-   [AreaSeries](datachart_series_types_category.md)
-   [BarSeries](datachart_series_types_category.md)
-   [ColumnSeries](datachart_series_types_category.md)
-   [LineSeries](datachart_series_types_category.md)
-   [PointSeries](datachart_series_types_category.md)
-   [SplineSeries](datachart_series_types_category.md)
-   [SplineAreaSeries](datachart_series_types_category.md)
-   [StepAreaSeries](datachart_series_types_category.md)
-   [StepLineSeries](datachart_series_types_category.md)
-   [WaterfallSeries](datachart_series_types_category.md)

#### 極座標シリーズ

-   [PolarAreaSeries](datachart_series_types_polar.md)
-   [PolarLineSeries](datachart_series_types_polar.md)
-   [PolarScatterSeries](datachart_series_types_polar.md)
-   [PolarSplineSeries](datachart_series_types_polar.md)
-   [PolarSplineAreaSeries](datachart_series_types_polar.md)

#### ラジアル シリーズ

-   [RadialAreaSeries](datachart_series_types_radial.md)
-   [RadialLineSeries](datachart_series_types_radial.md)
-   [RadialColumnSeries](datachart_series_types_radial.md)
-   [RadialPieSeries](datachart_series_types_radial.md)

#### エリア シリーズ

-   [RangeAreaSeries](datachart_series_types_range.md)
-   [RangeColumnSeries](datachart_series_types_range.md)

#### 散布図シリーズ

-   [Scatter Area Series](datachart_series_types_scatter_area.md)
-   [Scatter Bubble Series](datachart_series_types_scatter_bubble.md)
-   [Scatter Contour Series](datachart_series_types_scatter_contour.md)
-   [Scatter Marker Series](datachart_series_types_scatter_marker.md)
-   [Scatter Line Series](datachart_series_types_scatter_marker.md)
-   [Scatter Spline Series](datachart_series_types_scatter_marker.md)
-   [Scatter Polygon Series](datachart_series_types_shape.md)
-   [Scatter Polyline Series](datachart_series_types_shape.md)

#### ファイナンシャル シリーズ

-   [FinancialPriceSeries (OHLC)](datachart_series_types_financial.md)
-   [FinancialPriceSeries (Candlestick)](datachart_series_types_financial.md)

#### ファイナンシャル オーバーレイ

-   [BollingerBandsOverlay](datachart_series_types_financial.md)
-   [PriceChannelOverlay](datachart_series_types_financial.md)

#### 財務指標

-   [AbsoluteVolumeOscillatorIndicator](datachart_series_types_financial.md)
-   [AccumulationDistributionIndicator](datachart_series_types_financial.md)
-   [BollingerBandWidthIndicator](datachart_series_types_financial.md)
-   [ChaikinVolatilityIndicator](datachart_series_types_financial.md)
-   [ChaikinOscillatorIndicator](datachart_series_types_financial.md)
-   [DetrendedPriceOscillatorIndicator](datachart_series_types_financial.md)
-   [CommodityChannelIndexIndicator](datachart_series_types_financial.md)
-   [EaseOfMovementIndicator](datachart_series_types_financial.md)
-   [FastStochasticOscillatorIndicator](datachart_series_types_financial.md)
-   [ForceIndexIndicator](datachart_series_types_financial.md)
-   [FullStochasticOscillatorIndicator](datachart_series_types_financial.md)
-   [MarketFacilitationIndexIndicator](datachart_series_types_financial.md)
-   [MassIndexIndicator](datachart_series_types_financial.md)
-   [MedianPriceIndicator](datachart_series_types_financial.md)
-   [MoneyFlowIndexIndicator](datachart_series_types_financial.md)
-   [MovingAverageConvergenceDivergenceIndicator](datachart_series_types_financial.md)
-   [NegativeVolumeIndexIndicator](datachart_series_types_financial.md)
-   [OnBalanceVolumeIndicator](datachart_series_types_financial.md)
-   [PercentageVolumeOscillatorIndicator](datachart_series_types_financial.md)
-   [PercentagePriceOscillatorIndicator](datachart_series_types_financial.md)
-   [PositiveVolumeIndexIndicator](datachart_series_types_financial.md)
-   [RateOfChangeAndMomentumIndicator](datachart_series_types_financial.md)
-   [RelativeStrengthIndexIndicator](datachart_series_types_financial.md)
-   [SlowStochasticOscillatorIndicator](datachart_series_types_financial.md)
-   [StandardDeviationIndicator](datachart_series_types_financial.md)
-   [StochRSIIndicator](datachart_series_types_financial.md)
-   [TRIXIndicator](datachart_series_types_financial.md)
-   [TypicalPriceIndicator](datachart_series_types_financial.md)
-   [UltimateOscillatorIndicator](datachart_series_types_financial.md)
-   [WeightedCloseIndicator](datachart_series_types_financial.md)
-   [WilliamsPercentRIndicator](datachart_series_types_financial.md)
