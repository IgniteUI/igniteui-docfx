---
title: Angular チャート パフォーマンス | データ可視化 | インフラジスティックス
_description: インフラジスティックスの Angular チャート パフォーマンス
_keywords: Angular Charts, Performance, Infragistics, Angular チャート, パフォーマンス, インフラジスティックス
mentionedTypes: ["CategoryChart", "FinancialChart", "XamDataChart"]
_language: ja
---

# Angular チャート パフォーマンス

Angular チャートは、数百万のデータ ポイントを描画し、それらを数ミリ秒ごとに更新する高性能のために最適化されています。ただし、チャートのパフォーマンスに影響を与えるいくつかのチャート機能があり、アプリケーションのパフォーマンスを最適化するときにそれらを考慮する必要があります。このトピックでは、Angular チャートをアプリケーションで可能な限り高速に機能させる方法について説明します。

## Angular チャート パフォーマンスの例

次の例は、Angular チャートの 2 つの高性能シナリオを示しています。

## 高頻度 Angular チャート

高頻度シナリオでは、Angular チャートは、リアルタイムまたは指定されたミリ秒間隔で更新されるデータ項目を描画できます。タッチ デバイスでチャートを操作しているときでも、ラグ、画面のちらつき、表示の遅れは発生しません。次のサンプルは、高頻度シナリオでの [`IgxCategoryChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategorychartcomponent.html) を示しています。

<code-view style="height: 400px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart-high-frequency"
           alt="高頻度 Angular チャート" >
</code-view>

<div class="divider--half"></div>

## 大量のデータの Angular チャート

大量データのシナリオでは、Angular チャートは 100 万のデータ ポイントを描画できますが、エンドユーザーがチャートのコンテンツをズームイン/ズームアウトまたはナビゲートしようとしたときにチャートはスムーズなパフォーマンスを提供し続けます。次のサンプルは、大量データのシナリオでの [`IgxCategoryChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategorychartcomponent.html) を示しています。

<code-view style="height: 400px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart-high-volume"
           alt="大量のデータの Angular チャート" >
</code-view>

<div class="divider--half"></div>

## 一般的なパフォーマンス ガイドライン

このセクションでは、Angular チャートのオーバーヘッドと処理の更新に追加されるガイドラインとチャート機能を一覧表示します。

### データ サイズ

多数のデータ ポイント (10,000 以上など) を含むデータ ソースをプロットする必要がある場合は、その目的のために特別にデザインされた次のタイプのシリーズのいずれかで Angular [`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachartcomponent.html) を使用することをお勧めします。

-   [カテゴリ ポイント チャート](../types/point-chart.md)や[散布マーカー チャート](../types/scatter-chart.md#angular-散布マーカー-チャート)の代わりに[散布高密度チャート](../types/scatter-chart.md#angular-散布高密度チャート)
-   [カテゴリ折れ線チャート](../types/line-chart.md#angular-折れ線チャートの例)や[散布折れ線チャート](../types/scatter-chart.md#angular-散布折れ線チャート)の代わりに[散布ポリライン チャート](../types/shape-chart.md#angular-散布ポリライン-チャート)
-   [カテゴリ エリア チャート](../types/area-chart.md#angular-エリア-チャートの例)や[縦棒チャート](../types/column-chart.md#angular-縦棒チャートの例)の代わりに[散布ポリゴン チャート](../types/shape-chart.md#angular-散布ポリゴン-チャート)

### データ構造

Angular チャートは、データ ポイントの配列の配列を `ItemsSource` プロパティにバインドすることにより、複数のデータ ソースの描画をサポートします。複数のデータ ソースが単一のデータ ソースにフラット化され、各データ項目に 1 つのデータ列だけでなく複数のデータ列が含まれる場合、チャートははるかに高速になります。例えば:

```ts
this.CategoryChart.dataSource = FlattenDataSource.create();
this.FinancialChart.dataSource = FlattenDataSource.create();

export class FlattenDataSource {
    public static create(): any[] {
        const data: any[] = [];
        data.push({ "Year": "1996", "USA": 148, "CHN": 110 });
        data.push({ "Year": "2000", "USA": 142, "CHN": 115 });
        return data;
    }
}
// instead of this data structure:
export class MultiDataSources {
    public static create(): any[] {
        const dataSource1: any[] = [];
        dataSource1.push({ "Year": "1996", "Value": 148 });
        dataSource1.push({ "Year": "2000", "Value": 142 });

        const dataSource2: any[] = [];
        dataSource2.push({ "Year": "1996", "Value": 110 });
        dataSource2.push({ "Year": "2000", "Value": 115 });

        const multipleSources: any[] = [dataSource1, dataSource2];
        return multipleSources;
    }
}
```

### データ フィルタリング

Angular [`IgxCategoryChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategorychartcomponent.html) および [`IgxFinancialChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxfinancialchartcomponent.html) コントロールには、データを分析して一連のチャートを生成するデータ アダプターが組み込まれています。ただし、 [`includedProperties`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdomainchartcomponent.html#includedproperties) と [`excludedProperties`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdomainchartcomponent.html#excludedproperties) を使用して、実際に描画するデータ列のみをフィルタリングすると、より高速に動作します。例:

<!-- Angular, React, WebComponents -->

```ts
this.Chart.includedProperties = [ "Year", "USA", "RUS" ];
this.Chart.excludedProperties = [ "CHN",  "FRN", "GER" ];
```

## チャート パフォーマンス ガイドライン

### チャート タイプ

[折れ線チャート](../types/line-chart.md)などの単純なチャート タイプは、データ ポイント間のスプライン線の補間が複雑であるため、[スプライン チャート](../types/spline-chart.md)を使用するよりもパフォーマンスが速くなります。したがって、Angular `XamCategoryChart` の [`chartType`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxfinancialchartcomponent.html#charttype) プロパティまたは `XamFinancialChart` コントロールを使用して、描画が高速なチャートのタイプを選択する必要があります。または、Angular [`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachartcomponent.html) コントロールで、シリーズのタイプをより高速なシリーズに変更することもできます。

次の表に、チャートの各グループで、パフォーマンスが速いものから遅いものの順にチャートのタイプを示します。

| チャート グループ     | チャート タイプ                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 円チャート         | - [円チャート](../types/pie-chart.md) <br> - [ドーナツ チャート](../types/donut-chart.md) <br> - [ラジアル円チャート](../types/radial-chart.md#angular-ラジアル円チャート) <br>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| 折れ線チャート       | - [カテゴリ折れ線チャート](../types/line-chart.md#angular-カテゴリ折れ線チャート) <br> - [カテゴリ スプライン チャート](../types/spline-chart.md#angular-カテゴリ-スプライン-チャート) <br> - [ステップ折れ線チャート](../types/shape-chart.md#angular-ステップ折れ線チャート) <br> - [ラジアル折れ線チャート](../types/radial-chart.md#angular-ラジアル折れ線チャート) <br> - [極座標折れ線チャート](../types/polar-chart.md#angular-極座標折れ線チャート) <br> - [散布折れ線チャート](../types/scatter-chart.md#angular-散布折れ線チャート) <br> - [散布ポリライン チャート](../types/shape-chart.md#angular-散布ポリライン-チャート) (\*)  <br> - [散布等高線チャート](../types/scatter-chart.md#angular-散布等高線チャート) <br> - [積層型折れ線チャート](../types/stacked-chart.md#angular-積層型折れ線チャート) <br> - [積層型 100% 折れ線チャート](../types/stacked-chart.md#angular-積層型-100%-折れ線チャート) <br>      |
| エリア チャート      | - [カテゴリ エリア チャート](../types/area-chart.md#angular-エリア-チャートの例) <br> - [ステップ エリア チャート](../types/shape-chart.md#angular-ステップ-エリア-チャート) <br> - [範囲エリア チャート](../types/area-chart.md#angular-範囲エリア-チャート) <br> - [ラジアル エリア チャート](../types/radial-chart.md#angular-ラジアル-エリア-チャート) <br> - [極座標エリア チャート](../types/polar-chart.md#angular-極座標エリア-チャート) <br> - [散布ポリゴン チャート](../types/shape-chart.md#angular-散布ポリゴン-チャート) (\*) <br> - [散布エリア チャート](../types/scatter-chart.md#angular-散布エリア-チャート) <br> - [積層型エリア チャート](../types/stacked-chart.md#angular-積層型エリア-チャート) <br> - [積層型 100% エリア チャート](../types/stacked-chart.md#angular-積層型-100%-エリア-チャート) <br>                                                                    |
| 縦棒チャート        | - [縦棒チャート](../types/column-chart.md#angular-縦棒チャートの例) <br> - [棒チャート](../types/column-chart.md#angular-棒チャートの例) <br> - [ウォーターフォール チャート](../types/column-chart.md#angular-ウォーターフォール-チャート) <br> - [範囲縦棒チャート](../types/column-chart.md#angular-範囲縦棒チャート) <br> - [ラジアル縦棒チャート](../types/radial-chart.md#angular-ラジアル縦棒チャート) <br> - [積層型縦棒チャート](stacked-chart.md#angular-積層型縦棒チャート) <br> - [積層型棒チャート](stacked-chart.md#angular-積層型棒チャート) <br> - [積層型 100% 縦棒チャート](stacked-chart.md#angular-積層型-100%-縦棒チャート) <br> - [積層型 100% 棒チャート](stacked-chart.md#angular-積層型-100%-棒チャート)                                                                                                                                           |
| スプライン チャート    | - [カテゴリ スプライン チャート](../types/spline-chart.md#angular-スプライン-チャートの例) <br> - [極座標型スプライン チャート](../types/polar-chart.md#angular-極座標型スプラインーチャート) <br> - [散布スプライン チャート](../types/scatter-chart.md#angular-散布スプライン-チャート) <br> - [積層型スプライン チャート](../types/stacked-chart.md#angular-積層型スプライン-チャート) <br> - [積層型 100% スプライン チャート](../types/stacked-chart.md#angular-積層型-100%-スプライン-チャート) <br>                                                                                                                                                                                                                                                                                                                               |
| ポイント チャート     | - [カテゴリ ポイント チャート](../types/point-chart.md) <br> - [散布高密度チャート](../types/scatter-chart.md#angular-散布高密度チャート)  <br> - [散布マーカー チャート](../types/scatter-chart.md#angular-散布マーカー-チャート) <br> - [散布バブル チャート](../types/bubble-chart.md) <br> - [極座標型マーカーチャート](../types/polar-chart.md#angular-極座標型マーカー-チャート) <br>                                                                                                                                                                                                                                                                                                                                                                                                        |
| ファイナンシャル チャート | - [折れ線モードの株価チャート](../types/stock-chart.md) <br> - [縦棒モードの株価チャート](../types/stock-chart.md) <br> - [棒モードの株価チャート](../types/stock-chart.md) <br> - [ローソク足モードの株価チャート](../types/stock-chart.md) <br> - [オーバーレイ付き株価チャート](../types/stock-chart.md) <br> - [ズーム ペイン付き株価チャート](../types/stock-chart.md) <br> - [ボリューム ペイン付き株価チャート](../types/stock-chart.md#volume-pane) <br> - [インジケーター ペイン付き株価チャート](../types/stock-chart.md#indicator-pane) <br>                                                                                                                                                                                                                                                                          |
| 散布図           | - [散布高密度チャート](../types/scatter-chart.md#angular-散布高密度チャート) <br> - [散布マーカー チャート](../types/scatter-chart.md#angular-散布マーカー-チャート) <br> - [散布折れ線チャート](../types/scatter-chart.md#angular-散布折れ線チャート) <br> - [散布バブル チャート](../types/bubble-chart.md) <br> - [散布スプライン チャート](../types/scatter-chart.md#angular-散布スプライン-チャート) <br> - [散布エリア チャート](../types/scatter-chart.md#angular-散布エリア-チャート) <br> - [散布等高線チャート](../types/scatter-chart.md#angular-散布等高線チャート) <br> - [散布ポリライン チャート](../types/shape-chart.md#angular-散布ポリライン-チャート) (\*) <br> - [散布ポリゴン チャート](../types/shape-chart.md#angular-散布ポリゴン-チャート) (\*) <br>                                                                                                       |
| ラジアル チャート     | - [ラジアル折れ線チャート](../types/radial-chart.md#angular-ラジアル折れ線チャート) <br> - [ラジアル エリア チャート](../types/radial-chart.md#angular-ラジアル-エリア-チャート) <br> - [ラジアル円チャート](../types/radial-chart.md#angular-ラジアル円チャート) <br> - [ラジアル縦棒チャート](../types/radial-chart.md#angular-ラジアル縦棒チャート) <br>                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 極座標チャート       | - [極座標型マーカー チャート](../types/polar-chart.md#angular-極座標型マーカー-チャート) <br> - [極座標折れ線チャート](../types/polar-chart.md#angular-極座標折れ線チャート) <br> - [極座標エリア チャート](../types/polar-chart.md#angular-極座標エリア-チャート) <br> - [極座標型スプライン チャート](../types/polar-chart.md#angular-極座標型スプライン-チャート) <br> - [極座標スプライン エリア チャート](../types/polar-chart.md#angular-polar-spline-area-chart) <br>                                                                                                                                                                                                                                                                                                                                             |
| 積層型チャート       | - [積層型折れ線チャート](../types/stacked-chart.md#angular-積層型折れ線チャート) <br> - [積層型エリア チャート](../types/stacked-chart.md#angular-積層型エリア-チャート) <br> - [積層型縦棒チャート](stacked-chart.md#angular-積層型縦棒チャート) <br> - [積層型棒チャート](stacked-chart.md#angular-積層型棒チャート) <br> - [積層型スプライン チャート](../types/stacked-chart.md#angular-積層型スプライン-チャート) <br> - [積層型 100% 折れ線チャート](../types/stacked-chart.md#angular-積層型-100%-折れ線チャート) <br> - [積層型 100% エリア チャート](../types/stacked-chart.md#angular-積層型-100%-エリア-チャート) <br> - [積層型 100% 縦棒チャート](stacked-chart.md#angular-積層型-100%-縦棒チャート) <br> - [積層型 100% 棒チャート](stacked-chart.md#angular-積層型-100%-棒チャート) <br> - [積層型 100% スプライン チャート](../types/stacked-chart.md#angular-積層型-100%-スプライン-チャート) <br> |

\* チャートに多数のデータ ソースがバインドされている場合、[散布ポリゴン チャート](../types/shape-chart.md)と[散布ポリライン チャート](../types/shape-chart.md)のパフォーマンスは他のチャートよりも優れていることに注意してください。詳細については、[シリーズ コレクション](#シリーズ-コレクション)セクションを参照してください。それ以外の場合は、他のチャートのタイプの方が高速です。

### チャート アニメーション

[チャート アニメーション](chart-animations.md)を有効にすると、トランジションイン アニメーションを再生している間、$ProductShort$ チャートの最終描画シリーズがわずかに遅れます

### チャート注釈

コールアウト注釈、十字線注釈、最終値注釈などの[チャート注釈](chart-annotations.md)を有効にすると、$ProductShort$ チャートのパフォーマンスがわずかに低下します。

### チャートの強調表示

[チャートの強調表示](chart-highlighting.md)を有効にすると、$ProductShort$ チャートのパフォーマンスがわずかに低下します。

### チャート凡例

凡例を $ProductShort$ チャートに追加すると、凡例にマップされたシリーズまたはデータ項目のタイトルが実行時に頻繁に変更される場合、パフォーマンスが低下する可能性があります。

### チャート マーカー

$ProductShort$ チャートでは、[チャート マーカー](chart-markers.md)はチャートのレイアウトの複雑さを増し、特定の情報を取得するためにデータ バインディングを実行するため、チャートのパフォーマンスに関しては特に手間がかかります。また、データ ポイントが多い場合、またはバインドされているデータ ソースが多い場合、マーカーはパフォーマンスを低下させます。したがって、マーカーが不要な場合は、チャートから削除する必要があります。

以下のコード例は、$ProductShort$ チャートからマーカーを削除する方法を示します。

<!-- Angular, React, WebComponents -->

```ts
// on CategoryChart or FinancialChart
this.Chart.markerTypes.clear();
this.Chart.markerTypes.add(MarkerType.None);

// on LineSeries of DataChart
this.LineSeries.markerType = MarkerType.None;
```

### チャートの解像度

[`resolution`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdomainchartcomponent.html#resolution) プロパティをより大きな値に設定するとパフォーマンスは向上しますが、プロットされた系列の線のグラフィカルな忠実度は低下します。このようなわけで、忠実度が受け入れられなくなるまで値を大きくする可能性があります。

このコード スニペットは、$ProductShort$ チャートの解像度を下げる方法を示しています。

<!-- Angular, React, WebComponents -->

```ts
// on CategoryChart or FinancialChart:
this.Chart.Resolution = 10;

// on LineSeries of DataChart:
this.LineSeries.Resolution = 10;
```

### チャート オーバーレイ

[チャート オーバーレイ](chart-overlays.md)を有効にすると、$ProductShort$ チャートのパフォーマンスがわずかに低下します。

### チャート トレンドライン

[チャート トレンドライン](chart-trendlines.md)を有効にすると、$ProductShort$ チャートのパフォーマンスがわずかに低下します。

### 軸のタイプ

データ ポイント間の時間間隔に基づくスペースが重要でない場合は、DateTime をサポートする x 軸の使用はお勧めしません。代わりに、順序/カテゴリ軸を使用する必要があります。これは、データを結合する方法がより効率的であるためです。また、順序/カテゴリ軸は、時間ベースの x 軸のようにデータのソートを実行しません。

> 注: [`IgxCategoryChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategorychartcomponent.html) はすでに順序/カテゴリ軸を使用しているため、そのプロパティを変更する必要はありません。

このコード スニペットは、[`IgxFinancialChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxfinancialchartcomponent.html) および [`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachartcomponent.html) コントロールで x 軸を順序付け/カテゴリ化する方法を示しています。

<!-- Angular, React, WebComponents -->

```ts
<Ig$FinancialChart xAxisMode="Ordinal"/>

<Ig$DataChart>
    <Ig$CategoryXAxis label="Time" />
</Ig$DataChart>
```

### 軸の間隔

デフォルトでは、$ProductShort$ チャートは、データの範囲に基づいて [`yAxisInterval`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategorychartcomponent.html#yaxisinterval) を自動的に計算します。したがって、軸のグリッド線と軸のラベルが多すぎないように、軸の間隔を特に小さい値に設定することは避けてください。  また、多くの軸グリッド線または軸ラベルが必要ない場合は、[`yAxisInterval`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategorychartcomponent.html#yaxisinterval) プロパティを自動的に計算された軸間隔よりも大きい値に増やすことを検討することをお勧めします。

> チャートのパフォーマンスが低下するため、軸の副間隔を設定することはお勧めしません。

このコード スニペットは、$ProductShort$ チャートで軸の主間隔を設定する方法を示しています。

<!-- Angular, React, WebComponents -->

```ts
<Ig$CategoryChart  xAxisInterval="5" yAxisInterval="50"/>

<Ig$FinancialChart xAxisInterval="5" yAxisInterval="50"/>

<Ig$DataChart>
    <Ig$CategoryXAxis name="xAxis" interval="5" />
    <Ig$NumericYAxis  name="yAxis" interval="50"/>
</Ig$DataChart>
```

### 軸スケール

[`yAxisIsLogarithmic`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategorychartcomponent.html#yaxisislogarithmic) プロパティを false に設定すると、パフォーマンスを向上させるために推奨されます。対数目盛で軸範囲と軸ラベルの値を計算するよりも操作が少なくて済むためです。

### 軸ラベルの表示状態

マーカーと同じように、軸ラベルはテンプレートとバインドを使用し、データ コンテキストが頻繁に変更されるために、軸ラベルも負荷がかかります。ラベルを使用しない場合は、非表示にするか、間隔を長くして軸ラベルの数を減らす必要があります。

このコード スニペットは、$ProductShort$ チャートで軸ラベルを非表示にする方法を示しています。

<!-- Angular, React, WebComponents -->

```ts
<Ig$CategoryChart
    xAxisLabelVisibility="Collapsed"
    yAxisLabelVisibility="Collapsed" >
</Ig$CategoryChart>

<Ig$FinancialChart
    xAxisLabelVisibility="Collapsed"
    yAxisLabelVisibility="Collapsed" >
</Ig$FinancialChart>

<Ig$DataChart>
    <Ig$CategoryXAxis name="xAxis" LabelVisibility="Collapsed" />
    <Ig$NumericYAxis  name="yAxis" LabelVisibility="Collapsed" />
</Ig$DataChart>
```

### 軸ラベルの省略形

ただし、$ProductShort$ チャートは、[`yAxisAbbreviateLargeNumbers`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategorychartcomponent.html#yaxisabbreviatelargenumbers) が true に設定されている場合に、軸ラベルに表示される大きな数値 (10,000 以上など) の省略形をサポートします。代わりに、データ 項目の大きな値を公約数で除算して前処理し、[`yAxisTitle`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxxychartcomponent.html#yaxistitle) をデータ値の省略形に使用される約数を表す文字列に設定することをお勧めします。

このコード スニペットは、$ProductShort$ チャートで軸のタイトルを設定する方法を示しています。

<!-- Angular, React, WebComponents -->

```ts
<Ig$CategoryChart  yAxisTitle="In millions of Dollars" />

<Ig$FinancialChart yAxisTitle="In millions of Dollars" />

<Ig$DataChart>
    <Ig$NumericYAxis title="In millions of Dollars" />
</Ig$DataChart>
```

### 軸ラベルの範囲

実行時に、$ProductShort$ チャートは、最も長い値を持つラベルに基づいて、y 軸上のラベルの範囲を調整します。これにより、データの範囲やラベルを頻繁に更新する必要がある場合に、チャートのパフォーマンスが低下する可能性があります。そのため、チャート パフォーマンスを向上させるためにデザイン時にラベル範囲を設定することをお勧めします。

次のコード スニペットは、$ProductShort$ チャートの y 軸のラベルに固定されたラベル範囲を設定する方法を示します。

<!-- Angular, React, WebComponents -->

```ts
<Ig$CategoryChart  xAxisLabelExtent="50" yAxisLabelExtent="50"/>

<Ig$FinancialChart xAxisLabelExtent="50" yAxisLabelExtent="50"/>

<Ig$DataChart>
    <Ig$CategoryXAxis name="xAxis" labelExtent="50" />
    <Ig$NumericYAxis  name="yAxis" labelExtent="50"/>
</Ig$DataChart>
```

### 軸その他のビジュアル

追加の軸ビジュアル (軸タイトルなど) を有効にしたり、デフォルト値を変更したりすると、$ProductShort$ チャートのパフォーマンスが低下する可能性があります。

たとえば、[`IgxCategoryChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategorychartcomponent.html) または [`IgxFinancialChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxfinancialchartcomponent.html) コントロールでこれらのプロパティを変更します。

| 軸ビジュアル     | X 軸プロパティ                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Y 軸プロパティ                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| すべての軸ビジュアル | [`xAxisInterval`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategorychartcomponent.html#xaxisinterval)<br>  [`xAxisMinorInterval`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategorychartcomponent.html#xaxisminorinterval)                                                                                                                                                                      | [`yAxisInterval`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxfinancialchartcomponent.html#yaxisinterval)<br>  [`yAxisMinorInterval`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxfinancialchartcomponent.html#yaxisminorinterval)                                                                                                                                                                    |
| 軸目盛        | [`xAxisTickStroke`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxxychartcomponent.html#xaxistickstroke) <br>  [`xAxisTickStrokeThickness`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxxychartcomponent.html#xaxistickstrokethickness)<br>  [`xAxisTickLength`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxxychartcomponent.html#xaxisticklength)<br> | [`yAxisTickStroke`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxxychartcomponent.html#yaxistickstroke) <br>  [`yAxisTickStrokeThickness`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxxychartcomponent.html#yaxistickstrokethickness)<br>  [`yAxisTickLength`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxxychartcomponent.html#yaxisticklength)<br> |
| 軸主グリッド線    | [`xAxisMajorStroke`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxxychartcomponent.html#xaxismajorstroke)<br>  [`xAxisMajorStrokeThickness`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxxychartcomponent.html#xaxismajorstrokethickness)<br>                                                                                                                                                          | [`yAxisMajorStroke`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxxychartcomponent.html#yaxismajorstroke)<br>  [`yAxisMajorStrokeThickness`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxxychartcomponent.html#yaxismajorstrokethickness)<br>                                                                                                                                                          |
| 軸の副グリッド線   | [`xAxisMinorStroke`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxxychartcomponent.html#xaxisminorstroke)<br>  [`xAxisMinorStrokeThickness`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxxychartcomponent.html#xaxisminorstrokethickness)<br>                                                                                                                                                          | [`yAxisMinorStroke`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxxychartcomponent.html#yaxisminorstroke)<br>  [`yAxisMinorStrokeThickness`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxxychartcomponent.html#yaxisminorstrokethickness)<br>                                                                                                                                                          |
| 軸主線        | [`xAxisStroke`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxxychartcomponent.html#xaxisstroke)<br>  [`xAxisStrokeThickness`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxxychartcomponent.html#xaxisstrokethickness)<br>                                                                                                                                                                              | [`yAxisStroke`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxxychartcomponent.html#yaxisstroke)<br>  [`yAxisStrokeThickness`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxxychartcomponent.html#yaxisstrokethickness)<br>                                                                                                                                                                              |
| 軸タイトル      | [`xAxisTitle`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxxychartcomponent.html#xaxistitle)<br>  [`xAxisTitleAngle`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxxychartcomponent.html#xaxistitleangle)<br>                                                                                                                                                                                          | [`yAxisTitle`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxxychartcomponent.html#yaxistitle)<br>  [`yAxisTitleAngle`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxxychartcomponent.html#yaxistitleangle)<br>                                                                                                                                                                                          |
| 軸ストリップ     | [`xAxisStrip`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxxychartcomponent.html#xaxisstrip)<br>                                                                                                                                                                                                                                                                                                                                                      | [`yAxisStrip`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxxychartcomponent.html#yaxisstrip)<br>                                                                                                                                                                                                                                                                                                                                                      |

または、[`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachartcomponent.html) コントロールの [`IgxAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxaxiscomponent.html) のプロパティを変更します。

| 軸ビジュアル     | 軸プロパティ                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| すべての軸ビジュアル | `Interval`, `MinorInterval`                                                                                                                                                                                                                                                                                                                                                                                                                        |
| 軸目盛        | [`tickStroke`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxaxiscomponent.html#tickstroke) , [`tickStrokeThickness`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxaxiscomponent.html#tickstrokethickness), [`tickLength`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxaxiscomponent.html#ticklength) |
| 軸主グリッド線    | [`majorStroke`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxaxiscomponent.html#majorstroke), [`majorStrokeThickness`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxaxiscomponent.html#majorstrokethickness)                                                                                                                                         |
| 軸の副グリッド線   | [`minorStroke`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxaxiscomponent.html#minorstroke), [`minorStrokeThickness`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxaxiscomponent.html#minorstrokethickness)                                                                                                                                         |
| 軸主線        | [`stroke`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxaxiscomponent.html#stroke), [`strokeThickness`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxaxiscomponent.html#strokethickness)                                                                                                                                                             |
| 軸タイトル      | [`title`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxaxiscomponent.html#title), `TitleAngle`                                                                                                                                                                                                                                                                                                      |
| 軸ストリップ     | [`strip`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxaxiscomponent.html#strip)                                                                                                                                                                                                                                                                                                                    |

## ファイナンシャル チャートのパフォーマンス

上記のパフォーマンスガイドラインに加えて、$ProductShort$ [`IgxFinancialChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxfinancialchartcomponent.html) コントロールには、パフォーマンスに影響を与える次の独自の機能があります。

### Y 軸モード

`PercentChange` モードを使用するよりも必要な操作が少ないため、パフォーマンスを向上させるには、[`yAxisMode`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxfinancialchartcomponent.html#yaxismode) オプションを `Numeric` に設定することをお勧めします。

### チャート ペイン

[`indicatorTypes`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxfinancialchartcomponent.html#indicatortypes) および [`overlayTypes`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxfinancialchartcomponent.html#overlaytypes) オプションを使用して複数のペインを設定した場合、パフォーマンスが低下する可能性があり、少数の財務指標および単一の財務オーバーレイを使用することをお勧めします。

### ズーム スライダー

[`zoomSliderType`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxfinancialchartcomponent.html#zoomslidertype) オプションを `None` に設定すると、チャート パフォーマンスを向上し、その他のインジケーターおよびボリューム ペインのために垂直スペースを利用可能になります。

### ボリューム タイプ

[`volumeType`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxfinancialchartcomponent.html#volumetype) プロパティの設定はチャート パフォーマンスに次の影響を与える可能性があります:

-   `None` - ボリューム ペインが表示されないため、最も簡易です。
-   `Line` - 描画するのにより手間がかかるボリューム タイプです。データ ポイントの大量を描画するか、複数のデータ ソースをプロットする場合に使用することをお勧めします。
-   `Area` - `Line` ボリューム タイプより描画に手間がかかります。
-   [`IgxColumnComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcolumncomponent.html) - `Area` ボリューム タイプより描画に手間がかかります。1 つ ～ 3 つの株のボリューム データを描画する場合にお勧めします。

## データ チャートのパフォーマンス

一般的なパフォーマンス ガイドラインに加えて、$ProductShort$ [`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachartcomponent.html) コントロールには、パフォーマンスに影響を与える次の固有の機能があります。

### 軸コレクション

[`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachartcomponent.html) コントロールの `Axes` コレクションに追加する軸が多すぎると、チャートのパフォーマンスが低下するため、シリーズ間で[軸の共有](chart-axis-layouts.md＃axis-sharing-example)をお勧めします。

### シリーズ コレクション

また、Angular [`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachartcomponent.html) コントロールの [`IgxSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxseriescomponent.html) コレクションに多くのシリーズを追加すると、各シリーズに独自の描画キャンバスがあるため、描画にオーバーヘッドが追加されます。これは、データ チャートに 10 を超えるシリーズがある場合に特に重要です。複数のデータ ソースを組み合わせてフラット化したデータ ソースにし ([データ構造](#データ-構造)セクションを参照)、次のシリーズの条件付き書式設定機能を使用することをお勧めします。

| パフォーマンスが低下するシナリオ                                                                                                                                                       | 条件付き書式設定を使用したより高速なシナリオ                                                                                                                                                           |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`IgxLineSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxlineseriescomponent.html) の 10 以上               | 単一の [`IgxScatterLineSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxscatterlineseriescomponent.html)               |
| [`IgxLineSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxlineseriescomponent.html) の 20 以上               | 単一の [`IgxScatterPolylineSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxscatterpolylineseriescomponent.html)       |
| [`IgxScatterLineSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxscatterlineseriescomponent.html) の 10 以上 | 単一の [`IgxScatterPolylineSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxscatterpolylineseriescomponent.html)       |
| [`IgxPointSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxpointseriescomponent.html) の 10 以上             | 単一の [`IgxScatterSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxscatterseriescomponent.html)                       |
| [`IgxPointSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxpointseriescomponent.html) の 20 以上             | 単一の [`IgxHighDensityScatterSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxhighdensityscatterseriescomponent.html) |
| [`IgxScatterSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxscatterseriescomponent.html) の 20 以上         | 単一の [`IgxHighDensityScatterSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxhighdensityscatterseriescomponent.html) |
| [`IgxAreaSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxareaseriescomponent.html) の 10 以上               | 単一の [`IgxScatterPolygonSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxscatterpolygonseriescomponent.html)         |
| [`IgxColumnSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcolumnseriescomponent.html) の 10 以上           | 単一の [`IgxScatterPolygonSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxscatterpolygonseriescomponent.html)         |

## その他のリソース

関連するチャート タイプの詳細については、以下のトピックを参照してください。

-   [エリア チャート](../types/area-chart.md)
-   [棒チャート](../types/bar-chart.md)
-   [バブル チャート](../types/bubble-chart.md)
-   [縦棒チャート](../types/column-chart.md)
-   [ドーナツ チャート](../types/donut-chart.md)
-   [円チャート](../types/pie-chart.md)
-   [ポイント チャート](../types/point-chart.md)
-   [極座標チャート](../types/polar-chart.md)
-   [ラジアル チャート](../types/radial-chart.md)
-   [シェープ チャート](../types/shape-chart.md)
-   [スプライン チャート](../types/spline-chart.md)
-   [散布図](../types/scatter-chart.md)
-   [積層型チャート](../types/stacked-chart.md)
-   [ステップ チャート](../types/shape-chart.md)
-   [株価チャート](../types/stock-chart.md)
-   [チャート アニメーション](chart-animations.md)
-   [チャート注釈](chart-annotations.md)
-   [チャート強調表示](chart-highlighting.md)
-   [チャート マーカー](chart-markers.md)
-   [チャート オーバーレイ](chart-overlays.md)
-   [チャート トレンドライン](chart-trendlines.md)

## API メンバー

以下は、上記のセクションで説明した API メンバーのリストです。

-   [`resolution`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdomainchartcomponent.html#resolution)
-   [`indicatorTypes`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxfinancialchartcomponent.html#indicatortypes)
-   [`overlayTypes`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxfinancialchartcomponent.html#overlaytypes)
-   [`volumeType`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxfinancialchartcomponent.html#volumetype)
-   [`zoomSliderType`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxfinancialchartcomponent.html#zoomslidertype)
-   [`xAxisMode`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxfinancialchartcomponent.html#xaxismode)
-   [`yAxisMode`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxfinancialchartcomponent.html#yaxismode)
-   [`xAxisInterval`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategorychartcomponent.html#xaxisinterval)
-   [`yAxisInterval`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategorychartcomponent.html#yaxisinterval)
-   [`xAxisMinorInterval`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategorychartcomponent.html#xaxisminorinterval)
-   [`yAxisMinorInterval`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategorychartcomponent.html#yaxisminorinterval)
-   [`xAxisLabelVisibility`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxxychartcomponent.html#xaxislabelvisibility)
-   [`yAxisLabelVisibility`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxxychartcomponent.html#yaxislabelvisibility)
-   [`yAxisIsLogarithmic`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategorychartcomponent.html#yaxisislogarithmic)
