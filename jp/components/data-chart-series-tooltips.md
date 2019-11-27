---
title: Data Chart コンポーネント - ネイティブ Angular|Ignite UI for Angular
_description: Ignite UI for Angular Data Chart は、軸、マーカー、凡例、および注釈レイヤーのモジュール設計を提供するチャート コンポーネントです。チャート機能は、複合チャート ビューを作成するために同じチャート領域でのビジュアル要素の複数のインスタンスを利用できます。
_keywords: Ignite UI for Angular, Angular, Native Angular コンポーネント スイート, Native Angular コントロール, ネイティブ Angular コンポーネント, ネイティブ Angular コンポーネント ライブラリ, Angular チャート, Angular チャート コントロール, Angular チャート例, Angular チャート コンポーネント, Angular データ チャート
_language: ja
---

## ツールチップ

[`IgxDataChartComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachartcomponent.html) コントロールは、2 つのツールチップ 「レイヤー」 と共にツールチップを表示できます。これらのツールチップを使用すると、チャート内の各シリーズに関するコンテキスト情報を確認するのに役立ちます。

### デモ

<div class="sample-container loading" style="height: 500px">
    <iframe id="data-chart-series-tooltips-iframe" src='{environment:dvDemosBaseUrl}/charts/data-chart-series-tooltips' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="data-chart-series-tooltips-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">StackBlitz で表示
    </button>
</div>

<div class="divider--half"></div>

[`IgxDataChartComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachartcomponent.html) コントロールでツールチップ レイヤーを有効にするには、対話モジュールをインポートして登録する必要があります。以下のコードを使用できます。

```ts
import { IgxDataChartInteractivityModule } from "igniteui-angular-charts/ES5/igx-data-chart-interactivity-module";

@NgModule({
    imports: [ IgxDataChartInteractivityModule ]
})
```

### デフォルト ツールチップ

[`IgxDataChartComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachartcomponent.html) コントロールは、シリーズの種類ごとに既定のツールチップを提供します。デフォルトのツールチップには、シリーズのタイトル、データ値、軸の値など、ホバーされている特定のシリーズ項目に関連するすべての情報が表示されます。これらもシリーズの外観に合わせてスタイル設定されています。

次のコードスニペットは、[`IgxDataChartComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachartcomponent.html) コントロールで既定のツールチップを有効にする方法を示しています。

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

### カテゴリ ツールチップ レイヤー

CategoryToolTipLayer は、カテゴリ軸を使用する [`IgxDataChartComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachartcomponent.html) コントロールのシリーズ用にグループ化されたヒントを表示します。グループ化されたツールチップは現在、[`IgxDataChartComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachartcomponent.html) コントロールの上部に表示されています。

次のコードスニペットは、[`IgxDataChartComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachartcomponent.html) コントロールにカテゴリ項目ハイライト レイヤーを追加する方法を示しています。

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

### 項目ツールチップ レイヤー

itemToolTipLayer は、特定のシリーズにマウスがホバーする場合に [`IgxDataChartComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachartcomponent.html) コントロール上のすべてのシリーズに関するヒントを個別に表示します。ツールチップスタイルは、ツールチップを表示しているシリーズから継承されます。

次のコードスニペットは、[`IgxDataChartComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachartcomponent.html) コントロールに項目ツールチップ レイヤーを追加する方法を示しています。

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
