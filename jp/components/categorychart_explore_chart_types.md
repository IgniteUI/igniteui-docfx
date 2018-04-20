---
title: チャート タイプの選択
_description: Ignite UI for Angular Category Chart コンポーネントは複雑なデータ ビジュアライゼーションを API によって簡素化できます。ユーザーがデータのコレクションまたはコレクションのグループにバインドし、データを指定するプロパティを設定後、チャート コントロールが残りの作業を処理します。
_keywords: Ignite UI for Angular, Angular, ネイティブ Angular コンポーネント スィート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント, ネイティブ Angular コンポーネント ライブラリ, Angular チャート, Angular チャート コントロール, Angular チャート例, Angular チャート コンポーネント, Angular Category Chart
_language: ja
---
## チャート タイプの選択

Category Chart コントロールでは、軸は軸線、目盛、タイトル、や軸のラベルの外観を設定する基本プロパティを提供します。

### チャート タイプのデモ

<div class="sample-container" style="height: 550px">
    <iframe id="category-chart-axis-sample-iframe" src='{environment:demosBaseUrl}/category-chart-axis-sample' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn"   data-iframe-id="category-chart-axis-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で開く
    </button>
</div>

<div class="divider--half"></div>

デフォルトでは、ラベルを明示的に設定する必要はありません。Category Chart は、提供したデータ内で最初の適切な文字列プロパティを使用し、ラベルに使用するプロパティを明示的に設定します。

### 軸ラベル

Category Chart コントロールは、チャートで表示されるラベルの構成、書式設定、およびフォント スタイル設定を制御することが可能です。回転角度、余白、水平方向/垂直方向の配置、不透明度、パディング、および表示状態を変更できます。

以下のコード例は、スタイル プロパティを使用して x 軸のラベルをスタイル設定します。

```html
<igx-category-chart
    [dataSource]="data"
    width="700px"
    height="500px"
    xAxisLabelTextStyle="16pt Verdana"
    xAxisLabelRightMargin="14"
    xAxisLabelTextColor="red">
</igx-category-chart>
```

<div class="divider--half"></div>

### 軸タイトル
Category Chart コントロールの軸タイトル機能は、チャートの x および y 軸に情報を追加できます。Category Chart は、x 軸および y 軸のタイトルのフォント スタイル、マージン、配置などを変更してルックアンドフィールをカスタマイズできます。

以下のコード例は、x 軸と y 軸のタイトルを設定してカスタマイズします。

```html
 <igx-category-chart
      [dataSource]="data"
      width="700px"
      height="500px"
      xAxisTitle="Country"
      xAxisTitleTextColor="blue"
      xAxisTitleTextStyle="20pt Times New Roman|Georgia|Serif"
      yAxisTitle="Millions of People"
      yAxisTitleAngle="90"
      yAxisTitleTextColor="red">
 </igx-category-chart>
```

### 軸目盛
目盛りは軸にポイントを表示します。スケールに特定の数値ポイント、またはカテゴリ軸にカテゴリ値を表します。x 軸および y 軸のラベルの長さ、太さ、色を変更できます。

以下のコードスニペットは、x 軸の目盛りの色、長さ、太さを設定します。

```html
 <igx-category-chart
      [dataSource]="data"
      width="700px"
      height="500px"
      xAxisTickLength="10"
      xAxisTickStrokeThickness="3"
      xAxisTickStroke="red">
 </igx-category-chart>
```

<div class="divider--half"></div>

### 軸の範囲
Category Chart コントロールで、数値軸の範囲は軸の始めと終わり、つまりデータの最小値と最大値の数値の差です。範囲の最小値は、軸の最小値です。範囲の最大値は、軸の最大値です。デフォルトで、Category Chart コントロールは、チャート プロット領域を最大化するために、最小データ ポイントおよび最大データ ポイントに基づいて軸の範囲の最小値と最大値を計算します。軸の最小値と最大値の自動計算は、データ ポイントのセットに適切でない場合があります。たとえば、データの最小値が 850 の場合、y 軸の `yAxisMinimumValue` プロパティを使用して y 軸の最小値を 800 に設定したい場合があります。これにより、軸の最小値とデータ ポイントの最小値の間に 50 のスペース値ができることになります。y 軸の `yAxisMaximumValue` プロパティを使用すれば軸の最大値とデータ ポイントの最大値にも同様のことが適用できます。

以下のサンプル コードは、y 軸で軸の範囲を変更する方法を示します。

```html
 <igx-category-chart
      [dataSource]="data"
      width="700px"
      height="500px"
      yAxisMinimumValue="-200"
      yAxisMaximumValue="1000">
 </igx-category-chart>
```

<div class="divider--half"></div>

### 軸間隔
Category Chart コントロールで、軸の主間隔は主グリッド線および軸ラベルが軸に描画される頻度を指定します。同様に、軸副間隔は副グリッド線が軸に描画される頻度を指定します。

以下のコード スニペットは、Y 軸の間隔を設定する方法を示します。

```html
 <igx-category-chart
    [dataSource]="data"
    width="700px"
    height="500px"
    yAxisInterval="100"
    yAxisMinorInterval="10" 
    yAxisMinorStroke="Red"    
    yAxisMajorStroke="Green"  
    yAxisMinorStrokeThickness="1"
    yAxisMajorStrokeThickness="1">
 </igx-category-chart>
```

<div class="divider--half"></div>

### 軸間隔

Category Chart コントロールの軸間隔機能は、チャート シリーズ間の間隔を設定できます。

プロパティ値は、0 と 1 の間の float 値である必要があります。値は、シリーズ間で利用可能なピクセル数から間隔の相対幅を表します。
   0 - シリーズ間の間隔は描画されません。
   1 - シリーズ間に利用可能な最大の間隔が描画されます。

Category Chart の `xAxisGap` を `0.5` に設定するには、以下のコードを使用できます。

```html
<igx-category-chart
    [dataSource]="data"
    width="700px"
    height="500px"
    chartTitle="Countries population"
    xAxisTitle="Countries"
    yAxisTitle="Millions of people"
    chartType="column"
    xAxisGap="0.5">
</igx-category-chart>
```

<div class="divider--half"></div>

### 軸の重複

Category Chart コントロールの軸重複機能は、描画されるカテゴリの重なりを設定できます。

プロパティ値は、-1 と 1 の間の float 値である必要があります。値は、各シリーズに利用可能なピクセル数から相対する重複を示します。

* 負の値 (-1 以上): カテゴリは互いに生成する間隔によって引き離されます。
* 正の数 (1 以下): カテゴリが互いに重なります。値 1 は、互いのチャート上にカテゴリを描画します。

以下のコード例は、`xAxisOverlap` を互いに重なり合うカテゴリを描画する際に利用可能なスペースの半分である 0.5 に設定します。

```html
 <igx-category-chart
    [dataSource]="data"
    width="700px"
    height="500px"
    chartTitle="Countries population"
    xAxisTitle="Countries"
    yAxisTitle="Millions of people"
    chartType="column"
    xAxisOverlap="0.5">
</igx-category-chart>
```

<div class="divider--half"></div>