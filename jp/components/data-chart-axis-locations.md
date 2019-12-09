---
title: データ チャート | 可視化ツール | Ignite UI for Angular | インフラジスティックス | 軸の位置
_description: 同じプロット領域に視覚要素の複数インスタンスを表示するデータ チャートを作成し、複合チャートビューを作成します。
_keywords: データチャート, Ignite UI for Angular, Infragistics
mentionedTypes: ['XamDataChart']
_language: ja
---

## 軸の位置

 すべての軸に対して、チャートのプロット領域に関連して軸の位置を指定できます。これは、同じデータ チャートで 2 つ以上の軸を使用する場合、または複数のシリーズ間で[軸を共有する](data-chart-axis-sharing.md)場合に特に重要です。

### サンプル

<div class="sample-container loading" style="height: 450px">
    <iframe id="data-chart-axis-locations-iframe" src='{environment:dvDemosBaseUrl}/charts/data-chart-axis-locations' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="data-chart-axis-locations-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">StackBlitz で表示
    </button>
</div>

<div class="divider--half"></div>

### コード例

このコードは、左右に配置される 2 つの [`IgxNumericYAxisComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxnumericyaxiscomponent.html) と、互いに積み重ねられる 2 つの [`IgxCategoryXAxisComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategoryxaxiscomponent.html) を使用してデータチャートを作成する方法を示します。

```html
   <igx-data-chart
            [dataSource]="dataSource"
            width="700px"
            height="500px">

            <igx-category-x-axis name="xAxisYears"
            interval="12" labelLocation="OutsideBottom"
            label="Year"  overlap="1" gap="0.4"  >
            </igx-category-x-axis>
            <igx-category-x-axis name="xAxisMonths"
            interval="1"  labelLocation="OutsideBottom"
            label="Month" overlap="1" gap="0.4" >
            </igx-category-x-axis>

            <igx-numeric-y-axis  name="yAxisLeft"
            title="Expanse | Revenue"
            minimumValue="-900" labelLocation="OutsideLeft"
            maximumValue="900"
            interval="300" >
            </igx-numeric-y-axis>
            <igx-numeric-y-axis  name="yAxisRight"
            title="Profit (%)"
            minimumValue="0"  labelLocation="OutsideRight"
            maximumValue="100" >
            </igx-numeric-y-axis>
            <igx-column-series name="series1"
            valueMemberPath="Revenue"
            xAxisName="xAxisMonths"
            yAxisName="yAxisLeft" >
            </igx-column-series>
            <igx-column-series name="series3"
            valueMemberPath="Expanse"
            xAxisName="xAxisMonths"
            yAxisName="yAxisLeft" >
            </igx-column-series>
            <igx-column-series name="series2"
            valueMemberPath="Profit"
            xAxisName="xAxisYears"
            yAxisName="yAxisRight" >
            </igx-column-series>
         </igx-data-chart>
```

### その他のリソース

-   [軸タイプ](data-chart-axis-types.md)
-   [軸の共有](data-chart-axis-sharing.md)
-   [シリーズ タイプ](data-chart-series-types.md)
