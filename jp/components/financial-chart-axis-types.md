---
title: Angular ファイナンシャル チャート | 軸のタイプ | インフラジスティックス
_description: 軸間隔、軸ラベル、軸モード、軸範囲、軸スケール、軸目盛、軸タイトルなどのインフラジスティックス  Angular チャート コントロールの軸を設定する方法を説明します。Ignite UI for Angular ファイナンシャル グラフのサンプルを是非お試しください!
_keywords: Angular charts, financial chart, stock chart, financial axis, Ignite UI for Angular, Axis type, Infragistics, チャート, ファイナンシャル チャート, 株価チャート, 財務軸, 軸タイプ, インフラジスティックス
mentionedTypes: ['FinancialChart']
_language: ja
---

# Angular チャート軸タイプ

Angular Financial Chart コンポーネントでは、軸は軸線、目盛、タイトル、や軸のラベルの外観を設定する基本プロパティを提供します。

## Angular チャート軸タイプの例

<div class="sample-container loading" style="height: 500px">
    <iframe id="financial-chart-axis-types-iframe" src='{environment:dvDemosBaseUrl}/charts/financial-chart-axis-types' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);" alt="Angular チャート軸タイプの例"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="financial-chart-axis-types-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">StackBlitz で表示
    </button>


</div>

<div class="divider--half"></div>

デフォルトでは、ラベルを明示的に設定する必要はありません。Financial Chart コンポネントは、データ内で最初の適切なプロパティを使用し、ラベルに使用します。

## 軸間隔

Financial Chart コントロールで、[`yAxisInterval`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxfinancialchartcomponent.html#yaxisinterval) プロパティは主グリッド線および軸ラベルが軸に描画される頻度を指定します。同様に、[`yAxisMinorInterval`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxfinancialchartcomponent.html#yaxisminorinterval) プロパティは副グリッド線が軸に描画される頻度を指定します。

以下のコード スニペットは、Y 軸の間隔を設定する方法を示します。

```html
 <igx-financial-chart
    yAxisInterval="200"
    yAxisMinorInterval="50"
    yAxisMajorStroke="Black"
    yAxisMinorStroke="Gray"
    yAxisMinorStrokeThickness="0.5"
    yAxisMajorStrokeThickness="0.5" >
 </igx-financial-chart>
```

<div class="divider--half"></div>

## 軸ラベル

Angular Financial Chart コンポーネントは、チャートで表示されるラベルの構成および書式設定を制御することが可能です。回転角度、マージン、水平方向/垂直方向の配置、不透明度、パディング、および表示状態を変更できます。

以下のコード例は、スタイル プロパティを使用して x 軸のラベルをスタイル設定します。

```html
<igx-financial-chart
    xAxisLabelTextStyle="8pt Verdana"
    xAxisLabelTextColor="Gray"
    xAxisLabelTopMargin="5"
    xAxisLabelAngle="0"
    yAxisLabelTextStyle="8pt Verdana"
    yAxisLabelTextColor="Gray"
    yAxisLabelLeftMargin="5"
    yAxisLabelAngle="0"
    width="850px"
    height="600px"
    [dataSource]="data">
</igx-financial-chart>
```

<div class="divider--half"></div>

## 軸モード

Angular Financial Chart コンポーネントで X 軸および Y 軸に別のモードを設定できます。
X 軸で以下のモードを選択できます。

-   Time - このモードはデータのギャップを X 軸にスペースを用いて描画します。つまり、週末または休日に株取引がないことを示します。
-   Ordinal - このモードはデータがない日付領域を縮小します。これがデフォルト値です。

Y 軸で以下のモードを選択できます。

-   Numeric - このモードはデータの値を描画します。これがデフォルト値です。
-   PercentChange - このモードは最初のデータ ポイントに相対するパーセンテージ変更としてデータを表示します。

以下のコード例では、軸のモードを設定する方法を示します。

```html
<igx-financial-chart
    xAxisMode="time"
    yAxisMode="percentChange"
    width="850px"
    height="600px"
    [dataSource]="data">
</igx-financial-chart>
```

<div class="divider--half"></div>

## 軸の範囲

Angular Financial Chart コンポーネントで、数値軸の範囲は軸の始めと終わり、つまりデータの最小値と最大値の数値の差です。範囲の最小値は、軸の最小値です。範囲の最大値は、軸の最大値です。Financial Chart  コンポーネントは、チャート プロット領域を最大化するために、デフォルトで最小データ ポイントおよび最大データ ポイントに基づいて軸の範囲の最小値と最大値を計算します。軸の最大値と最小値の自動計算は、データ ポイントのセットに適切でない場合があります。たとえば、データの最小値が 850 の場合、y 軸の [`yAxisMinimumValue`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxfinancialchartcomponent.html#yaxisminimumvalue) プロパティを使用して軸の最小値を 800 に設定してください。これにより、軸の最小値とデータ ポイントの最小値の間に 50 のスペース値ができます。y 軸の [`yAxisMaximumValue`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxfinancialchartcomponent.html#yaxismaximumvalue) プロパティを使用して軸の最大値とデータ ポイントの最大値にも同様に適用できます。

以下のサンプル コードは、y 軸で軸の範囲を変更する方法を示します。

```html
 <igx-financial-chart
    yAxisMinimumValue="-200"
    yAxisMaximumValue="1000"
    width="850px"
    height="600px"
    [dataSource]="data">
 </igx-financial-chart>
```

<div class="divider--half"></div>

## 軸スケール

Angular Financial Chart コンポーネントで、チャートのデータが Y 軸に対数的にマップされるかどうかを制御できます。これは以下の設定で実行されます。

-   [`yAxisIsLogarithmic`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxfinancialchartcomponent.html#yaxisislogarithmic) - Y 軸がリニア スケールの代わりに対数目盛を使用するかどうかを指定します。デフォルトでこのプロパティは False に設定されます。
-   [`yAxisLogarithmBase`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxfinancialchartcomponent.html#yaxislogarithmbase) - Y 軸にデータ項目の位置をマップするときに log 関数で使用する基本値。
    これは yAxisIsLogarithmic が True の場合のみ効果があります。

以下のコード スニペットは、x 軸の目盛りの色、長さ、太さを設定します。

```html
 <igx-financial-chart
    yAxisIsLogarithmic="true"
    yAxisLogarithmBase="10"
    width="850px"
    height="600px"
    [dataSource]="data">
 </igx-financial-chart>
```

<div class="divider--half"></div>

## 軸目盛

目盛りは軸にポイントを表示します。スケールに特定の数値ポイント、またはカテゴリ軸にカテゴリ値を表します。x 軸および y 軸のラベルの長さ、太さ、色を変更できます。

以下のコード スニペットは、x 軸の目盛りの色、長さ、太さを設定します。

```html
 <igx-financial-chart
    xAxisTickLength="10"
    xAxisTickStrokeThickness="1"
    xAxisTickStroke="Gray"
    width="850px"
    height="600px"
    [dataSource]="data">
 </igx-financial-chart>
```

<div class="divider--half"></div>

## 軸タイトル

Financial Chart コンポーネントの軸タイトル機能は、チャートの x および y 軸に情報を追加できます。Financial Chart は、x 軸および y 軸のタイトルのフォント スタイル、マージン、配置などを変更してルックアンドフィールをカスタマイズできます。

以下のコード例は、x 軸と y 軸のタイトルを設定してカスタマイズします。

```html
<igx-financial-chart
      xAxisTitle="Data Range"
      xAxisTitleTextColor="Black"
      xAxisTitleTextStyle="15pt Times New Roman|Georgia|Serif"
      xAxisTitleAngle="0"
      yAxisTitle="Stock Prices ($)"
      yAxisTitleTextColor="Black"
      yAxisTitleAngle="90"
      width="850px"
      height="600px"
      [dataSource]="data">
 </igx-financial-chart>
```

<div class="divider--half"></div>
