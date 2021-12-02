---
title: Angular 新機能 | Ignite UI for Angular | インフラジスティックス
_description: Ignite UI for Angular の新機能について学んでください。
_keywords: Changelog, What's New, Ignite UI for Angular, Infragistics, 変更ログ, 新機能, インフラジスティックス
_language: ja
mentionedTypes: ["SeriesViewer", "XYChart", "DomainChart", "XamGeographicMap"]
---

# Ignite UI for Angular 変更ログ (データ可視化)

Ignite UI for Angular の各バージョンのすべての重要な変更は、このページに記載されています。

<!-- Angular -->

> [!NOTE]
> Angular LOB コンポーネントに固有の変更については、[Ignite UI Angular 変更](https://github.com/igniteui/igniteui-angular/blob/master/changelog.md)を参照してください。

<!-- end: Angular -->

<div class="divider--half"></div>

## **Angular 11.3.0**

<div class="divider--half"></div>

<div class="divider--half"></div>

<div class="divider--half"></div>

<div class="divider--half"></div>

### チャートとマップ

このリリースでは、地理マップとすべてのチャート コンポーネントのビジュアル デザインと構成オプションにいくつかの改善と簡素化が導入されています。

-   [`IgxFinancialChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxfinancialchartcomponent.html) と [`IgxCategoryChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategorychartcomponent.html) の [`yAxisLabelLocation`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxxychartcomponent.html#yaxislabellocation) プロパティのタイプ **AxisLabelLocation** を **YAxisLabelLocation** に変更しました。
-   [`IgxFinancialChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxfinancialchartcomponent.html) の [`xAxisLabelLocation`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxxychartcomponent.html#xaxislabellocation) プロパティのタイプ **AxisLabelLocation** を **XAxisLabelLocation** に変更しました。
-   [`IgxCategoryChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategorychartcomponent.html) に [`xAxisLabelLocation`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxxychartcomponent.html#xaxislabellocation) プロパティを追加しました。
-   Legend で [`IgxGeographicMapComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographicmapcomponent.html) の地理的シリーズを表すためのサポートを追加しました。
-   [`IgxFinancialChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxfinancialchartcomponent.html) と [`IgxCategoryChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategorychartcomponent.html) にデフォルトで十字線を追加しました。
-   [`IgxFinancialChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxfinancialchartcomponent.html)と [`IgxCategoryChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategorychartcomponent.html) にデフォルトで十字線注釈を追加しました。
-   デフォルトで [`IgxFinancialChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxfinancialchartcomponent.html) に最終値の注釈を追加しました。
-   カテゴリ チャートとファイナンシャル チャートに新しいプロパティを追加しました:
    -   十字線をカスタマイズするための [`crosshairsLineThickness`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdomainchartcomponent.html#crosshairslinethickness) およびその他のプロパティ
    -   十字線の注釈をカスタマイズするための [`crosshairsAnnotationXAxisBackground`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdomainchartcomponent.html#crosshairsannotationxaxisbackground) およびその他のプロパティ
    -   最終値の注釈をカスタマイズするための [`finalValueAnnotationsBackground`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdomainchartcomponent.html#finalvalueannotationsbackground) およびその他のプロパティ
    -   塗りつぶしの図形の不透明度の変更を可能にする (エリア チャートなど) [`areaFillOpacity`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdomainchartcomponent.html#areafillopacity)
    -   マーカーの厚さの変更を可能にする [`markerThickness`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdomainchartcomponent.html#markerthickness)
-   カテゴリ チャート、ファイナンシャル チャート、データ チャート、および地理マップに新しいプロパティを追加しました。
    -   同じチャート内の複数のシリーズにどのマーカー タイプを割り当てるを可能にする [`markerAutomaticBehavior`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxseriesviewercomponent.html#markerautomaticbehavior)
    -   凡例で表されるすべてのシリーズのバッジの形状を設定するための [`legendItemBadgeShape`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxseriesviewercomponent.html#legenditembadgeshape)
    -   凡例のすべてのシリーズにバッジの複雑さを設定するための [`legendItemBadgeMode`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxseriesviewercomponent.html#legenditembadgemode)
-   データ チャートと地理マップのシリーズに新しいプロパティを追加しました。
    -   凡例で表される特定のシリーズにバッジの形状を設定するための [`legendItemBadgeShape`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxseriesviewercomponent.html#legenditembadgeshape)
    -   凡例の特定のシリーズにバッジの複雑さを設定するための [`legendItemBadgeMode`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxseriesviewercomponent.html#legenditembadgemode)
-   カテゴリ チャートとシリーズのデフォルトの垂直十字線ストロークを <span style="color:#000000">#000000</span> から <span style="color:#BBBBBB">#BBBBBB</span> に変更しました。
-   同じチャートにプロットされたすべてのシリーズのマーカーの図形を円に変更しました。これは、チャートの [`markerAutomaticBehavior`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxseriesviewercomponent.html#markerautomaticbehavior) プロパティを `SmartIndexed` 列挙値に設定することで元に戻すことができます。
-   チャートの凡例のシリーズの簡略化された図形で、円、線、または四角のみを表示します。これは、チャートの [`legendItemBadgeMode`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxseriesviewercomponent.html#legenditembadgemode) プロパティを `MatchSeries` 列挙値に設定することで元に戻すことができます。
-   すべてのチャートに表示されるシリーズとマーカーのカラー パレットを変更しました。

| 古いのブラシ/アウトライン                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | 新のアウトライン/ブラシ                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <span style="color:#8BDC5C">#8BDC5C</span> <br><span style="color:#8B5BB1">#8B5BB1</span> <br><span style="color:#6DB1FF">#6DB1FF</span> <br><span style="color:#F8A15F">#F8A15F</span> <br><span style="color:#EE5879">#EE5879</span> <br><span style="color:#735656">#735656</span> <br><span style="color:#F7D262">#F7D262</span> <br><span style="color:#8CE7D9">#8CE7D9</span> <br><span style="color:#E051A9">#E051A9</span> <br><span style="color:#A8A8B7">#A8A8B7</span> | <span style="color:#8BDC5C">#8BDC5C</span> <br><span style="color:#8961A9">#8961A9</span> <br><span style="color:#6DB1FF">#6DB1FF</span> <br><span style="color:#82E9D9">#82E9D9</span> <br><span style="color:#EA3C63">#EA3C63</span> <br><span style="color:#735656">#735656</span> <br><span style="color:#F8CE4F">#F8CE4F</span> <br><span style="color:#A8A8B7">#A8A8B7</span> <br><span style="color:#E051A9">#E051A9</span> <br><span style="color:#FF903B">#FF903B</span> <br> |

<div class="divider--half"></div>

## **Angular 11.2.0**

### チャートとマップ

このリリースでは、すべてのチャート コンポーネントに、いくつかの新しく改善されたビジュアル デザインと構成オプションが導入されています。例えば、`DataChart`、[`IgxCategoryChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategorychartcomponent.html)、および [`IgxFinancialChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxfinancialchartcomponent.html)。

-   棒/縦棒/ウォーターフォール シリーズを、角丸ではなく角が四角になるように変更しました。
-   heat min プロパティの 散布高密度シリーズの色を <span style="color:#8a5bb1">#8a5bb1</span> から <span style="color:#000000">#000000</span> に変更しました。
-   heat max プロパティの 散布高密度シリーズの色を <span style="color:#ee5879">#ee5879</span> から <span style="color:#ee5879">#ee5879</span> に変更しました。
-   ファイナンシャル/ウォーターフォール シリーズの `NegativeBrush` および `NegativeOutline` プロパティを <span style="color:#C62828">#C62828</span> から <span style="color:#ee5879">#ee5879</span> に変更しました。
-   マーカーの厚さを 1px から 2px に変更しました。
-   [`IgxPointSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxpointseriescomponent.html)、[`IgxBubbleSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxbubbleseriescomponent.html)、[`IgxScatterSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxscatterseriescomponent.html)、[`IgxPolarScatterSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxpolarscatterseriescomponent.html) のマーカーのアウトラインに一致するようにマーカーの塗りつぶしを変更しました。[`markerFillMode`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdomainchartcomponent.html#markerfillmode) プロパティを Normal に設定すると、この変更を元に戻すことができます。
-   [`IgxTimeXAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxtimexaxiscomponent.html) および [`IgxOrdinalTimeXAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxordinaltimexaxiscomponent.html) のラベリングを圧縮しました。
-   新しいマーカー プロパティ:
    -   シリーズ。[`markerFillMode`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdomainchartcomponent.html#markerfillmode) - マーカーがアウトラインに依存するように、`MatchMarkerOutline` に設定できます。
    -   シリーズ。[`markerFillOpacity`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdomainchartcomponent.html#markerfillopacity) - 0〜1 の値に設定できます。
    -   シリーズ。[`markerOutlineMode`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdomainchartcomponent.html#markeroutlinemode) - マーカーのアウトラインが塗りブラシの色に依存するように、`MatchMarkerBrush` に設定できます。
-   新シリーズプロパティ:
    -   シリーズ。[`outlineMode`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdomainchartcomponent.html#outlinemode) - シリーズ アウトラインの表示を切り替えるように設定できます。データ チャートの場合、プロパティはシリーズ上にあることに注意してください。
    -   チャートがデフォルトのズーム レベルにあるときにビューポートに導入されるブリード オーバー領域を定義する新しいチャート プロパティを追加しました。一般的な使用例では、軸と最初/最後のデータ ポイントの間にスペースを提供します。以下にリストされている [`computedPlotAreaMarginMode`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdomainchartcomponent.html#computedplotareamarginmode) は、マーカーが有効になっているときに自動的にマージンを設定することに注意してください。その他は、厚さを表す `Double` を指定するように設計されており、PlotAreaMarginLeft などがチャートの 4 辺すべてにスペースを調整します:
    -   チャート。[`plotAreaMarginLeft`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdomainchartcomponent.html#plotareamarginleft)
    -   チャート。[`plotAreaMarginTop`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdomainchartcomponent.html#plotareamargintop)
    -   チャート。[`plotAreaMarginRight`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdomainchartcomponent.html#plotareamarginright)
    -   チャート。[`plotAreaMarginBottom`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdomainchartcomponent.html#plotareamarginbottom)
    -   チャート。[`computedPlotAreaMarginMode`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdomainchartcomponent.html#computedplotareamarginmode)
-   新しい強調表示プロパティ:
    -   チャート。[`highlightingMode`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxseriesviewercomponent.html#highlightingmode) - ホバーされたシリーズとホバーされていないシリーズをフェードまたは明るくするかを設定します。
    -   チャート。[`highlightingBehavior`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxseriesviewercomponent.html#highlightingbehavior) - 真上または最も近い項目など、マウスの位置に応じてシリーズを強調表示するかどうかを設定します。
    -   以前のリリースでは、強調表示はホバー時にフェードするように制限されていたことに注意してください。
-   積層型、散布図、極座標、ラジアル、図形シリーズに強調表示を追加しました。
-   積層型、散布図、極座標、ラジアル、図形注釈レイヤーを追加しました。
-   積層型シリーズ内の個々の積層フラグメントのデータ ソースをオーバーライドするためのサポートが追加されました。
-   積層型、散布、範囲、極座標、ラジアル、シェイプ シリーズにカスタム スタイルのイベントを追加しました。
-   垂直ズームをシリーズ コンテンツに自動的に同期するサポートが追加されました。
-   表示された最初のラベルに基づいてチャートの水平マージンを自動的に拡張するサポートが追加されました。
-   シリーズとマーカーの再設計されたカラー パレット:

| 古いのブラシ/アウトライン                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | 新のアウトライン/ブラシ                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <span style="color:#7446B9">#7446B9</span> <br><span style="color:#9FB328">#9FB328</span> <br><span style="color:#F96232">#F96232</span> <br><span style="color:#2E9CA6">#2E9CA6</span> <br><span style="color:#DC3F76">#DC3F76</span> <br><span style="color:#FF9800">#FF9800</span> <br><span style="color:#3F51B5">#3F51B5</span> <br><span style="color:#439C47">#439C47</span> <br><span style="color:#795548">#795548</span> <br><span style="color:#9A9A9A">#9A9A9A</span> | <span style="color:#8bdc5c">#8bdc5c</span> <br><span style="color:#8b5bb1">#8b5bb1</span> <br><span style="color:#6db1ff">#6db1ff</span> <br><span style="color:#f8a15f">#f8a15f</span> <br><span style="color:#ee5879">#ee5879</span> <br><span style="color:#735656">#735656</span> <br><span style="color:#f7d262">#f7d262</span> <br><span style="color:#8ce7d9">#8ce7d9</span> <br><span style="color:#e051a9">#e051a9</span> <br><span style="color:#a8a8b7">#a8a8b7</span> <br> |

例:

|                                                                   |                                                                   |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| <img class="responsive-img" src="../images/chartDefaults1.png" /> | <img class="responsive-img" src="../images/chartDefaults2.png" /> |
| <img class="responsive-img" src="../images/chartDefaults3.png" /> | <img class="responsive-img" src="../images/chartDefaults4.png" /> |

### チャート凡例

\*バブル、ドーナツ、および円チャートで使用できる水平方向の [`Orientation`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/orientation.html) プロパティを ItemLegend に追加しました。

-   [`legendHighlightingMode`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxseriesviewercomponent.html#legendhighlightingmode) プロパティを追加 - 凡例項目にカーソルを合わせたときにシリーズの強調表示を有効にします。

### 地理マップ

> [!NOTE]
> これらの機能は CTP です。

-   マップの表示を折り返すためのサポートが追加されました (水平方向に無限にスクロールできます)。
-   座標原点を折り返しながら、一部のマップ シリーズの表示をシフトするためのサポートが追加されました。
-   シェイプ シリーズの強調表示のサポートが追加されました。
-   シェイプ シリーズの一部の注釈レイヤーのサポートが追加されました。

<div class="divider--half"></div>

<div class="divider--half"></div>

<div class="divider--half"></div>

<!-- Angular, React, WebComponents -->

## **Angular 8.2.12**

-   import ステートメントの変更

Import ステートメントは、API クラスと列挙型へのフル パスではなくパッケージ名のみを使用するように簡素化されました。

> [!NOTE]
> これらの重大な変更は、これらのパッケージとコンポーネントでのみ導入されました:

| 影響されるパッケージ                                                                                                                     | 影響されるコンポーネント                                                                         |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| <a href="https://www.npmjs.com/package/igniteui-angular-excel/v/8.2.12" target="_blank">igniteui-angular-excel</a>             | [Excel ライブラリ](excel-library.md)                                                      |
| <a href="https://www.npmjs.com/package/igniteui-angular-spreadsheet/v/8.2.12" target="_blank">igniteui-angular-spreadsheet</a> | [スプレッドシート](spreadsheet-overview.md)                                                  |
| <a href="https://www.npmjs.com/package/igniteui-angular-maps/v/8.2.12" target="_blank">igniteui-angular-maps</a>               | [マップ](geo-map.md)、[ツリーマップ](charts/types/treemap-chart.md)                            |
| <a href="https://www.npmjs.com/package/igniteui-angular-gauges/v/8.2.12" target="_blank">igniteui-angular-gauges</a>           | [ブレット グラフ](bullet-graph.md)、[リニア ゲージ](linear-gauge.md)、[ラジアル ゲージ](radial-gauge.md)   |
| <a href="https://www.npmjs.com/package/igniteui-angular-charts/v/8.2.12" target="_blank">igniteui-angular-charts</a>           | カテゴリ チャート、データ チャート、ドーナツ チャート、ファイナンシャル チャート、円チャート、[ズーム スライダー](zoomslider-overview.md) |
| <a href="https://www.npmjs.com/package/igniteui-angular-core/v/8.2.12" target="_blank">igniteui-angular-core</a>               | すべてのクラスと列挙型                                                                          |
|                                                                                                                                |                                                                                      |

-   変更後のコード

API クラスと列挙型へのフル パスの代わりにパッケージ名のみを使用できます。

注: Data Grid コンポーネントとそれに対応するモジュールの名前も変更されました

```ts
// gauges:
import { IgxLinearGauge } from "igniteui-angular-gauges";
import { IgxLinearGaugeModule } from "igniteui-angular-gauges";
import { IgxLinearGraphRange } from "igniteui-angular-gauges";
import { IgxRadialGauge } from 'igniteui-angular-gauges}';
import { IgxRadialGaugeModule } from 'igniteui-angular-gauges';
import { IgxRadialGaugeRange } from 'igniteui-angular-gauges';
import { SweepDirection } from 'igniteui-angular-core';
// charts:
import { IgxFinancialChartComponent } from "igniteui-angular-charts";
import { IgxFinancialChartModule } from "igniteui-angular-charts";
import { IgxDataChartComponent } from "igniteui-angular-charts";
import { IgxDataChartCoreModule } from "igniteui-angular-charts";
// maps:
import { IgxGeographicMapComponent } from "igniteui-angular-maps";
import { IgxGeographicMapModule } from "igniteui-angular-maps";
```

-   変更前のコード

以前は、API クラスと列挙型への完全なパスを使用してインポートする必要がありました。

```ts
// gauges:
import { IgxLinearGaugeComponent } from 'igniteui-webcomponents-gauges/ES5/igx-linear-gauge-component';
import { IgxLinearGaugeModule } from 'igniteui-webcomponents-gauges/ES5/igx-linear-gauge-module';
import { IgxLinearGraphRange } from 'igniteui-webcomponents-gauges/ES5/igx-linear-graph-range';
import { IgxRadialGaugeComponent } from "igniteui-webcomponents-gauges/ES5/igx-radial-gauge-component";
import { IgxRadialGaugeModule } from "igniteui-webcomponents-gauges/ES5/igx-radial-gauge-module";
import { IgxRadialGaugeRange } from "igniteui-webcomponents-gauges/ES5/igx-radial-gauge-range";
import { SweepDirection } from "igniteui-webcomponents-core/ES5/SweepDirection";
// charts:
import { IgxFinancialChartComponent } from "igniteui-webcomponents-charts/ES5/igx-financial-chart-component";
import { IgxFinancialChartModule } from "igniteui-webcomponents-charts/ES5/igx-financial-chart-module";
import { IgxDataChartComponent } from "igniteui-webcomponents-charts/ES5/igx-data-chart-component";
import { IgxDataChartCoreModule } from "igniteui-webcomponents-charts/ES5/igx-data-chart-core-module";
// maps:
import { IgxGeographicMapComponent } from "igniteui-webcomponents-maps/ES5/igx-geographic-map-component";
import { IgxGeographicMapModule } from "igniteui-webcomponents-maps/ES5/igx-geographic-map-module";
```

<!-- end: Angular, React, WebComponents -->
