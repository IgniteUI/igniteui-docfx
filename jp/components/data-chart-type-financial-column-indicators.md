---
title: Angular データ チャート | データ可視化ツール | 財務指標 (縦棒) | インフラジスティックス
_description: インフラジスティックスの Angular チャート コントロールを使用して財務指標 (縦棒) を表示します。Ignite UI for Angular グラフ タイプについて説明します。
_keywords: Angular charts, data chart, financial column indicators, Ignite UI for Angular, Infragistics, Angular チャート, データ チャート, 縦棒型の財務指標, インフラジスティックス
mentionedTypes: ['XamDataChart', 'FinancialPriceSeries']
_language: ja
---

# Angular 財務指標 (縦棒)

財務指標は、株価の動きの計測やトレンドを確認するためにトレーダーによって使用されます。これらのインジケーターは、同じ Y 軸を共有しないため [`IgxFinancialPriceSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxfinancialpriceseriescomponent.html) を使用するチャートの上または下に表示されます。ただし、チャート コントロールは同じプロット領域で価格シリーズとインジケーターの描画をサポートします。複数軸の使用や軸を共有することもできます。詳細については、[軸共有と複数軸](data-chart-axis-sharing.md)のトピックを参照してください。

## Angular 財務指標 (縦棒) の例

<div class="sample-container loading" style="height: 400px">
    <iframe id="data-chart-type-financial-column-indicators-iframe" src='{environment:dvDemosBaseUrl}/charts/data-chart-type-financial-column-indicators' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);" alt="Angular 財務指標 (縦棒) の例"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="data-chart-type-financial-column-indicators-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">StackBlitz で表示
    </button>


</div>

<div class="divider--half"></div>

すべての財務指標に [`displayType`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxfinancialpriceseriescomponent.html#displaytype) プロパティがあり、インジケーターをライン、柱状、エリアを使用して描画するかどうかを決定します。上記のサンプルは、縦棒の可視化を示します。

以下に、可能なすべての種類の財務指標をリストします。

-   [`IgxAbsoluteVolumeOscillatorIndicatorComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxabsolutevolumeoscillatorindicatorcomponent.html) (AVO) は、2 つの平均出来高測定の差異を使用して計算されます。パーセンテージ ボリューム オシレーターに似ていますが、範囲が -100% から +100% まであります。インジケーターは、ボリューム トレンドの増加または減少を識別するために使用します。ユーザーは分析の期間を選択できます。
-   [`IgxAccumulationDistributionIndicatorComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxaccumulationdistributionindicatorcomponent.html) (ADI) は、一般的に出来高に関連する指標によく使用されます。投資家が売買をするかどうかの差異を調べることによって、株式、証券、またはインデックスの時間上の需要と供給を評価します。
-   [`IgxAverageDirectionalIndexIndicatorComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxaveragedirectionalindexindicatorcomponent.html) |(ADX) はトレンドの強さを計測します。このインジケーターは、値動きの強さと方向を決定するために通常使用されます。
-   [`IgxAverageTrueRangeIndicatorComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxaveragetruerangeindicatorcomponent.html) | は、一定期間内に証券の価格移動の程度つまり乱高下を測定する財務指標です。このインジケーターは価格方向や期間ではなく、ただ価格移動の程度、つまり乱高下を測定しています。ATR (Average True Range) は、さまざまなベース (毎日、毎週、毎月など) で 14 日の期間を使用して頻繁に計算されています。Average True Range というのは最近 14 期間の TR 値の指数移動平均のことです。使用される実際の期間は、ユーザー設定によって変わります。
-   [`IgxBollingerBandWidthIndicatorComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxbollingerbandwidthindicatorcomponent.html) |(BBW) は [`IgxBollingerBandsOverlayComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxbollingerbandsoverlaycomponent.html) と一緒に使用されます。このインジケーターは、指定したポイントでボリンジャー バンドの幅を表します。変化が多い場合、バンドの幅がより大きくなります。狭い帯域幅 (低値) は標準偏差の減少を示します。広い帯域幅 (高値) は価格の標準偏差の増加を示します。[`IgxBollingerBandsOverlayComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxbollingerbandsoverlaycomponent.html) のようなスケーリング係数をサポートするため、それらの値を一致させることができます。
-   [`IgxChaikinVolatilityIndicatorComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxchaikinvolatilityindicatorcomponent.html) (CHV) は、指定された期間中の高値と安値の差異の指数移動平均の変化割合を表示することによって、証券の乱高下を反映する財務指標です。
-   [`IgxChaikinOscillatorIndicatorComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxchaikinoscillatorindicatorcomponent.html) は、蓄積/分配インジケーターでトレンドを識別するために使用される (COI) です。チャイキン オシレーターは、蓄積/分配インジケーターの 3 日間の指数移動平均（EMA）から蓄積/分配インジケーターの 10 日間の EMA を引いたものです。
-   [`IgxCommodityChannelIndexIndicatorComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcommoditychannelindexindicatorcomponent.html) (CCI) は、証券で周期傾向を識別するために使用される財務指標です。インジケーターは、識別できる周期的な証券価格の変更に対する推測に基づきます。定数と平均絶対偏差の積によって、以前の代表価格 (TP) 期間で指定した期間の代表価格 (SMATP) の単純移動平均 (SMA) の差分商によって計算されます。
-   [`IgxDetrendedPriceOscillatorIndicatorComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdetrendedpriceoscillatorindicatorcomponent.html) (DPO) は、短期間のトレンドを識別するために、長期間の株価トレンドを制御するために設計された財務指標です。変位移動平均に基づきますが、モメンタム オシレーターではありません。
-   [`IgxEaseOfMovementIndicatorComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxeaseofmovementindicatorcomponent.html) (EOM) は、証券の価格を変更するために必要な出来高を識別するために使用される財務指標です。通常移動平均で平滑化されます。
-   [`IgxFastStochasticOscillatorIndicatorComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxfaststochasticoscillatorindicatorcomponent.html)(FSO) は、一定期間の高/低範囲に関連する終値を表示します。確率オシレーターには、ファスト、スロー、フルの 3 つのタイプがあります。このインジケーターはモメンタム インジケーターです。現在の終値を高値/安値の範囲に対して 0 ～ 100 のスケールを使用して関係を示します。これは、株価は高騰市況では 100 に近づき、 下降市場で 0 に近づくという前提に基づきます。このインジケーターは、買う拡散または売る拡散を識別するために使用されます。
-   [`IgxForceIndexIndicatorComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxforceindexindicatorcomponent.html) (FII) は、株の動向が上昇または下降のいずれかであるかを判断するために財務アナリストが使用する値と出来高のオシレーターです。勢力指数は、今日の終値から前日の終値を引いて、その差に当日の出来高を掛けて計算されます。今日の終値が前日の終値より高い場合、勢力指数は正の数になります。終値が前日の終値より低い場合、勢力指数は負の数になります。
-   [`IgxFullStochasticOscillatorIndicatorComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxfullstochasticoscillatorindicatorcomponent.html) (FSO) は、一定期間の高/低範囲に関連する終値を表示します。インジケーターは [`IgxSlowStochasticOscillatorIndicatorComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxslowstochasticoscillatorindicatorcomponent.html) に似ていますが、期間のカスタマイズができます。
-   [`IgxMarketFacilitationIndexIndicatorComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxmarketfacilitationindexindicatorcomponent.html) (MFI) は、効率的に計測するために分析で株価と出来高を組み合わせます。計算は、安値と高値の差を出来高で割ります。
-   [`IgxMassIndexIndicatorComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxmassindexindicatorcomponent.html) (MII) は、トレンド反転を検出するために使用される財務指標です。価格範囲が大きくなった時に反落が起こるという前提に基づきます。計算は前のトレーディング範囲 (高値マイナス低値) を比較します。EMAs はその目的で使用されます。このインジケーターは、動きが大きい場合は増加し、動きが小さい場合は減少します。
-   [`IgxMedianPriceIndicatorComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxmedianpriceindicatorcomponent.html) (MPI) は、高値と安値の間の中間点を表します。中央値は代表値です。このインジケーターは、中央値のチャートを表示します。
-   [`IgxMarketFacilitationIndexIndicatorComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxmarketfacilitationindexindicatorcomponent.html) (MFI) はモメンタム インジケーターで、相対力指数 (RSI) に似ています。MFI は証券のマネー フローのインおよびアウトの基準として使用され、トレンドの反転を予測するために使用できます。0 から 100 の範囲で、RSI のように変換される MFI。
-   [`IgxMovingAverageConvergenceDivergenceIndicatorComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxmovingaverageconvergencedivergenceindicatorcomponent.html) (MACD) は、ファイナンシャル サービスで広く使用される指標の１ つです。株価の強さの変化、方向、勢い、トレンドの長さの識別に使用されます。MACD は、終値の 2 つの指数移動平均間の差を取ることにより計算されます。違いはチャートで差異の移動平均と共に表されます。
-   [`IgxNegativeVolumeIndexIndicatorComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxnegativevolumeindexindicatorcomponent.html) (NVI) は、[`IgxPositiveVolumeIndexIndicatorComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxpositivevolumeindexindicatorcomponent.html)とよく併用されます。このインジケーターは上げ相場を識別するために使用できます。この 2 つのインジケーターは、取引が少なく情報が少ない場合のスマートマネーの取引、または楽観的な売買が多い日の取引に基づいて計算されます。
-   [`IgxOnBalanceVolumeIndicatorComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxonbalancevolumeindicatorcomponent.html) (OBV) は、在庫の現在の販売数量の合計を計算し、この数量が特定の在庫の流入（購入）または流出（販売）のどちらであるかを表示します。日のボリュームの合計は、今日の価格が前日の価格より高いまたは安いかどうかに基づいて正の数または負の数に設定されます。より高い終値は正の値になり、より安い終値は負の値になります。この値は現在の合計値に計算されます。
-   [`IgxPercentagePriceOscillatorIndicatorComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxpercentagepriceoscillatorindicatorcomponent.html) (PPO) は、2 つの移動平均の差を表します。差異は、より大きな移動平均のパーセンテージとして表されます。エンドユーザーは分析期間を選択します。
-   [`IgxPercentageVolumeOscillatorIndicatorComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxpercentagevolumeoscillatorindicatorcomponent.html) (PVO) は、長期および短期で平滑化された出来高のパーセンテージ差異です。インジケーターは 0 の周りをホバーします。ユーザーは、さまざまな期間値を選択して分析できます。このインジケーターは、グラフィックスが表示される際に出来高のパターンを検出するのに便利です。増加する PVO は、ボリューム レベルの増加を示します。減らす PVO はボリューム レベルの減少を示します。
-   [`IgxPositiveVolumeIndexIndicatorComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxpositivevolumeindexindicatorcomponent.html) (PVI) は、Negative Volume Index と併用され、上げ相場を識別するために使用できます。この 2 つのインジケーターは、取引が少なく情報が少ない場合のスマートマネーの取引、または楽観的な売買が多い日の取引に基づいて計算されます。
-   [`IgxPriceVolumeTrendIndicatorComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxpricevolumetrendindicatorcomponent.html) (PVT) は、日々の出来高の部分を追加または減算することによってマネーフローの評価に使用されるインジケーターに基づいたモメンタムです。追加または減算された値は、前日の終値と比較した現在の日の価格の上昇または降下の量に基づきます。このインジケーターは、差が取引シグナルとなる主にトレンドとスポットの確認に使用されます。
-   [`IgxPriceVolumeTrendIndicatorComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxpricevolumetrendindicatorcomponent.html) (PVT) は、日々の出来高の部分を追加または減算することによってマネーフローの評価に使用されるインジケーターに基づいたモメンタムです。追加または減算された値は、前日の終値と比較した現在の日の価格の上昇または降下の量に基づきます。このインジケーターは、差が取引シグナルとなる主にトレンドとスポットの確認に使用されます。
-   [`IgxRelativeStrengthIndexIndicatorComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxrelativestrengthindexindicatorcomponent.html) (RSI) は、指定された期間中の終値で計算された市場の強弱測定で一般的に使用されます。上げ相場の期間は価格が高まり、下げ相場の期間は価格が低くなることに基づいて計算されます。RSIは、より低い終値に対するより高い終値の比率です。範囲は 0 から 100 です。
-   [`IgxSlowStochasticOscillatorIndicatorComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxslowstochasticoscillatorindicatorcomponent.html) (SSO) は、一定期間の高/低範囲に関連する終値を表示します。このインジケーターは買いまたは売りのダイバージェンスを識別するために使用され、単純移動平均 (SMA) に 3 日間使用します。
-   [`IgxStandardDeviationIndicatorComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxstandarddeviationindicatorcomponent.html) (SDI) は、株価または乱高下の統計的変動を測定します。各セキュリティの終値と平均セキュリティ終値の違いは、分散と呼ばれます。分散が大きくなると標準偏差が高くなるため、乱高下になります。分散が小さくなるほど (各終値と平均値の差異)、標準偏差は小さくなり、値の乱高下は小さくなります。
-   [`IgxStochRSIIndicatorComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxstochrsiindicatorcomponent.html) (SRSI) は、指定された期間内で証券が過剰買いまたは過剰売りされた時に測定する財務指標です。値の範囲は 0 から 1 です。インジケーターは、ストキャスティクス オシレーター数式を [`IgxRelativeStrengthIndexIndicatorComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxrelativestrengthindexindicatorcomponent.html) (RSI) データに適用して計算されます。
-   [`IgxTRIXIndicatorComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxtrixindicatorcomponent.html) (TRIX) は、証券の過剰買いまたは過剰売りを識別するために使用されるモメンタムの方法です。その他のオシレーターのように、TRIX スコアは 0 付近です。正の値は証券の過剰買いを示し、負の値は過剰売りを示します。TRIX は、指定した時間期間の間に価格の 3 重の指数スムージング移動平均を使用して計算されます。単一線は、証券の価格が今後どのようになるかを示すために頻繁に使用されます。
-   [`IgxTypicalPriceIndicatorComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxtypicalpriceindicatorcomponent.html) (TPI) は、指定された期間で証券の高値、安値、および終値の算術的な平均を表す一般的な財務指標 (ピボット ポイント) です。
-   [`IgxUltimateOscillatorIndicatorComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxultimateoscillatorindicatorcomponent.html) (UOI) は、単一期間に基づく他のインジケーターに関連する乱高下およびノイズを削減するために、3 つの異なる期間の重み付けされた平均を使用する財務指標です。これは範囲限界インジケーターのため、スコアは 0 ~ 100 の間です。
-   [`IgxWeightedCloseIndicatorComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxweightedcloseindicatorcomponent.html) (WCI) は、その日の高値、安値、終値の平均を表す [`IgxTypicalPriceIndicatorComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxtypicalpriceindicatorcomponent.html) に似ている財務指標です。ただし、このインジケーターは終値をより強調し、単純平均を計算する際に 2 回含まれます。
-   [`IgxWilliamsPercentRIndicatorComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxwilliamspercentrindicatorcomponent.html) (WPRI) は、ストキャスティクス オシレーターに類似しています。ただし、スケールは 0 ~ -100 の範囲です。過剰買いセキュリティおよび過剰売りセキュリティを識別する場合に便利です。このインジケーターは、期間の最高値と現在の終値の差異と期間の最高値から最安値を減算した結果を除算して計算されます。

## 軸の要件

Angular データ チャート コンポーネントはさまざまなタイプの軸を提供しますが、すべての財務シリーズでは、[`IgxNumericYAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxnumericyaxiscomponent.html) を Y 軸として、[`IgxCategoryXAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategoryxaxiscomponent.html)、[`IgxOrdinalTimeXAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxordinaltimexaxiscomponent.html)、または [`IgxTimeXAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxtimexaxiscomponent.html) を X 軸としてのみ使用できます。

## データの要件

以下は、ファイナンシャル シリーズ、インジケーター、オーバーレイのデータ要件です。

-   データソースはデータ項目の配列またはリストである必要があります。
-   データソースは、少なくともデータ項目を 1 つ含む必要があり、含まない場合はデータ チャートでファイナンシャル シリーズを描画しません。
-   すべてのデータ項目には、財務軸の [`IgxLabelComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxlabelcomponent.html) プロパティ ([`IgxCategoryXAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategoryxaxiscomponent.html) など) にマッピングされるデータ列 (文字列または日時) が少なくとも1つ含まれている必要があります。
-   すべてのデータ項目は、ファイナンシャル シリーズのプロパティ使用してマップされる 5 つの数値データ列を含む必要があります。 [`openMemberPath`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxfinancialseriescomponent.html#openmemberpath)、[`highMemberPath`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxfinancialseriescomponent.html#highmemberpath), [`lowMemberPath`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxfinancialseriescomponent.html#lowmemberpath)、[`closeMemberPath`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxfinancialseriescomponent.html#closememberpath)、[`volumeMemberPath`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxfinancialseriescomponent.html#volumememberpath)。

上記データ要件を満たすデータソースとして [SampleFinancialData](data-chart-data-sources-financial.md) を使用できます。

```ts
public dataSource: any[] = SampleFinancialData.create();
```

## モジュールの要件

ファイナンシャル シリーズを作成するには、以下のモジュールが必要です。

```ts
// axis' modules:
import { IgxNumericYAxis } from 'igniteui-angular-charts';
import { IgxCategoryXAxis } from 'igniteui-angular-charts';
// series' modules:
import { IgxFinancialPriceSeries } from 'igniteui-angular-charts';
import { IgxMedianPriceIndicator } from 'igniteui-angular-charts';
// data chart's modules:

import { IgxDataChartCoreModule } from 'igniteui-angular-charts';
import { IgxDataChartCategoryModule } from 'igniteui-angular-charts';
import { IgxFinancialPriceSeriesModule } from 'igniteui-angular-charts';

// in app.module.ts file
@NgModule({
    imports: [
        // ...
        IgxDataChartCoreModule,
        IgxDataChartCategoryModule,
        IgxFinancialPriceSeriesModule,
        // ...
    ]
})
```

## コード例

[`IgxMedianPriceIndicatorComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxmedianpriceindicatorcomponent.html) でデータ チャートのインスタンスを作成する方法を示します。これらのシリーズは同じ X 軸と Y 軸を使用しますが複数軸を使用して異なるシリーズに割り当てることができます。詳細については、[軸共有と複数軸](data-chart-axis-sharing.md)トピックを参照してください。

```html
 <igx-data-chart
    [dataSource]="dataSource"
    width="700px"
    height="500px">
    <igx-category-x-axis name="xAxis" label="Date"></igx-category-x-axis>
    <igx-numeric-y-axis  name="yAxis"></igx-numeric-y-axis>

    <igx-median-price-indicator
        name="series1"
        xAxisName="xAxis"
        yAxisName="yAxis"
        displayType="Column"
        lowMemberPath="Low"
        highMemberPath="High"
        openMemberPath="Open"
        closeMemberPath="Close"
        volumeMemberPath="Volume">
    </igx-median-price-indicator>
 </igx-data-chart>
```

### その他のリソース

-   [軸のタイプ](data-chart-axis-types.md)
-   [軸の共有](data-chart-axis-sharing.md)
-   [チャート凡例](data-chart-legends.md)
-   [シリーズの注釈](data-chart-series-annotations.md)
-   [シリーズの強調表示](data-chart-series-highlighting.md)
-   [シリーズ マーカー](data-chart-series-markers.md)
-   [シリーズのツールチップ](data-chart-series-tooltips.md)
-   [シリーズ トレンドライン](data-chart-series-trendlines.md)
-   [シリーズ タイプ](data-chart-series-types.md)
