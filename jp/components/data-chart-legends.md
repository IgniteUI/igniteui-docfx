---
title: Angular データ チャート | データ可視化ツール | 凡例 | インフラジスティックス
_description: インフラジスティックスの Angular チャート コントロールの凡例は、プロットされたデータに関連するコンテキスト情報を表示します。Ignite UI for Angular グラフ凡例をお試しください!
_keywords: Angular charts, data chart, legend, Ignite UI for Angular, Infragistics, Angular チャート, データ チャート, 凡例, インフラジスティックス
mentionedTypes: ['XamDataChart', 'Infragistics.Controls.Charts.Legend']
_language: ja
---

# Angular 凡例

凡例は、エンドユーザーが Angular データ チャート コンポネントにプロットされたデータに関連するコンテキスト情報を使用してデータ チャートシリーズの表示を識別するのに役立ちます。プロットエリアに表示されるデータを理解しやすくするために、ほとんどのデータ チャートには凡例が少なくとも 1 つ必要ですが、必須ではなく、データ チャートはデフォルトで凡例なしで表示できます。

## Angular 凡例の例

<div class="sample-container loading" style="height: 500px">
    <iframe id="data-chart-legends-iframe" src='{environment:dvDemosBaseUrl}/charts/data-chart-legends' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);" alt="Angular 凡例の例"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="data-chart-legends-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">StackBlitz で表示
    </button>


</div>

<div class="divider--half"></div>

## 凡例概要

デフォルトでは、Angular データ チャート コンポネントはデータ チャート内のどのシリーズの凡例も表示しません。複数のシリーズに共通の凡例を表示したい場合は、凡例 オブジェクトをアプリケーションに追加してから、それをデータ チャートの Legend プロパティに設定する必要があります。

さらに、各シリーズオブジェクトの [`chartTitle`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxseriesviewercomponent.html#charttitle) プロパティを設定しない場合、凡例にデフォルトのシリーズ タイトルが使用されます。

次のコード スニペットは、Angular データ チャート コンポネントで凡例を使用する方法を示しています。

```html
<div>
  <igx-legend #legend></igx-legend>
</div>
<div>
  <igx-data-chart chartTitle="Energy Use Per Country" subtitle="Results over a two year period" height="600px" width="100%"
    [dataSource]="data" [legend]="legend">

    <igx-category-x-axis #xAxis name="xAxis" label="Country"></igx-category-x-axis>
    <igx-numeric-y-axis #yAxis name="yAxis" minimumValue=0></igx-numeric-y-axis>

    <igx-column-series name="series1" title="Coal" [xAxis]="xAxis" [yAxis]="yAxis" valueMemberPath="Coal"></igx-column-series>
    <igx-column-series name="series2" title="Hydro" [xAxis]="xAxis" [yAxis]="yAxis" valueMemberPath="Hydro"></igx-column-series>
    <igx-column-series name="series3" title="Nuclear" [xAxis]="xAxis" [yAxis]="yAxis" valueMemberPath="Nuclear"></igx-column-series>
    <igx-column-series name="series4" title="Gas" [xAxis]="xAxis" [yAxis]="yAxis" valueMemberPath="Gas"></igx-column-series>
    <igx-column-series name="series5" title="Oil" [xAxis]="xAxis" [yAxis]="yAxis" valueMemberPath="Oil"></igx-column-series>
  </igx-data-chart>
</div>
```

```ts
@ViewChild("legend")
public legend : IgxLegendComponent;
```
