---
title: Angular チャートおよびグラフ | データ可視化ツール | 軸オプション | インフラジスティックス
_description: インフラジスティックスの Angular チャート コントロールを使用して、数値、カテゴリ、日付時間軸などのさまざまな軸タイプを通じてデータをプロットします。Ignite UI for Angular グラフ軸について説明します。
_keywords: Angular charts, category chart, Axis Labels, Axis Range, Ignite UI for Angular, Infragistics, Angular チャート, カテゴリ チャート, 軸ラベル, 軸範囲, インフラジスティックス
mentionedTypes: ['CategoryChart']
_language: ja
---

# Angular 軸オプション

Ignite UI for Angular カテゴリ チャート コンポーネントは、軸は軸線、目盛、タイトル、や軸のラベルの外観を設定するための基本的なプロパティを提供します。

## Angular 軸オプションの例

<div class="sample-container loading" style="height: 500px">
    <iframe id="category-chart-axis-options-iframe" src='{environment:dvDemosBaseUrl}/charts/category-chart-axis-options' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);" alt="Angular 軸オプションの例"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="category-chart-axis-options-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">StackBlitz で表示
    </button>


</div>

<div class="divider--half"></div>

デフォルトでは、ラベルを明示的に設定する必要はありません。カテゴリ チャート コンポーネントは、指定したデータ内の最初の適切な文字列プロパティを使用し、ラベルに使用するプロパティを明示的に設定します。

## 軸ラベル

Ignite UI for Angular カテゴリ チャート コンポーネントは、チャートで表示されるラベルの構成、書式設定、およびラベル フォントのスタイル設定を制御することが可能です。回転角度、マージン、水平方向/垂直方向の配置、不透明度、パディング、および表示状態を変更できます。

以下のコード例は、スタイル プロパティを使用して x 軸のラベルをスタイル設定します。

```html
<igx-category-chart
    [dataSource]="data"
    width="700px"
    height="500px"
    xAxisLabelTextStyle="10pt Verdana"
    xAxisLabelTopMargin="5"
    xAxisLabelTextColor="gray"
    yAxisLabelTextStyle="10pt Verdana"
    yAxisLabelRightMargin="5"
    yAxisLabelTextColor="gray">
</igx-category-chart>
```

<div class="divider--half"></div>

## 軸タイトル

Ignite UI for Angular カテゴリ チャートの軸タイトル機能は、チャートの x および y 軸に情報を追加できます。カテゴリ チャートは、x 軸および y 軸のタイトルのフォント スタイル、マージン、配置などを変更してルックアンドフィールをカスタマイズできます。

以下のコード例は、x 軸と y 軸のタイトルを設定してカスタマイズします。

```html
 <igx-category-chart
      [dataSource]="data"
      width="700px"
      height="500px"
      xAxisTitle="Countries"
      xAxisTitleTextColor="gray"
      xAxisTitleTextStyle="12pt Verdana"
      xAxisTitleAngle="0"
      yAxisTitle="Trillions of Watt-hours (TWh)"
      yAxisTitleTextStyle="12pt Verdana"
      yAxisTitleTextColor="gray"
      yAxisTitleAngle="90"
      yAxisTitleLeftMargin="5">
 </igx-category-chart>
```

## 軸目盛

目盛りは軸にポイントを表示します。スケールに特定の数値ポイント、またはカテゴリ軸にカテゴリ値を表します。x 軸および y 軸のラベルの長さ、太さ、色を変更できます。

以下のコード スニペットは、x 軸の目盛りの色、長さ、太さを設定します。

```html
 <igx-category-chart
      [dataSource]="data"
      width="700px"
      height="500px"
      xAxisTickLength="15"
      xAxisTickStrokeThickness="2"
      xAxisTickStroke="gray"
      yAxisTickLength="0">
 </igx-category-chart>
```

<div class="divider--half"></div>

## 軸の範囲

カテゴリ チャート コンポーネントで、数値軸の範囲は軸の始めと終わり、つまりデータの最小値と最大値の数値の差です。範囲の最小値は、軸の最小値です。範囲の最大値は、軸の最大値です。カテゴリ チャート コンポーネント、チャート プロット領域を最大化するために、デフォルトで最小データ ポイントおよび最大データ ポイントに基づいて軸の範囲の最小値と最大値を計算します。軸の最大値と最小値の自動計算は、データ ポイントのセットに適切でない場合があります。たとえば、データの最小値が 850 の場合、y 軸の [`yAxisMinimumValue`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategorychartcomponent.html#yaxisminimumvalue) プロパティを使用して軸の最小値を 800 に設定してください。これにより、軸の最小値とデータ ポイントの最小値の間に 50 のスペース値ができます。y 軸の [`yAxisMinimumValue`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategorychartcomponent.html#yaxisminimumvalue) プロパティを使用して軸の最大値とデータ ポイントの最大値にも同様に適用できます。

以下のサンプル コードは、y 軸で軸の範囲を変更する方法を示します。

```html
 <igx-category-chart
      [dataSource]="data"
      width="700px"
      height="500px"
      yAxisMinimumValue="0"
      yAxisMaximumValue="1000">
 </igx-category-chart>
```

<div class="divider--half"></div>

## 軸間隔

カテゴリ チャート コンポーネントで、[`yAxisInterval`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategorychartcomponent.html#yaxisinterval) プロパティは主グリッド線および軸ラベルが軸に描画される頻度を指定します。同様に、[`yAxisMinorInterval`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategorychartcomponent.html#yaxisminorinterval) プロパティは副グリッド線が軸に描画される頻度を指定します。

以下のコード スニペットは、Y 軸の間隔を設定する方法を示します。

```html
<igx-category-chart
    [dataSource]="data"
    width="700px"
    height="500px"
    yAxisInterval="100"
    yAxisMajorStroke="black"
    yAxisMajorStrokeThickness="1"
    yAxisMinorInterval="20"
    yAxisMinorStroke="gray"
    yAxisMinorStrokeThickness="0.5">
</igx-category-chart>
```

<div class="divider--half"></div>

## 軸間隔

カテゴリ チャートの軸間隔機能は、チャート シリーズ間の間隔を設定できます。

プロパティ値は、0 と 1 の間の float 値である必要があります。この値は、シリーズ間の利用可能なピクセル数で間隔の相対幅を表します。
   0 - シリーズ間に間隔は描画されません。
   1 - シリーズ間に利用可能な最大の間隔が描画されます。

カテゴリ チャートの [`xAxisGap`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategorychartcomponent.html#xaxisgap) を `0.125` に設定するには、以下のコードを使用します。

```html
<igx-category-chart
    [dataSource]="data"
    width="700px"
    height="500px"
    xAxisGap="0.125">
</igx-category-chart>
```

<div class="divider--half"></div>

## 軸の重複

カテゴリ チャート コンポーネントの軸重複機能は、描画されるカテゴリの重なりを設定できます。

プロパティ値は、-1 と 1 の間の float 値である必要があります。値は、各シリーズ専用の使用可能なピクセル数からの相対的な重なりを表します。

-   負の値 (-1 以上): カテゴリは互いに生成する間隔によって引き離されます。
-   正の数 (1 以下): カテゴリが互いに重なります。値 1 は、互いのチャート上にカテゴリを描画します。

以下のコード例では、[`xAxisOverlap`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategorychartcomponent.html#xaxisoverlap) を 0 に設定します。

```html
<igx-category-chart
    [dataSource]="data"
    width="700px"
    height="500px"
    xAxisOverlap="0">
</igx-category-chart>
```

<div class="divider--half"></div>
