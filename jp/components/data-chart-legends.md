---
title: Data Chart コンポーネント - ネイティブ Angular|Ignite UI for Angular
_description: Ignite UI for Angular Data Chart は、軸、マーカー、凡例、および注釈レイヤーのモジュール設計を提供するチャート コンポーネントです。チャート機能は、複合チャート ビューを作成するために同じチャート領域でのビジュアル要素の複数のインスタンスを利用できます。
_keywords: Ignite UI for Angular, Angular, Native Angular コンポーネント スイート, Native Angular コントロール, ネイティブ Angular コンポーネント, ネイティブ Angular コンポーネント ライブラリ, Angular チャート, Angular チャート コントロール, Angular チャート例, Angular チャート コンポーネント, Angular データ チャート
_language: ja
---

## 凡例

凡例は、エンドユーザーが [`IgxDataChart`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachart.html) コントロールにプロットされたデータに関連するコンテキスト情報を使用してチャートシリーズのビジュアルを識別するのに役立ちます。プロットエリアに表示されるデータを理解しやすくするために、ほとんどのチャートには凡例が少なくとも 1 つ必要ですが、必須ではなく、チャートはデフォルトで凡例なしで表示できます。

### デモ

<div class="sample-container loading" style="height: 500px">
    <iframe id="data-chart-legends-iframe" src='{environment:dvDemosBaseUrl}/charts/data-chart-legends' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="data-chart-legends-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">StackBlitz で開く
    </button>
</div>

<div class="divider--half"></div>

### 凡例概要

デフォルトでは、[`IgxDataChart`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachart.html) はチャート内のどのシリーズの凡例も表示しません。複数のシリーズに共通の凡例を表示したい場合は、`IgxLegend` オブジェクトをアプリケーションに追加してから、それをチャートの `Infragistics.Controls.Charts.Legend` プロパティに設定する必要があります。

さらに、各シリーズオブジェクトの `Title` プロパティを設定しないと、凡例にデフォルトのシリーズタイトルが使用されます。

次のコードスニペットは、[`IgxDataChart`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachart.html) コントロールで凡例を使用する方法を示しています。

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
