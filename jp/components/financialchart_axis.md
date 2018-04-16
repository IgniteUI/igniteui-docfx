---
title: Financial Chart コンポーネント
_description: Ignite UI for Angular Financial Chart コンポーネントを使用して、詳細情報のエントリ ポイントとして、ダッシュボード、テキスト、画像、アイコン、ボタンなどを表示します。
_keywords: Ignite UI for Angular, データ ビジュアライゼーション, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スィート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, Angular Chart コンポーネント, Angular Financial Chart コンポーネント, Angular Chart コントロール, Angular Financial Chart コントロール
_language: ja
---
## Financial Chart 軸 

Financial Chart コントロールでは、軸は軸線、目盛、タイトル、や軸のラベルの外観を設定する基本プロパティを提供します。

デフォルトでは、ラベルを明示的に設定する必要はありません。Financial Chart は、データ内で最初の適切なプロパティを使用し、ラベルに使用します。

<div class="divider"></div>

### Financial Chart 軸デモ

<div class="sample-container" style="height: 280px">
    <iframe id="financial-chart-axis-sample-iframe" src='{environment:demosBaseUrl}/financial-chart-axis-sample' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn"   data-iframe-id="financial-chart-axis-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で開く
    </button>
</div>

<div class="divider--half"></div>

### 軸ラベル

Financial Chart コントロールは、チャートで表示されるラベルの構成および書式設定を制御することが可能です。回転角度、余白、水平方向/垂直方向の配置、不透明度、パディング、および表示状態を変更できます。

以下のコード例は、スタイル プロパティを使用して x 軸のラベルをスタイル設定します。

```html
<igx-financial-chart
    [dataSource]="data"
    width="850px"
    height="600px"
    xAxisLabelTextStyle="16pt Verdana"
    xAxisLabelRightMargin="14"
    xAxisLabelTextColor="red">
</igx-financial-chart>
```
<div class="divider--half"></div>

### 軸タイトル
Financial Chart コントロールの軸タイトル機能は、チャートの x および y 軸に情報を追加できます。Financial Chart は、x 軸および y 軸のタイトルのフォント スタイル、マージン、配置などを変更してルックアンドフィールをカスタマイズできます。

以下のコード例は、x 軸と y 軸のタイトルを設定してカスタマイズします。

```html
 <igx-financial-chart
      [dataSource]="data"
      width="850px"
      height="600px"
      xAxisTitle="Country"
      xAxisTitleTextColor="blue"
      xAxisTitleTextStyle="20pt Times New Roman|Georgia|Serif"
      yAxisTitle="Millions of People"
      yAxisTitleAngle="90"
      yAxisTitleTextColor="red">
 </igx-financial-chart>
```
<div class="divider--half"></div>

### 軸目盛
目盛りは軸にポイントを表示します。スケールに特定の数値ポイント、またはカテゴリ軸にカテゴリ値を表します。x 軸および y 軸のラベルの長さ、太さ、色を変更できます。

以下のコードスニペットは、x 軸の目盛りの色、長さ、太さを設定します。

```html
 <igx-financial-chart
      [dataSource]="data"
      width="850px"
      height="600px"
      xAxisTickLength="10"
      xAxisTickStrokeThickness="3"
      xAxisTickStroke="red">
 </igx-financial-chart>
```
<div class="divider--half"></div>

### 軸の範囲
Financial Chart コントロールで、数値軸の範囲は軸の始めと終わり、つまりデータの最小値と最大値の数値の差です。範囲の最小値は、軸の最小値です。範囲の最大値は、軸の最大値です。デフォルトで、Financial Chart コントロールは、チャート プロット領域を最大化するために、最小データ ポイントおよび最大データ ポイントに基づいて軸の範囲の最小値と最大値を計算します。
軸の最小値と最大値の自動計算は、データ ポイントのセットに適切でない場合があります。たとえば、データの最小値が 850 の場合、y 軸の `yAxisMinimumValue` プロパティを使用して軸の最小値を 800 に設定したい場合があります。これにより、軸の最小値とデータ ポイントの最小値の間に 50 のスペース値ができることになります。y 軸の `yAxisMaximumValue` プロパティを使用して軸の最大値とデータ ポイントの最大値にも同様に適用できます。

以下のサンプル コードは、y 軸で軸の範囲を変更する方法を示します。

```html
 <igx-financial-chart
      [dataSource]="data"
      width="850px"
      height="600px"
      yAxisMinimumValue="-200"
      yAxisMaximumValue="1000">
 </igx-financial-chart>
```
<div class="divider--half"></div>

### 軸間隔
Financial Chart コントロールで、軸の主間隔は主グリッド線および軸ラベルが軸に描画される頻度を指定します。同様に、軸副間隔は副グリッド線が軸に描画される頻度を指定します。

以下のコード スニペットは、Y 軸の間隔を設定する方法を示します。

```html
 <igx-financial-chart
    [dataSource]="data"
    width="850px"
    height="600px"
    yAxisInterval="100"
    yAxisMinorInterval="10" 
    yAxisMinorStroke="Red"    
    yAxisMajorStroke="Green"  
    yAxisMinorStrokeThickness="1"
    yAxisMajorStrokeThickness="1">
 </igx-financial-chart>
```
<div class="divider--half"></div>