---
title: Data Chart コンポーネント - ネイティブ Angular|Ignite UI for Angular
_description: Ignite UI for Angular Data Chart は、軸、マーカー、凡例、注釈レイヤーのモジュラー デザインを提供するチャート コンポーネントです。チャート機能は、複合チャート ビューを作成するために同じチャート領域でのビジュアル要素の複数のインスタンスを利用できます。
_keywords: Ignite UI for Angular, Angular, Native Angular コンポーネント スイート, Native Angular コントロール, ネイティブ Angular コンポーネント, ネイティブ Angular コンポーネント ライブラリ, Angular チャート, Angular チャート コントロール, Angular チャート例, Angular チャート コンポーネント, Angular データ チャート
_language: ja
---

## ファイナンシャル シリーズ

このトピックは、[`IgxDataChart`](datachart_series_types_financial.md) コントロールのファイナンシャル シリーズのさまざまなタイプを説明します。ファイナンシャル シリーズはシンプルで最も一般的なチャート シリーズ フォームのグループで、株価などの財務データを取得し、OHLC バーやろうそく足のコレクションとして水平線と一緒に描画します ([`IgxFinancialPriceSeriesComponent`](datachart_series_types_financial.md) など)。

### デモ

<div class="sample-container loading" style="height: 400px">
    <iframe id="data-chart-type-financial-series-iframe" src='{environment:demosBaseUrl}/charts/data-chart-type-financial-series' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="data-chart-type-financial-series-iframe" data-demos-base-url="{environment:demosBaseUrl}">Stackblitz で表示
    </button>
</div>

<div class="divider--half"></div>

### ファイナンシャル シリーズのタイプ

データ チャートは、2 つのファイナンシャル オーバーレイ、30 種類以上の財務指標、高値、低値、始値、終値などの価格をプロットする [`IgxFinancialPriceSeriesComponent`](datachart_series_types_financial.md) をサポートします。[`displayType`](datachart_series_types_financial.md) プロパティを使用して OHLC バーやろうそく足で株価を表示できます。シリーズは、物価トレンドの変化の測定や検証のために多数のその他の財務指標と組み合わせてよく使用されます。

### ファイナンシャル オーバーレイ

ファイナンシャル オーバーレイは通常 [`IgxFinancialPriceSeriesComponent`](datachart_series_types_financial.md) の背面に表示して、株価の傾向を表します。オーバーレイは、Y-Axis 値の同じスケールを使用するため、[`IgxFinancialPriceSeriesComponent`](datachart_series_types_financial.md) をプロットする同じ Data Chart でプロットできます。以下のリストは、ファイナンシャルオーバーレイのすべてのタイプを表示します。

-   [`IgxBollingerBandsOverlayComponent`](datachart_series_types_financial.md) (BBO) は、価格の標準偏差に基づいて価格変動を幅に取り入れます。バンドは標準偏差が増加すると幅が広くなり、標準偏差が減少すると幅が狭くなります。また、バンドは移動平均で平滑化されます。標準偏差およびユーザーが調整可能な平滑化期間は別にして、BollingerBandsOverlay 幅のスケールに影響を及ぼすユーザーが調整可能な乗数もあります。、
-   [`IgxPriceChannelOverlayComponent`](datachart_series_types_financial.md) (PCO) は、価格変動または平行線で価格の経時変化です。下の線はトレンド ラインで低い価格に描画されます。上の線はチャネル ラインで高値に基づきます。チャネルは任意の期間のトレンド方向を示します。価格チャネルまたはトレンドは、上、下または横が可能です。

### 財務指標

財務指標は、株価の動きの計測やトレンドを確認するためにトレーダーによって使用されます。これらのインジケーターは、同じ Y 軸スケールを共有しないため、通常 [`IgxFinancialPriceSeriesComponent`](datachart_series_types_financial.md) を使ってチャートの上と下の別のチャートに表示されます。ただし、チャート コントロールは同じプロット領域で価格シリーズとインジケーターの描画をサポートします。複数軸の使用や軸を共有することもできます。詳細については、[軸共有と複数軸](datachart_axis_sharing.md)のトピックを参照してください。更にすべての財務指標に [`displayType`](datachart_series_types_financial.md) プロパティがあり、インジケーターをライン、柱状、エリアを使用して描画するかどうかを決定します。以下のリストは、ファイナンシャル インジケーターのすべてのタイプを表示します。

-   [`IgxAbsoluteVolumeOscillatorIndicatorComponent`](datachart_series_types_financial.md) (AVO) は、2 つの平均出来高測定の差異を使用して計算されます。パーセンテージ ボリューム オシレーターに似ていますが、範囲が -100% から +100% まであります。インジケーターは、ボリューム トレンドの増加または減少を識別するために使用します。ユーザーは分析の期間を選択できます。
-   [`IgxAccumulationDistributionIndicatorComponent`](datachart_series_types_financial.md) (ADI) は、一般的に出来高に関連する指標によく使用されます。投資家が売買をするかどうかの差異を調べることによって、株式、証券、またはインデックスの時間上の需要と供給を評価します。
-   [`IgxAverageDirectionalIndexIndicatorComponent`](datachart_series_types_financial.md) |(ADX) はトレンドの強さを計測します。このインジケーターは、値動きの強さと方向を決定するために通常使用されます。
-   [`IgxAverageTrueRangeIndicatorComponent`](datachart_series_types_financial.md) |（ATR）は、一定期間内の証券の価格変動またはボラティリティの程度を測定します。このインジケーターは価格方向や期間ではなく、ただ価格移動の程度、つまり乱高下を測定しています。ATR (Average True Range) は、さまざまなベース (毎日、毎週、毎月など) で 14 日の期間を使用して頻繁に計算されています。Average True Range というのは最近 14 期間の TR 値の指数移動平均のことです。使用される実際の期間は、ユーザー設定によって変わります。
-   [`IgxBollingerBandWidthIndicatorComponent`](datachart_series_types_financial.md) |(BBW) は [`IgxBollingerBandsOverlayComponent`](datachart_series_types_financial.md) と一緒に使用されます。このインジケーターは、指定したポイントでボリンジャー バンドの幅を表します。変化が多い場合、バンドの幅がより大きくなります。狭い帯域幅 (低値) は標準偏差の減少を示します。広い帯域幅 (高値) は価格の標準偏差の増加を示します。[`IgxBollingerBandsOverlayComponent`](datachart_series_types_financial.md) のようなスケーリング係数をサポートするため、それらの値を一致させることができます。
-   [`IgxChaikinVolatilityIndicatorComponent`](datachart_series_types_financial.md) (CHV) は、指定された期間中の高値と安値の差異の指数移動平均の変化割合を表示することによって、証券の乱高下を反映する財務指標です。
-   [`IgxChaikinOscillatorIndicatorComponent`](datachart_series_types_financial.md) は、蓄積/分配インジケーターでトレンドを識別するために使用される (COI) です。チャイキン オシレーターは、蓄積/分配インジケーターの 3 日間の指数移動平均（EMA）から蓄積/分配インジケーターの 10 日間の EMA を引いたものです。
-   [`IgxCommodityChannelIndexIndicatorComponent`](datachart_series_types_financial.md) (CCI) は、証券で周期傾向を識別するために使用される財務指標です。インジケーターは、識別できる周期的な証券価格の変更に対する推測に基づきます。定数と平均絶対偏差の積によって、以前の代表価格 (TP) 期間で指定した期間の代表価格 (SMATP) の単純移動平均 (SMA) の差分商によって計算されます。
-   [`IgxDetrendedPriceOscillatorIndicatorComponent`](datachart_series_types_financial.md) (DPO) は、短期間のトレンドを識別するために、長期間の株価トレンドを制御するために設計された財務指標です。変位移動平均に基づきますが、モメンタム オシレーターではありません。
-   [`IgxEaseOfMovementIndicatorComponent`](datachart_series_types_financial.md) (EOM) は、証券の価格を変更するために必要な出来高を識別するために使用される財務指標です。通常移動平均で平滑化されます。
-   [`IgxFastStochasticOscillatorIndicatorComponent`](datachart_series_types_financial.md) (FSO) は、一定期間の高/低範囲に関連する終値を表示します。確率オシレーターには、ファスト、スロー、フルの 3 つのタイプがあります。このインジケーターはモメンタム インジケーターです。現在の終値を高値/安値の範囲に対して 0 ～ 100 のスケールを使用して関係を示します。これは、株価は高騰市況では 100 に近づき、 下降市場で 0 に近づくという前提に基づきます。このインジケーターは、買う拡散または売る拡散を識別するために使用されます。
-   [`IgxForceIndexIndicatorComponent`](datachart_series_types_financial.md) (FII) は、金融アナリストが株のトレンドがプラスかマイナスかを判断するために使用する価格と数量の変動要因です。勢力指数は、今日の終値から昨日の終値を引いて、その差に当日の出来高を掛けて計算されます。今日の終値が昨日の終値より高い場合、勢力指数は正の数になります。終値が昨日の終値より高い場合、勢力指数は正の数になります。
-   [`IgxFullStochasticOscillatorIndicatorComponent`](datachart_series_types_financial.md) (FSO) は、一定期間の高/低範囲に関連する終値を表示します。このインジケーターは [`IgxSlowStochasticOscillatorIndicatorComponent`](datachart_series_types_financial.md) に似ていますが、期間のカスタマイズがあります。
-   [`IgxMarketFacilitationIndexIndicatorComponent`](datachart_series_types_financial.md) (MFI) は、効率的に計測するために分析で株価と出来高を組み合わせます。計算は、安値と高値の差を出来高で割ります。
-   [`IgxMassIndexIndicatorComponent`](datachart_series_types_financial.md) (MII) は、トレンド反転を検出するために使用される財務指標です。価格範囲が大きくなった時に反落が起こるという前提に基づきます。計算は前のトレーディング範囲 (高値マイナス低値) を比較します。EMAs はその目的で使用されます。このインジケーターは、動きが大きい場合は増加し、動きが小さい場合は減少します。
-   [`IgxMedianPriceIndicatorComponent`](datachart_series_types_financial.md) (MPI) は、高値と安値の間の中間点を表します。中央値は代表値です。このインジケーターは、中央値のチャートを表示します。
-   [`IgxMarketFacilitationIndexIndicatorComponent`](datachart_series_types_financial.md) (MFI) はモメンタム インジケーターで、相対力指数 (RSI) に似ています。MFI は証券のマネー フローのインおよびアウトの基準として使用され、トレンドの反転を予測するために使用できます。0 から 100 の範囲で、RSI のように変換される MFI。
-   [`IgxMovingAverageConvergenceDivergenceIndicatorComponent`](datachart_series_types_financial.md) (MACD) は、ファイナンシャル サービスで広く使用される指標の１ つです。株価の強さの変化、方向、勢い、トレンドの長さの識別に使用されます。MACD は、終値の 2 つの指数移動平均間の差を取ることにより計算されます。違いはチャートで差異の移動平均と共に表されます。
-   [`IgxNegativeVolumeIndexIndicatorComponent`](datachart_series_types_financial.md) (NVI) は、[`IgxPositiveVolumeIndexIndicatorComponent`](datachart_series_types_financial.md)とよく併用されます。このインジケーターは上げ相場を識別するために使用できます。この 2 つのインジケーターは、取引が少なく情報が少ない場合のスマートマネーの取引、または楽観的な売買が多い日の取引に基づいて計算されます。
-   この 2 つのインジケーターは、取引が少なく情報が少ない場合のスマートマネーの取引、または楽観的な売買が多い日の取引に基づいて計算されます。日のボリュームの合計は、今日の価格が昨日の価格より高いまたは安いかどうかに基づいて正の数または負の数に設定されます。より高い終値は正の値になり、より安い終値は負の値になります。この値は現在の合計値に計算されます。
-   [`IgxPercentagePriceOscillatorIndicatorComponent`](datachart_series_types_financial.md) (PPO) は、2 つの移動平均の差を表します。差異は、より大きな移動平均のパーセンテージとして表されます。エンドユーザーは分析期間を選択します。
-   [`IgxPercentageVolumeOscillatorIndicatorComponent`](datachart_series_types_financial.md) (PVO) は、長期および短期で平滑化された出来高のパーセンテージ差異です。インジケーターは 0 の周りをホバーします。ユーザーは、さまざまな期間値を選択して分析できます。このインジケーターは、グラフィックスが表示される際に出来高のパターンを検出するのに便利です。増加する PVO は、ボリューム レベルの増加を示します。減らす PVO はボリューム レベルの減少を示します。
-   [`IgxPositiveVolumeIndexIndicatorComponent`](datachart_series_types_financial.md) (PVI) は、Negative Volume Index と併用され、上げ相場を識別するために使用できます。この 2 つのインジケーターは、取引が少なく情報が少ない場合のスマートマネーの取引、または楽観的な売買が多い日の取引に基づいて計算されます。
-   [`IgxPriceVolumeTrendIndicatorComponent`](datachart_series_types_financial.md) (PVT) は、日々の出来高の部分を追加または減算することによってマネーフローの評価に使用されるインジケーターに基づいたモメンタムです。この加算値または減算値は、前日の終値と比較した当日の価格の上昇または下降の量によって異なります。このインジケーターは、差が取引シグナルとなる主にトレンドとスポットの確認に使用されます。
-   [`IgxPriceVolumeTrendIndicatorComponent`](datachart_series_types_financial.md) (PVT) は、日々の出来高の部分を追加または減算することによってマネーフローの評価に使用されるインジケーターに基づいたモメンタムです。この加算値または減算値は、前日の終値と比較した当日の価格の上昇または下降の量によって異なります。このインジケーターは、差が取引シグナルとなる主にトレンドとスポットの確認に使用されます。
-   [`IgxRelativeStrengthIndexIndicatorComponent`](datachart_series_types_financial.md) (RSI) は、指定された期間の終値で計算される市場の強さ/弱さの一般的に使用される尺度です。上げ相場の期間は価格が高まり、下げ相場の期間は価格が低くなることに基づいて計算されます。RSIは、より低い終値に対するより高い終値の比率です。範囲は 0 から 100 です。
-   [`IgxSlowStochasticOscillatorIndicatorComponent`](datachart_series_types_financial.md) (SSO) は、一定期間の高/低範囲に関連する終値を表示します。このインジケーターは買いまたは売りのダイバージェンスを識別するために使用され、単純移動平均 (SMA) に 3 日間使用します。
-   [`IgxStandardDeviationIndicatorComponent`](datachart_series_types_financial.md) (SDI) は、株価または乱高下の統計的変動を測定します。個々の証券の終値と平均の終値との差は分散と呼ばれます。分散が大きくなると標準偏差が高くなるため、乱高下になります。分散が小さくなるほど (各終値と平均値の差異)、標準偏差は小さくなり、値の乱高下は小さくなります。
-   [`IgxStochRSIIndicatorComponent`](datachart_series_types_financial.md) (SRSI) は、指定された期間内で証券が過剰買いまたは過剰売りされた時に測定する財務指標です。値の範囲は 0 から 1 です。この指標は Stochastic Oscillator の数式を RelativeStrengthIndexIndicator(RSI) データに適用することによって計算されます。
-   TRIXIndicator (TRIX) は、証券の過剰買いまたは過剰売りを識別するために使用されるモメンタムの方法です。その他のオシレーターのように、TRIX スコアは 0 ぐらいです。正の値は証券の過剰買いを示し、負の値は過剰売りを示します。TRIX は、指定した時間期間の間に価格の 3 重の指数スムージング移動平均を使用して計算されます。単一線は、証券の価格が今後どのようになるかを示すために頻繁に使用されます。
-   [`IgxTypicalPriceIndicatorComponent`](datachart_series_types_financial.md) (TPI) は、指定された期間で証券の高値、安値、および終値の算術的な平均を表す一般的な財務指標 (ピボット ポイント) です。
-   [`IgxUltimateOscillatorIndicatorComponent`](datachart_series_types_financial.md) (UOI) は、単一期間に基づく他のインジケーターに関連する乱高下およびノイズを削減するために、3 つの異なる期間の重み付けされた平均を使用する財務指標です。これは範囲限界インジケーターのため、スコアは 0 ~ 100 の間です。
-   [`IgxWeightedCloseIndicatorComponent`](datachart_series_types_financial.md) (WCI) は、その日の高値、安値、終値の平均を表す [`IgxTypicalPriceIndicatorComponent`](datachart_series_types_financial.md) に似ている財務指標です。ただし、このインジケーターは終値をより強調し、単純平均を計算する際に 2 回含まれます。
-   [`IgxWilliamsPercentRIndicatorComponent`](datachart_series_types_financial.md) (WPRI) は、ストキャスティクス オシレーターに類似しています。ただし、スケールは 0 ~ -100 の範囲です。過剰買いセキュリティおよび過剰売りセキュリティを識別する場合に便利です。このインジケーターは、期間の最高値と現在の終値の差異と期間の最高値から最安値を減算した結果を除算して計算されます。

### 軸の要件

[`IgxDataChart`](datachart_series_types_financial.md) コントロールは、さまざまなタイプの軸を提供しますが、すべてのファイナンシャル シリーズは `Y-Axis` として [`IgxNumericYAxisComponent`](datachart_series_types_financial.md)、`X-Axis` として [`IgxCategoryXAxisComponent`](datachart_series_types_financial.md)、[`IgxOrdinalTimeXAxisComponent`](datachart_series_types_financial.md)、または [`IgxTimeXAxisComponent`](datachart_series_types_financial.md) のみ使用できます。

### データの要件

以下は、ファイナンシャル シリーズ、インジケーター、オーバーレイのデータ要件です。

-   データソースはデータ項目の配列またはリストである必要があります。
-   データソースは、少なくともデータ項目を 1 つ含む必要があり、含まない場合はチャートでファイナンシャル シリーズを描画しません。
-   すべてのデータ項目は、ファイナンシャル軸 ([`IgxCategoryXAxisComponent`](datachart_series_types_financial.md)) の `Label` プロパティにマッピングされるべき少なくとも 1 つのデータ列 (文字列または日時) を含む必要があります。
-   すべてのデータ項目は、ファイナンシャル シリーズのプロパティを使用してマッピングされる 5 つの数値データ列を含む必要があります。`OpenMemberPath`、`HighMemberPath`、`LowMemberPath`、`CloseMemberPath`、`VolumeMemberPath`。

上記データ要件を満たすデータソースとして [SampleFinancialData](datachart_data_sources_financial.md) を使用できます。

```ts
this.state = { dataSource: SampleFinancialData.create() }
```

### モジュールの要件

ファイナンシャル シリーズには以下のモジュールが必要です。

```ts
// axis' modules:
import { IgxNumericYAxis } from "igniteui-angular-charts/ES5/igx-numeric-y-axis";
import { IgxCategoryXAxis } from "igniteui-angular-charts/ES5/igx-category-x-axis";
// series' modules:
import { IgxFinancialPriceSeries } from "igniteui-angular-charts/ES5/igx-financial-price-series";
import { IgxBollingerBandsOverlay } from "igniteui-angular-charts/ES5/igx-bollinger-bands-overlay";
import { IgxMedianPriceIndicator } from "igniteui-angular-charts/ES5/igx-median-price-indicator";
// data chart's modules:
import { IgxDataChartModule } from "igniteui-angular-charts/ES5/igx-data-chart-module";
import { IgxDataChartCoreModule } from "igniteui-angular-charts/ES5/igx-data-chart-core-module";

// in app.module.ts file
@NgModule({
    imports: [
        ...
        IgxDataChartModule,
        IgxDataChartCoreModule,
        ...
    ]
})
```

### コード例

このコードは [`IgxFinancialPriceSeriesComponent`](datachart_series_types_financial.md)、[`IgxBollingerBandsOverlayComponent`](datachart_series_types_financial.md)、[`IgxMedianPriceIndicatorComponent`](datachart_series_types_financial.md) でデータ チャートのインスタンスを作成する方法を示します。これらのシリーズは同じ  X-Axis と Y-Axis を使用しますが複数軸を使用して異なるシリーズに割り当てることができます。詳細については、[軸共有と複数軸](datachart_axis_sharing.md) トピックを参照してください。

```html
 <igx-data-chart
    [dataSource]="dataSource"
    width="700px"
    height="500px">
    <igx-category-x-axis name="xAxis" label="Date"></igx-category-x-axis>
    <igx-numeric-y-axis  name="yAxis"></igx-numeric-y-axis>
    <igx-bollinger-bands-overlay
        name="series1"
        xAxisName="xAxis"
        yAxisName="yAxis"
        lowMemberPath="Low"
        highMemberPath="High"
        openMemberPath="Open"
        closeMemberPath="Close"
        volumeMemberPath="Volume">
    </igx-bollinger-bands-overlay>

    <igx-financial-price-series
        name="series2"
        xAxisName="xAxis"
        yAxisName="yAxis"
        displayType="Candlestick"
        lowMemberPath="Low"
        highMemberPath="High"
        openMemberPath="Open"
        closeMemberPath="Close"
        volumeMemberPath="Volume">
    </igx-financial-price-series>

    <igx-median-price-indicator
        name="series3"
        xAxisName="xAxis"
        yAxisName="yAxis"
        displayType="Line"
        lowMemberPath="Low"
        highMemberPath="High"
        openMemberPath="Open"
        closeMemberPath="Close"
        volumeMemberPath="Volume">
    </igx-median-price-indicator>
 </igx-data-chart>
```

### その他のリソース

-   [軸のタイプ](datachart_axis_types.md)
-   [軸共有](datachart_axis_sharing.md)
-   [チャート凡例](datachart_chart_legends.md)
-   [シリーズの注釈](datachart_series_annotations.md)
-   [シリーズの強調表示](datachart_series_highlighting.md)
-   [シリーズ マーカー](datachart_series_markers.md)
-   [シリーズのツールチップ](datachart_series_tooltips.md)
-   [シリーズ トレンドライン](datachart_series_trendlines.md)
-   [シリーズ タイプ](datachart_series_types.md)
