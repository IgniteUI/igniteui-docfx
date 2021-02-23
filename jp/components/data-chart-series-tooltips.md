---
title: Angular データ チャート | データ可視化ツール | ツールチップ | インフラジスティックス
_description: インフラジスティックスの Angular チャートのツールチップを使用して、重要なデータを表示します。Ignite UI for Angular グラフ チュートリアルを是非お試しください!
_keywords: Angular charts, data chart, tooltips, Ignite UI for Angular, Infragistics, Angular チャート, データ チャート, ツールチップ, インフラジスティックス
mentionedTypes: ['XamDataChart']
_language: ja
---

# Angular ツールチップ

Angular データ チャート コンポーネントは、2 つのツールチップ 「レイヤー」 と共にツールチップを表示できます。これらのツールチップを使用すると、データ チャート内の各シリーズに関するコンテキスト情報を確認するのに役立ちます。

## Angular ツールチップの例

<div class="sample-container loading" style="height: 500px">
    <iframe id="data-chart-series-tooltips-iframe" src='{environment:dvDemosBaseUrl}/charts/data-chart-series-tooltips' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);" alt="Angular ツールチップの例"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="data-chart-series-tooltips-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">StackBlitz で表示
    </button>


</div>

<div class="divider--half"></div>

Angular データ チャート コンポーネントでツールチップ レイヤーを有効にするには、対話モジュールをインポートして登録する必要があります。以下のコードを使用できます。

<!-- Blazor -->

-   DataChartInteractivityModule
    <!-- end: Blazor -->

```ts
import { IgxDataChartInteractivityModule } from 'igniteui-angular-charts';

@NgModule({
    imports: [ IgxDataChartInteractivityModule ]
})
```

## デフォルト ツールチップ

Angular データ チャート コンポーネントは、各シリーズ タイプにデフォルト ツールチップを提供します。デフォルトのツールチップには、シリーズのタイトル、データ値、軸の値など、ホバーされている特定のシリーズ項目に関連するすべての情報が表示されます。これらもシリーズの外観に合わせてスタイル設定されています。

次のコード スニペットは、Angular データ チャート コンポーネントで既定のツールチップを有効にする方法を示しています。

```html
<igx-data-chart #chart
    height="400px"
    width="100%"
    [dataSource]="data">

    <igx-category-x-axis #xAxis></igx-category-x-axis>
    <igx-numeric-y-axis #yAxis></igx-numeric-y-axis>

    <igx-column-series name="series1"
        [xAxis]="xAxis"
        [yAxis]="yAxis"
        valueMemberPath="Value"
        showDefaultTooltip=true>
    </igx-column-series>

</igx-data-chart>
```

## カテゴリ ツールチップ レイヤー

CategoryToolTipLayer は、カテゴリ軸を使用する Angular データ チャート コンポーネントのシリーズ用にグループ化されたヒントを表示します。グループ化されたツールチップは現在、Angular データ チャート コンポーネントの上部に表示されています。

以下のコードは、カテゴリ ツールチップ レイヤーを Angular データ チャート コンポーネントに追加する方法を示します。

```html
<igx-data-chart #chart
    height="400px"
    width="100%"
    [dataSource]="data">

    <igx-category-x-axis #xAxis></igx-category-x-axis>
    <igx-numeric-y-axis #yAxis></igx-numeric-y-axis>

    <igx-column-series name="series1"
        [xAxis]="xAxis"
        [yAxis]="yAxis"
        valueMemberPath="Value"
        showDefaultTooltip=true>
    </igx-column-series>

    <igx-category-tooltip-layer></igx-category-tooltip-layer>

</igx-data-chart>
```

## 項目ツールチップ レイヤー

項目ツールチップ レイヤーは、特定のシリーズにマウスがホバーする場合に Angular データ チャート コンポーネント上のすべてのシリーズに関するヒントを個別に表示します。ツールチップスタイルは、ツールチップを表示しているシリーズから継承されます。

以下のコードは、項目ツールチップ レイヤーを Angular データ チャート コンポーネントに追加する方法を示します。

```html
<igx-data-chart #chart
    height="400px"
    width="100%"
    [dataSource]="data">

    <igx-category-x-axis #xAxis></igx-category-x-axis>
    <igx-numeric-y-axis #yAxis></igx-numeric-y-axis>

    <igx-column-series name="series1"
        [xAxis]="xAxis"
        [yAxis]="yAxis"
        valueMemberPath="Value"
        showDefaultTooltip=true>
    </igx-column-series>

    <igx-item-tooltip-layer></igx-item-tooltip-layer>

</igx-data-chart>
```
