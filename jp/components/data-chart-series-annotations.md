---
title: データ チャート | 可視化ツール | Ignite UI for Angular | インフラジスティックス | 注釈
_description: 同じプロット領域に視覚要素の複数インスタンスを表示するデータ チャートを作成し、複合チャートビューを作成します。
_keywords: data chart, Ignite UI for Angular, Infragistics, データ チャート, インフラジスティックス
mentionedTypes: ['XamDataChart']
_language: ja
---

## シリーズの注釈

Angular データ チャート コンポーネントは、チャートにプロットされたポイントに関するコンテキスト情報を注釈として表示するレイヤーをサポートします。シリーズのみでは把握できないような、より多くの情報をエンドユーザーに表示する場合に役立つコンポーネントです。

### サンプル

<div class="sample-container loading" style="height: 500px">
    <iframe id="data-chart-series-annotations-iframe" src='{environment:dvDemosBaseUrl}/charts/data-chart-series-annotations' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="data-chart-series-annotations-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">StackBlitz で表示
    </button>
</div>

<div class="divider--half"></div>

### コールアウト レイヤー

Angular データ チャート コンポーネントはチャート既存または新しいデータの注釈を表示します。注釈は、データソース内の指定されたデータ値の横に表示されます。

コールアウト注釈を使用して、メモやデータポイントに関する特定の詳細など、ユーザーに追加情報を表示します

複数のコールアウト レイヤーを異なる設定で使用する場合は、コールアウトを設定して特定のシリーズをターゲットにできます。これには `TargetSeries` プロパティを設定します。

以下は、チャートにコールアウト レイヤーを追加する方法を示すコードスニペットです。

```html
<igx-data-chart dataSource={this.data} width="100%" height="400px">

   <igx-category-x-axis name="xAxis"></igx-category-x-axis>
   <igx-numeric-y-axis  name="yAxis"></igx-numeric-y-axis>

   <igx-column-series name="series1"
       xAxisName="xAxis"
       yAxisName="yAxis"
       valueMemberPath="Value1">
   </igx-column-series>
   <igx-column-series name="series2"
       xAxisName="xAxis"
       yAxisName="yAxis"
       valueMemberPath="Value2">
   </igx-column-series>

   <igx-callout-layer name="callout"
       xMemberPath="Index"
       yMemberPath="Value"
       labelMemberPath="Label">
   </igx-callout-layer>
</igx-data-chart>
```

### 十字線レイヤー

十字線レイヤーは、各シリーズが個別の線をセットでレンダリングするように設定されているすべてのシリーズの実際の値で交差する交差ラインとしてレンダリングされます。

デフォルトでは Angular データ チャート コンポーネントのすべてのシリーズをターゲットとするように、特定のシリーズを 1 つだけ表示するように十字線レイヤーを構成できます。これを実行するには、`TargetSeries` プロパティを設定します。

デフォルトでは、十字線の色は、相互作用しているシリーズの色です。ただし、このデフォルト値は、十字線に使用される色を選択できるようにオーバーライドできます。これは、`Brush` プロパティを設定することによって行います。

以下は、チャートに十字線レイヤーを追加する方法を示すコードスニペットです。

```html
<igx-data-chart dataSource={this.data} width="100%" height="400px">
   <igx-category-x-axis name="xAxis"></igx-category-x-axis>
   <igx-numeric-y-axis  name="yAxis"></igx-numeric-y-axis>

   <igx-column-series name="series1"
       xAxisName="xAxis"
       yAxisName="yAxis"
       valueMemberPath="Value1">
   </igx-column-series>
   <igx-column-series name="series2"
       xAxisName="xAxis"
       yAxisName="yAxis"
       valueMemberPath="Value2">
   </igx-column-series>

   <igx-crosshair-layer name="crosshair"></igx-crosshair-layer>
</igx-data-chart>
```

### 最終値レイヤー

最終値レイヤーには、Angular データ チャート コンポーネントのシリーズの最終値を表す注釈がチャートの軸に沿って表示されます。

複数の最終値レイヤーを異なる設定で使用したい場合は、注釈を設定して特定のシリーズをターゲットにすることができます。これには `TargetSeries` プロパティを設定します。

以下は、チャートに最終値レイヤーを追加する方法を示すコードスニペットです。

```html
<igx-data-chart dataSource={this.data} width="100%" height="400px">
   <igx-category-x-axis name="xAxis"></igx-category-x-axis>
   <igx-numeric-y-axis name="yAxis"></igx-numeric-y-axis>

   <igx-column-series name="series1"
       xAxisName="xAxis"
       yAxisName="yAxis"
       valueMemberPath="Value1">
   </igx-column-series>
   <igx-column-series name="series2"
       xAxisName="xAxis"
       yAxisName="yAxis"
       valueMemberPath="Value2">
   </igx-column-series>

   <igx-final-value-layer name="finalValue"></igx-final-value-layer>
</igx-data-chart>
```
