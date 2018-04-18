---
title: Financial Chart ペイン
_description: Ignite UI for Angular Financial Chart コンポーネントは、財務データを表示するタッチ対応、高いパフォーマンス、軽量なチャート コントロールです。
_keywords: Ignite UI for Angular, データ ビジュアライゼーション, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スィート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, Angular Chart コンポーネント, Angular Financial Chart コンポーネント, Angular Chart コントロール, Angular Financial Chart コントロール
_language: ja
---
## Financial Chart ペイン

Financial Chart は財務データを表示する複数のペインがあります。

* インジケーター ペイン - すべての財務指標を別のチャートに描画し、BollingerBands および PriceChannel オーバーレイが Y 軸と同じ値範囲を使用するために価格ペインに描画されます。
* 価格ペイン - 折れ線、ローソク足、棒 (OHLC)、トレンドライン、および財務オーバーレイを使用して価格を描画します。
* ボリューム ペイン - 柱状、折れ線、およびエリアのチャート タイプを使用して出来高を描画します。
* ズーム ペイン - すべてのペインのズームを制御します。

<div class="divider"></div>

### 財務インジケーター ペイン デモ
<div class="sample-container" style="height: 650px">
    <iframe id="financial-chart-indicator-pane-sample-iframe" src='{environment:demosBaseUrl}/financial-chart-indicator-pane-sample' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn"   data-iframe-id="financial-chart-indicator-pane-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で開く
    </button>
</div>

### インジケーター ペイン
財務指標は、株価の動きの計測やトレンドを確認するためにトレーダーによって使用されます。これらのインジケーターは、同じ Y 軸を共有しないため価格ペインの下に表示されます。

既定では、インジケーター ペインは表示されません。ツールバーを使用してランタイムに表示するインジケーターを選択できます。ペインを表示するには、以下のコードのようにインジケーター タイプを設定する必要があります。

```html
 <igx-financial-chart
    [dataSource]="data"
    width="850px"
    height="600px"
    indicatorTypes="AverageTrueRange">
 </igx-financial-chart>
```
<div class="divider"></div>

### ボリューム ペイン
ボリューム ペインは指定した期間で取引された株式の数を表します。出来高の低さは関心が低いことを示し、出来高の多さは取引が多く、関心が高いことを示します。柱状、折れ線、またはエリア チャート タイプを使用して表示できます。ツールバーでチャート タイプを選択すると、ランタイムにデータを表示するボリューム ペインが表示されます。ペインを表示するには、以下のコードのようにボリューム タイプを設定する必要があります。

### 財務ボリューム ペイン デモ
<div class="sample-container" style="height: 650px">
    <iframe id="financial-chart-volume-pane-sample-iframe" src='{environment:demosBaseUrl}/financial-chart-volume-pane-sample' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn"   data-iframe-id="financial-chart-volume-pane-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で開く
    </button>
</div>

```html
 <igx-financial-chart
    [dataSource]="data"
    width="850px"
    height="600px"
    volumeType="column">
 </igx-financial-chart>
```

<div class="divider"></div>

### 価格ペイン
このペインは、在庫価格を表示し、経時的な在庫の高値、安値、始値、終値を示します。さらに、トレンドラインおよびオーバーレイを表示できます。ツールバーからチャート タイプを選択できます。デフォルトで、チャート タイプは `auto` に設定されています。次のコードに示すように、デフォルト設定をオーバーライドできます。

 ```html
 <igx-financial-chart
    [dataSource]="data"
    width="850px"
    height="600px"
    chartType="line">
 </igx-financial-chart>
```

### ズーム ペイン
このペインはすべての表示されるペインのズームを制御します。このペインはデフォルトで表示されます。以下のコードのように `zoomSliderType` を `none` に設定すると機能を無効にできます。

```html
 <igx-financial-chart
    [dataSource]="data"
    width="850px"
    height="600px"
    zoomSliderType="none">
 </igx-financial-chart>
```