---
title: Angular データ チャート | データ可視化ツール | 軸設定 | インフラジスティックス
_description: インフラジスティックスの Angular チャート コントロールにより、軸ラベル、タイトル、目盛り、範囲、グリッド線、ギャップ、オーバーラップの構成を完全に制御できます。Ignite UI for Angular グラフ軸について説明します。
_keywords: Angular charts, data chart, axis settings, Ignite UI for Angular, Infragistics, Angular チャート, データ チャート, 軸設定, インフラジスティックス
mentionedTypes: ['XamDataChart', 'CategoryXAxis', 'NumericYAxis', 'CategoryDateTimeXAxis']
_language: ja
---

# Angular 軸設定

Ignite UI for Angular データ チャート コンポーネントでは、軸は軸線、目盛、タイトル、や軸のラベルのこの外観を設定する基本プロパティを提供します。

## Angular 軸設定の例

<div class="sample-container loading" style="height: 500px">
    <iframe id="data-chart-axis-settings-iframe" src='{environment:dvDemosBaseUrl}/charts/data-chart-axis-settings' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);" alt="Angular 軸設定の例"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="data-chart-axis-settings-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">StackBlitz で表示
    </button>


</div>

<div class="divider--half"></div>

## 軸ラベル

Ignite UI for Angular データ チャート コンポーネントは、チャートで表示されるラベルの構成、書式設定、およびラベル フォントのスタイル設定を制御することが可能です。これらのラベルの回転角度、マージン、水平および垂直方向の配置、色、余白、および表示設定を変更できます。

以下のコード例は、データ チャートのカテゴリ X 軸のラベルのスタイルを設定する方法を示しています。

```html
<igx-category-x-axis #xAxis
    name="xAxis"
    label="Country"
    labelTextStyle="9pt Verdana"
    labelTopMargin=5
    labelTextColor="gray">
</igx-category-x-axis>
```

## 軸タイトル

データ チャート コンポーネントの軸タイトル機能を使用すると、データ チャートの軸にコンテキスト情報を追加できます。さまざまなフォントスタイル、マージン、および配置を適用するなど、さまざまな方法で軸タイトルの外観をカスタマイズできます。

以下のコード例は、チャートの Ignite UI for Angular カテゴリ X 軸のタイトルを設定およびカスタマイズする方法を示しています。

```html
<igx-category-x-axis #xAxis
    name="xAxis"
    title="Country"
    titleTextColor="gray"
    titleTextStyle="12pt Verdana"
    titleAngle=0>
</igx-category-x-axis>
```

## 軸目盛

目盛りは、Angular データ チャート コンポーネントの軸上に点を表示します。スケールに特定の数値ポイント、またはカテゴリ軸にカテゴリ値を表します。データ チャート コンポーネントでは、軸上の目盛りの長さ、太さ、および色を変更できます。

以下のコード例は、データ チャートのカテゴリX軸上の目盛りの色、長さ、および太さを設定およびカスタマイズする方法を示しています。

```html
<igx-category-x-axis #xAxis
    name="xAxis"
    tickLength=10
    tickStrokeThickness=0.5
    tickStroke="black">
</igx-category-x-axis>
```

## 軸の範囲

Angular データ チャート コンポーネントでは、数値軸または時間軸の範囲の最小値と最大値を定義できます。範囲の最小値は軸の最小値で、範囲の最大値は軸の最大値です。これらは対応する軸で [`minimumValue`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxnumericaxisbasecomponent.html#minimumvalue) と [`maximumValue`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxnumericaxisbasecomponent.html#maximumvalue) オプションを設定することによって設定されます。

デフォルトでは、データ チャート コンポーネントは、データ内の対応する最小値と最大値に基づいて、数値と時間軸の範囲の最小値と最大値を計算しますが、この自動計算は、データセットには適していません。たとえば、データの最小値が 850 の場合、数値軸の [`minimumValue`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxnumericaxisbasecomponent.html#minimumvalue) を 800 に設定して、軸の最小値とデータポイントの最小値の間に 50 のスペース値ができるようにします。[`minimumValue`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxnumericaxisbasecomponent.html#minimumvalue) プロパティを使用して、同じ方法を軸の最小値と最大値に適用することができます。

以下のコード スニペットは、データ チャート コンポーネントの軸範囲を変更する方法を示しています。

```html
<igx-numeric-y-axis #yAxis
    name="yAxis"
    minimumValue=0
    maximumValue=1000>
</igx-numeric-y-axis>
```

## 軸グリッド線

Angular データ チャート コンポーネントでは、軸の [`interval`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategoryxaxiscomponent.html#interval) プロパティによって、主グリッド線と軸ラベルをその軸に描画する頻度が決まります。同様に、[`minorInterval`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategoryxaxiscomponent.html#minorinterval) プロパティは、それらの主グリッド線の間に副グリッド線が描画される頻度を指定します。

数値軸の場合、これらの間隔は数値になりますが、カテゴリ軸の場合、これらの値は線を引くのに必要なカテゴリ数の頻度を表します。たとえば、カテゴリ軸で [`interval`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategoryxaxiscomponent.html#interval) を 2 に設定した場合、主グリッド線は 2 カテゴリごとに描画されます。

対応するストロークとストロークの太さのプロパティを設定して、チャート内の軸上の間隔の色と太さを設定することもできます。

以下のコード スニペットは、データ チャートの軸上の間隔を構成する方法を示しています。

```html
<igx-numeric-y-axis #yAxis
    name="yAxis"
    interval=100
    majorStroke="black"
    majorStrokeThickness=1
    minorInterval=25
    minorStroke="gray"
    minorStrokeThickness=0.5>
</igx-numeric-y-axis>
```

## 軸間隔

データ チャート コンポーネントのカテゴリ軸の [`gap`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategoryaxisbasecomponent.html#gap) プロパティは、一連のデータ チャート間のスペースの量を決定します。

このプロパティは、0 から 1 までの数値を受け入れます。値は、シリーズ間の利用可能なピクセル数からのギャップの相対幅を表します。このプロパティを 0 に設定すると、シリーズ間にギャップがレンダリングされず、1 に設定すると最大ギャップがレンダリングされます。

以下のサンプルコードは、x 軸の間隔を設定する方法を示しています。

```html
<igx-category-x-axis #xAxis
    name="xAxis"
    label="Country"
    gap=0.125>
</igx-category-x-axis>
```

## 軸の重複

データ チャート コンポーネントのカテゴリ軸の軸 [`overlap`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategoryaxisbasecomponent.html#overlap) 機能を使用すると、レンダリングされたカテゴリの重なりを設定できます。

このプロパティは、-1 から 1 までの数値を受け入れます。値は、各シリーズ専用の使用可能なピクセル数からの相対的な重なりを表します。

このプロパティを負の値 (-1まで) に設定すると、カテゴリが互いから離れてしまい、それらの間にギャップが生じます。

このプロパティを正の値 （最大 1） に設定すると、カテゴリが互いに重なります。値が 1 の場合、チャートはカテゴリを互いの上に表示します。

以下のコード スニペットは、x 軸の [`overlap`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategoryaxisbasecomponent.html#overlap) を 0 に設定します。

```html
<igx-category-x-axis #xAxis
    name="xAxis"
    label="Country"
    overlap=0>
</igx-category-x-axis>
```
